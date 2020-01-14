---
title: FAQ
lang: de
render_toc: true
header: Häufig gestellte Fragen
---



<!-- GENERATED FILE -- DO NOT EDIT -->




## Was ist Delta Chat?

Delta Chat ist eine neue Chat-App, die mit Autocrypt verschlüsselte E-Mails versendet. 
**Sie müssen sich nirgendwo anmelden, verwenden Sie einfach Ihr bestehendes E-Mail-Konto bei Delta Chat.**


### Wie finde ich Leute, mit denen ich chatten kann? 

Mit Delta Chat können Sie an jede existierende E-Mail Adresse schreiben -
selbst dann, wenn der Empfänger nicht Delta Chat verwendet. Im Gegensatz
zu anderen Instant Messengern besteht für den Empfänger keine Notwendigkeit,
dieselbe Anwendung zu installieren, die Sie auch verwenden.


### Welche Vorteile hat Delta Chat gegenüber anderen Messengern?

- _Unabhängig_ von Unternehmen oder Dienstleistungen. _Sie_ besitzen Ihre Daten.
- Ihre Daten werden _nicht_ auf einem zentralen Server gespeichert; im Gegensatz zu den meisten anderen Instant Messengern schützt Delta Chat auf diese Weise sogar Ihre Metadaten (wer schreibt mit wem?)
- Sie übermitteln Ihr Adressbuch nicht an Dritte.
- _Schnell_ durch die Verwendung von Push-IMAP.
- _Größte Nutzerbasis_ - Empfänger, die Delta Chat _nicht_ nutzen, können ebenfalls erreicht werden.
- _Kompatibel_ - nicht nur zu sich selbst.
- _Elegante_ und _einfache_ Benutzeroberfläche.
- _Verteiltes_ System.
- _Kein Spam_ - standardmäßig werden nur Nachrichten bekannter Benutzer angezeigt.
- _Zuverlässig_ - sicher für den professionellen Einsatz.
- _Vertrauenswürdig_ - kann sogar für geschäftliche Nachrichten verwendet werden.
- Auf _Copyleft_ und _Standards_ basierende freie Software.


### Welche Nachrichten erscheinen in Delta Chat?

Delta Chat zeigt automatisch:

- Nachrichten von Kontakten in Ihrem **Adressbuch**
- Nachrichten von Kontakten, **die von Ihnen kontaktiert wurden**
- **Antworten** auf von Ihnen gesendete Nachrichten

Andere Nachrichten werden nicht automatisch angezeigt, diese sind im _Hauptmenü_ unter **Kontaktanfragen** zu finden. Wenn gewünscht, kann ein neuer Chat von dort gestartet werden.


### Was ist mit Spam?

- Nachrichten in allgemeinen Spam-Ordnern werden ignoriert und enthaltene Adressen gelten nicht als bekannte Kontakte.
- Da Nachrichten von unbekannten Kontakten nicht automatisch angezeigt werden, gibt es normalerweise **keinen Spam**.
- Sie können jedoch bei Bedarf jeden Kontakt **sperren**.


### Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja. Neben Klartext werden alle E-Mail-Anhänge als separate Nachrichten angezeigt. Ausgehende Nachrichten erhalten bei Bedarf automatisch Anhänge.


### Wer sieht mein Profilbild?

- Sie können ein Profilbild in den Einstellungen hinzufügen. Wenn Sie Ihren Kontakten eine Nachricht senden oder sie über einen QR-Code hinzufügen, sehen diese automatisch Ihr Profilbild.

- Kontakte die kein Delta Chat benutzen sehen es als E-Mail Anhang.

- Aus Datenschutzgründen sieht niemand Ihr Profilbild bevor Sie ihnen eine Nachricht senden.

- Ihr Profilbild wird nicht mit jeder Nachricht gesendet, aber häufig genug, dass Ihre Kontakte es erhalten werden, sogar wenn diese ein neues Gerät hinzufügen.


### Unterstützt Delta Chat HTML E-Mails?

- Ja. Fehlt bei eingehenden E-Mails der "Nur-Text"-Teil, werden HTML E-Mails in der App in Nur-Text umgewandelt. Ausgehende E-Mails verwenden immer Nur-Text.


### Weshalb muss ich mein E-Mail Kennwort in Delta Chat eingeben? Ist das sicher?

