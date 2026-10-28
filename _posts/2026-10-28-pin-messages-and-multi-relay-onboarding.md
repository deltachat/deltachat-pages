---
title: "Delta Chat 2.64.0: more resilience, decentralization and new features!"
author: "Delta Chat team"
image: ../assets/blog/2026-10-28-pin-messages-preview.jpg
---

Delivery time! The latest Delta Chat releases bring improvements in resilience, decentralization and everyday usability. We've moved away from centralized default onboarding, added Post-Quantum Cryptography support, and polished the UI across all platforms.

## Pinned Messages

**XXX: add screenshot**

Keep important information always at hand. You can now pin relevant or frequently needed messages to the top of your chats, making it easy to find group rules, announcements/news or quickly access a mini-app that is used often.

## More decentralized but just as simple

**XXX: add screenshot from desktop or iOS showing the instant onboarding screen without the nine.testrun.org and another one showing 3 random relays selected**

We are no longer onboarding new users into a single default relay. Instead, new setups are automatically distributed across multiple independent relays. This ensures no single point of failure and keeps the network truly decentralized while for the users the onboarding experience is just as simple as before.

## Improved Resilience: Relay auto-fallback & seamless sync

**XXX: maybe add a screenshot of someone's sent message "AWS us-east-1 is down again, half the internet is down, but somehow my messages still go out here" with read receipts**

If one of your relays fails, Delta Chat automatically falls back to another, ensuring your messages always get through. If you add or remove relays, the changes sync seamlessly with your contacts. You don't need to manually notify your contacts, so it is less likely you would lose a message while migrating to a new home for your profile.

## Preparing for the future: Post-Quantum Cryptography

<img src="../assets/blog/2026-10-28-pqc-future-loading.png" />
<!-- original image source: https://www.publicdomainpictures.net/en/view-image.php?image=221604&picture=future-downloading -->

Delta Chat now supports Post-Quantum Cryptography (PQC). While PQC keys aren't used by default yet, this preparation step ensures forward compatibility with future versions of Delta Chat where it will be the standard. Older Delta Chat clients will already be able to handle them without any incompatibility issues.


## Better message info

**XXX: add screenshot**

Now you can nicely see the list of contacts that read your message when accessing the message info, the advanced debugging info, meant for developers and troubleshooting, was moved to the menu in that dialog.

## Oldie but goodie

Some of the features listed here were already available even before 2.64.0 releases, but honestly we were so busy shipping the next batch of improvements that they didn't get a chance to shine, so let's recap:

### Reactions in channels and nicer reactions details

**XXX: add screenshot of a channel with reactions and the reactions details**

Channels just got more interactive. You can now react to messages in channels, allowing to get some feedback from subscribers and making them look more alive. The reactions details dialog also got polished in the process. For now just a handful of default reactions are allowed but the idea is to allow channel owners to personalize what reactions are allowed in their channel, stay tuned!

### Delta Chat iOS now has LiquidGlass support

**XXX: here say something about what is nicer now?**

### Mark chat as unread

You want to read a chat but you can't answer now and want to come back to it later? We got you covered with the new "Mark as unread" option available in the chat list.

On the other side of the spectrum, the feature to mark whole profile as read has landed across all platforms.


### Improved image quality

To the joy of every family chat, the photos you share now look noticeably sharper and retain more detail.

### Multi-select everywhere

Multi-select is now fully supported on all platforms, including a long-requested implementation for Desktop.

### In-app upgrades on Android

**XXX**

### New Webxdc APIs

Mini-apps have now access to the new `webxdc.isAppSender` and `webxdc.isBroadcast` APIs, enabling smarter and more context-aware app experiences.

## Get the Update

Visit [get.delta.chat](https://get.delta.chat) or your preferred store to grab the update and try out the new features, [let us know](/contribute#translations-and-bug-reports) in you encounter any problem.

Curious for more? For the complete lists of changes see:
- [Desktop changes](https://github.com/deltachat/deltachat-desktop/blob/main/CHANGELOG.md) 
- [Android changes](https://github.com/deltachat/deltachat-android/blob/main/CHANGELOG.md)
- [iOS changes](https://github.com/deltachat/deltachat-ios/blob/main/CHANGELOG.md)
- [Chatmail Core changes](https://github.com/chatmail/core/blob/main/CHANGELOG.md)
