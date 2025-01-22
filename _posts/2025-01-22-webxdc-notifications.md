---
title: Releases towards billionaire-proof web app "platforms" 
author: olgax
image: ../assets/logos/webxdc-centered.png
---

How can we develop and deploy social web apps without allowing developers and operators 
to become a "billionaire in the middle"? 

There are many ways to try to answer this question and only few are technical. 

For example, [#FediWave FairTradeMusic artist-run initiative for promotion and marketing](https://dok.kompot.si/FediWaveArtistRunPromoMachine#) or [#faircamp](https://simonrepp.com/faircamp/)
are part of brewing fediversal activities out of the music-platform-mediation misery. 

# Revisiting core Internet protocols to develop social web apps 

However, many of today's billionaires built their empires on a house of Internet protocols
which co-effected central control and monetization of social flows between billions of people. 

The "Web", and the HTTP protocol in particular, played a crucial part in producing billionaires
and possibly unprecedented political power concentration. 
Our evolving [webxdc](https://webxdc.org) efforts are about 
exploring a world of web apps without HTTP ... sorry Google, not sorry. 

Joined by XMPP-messengers [Cheogram](https://cheogram.com) and [Monocles](https://monocles.eu), 
and supported by several contributing experts in the background, 
we are playing with addressing the no-billionaire-platforms challenge (tm) with 
[webxdc](https://webxdc.org), a container format and API for "chat-shared web apps". 

Technically, webxdc apps are HTML5 apps but instead of the HTTP protocol 
they use [Peer-to-Peer send/receive APIs](https://webxdc.org/docs/spec/sendUpdate.html) 
implemented by a webxdc-app hosting messenger.  
You can take a webxdc `.xdc` zip file and run it unmodified in different chats/rooms or messengers,
providing for some interesting billionaire-prevention characteristics: 

- users have both the code and the data of web apps on their end devices 
  and benefit from end-to-end encrypted messaging not only during regular chat messaging 
  but also during their private social web app usage. 

- web app developers never obtain any data or identities of users;

- messengers can not hold web app developers or users hostage;

But big claims of new or, um, revolutionary Peer-to-Peer "platforms" are plenty
and were particularly inflated during [Web3 times](https://en.wikipedia.org/wiki/Web3)
as some of you may remember. 
So instead of further engaing in big-word games,
let's look at some of the recent webxdc-related releases and advances
around aforementioned messengers and the specification itself. 


## All messengers now integrate instant app discovery and selection

There is now a curated collection of apps available at [https://webxdc.org/apps](https://webxdc.org/apps) which got a thorough UX/UI streamlining by Jag, a former DuckDuckGo UX/UI frontend engineer. 
It's a static web page offering "tool" and "game" search 
with short descriptions and per-app URLs so you can point people to a particular app. 
More interestingly, all webxdc-supporting messengers integrated the new "app picker" 
into their primary UX/UI which you can find in the "attach" menu when sending messages. 

Apart from Cheogram, Monocles and the mainline Delta Chat apps, 
also ArcaneChat (a soft Android-fork) and DeltaTouch (a Lorimi-based UI for UbuntuTouch phones, 
also running in some Desktop environments)
offer this new instant discover + pick app action. 
Most messengers also allow to configure a different URL for an alternative app-picker web page. 


## Webxdc apps can now cause instant notifications 

We specified and implemented a new notification mechanism so that apps like Chess and XXX 
can cause a system-level notification between app users aka "it's your turn"
or "your chat partner added a new meeting date". 
For webxdc apps to "notify" users they need to specify a list of *identities*
when [sending application updates](https://webxdc.org/docs/spec/sendUpdate.html). 
Each user gets a unique identity per app 
that can not be correlated to user identities of a different app (instance). 
[`webxdc.selfAddr`](https://webxdc.org/docs/spec/selfAddr_and_selfName.html#selfaddr) 
now provides a per-app user identifier. 
Even if an app managed to trick its users to use "copy+paste" of identity strings
`selfAddr` identities of the same user are different and un-linkable between any two apps. 

Webxdc apps basically re-use the existing push notification machinery of their host messengers. 
without having to interact with Google or Apple at all. 
Webxdc apps can just trigger notifications without going through all the troubles. 


## Webxdc apps can query rate limits of send APIs

Different messengers and transport servers have different "send rate limits",
namely how many messages are allowed to be send per time duration,
and how big application updates can be. 
Apps can query freshly specified [sendUpdate limits](https://webxdc.org/docs/spec/sendUpdate.html#messaging-layer-limits-for-sendupdate) for the "reliable" application update channel (currently chatmail and XMPP).
The [recently introduced webxdc realtime channels](https://delta.chat/en/2024-11-20-webxdc-realtime) also introduced a static limit of 128KB for ephemeral application updates
which are only distributed between all "currently online" participants. 


# Replacing Venture-Capital platforms with ZIP files? 

There is no shortage of Venture-Capital backed platforms that 
offer "free" web apps or native mobile apps to mediate interactions between friends. 
What if you could run such apps in your private chats without needing any mediator,
sign-ups, logins etc? 
Meet [Split Bill](https://webxdc.org/apps/#jagtalon-splitbill)
which provides a way to jointly record expenses for a trip or dinner event 
and get a balance of who owes/is owed. 
You can "join" a bill even if you had no expenses. 

