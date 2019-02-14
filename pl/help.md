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

- _Niezależny_ od jakiejkolwiek firmy lub usług. _Jesteś_ właścicielem swoich danych.
- Twoje dane nie są zapisywane na centralnym serwerze; w ten sposób, w przeciwieństwie do większości innych komunikatorów, Delta Chat nawet chroni twoje metadane (kto do kogo pisze?)
- Nie udostępniasz nikomu swojej książki adresowej.
- _Szybki_ dzięki użyciu Push-IMAP
- _Największa baza użytkowników_ - możesz rozmawiać nawet z tymi, którzy _nie_ posiadają Delta Chat
- _Zgodny_ - nie tylko z samym sobą
-  _Elegancki_ i _prosty_ interfejs użytkownika
- _Rozproszony_ system
- _Brak spamu_ - domyślnie wyświetlane są, tylko wiadomości znanych użytkowników
- _Niezawodny_ - bezpieczny do użytku profesjonalnego
- _Godny zaufania_ - może być wykorzystywany nawet do wiadomości biznesowych
- W pełni _otwarto-źródłowy_ i _oparty na standardach_

## Co jeśli odbiorca nie używa Delta Chat?

- Odbiorca otrzyma normalny e-mail - jeśli odpowie na niego, zobaczysz odpowiedź w aplikacji Delta Chat.

## Jakie wiadomości pojawiają się w Delta Chat?

Delta Chat automatycznie pokazuje:

- Wiadomości od kontaktów z **książki adresowej**
- Wiadomości od kontaktów, z którymi **się kontaktujesz**
- **Odpowiedzi** na wiadomości wysyłane przez ciebie

Inne wiadomości nie pojawią się automatycznie. Możesz je zobaczyć w menu głównym w **Skrzynka pocztowa** i, jeśli chcesz, rozpocząć czat z tego miejsca.

## A co ze spamem?

- Wiadomości w popularnych folderach ze spamem są ignorowane, a zawarte adresy nie są uznawane za znane kontakty.
- Ponieważ wiadomości z nieznanych kontaktów nie pojawiają się automatycznie, zwykle **nie ma spamu**.
- Jednakże, jeśli potrzebujesz, możesz **zablokować** dowolny kontakt. 

## Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące będą automatycznie pobierać załączniki.

## Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

- Tak. Jeśli przychodząca wiadomość e-mail nie ma części tekstowej, konwertujemy wiadomości HTML na zwykły tekst. E-maile wychodzące zawsze używają zwykłego tekstu.

# Grupy

## Jak mogę utworzyć grupę?

- Na ekranie przeglądu czatów, z menu w prawym górnym rogu wybierz **Nowa grupa**.
- Na następnym ekranie wybierz **członków grupy** i naciśnij znacznik wyboru w prawym górnym rogu. Następnie możesz zdefiniować nazwę grupy.
- Zaraz po napisaniu pierwszej wiadomości w grupie wszyscy członkowie zostaną poinformowani o nowej grupie i mogą odpowiedzieć w grupie (jeżeli nie napiszesz wiadomości w grupie, grupa jest niewidoczna dla członków).

## Jak dodać członków do grupy?

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 

## Co to jest zweryfikowana grupa?

Zweryfikowana grupa jest funkcją eksperymentalną (od stycznia 2019 r.). Dodając się nawzajem poprzez skanowanie kodów QR, grupa „zweryfikowanych” członków może ze sobą rozmawiać. Wymusza szyfrowanie grupy e2e, które jest bezpieczne od ataków dostawców lub sieci. Jednak niektóre testy i opinie użytkowników sugerują, że zmiany w UX i implementacji mają sens. Ostatnie dyskusje można znaleźć tutaj: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Usunąłem się przez przypadek.

- Ponieważ nie jesteś już członkiem grupy, nie możesz dodać siebie ponownie. 
  Jednak nie ma problemu, po prostu poproś dowolnego członka grupy na normalnym czacie, aby dodał cię ponownie.

## Nie chcę już otrzymywać wiadomości od grupy.

- Usuń siebie z listy członków lub usuń cały czat. 
  Jeśli później będziesz chciał ponownie dołączyć do grupy, poproś innego członka grupy, aby dodał cię do grupy.

- Alternatywnie możesz też „Wyłączyć powiadomienia” dla grupy - dzięki temu otrzymasz wszystkie wiadomości i 
  nadal będziesz mógł pisać, ale nie będziesz już otrzymywać powiadomień o nowych wiadomościach.

# Szyfrowanie {#encryption}

## Czy Delta Chat obsługuje szyfrowanie end-to-end?

- Tak. DeltaChat ma zaimplementowany standard Autocrypt Level 1 
  i może szyfrować wiadomości metodą e2e za pomocą innych 
  aplikacji obsługujących Autocrypt. 

## Co muszę zrobić, aby aktywować szyfrowanie end-to-end?

- Nic.

