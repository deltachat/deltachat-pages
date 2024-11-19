---
title: Delta Chat introduces Peer-to-Peer networking 
author: olgax
image: ../assets/logos/webxdc-centered.png
---

After almost two years of collaboration 
with the wonderful [Iroh team](https://iroh.computer),
and years of discussions with numerous experts in the decentralization space, 
we are happy to announce that **Delta Chat 1.48 apps on all platforms 
contain state-of-the-art Peer-to-Peer networking support**,
including [hole punching](https://en.wikipedia.org/wiki/Hole_punching_(networking)),
end-to-end encryption and [gossipping](https://en.wikipedia.org/wiki/Gossip_protocol). 
Private Peer-to-Peer networks are established 
between users who start a [webxdc app](https://webxdc.org/apps)
that uses the new [joinRealtimeChannel API](https://webxdc.org/docs/spec/joinRealtimeChannel.html). 

<video controls style="width:560px; max-width: 100%;"><source src="https://merlinux.eu/webxdc-realtime-148.mp4" type="video/mp4"></video>

In the following sections, we discuss the "Pixel app" and other realtime example apps,
before providing more background on this major project milestone
which was in the making for almost two years. 


## Pixel app: small, offline-first and realtime 

<img src="../assets/blog/2024-11-pixel.jpg" style="width:200px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="pixel1-screenshot" />

The [source code of the pixel app](https://codeberg.org/webxdc/pixel/src/branch/main/script.js) 

- consists of 241 lines of Javascript (including all dependencies),

- offers collaborative realtime pixel-drawing 

- BUT does not require users to be online at the same time. 

The pixel app achieves its hybrid offline-first and realtime connectivity 
by using two separate webxdc messaging APIs:

- [webxdc.sendUpdate](https://webxdc.org/docs/spec/sendUpdate.html) 
  to relay "application updates" through the regular host messenger channel 
  (e-mail for Delta Chat, XMPP message for Cheogram and Monocles). 

- [realtimeChannel.send](https://webxdc.org/docs/spec/sendUpdate.html) 
  to relay ephemeral application messages to any P2P-connected chat partner. 

To learn the theory behind how the pixel app achieves "eventual synchronization for all users",
we suggest to dive into our [Shared Web Application state chapter](https://webxdc.org/docs/shared_state/index.html)
and then re-read [the 241 lines of Javascript](https://codeberg.org/webxdc/pixel/src/branch/main/script.js) with a particular eye to "Lamport Clocks" :) 

If you want to improve the app, please fork and [submit your variant](https://codeberg.org/webxdc/xdcget/src/branch/main/SUBMIT.md). 
There already is the [ColorPixel app](https://apps.testrun.org/deltazen-pixel-v0.3.0.xdc)
which is a [Pixel fork](https://github.com/DeltaZen/pixel) 
where each participant draws pixels in a different color. 

## Pong app: realtime-only and implements clock synchronization

<video controls style="width:120px; max-width: 100%;float:right;margin-left:5px;" autoplay muted loop playsinline><source src="../assets/blog/2024-11-pong2.mp4" type="video/mp4"></video>
The [pong app repository](https://codeberg.org/webxdc/pong/src/branch/main) 
provides a simple two-player implementation of the [classic pong game](https://en.wikipedia.org/wiki/Pong). 
UX-wise it's rudimentary but it does implement basic "clock synchronization" 
which is an important consideration for any realtime networked gaming app.  

Wouldn't it be nice to have more original or more modern versions of Pong? 
Maybe also with sounds and colors? 
Also, to provide a more refined network handling of Pong, 
it might be worthwhile to look into [WebRTC Pong](https://mitxela.com/projects/webrtc-pong)
and port it to Webxdc. 

Again, if you want to improve this little classic, 
please fork and [submit your variant](https://codeberg.org/webxdc/xdcget/src/branch/main/SUBMIT.md). 

## Realtime Editor: cursor positions and immediate collab 

<video controls style="width:120px; max-width: 100%;float:right;margin-left:5px;" autoplay muted loop playsinline><source src="../assets/blog/2024-11-realtimeditor.mp4" type="video/mp4"></video>
The [realtime editor app](https://codeberg.org/jagtalon/editor)
is a collaborative editor that can show realtime cursors and changes. 
However, it's also behaving as an offline-first app, similar to the pixel app above. 
If you join a chat-shared realtime editor app later, 
you'll see all changes consistently combined. 
The realtime editor is a fork of the [basic webxdc editor](https://codeberg.org/webxdc/editor) 
but with realtime capabilities added. 

Wouldn't it be nice if there would be coloring of edits? 
Maybe provide a slider that allows to go back in document history? 
Or maybe a way to import a picture into the realtime pad? 

Again, if you can and want to improve this editor tool 
you are more than welcome. 
Please fork and [submit your variant](https://codeberg.org/webxdc/xdcget/src/branch/main/SUBMIT.md). 

## Unix terminal app: realtime with a chat bot 

<video controls style="width:120px; max-width: 100%;float:right;margin-left:5px;" autoplay muted loop playsinline><source src="../assets/blog/2024-11-xdcterm2.mp4" type="video/mp4"></video>
The [xdcterm app demo](https://github.com/link2xt/xdcterm) allows
to start a chat bot on some Unix machine and then open a terminal 
from any Delta Chat profile that has a connection to the bot. 
Note that XDCTerm is a technology *demo* that shows 
how to create a chat bot in Javascript
which will establish a realtime connection to any app
which is in contact with the bot. 
If you add the chat bot to a group then anyone in the group
can get the terminal which is shared (so it's like if "tmux" is built in). 
For real-life usage the xdcterm example should better be modified 
and maybe rather create a "genesis" group and allow only 
users who are members of the genesis group to join terminals. 

Again, if you want to improve this terminal app,
please fork and feel free to let us know. 
You can't submit it into the [webxdc apps collection](https://webxdc.org/apps)
because it depends on a running chat bot. 

## Live Chat: realtime chat in a chat :)

<video controls style="width:120px; max-width: 100%;float:right;margin-left:5px;" autoplay muted loop playsinline><source src="../assets/blog/2024-11-livechat2.mp4" type="video/mp4"></video>

The [LiveChat app](https://github.com/deltazen/live-chat) 
provides ephemeral chatting with realtime typing-indicators
between anyone in a chat group who starts the live chat. 
Messages are not persisted and all history is cleared
when you close the app. 
If all users have closed the app all content is gone. 
There you go. Fully ephemeral, end-to-end encrypted P2P chat at your fingertips :) 

You may also use a Live Chat app in a larger existing chat group 
to announce a fast "ephemeral side conversation" that will not cause any network traffic
for other chat group members who don't join the live chat. 
Not all large group chats want to 

## Get ready, player one!

<img src="../assets/logos/webxdc2.png" style="width:160px; float:left; clear:both; margin-right:3em; margin-bottom:.2em;" alt="Webxdc Logo" />
To get started on webxdc app development, apart from the above app source links,
we recommend the following readings: 

- [Getting started on developing your own app](https://webxdc.org/docs/)

- [Webxdc (Psst!) reclaiming Peer-to-Peer Web
  technology](https://delta.chat/en/2024-02-15-webxdc-m3)

- [Bringing E2E privacy to the Web: 4th security audit 😅](https://delta.chat/en/2023-05-22-webxdc-security)

Please don't hesitate to get back to our fediverse account 
or other contact addresses with any questions!

## Technical background on our Iroh/P2P integration 

A joint focus with the Iroh team has been to support all platforms reliably,
including mobile platforms, and to get it stable enough to support it by default. 
For the last half year Delta apps had an opt-in experimental "webxdc realtime" setting
which, after extensive testing and bug fixing, is now enabled by default. 

### How private P2P networking is established 

<a href="https://iroh.computer">
<img src="../assets/logos/iroh.svg" style="width:160px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="Iroh Logo" />
</a>

Only if you start an app that uses the 
[webxdc.joinRealtimeChannel() API](https://webxdc.org/docs/spec/joinRealtimeChannel.html)
will Delta Chat initiate participation of your device in a P2P network. 
Delta Chat will send an end-to-end encrypted "system" chat message to a group chat
that contains an [Iroh Ticket](https://www.iroh.computer/docs/concepts/tickets). 
When receiving devices also join the realtime channel, 
they can establish a direct connection immediately because the ticket is already on record. 
No lookup in a global [distributed hash table](https://en.wikipedia.org/wiki/Distributed_hash_table)
slows down or complicates the initial connection. 
The federated e-mail system is used to bootstrap an ephemeral Peer-to-Peer network. 

<a href="https://github.com/deltachat/deltachat-core-rust">
<img src="../assets/blog/rust-delta.png" width="270" style="float:right; margin-left:1em;" />
</a>
To establish a direct P2P connection, 
two interested devices will use an ephemeral [Iroh Relay](https://www.iroh.computer/docs/protocols/net#relays) 
which typically runs on every chatmail server, 
mirroring the existing e-mail federation. 
If your chat profile is using a classic e-mail server
then a global default relay is used, operated from the Iroh team. 

The Iroh relay server combines both [Stun](https://en.wikipedia.org/wiki/STUN)
and [TURN](https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT) functionality,
to allow peers to discover and directly connect and to 
facilitate relaying of messages as long as no direct connection is established. 

For even more details than presented in this section, please check our 
[Rust deltachat::peer_channels docs](https://rs.delta.chat/deltachat/peer_channels/index.html). 


### Identity on the P2P network is ephemeral only 

Delta Chat uses ephemeral cryptographic identities for any P2P messaging. 
When Delta Chat is closed or stopped by the operating system,
then a new identity will be created on the next start. 
All previous decryption keys will be forgotten
which provides a variant of so called [Forward Secrecy](https://en.wikipedia.org/wiki/Forward_secrecy) because a network traffic collector and attacker 
can not later compromise your device to decrypt past recorded traffic. 
Just start a LiveChat in a chat group :) 

### A privacy note on IP-addresses

<img src="../assets/blog/two-faces.jpg" width="140" style="float:right; margin-left:1em;" />
Delta Chat does not store IP-addresses permanently anywhere 
and it does not expose IP addresses in the user interface or to web apps. 
Iroh relay servers do not see all the IP addresses 
that user devices advertise to each other (for example they don't see the WLAN addresses),
and they also do not store any IP addresses involved in facilitating a P2P connection. 

However, your chat partners may learn about your IP address if they deploy
some network monitoring tool or use a modified version of Delta Chat. 
If using webxdc apps with a potentially hostile chat partner is a concern for you 
you may disable the "webxdc realtime" setting in "advanced settings". 
Delta Chat will then never attempt any Peer-to-Peer connection with anyone. 
This is similar to how you can opt into "protect your IP address" in Signal or Whatsapp
who by default establish Peer-to-Peer connections for calls between users, as well. 

## On other implementations, specifications and protocols 

When other webxdc-supporting XMPP messengers like [Cheogram](https://cheogram.com) and [Monocles](https://monocles.eu/more/) implement the new webxdc realtime API,
they are not required to use Iroh but can instead 
use other existing XMPP ephemeral messaging capabilities. 

The [webxdc.joinRealtimeChannel() API](https://webxdc.org/docs/spec/joinRealtimeChannel.html)
is a minimal high-level API 
that is easier to use than the [classic WebRTC Browser P2P API](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)
because a [webxdc messenger implementator](https://webxdc.org/docs/spec/messenger.html)
carries the burden to manage all dynamic connectivity, discovery and network routing aspects. 

In fact Delta Chat apps themselves 
could evolve to use a different implementation for webxdc realtime communications. 
We've noted in the Fediverse lately that [Protocols and specifications provide freedom of exit](https://chaos.social/@delta/113492052382161817) 
and the new realtime API specification is a practical example for that. 

## Thanks to NLNET and NGI for their support and joint vision!

<img alt="NLNet Logo" src="../assets/logos/logo_nlnet.svg" width="140" style="float:right; margin-left:1em;" />  
Our introduction of the webxdc realtime API has been 
supported by [NLnet](https://nlnet.nl/)
themselves funded by the European Commission's [Next Generation Internet](https://ngi.eu/) 
programme.

