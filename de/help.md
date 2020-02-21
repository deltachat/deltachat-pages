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

Mit Delta Chat können Sie an jede existierende E-Mail Adresse schreiben. Im Gegensatz
zu anderen Instant Messengern muss der/die Empfängerin nicht Delta Chat installieren, um mit Ihnen zu kommunizieren. Sie kann einfach ihr gewohntes Mailprogramm nutzen. 


### Welche Vorteile hat Delta Chat gegenüber anderen Messengern?

- _Unabhängig_ von Unternehmen oder Dienstleistungen. _Sie_ besitzen Ihre Daten.
- Ihre Daten werden _nicht_ auf einem zentralen Server gespeichert; im Gegensatz zu den meisten anderen Instant Messengern schützt Delta Chat auf diese Weise sogar Ihre Metadaten (wer schreibt mit wem?)
- Sie übermitteln Ihr Adressbuch nicht an Dritte.
- _Schnell_ durch die Verwendung von Push-IMAP.
- _Größte Nutzerbasis_ - EmpfängerInnen, die Delta Chat _nicht_ nutzen, können ebenfalls erreicht werden.
- _Kompatibel_ - nicht nur zu sich selbst.
- _Elegante_ und _einfache_ Benutzeroberfläche.
- _Verteiltes_ System.
- _Kein Spam_ - standardmäßig werden nur Nachrichten bekannter BenutzerInnen angezeigt.
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

- Kontakte, die kein Delta Chat benutzen, sehen es als E-Mail Anhang.

- Aus Datenschutzgründen sieht niemand Ihr Profilbild bevor Sie ihnen eine Nachricht senden.

- Ihr Profilbild wird nicht mit jeder Nachricht gesendet, aber häufig genug, so dass Ihre Kontakte es auch dann erhalten, wenn sie ein neues Gerät hinzufügen.


### Unterstützt Delta Chat HTML E-Mails?

- Ja. Fehlt bei eingehenden E-Mails der "Nur-Text"-Teil, werden HTML E-Mails in der App in Nur-Text umgewandelt. Ausgehende E-Mails verwenden immer Nur-Text.


### Weshalb muss ich mein E-Mail Kennwort in Delta Chat eingeben? Ist das sicher?

Genau wie auch bei anderen E-Mail Programmen wie Thunderbird, K9-Mail oder Outlook benötigt das Programm das Passwort, um E-Mails versenden zu können. Selbstverständlich wird das Passwort nur auf Ihrem Gerät gespeichert. Das Passwort wird nur an Ihren E-Mail Anbieter gesendet (wenn Sie sich einloggen), welcher ohnehin Zugriff auf Ihre Mails hat.

Wenn Sie einen E-Mail-Anbieter wie gmail.com oder yandex.ru mit Unterstützung für OAuth2 nutzen, dann wird Ihr Passwort nicht auf Ihrem Gerät gespeichert. In diesem Fall wird nur ein Zugriffstoken genutzt.

Da Delta Chat Open Source ist, können Sie den [Quellcode](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) überprüfen, wenn Sie sich davon überzeugen möchten, dass Ihre Zugangsdaten sicher gehandhabt werden. Wir freuen uns über Feedback, welches unsere App sicherer für all unsere NutzerInnen macht.


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

- Alle Gruppenmitglieder haben **die gleichen Rechte**. Jede/r kann daher Mitglieder löschen oder weitere hinzufügen.
- Um die Mitglieder zu verwalten, einfach in der Gruppe auf den Gruppennamen klicken.


### Was ist eine verifizierte Gruppe? Weshalb ist das experimentell?

- Eine verifizierte Gruppe ist ein Chat, der Sicherheit vor einem aktiven Angreifer garantiert. Alle Nachrichten in einer verifizierten Gruppe sind Ende-zu-Ende verschlüsselt und Gruppenmitglieder können durch Scannen eines "QR-Einladungscodes" beitreten. Alle Gruppenmitglieder sind deshalb durch eine Kette von Einladungen miteinander verbunden, welche kryptografische Konsistenz gegen aktive Netzwerk- oder Anbieterangriffe garantiert.
Siehe [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) für  Forschung und Entwicklung hinter dieser Funktion.

