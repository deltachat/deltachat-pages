---
title: Good news from security audits, past and present
author: missytake, holga
image: ../assets/blog/2022-07-14-microscope-delta-chat-security-audit.jpg
---

In case you wonder how safe Delta Chat's core messaging implementation and server guides is, 
you may be interested in the summary statement 
from the [recent independent security audit by Cure53](../assets/blog/MER-01-report.pdf):

    "... a positive impression following the completion of this review, 
    particularly relating to strong SSL/TLS encryption, the mail server, 
    and client library, which have all made excellent progress 
    toward offering a first-rate framework from a security perspective."

We also took the opportunity to publish FAQ entries (finally!) about [two security audits in 2019 and 2020](help#was-delta-chat-independently-audited-for-security-vulnerabilities) by [Include Security](https://includesecurity.com), 
covering in particular the [pure Rust PGP implementation](https://crates.io/crates/pgp), 
our lean and mean engine for [Autocrypt](https://autocrypt.org) 
and [CounterMITM](https://countermitm.readthedocs.io/en/latest/new.html) 
End-to-End encryption protocols. 
Here, we are in the lucky situation that one of our core contributors is of the rare kind
who can implement cryptographic algorithms and get the result to pass security audits, 
with one key implementation part moved into the [RustCrypto/RSA](https://github.com/RustCrypto/RSA)
community repository. 
We've [said it before](2022-12-15-uidevjob#our-rust-core-architecture-tm-and-its-ui-bindings) 
that Rust is not only an excellent language to code networking and cryptographic implementations in
but also allows for safe and large-scale development collaboration, 
raising the quality for everyone and for what we can offer through Delta Chat apps. 

## Latest audit was about secure networking and "serverguide" security

The main focus of the latest [Cure53](https://cure53.de) security audit
were the network libraries used to connect to mail servers,
typically using TLS transport encryption.
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
can successfully setup safe mail server infrastructure when following our guide.

## Eight detected issues

Auditors from Cure53 found eight issues in total: 

- (High) Mailcow had a [vulnerability in "IMAP-Sync" support](https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-3j2f-wf52-cjg7)
  which was fixed in [mailcow's March 2023 update](https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-03).

- (Medium) Mailadm bot commands can be abused, 
  though you'd need to be an admin already to execute them.
  [We fixed them nevertheless](https://github.com/deltachat/mailadm/pull/110). 

- (Low and Info) Four Low-severity and two Info-severity issues were identified 
  which we already fixed or will address in future releases. 

We'd like to thank Cure53 and IncludeSecurity for the overall excellent collaboration and communication!
