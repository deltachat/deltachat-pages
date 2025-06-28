---
title: New Guide for Setting up Mail Servers for Delta Chat - and Upcoming Workshops!
author: missytake, brabo
image: ../assets/blog/mailcow-UI-login.png
com_id: 109761861452626888
---

> **Update:** This is outdated - we no longer recommend mailcow Servers,
> but [Chatmail Relays](2023-12-13-chatmail) for chatting with Delta Chat.
> Read more [on GitHub](https://github.com/chatmail/relay) about how to set it up!

Every once in a while we get asked what mail server is best suited for Delta
Chat. In short - most mail servers will work well, and reliability depends more on their
IP reputation and configuration parameters like spam checking, rate limits, and
attachment size how well it works with Delta Chat. 
One feature-complete mail-server we have successfully worked with is  [Mailcow](https://mailcow.email).

Mailcow takes some long-standing Free Software tools like postfix, dovecot, and
rspamd, and wraps them in a docker-compose deployment
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

With this blogpost,
we also published [a new guide](serverguide)
which you can use to setup a mail server of your own,
together with mailadm as easy account creation tool
to bring your friends and family to Delta Chat.
We are happy about [any feedback](mailto:mailadm@testrun.org)
about our [mail server and mailadm installation instructions](serverguide)!

## Upcoming Workshops in Brussels, Amsterdam, Montpellier, and Gent

If you want to try it out with our guidance, you can also attend one of our
workshops on the topic.
The first part is for
people who want to learn
setting up a mail server
based on [the new guide](serverguide).
After that,
we invite everyone who wants to try out Delta Chat
to a quick session with the new mail servers!

The workshops will happen in several Western European cities in
the next months -
if you want to attend and need more information,
[ask us for details](mailto:mailadm@testrun.org)!

- `2023-02-04/05`: [OFFDEM](https://ps.zoethical.org/pub/offdem-ozone-cfp), Brussels
- `2023-02-10`: [LAG](https://radar.squat.net/en/event/amsterdam/lag/2023-02-10/lag-social-evening), Amsterdam
- `2023-02-23` - `2023-02-26`: [Winter University](https://pretalx.lebib.org/universit-d-hiver-2022), Montpellier
- `2023-03-31` - `2023-04-02`: [Newline](https://hackerspace.gent/newline/2023/), Gent
