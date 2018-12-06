---
title: Help
layout: default-en
---

# Frequently Asked Questions

- [General](#general)
- [Groups](#groups)
- [Encryption](#encryption)
- [Multi-client](#multiclient)
- [Miscellaneous](#miscellaneous)

# General

## To whom can I write?

- With Delta Chat, you can write to every existing e-mail address - even if the recipient is not (yet) using the Delta Chat App. This is one of the biggest differences to other messengers: There is no need for the receiver to install the same app as yours.

## What are the advantages of Delta Chat compared to other messengers?

- _Independent_ of any company or services. _You_ own your data.
- Your data are not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP
- _Largest userbase_ - receivers _not_ using Delta Chat can be reached as well
- _Compatible_ - not only to itself
- _Elegant_ and _simple_ user interface
- _Distributed_ system
- _No Spam_ - only messages of known users are shown by default
- _Reliable_ - safe for professional use
- _Trustworthy_ - can even be used for business messages
- fully _Open Source_ and _Standards_ based

## What if the receiver does not use Delta Chat?

- The receiver will get a normal email then - if he replies to it, you will see the reply in the Delta Chat app.

## Which messages do appear in Delta Chat?

Delta Chat automatically shows ...

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Other messages do not appear automatically. You can see the other messages in the main menu at **Contact requests** and, if desired, start a chat from there.

## What about Spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if really needed, you can **block** any contact.

## Does Delta Chat support images, videos and other attachments?

- Yes. Beside the plain text, all email-attachments are displayed as separate messages. Outgoing messages will get attachments as needed automatically.

## Does Delta Chat support HTML-emails?

- Yes. If incoming email lacks a plain text part, we convert HTML-emails to plain text ourselves. Outgoing emails always use plain text.

# Groups

## How can I create a group?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## Who can add members to a group?

- Every group member has the **same rights** as any other. For this reason every one can delete every member or add new ones.
- To add or delete members, click on the group name in the chat.

## What is a verified group?

- A "verified group" is a labs feature which you can enable in advanced settings.  By adding one another through QR-code scans a group of "verified" members can talk with each other.  It enforces e2e group encryption that is safe against provider or network attacks.  However, some user-tests and feedback suggests that UX and implementation changes makes sense.  Some current discussions (Dec 2018) can be found here: https://countermitm.readthedocs.io/en/latest/new.html

## I have deleted myself by accident.

- As you're no longer a group member now, you cannot add yourself again. However, no problem, just ask any other group member in a normal chat to add you again.

## I do not want to receive the messages of a group any longer.

- Either delete yourself from the member list or delete the whole chat. If you want to join the group later again, ask another group member to add you again.
- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and can still write but you're no longer notified of any new messages.

# Encryption {#encryption}

## Does Delta Chat have an end-to-end-encryption?

- Yes.

## What do I have to do to activate the end-to-end-encryption?

- Nothing.

- Delta Chat (and other [Autocrypt](https://autocrypt.org)-compatible email-programs) share the keys required for end-to-end-encryption automatically as the first messages are sent. After this, all subsequent messages are encrypted end-to-end automatically. If one of the chat partners uses an app later that cannot use end-to-end-encryption, it is paused for this time and automatically re-activated as soon as possible.

- If you want to _deactivate_ the end-to-end-encryption, use the corresponding setting at "Settings / Advanced settings".

## If end-to-end-encryption is not available, is the connection not encrypted at all?

- No. The normal, email-standard _transport encryption_ is used then.


## How can I check the encryption?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.
- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## How can I verify the sender?

The user's profile shows some additional information:

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. If they are the same on the device of your chat partner, the connection is safe.
- For transport encryption, this state is just shown there


## Which standards are used for end-to-end-encryption?

- OpenPGP. Key transport is done via [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for sth. like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually at "Advanced settings / Manage private keys". Caution: Make sure, the key is not protected by a password or remove it before.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you have to do nothing.

# Multi-client {#multiclient}

## Can I use Delta Chat on multiple devices the same time?

- If you want to use the **same account** on different devices, you have to make sure, all devices use the same keys for encryption:

  - On the first device, choose "Advanced settings / Manage private keys / Export key to Downloads"
  - Via USB, copy the key file from the "Downloads" directory of the first device to the second one.
  - On the second device, "Advanced settings / Manage private keys / Import key from Downloads"

- All this is **not needed** for the standard usage of Delta Chat using just one device.

- NB: In multi-client mode, _incoming_ messages are shown at once on all clients. _Outgoing_ messages are synced about two times an hour. We can improve this, but we would need more [support](contribute) on this issue.


# Miscellaneous

## Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly; users have collected some of them in the forum at [Provider Overview](https://support.delta.chat/t/provider-overview/)


## I'm interested in the technical details. Can you tell me more?

- See page [Standards used in Delta Chat]({% include standards-url %}).
