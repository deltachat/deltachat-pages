---
title: Hilfe
layout: default-de
---

# Hilfe

- [Allgemein](#allgemein)
- [Nachrichten an mehrere Personen](#broadcast)
- [Gruppen](#gruppen)
- [Speicherung der Nachrichten](#speicherung)
- [Verschlüsselung](#verschluesselung)
- [Mehrere Geräte verwenden](#multiclient)
- [Verschiedenes](#verschiedenes)


# Allgemein

## Wie funktioniert Delta Chat?

- Zunächst sieht Delta Chat wie jeder andere Messenger aus und funktioniert auch so und bietet dieselben Funktionen.
  Unter der Haube verwendet das Programm aber keinen gekapselten Server, sondern das offene IMAP-Protokoll - wie es auch für E-Mail verwendet wird -
  allerdings haben wir hier einige Zusatzfunktionen, wie z.B. Gruppen, nachgerüstet.

## Welche Vorteile hat Delta Chat gegenüber anderen Messengern?

- Unabhängigkeit von irgendwelchen Firmen. _Sie_ besitzen Ihre Daten
- Ihre Daten landen nicht auf zentralen Servern. So schützt Delta Chat im Gegensatz zu den meisten anderen Messengern sogar die Metadaten, d.h. wer mit wem kommuniziert
- Sie geben die Inhalte Ihres Adressbuches nicht weiter - was auch illegal ist, wenn Sie sich nicht die Zustimmung aller Ihrer Freunde, Bekannten und Geschäftspartner eingeholt haben.
- Schnell und Zuverlässig, auch für den professionellen Einsatz
- Riesige Nutzerbasis - Sie können auch Leute erreichen, die Delta Chat _nicht_ verwenden!
- Kompatibel, überprüfbar, Open Source
- Elegante und einfach zu bedienende Benutzeroberfläche
- Verteiltes, föderales System
- Kein Spam
- [...](features)

## An wen kann ich schreiben?

- Mit Delta Chat können Sie an Benutzer, die Delta Chat verwenden, schreiben - 
  und an Benutzer, die irgend einen anderen E-Mail-Client verwenden!
  Dies ist einer der größten Unterschiede zu anderen Messengern:
  Ihre Kontakte müssen _nicht_ denselben Messenger wie Sie verwenden.

## Was, wenn der Empfänger kein Delta Chat verwendet?

- Der Empfänger erhält dann eine normale E-Mail, auf die er auch antworten kann.
  Seine Antwort erscheint dann wie gewohnt im Delta Chat Messenger


## Welche Nachrichten erscheinen in Delta Chat?

In Delta Chat erscheinen automatisch nur:

- Nachrichten von Kontakten aus Ihrem **Adressbuch**
- Nachrichten von Kontakten, die Sie **selbst kontaktiert** haben
- Nachrichten von bekannten **Kontakten Ihrer Kontakte**
- **Antworten** auf Ihre Nachrichten

Alle anderen Nachrichten werden _nicht_ automatisch angezeigt.  Über den Menüpunkt
**Kontaktanfragen** können Sie sich aber eine Übersicht der
weiteren Nachrichten anzeigen lassen und gegebenenfalls einen Chat starten.

## Was ist mit Spam?

- Da Nachrichten von komplett unbekannten Absendern nicht direkt angezeigt werden, werden Sie in Delta Chat der Regel **keinen Spam** sehen.
- Bei Bedarf können Sie unerwünschte Kontakte aber jederzeit **blockieren**.

## Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja.

## Können mit Delta Chat Sprachnachrichten verschickt werden?

- Ja.

## Unterstützt Delta Chat HTML-E-Mails?

- Ja.

## Gibt es eine iOS, Mac, Windows, Linux oder XYZ-Version?

- Gibt es Delta Chat noch nicht für Ihr Wunschsystem? Delta Chat ist Open Source - [unterstützen Sie uns bei unserer Arbeit](support)!





# Nachrichten an mehrere Personen {#broadcast}

## Wie kann ich eine Nachricht an mehrere Personen schicken?

- Entweder über [Gruppen](#gruppen) oder Sie senden die Nachricht zunächst normal an eine Person, drücken die Nachricht dann lang und wählen "Weiterleiten". 





# Gruppen

## Wie kann ich eine neue Gruppe erstellen?

- Öffnen Sie das **Hauptmenü** und wählen Sie dort **Neue Gruppe** (Alternativ drücken Sie auf "+" und wählen dann dort oben rechts _Neue Gruppe_ aus).
- Wählen Sie dann alle **Gruppenmitglieder** aus und klicken auf den Haken oben rechts; auf der nächsten Seite können Sie noch einen **Gruppennamen** vergeben.
- Sobald Sie eine **erste Nachricht** in der Gruppe schreiben, werden alle Gruppenmitglieder über die neue Gruppe informiert und können auch dort schreiben (solange Sie in der neuen Gruppe keine Nachricht geschrieben haben, ist sie für die anderen Mitglieder noch nicht sichtbar).


## Wer kann Mitglieder hinzufügen oder löschen?

- Jedes Gruppenmitglied hat **dieselben Rechte** wie jedes andere. Jeder kann daher jeden löschen oder weitere Mitglieder hinzufügen.
- Um die Mitglieder zu verwalten einfach in der Gruppe auf den Gruppennamen klicken.

## Ich habe mich selbst versehentlich gelöscht.

- Da Sie selbst nun kein Gruppenmitglied mehr sind, können Sie sich auch nicht selbst wieder hinzufügen.  Bitten Sie ein anderes Gruppenmitglied in einem normalen Chat, Sie wieder hinzuzufügen.

## Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- **Löschen** Sie entweder sich selbst als Gruppenmitglied oder den Chat selbst. Möchten Sie später wieder an der Gruppe teilnehmen, müssen Sie von einem noch aktiven Mitglied hinzugefügt werden.
- Alternativ können Sie eine Gruppe auch nur **stummschalten** - Sie erhalten dann alle Nachrichten und können bei Bedarf auch noch schreiben; es erfolgt dann aber keine Benachrichtigung mehr bei neuen Nachrichten.





# Speicherung der Nachrichten {#speicherung}

## Benötige ich für Delta Chat ein eigenes Konto?

- Nein, verwenden Sie einfach Ihr bestehendes E-Mail-Konto zum Messaging mit Delta Chat.

## Wo werden die Nachrichten auf dem IMAP-Server gespeichert?

- Mit Delta Chat versendete Nachrichten werden im Ordner "Chats" gespeichert, ebenso wie Antworten auf mit Delta Chat gesendete Nachrichten (Ausnahme: Googlemail, hier muss bei Bedarf eine Regel im Webinterface angelegt werden).

## Kann ich Delta Chat und ein anderes E-Mail-Programm gleichzeitig verwenden?

- Ja, kein Problem. Mit einem anderen E-Mail-Programm versandte Nachrichten erscheinen nach etwas Verzögerung sogar in Delta Chat, s. [Multi-Client](#multiclient)


# Verschlüsselung {#verschluesselung}

## Gibt es eine Ende-zu-Ende-Verschlüsselung?

- Ja.

## Was muss ich tun, um die Ende-zu-Ende-Verschlüsselung zu aktivieren?

- Nichts.

- Delta Chat (und andere Autocrypt-kompatible E-Mail-Programme) tauschen die Schlüssel selbständig mit den ersten versendeten Nachrichten aus.
Danach ist die Verbindung Ende-zu-Ende-verschlüsselt. Verwenden Sie oder Ihr Chatpartner zwischenzeitlich ein Programm, das nicht automatisch Ende-zu-Ende verschlüsseln kann,
wird die Ende-zu-Ende-Verschlüsselung automatisch ausgesetzt - und automatisch wieder begonnen, sobald die verwendeten Programme dies unterstützten.

- Wenn Sie die Ende-zu-Ende-Verschlüsselung _deaktivieren_ möchten, können Sie dies in unter _Fortgeschrittene Einstellungen_ tun.
Wie gesagt, standardmäßig ist sie _an_ und die Verbindung sicher, sobald dies möglich ist.

## Wird ohne Ende-zu-Ende-Verschlüsselung gar nicht verschlüsselt?

- Doch, es findet i.d.R. eine sog. Transportverschlüsselung statt; allerdings ist diese nicht ununterbrochen und so sind die Nachrichten unverschlüsselt auf Ihrem Server
und dem Server der Anbieter. Dies ist der Standard der bisherigen E-Mail-Kommunikation und bei vielen anderen Messengern.

## Wie kann ich die Verschlüsselung überprüfen?

Neben der Nachricht wird ein **kleines Schloss** angezeigt: Dieses sagt aus, dass die Nachricht verschlüsselt ist _und_ wirklich vom angegebenen Absender kommt _und_ dass Ihre Antwort ebenfalls verschlüsselt wird. 

Den angegebenen Absender können Sie im Profil des Chatpartners unter der die Option "Verschlüsselung" überprüfen:

- bei einer Ende-zu-Ende-Verschlüsselung werden hier zwei Zahlen-Buchstaben-Folgen (sog. Fingerabdrücke) angezeigt; vergleichen Sie diese mit der Anzeige auf dem Gerät des Partners über einen anderen Kanal (persönliches Treffen, Telefon, ...)

- bei einer Transportverschlüsselung wird dieser Status hier angezeigt.

Bei der Implementierung müssen Sie sich übrigens nicht wie bei vielen anderen Messengern auf Versprechungen verlassen. Sie können die Implementierung selbst überprüfen; Delta Chat ist Open Source und alle, wirklich alle, Programmteile stehen zur [Überprüfung bereit](https://github.com/deltachat/).

## Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

- OpenPGP.  Der Schlüsselaustausch findet automatisch über den Autocrypt-Standard statt.

## Kann ich meinen bestehenden privaten Schlüssel weiterverwenden?

- Ja. Versuchen Sie ihn unter "Erweiterte Einstellungen / Schlüssel verwalten" zu importieren.
Achtung: Der private Schlüssel darf nicht mit einem Passwort geschützt sein, entfernen Sie dieses bei Bedarf zuvor.

Wenn Sie keine Schlüssel haben, generiert Delta Chat automatisch einen für Sie; Sie müssen sich darum nicht kümmern.


# Mehrere Geräte verwenden {#multiclient}

## Kann ich Delta Chat auf mehreren Geräten gleichzeitig verwenden?

- Ja. Wenn Sie auf **dasselbe Konto** von verschiedenen Geräten zugreifen möchten (Multi-Client), müssen Sie den für die Verschlüsselung notwendigen **privaten Schlüssel übertragen:**

    - Wählen Sie auf dem ersten Gerät "Fortgeschrittene Einstellungen / Private Schlüssel verwalten / Exportieren nach Downloads"
    - Kopieren Sie den Schlüssel lokal via USB von Download-Verzeichnis des ersten Geräts in das Download-Verzeichnis des Zielgeräts. 
    - Auf dem Zielgerät wählen Sie dann "Fortgeschrittene Einstellungen / Private Schlüssel verwalten / Importieren aus Downloads"

- Für die Standardanwendung von Delta Chat - _ein_ Endgerät pro Konto, ähnlich wie bei den meisten anderen Messengern - ist all dies nicht notwendig.

- _Eingehende_ Nachrichten werden dabei auf allen Geräten sofort angezeigt, _ausgehende_ Nachrichten werden über Gerätegrenzen hinweg aktuell alle ca. 30 Minuten synchronisiert. Wenn wir genügend [Unterstützung](support) bekommen, ist geplant, dies noch weiter zu verbessern.


## Kann ich auf einem Gerät Delta Chat verwenden und auf dem nächsten einen anderen Client?

- Ja. Sie können sogar auf demselben Gerät verschiedene Clients verwenden.


## Delta Chat auf dem Linux Desktop

- Sie können Delta Chat unter Ubuntu Linux (oder anderen Linux Distributionen, die das **snap**-Paketformat unterstützen) auf dem  Desktop nutzen, indem Sie [Anbox](https://anbox.io) (Android in a Box) über das Terminal installieren:

  $ *sudo snap install --classic anbox-installer && anbox-installer*

- und dann die Delta Chat apk-Datei von [dieser Seite](download) herunterladen und mit dem folgenden Kommando zu **Anbox** hinzufügen:

  $ *adb install pfad/zu/com.b44t.messenger_\<version\>.apk* 
  
  adb ist die *Android Debug Bridge* und kann aus den Repositories installiert werden.

# Verschiedenes

## Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Ja, auf der Seite [Standards used in Delta Chat](../en/standards).




