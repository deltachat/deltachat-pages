---
title: Instant onboarding and instant message delivery 
author: holga,r10s
image: ../assets/blog/secure-decent-delta.png
---

<img src="../assets/blog/2024-05-create-profile.jpg" style="width:200px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />

Big milestone in our 6+ years long project history: 
With the rolling 1.46 app releases you can start chatting without a pre-existing e-mail address. 
Just provide a name and then tap "Agree and continue" 
to create a chat profile using the [default chatmail server](https://nine.testrun.org/privacy.html) 
or visit other [chatmail servers](/chatmail) and tap the invite on their home page. 

Great. So creating a profile takes now only a few seconds but what then? 


## Maybe try out chatting with some bots? 

Once Delta Chat is installed, 
you can tap [this "Public Bots" link](https://i.delta.chat/#9AF055DB87EC48A1C009B6CA55E3712A6F7D346F&a=botsindex%40nine.testrun.org&n=Public%20Bots&i=QpBSronexvP&s=nAfQ0q_JomN) 
which will send you a little web app to view and select some existing bots. 

## Or join a secure chat with a human fellow? 

When using default sign-up with [chatmail servers](/chatmail) 
you can only send out end-to-end encrypted messages. 
But it's easy and recommended anyway 
to setup [guaranteed end-to-end encrypted chats](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) by 

- adding a new contact through a QR code scan, or 

- sharing your own contact info as an "invite link" 
  that any receiver who has installed Delta Chat 
  can tap to start a chat with you, or 

- sharing a "group chat invite" 
  that any receiver who has installed Delta Chat 
  can tap to join the group, or

- being added to a secure group chat 
  which will allow you to message any group member. 


<img src="../assets/blog/2023-11-qr-scan.jpg" style="width:160px; clear:both; margin-left:.5em; margin-bottom:.2em;" />
<img src="../assets/blog/green-checkmark.svg" width="140" style="margin-left:1em;" /> 

Note that these secure chat setups work just fine in mesh networks in the Amazon Rain Forest 
or in regions that are cut off from the wider Internet
because no central key server or other global infrastructure is required. 


## New: Introduce a contact by attaching a "VCard"

<img src="../assets/blog/2024-05-vcard2.png" style="width:250px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />

With the 1.46 releases you can now "attach" a contact to a chat message, 
and any receiver can tap it to start chatting with the contact. 
The contact attachment has the [vcard format](https://www.rfc-editor.org/rfc/rfc6350)
and contains an encryption number that is used to establish end-to-end encrypted messaging. 


## New: Instant privacy-preserving push notifications for Android 

XXX add right-aligned screenshot of a top-level notification from "Alice" or so 

On Android, "instant push notifications" are enabled if possible,
while denying Google and Apple any access to user data or metadata. 
Even the physical seizure of a chatmail server or the seizure of our "central notification proxy" 
would not reveal which e-mail address is used on a phone, 
or which Google/Apple ID is associated with a chatmail address. 
No message data and no metadata would be revealed either, also not in encrypted form. 
Check out more details in our new [push notifications FAQ section](/help#instant-delivery).


## Chat profiles: on your device and in your hand 

<img src="../assets/blog/2024-05-create-profile.jpg" style="width:200px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />

Delta Chat does not keep or rely on storing data at e-mail servers 
but only uses them for ephemeral message transport. 
When initially onboarding with Delta Chat you'll create a "Chat profile"
which initially consists of your chosen name and avatar,
and an encryption-setup, e-mail address and password. 
The new 1.46 apps by default automate the last three 
and only ask for your name and avatar but
if you tap "use other server" and "manual login" 
you can manually specify an existing e-mail address. 

Over time, your chat profile accumulates contacts, chat groups, 
messages and media files. 
Whether using a chatmail or a classic e-mail server, 
you can always replicate your chat profile with all data to a second device,
or export it to a file and then import and use it from any other device. 
Chat profiles are "in your hand" and are not stored on any central server,
also not in encrypted or PIN-protected form. 


## Are we turning our back on classic e-mail? 

<img src="../assets/logos/chatmail.png" style="width:200px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />

No. 

Firstly, chatmail is a fully interoperable e-mail server, 
but does away with spam-checking and annoying rate-limits,
and allows automated anonymous sign-up without asking any private data.
Also chatmail is much faster than most other e-mail servers. 

Secondly, chatmail servers run the popular [postfix](https://postfix.org) 
and [dovecot](https://dovecot.org) server software in a minimal configuration,
with some small tweaks for onboarding, speed and security. 
Both systems are proven Free and Open Source software 
used by tens of thousands of e-mail providers for billions of messages per day. 

Thirdly, you can still use your existing e-mail address and
there are many [providers](https://providers.delta.chat) 
with which Delta Chat works well apart from the lack of push notification support. 

Lastly, while Delta Chat aims to offer easier onboarding than Whatsapp, Signal or Telegram 
you can also use and regard it as an e-mail app. 
All Delta Chat apps offer multi-profile support 
which means you can have a profile for instant chat messaging 
*and* another profile with a pre-existing e-mail address for classic e-mail purposes. 


## Are we de-emphasizing e-mail addresses in the user interface? 

Yes. 

We aim to make Delta Chat more approachable with those 
who do not care about or are even skeptical of "e-mail". 
In all likelyness that's not you because you are reading this post here :) 
But you probably know people who might appreciate that Delta Chat 

- provides a convenient and reliable messaging experience,

- does not require a phone number or any other personal data, 

- offers privacy, censorship resistance and free choice of server,

- offers in-chat games like 2048, chess or hextris,
  and in-chat tools like an editor, a calendar and a checklist 
  and all of that without requiring any server support. 

In light of all these features, we prefer to not require 
would-be-users first to understand what "e-mail" has to do with anything. 
Or as a 20-year old women once reacted "E-mail? Isn't e-mail just there fore spam and work?"
E-mail in the form of chatmail is so much more than that 
but e-mail addresses recede into the background of Delta Chat 
just like phone numbers recede into the background of classic phone-based messengers. 


## Chatmail makes e-mail cheap again 

With our new chatmail-based instant onboarding system, 
e-mail addresses are becoming, like in the early 2000s, cheap and virtually free. 
But this time around, there is no company posturing to "do no evil" 
luring everyone to their central "ethical" service and then drop the pretense soon after. 
[Running a chatmail server](https://delta.chat/en/2023-12-13-chatmail) is a cheap activity 
that we want people to be able to do on the side 
and on low-end hardware all across the world. 
Chatmail is best described as an ephemeral end-to-end encrypted 
messaging routing system running at Internet-scale. 

## Internet standards FTW or: e-mail strikes back!

How often have you heart "E-mail is dead" or 
"here is this brand new thing to replace e-mail" 
from marketing departments throughout the last two decades? 
How often have you heart "The Web is dead and replaced by mobile apps"
only to find most mobile apps being a repackaged web view, anyway? 

By contrast, Delta Chat fully embraces both E-mail and Web standards 
to avoid the pitfalls and failures of prior and current 
"inventing a new standard that will replace e-mail (or the Web)" efforts.
Our new "Instant onboarding" releases cultivate and grow chatmail servers,
as part of the existing massively distributed e-mail network,
to evolve as a fast and secure basis for decentralized instant messaging. 

Delta Chat is, in other words, a messenger that fully heeds the warning of XKCD 927 :) 

<figure> <a href="https://xkcd.com/927/"><img src="https://imgs.xkcd.com/comics/standards_2x.png" width="500px" style="float:center; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="XKCD 927 comic" /><figcaption>XKCD 927</figcaption> </a></figure>

