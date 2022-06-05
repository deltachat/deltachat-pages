---
title: Sharing web apps in a chat 
author: holga
image: ../assets/logos/webxdc.png
---

The recently released Delta Chat 1.30 series introduced support for [webxdc apps](https://webxdc.org). You may attach or share a <code>.xdc</code> file containing a HTML5 app to a chat and anyone there can seemlessly "start" interacting with each other.

XXX TODO: VIDEO showing how to share webxdc.org game examples through a chat 

## Sharing webxdc apps is pretty safe and easy 

Webxdc apps are started in a locked-down browser sandbox on your own device. 
Interaction with servers or entities outside the chat is technically prohibited. 
This is why ".xdc" files need to be self-contained zip-files and bring all needed resources. 
Once started, a webxdc app can send and receive data with anyone 
who also started the webxdc app in the chat. 
Delta Chat apps takes care of routing internal application updates between chat peers. 
End-to-end encryption thus comes for free for all webxdc apps. 
Even better, neither Delta chat nor webxdc app developers can gain any access to user data. 
This is why no privacy policy or consent is needed for webxdc apps.

## Writing your own HTML5 webxdc apps 

<iframe src="https://www.youtube-nocookie.com/embed/I1K4pBvb2pI" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Webxdc apps are simpler to develop and deploy than traditional web apps. 
You only need basic web development knowledge to get going, 
and do not need to implement logins, user discovery or 
maintain a platform however "serverless" they claim to be.
Just attach your HTML5 <code>.xdc</code> app to a chat or 
offer it on a web page for download so people can share it in their chats. You can find and learn from the many small examples on [webxdc.org](https://webxdc.org). 

## Could other chat messengers support webxdc apps? 

Webxdc apps could be seemlessly supported by other chat messengers.
However, many messaging projects are currently busy with 
introducing advertising or blockchains or returning profit for VC investments 
so we are not holding our breath right now. 
Rest assured, when the time comes and interest rises 
we'll be there and open to collaboration :)
