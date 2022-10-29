---
title: FAQ
lang: de
render_toc: true
header: Häufig gestellte Fragen
---


## Was ist Delta Chat?

Delta Chat ist eine neue Chat-App, die mit Autocrypt verschlüsselte E-Mails versendet. 
**Sie müssen sich nirgendwo anmelden, verwenden Sie einfach Ihr bestehendes E-Mail-Konto mit Delta Chat.**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Wie finde ich Leute, mit denen ich chatten kann? 

Mit Delta Chat können Sie an jede existierende E-Mail-Adresse schreiben. Im Gegensatz
zu anderen Instant-Messengern muss der/die EmpfängerIn nicht Delta Chat installieren, um mit Ihnen zu kommunizieren. Er/sie kann einfach sein/ihr gewohntes Mailprogramm nutzen. 


### Welche Vorteile hat Delta Chat gegenüber anderen Messengern?

- Delta Chat ist _unabhängig_ von Unternehmen oder Dienstleistungen. Ihre Daten gehören nur _Ihnen_.
- Ihre Daten werden nicht auf einem zentralen Server gespeichert; im Gegensatz zu den meisten anderen Instant-Messengern schützt Delta Chat auf diese Weise sogar Ihre Metadaten.
- Ihr Adressbuch wird nicht an Dritte übermittelt.
- _Schnell_ durch die Verwendung von Push-IMAP.
- _Größte Nutzerbasis_ - EmpfängerInnen, die Delta Chat _nicht_ nutzen, können ebenfalls erreicht werden.
- _Elegante_ und _einfache_ Benutzeroberfläche.
- _Verteiltes_ System.
- _Kein Spam_ - standardmäßig werden nur Nachrichten bekannter Kontakte angezeigt.
- _Zuverlässig_ - sicher für den professionellen Einsatz.
- _Vertrauenswürdig_ - kann sogar für geschäftliche Nachrichten verwendet werden.
- Auf _Copyleft_ und _Standards_ basierende freie Software.


### Welche Nachrichten erscheinen in Delta Chat?

By default, Delta Chat shows:

- Messages sent by other Delta Chat users
- Replies to your Delta Chat messages, even if they are "normal e-mails".

Other e-mails don't appear in your app by default. At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well. This is the default setting.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja. Alle E-Mail-Anhänge werden als separate Nachrichten angezeigt. Ausgehende Nachrichten erhalten bei Bedarf automatisch Anhänge.


### Wer sieht mein Profilbild?

- Sie können ein Profilbild in den Einstellungen hinzufügen. Wenn Sie Ihren Kontakten eine Nachricht senden oder sie über einen QR-Code hinzufügen, sehen diese automatisch Ihr Profilbild.

- Kontakte, die Delta Chat nicht nutzen, sehen das Profilbild nicht (aber natürlich können sie Delta Chat installieren :)

- Aus Datenschutzgründen sieht niemand Ihr Profilbild, dem Sie nicht zuvor eine Nachricht gesendet haben.

- Ihr Profilbild wird nicht mit jeder Nachricht gesendet, aber häufig genug, so dass Ihre Kontakte es auch dann erhalten, wenn diese ein neues Gerät nutzen.


### Unterstützt Delta Chat HTML-E-Mails?

- Ja. Eingehende Nachrichten erhalten bei Bedarf eine Schaltfläche "Vollständige Nachricht anzeigen". Ausgehende E-Mails verwenden immer "Nur Text".


### Weshalb muss ich mein E-Mail-Kennwort in Delta Chat eingeben? Ist das sicher?

Genau wie auch bei anderen E-Mail-Programmen (z. B. Thunderbird, K9-Mail oder Outlook) benötigt Delta Chat das Passwort, um E-Mails versenden zu können. Das Passwort wird nur auf Ihrem Gerät gespeichert und bei der Anmeldung an Ihren E-Mail-Anbieter gesendet.

Wenn Sie einen E-Mail-Anbieter wie gmail.com oder yandex.ru nutzen, der OAuth2 unterstützt, wird Ihr Passwort nicht auf Ihrem Gerät gespeichert. In diesem Fall wird nur ein Zugriffstoken genutzt.

Da Delta Chat Open Source ist, können Sie den [Quellcode](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) einsehen und sich davon überzeugen, dass Ihre Zugangsdaten sicher gehandhabt werden. Wir freuen uns über Feedback, das unsere App sicherer für all unsere NutzerInnen macht.


### Welche App-Berechtigungen benötigt Delta Chat?

Je nach verwendetem Betriebssystem werden Sie möglicherweise aufgefordert, der App Berechtigungen zu erteilen. Diese werden wie folgt verwendet:

