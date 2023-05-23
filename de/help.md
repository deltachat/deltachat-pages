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

- Delta Chat ist _unabhängig_ von Unternehmen oder Dienstleistern. Ihre Daten gehören nur _Ihnen_
- Ihre Daten werden nicht auf einem zentralen Server gespeichert wenn Benutzer verschiedene E-Mail-Server verwenden
- Ihr Adressbuch wird nicht an Dritte übermittelt.
- _Schnell_ durch die Verwendung von Push-IMAP.
- _Größte Nutzerbasis_ - EmpfängerInnen, die Delta Chat _nicht_ nutzen, können ebenfalls erreicht werden.
- _Kein Spam_ - standardmäßig werden nur Nachrichten bekannter Kontakte angezeigt.
- _Ende-zu-Ende-Verschlüsselung_ mit Autocrypt.
-  Auf _Copyleft_ und _Standards_ basierende freie Software.
- _Flexible Identität_ mit eingebauter Unterstützung für [mehrere Konten](#multiple-accounts)


### Welche Nachrichten erscheinen in Delta Chat?

In der Standardeinstellung zeigt Delta Chat alle E-Mails an.

Unter "Einstellungen / Chats und Medien / Normale E-Mails anzeigen" können Sie dies ändern. Sie haben die folgenden Optionen:

- "Nein, nur Chats": Es werden die von anderen Delta-Chat-Benutzern gesendeten Nachrichten sowie alle Antworten auf Ihre Nachrichten angezeigt. Dies ist sinnvoll, wenn Sie das gleiche E-Mail-Konto noch mit einer anderen E-Mail-App bearbeiten.
- "Alle": Delta Chat zeigt alle E-Mails an, die an Ihre E-Mail-Adresse gesendet werden. Dies ist sinnvoll, wenn Sie Delta Chat für alle Ihre E-Mails verwenden möchten, damit keine Nachricht verloren geht. Dies ist die Standardeinstellung.
- "Akzeptierte Kontakte": Delta Chat zeigt alle E-Mails von Kontakten an, mit denen Sie bereits einen Chat haben, aber neue Chats werden nur für Delta Chat-Nachrichten angezeigt. So können Sie von Fall zu Fall entscheiden, ob Sie eine Unterhaltung in Delta Chat oder in einer "normalen" E-Mail-App führen möchten.


### Was ist, wenn ich eine Nachricht von jemandem erwarte, dem ich in der Vergangenheit nicht geschrieben habe?

- Wenn eine Nachricht von einem unbekannten Kontakt stammt, erscheint sie als **Anfrage**. Sie müssen die Anfrage akzeptieren, bevor Sie antworten können.
- Sie können sie auch "löschen", wenn Sie vorerst nicht mit ihm chatten möchten. Dadurch wird die Nachricht *nicht* auf dem Server gelöscht, sondern nur auf Ihrem Gerät. Sie können die Nachricht also weiterhin in einer anderen E-Mail-App bearbeiten.
- Wenn Sie eine Anfrage löschen, werden zukünftige Nachrichten von diesem Kontakt weiterhin als Nachrichtenanfrage angezeigt, sodass Sie Ihre Meinung ändern können. Wenn Sie wirklich keine Nachrichten von dieser Person erhalten möchten, sollten Sie sie *blockieren*.


### Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja. Alle E-Mail-Anhänge werden als separate Nachrichten angezeigt. Ausgehende Nachrichten erhalten bei Bedarf automatisch Anhänge.

- Um die Leistung zu verbessern, werden die Bilder standardmäßig optimiert und in einer kleineren Größe gesendet, aber Sie können sie auch als "Datei" senden, um das Original zu erhalten.

<h3 id="multiple-accounts">Wie kann ich mehrere Konten hinzufügen oder zwischen ihnen wechseln?</h3>

Sie können ganz einfach mehrere E-Mail-Konten Konten verwnden, indem Sie entweder:
- im Hauptmenü "Konto wechseln" wählen (Android und Desktop)
- oder auf das Profilsymbol und dann auf "Konto hinzufügen" klicken (iOS)

Vielleicht möchten Sie auch erfahren, wie Sie [E-Mail-Konten zu mehreren Geräten hinzufügen können](#multiclient).

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

- **Archivieren Sie Chats**, wenn Sie diese nicht mehr in Ihrer Chatliste sehen möchten. Archivierte Chats bleiben oberhalb der Chatliste oder über die Suche zugänglich.

- Wenn ein archivierter Chat eine neue Nachricht erhält, wird er, sofern er nicht stummgeschaltet ist, **wieder in die normale Chatliste verschoben**.  **Stummgeschaltete Chats bleiben archiviert**, bis Sie sie manuell aus dem Archiv entfernen.

Zum Archivieren oder Anheften, tippen Sie lange auf den Chat  (Android), verwenden Sie das Chatmenü (Android/Desktop) oder wischen Sie nach links (iOS); zum Stummschalten, verwenden Sie das Chatmenü (Android/Desktop) oder das Chatprofil (iOS).


### Was bedeutet der grüne Punkt?

- Seit Delta Chat 1.34 sehen Sie manchmal einen "grünen Punkt" neben dem Avatar eines Kontakts. Es bedeutet, dass der Kontakt "kürzlich gesehen" wurde.
- Im Detail: Das bedeutet, dass Delta Chat den Kontakt in den letzten 10 Minuten gesehen hat:
  - entweder weil der Kontakt Ihnen direkt eine Nachricht gesendet hat,
  - weil der Kontakt etwas an eine Gruppe geschrieben hat, in der sie beide Mitglied sind,
  - weil der Kontakt Ihnen eine Lesebestätigung für eine von Ihnen geschriebene Nachricht gesendet hat
  - oder weil der Kontakt Daten mithilfe einer [Privaten App](#webxdc) an Ihre Delta Chat-App gesendet hat.
- Dies ist also kein Echtzeit-Online-Status - und wenn jemand nicht sofort antwortet, obwohl er online zu sein scheint, machen Sie sich keine Sorgen und geben Sie ihm etwas Raum. ;-)
- Andererseits werden andere nicht immer "sehen, dass Sie online sind". Wenn Sie Lesebestätigungen deaktiviert haben, sehen sie den grünen Punkt erst, wenn Sie ihnen eine Nachricht senden oder einer Gruppe schreiben, in der sie sich ebenfalls befinden.


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


### Was passiert, wenn ich "Alte Nachrichten vom Server löschen" aktiviere?

- Standardmäßig speichert Delta Chat alle Nachrichten lokal auf Ihrem Gerät. Wenn Sie z. B. Speicherplatz bei Ihrem E-Mail-Anbieter sparen möchten, können Sie Delta Chat so konfigurieren, dass alte Nachrichten automatisch vom Server gelöscht werden. Sie verbleiben weiterhin auf Ihrem Gerät, bis Sie sie auch dort löschen.

- Um dies zu aktivieren, können Sie unter  **Alte Nachrichten löschen → Nachrichten vom Server löschen**
  in the "Chats und Medien"-Einstellungen
  einen Zeitraum zwischen "Sofort" und "Nach 1 Jahr" festlegen.
  Alle von Delta Chat empfangenen Nachrichten werden nach diesem Zeitraum vom Server gelöscht.

- Wenn Sie Delta Chat auf mehr als einem Gerät verwenden, beachten Sie, die Nachrichten auf dem Server zu belassen, bis die anderen Geräte sie ebenfalls heruntergeladen haben.


### Was passiert, wenn ich "Alte Nachrichten vom Gerät löschen" aktiviere? {#delold}

- Wenn Sie Speicherplatz auf Ihrem Gerät sparen möchten, können Sie alte Nachrichten automatisch löschen lassen.
- Um es zu aktivieren, gehen Sie in den "Chats und Medien"-Einstellungen zu "Alte Nachrichten vom Gerät löschen". Sie können einen Zeitraum zwischen "nach 1 Stunde" und "nach 1 Jahr" festlegen; auf diese Weise werden *alle* Nachrichten von Ihrem Gerät gelöscht, sobald sie älter als angegeben sind.


## Verschlüsselung

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

Wenn Sie Ihren Chat-Partner persönlich treffen:

- Tippen Sie auf **QR-Einladungscode** auf dem einen Gerät und dann **QR-Code scannen** auf dem anderen Gerät und scannen Sie den Code. Wenn beide Geräte online sind, 
wird (falls er noch nicht existiert) ein Chat-Kanal eingerichtet und die Schlüssel für die Verschlüsselung werden überprüft. Beide Kontakte erhalten eine "Absender verifiziert" Systemnachricht in ihrem 1:1 Chat.

Wenn Sie Ihren Chat-Partner nicht persönlich treffen können, können Sie den Status manuell im Dialog "Verschlüsselungsinfo" überprüfen
(siehe Benutzerprofil auf Android/iOS bzw. Rechts-Klick auf einen Benutzerchat, wenn Sie eine Desktop-App verwenden):

- Für die Ende-zu-Ende-Verschlüsselung zeigt Delta Chat dort zwei Fingerabdrücke an.  Wenn auf dem Gerät Ihres Chat-Partners dieselben Fingerabdrücke angezeigt werden, ist die Verbindung sicher.

- Bei der Transportverschlüsselung wird dieser Zustand dort nur angezeigt.


### Wie kann ich die Verschlüsselung der Nachrichten überprüfen?

- Wenn neben einer Nachricht ein kleines **Vorhängeschloss** angezeigt wird, bedeutet dies, dass die Nachricht durchgehend Ende-zu-Ende verschlüsselt ist _und_ vom angegebenen Kontakt gesendet wurde.

- Wenn **kein Vorhängeschloss** vorhanden ist, wird die Nachricht normalerweise unverschlüsselt transportiert, z.B. weil der/die AbsenderIn oder Sie die Ende-zu-Ende-Verschlüsselung deaktiviert haben oder der/die AbsenderIn eine Anwendung nutzt, die keine Ende-zu-Ende-Verschlüsselung unterstützt.


### Wie kann ich Verschlüsselung und Löschen von Nachrichten sicherstellen?

Der beste Weg, um sicherzustellen, dass jede Nachricht verschlüsselt wird und die Metadaten so schnell wie möglich gelöscht werden, ist das Erstellen einer verifizierten Gruppe und das Aktivieren selbstzerstörender Nachrichten.

Verifizierte Gruppen sind immer verschlüsselt und gegen [MITM Angriffe](https://de.wikipedia.org/wiki/Man-in-the-Middle-Angriff) geschützt.

Metadaten können nicht verschlüsselt werden, da der Server wissen muss, wohin Ihre Nachrichten zugestellt werden sollen. Wenn Sie jedoch "selbstzerstörende Nachrichten" aktivieren, werden die Nachrichten nach Zustellung auf dem dem Server gelöscht.

Wenn Sie die Nachrichten auf Ihrem Gerät, aber nicht auf dem Server benötigen, können Sie auch in der Gruppe vereinbaren, ["Nachrichten automatisch vom Server löschen"](#delold) einzuschalten.

Wenn Sie ein 1:1-Gespräch entsprechend schützen wollen, können Sie eine verifizierte Gruppe mit nur 2 Personen erstellen. Wenn die andere Person ihr Gerät verliert, aber nicht ihr Konto, können Sie trotzdem im 1:1-Chat kommunizieren. ([Mehr lesen](#verdiff))


### Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

- [Autocrypt](https://autocrypt.org) wird verwendet, um eine Ende-zu-Ende-Verschüsselung mit anderen Delta Chat- oder anderen Autocrypt-kompatiblen Apps aufzubauen.
  Autocrypt verwendet eine begrenzte Teilmenge des OpenPGP-Standards.

- Um vor aktiven Netzwerkangriffen zu schützen, implementiert Delta Chat [countermitm Kontakt-Setup- und Verifizierte-Gruppen-Protokolle](https://countermitm.readthedocs.io/en/latest/new.html). Dies geht über den Basisschutz der Verschlüsselung von Autocrypt Level 1 hinaus, behält aber dessen Einfachheit bei.  

### Was ist der Unterschied zwischen verifizierten Gruppen und 1:1 Chats mit verifizierten Kontakten? {#verdiff}

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

- Alternativ können Sie den Schlüssel manuell unter "Einstellungen -> Erweitert -> Schlüssel verwalten -> Importiere geheime Schlüssel" importieren. Achtung: Stellen Sie sicher, dass der Schlüssel nicht durch ein Passwort geschützt ist, oder entfernen Sie das Passwort vorher.

- Wenn Sie keinen Schlüssel besitzen oder nicht einmal wissen, dass Sie einen benötigen - keine Sorge: Delta Chat erstellt einen Schlüssel, wenn er benötigt wird. Sie müssen nichts weiter tun.


### Ich kann meinen existierenden PGP-Schlüssel nicht in Delta Chat importieren.

- Wahrscheinlich ist Ihr Schlüssel verschlüsselt und/oder mit einem Passwort geschützt. Solche Schlüssel werden von Delta Chat nicht unterstützt. Bitte entfernen Sie die Verschlüsselung und das Passwort und versuchen Sie den Import danach erneut.
Wenn Sie das Passwort nicht entfernen möchten, müssen Sie einen E-Mail-Alias zur Nutzung mit Delta Chat anlegen, sodass der Schlüssel von Delta Chat mit diesem E-Mail-Alias verknüpft ist.

- Delta Chat unterstützt "gängige" private Schlüsselformate, allerdings ist es unwahrscheinlich, dass wir 100% aller privaten Schlüssel aus sämtlichen Quellen unterstützen.
Dies ist auch nicht das Hauptaugenmerk von Delta Chat. Tatsächlich besitzt die große Mehrheit der Delta Chat-NutzerInnen keinen Schlüssel, bevor sie Delta Chat verwendet.
Wir versuchen jedoch, private Schlüssel aus anderen Quellen so gut wie möglich zu unterstützen.

- Das Entfernen des Passworts vom privaten Schlüssel ist abhängig von der Software, mit der Sie Ihre PGP-Schlüssel verwalten. 
Bei Enigmail können Sie Ihr Passwort im Fenster Schlüsselverwaltung auf einen leeren Wert setzen.
Bei GnuPG können Sie es über die [Kommandozeile einstellen](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Für andere Programme können Sie online eine Lösung finden.


## Mehrere Geräte verwenden {#multiclient}

### Kann ich Delta Chat auf mehreren Geräten zur selben Zeit verwenden?

Ja. Delta Chat 1.36 enthält eine neue, experimentelle Funktion zur Verwendung desselben Kontos auf verschiedenen Geräten:

- Gehen Sie auf dem ersten Gerät zu **Einstellungen → Zweites Gerät hinzufügen**, entsperren Sie den Bildschirm, falls erforderlich und warten Sie einen Moment, bis ein QR-Code angezeigt wird

- Auf dem zweiten Gerät [Delta Chat installieren](https://get.delta.chat)

- Auf dem zweiten Gerät Delta Chat starten, "Als Zweitgerät hinzufügen" wählen und den QR-Code vom ersten Gerät scannen

- Die Übertragung sollte nach ein paar Sekunden beginnen und während der Übertragung zeigen beide Geräte den **Fortschritt** an. Warten Sie, bis der Vorgang auf beiden Geräten abgeschlossen ist.

Im Gegensatz zu vielen anderen Messengern, sind nach erfolgreicher Übertragung beide **Geräte völlig unabhängig voneinander. Das eine Gerät wird nicht benötigt, damit das Andere funktioniert.


### Fehlersuche

- Vergewissern Sie sich, dass beide Geräte mit dem **gleichen Wi-Fi, WLAN oder Netzwerk** verbunden sind.

- Ihr System verfügt möglicherweise über eine "Personal Firewall", diese sind dafür bekannt, Probleme zu verursachen (insbesondere bei Windows). **Deaktivieren Sie die Personal Firewall** für Delta Chat auf beiden Seiten und versuchen Sie es erneut

- Vergewissern Sie sich, dass das Zielgerät über **genügend Speicher** verfügt

- Wenn die Übertragung begonnen hat, stellen Sie sicher, dass die Geräte **aktiv bleiben** und nicht ausgehen. Beenden Sie Delta Chat nicht. (wir bemühen uns, die App im Hintergrund laufen zu lassen, aber [Systeme neigen dazu, Apps zu beenden](https://dontkillmyapp.com), leider)

- Sie sind auf dem Zielgerät **bereits eingeloggt**? Sie können mehrere Konten pro Gerät verwenden, fügen Sie einfach [ein weiteres Konto hinzu](#multiple-accounts)

- Wenn Sie immer noch Probleme haben oder wenn Sie **keinen QR-Code scannen können** versuchen Sie die **manuelle Übertragung** wie unten beschrieben


### Manueller Transfer

Diese Methode wird nur empfohlen, wenn "Zweites Gerät hinzufügen", wie oben beschrieben, nicht funktioniert.

- Auf dem alten Gerät gehen Sie zu "Einstellungen -> Chats und Medien -> Chats auf externem Speicher speichern". Geben Sie Ihre PIN, Ihr Muster oder Ihr Passwort zum Entsperren des Bildschirms ein. Anschließend können Sie auf "Backup starten" klicken. Dadurch wird die Backup-Datei auf Ihrem Gerät gespeichert. Jetzt müssen Sie sie irgendwie auf das andere Gerät übertragen.
- Auf dem neuen Gerät, auf dem Anmeldebildschirm, wählen Sie, anstatt sich bei Ihrem E-Mail-Konto anzumelden, "Wiederherstellen aus Backup". Nach dem Import sollten Ihre Unterhaltungen, Verschlüsselungsschlüssel und Medien auf das neue Gerät kopiert sein.
  - **Wenn Sie iOS verwenden** und auf Schwierigkeiten stoßen, hilft Ihnen vielleicht [diese Anleitung](https://support.delta.chat/t/import-backup-to-ios/1628).
- Sie sind nun synchronisiert und können beide Geräte zum Senden und Empfangen von Ende-zu-Ende verschlüsselten Nachrichten mit Ihren Kommunikationspartnern verwenden.

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


## Private Apps / webxdc {#webxdc}

In Delta Chat können Sie "Private Apps" und Anhänge mit der Dateierweiterung ".xdc" teilen. Sie können sehr unterschiedliche Dinge tun und machen Delta Chat zu einem wirklich erweiterbaren Messenger. Der Fachbegriff lautet [webxdc](https://webxdc.org).


### Wie privat sind Private Apps?

- Private Apps können keine Daten ins Internet senden oder etwas herunterladen.
- Eine Private App kann Daten nur innerhalb eines Delta Chat-Chats mit ihren Kopien auf den Geräten Ihrer Chat-Partner austauschen. Ansonsten ist sie komplett vom Internet isoliert.
- Die Privatsphäre, die eine Private App bietet, ist die Privatsphäre Ihres Chats - solange Sie den Personen vertrauen, mit denen Sie chatten, können Sie auch der Privaten App vertrauen.
- Das bedeutet auch: Es kann ein Datenschutzrisiko darstellen, Private Apps in Chats zu öffnen, in denen man den Mitgliedern nicht vertraut - so wie man es von E-Mail-Anhängen kennt, wo man nur Anhänge von Absendern öffnet, denen man vertraut, und nicht von Spammern.


### Wo bekomme ich Private Apps?

- Im Allgemeinen gibt es keinen kuratierten Appstore und Delta Chat ist nicht verantwortlich für Private Apps oder deren Inhalt. Jeder kann Private Apps uneingeschränkt miteinander teilen.
- Einige Beispiel-Apps finden Sie auf [webxdc.org](https://webxdc.org).
- Viele Leute schreiben ihre eigenen Privaten Apps und posten sie im [Delta Chat-Forum](https://support.delta.chat/c/webxdc/20).


### Wie kann ich meine eigenen Privaten Apps erstellen?

- Private Apps sind nur ZIP-Dateien, die HTML-, CSS- und JavaScript-Code enthalten.
- Sie können die [Hello World-Beispiel-App](https://github.com/webxdc/hello) erweitern, um loszulegen.
- Alles andere, was Sie wissen müssen, steht in der [Dokumentation](https://docs.webxdc.org/).
- Wenn Sie Fragen haben, können Sie andere mit Erfahrung im [Delta Chat-Forum](https://support.delta.chat/c/webxdc/20) fragen.


## Experimentelle Features

Wir sind sehr dankbar für Feedback zu diesen Funktionen - möchten Sie Ihre Ideen teilen? Treten Sie dem [Forum](https://support.delta.chat) bei, um einen Beitrag zu leisten. (Sie mögen Experimente? Registrieren Sie sich über "Sign Up -> with Delta Chat"!)

### Wie kann ich Audio-/Videoanrufe mit Delta Chat verwenden?

- Um Audio-/Videoanrufe zu aktivieren, gehen Sie in den erweiterten Einstellungen zum Abschnitt "Experimentelle Features" und wählen Sie eine "Videochat-Instanz" aus.
- Wenn Sie andere zu einem Videochat einladen, wird dieser sofort in Ihrem Browser/Ihrer App geöffnet. Die anderen erhalten eine E-Mail mit einem Link zu Ihrem Jitsi/BBB-Raum. Auf diese Weise ist es auch kompatibel, wenn Ihre Chat-Partner Delta Chat nicht verwenden.
- Beachten Sie, dass es auf der anderen Seite keinen Klingelton gibt und Ihre Chat-Partner nicht durch eine Videochat-Einladung unterbrochen werden.
- Sie können jeden Videochat-Dienst verwenden, der die Teilnahme per Link ermöglicht. Fügen Sie einfach den Link in den Einstellungen hinzu.
- Um beispielsweise die Flaggschiff-Jitsi Meet-Instanz zu verwenden, könnten Sie `https://meet.jit.si/$ROOM` eingeben. Die Variable `$ROOM` ist ein zufälliger Wert; auf diese Weise haben Sie jedes Mal, wenn Sie jemanden anrufen, einen neuen zufälligen Jitsi-Raum.


### Was ist eine verifizierte Gruppe? Weshalb ist das experimentell?

- Eine verifizierte Gruppe ist ein Chat, der Sicherheit vor einem aktiven Angreifer garantiert. Alle Nachrichten in einer verifizierten Gruppe sind Ende-zu-Ende verschlüsselt und Gruppenmitglieder können durch Scannen eines "QR-Einladungscodes" beitreten. Alle Gruppenmitglieder sind deshalb durch eine Kette von Einladungen miteinander verbunden, welche kryptografische Konsistenz gegen aktive Netzwerk- oder Anbieterangriffe garantiert.
Siehe [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) für  Forschung und Entwicklung hinter dieser Funktion.

- Ab Oktober 2022 bleiben "verifizierte Gruppen" eine experimentelle Funktion. Sie wird kontinuierlich verbessert und viele Fehler wurden seit der ursprünglichen Einführung im Jahr 2018 behoben. Es gibt jedoch immer noch Fälle, insbesondere bei großen Gruppen, in denen es zu Inkonsistenzen kommen kann oder Nachrichten unlesbar werden.


### Was sind Broadcast-Listen und wie kann ich sie verwenden?

- Mit einer Broadcast-Liste können Sie eine Nachricht an viele Empfänger gleichzeitig senden; wenn sie Ihnen antworten, erhalten Sie die Antwort in Ihrem direkten 1:1-Chat mit ihnen. Die Empfänger können einander nicht sehen.
- Technisch gesehen handelt es sich um eine E-Mail mit vielen Empfängern in BCC.
- Sie können die Funktion im Abschnitt "Experimentelle Features" in den erweiterten Einstellungen aktivieren. Dann können Sie im Dialogfeld "Neuer Chat" eine Broadcast-Liste erstellen.
- Falls Sie mehr als ein Gerät verwenden, werden Broadcast-Listen derzeit nicht zwischen ihnen synchronisiert.
- An Broadcast-Listen gesendete Nachrichten werden nicht verschlüsselt. Eine Verschlüsselung würde die Anonymität brechen, denn dann wüssten alle Empfänger, wer sie sonst noch erhalten hat. (Das Senden einzelner E-Mails an alle wäre aus Gründen der Ratenbegrenzung und des Netzwerkverbrauchs schlechter.)


### Wie kann ich meinen Standort mit meinen Chat-Partnern teilen?

- Sie können das Standort-Streaming im Abschnitt "Experimentelle Features" der erweiterten Einstellungen aktivieren.
- Wenn Sie nun Ihren Standort in einem Chat teilen möchten, gehen Sie zu "Anhängen" und wählen Sie "Standort". Sie können nun einen Zeitraum zwischen 5 Minuten und 6 Stunden festlegen, in dem Ihr Standort an Ihre Chat-Partner gestreamt wird.
- Wenn sich Ihr Standort ändert, können die anderen im Chat ihn auf einer Karte im Chat sehen.
- Um die Karte und die Standorte anderer anzuzeigen, müssen Sie die Funktion in den erweiterten Einstellungen aktivieren.
- Diese Funktion teilt Ihren Standort mit niemandem außer Ihren Chat-Partnern. *Aber:* Um die Karte anzuzeigen, müssen wir Kartenkacheln von mapbox.com herunterladen. Wenn Sie also die Karte *ansehen*, wird mapbox.com nach der Karte eines bestimmten Gebiets gefragt. Wenn dies ein Datenschutzrisiko für Sie darstellt, ist diese Funktion möglicherweise nicht für Sie geeignet. Wir arbeiten daran, eine dezentrale Alternative für Mapbox zu finden.
- Auf dem Desktop kann das Betriebssystem Ihren Standort normalerweise nicht bestimmen. Stattdessen können Sie mit der rechten Maustaste auf die Karte klicken und einen Ort beschreiben, der als Nachricht an den Chat gesendet wird, aber auch auf der Karte erscheint.


### Was schützt die experimentelle Datenbankverschlüsselung tatsächlich?

- Im Moment ist die Datenbankverschlüsselung noch sehr experimentell. Verlassen Sie sich zum Schutz nicht darauf, sondern nutzen Sie zusätzlich die Verschlüsselung Ihres Betriebssystems, sofern vorhanden.
- Die Datenbankverschlüsselung verschlüsselt noch nicht die Blobs, sondern nur die Zeilen und Spalten der Datenbank. Dies bedeutet mehr oder weniger, dass Ihre Nachrichten sicher sind, aber nicht Ihre Anhänge.
- Für iOS und Android werden die Verschlüsselungsschlüssel im Systemschlüsselbund gespeichert. Das bedeutet, dass die Verschlüsselung so sicher ist wie das Betriebssystem, auf dem sie ausgeführt wird.
- Der Delta Chat-Desktop-Client bietet noch keine Datenbankverschlüsselung, da es keine Standardmethode zum Speichern der Verschlüsselungsschlüssel auf den verschiedenen unterstützten Plattformen gibt.


### Warum kann ich mich dafür entscheiden, nur den DeltaChat-Ordner zu beobachten?

Dies ist eine experimentelle Einstellung für BenutzerInnen, die serverseitige Regeln verwenden möchten. Dies wird nicht von allen Providern unterstützt, aber bei einigen können Sie Nachrichten mit einem "Chat-Version"-Header vom Server in den DeltaChat-Ordner verschieben. Normalerweise wird dies von der Delta Chat-App erledigt.

Die Aktivierung von "Nur aus DeltaChat-Ordner lesen" ist sinnvoll, wenn Sie **beides** haben:

- Es existiert eine serverseitige Regel, Nachrichten mit einem Chat-Version-Header in den DeltaChat-Ordner zu kopieren.
- "Normale E-Mails anzeigen" ist auf "Nein, nur Chats" gesetzt.

In diesem Fall muss Delta Chat den Posteingang nicht beobachten, und es reicht aus, nur den DeltaChat-Ordner zu beobachten.


### Wie kann ich mein Konto auf eine andere E-Mail-Adresse ändern?

1. Ändern Sie Ihre Adresse auf dem Einstellungsbildschirm "Passwort und E-Mail-Konto" in Delta Chat, geben Sie Ihr Passwort (und ggf. Servereinstellungen) für das neue Konto ein.
2. Wenn möglich, lassen Sie Ihren alten E-Mail-Anbieter alle E-Mails an Ihre neue E-Mail-Adresse weiterleiten.
3. Teilen Sie Ihren Kontakten mit, dass Sie Ihre Adresse geändert haben. Wenn Sie dies an eine verifizierte Gruppe schreiben, wird diese dies automatisch bestätigen.

Um mehr über die Details dahinter zu erfahren, [lesen Sie unseren Blogpost dazu](https://delta.chat/en/2022-09-14-aeap).


## Verschiedenes

### Funktioniert Delta Chat mit _meinem_ E-Mail-Anbieter?

- Mit ziemlich hoher Wahrscheinlichkeit: Ja :) 
  Allerdings benötigen einige Anbieter besondere Einstellungen, um ordnungsgemäß zu funktionieren; eine von NutzerInnen erstellte Sammlung zu einigen Optionen findet sich unter [Provider Overview](https://providers.delta.chat).


### Ich möchte meinen eigenen E-Mail-Server für Delta Chat verwalten. Gibt es Empfehlungen?

- Die meisten Mailserver werden gut funktionieren. Was wir persönlich jedoch empfehlen, ist eine Kombination aus mailcow und mailadm, wie [in diesem Blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops) beschrieben.
- Auf unserer Webseite finden Sie eine [Installationsanleitung](serverguide).


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

### Wurde Delta Chat unabhängig auf Sicherheitslücken geprüft?

Das Delta-Chat-Projekt wurde in den letzten Jahren vier unabhängigen Sicherheitsprüfungen unterzogen:

- Im Jahr 2019 analysierte [Include Security](https://includesecurity.com) die von Delta Chat verwendeten [PGP](https://github.com/rpgp/rpgp) und [RSA](https://github.com/RustCrypto/RSA) Bibliotheken.
Es wurden keine kritischen Probleme gefunden, aber zwei Probleme mit hohem Schweregrad, die wir anschließend behoben haben. Außerdem wurden ein mittelschweres und einige weniger schwerwiegende Probleme gefunden, aber es gab keine Möglichkeit, diese Schwachstellen in der Delta Chat-Implementierung auszunutzen. Einige dieser Schwachstellen haben wir dennoch nach Abschluss des Audits behoben. Sie können den [vollständigen Bericht hier] lesen (../assets/blog/2019-first-security-review.pdf).

- Im Jahr 2020 analysierte [Include Security](https://includesecurity.com) Delta Chats Rust [core](https://github.com/deltachat/deltachat-core-rust/), [IMAP](https://github.com/async-email/async-imap),[SMTP](https://github.com/async-email/async-smtp), und [TLS](https://github.com/async-email/async-native-tls) Bibliotheken.
Es wurden keine kritischen oder hochgradig gefährlichen Probleme gefunden. Der Bericht wies auf einige Schwachstellen mittlerer Schwere hin - sie stellen für sich genommen keine Bedrohung für Delta Chat-Benutzer dar, da sie von der Umgebung abhängen, in der Delta Chat verwendet wird. Aus Gründen der Benutzerfreundlichkeit und der Kompatibilität können wir nicht alle Schwachstellen beseitigen und haben beschlossen, Sicherheitsempfehlungen für bedrohte Benutzer zu geben. Sie können den [vollständigen Bericht hier](../assets/blog/2020-second-security-review.pdf) lesen.

- Anfang 2023 analysierte [Cure53](https://cure53.de) sowohl die Transportverschlüsselung von Delta Chats Netzwerkverbindungen als auch das reproduzierbare Mailserver-Setup wie [auf dieser Seite empfohlen](serverguide). Sie können mehr über das Audit [in unserem Blog](https://delta.chat/en/2023-03-27-third-independent-security-audit) lesen oder Sie lesen den [vollständigen Bericht hier](../assets/blog/MER-01-report.pdf).

- Anfang 2023 haben wir Sicherheits- und Datenschutzprobleme mit den "In Chats geteilten Apps"-Feature behoben, die mit Fehlern beim Sandboxing, insbesondere mit Chromium zusammenhängen. Wir haben daraufhin eine unabhängige Sicherheitsprüfung von Cure53 durchführen lassen, und alle gefundenen Probleme wurden mit den im April 2023 veröffentlichten 1.36 Releases behoben. Siehe [hier für die vollständige Hintergrundgeschichte](https://delta.chat/en/2023-05-22-webxdc-security).


### Wie wird Delta Chat finanziert?

Delta Chat erhält kein Risikokapital, ist nicht verschuldet und steht  unter keinem Druck, große Gewinne zu erzielen oder Nutzer, deren Freunde und Familie an Werbekunden zu verkaufen (oder Schlimmeres).
Wir nutzen vielmehr öffentliche Finanzierungsquellen, die bisher aus der EU und den USA stammen, um ein dezentrales und diverses Chat-Messaging-Ökosystem zu schaffen, basierend auf freien und quelloffenen Entwicklungen der Gemeinschaft.

Konkret wurden die Delta-Chat-Entwicklungen bisher aus diesen Quellen finanziert:

- Das EU-Projekt [NEXTLEAP](https://nextleap.eu) finanzierte 2017 und 2018 die Entwicklung und Implementierung von "Verifizierten Gruppen" und "Setup Kontakt" und half auch bei der Integration der Ende-zu-Ende-Verschlüsselung durch [Autocrypt](https://autocrypt.org).

- Der [Open Technology Fund](https://opentechfund.org) hat Delta Chat erstmals 2018/2019 bezuschusst; mit dieser Förderung (~$200K) wurden hauptsächlich die Android-App verbessert sowie das Release der Desktop-App in einer Betaversion ermöglicht. Basierend auf Nutzererfahrungen im Menschenrechtskontext wurden zudem verschiedene Funktionen entwickelt, siehe unseren Bericht [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
Die zweite Förderung 2019/2020 (~$300K) half uns bei der  Erstellung der iOS-Version, unsere Kernbibliothek in die Programmiersprache "Rust" zu konvertieren und neue Funktionen für alle Plattformen bereitzustellen.

- Die [NLnet-Stiftung](https://nlnet.nl/) bewilligte 2019/2020 46K  EUR für die Fertigstellung von Rust-/Python-Bindungs und die Einrichtung eines Chat-Bot-Ökosystems.

- Im Jahr 2021 erhielten wir weitere EU-Mittel für zwei "Next-Generation-Internet" Anträge, nämlich für [EPPD - E-Mail-Provider-Portabilitätsverzeichnis](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) und [AEAP - E-Mail-Adressportierung](https://nlnet.nl/project/EmailPorting/) (~90K EUR). Ziel sind bessere Unterstützung von Mehrfachkonten, verbesserten QR-Code-Kontakt- und -Gruppen-Setups sowie Netzwerkverbesserungen auf allen Plattformen.

- Von Ende 2021 bis März 2023 erhielten wir eine *Internet Freedom* Finanzierung (500K USD) vom U.S. Bureau of Democracy, Human Rights and Labor (DRL). Diese Finanzierung unterstützte unsere langjährigen Ziele, Delta Chat benutzerfreundlicher und kompatibel mit einer breiten Palette von E-Mail-Servern weltweit zu machen, sowie widerstandsfähiger und sicherer an Orten, die häufig von Internetzensur und Abschaltungen betroffen sind.

- Anfang 2023 wurden unsere Vorschläge für "Private Decentralized Apps" vom Next Generation Internet (NGI) Entrust Programm angenommen. Der genaue Betrag ist noch zu bestimmen (ca. 100K EUR). Diese Finanzierung unterstützt die weitere Entwicklung von [webxdc "apps shared in a chat"](https://webxdc.org).

- Manchmal erhalten wir einmalige Spenden von Privatpersonen, wofür wir sehr dankbar sind. Im Jahr 2021 hat uns zum Beispiel eine großzügige Privatperson 4000 EUR überwiesen mit dem Betreff "Weiter so!" 💜  Wir verwenden dieses Geld zur Finanzierung von Entwicklungstreffen oder zur Deckung von Ad-hoc-Ausgaben, die nicht ohne weiteres vorhersehbar sind oder nicht aus öffentlichen Fördermitteln erstattet werden können.
Der Erhalt von Spenden hilft uns auch, unabhängiger und langfristig lebensfähig zu werden, als Gemeinschaft.

  [Geld spenden](donate){: .cta-button}

- Last but by far not least beteiligen sich verschiedene ExpertInnen und Engagierte pro bono an Delta Chat. Sie erhalten dafür teils nur wenig, oftmals sogar überhaupt kein Geld. Ohne sie wäre Delta Chat nicht im entferntesten das, was es heute ist! 

Die oben aufgeführte finanzielle Förderung wird hauptsächlich von der merlinux GmbH in Freiburg (Deutschland) organisiert und an mehr als ein Dutzend Mitwirkende weltweit verteilt.

Möglichkeiten mitzuwirken finden Sie Auf der [Delta Chat Seite "Mitwirken"](contribute).
