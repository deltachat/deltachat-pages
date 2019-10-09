---
title: Ndihmë
layout: default-sq
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Pyetje të Bëra Shpesh

- [Të përgjithshme](#general)
- [Grupe](#groups)
- [Fshehtëzim](#encryption)
- [Multi-klient](#multiclient)
- [Të ndryshme](#miscellaneous)

# Të përgjithshme

# Ç’është Delta Chat-i?

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat is a new chat app that sends messages via e-mails, encrypted if possible, with Autocrypt. 
**You do not have to sign up anywhere, just use your existing e-mail account with Delta Chat.** 

## How can I find people to chat with? 

With Delta Chat, you can write to every existing e-mail address - even
if the recipient is not using the Delta Chat app. No need for the
recipient to install the same app as yours, as with other messengers.

## Cilat janë përparësitë e Delta Chat-it krahasuar me programe të tjerë të llojit?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _Compatible_ - not only to itself.
- _Elegant_ and _simple_ user interface.
- _Distributed_ system.
- _No Spam_ - only messages of known users are shown by default.
- _Reliable_ - safe for professional use.
- _Trustworthy_ - can even be used for business messages.
- _Copyleft_ and _Standards_ based libre software.

## Cilat mesazhe shfaqen në Delta Chat?

Delta Chat automatically shows:

- Mesazhe nga kontakte prej **librit tuaj të adresave**
- Mesazhe nga kontakte **të kontaktuar nga ju**
- **Përgjigje** ndaj mesazheve dërguar nga ju

Other messages do not appear automatically, and are to be found in the main menu at **Contact requests**. If desired a chat can be started from there.

## What about spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there is **no spam**.
- However, if needed, you can **block** any contact.

## A mbulon Delta Chat-i figura, video dhe bashkëngjitje të tjera?

- Yes. Beside the plain text, all e-mail attachments are displayed as separate messages. Outgoing messages get attachments as needed automatically.

## Does Delta Chat support HTML e-mails?

- Yes. If incoming e-mail lacks a plain text part, HTML-emails is converted to plain text in the app. Outgoing e-mails always use plain text.

# Grupe

## Creation of a group

- Përzgjidhni **Shtoni grup** që nga "menuja sanduiç" në cepin e sipërm djathtas te skena bazë e bisedave.
- Te skena vijuese, përzgjidhni **anëtarët e grupit** dhe i vini shenjë kutizës në cepin e sipërm djathtas. Pas kësaj, mund të përcaktoni një **emër grupi**.
- Sapo të shkruani **mesazhin tuaj të parë** në grup, krejt anëtarët e mësojnë krijimin e grupit të ri dhe mund të përgjigjen te grupi (për sa kohë që nuk shkruani një mesazh te grupi, grupi është i padukshëm për anëtarët).

## Add members to a group

- Çdo anëtar i grupit ka **të njëjtat të drejta** si kushdo tjetër. Për këtë arsye, gjithkush mund të fshijë cilindo anëtar ose të shtojë të rinj.
- Për të shtuar ose fshirë anëtarë, klikoni mbi emrin e grupit te biseda.

## Ç’është një grup i verifikuar?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other. It enforces e2e group encryption that is safe against provider or 
  network attacks. However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Fshiva veten padashje.

- As you're no longer a group member, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to re-add you.

## S’dua t’i marr më mesazhet e një grupi.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group again later on, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so means you get all messages and 
  can still write, but are no longer notified of any new messages.

# Fshehtëzim {#encryption}

## A ka Delta Chat-i fshehtëzim skaj-më-skaj?

- Yes. Delta Chat implements the Autocrypt Level 1 standard and can 
  thus E2E-encrypt messages with other Autocrypt-capable apps. 

## Ç’duhet të bëj që të aktivizohet fshehtëzimi skaj-më-skaj?

- Asgjë.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _turn off_ the end-to-end-encryption, 
  use the corresponding setting in "Settings / Advanced settings".

## Nëse s’ka fshehtëzim skaj-më-skaj, a lihet lidhja pa u fshehtëzuar fare?

- No. With most mail servers will then use _transport encryption_ (TLS).


## Si mund ta kontrolloj fshehtëzimin?

- If a little **padlock** is shown beside a message, this denotes the message is end-to-end-encrypted _and_ is sent from the given sender _and_ that your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.


## Si mund ta verifikoj dërguesin?

The user's profile shows some additional info:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, the connection is safe.

- Për fshehtëzim të transportit, gjendja thjesht tregohet atje


## Cilët standarde përdoren për fshehtëzim skaj-më-skaj?

- OpenPGP. Transporti i kyçeve bëhet mes [Autocrypt](https://autocrypt.org).

## A mund të ripërdor kyçin tim ekzistues privat?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Nëse s’keni kyç ose as që e dinit se mund t’ju duhej një i tillë… mos u bëni merak: Delta Chat-i prodhon një të tillë, kur duhet, dhe s’keni gjë për të bërë. 

## I can't import my existing PGP key into Delta Chat.

In general, Delta Chat should support "common" private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat. Please remove the
encryption and the password and try the import again.

Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.

# Multi-klient {#multiclient}

## Can I use Delta Chat on multiple devices at the same time?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to sync their encryption capabilities: 

- Në pajisjen e parë, zgjidhni "Rregullime të mëtejshme / Dërgo mesazh Rregullimi Autocrypt-i" 
  dhe klikoni derisa të shfaqet një "numër sigurie". 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it, which should prompt you for the security number. 

- You are now synchronized, and can use both devices for
  sending and receiving E2E-encrypted messages with your communication partners. 

# Të ndryshme

## A funksionon Delta Chat me shërbimin tim email?

- Shumë gjasa janë që: Po :)  
  Sidoqoftë, disa shërbime lypin mundësi speciale për të punuar si duhet; përdoruesit kanë grumbulluar disa prej tyre te forumi në [Përmbledhje Shërbimesh](https://support.delta.chat/t/provider-overview/)


## Më interesojnë hollësitë teknike. Mund të më tregoni diçka më tepër?

- See [Standards used in Delta Chat]({% include standards-url %}).
