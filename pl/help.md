---
title: FAQ
lang: pl
render_toc: true
header: Często Zadawane Pytania
---


## Czym jest Delta Chat?

Delta Chat to niezawodna, zdecentralizowana i bezpieczna aplikacja do przesyłania wiadomości, dostępna na platformy mobilne i stacjonarne.

Delta Chat przypomina Whatsapp lub Telegram, ale możesz go również używać i traktować jako aplikację e-mail. Możesz zarejestrować się anonimowo na różnych [interoperacyjnych serwerach chatmail](https://delta.chat/chatmail), które są minimalnymi serwerami poczty e-mail zoptymalizowanymi pod kątem szybkich i bezpiecznych operacji. Możesz też skorzystać z klasycznych serwerów pocztowych i istniejącego konta e-mail, w którym to przypadku Delta Chat będzie pełnić funkcję aplikacji pocztowej. 

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Jak mogę znaleźć ludzi, z którymi mogę czatować? 

Aby bezpiecznie skonfigurować kontakt z innymi, [zeskanuj kod QR zaproszenia lub udostępnij link zaproszenia](#howtoe2ee). Jest to wymagane w przypadku korzystania z (domyślnego) profilu czatu opartego na poczcie chatmail, ponieważ serwery chatmail odrzucają niezaszyfrowane wiadomości wychodzące.

Jeśli utworzysz profil czatu z klasycznym adresem e-mail, możesz ręcznie utworzyć kontakt, jeśli znasz jego adres e-mail, a następnie napisać do niego wiadomość, nawet jeśli odbiorca nie korzysta z Delta Chat.


### Jakie są zalety Delta Chat w porównaniu z innymi komunikatorami?

Anonimowe profile czatów z szybkimi, bezpiecznymi i interoperacyjnymi [serwerami chatmail](https://delta.chat/chatmail), które oferują natychmiastowe powiadomienia push dla urządzeń iOS i Android.

- Wszechstronna obsługa [wielu profili](#multiple-accounts) i wielu urządzeń na wszystkich platformach.

- Interaktywne [aplikacje internetowe w czatach](https://webxdc.org/apps) do gier i współpracy.

- [Audytowne szyfrowanie end-to-end](#security-audits) zabezpieczające przed atakami sieciowymi i serwerowymi.

- Bezpłatne i otwartoźródłowe oprogramowanie zarówno po stronie aplikacji, jak i serwera. Stworzone w oparciu o [standardy e-mail i internetowe](https://github.com/deltachat/deltachat-core-rust/blob/master/standards.md), [aby uniknąć „kolejnego standardowego syndromu (xkcd 927)”](https://xkcd.com/927/).


### Co zrobić, jeśli oczekuję wiadomości od osoby, do której nie pisałem w przeszłości?

- Jeśli wiadomość przychodzi od nieznanego kontaktu, pojawia się jako **prośba**. Musisz zaakceptować prośbę, zanim będziesz mógł odpowiedzieć.
- Możesz również „usunąć” ją, jeśli nie chcesz na razie z nią rozmawiać. To *nie* usuwa wiadomości na serwerze, tylko na Twoim urządzeniu. Możesz więc nadal zajmować się tą wiadomością w innej aplikacji pocztowej.
- Jeśli usuniesz prośbę, przyszłe wiadomości od tego kontaktu będą nadal wyświetlane jako prośba o wiadomość, więc możesz zmienić zdanie. Jeśli naprawdę nie chcesz otrzymywać wiadomości od tej osoby, rozważ *zablokowanie* jej.


### Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące automatycznie otrzymują załączniki w razie potrzeby.

- Ze względu na wydajność obrazy są domyślnie optymalizowane i wysyłane w mniejszym rozmiarze, ale można je wysłać jako „plik”, aby zachować oryginał.


### Czym są profile? Jak mogę przełączać się między nimi? {#multiple-accounts}

Profil to **nazwa, zdjęcie** i dodatkowe informacje umożliwiające szyfrowanie wiadomości. Profil znajduje się wyłącznie na twoim urządzeniu (urządzeniach) i do przesyłania wiadomości wykorzystuje chatmail lub klasyczny serwer e-mail.

Podczas pierwszej instalacji Delta Chat tworzony jest pierwszy profil.

Później możesz dotknąć swojego zdjęcia profilowego w lewym górnym rogu, aby **Dodać profile** lub **Przełączyć profile**.

Możesz chcieć używać oddzielnych profili do działań związanych z polityką, rodziną lub pracą, lub np. dla dedykowanego „profilu spamowego”, za pomocą którego rejestrujesz się na stronach internetowych i platformach, które prędzej czy później generują niechciane wiadomości („spam”).

Możesz także dowiedzieć się, [jak używać tego samego profilu na wielu urządzeniach](#multiclient).


### Kto widzi moje zdjęcie profilowe?

- Możesz dodać zdjęcie profilowe w swoich ustawieniach. Jeśli napiszesz do swoich kontaktów lub dodasz je za pomocą kodu QR, automatycznie zobaczą je jako Twoje zdjęcie profilowe.

- Kontakty, które nie korzystają z Delta Chat nie widzą zdjęcia profilowego (jednak oczywiście mogą zainstalować Delta Chat :)

- Ze względów prywatności nikt nie widzi Twojego zdjęcia profilowego, dopóki nie napiszesz do niego wiadomości.

- Twoje zdjęcie profilowe nie jest wysyłane z każdą wiadomością, ale wystarczająco regularnie, aby kontakty ponownie otrzymały Twoje zdjęcie profilowe, nawet jeśli dodadzą nowe urządzenie.


### Czy w Delta Chat mogę ustawić Biografię/Podpis/Status/Motto? {#signature}

Tak, możesz to zrobić w **Ustawienia » Profil » Biografia**. Twoje kontakty korzystające z Delta Chat, zobaczą go, przeglądając twoje dane kontaktowe. Ponadto będzie on wyglądał jak klasyczny podpis w wiadomości e-mail.


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


### Jak działają znikające wiadomości? {#ephemeralmsgs}

Możesz włączyć „znikające wiadomości” w ustawieniach czatu, w prawym górnym rogu okna czatu, wybierając przedział czasu od 1 minuty do 5 tygodni.

Dopóki ustawienie nie zostanie ponownie wyłączone, aplikacja Delta Chat u każdego członka czatu zajmie się usuwaniem wiadomości po wybranym okresie. Przedział czasu rozpoczyna się w momencie, gdy odbiorca po raz pierwszy zobaczy wiadomość w Delta Chat. Wiadomości są usuwane zarówno na każdym koncie e-mail na serwerze, jak i w samej aplikacji.

Pamiętaj, że na znikających wiadomościach możesz polegać tylko wtedy, gdy ufasz swoim partnerom czatu; złośliwi partnerzy czatu mogą robić zdjęcia lub w inny sposób zapisywać, kopiować lub przesyłać dalej wiadomości przed usunięciem.

Poza tym, jeśli jeden z partnerów czatu odinstaluje Delta Chat, wiadomości nie zostaną usunięte z jego konta e-mail. Najprawdopodobniej nie będzie już można ich odszyfrować (o ile zostały najpierw zaszyfrowane).


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


## Natychmiastowe dostarczanie wiadomości i powiadomienia push {#instant-delivery}


### Co to są powiadomienia push? Jak mogę uzyskać natychmiastowe dostarczenie wiadomości?

Powiadomienia push są wysyłane przez „usługi push” Apple i Google do urządzenia użytkownika, dzięki czemu nieaktywna aplikacja Delta Chat może pobierać wiadomości w tle i w razie potrzeby wyświetlać powiadomienia na telefonie użytkownika.

Powiadomienia push działają na wszystkich włączonych serwerach [chatmail](https://delta.chat/chatmail)

- Urządzeń z iOS, poprzez integrację z usługami Apple Push.

- Urządzenia z Androidem, poprzez integrację z usługą Google FCM Push, w tym na urządzeniach korzystających z [microG](https://microg.org) zamiast autorskiego kodu Google w telefonie.

Od maja 2024 r. klasyczne serwery poczty e-mail nie obsługują powiadomień push dla użytkowników Delta Chat.


### Czy powiadomienia push są włączone na urządzeniach z iOS? Czy istnieje alternatywa?

Tak, Delta Chat automatycznie korzysta z powiadomień push dla profili [chatmail](https://delta.chat/chatmail)
. I nie, w telefonach Apple nie ma alternatywy umożliwiającej natychmiastowe dostarczanie wiadomości, ponieważ urządzenia Apple nie pozwalają Delta Chat na pobieranie danych w tle. Powiadomienia push są automatycznie aktywowane dla użytkowników iOS, ponieważ [system prywatności powiadomień Delta Chat](#privacy-notifications) nie udostępnia Apple danych, których jeszcze nie posiada.


### Czy powiadomienia Push są włączone/potrzebne na urządzeniach z Androidem? {#android-push}

Jeśli dostępna jest „Usługa Push”, Delta Chat włącza Powiadomienia Push w celu zapewnienia natychmiastowego dostarczania wiadomości dla wszystkich użytkowników chatmail. Jeśli zamiast serwerów [chatmail](https://delta.chat/chatmail) korzystasz z klasycznego dostawcy poczty e-mail, powiadomienia push nie są dostępne. 

W ustawieniach „Powiadomień” Delta Chat dla „Natychmiastowej dostawy” możesz zmienić następujące ustawienia wpływające na wszystkie profile czatu:

-  Użyj połączenia w tle: Jeśli nie korzystasz z usługi Push, możesz wyłączyć „optymalizację baterii” dla Delta Chat, umożliwiając mu pobieranie wiadomości w tle. Mogą jednak wystąpić opóźnienia od minut do godzin. Niektórzy dostawcy Androida nawet całkowicie ograniczają aplikacje (zobacz [dontkillmyapp.com](https://dontkillmyapp.com)), a Delta Chat może nie wyświetlać wiadomości przychodzących, dopóki ręcznie ponownie nie otworzysz aplikacji.
  
Wymuś połączenie w tle: Jest to opcja awaryjna, jeśli poprzednie opcje nie są dostępne lub nie zapewniają „natychmiastowej dostawy”. Włączenie tej opcji powoduje stałe powiadomienie na twoim telefonie, które czasami może zostać „minifikowane” w przypadku najnowszych telefonów z Androidem.

Obie opcje „Połączenia w tle” są energooszczędne i można je bezpiecznie wypróbować, jeśli wiadomości docierają do ciebie z dużym opóźnieniem.


### Jak prywatne są powiadomienia push na Delta Chat? {#privacy-notifications}

Obsługa powiadomień push w Delta Chat pozwala uniknąć wycieku prywatnych informacji. Nie powoduje wycieku wiadomości e-mail, adresu IP ani zawartości wiadomości (nawet niezaszyfrowanej) do żadnego systemu zaangażowanego w dostarczanie powiadomień push.

Oto jak aplikacje Delta Chat realizują dostarczanie powiadomień push:

- Aplikacja Delta Chat uzyskuje lokalnie „token urządzenia” i przechowuje go na serwerze [chatmail](https://delta.chat/chatmail).

- Kiedy serwer [chatmail](https://delta.chat/chatmail) odbierze wiadomość e-mail od użytkownika Delta Chat, przekazuje „token urządzenia” do centralnego serwera proxy powiadomień Delta Chat.

- Centralny serwer proxy powiadomień Delta Chat przekazuje „token urządzenia” do odpowiedniej usługi Push (Apple, Google itp.), nie znając nawet adresu IP ani adresu e-mail użytkowników Delta Chat.

- Centralna usługa Push (Apple, Google itp.) budzi aplikację Delta Chat na twoim urządzeniu, aby sprawdzić w tle nowe wiadomości. Nie zna chatmaila ani adresu e-mail urządzenia, na którym się budzi. Centralne usługi push Apple/Google nigdy nie widzą adresu e-mail (nadawcy ani odbiorcy), a także nigdy nie widzą treści wiadomości (również w formie zaszyfrowanej).

Od maja 2024 r. serwery chatmail znają „tokeny urządzenia”, ale planujemy szyfrować te informacje na serwerze proxy powiadomień, tak aby serwer chatmail nigdy nie poznał tokena urządzenia.

Centralny serwer proxy powiadomień Delta Chat [jest mały i w pełni zaimplementowany w Rust](https://github.com/deltachat/notifiers) i zapomina o tokenach urządzeń zaraz po ich przetworzeniu przez Apple/Google/itp, zwykle w ciągu kilku milisekund.

W wyniku tego ogólnego projektu ochrony prywatności nawet przejęcie serwera chatmail lub pełne przejęcie centralnego serwera proxy powiadomień Delta Chat nie spowodowałoby ujawnienia prywatnych informacji, których usługi Push jeszcze nie posiadają.


### Dlaczego Delta Chat integruje się ze scentralizowanymi, zastrzeżonymi usługami push Apple/Google?

Delta Chat to darmowy i otwartoźródłowy zdecentralizowany komunikator  z możliwością wyboru serwera, ale chcemy, aby użytkownicy mogli niezawodnie doświadczać „natychmiastowego dostarczania” wiadomości, tak jak w przypadku aplikacji Whatsapp, Signal lub Telegram, bez zadawania z góry pytań, które są bardziej odpowiednie dla doświadczonych użytkowników lub programistów.

Pamiętaj, że Delta Chat posiada [mały i chroniący prywatność system powiadomień push](#privacy-notifications), który zapewnia „natychmiastowe dostarczanie” wiadomości ze wszystkich serwerów chatmail, w tym potencjalnego, który [możesz skonfigurować samodzielnie bez naszej zgody](https://delta.chat/chatmail#selfhosted). Witamy w potędze interoperacyjnego i ogromnego systemu chatmail i e-mail :)


## Szyfrowanie i bezpieczeństwo

### Jakie standardy są stosowane do szyfrowania end-to-end?

[Autocrypt](https://autocrypt.org) służy do automatycznego ustanawiania szyfrowania end-to-end kontaktów i czatów grupowych. Autocrypt wykorzystuje ograniczony i [bezpieczny podzbiór standardu OpenPGP](#openpgp-secure). W pełni zaszyfrowane wiadomości są oznaczone kłódką <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>.

[Protokoły Secure-Join](https://securejoin.delta.chat/en/latest/new.html) służą do nawiązywania rozmów z gwarantowanym szyfrowaniem typu end-to-end, które chroni przed atakami sieciowymi i zagrożonymi serwerami. Czaty oznaczone zielonym znacznikiem wyboru <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/> gwarantują szyfrowanie end-to-end wiadomości.

### Skąd mogę wiedzieć, czy wiadomości są szyfrowane metodą e2e? {#whene2e}

Wszystkie całkowicie zaszyfrowane wiadomości są oznaczone kłódką:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

Pełne szyfrowanie jest gwarantowane, jeśli obok tytułu czatu znajduje się zielony znacznik wyboru:

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### Jak mogę uzyskać gwarancję kompleksowego szyfrowania i zielone znaczniki wyboru? {#howtoe2ee}

Jeśli masz drugi kanał komunikacji ze swoim partnerem na czacie, np. czat wideo lub inny komunikator, możesz wygenerować link zaproszenia.

Jeśli jesteście razem osobiście, możesz pokazać kod QR swojemu rozmówcy.

-  W przypadku **zaproszeń grupowych** dotknij tytułu czatu grupy, aby wyświetlić listę jej członków, i wybierz „Kod QR zaproszenia”.

-  Aby uzyskać **bezpośrednie zaproszenia na czat 1:1**, dotknij ikony kodu QR <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" /> na ekranie głównym aplikacji Delta Chat.

Pozwól swojemu partnerowi czatu zeskanować obraz QR za pomocą aplikacji Delta Chat lub dotknij „Kopiuj” lub „Udostępnij”, aby utworzyć link zaproszenia i udostępnić go swojemu partnerowi czatu.

Teraz poczekaj, aż między obydwoma urządzeniami [nastąpi wymiana wiadomości sieciowych Secure-Join](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol).

- Jeśli oba urządzenia są w trybie online, obie strony ostatecznie zobaczą czat (grupowy lub bezpośredni) z zielonym znacznikiem wyboru <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/> obok tytułu.

- Jeśli jedno z urządzeń jest w trybie offline, zielone znaczniki wyboru pojawią się później, dopiero gdy urządzenie zostanie ponownie połączone z Internetem i zostanie zrealizowany protokół sieciowy Secure-Join.

Gratulacje! Teraz będziecie automatycznie korzystać z gwarantowanego kompleksowego szyfrowania tego kontaktu i oboje będziecie mogli dodawać się nawzajem do grup oznaczonych zielonym znacznikiem wyboru <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/> , w ten sposób automatycznie rozpowszechniając gwarantowane kompleksowe szyfrowanie wśród swoich członków.


### Co oznacza zielony znacznik wyboru i „gwarantowane kompleksowe szyfrowanie”? {#e2eeguarantee}

Tytuły czatów z zielonymi znacznikami wyboru <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" /> oznaczają, że wszystkie wiadomości na czacie będą w pełni szyfrowane i nie będą mogły zostać odczytane ani zmodyfikowane przez zhakowane serwery poczty e-mail lub dostawców Internetu. Dołączanie do czatów grupowych oznaczonych zielonym znacznikiem bezpiecznie rozpowszechnia informacje o szyfrowaniu wszystkich osób (i zielone znaczniki wyboru) w sposób gwarantujący kompleksowe szyfrowanie w grupie i pomiędzy członkami.

Profile kontaktów z zielonymi znacznikami wyboru <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" /> oznaczają, że obecnie gwarantujemy, że wiadomości kontaktu będą szyfrowane metodą end-to-end. Każdy kontakt oznaczony zielonym znacznikiem albo wykonał z tobą bezpośrednie [skanowanie QR](#howtoe2ee), albo został zweryfikowany przez inny kontakt oznaczony zielonym znacznikiem. Weryfikacje odbywają się automatycznie podczas dodawania członków do grup. Ktokolwiek doda kontakt do grupy oznaczonej zielonym znacznikiem, staje się osobą weryfikującą dla tych członków, którzy jeszcze nie wiedzieli o dodanym kontakcie. W profilu kontaktu możesz wielokrotnie dotykać tekstu „Zweryfikowano przez…”, aż dojdziesz do osoby, z którą bezpośrednio wykonałeś [skanowanie QR](#howtoe2ee).

Pamiętaj, że w profilu kontaktu możesz widzieć i klikać osoby weryfikujące, ale w tytule profilu nie ma zielonego znacznika wyboru. Zwykle oznacza to, że kontakt [„wysłał wiadomość z innego urządzenia”](#nocryptanymore).

Aby uzyskać bardziej szczegółowe omówienie „gwarantowanego szyfrowania typu end-to-end”, zobacz [Protokoły Secure-Join](https://securejoin.delta.chat/en/latest/new.html), a w szczególności przeczytaj o „zweryfikowanych grupach”, technicznym określeniu tak zwanego tutaj „zielonego znacznika wyboru” lub „gwarantowanego szyfrowania end-to-end” czatów.


### Kontakt „wysłał wiadomość z innego urządzenia”, co mogę zrobić? {#nocryptanymore}

Twój czat z kontaktem utracił gwarantowane szyfrowanie typu end-to-end. Gdy zobaczysz to ostrzeżenie, zielony znacznik wyboru dla tego czatu i kontaktu został usunięty. **Jeśli zdziwi cię nagły spadek gwarantowanego szyfrowania end-to-end tego kontaktu, nie akceptuj ostrzeżenia!** Zamiast tego skontaktuj się ze swoim kontaktem za pośrednictwem drugiego kanału, takiego jak rozmowa wideo, inny komunikator lub rozmowa telefoniczna, aby dowiedzieć się, co się stało.

Jeśli twój kontakt rzeczywiście spowodował spadek gwarantowanego szyfrowania typu end-to-end, zapoznaj się z kolejnymi akapitami, aby poznać typowe przyczyny i sposoby ich łagodzenia. Niezależnie od tego, wszystkie inne czaty oznaczone zielonym znacznikiem są w pełni szyfrowane, nawet jeśli kontakt jest ich członkiem.

**Twój kontakt korzysta z Delta Chat na drugim urządzeniu (telefonie lub laptopie)**

Jeśli ma inne urządzenie z uruchomioną aplikacją Delta Chat, powinien usunąć konto z nowego urządzenia i dodać je [jako drugie urządzenie zgodnie z opisem tutaj](#multiclient). Gdy tylko skontaktuje się z tobą później, ostrzeżenie zniknie, a na obu urządzeniach twojego kontaktu zostanie ustanowione gwarantowane szyfrowanie.

**Twój kontakt ponownie zainstalował Delta Chat, używając swojego starego loginu do konta**
 
Jeśli ma [plik kopii zapasowej](#backup), powinien usunąć konto z nowego urządzenia i zamiast tego zaimportować plik kopii zapasowej, aby ponownie utworzyć konto. Gdy tylko skontaktuje się z tobą później, ostrzeżenie zniknie, a dla tego kontaktu zostanie przywrócone gwarantowane szyfrowanie.

Jeśli nie ma pliku kopii zapasowej, najlepiej wykonać [skanowanie QR](#howtoe2ee) ze swoim partnerem czatu, aby przywrócić gwarantowane szyfrowanie end-to-end.

**Twój kontakt wysłał wiadomość e-mail za pośrednictwem interfejsu poczty internetowej lub innej aplikacji e-mail i wkrótce ponownie zacznie korzystać z Delta Chat.**

Jeśli masz pewność, że kontakt czasami korzysta z poczty internetowej lub innej aplikacji pocztowej, która nie zapewnia szyfrowania end-to-end, możesz zaakceptować ostrzeżenie. Gdy tylko twój kontakt ponownie skorzysta z Delta Chat, gwarantowane szyfrowanie end-to-end zostanie automatycznie przywrócone.

**Twój kontakt całkowicie przestał korzystać z Delta Chat**

Czasami utrzymanie kontaktu jest ważniejsze niż szyfrowanie end-to-end. [„Szyfrowanie warstwy transportowej” (TLS)](#tls) może w dalszym ciągu w znaczący sposób chronić poufność wiadomości przesyłanych między urządzeniem a serwerem poczty e-mail. Jednak bez kompleksowego szyfrowania Ty i Twój kontakt ufacie swojemu serwerowi poczty e-mail, że nie będzie czytać ani manipulować waszymi wiadomościami i nie będzie przekazywać ich osobom trzecim.

W każdym razie nie możesz zrobić nic innego, jak zaakceptować ostrzeżenie. Usuń także kontakt z aktywnej grupy oznaczonej zielonym znacznikiem, którą znajdziesz w sekcji „Współdzielone czaty” w profilu kontaktu. Dzięki temu twój kontakt nie otrzyma „nieczytelnych” wiadomości.

Jeśli kontakt usunął Delta Chat z powodu błędów lub niepożądanego zachowania, rozważ opublikowanie postu na naszym [forum pomocy](https://support.delta.chat), aby pomóc nam zidentyfikować i rozwiązać typowe problemy. Dzięki!


### Czy załączniki (zdjęcia, pliki, pliki audio itp.) są szyfrowane metodą end-to-end?

Tak.

Kiedy mówimy o „wiadomości zaszyfrowanej metodą end-to-end”, zawsze mamy na myśli, że zaszyfrowana jest cała wiadomość, łącznie ze wszystkimi załącznikami i metadanymi załączników, takimi jak nazwy plików.


### Czy OpenPGP jest bezpieczny? {#openpgp-secure}

Tak, Delta Chat korzysta z bezpiecznego podzbioru OpenPGP i wyświetla wskaźnik bezpieczeństwa kłódki na wiadomości tylko wtedy, gdy cała wiadomość jest prawidłowo zaszyfrowana i podpisana. Na przykład „Odłączone podpisy” nie są traktowane jako bezpieczne.

OpenPGP samo w sobie nie jest niebezpieczne. Większość publicznie omawianych problemów związanych z bezpieczeństwem OpenPGP tak naprawdę wynika ze złej użyteczności lub złej implementacji narzędzi, lub aplikacji (lub obu). Szczególnie ważne jest rozróżnienie pomiędzy OpenPGP, standardem szyfrowania IETF, a GnuPG (GPG), narzędziem wiersza poleceń implementującym OpenPGP. Wiele publicznych komentarzy krytycznych na temat OpenPGP tak naprawdę omawia GnuPG, którego Delta Chat nigdy nie używał. Delta Chat korzysta raczej z implementacji OpenPGP Rust [rPGP](https://github.com/rpgp/rpgp), dostępnej jako [niezależny pakiet „pgp”](https://crates.io/crates/pgp) i poddanej [audytowi bezpieczeństwa w 2019 roku](https://delta.chat/assets/blog/2019-first-security-review.pdf).

Naszym celem, wraz z innymi wdrażającymi OpenPGP, jest dalsza poprawa parametrów bezpieczeństwa poprzez wdrożenie [nowego IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/), który na szczęście został przyjęty latem 2023 roku.


### Czy rozważałeś użycie alternatyw dla OpenPGP do szyfrowania typu end-to-end? {#openpgp-alternatives}

Tak, podążamy za rozwiązaniami takimi jak [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security) lub [Saltpack](https://saltpack.org/), ale przyjęcie ich oznaczałoby zerwanie kompleksowej interoperacyjności szyfrowania ze wszystkimi innymi aplikacjami e-mail, które zazwyczaj obsługują szyfrowanie OpenPGP. Nie byłaby to więc łatwa decyzja i użytkownicy muszą wprowadzić wymierne ulepszenia.

Delta Chat przyjmuje holistyczne podejście do „użytecznego bezpieczeństwa” i współpracuje z szeroką gamą grup aktywistów, a także renomowanymi badaczami, takimi jak [TeamUSEC](https://teamusec.de), aby poprawić rzeczywiste wyniki użytkowników przed zagrożeniami bezpieczeństwa. Protokół przewodowy i standard ustanawiania szyfrowania end-to-end to tylko jedna część „wyników użytkownika”. Zobacz także nasze odpowiedzi na pytania dotyczące [przejęcia urządzenia](#device-seizure) i [metadanych wiadomości](#message-metadata).


### Czy Delta Chat jest podatny na EFAIL?

Nie, [Delta Chat nigdy nie był podatny na atak EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail), ponieważ jego implementacja OpenPGP [rPGP](https://github.com/rpgp/rpgp) używa kodu wykrywania modyfikacji podczas szyfrowania wiadomości i zwraca [błąd](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError), jeśli kod wykrywania modyfikacji jest nieprawidłowy.

Delta Chat również nigdy nie był podatny na atak EFAIL „Direct Exfiltration”, ponieważ odszyfrowuje jedynie wiadomości `multipart/encrypted`, które zawierają dokładnie jedną zaszyfrowaną i podpisaną część, zgodnie ze specyfikacją Autocrypt Level 1.


### Czy wiadomość jest udostępniana w postaci zwykłego tekstu, jeśli szyfrowanie end-to-end nie jest dostępne? {#tls}

Nawet jeśli nie ma gwarancji, że twoje wiadomości będą zaszyfrowane metodą end-to-end, nadal są chronione przed dostawcami Internetu, takimi jak operatorzy komórkowi lub telewizji kablowej. Jednakże dostawcy poczty e-mail zarówno twoi, jak i twojego odbiorcy mogą czytać, analizować, a nawet modyfikować twoje wiadomości, w tym wszelkie załączniki, jeśli nie są one w pełni zaszyfrowane.

Delta Chat domyślnie korzysta ze ścisłego [szyfrowania TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security), które zabezpiecza połączenia pomiędzy twoim urządzeniem a dostawcą poczty e-mail. Cała obsługa TLS Delta Chat została poddana niezależnemu [audytowi bezpieczeństwa](#security-audits). Co więcej, połączenie między tobą a dostawcą poczty e-mail odbiorcy będzie zazwyczaj również szyfrowane. Jeśli zaangażowane serwery poczty e-mail obsługują [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461), pomiędzy dostawcami poczty e-mail będzie egzekwowane szyfrowanie transportu. W takim przypadku komunikacja Delta Chat nigdy nie będzie udostępniana w Internecie w postaci zwykłego tekstu, nawet jeśli wiadomość nie została zaszyfrowana metodą end-to-end.

Pamiętaj, że [utrzymywanie gwarantowanego szyfrowania typu end-to-end](#howtoe2ee) oprócz szyfrowania TLS zapewnia wszechstronne bezpieczeństwo między urządzeniami twoimi i odbiorców. Nawet twój dostawca poczty e-mail lub Internetu nie będzie w stanie przeczytać ani zmodyfikować twoich wiadomości.


### W jaki sposób Delta Chat chroni metadane w wiadomościach? {#message-metadata}

Delta Chat chroni większość metadanych wiadomości, umieszczając następujące informacje w całkowicie zaszyfrowanej części wiadomości:

- Wiersz tematu
- Awatar i nazwa grupy
- Żądania MDN (potwierdzenie odczytu) (`Chat-Disposition-Notification-To`)
- Licznik czasu znikania wiadomości (`Ephemeral-Timer`)
- `Chat-Group-Member-Removed`, `Chat-Group-Member-Added`
- Nagłówek `Secure-Join` zawierający polecenia bezpiecznego łączenia
- Powiadomienie o włączeniu przesyłania strumieniowego lokalizacji
- Adres URL pokoju WebRTC

Serwery poczty e-mail nie mają dostępu do chronionych metadanych, ale widzą datę wiadomości, jej rozmiar oraz, co ważniejsze, adresy nadawcy i odbiorcy. Serwery poczty e-mail potrzebują adresów odbiorców, aby kierować i dostarczać wiadomości do urządzeń odbiorców.


### Jak chronić metadane i kontakty w przypadku przejęcia urządzenia? {#device-seizure}

Zarówno w celu ochrony przed serwerami poczty e-mail gromadzącymi metadane, jak i przed zagrożeniem przejęcia urządzenia, zalecamy użycie zoptymalizowanej [instancji serwera poczty e-mail](https://delta.chat/pl/serverguide) Delta Chat w celu tworzenia pseudonimowych kont tymczasowych poprzez skanowanie kodów QR. Pamiętaj, że aplikacje Delta Chat na wszystkich platformach obsługują wiele kont, dzięki czemu możesz z łatwością korzystać z kont „1-tygodniowych” lub „1-miesięcznych” związanych z konkretnymi działaniami obok konta „głównego”, wiedząc, że wszystkie tymczasowe dane konta wraz ze wszystkimi metadanymi zostaną usunięte. Co więcej, jeśli urządzenie zostanie przejęte, nie będzie można łatwo zidentyfikować kontaktów korzystających z tymczasowych kont e-mail, w porównaniu z komunikatorami, które ujawniają numery telefonów w grupach czatów, które z kolei często są powiązane z tożsamością prawną.


### Jak mogę sprawdzić informacje o szyfrowaniu?

Możesz sprawdzić stan szyfrowania end-to-end ręcznie w oknie dialogowym „Szyfrowanie” (profil użytkownika w systemie Android/iOS lub kliknij prawym przyciskiem myszy element listy czatu użytkownika na komputerze). Delta Chat pokazuje tam dwa odciski palców. Jeśli te same odciski palców pojawią się u ciebie i urządzeniu twojego kontaktu, połączenie jest bezpieczne.


### Jak mogę sprawdzić stan szyfrowania wiadomości?

Mała **kłódka** w dymku wiadomości oznacza, że wiadomość od danego nadawcy została prawidłowo zaszyfrowana. Jeśli **nie ma kłódki**, wiadomość nie została prawidłowo zaszyfrowana metodą end-to-end, najprawdopodobniej dlatego, że nadawca korzysta z aplikacji lub interfejsu poczty internetowej bez obsługi szyfrowania typu end-to-end.


### Dlaczego widzę niezaszyfrowane wiadomości?

Jeśli kontakt korzysta z aplikacji e-mail bez Autocrypt, wszystkie wiadomości od tego kontaktu (w czacie grupowym lub 1:1) nie będą w pełni szyfrowane, w związku z czym nie będą wyświetlane z „kłódką” przy wiadomościach. Pamiętaj, że nawet jeśli twoje kontakty korzystają z Delta Chat na swoim koncie, mogą również używać na tym koncie aplikacji e-mail bez Autocrypt, co może powodować sporadyczne wysyłanie niezaszyfrowanych wiadomości. Odpowiadanie niezaszyfrowanych wiadomości na niezaszyfrowane wiadomości jest wymagane przez funkcję Autocrypt, aby zapobiec nieczytelnym wiadomościom po stronie twoich kontaktów i ich aplikacji e-mail bez Autocrypt.

### Jak mogę uzyskać zaszyfrowany ened-to-end czat z kontaktem Delta Chat, który czasami korzysta z poczty internetowej lub innej aplikacji e-mail bez Autocrypt?

Jeśli potrzebujesz bezpiecznie, kompleksowo zaszyfrowanego czatu z kontaktem, który korzysta ze swojego konta zarówno w Delta Chat, jak i w aplikacjach bez Autocrypt (np. poczta internetowa), najlepiej skonfigurować z nim gwarantowane szyfrowanie typu end-to-end, a następnie utworzyć [gwarantowany zaszyfrowany end-to-end](#howtoe2ee) czat grupowy z wami dwoma jako członkami. W tym czacie grupowym wszystkie wiadomości będą w pełni szyfrowane, nawet jeśli bezpośredni czat między wami zawiera ostrzeżenie [„…wysłano wiadomość z innego urządzenia”](#nocryptanymore).


### Jak mogę zapewnić kompleksowe szyfrowanie i usuwanie wiadomości?

Najlepszym sposobem, aby mieć pewność, że każda wiadomość jest kompleksowo zaszyfrowana, a metadane usunięte tak szybko, jak to możliwe, jest [korzystanie z czatów z gwarantowanym szyfrowaniem end-to-end](#howtoe2ee) i włączonymi [znikającymi wiadomościami](#ephemeralmsgs).

Gwarantowane szyfrowane metodą end-to-end czaty chronią przed atakami [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), a włączenie znikających wiadomości powoduje usunięcie wiadomości z serwera po upływie czasu skonfigurowanego przez użytkownika.

Jeśli nie potrzebujesz dłuższej kopii wiadomości na serwerze, możesz także włączyć opcję [„automatycznie usuń wiadomości z serwera”](#delold).


### Czy Delta Chat obsługuje funkcję Perfect Forward Secrecy? {#pfs}

Nie, Delta Chat nie obsługuje funkcji Perfect Forward Secrecy (PFS). Oznacza to, że jeśli twój prywatny klucz deszyfrujący Delta Chat wycieknie i ktoś zdobędzie twoje wcześniejsze wiadomości w trakcie przesyłania, będzie mógł je odszyfrować i odczytać przy użyciu ujawnionego klucza deszyfrowania.

Należy jednak pamiętać, że jeśli ktoś zdobędzie twoje klucze deszyfrujące, zazwyczaj będzie mógł również uzyskać twoje wiadomości, niezależnie od tego, czy obowiązuje zasada Perfect Forward Secrecy, czy nie. Typową sytuacją w świecie rzeczywistym w przypadku wycieku kluczy deszyfrujących jest przejęcie urządzenia, które omawiamy w naszej odpowiedzi na temat [przejęcia metadanych i urządzenia](#device-seizure).

Możliwe, że Delta Chat ewoluuje, aby wspierać Perfect Forward Secrecy, ponieważ OpenPGP to tylko kontener na zaszyfrowane wiadomości, ale zarządzanie kluczami szyfrowania (a tym samym rotacja kluczy lub „zapadanie kluczy”) mogłoby być zorganizowane w elastyczny sposób. Zobacz [prototyp PFS firmy Seqouia](https://gitlab.com/sequoia-pgp/openpgp-dr), aby zapoznać się z istniejącymi eksperymentami w społeczności implementatorów OpenPGP.


### Czy szyfrowanie end-to-end Delta Chat jest tak samo bezpieczne jak Signal? 

To zależy od tego, co jest dla ciebie ważne. Delta Chat [nie obsługuje PFS](#pfs) tak jak Signal, ale zapewnia [gwarantowane szyfrowane end-to-end czatów](#e2eeguarantee), które jest zabezpieczeniem przed zaatakowanymi serwerami lub uszkodzonymi sieciami. Signal i większość innych komunikatorów obsługujących PFS nie zapewniają praktycznego schematu ochrony czatów grupowych przed atakami sieciowymi, które są prawdopodobnie bardziej niepokojące niż potencjalny atakujący, który przejmuje twój telefon i prywatne ustawienia szyfrowania i w ten sposób nie twoje wiadomości i mimo to ma pełny zapis wszystkich poprzednio zaszyfrowanych wiadomości.

W każdym razie szyfrowanie end-to-end Delta Chat wykorzystuje [bezpieczny podzbiór OpenPGP](#openpgp-secure), który został poddany [niezależnemu audytowi bezpieczeństwa](../assets/blog/2019-first-security-review.pdf).

### Czy mogę ponownie wykorzystać mój istniejący klucz prywatny?

Tak.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatywnie możesz zaimportować klucz ręcznie w „Ustawienia » Zaawansowane » Importuj tajne klucze”. Uwaga: Upewnij się, że klucz nie jest chroniony hasłem lub wcześniej usuń hasło.

Jeśli nie masz klucza lub nawet nie wiesz, że go potrzebujesz  nie przejmuj się: Delta Chat generuje go w razie potrzeby, nie trzeba naciskać przycisku, aby to zrobić. 

### Nie mogę zaimportować istniejącego klucza PGP do Delta Chat.

Jest wielce prawdopodobne, że problemem jest klucz, który jest zaszyfrowany i/lub używa hasła. Takie klucze nie są obsługiwane przez Delta Chat. Usuń szyfrowanie i hasło i spróbować ponownie zaimportować klucz.

Innym częstym błędem jest nieprawidłowe zakończenie pliku.
Użyj opancerzonego formatu ASCII i końcówki pliku `.asc`.

Rozsądny format, Delta Chat obsługuje popularne formaty kluczy prywatnych OpenPGP, jednak jest mało prawdopodobne, że będziemy obsługiwać 100% wszystkich kluczy prywatnych z dowolnych źródeł. To również nie jest głównym celem Delta Chat (w rzeczywistości, znaczna większość użytkowników Delta Chat nie będzie miała żadnego klucza przed rozpoczęciem korzystania z Delta). Jednak staramy się wspierać klucze prywatne z innych źródeł tak dobrze jak to tylko możliwe.

Usunięcie hasła z klucza prywatnego będzie się różnić w zależności od 
oprogramowania używanego do zarządzania kluczami PGP. Za pomocą programu Enigmail można ustawić 
hasło na pustą wartość w oknie zarządzania kluczami. Z GnuPG możesz ustawić je [z linii poleceń](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429). 
W przypadku innych programów można znaleźć rozwiązanie online.

### Czy Delta Chat był niezależnie kontrolowany pod kątem luk w zabezpieczeniach? {#security-audits}

Projekt Delta Chat przeszedł cztery niezależne audyty bezpieczeństwa i jedną niezależną analizę bezpieczeństwa, od najnowszego do najstarszego:

- W marcu 2024 r. otrzymaliśmy dogłębną analizę bezpieczeństwa od grupy badawczej ds. kryptografii stosowanej w ETH Zuerich i zajęliśmy się wszystkimi poruszonymi kwestiami. Więcej szczegółowych informacji można znaleźć na naszym blogu na temat [szyfrowania typu End-to-End z gwarancją Hardening](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) oraz opublikowanym później artykule badawczym [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf).

- W kwietniu 2023 r. naprawiliśmy problemy z bezpieczeństwem i prywatnością w funkcji „aplikacje internetowe udostępniane na czacie”, związane z awariami piaskownicy, szczególnie w przypadku Chromium. Następnie przeprowadziliśmy niezależny audyt bezpieczeństwa od Cure53 i wszystkie wykryte problemy zostały naprawione w aplikacji z serii 1.36 wydanej w kwietniu 2023 r. [Pełną historię bezpieczeństwa end-to-end w sieci można znaleźć tutaj](https://delta.chat/en/2023-05-22-webxdc-security).

- W marcu 2023 r. firma [Cure53](https://cure53.de) przeanalizowała zarówno szyfrowanie transportu połączeń sieciowych Delta Chat, jak i powtarzalną konfigurację serwera pocztowego zgodnie z [zaleceniami na tej stronie](serverguide). Możesz przeczytać więcej o audycie [na naszym blogu](https://delta.chat/en/2023-03-27-third-independent-security-audit) lub przeczytać pełny raport [tutaj](../assets/blog/MER-01-report.pdf).

- W 2020 r. firma [Include Security](https://includesecurity.com) przeanalizowała biblioteki Rust [core](https://github.com/deltachat/deltachat-core-rust/), [IMAP](https://github.com/async-email/async-imap), [SMTP](https://github.com/async-email/async-smtp) i [TLS](https://github.com/async-email/async-native-tls) Delta Chat. Nie znalazła żadnych problemów krytycznych ani poważnych. W raporcie zwrócono uwagę na kilka słabych punktów o średniej wadze – same w sobie nie stanowią zagrożenia dla użytkowników Delta Chat, ponieważ zależą od środowiska, w którym używany jest Delta Chat. Ze względu na użyteczność i kompatybilność nie możemy złagodzić wszystkich z nich i zdecydowaliśmy się przedstawić zalecenia dotyczące bezpieczeństwa zagrożonym użytkownikom. Pełny raport można przeczytać [tutaj](../assets/blog/2020-second-security-review.pdf).

- W 2019 r. firma [Include Security](https://includesecurity.com) przeanalizowała biblioteki [PGP](https://github.com/rpgp/rpgp) i [RSA](https://github.com/RustCrypto/RSA) Delta Chat. Nie znaleziono żadnych krytycznych problemów, ale dwa poważne problemy, które później naprawiliśmy. Ujawniła również jeden problem o średniej wadze i kilka mniej poważnych, ale nie było możliwości wykorzystania tych luk w implementacji Delta Chat. Niektóre z nich jednak naprawiliśmy od czasu zakończenia kontroli. Pełny raport można przeczytać [tutaj](../assets/blog/2019-first-security-review.pdf).



## Multi-klient {#multiclient}

### Czy mogę korzystać z Delta Chat na wielu urządzeniach w tym samym czasie?

Tak. Delta Chat 1.36 comes with a new, experimental function for using the same profile on different devices:

- Upewnij się, że oba urządzenia są połączone z tego samego Wi-Fi lub sieci

- Na pierwszym urządzeniu przejdź do **Ustawienia → Dodaj kolejne urządzenie**, w razie potrzeby odblokuj ekran i poczekaj chwilę, aż pojawi się kod QR

- Na drugim urządzeniu [zainstaluj Delta Chat](https://get.delta.chat)

- Na drugim urządzeniu uruchom Delta Chat, wybierz **Dodaj jako kolejne urządzenie** i zeskanuj kod QR z pierwszego urządzenia

Przenoszenie powinno rozpocząć się po kilku sekundach, a podczas przenoszenia oba urządzenia będą pokazywać **postęp**. Poczekaj, aż zakończy się na obu urządzeniach.

W przeciwieństwie do wielu innych komunikatorów, po udanym przenoszeniu oba **urządzenia są całkowicie niezależne**. Jedno urządzenie nie jest potrzebne do działania drugiego.


### Rozwiązywanie problemów

- Sprawdź dokładnie, czy oba urządzenia są w tym **samym Wi-Fi lub tej samej sieci**

- Na **Windowsie**, przejdź do **Panel sterowania / Sieć i internet** i upewnij się, że **Sieć prywatna** jest wybrana jako "Typ profilu sieci"
  (po przeniesieniu możesz wrócić do pierwotnej wartości)

- Twój system może mieć „zaporę ogniową”, o której wiadomo, że powoduje problemy (szczególnie w systemie Windows).
**Wyłącz zaporę** dla Delta Chat po obu stronach i spróbuj ponownie

- **Sieci dla gości** mogą nie pozwalać urządzeniom na komunikację między sobą. Jeśli to możliwe, korzystaj z sieci innej niż gość.

- Upewnij się, że na urządzeniu docelowym jest **wystarczająca ilość miejsca**

- Jeśli przenoszenie się rozpoczęło, upewnij się, że urządzenia **pozostają aktywne** i nie zasypiają. Nie wychodź z Delta Chat. (dokładamy wszelkich starań, aby aplikacja działała w tle, ale [systemy mają tendencję do ubijania aplikacji](https://dontkillmyapp.com), niestety)

- Delta Chat jest już zalogowany na urządzeniu docelowym? Możesz używać wielu kont na urządzeniu, po prostu [dodaj kolejne konto](#multiple-accounts)

- Jeśli nadal masz problemy lub **nie możesz zeskanować kodu QR**, wypróbuj **ręczne przenoszenie** opisane poniżej


### Ręczny transfer {#backup}

Ta metoda jest zalecana tylko wtedy, gdy opisana powyżej opcja „Dodaj kolejne urządzenie” nie działa.

- Na starym urządzeniu przejdź do „Ustawienia » Czaty i media » Eksport kopii zapasowej”. Wprowadź swój PIN odblokowania ekranu, wzór lub hasło. Następnie możesz nacisnąć „Utwórz kopię”. Spowoduje to zapisanie pliku kopii zapasowej na urządzeniu. Teraz musisz jakoś przenieść go na inne urządzenie.
- Na nowym urządzeniu, na ekranie logowania, zamiast logować się na swoje konto e-mail, wybierz „Przywróć z kopii zapasowej”. Po zaimportowaniu Twoje rozmowy, klucze szyfrujące i multimedia powinny zostać skopiowane na nowe urządzenie.
  - **Jeśli korzystasz z iOS** i napotykasz trudności, może [ten poradnik](https://support.delta.chat/t/import-backup-to-ios/1628) Ci pomoże.
- Jesteś teraz zsynchronizowany i możesz używać obu urządzeń do wysyłania i odbierania wiadomości zaszyfrowanych end-to-end w komunikacji ze swoimi partnerami.

### Czy są jakieś plany wprowadzenia klienta Web Delta Chat?

- Nie ma bezpośrednich planów, ale wstępne przemyślenia.
- Istnieją 2-3 możliwości wprowadzenia klienta Web Delta Chat, ale wszystkie wymagają znaczącej pracy. Na razie skupiamy się na udostępnianiu stabilnych wersji we wszystkich sklepach z aplikacjami (repozytoria Google Play/iOS/Windows/macOS/Linux) jako aplikacji natywnych.
- Jeśli potrzebujesz klienta Web, ponieważ nie możesz instalować oprogramowania na komputerze, na którym pracujesz, możesz użyć przenośnego klienta Windows Desktop lub AppImage dla Linuxa. Możesz je znaleźć na [get.delta.chat](https://get.delta.chat).


## Aplikacje webxdc {#webxdc}

W Delta Chat możesz udostępniać [aplikacje webxdc](https://webxdc.org) i załączniki z rozszerzeniem pliku .xdc. Mogą robić bardzo różne rzeczy i uczynić Delta Chat naprawdę rozszerzalnym komunikatorem.


### Jak prywatne są aplikacje webxdc?

- Aplikacje webxdc nie mogą wysyłać danych do Internetu ani niczego pobierać.
- Aplikacja webxdc może wymieniać dane wyłącznie w ramach czatu Delta Chat, a ich kopie znajdują się na urządzeniach twoich partnerów czatu. Poza tym jest całkowicie odizolowana od Internetu.
- Prywatność, jaką oferuje aplikacja webxdc, to prywatność twojego czatu – jeśli ufasz osobom, z którymi rozmawiasz, możesz ufać także aplikacji webxdc.
- Oznacza to również: otwieranie aplikacji webxdc na czatach, w przypadku których nie ufa się członkom, może stanowić ryzyko dla prywatności – tak jak załączniki do wiadomości e-mail, gdzie otwiera się tylko załączniki od nadawców, którym ufasz, a nie od spamerów.


### Gdzie mogę zdobyć aplikacje webxdc?

- Ogólnie rzecz biorąc, każdy może udostępniać sobie aplikacje webxdc bez ograniczeń.
- Możesz [wysłać „hi” na adres xstore@testrun.org](https://delta.chat/en/2023-08-11-xstore), aby zobaczyć eksperymentalny sklep z aplikacjami webxdc. Wszystkie aplikacje są otwarto źródłowe i są bezpłatne.
- Wiele osób pisze własne, aplikacje webxdc i publikuje je na [forum Delta Chat](https://support.delta.chat/c/webxdc/20).


### Jak mogę tworzyć własne aplikacje webxdc?

- Aplikacje webxdc to po prostu pliki ZIP zawierające kod html, css i javascript.
- Aby rozpocząć, możesz rozszerzyć [przykładową aplikację Hello World](https://github.com/webxdc/hello).
- Wszystko, co musisz wiedzieć, jest napisane w [dokumentacji](https://docs.webxdc.org/).
- Jeśli masz pytania, możesz zadać je innym osobom z doświadczeniem na [forum Delta Chat](https://support.delta.chat/c/webxdc/20).


## Funkcje eksperymentalne

Jesteśmy bardzo wdzięczni za opinie na temat tych funkcji — chcesz podzielić się swoimi pomysłami? Dołącz do [forum](https://support.delta.chat), aby wnieść swój wkład. Możesz wygodnie zalogować się za pośrednictwem Delta Chat i skanowaniu kodu QR, co jest kolejnym dość stabilnym eksperymentem, który przeprowadzamy na boku (sic!).

### Jak mogę korzystać z połączeń audio/wideo z Delta Chat?

- Aby włączyć połączenia audio/wideo, przejdź do sekcji „Funkcje eksperymentalne” w ustawieniach zaawansowanych i wybierz „Instancja czatu wideo”.
- Kiedy zapraszasz innych do czatu wideo, jest on od razu otwierany w Twojej przeglądarce/aplikacji. Inne osoby otrzymują e-mail z linkiem do twojego czatu wideo. W ten sposób jest to kompatybilne również wtedy, gdy partnerzy czatu nie używają Delta Chat.
- Zwróć uwagę, że po drugiej stronie nie ma dzwonka, a Twoim rozmówcom nie zostanie przerwana praca przez zaproszenie do czatu wideo.
- Możesz użyć dowolnej usługi czatu wideo, która pozwala na dołączenie przez link. Wystarczy dodać link w ustawieniach.
-  Na przykład, aby użyć flagowej instancji Jitsi Meet, możesz wpisać https://meet.jit.si/$ROOM. Zmienna $ROOM będzie wartością losową; w ten sposób będziesz miał nowy losowy pokój jitsi za każdym razem, gdy do kogoś zadzwonisz.


### Co to są Listy rozgłoszeniowe i jak mogę ich używać?

- Dzięki liście rozgłoszeniowej możesz wysłać wiadomość do wielu odbiorców jednocześnie; kiedy ci odpowiedzą, otrzymasz odpowiedź w bezpośrednim czacie 1: 1 z nimi. Odbiorcy nie widzą siebie nawzajem.
- Technicznie, jest to e-mail z wieloma odbiorcami w „ukrytej kopii”.
- Możesz włączyć tę funkcję w sekcji „Funkcje eksperymentalne” w ustawieniach zaawansowanych. Następnie możesz utworzyć listę rozgłoszeniową z okna dialogowego „Nowy czat”.
- Jeśli używasz więcej niż jednego urządzenia, listy rozgłoszeniowe nie są obecnie synchronizowane między nimi.
- Wiadomości wysyłane do list rozgłoszeniowych nie są szyfrowane. Szyfrowanie złamałoby anonimowość, ponieważ wtedy wszyscy odbiorcy wiedzieliby, kto jeszcze je otrzymał (wysyłanie indywidualnych wiadomości do wszystkich byłoby gorsze z powodu limitu prędkości i zużycia sieci).


### Jak mogę udostępnić swoją lokalizację moim rozmówcom?

- Możesz włączyć przesyłanie strumieniowe lokalizacji w sekcji „Funkcje eksperymentalne” w ustawieniach zaawansowanych.
- Teraz, jeśli chcesz udostępnić swoją lokalizację na czacie, przejdź do „załącz” i wybierz „Lokalizacja”. Możesz teraz ustawić przedział czasowy, w którym Twoja lokalizacja będzie przesyłana strumieniowo do rozmówców, od 5 minut do 6 godzin.
- Gdy twoja lokalizacja się zmienia, inni uczestnicy czatu mogą ją zobaczyć na mapie w czacie.
- Aby zobaczyć mapę i wyświetlić lokalizacje innych osób, musisz włączyć tę funkcję w ustawieniach zaawansowanych.
- Ta funkcja nie będzie udostępniać twojej lokalizacji nikomu poza partnerami czatu. Mapy są pobierane z [OpenStreetMap](https://openstreetmap.org).
- Na komputerze system operacyjny zwykle nie może określić twojej lokalizacji. Zamiast tego możesz kliknąć prawym przyciskiem myszy na mapie i opisać lokalizację, która jest wysyłana do czatu jako wiadomość, ale także pojawia się na mapie.


### Dlaczego mogę wybrać, aby widzieć tylko folder DeltaChat?

To jest ustawienie eksperymentalne dla niektórych osób, które eksperymentują z regułami po stronie serwera. Nie wszyscy dostawcy to obsługują, ale w przypadku niektórych możesz przenieść wszystkie wiadomości z nagłówkiem „Chat-Version” do folderu DeltaChat. Zwykle byłoby to zrobione przez aplikację Delta Chat.

Włączenie „Pobieraj tylko z folderu DeltaChat” ma sens, jeśli masz:

- włączoną regułę po stronie serwera, aby przenosić wszystkie wiadomości z nagłówkiem Chat-Version do folderu DeltaChat i,
- ustawioną opcję „Pokaż klasyczne e-maile” na „Nie, tylko czaty”.

W tym przypadku Delta Chat nie musi obserwować skrzynki odbiorczej, a wystarczy, że będzie obserwować tylko folder DeltaChat.


### Jak mogę zmienić moje konto na inny adres e-mail?

1. Zmień swój adres w „Ustawienia → Zaawansowane → Hasło i konto” i wprowadź hasło do swojego nowego konta (i jeśli to konieczne, ustawienia serwera). Otrzymasz informację o przeniesieniu na nowy adres. Dodatkowe powiadomienie pojawi się również na czacie „Komunikaty urządzenia”.

2. Jeśli to możliwe, pozwól, aby twój stary dostawca poczty e-mail przekazywał wszystkie wiadomości na twój nowy adres.

3. Poinformuj swoje kontakty, że zmieniłeś adres. Pisanie do gwarantowanych szyfrowaniem end-to-end czatów i grup sprawi, że automatycznie zauważą twoją przenosiny i będą kontynuować rozmowę z tobą, korzystając z twojego nowego adresu.

Pamiętaj, że Delta Chat nie będzie już pobierać wiadomości od twojego starego dostawcy poczty e-mail. Jeśli nie skonfigurowałeś swojego dostawcy poczty e-mail do przekazywania wiadomości (krok 2.), tylko te kontakty, do których wysłałeś wiadomość w gwarantowanym szyfrowaniem end-to-end czacie, wyślą wiadomości na twój nowy adres.

Aby dowiedzieć się więcej na ten temat, [przeczytaj nasz wpis na blogu na ten temat](https://delta.chat/en/2022-09-14-aeap).


## Różne

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
 - prośba o zignorowanie optymalizacji baterii: w celu osiągnięcia „natychmiastowego dostarczania wiadomości”


### Czy Delta Chat działa z _moim_ dostawcą poczty e-mail?

- Z dość dużym prawdopodobieństwem: Tak :)
  Jednak niektórzy dostawcy potrzebują specjalnych opcji, aby działać poprawnie, zobacz [Przegląd dostawców](https://providers.delta.chat)


### Chcę zarządzać własnym serwerem e-mail dla Delta Chat. Co polecacie?

- Większość serwerów pocztowych będzie działać dobrze. Ale to, co osobiście polecamy, to połączenie mailcow i mailadm, jak opisano [w tym poście na blogu](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- Instrukcję instalacji można znaleźć [na naszej stronie internetowej](serverguide).


### Dlaczego muszę wpisać moje hasło e-mail do Delta Chat? Czy to jest bezpieczne?

Podobnie jak w przypadku innych programów pocztowych, takich jak Thunderbird, K9-Mail lub Outlook, program potrzebuje hasła, aby można było go używać do wysyłania i odbierania e-maili. Oczywiście hasło jest przechowywane tylko na Twoim urządzeniu. Hasło jest przesyłane tylko do Twojego dostawcy poczty e-mail (po zalogowaniu), który i tak ma dostęp do Twojej poczty

Ponieważ Delta Chat jest Open Source, możesz sprawdzić [Kod źródłowy](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
jeśli chcesz sprawdzić, czy Twoje poświadczenia są przetwarzane w bezpieczny sposób. Cieszymy się z opinii, które sprawiają, że aplikacja jest bezpieczniejsza dla wszystkich naszych użytkowników. 


### Jakie wiadomości pojawiają się w Delta Chat?

Domyślnie Delta Chat pokazuje wszystkie e-maile.

Możesz to zmienić w „Ustawienia → Zaawansowane → Pokaż klasyczne e-maile”. Masz następujące opcje:

- „Nie, tylko czaty”: Wyświetlane są tylko wiadomości wysłane przez innych użytkowników Delta Chat i odpowiedzi na Twoje wiadomości Delta Chat. Ma to największy sens, jeśli używasz tego samego konta e-mail również do wysyłania zwykłych wiadomości e-mail. To jest ustawienie domyślne.
- „Wszystkie”: Delta Chat pokazuje wszystkie e-maile, które są wysyłane na Twój adres e-mail. Ma to sens, jeśli chcesz używać Delta Chat do wszystkich swoich e-maili, więc żadna wiadomość nie zostanie utracona. To jest ustawienie domyślne.
- „Dla zaakceptowanych kontaktów”: Delta Chat pokazuje wszystkie e-maile od kontaktów, z którymi już prowadzisz czat, ale nowe czaty pojawiają się tylko dla wiadomości Delta Chat. Pomaga to zdecydować indywidualnie dla każdego przypadku, czy chcesz prowadzić rozmowę w Delta Chat, czy w „normalnej” aplikacji e-mail.


### Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

Tak, przychodzące wiadomości HTML otrzymują przycisk „Pokaż całą wiadomość”. Wychodzące wiadomości zawsze zawierają zwykły tekst.


### Czy w Delta Chat mogę ustawić temat wiadomości e-mail?

Delta Chat automatycznie ustawia (i [szyfruje](#message-metadata)!) klasyczny temat wiadomości e-mail na nazwę grupy lub nazwę nadawcy.

Jeśli więc chcesz samodzielnie ustawić temat, na przykład w przypadku oficjalnego e-maila do kontaktu biznesowego, możesz utworzyć grupę składającą się tylko z ciebie i odbiorców. Ustaw tytuł czatu na żądany temat, a następnie wyślij swój e-mail jako pierwszą wiadomość. Jeśli odbiorcy nie korzystają z Delta Chat, będzie to dla nich wyglądać jak zwykły, formalny e-mail. Jeśli ustawisz [tekst podpisu](#signature), otrzymasz dodatkowe punkty profesjonalizmu.


### Do czego służy ustawienie „Wyślij kopię do siebie”?

Wysłanie kopii wiadomości do siebie zapewnia otrzymywanie własnych wiadomości na wszystkich urządzeniach. Jeśli masz wiele urządzeń i jej nie włączysz, zobaczysz tylko wiadomości od innych osób oraz wiadomości, które wysyłasz z bieżącego urządzenia.

Kopia jest wysyłana do skrzynki odbiorczej, a następnie przenoszona do folderu DeltaChat; nie jest umieszczana w folderze „Wysłane”. Delta Chat nigdy nie przesyła niczego do folderu Wysłane, ponieważ oznaczałoby to dwukrotne przesłanie wiadomości (raz przez SMTP i raz przez IMAP do folderu Wysłane).

Domyślne ustawienie „Wyślij kopię do siebie” jest „włączone”.


### Po co mam wybrać opcję oglądania folderu „Wysłane”?

Jedynym powodem, dla którego ktoś chce oglądać folder Wysłane, jest to, że używa innego programu pocztowego (takiego jak Thunderbird) razem z aplikacją Delta Chat i chce, aby jego program pocztowy „uczestniczył” w rozmowach na czacie.

Jednak zalecamy używanie klienta Delta Chat Desktop; możesz go pobrać z [get.delta.chat](https://get.delta.chat). Opcja oglądania folderu „Wysłane” może w przyszłości zniknąć. Została wprowadzona w czasie, gdy na żadnej platformie nie był dostępny klient Delta Chat Desktop.


### Dlaczego mogę nie widzieć folderu DeltaChat?

Niektórzy używają Delta Chat jako zwykłego klienta poczty e-mail i chcą używać folderu Skrzynka odbiorcza dla swojej poczty zamiast folderu DeltaChat. Jeśli wyłączysz opcję „Oglądaj folder DeltaChat”, powinieneś również wyłączyć opcję „Automatyczne przenoszenie do folderu DeltaChat”. W przeciwnym razie usuwanie wiadomości lub konfiguracja wielu urządzeń może nie działać poprawnie.


### Czy Delta Chat jest kompatybilny z Protonmail / Tutanota / Criptext?

- I tak i nie.
- Nie, nie możesz używać swojego konta Protonmail, Tutanota lub Criptext z Delta Chat; nie oferują one odbierania poczty przez IMAP.
- W każdym przypadku możesz użyć Delta Chat do wysyłania wiadomości do osób, które używają Protonmail, Tutanota lub Criptext. Te wiadomości nie będą jednak szyfrowane metodą end-to-end. Szyfrowanie typu end-to-end, które oferują ci dostawcy, nie jest kompatybilne z [Autocrypt](https://autocrypt.org/) stosowanym standardowo w Delta Chat.
- Delta Chat może zaszyfrować metodą end-to-end za pośrednictwem dowolnego dostawcy poczty e-mail z dowolną [aplikacją e-mail z włączoną funkcją Autocrypt](https://autocrypt.org/dev-status.html).


### Jak mogę usunąć swoje konto? {#remove-account}

If you use a default chat profile
you can simply uninstall the app.
This will automatically trigger deletion of all associated account data on the chatmail server.
For more info, please refer to [nine.testrun.org account-deletion](https://nine.testrun.org/info.html#account-deletion) for the default onboarding server,
or the respective page from your chosen [3rd party chatmail server](chatmail).

If you have set up your chat profile on multiple devices
you need to remove it from all devices.

If you are using more than one account,
but don't want to get rid of all of them,
you can remove it in the account switcher menu (on android and iOS),
or in the sidebar with a right click (in the desktop client).

Accounts on [classic e-mail providers](https://providers.delta.chat)
will not be deleted automatically;
how you can delete your account depends on your e-mail provider.
We don't have any control over e-mail accounts at those providers,
so unfortunately we can't help you with that.

If you want to continue using a classic e-mail account with other apps,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.
Otherwise you might receive undecryptable messages from those group chats.


### Interesują mnie szczegóły techniczne. Możesz powiedzieć mi coś więcej?

- Zobacz [Standardy używane w Delta Chat]({% include standards-url %}).


### W jaki sposób finansowany jest rozwój Delta Chat?

Delta Chat nie otrzymuje żadnego kapitału wysokiego ryzyka, nie jest zadłużony i nie jest pod presją generowania ogromnych zysków lub sprzedawania reklamodawcom użytkowników i ich przyjaciół oraz rodziny (lub gorzej).
Raczej korzystamy z publicznych źródeł finansowania, jak dotąd pochodzących z UE i USA, aby wspomóc nasze wysiłki w inicjowaniu zdecentralizowanego i zróżnicowanego ekosystemu komunikatora, opartego na rozwoju społeczności Free i Open-Source.

Konkretnie, rozwój Delta Chat był dotychczas finansowany z tych źródeł:

- Unijny projekt [NEXTLEAP](https://nextleap.eu) sfinansował badania i wdrożenie zweryfikowanych grup i ustawień protokołów kontaktowych w latach 2017 i 2018, a także pomógł zintegrować szyfrowanie end-to-end poprzez [Autocrypt](https://autocrypt.org).

- [Open Technology Fund](https://opentechfund.org) przyznał nam pierwszy grant w 2018/2019 (~200 000 $), dzięki któremu znacznie ulepszyliśmy aplikację na Androida i wydaliśmy pierwszą wersję beta aplikacji na komputery stacjonarne, a także ugruntował rozwój naszych funkcji w badaniach UX w kontekście praw człowieka, zobacz nasz końcowy raport [Needfinding and UX](https://delta.chat/en/2019-07-19-uxreport).
Druga dotacja w 2019/2020 (~300 000 4) pomogła nam wydać wersje Delta/iOS, przekonwertować naszą podstawową bibliotekę na Rust i zapewnić nowe funkcje dla wszystkich platform.

- [Fundacja NLnet](https://nlnet.nl/) przekazała w latach 2019/2020 kwotę 46 tys. EUR na wykonanie wiązań Rust/Python i uruchomienie ekosystemu Chat-bot.

- W 2021 r. otrzymaliśmy kolejne dofinansowanie z UE na dwie propozycje dotyczące Internetu nowej generacji, a mianowicie na [EPPD – katalog przenośności dostawcy poczty e-mail](https://dapsi.ngi.eu/hall-of-fame/eppd/) ( ~97 tys. EUR) i [AEAP – przenoszenie adresu e-mail](https://nlnet.nl/project/EmailPorting/) (~90 tys. EUR), co zaowocowało lepszą obsługą wielu kont, ulepszonymi kontaktami i ustawieniami grup za pomocą kodów QR oraz wieloma ulepszeniami sieciowymi na wszystkich platformach.

- Od końca 2021 do marca 2023 otrzymaliśmy dofinansowanie *Wolność Internetu* (~500 tys. $) z amerykańskiego Biura Demokracji, Praw Człowieka i Pracy (DRL).
Fundusze te wspierają nasze długofalowe cele, aby uczynić Delta Chat bardziej użytecznym i kompatybilnym z szeroką gamą serwerów e-mail na całym świecie, a także bardziej odpornym i bezpiecznym w miejscach często dotkniętych cenzurą i wyłączeniami Internetu.

- Od 2023 roku zostaliśmy zaakceptowani w programie Next Generation Internet (NGI) Entrust dla naszych propozycji „Prywatnych zdecentralizowanych aplikacji”. Dokładna kwota do ustalenia (około 100 tys. EUR). Finansowanie to wspiera dalszy rozwój [„aplikacji udostępnianych na czacie” webxdc](https://webxdc.org). 

- Czasami otrzymujemy jednorazowe darowizny od osób prywatnych. Na przykład w 2021 roku pewna hojna osoba przekazała nam 4K EUR w formie przelewu bankowego tytułem "kontynuujcie dobry rozwój!". 💜 Takie pieniądze przeznaczamy na finansowanie spotkań rozwojowych lub na doraźne wydatki, których nie da się łatwo przewidzieć lub zrefundować z publicznych dotacji. Otrzymywanie większej ilości darowizn pomaga nam również stać się bardziej niezależnymi i długoterminowo rentownymi jako społeczność współpracowników.

[Przekaż pieniądze](donate){: .cta-button}

- Wreszcie, ale zdecydowanie nie najmniej ważne, kilku ekspertów i entuzjastów pro-bono wniosło wkład i przyczyniło się do rozwoju Delta Chat bez otrzymywania pieniędzy lub tylko niewielkich kwot. Bez nich Delta Chat nie byłby tam, gdzie jest dzisiaj, nawet w pobliżu.

Wspomniane powyżej finansowanie pieniężne jest w większości organizowane przez merlinux GmbH we Freiburgu (Niemcy) i jest dystrybuowane do kilkunastu podmiotów na całym świecie.

Zapoznaj się z [kanałami wpłat dla Delta Chat](contribute), aby uzyskać informacje o możliwościach wpłat zarówno pieniężnych, jak i innych.
