---
title: Pomoc
layout: default-pl
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Często Zadawane Pytania

- [Główne](#general)
- [Grupy](#groups)
- [Szyfrowanie](#encryption)
- [Multi-klient](#multiclient)
- [Różne](#miscellaneous)

# Główne

## Czym jest Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat is a new chat app that sends messages via e-mails, encrypted if possible, with Autocrypt. 
**You do not have to sign up anywhere, just use your existing e-mail account with Delta Chat.** 

## How can I find people to chat with? 

With Delta Chat, you can write to every existing e-mail address - even
if the recipient is not using the Delta Chat app. No need for the
recipient to install the same app as yours, as with other messengers.

## Jakie są zalety Delta Chat w porównaniu z innymi komunikatorami?

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

## Jakie wiadomości pojawiają się w Delta Chat?

Delta Chat automatically shows:

- Wiadomości od kontaktów z **książki adresowej**
- Wiadomości od kontaktów, z którymi **się kontaktujesz**
- **Odpowiedzi** na wiadomości wysyłane przez ciebie

Other messages do not appear automatically, and are to be found in the main menu at **Contact requests**. If desired a chat can be started from there.

## What about spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there is **no spam**.
- However, if needed, you can **block** any contact.

## Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Yes. Beside the plain text, all e-mail attachments are displayed as separate messages. Outgoing messages get attachments as needed automatically.

## Does Delta Chat support HTML e-mails?

- Yes. If incoming e-mail lacks a plain text part, HTML-emails is converted to plain text in the app. Outgoing e-mails always use plain text.

# Grupy

## Creation of a group

- Na ekranie przeglądu czatów, z menu w prawym górnym rogu wybierz **Nowa grupa**.
- Na następnym ekranie wybierz **członków grupy** i naciśnij znacznik wyboru w prawym górnym rogu. Następnie możesz zdefiniować nazwę grupy.
- Zaraz po napisaniu pierwszej wiadomości w grupie wszyscy członkowie zostaną poinformowani o nowej grupie i mogą odpowiedzieć w grupie (jeżeli nie napiszesz wiadomości w grupie, grupa jest niewidoczna dla członków).

## Add members to a group

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 

## Co to jest zweryfikowana grupa?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other. It enforces e2e group encryption that is safe against provider or 
  network attacks. However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Usunąłem się przez przypadek.

- As you're no longer a group member, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to re-add you.

## Nie chcę już otrzymywać wiadomości od grupy.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group again later on, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so means you get all messages and 
  can still write, but are no longer notified of any new messages.

# Szyfrowanie {#encryption}

## Czy Delta Chat obsługuje szyfrowanie end-to-end?

- Yes. Delta Chat implements the Autocrypt Level 1 standard and can 
  thus E2E-encrypt messages with other Autocrypt-capable apps. 

## Co muszę zrobić, aby aktywować szyfrowanie end-to-end?

- Nic.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _turn off_ the end-to-end-encryption, 
  use the corresponding setting in "Settings / Advanced settings".

## Czy połączenie nie jest w ogóle szyfrowane, jeśli szyfrowanie end-to-end nie jest dostępne?

- No. With most mail servers will then use _transport encryption_ (TLS).


## Jak mogę sprawdzić szyfrowanie?

- If a little **padlock** is shown beside a message, this denotes the message is end-to-end-encrypted _and_ is sent from the given sender _and_ that your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.


## Jak mogę zweryfikować nadawcę?

The user's profile shows some additional info:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, the connection is safe.

- W przypadku szyfrowania transportu ten stan jest właśnie tam wyświetlany


## Jakie standardy są używane do szyfrowania end-to-end?

- OpenPGP. Transport kluczy odbywa się za pomocą [Autocrypt](https://autocrypt.org).

## Czy mogę ponownie wykorzystać mój istniejący klucz prywatny?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Jeśli nie masz klucza lub nawet nie wiesz, że go potrzebujesz  nie przejmuj się: Delta Chat generuje go w razie potrzeby, nie trzeba naciskać przycisku, aby to zrobić. 

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

- Na pierwszym urządzeniu wybierz Ustawienia zaawansowane » Wyślij wiadomość konfiguracyjną Autocrypt 
  i naciskaj, aż pojawi się „numer bezpieczeństwa”.

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it, which should prompt you for the security number. 

- You are now synchronized, and can use both devices for
  sending and receiving E2E-encrypted messages with your communication partners. 

# Różne

## Czy Delta Chat działa z _moim_ dostawcą poczty e-mail?

- Z dość dużym prawdopodobieństwem: Tak :)
  Jednak niektórzy dostawcy potrzebują specjalnych opcji, aby działać poprawnie; użytkownicy zgromadzili niektóre z nich na forum w [Przeglądzie dostawców] (https://support.delta.chat/t/provider-overview/)


## Interesują mnie szczegóły techniczne. Możesz powiedzieć mi więcej?

- See [Standards used in Delta Chat]({% include standards-url %}).
