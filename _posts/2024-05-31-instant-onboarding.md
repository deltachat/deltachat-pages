---
title: Instant anonymous onboarding and push notifications
author: holga,r10s
image: ../assets/blog/secure-decent-delta.png
---

A big milestone in our 6+ years long project history: 
you can now start chatting without a pre-existing e-mail address. 
The new Delta Chat releases (1.46) introduce "Instant onboarding" 
with a growing set of [chatmail servers](/chatmail). 
New users need to provide only a name and optionally an avatar,
and hit "Agree and continue" to create their chat profile instantly
and enjoy a reliable, secure and fast messaging experience. 

XXX add small video of Android start+chat-profile screen+initial chat list 


## How to get into securely chatting with another Delta Chat user? 

When using default onboarding with [chatmail servers](/en/chatmail) 
you can only send out end-to-end encrypted messages. 
Here is how you can setup a secure chat: 

- add a new contact through a QR code scan, or 

- share your own contact info as an "invite link" 
  that any receiver who has installed Delta Chat 
  can tap to start a chat with you, or 

- share a "group chat invite" 
  that any receiver who has installed Delta Chat 
  can tap to join the group, or 

- get added to a secure group chat 
  that will allow you to message any group member. 

XXX add screenshot of an invite-qr screen with share button 

These ways of starting a chat result in "guaranteed end-to-end encryption" 
which is secure against compromised servers or networks. 
Therefore, even if you are using a classic e-mail server we recommend to use these methods. 
See the [2024 security analysis from ETH Zuerich researchers](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) for more info. 

Secure chat setup also works in mesh networks in the Amazon Rain Forest 
as well as in regions that are cut off from the wider Internet
and where users can only access a local e-mail or chatmail server. 
No central key server or global infrastructure is required. 


## New: Introduce a contact by attaching a "VCard"

XXX add screenshot of an attached vcard for "Mad Hatter" 

