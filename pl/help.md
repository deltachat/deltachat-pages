---
title: FAQ
lang: pl
render_toc: true
header: Często Zadawane Pytania
---



<!-- GENERATED FILE -- DO NOT EDIT -->



## Główne

### Czym jest Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat to nowa aplikacja do czatowania, która wysyła wiadomości e-mailem, w miarę możliwości zaszyfrowane przy użyciu Autocrypt.
** Nie musisz się nigdzie rejestrować, po prostu użyj swojego istniejącego konta e-mail w Delta Chat. **

### Jak mogę znaleźć ludzi, z którymi mogę czatować? 

Dzięki Delta Chat możesz pisać na każdy istniejący adres e-mail - nawet
jeśli odbiorca nie korzysta z aplikacji Delta Chat. Odbiorca nie musi 
instalować tej samej aplikacji co Twoja, tak jak w przypadku innych komunikatorów.

### Jakie są zalety Delta Chat w porównaniu z innymi komunikatorami?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
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

### Jakie wiadomości pojawiają się w Delta Chat?

Delta Chat automatycznie pokazuje:

- Wiadomości od kontaktów z **książki adresowej**
- Wiadomości od kontaktów, z którymi **się kontaktujesz**
- **Odpowiedzi** na wiadomości wysyłane przez ciebie

Inne wiadomości nie pojawiają się automatycznie i można je znaleźć w menu głównym w **Prośby o kontakt**. W razie potrzeby można rozpocząć czat.

### A co ze spamem?

- Wiadomości w popularnych folderach ze spamem są ignorowane, a zawarte adresy nie są uznawane za znane kontakty.
- Ponieważ wiadomości z nieznanych kontaktów nie pojawiają się automatycznie, zwykle **nie ma spamu**.
- Jednakże, jeśli potrzebujesz, możesz **zablokować** dowolny kontakt. 

### Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące automatycznie otrzymują załączniki w razie potrzeby.

### Who sees my profile picture?

- You can add a profile picture in your settings. If you write to your contacts
  or add them via QR code, they automatically see it as your profile picture.

- Contacts who don't use Delta Chat see it as an E-Mail attachment.

- For privacy reasons, no one sees your profile picture until you write a
  message to them.

- Your profile picture isn't sent with every message, but regularly enough that
  your contacts will re-receive your profile picture, even if they add a new
  device.

### Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

- Tak. Jeśli przychodząca wiadomość e-mail nie ma części tekstowej, aplikacja konwertuje wiadomości HTML na zwykły tekst. E-maile wychodzące zawsze używają zwykłego tekstu.

### Why do I have to enter my E-Mail password into Delta Chat? Is this secure?

As with other E-Mail programs like Thunderbird, K9-Mail, or Outlook, the
program needs the password so you can use it to send mails. Of course, the
password is stored only on your device. The password is only transmitted to
your E-Mail provider (when you login), which has access to your mails anyway. 

If you use an E-Mail provider with OAuth2 support like gmail.com or yandex.ru,
there is no need to store your password on the device. In this case, only an
access token is used.

