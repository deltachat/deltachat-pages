---
title: Chatmail do natychmiastowych, interoperacyjnych i chroniących prywatność rozmów
lang: pl
---


## Co to są serwery chatmail i jak je wybrać?

<img alt="Chatmail logo" src="../assets/logos/chatmail.svg" width="80" style="float:right;" />

Serwery Chatmail są zoptymalizowane do przesyłania wiadomości za pomocą Delta Chat, aby zapewnić ochronę prywatności i szybką obsługę użytkownika, bezpiecznie współpracując z chatmailem i klasycznymi serwerami poczty e-mail. **Dotknij link do serwera chatmail**, aby wyświetlić stronę główną, a następnie dotknij znajdujący się tam kod QR zaproszenia:

- [nine.testrun.org](https://nine.testrun.org) to domyślny serwer chatmail dla aplikacji Delta Chat, który działa stabilnie od [ogłoszenia usługi Chatmail w grudniu 2023 r.](https://delta.chat/en/2023-12-13-chatmail).

- [mehl.cloud](https://mehl.cloud) jest skierowany dla użytkowników niemieckojęzycznych i działa stabilnie od stycznia 2024 r.

- [mailchat.pl](https://mailchat.pl) jest skierowany do użytkowników mówiących po polsku i działa stabilnie od stycznia 2024 roku.

- [bcc.chat](https://bcc.chat) działa w USA i od lutego 2024 roku jest stabilny.

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/)
  is geared towards Italian speaking users and has been 
  stable since May 2024.

- [chika.aangat.lahat.computer](https://chika.aangat.lahat.computer/)
  operates in the US and has been stable since July 2024.

Wszystkie serwery chatmail są obsługiwane przez różne grupy i osoby. Domyślny serwer nine.testrun.org jest obsługiwany przez głównych członków zespołu Delta Chat.

## Czy zamiast chatmaila mogę także używać zwykłego serwera poczty e-mail?

Tak, wielu użytkowników z powodzeniem korzysta ze zwykłych serwerów pocztowych, zwłaszcza jeśli chcą obsługiwać regularną komunikację e-mailową za pomocą Delta Chat. Zobacz [bazę danych dostawców](https://providers.delta.chat), aby zapoznać się z opcjami. Pamiętaj, że Delta Chat obsługuje wiele kont, więc dobrze jest mieć jedno konto skonfigurowane ze zwykłym adresem e-mail, a drugie konto do czatowania.


## Czym różnią się serwery chatmail od serwerów e-mail?

Serwery Chatmail to minimalne serwery poczty e-mail zaprojektowane z myślą o szybkości, bezpieczeństwie i wygodzie:

- **Wygoda:** Podłącz się automatycznie w ciągu kilku sekund i otrzymuj powiadomienia push

- **Prywatność:** bez zadawania pytań, bez imienia, numeru telefonu i adresu e-mail

- **Szybkość:** dostarczanie wiadomości w mniej niż sekundę, od początku do końca

- **Niezawodność:** brak irytującego sprawdzania spamu i ograniczeń szybkości

- **Bezpieczeństwo:** wiadomości wychodzące muszą być szyfrowane metodą end-to-end, a wiadomości przychodzące są ściśle sprawdzane pod kątem autentyczności.


## Jak wiarygodne są serwery chatmail?

Każdy serwer chatmail udostępnia dodatkowe informacje dotyczące prywatności na swojej stronie internetowej. Zazwyczaj serwer chatmail przetwarza tylko zaszyfrowane wiadomości i wdraża automatyczne, bezwarunkowe usuwanie wiadomości po maksymalnie 20 dniach.

Delta Chat zapewnia [szyfrowanie end-to-end](https://delta.chat/en/2023-11-23-jumbo-42), co oznacza, że w większości przypadków operatorzy serwerów nie będą w stanie odczytać twoich wiadomości, nawet jeśli spróbują, co jest gwarancją popartą najnowszą [analizą bezpieczeństwa przeprowadzoną przez ETH Zuerich](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin).


## Jak działają serwery chatmail? Czy mogę sam go uruchomić? {#selfhosted}

Wszystkie serwery chatmail są automatycznie wdrażane i aktualizowane przy użyciu [publicznego repozytorium rozwoju chatmail](https://github.com/deltachat/chatmail). Serwery chatmail składają się ze sprawdzonych standardowych komponentów serwerów poczty e-mail, [Postfix](https://postfix.org) i [Dovecot](https://dovecot.org) i są skonfigurowane tak, aby działały bez nadzoru i wymagały bardzo niewielkich nakładów konserwacyjnych. Serwery chatmail z powodzeniem działają na słabszym sprzęcie, takim jak Raspberry Pi.


# W jaki sposób finansowane są serwery chatmail?

Serwery chatmail są zaprojektowane tak, aby były bardzo tanie w obsłudze i na ogół są samofinansujące przez operatorów. Więcej informacji znajdziesz na stronie głównej każdego serwera chatmail.

Aby wesprzeć rozwój chatmaila i działanie domyślnego serwera onboardingowego, zapraszamy do wpłacania datków.

[Przekaż pieniądze](donate){: .cta-button}
