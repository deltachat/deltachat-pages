---
title: Authentication as Easy as Delta Chat QR Code Login
author: compl4xx
---


**Log in on a forum, cloud account, or social media platform
by scanning a QR code and a press of a button? Delta Chat.**


## What is Delta Chat Identity?

At our November Delta Chat hackathon, a neat authentication tool for
easy login and account creation saw the light of day.

Imagine you need help with Delta Chat, found a bug, or want to propose a
feature like the one here. You stop by at the [support forum](https://support.delta.chat/),
wanting to open a topic to put it to community discussion.
You contemplate creating an account, making up a password, and waiting
for a verification e-mail, but that is not what you had in mind.

If you have a [GitHub](https://github.com/deltachat/) account,
you can sacrifice some privacy at the altar of "Sign in with GitHub". It's the same as
"Sign in with Facebook, Twitter, etc." on other platforms, which is also not on offer
for privacy reasons. But then you see **"Log in with Delta Chat
Identity"**.

![An account creation form—on the right, it says "With Delta Chat
Identity".](../assets/blog/delta-chat-identity-forum-signup.png)

*On <a href="https://support.delta.chat/"
target="_blank">support.delta.chat</a>, click on "Sign Up" to create an
account.*

You find yourself redirected to login.testrun.org, (our authentication server). It
shows you a QR code. You **Scan it with your Delta Chat Android app**:

![A website showing a QR code to log in on the
forum.](../assets/blog/delta-chat-identity-qr-code-scan.png)

*Scan the QR code with your Delta Chat Android app to authenticate yourself.*

A question of whether you want to join a group will present itself on your device.
**"OK"**. In the background, e-mails are exchanged to verify you; a bit like a
verification link in an e-mail, but fully automated. Afterwards, two more chats
can be found in your chat list—you break character and say: "Those are not important,
I can leave those, or otherwise ignore them, for now it's only necessary they are
created."

![Different Screenshots, showing what's happening on the Android app in the
meantime.](../assets/blog/delta-chat-identity-android-flow.jpg)

*These are the steps undertaken on the current Android prototype, not yet
an optimized workflow.*

A few seconds later, you are redirected to the forum, where you can
**choose a username**. Your Delta Chat username is suggested, but anything
available is on the table:

![An account creation form with e-mail address and username, filled
out.](../assets/blog/delta-chat-identity-create-account.png)

*One click to creates the account, using your username from
Delta Chat.*

**All done**. That is all it took to gain access to the forum.
Hopefully no questions will have arisen meanwhile, and you proceed to help others,
and discuss feature requests to your heart's content. As it happens, your alternate
ego is still stuck logging in the old way. From a not too distant future you remark
using your e-mail account and self-controlled cryptographic identity to
authenticate a web-session as a new and better self.

![The support forum; sporting two unread
topics.](../assets/blog/delta-chat-identity-support-forum.png)

*Now you are a part of the Delta Chat community forum, you magnificent you*


## Why didn't I do that already?

Most of this is not very new. [OAuth 2.0](https://oauth.net/2/) is an established
standard that has been around for a while. "Log in with Delta Chat" uses it in the same
manner as "Sign in with GitHub".

Pairing that with the even older technology of **QR codes**, and some logic,
you can now use your device for quick login on other computers as well.
This brings a whole different feel to logging in; scan a QR code and done.
No passwords necessary.

With this authentication method, the e-mail address of the contact is available
directly, which is used by almost every internet service for identification.
The biggest difference between Delta Chat and other messengers has always been
that we can use the advantages of the e-mail network.

For now it is only set up for use on the Delta Chat Discourse forum—setting it up
for other [Discourse](https://www.discourse.org/) instances is easy.
*(If you want this type of login on your forum, write me a message:
[compl4xx@testrun.org](mailto:compl4xx@testrun.org).)* But in theory, it could
be used for any web service - Nextcloud, Mastodon, or other decentralized
services are well suited for this.

The biggest advantage comes in the form of **privacy**. You don't have to
tell Facebook or GitHub (Microsoft) you are using our forum. You don't
have to grant any app access to a Facebook or GitHub account. This stays
between your e-mail account and us;

This one trick to log onto our [support forum](https://support.delta.chat/) is
upsetting big data.
