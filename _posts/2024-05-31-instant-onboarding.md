---
title: Instant onboarding and instant notifications 
author: holga
image: ../assets/blog/2024-03-notiheart.png
---

Quite some milestone in our 6 year long project history: 
you can now start chatting without a pre-existing e-mail address. 
With the rolling new Delta Chat releases (1.46) 
we are introducing "Instant onboarding" with [chatmail servers](/en/chatmail). 
to guarantee a reliable, secure and fast messaging experience,
including instant notifications for incoming messages on Android and iOS phones. 

You just provide a self-chosen name and maybe an avatar picture,
and then hit "Agree and continue" to create your chat profile. 

## How to get securely into contact with another Delta Chat user? 

When using default onboarding with [chatmail servers](/en/chatmail) 
you can only send out end-to-end encrypted messages. 
Even if you are using a classic e-mail server 
we recommend to setup a secure chat by

- adding a new contact through a QR code scan;

- sharing your own contact info as an "invite link" 
  that any receiver can tap to start a chat with you;

- joining a group chat and then messaging one of its members. 

These three methods result in "guaranteed end-to-end encryption" 
which is safe against compromised servers or networks. 


## New: Introduce a contact by attaching a "VCard"

With the 1.46 releases you can now "attach" a contact to a chat message, 
and any receiver can tap it to start chatting with the contact. 
The contact attachment has the [vcard format](https://www.rfc-editor.org/rfc/rfc6350)
and contains an encryption number that is used to establish an end-to-end encrypted chat. 

## New: Instant privacy-preserving push notifications for Android 

On Android, "instant push notifications" are enabled if possible,
while denying Google and Apple any access to communicate data or metadata: 
even the physical seizure of a chatmail server or the seizure of our "central Notification proxy" 
would not reveal which e-mail address is used on a phone, 
or which Google/Apple device ID is associated with a chatmail address. 
No message data and no metadata would be revealed either, also not in encrypted form. 
See more details in our new [push notifications FAQ section](/help#instant-delivery).


## "Accounts" are dead. Long live "Chat profiles"!

Nobody wants or needs more accounts, isn't it true? 
But let us tell you about "Chat profiles" :) 

When initially onboarding with Delta Chat you now create a "Chat profile"
which technically consists of your chosen name and avatar,
and an encryption-setup, e-mail address and password. 
The new 1.46 versions by default automates all choices 
except for your name and optional avatar. 
You can still tap "use other server" and "manual login" 
if you want to specify an existing e-mail address for your chat profile. 
Or why not create two chat profiles thanks to 
Delta's multi-profile support on all platforms? 

Chatmail or classic server, 
you can always replicate your chat profile to a second device,
or export it to a file and import it from any other device. 
Chat profiles are "in your hand" and do not live on any central server,
also not in encrypted form. 


## Are we turning our back on classic e-mail? 

No. 

Firstly, chatmail is fully interoperable with other e-mail servers
and uses a simple and secure interoperability model,
doing away with spam-checking and superflous rate-limits,
and allowing automated anonymous open sign-up without asking any private data.

Secondly, chatmail servers run the popular [postfix](https://postfix.org) 
and [dovecot](https://dovecot.org) server software in a minimal configuration,
with some small tweaks for onboarding, speed and security. 
Both systems are proven Free and Open Source software 
used by tens of thousands of e-mail providers for a long time already. 

Thirdly, you can still use your existing e-mail address and
there are many [providers](https://providers.delta.chat) 
with which Delta Chat works well. 


## Are we de-emphasizing e-mail addresses in the user interface? 

Yes, somewhat. 

We do want to make Delta chat more approachable to the many 
who do not really care about, or even are skeptical of, e-mail. 
They might have heart that Delta Chat works well, 
does not require phone number or other identifying data, 
provides privacy,  censorship resistance and free "choice of server" 
as well as a convenient and reliable UX
that integrates arbitrary games or tools running in a chat,

However, our curated minimal usage of widely deployed E-Mail and Web standards 
remains as our core strategy to avoid the many pitfalls 
and recurring failures that came and come with the many 
"inventing a new standard that can replace e-mail or the Web" efforts.
