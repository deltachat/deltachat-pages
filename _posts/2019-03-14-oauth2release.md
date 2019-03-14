---
title: New Android releases with OAUTH2 and improved e-mail interactions
author: holger
---

Delta Chat Android 0.200 is now on Google Play with lots
of improvements addressing often requested issues. 

## Password-less logins for GMail and Yandex 

You can now configure your existing e-mail account without providing 
your password to Delta and you also don't need to enable "less secure apps" 
anymore. OAuth2 is currently supported for gmail.com, googlemail.com 
and yandex.ru.  There is no longer the need to enable "Less secure apps" 
somewhere deep in settings. We've implemented OAuth2 independently from 
Google libraries.  The authorization just opens the system browsers and 
of course you still have the choice not to use OAuth2.

This means that you only need to provide your e-mail address and GMail/Yandex 
will then ask you to confirm to give access to your e-mail account so that Delta 
can send and display chat messages. Please remember that **Delta Chat is serverless**
as well. All Delta Chat apps are Open Source and can be verified to not 
transmit your address/account information anywhere else than with the 
e-mail provider of your choice. 


<img src="../assets/blog/2019-02-oauth2-ask.png" width="280"> <img src="../assets/blog/2019-02-oauth2-confirm.png" width="280">

## Streamlined Contact requests 

With Delta Chat you can message anyone if you know their e-mail address. 
They can read and reply with their standard e-mail app without
signing up anywhere or installing anything. However, we finally
a popular complaint with which e-mails are shown as contact requests.
You will now by default only see messages as contact requests if the other side 
sent a Delta Chat message. Normal e-mails will not show up unless they are a 
direct reply to a chat message that you sent before. 

If you want to see both chat and normal e-mails from an accepted contact, 
you can enable that in "advanced settings". Some people also like to read all
their e-mail with delta chat and they can enable seeing "all" messages
as contact requests. 

## Better moving of Chat messages to DeltaChat folder

We made the algorithm more robust that automatically moves chat messages
to the DeltaChat IMAP folder.  You should now see less clutter in your
INBOX with your regular e-mail app.  There are many community
discussions in the last year around this topic and we hope we finally
found a way that is robust and easy to understand. All chat messages
will be automatically moved to the DeltaChat folder and also
any reply you get to a chat message that you previously sent to a 
regular-email user. 

## Improved automatic configuration with providers, reduced message size

In our never-ending quest of making things work out of the
box we fixed issues with several providers, among them 
the cuban "Nauta.cu". If you didn't know, Delta Chat had 
quite some uptake in Cuba as any traffic that leaves the island 
is expensive while using the "cuban intranet" mail server 
is mostly affordable from mobiles. Whatsapp is practically
not available there -- a not so uncommon reality that large parts of 
the western world experienced yesterday as well, due to the 9h or so 
outages of Facebook/Whatsapp.  

We also greately reduced message size for group-chats by not gossiping
encryption control information with every chat message anymore.  More
message-size optimizations are coming! 

## Much much more, coming soon! 

There is *a lot more* that's coming up soon but we wanted to 
share the current improvements already and more publically 
because people have been asking about it repeatedly.

Please note that Delta Chat remains marked as "Beta",
also on Google Play. We know very well that most people's
expectations are very high when it comes to messenger usage. 
But don't despair -- a non-beta version is getting ever more closer
and the current Beta works already suprisingly well for many
people in many different settings and countries. 

Please help us to evolve Delta Chat by [https://deploy-preview-145--deltachat.netlify.com/en/contribute](providing feedback, contributing improvements or a little donation). If you join our channels you'll also get to hear many of the upcoming good news earlier than here ;) 
