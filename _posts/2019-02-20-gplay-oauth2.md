---
title: Play Store, OAuth2 and more from the dev stage 
author: bjoern
image: ../assets/blog/2019-02-oauth2-ask.png
---

As you may have noticed, Delta Chat is now available 
in the **Beta Channel of Google Play**.

We got lots of feedback to this the last days
(thanks to everyone! and do not stop taking care :)
and i think we have a good idea of things that have to be done
until we can aim for a real release.

- In general, chat-messages are moved to the **DeltaChat folder**
  to avoid cluttering the INBOX 
  if you use Delta together with a classical mail app on the same account.
  However, this moving seems to be too complicated in some situations
  and we'll try to implement a default that is working better
  and is easier to understand.

- Also, whether **normal-mails show up in Delta or not**
  is confusing sometimes and needs some more love from some developers.
  This will be discussed the next time in the known [channels](contribute).

- The onboarding and the **guessing of server settings** is going to be improved,
  also here, thanks to everyone 
  [helping on this with issues and pull-requests on github](https://github.com/deltachat/deltachat-core/).
  
Already done - and the largest visible change in the onboarding process
is the new **support of OAuth2**.

OAuth2 is currently supported for gmail.com and googlemail.com addresses
(yandex is coming soon)
and frees the user from entering a password in Delta Chat - 
also there is no longer the need to enable "Less secure apps" somewhere
deep in the google settings.

This is how the new setup will look like:

<img src="../assets/blog/2019-02-oauth2-ask.png" width="280"> <img src="../assets/blog/2019-02-oauth2-confirm.png" width="280">

We've implemented OAuth2 in a way to stay independent of Google libraries,
so, the app itself is still clean.
The authorization just opens the system browsers
and you still have the choice not to use OAuth2.

Like to test this? We've prepared a preview release
[here](https://github.com/deltachat/deltachat-android/releases/tag/oauth2-preview-0.101.1) :)

So far - looking forward to what will happen the next weeks then :)
