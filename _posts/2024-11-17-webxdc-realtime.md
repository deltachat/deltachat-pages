---
title: Delta Chat introduces P2P networking for webxdc apps 
author: olgax
image: ../assets/logos/webxdc-centered.png
---

<img src="../assets/logos/webxdc2.png" style="width:160px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="Webxdc Logo" />
The rolling Delta Chat 1.48 app releases introduce the new 
[webxdc realtime API](https://webxdc.org/docs/spec/joinRealtimeChannel.html) 
which establishes a private P2P network between all users of a chat-shared app. 
Web apps can now ["join" a realtime channel](https://webxdc.org/docs/spec/joinRealtimeChannel.html) to instruct their hosting messenger to establish ephemeral data channels
with any other active user of an app. 

<img src="../assets/logos/iroh.svg" style="width:160px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="Iroh Logo" />
To implement webxdc realtime channels, 
Delta Chat uses the [Iroh P2P Networking library](https://iroh.computer),
driven by an experienced developer team with which we greatly enjoy collaboration;
big shoutout as they are also behind the multi-device setup of Delta Chat! 💜

The new webxdc realtime API is not only easier to use than the classic 
[WebRTC Browser API](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)
but maybe also faster in some situations, according to preliminary measurements. 
Here is a little 30 second video showcasing the
[offline-first and realtime Pixel app](XXX link to latest release) 
between an iPhone and an old Android phone. 

<video controls style="width:560px; max-width: 100%;"><source src="https://merlinux.eu/webxdc-realtime-148.mp4" type="video/mp4"></video>

In the following sections, we provide technical details about 
this little "Pixel app" and highlight some other first realtime apps
that are available through the [webxdc app store](https://webxdc.org/apps/). 


## The pixel app is small, offline-first and realtime 

<img src="../assets/blog/2024-11-pixel.jpg" style="width:200px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="pixel1-screenshot" />

The [source code of the pixel app](https://codeberg.org/webxdc/pixel/src/branch/main/script.js) 

- consists of 241 lines of Javascript (including all dependencies),

- offers collaborative realtime pixel-drawing 

- BUT does not require users to be online at the same time. 

The pixel app achieves its hybrid offline-first and realtime connectivity 
by using two separate webxdc messaging APIs:

- [webxdc.sendUpdate](https://webxdc.org/docs/spec/sendUpdate.html) 
  to relay "application updates" through the regular host messenger channel 
  (e-mail for Delta Chat, XMPP for Cheogram and Monocles). 

- [realtimeChannel.send](https://webxdc.org/docs/spec/sendUpdate.html) 
  to relay ephemeral application messages to any P2P-connected chat partner

If you want to understand how the pixel app achieves "eventual synchronization for all users",
we suggest to dive into the [Shared Web Application state chapter](https://webxdc.org/docs/shared_state/index.html)
and then read [the 241 lines of Javascript](https://codeberg.org/webxdc/pixel/src/branch/main/script.js). 

If you want to improve the app, please feel free to fork and [submit your variant](https://codeberg.org/webxdc/xdcget/src/branch/main/SUBMIT.md). 
There already is the [ColorPixel app](https://apps.testrun.org/deltazen-pixel-v0.3.0.xdc)
which is a [Pixel fork](https://github.com/DeltaZen/pixel) 
where each participant draws pixels in a different color. 

## The Pong app is realtime-only and implements clock synchronization

<video controls style="width:120px; max-width: 100%;float:right;margin-left:5px;" autoplay muted loop playsinline><source src="../assets/blog/2024-11-pong2.mp4" type="video/mp4"></video>
The [pong app](https://apps.testrun.org/pong-v1.xdc) 
is a simple two-player implementation of the classic ping pong 
experience back in the 1970ties. 
It's UX wise rudimentary but implements basic "clock synchronization" 
which is an important consideration for any realtime networked gaming app.  
Please see the [pong source code](https://codeberg.org/webxdc/pong/src/branch/main) 
for details. 

Wouldn't it be nice if the rackets and the ball look nicer? 
Maybe make some retro sounds? 
Also, to provide a more refined network handling of Pong, 
it might be worthwhile to look into [WebRTC Pong](https://mitxela.com/projects/webrtc-pong)
and port it to Webxdc. It goes further in providing a synchronized realtime experience for users. 

If you want to improve the app, please feel free to fork and [submit your variant](https://codeberg.org/webxdc/xdcget/src/branch/main/SUBMIT.md). 

## Editor with realtime cursor positions and updates

<video controls style="width:120px; max-width: 100%;float:right;margin-left:5px;" autoplay muted loop playsinline><source src="../assets/blog/2024-11-realtimeditor.mp4" type="video/mp4"></video>
The [realtime editor app](https://apps.testrun.org/realtime-editor-v4.0.1.xdc)
is a collaborative editor that can show realtime cursors and changes. 
However, it's also behaving as an offline-first app, similar to the pixel app above. 
If you join the chat-shared realtime editor app later, 
you'll see all changes combined. 

The [realtime editor repository](https://codeberg.org/jagtalon/editor) 
is a fork of the base webxdc editor but with realtime capabilities added. 
You can find more info in a [previous webxdc blog post](https://delta.chat/en/2024-02-15-webxdc-m3#a-basic-cross-platform-editor-using-prosemirror-and-yjs-148kb). 

## Unix terminal app: realtime channel to a chat bot 

<video controls style="width:120px; max-width: 100%;float:right;margin-left:5px;" autoplay muted loop playsinline><source src="../assets/blog/2024-11-xdcterm2.mp4" type="video/mp4"></video>
The [xdcterm app demo](https://github.com/link2xt/xdcterm) allows
to start a chat bot on some Unix machine and then open a terminal 
from any Delta Chat profile that has a connection to the bot. 
The [xdcterm repository](https://github.com/link2xt/xdcterm) 
is a technology *demo* that shows 
how to create a chat bot in Javascript
which will establish a realtime connection to any app
which is in contact with the bot. 
If you add the chat bot to a group then anyone in the group
can get the terminal which is shared (so it's like if "tmux" is built in). 
Note that for real usage the xdcterm example should be modified 
and maybe create a "genesis" group and allow only 
users who are members of the genesis group to join terminals. 


## Live Chat or: realtime ephemeral chatting :)

<video controls style="width:120px; max-width: 100%;float:right;margin-left:5px;" autoplay muted loop playsinline><source src="../assets/blog/2024-11-livechat2.mp4" type="video/mp4"></video>

The [ephemeral LiveChat app](https://github.com/deltazen/live-chat) 
provides ephemeral chatting with realtime typing-indicators
between anyone in a chat group who starts the live chat. 
Messages are not persisted and history is lost 
when you close the app. 
If all users have closed the app all content is gone. 
There you go, fully ephemeral, convenient, end-to-end encrypted P2P chat :) 


## Get ready, player one!

If you are interested in webxdc app development, we recommend the following readings: 

- [Getting started on developing your own app](https://webxdc.org/docs/)

- [Webxdc (Psst!) reclaiming Peer-to-Peer Web
  technology](https://delta.chat/en/2024-02-15-webxdc-m3)

- [Bringing E2E privacy to the Web: 4th security audit 😅](https://delta.chat/en/2023-05-22-webxdc-security)

Don't hesitate to get back to our fediverse account or other contact addresses
with any questions! 
