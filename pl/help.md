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
- Jednakże, jeśli naprawdę potrzebujesz, możesz **zablokować** dowolny kontakt. 

## Czy Delta Chat obsługuje obrazy, filmy i inne załączniki?

- Tak. Oprócz zwykłego tekstu wszystkie załączniki wiadomości e-mail są wyświetlane jako oddzielne wiadomości. Wiadomości wychodzące będą automatycznie pobierać załączniki.

## Czy Delta Chat obsługuje wiadomości e-mail w formacie HTML?

- Tak. Jeśli przychodząca wiadomość e-mail nie ma części tekstowej, konwertujemy wiadomości HTML na zwykły tekst. E-maile wychodzące zawsze używają zwykłego tekstu.

# Grupy

## Jak mogę utworzyć grupę?

- Na ekranie przeglądu czatów, z menu w prawym górnym rogu wybierz **Nowa grupa**.
- Na następnym ekranie wybierz **członków grupy** i naciśnij znacznik wyboru w prawym górnym rogu. Następnie możesz zdefiniować nazwę grupy.
- Zaraz po napisaniu pierwszej wiadomości w grupie wszyscy członkowie zostaną poinformowani o nowej grupie i mogą odpowiedzieć w grupie (jeżeli nie napiszesz wiadomości w grupie, grupa jest niewidoczna dla członków).

## Kto może dodawać członków do grupy?

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 

## Usunąłem się przez przypadek.

- Ponieważ nie jesteś już członkiem grupy, nie możesz dodać siebie ponownie. Jednak nie ma problemu, po prostu poproś dowolnego członka grupy na normalnym czacie, aby dodał cię ponownie.

## Nie chcę już otrzymywać wiadomości od grupy.

- Usuń siebie z listy członków lub usuń cały czat. Jeśli później będziesz chciał ponownie dołączyć do grupy, poproś innego członka grupy, aby dodał cię do grupy.
- Alternatywnie możesz też „Wyłączyć powiadomienia” dla grupy - dzięki temu otrzymasz wszystkie wiadomości i nadal będziesz mógł pisać, ale nie będziesz już otrzymywać powiadomień o nowych wiadomościach.

# Szyfrowanie {#encryption}

## Czy Delta Chat ma szyfrowanie end-to-end?

- Tak.

## Co muszę zrobić, aby aktywować szyfrowanie end-to-end?

- Nic.

- Gdy wysyłane są pierwsze wiadomości Delta Chat (i inne programy pocztowe kompatybilne z [Autocrypt](https://autocrypt.org) - Test It!) automatycznie udostępniają klucze wymagane do automatycznego szyfrowania end-to-end. Następnie wszystkie kolejne wiadomości są automatycznie szyfrowane end-to-end. Jeśli jeden z partnerów czatu użyje później aplikacji, która nie może korzystać z szyfrowania typu end-to-end, zostanie ona na ten czas wstrzymana i automatycznie ponownie aktywowana tak szybko, jak to będzie możliwe.

- Jeśli chcesz _dezaktywować_ szyfrowanie end-to-end, użyj odpowiedniego ustawienia w „Ustawienia » Ustawienia zaawansowane”.

## Czy połączenie nie jest w ogóle szyfrowane, jeśli szyfrowanie end-to-end nie jest dostępne?

- Nie. Używa się wtedy zwykłego standardowego _szyfrowania transportu_ poczty e-mail.


## Jak mogę sprawdzić szyfrowanie?

- Jeśli obok wiadomości pojawi się mała **kłódka**, oznacza to, że wiadomość jest szyfrowana metodą end-to-end _i_ jest wysłana od danego nadawcy _i_ twoja odpowiedź będzie również szyfrowana metodą end-to-end.
- Jeśli **nie ma kłódki**, wiadomość używa zwykłego szyfrowania transportu, np. ponieważ ty lub nadawca wyłączyliście szyfrowanie metodą end-to-end, lub gdy nadawca używa aplikacji, która nie obsługuje szyfrowania metodą end-to-end.


## Jak mogę zweryfikować nadawcę?

Profil użytkownika zawiera dodatkowe informacje:

- W przypadku szyfrowania metodą end-to-end Delta Chat pokazuje tam dwa odciski palców. Jeśli są takie same na urządzeniu twojego partnera czatu, połączenie jest bezpieczne
- W przypadku szyfrowania transportu ten stan jest właśnie tam wyświetlany


## Jakie standardy są używane do szyfrowania end-to-end?

- OpenPGP. Transport kluczy odbywa się za pomocą [Autocrypt](https://autocrypt.org).

## Czy mogę ponownie wykorzystać istniejący klucz prywatny?

- Tak. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for sth. like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatywnie możesz zaimportujesz go ręcznie w „Ustawienia zaawansowane » Zarządzaj prywatnymi kluczami”. Uwaga: Upewnij się, że klucz nie jest chroniony hasłem ani nie usunąłeś go wcześniej.

Jeśli nie masz klucza lub nawet nie wiesz, że go potrzebujesz - nie przejmuj się: Delta Chat generuje go w razie potrzeby, nie musisz nic robić.

# Multi-klient {#multiclient}

## Czy mogę korzystać z Delta Chat na wielu urządzeniach w tym samym czasie?

- Jeśli chcesz używać tego samego konta na różnych urządzeniach, upewnij się, że wszystkie urządzenia używają tych samych kluczy do szyfrowania:

- Na pierwszym urządzeniu wybierz „Ustawienia zaawansowane » Zarządzaj prywatnymi kluczami » Eksportuj prywatne klucze”
- Np. przez USB, skopiuj plik klucza z katalogu „Pobrane” pierwszego urządzenia do drugiego.
- Na drugim urządzeniu „Ustawienia zaawansowane » Zarządzaj prywatnymi kluczami » Importuj prywatne klucze”

- Wszystko to, nie jest potrzebne do standardowego korzystania z Delta Chat przy użyciu tylko jednego urządzenia.

- UWAGA: W trybie wielu klientów wiadomości _przychodzące_ są wyświetlane jednocześnie na wszystkich klientach. Wiadomości _wychodzące_ są synchronizowane około dwa razy na godzinę. Możemy to poprawić, ale potrzebowalibyśmy większego [wsparcia](contribute) w tej kwestii.


# Różne

## Delta Chat na pulpicie Linuxa

- Możesz uruchomić Delta Chat na pulpicie Ubuntu Linux (lub innych dystrybucjach Linuksa obsługujących format **snap**-package), po prostu instalując  [Anbox](https://anbox.io) (Android in a Box) z terminala:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- Aby dodać aplikację Delta Chat, pobierz plik *com.b44t.messenger_\<wersja\>.apk* z [tej](download) strony i zainstaluj go z terminala:

  $ *adb install path/to/com.b44t.messenger_\<wersja\>.apk*

adb to Android Debug Bridge i można go zainstalować z repozytorium.

- Zamiast instalować Delta Chat bezpośrednio przez plik APK, możesz najpierw zainstalować sklep F-Droid przez [F-Droid-APK](https://f-droid.org/FDroid.apk), a następnie zainstalować Delta Chat przy użyciu sklepu. Ogromną korzyścią są informacje o aktualizacjach i migracji istniejących danych konfiguracyjnych i czatów.


## Problemy z logowaniem

Mam problem z

- Gmail: włącz „Zezwalaj na mniej bezpieczne aplikacje” i IMAP, możesz otrzymać wiadomość e-mail, aby udzielić pozwolenia

## Interesują mnie szczegóły techniczne. Możesz powiedzieć mi więcej?

- Zobacz stronę [Standardy używane w Delta Chat]({% include standards-url %}).
