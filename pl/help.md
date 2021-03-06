---
title: FAQ
lang: pl
render_toc: true
header: Często Zadawane Pytania
---


## Czym jest Delta Chat?

Delta Chat to nowa aplikacja do czatowania, która wysyła wiadomości e-mailem, w miarę możliwości zaszyfrowane przy użyciu Autocrypt.
** Nie musisz się nigdzie rejestrować, po prostu użyj swojego istniejącego konta e-mail w Delta Chat. **

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Jak mogę znaleźć ludzi, z którymi mogę czatować? 

Dzięki Delta Chat możesz pisać na każdy istniejący adres e-mail - nawet
jeśli odbiorca nie korzysta z aplikacji Delta Chat. Odbiorca nie musi 
instalować tej samej aplikacji co Twoja, tak jak w przypadku innych komunikatorów.


### Jakie są zalety Delta Chat w porównaniu z innymi komunikatorami?

- _Niezależny_ od jakiejkolwiek firmy lub usług. _Jesteś_ właścicielem swoich danych.
- Twoje dane nie są zapisywane na centralnym serwerze, chyba że wszyscy użytkownicy korzystają z tych samych serwerów e-mail
- Nie udostępniasz nikomu swojej książki adresowej
- _Szybki_ dzięki użyciu Push-IMAP
- _Największa baza użytkowników_ - możesz rozmawiać nawet z tymi, którzy _nie_ posiadają Delta Chat
- _Zgodny_ - nie tylko z samym sobą
-  _Elegancki_ i _prosty_ interfejs użytkownika
- _Rozproszony_ system
- _Brak spamu_ - domyślnie wyświetlane są, tylko wiadomości znanych użytkowników
- _Niezawodny_ - bezpieczny do użytku profesjonalnego
- _Godny zaufania_ - może być wykorzystywany nawet do wiadomości biznesowych
- Wolne oprogramowanie oparte na _Systemie licencjonowania praw autorskich_ i _Standardach_


### Jakie wiadomości pojawiają się w Delta Chat?

Delta Chat automatycznie pokazuje:

- Wiadomości od kontaktów z **książki adresowej**
- Wiadomości od kontaktów, z którymi **się kontaktujesz**
- **Odpowiedzi** na wiadomości wysyłane przez ciebie

Other messages do not appear automatically, and are to be found in **Contact requests**. If desired a chat can be started from there.


### A co ze spamem?

- Wiadomości w popularnych folderach ze spamem są ignorowane, a zawarte adresy nie są uznawane za znane kontakty.
- Ponieważ wiadomości z nieznanych kontaktów nie pojawiają się automatycznie, zwykle **nie ma spamu**.
- Jednakże, jeśli potrzebujesz, możesz **zablokować** dowolny kontakt. 


### Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące automatycznie otrzymują załączniki w razie potrzeby.


### Kto widzi moje zdjęcie profilowe?

- Możesz dodać zdjęcie profilowe w swoich ustawieniach. Jeśli napiszesz do swoich kontaktów lub dodasz je za pomocą kodu QR, automatycznie zobaczą je jako Twoje zdjęcie profilowe.

- Kontakty, które nie korzystają z Delta Chat, widzą je jako załącznik do wiadomości e-mail.

- Ze względów prywatności nikt nie widzi Twojego zdjęcia profilowego, dopóki nie napiszesz do niego wiadomości.

- Twoje zdjęcie profilowe nie jest wysyłane z każdą wiadomością, ale wystarczająco regularnie, aby kontakty ponownie otrzymały Twoje zdjęcie profilowe, nawet jeśli dodadzą nowe urządzenie.


### Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

- Tak. Jeśli przychodząca wiadomość e-mail nie ma części tekstowej, aplikacja konwertuje wiadomości HTML na zwykły tekst. E-maile wychodzące zawsze używają zwykłego tekstu.


### Dlaczego muszę wpisać moje hasło e-mail do Delta Chat? Czy to jest bezpieczne?

Podobnie jak w przypadku innych programów pocztowych, takich jak Thunderbird, K9-Mail lub Outlook, program potrzebuje hasła, aby można było go używać do wysyłania wiadomości e-mail. Oczywiście hasło jest przechowywane tylko na Twoim urządzeniu. Hasło jest przesyłane tylko do Twojego dostawcy poczty e-mail (po zalogowaniu), który i tak ma dostęp do Twojej poczty

Jeśli korzystasz z dostawcy poczty e-mail z obsługą OAuth2, takiego jak gmail.com lub yandex.ru, nie musisz przechowywać hasła na urządzeniu. W takim przypadku używany jest tylko token dostępu.

