---
title: "Delta Chat 2.64.0: more resilience, decentralization and new features!"
author: "Delta Chat team"
image: ../assets/blog/2026-10-28-pin-messages-preview.jpg
---

Delivery time!
The latest Delta Chat releases
bring improvements in resilience, decentralization and everyday usability.
We've moved away from centralized default onboarding,
added Post-Quantum Cryptography support,
and polished the UI across all platforms.

## Pinned Messages are here

**XXX: add screenshot**

A long-awaited feature to keep important information right at hand.
You can now pin relevant or frequently needed messages to the top of your chats.
This makes it easy to find group rules,
important announcements or quickly access mini-apps that are used often,
without endless scrolling.

## More decentralized, but just as simple

**XXX: add screenshot from desktop or iOS showing the instant onboarding screen without the nine.testrun.org and another one showing 3 random relays selected**

We are no longer onboarding new users into a single default relay.
Instead, new setups are automatically distributed across multiple independent relays.
This ensures no single point of failure
and keeps the network truly decentralized
while for the users the onboarding experience is just as simple as before.

## Improved Resilience: Relay auto-fallback & seamless sync

**XXX: maybe add a screenshot of someone's sent message "AWS us-east-1 is down again, half the internet is down, but somehow my messages still go out here" with read receipts**

If one of your relays fails, Delta Chat automatically falls back to another,
ensuring your messages always get through.
If you add or remove relays, the changes sync seamlessly with your contacts.
You don't need to manually notify your contacts,
avoiding the loss of messages while you are giving your profile a new home.

## Preparations for a Post-Quantum Future

<img src="../assets/blog/2026-10-28-pqc-future-loading.webp" />
<!-- original image source: https://www.publicdomainpictures.net/en/view-image.php?image=221604&picture=future-downloading -->

Delta Chat now supports Post-Quantum Cryptography (PQC).
While PQC keys aren't used by default yet,
this preparation step ensures forward compatibility
with future versions of Delta Chat where it will be the standard.
Older Delta Chat clients will already be able to handle them without any incompatibility issues.


## Better Message Info

**XXX: [android|ios] add screenshot**

Checking who has read your message is now much cleaner across all platforms.
The list of contacts is clearly visible,
while advanced debugging information (meant primarily for developers) has been moved away into the dialog's menu.

## Forgotten Gems

<img src="../assets/blog/2026-10-28-gemstones.png" />
<!-- original image source: https://www.pexels.com/photo/person-holding-gemstones-7965819/ -->

Some of the features listed here actually landed before 2.64.0 releases.
Honestly, we were so busy working on the next batch of improvements
that they didn't get a chance to shine in this blog.
So let's recap.

### Reactions in channels and nicer reactions details

**XXX: [android] add screenshot of a channel with reactions and the reactions details**

Channels just got more interactive.
You can now react to messages in channels,
allowing to get some feedback from subscribers and making them look more alive.
The reactions details dialog also got polished in the process.
For now just a handful of default reactions are allowed
but the idea is to allow channel owners to personalize what reactions are allowed in their channel,
stay tuned!

### Delta Chat iOS now has Liquid Glass support

**XXX: add screenshot**

Delta Chat iOS added support for Apple's new Liquid Glass UI language,
looking more integrated in such devices.

### In-app upgrades on Android

**XXX: add screenshot**

If you like to get the Android apk directly from us,
ex. via our download page or GitHub, without any store in the middle,
we have great news for you!
Now the app will notify you when there is a new release and smoothly allow you to directly download and install the new version.
Don't worry, this doesn't work by pinging some central server,
instead the information is provided by the chatmail relays you are already connecting to!

### Mark chat as unread

Want to read a chat now but answer later?
We've got you covered with the new "Mark as unread" option
in the chat's context menu in the chat list.

On the other end of the spectrum,
the ability to mark a whole profile as read has landed across all platforms.

### Improved image quality

To the joy of every family chat,
the photos you share now look noticeably sharper and retain more detail.

### Multi-select everywhere

Multi-select is now fully supported on all platforms,
including a long-requested implementation for Desktop.

### New Webxdc APIs

Mini-apps now have access to the new `webxdc.isAppSender` and `webxdc.isBroadcast` APIs,
enabling smarter and more context-aware app experiences within groups and channels.

## Get the Update

Visit [get.delta.chat](https://get.delta.chat) or your preferred store to grab the update and try out the new features.
Please [let us know](/contribute#translations-and-bug-reports) if you encounter any problems.

## Final Remarks

Thanks for making it to the end of this post!
If you would like to support our efforts, please consider
[contributing or donating](https://delta.chat/en/contribute),
running a [chatmail relay](https://chatmail.at/relays),
trying out the enjoyable experience of creating [secure mini-apps](https://webxdc.org)
or just leaving us a review in your app store of choice.

♥ **thanks for following and supporting us** ♥
