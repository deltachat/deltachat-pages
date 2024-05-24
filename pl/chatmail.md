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

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/) jest skierowany do użytkowników włoskojęzycznych i działa stabilnie od maja 2024 r.

Wszystkie serwery chatmail są obsługiwane przez różne grupy i osoby. Domyślny serwer nine.testrun.org jest obsługiwany przez głównych członków zespołu Delta Chat.

## Can i also use a regular e-mail server instead of chatmail?

Yes, many users successfully use regular e-mail servers
especially if they want to handle their regular e-mail communications with Delta Chat.
See the [provider database](https://providers.delta.chat) for options.
Note that Delta Chat has multi-account support so
it's fine to have one account configured with your regular e-mail address,
and another account for chatting.


## How are chatmail servers different from e-mail servers?

Chatmail servers are minimal e-mail servers designed for speed, security and convenience:

- **Convenience:** Onboard automatically in a few seconds and receive push notifications

- **Privacy:** No questions asked, no name, numbers or e-mail needed

- **Speed:** Message delivery in well under a second, end-to-end

- **Reliability:** No annoying spam-checking or rate-limits

- **Security:** Outbound messages are required to be end-to-end encrypted,
  incoming messages are strictly checked for authenticity.


## How trustable are chatmail servers?

Each chatmail server provides additional privacy information on their web page.
Typically, a chatmail server only processes encrypted messages and
implements automatic, unconditional message deletion after at most 20 days.

Delta Chat provides [guaranteed end-to-end encryption](https://delta.chat/en/2023-11-23-jumbo-42)
which means that in most use cases, server operators can never read your messages even if they try,
a guarantee backed up by a recent [security analysis from ETH Zuerich](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin).


## How are chatmail servers run? Can i run one myself? {#selfhosted}

All chatmail servers are automatically deployed and updated using
[the public chatmail development repository](https://github.com/deltachat/chatmail).
Chatmail servers are composed of proven standard e-mail server components,
[Postfix](https://postfix.org) and [Dovecot](https://dovecot.org),
and configured to run unattended and to require very low maintenance effort.
Chatmail servers happily run on low-end hardware like a Raspberry Pi.


# How are chatmail servers funded?

Chatmail servers are designed to be very cheap to run,
and they are generally self-funded by the operators.
Please see the front page of each chatmail server for further information.

To support chatmail development and the running of the default onboarding server
you are very welcome to chip in.

[Przekaż pieniądze](donate){: .cta-button}
