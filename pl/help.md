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

## Kto dodaje członków do grupy?

- Każdy członek grupy ma **takie same prawa** jak każdy inny. Z tego powodu każdy może usunąć każdego członka lub dodać nowego.
- Aby dodać lub usunąć członków, kliknij nazwę grupy na czacie. 

## Co to jest zweryfikowana grupa?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
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

- Jeśli chcesz _dezaktywować_ szyfrowanie end-to-end, 
  użyj odpowiedniego ustawienia w „Ustawienia » Ustawienia zaawansowane”.

## Czy połączenie nie jest w ogóle szyfrowane, jeśli szyfrowanie end-to-end nie jest dostępne?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Jak mogę sprawdzić szyfrowanie?

- Jeśli obok wiadomości pojawi się mała **kłódka**, oznacza to, że wiadomość jest szyfrowana metodą end-to-end _i_ jest wysłana od danego nadawcy _i_ twoja odpowiedź będzie również szyfrowana metodą end-to-end.

- Jeśli **nie ma kłódki**, wiadomość używa zwykłego szyfrowania transportu, np. ponieważ ty lub nadawca wyłączyliście szyfrowanie metodą end-to-end, lub gdy nadawca używa aplikacji, która nie obsługuje szyfrowania metodą end-to-end.


## Jak mogę zweryfikować nadawcę?

Profil użytkownika zawiera dodatkowe informacje:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- W przypadku szyfrowania metodą end-to-end Delta Chat pokazuje tam dwa odciski palców. 
  Jeśli są takie same na urządzeniu twojego partnera czatu, połączenie jest bezpieczne

- W przypadku szyfrowania transportu ten stan jest właśnie tam wyświetlany


## Jakie standardy są używane do szyfrowania end-to-end?

- OpenPGP. Transport kluczy odbywa się za pomocą [Autocrypt](https://autocrypt.org).

## Czy mogę ponownie wykorzystać mój istniejący klucz prywatny?

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
