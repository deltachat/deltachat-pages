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

Delta Chat automatycznie pokazuje:

- Wiadomości od kontaktów z **książki adresowej**
- Wiadomości od kontaktów, z którymi **się kontaktujesz**
- **Odpowiedzi** na wiadomości wysyłane przez ciebie

Inne wiadomości nie pojawiają się automatycznie i można je znaleźć w **Prośby o kontakt**. W razie potrzeby można rozpocząć czat.


### Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące automatycznie otrzymują załączniki w razie potrzeby.


### Kto widzi moje zdjęcie profilowe?

- Możesz dodać zdjęcie profilowe w swoich ustawieniach. Jeśli napiszesz do swoich kontaktów lub dodasz je za pomocą kodu QR, automatycznie zobaczą je jako Twoje zdjęcie profilowe.

- Contacts who don't use Delta Chat do not see the profile picture
  (however, of course, they can install Delta Chat :)

- Ze względów prywatności nikt nie widzi Twojego zdjęcia profilowego, dopóki nie napiszesz do niego wiadomości.

- Twoje zdjęcie profilowe nie jest wysyłane z każdą wiadomością, ale wystarczająco regularnie, aby kontakty ponownie otrzymały Twoje zdjęcie profilowe, nawet jeśli dodadzą nowe urządzenie.


### Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

- Yes. If needed, incoming messages get a "Show full message" button. Outgoing e-mails always use plain text.


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


## Grupy

### Tworzenie grupy

- Wybierz **Nowy czat**, a następnie **Nowa grupa** z menu w prawym górnym rogu lub naciśnij odpowiedni przycisk na Androidzie / iOS.
- Na następnym ekranie wybierz **członków grupy** i zdefiniuj **nazwę grupy**. Możesz też wybrać awatar **grupy**. 
- Zaraz po napisaniu pierwszej wiadomości w grupie wszyscy członkowie zostaną poinformowani o nowej grupie i mogą odpowiedzieć w grupie (jeżeli nie napiszesz wiadomości w grupie, grupa jest niewidoczna dla członków).


### Dodanie członków do grupy

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 


## Co to jest zweryfikowana grupa? Dlaczego jest eksperymentalna?

- Zweryfikowana grupa to czat, który gwarantuje bezpieczeństwo przed aktywnym napastnikiem. Wszystkie wiadomości w zweryfikowanym widoku czatu są szyfrowane za pomocą e2e, a członkowie mogą dołączyć, skanując „kod QR zaproszenia”. Wszyscy członkowie są więc połączeni ze sobą za pomocą łańcucha zaproszeń, który gwarantuje kryptograficzną spójność przed aktywnymi atakami sieci lub dostawców.
Zobacz [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) odpowiedzialny za badania i rozwój tej funkcji.

- Od grudnia 2019 r. „Zweryfikowana grupa” pozostaje funkcją eksperymentalną. Jest stale ulepszana, a wiele błędów zostało naprawionych od czasu pierwotnego wprowadzenia w 2018 r. Pozostają jednak przypadki, zwłaszcza w dużych grupach, w których mogą wystąpić niespójności lub komunikaty stają się nieczytelne. Na początku 2020 r. nadchodzi przegląd bezpieczeństwa i ma miejsce kilka nowych zmian dotyczących protokołów qr-join, więc są szanse, że wkrótce usuniemy etykietę „eksperymentalna”.


### Usunąłem się przez przypadek.

- Ponieważ nie jesteś członkiem grupy, nie możesz dodać siebie ponownie. 
  Jednak nie ma problemu, po prostu poproś dowolnego członka grupy na normalnym czacie, aby dodał cię ponownie.


### Nie chcę już otrzymywać wiadomości od grupy.

- Usuń siebie z listy członków lub usuń cały czat. 
  Jeśli później będziesz chciał ponownie dołączyć do grupy, poproś innego członka grupy, aby dodał cię do grupy.

- Alternatywnie możesz też „Wyłączyć powiadomienia” dla grupy  dzięki temu otrzymasz wszystkie wiadomości i 
  nadal będziesz mógł pisać, ale nie będziesz już powiadamiany o żadnych nowych wiadomościach.


### What do the ticks shown beside outgoing messages mean?

- **One tick** means that the message was sent successfully to your provider.
- **Two ticks** mean that at least one recipient's device
  reported back to having received the message.
