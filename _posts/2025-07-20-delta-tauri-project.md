---
title: DeltaTauri – Porting Delta Chat Desktop to Tauri.
author: treefit, WofWca, septias, nojisan
image: ../assets/blog/2025-07-20-delta-tauri-project/thumbnail_low_res.png
# com_id:
# TODO: improve excerpt
excerpt: |
  Our journey of porting Delta Chat Desktop from Electron to Tauri.
asset_prefix: ../assets/blog/2025-07-20-delta-tauri-project
---

<style>
figure img {
  max-width: 100%;
}
figure figcaption {
  text-align: center;
}
figure {
  border: thin #c0c0c0 solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 100%;
  margin: auto;
}
figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 6px;
  text-align: center;
}

</style>

There are quite some opinions floating around that Electron apps are bad because they "waste" too many resources.
Which is understandable in theory, because Electron is basically a whole Chromium browser plus Node.js runtime in a package, in addition to your app. So it's no surprise that even a hello world app in Electron can already be around 80 MB in download size.

But foremost, what even is Electron? Electron is a framework that makes it easy to build cross-platform apps, meaning you write your code once and it runs on all 3 major platforms (Linux, macOS, and Windows). With Electron, you write your app like you would write a web app.
Many modern and popular applications are made with Electron: Discord, Slack, MS Teams, VSCode, 1Password, Obsidian and Signal, to name a few.
Other apps like Spotify and Steam also embed a Chromium browser for parts of their user interface.