- Seit Dezember 2019 gibt es "verifizierte Gruppe" als experimentelles Feature.
 Sie wird kontinuierlich verbessert und viele Fehler wurden seit der ursprünglichen Einführung in 2018 behoben. Allerdings gibt es immer noch Fälle, besonders in großen Gruppen, bei denen es zu Inkonsistenzen kommen kann oder Nachrichten unleserlich werden. Anfang 2020 wird es eine Sicherheitsüberprüfung geben und es finden einige neue Entwicklungen rund um QR-Beitrittsprotokolle statt. Die Chancen, dass wir das Etikett "experimentell" in nicht all zu ferner Zukunft entfernen können, stehen gut.


### Ich habe mich selbst versehentlich gelöscht.

- Da Sie kein Gruppenmitglied mehr sind, können Sie sich selbst nicht mehr hinzufügen.
Kein Problem, bitten Sie einfach ein anderes Gruppenmitglied in einem normalen Chat, Sie erneut hinzuzufügen.


### Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Löschen Sie sich entweder aus der Mitgliederliste oder löschen Sie den gesamten Chat. 
Wenn Sie der Gruppe später erneut beitreten möchten, bitten Sie ein anderes Gruppenmitglied, Sie erneut hinzuzufügen.

- Alternativ können Sie eine Gruppe auch "Stummschalten" - dies bedeutet, dass Sie weiterhin alle Nachrichten erhalten und neue schreiben können, aber nicht mehr über neue Nachrichten informiert werden.


### What do double ticks mean in group messages? Has everyone read my message now?

- A message shows double ticks after more than half the the recipients have
  seen the message on their display.
- Note that some recipients might have disabled read-receipts for
  privacy-reasons.
