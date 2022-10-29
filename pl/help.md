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

By default, Delta Chat shows:

- Messages sent by other Delta Chat users
- Replies to your Delta Chat messages, even if they are "normal e-mails".

Other e-mails don't appear in your app by default. At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well. This is the default setting.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące automatycznie otrzymują załączniki w razie potrzeby.


### Kto widzi moje zdjęcie profilowe?

- Możesz dodać zdjęcie profilowe w swoich ustawieniach. Jeśli napiszesz do swoich kontaktów lub dodasz je za pomocą kodu QR, automatycznie zobaczą je jako Twoje zdjęcie profilowe.

- Kontakty, które nie korzystają z Delta Chat nie widzą zdjęcia profilowego (jednak oczywiście mogą zainstalować Delta Chat :)

- Ze względów prywatności nikt nie widzi Twojego zdjęcia profilowego, dopóki nie napiszesz do niego wiadomości.

- Twoje zdjęcie profilowe nie jest wysyłane z każdą wiadomością, ale wystarczająco regularnie, aby kontakty ponownie otrzymały Twoje zdjęcie profilowe, nawet jeśli dodadzą nowe urządzenie.


### Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

- Tak. W razie potrzeby wiadomości przychodzące otrzymują przycisk „Pokaż całą wiadomość”. Wychodzące wiadomości e-mail zawsze zawierają zwykły tekst.


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

- **Archiwizuj czaty**, jeśli nie chcesz ich już widzieć na swojej liście czatów.
Dostęp do zarchiwizowanych czatów możesz nadal uzyskać w dolnej części listy czatów, w menu lub za pomocą wyszukiwania.

- Gdy zarchiwizowany czat otrzyma nową wiadomość, o ile nie zostanie wyciszony, **wyskoczy z archiwum** i wróci na twoją listę czatów.
**Wyciszone czaty pozostają zarchiwizowane** do czasu ich ręcznego przywrócenia.