- Gdy wysyłane są pierwsze wiadomości, aplikacje Delta Chat (i inne zgodne z [Autocrypt](https://autocrypt.org) aplikacje e-mail) automatycznie współdzielą klucze wymagane do szyfrowania metodą end-to-end. Następnie wszystkie kolejne wiadomości są automatycznie szyfrowane end-to-end. Jeśli jeden z partnerów czatu korzysta z aplikacji e-mail bez obsługi Autocrypt, późniejsze wiadomości nie są szyfrowane, dopóki aplikacja zgodna z Autocrypt nie będzie ponownie dostępna.

- Jeśli chcesz _dezaktywować_ szyfrowanie end-to-end, 
  użyj odpowiedniego ustawienia w „Ustawienia » Ustawienia zaawansowane”.

## Czy połączenie nie jest w ogóle szyfrowane, jeśli szyfrowanie end-to-end nie jest dostępne?

- Nie. W większości serwerów e-mail stosuje się wówczas _szyfrowanie transportu_ (TLS).


## Jak mogę sprawdzić szyfrowanie?

- Jeśli obok wiadomości pojawi się mała **kłódka**, oznacza to, że wiadomość jest szyfrowana metodą end-to-end _i_ jest wysłana od danego nadawcy _i_ twoja odpowiedź będzie również szyfrowana metodą end-to-end.

- Jeśli **nie ma kłódki**, wiadomość używa zwykłego szyfrowania transportu, np. ponieważ ty lub nadawca wyłączyliście szyfrowanie metodą end-to-end, lub gdy nadawca używa aplikacji, która nie obsługuje szyfrowania metodą end-to-end.


## Jak mogę zweryfikować nadawcę?

Profil użytkownika zawiera dodatkowe informacje:

- Możesz nacisnąć na Androidzie „Kod QR zaproszenia”, a następnie użyć przycisku „Skanuj kod QR” na innym urządzeniu, aby zeskanować ten kod. Jeśli oba urządzenia są w trybie online, nawiążą ze sobą czat (jeśli jeszcze nie istnieje), a także zostaną zweryfikowane klucze szyfrowania. 

- W przypadku szyfrowania metodą end-to-end Delta Chat pokazuje tam dwa odciski palców. 
  Jeśli są takie same na urządzeniu twojego partnera czatu, połączenie jest bezpieczne

- W przypadku szyfrowania transportu ten stan jest właśnie tam wyświetlany


## Jakie standardy są używane do szyfrowania end-to-end?

- OpenPGP. Transport kluczy odbywa się za pomocą [Autocrypt](https://autocrypt.org).

## Czy mogę ponownie wykorzystać mój istniejący klucz prywatny?

- Tak. Najlepszym sposobem jest wysłanie wiadomości konfiguracyjnej Autocrypt z innego klienta poczty e-mail. Poszukaj czegoś jak **Start Autocrypt Setup Transfer** w ustawieniach innego klienta i postępuj zgodnie z wyświetlanymi tam instrukcjami.

- Alternatywnie możesz zaimportować go ręcznie w „Ustawienia zaawansowane » Zarządzaj prywatnymi kluczami”. Uwaga: Upewnij się, że klucz nie jest chroniony hasłem ani nie usunąłeś go wcześniej.

Jeśli nie masz klucza lub nawet nie wiesz, że go potrzebujesz  nie przejmuj się: Delta Chat generuje go w razie potrzeby, nie trzeba naciskać przycisku, aby to zrobić. 

# Multi-klient {#multiclient}

## Czy mogę korzystać z Delta Chat na wielu urządzeniach w tym samym czasie?

- Jeśli chcesz używać tego **samego konta** na różnych urządzeniach (obsługujących Autocrypt), trzeba zsynchronizować ich możliwości szyfrowania: 

- Na pierwszym urządzeniu wybierz Ustawienia zaawansowane » Wyślij wiadomość konfiguracyjną Autocrypt 
  i naciskaj, aż pojawi się „numer bezpieczeństwa”.

- Na drugim urządzeniu poczekaj na komunikat „Wiadomość konfiguracyjna Autocrypt” i naciśnij ją, aby wyświetlić monit o podanie numeru bezpieczeństwa. 

- przeszedłeś teraz z pomyślną synchronizację i możesz używać obu urządzeń
  do wysyłania i odbierania zaszyfrowanych wiadomości metodą e2e ze Swoimi partnerami komunikacyjnymi. 

# Różne

## Czy Delta Chat działa z _moim_ dostawcą poczty e-mail?

- Z dość dużym prawdopodobieństwem: Tak :)
  Jednak niektórzy dostawcy potrzebują specjalnych opcji, aby działać poprawnie; użytkownicy zgromadzili niektóre z nich na forum w [Przeglądzie dostawców] (https://support.delta.chat/t/provider-overview/)


## Interesują mnie szczegóły techniczne. Możesz powiedzieć mi więcej?

- Zobacz stronę [Standardy używane w Delta Chat]({% include standards-url %}).
