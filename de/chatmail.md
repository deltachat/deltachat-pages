---
title: Chatmail für schnelle, interoperable und private Nachrichtenübermittlung
lang: de
---


## Was sind Chatmail-Server und wie kann ich einen auswählen?

<img alt="Chatmail logo" src="../assets/logos/chatmail.svg" width="80" style="float:right;" />

Chatmail-Server sind für den Nachrichtenaustausch mit Delta Chat optimiert,   datenschutzfreundlich, schnell, sicher und interoperabel mit Chatmail- und klassischen E-Mail-Servern. 
**Tippen Sie auf einen Chatmail-Server-Link**, um die Homepage zu sehen, und tippen Sie dort auf den QR-Einladungscode: 

- [nine.testrun.org](https://nine.testrun.org) ist der Standard-Chatmail-Server
für Delta Chat-Anwendungen und ist seit der [Dezember 2023 Chatmail-Ankündigung](https://delta.chat/en/2023-12-13-chatmail) stabil.

- [mehl.cloud](https://mehl.cloud) ist auf deutschsprachige Nutzer ausgerichtet und ist seit Januar 2024 stabil.

- [mailchat.pl](https://mailchat.pl) ist auf Polnisch sprechende Nutzer ausgerichtet und ist seit Januar 2024 stabil.

- [bcc.chat](https://bcc.chat) wird in den USA betrieben und ist seit Februar 2024 stabil.

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/)
  ist auf Italienisch sprechende Nutzer ausgerichtet und ist seit Mai 2024 stabil.

- [chika.aangat.lahat.computer](https://chika.aangat.lahat.computer/)
  wird in den USA betrieben und ist seit July 2024 stabil.

Alle Chatmail-Server werden von verschiedenen Gruppen und Personen betrieben. 
Der Standard-Server nine.testrun.org wird vom Delta-Chat-Kernteam betrieben. 

## Kann ich auch einen klassischen E-Mail-Server verwenden?

Ja, viele Benutzer verwenden erfolgreich reguläre E-Mail-Server, vor allem, wenn sie ihre regelmäßige E-Mail-Kommunikation mit Delta Chat abwickeln wollen.
Die [Anbieterdatenbank](https://providers.delta.chat) zeigt Optionen auf.
Beachten Sie, dass Delta Chat mehrere Konten unterstützt:
Es ist also in Ordnung, ein Konto mit Ihrer regulären E-Mail-Adresse zu haben, und ein weiteres Konto zum Chatten.


## Was sind die Unterschiede zwischen Chatmail- und E-Mail-Servern?

Chatmail-Server sind minimale E-Mail-Server, die auf Geschwindigkeit, Sicherheit und Komfort ausgelegt sind:

- **Komfort:** Sie bekommen ein Profil In wenigen Sekunden automatisch und erhalten Push-Benachrichtigungen

- **Datenschutz:** Keine Fragen, keine Namen, Nummern oder E-Mail-Adressen erforderlich

- **Geschwindigkeit:** Nachrichtenzustellung in deutlich unter einer Sekunde, Ende-zu-Ende

- **Zuverlässigkeit:** Keine lästigen Spam-Prüfungen oder Limits

- **Sicherheit:** Ausgehende Nachrichten müssen Ende-zu-Ende verschlüsselt sein, eingehende Nachrichten werden streng auf ihre Authentizität geprüft.


## Wie vertrauenswürdig sind Chatmail-Server?

Jeder Chatmail-Server bietet zusätzliche Informationen zum Datenschutz auf seiner Webseite.
Normalerweise verarbeitet ein Chatmail-Server nur verschlüsselte Nachrichten und
implementiert eine automatische, bedingungslose Löschung der Nachrichten nach höchstens 20 Tagen.

Delta Chat bietet [garantierte Ende-zu-Ende-Verschlüsselung](https://delta.chat/en/2023-11-23-jumbo-42)
was bedeutet, dass in den meisten Anwendungsfällen die Serverbetreiber Ihre Nachrichten nicht lesen können, selbst wenn sie es versuchen.
Eine Garantie, die durch eine aktuelle [Sicherheitsanalyse der ETH Zürich](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) bestätigt wird.


## Wie werden Chatmail-Server betrieben? Kann ich selbst einen betreiben? {#selfhosted}

Alle Chatmail-Server werden automatisch aktualisiert mit dem [öffentlichen Chatmail-Entwicklungs-Repository](https://github.com/deltachat/chatmail).
Chatmail-Server bestehen aus bewährten Standard-E-Mail-Server-Komponenten, [Postfix](https://postfix.org) und [Dovecot](https://dovecot.org), und sind so konfiguriert, dass sie unbeaufsichtigt laufen und sehr wenig Wartungsaufwand erfordern. Chatmail-Server funktionieren auch gut auf Low-End-Hardware wie einem Raspberry Pi.


# Wie werden Chatmail-Server finanziert?

Chatmail-Server sind so konzipiert, dass sie sehr billig zu betreiben sind und sie werden im Allgemeinen von den Betreibern selbst finanziert. Weitere Informationen finden Sie auf der Startseite des jeweiligen Chatmail-Servers.

Um die Chatmail-Entwicklung und den Betrieb des Standard-Onboarding-Servers zu unterstützen, sind Sie herzlich eingeladen, einen Beitrag zu leisten.

[Geld spenden](donate){: .cta-button}
