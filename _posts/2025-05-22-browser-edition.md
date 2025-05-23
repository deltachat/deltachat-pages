---
title: "Delta Chat Desktop, but running inside of Firefox 🦊"
author: treefit, nojisan
image: ../assets/blog/2025-05-22-browser-edition/browser-thumbnail.png
com_id: 114551763057700815
excerpt: As part of the project to port Delta Chat Desktop from Electron to Tauri, we'll showcase a setup where our Desktop app runs in Firefox and does not depend on Electron or Chromium anymore. This video and post walks through what works already, and what doesn't and is generally aimed at developers and expert users. 
---

As part of the project to port Delta Chat Desktop from Electron to Tauri[^3], we'll showcase a setup where our Desktop app runs in Firefox and does not depend on Electron or Chromium anymore. This video and post walks through what works already, and what doesn't and is generally aimed at developers and expert users. 

<figure>
    <img src="../assets/blog/2025-05-22-browser-edition/browser-screenshot-firefox.png" alt="Delta Chat Desktop UI running in the Firefox Browser" style="max-width: 100%; aspect-ratio: 2934 / 1782;" />
    <figcaption>
        Delta Chat, running in the Firefox Browser
    </figcaption>
</figure>

Features:
- ☑️ Basic functionality (such as sending and receiving messages)
- 📎 Sending attachments
- 🔔 Notifications (while the tab is open)
- 1️⃣ Badge counter (number in tab title)
- 🦊🧭🏐 Works in Firefox, Safari, and Chrome
- 🔐 HTTPS with self-signed certificate
- 🔑 Password Protection
- ⬇️ Download attachments or open in browser (useful for PDF)
- ℹ️ Local Help also works
- 🌐 Language based on Browser

Here is a video that shows the Browser Version in action:

<video controls style="max-width: 100%;" alt="Demo video of the Delta Chat Web version in action"><source src="https://delta.chat/video/browser-edition-blogpost-demo.mp4" type="video/mp4"></video>

Though it is not standalone, it still needs a server component because Chatmail core[^1] can not yet be compiled into a WebAssembly to run fully in the browser, but more on that later.

### Why we made a Browser Edition

So why did we make a Desktop version that works in a Browser? We had three reasons:
1. Lots of people rightfully criticized depending on Google's Chromium and resource-hungry Electron[^electron]. 
2. To give access to development tools and add-ons on all browsers.
3. To bring back automated integration testing for Delta Chat Desktop.

### Possible future use cases {#future-usecases}

There are many more ways this web version could be used besides the ones already mentioned:

-  "Delta Chat Web" - run core on a mobile device and connect to it from a computer over a local network for a WhatsApp web-like experience.
- Delta Chat as a service (for example, a company could host instances for all their employees).
- It could be a way to port Delta Chat to special operating systems[^2] that have a browser and rust support, but have no support for Electron or Tauri[^3].
- Run Delta Chat Web on your Raspberry Pi / home server connect from your devices
	- treefit already made a [plugin for running it on home assistant](https://codeberg.org/treefit/deltachat-homeassistant-addon)

<figure>
    <img alt="Delta Chat Web inside of Home Assistant" src="../assets/blog/2025-05-22-browser-edition/browser-edition-in-home-assistant.png" style="max-width: 100%" />
    <figcaption>Delta Chat Web inside of Home Assistant</figcaption>
</figure>

### Diving deeper into technical details 

To make the Web UI of Delta Chat Desktop independent of Electron, we needed to make our code more modular:

- We switched to the JSON-RPC API, which we highlighted in a [previous blog post](https://delta.chat/en/2025-02-11-why-jsonrpc-bindings-exist).
- We created a new `Runtime` interface and moved all direct calls to Electron into a `RuntimeElectron` class that implements this interface.
- We also moved nearly all the logic to the frontend/UI code, so the runtimes are even simpler to make and maintain because they contain less and simpler code.

Effectively, the web-based UI of the desktop client became independent of Electron or Chromium. 
To add a new Runtime you just need to implement the runtime interface and load it when you start the app.

The code of the runtime interface: <https://github.com/deltachat/deltachat-desktop/blob/main/packages/runtime/runtime.ts#L29>

<img src="../assets/blog/2025-05-22-browser-edition/runtime-interface.svg" style="max-width: 100%" alt="Diagram visualizing the before and after"/>

<details>
    <summary>Downsides and Caveats of the Current Browser Version</summary>
    <p>The current approach has the following caveats that you should to keep in mind</p>
    <ol>
        <li>
            If you host the server component on a VPS, then the VPS will become the place where the messages are decrypted, so you break the premise of the end-to-end encryption: "end device to end device".
        </li>
        <li>
            You need to host the server component for each user, so you need to build management software if you want to use this for a SaaS project/product.
        </li>
        <li>
            Currently, only one client can connect to the Chatmail core at a time, because there is only a single event queue. <br /> If you would connect multiple clients right now, then they would steal events from each other. 
        </li>
        <li>
            The current security could be improved: The WebSocket server does not perform origin validation and the login has no timeout/cooldown on wrong passwords. But those would be easy to add.
        </li>
    </ol>
    <p>
        Also, some features are still missing in the browser version:
    </p>
    <ul>
        <li>webxdc chat-shared apps</li>
        <li>experimental maps/location-streaming</li>
        <li>viewing HTML emails</li>
    </ul> 
    <p>
        These missing features, and especially the webxdc app sandboxing, require more work. See <a href="https://delta.chat/en/2023-05-22-webxdc-security">Webxdc security blog post</a> for a deep dive into the issues. 
    </p>
</details>

### What comes next requires helping hands and contributions

Besides the issues noted, a Web version of Delta Chat that fully satisfies end-to-end encryption guarantees needs the Rust Chatmail core library to run in the browser. Rust in general compiles to [WebAssembly (WASM)](https://webassembly.org/). For example, the security-audited [rPGP end-to-end encryption library](https://github.com/rpgp/rpgp) is implemented fully in Rust and  is continuously tested with WebAssembly targets. However, there are some key challenges to address for a "standalone" Web version: 

- Find a solution for both database storage (currently Chatmail core uses SQLite as an embedded C-library) and arrange fast file storage for media files, avatars etc.   

- Find a solution to Browsers being unable to perform SMTP or IMAP network protocols; this could involve [Chatmail relays](https://chatmail.at/relays) offering a minimal HTTP/WebSocket interface to bridge the gap.

- Support webxdc realtime P2P networking and support running [in-chat multiplayer Quake III Arena realtime gameplay](https://chaos.social/@delta/114517181096683376);  Our friends at [Iroh](https://iroh.computer) are themselves working on Web-versions 

- Explore how well the Chatmail core async Rust code can run in WebAssembly; this could involve a lot of refactoring.

See the [Web version topic in the Delta Chat Forum](https://support.delta.chat/t/what-would-be-needed-for-a-standalone-web-version-without-a-server-component/3789) for further discussion. 

If you are not really into programming, it might be hard to understand how hard these issues are.
But no worries, even if you are a programmer, or even with ourselves as matter experts, it's hard to predict :) 

## Invitation to DIFF June 7-17th in Freiburg

The best way to discuss with many of us is by making it to an in-person community gathering. This crazy year of 2025 around we are [inviting to the DIFF gathering](https://delta.chat/en/2025-05-12-diff-invitation) starting in just a few weeks.  

## Donations needed

While some of our work is funded through public bodies, a lot of it is not.  Please consider [sending a monetary contribution](https://delta.chat/en/donate) if you can and appreciate our efforts and want to enable more. Thanks! 

If you want to try the experimental browser version yourself, then you can find the instructions at <https://github.com/deltachat/deltachat-desktop/blob/main/packages/target-browser/Readme.md>.


[^1]: Formerly known as Delta Chat Core. It is the core library all our UI implementations use.

[^2]: I'm thinking BSD flavors, Haiku, or other rare enthusiast operating systems here

[^3]: Tauri is an alternative to Electron that is smaller, because it uses the web view provided by the operating system instead of including a whole Chromium browser. It is also written in the memory-safe compiled language rust, which offers security and speed benefits. There will be another blog post going into more detail soon; in the meantime, you can learn more at <https://tauri.app/>.

[^electron]: Though It should be said that despite it's flaws, Electron has served us well over the years and we are grateful that it exists. But it is never good to be too dependent on a single framework, especially one that is so resource wasteful and hard for us to extend or contribute back to.