- If more than 50% in a group disabled read receipts, the double ticks will
  never show up. For more detailed information, see
  [this blogpost](https://delta.chat/en/2017-07-06-read-receipts-and-social-pressure).


## Verschlüsselung {#encryption}

### Unterstützt Delta Chat eine Ende-zu-Ende-Verschlüsselung?

- Ja. Delta Chat implementiert den Autocrypt Level 1-Standard und kann 
daher Ende-zu-Ende-verschlüsselte Nachrichten mit anderen Autocrypt-fähigen Anwendungen austauschen.

- Delta Chat also supports a strong form of end-to-end encryption that is 
  even safe against active attacks, see "verified groups" further below. 


### Was muss ich tun, um die Ende-zu-Ende-Verschlüsselung zu aktivieren?

- Nichts.

- Delta Chat (und andere [Autocrypt](https://autocrypt.org)-kompatible
E-Mail Anwendungen) tauschen die für eine Ende-zu-Ende-Verschlüsselung benötigten Schlüssel automatisch mit der ersten versendeten Nachricht aus. Danach werden alle folgenden Nachrichten automatisch Ende-zu-Ende verschlüsselt.
Wenn einer der Chat-Kontakte eine E-Mail-Anwendung verwendet, die nicht Autocrypt-kompatibel ist, werden Nachrichten so lange unverschlüsselt gesendet, bis wieder eine Autocrypt-kompatible Anwendung verfügbar ist.

- If you want to rather avoid end-to-end-encrypted e-mails by default, 
  use the corresponding Autocrypt setting in "Settings / Advanced settings".


### Wird ohne Ende-zu-Ende-Verschlüsselung gar nicht verschlüsselt?

- Mit den meisten E-Mail-Servern stellt Delta Chat eine _transportverschlüsselte_ Verbindung her ([TLS](https://de.wikipedia.org/wiki/Transport_Layer_Security)).
 Dies schützt nur die Verbindung zwischen Ihrem Gerät und Ihrem E-Mail-Server. Wohingegen Ende-zu-Ende-Verschlüsselung die gesamte Kommunikation zwischen Ihrem Gerät und dem Empfangsgerät  schützt.


### Wie kann ich den kryptografischen Zustand mit einem Absender überprüfen?

Das Userprofil zeigt einige zusätzliche Informationen:

-Tippen Sie auf "QR Einladungscode" in Android und dann auf einem anderen Gerät die Schaltfläche "QR-Code scannen", um den Code zu scannen. Wenn beide Geräte online sind, 
wird (falls er noch nicht existiert) ein Chat-Kanal  eingerichtet und die Schlüssel für die Verschlüsselung werden überprüft. Beide Kontakte erhalten eine "Absender verifiziert" Systemnachricht in ihrem 1:1 Chat.

- Für die Ende-zu-Ende-Verschlüsselung zeigt Delta Chat dort zwei Fingerabdrücke an. 
Wenn auf dem Gerät Ihres Chatkontakts dieselben Fingerabdrücke angezeigt werden, ist die Verbindung sicher.

- Bei der Transportverschlüsselung wird dieser Zustand dort nur angezeigt.


## Wie kann ich die Verschlüsselung der Nachrichten überprüfen?

- Wenn neben einer Nachricht ein kleines **Vorhängeschloss** angezeigt wird, bedeutet dies, dass die Nachricht durchgehend Ende-zu-Ende verschlüsselt ist _und_ vom angegebenen Absender gesendet wurde _und_ dass Ihre Antwort ebenfalls durchgehend Ende-zu-Ende verschlüsselt wird.

- Wenn **kein Vorhängeschloss** vorhanden ist, wird die Nachricht normalerweise unverschlüsselt transportiert, z.B. weil der Absender oder Sie die Ende-zu-Ende-Verschlüsselung deaktiviert haben oder der Absender eine Anwendung ohne Unterstützung für die Ende-zu-Ende-Verschlüsselung verwendet.

### Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. 

- Delta Chat implements [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) to achieve protection against active network attacks.  This goes beyond the opportunistic
  base protection of Autocrypt Level 1, while maintaining its ease of use.  

### Was ist der Unterschied zwischen verifizerten Gruppen und 1:1 Chats mit verifizierten Kontakten?

- 1:1 Chats mit einem verifizierten Kontakt und verifizierte Gruppen sind nicht das Gleiche, sogar wenn sich nur 2 Personen in einer verifizierten Gruppe befinden. Ein Unterschied ist, dass Sie einfach weitere Personen zu einer Gruppe hinzufügen können, aber es gibt noch weitere Unterschiede.

- Verifizierte Gruppen sind immer geschützt. Jeder Bruch (Klartextnachrichten oder falsch signierte Nachrichten) wird erkannt und nicht in diesem Chat dargestellt.
Sie können darauf vertrauen, dass alle Nachrichten in diesem verifizierten Chat nicht von Dritten verändert oder gelesen wurden.

- In 1:1 Chats können NutzerInnen auch dann miteinander kommunizieren, wenn sie ihre E-Mail-Programme, Einstellungen oder Geräte gewechselt haben. Deshalb sehen Sie in diesen Chats kein Verifikationshäkchen, auch wenn Sie den Kontakt verifiziert haben.


### Unterstützt Delta Chat Perfect Forward Secrecy?

- Nein, OpenPGP unterstützt Perfect Forward Secrecy nicht. Perfect Forward Secrecy
  arbeitet sitzungsorientiert, aber E-Mail ist von Natur aus asynchron und wird oft von verschiedenen Geräten aus verwendet.
Wenn Ihr geheimer Schlüssel aus Delta Chat Dritten bekannt wird und jemand eine Aufzeichnung Ihrer versendeten und empfangenen verschlüsselten Nachrichten besitzt, ist dieser in der Lage, die Nachrichten zu lesen.

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

If you want to use the **same account** on different devices, you should export
a backup from the old device, and import it into the new device:

- On the old device, choose "Settings / Chats and media / Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### Are there any plans for introducing a Delta Chat Web Client?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  appstores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


### Why can I choose not to watch the Inbox?

This is an experimental setting for some people who are experimenting with
server-side rules. Not all providers support this, but with some you can move
all mails with a "Chat-Version" header to the DeltaChat folder. Normally, this
would be done by the Delta Chat app.

Watching the Inbox makes sense to turn off, if you have both:

- enabled a server-side rule to move all messages with Chat-Version header to the DeltaChat folder, and
- have set the "Show classic emails" setting to "no, chats only".

In this case, Delta Chat doesn't need to watch the Inbox.

### What is the "Send Copy to Self" setting good for?

Sending a copy of your messages to yourself ensures that you receive your own
messages on all devices. If you have multiple devices and don't turn it on, you
see only the messages from other people, and the messages you send from the
current device. 

The copy is send to the Inbox, and then moved to the DeltaChat folder; it's not
put into the "Sent" folder. Delta Chat *never* uploads anything to the Sent
folder because this would mean uploading a message twice (once through SMTP,
and once through IMAP to Sent folder).

The default setting for copy-to-self is "no".

### Why can I choose to watch the "Sent" folder?

The only reason one wants to watch the Sent folder is if you are using another
mail program (like Thunderbird) next to your Delta Chat app, and want your MUA
to participate in chat conversations.

However, we recommend to use the Delta Chat Desktop Client; you can download it
on [get.delta.chat](https://get.delta.chat). The option to watch the "Sent"
folder might go away in the future. It was introduced at a time where there was
no Delta Chat Desktop client available on all platforms. 

### Why can I choose not to watch the DeltaChat folder?

Some people use Delta Chat as a regular email client, and want to use the Inbox
folder for their mail, instead of the DeltaChat folder. If you disable "Watch
DeltaChat folder", you should also disable "move chat messages to DeltaChat".
Otherwise, deleting messages or multi-device setups might not work properly.

## Verschiedenes

### Funktioniert Delta Chat mit _meinem_ E-Mail-Anbieter?

- Mit ziemlich hoher Wahrscheinlichkeit: Ja :) 
- Allerdings benötigen einige Anbieter besondere Optionen, um ordnungsgemäß zu funktionieren; eine von Nutzern erstellte Sammlung zu einigen Optionen findet sich unter [Provider Overview](https://providers.delta.chat).


### If Delta Chat uses E-Mail, is it really an _Instant_ Messenger?

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occassionally. This artifical delay is usually worse on iOS than on Android.
- Note that Delta Chat doesn't use Google Cloud Messaging (GCM) or the Apple
  Push Notification Service (APNS), because this leads to user tracking and
  central control which Delta Chat aims to avoid as much as feasible.
- However, that Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### Is Delta Chat compatible with Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is only
  working inside their platforms, and not compatible with anyone outside.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Siehe hierzu [in Delta Chat genutzte Standards]({% include standards-url %}).

### How are Delta Chat developments funded? 

First of all, Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 

Delta Chat developments have so far been funded from four major sources: 

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018. 

- The [Open Technology Fund](https://opentechfund.org) has given two grants.
  The first 2018/2019 grant (~$200K) majorly improved the Android app 
  and allowed us to release a Desktop app beta version, and also 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) is still ongoing and helps us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  See the 
  ongoing [blog posts](https://delta.chat/en/blog) for more info. 

- The [NLnet foundation](https://nlnet.nl/) granted EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

The monetary funding mentioned above was organized by merlinux GmbH in
Freiburg (Germany), and then distributed to almost a dozen contributors. 

Funding for 2020/2021 is yet to be determined. We are pursuing several
opportunities with different organisations and partners. We also are
considering to ask for donations. In fact, we experimentally started
a little [Delta Chat / Liberapay donation account](https://liberapay.com/delta.chat/)
but have not published this yet.  There were also around 3-4K so far
donated to Bjoern's (the original author of Delta Chat) paypal and bitcoin
donation channels.  