[Tauri](https://tauri.app/) is a relatively new alternative to Electron.
Tauri promises smaller builds and a more advanced security concept compared to Electron. Like our [core library](https://github.com/chatmail/core), Tauri is also written in the memory-safe language Rust.

### Our Journey

The idea of porting Delta Chat Desktop to Tauri intrigued us for some years now, but at the time our code still depended very heavily on Electron, so we took small steps in making our code more modular by starting [the Runtime interface](https://delta.chat/en/2025-05-22-browser-edition#diving-deeper-into-technical-details) and the [JSON-RPC API](https://delta.chat/en/2025-02-11-why-jsonrpc-bindings-exist). The project picked up more speed at the beginning of 2024 when we got [NLnet](https://nlnet.nl/) funding for the project, which we named ["DeltaTauri"](https://nlnet.nl/project/DeltaTauri/).

We started in May with packaging the JSON-RPC over StdIO server as an npm package ([`@deltachat/stdio-rpc-server`](https://www.npmjs.com/package/@deltachat/stdio-rpc-server)) and using that for the Electron version instead of the old npm package, which still utilized the Node-API and CFFI. The [JSON-RPC vs. CFFI blog post](https://delta.chat/en/2025-02-11-why-jsonrpc-bindings-exist#the-history-of-the-json-rpc-interface) goes into more details on this.

The project picked up steam in September: treefit started to reorganize the folder structure of the Delta Chat Desktop repository to turn it into a monorepo[^monorepo].
The new folder structure splits up the desktop client into smaller more modular packages:

```
├── packages
│   ├── e2e-tests        # Integration tests
│   ├── frontend         # The React based UI
│   │                    #   and most of the app's Logic
│   ├── runtime          # Runtime Interface
│   ├── shared           # shared types and constants
│   ├── target-browser   # Browser Edition
│   ├── target-electron  # Electron Edition
│   └── target-tauri     # Tauri Edition
```

[^monorepo]: a monorepo is basically a repository which contains multiple projects instead. learn more on [wikipedia](https://en.wikipedia.org/wiki/Monorepo)

In October, we finished the Browser Edition, which serves as proof that the app reached independence of Electron and running in the browser helps with development: you get access to development tools and plugins of all browsers and a more reliable way to do integration testing. We wrote more about the browser edition in it's [blog post](https://delta.chat/en/2025-05-22-browser-edition).

In November, [Nico](https://github.com/nicodh) introduced automated end-to-end testing for Delta Chat Desktop with playwright, an industry standard tool for testing web-applications. This ensures the reliability of the app, each test can be thought of as a checkpoint. If a future change breaks the test, we get an alarm and can fix it before the new bug even reaches a test release.

<figure>
	<img src="{{ page.asset_prefix }}/hero.png">
	<figcaption>Delta Chat Desktop Tauri Edition. As you can see, visually it looks the same as the Electron Edition</figcaption>
</figure>

In January we had Delta Chat Desktop running on Tauri, however the system integrations were still missing, which we then added in the following months.

### Our experience with Tauri

<!-- refine section , maybe reword to make it more concise-->

Tauri has a very helpful community and our upstream contributions were accepted in a reasonable time, even though the Tauri project, like Delta Chat is currently also in a funding gap.

Now to the advantages that Tauri brought us:

- Easy to expand
  - It's written in Rust - memory safety and a strong type system gives you confidence to contribute.
  - The Rust package ecosystem has many great systems API crates that work really well and are easy to integrate into Taui. In Electron using native apis that are not already implemented in Electron is much harder [^complexity-of-electron-native-api].
- Confidence to contribute:
  - We can easily compile Rust for all platforms and also Tauri is small so it does not take hours or days to compile compared the beast of a C++ project that is chromium.
  - It's code base is relatively easy to grasp, because at it's core it is "just" a web view wrapper instead of a whole browser fork with custom patches.
- Smaller package size (because it uses the system's browser)

But it is not without its disadvantages: you suddenly have 2 different browser engines to optimize for (Chromium and WebKit[^webkit]) and Tauri is much younger than Electron.
While Electron has a fairly complete API out of the box, in Tauri you have plugins, but some Tauri plugins lack important functionality.
Like in the notification plugin there is no way to listen for clicks on notifications (from Rust), so we made our own crate to directly interface with the system APIs.

Another point is compiling speed and cross-packaging for other platforms, both are faster on
Electron because there you don't need to compile code, just package it together. And of course Rust still takes its time to compible, which can be about 10-15 min (cold/full build) or much longer if you are using a slow computer.

[^webkit]: WebKit is the engine of the safari browser.

[^complexity-of-electron-native-api]: In your Electron project you can not just use a native api, like you would in tauri. You would need more work, because in Electron your backend code is written in JavaScript not C++, so you additionally need to add bindings via the NodeAPI for your new code or you need to build and maintain a custom fork of Electron. With tauri you just import the Rust crate you want to use.

### Security

Tauri has really great security features, we used their [capability system](https://v2.tauri.app/security/capabilities/) to restrict which window has access to which API calls. For example, webxdc windows can not access APIs meant for the main window, like changing settings:

```toml
identifier = "webxdc"
webviews = ["webxdc:*"]
permissions = [
  "allow-send-webxdc-update",
  "allow-get-webxdc-updates",
  "allow-join-webxdc-realtime-channel",
  "allow-leave-webxdc-realtime-channel",
  "allow-send-webxdc-realtime-data",
  "allow-register-webxdc-channel",
  "allow-webxdc-send-to-chat",
]
```

You can find the capabilities for all windows at [deltachat-desktop/packages/target-tauri/src-tauri/capabilities](https://github.com/deltachat/deltachat-desktop/tree/main/packages/target-tauri/src-tauri/capabilities).

<!-- TODO rephrase -->

We gave the sandboxing of webxdc apps special attention, because webxdc apps can run user defined code and we gave webxdc the strong privacy by prohibiting data ex-filtration over the internet. Fortunately Tauri has a reliable way to deny access to the WebRTC API on all platforms without the [FILL500 hack](https://delta.chat/en/2023-05-22-webxdc-security#fill500-disabling-webrtc-on-chromium) (which we currently still use on Android and in the Electron edition).

Tauri does not have access to the file scheme in general, so we load all files over custom schemes that don't allow arbitrary file system access:

```
dcblob://<account folder name>/<blob filename>
```

<!-- TODO: mention audit and quotes from it  -->

If you want to dive deeper, here is a list of the other security measures that we implemented: [tauri-apps/tauri#5755 (comment)](https://github.com/tauri-apps/tauri/issues/5755#issuecomment-2815613067)

### The Differences

Tauri uses the Operating System's webview for the frontend and native Rust code instead of a Node.js runtime for the backend.

This has the advantage of resulting in smaller binaries and install size. Additionally, the system webview is updated independently of Delta Chat, so security updates may reach the users faster - but only if they update their system.

But using the system webview can also be a disadvantage, in Electron we ship the webview/browser with the app, so we know exactly what version it has, in Tauri we do not control this aspect.
The system webview also means we now have two target browser engines to work with: webkit on macOS and linux, and WebView2/chromium on Windows. If you are familiar with web-development then you already know that there are sometimes inconsistencies in how browsers behaves, what features and APIs they support and how they render style sheets.

#### Download and Installation Size

In the case of Delta Chat Tauri the download size was reduced by around 60-80% and the installation size was reduced by over 80% compared to the Electron edition.
The size of the Flatpak download decreased, but the platform dependency increased by 54%, so the space-saving is not that huge, unless you also have other Flatpak apps using the gnome platform dependency.

<figure>
	<img
alt="Chart that compares download size between Electron and Tauri Editions:
Linux flatpak app from 547.5mb to 60.2mb (But the flatpak platform dependency is now larger from 674.6mb to 1038.5mb).
Linux debian package was reduced from 102.3mb to 33.4mb. Windows installer reduced from 122mb to 26.7mb.
macOS Apple silicon/arm version was reduced from 153mb to 44mb
and the universal version (x86_64 + arm64) was reduced from 213mb to 91mb."
src="{{ page.asset_prefix }}/download-size-comparison-chart.svg">
	<figcaption>Download size comparison between Electron and Tauri releases (pre-release 1.59.0) in megabytes</figcaption>
</figure>
<figure>
	<img alt="Chart that compares installation size between Electron and Tauri
 Editions: Linux debian install size reduced from 369mb to 55mb.
 Windows install was reduced from 370mb to 53.7mb.
 macOS Apple silicon/arm install size was reduced from 360mb to 44mb
 and the install size of the universal version (x86_64 + arm64) was reduced from 519mb to 91mb."
	src="{{ page.asset_prefix }}/install-size-comparison-chart.svg">
	<figcaption>Installation size comparison between Electron and Tauri releases (pre-release 1.59.0) in megabytes</figcaption>
</figure>

You can find the data from our test on <https://github.com/deltachat/deltachat-desktop/issues/5239>.

#### RAM usage

> Although Tauri is said to have big savings in RAM usage compared to Electron we didn't find that in our project.
This comparison is only about Delta Chat Desktop, you could see more benefits in your project.

<br />

|                                     | Electron (on Linux)                                                           | Tauri (on Linux)                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Processes: just main window         | <img src="{{ page.asset_prefix }}/dc-electron-ram-linux.png" style="width: 100%;">                 | <img src="{{ page.asset_prefix }}/dc-tauri-ram-linux.png" style="width: 100%;">                 |
| Total: just main window             | 405.69 MB                                                                     | 634.7 MB                                                                   |
| Processes: main window + webxdc app | <img src="{{ page.asset_prefix }}/dc-electron-ram-linux-with-webxdc-app.png" style="width: 100%;"> | <img src="{{ page.asset_prefix }}/dc-tauri-ram-linux-with webxdc app.png" style="width: 100%;"> |
| Total: main window + webxdc app     | 519.09 MB                                                                     | 716 MB                                                                     |

<br />

| operating system & distribution format | Electron    | Tauri       |
| -------------------------------------- | ----------- | ----------- |
| Linux: Flatpak                         | ~374-536 MB | ~347-380 MB |
| Linux: Debian                          | ~171.2 MB   | ~493.7 MB   |
| macOS                                  | ~260 MB     | ~326 MB     |
| Windows                                | ~166 MB     | ~211 MB     |

Unfortunately RAM usage is not much less compared to Electron, often Delta Chat Tauri even uses more RAM than Electron.

### State of Tauri Edition

The Tauri edition has all features that the Electron version has besides of the location streaming map, but there are still some bugs especially on Linux, which prevent us from fully switching to Tauri.

The Tauri edition also has a few extras that the Electron Edition has not:

- autostart on system startup
- webxdc apps start instantly without a loading bar
- macOS: reply directly to notifications
- macOS: register as handler for invite(i.delta.chat) links, so they open directly in Delta Chat when you click on them

<figure>
	<video autoplay muted loop controls style="width: 100%">
  <source src="{{ page.asset_prefix }}/reply_video.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
	<figcaption>On macOS, you can send a reply directly from the notification</figcaption>
</figure>

The currently known deal-breaker bugs:

- In our responsibility:
  - Linux: single instance hand-off does not work, this means opening delta chat again if it is already open will not work and opening links and webxdc file with delta chat is also broken when the app is already running [deltachat-desktop#5178](https://github.com/deltachat/deltachat-desktop/issues/5178)
  - Linux: notification issue with flatpak [deltachat-desktop#5095](https://github.com/deltachat/deltachat-desktop/issues/5095)
- upstream issues in Tauri/WebKit:
  - Windows: focus issues with keyboard navigation [tauri#13466](https://github.com/tauri-apps/tauri/issues/13466)
  - Linux: crash because of missing `gstreamer` dependency [deltachat-desktop#5195](https://github.com/deltachat/deltachat-desktop/issues/5195)
  - Linux: Crashes and Glitches on Nvidia GPU [tauri#9394](https://github.com/tauri-apps/tauri/issues/9394)
  - Linux: missing camera and microphone support [deltachat-desktop#4932](https://github.com/deltachat/deltachat-desktop/issues/4932#issuecomment-2927910551) [tauri#8426](https://github.com/tauri-apps/tauri/discussions/8426#discussioncomment-8268622)

We tested the features that depend on system integration and documented the results in [deltachat-desktop#5239](https://github.com/deltachat/deltachat-desktop/issues/5239).

### Where can you try it?

As we established in this Blog post, the Tauri edition is not good enough yet to fully replace the Electron version. We already release it next to the Electron version, so if you want to try it, checkout this forum post for details: <https://support.delta.chat/t/help-test-the-tauri-pre-release/3827>

### Conclusion

While Tauri's Linux support is disappointing, the project still opened up a lot of possibilities and is working nicely on Windows and macOS for the most part.
All features are implemented, except for the location streaming map.

So for now we will stay with the Electron edition for the official releases.
For the curious, we release the Tauri edition as well with each new release since `1.60.0`.

Thanks to the Tauri developers for making Tauri and
Thanks to NLnet for funding the DeltaTauri project.

<img src="../assets/logos/logo_nlnet.svg" width="230" style="clear: both; float:right; margin-left:1em;" />
