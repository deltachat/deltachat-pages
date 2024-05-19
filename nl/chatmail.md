---
title: Chatmail voor directe, platformonafhankelijke en privacybeschermende gesprekken
lang: nl
---


## Wat zijn chatmailservers?

<img alt="Chatmail logo" src="../assets/logos/chatmail.svg" width="160" style="float:right;" />

Chatmailservers zijn bedoeld voor gesprekken binnen Delta Chat en bieden een makkelijke, snelle en privacybeschermende manier om gesprekken te voeren.

Het Delta Chat-project maakt gebruik van de standaard openbare chatmailserver
op [nine.testrun.org](https://nine.testrun.org),
welke als stabiel is verklaard sinds de [aankondiging van december 2023](https://delta.chat/en/2023-12-13-chatmail).

Verder zijn er **chatmailservers van de gemeentschap. Druk om daar gebruik van te maken in plaats van nine.testrun.org:**

- [mehl.cloud](https://mehl.cloud) is georiënteerd op Duitssprekenden
  en is sinds januari 2024 stabiel verklaard.

- [mailchat.pl](https://mailchat.pl) is georiënteerd op Poolssprekenden
  en is sinds januari 2024 stabiel verklaard.

- [bcc.chat](https://bcc.chat) wordt beheerd vanuit de VS en is sinds
  februari 2024 stabiel verklaard.

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/) is georiënteerd op Italiaanssprekenden
  en is sinds mei 2024 stabiel verklaard.

Alle chatmailservers werken onderling en zijn net zo veilig. Ook versturen alle
servers pushmeldingen aan mobiele gebruikers.


## In welk opzicht verschillen chatmailservers van e-mailservers?

Chatmailservers zijn minimale e-mailservers gericht op snelheid, veiligheid en gebruiksvriendelijkheid:

- **Gebruiksvriendelijkheid:** binnen een paar seconden klaar voor gebruik en mogelijkheid om pushmeldingen te ontvangen

- **Privacy:** geen vragen en geen namen, telefoonnummers of e-mailadressen vereist

- **Snelheid:** berichten worden ruim binnen een seconde afgeleverd

- **Betrouwbaarheid:** geen vervelende spamcontroles of verzendbeperkingen

- **Veiligheid:** verzonden berichten worden automatisch van eind tot eind versleuteld en
  ontvangen berichten worden automatisch gecontroleerd op echtheid.


## Kan ik ook gebruikmaken van een gewone e-mailserver?

Ja. De meeste gebruikers maken gebruik van gewone e-mailservers, vooral als ze ook hun gewone e-mailcommunicatie via Delta Chat willen afhandelen.
Bekijk de [providerdatabank](https://providers.delta.chat) om een idee te krijgen van ondersteunde e-mailproviders.
Verder beschikt Delta Chat over ondersteuning voor meerdere accounts;
zo kun je het ene account gebruiken voor gewone e-mailcommunicatie en het
andere voor gesprekken.


## Hoe veilig zijn chatmailservers?

Iedere chatmailserver beschrijft aanvullende privacy-informatie op de eigen website.
Normaliter handelt een chatmailserver alleen versleutelde berichten af en
worden berichten na maximaal 40 dagen automatisch verwijderd.

Delta Chat biedt [gegarandeerde eind-tot-eindversleuteling](https://delta.chat/en/2023-11-23-jumbo-42),
zodat serverbeheerders doorgaans geen toegang hebben tot je berichten, zelfs niet als ze hun best doen.
Deze garantie is bevestigd door een recente [beveiligingsanalyse van ETH Zuerich](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin).


## Hoe worden chatmailservers beheerd?

Alle chatmailservers worden automatisch opgezet en van updates voorzien met behulp van
[de openbare chatmailontwikkelingsrepo](https://github.com/deltachat/chatmail).
Chatmailservers bevatten standaard, bewezen betrouwbare mailserveronderdelen,
te weten [Postfix](https://postfix.org) en [Dovecot](https://dovecot.org).
De servers draaien in principe onbeheerd en vereisen weinig onderhoud.
Leuke anekdote: chatmailservers draaien zelfs op minimale hardware, zoals een Raspberry Pi.


# Hoe komen chatmailservers aan hun inkomsten?

Chatmailservers zijn ontworpen om bijna kosteloos te kunnen draaien en worden daarom meestal bekostigd door de beheerders ervan.
Bekijk voor meer informatie de websites van de chatmailservers.

Uiteraard staat het je vrij om bij te dragen aan de ontwikkeling van chatmail zelf.

[Geld doneren](donate){: .cta-button}
