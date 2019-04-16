---
title: Help
layout: default-ca
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Preguntes freqüents

- [General](#general)
- [Grups](#groups)
- [Encriptació](#encryption)
- [Multi-client](#multiclient)
- [Miscel·lània](#miscellaneous)

# General

## What is Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat is a new chat app that uses e-mails for transfering messages. 
If you receive a chat message just use your e-mail app to read the
message and reply. **You are not required to sign up anywhere, go to a website
or install Delta Chat.**

## How can i find people to chat with? 

With Delta Chat, you can write to every existing e-mail address - even
if the recipient is not using the Delta Chat App. This is one of
the biggest differences to other messengers: There is no need for the
receiver to install the same app as yours.

## Quins son els avantatges de Delta Chat comparat amb altres programes de missatgeria?

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

## Quins missatges es mostren al Delta Chat?

Delta Chat mostra automàticament...

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Els altres missatges no es mostren automàticament. Pots veure aquests altres missatges al menú principal a **Peticions de contacte** i, si vols, començar un xat des d'allí.

## Què passa amb l'spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat permet imatges, vídeos i altres adjunts?

- Si. A mḉes de text pla, tots els adjunts de correu electrònic es mostren com a missatges separats. Els missatges sortints tindran adjunts automàticament, quan ho requereixin.

## Delta Chat permet missatges en HTML?

- Si. Si el missatge entrant no te una part en text pla, naltros convertim els missatges en HTML en text pla. Els missatges sortints sempre usen text pla.

# Grups

## Com puc crear un grup?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## How to add members to a group?

- Cada membre del grup te els **mateixos drets** que els altres. Per això mateix, tothom pot esborrar a qualsevol membre o afegir-ne de nous.
- Per afegir o esborrar membres, prem a sobre del nom del grup des de la finestra de xat.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## M'he esborrat a mi mateix sense voler.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## No vull rebre més missatges del grup.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Encriptació {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Què he de fer per activar l'encriptació d'extrema  extrem?

- Res.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Si l'encriptació d'extrem a extrem no està disponible, llavors la connexió queda sense encriptar?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Com puc comprovar l'encriptació?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Com puc verificar el remitent?

El perfil de l'usuari mostra alguna informació addicional:

- You can tap "QR Invite code" on Android and then use the "scan QR code"
  button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Quins estàndards esteu usant per l'encriptació d'extrem a extrem?

- OpenPGP. El transport de la clau es fa via [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for sth. like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually at "Advanced settings / Manage private keys". Caution: Make sure, the key is not protected by a password or remove it before.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Multi-client {#multiclient}

## Can I use Delta Chat on multiple devices the same time?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Miscellaneous

## Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly; users have collected some of them in the forum at [Provider Overview](https://support.delta.chat/t/provider-overview/)


## I'm interested in the technical details. Can you tell me more?

- See page [Standards used in Delta Chat]({% include standards-url %}).
