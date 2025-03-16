---
title: Hardening Guaranteed End-to-End encryption based on a security analysis from ETH researchers
author: holga, link2xt
image: ../assets/blog/green-check-chain.png
com_id: 112156902140296303
---

We released [guaranteed end-to-end encryption](https://delta.chat/en/2023-11-23-jumbo-42)
in November 2023 and were in for a pleasant surprise three months later.
The [Applied Cryptography Group at ETH Zurich](https://appliedcrypto.ethz.ch/)
handed us a cryptographic security analysis 
of our [SecureJoin](https://securejoin.delta.chat) protocol implementation
which is the basis of Delta Chat's guaranteed end-to-end encryption mechanisms.
We subsequently fixed 20 identified issues that became part of the 
[v1.44 release](https://delta.chat/en/2024-03-12-jumbo44)
but only disclose it now
because we first wanted Delta Chat apps with all fixes to be available on all stores. 

We'd like to thank the ETH researchers Yuanming Song, Lenka Mareková and Kenneth G. Paterson 
for their thorough work and their forthcoming communication to resolve questions and review patches. 
What follows is a timeline and some brief technical discussions
of our hardening efforts in response to the cryptographic analysis
about which the researchers [published separately and in more detail](https://eprint.iacr.org/2024/918).

## Disclosure Timeline 

- January 30th: researcher Lenka Mareková
  first contacts us about a cryptographic security analysis of Delta Chat. 
  Secure channels are agreed and established for further communication,
  and agreement is reached to try address all issues within at most 90 days.

- Feb 7th: a 26-page analysis paper together with Proof-of-Concept code 
  is disclosed to a subset of our team involved with Delta Chat's SecureJoin implementation
  as well as [rPGP](https://github.com/rpgp/rpgp) developers. 

- Feb 8th: a private repository with 20 identified issues is created. 
 
- Feb 13th: it is agreed to address issues regarding rPGP in the public 
  while all SecureJoin issues will be privately fixed and only become public
  with the v1.44 app releases.

- Feb 20th: 17 patches to all SecureJoin issues are submitted to ETH
  researchers for review

- Feb 21th: [rPGP 0.11.0](https://github.com/rpgp/rpgp/releases/tag/v0.11.0) is released.

- Feb 27th: the researchers did not find any flaws in our patches.

- March 4th: fixes are integrated into the public Delta Chat core repository and
  the v1.44 app release processes start. 

- March 12th: v1.44 Delta Chat is announced, released to all stores but F-Droid.

- March 16th: Delta Chat F-Droid becomes available, 
  finally making security fixes available to users on all platforms.

- June 10th: the researchers [publish their analysis](https://eprint.iacr.org/2024/918).


## Hardening E-mail Header protections and encryption 

Standard OpenPGP e-mail encryption protects message contents, 
but not message headers such as `From`, `To` and `Subject` fields.
To protect `Subject` header Delta Chat and other email clients
such as [Thunderbird](https://www.thunderbird.net/) and [K-9 Mail](https://k9mail.app/)
replace Subject with "..." or "Encrypted Message" and place real Subject into 
the encrypted part of an e-mail message.
However, while they place `From` header into encrypted part as well,
they do not take any headers other than `Subject` out of the encrypted part.

Starting with version v1.44 Delta Chat extends protection to several important headers,
mitigating all attacks identified in the ETH report: 

- Delta Chat now protects the `From` header.
  If an attacker takes an encrypted message and rewrites the outer `From` header 
  to present the message as their own, 
  Delta Chat will detect it and drop the message without further processing
  ([c03e163e](https://github.com/deltachat/deltachat-core-rust/commit/c03e163ed287a85d230f0a0f408d9b7b317dc3c1)).

- We extend protection to all `Chat-*` headers, 
  used for transporting group names, avatars and member addition/removals. 
  This fixes the reported **Group member removal** issue
  where an attacker controlling an e-mail server 
  could insert a cleartext `Chat-Group-Member-Removed` header
  and make it look as if someone has removed a member from a guaranteed E2EE group
  ([1a1467f7](https://github.com/deltachat/deltachat-core-rust/commit/1a1467f7cfc5614137c51f2700da34b22d347f7a)).

- `Secure-Join` protocol headers are now put into the encrypted part,
  and may only remain un-encrypted for the initial `vc/vg-request` messages.
  Among others, this fixes the **SecureJoin observer** vulnerability reported by ETH
  where an attacker could trick a user to regard an attacker-controlled 
  address and key as carrying E2EE guarantees
  ([3c4c701f](https://github.com/deltachat/deltachat-core-rust/commit/3c4c701f9b7316a37d47864b43d7e421c3e15461)).

- The `Message-ID` in the protected part of a message now has higher precedence 
  than the `X-Microsoft-Original-Message-ID` (which was introduced for compatibility 
  with MS Exchange and Outlook.com which rewrite the `Message-Id`). 
  Attackers can thus no longer add a `X-Microsoft-Original-Message-ID` header
  to encrypted messages
 ([0b279ec8](https://github.com/deltachat/deltachat-core-rust/commit/0b279ec84ec11a89ac2293e565cf2a3c2d9c377d)).

- We deprecated the `Secure-Join-Group` header, because we already 
  know which group an AUTH token corresponds to
  ([8d09291d](https://github.com/deltachat/deltachat-core-rust/commit/8d09291d1e306669317e9c802d78d1cd7de85d43)).

- We don't ever take `Autocrypt-Gossip` from unprotected headers
  ([01ac9c8b](https://github.com/deltachat/deltachat-core-rust/commit/01ac9c8b90c56e682a40a7c2d9f4729e644a2d11)).

- We don't take unsigned `Secure-Join-Auth` header from unprotected headers
  ([e919de78](https://github.com/deltachat/deltachat-core-rust/commit/e919de78a35393c81650c59d9c3bb47030c56609)). 

- We reduced metadata by not [including the chat group ID into the
  Message-ID](https://github.com/deltachat/deltachat-core-rust/commit/78d01933adc69b034c65839986b67ccf432073cf).
  The `Chat-Group-ID` is now contained in the encrypted part of a message.
  If messages cannot be decrypted or are too large to be downloaded at once,
  Delta Chat now assigns messages to the correct chat 
  based on `In-Reply-To` and `References` headers.

## Gossip key injection

Delta Chat's implementation of SecureJoin allows members to introduce new contacts 
by sending a key they trust into a guaranteed E2EE group via `Autocrypt-Gossip`.
The reported **gossip key injection** problem was that recipients
always verified the most recent gossiped key stored,
but did not update it if gossip was coming from an old message.
This was fixed by explicitly [passing the key that should 
be verified around](https://github.com/deltachat/deltachat-core-rust/pull/5247).


## Identity-misbinding attack

The newly protected `From` header ensures 
that an attacker cannot take an encrypted message
and present it as sent by themselves. 
But it is still possible to do something the other way round:
take a message sent by someone else and send it to a different recipient.
This can be regarded as message forwarding,
but in the case of the SecureJoin protocol this is dangerous.
To prevent such misbinding attacks we check that each encrypted SecureJoin message
contains the fingerprint of the intended recipient inside encrypted part
as an `Autocrypt-Gossip` key.
Prior Delta Chat versions already sent this key fingerprint in SecureJoin messages, 
but since v1.44 Delta Chat we will stop processing messages if there is a mismatch
([612aa143](https://github.com/deltachat/deltachat-core-rust/commit/612aa1431e2ded9a07ddc2674b800141ed580bb3)).

## Synchronization forgery

We [don't parse "own" Autocrypt headers anymore for outgoing messages](https://github.com/deltachat/deltachat-core-rust/issues/5259). 
This fixes a **synchronization forgery** attack
that allowed an attacker controlling an e-mail server 
to inject synchronization messages
sent between a user's multiple devices 
to synchronize some settings, contact and chat state as well as invite codes. 

## Disabled compression for SecureJoin messages

Compression and encryption don't interact well 
because compressed message size leaks information about message contents.
Web servers disable compression due to attacks such as [BREACH](https://www.breachattack.com/).
Practical attacks require the ability to trigger generation of a large amount of messages,
so compression is less of a concern for regular chat messages and attachments.
However, SecureJoin protocol messages are sent automatically, 
so we disabled compression for them to prevent potential attacks.

## Not leaking QR code or invite link contents in device logs 

Delta Chat v1.44 does not log QR code contents or invite links anymore. 
Delta Chat logs stay on the device, but sometimes users send them 
to developers or post on the forum when reporting bugs.
Not including QR codes into logs ensures 
that nobody can join groups by following an invite link from the log.

## rPGP improvements

The [rPGP library](https://github.com/rpgp/rpgp) is the end-to-end encryption engine
used and originally developed in the context of Delta Chat, 
but also used standalone via the ["pgp" Rust crate](https://crates.io/crates/pgp) 
by other projects. 
Three issues reported by ETH relate to rPGP and were fixed there ahead
of the Delta Chat v1.44 releases. 

### Autocrypt Setup Message plaintext encryption

The [Autocrypt Setup Message](https://autocrypt.org/level1.html#autocrypt-setup-message)
is a message sent to self that contains a secret key encrypted with an auto-generated passphrase
that a user needs to manually copy from one device (and app) to another.

Due to a bug in rPGP it was possible to send an unencrypted Autocrypt Setup Message
such that any passphrase results in successful decryption.
This could be used to trick users into importing secret keys of an attacker as their own.
This issue of **Autocrypt Setup forgery** is fixed by [treating unencrypted Autocrypt Setup Messages as invalid](https://github.com/rpgp/rpgp/pull/287).
We additionally now require that Autocrypt Setup Message is self-sent.
Autocrypt Setup Message can only appear in the "Saved messages" chat now.

Note that Autocrypt Setup Message support was added at the end of 2017.
Since Delta Chat v1.36 (released in March 2023)
there is an option to setup a second device by scanning a QR code 
triggering a full account transfer (not just the key) over the network.
It is thus generally preferable to use the "add second device" work flow
between Delta Chat apps. 

### Compression quine

[OpenPGP standard](https://tools.ietf.org/html/rfc4880)
allows construction of complex message structures
consisting of several levels of encryption, signing and compression.
Delta Chat composes encrypted messages by
signing them, then compressing, and then encrypting.
However, when receiving encrypted messages,
Delta Chat cannot assume that received messages are that simple.

One particularly interesting trick is possible
because OpenPGP allows compressed messages to contain
compressed messages inside.
Due to the way compression algorithms work,
it is possible to compose messages
that [decompress to themselves](https://mumble.net/~campbell/2013/10/08/compression),
also known as compression [quine](https://en.wikipedia.org/wiki/Quine_(computing)).
Attempting to process such messages
results in trying to decompress the same message
over and over.

The new version of rPGP 0.11
[does not allow more than one level of compression](https://github.com/rpgp/rpgp/pull/290).
Attempts to decrypt such messages now results in a controlled decryption failure
rather than a crash.

### Quick check

rPGP 0.11 also fixes [an issue](https://github.com/rpgp/rpgp/issues/183)
discovered during a previous rPGP security audit.
While it does not affect Delta Chat,
we [addressed the issue](https://github.com/rpgp/rpgp/pull/285)
by disabling the quick check mechanism.

## Conclusion: more confidence that guaranteed E2EE encryption is safe 

While Delta Chat has contracted four independent security audits, 
the cryptographic analysis of the "Applied Crypto" group from ETH 
went much deeper and uncovered many issues. 
Most of our fixes were relatively small changes because the main work 
was done by the researchers and involves thinking about all the details
of what goes over the wires, what can be replayed or modified for abusive purposes. 
While no conceptual issues were found it is known that "invite links" or "QR codes" for
establishing guaranteed end-to-end encryption should be privately transferred 
and we intend to enforce this by implementing "invite" code expiration in one of the
following releases.  

Overall, thanks to the ETH researchers, the 1.44 releases come with raised confidence 
that Delta Chat's End-to-End encryption guarantees hold against network and server attackers.
Conversely, guaranteed end-to-end encryption allows to use e-mail addresses 
without having to trust server operators, 
marking a radical departure from the traditionally required trust 
that users need to have in e-mail providers.
Guaranteed E2EE particularly fits well with using [chatmail providers](https://delta.chat/en/2023-12-13-chatmail) 
even if one doesn't know or can't trust the operators,
because no private data is collected and 
guaranteed encryption keeps messages and chat groups safe. 
