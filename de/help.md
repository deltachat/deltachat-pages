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

Delta Chat zeigt automatisch:

- Nachrichten von Kontakten aus Ihrem **Adressbuch**
- Nachrichten von Kontakten, **die von Ihnen kontaktiert wurden**
- **Antworten** auf von Ihnen gesendete Nachrichten

Andere Nachrichten werden nicht automatisch angezeigt; diese sind unter **Kontaktanfragen** zu finden. Wenn gewünscht, kann ein neuer Chat von dort gestartet werden.


### Was ist mit Spam?

- Nachrichten in allgemeinen Spam-Ordnern werden ignoriert und darin enthaltene Adressen gelten nicht als bekannte Kontakte.
- Da Nachrichten von unbekannten Kontakten nicht automatisch angezeigt werden, gibt es normalerweise **keinen Spam**.
- Sie können jedoch bei Bedarf jeden Kontakt **blockieren**.


### Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja. Alle E-Mail-Anhänge werden als separate Nachrichten angezeigt. Ausgehende Nachrichten erhalten bei Bedarf automatisch Anhänge.


### Wer sieht mein Profilbild?

- Sie können ein Profilbild in den Einstellungen hinzufügen. Wenn Sie Ihren Kontakten eine Nachricht senden oder sie über einen QR-Code hinzufügen, sehen diese automatisch Ihr Profilbild.

- Kontakte, die kein Delta Chat benutzen, sehen Ihr Profilbild als E-Mail Anhang.

- Aus Datenschutzgründen sieht niemand Ihr Profilbild, dem Sie nicht zuvor eine Nachricht gesendet haben.

- Ihr Profilbild wird nicht mit jeder Nachricht gesendet, aber häufig genug, so dass Ihre Kontakte es auch dann erhalten, wenn diese ein neues Gerät nutzen.


### Unterstützt Delta Chat HTML-E-Mails?

- Ja. Fehlt bei eingehenden E-Mails der "Nur-Text"-Teil, werden HTML E-Mails in der App in "Nur-Text" umgewandelt. Ausgehende E-Mails verwenden immer "Nur-Text".


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


## Gruppen

### Eine Gruppe anlegen

- Wählen Sie **Neuer Chat** und dann **Neue Gruppe** aus dem Menü oben rechts oder über das entsprechende Symbol unter Android/iOS.
- Wählen Sie auf dem folgenden Bildschirm die **Gruppenmitglieder** aus und klicken Sie auf das Häkchen in der oberen rechten Ecke. Danach können Sie einen **Gruppennamen** und auch einen **Gruppenbild**  festlegen.
- Sobald Sie die **erste Nachricht** in die Gruppe schreiben, werden alle Mitglieder über die neue Gruppe informiert und können in der Gruppe antworten (solange Sie keine Nachricht in die Gruppe schreiben, ist die Gruppe für die Gruppenmitglieder nicht sichtbar).


### Mitglieder zu einer Gruppe hinzufügen

- Alle Gruppenmitglieder haben **die gleichen Rechte**. Jede/r kann daher Mitglieder löschen oder weitere hinzufügen.
- Um die Mitglieder zu verwalten, einfach in der Gruppe auf den Gruppennamen klicken.


### Was ist eine verifizierte Gruppe? Weshalb ist das experimentell?

- Eine verifizierte Gruppe ist ein Chat, der Sicherheit vor einem aktiven Angreifer garantiert. Alle Nachrichten in einer verifizierten Gruppe sind Ende-zu-Ende verschlüsselt und Gruppenmitglieder können durch Scannen eines "QR-Einladungscodes" beitreten. Alle Gruppenmitglieder sind deshalb durch eine Kette von Einladungen miteinander verbunden, welche kryptografische Konsistenz gegen aktive Netzwerk- oder Anbieterangriffe garantiert.
Siehe [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) für  Forschung und Entwicklung hinter dieser Funktion.

- Seit Dezember 2019 gibt es "verifizierte Gruppe" als experimentelles Feature.
Es wird kontinuierlich verbessert und viele Fehler wurden seit der ursprünglichen Einführung in 2018 behoben. Allerdings gibt es immer noch Fälle, besonders in großen Gruppen, bei denen es zu Inkonsistenzen kommen kann oder Nachrichten unleserlich werden. Anfang 2020 wird es eine Sicherheitsüberprüfung geben und es finden einige neue Entwicklungen rund um QR-Beitrittsprotokolle statt. Die Chancen, dass wir das Etikett "experimentell" in nicht all zu ferner Zukunft entfernen können, stehen gut.


### Ich habe mich selbst versehentlich gelöscht.

- Da Sie kein Gruppenmitglied mehr sind, können Sie sich selbst nicht mehr hinzufügen.
Kein Problem, bitten Sie einfach ein anderes Gruppenmitglied in einem normalen Chat, Sie erneut hinzuzufügen.


### Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Löschen Sie sich entweder aus der Mitgliederliste oder löschen Sie den gesamten Chat. 
Wenn Sie der Gruppe später erneut beitreten möchten, bitten Sie ein anderes Gruppenmitglied, Sie erneut hinzuzufügen.

- Alternativ können Sie eine Gruppe auch "stummschalten" - dies bedeutet, dass Sie weiterhin alle Nachrichten erhalten und neue schreiben können, aber nicht mehr über neue Nachrichten informiert werden.


### What do the ticks shown beside outgoing messages mean?

- **One tick** means that the message was sent successfully to your provider.
- **Two ticks** mean that at least one recipient's device
  reported back to having received the message.
- Recipients may have disabled read-receipts,
  so even if you see only one tick, the message may have been read.
- The other way round, two ticks do not automatically mean
  that a human has read or understood the message ;)


## Verschlüsselung {#encryption}

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

- Alternativ können Sie den Schlüssel manuell unter "Einstellungen" bzw. "Erweiterte Einstellungen" und dann "Importiere geheime Schlüssel" importieren. 
Achtung: Der private Schlüssel darf _nicht_ mit einem Passwort geschützt sein bzw. dieses muss zuvor entfernt werden.

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

- Wählen Sie auf dem alten Gerät "Einstellungen" bzw. "Einstellungen / Chats und Medien" und danach "Backup". Geben Sie Ihr(e) Entsperrungs-PIN, -Muster oder -Passwort ein. Klicken Sie dann auf "Backup starten". Die Backup-Datei wird auf Ihrem Gerät gespeichert. Nun übertragen Sie die Datei auf Ihr neues Gerät. 
- Rufen Sie auf Ihrem neuen Gerät Delta Chat auf und wählen Sie nun auf dem Startbildschirm "Backup importieren", anstatt sich mit Ihrer E-Mail-Adresse einzuloggen. Ihre Chat-Konversationen, Schlüssel und Medien werden nun auf das neue Gerät kopiert. 
- Die Geräte sind nun synchronisiert und Sie können beide für das Senden und Empfangen von Ende-zu-Ende verschlüsselten Nachrichten mit Ihren Chat-Kontakten nutzen.

### Gibt es Pläne für eine Delta Chat Web-Anwendung?

