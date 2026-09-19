---
title: Privacy Policy Delta Chat Apps
lang: it
---

# Privacy Policy Delta Chat Apps

**Neither the Delta Chat apps nor their developers
collect or store any personal data or messages from you.**

You don't create an account with us, there are no ads and there is no tracking.

Delta Chat developers run a few complementary services:
for "push notifications", as a fallback for calls,
for a default set of mini apps and for optional usage statistics.
Please see the sections below
and the [detailed legal information](#legal-information) at the end.


## No Profile Directory, No Search for Contacts

**There is no directory or registry of Delta Chat profiles
and there is no possibility to search for people.**

There is no public discovery of any kind:
nobody can look you up, by name, address or anything else,
and only people you share a chat or invite link with can contact you.
Your name and avatar picture are visible to your contacts,
but they are stored nowhere except on your devices and theirs.


## Your Data Stays on Your Devices

**Everything you see in Delta Chat is stored on your devices, and only there**:

- your chats, photos, videos, voice messages and files,

- your contacts and groups,

- your encryption keys and settings.

The app never accesses or uploads your device's address book,
and developers cannot access any of your data, not even in encrypted form.
When you add a second device, your data moves directly between your devices,
without any server in between.


## Creating a Chat Profile

When you create a profile, Delta Chat sets it up on community-run
"chatmail relays" (or "chat relays" in short),
so that messages reach you even if one relay is down or becomes unreachable.
No phone number, email address, name or other personal data is ever asked
and you get a randomly generated address on each relay.

**You are never tied to a particular chat relay.**

At **Settings → Advanced → Relays** you can remove any relay
and add another one at any time, for example by scanning a relay QR code
from the [list of public relays](https://chatmail.at/relays)
or by using a relay you run yourself, or that is run by people you know.


## How Messages Are Delivered

Your chat relays pass messages between chat participants:

- All messages are end-to-end encrypted, so relays cannot read them.

- Message details, group names and group members are encrypted as well
  and relays only see random addresses, message size and a randomized date.

- Relays delete messages after delivery, or typically after a few weeks.

Relays are run by different people and groups around the world.


## Private Mini Apps in Chats

You can attach mini apps to a message, for example games, polls or shopping lists.
Mini apps are small web apps built with HTML, CSS and JavaScript,
packaged as described in the open [webxdc specification](https://webxdc.org/docs/spec/index.html).
Mini apps are free of charge and contain no purchases, subscriptions or ads;
every app in the default collection links to its published source code.

**Using mini apps is as private and secure as the chat you share them in:**

- Mini apps can only exchange data between the chat members,
  using the same end-to-end encrypted messages as everything else.

- Mini apps run in a sandbox without internet access
  and without permissions of their own;
  a file enters a mini app, or a message leaves it into a chat,
  only when you choose so in each case
  ([security audit](2023-05-22-webxdc-security)).

- Mini app developers cannot track you or even know that you use their app.

- Mini apps may establish fast connections between the devices in a chat,
  through the realtime service of community chat relays.
  The realtime service sees the IP addresses of these devices
  but can never read the end-to-end encrypted traffic.

When you attach an app to a chat,
you can select it from a default mini app collection,
administered by Delta Chat developers.
The collection server briefly sees your IP address
and which apps you download, but keeps no record of your address and
knows nothing about your profile or in which chat you use a downloaded app.


## Audio and Video Calls

Audio and video calls are end-to-end encrypted,
and by default only contacts you accepted can ring you.
For best quality, calls connect your device
directly to the device of your contact.
As with any direct connection,
the devices see each other's IP address during the call.
If a direct connection is not possible,
the call travels encrypted through a call relay,
without the relay being able to listen in.
The call relay sees the IP addresses of both call partners,
even for directly connected calls.
If your chat relay does not integrate a call relay,
turn.delta.chat is used as a fallback,
administered by Delta Chat developers.


## Message Notifications

To show new messages on mobile phones while the app is not running,
Delta Chat uses the "push service" of your platform,
a server that wakes up apps on your device.
Push services are run by Apple for iPhones, by Google for Android phones
or by the Ubuntu Touch community.

- Your device gets an anonymous "wake-up token" from the push service,
  whose only purpose is to tell your phone to check for new messages.

- Push services learn nothing about your chats:
  no message content, no sender names and no profile information.

- The small token forwarding service in between,
  run by Delta Chat developers, only passes tokens on
  and knows nothing about you.

- F-Droid and desktop versions do not use push services at all.


## If You Opt Out of Forced End-to-End Encryption

By default, Delta Chat strictly requires end-to-end encryption.
Unencrypted messages only become possible
if you manually select a classic server for a profile,
and additionally disable forced encryption in your client.
Messages without end-to-end encryption
are then marked with a small email icon
and a generic grey email contact avatar.
The privacy policy of your chosen provider applies.


## Optional Statistics on Android

Delta Chat for Android asks whether you want to support development
by sending anonymous weekly usage statistics,
for example which features are used and which errors occur.
Nothing is sent unless you agree,
the statistics contain nothing that could identify you,
and you can change your choice anytime at **Settings → Advanced**.

<div id="24-app-permissions"></div>


## App Permissions

Delta Chat only uses device permissions for things you do yourself:

- **Camera** to take photos, scan an invite QR code or make video calls,

- **Microphone** to record voice messages or make calls,

- **Location** only if you choose to share it in a chat,

- **Photos and files** to attach or save them,

- **Notifications** to show new messages,

- **Face ID or fingerprint** only to protect access to the app on your device.

Everything is processed on your device and never sent to developers.
Internet access is the only required permission,
as it is needed to deliver your messages.


## Downloading the App

When you download Delta Chat from an app store
like Google Play or the Apple App Store,
the store handles the download under its own privacy policy.
Downloads from F-Droid or [get.delta.chat](https://get.delta.chat)
require no account at all.



## Legal Information

### Data Controller and Data Protection Officer

Responsible for the processing of your personal data is

merlinux GmbH<br />
Represented by the managing director Holger Krekel<br />
Reichsgrafen Str. 20, 79102 Freiburg, Germany<br />
[delta-privacy@merlinux.eu](mailto:delta-privacy@merlinux.eu)

If you have questions about this privacy policy, this is where you reach us.

Our data protection officer: **Prof. Dr. Fabian Schmieder**,
lexICT UG (limited), Ostfeldstr. 49, 30559 Hannover.
You can contact him at [info@lexict.de](mailto:info@lexict.de),
keyword: DeltaChat.

### Services Run by Delta Chat Developers

Everything that happens on your device, from your chats to your encryption keys,
is processed by the app alone. We are not involved and not a controller for it.
The following services are the only ones we operate for the apps,
and none of them keeps IP addresses:

- **Notification forwarding**, see [Message Notifications](#message-notifications).
  The forwarding service gets your wake-up token from your relay,
  not from your device, and keeps no record of IP addresses
  or of which token belongs to whom.
  Legal basis is your consent,
  [Art. 6 (1) lit. a GDPR](https://gdpr-info.eu/art-6-gdpr/).

- **Call fallback**, see [Audio and Video Calls](#audio-and-video-calls).
  turn.delta.chat keeps its connection log in memory only,
  for at most three days, and never writes it to disk.
  Legal basis is our legitimate interest in connecting calls
  that cannot be established directly,
  [Art. 6 (1) lit. f GDPR](https://gdpr-info.eu/art-6-gdpr/).

- **Mini app collection**, see [Private Mini Apps in Chats](#private-mini-apps-in-chats).
  The collection server logs which apps are downloaded, never by whom,
  and discards these logs after two weeks.
  Legal basis is our legitimate interest in offering the collection,
  [Art. 6 (1) lit. f GDPR](https://gdpr-info.eu/art-6-gdpr/).

- **Usage statistics**, see [Optional Statistics on Android](#optional-statistics-on-android).
  They reach the statistics bot as ordinary end-to-end encrypted messages
  through your relays, so the bot sees your relay address
  but never your IP address.
  Legal basis is your consent,
  [Art. 6 (1) lit. a GDPR](https://gdpr-info.eu/art-6-gdpr/),
  which you withdraw at any time at **Settings → Advanced**.

Downloads from [get.delta.chat](https://get.delta.chat) are covered by
the [website privacy policy](gdpr-website).

### Who Else Processes Your Data

- **Chat relay operators.**
  The relays your profile connects to are run by independent community operators.
  A relay sees your random address, the size and randomized date of messages
  and, for connectivity, your IP address.
  You can find the relays you are using in **Settings → Advanced → Relays**
  and discover their privacy policy by going to the respective relay web page.

- **Classic email providers**, but only if you selected one for your profile,
  in which case their privacy policy applies.

- **Push services** of Apple, Google or UBports receive
  the wake-up token and nothing else.

- **OpenStreetMap** serves the map images for the map view of shared locations
  and sees your IP address while you use it.

- **App stores** process your download under their own privacy policy,
  see [Downloading the App](#downloading-the-app).

### For Organisations

Delta Chat developers process no personal data on behalf of organisations
using the apps, so no data processing agreement with merlinux GmbH is needed,
[Art. 28 GDPR](https://gdpr-info.eu/art-28-gdpr/).
No data protection impact assessment is required for using Delta Chat,
[Art. 35 GDPR](https://gdpr-info.eu/art-35-gdpr/),
as nothing beyond the messaging itself is processed.
Your record of processing activities,
[Art. 30 GDPR](https://gdpr-info.eu/art-30-gdpr/),
covers the relays or email providers you use.

### Your Rights

As a data subject of a processing of personal data, you have the right to

1. request information about your personal data processed by us
   in accordance with [Art.15 GDPR](https://gdpr-info.eu/art-15-gdpr/).
   In particular, you can request information about the processing purposes,
   the category of personal data,
   the categories of recipients to whom your data have been or will be disclosed,
   the planned storage period,
   the existence of a right to rectification, erasure,
   restriction of processing or objection,
   the existence of a right of complaint,
   the origin of your data if it has not been collected by us,
   as well as the existence of automated decision-making including profiling and,
   if applicable, meaningful information about its details;

2. in accordance with [Art.16 GDPR](https://gdpr-info.eu/art-16-gdpr/),
   immediately request the correction of inaccurate
   or incomplete personal data stored by us;

3. pursuant to [Art.17 GDPR](https://gdpr-info.eu/art-17-gdpr/),
   to request the erasure of your personal data stored by us,
   unless the processing is necessary for the exercise of the right
   to freedom of expression and information,
   for compliance with a legal obligation, for reasons of public interest,
   or for the establishment, exercise or defence of legal claims;

4. pursuant to [Art.18 GDPR](https://gdpr-info.eu/art-18-gdpr/),
   to request the restriction of the processing of your personal data,
   insofar as the accuracy of the data is disputed by you,
   the processing is unlawful, but you object to its erasure
   and we no longer require the data,
   but you need it for the assertion, exercise or defence of legal claims
   or you have objected to the processing pursuant to
   [Art.21 GDPR](https://gdpr-info.eu/art-21-gdpr/);

5. pursuant to [Art.20 GDPR](https://gdpr-info.eu/art-20-gdpr/),
   to receive your personal data that you have provided to us
   in a structured, common and machine-readable format
   or to request that it be transferred to another controller;

6. in accordance with [Art.7 (3) GDPR](https://gdpr-info.eu/art-7-gdpr/),
   to revoke your consent given to us at any time.
   This has the consequence that we may no longer continue
   the data processing based on this consent in the future;

7. pursuant to [Art.21 GDPR](https://gdpr-info.eu/art-21-gdpr/),
   to object to processing based on our legitimate interests
   for reasons arising from your particular situation; and

8. complain to a supervisory authority
   in accordance with [Art.77 GDPR](https://gdpr-info.eu/art-77-gdpr/).
   As a rule, you can contact the supervisory authority
   of your usual place of residence or workplace
   or our registered office for this purpose.
   The supervisory authority responsible for our place of business
   is the State Commissioner for Data Protection and Freedom of Information
   of Baden-Württemberg in 70173 Stuttgart.

### Changes to This Policy

This privacy policy is valid as of September 2026.
Due to the further development of our apps and offers
or due to changed legal or official requirements,
it may become necessary to revise it from time to time.
You can access and print out the current version at any time
at <https://delta.chat/privacy>.
