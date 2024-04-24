---
title: Chatmail for instant, interoperable and privacy-preserving messaging 
lang: id
---

## What are chatmail servers? 

Chatmail servers are optimized for messaging with Delta Chat
to provide a convenient, privacy-preserving and speedy user experience.

The Delta Chat project operates the default open-signup chatmail server 
at [nine.testrun.org](https://nine.testrun.org)
which has been stable since the [December 2023 Chatmail announcement](https://delta.chat/en/2023-12-13-chatmail).  

In addition, there are **community-run chatmail servers - tap to join there instead of nine.testrun.org:**

- [mehl.cloud](https://mehl.cloud) is geared towards german speaking
  users and has been stable since January 2024. 

- [mailchat.pl](https://mailchat.pl) is geared towards polish speaking
  users and has been stable since January 2024. 

- [bcc.chat](https://bcc.chat) operates in the US and has been
  stable since February 2024. 

All chatmail servers are fully and securely interoperable with each other,
and provide instant notifications to mobile users. 

## How are chatmail servers different from e-mail servers? 

Chatmail servers are minimal e-mail servers designed for speed, security and convenience:

- **Convenience:** Onboard automatically in a few seconds and receive push notifications 

- **Privacy:** No questions asked, no name, numbers or e-mail needed

- **Speed:** Message delivery in well under a second, end-to-end

- **Reliability:** No annoying spam-checking or rate-limits 

- **Security:** Outbound messages are required to be end-to-end encrypted,
  incoming messages are strictly checked for authenticity. 

## Can i also use a regular e-mail server instead? 

Yes, many users successfully use regular e-mail servers
especially if they want to handle their regular e-mail communications with Delta Chat. 
See the [provider database](https://providers.delta.chat) for options. 
Note that Delta Chat has multi-account support so 
it's fine to have one account configured with your regular e-mail address,
and another account for chatting.

## How can i trust any chatmail server? 

Each chatmail server provides additional privacy information on their web page.
Typically, it only sees encrypted messages and 
implements automatic, unconditional message deletion after at most 40 days.

Delta Chat provides [guaranteed end-to-end encryption](https://delta.chat/en/2023-11-23-jumbo-42)
which means that in most use cases, server operators can never read your messages even if they try,
a guarantee backed up by a recent [security analysis from ETH Zuerich](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin). 


## How are chatmail servers run? 

All chatmail servers are automatically deployed and updated using
[the public chatmail development repository](https://github.com/deltachat/chatmail). 
Chatmail servers are composed of proven standard e-mail server components,
[Postfix](https://postfix.org) and [Dovecot](https://dovecot.org),
and configured to run unattended and to require very low maintenance effort. 
Chatmail servers happily run on low-end hardware like a Raspberry Pi. 

# How are chatmail servers funded? 

Chatmail servers are designed to be very cheap to run,
and they are generally self-funded by the operators. 
Please see the front page of each chatmail server for further information. 

To support chatmail development and the running of the default onboarding server
you are very welcome to chip in. 

[Donate Money](donate){: .cta-button}