- Es gibt keine direkten Pläne, aber einige vorläufige Gedanken.
- Es gibt 2-3 Möglichkeiten, einen Delta Chat Web-Client einzuführen, aber sie bedeuten alle immense Arbeit. Im Moment fokussieren wir uns darauf, stabile native Apps in den Appstores (Google Play/iOS/Windows/macOS/Linux repositories) anzubieten. 
- Sollten Sie einen Web-Client benötigen, weil Sie auf Ihrem Arbeitsrechner keine Software installieren dürfen, können Sie den Windows Desktop-Client bzw. Applmage für Linux nutzen. Sie finden diese unter [get.delta.chat](https://get.delta.chat).


### Warum kann ich "Posteingang beobachten" ausschalten?

Dies ist eine experimentelle Einstellung für BenutzerInnen, die serverseitige Regeln verwenden möchten. Dies wird nicht von allen Providern unterstützt, aber bei einigen können Sie Nachrichten mit einem "Chat-Version"-Header vom Server in den DeltaChat-Ordner verschieben. Normalerweise wird dies von der Delta Chat-App erledigt.

"Posteingang beobachten" auszuschalten ist sinnvoll, wenn die folgenden beiden Punkte erfüllt sind:

- es existiert eine serverseitige Regel, Nachrichten mit einem Chat-Version-Header in den DeltaChat-Ordner zu kopieren
- "Normale E-Mails anzeigen" ist auf "Nein, nur Chats" gesetzt

In diesem Fall muss Delta Chat den Posteingang nicht beobachten.

### Was macht die Option "Kopie an mich selbst senden"?

Das Senden einer Kopie an Sie selbst stellt sicher, dass Sie Ihre eigenen Nachrichten auf all Ihren Geräten sehen. Wenn Sie mehrere Geräte nutzen, aber diese Option nicht eingeschaltet ist, sehen Sie nur die Nachrichten, die andere Ihnen geschickt haben, und die ausgehenden Nachrichten, die auf dem Gerät selbst verschickt wurden.

Die Kopie wird dabei an den Posteingang verschickt und von dort in den DeltaChat-Ordner verschoben. Delta Chat lädt *niemals* etwas in den Gesendet-Ordner hoch, weil dies bedeuten würde, dass eine Nachricht zweimal hochgeladen werden müsste (einmal durch SMTP und dann durch IMAP in den Gesendet-Ordner).

Die Standardeinstellung für "Kopie an mich selbst senden" ist "Aus".

### Warum gibt es die Funktion "Gesendet-Ordner beobachten"?

Der einzige Grund, den Gesendet-Ordner zu beobachten, ist, wenn Sie ein weiteres E-Mail-Programm (wie Thunderbird) mit demselben E-Mail-Account verwenden und die von dort versendeten Nachrichten in der Chat-Historie aufgeführt werden sollen.

Wir empfehlen für diesen Zweck aber "Delta Chat Desktop"; Sie können die App unter [get.delta.chat](https://get.delta.chat) herunterladen. Möglicherweise wird die Option "Gesendet-Ordner beobachten" zukünftig wegfallen; sie kommt aus einer Zeit, als Delta Chat Desktop noch nicht auf allen Plattformen zur Verfügung stand.

### Warum kann ich "DeltaChat-Ordner beobachten" ausschalten?

Einige BenutzerInnen verwenden Delta Chat als reguläres E-Mail-Programm und möchten lieber den Posteingang anstatt des DeltaChat-Ordners verwenden. Wenn Sie "DeltaChat-Ordner beobachten" ausschalten, sollten Sie auch "Autom. Verschieben in den DeltaChat-Ordner" ausschalten. Andernfalls funktioniert die Verwendung auf mehreren Geräten möglicherweise nicht richtig.

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

- Sie können Ihren Protonmail-, Tutanota- oder Criptext-Account nicht mit Delta Chat nutzen, da diese das Empfangen von Mails über IMAP nicht anbieten. 
- Sie können allerdings Nachrichten über Delta Chat an Kontakte senden, die Protonmail, Tutanota oder Criptext nutzen. Diese Nachrichten sind allerdings nicht Ende-zu-Ende verschlüsselt. Die Verschlüsselung, die diese Provider anbieten, funktioniert nur innerhalb deren Plattformen und ist nicht mit anderen Systemen kompatibel. 
- Die Ende-zu-Ende-Verschlüsselung mit Delta Chat funktioniert mit allen Providern und E-Mail-Programmen, die den [Autocrypt Standard](https://autocrypt.org/dev-status.html) unterstützen.  


### Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Siehe hierzu [in Delta Chat genutzte Standards]({% include standards-url %}).

### Wie wird Delta Chat finanziert?

Delta Chat erhält keinerlei Venture-Kapital (Risikokapital) und ist damit niemandem verpflichtet und nicht unter Druck, hohe Erträge zu generieren oder die Daten von Benutzern an Werbetreibende zu verkaufen (oder Schlimmeres).

Delta Chat wurde bisher hauptsächlich durch vier Stellen finanziert: 

- Das EU-Projekt [NEXTLEAP](https://nextleap.eu) finanzierte 2017 und 2018 die Entwicklung und Implementation der Verifizierten Gruppen und die Einrichtung der Kontaktprotokolle. 

- Der [Open Technology Fund](https://opentechfund.org) hat Delta Chat zweimal bezuschusst: Mit der ersten Förderung (~$200K) wurden 2018/2019 hauptsächlich die Android-App verbessert sowie das Release der Desktop-App in einer Betaversion ermöglicht. Basierend auf Nutzererfahrungen im Menschenrechtskontext wurden zudem verschiedene Funktionen entwickelt, siehe unseren Bericht [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
Die zweite Förderung 2019/2020 (~$300K) läuft derzeit noch. Durch sie werden die Veröffentlichung von Delta/iOS-Versionen, die Konvertierung unserer Core Library (Programmbibliothek) in die Programmiersprache Rust sowie weitere Funktionalitäten für alle Plattformen ermöglicht. Aktuelle Infos finden Sie auf unserem [Blog](https://delta.chat/en/blog).

- Die [NLnet foundation](https://nlnet.nl/) bewilligte 46.000 €, um den Transfer von Python in Rust zu vervollständigen und ein Chat-Bot-Ökosystem zu entwickeln.

- Last but by far not least beteiligen sich verschiedene ExpertInnen und Engagierte pro bono an Delta Chat. Sie erhalten dafür teils nur wenig, oftmals sogar überhaupt kein Geld. Ohne sie wäre Delta Chat nicht im entferntesten das, was es heute ist! 

Die oben aufgeführte finanzielle Förderung wurde von der Merlinux GmbH in Freiburg (Deutschland) organisiert und an fast ein Dutzend Mitwirkende verteilt.  

Die Förderung für 2020/2021 steht noch nicht fest. Wir verfolgen mehrere
Möglichkeiten mit verschiedenen Organisationen und PartnerInnen. Wir sind zudem am Überlegen, ob wir Spenden einwerben sollen. Wir haben bereits einen kleinen [Delta Chat / Liberapay Spenden Account](https://liberapay.com/delta.chat/) eingerichtet, diesen aber bisher nicht groß veröffentlicht. Es sind bis jetzt zudem ungefähr 3.000-4.000 € über Björns (dem ursprünglichen Autor von Delta Chat) Paypal- und Bitcoin-Spendenkanäle eingegangen.
