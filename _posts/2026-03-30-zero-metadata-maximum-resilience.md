---
title: "Minimal metadata, maximum resilience, native audio/video calls and much more!"
author: olgax
image: ../assets/blog/2vampire.png
---


## Close to zero metadata (utilizing the latest RFC9788)

- no cleartext headers (no To, Subject, randomized Date, no References
  or in-reply-to etc.) -- they all live in the encrypted part of messages
  and implement full Header protection https://datatracker.ietf.org/doc/rfc9788/

- securejoin v3 hides cryptographic identities from the transport server
  see https://github.com/chatmail/core/pull/7754

- no support yet for Sealed Sender but also no phone number or private
  data recorded at chatmail relays

XXX screenshot/quote of a real message

## Resilient multi-path delivery

some theory of single-path and multi-path delivery, and why SMTP is still fine.

some mention of blocked servers in various countries

future work: avoiding bounce/DSNs 

XXX screenshot of a profile with multiple relay




## Native calls on Android, iOS and UbuntuTouch (preview)

Still hidden behind "debug calls" but working very well. 

XXX screenshots Android 

## Group and channel descriptions

