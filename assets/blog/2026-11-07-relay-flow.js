// Animated relay network for the 2026-11-07 blog post.
// Replaces the fallback img inside each .relay-flow container
// with an SVG built from the hand-drawn node sprite;
// render(t) is pure in t, the rAF loop only advances t.
(() => {
  "use strict";
  const script = document.currentScript;
  const NS = "http://www.w3.org/2000/svg";
  const SHEET = ["2026-11-07-relay-flow-nodes.png", 601, 259];
  const BLUE = [31, 120, 209], RED = [212, 42, 42], BLACK = [0, 0, 0];
  const VIEW = [-14, -14, 1128, 524];
  const TR = 800, RESET = 1000, DWELL = 220;

  // id: [x, y, w, h, sheet x, sheet y, cx, cy, half width, half height, hull]
  const NODES = {
    A: [2, 179, 188, 121, 0, 0, 96, 239, 88, 55, "15,239 40,209 57,196 69,193 91,192 147,201 153,205 170,229 176,244 170,257 158,267 109,286 98,286 53,281 32,274 25,266"],
    B: [928, 190, 170, 113, 0, 132, 1012, 246, 80, 51, "941,240 948,227 961,215 977,207 997,203 1042,208 1061,213 1073,221 1084,233 1082,248 1076,267 1073,270 1056,281 1024,289 1000,287 954,271 946,260"],
    1: [348, 0, 134, 122, 190, 0, 414, 58, 62, 58, "361,97 364,34 369,7 465,12 468,23 467,108 362,104"],
    2: [358, 188, 139, 130, 326, 0, 427, 252, 64, 60, "371,201 482,210 482,300 404,304 378,302 375,299 371,275"],
    3: [362, 380, 132, 116, 467, 0, 428, 440, 60, 54, "375,464 378,400 381,393 478,395 480,398 480,459 478,479 464,486 375,485"],
    4: [644, 2, 132, 123, 172, 132, 710, 63, 60, 56, "657,16 761,16 761,109 658,111"],
    5: [646, 189, 128, 125, 306, 132, 710, 251, 58, 57, "659,222 661,204 760,203 759,298 662,300"],
    6: [661, 376, 124, 120, 436, 132, 722, 436, 56, 56, "674,394 676,390 680,389 771,391 767,483 679,484"],
  };
  const MINE = { A: [1, 2, 3], B: [4, 5, 6] };

  // via: [Alice's sending relay, Bob's sending relay]
  const PHASES = [
    { broken: [], gone: [], via: [1, 6], caption: "All relays up: each message reaches all of the recipient's relays" },
    { broken: [1, 6], gone: [], via: [2, 5], caption: "Two relays broken: Alice and Bob send through other relays, chatting continues" },
    { broken: [6], gone: [2, 5], via: [1, 4], caption: "One relay is back, two are gone, one is still broken: chatting continues" },
  ];

  const clamp = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
  const ease = (x) => ((x = clamp(x)), x * x * (3 - 2 * x));
  const rgb = (c) => `rgb(${c})`;
  const mix = (a, b, k) => rgb(a.map((v, i) => Math.round(v + (b[i] - v) * k)));

  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return parent ? parent.appendChild(e) : e;
  }

  function setup(box) {
    const img = box.querySelector("img");
    let seed = 11;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647 - 0.5) * 2;
    const svg = el("svg", { viewBox: VIEW.join(" "), role: "img", "aria-label": img ? img.alt : "" });
    svg.style.cssText = "display:block;width:100%;height:auto";
    const [gLines, gGlow, gTok, gNodes, gMarks] = [0, 0, 0, 0, 0].map(() => el("g", {}, svg));
    const href = new URL(SHEET[0], script ? script.src : img.src).href;

    function curve(p, q, bow) {
      const [dx, dy] = [q[0] - p[0], q[1] - p[1]], len = Math.hypot(dx, dy);
      const c = [(p[0] + q[0]) / 2 - (dy / len) * bow, (p[1] + q[1]) / 2 + (dx / len) * bow];
      return { p, q, c, len, d: `M${p}Q${c} ${q}` };
    }
    const at = (k, s) => [0, 1].map((i) => (1 - s) ** 2 * k.p[i] + 2 * (1 - s) * s * k.c[i] + s * s * k.q[i]);
    const jit = (p, r) => [p[0] + rnd() * r, p[1] + rnd() * r];

    const nodes = {};
    for (const id in NODES) {
      const [x, y, w, h, sx, sy, cx, cy, hw, hh, hull] = NODES[id];
      const n = (nodes[id] = { id, cx, cy, hw, hh, oval: !+id });
      n.glow = el("polygon", { points: hull, fill: "none", stroke: rgb(BLUE), "stroke-width": 28, "stroke-linejoin": "round", opacity: 0 }, gGlow);
      n.g = el("g", {}, gNodes);
      el("polygon", { points: hull, fill: "#fff", stroke: "#fff", "stroke-width": 8 }, n.g);
      n.img = el("svg", { x, y, width: w, height: h, viewBox: `${sx} ${sy} ${w} ${h}` }, n.g);
      el("image", { href, width: SHEET[1], height: SHEET[2] }, n.img);
      if (n.oval) {
        n.ring = el("polygon", { points: hull, fill: "none", stroke: rgb(BLUE), "stroke-width": 4, opacity: 0 }, gGlow);
        continue;
      }
      n.x = el("g", { fill: "none", stroke: rgb(RED), "stroke-linecap": "round", opacity: 0 }, gMarks);
      const [ax, ay] = [hw - 16, hh - 16];
      n.bars = [[-1, -1, 1, 0.9], [0.9, -1, -1, 0.95]].flatMap(([a, b, c, d]) => {
        const k = curve(jit([cx + a * ax, cy + b * ay], 4), jit([cx + c * ax, cy + d * ay], 4), rnd() * 9);
        const k2 = curve(jit(k.p, 3), jit(k.q, 3), rnd() * 9);
        return [[k, 6.5], [k2, 2.5]].map(([q, sw]) => [el("path", { d: q.d, "stroke-width": sw, "stroke-dasharray": `${q.len} ${q.len}` }, n.x), q.len]);
      });
    }

    // distance from the node center to its outline in direction u
    const reach = (n, ux, uy) =>
      n.oval ? 1 / Math.hypot(ux / n.hw, uy / n.hh) : Math.min(n.hw / Math.abs(ux || 1e-9), n.hh / Math.abs(uy || 1e-9));

    const edges = [];
    const pairs = [[1, 2], [2, 3], [4, 5], [5, 6]];
    for (const a of MINE.A) pairs.push(["A", a], ...MINE.B.map((b) => [a, b]));
    for (const b of MINE.B) pairs.push(["B", b]);
    for (const [a, b] of pairs) {
      const [na, nb] = [nodes[a], nodes[b]];
      const len = Math.hypot(nb.cx - na.cx, nb.cy - na.cy);
      const [ux, uy] = [(nb.cx - na.cx) / len, (nb.cy - na.cy) / len];
      // relay lines stop just inside the box, so no line shows through a fading relay
      const [ra, rb] = [reach(na, ux, uy), reach(nb, ux, uy)];
      const [ia, ib] = [na.oval ? 0 : ra - 16, nb.oval ? 0 : rb - 16];
      const k = curve([na.cx + ux * ia, na.cy + uy * ia], [nb.cx - ux * ib, nb.cy - uy * ib], rnd() * 6);
      const e = { a, b, k, ra: ra - ia, rb: rb - ib };
      e.g = el("g", { fill: "none", "stroke-linecap": "round" }, gLines);
      e.ok = el("g", {}, e.g);
      el("path", { d: k.d, stroke: "#383838", "stroke-width": 2.6 }, e.ok);
      el("path", { d: curve(jit(k.p, 1.5), jit(k.q, 1.5), rnd() * 6).d, stroke: "#555", "stroke-width": 1.2, opacity: 0.55 }, e.ok);
      e.dash = el("path", { d: k.d, stroke: "#999", "stroke-width": 2.2, "stroke-dasharray": "8 9", opacity: 0 }, e.g);
      edges.push(e);
    }
    const edge = (a, b) => edges.find((e) => (e.a == a && e.b == b) || (e.a == b && e.b == a));

    // schedule every hop, relay glow and arrival pulse of the loop
    const hops = [], glows = [], pulses = [], starts = [];
    function hop(from, to, t, fail) {
      const e = edge(from, to), fwd = e.a == from;
      const [r0, r1] = fwd ? [e.ra, e.rb] : [e.rb, e.ra];
      // copies slide 12 units under both boxes, a failing one stops 18 short of the broken box
      const vis = e.k.len - r0 - r1 + (fail ? -18 : 24);
      const s0 = (r0 - 12) / e.k.len, s1 = s0 + vis / e.k.len;
      const h = { e, t, fail, dur: 400 + 1.9 * vis, s: fwd ? [s0, s1] : [1 - s0, 1 - s1] };
      h.el = el("g", { display: "none" }, gTok);
      h.body = el("circle", { r: 12, stroke: "#fff", "stroke-width": 2 }, h.el);
      if (fail) h.pop = el("circle", { fill: "none", stroke: rgb(RED), "stroke-width": 3 }, h.el);
      hops.push(h);
      return t + h.dur;
    }
    function send(t, from, to, via, ph) {
      const out = hop(from, via, t) + DWELL;
      glows.push([via, out - DWELL, out]);
      let first = Infinity, last = out;
      for (const r of MINE[to]) {
        if (ph.gone.includes(r)) continue;
        const fail = ph.broken.includes(r), got = hop(via, r, out, fail);
        if (fail) {
          last = Math.max(last, got + 600);
          continue;
        }
        glows.push([r, got, got + DWELL]);
        const end = hop(r, to, got + DWELL);
        first = Math.min(first, end);
        last = Math.max(last, end);
      }
      pulses.push([to, first]);
      return last;
    }
    let t = 0;
    PHASES.forEach((ph, i) => {
      starts.push(t);
      const end = send(t + (i ? TR + 200 : 400), "A", "B", ph.via[0], ph);
      t = send(end + 300, "B", "A", ph.via[1], ph) + 700;
    });
    const loopMs = Math.round(t + RESET);

    const cap = document.createElement("div");
    cap.style.cssText = "display:grid;font-size:small;color:#777;text-align:center;margin-top:.4em;line-height:1.35";
    const caps = PHASES.map((ph) => {
      const s = cap.appendChild(document.createElement("span"));
      s.style.gridArea = "1/1";
      s.textContent = ph.caption;
      s.appendChild(document.createElement("span")).textContent = " (click to play)";
      return s;
    });

    function stateAt(t) {
      let p = PHASES.length - 1;
      while (p && t < starts[p]) p--;
      let from = p ? p - 1 : 0, m = p ? ease((t - starts[p]) / TR) : 1;
      if (t > loopMs - RESET) [from, p, m] = [p, 0, ease((t - loopMs + RESET) / (RESET - 200))];
      const lerp = (key, r) => +PHASES[from][key].includes(+r) * (1 - m) + +PHASES[p][key].includes(+r) * m;
      const st = { b: {}, g: {}, cap: PHASES.map((_, i) => (i == p ? clamp(2 * m - 1) : 0) + (i == from ? clamp(1 - 2 * m) : 0)) };
      for (const id in nodes) [st.b[id], st.g[id]] = [lerp("broken", id), lerp("gone", id)];
      return st;
    }

    function render(t) {
      t = ((t % loopMs) + loopMs) % loopMs;
      const st = stateAt(t);
      for (const n of Object.values(nodes)) {
        const b = st.b[n.id], g = st.g[n.id];
        n.g.setAttribute("opacity", 1 - g);
        n.img.setAttribute("opacity", 1 - 0.45 * b);
        if (n.x) {
          n.x.setAttribute("opacity", 0.85 * clamp(b * 4) * (1 - g));
          n.bars.forEach(([e, len], i) => e.setAttribute("stroke-dashoffset", len * (1 - clamp(b * 2 - (i >> 1)))));
        }
        let glow = 0, ring = 0;
        for (const [id, a, z] of glows) if (id == n.id) glow = Math.max(glow, 0.3 * clamp((t - a) / 150) * clamp(1 - (t - z) / 300));
        for (const [id, a] of pulses) {
          const k = (t - a) / 1000;
          if (id != n.id || k < 0 || k > 1) continue;
          glow = Math.max(glow, 0.55 * (1 - k));
          ring = k;
        }
        n.glow.setAttribute("opacity", glow);
        if (n.ring) {
          const s = 1 + 0.35 * ring;
          n.ring.setAttribute("opacity", ring ? 0.9 * (1 - ring) : 0);
          n.ring.setAttribute("transform", `translate(${n.cx * (1 - s)} ${n.cy * (1 - s)}) scale(${s})`);
        }
      }
      for (const e of edges) {
        const b = Math.max(st.b[e.a], st.b[e.b]);
        e.g.setAttribute("opacity", 1 - Math.max(st.g[e.a], st.g[e.b]));
        e.ok.setAttribute("opacity", 1 - b);
        e.dash.setAttribute("opacity", b);
      }
      for (const h of hops) {
        const u = (t - h.t) / h.dur, tail = h.fail ? 900 / h.dur : 0;
        const on = u >= 0 && u <= 1 + tail;
        h.el.setAttribute("display", on ? "inline" : "none");
        if (!on) continue;
        const [x, y] = at(h.e.k, h.s[0] + (h.s[1] - h.s[0]) * (0.5 * clamp(u) + 0.5 * ease(u)));
        h.el.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
        h.body.setAttribute("fill", mix(BLACK, RED, h.fail ? clamp((u - 0.6) / 0.4) : 0));
        if (!h.fail) continue;
        const f = (u - 1) / tail;
        h.el.setAttribute("opacity", u > 1 ? 1 - clamp(f * 1.6) : 1);
        h.pop.setAttribute("r", 14 + 14 * clamp(f));
        h.pop.setAttribute("opacity", u > 1 ? 1 : 0);
      }
      caps.forEach((s, i) => (s.style.opacity = st.cap[i]));
    }

    let now = 0, last = null, raf = 0, visible = false;
    let held = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (held) now = 1900;
    function frame(ts) {
      if (last !== null) now = (now + Math.min(ts - last, 100)) % loopMs;
      last = ts;
      render(now);
      raf = requestAnimationFrame(frame);
    }
    function update() {
      if (visible && !held && !raf) {
        last = null;
        raf = requestAnimationFrame(frame);
      } else if ((held || !visible) && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      for (const s of caps) s.lastChild.style.display = held ? "" : "none";
    }
    box.style.cursor = "pointer";
    box.addEventListener("click", () => {
      held = !held;
      update();
    });
    if (img) img.replaceWith(svg);
    else box.appendChild(svg);
    box.appendChild(cap);
    render(now);
    update();
    if (!("IntersectionObserver" in window)) visible = true;
    else new IntersectionObserver(([en]) => {
      visible = en.intersectionRatio >= 0.3;
      update();
    }, { threshold: [0, 0.3] }).observe(box);
    update();

    box.relayFlow = {
      render, loopMs, starts,
      pause: () => {
        held = true;
        update();
      },
    };
  }

  const init = () => document.querySelectorAll(".relay-flow").forEach(setup);
  if (document.readyState == "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
