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
  - oder weil der Kontakt Daten mithilfe einer [Webxdc App](#webxdc) an Ihre Delta Chat-App gesendet hat.
- Dies ist also kein Echtzeit-Online-Status - und wenn jemand nicht sofort antwortet, obwohl er online zu sein scheint, machen Sie sich keine Sorgen und geben Sie ihm etwas Raum. ;-)
- Andererseits werden andere nicht immer "sehen, dass Sie online sind". Wenn Sie Lesebestätigungen deaktiviert haben, sehen sie den grünen Punkt erst, wenn Sie ihnen eine Nachricht senden oder einer Gruppe schreiben, in der sie sich ebenfalls befinden.


### Wie kann ich mein Konto löschen?

Da Sie ein E-Mail-Konto für Delta Chat verwenden, hängt von Ihrem E-Mail-Anbieter ab, wie Sie Ihr Konto löschen können. Wir haben keine Kontrolle über Ihr E-Mail-Konto, daher können wir Ihnen dabei leider nicht helfen.

Wenn Sie das Konto behalten, aber Delta Chat deinstallieren möchten, ist es ratsam, aktive Gruppen zu verlassen, bevor Sie Delta Chat deinstallieren.


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


## Encryption and Security 

### Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

[Autocrypt](https://autocrypt.org) is used for automatically
establishing E2E-encryption with contacts and group chats. 
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure). 

[Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html) 
are used to implement [verified groups](#verifiedchats) 
which provide pervasive protection against network attacks and compromised servers.
Verified groups enforce all messages in a chat to be safely E2E-encrypted
with an unparalleled ease of use that avoids users having to learn about 
public key cryptography, key management or key verification. 


### When will messages be E2E-encrypted? 

After a first message was received from a Delta Chat or other Autocrypt-capable contact, 
Delta Chat defaults to using E2E-encryption with that contact (and vice versa). 
When creating a group chat with contacts where E2E-encrypted is individually in place,
all group members will automatically use E2E-encryption with each other and in the group. 
However, if you add a contact that lacks E2E-encryption, 
the group chat will not use E2E-encryption. 

If you want to be sure to always and only use E2E-encryption in a group
use [verified chat groups](#verifiedchats) 
which additionally protects against compromised or malfeasant e-mail servers. 


### Are attachments (pictures, files, audio etc.) E2E-encrypted? 

Yes. 
When we talk about an "E2E-encrypted message" 
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
and only displays a padlock security indicator on a message
if the whole message is properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publically discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019](https://delta.chat/assets/blog/2019-first-security-review.pdf). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for E2E-encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking E2E-encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing E2E-encryption is
only one part of "user outcomes",
see also our answers to [device-seizure](#device-seizure)
and [message-metadata](#message-metadata) questions. 


### Is Delta Chat vulnerable to EFAIL?

No, [Delta Chat never was vulnerable to EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
because its OpenPGP implementation [rPGP](https://github.com/rpgp/rpgp) 
uses Modification Detection Code when encrypting messages
and returns [an error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
if the Modification Detection Code is incorrect.

Delta Chat also never was vulnerable to the "Direct Exfiltration" EFAIL attack
because it only decrypts `multipart/encrypted` messages
which contain exactly one encrypted and signed part,
as defined by the Autocrypt Level 1 specification. 


### Is a message exposed in cleartext if E2E-encryption is not available? {#tls}

No,
this does not necessarily mean that the message is exposed in cleartext.

Delta Chat always uses ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)) encryption
which secures connections between your device and your e-mail provider
unless you explicitly disable it.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).

Moreover, the connection between your and the recipient's e-mail provider 
will today typically be transport-encrypted as well. 
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced in all inter e-mail server communications
in which case Delta Chat communications will never be exposed in cleartext to the network 
even if the message was not E2E-encrypted. 

Note that maintaining E2E-encryption on top of TLS encryption is highly advisable 
because it provides safety between your device and a contact's device,
irrespective of any hops over potentially compromised e-mail servers. 


### How does Delta Chat protect metadata in messages? {#message-metadata}

Delta Chat protects most message metadata by putting the following information
into the E2E-encrypted part of messages: 

- Subject line 
- Group avatar and name 
- MDN (read receipt) requests (`Chat-Disposition-Notification-To`)
- Disappearing message timer (`Ephemeral-Timer`) 
- `Chat-Group-Member-Removed`, `Chat-Group-Member-Added` 
- `Secure-Join` header containing secure join commands
- Notification about enabling location streaming
- WebRTC room URL

E-Mail servers do not get access to this protected metadata 
but they do see the message date as well as the message size,
and, more importantly, the sender and receiver addresses. 
E-mail servers need receiver addresses to route and 
deliver messages to recipient's devices. 


### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a Delta Chat optimized [e-mail server instance](https://delta.chat/serverguide)
to create pseudonymous temporary accounts through QR-code scans.
Note that Delta Chat apps on all platforms support multiple accounts 
so you can easily use action-specific "1-week" or "1-month" accounts next to your "main" account
with the knowledge that all temporary account data, along with all metadata, will be deleted. 
Moreover, if a device is seized then contacts using temporary e-mail accounts 
can not be identified easily, as compared to messengers which reveal 
phone numbers in chat groups which in turn are often associated with passport identities. 


### How can I verify E2E-security with a contact? 

If you are within immediate distance of your contact,
select **QR Invite code** on one device and then **Scan QR code**
from within Delta Chat on the other device. 
If both devices are online, 
they will setup a chat with each-other (if it doesn't exist already)
and both will see a "sender verified" system message in their chat. 
Showing and scanning a QR code can also happen in any "second channel" 
such as a video call or another messenger. 

If QR code scanning is for some reason not viable, 
you may check the E2E encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop). 
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.


### How can I check the encryption status of messages?

A little **padlock** in a message bubble denotes 
that the message was properly E2E-encrypted from the given sender.
If there is **no padlock**, the message was not properly E2E-encrypted 
most likely because the sender uses an app or webmail interface 
without support for E2E--encryption.


### Why do I see unencrypted messages? 

If a contact uses a non-Autocrypt e-mail app, 
all messages involving this contact (in a group or 1:1 chat) 
will not be E2E-encrypted, and thus not show a "padlock" with messages. 
Note that even if your contacts use Delta Chat on their account, 
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages. 
Replying unencrypted to unencrypted messages is mandated by Autocrypt 
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app. 

If you need a safely E2E-encrypted chat with contacts
who are using their account also with Autocrypt-incapable apps (e.g. webmail) 
it's best to create a [verified group chat](#verifiedchats) with them. 
Any message sent into a verified group chat will be E2E-encrypted
irrespective of the last incoming message from a contact. 


### How can I ensure message E2E-encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is using [verified groups](#verifiedchats) 
and turning on disappearing messages.

Verified groups are always encrypted and protected against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) 
and turning on "disappearing messages" deletes the messages 
on the server after a user-configured time. 

If you don't need a longer-lived copy of your messages on the server, 
you can also turn on ["delete messages from server automatically"](#delold).


### Unterstützt Delta Chat Perfect Forward Secrecy?

No, Delta Chat doesn't support Perfect Forward Secrecy (PFS).
This means that if your Delta Chat private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.

Note, however, that if anyone obtains to your decryption keys, 
they will typically also be able to obtain your messages, 
irrespective if Perfect Forward Secrecy is in place or not. 
The typical real-world situation for leaked decryption keys is device seizure
which we discuss in our answer [on metadata and device seizure](#device-seizure). 

It is possible that Delta Chat evolves to support Perfect Forward Secrecy,
because OpenPGP is just a container for encrypted messages 
but encryption key management (and thus key rotation or key "ratcheting") 
could be organized in flexible ways. 
See [Seqouia's PFS prototype](https://gitlab.com/sequoia-pgp/openpgp-dr)
for existing experiments in the OpenPGP implementor community. 


### Kann ich meinen existierenden privaten Schlüssel weiter verwenden?

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

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

- Stellen Sie sicher, dass sich beide Geräte im selben Wi-Fi oder Netzwerk befinden

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


## webxdc apps {#webxdc}

In Delta Chat, you can share [webxdc apps](https://webxdc.org), attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger.


### How private are webxdc apps?

- webxdc apps can not send data to the Internet, or download anything.
- A webxdc app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a webxdc app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the webxdc app as well.
- This also means: it can be a privacy risk to open webxdc apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get webxdc apps?

- In general, anyone can share webxdc apps with each
  other without restrictions.
- You can [send 'hi' to xstore@testrun.org](https://delta.chat/en/2023-08-11-xstore)
  to see an experimental webxdc appstore.
  All of the apps are open source and for free.
- Many people write their own webxdc apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own webxdc apps?

- webxdc apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimentelle Features

Wir sind sehr dankbar für Feedback zu diesen Funktionen - möchten Sie Ihre Ideen teilen? Treten Sie dem [Forum](https://support.delta.chat) bei, um einen Beitrag zu leisten. (Sie mögen Experimente? Registrieren Sie sich über "Sign Up -> with Delta Chat"!)

### Wie kann ich Audio-/Videoanrufe mit Delta Chat verwenden?

- Um Audio-/Videoanrufe zu aktivieren, gehen Sie in den erweiterten Einstellungen zum Abschnitt "Experimentelle Features" und wählen Sie eine "Videochat-Instanz" aus.
- Wenn Sie andere zu einem Videochat einladen, wird dieser sofort in Ihrem Browser/Ihrer App geöffnet. Die anderen erhalten eine E-Mail mit einem Link zu Ihrem Jitsi/BBB-Raum. Auf diese Weise ist es auch kompatibel, wenn Ihre Chat-Partner Delta Chat nicht verwenden.
- Beachten Sie, dass es auf der anderen Seite keinen Klingelton gibt und Ihre Chat-Partner nicht durch eine Videochat-Einladung unterbrochen werden.
- Sie können jeden Videochat-Dienst verwenden, der die Teilnahme per Link ermöglicht. Fügen Sie einfach den Link in den Einstellungen hinzu.
- Um beispielsweise die Flaggschiff-Jitsi Meet-Instanz zu verwenden, könnten Sie `https://meet.jit.si/$ROOM` eingeben. Die Variable `$ROOM` ist ein zufälliger Wert; auf diese Weise haben Sie jedes Mal, wenn Sie jemanden anrufen, einen neuen zufälligen Jitsi-Raum.


### What is a verified group? Why is it experimental? {#verifiedchats}

Verified groups carry a green verification checkmark in the group title that guarantees
that all messages are E2E-encrypted and can not be read or altered by e-mail servers. 
Each member in a verified group chat can add already verified contacts 
or tap "QR Invite code" to let invitees scan the code to get verified and added ("secure-join").
This "secure-join" protocol ensures that all verified group chat members 
are connected with each other through a chain of verifications ("web of trust"), 
guaranteeing E2E-encryption consistency even if e-mail servers are compromised or malfeasant.
See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
for a detailed security discussion. 

Note that "1:1" chats are currently only opportunistically encrypted (Autocrypt). 
You need to create a verified group with your contact 
to ensure that all messages will be safely E2E-encrypted between you two. 
We plan to introduce verified 1:1 chats around the end of 2023, 
simplifying and extending the guarantees of verified E2E-encryption for all chat types. 
Until then verified groups will remain classified as an experimental feature 
although they are widely and successfully used already, 
and reported bugs have been continously fixed in the last years. 


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

### Wurde Delta Chat unabhängig auf Sicherheitslücken geprüft? {#security-audits}

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