Genau wie auch bei anderen E-Mail Programmen wie Thunderbird, K9-Mail oder Outlook benötigt das Programm das Passwort, um E-Mails versenden zu können. Selbstverständlich wird das Passwort nur auf Ihrem Gerät gespeichert. Das Passwort wird nur an Ihren E-Mail Anbieter gesendet (wenn Sie sich einloggen), welcher ohnehin Zugriff auf Ihre Mails hat.

Wenn Sie einen E-Mail-Anbieter wie gmail.com oder yandex.ru mit Unterstützung für OAuth2 nutzen, dann wird Ihr Passwort nicht gespeichert. In diesem Fall wird nur ein Zugriffstoken genutzt.

Da Delta Chat Open Source ist, können Sie den [Quellcode](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) überprüfen, wenn Sie sich davon überzeugen möchten, dass Ihre Zugangsdaten sicher gehandhabt werden. Wir freuen uns über Feedback welches unsere App sicherer für all unsere Nutzer macht.


### Welche Android App-Berechtigungen benötigt Delta Chat?

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
  - Audio-Einstellungen ändern: Damit Sie Klingeltöne und die Lautstärke für Benachrichtigungen und Audionachrichten wählen können
  - Beim Start ausführen: Damit Sie Delta Chat nicht manuell starten müssen
  - Vibrationsalarm steuern: Für Benachrichtigungen
  - Netzwerkverbindungen abrufen: Um eine Verbindung zu Ihrem E-Mail-Anbieter herzustellen
  - Ruhezustand deaktivieren: Damit Sie einfacher den Sicherheitscode während der Autocrypt-Setupnachricht abtippen können
  - Auf alle Netzwerke zugreifen: Um eine Verbindung zu Ihrem E-Mail-Anbieter herzustellen
  - WLAN-Verbindungen abrufen: Um eine Verbindung zu Ihrem E-Mail-Anbieter herzustellen
  - Fragen, ob Akku-Leistungsoptimierungen ignoriert werden können: Für Nutzer, die permanent Nachrichten empfangen möchten


## Gruppen

### Eine Gruppe anlegen

- Wählen Sie **Gruppe hinzufügen** aus dem "Sandwich-Menü" in der oberen rechten Ecke der Chat-Übersicht.
- Wählen Sie auf dem folgenden Bildschirm die **Gruppenmitglieder** aus und klicken Sie auf das Häkchen in der oberen rechten Ecke. Danach können Sie einen **Gruppennamen** festlegen.
- Sobald Sie die **erste Nachricht** in die Gruppe schreiben, werden alle Mitglieder über die neue Gruppe informiert und können in der Gruppe antworten (solange Sie keine Nachricht in die Gruppe schreiben, ist die Gruppe für die Gruppenmitglieder nicht sichtbar).


### Mitglieder zu einer Gruppe hinzufügen

- Jedes Gruppenmitglied hat **dieselben Rechte** wie jedes andere. Jeder kann daher jeden löschen oder weitere Mitglieder hinzufügen.
- Um die Mitglieder zu verwalten, einfach in der Gruppe auf den Gruppennamen klicken.


### Was ist eine verifizierte Gruppe? Weshalb ist das experimentell?

- Eine verifizierte Gruppe ist ein Chat, welcher Sicherheit gegen einen aktiven Angreifer garantiert. Alle Nachrichten in einer verifizierten Gruppe sind Ende-zu-Ende verschlüsselt und Gruppenmitglieder können durch Scannen eines "QR-Einladungscodes" beitreten. Alle Gruppenmitglieder sind deshalb durch eine Kette von Einladungen miteinander verbunden, welche kryptografische Konsistenz gegen aktive Netzwerk- oder Anbieterangriffe garantiert.
Siehe [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) für die Forschung und Entwicklung hinter dieser Funktion.

- Im Dezember 2019 bleibt eine "verifizierte Gruppe" eine experimentelle Funktion.
 Sie wird kontinuierlich verbessert und viele Fehler wurden seit der ursprünglichen Einführung in 2018 behoben. Allerdings gibt es immernoch Fälle, besonders in großen Gruppen, in denen es zu inkonsistenzen kommen kann oder Nachrichten unleserlich werden. Anfang 2020 wird es eine Sicherheitsüberprüfung geben und es finden einige neue Entwicklungen rund um QR-Beitrittsprotokolle statt. Die Chancen, dass wir das Etikett "Experimentell" in nicht all zu ferner Zukunft entfernen, stehen gut.