- Recipients may have disabled read-receipts,
  so even if you see only one tick, the message may have been read.
- The other way round, two ticks do not automatically mean
  that a human has read or understood the message ;)


## Szyfrowanie {#encryption}

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

- Alternatywnie możesz zaimportować go ręcznie w „Ustawienia” lub „Ustawienia zaawansowane” a następnie „Importuj prywatne klucze”. Uwaga: upewnij się, że klucz nie jest chroniony hasłem lub usuń hasło wcześniej.

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

- Na starym urządzeniu przejdź do „Ustawienia” lub „Ustawienia/Czaty i multimedia”, a następnie do „Kopia zapasowa”. Wprowadź kod PIN, wzór lub hasło do odblokowania ekranu. Następnie możesz nacisnąć „Rozpocznij tworzenie kopii zapasowej”. Spowoduje to zapisanie pliku kopii zapasowej na twoim urządzeniu. Teraz musisz jakoś przenieść to na inne urządzenie.
- Na nowym urządzeniu, na ekranie logowania, zamiast logować się do konta e-mail, wybierz „Importuj kopię zapasową”. Po zaimportowaniu rozmowy, klucze szyfrowania i multimedia powinny zostać skopiowane na nowe urządzenie.
- Jesteś teraz zsynchronizowany i możesz używać obu urządzeń do wysyłania i odbierania wiadomości zaszyfrowanych przez E2E ze swoimi partnerami.

### Czy są jakieś plany wprowadzenia klienta Web Delta Chat?