With the 1.46 releases you can now "attach" a contact to a chat message, 
and any receiver can tap it to start chatting with the contact. 
The contact attachment has the [vcard format](https://www.rfc-editor.org/rfc/rfc6350)
and contains an encryption number that is used to establish end-to-end encrypted messaging. 

## New: Instant privacy-preserving push notifications for Android 

XXX add screenshot of a top-level notification from "Mad Hatter" or so 

On Android, "instant push notifications" are enabled if possible,
while denying Google and Apple any access to user data or metadata. 
Even the physical seizure of a chatmail server or the seizure of our "central notification proxy" 
would not reveal which e-mail address is used on a phone, 
or which Google/Apple ID is associated with a chatmail address. 
No message data and no metadata would be revealed either, also not in encrypted form. 
Check out more details in our new [push notifications FAQ section](/help#instant-delivery).



## New: "Accounts" are dead. Long live "Chat profiles"!

<img src="/assets/blog/2024-05-create-profile.jpg" style="width:200px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />

Nobody wants or needs more accounts these days
so let us tell you about "Chat profiles" :) 

When initially onboarding with Delta Chat you'll create a "Chat profile"
which technically consists of your chosen name and avatar,
and an encryption-setup, e-mail address and password. 
The new 1.46 apps by default automate the last three choices 
and only ask for your name and avatar which is shown to other users. 
You can alternatively tap "use other server" and "manual login" 
if you want to specify an existing e-mail address for your chat profile. 

Whether using a chatmail or a classic e-mail server, 
you can always replicate your chat profile to a second device,
or export it to a file and import it from any other device. 
Chat profiles are "in your hand" and do not "live" on any central server,
also not in encrypted form. 


## Are we turning our back on classic e-mail? 

<img src="/assets/logos/chatmail.png" style="width:200px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />

No. 

Firstly, chatmail is fully interoperable with other e-mail servers, 
but does away with spam-checking and annoying rate-limits,
and allows automated anonymous sign-up without asking any private data.

Secondly, chatmail servers run the popular [postfix](https://postfix.org) 
and [dovecot](https://dovecot.org) server software in a minimal configuration,
with some small tweaks for onboarding, speed and security. 
Both systems are proven Free and Open Source software 
used by tens of thousands of e-mail providers for billions of messages per day. 

Thirdly, you can still use your existing e-mail address and
there are many [providers](https://providers.delta.chat) 
with which Delta Chat works well. 

Lastly, while Delta Chat aims to offer easier onboarding than Whatsapp, Signal or Telegram 
you can also use and regard it as an e-mail app. 
All Delta Chat apps offer multi-profile support 
which means you can have a profile for instant chat messaging 
*and* another profile with a pre-existing e-mail address for classic e-mail purposes. 


## Are we de-emphasizing e-mail addresses in the user interface? 

Yes. 

We aim to make Delta Chat more approachable to the many 
who do not care about or are even skeptical of "e-mail". 
In all likelyness that's not you 
because you wouldn't be reading this post here, then :) 
But you probably know people who might appreciate that Delta Chat 
does not require a phone number or other personal data, 
offers privacy, censorship resistance, a free "choice of server" 
as well as a convenient and reliable user experience 
that integrates games and collab tools, 
along with a growing chat bot ecosystem? 


## Chatmail makes e-mail not only fast but cheap again 

With our new chatmail-based instant onboarding system, 
e-mail addresses are becoming, once again, cheap and virtually free. 
But this time around, there is no company posturing to "do no evil" 
luring everyone to their central "ethical" service and then drop the pretense soon after. 
Running a chatmail server is a cheap activity that we want people
to be able to do on the side and on low-end hardware all across the world. 
Chatmail is best understood as a blind and ephemeral end-to-end encrypted 
messaging router running at Internet-scale. 


## Widely used Internet standards for the win 

<a href="https://xkcd.com/927/"><img src="https://imgs.xkcd.com/comics/standards_2x.png" style="width:400; float:center; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="XKCD 927 comic" /></a>
No. 

Firstly, chatmail is fully interoperable with other e-mail servers, 
but does away with spam-checking and annoying rate-limits,
and allows automated anonymous sign-up without asking any private data.

Secondly, chatmail servers run the popular [postfix](https://postfix.org) 
and [dovecot](https://dovecot.org) server software in a minimal configuration,
with some small tweaks for onboarding, speed and security. 
Both systems are proven Free and Open Source software 
used by tens of thousands of e-mail providers for billions of messages per day. 

Thirdly, you can still use your existing e-mail address and
there are many [providers](https://providers.delta.chat) 
with which Delta Chat works well. 

Lastly, while Delta Chat aims to offer easier onboarding than Whatsapp, Signal or Telegram 
you can also use and regard it as an e-mail app. 
All Delta Chat apps offer multi-profile support 
which means you can have a profile for instant chat messaging 
*and* another profile with a pre-existing e-mail address for classic e-mail purposes. 


## Are we de-emphasizing e-mail addresses in the user interface? 

Yes. 

We aim to make Delta Chat more approachable to the many 
who do not care about or are even skeptical of "e-mail". 
In all likelyness that's not you 
because you wouldn't be reading this post here, then :) 
But you probably know people who might appreciate that Delta Chat 
does not require a phone number or other personal data, 
offers privacy, censorship resistance, a free "choice of server" 
as well as a convenient and reliable user experience 
that integrates games and collab tools, 
along with a growing chat bot ecosystem? 


## Chatmail makes e-mail not only fast but cheap again 

With our new chatmail-based instant onboarding system, 
e-mail addresses are becoming, once again, cheap and virtually free. 
But this time around, there is no company posturing to "do no evil" 
luring everyone to their central "ethical" service and then drop the pretense soon after. 
Running a chatmail server is a cheap activity that we want people
to be able to do on the side and on low-end hardware all across the world. 
Chatmail is best understood as a blind and ephemeral end-to-end encrypted 
messaging router running at Internet-scale. 


## Widely used Internet standards for the win 

<a href="https://xkcd.com/927/"><img src="https://imgs.xkcd.com/comics/standards_2x.png" style="width:400; float:center; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="XKCD 927 comic" /></a>

How often have you heart "E-mail is dead" or 
"here is this brand new thing to replace e-mail" 
from marketing departments throughout the last two decades? 
How often have you heart "The Web is dead and replaced by mobile apps"
only to find most mobile apps being a thinly veiled web view, anyway? 

By contrast, our carefully curated minimal usage of widely 
deployed e-mail and web standards 
remains as our core approach to avoid the pitfalls and failures
that come with the many past and present
"inventing a new standard that can replace e-mail or the Web" efforts.

The currently rolling releases mark a major milestone in our endeavour 
of leveraging the existing massively distributed e-mail network 
and enriching it with an interoperable way to do convenient chat messaging. 
