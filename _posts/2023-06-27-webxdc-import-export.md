---
title: A milestone in making WebXDC apps exchange data with other apps
author: holga 
image: ../assets/blog/2022-12-webxdc-poll.jpg
---

Earlier this year we worked hard to enforce [chat-shared web app privacy](https://delta.chat/en/2023-05-22-webxdc-security) 
but what good is having totally private apps if there is no convenient way to exchange data with the rest of the world? 
Enter Delta Chat 1.38 releases which spearhead [two new WebXDC APIs](https://docs.webxdc.org/spec.html#sendtochat) 
to allow web apps to safely exchange data and interoperate with other tools. 
To showcase and design the new APIs we developed a little [cross-platform Calendar web app](https://github.com/webxdc/calendar/) that: 

- can be shared in any (group) chat and then be used to create
  and view calendar events without requiring any login or hosting, 

- allows to import invites (`.ics` files) as produced by other calendaring apps, 

- allows to share invites to a user-selected chat or contact 
  where the recipient(s) can tap the received file 
  to import the invite into their own favorite native calendar app, 

- can also run unmodified as an [Calendar online demo](https://webxdc.github.io/calendar/) 
  which however stops short of the actual chat-sharing activity. 

You may [download the latest Calendar app here](https://github.com/webxdc/calendar/releases/latest/download/calendar.xdc) 
and then send the `.xdc` app file into your "Saved messages" chat (shared between all your devices) or into any group chat so that chat members can play around as well. 

In a similar way, you may also play with a little [Draw app](https://github.com/webxdc/draw.xdc/releases/download/latest/draw.xdc) that can be used to import and draw pictures and then share them in a chat.

Please note that both the Calendar and Draw apps were done "on the side" 
by Delta Chat developers who are not specializing into web apps. 
The Calendar app can not fully replace current native Calendar apps 
because it currently lacks features but it can be a lightweight solution 
for chat groups to keep a joint calendar. 
If you have capacity and interest, please contribute improvements 
while we will rather focus on ironing out any underlying issues 
with the Delta Chat messenger app suite. 


## All fine and dandy but what about other messengers supporting WebXDC? 

In recent months we were very happy to notice that 
two Android XMPP-messengers, [Cheogram](https://cheogram.com/) and [Monocles](https://monocles.wiki/index.php?title=Main_Page),
added experimental support for WebXDC apps. 
We hope that the new Export/Import APIs become soon available there as well 
so the unmodified Calendar and Draw apps can be run there as well.


## Thanks to NLNET's Zero Entrust Next-Generation-Internet support 

Our work on introducing new I/O APIs for WebXDC apps was funded 
through the [NLNET Zero Entrust](https://nlnet.nl/entrust/) program,
in turn supported by Next-Generation-Internet funding from the European Commission. 
In particular, we are grateful to Michiel and Gerben from NLNET 
who provided great guidance and support for our efforts. 
