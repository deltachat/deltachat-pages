---
title: The Security Microscope - Security Audits for Delta Chat and RPGP
author: missytake
image: ../assets/blog/2022-07-14-microscope-delta-chat-security-audit.jpg
---

<img src="../assets/blog/2022-07-14-microscope-delta-chat-security-audit.jpg" style="width:160px; float:right; clear:both; margin-left:.5em; margin-bottom:.2em;" alt="A woman looking through a microscope" />
Delta Chat is not only an e-mail messenger, it also prides itself for having a
focus on usable privacy and security. Many possible security issues are
prevented by not having a central Delta Chat server; others are prevented by
[using Rust code for all network and cryptographic
operations](2019-05-08-xyiv#the-coming-delta-chat-rustocalypse). Nevertheless,
part of our OTF funding program were two independent security audits to find
and fix security issues in Delta Chat and its encryption libraries.

## The RPGP and RustCrypto RSA Libraries

The [first security
audit](../assets/1907-otf-deltachat-rpgp-rustrsa-gb-reportv1.pdf) specifically
focussed on the encryption libraries Delta Chat uses, namely its PGP and RSA
libraries. It found no critical issues, but two high-level issues, which could
be fixed thanks to the audit.

It also revealed one medium-severity and some less severe issues, but there is
no way to exploit these vulnerabilities in the Delta Chat implementation. Some
of them were also fixed in the libraries since the audit was concluded.

The first security audit also criticized that while it was conducted, the RPGP
library was still under active development; by now it has further matured. 

## Delta Chat and its IMAP, SMTP, and TLS Libraries

The [second security audit](../assets/2008-otf-deltachat-security-review.pdf)
took place a year later, and looked at the Delta Chat core and its IMAP, SMTP,
and TLS libraries. It did not find any critical or high-severity issues.

The report raised a few medium-graded weaknesses - they are no threat to Delta
Chat users on their own, because they depend on the environment in which Delta
Chat is used. For usability and compatibility reasons, we can not mitigate all
of them, and decided to provide security recommendations to threatened users.

To be specific, in some cases encryption can not be ensured. Depending on the
threat model, they can be relevant for Delta Chat users:

### Scenarios in Which Delta Chat Doesn't Ensure Encryption

There are some scenarios where Delta Chat will not encrypt data. For example it
will establish an unencrypted connection to the mail server, if it does not
offer encryption and the alternative would be having no connection at all.
**We recommend to use an e-mail provider which offers TLS encryption** - as do
[all providers we tested in a recent project](2022-01-16-dapsi2blogpost).

In another case, the conversation may not be end-to-end encrypted, if a chat
partner doesn't use Delta Chat themselves or has turned off "Prefer End-to-End
Encryption" in the settings. With the current design, you can see whether a
message is encrypted depending on whether it shows a small padlock icon;
alternatives to this are [discussed in the
forum](https://support.delta.chat/t/show-end-to-end-encryption-state-of-chat/230).
**If you want to ensure end-to-end encryption with Delta Chat, we recommend to
verify your contacts via QR code scanning.**

Another issue is that while your data stays on your device, it relies on the
disk encryption of your operating system (so far, we are working on that). If
you worry about device theft or seizure, **we recommend encrypting all of your
files**; this will protect your Delta Chat data and backups as well.

To conclude: security never happens in an isolated environment. We hope this
information helps you making decisions about your personal security.

