---
title: FAQ
lang: pl
render_toc: true
header: Często Zadawane Pytania
---


## Czym jest Delta Chat?

Delta Chat to nowa aplikacja do czatowania, która wysyła wiadomości e-mailem, w miarę możliwości zaszyfrowane przy użyciu Autocrypt.
**Nie musisz się nigdzie rejestrować, po prostu użyj swojego istniejącego konta e-mail w Delta Chat.**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


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
- _No Spam_ - only messages of known users are shown by default.
- _End-to-end encryption_ via Autocrypt.
- _Copyleft_ and _Standards_ based libre software.
- _Flexible identity_ with built-in support for [multiple accounts](#multiple-accounts)


### Jakie wiadomości pojawiają się w Delta Chat?

Domyślnie Delta Chat pokazuje wszystkie e-maile.

Możesz to zmienić w „Ustawienia » Czaty i media » Pokaż klasyczne e-maile”. Masz następujące opcje:

- „Nie, tylko czaty”: Wyświetlane są tylko wiadomości wysłane przez innych użytkowników Delta Chat i odpowiedzi na Twoje wiadomości Delta Chat. Ma to największy sens, jeśli używasz tego samego konta e-mail również do wysyłania zwykłych wiadomości e-mail. To jest ustawienie domyślne.
- „Wszystkie”: Delta Chat pokazuje wszystkie e-maile, które są wysyłane na Twój adres e-mail. Ma to sens, jeśli chcesz używać Delta Chat do wszystkich swoich e-maili, więc żadna wiadomość nie zostanie utracona. To jest ustawienie domyślne.
- „Dla zaakceptowanych kontaktów”: Delta Chat pokazuje wszystkie e-maile od kontaktów, z którymi już prowadzisz czat, ale nowe czaty pojawiają się tylko dla wiadomości Delta Chat. Pomaga to zdecydować indywidualnie dla każdego przypadku, czy chcesz prowadzić rozmowę w Delta Chat, czy w „normalnej” aplikacji e-mail.


### Co zrobić, jeśli oczekuję wiadomości od osoby, do której nie pisałem w przeszłości?

- Jeśli wiadomość przychodzi od nieznanego kontaktu, pojawia się jako **prośba**. Musisz zaakceptować prośbę, zanim będziesz mógł odpowiedzieć.
- Możesz również „usunąć” ją, jeśli nie chcesz na razie z nią rozmawiać. To *nie* usuwa wiadomości na serwerze, tylko na Twoim urządzeniu. Możesz więc nadal zajmować się tą wiadomością w innej aplikacji pocztowej.
- Jeśli usuniesz prośbę, przyszłe wiadomości od tego kontaktu będą nadal wyświetlane jako prośba o wiadomość, więc możesz zmienić zdanie. Jeśli naprawdę nie chcesz otrzymywać wiadomości od tej osoby, rozważ *zablokowanie* jej.


### Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące automatycznie otrzymują załączniki w razie potrzeby.

- Ze względu na wydajność obrazy są domyślnie optymalizowane i wysyłane w mniejszym rozmiarze, ale można je wysłać jako „plik”, aby zachować oryginał.

<h3 id="multiple-accounts">Jak mogę dodawać lub przełączać się między wieloma kontami?</h3>

Możesz łatwo pracować z dodatkowymi kontami na klientach mobilnych i stacjonarnych Delta Chat, klikając:
- na przycisku menu, a następnie „Przełącz konto” (Android i komputer stacjonarny)
- lub ikonę profilu, a następnie „Dodaj konto” (iOS)

Możesz także dowiedzieć się, [jak dodawać konta do wielu urządzeń](#multiclient).

### Kto widzi moje zdjęcie profilowe?

- Możesz dodać zdjęcie profilowe w swoich ustawieniach. Jeśli napiszesz do swoich kontaktów lub dodasz je za pomocą kodu QR, automatycznie zobaczą je jako Twoje zdjęcie profilowe.

- Kontakty, które nie korzystają z Delta Chat nie widzą zdjęcia profilowego (jednak oczywiście mogą zainstalować Delta Chat :)

- Ze względów prywatności nikt nie widzi Twojego zdjęcia profilowego, dopóki nie napiszesz do niego wiadomości.

- Twoje zdjęcie profilowe nie jest wysyłane z każdą wiadomością, ale wystarczająco regularnie, aby kontakty ponownie otrzymały Twoje zdjęcie profilowe, nawet jeśli dodadzą nowe urządzenie.


### Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

Yes, incoming HTML messages come with a "Show full message" button. 
Outgoing messages always use plain text.


### Dlaczego muszę wpisać moje hasło e-mail do Delta Chat? Czy to jest bezpieczne?

Podobnie jak w przypadku innych programów pocztowych, takich jak Thunderbird, K9-Mail lub Outlook, program potrzebuje hasła, aby można było go używać do wysyłania wiadomości e-mail. Oczywiście hasło jest przechowywane tylko na Twoim urządzeniu. Hasło jest przesyłane tylko do Twojego dostawcy poczty e-mail (po zalogowaniu), który i tak ma dostęp do Twojej poczty

Jeśli korzystasz z dostawcy poczty e-mail z obsługą OAuth2, takiego jak gmail.com lub yandex.ru, nie musisz przechowywać hasła na urządzeniu. W takim przypadku używany jest tylko token dostępu.

Ponieważ Delta Chat jest Open Source, możesz sprawdzić [Kod źródłowy](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
jeśli chcesz sprawdzić, czy Twoje poświadczenia są przetwarzane w bezpieczny sposób. Cieszymy się z opinii, które sprawiają, że aplikacja jest bezpieczniejsza dla wszystkich naszych użytkowników. 


### Jakich uprawnień potrzebuje Delta Chat?

W zależności od używanego systemu operacyjnego możesz
zostać poproszony o przyznanie uprawnień aplikacji.
Oto, co robi Delta Chat z tymi uprawnieniami:

- Aparat *(można zablokować)*
 - robi zdjęcia i filmy: do wysyłania zdjęć
- Kontakty *(można zablokować)*
 - czyta twoje kontakty: aby znaleźć kontakty do czatu
- Lokalizacja *(można zablokować)*
 - dostęp do przybliżonej lokalizacji (sieciowe źródła lokalizacji): dla funkcji przesyłania strumieniowego lokalizacji
 - dostęp do dokładnej lokalizacji (GPS i sieciowe źródła lokalizacji): dla funkcji przesyłania strumieniowego lokalizacji
- Mikrofon *(można zablokować)*
 - nagrywanie dźwięku: dla wiadomości audio
- Przechowywanie *(można zablokować)*
 - modyfikowanie lub usuwanie zawartości karty SD: pobieranie załączników do wiadomości
 - czytanie zawartość twojej karty SD: aby udostępniać pliki swoim kontaktom
- Inne możliwości aplikacji
 - zmiana ustawienia dźwięku: możesz wybrać dzwonki i głośność dla powiadomień i wiadomości audio
 - uruchamianie przy starcie: więc nie musisz ręcznie uruchamiać Delta Chat
 - kontrola wibracji: do powiadomień
 - przeglądanie połączenia sieciowych: aby połączyć się z dostawcą poczty e-mail
 - zapobieganie uśpieniu telefonu: dzięki czemu możesz łatwiej skopiować kod zabezpieczający podczas komunikatu konfiguracyjnego Autocrypt
 - pełny dostęp do sieci: aby połączyć się z dostawcą poczty e-mail
 - wyświetlanie połączenia Wi-Fi: aby połączyć się z dostawcą poczty e-mail
 - prośba o zignorowanie optymalizacji baterii: dla użytkowników, którzy chcą otrzymywać wiadomości przez cały czas 

### Co oznacza przypinanie, wyciszanie i archiwizowanie?

Użyj tych narzędzi, aby uporządkować swoje czaty i mieć wszystko na swoim miejscu:

- **Przypięte czaty** zawsze pozostają na szczycie listy czatów. Możesz ich używać, aby szybko lub tymczasowo uzyskać dostęp do swoich ulubionych czatów, aby o czymś nie zapomnieć.

- **Wycisz czaty**, jeśli nie chcesz otrzymywać z nich powiadomień. Wyciszone czaty pozostają na swoim miejscu i możesz też przypiąć wyciszony czat.

- **Archiwizuj czaty**, jeśli nie chcesz ich już widzieć na liście czatów. Zarchiwizowane czaty pozostają dostępne nad listą czatów lub poprzez wyszukiwanie.

- Gdy zarchiwizowany czat otrzyma nową wiadomość, o ile nie zostanie wyciszony, **wyskoczy z archiwum** i wróci na twoją listę czatów.
**Wyciszone czaty pozostają zarchiwizowane** do czasu ich ręcznego przywrócenia.

Aby zarchiwizować lub przypiąć czat, dotknij i przytrzymaj (Android), użyj menu czatu (Android/Desktop) lub przesuń palcem w lewo (iOS);
aby wyciszyć czat, użyj menu czatu (Android/Desktop) lub profilu czatu (iOS).


### Co oznacza zielona kropka?

- Od wersji Delta Chat 1.34 czasami można zobaczyć „zieloną kropkę” obok awatara kontaktu. Oznacza to, że był on „niedawno widziany”.
- Dokładnie oznacza to, że w ciągu ostatnich 10 minut Delta Chat widział go:
- dlatego, że wysłał Ci bezpośrednio wiadomość,
- ponieważ napisał coś do grupy, której oboje jesteście członkami,
- ponieważ wysłał Ci potwierdzenie przeczytania napisanej przez Ciebie wiadomości,
- lub dlatego, że wysłał dane do Twojej aplikacji Delta Chat za pomocą [Webxdc aplikacji](#webxdc).
- Nie jest to więc status online w czasie rzeczywistym – a jeśli ktoś nie odpowie od razu, mimo że wydaje się, że jest online, nie martw się i daj mu trochę miejsca ;-)
- Z drugiej strony inni nie zawsze „zobaczą, że jesteś online”. Jeśli wyłączyłeś potwierdzenia odczytu, nie zobaczą oni zielonej kropki, dopóki nie wyślesz do nich wiadomości lub nie napiszesz do grupy, w której również się znajdują.


### Jak mogę usunąć swoje konto?

Gdy korzystasz z konta e-mail w Delta Chat, sposób usunięcia konta zależy od dostawcy poczty e-mail.
Nie mamy żadnej kontroli nad twoim kontem e-mail, więc niestety nie możemy ci w tym pomóc.

Jeśli chcesz zachować konto, ale odinstalować Delta Chat, zaleca się opuszczenie każdego czatu grupowego przed odinstalowaniem Delta Chat.


## Grupy

### Tworzenie grupy

- Wybierz **Nowy czat**, a następnie **Nowa grupa** z menu w prawym górnym rogu lub naciśnij odpowiedni przycisk na Androidzie / iOS.
- Na następnym ekranie wybierz **członków grupy** i zdefiniuj **nazwę grupy**. Możesz też wybrać awatar **grupy**. 
- Zaraz po napisaniu pierwszej wiadomości w grupie wszyscy członkowie zostaną poinformowani o nowej grupie i mogą odpowiedzieć w grupie (jeżeli nie napiszesz wiadomości w grupie, grupa jest niewidoczna dla członków).


### Dodanie członków do grupy

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 


### Usunąłem się przez przypadek.

- Ponieważ nie jesteś członkiem grupy, nie możesz dodać siebie ponownie. 
  Jednak nie ma problemu, po prostu poproś dowolnego członka grupy na normalnym czacie, aby dodał cię ponownie.


### Nie chcę już otrzymywać wiadomości od grupy.

- Usuń siebie z listy członków lub usuń cały czat. 
  Jeśli później będziesz chciał ponownie dołączyć do grupy, poproś innego członka grupy, aby dodał cię do grupy.

- Alternatywnie możesz też „Wyłączyć powiadomienia” dla grupy  dzięki temu otrzymasz wszystkie wiadomości i 
  nadal będziesz mógł pisać, ale nie będziesz już powiadamiany o żadnych nowych wiadomościach.


### Co oznaczają znaczniki wyświetlane obok wiadomości wychodzących?

- **Jeden znacznik** oznacza, że wiadomość została pomyślnie wysłana do Twojego dostawcy.
- **Dwa znaczniki** oznaczają, że co najmniej jedno urządzenie odbiorcy zgłosiło otrzymanie wiadomości.
- Odbiorcy mogli wyłączyć potwierdzenia odczytu, więc nawet jeśli widzisz tylko jeden znacznik, wiadomość mogła zostać przeczytana.
- Odwrotnie, dwa znaczniki nie oznaczają automatycznie, że człowiek przeczytał lub zrozumiał wiadomość ;)


### Co się stanie, jeśli włączę opcję „Usuń wiadomości z serwera”?

- Domyślnie Delta Chat przechowuje wszystkie wiadomości lokalnie na Twoim urządzeniu. Jeśli np. chcesz zaoszczędzić miejsce u swojego dostawcy poczty, możesz wybrać automatyczne usuwanie starych wiadomości. Pozostają one nadal na Twoim urządzeniu, dopóki nie usuniesz ich również tam.

- Aby ją włączyć, w ustawieniach „Czaty i media” przejdź do  **Usuwanie starych wiadomości → Usuń wiadomości z serwera**. Możesz ustawić przedział czasowy pomiędzy „Od razu” a „Po 1 roku”.  Wszystkie e-maile otrzymane przez Delta Chat zostaną usunięte z serwera po tym czasie.

- Zauważ, że jeśli używasz Delta Chat na więcej niż jednym urządzeniu, powinieneś pozostawić wiadomości na serwerze, do czasu, aż inne urządzenie/urządzenia będzie mogło je pobrać.


### Co się stanie, jeśli włączę opcję „Usuń wiadomości z urządzenia”? {#delold}

- Jeśli chcesz zaoszczędzić miejsce na urządzeniu, możesz wybrać opcję automatycznego usuwania starych wiadomości.
- Aby ją włączyć, przejdź do „Usuń wiadomości z urządzenia” w ustawieniach w sekcji „Czaty i media”. Możesz ustawić przedział czasowy pomiędzy „po 1 godzinie” a „po 1 roku”; w ten sposób *wszystkie* wiadomości zostaną usunięte z urządzenia, gdy tylko staną się starsze.


## Encryption and Security 

### Which standards are used for end-to-end encryption? 

[Autocrypt](https://autocrypt.org) is used for automatically
establishing end-to-end encryption with contacts and group chats.
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure).
End-to-End encrypted messages are marked with a padlock 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>.

[Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html)
are used for establishing chats with guaranteed end-to-end encryption 
which protects against network attacks and compromised servers.
Chats marked with a green checkmark 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
guarantee end-to-end encrypted messages. 

### How can i know if messages are end-to-end encrypted? {#whene2e}

All end-to-end encrypted messages carry a padlock:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

End-to-end encryption is guaranteed if there is a green checkmark next to the chat title:

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### How can I get guaranteed end-to-end encryption and green checkmarks? {#howtoe2ee}

Meet your chat partner outside Delta Chat, preferably in person
but a second channel like a video chat
or a different messenger is fine as well.
Perform the following QR show/scan procedure with your chat partner.
One of you is the "Inviter", the other is the "Joiner". 

**Inviter side**:

- Group invitation: 
  Tap the chat group title to see its member list, and select "QR Invite code". 
  Share the QR image with the other side either in person or through a second channel.

- Direct 1:1 chat invitation: 
  Tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen -- 
  on Desktop the QR Icon is in the left-side sandwich menu.
  Share the QR image with the other side either in person or through a second channel.

**Joiner side**:

- Tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen -- 
  on Desktop the QR Icon is in the left-side sandwich menu.

- Choose "SCAN QR CODE" and scan the QR Code 
  that you see from your chat partner in a second channel.

- Tap "OK"


**Both Inviter and Joiner**:

Wait while [Secure-Join network messages are exchanged](https://countermitm.readthedocs.io/en/latest/new.html#setup-contact-protocol) between both devices.

- If both devices are online,
  both sides will eventually see a (group or direct) chat with a green checkmark
  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
  next to the title.

- If one of the devices is offline, the green checkmarks will only
  appear later when the device is internet-connected again
  and the Secure-Join network protocol completed. 

Congratulations! 
You now will automatically use guaranteed end-to-end encryption
with this contact and both of you can add each other to green-checkmarked groups
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>,
thereby automatically spreading guaranteed end-to-end encryption among its members. 


### What does the green checkmark and "guaranteed end-to-end encryption" mean? {#e2eeguarantee}

Chat titles with green checkmarks
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
mean that all messages in the chat will be end-to-end encrypted
and can not be read or altered by compromised e-mail servers or Internet providers. 
Joining green-checkmarked group chats
safely spreads everybody's encryption information (and green checkmarks)
in a manner that guarantees end-to-end encryption in the group and among members. 

Contact profiles with green checkmarks 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
mean that messaging a contact is currently guaranteed to be end-to-end encrypted.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a contact to a green-checkmarked group becomes an introducer 
to those members who didn't yet know about the added contact.
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

Note that in a contact profile you may see and tap introducers 
but there is no green checkmark in the profile title. 
This usually means that the contact ["sent a message from another device"](#nocryptanymore). 

For more in-depth discussion of "guaranteed end-to-end encryption"
please see [Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html)
and specifically read about "Verified Groups", the technical term
of what is called here "green-checkmarked" or "guaranteed end-to-end encrypted" chats.


### A contact "sent a message from another device", what can i do? {#nocryptanymore}

Your chat with a contact lost guaranteed end-to-end encryption. 
The green checkmark was removed for this chat and contact when you see this warning. 
**If you find the sudden drop of guaranteed end-to-end encryption 
surprising for this contact then don't accept the warning!**
Instead check with your contact through a second channel 
like a video call, other messenger or a phone call,
to find out what happened. 

If your contact actually caused the drop of guaranteed end-to-end encryption
please see the next paragraphs for common reasons and their mitigations. 
Regardless, all other green-checkmarked chats remain guaranteed end-to-end encrypted
even if the contact is a member there. 

**Your contact is using Delta Chat on a second device (phone or laptop)**

If they have another device with a Delta Chat app running,
they should remove the account from the new device
and add it [as a second device as described here](#multiclient).
As soon as they message you afterwards, the warning will be gone
and guaranteed encryption is established with both devices of your contact. 

**Your contact reinstalled Delta Chat using their old account login**
 
If they have [a backup file](#backup), 
they should remove the account from the new device 
and rather import the backup file to re-create their account. 
As soon as they message you afterwards, the warning will be gone
and guaranteed encryption is re-established for this contact.

If they don't have a backup file, it's best to perform a [QR scan](#howtoe2ee) 
with your chat partner to re-establish guaranteed end-to-end encryption.

**Your contact sent a mail through a webmail interface or another e-mail app
and will get back to using Delta Chat soon again.**

If you are sure that the contact sometimes uses webmail,
or another mail app lacking end-to-end encryption,
then you may accept the warning.
As soon as your contact uses Delta Chat again, 
guaranteed end-to-end encryption will be automatically re-established. 

**Your contact stopped using Delta Chat entirely**

Sometimes remaining in contact is more important than end-to-end encryption.
["Transport Layer Encryption" (TLS)](#tls) may still meaningfully protect
the confidentiality of your messages between your device and the e-mail server. 
But without end-to-end encryption you and your contact are trusting your e-mail server
to not read or manipulate your messages, and to not hand them to third parties. 

In any case, you can not do much else than accept the warning.
Please also remove the contact from any active green-checkmarked group 
which you can find in "Shared chats" in the Contact profile. 
This spares your contact from getting "unreadable" messages. 

If the contact removed Delta Chat because of buggy or undesirable behaviour, 
please consider posting to our [support forum](https://support.delta.chat) 
to help us identify and address common problems. Thanks!


### Are attachments (pictures, files, audio etc.) end-to-end encrypted?

Yes.

When we talk about an "end-to-end encrypted message"
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
and only displays a padlock security indicator on a message
if the whole message is properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publically discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019](https://delta.chat/assets/blog/2019-first-security-review.pdf). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for end-to-end -encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking end-to-end encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing end-to-end encryption is
only one part of "user outcomes",
see also our answers to [device-seizure](#device-seizure)
and [message-metadata](#message-metadata) questions. 


### Is Delta Chat vulnerable to EFAIL?

No, [Delta Chat never was vulnerable to EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
because its OpenPGP implementation [rPGP](https://github.com/rpgp/rpgp) 
uses Modification Detection Code when encrypting messages
and returns [an error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
if the Modification Detection Code is incorrect.

Delta Chat also never was vulnerable to the "Direct Exfiltration" EFAIL attack
because it only decrypts `multipart/encrypted` messages
which contain exactly one encrypted and signed part,
as defined by the Autocrypt Level 1 specification. 


### Is a message exposed in cleartext if end-to-end encryption is not available? {#tls}

Even if your messages are not guaranteed to be end-to-end encrypted, 
they are still protected from Internet providers like cell or cable companies. 
However, your and your recipient's e-mail providers 
may read, analyze or even modify your messages, 
including any attachments,
if they are not end-to-end encrypted. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your e-mail provider. 
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's e-mail provider
will typically be transport-encrypted as well.
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between e-mail providers 
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.

Note that [maintaining guaranteed end-to-end encryption](#howtoe2ee) on top of TLS encryption 
provides pervasive safety between your and the recipient's devices.
Not even your e-mail or Internet provider will be able to read or modify your messages. 


### How does Delta Chat protect metadata in messages? {#message-metadata}

Delta Chat protects most message metadata by putting the following information
into the end-to-end encrypted part of messages:

- Subject line 
- Group avatar and name 
- MDN (read receipt) requests (`Chat-Disposition-Notification-To`)
- Disappearing message timer (`Ephemeral-Timer`) 
- `Chat-Group-Member-Removed`, `Chat-Group-Member-Added` 
- `Secure-Join` header containing secure join commands
- Notification about enabling location streaming
- WebRTC room URL

E-Mail servers do not get access to this protected metadata 
but they do see the message date as well as the message size,
and, more importantly, the sender and receiver addresses. 
E-mail servers need receiver addresses to route and 
deliver messages to recipient's devices. 


### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a Delta Chat optimized [e-mail server instance](https://delta.chat/serverguide)
to create pseudonymous temporary accounts through QR-code scans.
Note that Delta Chat apps on all platforms support multiple accounts 
so you can easily use action-specific "1-week" or "1-month" accounts next to your "main" account
with the knowledge that all temporary account data, along with all metadata, will be deleted.
Moreover, if a device is seized then contacts using temporary e-mail accounts
can not be identified easily, as compared to messengers which reveal
phone numbers in chat groups which in turn are often associated with legal identities.


### How can i check encryption information?

You may check the end-to-end encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop).
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.


### How can I check the encryption status of messages?

A little **padlock** in a message bubble denotes
that the message was properly end-to-end encrypted from the given sender.
If there is **no padlock**, the message was not properly end-to-end encrypted
most likely because the sender uses an app or webmail interface
without support for end-to-end--encryption.


### Why do I see unencrypted messages? 

If a contact uses a non-Autocrypt e-mail app,
all messages involving this contact (in a group or 1:1 chat)
will not be end-to-end encrypted, and thus not show a "padlock" with messages.
Note that even if your contacts use Delta Chat on their account,
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages.
Replying unencrypted to unencrypted messages is mandated by Autocrypt
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app.

### How can i get an end-to-end encrypted chat with a Delta Chat contact who sometimes uses webmail or another non-Autocrypt e-mail app? 

If you need a safely end-to-end encrypted chat with a contact 
who is using their account both with Delta Chat and non-Autocrypt apps (e.g. webmail),
it's best to setup [guaranteed end-to-end encryption with them](#howtoe2ee)
and then create a guaranteed end-to-end encrypted group chat with you two as members. 
In this group chat all messages will be end-to-end encrypted 
even if the direct chat between you two has a
["… sent a message from another device"](#nocryptanymore) warning. 


### How can I ensure message end-to-end encryption and deletion?

The best way to ensure every message is end-to-end encrypted,
and metadata deleted as quickly as possible
is [using chats with guaranteed end-to-end encryption](#howtoe2ee)
and turning on disappearing messages.

Guranteed end-to-end encrypted chats protect against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
and turning on "disappearing messages" deletes the messages
on the server after a user-configured time.

If you don't need a longer-lived copy of your messages on the server, 
you can also turn on ["delete messages from server automatically"](#delold).


### Does Delta Chat support Perfect Forward Secrecy? {#pfs}

No, Delta Chat doesn't support Perfect Forward Secrecy (PFS).
This means that if your Delta Chat private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.

Note, however, that if anyone obtains to your decryption keys, 
they will typically also be able to obtain your messages, 
irrespective if Perfect Forward Secrecy is in place or not. 
The typical real-world situation for leaked decryption keys is device seizure
which we discuss in our answer [on metadata and device seizure](#device-seizure). 

It is possible that Delta Chat evolves to support Perfect Forward Secrecy,
because OpenPGP is just a container for encrypted messages 
but encryption key management (and thus key rotation or key "ratcheting") 
could be organized in flexible ways. 
See [Seqouia's PFS prototype](https://gitlab.com/sequoia-pgp/openpgp-dr)
for existing experiments in the OpenPGP implementor community.


### Is end-to-end encryption of Delta Chat as safe as Signal? 

It depends on what is important to you. 
Delta Chat [does not support PFS](#pfs) like Signal does
but it provides [guaranteed end-to-end encrypted chats](#e2eeguarantee)
that are safe against compromised servers or corrupted networks. 
Signal and most other PFS-supporting messengers do not provide 
a practical scheme for protecting chat groups from network attacks
which are arguably more worrysome 
than a potential attacker who seizes your phone and private encryption setup
but somehow not your messages, yet has a full record of all 
past encrypted messages. 

In any case, Delta Chat's end-to-end encryption uses a [secure subset of OpenPGP](#openpgp-secure)
which has been [independently security-audited](../assets/blog/2019-first-security-review.pdf).

### Czy mogę ponownie wykorzystać mój istniejący klucz prywatny?

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

### Nie mogę zaimportować istniejącego klucza PGP do Delta Chat.

Jest wielce prawdopodobne, że problemem jest klucz, który jest zaszyfrowany i/lub używa hasła. Takie klucze nie są obsługiwane przez Delta Chat. Możesz usunąć frazę szyfrującą i hasło i spróbować ponownie zaimportować klucz. Jeśli chcesz zachować hasło, musisz utworzyć alias e-mail do użytku z Delta Chat, tak aby klucz Delta Chat był powiązany z tym aliasem e-mail.

Rozsądny format, Delta Chat obsługuje popularne formaty kluczy prywatnych OpenPGP, jednak jest mało prawdopodobne, że będziemy obsługiwać 100% wszystkich kluczy prywatnych z dowolnych źródeł. To również nie jest głównym celem Delta Chat (w rzeczywistości, znaczna większość użytkowników Delta Chat nie będzie miała żadnego klucza przed rozpoczęciem korzystania z Delta). Jednak staramy się wspierać klucze prywatne z innych źródeł tak dobrze jak to tylko możliwe.

Usunięcie hasła z klucza prywatnego będzie się różnić w zależności od 
oprogramowania używanego do zarządzania kluczami PGP. Za pomocą programu Enigmail można ustawić 
hasło na pustą wartość w oknie zarządzania kluczami. Z GnuPG możesz ustawić je [z linii poleceń](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429). 
W przypadku innych programów można znaleźć rozwiązanie online.


## Multi-klient {#multiclient}

### Czy mogę korzystać z Delta Chat na wielu urządzeniach w tym samym czasie?

Tak. Delta Chat 1.36 zawiera nową, eksperymentalną funkcję korzystania z tego samego konta na różnych urządzeniach:

- Upewnij się, że oba urządzenia są połączone z tego samego Wi-Fi lub sieci

- Na pierwszym urządzeniu przejdź do **Ustawienia → Dodaj kolejne urządzenie**, w razie potrzeby odblokuj ekran i poczekaj chwilę, aż pojawi się kod QR

- Na drugim urządzeniu [zainstaluj Delta Chat](https://get.delta.chat)

- Na drugim urządzeniu uruchom Delta Chat, wybierz **Dodaj jako kolejne urządzenie** i zeskanuj kod QR z pierwszego urządzenia

Przenoszenie powinno rozpocząć się po kilku sekundach, a podczas przenoszenia oba urządzenia będą pokazywać **postęp**. Poczekaj, aż zakończy się na obu urządzeniach.

W przeciwieństwie do wielu innych komunikatorów, po udanym przenoszeniu oba **urządzenia są całkowicie niezależne**. Jedno urządzenie nie jest potrzebne do działania drugiego.


### Rozwiązywanie problemów

- Sprawdź dokładnie, czy oba urządzenia są w tym **samym Wi-Fi lub tej samej sieci**

- Twój system może mieć „zaporę ogniową”, o której wiadomo, że powoduje problemy (szczególnie w systemie Windows).
**Wyłącz zaporę** dla Delta Chat po obu stronach i spróbuj ponownie

- Upewnij się, że na urządzeniu docelowym jest **wystarczająca ilość miejsca**

- Jeśli przenoszenie się rozpoczęło, upewnij się, że urządzenia **pozostają aktywne** i nie zasypiają. Nie wychodź z Delta Chat. (dokładamy wszelkich starań, aby aplikacja działała w tle, ale [systemy mają tendencję do ubijania aplikacji](https://dontkillmyapp.com), niestety)

- Delta Chat jest już zalogowany na urządzeniu docelowym? Możesz używać wielu kont na urządzeniu, po prostu [dodaj kolejne konto](#multiple-accounts)

- Jeśli nadal masz problemy lub **nie możesz zeskanować kodu QR**, wypróbuj **ręczne przenoszenie** opisane poniżej


### Manual Transfer {#backup}

Ta metoda jest zalecana tylko wtedy, gdy opisana powyżej opcja „Dodaj kolejne urządzenie” nie działa.

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  end-to-end encrypted messages with your communication partners.

### Czy są jakieś plany wprowadzenia klienta Web Delta Chat?

- Nie ma bezpośrednich planów, ale wstępne przemyślenia.
- Istnieją 2-3 możliwości wprowadzenia klienta Web Delta Chat, ale wszystkie wymagają znaczącej pracy. Na razie skupiamy się na udostępnianiu stabilnych wersji we wszystkich sklepach z aplikacjami (repozytoria Google Play/iOS/Windows/macOS/Linux) jako aplikacji natywnych.
- Jeśli potrzebujesz klienta Web, ponieważ nie możesz instalować oprogramowania na komputerze, na którym pracujesz, możesz użyć przenośnego klienta Windows Desktop lub AppImage dla Linuxa. Możesz je znaleźć na [get.delta.chat](https://get.delta.chat).


### Do czego służy ustawienie „Wyślij kopię do siebie”?

Wysłanie kopii wiadomości do siebie zapewnia otrzymywanie własnych wiadomości na wszystkich urządzeniach. Jeśli masz wiele urządzeń i jej nie włączysz, zobaczysz tylko wiadomości od innych osób oraz wiadomości, które wysyłasz z bieżącego urządzenia.

Kopia jest wysyłana do skrzynki odbiorczej, a następnie przenoszona do folderu DeltaChat; nie jest umieszczana w folderze „Wysłane”. Delta Chat nigdy nie przesyła niczego do folderu Wysłane, ponieważ oznaczałoby to dwukrotne przesłanie wiadomości (raz przez SMTP i raz przez IMAP do folderu Wysłane).

Domyślne ustawienie kopiowania do siebie to „nie”.

### Po co mam wybrać opcję oglądania folderu „Wysłane”?

Jedynym powodem, dla którego ktoś chce oglądać folder Wysłane, jest to, że używa innego programu pocztowego (takiego jak Thunderbird) razem z aplikacją Delta Chat i chce, aby jego program pocztowy „uczestniczył” w rozmowach na czacie.

Jednak zalecamy używanie klienta Delta Chat Desktop; możesz go pobrać z [get.delta.chat](https://get.delta.chat). Opcja oglądania folderu „Wysłane” może w przyszłości zniknąć. Została wprowadzona w czasie, gdy na żadnej platformie nie był dostępny klient Delta Chat Desktop.

### Dlaczego mogę nie widzieć folderu DeltaChat?

Niektórzy używają Delta Chat jako zwykłego klienta poczty e-mail i chcą używać folderu Skrzynka odbiorcza dla swojej poczty zamiast folderu DeltaChat. Jeśli wyłączysz opcję „Oglądaj folder DeltaChat”, powinieneś również wyłączyć opcję „Automatyczne przenoszenie do folderu DeltaChat”. W przeciwnym razie usuwanie wiadomości lub konfiguracja wielu urządzeń może nie działać poprawnie.


## webxdc apps {#webxdc}

In Delta Chat, you can share [webxdc apps](https://webxdc.org), attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger.


### How private are webxdc apps?

- webxdc apps can not send data to the Internet, or download anything.
- A webxdc app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a webxdc app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the webxdc app as well.
- This also means: it can be a privacy risk to open webxdc apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get webxdc apps?

- In general, anyone can share webxdc apps with each
  other without restrictions.
- You can [send 'hi' to xstore@testrun.org](https://delta.chat/en/2023-08-11-xstore)
  to see an experimental webxdc appstore.
  All of the apps are open source and for free.
- Many people write their own webxdc apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own webxdc apps?

- webxdc apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Funkcje eksperymentalne

We are very grateful for feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. 
You may conveniently login via Delta Chat and a QR code scan,
another rather stable experiment we run on the side (sic!).

### Jak mogę korzystać z połączeń audio/wideo z Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "Video Chat Instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to the video chat. 
  This way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### Co to są Listy rozgłoszeniowe i jak mogę ich używać?

- Dzięki liście rozgłoszeniowej możesz wysłać wiadomość do wielu odbiorców jednocześnie; kiedy ci odpowiedzą, otrzymasz odpowiedź w bezpośrednim czacie 1: 1 z nimi. Odbiorcy nie widzą siebie nawzajem.
- Technicznie, jest to e-mail z wieloma odbiorcami w „ukrytej kopii”.
- Możesz włączyć tę funkcję w sekcji „Funkcje eksperymentalne” w ustawieniach zaawansowanych. Następnie możesz utworzyć listę rozgłoszeniową z okna dialogowego „Nowy czat”.
- Jeśli używasz więcej niż jednego urządzenia, listy rozgłoszeniowe nie są obecnie synchronizowane między nimi.
- Wiadomości wysyłane do list rozgłoszeniowych nie są szyfrowane. Szyfrowanie złamałoby anonimowość, ponieważ wtedy wszyscy odbiorcy wiedzieliby, kto jeszcze je otrzymał (wysyłanie indywidualnych wiadomości do wszystkich byłoby gorsze z powodu limitu prędkości i zużycia sieci).


### Jak mogę udostępnić swoją lokalizację moim rozmówcom?

- Możesz włączyć przesyłanie strumieniowe lokalizacji w sekcji „Funkcje eksperymentalne” w ustawieniach zaawansowanych.
- Teraz, jeśli chcesz udostępnić swoją lokalizację na czacie, przejdź do „załącz” i wybierz „Lokalizacja”. Możesz teraz ustawić przedział czasowy, w którym Twoja lokalizacja będzie przesyłana strumieniowo do rozmówców, od 5 minut do 6 godzin.
- Gdy Twoja lokalizacja się zmienia, inni uczestnicy czatu mogą ją zobaczyć na mapie w czacie.
- Aby zobaczyć mapę i wyświetlić lokalizacje innych osób, musisz włączyć tę funkcję w ustawieniach zaawansowanych.
- Ta funkcja nie będzie udostępniać Twojej lokalizacji nikomu poza partnerami czatu. *Ale:* aby pokazać mapę, musimy pobrać część mapy z serwisu mapbox.com, więc jeśli *wyświetlasz* mapę, serwis mapbox.com jest proszony o mapę określonego obszaru. Jeśli jest to dla Ciebie zagrożeniem dla prywatności, ta funkcja może nie być dla Ciebie. Pracujemy nad znalezieniem zdecentralizowanej alternatywy dla Mapbox.
- Na komputerze system operacyjny zwykle nie może określić Twojej lokalizacji. Zamiast tego możesz kliknąć prawym przyciskiem myszy na mapie i opisać lokalizację, która jest wysyłana do czatu jako wiadomość, ale także pojawia się na mapie.


### Co właściwie chroni eksperymentalne szyfrowanie bazy danych?

- W tej chwili szyfrowanie bazy danych jest jeszcze bardzo eksperymentalne. Nie polegaj na nim w kwestii ochrony, powinieneś dodatkowo użyć szyfrowania systemu operacyjnego, jeśli takie zapewnia.
- Szyfrowanie bazy danych nie szyfruje jeszcze obiektów blob, tylko wiersze i kolumny bazy danych. Oznacza to mniej więcej tyle, że Twoje wiadomości są bezpieczne, ale nie załączniki.
- W systemach iOS i Android klucze szyfrujące są przechowywane w pęku kluczy systemowych. Oznacza to, że szyfrowanie jest tak bezpieczne, jak system operacyjny, na którym działa.
- Klient Delta Chat na komputer nie oferuje jeszcze szyfrowania bazy danych, ponieważ nie ma standardowego sposobu przechowywania kluczy szyfrowania na różnych obsługiwanych platformach.


### Dlaczego mogę wybrać, aby widzieć tylko folder DeltaChat?

To jest ustawienie eksperymentalne dla niektórych osób, które eksperymentują z regułami po stronie serwera. Nie wszyscy dostawcy to obsługują, ale w przypadku niektórych możesz przenieść wszystkie wiadomości z nagłówkiem „Chat-Version” do folderu DeltaChat. Zwykle byłoby to zrobione przez aplikację Delta Chat.

Włączenie „Pobieraj tylko z folderu DeltaChat” ma sens, jeśli masz:

- włączoną regułę po stronie serwera, aby przenosić wszystkie wiadomości z nagłówkiem Chat-Version do folderu DeltaChat i,
- ustawioną opcję „Pokaż klasyczne e-maile” na „Nie, tylko czaty”.

W tym przypadku Delta Chat nie musi obserwować skrzynki odbiorczej, a wystarczy, że będzie obserwować tylko folder DeltaChat.


### Jak mogę zmienić moje konto na inny adres e-mail?

1. Change your address in “Settings - Password and Account” and
   enter the password of your new account (and if necessary, server settings).
   You will get an information notice about the fact that you are moving to a new address. 
   An additional notice will also show up in your "Device messages" chat. 

2. If possible, let your old e-mail provider forward all messages to your new address.

3. Tell your contacts that you changed your address. 
   Writing to guaranteed end-to-end encrypted chats and groups,
   will make them notice your move automatically 
   and they will continue chatting with you using your new address. 

Note that Delta Chat will not retrieve messages anymore from your old e-mail provider.
If you didn't configure your e-mail provider to forward messages (step 2.) 
only those contacts to whom you sent a message in a guaranteed end-to-end encrypted chat
will send messages to your new address. 

To learn more about this the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Różne

### Czy Delta Chat działa z _moim_ dostawcą poczty e-mail?

- Z dość dużym prawdopodobieństwem: Tak :)
  Jednak niektórzy dostawcy potrzebują specjalnych opcji, aby działać poprawnie, zobacz [Przegląd dostawców](https://providers.delta.chat)


### Chcę zarządzać własnym serwerem e-mail dla Delta Chat. Co polecacie?

- Większość serwerów pocztowych będzie działać dobrze. Ale to, co osobiście polecamy, to połączenie mailcow i mailadm, jak opisano [w tym poście na blogu](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- Instrukcję instalacji można znaleźć [na naszej stronie internetowej](serverguide).


### Jeśli Delta Chat korzysta z poczty e-mail, czy naprawdę jest to komunikator internetowy?

- Wysyłanie i odbieranie wiadomości zwykle zajmuje kilka sekund. Czasami zdarzają się przypadki, w których trwa to dłużej, ale prawdopodobnie jest to również prawdą w przypadku każdego innego komunikatora.
- Natychmiastowe czatowanie działa szybko, jeśli obie strony aktywnie korzystają z aplikacji. Czasami działa wolniej, jeśli aplikacja działa w tle.
- Odbieranie wiadomości może zająć kilka minut, ponieważ zarówno Android, jak i iOS często zatrzymują Delta Chat podczas działaniem w tle i budzą go tylko od czasu do czasu. To sztuczne opóźnienie jest zwykle gorsze na iOS niż na Androidzie.
- Jednak „ubijanie” aplikacji działających w tle na Androidzie i iOS stanowi problem dla wielu legalnych aplikacji. Aby uzyskać więcej informacji, zobacz [dontkillmyapp.com](https://dontkillmyapp.com/).


### Czy Delta Chat jest kompatybilny z Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be end-to-end
  encrypted, though. The end-to-end encryption those providers offer is not
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can end-to-end-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Interesują mnie szczegóły techniczne. Możesz powiedzieć mi coś więcej?

- Zobacz [Standardy używane w Delta Chat]({% include standards-url %}).

### Czy Delta Chat był niezależnie kontrolowany pod kątem luk w zabezpieczeniach? {#security-audits}

Projekt Delta Chat przeszedł w ostatnich latach cztery niezależne audyty bezpieczeństwa:

-W 2019 r. firma [Include Security](https://includesecurity.com) przeanalizowała biblioteki [PGP](https://github.com/rpgp/rpgp) i [RSA](https://github.com/RustCrypto/RSA) Delta Chat. Nie znaleziono żadnych krytycznych problemów, ale dwa poważne problemy, które później naprawiliśmy. Ujawniła również jeden problem o średniej wadze i kilka mniej poważnych, ale nie było możliwości wykorzystania tych luk w implementacji Delta Chat. Niektóre z nich jednak naprawiliśmy od czasu zakończenia kontroli. Pełny raport można przeczytać [tutaj](../assets/blog/2019-first-security-review.pdf).

- W 2020 r. firma [Include Security](https://includesecurity.com) przeanalizowała biblioteki Rust [core](https://github.com/deltachat/deltachat-core-rust/), [IMAP](https://github.com/async-email/async-imap), [SMTP](https://github.com/async-email/async-smtp) i [TLS](https://github.com/async-email/async-native-tls) Delta Chat. Nie znalazła żadnych problemów krytycznych ani poważnych. W raporcie zwrócono uwagę na kilka słabych punktów o średniej wadze – same w sobie nie stanowią zagrożenia dla użytkowników Delta Chat, ponieważ zależą od środowiska, w którym używany jest Delta Chat. Ze względu na użyteczność i kompatybilność nie możemy złagodzić wszystkich z nich i zdecydowaliśmy się przedstawić zalecenia dotyczące bezpieczeństwa zagrożonym użytkownikom. Pełny raport można przeczytać [tutaj](../assets/blog/2020-second-security-review.pdf).

- Początkiem 2023 r. firma [Cure53](https://cure53.de) przeanalizowała zarówno szyfrowanie transportu połączeń sieciowych Delta Chat, jak i powtarzalną konfigurację serwera pocztowego zgodnie z [zaleceniami na tej stronie](serverguide). Możesz przeczytać więcej o audycie [na naszym blogu](https://delta.chat/en/2023-03-27-third-independent-security-audit) lub przeczytać pełny raport [tutaj](../assets/blog/MER-01-report.pdf).

- Beginning 2023, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023.
  See [here for the full background story on end-to-end security in the web](https://delta.chat/en/2023-05-22-webxdc-security).


### W jaki sposób finansowany jest rozwój Delta Chat?

Delta Chat nie otrzymuje żadnego kapitału wysokiego ryzyka, nie jest zadłużony i nie jest pod presją generowania ogromnych zysków lub sprzedawania reklamodawcom użytkowników i ich przyjaciół oraz rodziny (lub gorzej).
Raczej korzystamy z publicznych źródeł finansowania, jak dotąd pochodzących z UE i USA, aby wspomóc nasze wysiłki w inicjowaniu zdecentralizowanego i zróżnicowanego ekosystemu komunikatora, opartego na rozwoju społeczności Free i Open-Source.

Konkretnie, rozwój Delta Chat był dotychczas finansowany z tych źródeł:

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

- [Open Technology Fund](https://opentechfund.org) przyznał nam pierwszy grant w 2018/2019 (~200 000 $), dzięki któremu znacznie ulepszyliśmy aplikację na Androida i wydaliśmy pierwszą wersję beta aplikacji na komputery stacjonarne, a także ugruntował rozwój naszych funkcji w badaniach UX w kontekście praw człowieka, zobacz nasz końcowy raport [Needfinding and UX](https://delta.chat/en/2019-07-19-uxreport).
Druga dotacja w 2019/2020 (~300 000 4) pomogła nam wydać wersje Delta/iOS, przekonwertować naszą podstawową bibliotekę na Rust i zapewnić nowe funkcje dla wszystkich platform.

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system. 

- W 2021 r. otrzymaliśmy kolejne dofinansowanie z UE na dwie propozycje dotyczące Internetu nowej generacji, a mianowicie na [EPPD – katalog przenośności dostawcy poczty e-mail](https://dapsi.ngi.eu/hall-of-fame/eppd/) ( ~97 tys. EUR) i [AEAP – przenoszenie adresu e-mail](https://nlnet.nl/project/EmailPorting/) (~90 tys. EUR), co zaowocowało lepszą obsługą wielu kont, ulepszonymi kontaktami i ustawieniami grup za pomocą kodów QR oraz wieloma ulepszeniami sieciowymi na wszystkich platformach.

- Od końca 2021 do marca 2023 otrzymaliśmy dofinansowanie *Wolność Internetu* (~500 tys. $) z amerykańskiego Biura Demokracji, Praw Człowieka i Pracy (DRL).
Fundusze te wspierają nasze długofalowe cele, aby uczynić Delta Chat bardziej użytecznym i kompatybilnym z szeroką gamą serwerów e-mail na całym świecie, a także bardziej odpornym i bezpiecznym w miejscach często dotkniętych cenzurą i wyłączeniami Internetu.

- Od 2023 roku zostaliśmy zaakceptowani w programie Next Generation Internet (NGI) Entrust dla naszych propozycji „Prywatnych zdecentralizowanych aplikacji”. Dokładna kwota do ustalenia (około 100 tys. EUR). Finansowanie to wspiera dalszy rozwój [„aplikacji udostępnianych na czacie” webxdc](https://webxdc.org). 

- Czasami otrzymujemy jednorazowe darowizny od osób prywatnych. Na przykład w 2021 roku pewna hojna osoba przekazała nam 4K EUR w formie przelewu bankowego tytułem "kontynuujcie dobry rozwój!". 💜 Takie pieniądze przeznaczamy na finansowanie spotkań rozwojowych lub na doraźne wydatki, których nie da się łatwo przewidzieć lub zrefundować z publicznych dotacji. Otrzymywanie większej ilości darowizn pomaga nam również stać się bardziej niezależnymi i długoterminowo rentownymi jako społeczność współpracowników.

[Przekaż pieniądze](donate){: .cta-button}

- Wreszcie, ale zdecydowanie nie najmniej ważne, kilku ekspertów i entuzjastów pro-bono wniosło wkład i przyczyniło się do rozwoju Delta Chat bez otrzymywania pieniędzy lub tylko niewielkich kwot. Bez nich Delta Chat nie byłby tam, gdzie jest dzisiaj, nawet w pobliżu.

Wspomniane powyżej finansowanie pieniężne jest w większości organizowane przez merlinux GmbH we Freiburgu (Niemcy) i jest dystrybuowane do kilkunastu podmiotów na całym świecie.

Zapoznaj się z [kanałami wpłat dla Delta Chat](contribute), aby uzyskać informacje o możliwościach wpłat zarówno pieniężnych, jak i innych.