As Delta Chat is Open Source, you can check the [Source
Code](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
if you want to verify that your credentials are handled securely. We are happy
about feedback which makes the app more secure for all of our users.

### Which Android permissions does Delta Chat need?

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

- Na ekranie przeglądu czatów, z menu w prawym górnym rogu wybierz **Nowa grupa**.
- Na następnym ekranie wybierz **członków grupy** i naciśnij znacznik wyboru w prawym górnym rogu. Następnie możesz zdefiniować nazwę grupy.
- Zaraz po napisaniu pierwszej wiadomości w grupie wszyscy członkowie zostaną poinformowani o nowej grupie i mogą odpowiedzieć w grupie (jeżeli nie napiszesz wiadomości w grupie, grupa jest niewidoczna dla członków).

### Dodanie członków do grupy

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 

### Co to jest zweryfikowana grupa? Why is it experimental? 

- A verified group is a chat that gurantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See https://countermitm.readthedocs.io/en/latest/new.html
  for the R&D behind this feature. 

- As of Dec 2019, a "verified group" remains an experimental feature.
  It is continously improved and many bugs have been fixed since the
  original introduction in 2018.  However, there remain cases, especially 
  with large groups where inconsistencies can occure, or messages become 
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

## Szyfrowanie {#encryption}

### Czy Delta Chat obsługuje szyfrowanie end-to-end?

- Tak. Delta Chat ma zaimplementowany standard Autocrypt Level 1 
  i może szyfrować wiadomości metodą e2e za pomocą innych 
  aplikacji obsługujących Autocrypt. 

### Co muszę zrobić, aby aktywować szyfrowanie end-to-end?

- Nic.

- Gdy wysyłane są pierwsze wiadomości, aplikacje Delta Chat (i inne zgodne z [Autocrypt](https://autocrypt.org) aplikacje e-mail) automatycznie współdzielą klucze wymagane do szyfrowania metodą end-to-end. Następnie wszystkie kolejne wiadomości są automatycznie szyfrowane end-to-end. Jeśli jeden z partnerów czatu korzysta z aplikacji e-mail bez obsługi Autocrypt, kolejne wiadomości nie są szyfrowane, dopóki aplikacja zgodna z Autocrypt nie będzie ponownie dostępna.

- Jeśli chcesz _wyłączyć_ szyfrowanie end-to-end, 
  użyj odpowiedniego ustawienia w „Ustawienia » Ustawienia zaawansowane”.

### Czy połączenie nie jest w ogóle szyfrowane, jeśli szyfrowanie end-to-end nie jest dostępne?

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 

### How can I verify cryptographic status with a sender? 

Profil użytkownika zawiera dodatkowe informacje:

- Nacisnąć na Androidzie „Kod QR zaproszenia”, a następnie użyj przycisku
  „Skanuj kod QR” na innym urządzeniu, aby zeskanować ten kod. Jeśli oba urządzenia 
są w trybie online, nawiążą ze sobą czat (jeśli jeszcze nie istnieje) i zostaną 
zweryfikowane klucze szyfrowania. Both will see a
  "sender verified" system message in their 1:1 chat. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, 
  the connection is safe.

- W przypadku szyfrowania transportu ten stan jest właśnie tam wyświetlany


### How can I check the encryption of messages?

- Jeśli obok wiadomości pojawi się mała **kłódka**, oznacza to, że wiadomość jest szyfrowana metodą end-to-end _i_ jest wysyłana od danego nadawcy _a_ twoja odpowiedź będzie również szyfrowana metodą end-to-end.

- Jeśli **nie ma kłódki**, wiadomość jest zazwyczaj przesyłana w postaci niezaszyfrowanej, np. dlatego, że Ty lub nadawca wyłączyliście szyfrowanie typu end-to-end lub nadawca używa aplikacji, która nie obsługuje szyfrowania typu end-to-end.


### Jakie standardy są używane do szyfrowania end-to-end?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. Moreover, 
  Delta Chat implements the "countermitm" protocols to achieve
  protection against active network attacks, going beyond the opportunistic
  base protection of Autocrypt, see questions about "Verified Groups".


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

- Note that if anyone has seized or hacked your running phone, 
  they will typically be able to read all messages, no matter if Perfect
  Forward Secrecy is in place or not.  Having access to a single device
  from a member of a group, will typically a lot of the social graph. 
  Using e-mail addresses that are not easily tracked back to persons
  helps group members to stay safer from the effects of device seizure. 

- We are sketching ways to protect communications better against the event
  of device seizure. 

### How does Delta Chat protect my Metadata?

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently know about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).

### Czy mogę ponownie wykorzystać mój istniejący klucz prywatny?

- Tak. Najlepszym sposobem jest wysłanie wiadomości konfiguracyjnej Autocrypt z innego klienta poczty e-mail. Poszukaj czegoś jak **Start Autocrypt Setup Transfer** w ustawieniach innego klienta i postępuj zgodnie z wyświetlanymi tam instrukcjami.

- Alternatywnie możesz zaimportować go ręcznie w „Ustawienia zaawansowane » Zarządzaj prywatnymi kluczami”. Uwaga: Upewnij się, że klucz nie jest chroniony hasłem lub usuń hasło wcześniej.

Jeśli nie masz klucza lub nawet nie wiesz, że go potrzebujesz  nie przejmuj się: Delta Chat generuje go w razie potrzeby, nie trzeba naciskać przycisku, aby to zrobić. 

### Nie mogę zaimportować istniejącego klucza PGP do Delta Chat.

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You may remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Format wise, Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

Usunięcie hasła z klucza prywatnego będzie się różnić w zależności od 
oprogramowania używanego do zarządzania kluczami PGP. Za pomocą programu Enigmail można ustawić 
hasło na pustą wartość w oknie zarządzania kluczami. Z GnuPG możesz ustawić je [z linii poleceń](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429). 
W przypadku innych programów można znaleźć rozwiązanie online.

### Why don't you use pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-klient {#multiclient}

### Czy mogę korzystać z Delta Chat na wielu urządzeniach w tym samym czasie?

- Jeśli chcesz używać tego **samego konta** na różnych urządzeniach (obsługujących Autocrypt), trzeba zsynchronizować ich możliwości szyfrowania: 

- Na pierwszym urządzeniu wybierz Ustawienia zaawansowane » Wyślij wiadomość konfiguracyjną Autocrypt 
  i naciskaj, aż pojawi się „numer bezpieczeństwa”.

- Na drugim urządzeniu poczekaj na komunikat „Wiadomość konfiguracyjna Autocrypt” i naciśnij ją, aby wyświetlić monit o podanie numeru bezpieczeństwa. 

- Przeszedłeś teraz synchronizację i możesz używać obu urządzeń
  do wysyłania i odbierania zaszyfrowanych wiadomości metodą e2e ze swoimi partnerami komunikacyjnymi. 

## Różne

### Czy Delta Chat działa z _moim_ dostawcą poczty e-mail?

- Z dość dużym prawdopodobieństwem: Tak :)
  Jednak niektórzy dostawcy potrzebują specjalnych opcji, aby działać poprawnie; użytkownicy zgromadzili niektóre z nich na forum w [Przeglądzie dostawców] (https://support.delta.chat/t/provider-overview/)


### Interesują mnie szczegóły techniczne. Możesz powiedzieć mi więcej?

- Zobacz [Standardy używane w Delta Chat]({% include standards-url %}).