Ponieważ Delta Chat jest Open Source, możesz sprawdzić [Kod źródłowy](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
jeśli chcesz sprawdzić, czy Twoje poświadczenia są przetwarzane w bezpieczny sposób. Cieszymy się z opinii, które sprawiają, że aplikacja jest bezpieczniejsza dla wszystkich naszych użytkowników. 


### Which permissions does Delta Chat need?

Depending on the operating system in use,
you may be asked to grant permissions to the app.
This is what Delta Chat does with these permissions:

- Camera *(can be disallowed)*
  - take pictures and videos: for sending Photos
- Contacts *(can be disallowed)*
  - read your contacts: to discover contacts to chat with
- Location *(can be disallowed)*
  - access approximate location (network location sources): for the location streaming feature
  - access precise location (GPS and network location sources): for the location streaming feature
- Microphone *(can be disallowed)*
  - record audio: for audio messages
- Storage *(can be disallowed)*
  - modify or delete the contents of your SD card: to download message attachments
  - read the contents of your SD card: to share files with your contacts
- Other app capabilities
  - change your audio settings: so you can choose ring tones and volume for notifications and audio messages
  - run at startup: so you don't have to start Delta Chat manually
  - control vibration: for notifications
  - view network connections: to connect to your E-Mail provider
  - prevent phone from sleeping: so you can easier copy the security code during the Autocrypt Setup Message
  - have full network access: to connect to your E-Mail provider
  - view Wi-Fi connections: to connect to your E-Mail provider
  - ask to ignore battery optimisations: for users who want to receive messages all the time


## Grupy

### Tworzenie grupy

- Select **New chat** and then **New group** from the menu in the upper right corner or hit the corresponding button on Android/iOS.
- On the following screen, select the **group members** and define a **group name**. You can also select a **group avatar**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).


### Dodanie członków do grupy

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 


### What is a verified group? Why is it experimental? 

- A verified group is a chat that guarantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature. 

- As of Dec 2019, a "verified group" remains an experimental feature.
  It is continuously improved and many bugs have been fixed since the
  original introduction in 2018.  However, there remain cases, especially 
  with large groups where inconsistencies can occur, or messages become 
  unreadable.  Early 2020 a security review is upcoming, and several new
  developments around qr-join protocols are taking place so chances
  are we remove the "experimental" label not too far in the future. 


### Usunąłem się przez przypadek.

- Ponieważ nie jesteś członkiem grupy, nie możesz dodać siebie ponownie. 
  Jednak nie ma problemu, po prostu poproś dowolnego członka grupy na normalnym czacie, aby dodał cię ponownie.


### Nie chcę już otrzymywać wiadomości od grupy.

- Usuń siebie z listy członków lub usuń cały czat. 
  Jeśli później będziesz chciał ponownie dołączyć do grupy, poproś innego członka grupy, aby dodał cię do grupy.

- Alternatywnie możesz też „Wyłączyć powiadomienia” dla grupy  dzięki temu otrzymasz wszystkie wiadomości i 
  nadal będziesz mógł pisać, ale nie będziesz już powiadamiany o żadnych nowych wiadomościach.


### What do double ticks mean in group messages? Has everyone read my message now?

- A message shows double ticks after more than half of the recipients have
  seen the message on their display.
- Note that some recipients might have disabled read-receipts for
  privacy-reasons.
