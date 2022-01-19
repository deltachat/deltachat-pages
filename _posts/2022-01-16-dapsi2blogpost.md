---
title: Which e-mail providers work well with Delta Chat? Quite some :) 
author: missytake, jette, holga
image: ../assets/blog/eppd-criteria-final.jpg
---

In the last couple of months we dived into comparing around 20 international e-mail providers, based on our [earlier research into comparison criteria](https://delta.chat/en/2021-09-11-eppd-provider-criteria).  These efforts were part of our [EPPD](https://dapsi.ngi.eu/hall-of-fame/eppd/) project, which was funded by the 
[Next Generation Internet](https://www.ngi.eu/) programme of the European Union.  Without further ado, take a look at our overview of results :) 

[insert screenshot of final provider comparison table, linked to a PDF that also contains a legende for each column]

In the columns you'll see both qualitative and quantitative evaluations. Automatically testing speed and rate limits proved to be a cumbersome exercise as most e-mail providers are very sensitive to automated scripted interactions which servers quickly classify as spam. For some providers we failed to run interoperability tests probably because we used fresh accounts which are probably monitored even more strictly. For most providers, however, we could measure interoperability behaviour, and also sending/receiving speed and the allowed size of attachments. We also recorded how many steps it takes to setup a new account. We published our measurement tool [eppdperf](https://github.com/deltachat/eppdperf) and intend to improve it further. As we found onboarding problems with providers we iteratively improved our [provider DB](https://providers.delta.chat) so that onboarding will be quicker and more fluent for new users in the next App releases. 

As part of the EPPD project we also released [quota and connectivity features](https://delta.chat/en/2021-08-24-updates) and the new [account switcher](https://delta.chat/en/2021-11-17-releases) which allows to quickly change between multiple accounts and providers. 

If you have any additional input or questions you are welcome to post on our [support forum](https://support.delta.chat) -- you can login with your Delta Chat app there through a QR scan btw :) 
