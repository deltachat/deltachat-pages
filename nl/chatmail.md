---
title: Chatmail voor directe, platformonafhankelijke en privacybeschermende gesprekken
lang: nl
---


## Wat zijn chatmailservers en hoe kies ik er een uit?

<img alt="Chatmail logo" src="../assets/logos/chatmail.svg" width="80" style="float:right;" />

Chatmailservers zijn speciaal gemaakt voor het voeren van gesprekken via Delta Chat. 
De servers bieden een hoge mate van privacybescherming en een hoge snelheid, 
en zijn compatibel met zowel chatmailservers onderling als traditionele mailservers. 
**Druk op een chatmailserverlink** om de bijbehorende website te openen en druk daar op de QR-code: 

- [nine.testrun.org](https://nine.testrun.org) is de standaard chatmailserver
  van Delta Chat-apps en is sinds [december 2023 stabiel verklaard](https://delta.chat/en/2023-12-13-chatmail).

- [mehl.cloud](https://mehl.cloud) is georiënteerd op Duitssprekenden
  en is sinds januari 2024 stabiel verklaard.

- [mailchat.pl](https://mailchat.pl) is georiënteerd op Poolssprekenden
  en is sinds januari 2024 stabiel verklaard.

- [bcc.chat](https://bcc.chat) wordt beheerd vanuit de VS en is sinds
  februari 2024 stabiel verklaard.

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/) is georiënteerd op Italiaanssprekenden
  en is sinds mei 2024 stabiel verklaard.

- [chika.aangat.lahat.computer](https://chika.aangat.lahat.computer/)
  wordt beheerd vanuit de VS en is sinds juli 2024 stabiel verklaard.

Alle chatmailservers worden beheerd door verschillende (groepen) mensen. 
De nine.testrun.org-server wordt beheerd door personen van het Delta Chat-team.

## Kan ik ook gebruikmaken van een gewone e-mailserver?

Ja. De meeste gebruikers maken gebruik van gewone e-mailservers, vooral als ze ook hun gewone e-mailcommunicatie via Delta Chat willen afhandelen.
Bekijk de [providerdatabank](https://providers.delta.chat) om een idee te krijgen van ondersteunde e-mailproviders.
Verder beschikt Delta Chat over ondersteuning voor meerdere accounts;
zo kun je het ene account gebruiken voor gewone e-mailcommunicatie en het
andere voor gesprekken.


## In welk opzicht verschillen chatmailservers van e-mailservers?

Chatmailservers zijn minimale e-mailservers gericht op snelheid, veiligheid en gebruiksvriendelijkheid:

- **Gebruiksvriendelijkheid:** binnen een paar seconden klaar voor gebruik en mogelijkheid om pushmeldingen te ontvangen

- **Privacy:** geen vragen en geen namen, telefoonnummers of e-mailadressen vereist

- **Snelheid:** berichten worden ruim binnen een seconde afgeleverd

- **Betrouwbaarheid:** geen vervelende spamcontroles of verzendbeperkingen

- **Veiligheid:** verzonden berichten worden automatisch van eind tot eind versleuteld en
  ontvangen berichten worden automatisch gecontroleerd op echtheid.


## Hoe veilig zijn chatmailservers?

Iedere chatmailserver beschrijft aanvullende privacy-informatie op de eigen website.
Normaliter handelt een chatmailserver alleen versleutelde berichten af en
worden berichten na maximaal 20 dagen automatisch verwijderd.

Delta Chat biedt [gegarandeerde eind-tot-eindversleuteling](https://delta.chat/en/2023-11-23-jumbo-42),
zodat serverbeheerders doorgaans geen toegang hebben tot je berichten, zelfs niet als ze hun best doen.
Deze garantie is bevestigd door een recente [beveiligingsanalyse van ETH Zuerich](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin).


## Hoe worden chatmailservers beheerd en kan ik er zelf ook een opzetten? {#selfhosted}

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
