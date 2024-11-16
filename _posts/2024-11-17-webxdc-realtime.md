---
title: Delta Chat introduces P2P networking for webxdc apps 
author: olgax
image: ../assets/logos/webxdc-centered.png
---

<img src="../assets/logos/webxdc2.png" style="width:160px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="Webxdc Logo" />
The rolling Delta Chat 1.48 app releases introduce the new 
[webxdc realtime API](https://webxdc.org/docs/spec/joinRealtimeChannel.html) 
which establishes a private P2P network between all users of a chat-shared app. 
Web apps can now call [webxdc.joinRealtimeChannel()](https://webxdc.org/docs/spec/joinRealtimeChannel.html) and thereby instruct the hosting messenger to establish ephemeral 
realtime channels with peers.  

To implement webxdc realtime channels, 
Delta Chat uses the [Iroh Networking library](https://iroh.computer),
driven by an experienced developer team with whom we enjoy collaboration for a longer time; big shoutout as Iroh is also behind the multi-device setup of Delta Chat!

The new webxdc realtime API is not only easier to use than the classic 
[WebRTC Browser API](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection).
but it is also faster in some situations, according to preliminary measurements. 
Here is a little 30 second video showcasing the
[offline-first and realtime Pixel app](XXX link to latest release) 
between an iPhone and an old Android phone. 

<video controls style="width:560px; max-width: 100%;"><source src="https://merlinux.eu/webxdc-realtime-148.mp4" type="video/mp4"></video>

In the following sections, we provide technical details about "Pixel" 
and highlight a few other first realtime apps
that are available through the [webxdc app store](https://webxdc.org/apps/). 

## Pixel app is small, offline-first and realtime 

XXX add pixel image on the right side 

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

## The "Pong" app is realtime-only and implements delay compensation 

XXX provide 10-second Pong video of two players playing 

The [pong app](https://apps.testrun.org/pong-v1.xdc) 
is a simple two-player implementation of the classic ping pong 
experience back in the 1970ties. 
It's UX wise rudimentary but implements basic "clock synchronization" 
which is an important consideration for any realtime networked gaming app.  
Please see the [pong source code](https://codeberg.org/webxdc/pong/src/branch/main) 
for details. 

## The Unix terminal app using a realtime channel to a chat bot 

XXX provide 1-second video of using a mobile to open a terminal 

The [xdcterm app demo](https://github.com/link2xt/xdcterm) requires
a npm/node install to run a chat bot and then provides a Terminal app 
so that you (or a group member of a chat group) can open a realtime terminal 
to where the chat bot runs. 

## The LiveChat app providing realtime ephemeral chatting 

XXX provide a 10-second video of 3 people live chatting 

The [LiveChat app](https://github.com/deltazen/live-chat) 
provides ephemeral "irc-style" chatting with typing-indicators
for anyone from a chat groups who joins. 
Messages are not persisted and history is lost 
when the last users closes the app. 


## Get ready, player one!

If you are interested in webxdc app development, we recommend the following readings: 

- [Getting started on developing your own app](https://webxdc.org/docs/)

- [Webxdc (Psst!) reclaiming Peer-to-Peer Web
  technology](https://delta.chat/en/2024-02-15-webxdc-m3)

- [Bringing E2E privacy to the Web: 4th security audit 😅](https://delta.chat/en/2023-05-22-webxdc-security)

Don't hestitate to get back to our fediverse account or other contact addresses
with any questions! 