- Kamera *(kann verweigert werden)*
  - Bilder und Videos aufnehmen: Um Fotos zu senden
- Kontakte *(kann verweigert werden)*
  - Kontakte lesen: Um Kontakte zum Chatten zu finden
- Standort *(kann verweigert werden)*
  - Auf den ungefähren Standort zugreifen (netzwerkbasiert): Für die Standortübertragungsfunktion
  - Auf genauen Standort zugreifen (GPS- und netzwerkbasiert): Für die Standortübertragungsfunktion
- Mikrofon *(kann verweigert werden)*
  - Audio aufnehmen: Für Sprachnachrichten
- Speicher *(kann verweigert werden)*
  - SD-Karteninhalte ändern oder löschen: Um Nachrichtenanhänge herunterzuladen
  - SD-Karteninhalte lesen: Um Dateien mit Ihren Kontakten zu teilen
- Andere Berechtigungen:
  - Audio-Einstellungen ändern: Um Klingeltöne und die Lautstärke für Benachrichtigungen und Audionachrichten zu wählen
  - Beim Start ausführen: Um Delta Chat nicht manuell starten zu müssen
  - Vibrationsalarm steuern: Für Benachrichtigungen
  - Netzwerkverbindungen abrufen: Um eine Verbindung zu Ihrem E-Mail-Anbieter herzustellen
  - Ruhezustand deaktivieren: Um den Sicherheitscode während der Autocrypt-Setupnachricht einfacher abtippen zu können
  - Auf alle Netzwerke zugreifen: Um eine Verbindung zu Ihrem E-Mail-Anbieter herzustellen
  - WLAN-Verbindungen abrufen: Um eine Verbindung zu Ihrem E-Mail-Anbieter herzustellen
  - Fragen, ob Akku-Leistungsoptimierungen ignoriert werden können: Für NutzerInnen, die permanent Nachrichten empfangen möchten

### Was bedeutet Anheften, Stummschalten, Archivieren?

Verwenden Sie diese Tools, um Ihre Chats zu organisieren:

- **Angeheftete Chats** bleiben immer ganz oben in der Chatliste. So können Sie schnell auf Ihre Lieblingschats zugreifen oder Sie verwenden vorübergehend angeheftete Chats um Dinge nicht zu vergessen.

- **Stummgeschaltete Chats** erhalten keine Benachrichtigungen, bleiben ansonsten aber an ihrem Platz - so können Sie stummgeschaltete Chats auch anheften.

- **Archivierte Chats** werden nicht mehr in der Chatliste angezeigt. Ganz unten in der Chatliste, im Menü oder über die Suche können Sie aber weiterhin auf die archivierten Chats zugreifen.

- Wenn ein archivierter Chat eine neue Nachricht erhält, wird er, sofern er nicht stummgeschaltet ist, **wieder in die normale Chatliste verschoben**.  **Stummgeschaltete Chats bleiben archiviert**, bis Sie sie manuell aus dem Archiv entfernen.

