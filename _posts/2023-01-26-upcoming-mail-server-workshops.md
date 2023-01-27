---
title: New Guide for Setting up Mail Servers for Delta Chat - and Upcoming Workshops!
author: missytake, brabo
image: ../assets/blog/mailcow-UI-login.png
---

Every once in a while we get asked what mail server is best suited for Delta
Chat. In short - most mail servers will work well, and reliability depends more on their
IP reputation and configuration parameters like spam checking, rate limits, and
attachment size how well it works with Delta Chat. 
One feature-complete mail-server we have successfully worked with successfully is  [Mailcow](https://mailcow.email).

Mailcow takes some long-standing Free Software tools like postfix, dovecot, and
rspamd, wraps them into a present through docker, and ties a ribbon around it
with a neat web interface which abstracts many complex config parameters away
from you. This way, you can't easily end up with a misconfigured postfix; but
if you still need to tweak postfix for a specfic use case, you can manually
edit the postfix config files in the docker container.


We implemented an automated e-mail account management tool
to help admins give out accounts to users, 
both random short-lived ("burner") or longer-living accounts. 
[Mailadm](https://mailadm.readthedocs.io/) is implemented in Python 
and uses a minimal part of the [ReST HTTP API of mailcow](https://mailcow.docs.apiary.io/#).
Mailadm allows an admin group to create and hand out "tokens" (URLs with a secret number) 
to users who just need to scan one QR code and are logged in automatically.

And now we want to help others with hosting this combination of tools. Today,
we published [a guide on this website](serverguide), which you can use to setup
a mail server of your own, together with mailadm as easy account creation tool
to bring your friends and family to Delta Chat. [Check it out](serverguide),
and [send us your feedback](mailto:mailadm@testrun.org) about it!

## Upcoming Workshops

If you want to try it out with our guidance, you can also attend one of our
workshops on the topic - they will happen in several Western European cities in
the next months:

- `2023-02-04/05`: [OFFDEM](https://ps.zoethical.org/pub/offdem-ozone-cfp), Brussels
- `2023-02-10`: [LAG](https://radar.squat.net/en/event/amsterdam/lag/2023-02-10/lag-social-evening), Amsterdam
- `2023-02-23` - `2023-02-26`: [Winter University](https://pretalx.lebib.org/universit-d-hiver-2022), Montpellier
- `2023-03-31` - `2023-04-02`: [Newline](https://hackerspace.gent/newline/2023/), Gent