- If more than 50% in a group disabled read receipts, the double ticks will
  never show up. For more detailed information, see
  [this blogpost](https://delta.chat/en/2017-07-06-read-receipts-and-social-pressure).


## Szyfrowanie {#encryption}

### Czy Delta Chat obsługuje szyfrowanie end-to-end?

- Tak. Delta Chat ma zaimplementowany standard Autocrypt Level 1 
  i może szyfrować wiadomości metodą e2e za pomocą innych 
  aplikacji obsługujących Autocrypt. 

- Delta Chat also supports a strong form of end-to-end encryption that is 
  even safe against active attacks, see "verified groups" further below. 


### Co muszę zrobić, aby aktywować szyfrowanie end-to-end?

- Nic.

- Gdy wysyłane są pierwsze wiadomości, aplikacje Delta Chat (i inne zgodne z [Autocrypt](https://autocrypt.org) aplikacje e-mail) automatycznie współdzielą klucze wymagane do szyfrowania metodą end-to-end. Następnie wszystkie kolejne wiadomości są automatycznie szyfrowane end-to-end. Jeśli jeden z partnerów czatu korzysta z aplikacji e-mail bez obsługi Autocrypt, kolejne wiadomości nie są szyfrowane, dopóki aplikacja zgodna z Autocrypt nie będzie ponownie dostępna.

- If you want to rather avoid end-to-end-encrypted e-mails by default, 
  use the corresponding Autocrypt setting in "Settings" or "Advanced settings".


### Jeśli nie jest dostępne szyfrowanie typu „end-to-end”, czy połączenie w ogóle nie jest szyfrowane?

- W przypadku większości serwerów pocztowych Delta Chat ustanawia _szyfrowanie transportu_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  Zabezpiecza to tylko połączenie między urządzeniem a serwerem e-mail. Natomiast szyfrowanie e2e zapewnia bezpieczeństwo między Twoim urządzeniem a urządzeniem znajomego.


### Jak mogę zweryfikować status kryptograficzny z nadawcą?

If you are within immediate distance of the chat partner:

- Select **QR Invite code** on one device and then **Scan QR code**
  on the other one and scan the code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified.  Both will see a
  "sender verified" system message in their 1:1 chat. 

If you are not near the chat partner, you can check the status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop):

- W przypadku szyfrowania metodą end-to-end Delta Chat pokazuje tam dwa odciski palców. 
Jeśli te same odciski palców pojawią się na urządzeniu partnera czatu, połączenie jest bezpieczne.

- W przypadku szyfrowania transportu ten stan jest właśnie tam wyświetlany


### Jak mogę sprawdzić szyfrowanie wiadomości?

- A little **padlock** shown beside a message denotes whether the message is end-to-end-encrypted from from the given sender.

- Jeśli **nie ma kłódki**, wiadomość jest zazwyczaj przesyłana w postaci niezaszyfrowanej, np. dlatego, że Ty lub nadawca wyłączyliście szyfrowanie typu end-to-end lub nadawca używa aplikacji, która nie obsługuje szyfrowania typu end-to-end.

### Jakie standardy są stosowane do szyfrowania end-to-end?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. 

- Delta Chat implements [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) to achieve protection against active network attacks.  This goes beyond the opportunistic
  base protection of Autocrypt Level 1, while maintaining its ease of use.  

### What is the difference between verified groups and 1:1 chats with verified contacts?

- 1:1 chats with a verified contact and verified groups are not the same, even
  if there are only 2 people in the verified group. One difference is that you
  could easily add more people to the group, but there are other implications as
  well.

- Verified groups are invariably secured. Any breakage (cleartext or wrongly
  signed messages etc.) will be flagged and such messages will not be shown in
  this chat. You can trust all messages in this verified-checkmark chat to have
  not been read/altered by middle parties.

- 1:1 chats are opportunistic, it is meant to allow people to communicate no
  matter if they change e-mail clients, devices, setups etc. That's why there
  is no verification checkmark, even if you have verified the contact.


### Does Delta Chat support Perfect Forward Secrecy?

- No, OpenPGP doesn't support Perfect Forward Secrecy. Perfect Forward Secrecy
  works session-oriented, but E-Mail is asynchronous by nature
  and often used from multiple devices independently. This means that if your
  Delta Chat private key is leaked, and someone has a record
  of all your in-transit messages, they will be able to read them.  

- Note that if anyone has seized or hacked your running phone, they will
  typically be able to read all messages, no matter if Perfect Forward Secrecy
  is in place or not. Having access to a single device from a member of a group,
  will typically expose a lot of the social graph. Using e-mail addresses that
  are not easily tracked back to persons helps group members to stay safer from
  the effects of device seizure. 

- We are sketching ways to protect communications better against the event
  of device seizure. 


### How does Delta Chat protect my Metadata?

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently knows about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Can I reuse my existing private key?

- Tak. Najlepszym sposobem jest wysłanie wiadomości konfiguracyjnej Autocrypt z innego klienta poczty e-mail. Poszukaj czegoś jak **Start Autocrypt Setup Transfer** w ustawieniach innego klienta i postępuj zgodnie z wyświetlanymi tam instrukcjami.

- Alternatively, you can import the key manually in "Settings" or "Advanced settings" and then "Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Jeśli nie masz klucza lub nawet nie wiesz, że go potrzebujesz  nie przejmuj się: Delta Chat generuje go w razie potrzeby, nie trzeba naciskać przycisku, aby to zrobić. 


### Nie mogę zaimportować istniejącego klucza PGP do Delta Chat.

Jest wielce prawdopodobne, że problemem jest klucz, który jest zaszyfrowany i/lub używa hasła. Takie klucze nie są obsługiwane przez Delta Chat. Możesz usunąć frazę szyfrującą i hasło i spróbować ponownie zaimportować klucz. Jeśli chcesz zachować hasło, musisz utworzyć alias e-mail do użytku z Delta Chat, tak aby klucz Delta Chat był powiązany z tym aliasem e-mail.

Rozsądny format, Delta Chat obsługuje popularne formaty kluczy prywatnych OpenPGP, jednak jest mało prawdopodobne, że będziemy obsługiwać 100% wszystkich kluczy prywatnych z dowolnych źródeł. To również nie jest głównym celem Delta Chat (w rzeczywistości, znaczna większość użytkowników Delta Chat nie będzie miała żadnego klucza przed rozpoczęciem korzystania z Delta). Jednak staramy się wspierać klucze prywatne z innych źródeł tak dobrze jak to tylko możliwe.

Usunięcie hasła z klucza prywatnego będzie się różnić w zależności od 
oprogramowania używanego do zarządzania kluczami PGP. Za pomocą programu Enigmail można ustawić 
hasło na pustą wartość w oknie zarządzania kluczami. Z GnuPG możesz ustawić je [z linii poleceń](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429). 
W przypadku innych programów można znaleźć rozwiązanie online.


### Dlaczego nie używacie pEp (pretty easy privacy)?

- Delta Chat korzysta ze standardu szyfrowania Autocrypt e2e. Omówienie funkcji Autocrypt i pEp znajduje się w często zadawanych pytaniach dotyczących [Autocrypt](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-klient {#multiclient}

### Czy mogę korzystać z Delta Chat na wielu urządzeniach w tym samym czasie?

If you want to use the **same account** on different devices, you should export
a backup from the old device, and import it into the new device:

- On the old device, go to "Settings" or "Settings / Chats and media" and then to "Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### Are there any plans for introducing a Delta Chat Web Client?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  app stores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


### Why can I choose not to watch the Inbox?

This is an experimental setting for some people who are experimenting with
server-side rules. Not all providers support this, but with some you can move
all mails with a "Chat-Version" header to the DeltaChat folder. Normally, this
would be done by the Delta Chat app.

Watching the Inbox makes sense to turn off, if you have both:

- enabled a server-side rule to move all messages with Chat-Version header to the DeltaChat folder, and
- have set the "Show classic emails" setting to "no, chats only".

In this case, Delta Chat doesn't need to watch the Inbox.

### What is the "Send Copy to Self" setting good for?

Sending a copy of your messages to yourself ensures that you receive your own
messages on all devices. If you have multiple devices and don't turn it on, you
see only the messages from other people, and the messages you send from the
current device. 

The copy is sent to the Inbox, and then moved to the DeltaChat folder; it's not
put into the "Sent" folder. Delta Chat *never* uploads anything to the Sent
folder because this would mean uploading a message twice (once through SMTP,
and once through IMAP to Sent folder).

The default setting for copy-to-self is "no".

### Why can I choose to watch the "Sent" folder?

The only reason one wants to watch the Sent folder is if you are using another
mail program (like Thunderbird) next to your Delta Chat app, and want your MUA
to participate in chat conversations.

However, we recommend using the Delta Chat Desktop Client; you can download it
on [get.delta.chat](https://get.delta.chat). The option to watch the "Sent"
folder might go away in the future. It was introduced at a time where there was
no Delta Chat Desktop client available on all platforms. 

### Why can I choose not to watch the DeltaChat folder?

Some people use Delta Chat as a regular email client, and want to use the Inbox
folder for their mail, instead of the DeltaChat folder. If you disable "Watch
DeltaChat folder", you should also disable "move chat messages to DeltaChat".
Otherwise, deleting messages or multi-device setups might not work properly.

## Różne

### Czy Delta Chat działa z _moim_ dostawcą poczty e-mail?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly,
  see [Provider Overview](https://providers.delta.chat)


### If Delta Chat uses E-Mail, is it really an _Instant_ Messenger?

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in the background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occasionally. This artificial delay is usually worse on iOS than on Android.
- Note that Delta Chat doesn't use Google Cloud Messaging (GCM) or the Apple
  Push Notification Service (APNS), because this leads to user tracking and
  central control which Delta Chat aims to avoid as much as feasible.
- However, Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### Is Delta Chat compatible with Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is only
  working inside their platforms, and not compatible with anyone outside.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Interesują mnie szczegóły techniczne. Możesz powiedzieć mi więcej?

- Zobacz [Standardy używane w Delta Chat]({% include standards-url %}).

### How are Delta Chat developments funded? 

First of all, Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 

Delta Chat developments have so far been funded from four major sources: 

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018. 

- The [Open Technology Fund](https://opentechfund.org) has given two grants.
  The first 2018/2019 grant (~$200K) majorly improved the Android app 
  and allowed us to release a Desktop app beta version, and also 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) is still ongoing and helps us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  See the 
  ongoing [blog posts](https://delta.chat/en/blog) for more info. 

- The [NLnet foundation](https://nlnet.nl/) granted EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

The monetary funding mentioned above was organized by merlinux GmbH in
Freiburg (Germany), and then distributed to almost a dozen contributors. 

Funding for 2020/2021 is yet to be determined. We are pursuing several
opportunities with different organisations and partners. We also are
considering to ask for donations. In fact, we experimentally started
a little [Delta Chat / Liberapay donation account](https://liberapay.com/delta.chat/)
but have not published this yet.  There were also around 3-4K so far
donated to Bjoern's (the original author of Delta Chat) paypal and bitcoin
donation channels.  
