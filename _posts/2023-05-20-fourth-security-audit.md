---
title: Taming Chromium for E2E privacy: fourth security audit completed 😅
author: holga
image: ../assets/blog/2023-05-20-fourth-security-audit.png
---

Delta Chat integrated the unique ["web apps shared in a chat" (webxdc) mid 2022](https://delta.chat/en/2022-06-14-webxdcintro) feature but we were in for a harrowing security exploit beginning 2023:
Malicious web apps in Delta Chat could exfiltrate e-mail addresses of users
as well as the usage data produced inside a chat-shared web app.
While it doesn't compromise [core Delta Chat security](https://delta.chat/en/2023-03-27-third-independent-security-audit),
it was bad enough to cost us many hundreds of (unpaid) hours earlier this year
because with Delta Chat no one should be able to collect data of unsuspecting users
other than the e-mail server you choose for relaying messages.
Especially for Chromium (the google-driven Web browsing engine) it turned out to be
frustratingly hard to control its network behaviour and required reading a lot of C++ code
and constructing an elaborate migitation hack (FILL500) to prevent data exfiltration.
A subsequent audit from security auditors at [Cure53](https://cure53.de)
verified our mitigations but also found additional issues,
and again Chromium was tricky to tame in its network behaviour.
However, the latest Delta Chat 1.36 releases contain all the fixes and no
vulnerability for running "web apps shared in a chat" is known anymore 😅


## "web apps shared in a chat" aka webxdc apps depend on browser security

Webxdc apps are guaranteed to leak no data to anyone outside the chat they are shared in,
not even to their developers.
Enforcing this privacy promise depends on our ability to safely run
third-party web apps (anyone can deploy, send and start a web app in a chat)
in a *network-isolated webview* to prevent them from
causing unwanted network traffic. Browsers traditionally offer sandboxing,
"offline modes" or various `Content-Security-Policy (CSP)` settings
to prevent web code from unwanted network access.

Concretely, our promise of running webxdc apps for users is that
no data can be send out from the Browser sandbox other than by calling
[`webxdc.sendUpdate()`](https://docs.webxdc.org/spec.html#sendupdate)
which is implemented and controlled by the Delta Chat Rust library.
To achive full sandboxing, Delta Chat internally creates webviews
with disabled network access, in particular:

- external links do not work (`href` etc.).
- `XMLHttpRequest()` and related methods do not work.
- it is not possible to access not-embedded code or HTML via `src=...` etc.

Already in 2022 we had developed a [webxdc test app](https://github.com/webxdc/webxdc-test)
to verify these guarantees and tested it on many devices until we were
sure we could run isolated webviews for users.
Or so we thought.

## Disabling WebRTC to enforce network-isolation for web apps

In January 2023, a new contributor, [Wofwca](https://github.com/WofWca),
discovered that `RTCPeerConnection` objects
are not restricted by the known network-isolation options for webviews
or Content-Security-Policies that try to isolate parts of web pages.
`RTCPeerConnection` objects are the core programmatic offering of WebRTC protocols
which allow web offerings to facilitate P2P communications for video or data transfers.
Our privacy promise was broken and an example exploit showcased it.

We convened a working group from our team and befriended experts
to iteratively implement and develop the "DISABLE-WEBRTC"
set of fixes and mitigations to enforce network-isolation of webviews,
both for Chromium and Webkit/iOS. All of the discussions and research
happened in a dedicated secure chat group and a private repository.
Not even all Delta Chat contributors knew of the massive work
taking place behind the scenes and only appearing in various PRs
in public repositories.

## Disabling WebRTC on Chromium through the FILL500 hack

After many days of intense brainstorming, we came up with a fix:

```javascript
for (let i = 0; i < 500; i++) {
    new RTCPeerConnection()
}
```

Nope, we didn't accidentally copy-paste the wrong code snippet. This actually
is how the fix works. Now, let us explain _why_ it works:

- Since 2019, Chromium has [a hard-coded limit](https://github.com/chromium/chromium/blob/c9060dc81d2a40733b627a4f5215ff237a64c691/third_party/blink/renderer/modules/peerconnection/rtc_peer_connection.cc#L155-L156)
  of 500 RTCPeerConnection *instantiations* per process.
  The according counter is not incremented when doing network connections but
  unconditionally incremented in the constructor (where no network connections take place).
  If you try the 501st instantiation it fails persistently.

- If you don't `.close()` `RTCPeerConnection`s (which we don't) they don't
  get garbage-collected (see [this debug assertion](https://github.com/chromium/chromium/blob/c9060dc81d2a40733b627a4f5215ff237a64c691/third_party/blink/renderer/modules/peerconnection/rtc_peer_connection.cc#L661)),
  so the counter is never decremented while the page is open.

- As long as we don't expose any of the 500 RTCPeerConnection objects that we
  created to the app's script, it effectively has no ability to get a reference
  to an RTCPeerConnection object and perusing it for network side channels.

Building on these insights allowed us to develop this strangely elegant
FILL500 exploit (against the WebRTC sidechannel) that pre-instantiates
RTCPeerConnections before running any user provided/started JavaScript code.

Special care still needed to be taken that neither navigation or iframe-constructions
can create a new pool of RTCPeerConnections.

Not pretty, but it worked.


## Disabling WebRTC worked on all platforms but ...

FILL500 is now used [on Android](https://github.com/deltachat/deltachat-android/blob/605008074ec122b196e65e86e7c6c9ae9789d068/res/raw/webxdc_wrapper.html#L63-L65)
and [Electron-based Desktop](https://github.com/deltachat/deltachat-desktop/blob/4e40c4304b2e41ede7ec896f9ce28fd7552fbf1f/static/webxdc-preload.js#L91-L104)
Delta Chat apps and causes a delay of sometimes 3-5 seconds for starting webxdc
apps on old phones as the team did not find a way to shorten or avoid the
FILL500 overhead and neither did the Cure53 experts which we involved later
during a security audit.

For webkit/iOS (used by Safari), DISABLE-WEBRTC mitigations [work differently](https://github.com/deltachat/deltachat-ios/blob/59ce95cf7e02e3c4799aea2ca1bfed1087506928/deltachat-ios/Controller/WebxdcViewController.swift#L135-L144).
Here, the `RTCPeerConnection` object is removed from JavaScript
namespaces such that the later started user-provided web app JavaScript
code can not instantiate RTCPeerConnections at all.
The mitigation consisted in a just a few lines of code when creating the web view.

Beginning February 2023 Delta Chat apps on all platforms
were released containing all DISABLE-WEBRTC mitigations.

Meanwhile [OpenTechFund](https://www.opentech.fund/) had thankfully agreed to
contract [Cure53 security experts](https://cure53.de)
to perform a thorough security audit of our mitigations
and webxdc security in general.
No compromise against our Disable-WebRTC mitigations was found
after we implemented and silently released Delta Chat apps in February 2022.

But it wasn't the end of an already exhausting story, unfortunately.


## DNS-prefetch produced another major exploit found by Cure53

Security auditors from Cure53 found another issue
which sent us back to the drawing board and lots of head scratching:
Chromium performs "DNS-prefetching" which aims to speed up browsing experiences
for users by performing DNS network queries before a user clicks on any link
or the page requests a resource.
Auditors provided two exploits for Desktop and Android respectively
which could exfiltrate data from web apps via Chromiums DNS-prefetch feature.
Unfortunately, the official suggestion for
[disabling DNS-prefetch on Chromium](https://www.chromium.org/developers/design-documents/dns-prefetching/#dns-prefetch-control) does not work. We even found in Chromiums source code
[tests that dns-prefetch "off" settings do the opposite of what the documentation promises](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/web_tests/http/tests/misc/dns-prefetch-control.html;l=51?q=dns-prefetch). Sad.

To cut another longer story short here, we'll found working mitigations (see next section)
so that webxdc apps can not leak data anymore via DNS-prefetch.
Again, it wasn't pretty, but it worked.


## Audit results of Delta Chat's ability to run web apps safely (webxdc)

Cure53 [conducted a security audit about webxdc apps](XXX link)
and identified five "high" and two "info" severity issues with our February releases.
Here we provide a summary of the issues and links to our fixes:

- (high) XDC-01: Data exfiltration via DNS-prefetch on Desktop
  The merged https://github.com/deltachat/deltachat-desktop/pull/3179
  **now generally blocks DNS requests** in the Electron renderer process,
  only allowing requests for `*.mapbox.com` (needed for the opt-in
  experimental location streaming). Together with our DISABLE-WEBRTC
  fixes this makes for a hardened Delta Chat Desktop Electron app
  because no JavaScript rendering code can perform or cause any networking
  other than through our Rust-implemented Delta Chat core library.

- (high) XDC-02: Full CSP-bypass for `webxdc.js` on Desktop
  fixed by [deltachat-desktop #3157](https://github.com/deltachat/deltachat-desktop/pull/3157)
  (see the `webxdc.ts` file).

- (high) XDC-03: Data Exfiltration via DNS Lookup on Android
  This by far was the hardest issue because of a variety of
  Chromium versions on Android phones and problems reliably reproducing the problem.
  We were able to fix the problem on all devices where the XDC-03 exploit previously worked
  through these fixes:
  [deltachat-android #2539](https://github.com/deltachat/deltachat-android/pull/2539)
  [deltachat-android #2540](https://github.com/deltachat/deltachat-android/pull/2540)
  [deltachat-core #4339](https://github.com/deltachat/deltachat-core-rust/pull/4339)

- (high) XDC-04: Data exfiltration via dev-tools
  [Fixed by deltachat-desktop commit #649fe](https://github.com/deltachat/deltachat-desktop/commit/a9e5242acb2dfad132acc3dbbdacf89fb2a649fe). Now the dev tools can only be opened if the "Enable webxdc devtools" experimental setting is enabled.
- (high) XDC-05: Full CSP-bypass for PDF embed on Desktop
  Fixed in [deltachat-desktop commit #63577c](https://github.com/deltachat/deltachat-desktop/commit/e874c8bdb98321c12d2d972106b0143e7f63577c). When attempting to load a pdf file in an iframe, the PDF is now displayed as text.

- (info) XDC-06: Spoofable Recommendation for `selfAddr` in payload
  This issue does not allow exfiltration of data but it allows malicious
  users to cause apps to malfunction or mis-identity users.
  We are going to evolve the webxdc API to avoid the issue.

- (info) XDC-07: Lack of CSP-header for `webxdc-update.json`
  Fixed in [deltachat-ios #1839](https://github.com/deltachat/deltachat-ios/pull/1839).

All high-severity issues are fixed with the 1.36 release series
already published to app stores and our web page in April.


## Conclusions and take aways on better network control in browsers

We were a bit naive thinking that Web Browsers and especially Chromium sandboxes
allow to control JavaScript network access when we instantiate e.g.
the Electron/Chromium engine with the `internetAccess=False` option.
Then again, with web browsers and their sandboxing models used for a lot of
commercial and payment activities, with tons of third-party code running on user's Browsers,
we did not expect it would be so hard to control the network behaviour of web code.

### Browsers: please implement the W3C "WEBRTC: block" directive

Platforms serving web pages or apps need to trust their complete
supply chain of JavaScript dependencies if they don't want
users of their offerings to leak app data through WebRTC.
Most importantly, Content-Security-Policies do not prevent leakage currently.
The issue is actually long known, see the [WebRTC can be used for exfiltration issue from 2016](https://github.com/w3c/webappsec-csp/issues/92).

In 2022 the W3C finally adopted a direct method to disable WebRTC via a [WebRTC: Block CSP setting](https://www.w3.org/TR/CSP3/#directive-webrtc) but it's not implemented yet by browsers.
The WebRTC CSP would allow webxdc and web2 applications and platforms a much saner way
to control Browsers and for Chromium in particular getting rid of the FILL500 hack.
Tip of the hat to [ZenHack](https://github.com/zenhack) who persevered
in landing this new CSP directive and even went through the bureaucratic effort
of becoming a registered W3C spec contributor to land it.

### Reminder: VPN users might leak IP address through WebRTC

It is also a well-known issue when using VPNs that WebRTC can cause local IP address leaks.
A [search on DuckDuckGo](https://duckduckgo.com/?t=ffab&q=webrtc+vpn+&atb=v65-1&ia=web)
reveals many old and recent blog posts and VPN provider pages advising on mitigating the issue.
However, two sets of expert groups have not found a way to disable WebRTC on Chromium
other than the hacky FILL500 algorithm above and
we are not aware of any other method to reliably disable WebRTC on Chromium.
Some VPN setups may succeed however in preventing WebRTC connections
on the network level but you will need to inquire yourself with your VPN providers to find out.
**We think Browsers should up their game and allow users to consent to using WebRTC
similar to Camera/Microphone permissions.**

If you depend on using a VPN then it's for now maybe safer to use Firefox based engines
(Tor is also firefox-based) and ensure WebRTC is disabled (see below)
because otherwise you might leak your actual IP address to malicious web sites
that try to identify VPN users.

### Firefox webviews would have saved us troubles

Delta Chat apps do not use Firefox webviews which can be directly configured
to disable WebRTC, by setting `media.peerconnection.enabled = false` in `about:config`.
Firefox also doesn't do DNS-prefetching (which shouldn't be done for https anyway).
But the Delta Chat desktop app uses Electron which in turn uses Chromium
and on Android devices the system webview is typically a Chromium webview.

We investigated whether we could use GeckoView and early tests confirm it would solve the WebRTC issue.  But shipping GeckoView within Delta Chat is a) quite a bit of work b) would
drastically increase the APK size. We are still considering it especially if Chromium
does not implement the "WebRTC: Block" directive in the foreseeable future.
