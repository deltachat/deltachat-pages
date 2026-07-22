---
title: Privacy Notes Delta Chat Apps
lang: en
---

# Privacy Notes for Delta Chat Apps

**Delta Chat apps collect zero personal data from you.**
You don't create an account with us, there are no ads and no tracking,
and by default nothing is ever sent to Delta Chat developers.
Because there is no central data collection,
a few short notes can take the place of a lengthy privacy policy.

## Your Data Stays on Your Device

Everything you see in Delta Chat is stored on your device, and only there:

- your chats, photos, videos, voice messages and files,

- your contacts and groups,

- your encryption keys and settings.

Delta Chat never uploads your address book to any server,
and developers cannot access your data, not even in encrypted form.
When you add a second device,
your data moves directly from one of your devices to the other.

## How Messages Are Delivered

When you create a profile, Delta Chat automatically connects to several
community-run "chatmail relays" which pass messages between devices:

- You get a randomly generated address;
  no phone number, name or other personal data is asked.

- All messages are end-to-end encrypted, so relays cannot read them.

- Message details, group names and group members are encrypted as well;
  relays only see random addresses, message size and a randomized date.

- Relays delete messages after delivery, or after a few weeks at the latest.

- Standard chatmail relays do not keep records of IP addresses.

- If one relay is blocked or breaks down,
  your messages simply travel through another one.

Relays are run by different people and groups around the world,
see the [list of public relays](https://chatmail.at/relays)
and the [FAQ about relays](help#relays).

## If You Disable Forced Encryption

By default, Delta Chat requires end-to-end encryption for all messages.
If you instead connect a classic email account,
or a relay that does not enforce encryption,
messages without end-to-end encryption become possible
and are marked with a small email icon.
Your login data is still stored only on your device,
but your messages pass through the servers of your chosen provider,
whose privacy practices you need to check yourself.

## Mini Apps in Chats

You can attach [mini apps](help#webxdc) to a message,
for example games, polls or shopping lists.
Mini apps are as private as the chat you share them in:

- Mini apps cannot access the internet
  and cannot send your data anywhere.

- They can only exchange data with the members of their chat,
  using the same end-to-end encrypted messages as everything else.

- App developers cannot track you or even know that you use their app.

- For fast interactions like multiplayer games,
  mini apps can use direct connections between the devices in a chat;
  as with [calls](#audio-and-video-calls),
  the devices then see each other's IP address.

This no-internet isolation of mini apps has been
[independently security audited](2023-05-22-webxdc-security).

## Audio and Video Calls

Audio and video calls are end-to-end encrypted,
and only contacts you accepted can ring you.
For best quality, calls connect your device
directly to the device of your contact;
as with any direct connection,
the devices [see each other's IP address](help#who-sees-my-ip-address)
during the call.

## Message Notifications

To show new messages while the app is not running,
Delta Chat uses the "push service" of your platform,
a server that wakes up apps on your device.
Push services are run by Apple for iPhones, by Google for Android phones,
by the Ubuntu Touch community, or follow the open Web Push standard.

- Your device creates an anonymous "wake-up token"
  whose only purpose is to tell your phone to check for new messages.

- Push services never see message content or names,
  and do not learn who you are or what you write.

- The small Delta Chat forwarding service in between
  forgets each token within moments and stores nothing about you.

- If you turn notifications off, no token is created at all.

- F-Droid and desktop versions do not use push services at all.

You can find the [technical details in the FAQ](help#privacy-notifications).

## Optional Statistics on Android

Delta Chat for Android asks whether you want to support development
by sending [anonymous weekly usage statistics](help#statssending),
for example which features are used and which errors occur.
Nothing is sent unless you agree,
the statistics contain nothing that could identify you,
and you can change your choice anytime at **Settings → Advanced**.

## App Permissions

Delta Chat only uses device permissions for things you do yourself:

- **Camera** to take photos or scan an invite QR code,

- **Microphone** to record voice messages or have calls,

- **Location** only if you choose to share it in a chat,

- **Storage** to attach or save files.

Everything is processed on your device and never sent to developers.
Internet access is the only required permission,
as it is needed to deliver your messages.

## Downloading the App

When you download Delta Chat from an app store
like Google Play or the Apple App Store,
the store handles the download under its own privacy policy.
Downloads from F-Droid or [get.delta.chat](https://get.delta.chat)
require no account at all.

## Questions & Contact

If you have questions about these privacy notes, you can reach us:

merlinux GmbH<br />
Reichsgrafen Str. 20, 79102 Freiburg, Germany<br />
[delta-privacy@merlinux.eu](mailto:delta-privacy@merlinux.eu)

These Privacy Notes are valid as of July 2026.
