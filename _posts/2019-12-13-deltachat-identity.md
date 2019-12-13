---
title: Login to our Forum With DeltaChat Identity - Making Authentication Easy With a Simple QR Code
author: <a href="https://lefherz.net" target="_blank">compl4xx</a>
---


**What if you could login to a forum, cloud account, or social media platform
by scanning a simple QR code? Delta Chat makes it possible.**


## What is DeltaChat Identity?

At our Delta Chat hackathon in November, we developed a neat authentication
tool. It enables you to easily login to our [support
forum](https://support.delta.chat/) or create an account by just scanning a QR
code with your Delta Chat app.

Imagine you need help with Delta Chat, found a bug, or want to propose a
feature. You go to our forum, and want to open a topic to discuss it with the
others from the community. But first you need to create an account, make up a
password, wait for a verification mail - it's just too much of an effort.

If you have a [GitHub](https://github.com/deltachat/) account, like many Open
Source developers do, you can click on "Login with GitHub". It's the same as
"Login with Facebook, Twitter, etc." on other platforms, which we don't offer
for privacy reasons. But now you can also choose **"Login with DeltaChat
Identity"**.

![An account creation form - on the right, it says "With DeltaChat
Identity".](../assets/blog/delta-chat-identity-forum-signup.png)

*On <a href="https://support.delta.chat/"
target="_blank">support.delta.chat</a>, click on "Sign Up" to create an
account.*

Then you get redirected to login.testrun.org, our authentication server. It
shows you a QR code. **Scan it with your Delta Chat Android app**:

![A website showing a QR code to login to the
forum.](../assets/blog/delta-chat-identity-qr-code-scan.png)

*Scan the QR code with your Delta Chat Android app to authenticate yourself.*

Now you get prompted on your phone, whether you want to join a group - that's
normal for now. You can just **tap on "OK"**. In the background, it exchanges
some mails to verify you - a bit like a verification link in an E-Mail, but
fully automated. Afterwards you have two more chats in your chat list - you can
leave them, ignore them, for now it's only necessary that they are created.

![Different Screenshots, showing what's happening on the Android app in the
meantime.](../assets/blog/delta-chat-identity-android-flow.jpg)

*The steps it takes on Android - in our current prototype, this is not yet
optimized.*

It takes a few seconds, then you get redirected to the forum, where you can
**choose a username**. It suggests the username you use for Delta Chat, but if
you want to pick a different one, go for it:

![An account creation form with E-Mail address and username, filled
out.](../assets/blog/delta-chat-identity-create-account.png)

*It takes only one click to create your account, the username is the same as in
Delta Chat.*

**That's it!** Now you can use the forum as you want. Ask questions, help
others, discuss feature requests.

![The support forum; there are two unread
topics.](../assets/blog/delta-chat-identity-support-forum.png)

*Now you are a part of the Delta Chat community forum.*


## What's the innovation behind this?

Most of this is not very new. [OAuth2](https://oauth.net/2/) is an established
standard and has been around for a while. "Login with DeltaChat" uses it just
as well as "Login with GitHub".

The main innovation is the **QR code** - you can use your phone to login
quickly, on other computers as well. This gives a whole different feeling to
logging in; just scan a QR code and you're done. No passwords necessary.

With this authentication method, the E-Mail address of the contact is available
directly, which is used by almost every internet service for identification.
The biggest difference between Delta Chat and other messengers has always been
that we can use the advantages of the E-Mail network.

But the most important advantage is in terms of **privacy**. You don't have to
tell Facebook or GitHub (Microsoft) that you are using our Forum. You don't
have to give any application access to your Facebook or GitHub account. This is
just between your E-Mail account and us.

**Try it out:** login to our [support forum](https://support.delta.chat/)!

