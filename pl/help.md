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

## Do kogo mogę pisać?

- Dzięki Delta Chat możesz pisać na każdy istniejący adres e-mail - nawet jeśli odbiorca nie korzysta (jeszcze) z aplikacji Delta Chat. Jest to jedna z największych różnic w stosunku do innych komunikatorów: Nie ma potrzeby, aby odbiorca instalował tę samą aplikację, co ty.

## Jakie są zalety Delta Chat w porównaniu z innymi komunikatorami?

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

## Co jeśli odbiorca nie używa Delta Chat?

- Odbiorca otrzyma normalny e-mail - jeśli odpowie na niego, zobaczysz odpowiedź w aplikacji Delta Chat.

## Jakie wiadomości pojawiają się w Delta Chat?

Delta Chat automatycznie pokazuje:

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Inne wiadomości nie pojawią się automatycznie. Możesz je zobaczyć w menu głównym w **Skrzynka pocztowa** i, jeśli chcesz, rozpocząć czat z tego miejsca.

## A co ze spamem?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące będą automatycznie pobierać załączniki.

## Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

- Tak. Jeśli przychodząca wiadomość e-mail nie ma części tekstowej, konwertujemy wiadomości HTML na zwykły tekst. E-maile wychodzące zawsze używają zwykłego tekstu.

# Grupy

## Jak mogę utworzyć grupę?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## Who to add members to a group?

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Usunąłem się przez przypadek.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## Nie chcę już otrzymywać wiadomości od grupy.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Szyfrowanie {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Co muszę zrobić, aby aktywować szyfrowanie end-to-end?

- Nic.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Czy połączenie nie jest w ogóle szyfrowane, jeśli szyfrowanie end-to-end nie jest dostępne?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Jak mogę sprawdzić szyfrowanie?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Jak mogę zweryfikować nadawcę?

Profil użytkownika zawiera dodatkowe informacje:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Jakie standardy są używane do szyfrowania end-to-end?

- OpenPGP. Transport kluczy odbywa się za pomocą [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Tak. Najlepszym sposobem jest wysłanie wiadomości konfiguracyjnej Autocrypt z innego klienta poczty e-mail. Poszukaj czegoś jak **Start Autocrypt Setup Transfer** w ustawieniach innego klienta i postępuj zgodnie z wyświetlanymi tam instrukcjami.

- Alternatywnie możesz zaimportować go ręcznie w „Ustawienia zaawansowane » Zarządzaj prywatnymi kluczami”. Uwaga: Upewnij się, że klucz nie jest chroniony hasłem ani nie usunąłeś go wcześniej.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Multi-klient {#multiclient}

## Czy mogę korzystać z Delta Chat na wielu urządzeniach w tym samym czasie?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Różne

## Czy Delta Chat działa z _moim_ dostawcą poczty e-mail?

- Z dość dużym prawdopodobieństwem: Tak :)
  Jednak niektórzy dostawcy potrzebują specjalnych opcji, aby działać poprawnie; użytkownicy zgromadzili niektóre z nich na forum w [Przeglądzie dostawców] (https://support.delta.chat/t/provider-overview/)


## Interesują mnie szczegóły techniczne. Możesz powiedzieć mi więcej?

- Zobacz stronę [Standardy używane w Delta Chat]({% include standards-url %}).
