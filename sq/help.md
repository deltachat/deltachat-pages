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

## Kujt mund t’i shkruaj?

- Me Delta Chat-in, mund t’i shkruani cilëso adresë email ekzistuese - edhe nëse marrësi s’e përdor ende aplikacionin Delta Chat. Ky është një nga dallimet më të mëdha me programe të tjerë të llojit: S’ka nevojë që marrësi të instalojë të njëjtin aplikacion me ju.

## Cilat janë përparësitë e Delta Chat-it krahasuar me programe të tjerë të llojit?

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

## Po nëse marrësi nuk përdor Delta Chat-in?

- Marrësi atëherë do të marrë një email të zakonshëm - nëse i përgjigjet, përgjigjen do ta shihni te aplikacioni Delta Chat.

## Cilat mesazhe shfaqen në Delta Chat?

Delta Chat shfaq automatikisht …

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Mesazhe të tjerë nuk shfaqen automatikisht. Mesazhet e tjerë mund t’i shihni te menuja kryesore te **Kërkesa kontakti** dhe, në daçi, të filloni bisedë që prej atje.

## Po Mesazhet e Padëshiruara?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## A mbulon Delta Chat-i figura, video dhe bashkëngjitje të tjera?

- Po. Veç tekstit të thjeshtë, krejt bashkëngjitjet email shfaqen si mesazhe më vete. Mesazhet ikëse do të pranojnë vetvetiu bashkëngjitje sipas nevojës.

## A mbulon Delta Chat-i email-e HTML?

- Po. Nëse email-i ardhës nuk ka pjesë nën tekst të thjeshtë, i shndërrojmë email-et HTML në tekst të thjeshtë. Email-et dërgohen përherë si tekst i thjeshtë.

# Grupe

## Si mund të krijoj një grup?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## Who to add members to a group?

- Çdo anëtar i grupit ka **të njëjtat të drejta** si kushdo tjetër. Për këtë arsye, gjithkush mund të fshijë cilindo anëtar ose të shtojë të rinj.
- Për të shtuar ose fshirë anëtarë, klikoni mbi emrin e grupit te biseda.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Fshiva veten padashje.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## S’dua t’i marr më mesazhet e një grupi.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Fshehtëzim {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Ç’duhet të bëj që të aktivizohet fshehtëzimi skaj-më-skaj?

- Asgjë.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Nëse s’ka fshehtëzim skaj-më-skaj, a lihet lidhja pa u fshehtëzuar fare?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Si mund ta kontrolloj fshehtëzimin?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Si mund ta verifikoj dërguesin?

Profili i përdoruesit shfaq disa të dhëna shtesë:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Cilët standarde përdoren për fshehtëzim skaj-më-skaj.

- OpenPGP. Transporti i kyçeve bëhet mes [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Po. Rruga më e mirë është të dërgohet një Mesazh Rregullimi Autocrypt-i që nga klienti tjetër email. Shihni për diçka si **Start Autocrypt Setup Transfer** te rregullimet e klientit tjetër dhe ndiqni udhëzimet e dhëna atje.

- Ndryshe, mund ta importoni kyçin dorazi që nga "Rregullime të mëtejshme / Administroni kyçe private". Kujdes: Sigurohuni që kyçi nuk mbrohet me fjalëkalim, në të kundërt hiqjani.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Multi-klient {#multiclient}

## A mund ta përdor Delta Chat-in në shumë pajisje njëherësh në të njëjtën kohë?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Të ndryshme

## A funksionon Delta Chat me shërbimin tim email?

- Shumë gjasa janë që: Po :)  
  Sidoqoftë, disa shërbime lypin mundësi speciale për të punuar si duhet; përdoruesit kanë grumbulluar disa prej tyre te forumi në [Përmbledhje Shërbimesh](https://support.delta.chat/t/provider-overview/)


## Më interesojnë hollësitë teknike. Mund të më tregoni diçka më tepër?

- Shihni faqen [Standarde të përdorur në Delta Chat]({% include standards-url %}).
