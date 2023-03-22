---
title: Delta Chat was audited for security vulnerabilities again
author: missytake
image: ../assets/blog/2022-07-14-microscope-delta-chat-security-audit.jpg
---

Responsible software developers don't wait
until hackers find holes in their code -
they pay "security researchers"
(hackers in suits, with contracts)
to find the holes and help with fixing them.
In the past,
Delta Chat [was already audited twice](help#was-delta-chat-independently-audited-for-security-vulnerabilities) by [Include Security](https://includesecurity.com).
Now,
some years later,
we let [cure53](https://cure53.de) look at our code.

## The scope of the audit

The main focus of the security audit
were the network libraries Delta Chat uses
to connect to mail servers.
Typically, this connection is secured with a TLS transport encryption.
While Delta Chat runs on various platforms
from Android over Windows, iOS, MacOS, and Linux,
the encryption implementations of these platforms can be very different.

Another big focus of the audit
was our [mail server setup guide](serverguide).
It describes a way to use [mailcow](https://mailcow.email) as a mail server
with [mailadm](https://mailadm.readthedocs.io),
which we are developing ourselves,
as an account creation tool.
We wanted to know if hobbyist sysadmins can feel safe
following our guide.

## Detected issues

The folks from cure53 found eight issues in total -
though most of them couldn't be used to do any serious damage.

- For example they raised the issue that the Delta Chat [data is still unencrypted
  on the users device](help#what-does-the-experimental-database-encryption-actually-protect).
  This is something we are already working on.
- They also found ways to mess with mailadm commands,
  though luckily you'd need to be an admin already to execute them.
  We fixed them nevertheless,
  of course.
- They did find one issue in mailcow [which was classified as high](https://github.com/mailcow/mailcow-dockerized/security/advisories/GHSA-3j2f-wf52-cjg7);
  it was fixed in [mailcow's March update](https://github.com/mailcow/mailcow-dockerized/releases/tag/2023-03).
  So if you are running an outdated mailcow instance,
  you should update it soon
  to fix the issue!

All in all,
the review noted
"a positive impression following the completion of this review, particularly relating to strong SSL/TLS encryption, the mail server, and client library, which have all made excellent progress toward offering a first- rate framework from a security perspective."
We are proud to hear that!

