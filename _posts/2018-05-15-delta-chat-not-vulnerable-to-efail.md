---
title: Delta Chat not vulnerable to EFAIL
author: Holger Krekel, Björn Petersen
---


You may have heard that the 
[EFF has published advice from a group of security researchers][1],
who claim that there is a serious problem with PGP encrypted e-mail.

As far as we can tell, **Delta Chat is not affected by these vulnerabilities.** We will monitor the situation and advise further if our assessment changes.

Here are several reasons why Delta Chat is not affected:

1. Delta Chat does not display HTML content.

2. If a HTML-only message is received, it is converted to plain text by stripping all tags.
   
3. Delta Chat does not stitch body parts together.
  
4. Delta Chat does not load remote content.

Besides Delta Chat, other Autocrypt supporting apps like K-9 Mail were _never_ affected. Enigmail had released updates two months ago that fix the problem in Version 2.0. UPDATE: There is still an open vulnerability in Thunderbird, therefore we recommend that you view messages as plain text (menu View > Message Body as > Plain text).

If you use **other mail programs**, we recommend to:

1. Turn off loading of external resources in your Mail programm. This is a recommended practice for privacy reasons anyway as this can be used for remote tracking purposes. 

2. Turn off automatic HTML rendering of messages unless you really need it.

3. Check if the app or addons you are using for PGP are up to date and follow advise from respective developers. 

However, even with vulnerable e-mail programs, it appears an attacker still needs to first have access to recordings of your private e-mail messages. Without access to such recordings, the attack can not be attempted and it would show up in your INBOX likely. It is thus generally a good idea to use an e-mail provider you can trust and who cares for secure operations (e.g. TLS). Luckily with e-mail, you have a choice :)

Let us note that we find the general advice and communication from the EFF to "stop using PGP" misleading. It caused a lot of fear and uncertainty and pushes users into the direction of not using e-mail encryption where they still should and can safely do.  It is also unhelpful and largely unpractical to recommend using Signal instead of e-mail. 


[1]: https://www.eff.org/deeplinks/2018/05/not-so-pretty-what-you-need-know-about-e-fail-and-pgp-flaw-0
