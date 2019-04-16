---
title: Hilfe
layout: default-de
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Hilfe

- [Allgemein](#general)
- [Gruppen](#groups)
- [Verschlüsselung](#encryption)
- [Multi-Client](#multiclient)
- [Verschiedenes](#miscellaneous)

# Allgemein {#general}

## What is Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat is a new chat app that uses e-mails for transfering messages. 
If you receive a chat message just use your e-mail app to read the
message and reply. **You are not required to sign up anywhere, go to a website
or install Delta Chat.**

## How can i find people to chat with? 

With Delta Chat, you can write to every existing e-mail address - even
if the recipient is not using the Delta Chat App. This is one of
the biggest differences to other messengers: There is no need for the
receiver to install the same app as yours.

## Welche Vorteile hat Delta Chat gegenüber anderen Messengern?

- _unabhängig_ von Firmen oder Diensten. _Sie_ besitzen Ihre eigenen Daten.
- Ihre Daten werden nicht auf einem zentralen Server gespeichert; im Gegensatz zu den meisten anderen Messengern, schützt Delta Chat daher ebenfalls Metadaten (wer schreibt mit wem?) vor zentralen Beobachtern.
- Sie geben Ihr Adressbuch an niemanden weiter.
- _Schnell_ durch die Verwendung von Push-IMAP.
- _Größte Nutzerbasis_ - Empfänger _ohne_ Delta Chat können ebenfalls erreicht werden.
- _Kompatibel_ - nicht nur zu sich selbst.
- _Elegante_ und _einfache_ Benutzeroberfläche.
- _Verteiltes_ System.
- _Kein Spam_ - nur Nachrichten von bekannten Nutzern werden standardmäßig angezeigt.
- _Verlässlich_ - sicher für die professionelle Anwendung.
- _Vertrauenswürdig_ - kann selbst für geschäftliche Nachrichten verwendet werden.
- Vollständig _Open Source_ und basierend auf _Standards_.

## Welche Nachrichten erscheinen in Delta Chat?

In Delta Chat erscheinen automatisch nur:

- Nachrichten von Kontakten in Ihrem **Adressbuch**
- Nachrichten von Kontakten, **die von Ihnen kontaktiert wurden**
- **Antworten** auf von Ihnen gesendete Nachrichten

Alle anderen Nachrichten werden _nicht_ automatisch angezeigt. Über den Menüpunkt **Kontaktanfragen** können Sie sich aber eine Übersicht der weiteren Nachrichten anzeigen lassen und gegebenenfalls einen Chat starten.

## Was ist mit Spam?

- Nachrichten in gängigen Spam-Ordnern werden ignoriert und enthaltene Adressen werden nicht als bekannte Kontakte betrachtet.
- Da Nachrichten von unbekannten Kontakten nicht automatisch auftauchen, gibt es normalerweise **keinen Spam**.
- Bei Bedarf können Sie dennoch jeden Kontakt **blockieren**.

## Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja.

## Unterstützt Delta Chat HTML-E-Mails?

- Ja. Falls die eingehende E-Mail über keinen Nur-Text-Teil verfügt, konvertieren wir HTML-E-Mails selbst. In ausgehenden E-Mails wird immer Nur-Text verwendet.

# Gruppen {#groups}

## Wie kann ich eine neue Gruppe erstellen?

- Wählen Sie **Gruppe hinzufügen** aus dem "Sandwich-Menü" in der oberen rechten Ecke der Chat-Übersicht.
- Wählen Sie auf dem folgenden Bildschirm die **Gruppenmitglieder** aus und klicken Sie auf das Häkchen in der oberen rechten Ecke. Danach können Sie einen **Gruppennamen** festlegen.
- Sobald Sie die **erste Nachricht** in die Gruppe schreiben, werden alle Mitglieder über die neue Gruppe informiert und können in der Gruppe antworten (solange Sie keine Nachricht in die Gruppe schreiben, ist die Gruppe für die Gruppenmitglieder nicht sichtbar).

## Wie kann man Mitglieder zu einer Gruppe hinzufügen?

- Jedes Gruppenmitglied hat **dieselben Rechte** wie jedes andere. Jeder kann daher jeden löschen oder weitere Mitglieder hinzufügen.
- Um die Mitglieder zu verwalten, einfach in der Gruppe auf den Gruppennamen klicken.

## Was ist eine verifizierte Gruppe?

- Eine "verifizierte Gruppe" ist eine experimentelle Funktion (Stand Januar 2019). 
Durch das einander Hinzufügen mittels QR-Code Scans kann eine Gruppe "verifizierter" Mitglieder miteinander kommunizieren. Es erzwingt eine gegen Provider und Netzwerkangriffe sichere E2E-Gruppenverschlüsselung.
Einige Benutzertests und Rückmeldungen deuten jedoch darauf hin, dass Änderungen im Nutzererlebnis und der Implementierung sinnvoll sind. Die aktuelle Diskussion findest du hier:
https://countermitm.readthedocs.io/en/latest/new.html

## Ich habe mich selbst versehentlich gelöscht.

- Da Sie kein Gruppenmitglied mehr sind, können Sie sich nicht selbst erneut hinzufügen.
Dies ist aber kein Problem. Bitten Sie ein anderes Gruppenmitglied über einen normalen Chat, Sie erneut hinzuzufügen.

## Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Entweder du löschst dich aus der Mitgliederliste oder du löschst den gesamten Chat.  
  Wenn Sie der Gruppe später wieder beitreten möchten, bitten Sie ein anderes Gruppenmitglied, Sie erneut hinzuzufügen.

- Alternativ können Sie auch eine Gruppe "stumm schalten" - dabei erhalten Sie alle Nachrichten und 
 können immer noch schreiben, aber Sie werden nicht mehr über neue Nachrichten informiert.

# Verschlüsselung {#encryption}

## Unterstützt Delta Chat eine Ende-zu-Ende-Verschlüsselung?

- Ja. Delta Chat implementiert den Autocrypt Level 1 Standard und kann 
daher Nachrichten Ende-zu-Ende verschlüsselt mit anderen Autocrypt-fähigen Anwendungen austauschen.

## Was muss ich tun, um die Ende-zu-Ende-Verschlüsselung zu aktivieren?

- Nichts.

- Delta Chat Applikationen (und andere [Autocrypt](https://autocrypt.org)-kompatible
E-mail Anwendungen) tauschen die für eine Ende-zu-Ende-Verschlüsselung benötigten Schlüssel automatisch aus, wenn die ersten Nachrichten gesendet werden.
Danach werden alle Nachrichten automatisch Ende-zu-Ende verschlüsselt.
Falls ein Chat-Partner später keine Autocrypt-fähige E-Mail Anwendung mehr verwendet,
werden die Nachrichten solange nicht verschlüsselt, bis wieder eine Autocrypt-konforme Anwendung zur Verfügung steht. 

- Wenn Sie die Ende-zu-Ende Verschlüsselung _deaktivieren_ möchten, 
 verwenden Sie die entsprechende Einstellung unter "Einstellungen / Erweiterte Einstellungen".

## Wird ohne Ende-zu-Ende-Verschlüsselung gar nicht verschlüsselt?

- Nein. Bei den meisten E-Mail-Servern wird dann die Transportverschlüsselung (TLS) verwendet.


## Wie kann ich die Verschlüsselung überprüfen?

- Wenn ein kleines **Vorhängeschloss** neben einer Nachricht angezeigt wird,
bedeutet dies, dass die Nachricht Ende-zu-Ende verschlüsselt ist
_und_ vom angegebenen Absender gesendet wurde 
_und_ deine Antwort ebenfalls Ende-zu-Ende verschlüsselt wird.

- If there is **no padlock**, the message is usually transported unencrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Wie kann ich den Absender überprüfen?

Den angegebenen Absender können Sie im Profil des Chatpartners unter der Option "Verschlüsselung" überprüfen:

- You can tap "QR Invite code" on Android and then use the "scan QR code"
  button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- Für eine Ende-zu-Ende-Verschlüsseltung zeigt Delta Chat dort zwei Fingerabdrücke. 
Falls diese auf dem Gerät deines Chat Partners identisch sind, ist die Verbindung sicher.

- Bei der Transportverschlüsselung wird dieser Zustand dort nur angezeigt.


## Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

- OpenPGP. Der Schlüsselaustausch findet automatisch über den [Autocrypt](https://autocrypt.org)-Standard statt.

## Kann ich meinen existierenden privaten Schlüssel weiter verwenden?

- Ja. Der beste Weg ist, in der anderen E-Mail-App eine _Autocrypt Setup Message_ loszuschicken. Eine solche Option finden Sie in den Einstellungen der anderen App z.B. unter "Autocrypt Setup Transfer starten"; folgen Sie dann den dort angezeigten Hinweisen.

- Alternativ können Schlüssel unter "Erweiterte Einstellungen / Schlüssel verwalten" importiert werden. Achtung: Der private Schlüssel darf nicht mit einem Passwort geschützt sein bzw. dieses muss bei Bedarf zuvor entfernt werden.

Wenn Sie keinen Schlüssel besitzen oder nicht einmal wissen, dass Sie einen benötigen - keine Sorge: Delta Chat erstellt einen Schlüssel, wenn er benötigt wird.

# Mehrere Geräte verwenden {#multiclient}

## Kann ich Delta Chat auf mehreren Geräten gleichzeitig verwenden?

Wenn **dasselbe Konto** auf unterschiedlichen (Autocrypt-fähigen) Geräten verwenden werden soll, müssen die Verschlüsselungsfunktionen synchronisiert werden:

- Wählen Sie auf dem ersten Gerät "Weitere Einstellungen / Autocrypt-Setup-Nachricht versenden"
und klicken Sie, bis ein "Setup-Code" angezeigt wird. 

- Warte auf dem anderen Gerät, bis die "Autocrypt Setup Message" ankommt.
Nach dem Anklicken erscheint dann eine Abfrage des Setup Codes. 

- Die Synchronisation ist nun erfolgreich abgeschlossen und du kannst mit beiden Geräten
E2E-verschlüsselte Nachrichten an deine Kommunikationspartner senden und von ihnen empfangen.

# Verschiedenes {#miscellaneous}

## Funktioniert Delta Chat mit _meinem_ E-Mail-Anbieter?

- Mit ziemlich hoher Wahrscheinlichkeit: Ja :) 
Allerdings benötigen einige Anbieter besondere Optionen, um ordnungsgemäß zu funktionieren; eine von Nutzern erstellte Sammlung zu einigen Optionen findet sich unter [Provider Overview](https://support.delta.chat/t/provider-overview/).


## Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Ja, auf der Seite [Standards used in Delta Chat]({% include standards-url %}).
