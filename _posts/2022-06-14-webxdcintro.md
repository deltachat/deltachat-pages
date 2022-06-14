---
title: Sharing web apps in a chat 
author: holga
image: ../assets/logos/webxdc.png
---

Delta Chat 1.30 introduces support for [webxdc apps](https://webxdc.org): which makes it possible to share HTML5 apps (packaged as <code>.xdc</code> files) inside your chats, so that any participant can run the app by clicking "Start" in the message.  It transforms Delta Chat into an *extensible* messenging app where third parties can easily program custom interactive chat extensions, called "webxdc apps". 

## Sharing webxdc apps is safe and easy 

Webxdc apps run in a sandboxed browser on your device, which restricts interaction with external servers or entities outside the chat; this is why <code>.xdc</code> files need to be self-contained zip-files with all necessary resources.

Once running, webxdc apps can send and receive data with any chat participant who also runs the apps; the Delta Chat app takes care of routing updates to the right place.

All webxdc apps get end-to-end encryption for free, and user data cannot be accessed by Delta Chat or webxdc app developers. No privacy policy or consent is needed for webxdc apps because all data is stored on-device or between invited chat participants.

## Writing your own webxdc apps with HTML5

<iframe src="https://www.youtube-nocookie.com/embed/I1K4pBvb2pI" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Webxdc apps are simpler to develop and deploy than traditional web apps: you can get started with a simple understanding of HTML, CSS, and JavaScript, without implementing logins, user discovery, or a platform, let alone the legal and operational issues that come with that. 

Just package your web app as an <code>.xdc</code> file (a zip archive, renamed), and then drop it in a chat, or offer it for download on a web page so others can share it in their chats. There are many examples from simple to complex on [webxdc.org](https://webxdc.org).

## Where do we go from here? 

Webxdc is designed to be an open standard, not exclusive to Delta Chat. We would love to see other messaging projects support webxdc apps. There is nothing in webxdc apps that fundamentally ties it to Delta Chat. Then again, it is maybe not a co-incidence that the webxdc "web over chat" idea grew and evolved in Delta's "chat over e-mail" development communities. After all, webxdc and Delta Chat apps share a unique characteristic: app developers or distributors get no access to user data whatsoever, not even in encrypted form. The best data is no data :) 
