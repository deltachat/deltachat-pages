---
title: Hjelp
layout: default-nb
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Ofte-Stilte-Spørsmål

- [General](#general)
- [Grupper](#groups)
- [Kryptering](#encryption)
- [Multi-client](#multiclient)
- [Ymse](#miscellaneous)

# General

## Hvem kan jeg skrive til?

- With Delta Chat, you can write to every existing e-mail address - even if the recipient is not (yet) using the Delta Chat App. This is one of the biggest differences to other messengers: There is no need for the receiver to install the same app as yours.

## Hva er fordelene med Delta Chat i sammenligning med andre meldingsforsendelsessystemer?

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
- fully _Open Source_ and _Standards_ based

## What if the receiver does not use Delta Chat?

- The receiver will get a normal email then - if he replies to it, you will see the reply in the Delta Chat app.

## Hvilke meldinger vises i Delta Chat?

Delta Chat viser automatisk…

- Meldinger fra kontakter i din **adressebok**
- Meldinger fra kontakter **kontaktet av deg**
- **Svar** til meldinger sendt av deg

Andre meldinger vises ikke automatisk. Du kan se dem i hovedmenyen i **Kontaktforespørsler** og, hvis ønskelig, starte sludring derfra.

## Hva med spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if really needed, you can **block** any contact.

## Støtter Delta Chat bilder, videoer og andre vedlegg?

- Ja. Beside the plain text, all email-attachments are displayed as separate messages. Outgoing messages will get attachments as needed automatically.

## Støtter Delta Chat HTML-e-poster?

- Ja. If incoming email lacks a plain text part, we convert HTML-emails to plain text ourselves. Outgoing emails always use plain text.

# Grupper

## Hvordan kan jeg opprette en gruppe?

- Select **Add group** from the "Sandwich menu" in the upper left corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## Hvordan kan jeg legge til medlemmer i en gruppe?

- Every group member has the **same rights** as any other. For this reason every one can delete every member or add new ones.
- To add or delete members, click on the group name in the chat.

## I have deleted myself by accident.

- As you're no longer a group member now, you cannot add yourself again. However, no problem, just ask any other group member in a normal chat to add you again.

## I do not want to receive the messages of a group any longer.

- Either delete yourself from the member list or delete the whole chat. If you want to join the group later again, ask another group member to add you again.
- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and can still write but you're no longer notified of any new messages.

# Kryptering {#encryption}

## Har Delta Chat ende-til-ende -kryptering?

- Ja.

## Hva må jeg gjøre for å aktivere ende-til-ende -kryptering?

- Ingenting.

- Delta Chat (and other [Autocrypt](https://autocrypt.org)-compatible email-programs) share the keys required for end-to-end-encryption automatically as the first messages are sent. After this, all subsequent messages are encrypted end-to-end automatically. If, one of the chat partners use an app later that cannot use end-to-end-encryption, it is paused for this time and automatically re-activated as soon as possible.

- If you want to _deactivate_ the end-to-end-encryption, use the corresponding setting at "Settings / Advanced settings".

## If end-to-end-encryption is not available, is the connection not encrypted at all?

- No. The normal, email-standard _transport encryption_ is used then.


## Hvordan kan jeg sjekke krypteringen?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is send from the given sender _and_ your answer will be end-to-end-encrypted as well.
- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Hvordan kan jeg bekrefte avsenderen?

Brukerprofilen viser litt ekstra informasjon:

- For an end-to-end-encryption, Delta Chat show two fingerprints there. If they are the same on the device of your chat partner, the connection is safe.
- For transport encryption, this state is just shown there


## Which standards are used for end-to-end-encryption?

- OpenPGP. Nøkkeltransport gjøres via [Autocrypt](https://autocrypt.org).

## Can I re-use by existing private key?

- Ja. Importing it at "Advanced settings / Manage private keys". Caution: Make sure, they key is not protected by a password or remove it before.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you have to do nothing.

# Multi-client {#multiclient}

## Can I use Delta Chat on multiple devices the same time?

- If you want to use the **same account** on different devices, you have to make sure, all devices use the same keys for encryption:

  - On the first device, choose "Advanced settings / Manage private keys / Export key to Downloads"
  - Via USB, copy the key file from the "Downloads" directory of the first device to the second one.
  - On the second device, "Advanced settings / Manage private keys / Import key from Downloads"

- All this is **not needed** for the standard usage of Delta Chat using just one device.

- NB: In multi-client mode, _incoming_ messages are shown at once on all clients. _Outgoing_ messages are synced about two times an hour. We can improve this, but we would need more [support](contribute) on this issue.


# Ymse

## Delta Chat på Linux|GNU-skrivebordet

- You can run Delta Chat on Ubuntu Linux desktop (or other linux distributions supporting the **snap**-package format) by simply installing [Anbox](https://anbox.io) (Android in a Box) from terminal:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- To add the Delta Chat application, download the *com.b44t.messenger_\<version\>.apk* file from [this](download) page and install it from terminal:

  $ *adb install sti/til/com.b44t.messenger_\<version\>.apk*

adb er feilrettingsbroen for Android (Android Debug Bridge) og kan installeres fra pakkebrønnen.

- Instead of installing Delta Chat directly via APK file, you can first install the F-Droid store via [F-Droid-APK](https://f-droid.org/FDroid.apk) and then install Delta Chat using the store. The great benefit is the information about updates and the migration of existing config and chat data.


## Innloggingsproblemer

Jeg har et problem med…

- Gmail: Enable "Support less secure apps" and IMAP, you may receive a mail to grant permission

## Jeg er interessert i de tekniske detaljene. Kan du fortelle meg mer?

- See page [Standards used in Delta Chat]({% include standards-url %}).
