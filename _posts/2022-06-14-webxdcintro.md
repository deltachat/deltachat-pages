---
title: Sharing web apps in a chat 
author: holga
image: ../assets/logos/webxdc.png
---

Delta Chat 1.30 introduces support for [webxdc apps](https://webxdc.org): which makes it possible to share HTML5 apps (packaged as <code>.xdc</code> files) inside your chats, so that any participant can run the app by clicking "Start" in the message.

XXX TODO: VIDEO showing how to share webxdc.org game examples through a chat 

## Sharing webxdc apps is safe and easy 

Webxdc apps run in a sandboxed browser on your device, which restricts interaction with external servers or entities outside the chat; this is why <code>.xdc</code> files need to be self-contained zip-files with all necessary resources.

Once running, webxdc apps can send and receive data with any chat participant; the Delta Chat app takes care of routing updates to the right place.

All webxdc apps get end-to-end encryption for free, and user data cannot be accessed by Delta Chat or webxdc app developers. No privacy policy or consent is needed for webxdc apps because all data is stored on-device or between invited chat participants.

## Writing your own HTML5 webxdc apps 

<iframe src="https://www.youtube-nocookie.com/embed/I1K4pBvb2pI" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Webxdc apps are simpler to develop and deploy than traditional web apps. 
You only need basic web development knowledge to get going, 
and do not need to implement logins, user discovery or 
maintain a platform.
Just attach your HTML5 <code>.xdc</code> app to a chat or 
offer it on a web page for download so people can share it in their chats. You can find and learn from the many small examples on [webxdc.org](https://webxdc.org). 

## Could other chat messengers support webxdc apps? 

Webxdc apps could be seemlessly supported by other chat messengers.
However, many messaging projects are currently busy with 
introducing advertising or blockchains or returning profit for VC investments 
so we are not holding our breath right now. 
Rest assured, when the time comes and interest rises 
we'll be there and open to collaboration :)