Zum Archivieren oder Anheften, tippen Sie lange auf den Chat  (Android), verwenden Sie das Chatmenü (Android/Desktop) oder wischen Sie nach links (iOS); zum Stummschalten, verwenden Sie das Chatmenü (Android/Desktop) oder das Chatprofil (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [private app](#private-apps--webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


## Gruppen

### Eine Gruppe anlegen

- Wählen Sie **Neuer Chat** und dann **Neue Gruppe** aus dem Menü oben rechts oder über das entsprechende Symbol unter Android/iOS.
- Wählen Sie auf dem folgenden Bildschirm die **Gruppenmitglieder** aus und klicken Sie auf das Häkchen in der oberen rechten Ecke. Danach können Sie einen **Gruppennamen** und auch einen **Gruppenbild**  festlegen.
- Sobald Sie die **erste Nachricht** in die Gruppe schreiben, werden alle Mitglieder über die neue Gruppe informiert und können in der Gruppe antworten (solange Sie keine Nachricht in die Gruppe schreiben, ist die Gruppe für die Gruppenmitglieder nicht sichtbar).


### Mitglieder zu einer Gruppe hinzufügen

- Alle Gruppenmitglieder haben **die gleichen Rechte**. Jede/r kann daher Mitglieder löschen oder weitere hinzufügen.
- Um die Mitglieder zu verwalten, einfach in der Gruppe auf den Gruppennamen klicken.


### Ich habe mich selbst versehentlich gelöscht.

- Da Sie kein Gruppenmitglied mehr sind, können Sie sich selbst nicht mehr hinzufügen.
Kein Problem, bitten Sie einfach ein anderes Gruppenmitglied in einem normalen Chat, Sie erneut hinzuzufügen.


### Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Löschen Sie sich entweder aus der Mitgliederliste oder löschen Sie den gesamten Chat. 
Wenn Sie der Gruppe später erneut beitreten möchten, bitten Sie ein anderes Gruppenmitglied, Sie erneut hinzuzufügen.

- Alternativ können Sie eine Gruppe auch "stummschalten" - dies bedeutet, dass Sie weiterhin alle Nachrichten erhalten und neue schreiben können, aber nicht mehr über neue Nachrichten informiert werden.


### Was bedeuten die Häkchen neben den ausgehenden Nachrichten?

- **Ein Häkchen** bedeutet, dass die Nachricht erfolgreich versandt wurde.
- **Zwei Häkchen** bedeuten, dass mindestens ein Gerät des Empfängers zurückgemeldet hat, die Nachricht empfangen zu haben.
- Lesebestätigungen können deaktiviert werden. D.h. auch wenn Sie nur ein Häkchen sehen, kann die Nachricht gelesen worden sein.
- Umgekehrt bedeuten zwei Häkchen nicht automatisch, dass ein Mensch die Nachricht gelesen oder verstanden hat ;)


### What happens if I turn on "Delete old messages from server"?

- By default, Delta Chat stores all messages locally on your device. If you
  e.g. want to save storage space at your mail provider, you can choose to
  delete old messages automatically. They still remain on your device until you
  delete them there, too.
- To turn it on, go to "delete old messages from server" in the "Chats & Media"
  settings. You can set a timeframe between "at once" and "after a year"; this
  way, *all* e-mails will be deleted from the server after that timeframe. 
- Note that if you use Delta Chat on more than one device, you should leave the
  messages on the server, until the other device could download them, too. In
  this case, you should set auto-delete to "after a day" or something similar,
  depending on how often you turn on the other device.


### What happens if I turn on "Delete old messages from device"?

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

### Unterstützt Delta Chat eine Ende-zu-Ende-Verschlüsselung?

- Ja. Delta Chat implementiert den Autocrypt Level 1-Standard und kann 
daher Ende-zu-Ende verschlüsselte Nachrichten mit anderen Autocrypt-fähigen Anwendungen austauschen.

- Darüber hinaus unterstützt Delta Chat eine weitere Form der Ende-zu-Ende-Verschlüsselung, die sogar gegen aktive Angriffe schützt, siehe "Verifizierte Gruppen". 


### Was muss ich tun, um die Ende-zu-Ende-Verschlüsselung zu aktivieren?

- Nichts.

- Delta Chat (und andere [Autocrypt](https://autocrypt.org)-kompatible
E-Mail-Anwendungen) tauschen die für eine Ende-zu-Ende-Verschlüsselung benötigten Schlüssel automatisch mit der ersten versendeten Nachricht aus. Danach werden alle folgenden Nachrichten automatisch Ende-zu-Ende verschlüsselt.
Wenn einer der Chat-Kontakte eine E-Mail-Anwendung verwendet, die nicht Autocrypt-kompatibel ist, werden Nachrichten so lange unverschlüsselt gesendet, bis wieder eine Autocrypt-kompatible Anwendung verfügbar ist.

- Wenn Sie als Standardeinstellung keine Ende-zu-Ende-Verschüsselung verwenden möchten, können Sie dies unter "Einstellungen" bzw. "Erweiterte Einstellungen" festlegen.


### Wird ohne Ende-zu-Ende-Verschlüsselung gar nicht verschlüsselt?

- Mit den meisten E-Mail-Servern stellt Delta Chat eine _transportverschlüsselte_ Verbindung her ([TLS](https://de.wikipedia.org/wiki/Transport_Layer_Security)).
Diese schützt nur die Verbindung zwischen Ihrem Gerät und Ihrem E-Mail-Server. Wohingegen Ende-zu-Ende-Verschlüsselung die gesamte Kommunikation zwischen Ihrem Gerät und dem Fremdgerät schützt.


### Wie kann ich den kryptografischen Zustand mit einem Kontakt überprüfen?

Wenn Sie Ihren Gesprächspartner persönlich treffen:

- Tippen Sie auf **QR-Einladungscode** auf dem einen Gerät und dann **QR-Code scannen** auf dem anderen Gerät und scannen Sie den Code. Wenn beide Geräte online sind, 
wird (falls er noch nicht existiert) ein Chat-Kanal eingerichtet und die Schlüssel für die Verschlüsselung werden überprüft. Beide Kontakte erhalten eine "Absender verifiziert" Systemnachricht in ihrem 1:1 Chat.

Wenn Sie Ihren Gesprächspartner nicht persönlich treffen können, können Sie den Status manuell im Dialog "Verschlüsselungsinfo" überprüfen
(siehe Benutzerprofil auf Android/iOS bzw. Rechts-Klick auf einen Benutzerchat, wenn Sie eine Desktop-App verwenden):

- Für die Ende-zu-Ende-Verschlüsselung zeigt Delta Chat dort zwei Fingerabdrücke an.  Wenn auf dem Gerät Ihres Chatkontakts dieselben Fingerabdrücke angezeigt werden, ist die Verbindung sicher.

- Bei der Transportverschlüsselung wird dieser Zustand dort nur angezeigt.


### Wie kann ich die Verschlüsselung der Nachrichten überprüfen?

- Wenn neben einer Nachricht ein kleines **Vorhängeschloss** angezeigt wird, bedeutet dies, dass die Nachricht durchgehend Ende-zu-Ende verschlüsselt ist _und_ vom angegebenen Kontakt gesendet wurde.

- Wenn **kein Vorhängeschloss** vorhanden ist, wird die Nachricht normalerweise unverschlüsselt transportiert, z.B. weil der/die AbsenderIn oder Sie die Ende-zu-Ende-Verschlüsselung deaktiviert haben oder der/die AbsenderIn eine Anwendung nutzt, die keine Ende-zu-Ende-Verschlüsselung unterstützt.

### Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

- [Autocrypt](https://autocrypt.org) wird verwendet, um eine Ende-zu-Ende-Verschüsselung mit anderen Delta Chat- oder anderen Autocrypt-kompatiblen Apps aufzubauen.
  Autocrypt verwendet eine begrenzte Teilmenge des OpenPGP-Standards.

- Um vor aktiven Netzwerkangriffen zu schützen, implementiert Delta Chat [countermitm Kontakt-Setup- und Verifizierte-Gruppen-Protokolle](https://countermitm.readthedocs.io/en/latest/new.html). Dies geht über den Basisschutz der Verschlüsselung von Autocrypt Level 1 hinaus, behält aber dessen Einfachheit bei.  

### Was ist der Unterschied zwischen verifizierten Gruppen und 1:1 Chats mit verifizierten Kontakten?

- 1:1 Chats mit einem verifizierten Kontakt und verifizierte Gruppen sind nicht das Gleiche, auch wenn sich nur 2 Personen in einer verifizierten Gruppe befinden. Ein Unterschied ist, dass Sie zu einer Gruppe einfach weitere Personen hinzufügen können, aber es gibt noch weitere Unterschiede.

- Verifizierte Gruppen sind immer geschützt. Jeder Bruch (Klartextnachrichten oder falsch signierte Nachrichten) wird erkannt und nicht in diesem Chat dargestellt.
Sie können darauf vertrauen, dass alle Nachrichten in diesem verifizierten Chat nicht von Dritten verändert oder gelesen wurden.

- In 1:1 Chats wird, wenn möglich, Ende-zu-Ende verschlüsselt. Aber auch wenn eine Verschlüsselung nicht möglich ist, werden die Nachrichten versandt, damit NutzerInnen auch dann miteinander kommunizieren, wenn sie ihre E-Mail-Programme, Einstellungen oder Geräte gewechselt haben. Deshalb sehen Sie in diesen Chats kein Verifikationshäkchen, auch wenn Sie den Kontakt verifiziert haben.


### Unterstützt Delta Chat Perfect Forward Secrecy?

- Nein, u.a., da OpenPGP Perfect Forward Secrecy nicht unterstützt. Perfect Forward Secrecy arbeitet sitzungsorientiert, aber E-Mail ist von Natur aus asynchron und wird oft von verschiedenen Geräten aus verwendet.
Wenn Ihr geheimer Schlüssel aus Delta Chat Dritten bekannt wird und jemand eine Aufzeichnung Ihrer versendeten und empfangenen verschlüsselten Nachrichten besitzt, ist dieser in der Lage, die Nachrichten zu lesen.

- Beachten Sie, dass, falls Ihr Telefon beschlagnahmt oder gehackt wird, alle Nachrichten gelesen werden können, unabhängig davon, ob Perfect Forward Secrecy verwendet wird oder nicht.
Der Zugriff auf ein einzelnes Gerät eines Gruppenmitglieds verrät viel über den sozialen Graphen. Verwendet man E-Mail-Adressen, die sich nicht einfach auf Personen zurückverfolgen lassen, hilft das den Gruppenmitgliedern, sich vor den Folgen der Beschlagnahmung eines Gerätes zu schützen.

- Wir zeigen Wege auf, wie man im Falle einer Beschlagnahme eines Gerätes die Kommunikationen besser schützen kann.


### Wie schützt Delta Chat meine Metadaten?

- Da Delta Chat ein dezentraler Messenger ist, werden Metadaten nicht auf einem zentralen Server gespeichert. Allerdings werden diese auf den Mailservern des/der AbsenderIn und des/der EmpfängerIn einer Nachricht gespeichert.

- Jeder Mailserver kann derzeit über die unverschlüsselten An- und CC-Felder herausfinden, wer eine Nachricht an wen gesendet hat und welche E-Mail-Adressen Teil einer Gruppe sind. Delta Chat selbst kann unverschlüsselte An- und CC-Felder vollständig vermeiden und schreibt diese immer nur in den verschlüsselten Teil einer Nachricht. Lesen Sie dazu auch  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032).
Bei normalen 1:1 Chats ist das Hauptproblem, wie andere Mail-Programme, die womöglich Teil der Chatkommunikation sind, hiermit umgehen.

- Viele weitere E-Mail-Header, insbesondere der "Betreff"-Header, sind Ende-zu-Ende verschlüsselt. Lesen Sie dazu auch  [IETF RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Kann ich meinen existierenden privaten Schlüssel weiter verwenden?

- Ja. Der beste Weg ist, von der anderen E-Mail-Anwendung aus eine _Autocrypt Setup-Nachricht_ zu versenden. Suchen Sie eine solche Option in den Einstellungen der anderen Anwendung, z.B. unter "Autocrypt Setup Transfer starten", und folgen Sie den dort angezeigten Hinweisen.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

- Wenn Sie keinen Schlüssel besitzen oder nicht einmal wissen, dass Sie einen benötigen - keine Sorge: Delta Chat erstellt einen Schlüssel, wenn er benötigt wird. Sie müssen nichts weiter tun.


### Ich kann meinen existierenden PGP-Schlüssel nicht in Delta Chat importieren.

- Wahrscheinlich ist Ihr Schlüssel verschlüsselt und/oder mit einem Passwort geschützt. Solche Schlüssel werden von Delta Chat nicht unterstützt. Bitte entfernen Sie die Verschlüsselung und das Passwort und versuchen Sie den Import danach erneut.
Wenn Sie das Passwort nicht entfernen möchten, müssen Sie einen E-Mail-Alias zur Nutzung mit Delta Chat anlegen, sodass der Schlüssel von Delta Chat mit diesem E-Mail-Alias verknüpft ist.

- Delta Chat unterstützt "gängige" private Schlüsselformate, allerdings ist es unwahrscheinlich, dass wir 100% aller privaten Schlüssel aus sämtlichen Quellen unterstützen. 
Dies ist auch nicht das Hauptaugenmerk von Delta Chat (tatsächlich besitzt die große Mehrheit der Delta Chat NutzerInnen keinen Schlüssel, bevor sie Delta Chat verwendet). 
Wir versuchen jedoch, private Schlüssel aus anderen Quellen so gut wie möglich zu unterstützen.

- Das Entfernen des Passworts vom privaten Schlüssel ist abhängig von der Software, mit der Sie Ihre PGP-Schlüssel verwalten. 
Bei Enigmail können Sie Ihr Passwort im Fenster Schlüsselverwaltung auf einen leeren Wert setzen.
Bei GnuPG können Sie es über die [Kommandozeile einstellen](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Für andere Programme können Sie online eine Lösung finden.


### Warum verwendet Delta Chat kein pEp (pretty easy privacy)?

- Delta Chat verwendet den Autocrypt Ende-zu-Ende-Verschlüsselungsstandard. Lesen Sie die [Autocrypt  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep) für eine Unterscheidung zwischen Autocrypt und pEp.


## Mehrere Geräte verwenden {#multiclient}

### Kann ich Delta Chat auf mehreren Geräten zur selben Zeit verwenden?

Möchten Sie einen Account auf verschiedenen Geräten nutzen, müssen Sie in Delta Chat auf dem "alten" Gerät ein Backup erstellen und dieses auf dem neuen Gerät importieren:

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### Gibt es Pläne für eine Delta Chat Web-Anwendung?

- Es gibt keine direkten Pläne, aber einige vorläufige Gedanken.
- Es gibt 2-3 Möglichkeiten, einen Delta Chat Web-Client einzuführen, aber sie bedeuten alle immense Arbeit. Im Moment fokussieren wir uns darauf, stabile native Apps in den Appstores (Google Play/iOS/Windows/macOS/Linux repositories) anzubieten. 
- Sollten Sie einen Web-Client benötigen, weil Sie auf Ihrem Arbeitsrechner keine Software installieren dürfen, können Sie den Windows Desktop-Client bzw. Applmage für Linux nutzen. Sie finden diese unter [get.delta.chat](https://get.delta.chat).


### Was macht die Option "Kopie an mich selbst senden"?

Das Senden einer Kopie an Sie selbst stellt sicher, dass Sie Ihre eigenen Nachrichten auf all Ihren Geräten sehen. Wenn Sie mehrere Geräte nutzen, aber diese Option nicht eingeschaltet ist, sehen Sie nur die Nachrichten, die andere Ihnen geschickt haben, und die ausgehenden Nachrichten, die auf dem Gerät selbst verschickt wurden.

Die Kopie wird dabei an den Posteingang verschickt und von dort in den DeltaChat-Ordner verschoben. Delta Chat lädt *niemals* etwas in den Gesendet-Ordner hoch, weil dies bedeuten würde, dass eine Nachricht zweimal hochgeladen werden müsste (einmal durch SMTP und dann durch IMAP in den Gesendet-Ordner).

Die Standardeinstellung für "Kopie an mich selbst senden" ist "Aus".

### Warum gibt es die Funktion "Gesendet-Ordner beobachten"?

Der einzige Grund, den Gesendet-Ordner zu beobachten, ist, wenn Sie ein weiteres E-Mail-Programm (wie Thunderbird) mit demselben E-Mail-Account verwenden und die von dort versendeten Nachrichten in der Chat-Historie aufgeführt werden sollen.

Wir empfehlen für diesen Zweck aber "Delta Chat Desktop"; Sie können die App unter [get.delta.chat](https://get.delta.chat) herunterladen. Möglicherweise wird die Option "Gesendet-Ordner beobachten" zukünftig wegfallen; sie kommt aus einer Zeit, als Delta Chat Desktop noch nicht auf allen Plattformen zur Verfügung stand.

### Warum kann ich "DeltaChat-Ordner beobachten" ausschalten?

Einige BenutzerInnen verwenden Delta Chat als reguläres E-Mail-Programm und möchten lieber den Posteingang anstatt des DeltaChat-Ordners verwenden. Wenn Sie "DeltaChat-Ordner beobachten" ausschalten, sollten Sie auch "Autom. Verschieben in den DeltaChat-Ordner" ausschalten. Andernfalls funktioniert die Verwendung auf mehreren Geräten möglicherweise nicht richtig.


## Private Apps / webxdc

In Delta Chat, you can share "private apps", attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger. The technical term is [webxdc](https://webxdc.org).


### How private are private apps?

- Private apps can not send data to the Internet, or download anything.
- A private app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a private app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the private app as well.
- This also means: it can be a privacy risk to open private apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get private apps?

- In general, there is no curated appstore and Delta Chat is not responsible
  for private apps or their content. Anyone can share private apps with each
  other without restrictions.
- You can find some example apps on [webxdc.org](https://webxdc.org).
- Many people write their own private apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own private apps?

- Private apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimental Features

We are very grateful about feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. (You
like experiments? Register through "Sign up -> with Delta Chat"!)

### How can I use audio/video calls with Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "videochat instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to your jitsi/BBB room. This
  way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### Was ist eine verifizierte Gruppe? Weshalb ist das experimentell?

- Eine verifizierte Gruppe ist ein Chat, der Sicherheit vor einem aktiven Angreifer garantiert. Alle Nachrichten in einer verifizierten Gruppe sind Ende-zu-Ende verschlüsselt und Gruppenmitglieder können durch Scannen eines "QR-Einladungscodes" beitreten. Alle Gruppenmitglieder sind deshalb durch eine Kette von Einladungen miteinander verbunden, welche kryptografische Konsistenz gegen aktive Netzwerk- oder Anbieterangriffe garantiert.
Siehe [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) für  Forschung und Entwicklung hinter dieser Funktion.

- As of Oct 2022, "verified groups" remain an experimental feature. It is
  continuously improved and many bugs have been fixed since the original
  introduction in 2018. However, there remain cases, especially with large
  groups where inconsistencies can occur, or messages become unreadable.


### What are Broadcast Lists and how can I use them?

- With a Broadcast List you can send a message to many recipents at once; when
  they reply to you, you get the reply in your direct 1:1 chat with them. The
recipients can't see each other.
- Technically, it is an E-Mail with many recipients in BCC.
- You can turn on the feature in the "experimental features" section in the
  advanced settings. Then you can create a Broadcast List from the "New Chat"
dialog.
- In case you are using more than one device, Broadcast Lists are currently not
  synced between them.
- Messages sent to broadcast lists are not encrypted. Encryption would break
  anonymity, because then all recipients would know who else received it
  (Sending individual mails to everyone would be worse for rate limit and network
  consumption reason).


### How can I share my location with my chat partners?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat
  partners. *But:* to show the map, we need to download map tiles from
  mapbox.com, so if you *view* the map, mapbox.com is asked for the map of a
  specific area. If this is a privacy risk for you, this feature might not be
  for you. We are working on finding a decentralized alternative for Mapbox.
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### What does the experimental database encryption actually protect?

- Right now, the database encryption is still very experimental. Don't rely on
  it for protection, you should additionally use encryption of your operating
  system, if it provides any.
- The database encryption does not yet encrypt the blobs, only the rows and
  columns of the database. This more or less means that your messages are safe,
  but not your attachments.
- For iOS and Android, the encryption keys are stored in the system keychain.
  This means the encryption is as secure as the operating system it's running
  on.
- The Delta Chat desktop client doesn't offer database encryption yet, as there
  is no standard way to store the encryption keys on the different supported
  platforms.


### Why can I choose to only watch the DeltaChat folder?

Dies ist eine experimentelle Einstellung für BenutzerInnen, die serverseitige Regeln verwenden möchten. Dies wird nicht von allen Providern unterstützt, aber bei einigen können Sie Nachrichten mit einem "Chat-Version"-Header vom Server in den DeltaChat-Ordner verschieben. Normalerweise wird dies von der Delta Chat-App erledigt.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- es existiert eine serverseitige Regel, Nachrichten mit einem Chat-Version-Header in den DeltaChat-Ordner zu kopieren
- "Normale E-Mails anzeigen" ist auf "Nein, nur Chats" gesetzt

In this case, Delta Chat doesn't need to watch the Inbox, and it's enough to only watch the DeltaChat folder.


### How can I change my account to a different e-mail address?

1. Change your address at the “Password and Account” seetings screen in Delta
   Chat, enter your password (and if necessary, server settings) for the new
   account
2. If possible, make your old e-mail provider forward all e-mails to your new
   email address
3. Tell your contacts that you changed your address. If you write this to a
   verified group, they will acknowledge this automatically.

To learn about the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Verschiedenes

### Funktioniert Delta Chat mit _meinem_ E-Mail-Anbieter?

- Mit ziemlich hoher Wahrscheinlichkeit: Ja :) 
  Allerdings benötigen einige Anbieter besondere Einstellungen, um ordnungsgemäß zu funktionieren; eine von NutzerInnen erstellte Sammlung zu einigen Optionen findet sich unter [Provider Overview](https://providers.delta.chat).


### Delta Chat verwendet E-Mail - ist es dann wirklich ein _Instant_ Messenger?

- Typischerweise benötigt das Senden und Empfangen von Nachrichten nur wenige Sekunden. Es gibt Fälle, in denen es länger dauert, aber das trifft auch auf andere Messenger zu.
- Das Chatten geht schnell, wenn beide Seiten die App aktiv verwenden. Wenn die App im Hintergrund läuft, kann es zu Verzögerungen kommen.
- Das Empfangen von Nachrichten im Hintergrund kann deshalb manchmal Minuten dauern, weil Android und iOS Delta Chat daran hindert, im Hintergrund zu laufen, und die App so nur gelegentlich aktiv ist. Diese künstliche Verzögerung ist eher unter iOS zu spüren als unter Android.
- Dass Android und iOS Apps, die im Hintergrund laufen, beenden, ist allerdings ein Problem, das viele legitime Apps haben. Für weitere Informationen siehe [dontkillmyapp.com](https://dontkillmyapp.com/).


### Ist Delta Chat kompatibel mit Protonmail / Tutanota / Criptext?

- Ja und Nein.
- Nein, Sie können sich nicht mit Delta Chat in ein Protonmail-, Tutanota- oder Criptext-Konto einloggen, da diese keinen Standard-E-Mail-Empfang über IMAP anbieten.
- Ja, Sie können Delta Chat verwenden, um Nachrichten an Personen zu senden, die Protonmail, Tutanota oder Criptext verwenden. Diese Nachrichten werden jedoch nicht ende-zu-ende-verschlüsselt, da diese Anbieter keine mit dem [Autocrypt](https://autocrypt.org/)-Standard kompatible Verschlüsselung verwenden.


### Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Siehe hierzu [in Delta Chat genutzte Standards]({% include standards-url %}).

### Wie wird Delta Chat finanziert?

Delta Chat erhält kein Risikokapital, ist nicht verschuldet und steht  unter keinem Druck, große Gewinne zu erzielen oder Nutzer, deren Freunde und Familie an Werbekunden zu verkaufen (oder Schlimmeres).
Wir nutzen vielmehr öffentliche Finanzierungsquellen, die bisher aus der EU und den USA stammen, um ein dezentrales und diverses Chat-Messaging-Ökosystem zu schaffen, basierend auf freien und quelloffenen Entwicklungen der Gemeinschaft.

Konkret wurden die Delta-Chat-Entwicklungen bisher aus diesen Quellen finanziert:

- Das EU-Projekt [NEXTLEAP](https://nextleap.eu) finanzierte 2017 und 2018 die Entwicklung und Implementierung von "Verifizierten Gruppen" und "Setup Kontakt" und half auch bei der Integration der Ende-zu-Ende-Verschlüsselung durch [Autocrypt](https://autocrypt.org).

- Der [Open Technology Fund](https://opentechfund.org) hat Delta Chat erstmals 2018/2019 bezuschusst; mit dieser Förderung (~$200K) wurden hauptsächlich die Android-App verbessert sowie das Release der Desktop-App in einer Betaversion ermöglicht. Basierend auf Nutzererfahrungen im Menschenrechtskontext wurden zudem verschiedene Funktionen entwickelt, siehe unseren Bericht [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
Die zweite Förderung 2019/2020 (~$300K) half uns bei der  Erstellung der iOS-Version, unsere Kernbibliothek in die Programmiersprache "Rust" zu konvertieren und neue Funktionen für alle Plattformen bereitzustellen.

- Die [NLnet-Stiftung](https://nlnet.nl/) bewilligte 2019/2020 46K  EUR für die Fertigstellung von Rust-/Python-Bindungs und die Einrichtung eines Chat-Bot-Ökosystems.

- Im Jahr 2021 erhielten wir weitere EU-Mittel für zwei "Next-Generation-Internet" Anträge, nämlich für [EPPD - E-Mail-Provider-Portabilitätsverzeichnis](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) und [AEAP - E-Mail-Adressportierung](https://nlnet.nl/project/EmailPorting/) (~90K EUR). Ziel sind bessere Unterstützung von Mehrfachkonten, verbesserten QR-Code-Kontakt- und -Gruppen-Setups sowie Netzwerkverbesserungen auf allen Plattformen.

- Für 2021/2022 erhalten wir *Internet Freedom* Mittel (~500K USD) vom U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
Diese Finanzierung unterstützt unser langjähriges Ziel, Delta Chat besser nutzbar und kompatibel mit einer breiten Palette von E-Mail-Servern weltweit zu machen, sowie widerstandsfähiger und sicherer
an Orten, die häufig von Internetzensur und Abschaltungen betroffen sind.

- Manchmal erhalten wir einmalige Spenden von Privatpersonen, wofür wir sehr dankbar sind. Im Jahr 2021 hat uns zum Beispiel eine großzügige Privatperson 4K EUR überwiesen mit dem Betreff "Weiter so!". Wir verwenden dieses Geld zur Finanzierung von Entwicklungstreffen oder zur Deckung von Ad-hoc-Ausgaben, die nicht ohne weiteres vorhersehbar sind oder nicht aus öffentlichen Fördermitteln erstattet werden können.

- Last but by far not least beteiligen sich verschiedene ExpertInnen und Engagierte pro bono an Delta Chat. Sie erhalten dafür teils nur wenig, oftmals sogar überhaupt kein Geld. Ohne sie wäre Delta Chat nicht im entferntesten das, was es heute ist! 

Die oben aufgeführte finanzielle Förderung wird hauptsächlich von der merlinux GmbH in Freiburg (Deutschland) organisiert und an mehr als ein Dutzend Mitwirkende weltweit verteilt.

Die Finanzierung für die zweite Hälfte des Jahres 2022 und insbesondere für 2023 ist ein ständiges Thema. Neben der Beantragung von mehr öffentlichen Mitteln wollen wir unabhängiger von staatlichen Finanzierungsquellen werden. Bitte sehen Sie sich die Seite [Delta Chat - Mitwirken](https://delta.chat/de/contribute) für finanzielle und entwicklungsbezogene Unterstützungsmöglichkeiten an.
