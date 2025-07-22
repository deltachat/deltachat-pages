---
title: "Delta Chat V2: End-to-end encryption in chats, forever!"
author: olgax
image: ../assets/blog/handbag.jpg
---

A while ago, a contributor's parent and long-time Delta Chat user 
got back saying "Everything is fine! But why does each message have a hand bag?" 
After 1000+ hours of collective work on Delta Chat V2 releases 
we dutifully report: lock icons on messages are gone 
and end-to-end encrypted chats can not degrade anymore. 
After all, most users can't and don't want to engage in theorizing and checking end-to-end encryption.
They "just" want a reliable fun-to-use messenger that keeps their chats, messages and contacts private. 

<a href="https://chatmail.at">
<img src="../assets/logos/chatmail.png" style="width:100px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />
</a>

With V2 releases, not even e-mail providers can compromise messaging privacy and authenticity anymore. 
Contact identity is not tied to e-mail addresses anymore. 
E-mail servers are relegated to provide ephemeral message transport 
instead of controling a user's digital identity. 
If this design sounds familiar it's because of [chatmail relays](https://chatmail.at/relays),
used for instant onboarding in all Delta Chat apps since 2024. 
A year later, there are 50 chatmail relays operated by 3rd parties that 

- provide random interoperable e-mail addresses without asking any private info, 

- enforce end-to-end encryption with metadata-minimization for sent and received e-mails, 

- jointly add a **second layer of security enforcements**
  for Delta Chat and other [chatmail clients](https://chatmail.at/clients).

<a href="http://github.com/chatmail/core/blob/main/README.md">
<img src="../assets/logos/core-rust-logo.png" style="width:100px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />
</a>

Like always, the new releases maintain compatibility with older releases. 
We never needed to ask users or developers for "co-ordinated upgrades" 
like [Matrix](https://matrix.org/blog/2025/07/security-predisclosure/) 
and [Session](https://getsession.org/blog/groups-v2-how-to-upgrade) did in 2025. 
Not only does the planetary-scaling e-mail system have a mature separation between transport protocols and message formats. 
But all of the transport and message handling is 
centrally implemented in the [chatmail core Rust library](https://github.com/chatmail/core/blob/main/README.md),
greatly helping to provide a consistent and robust user experience, 
between Delta Chat apps and all other [chatmail clients](https://chatmail.at/clients). 


## Better encryption with less code and less noise in UIs

XXX screenshot of a desktop chatlist + message list without any green checkmarks or padlocks in messages 

Experienced developers and maintainers know 
that in any sufficiently complex system, 
the best course of action is to *remove* complexity which is what V2 releases achieve: 

- The [massive "keycontacts" rework in the chatmail core Rust library](https://github.com/chatmail/core/pull/6796) 
  added 4969 and removed 6299 lines of code, netting to an impressive **removal of 1330 Lines of Code**. 

- Delta Chat apps on all platforms removed pad locks, green checkmarks (mostly) 
  and "encryption broken" chat dialogues from the user interface, 
  providing for a default end-to-end encrypted user experience, no special signals needed. 

For more technical details and background, 
please visit the [Revised Encryption and Security FAQ section](help#encryption-and-security)
or watch [two security talks from June 2025](https://chaos.social/@delta/114794093068029745). 


## Classic e-mail usage is enhanced but requires opt-in 

XXX screenshot of "new email" compose window 
XXX screenshot of "email chat" showing mail icon as avatar

While it's impossible 
to receive or send messages without end-to-end encryption
when onboarding instantly with [chatmail relays](https://chatmail.at/relays)
you can alternatively manually setup classic e-mail accounts. 
Messages without end-to-end encryption will then be marked with a "mail icon". 
There also is an additional "new email" UI action 
that allows to set a subject and add e-mail address recipients
before sending a cleartext e-mail message. 
With Version 2 releases, e-mail messages without end-to-end encryption 
are generally easier to recognize because chat avatars will also use the same boring "mail icon"
and chat messages in mail chats will never become end-to-end encrypted. 


## Contact Profiles are more beautiful on all platforms

XXX screenshosts of contact profiles on multiple platforms 

While users have fewer problems navigating identities in small private circles,
the new more beautiful contact profiles aim to help navigate larger chat circles 
where members frequently get added or removed. 
The new contact profile aims to help users 
to identify group members and chat partners: 

- Do you recognize the name and avatar? 

- When did you last see a message from them? 

- What does the "bio" say about the profile? 

- Do you have any chats in common? 

- Is there a green-checkmark indicating who introduced this contact to you? 

