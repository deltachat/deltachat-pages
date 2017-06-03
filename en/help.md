---
title: Help
layout: default
---

# Frequently Asked Questions

- [General](#general)
- [Groups](#groups)
- [Encryption](#encryption)
- [Multi-client](#multiclient)
- [Login Issues](#login-issues)


# General

## To whom can I write?

- With Delta Chat, you can write to users using Delta Chat - or any other existing
  e-mail-client. This is one of the biggest differences to other messengers:
  There is no need for the receiver to install the same app as yours.



## What are the advantages of Delta Chat compared to other messengers?

- _Independent_ of any company or services. _You_ own your data.
- Your data are not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protect your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP
- _Largest userbase_ - receivers _not_ using Delta Chat can be reached as well
- _Compatible_ - not only to itself
- _Elegant_ and _simple_ user interface
- _Distributed_ system
- _No Spam_ - only messages of known users are shown by default
- _Reliable_ - safe for professional use
- _Trustworthy_ - can even be used for business messages
- fully _OpenSource_ and _Standards_ based


## What, if the receiver does not use Delta Chat?

- The receiver will get a normal email then - if he replies to it, you will
  see the reply in the Delta Chat app.


## Does Delta Chat support images, videos and other attachments?

- Yes. Beside the plain text, all email-attachments are displayed as separate
  messages. Outgoing messages will get attachments as needed automatically.


## Does Delta Chat support HTML-emails?

- Yes.  If incoming email lacks a plain text part, we convert HTML-emails to 
  plain text ourself.  Outgoing emails always use plain text. 




# Groups

## How can I create a group?

- Select **Add group** from the "Sandwich menu" in the upper left corner of the chat overview.
- On the following screen, select the **group members** and hit the checkmark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## Who can add members to a group?

- Every group member has the **same rights** as any other. For this reason every one can delete every member or add new ones.
- To add or delete members, click on the group name in the chat.

## I have deleted myself by accident.

- As you're no longer a group member now, you cannot add yourself again.  However, no problem, just ask any other group member in a normal chat to add you again.

## I do not want to receive the messages of a group any longer.

- Either delete yourself from the member list or delete the whole chat. If you want to join the group later again, ask another group member to add you again.
- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and can still write but you're no longer notified of any new messages.




# Encryption {#encryption}

## Does Delta Chat have an end-to-end-encryption?

- Yes.

## What do I have to do to activate the end-to-end-encryption?

- Nothing.

- Delta Chat (and other Autocrypt-compatible email-programs) share the keys required for 
end-to-end-encryption automatically as the first messages are sent.  After this, all
subsequent messages are encrypted end-to-end automatically.  If, one of the chat
partners use an app later that cannot use end-to-end-encryption, it is paused
for this time and automatically re-activated as soon as possible.

- If you want to _deactivate_ the end-to-end-encryption, use the corresponding setting at
"Settings / Advanced settings".

## If end-to-end-encryption is not available, is the connection not encrypted at all?

- No. The normal, email-standard _transport encryption_ is used then.

## How can I check the encryption?

Choose "Encryption" from the user's profile:

- For an end-to-end-encryption, Delta Chat show two fingerprints there. If they are the same
on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there

## Which standards are used for end-to-end-encryption.

OpenPGP. Key transport is done via Autocrypt. You can also use your existing private key by importing them at "Advanced settings / Manage private keys"


# Multi-client {#multiclient}

## Can I use delta Chat on multiple devices the same time?

- If you want to use the **same account** on different devices, you have to make sure, all devices use the same keys for encryption:

    - On the first device, choose "Advanced settings / Manage private keys / Export key to Downloads"
    - Via USB, copy the key file from the "Downloads" directory of the first device to the second one.
	- On the second device, "Advanced settings / Manage private keys / Import key from Downloads"

- All this is **not needed** for the standard usage of Delta Chat using just one device.

- NB: In multi-client mode, _incoming_ messages are shown at once on all clients. _Outgoing_ messages are synced about two times an hour. Maybe we can improve this, but we would need more [support](support) on this issue.

## Where do I find the "Advanced settings"

- in the settings dialog, touch the menu-icon in the upper right corner.


# Login Issues

- Disroot.org: Select Outbox Security to _STARTTLS_
- Gmail: Enable "Support less secure apps" and IMAP, you may  receive a mail to grant permission