- Nie ma bezpośrednich planów, ale wstępne przemyślenia.
- Istnieją 2-3 możliwości wprowadzenia klienta Web Delta Chat, ale wszystkie wymagają znaczącej pracy. Na razie skupiamy się na udostępnianiu stabilnych wersji we wszystkich sklepach z aplikacjami (repozytoria Google Play/iOS/Windows/macOS/Linux) jako aplikacji natywnych.
- Jeśli potrzebujesz klienta Web, ponieważ nie możesz instalować oprogramowania na komputerze, na którym pracujesz, możesz użyć przenośnego klienta Windows Desktop lub AppImage dla Linuxa. Możesz je znaleźć na [get.delta.chat](https://get.delta.chat).


### Dlaczego nie mogę zobaczyć skrzynki odbiorczej?

To jest ustawienie eksperymentalne dla niektórych osób, które eksperymentują z regułami po stronie serwera. Nie wszyscy dostawcy to obsługują, ale w przypadku niektórych możesz przenieść wszystkie wiadomości z nagłówkiem „Chat-Version” do folderu DeltaChat. Zwykle byłoby to zrobione przez aplikację Delta Chat.

Włączenie oglądania skrzynki odbiorczej ma sens, jeśli masz:

- włączoną regułę po stronie serwera, aby przenosić wszystkie wiadomości z nagłówkiem Chat-Version do folderu DeltaChat i,
- ustawioną opcję „Pokaż klasyczne e-maile” na „Nie, tylko czaty”.

W takim przypadku Delta Chat nie musi obserwować skrzynki odbiorczej.

### Do czego służy ustawienie „Wyślij kopię do siebie”?

Wysłanie kopii wiadomości do siebie zapewnia otrzymywanie własnych wiadomości na wszystkich urządzeniach. Jeśli masz wiele urządzeń i jej nie włączysz, zobaczysz tylko wiadomości od innych osób oraz wiadomości, które wysyłasz z bieżącego urządzenia.

Kopia jest wysyłana do skrzynki odbiorczej, a następnie przenoszona do folderu DeltaChat; nie jest umieszczana w folderze „Wysłane”. Delta Chat nigdy nie przesyła niczego do folderu Wysłane, ponieważ oznaczałoby to dwukrotne przesłanie wiadomości (raz przez SMTP i raz przez IMAP do folderu Wysłane).

Domyślne ustawienie kopiowania do siebie to „nie”.

### Po co mam wybrać opcję oglądania folderu „Wysłane”?

Jedynym powodem, dla którego ktoś chce oglądać folder Wysłane, jest to, że używa innego programu pocztowego (takiego jak Thunderbird) razem z aplikacją Delta Chat i chce, aby jego program pocztowy „uczestniczył” w rozmowach na czacie.

Jednak zalecamy używanie klienta Delta Chat Desktop; możesz go pobrać z [get.delta.chat](https://get.delta.chat). Opcja oglądania folderu „Wysłane” może w przyszłości zniknąć. Została wprowadzona w czasie, gdy na żadnej platformie nie był dostępny klient Delta Chat Desktop.

### Dlaczego mogę nie widzieć folderu DeltaChat?

Niektórzy używają Delta Chat jako zwykłego klienta poczty e-mail i chcą używać folderu Skrzynka odbiorcza dla swojej poczty zamiast folderu DeltaChat. Jeśli wyłączysz opcję „Oglądaj folder DeltaChat”, powinieneś również wyłączyć opcję „Automatyczne przenoszenie do folderu DeltaChat”. W przeciwnym razie usuwanie wiadomości lub konfiguracja wielu urządzeń może nie działać poprawnie.

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
- W każdym przypadku możesz użyć Delta Chat do wysyłania wiadomości do osób, które używają Protonmail, Tutanota lub Criptext. Te wiadomości nie będą jednak szyfrowane metodą end-to-end. Szyfrowanie typu end-to-end, które oferują ci dostawcy, działa tylko na ich platformach i nie jest kompatybilne z nikim spoza nich.
- Delta Chat może zaszyfrować metodą end-to-end dowolnego dostawcę poczty e-mail z dowolną [aplikacją e-mail obsługującą Autocrypt](https://autocrypt.org/dev-status.html).


### Interesują mnie szczegóły techniczne. Możesz powiedzieć mi coś więcej?

- Zobacz [Standardy używane w Delta Chat]({% include standards-url %}).

### W jaki sposób finansowany jest rozwój Delta Chat?

Przede wszystkim Delta Chat nie otrzymuje żadnego kapitału podwyższonego ryzyka, nie jest zadłużony i nie jest pod presją, aby generować ogromne zyski lub sprzedawać reklamodawcom użytkowników i ich przyjaciół i rodzinę (lub gorzej).

Rozwój Delta Chat był dotychczas finansowany z czterech głównych źródeł:

W 2017 i 2018 roku w ramach projektu [NEXTLEAP](https://nextleap.eu) UE sfinansowała badania i wdrażanie zweryfikowanych grup oraz ustanawianie protokołów kontaktowych.

- [Open Technology Fund](https://opentechfund.org) przyznał dwa granty. Pierwszy grant 2018/2019 (~200 000 $) znacznie ulepszył aplikację na Androida i pozwolił nam wydać wersję beta aplikacji na komputery stacjonarne, a także ugruntował rozwój naszych funkcji w badaniach UX w kontekście praw człowieka, zobacz nasz końcowy raport [Needfinding and UX](https://delta.chat/en/2019-07-19-uxreport).
Drugi grant 2019/2020 (~300 000 $) jest nadal w toku i pomaga nam wydać wersje Delta/iOS, przekonwertować naszą podstawową bibliotekę na Rust i zapewnić nowe funkcje dla wszystkich platform. Zobacz bieżące [wpisy na blogu](https://delta.chat/en/blog), aby uzyskać więcej informacji.

- Fundacja [NLnet](https://nlnet.nl/) przyznała 46 000 EUR na ukończenie powiązań Rust/Python i zainicjowanie ekosystemu Czat-botów.

- Wreszcie, ale zdecydowanie nie najmniej ważne, kilku ekspertów i entuzjastów pro-bono wniosło wkład i przyczyniło się do rozwoju Delta Chat bez otrzymywania pieniędzy lub tylko niewielkich kwot. Bez nich Delta Chat nie byłby tam, gdzie jest dzisiaj, nawet w pobliżu.

Wspomniane powyżej finansowanie pieniężne zostało zorganizowane przez merlinux GmbH we Freiburgu (Niemcy), a następnie przekazane do prawie tuzina darczyńców.

Finansowanie na rok 2020/2021 nie zostało jeszcze określone. Korzystamy z kilku możliwości, współpracując z różnymi organizacjami i partnerami. Rozważamy również zwrócenie się o darowizny. W rzeczywistości eksperymentalnie założyliśmy małe konto [darowizn Delta Chat / Liberapay](https://liberapay.com/delta.chat/), ale jeszcze tego nie opublikowaliśmy. Do tej pory przekazano również około 3-4 tys. $ kanałem darowizn paypal i bitcoin dla Bjoern'a (pierwotny autor Delta Chat).
