---
title: "A user surge and funding for decentralized scale" 
author: olgax
image: ../assets/blog/reclaim.jpg
---

Beginning June we witnessed a sudden surge of Delta Chat usage especially in the US and Cuba. 
While we don't know the details of the social dynamics behind it
we guess it helps that 
Delta Chat apps work across all platforms and offer a pleasing user interface 
which increasingly many families, groups and communities appreciate. 
Let's look at some indicators of the recent surge, 
then highlight some centralization risks and our mitigation plans. 

## 5000 new users per hour on the default chatmail relay 

<img alt="Graph about creation of user accounts on default onboarding server last 6 hours" src="../assets/blog/surge-5000-users-per-hour.png" style="max-width: 100%" />

Fun fact: after some performance adjustments to Dovecot, 
the small physical server keeps humming along 
at 20% CPU and 20% IO pressure without consuming noticeable disk storage. 

## 1.8 Million Google/Apple push notifications per day 

<img alt="Graph about push notifications of the last day" src="../assets/blog/2025-06-direct-notifications-per-day.png" style="max-width: 100%" />

This number reflects the number of incoming messages for users 
who installed their app from Google Play or Apple store and use any chatmail address. 
F-droid, Desktop or classic e-mail users are all not reflected in this number.
Number of daily Push notifications was around 350K end of February 2025. 

## Google Play Android downloads crossed 500K downloads 

<img alt="Google Play store showing 500K+ downloads" src="../assets/blog/2025-06-google-play.png" style="max-width: 100%" />

Note that we generally recommend F-droid or other non-Google sources of installing Delta Chat apps
and only have a somewhat informed guess that at most half of Android users use non-Google sources. 

## Funding for a globally scaled chatmail relay network 

<img src="../assets/logos/chatmail.png" style="width:100px; float:left; clear:both; margin-right:.5em; margin-bottom:.2em;" />

There are many community-operated [chatmail relays](https://chatmail.at/relays) on all continents 
but most new users choose the default onboarding relay in Germany,
reproducing **the known problem of formally decentralized but centralized in practise** offerings. 
We are engaging in two key Research and Development areas 
to fundamentally mitigate this centralization tendency 
and achieve distributed scale, along with improved resiliency and privacy:

- **Cryptographic hardening**: Using e-mail addresses as transport but not as a
  source of identity; hiding cryptographic identities from transports; 
  implementing "Sealed Sender" and maybe "Sealed recipients" while we are at it. 

- **Multi-transport**: Allowing a chat profile to use multiple chatmail relays 
  interchangeably allowing users and operators to not make "life-long choices" but
  "as long as it works" choices about chatmail relays, or about operating them. 

However, public funding for these key R&D efforts suddenly dried up earlier in 2025,
disrupting our ability to follow through with our always usability-driven work. 
We are now seeking to at finance key parts of our developments through donations. 

<p><a href="https://opencollective.com/chatmail" class="cta-button">Donate to the new chatmail infrastructure OpenCollective (Europe)</a></p>

<p><a href="../../en/donate" class="cta-button">Donate to Delta Chat app developments (Libera, BTC, IBAN, OC)</a></p>

Last but not least, if you are interested in more technical details 
and want to engage with our various contributor teams and communities,
the place to be is [DIFF in the Black Forest starting this weekend](https://delta.chat/en/2025-05-12-diff-invitation) 
or, else, for now, sorting your way through our development repositories. 
 