### Ich habe mich selbst versehentlich gelöscht.

- Da Sie kein Gruppenmitglied mehr sind, können Sie sich selbst nicht mehr hinzufügen.
Kein Problem, bitten Sie einfach ein anderes Gruppenmitglied in einem normalen Chat, Sie erneut hinzuzufügen.


### Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Löschen Sie sich entweder aus der Mitgliederliste oder löschen Sie den gesamten Chat. 
Wenn Sie der Gruppe später erneut beitreten möchten, bitten Sie ein anderes Gruppenmitglied, Sie erneut hinzuzufügen.

- Alternativ können Sie eine Gruppe auch "Stummschalten" - dies bedeutet, dass Sie weiterhin alle Nachrichten erhalten und neue schreiben können, aber nicht mehr über neue Nachrichten informiert werden.


## Verschlüsselung {#encryption}

### Unterstützt Delta Chat eine Ende-zu-Ende-Verschlüsselung?

- Ja. Delta Chat implementiert den Autocrypt Level 1-Standard und kann 
daher Ende-zu-Ende-verschlüsselte Nachrichten mit anderen Autocrypt-fähigen Anwendungen austauschen.


### Was muss ich tun, um die Ende-zu-Ende-Verschlüsselung zu aktivieren?

- Nichts.

- Delta Chat (und andere [Autocrypt](https://autocrypt.org)-kompatible
E-Mail Anwendungen) tauschen die für eine Ende-zu-Ende-Verschlüsselung benötigten Schlüssel automatisch mit der ersten versendeten Nachricht aus. Danach werden alle folgenden Nachrichten automatisch Ende-zu-Ende verschlüsselt.
Wenn einer der Chat-Partner eine E-Mail-Anwendung verwendet, die nicht Autocrypt-kompatibel ist, werden Nachrichten solange unverschlüsselt gesendet, bis wieder eine Autocrypt-kompatible Anwendung verfügbar ist.

- Falls Sie die Ende-zu-Ende-Verschlüsselung _abschalten_ möchten, 
  deaktivieren Sie die entsprechende Einstellungen unter "Einstellungen / Erweitert".


### Wird ohne Ende-zu-Ende-Verschlüsselung gar nicht verschlüsselt?

- Mit den meisten E-Mail-Servern stellt Delta Chat eine _transportverschlüsselte_ Verbindung her ([TLS](https://de.wikipedia.org/wiki/Transport_Layer_Security)).
 Dies schützt nur die Verbindung zwischen Ihrem Gerät und Ihrem E-Mail-Server. Wohingegen Ende-zu-Ende-Verschlüsselung die gesamte Kommunikation zwischen Ihrem Gerät und dem Gerät eines Freundes schützt.


### Wie kann ich den kryptografischen Zustand mit einem Absender überprüfen?

Das Benutzerprofil zeigt einige zusätzliche Informationen:

- Sie können auf "QR Einladungscode" in Android tippen und dann auf einem anderen Gerät die Schaltfläche "QR-Code scannen" 
verwenden, um diesen Code zu scannen. Wenn beide Geräte online sind, 
werden sie (falls er noch nicht existiert) einen Chat-Kanal miteinander einrichten und auch die Schlüssel für die Verschlüsselung werden überprüft. Beide werden eine "Absender verifiziert" Systemnachricht in ihrem 1:1 Chat sehen.

- Für die Ende-zu-Ende-Verschlüsselung zeigt Delta Chat dort zwei Fingerabdrücke an. 
Wenn auf dem Gerät Ihres Chatpartners dieselben Fingerabdrücke angezeigt werden, ist die Verbindung sicher.

- Bei der Transportverschlüsselung wird dieser Zustand dort nur angezeigt.


## Wie kann ich die Verschlüsselung der Nachrichten überprüfen?

- Wenn neben einer Nachricht ein kleines **Vorhängeschloss** angezeigt wird, bedeutet dies, dass die Nachricht durchgehend Ende-zu-Ende verschlüsselt ist _und_ vom angegebenen Absender gesendet wurde _und_ dass Ihre Antwort ebenfalls durchgehend Ende-zu-Ende verschlüsselt wird.

- Wenn **kein Vorhängeschloss** vorhanden ist, wird die Nachricht normalerweise unverschlüsselt transportiert, z.B. weil der Absender oder Sie die Ende-zu-Ende-Verschlüsselung deaktiviert haben oder der Absender eine Anwendung ohne Unterstützung für die Ende-zu-Ende-Verschlüsselung verwendet.


### Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

- [Autocrypt](https://autocrypt.org) wird verwendet um Ende-zu-Ende-Verschlüsselung mit anderen Delta Chat und anderen Autocrypt-fähigen E-Mail Apps herzustellen. 
  Autocrypt verwendet einen Teil der OpenPGP-Funktionalität.
Außerdem implementiert Delta Chat "Anti-MITM"-Protokolle, welche über den opportunistischen Basisschutz von Autocrypt hinausgehen, um Schutz vor aktiven Netzwerkangriffen zu erreichen. Lesen Sie dazu die Fragen über "verifizierte Gruppen".


### Was ist der Unterschied zwischen verifizerten Gruppen und 1:1 Chats mit verifizierten Kontakten?

- 1:1 Chats mit einem verifizierten Kontakt und verifizierte Gruppen sind nicht das Gleiche, sogar wenn sich nur 2 Personen in einer verifizierten Gruppe befinden. Ein Unterschied ist, dass Sie einfach weitere Personen zu einer Gruppe hinzufügen können, aber es gibt noch weitere Unterschiede.

- Verifizierte Gruppen sind immer geschützt. Jeder Bruch (Klartextnachrichten oder falsch signierte Nachrichten) wird erkannt und nicht in diesem Chat dargestellt.
Sie können darauf vertrauen, dass alle Nachrichten in diesem verifizierten Chat nicht von Dritten verändert oder gelesen wurden.

- 1:1 Chats sind opportunistisch, damit die Nutzer immer miteinander kommunizieren können, egal ob sie E-Mail-Programme oder Geräte wechseln. Deshalb sehen Sie manchmal kein Verifikationshäkchen, sogar nicht, wenn Sie den Kontakt verifiziert haben.


### Unterstützt Delta Chat Perfect Forward Secrecy?

- Nein, OpenPGP unterstützt Perfect Forward Secrecy nicht. Perfect Forward Secrecy
  arbeitet Sitzungsorientiert, aber E-Mail ist von Natur aus asynchron und wird meist unabhängig von verschiedenen Geräten aus verwendet.
Das bedeutet, dass wenn Ihr geheimer Schlüssel aus Delta Chat bekannt wird und jemand eine Aufzeichnung Ihrer versendeten und empfangenen verschlüsselten Nachrichten besitzt, dieser in der Lage ist die Nachrichten zu lesen.

- Jemand der ihr Telefon beschlagnahmt oder hackt, kann typischerweise alle Nachrichten lesen - unabhängig davon ob Perfect Forward Secrecy verwendet wird oder nicht.
Der Zugriff auf ein einzelnes Gerät eines Gruppenmitglieds verrät viel über den sozialen Graphen. Verwendet man E-Mail-Adressen, welche sich nicht einfach zu Personen zurückverfolgen lassen, hilft das Gruppenmitgliedern besser, sich vor der den Folgen der Beschlagnahmung eines Geräts zu schützen.

- Wir zeichnen Wege auf, um Kommunikation besser vor dem Fall eines beschlagnahmten Geräts zu schützen.


### Wie schützt Delta Chat meine Metadaten?

- Da Delta Chat ein dezentralisierter Messenger ist, werden Metadaten der Delta Chat Nutzer nicht auf einem zentralen Server gespeichert. Allerdings werden diese auf den Mailservern des Absenders und des Empfängers einer Nachricht gespeichert.

- Jeder Mailserver kann derzeit durch inspizieren der unverschlüsselten An- und CC-Felder sehen, wer eine Nachricht an wen gesendet hat und welche E-Mail-Adressen teil einer Gruppe sind. Delta Chat selbst könnte unverschlüsselte An- und CC-Felder vollständig vermeiden und diese immer nur in den verschlüsselten  Teil einer Nachricht schreiben. Lesen Sie dazu auch  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032).
Die Hauptsorge bei opportunistischen Chats ist wie andere Mail Apps, welche an einem Chat teilnehmen könnten, damit umgehen.

- Viele weitere E-Mail-Header, insbesondere der "Subject" Header, sind Ende-zu-Ende verschlüsselt. Lese dazu auch den kommenden [IETF RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Kann ich meinen existierenden privaten Schlüssel weiter verwenden?

- Ja. Der beste Weg ist, von der anderen E-Mail-Anwendung aus eine _Autocrypt Setup Nachricht_ zu versenden. Suchen Sie eine solche Option in den Einstellungen der anderen Anwendung z.B. unter "Autocrypt Setup Transfer starten" und folgen Sie den dort angezeigten Hinweisen.

- Alternativ können Sie den Schlüssel manuell unter "Einstellungen / Erweitert / Schlüssel verwalten" importieren. 
Achtung: Der private Schlüssel darf _nicht_ mit einem Passwort geschützt sein bzw. muss dieses zuvor entfernt werden.

Wenn Sie keinen Schlüssel besitzen oder nicht einmal wissen, dass Sie einen benötigen - keine Sorge: Delta Chat erstellt einen Schlüssel, wenn er benötigt wird.


### Ich kann meinen existierenden PGP-Schlüssel nicht in Delta Chat importieren.

Mit sehr großer Wahrscheinlichkeit besteht das Problem darin, dass Ihr Schlüssel verschlüsselt ist und/oder ein Passwort verwendet. Solche Schlüssel werden von Delta Chat nicht unterstützt. Bitte entfernen Sie die Verschlüsselung und das Passwort und versuchen Sie den Import danach erneut.
Wenn Sie das Passwort nicht entfernen möchten, dann müssen Sie einen E-Mail-Alias zur Nutzung mit Delta Chat anlegen, sodass der Schlüssel von Delta Chat mit diesem E-Mail-Alias verknüpft ist.

Grundsätzlich sollte Delta Chat "gängige" private Schlüsselformate unterstützen, allerdings
ist es unwahrscheinlich, dass wir 100% aller privaten Schlüssel aus sämtlichen Quellen unterstützen. 
Dies ist auch nicht das Hauptaugenmerk von Delta Chat (tatsächlich besitzt die große Mehrheit der Delta
 Chat Benutzer keinen Schlüssel, bevor sie Delta Chat verwenden). 
Wir versuchen jedoch, private Schlüssel aus anderen Quellen so gut wie möglich zu unterstützen.

Das Entfernen des Passworts vom privaten Schlüssel ist abhängig von der Software, mit der Sie Ihre PGP-Schlüssel verwalten. 
Bei Enigmail können Sie Ihr Passwort im Fenster Schlüsselverwaltung auf einen leeren Wert setzen.
Bei GnuPG können Sie es über die [Kommandozeile einstellen](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Für andere Programme können Sie online eine Lösung finden.


### Warum verwendet Delta Chat kein pEp (pretty easy privacy)?

- Delta Chat verwendet den Autocrypt Ende-zu-Ende-Verschlüsselungsstandard. Lese die [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep) für eine Unterscheidung zwischen Autocrypt und pEp.


## Mehrere Geräte verwenden {#multiclient}

### Kann ich Delta Chat auf mehreren Geräten zur selben Zeit verwenden?

Wenn Sie **dasselbe Konto** auf unterschiedlichen (Autocrypt-fähigen) Geräten verwenden möchten, muss die Verschlüsselungsfunktion synchronisiert werden:

- Wählen Sie auf dem ersten Gerät "Weitere Einstellungen / Autocrypt-Setup-Nachricht versenden"
und klicken Sie, bis ein "Setup-Code" angezeigt wird. 

- Warten Sie auf dem anderen Gerät, bis die "Autocrypt Setup Nachricht" ankommt
und klicken Sie diese an. Eine Abfrage des Sicherheitscodes sollte nun erscheinen.

- Die Synchronisation ist nun erfolgreich und Sie können beiden Geräte
zum Senden und Empfangen von Ende-zu-Ende-verschlüsselten Nachrichten an Ihre Kommunikationspartner verwenden.


## Verschiedenes

### Funktioniert Delta Chat mit _meinem_ E-Mail-Anbieter?

- Mit ziemlich hoher Wahrscheinlichkeit: Ja :) 
- Allerdings benötigen einige Anbieter besondere Optionen, um ordnungsgemäß zu funktionieren; eine von Nutzern erstellte Sammlung zu einigen Optionen findet sich unter [Provider Overview](https://providers.delta.chat).


### Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Siehe hierzu [in Delta Chat genutzte Standards]({% include standards-url %}).

