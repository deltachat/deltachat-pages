---
title: What Makes a Good E-Mail Provider?
author: missytake, jette
image: ../assets/blog/2021-05-html-mail.jpg
---


What provider should I use for Delta Chat? I hear this question so often that
there should be something in the [FAQ](help). But it's not so easy to answer.
Everyone has different needs. So how to make this decision?

One of our most important projects right now aims to help with this question.
We are working on a provider comparison database called EPPD (E-Mail Provider
Portability Directory), which summarizes quantitative and qualitative data
about different e-mail providers, e.g. easy registration, provider connectivity
and constraints.

This should make it easy to choose which e-mail provider serves your needs
best. It might even increase competition among providers.

## Different Criteria for Different Needs

To find out performance criteria, we asked 10 Delta Chat power users and
multiplicators from all over the world, what they need from a provider - and
what their communities like about different providers. This is the full list of
criteria we identified:

### Performance criteria

1. How much delay is between sending and receiving a message through various providers? 
2. Does a provider systematically block e-mails from other (smaller or larger) providers? 
3. How many recipients per message are allowed  (limits group size)?
4. How many messages per hour are accepted until a rate limit is reached and messages are rejected?
5. What is the max. attachment size for a message?
6. Does the provider send quota warnings and efficient means for removing messages from server?
7. Does the provider support SMTP and IMAP and has a valid TLS?
8. Does the provider support IDLE /MOVE/ IMAP and quota extension?
9. Does the provider support alias and/ or plus extension?

### Qualitative criteria

10. Does the provider have open registration or is it invite only?
11. What are the costs and what kind of business model is applied?
12. How many people manage the provider? (risk of overload for smaller providers?)
13. What is the mailbox storage size?
14. Grey-listing: does the provider delay initial messages from unknown senders? 
15. Is there published information about rate limits?
16. Privacy Policy: Which personal data is required for account creation?
17. Privacy Policy: What data is used for third parties, advertisers?
18. Migration: Can I set a forwarding alias address?
19. Migration: Can all data, including contacts and messages (folders) be exported and imported from one provider to another?

We can now evaluate providers after these criteria and publish the answers on
[providers.delta.chat](https://providers.delta.chat). We will start with 20
popular providers from different countries, and aim to add more in the future.

There were some other criteria which were too complicated to measure, but still
interesting: e.g. where the servers of a provider are based, and with which
jurisdiction it has to comply; or whether they collaborated with governments in
the past, as it just caused an outcry in a [case against climate
activists](https://protonmail.com/blog/climate-activist-arrest/). Unfortunately
we can't really use this information for the database.

## Which Other Features Can Come out of This?

Apart from making it easier for Delta Chat users to choose a provider, we can
use this information to make Delta Chat even easier to use. It makes it easier
to tell users when and why a message was delayed or rejected; if this happens
because of a Delta Chat bug, or because a provider has a too restrictive spam
filter.

This makes the EPPD project a perfect combination with another project of ours;
the AEAP project (Advanced E-Mail Adress Porting) aims to make it easy to
migrate from one provider to the next. This way, users have much more freedom
around their e-mail account; and they can also base this important decision on
direct information.

So stay tuned! if you have other ideas around this, join [our
forum](https://support.delta.chat) and tell us your needs, so they can flow
into this project as well.