Aby zarchiwizować lub przypiąć czat, dotknij i przytrzymaj (Android), użyj menu czatu (Android/Desktop) lub przesuń palcem w lewo (iOS);
aby wyciszyć czat, użyj menu czatu (Android/Desktop) lub profilu czatu (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [private app](#private-apps--webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


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


### What happens if I turn on "Delete old messages from server"?

- By default, Delta Chat stores all messages locally on your device. If you
  e.g. want to save storage space at your mail provider, you can choose to
  delete old messages automatically. They still remain on your device until you
  delete them there, too.
- To turn it on, go to "delete old messages from server" in the "Chats & Media"
  settings. You can set a timeframe between "at once" and "after a year"; this
  way, *all* e-mails will be deleted from the server after that timeframe. 
- Note that if you use Delta Chat on more than one device, you should leave the
  messages on the server, until the other device could download them, too. In
  this case, you should set auto-delete to "after a day" or something similar,
  depending on how often you turn on the other device.


### What happens if I turn on "Delete old messages from device"?

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

### Czy Delta Chat obsługuje szyfrowanie end-to-end?

- Tak. Delta Chat ma zaimplementowany standard Autocrypt Level 1 
  i może szyfrować wiadomości metodą e2e za pomocą innych 
  aplikacji obsługujących Autocrypt. 

- Delta Chat obsługuje również silną formę szyfrowania metodą end-to-end, która jest bezpieczna nawet przed aktywnymi atakami, patrz „Zweryfikowane grupy” poniżej.


### Co muszę zrobić, aby aktywować szyfrowanie end-to-end?

- Nic.

- Gdy wysyłane są pierwsze wiadomości, aplikacje Delta Chat (i inne zgodne z [Autocrypt](https://autocrypt.org) aplikacje e-mail) automatycznie współdzielą klucze wymagane do szyfrowania metodą end-to-end. Następnie wszystkie kolejne wiadomości są automatycznie szyfrowane end-to-end. Jeśli jeden z partnerów czatu korzysta z aplikacji e-mail bez obsługi Autocrypt, kolejne wiadomości nie są szyfrowane, dopóki aplikacja zgodna z Autocrypt nie będzie ponownie dostępna.

- Jeśli raczej wolisz unikać domyślnie szyfrowanych wiadomości e-mail typu end-to-end, użyj odpowiedniego ustawienia automatycznego szyfrowania w „Ustawieniach” lub „Ustawieniach zaawansowanych”.


### Jeśli nie jest dostępne szyfrowanie typu „end-to-end”, czy połączenie w ogóle nie jest szyfrowane?

- W przypadku większości serwerów pocztowych Delta Chat ustanawia _szyfrowanie transportu_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  Zabezpiecza to tylko połączenie między urządzeniem a serwerem e-mail. Natomiast szyfrowanie e2e zapewnia bezpieczeństwo między Twoim urządzeniem a urządzeniem znajomego.


### Jak mogę zweryfikować status kryptograficzny z nadawcą?

Jeśli jesteś w bezpośredniej odległości od partnera czatu:

- Wybierz **Kod QR zaproszenia** na jednym urządzeniu, a następnie **Skanuj kod QR** na drugim i zeskanuj kod. Jeśli oba urządzenia są w trybie online, utworzą ze sobą kanał czatu (jeśli jeszcze nie istnieje), a klucze szyfrowania zostaną zweryfikowane. Obie osoby zobaczą na czacie 1:1 komunikat systemowy „zweryfikowany nadawca”.

Jeśli nie ma cię w pobliżu partnera czatu, możesz sprawdzić stan ręcznie w oknie dialogowym „Szyfrowanie” (profil użytkownika w systemie Android/iOS lub kliknij prawym przyciskiem myszy element listy czatu użytkownika na komputerze):

- W przypadku szyfrowania metodą end-to-end Delta Chat pokazuje tam dwa odciski palców. 
Jeśli te same odciski palców pojawią się na urządzeniu partnera czatu, połączenie jest bezpieczne.

- W przypadku szyfrowania transportu ten stan jest właśnie tam wyświetlany


### Jak mogę sprawdzić szyfrowanie wiadomości?

- Mała **kłódka** pokazana obok wiadomości wskazuje, czy wiadomość od danego nadawcy jest zaszyfrowana metodą end-to-end.

- Jeśli **nie ma kłódki**, wiadomość jest zazwyczaj przesyłana w postaci niezaszyfrowanej, np. dlatego, że Ty lub nadawca wyłączyliście szyfrowanie typu end-to-end lub nadawca używa aplikacji, która nie obsługuje szyfrowania typu end-to-end.

### Jakie standardy są stosowane do szyfrowania end-to-end?

- [Autocrypt](https://autocrypt.org) służy do ustanowienia szyfrowania e2e z innymi aplikacjami Delta Chat i innymi aplikacjami poczty obsługującymi Autocrypt. Autocrypt wykorzystuje ograniczony podzbiór funkcjonalności OpenPGP.

Delta Chat implementuje protokoły [countermitm (przeciwdziałania) setup-contact i verified-group](https://countermitm.readthedocs.io/en/latest/new.html) w celu osiągnięcia ochrony przed aktywnymi atakami sieciowymi. Wykracza to poza oportunistyczną ochronę podstawową Autocrypt Level 1, zachowując jednocześnie łatwość użytkowania.

### Jaka jest różnica między zweryfikowanymi grupami a czatami 1:1 ze zweryfikowanymi kontaktami?

- Czaty 1:1 ze zweryfikowanym kontaktem i zweryfikowanymi grupami to nie to samo, nawet jeśli w zweryfikowanej grupie są tylko 2 osoby. Jedna różnica polega na tym, że z łatwością możesz dodać więcej osób do grupy, ale są też inne konsekwencje.

- Zweryfikowane grupy są niezmiennie zabezpieczone. Każde uszkodzenie (zwykły tekst lub źle podpisane wiadomości itp.) zostaną oflagowane i takie wiadomości nie będą wyświetlane na tym czacie. Możesz ufać, że wszystkie wiadomości w tym czacie ze zweryfikowanym znacznikiem wyboru nie zostały przeczytane/zmienione przez strony pośrednie.

- Czaty 1:1 są oportunistyczne, mają na celu umożliwienie ludziom komunikowania się bez względu na to, czy zmienią klientów poczty e-mail, urządzenia, ustawienia itp. Dlatego nie mają znacznika weryfikacji, nawet jeśli zweryfikowałeś kontakt.


### Czy Delta Chat obsługuje Perfect Forward Secrecy?

- Nie, OpenPGP nie obsługuje Perfect Forward Secrecy. Perfect Forward Secrecy działa w trybie sesji, ale poczta e-mail jest z natury asynchroniczna i często jest używana niezależnie na wielu urządzeniach. Oznacza to, że jeśli twój prywatny klucz Delta Chat wycieknie, a ktoś ma zapis wszystkich twoich wiadomości w drodze, będzie mógł je odczytać.

- Pamiętaj, że jeśli ktoś przejął lub zhakował twój działający telefon, zazwyczaj będzie w stanie odczytać wszystkie wiadomości, bez względu na to, czy funkcja Perfect Forward Secrecy jest, czy nie. Dostęp do pojedynczego urządzenia członka grupy zazwyczaj ujawnia dużą część wykresu społecznościowego. Korzystanie z adresów e-mail, których nie można łatwo odszukać, pomaga członkom grupy chronić się przed skutkami zajęcia urządzenia.

- Pracujemy nad sposobami lepszej ochrony komunikacji w przypadku przejęcia urządzenia.


### W jaki sposób Delta Chat chroni moje metadane?

- Ponieważ Delta Chat jest zdecentralizowanym komunikatorem, metadane użytkowników Delta Chat nie są przechowywane na jednym centralnym serwerze. Są one jednak przechowywane na serwerach pocztowych nadawcy i odbiorcy wiadomości.

- Każdy serwer pocztowy wie obecnie, kto wysłał i kto odebrał wiadomość, sprawdzając niezaszyfrowane nagłówki Do/Dw, a tym samym określając, które adresy e-mail należą do grupy. Sam Delta Chat może całkowicie uniknąć niezaszyfrowanych nagłówków Do/Dw i zawsze umieszczać je tylko w zaszyfrowanej sekcji. Zobacz [Unikanie wysyłania nagłówków Do/Dw dla zweryfikowanych grup](https://github.com/deltachat/deltachat-core-rust/issues/1032). W przypadku oportunistycznych czatów głównym problemem jest to, jak wpływa to na inne aplikacje pocztowe, które mogą uczestniczyć w czatach.

- Wiele innych nagłówków wiadomości e-mail, w szczególności nagłówek „Temat”, jest zabezpieczonych pełnym szyfrowaniem. Zobacz także nadchodzący [IETF RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Czy mogę ponownie wykorzystać mój istniejący klucz prywatny?

- Tak. Najlepszym sposobem jest wysłanie wiadomości konfiguracyjnej Autocrypt z innego klienta poczty e-mail. Poszukaj czegoś jak **Start Autocrypt Setup Transfer** w ustawieniach innego klienta i postępuj zgodnie z wyświetlanymi tam instrukcjami.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

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

Jeśli chcesz używać tego samego konta na różnych urządzeniach, wyeksportuj kopię zapasową ze starego urządzenia i zaimportuj ją na nowe urządzenie:

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
  E2E-encrypted messages with your communication partners. 

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


## Private Apps / webxdc

In Delta Chat, you can share "private apps", attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger. The technical term is [webxdc](https://webxdc.org).


### How private are private apps?

- Private apps can not send data to the Internet, or download anything.
- A private app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a private app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the private app as well.
- This also means: it can be a privacy risk to open private apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get private apps?

- In general, there is no curated appstore and Delta Chat is not responsible
  for private apps or their content. Anyone can share private apps with each
  other without restrictions.
- You can find some example apps on [webxdc.org](https://webxdc.org).
- Many people write their own private apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own private apps?

- Private apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimental Features

We are very grateful about feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. (You
like experiments? Register through "Sign up -> with Delta Chat"!)

### How can I use audio/video calls with Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "videochat instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to your jitsi/BBB room. This
  way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


## Co to jest zweryfikowana grupa? Dlaczego jest eksperymentalna?

- Zweryfikowana grupa to czat, który gwarantuje bezpieczeństwo przed aktywnym napastnikiem. Wszystkie wiadomości w zweryfikowanym widoku czatu są szyfrowane za pomocą e2e, a członkowie mogą dołączyć, skanując „kod QR zaproszenia”. Wszyscy członkowie są więc połączeni ze sobą za pomocą łańcucha zaproszeń, który gwarantuje kryptograficzną spójność przed aktywnymi atakami sieci lub dostawców.
Zobacz [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) odpowiedzialny za badania i rozwój tej funkcji.

- As of Oct 2022, "verified groups" remain an experimental feature. It is
  continuously improved and many bugs have been fixed since the original
  introduction in 2018. However, there remain cases, especially with large
  groups where inconsistencies can occur, or messages become unreadable.


### What are Broadcast Lists and how can I use them?

- With a Broadcast List you can send a message to many recipents at once; when
  they reply to you, you get the reply in your direct 1:1 chat with them. The
recipients can't see each other.
- Technically, it is an E-Mail with many recipients in BCC.
- You can turn on the feature in the "experimental features" section in the
  advanced settings. Then you can create a Broadcast List from the "New Chat"
dialog.
- In case you are using more than one device, Broadcast Lists are currently not
  synced between them.
- Messages sent to broadcast lists are not encrypted. Encryption would break
  anonymity, because then all recipients would know who else received it
  (Sending individual mails to everyone would be worse for rate limit and network
  consumption reason).


### How can I share my location with my chat partners?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat
  partners. *But:* to show the map, we need to download map tiles from
  mapbox.com, so if you *view* the map, mapbox.com is asked for the map of a
  specific area. If this is a privacy risk for you, this feature might not be
  for you. We are working on finding a decentralized alternative for Mapbox.
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### What does the experimental database encryption actually protect?

- Right now, the database encryption is still very experimental. Don't rely on
  it for protection, you should additionally use encryption of your operating
  system, if it provides any.
- The database encryption does not yet encrypt the blobs, only the rows and
  columns of the database. This more or less means that your messages are safe,
  but not your attachments.
- For iOS and Android, the encryption keys are stored in the system keychain.
  This means the encryption is as secure as the operating system it's running
  on.
- The Delta Chat desktop client doesn't offer database encryption yet, as there
  is no standard way to store the encryption keys on the different supported
  platforms.


### Why can I choose to only watch the DeltaChat folder?

To jest ustawienie eksperymentalne dla niektórych osób, które eksperymentują z regułami po stronie serwera. Nie wszyscy dostawcy to obsługują, ale w przypadku niektórych możesz przenieść wszystkie wiadomości z nagłówkiem „Chat-Version” do folderu DeltaChat. Zwykle byłoby to zrobione przez aplikację Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- włączoną regułę po stronie serwera, aby przenosić wszystkie wiadomości z nagłówkiem Chat-Version do folderu DeltaChat i,
- ustawioną opcję „Pokaż klasyczne e-maile” na „Nie, tylko czaty”.

In this case, Delta Chat doesn't need to watch the Inbox, and it's enough to only watch the DeltaChat folder.


### How can I change my account to a different e-mail address?

1. Change your address at the “Password and Account” seetings screen in Delta
   Chat, enter your password (and if necessary, server settings) for the new
   account
2. If possible, make your old e-mail provider forward all e-mails to your new
   email address
3. Tell your contacts that you changed your address. If you write this to a
   verified group, they will acknowledge this automatically.

To learn about the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Różne

### Czy Delta Chat działa z _moim_ dostawcą poczty e-mail?

- Z dość dużym prawdopodobieństwem: Tak :)
  Jednak niektórzy dostawcy potrzebują specjalnych opcji, aby działać poprawnie, zobacz [Przegląd dostawców](https://providers.delta.chat)


### Jeśli Delta Chat korzysta z poczty e-mail, czy naprawdę jest to komunikator internetowy?

- Wysyłanie i odbieranie wiadomości zwykle zajmuje kilka sekund. Czasami zdarzają się przypadki, w których trwa to dłużej, ale prawdopodobnie jest to również prawdą w przypadku każdego innego komunikatora.
- Natychmiastowe czatowanie działa szybko, jeśli obie strony aktywnie korzystają z aplikacji. Czasami działa wolniej, jeśli aplikacja działa w tle.
- Odbieranie wiadomości może zająć kilka minut, ponieważ zarówno Android, jak i iOS często zatrzymują Delta Chat podczas działaniem w tle i budzą go tylko od czasu do czasu. To sztuczne opóźnienie jest zwykle gorsze na iOS niż na Androidzie.
- Jednak „ubijanie” aplikacji działających w tle na Androidzie i iOS stanowi problem dla wielu legalnych aplikacji. Aby uzyskać więcej informacji, zobacz [dontkillmyapp.com](https://dontkillmyapp.com/).


### Czy Delta Chat jest kompatybilny z Protonmail / Tutanota / Criptext?

- I tak i nie.
- Nie, nie możesz używać swojego konta Protonmail, Tutanota lub Criptext z Delta Chat; nie oferują one odbierania poczty przez IMAP.
- W każdym przypadku możesz użyć Delta Chat do wysyłania wiadomości do osób, które używają Protonmail, Tutanota lub Criptext. Te wiadomości nie będą jednak szyfrowane metodą end-to-end. Szyfrowanie typu end-to-end, które oferują ci dostawcy, nie jest kompatybilne z [Autocrypt](https://autocrypt.org/) stosowanym standardowo w Delta Chat.
- Delta Chat może zaszyfrować metodą end-to-end za pośrednictwem dowolnego dostawcy poczty e-mail z dowolną [aplikacją e-mail z włączoną funkcją Autocrypt](https://autocrypt.org/dev-status.html).


### Interesują mnie szczegóły techniczne. Możesz powiedzieć mi coś więcej?

- Zobacz [Standardy używane w Delta Chat]({% include standards-url %}).

### W jaki sposób finansowany jest rozwój Delta Chat?

Delta Chat nie otrzymuje żadnego kapitału wysokiego ryzyka, nie jest zadłużony i nie jest pod presją generowania ogromnych zysków lub sprzedawania reklamodawcom użytkowników i ich przyjaciół oraz rodziny (lub gorzej).
Raczej korzystamy z publicznych źródeł finansowania, jak dotąd pochodzących z UE i USA, aby wspomóc nasze wysiłki w inicjowaniu zdecentralizowanego i zróżnicowanego ekosystemu komunikatora, opartego na rozwoju społeczności Free i Open-Source.

Konkretnie, rozwój Delta Chat był dotychczas finansowany z tych źródeł:

- W 2017 i 2018 roku w ramach projektu [NEXTLEAP](https://nextleap.eu) UE sfinansowała badania i wdrażanie zweryfikowanych grup oraz ustanawianie protokołów kontaktowych, a także pomogła zintegrować szyfrowanie End-to-End za pomocą [Autocrypt](https://autocrypt.org).

- [Open Technology Fund](https://opentechfund.org) przyznał nam pierwszy grant w 2018/2019 (~200 000 $), dzięki któremu znacznie ulepszyliśmy aplikację na Androida i wydaliśmy pierwszą wersję beta aplikacji na komputery stacjonarne, a także ugruntował rozwój naszych funkcji w badaniach UX w kontekście praw człowieka, zobacz nasz końcowy raport [Needfinding and UX](https://delta.chat/en/2019-07-19-uxreport).
Druga dotacja w 2019/2020 (~300 000 4) pomogła nam wydać wersje Delta/iOS, przekonwertować naszą podstawową bibliotekę na Rust i zapewnić nowe funkcje dla wszystkich platform.

- Fundacja [NLnet](https://nlnet.nl/) przyznała w 2019/2020 46 000 EUR na ukończenie powiązań Rust/Python i zainicjowanie ekosystemu Czat-botów.

- W 2021 r. otrzymaliśmy kolejne dofinansowanie z UE na dwie propozycje dotyczące Internetu nowej generacji, a mianowicie na [EPPD – katalog przenośności dostawcy poczty e-mail](https://dapsi.ngi.eu/hall-of-fame/eppd/) ( ~97 tys. EUR) i [AEAP – przenoszenie adresu e-mail](https://nlnet.nl/project/EmailPorting/) (~90 tys. EUR), co zaowocowało lepszą obsługą wielu kont, ulepszonymi kontaktami i ustawieniami grup za pomocą kodów QR oraz wieloma ulepszeniami sieciowymi na wszystkich platformach.

- Na lata 2021/2022 otrzymujemy dofinansowanie *Wolności Internetu* (~500 tys. $) z amerykańskiego Biura Demokracji, Praw Człowieka i Pracy (DRL).
Fundusze te wspierają nasze długofalowe cele, aby uczynić Delta Chat bardziej użytecznym i kompatybilnym z szeroką gamą serwerów e-mail na całym świecie, a także bardziej odpornym i bezpiecznym w miejscach często dotkniętych cenzurą i wyłączeniami Internetu.

- Czasami otrzymujemy jednorazowe darowizny od osób prywatnych, za które jesteśmy wdzięczni. Na przykład w 2021 roku pewna hojna osoba przekazała nam 4K EUR w formie przelewu bankowego tytułem "kontynuujcie dobry rozwój!". Takie pieniądze przeznaczamy na finansowanie spotkań rozwojowych lub na doraźne wydatki, których nie da się łatwo przewidzieć lub zrefundować z publicznych dotacji.

- Wreszcie, ale zdecydowanie nie najmniej ważne, kilku ekspertów i entuzjastów pro-bono wniosło wkład i przyczyniło się do rozwoju Delta Chat bez otrzymywania pieniędzy lub tylko niewielkich kwot. Bez nich Delta Chat nie byłby tam, gdzie jest dzisiaj, nawet w pobliżu.

Wspomniane powyżej finansowanie pieniężne jest w większości organizowane przez merlinux GmbH we Freiburgu (Niemcy) i jest dystrybuowane do kilkunastu podmiotów na całym świecie.

Finansowanie na drugą połowę 2022 r., a zwłaszcza na 2023 r., wciąż budzi niepokój. Oprócz ubiegania się o więcej środków publicznych chcemy uniezależnić się od rządowych źródeł finansowania. Zapoznaj się z [możliwościami wsparcia Delta Chat](https://delta.chat/en/contribute), zarówno finansowego jak i związanego z rozwojem.
