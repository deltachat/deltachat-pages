---
title: Good security audit news (including two past ones we never mentioned!) 
author: missytake,holga
image: ../assets/blog/2022-07-14-microscope-delta-chat-security-audit.jpg
---

In case you wonder how safe is Delta Chat's core messaging implementation and server guides, 
here is a summary statement from the recent 2023 security audit by [Cure53](https://cure53.de): 

    "... a positive impression following the completion of this review, 
    particularly relating to strong SSL/TLS encryption, the mail server, 
    and client library, which have all made excellent progress 
    toward offering a first-rate framework from a security perspective."

You may [read the full Cure53 audit report](../assets/blog/MER-01-report.pdf)
or read below for a quick summary. 

We also took the opportunity to publish FAQ entries (finally!) about [two security audits in 2019 and 2020](help#was-delta-chat-independently-audited-for-security-vulnerabilities) by [Include Security](https://includesecurity.com), covering in particular the [pure Rust PGP implementation](https://crates.io/crates/pgp), our lean and mean engine for [Autocrypt](https://autocrypt.org) and [CounterMITM](https://countermitm.readthedocs.io/en/latest/new.html) End-to-End encryption protocols. 
Here, we are in the lucky situation that one of our core contributors is of the rare kind
who can implement cryptographic algorithms and get the result to pass security audits, 
with one key implementation part moved into the [RustCrypto/RSA](https://github.com/RustCrypto/RSA)
community repository. 

## Latest audit was about secure networking and "serverguide" security

The main focus of the latest Cure53 security audit
were the network libraries used to connect to mail servers.
Typically, such connections are secured with TLS transport encryption.
While Delta Chat runs on various platforms
from Android over Windows, iOS, MacOS, and Linux,
the encryption implementations of these platforms can be very different.
We wanted to know if our TLS network setup and handling is safe on all platforms. 

The second big audit focus was about our [mail server setup guide](serverguide)
which allows to setup and use [mailcow](https://mailcow.email) as a mail server,
and run [mailadm](https://mailadm.readthedocs.io) to automate account management for Delta Chat users.
The mailadm tool was written by Delta Chat contributors while mailcow is maintained by 
a collaborating company, Tinc GmbH in Germany. 
With this second audit focus, we wanted to know if hobbyist sysadmins 
can successfully setup safe safe "chat mail" infrastructure when following our guide.

## Eight detected issues

Auditors from Cure53 found eight issues in total, with one "medium" and one "high" severity one: 

- (High) Mailcow [had a vulnerability in "IMAP-Sync" support](https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-3j2f-wf52-cjg7)
  which was fixed in [mailcow's March 2023 update](https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-03).

- (Medium) Mailadm bot commands can be abused, 
  though you'd need to be an admin already to execute them.
  [We fixed them nevertheless](https://github.com/deltachat/mailadm/pull/110). 

- (Low and Info) Four Low-severity and two Info-severity issues were identified 
  which we already fixed or will address in future releases. 

We'd like to thank Cure53 and IncludeSecurity for the overall excellent collaboration and communication!
