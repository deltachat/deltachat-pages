---
title: "Minimal metadata, maximum resilience, native audio/video calls and much more!"
author: olgax
image: ../assets/blog/2026-03-30-zero.png
---

<img src="../assets/blog/2026-03-30-zero.png" style="width:240px; float:right; clear:both; margin-left:1em; margin-bottom:.2em;" />

**With the latest release chatmail releases,
a chat message reveals close to zero metadata to servers.**
All meaningful metadata now lives exclusively in the encrypted part of messages,
implementing full [Header Protection (RFC 9788)](https://datatracker.ietf.org/doc/rfc9788/).
In practice this means:

- **No cleartext To, Subject, or threading headers.**
  Recipients, message subjects, `References` and `In-Reply-To`
  are [moved into the encrypted part](https://github.com/chatmail/core/pull/7425)
  of every message.
  Transport servers only see a minimal outer envelope.

- **Securejoin v3 hides cryptographic identities.**
  The [new 4-step securejoin protocol](https://github.com/chatmail/core/pull/7754)
  encrypts all verification messages, including the very first one.
  Previously, the initial securejoin message was sent unencrypted,
  leaking the joiner's cryptographic fingerprint to the server.
  No more.

- **Randomized Date header.**
  The outer Date is randomized, preventing timestamp-correlation attacks.
  Delta Chat would not need this header at all,
  but we maintain end-to-end compatiblity with other encrypting email apps
  which often require this outer date header to function at all.

- **No Sealed Sender yet,** but also no phone numbers or private data
  recorded at chatmail relays.
  Chatmail accounts are created with random addresses
  and without asking for any personal information.

<img src="../assets/blog/2026-03-30-near-zero-meta.png" /><br>_orange: random, green: hidden, everything else: no meaningful data_


## Maximizing resilience through multi-path delivery

<a href="https://chatmail.at/relays">
<img src="../assets/logos/chatmail.png" style="width:100px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" />
</a>

Single-path messaging systems have a fundamental problem:
if the one server you depend on goes down or is blocked in a country,
you can't communicate.
Signal, WhatsApp, Telegram all are known centralized transport servers
and are somewhat easily blocked in many places.
But even with the Matrix system, you choose a single home server,
and if that gets blocked or goes down, your ability to chat breaks down.

XXX some visiualization of multi-path delivery

Our new release go further with [multi-path delivery](https://github.com/chatmail/core/issues/7357):
each profile can use multiple chatmail relays for sending and receiving.
If a receiving relay is blocked or down, messages flow through another.
With the [growing network of chatmail relays](https://chatmail.at/relays),
there is no single point of failure, and anyone can add a new relay to their chat profile.
Currently, adding secondary relays is a manual step (Advanced Settings -> Relays).

<img src="../assets/blog/2026-03-30-relays.png" style="width:320px;" />

Once the dust settles and after some more research and security audits,
we'll tackle automating this process:
You'll be rather onboarding "on the relay network"
and your chat profile will learn from friends and chat groups about new relays to use.


## Native calls on Android, iOS and UbuntuTouch (preview)

Audio and video calls on Android, iOS and UbuntuTouch
now behave like native phone calls:
you can keep a call running in the background
while switching to a different chat or even another app.
Under the hood, calls use peer-to-peer [WebRTC](https://github.com/deltachat/calls-webapp)
with signaling via regular Delta Chat messages.
The feature is still behind the "debug calls" setting.
Please let us know about any issues users.

XXX screenshots Android

## Group and channel descriptions

Groups and broadcast channels now support
[descriptions](https://github.com/chatmail/core/pull/7829)
that members see in the group profile.
Descriptions are end-to-end encrypted and synced with member additions,
making it easy to tell new members what a group is about.

XXX 

## Download on demand revamped, improved push notifications

XXX more info on pre-messages and our push notification efforts


## A note on needs from "at-risk" users

XXX availability is often neglected

