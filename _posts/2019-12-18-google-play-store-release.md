---
title: Delta Chat 1.0 Released on the Google Play Store - Install for Free Today!
author: compl4xx
---


**After months of hard work, Delta Chat is ready for the general public. The new features of version 1.0: profile images, a device chat for general information, and better Android 9 support!**

(some nice intro, write at the end)
* Christmas present intro?
* we are proud to bring the new release?
* thanks to the community here or below?
* 

*rewrite*: 
note that F-droid is not yet available, we aim for it once the gplay release stabilizes. Unfortunately, the build-process and feedback loop speed of releasing on F-droid leaves much to be desired so we couldn't tackle it in conjunction with the current release. You can install an apk directly from our website though.

## Have you tried out our Desktop Client and iOS app?

If you don't have an Android phone, no problem - Delta Chat is also available
for Windows, MacOS, Linux, and iOS. Those versions are not as far as the
Android app, and are right now in Beta stage:

Stay tuned for the **Desktop release**, which will come soon! Get the
pre-release version [at our download page](https://get.delta.chat).

The **iOS app** still needs some work - you can help us by testing it. [Join
the testflight program](https://testflight.apple.com/join/uEMc1NxS) to try it
out!

## New Usability Features

If you use Delta Chat already, then you probably found it on
[F-Droid](https://f-droid.org/packages/com.b44t.messenger/). F-Droid is still
offering version 0.510.1 for now. Since the last official release for F-Droid,
there have been many improvements in usability:

### Profile Pictures

One thing which makes Delta Chat much prettier are **profile pictures**. Or at
least, it makes Delta as pretty as its users ;)

You can add a profile picture in your settings. If you write to your contacts
or add them via QR code, they automatically see it as your profile picture.
Contacts who don’t use Delta Chat see it as an email attachment.

For privacy reasons, no one sees your profile picture until you write a message
to them. This way, you can control who sees your picture without any extra
interaction. This is very typical for the Delta approach on privacy by design.

![The Delta Chat settings - in the top you can see a profile image and a user
name. You can get this version at the Google Play
Store.](../assets/blog/screenshots/2019-12-17-delta-chat-google-play-release-settings-light.png)

*You can set a profile image in the settings. Your contacts receive it
automatically.*

### Show Classic Emails as Contact Requests

Many Delta users use the messenger for all their emails, not only for chatting.
In the settings, they can set "show classic emails" to "all". Then they will
see normal emails as well, not only Delta messages.

With version 1.0, if you have set "show classic emails" to "all", emails from
new people will show up as contact requests - directly in your chat list. This
way, you will never miss an email. If you don't want to have a conversation
with your Delta Chat app, you can just decline the contact request.

![The Delta Chat chat list - in the top there is a contact request. You can get
this version at the Google Play
Store.](../assets/blog/screenshots/2019-12-17-delta-chat-google-play-release-chat-list-light.png)

*Never miss an email - just set "show classic emails" to "all" to receive all
emails as contact requests.*

### The Device Chat - Delta Infos Directly on Your Phone

With the new Android version for the Google Play Store, users get important
information directly as a chat.

This channel will mostly be used if there are new updates, or if there are
problems. In short - for all the boring stuff developers need you to know.

![The device chat, where you can see information from the
developers.](../assets/blog/screenshots/2019-12-17-delta-chat-google-play-release-device-chat-light.png)

*The first message everyone gets via the device chat is some explanation on how
Delta Chat works.*

### Saved Messages 

saved messages

Android9 is better supported (notifications, 64bit)

[Try it out!](https://play.google.com/store/apps/details?id=chat.delta)

## Improvements in the background

### New Rust core

the core library of deltachat is now completely written in Safe Rust (multi-month effort, started April 2019), and is using modern async libraries to perform IMAP and SMTP. It will still require stabilization but already it's running faster. Delta Chat is thus the first messenger app suite that has a full-Rust core.

[Contribute!](https://delta.chat/contribute)

### SecURiTyy

RPGP, the e2e crypto engine used by all DC apps, got a security review (link to publishing the security report), no critical flaws found for DC's usage, and most (all?) other issues have been addressed.

## Thanks to the Community!

The whole rewrite and this release was a huge community effort.

Thanks to all contributors, testers, translators, those who fetched mate & food and/or cooked at the gatherings, reviewed pull requests, thanks to our CI servers, and everyone else I forgot here.

[Get Delta Chat now!](https://get.delta.chat)

If you want to migrate from an apk or F-Droid installation, export a backup, install the app, and re-import the backup.
