---
title: FAQ
lang: de
render_toc: true
header: Häufig gestellte Fragen
---


## Was ist Delta Chat?

Delta Chat ist eine zuverlässige, dezentralisierte und sichere Instant-Messaging-App, verfügbar für Mobile- und Desktop-Plattformen.

- Einfache Erstellung von **privaten Chat-Profile** mit sicheren, schnellen und interoperablen [Chatmail-Servern](https://chatmail.at/relays),
die sofortige Push-Benachrichtigungen für iOS- und Android-Geräte bieten. 

- Durchgängige [Mehrprofil](#multiple-accounts)- und [Mehrgeräte](#multiclient)-Unterstützung auf allen Plattformen und zwischen verschiedenen [Chatmail Apps](https://chatmail.at/clients)

- Interaktive [In-Chats-Apps](#webxdc) zum Spielen und für die Zusammenarbeit

- [Geprüfte Ende-zu-Ende-Verschlüsselung](#security-audits), 
sicher gegen Netzwerk- und Serverangriffe. 

- Freie und quelloffene Software, sowohl app- als auch serverseitig, 
basierend auf [Internet-Standards]({% include standards-url %}).


### Wie finde ich Leute, mit denen ich chatten kann? {#howtoe2ee}

Beachte zunächst, dass Delta Chat ein privater Messenger ist.
Es gibt keine öffentliches Verzeichnis, du entscheiden selbst über deine Kontakte.

- Wenn du **persönlich** mit deinen Freunden oder Familie zusammen bist,
  tippe auf das **QR-Code**-Symbol <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" />
  auf dem Hauptbildschirm.  
  Bitte deinen Chatpartner den QR-Code mit Delta Chat zu **scannen**.

 Für eine Kontaktaufnahme **aus der Ferne**, klicke im selben Bildschirm auf "Kopieren" oder "Teilen" und sende den **Einladungslink** über einen anderen privaten Chat.

Wartet nun, bis die Verbindung hergestellt ist.

- Wenn beide Seiten online sind, wird ein Chat angezeigt und ihr könnt sicher miteinander chatten.

- Wenn eine Seite offline ist oder eine schlechte Netzwerkverbindung hat,
wird die Chat-Funktion verzögert, bis die Verbindung wiederhergestellt ist.

Glückwunsch! 
Du verwendest jetzt automatisch eine [Ende-zu-Ende-Verschlüsselung](#e2ee)
mit deinem Kontakt. 
Wenn man sich gegenseitig zu [Gruppen](#groups) hinzufügt,
wird eine Ende-zu-Ende-Verschlüsselung zwischen allen Mitgliedern eingerichtet. 


### Warum ist ein Chat als "Anfrage" markiert?

Da Delta Chat ein privater Messenger ist, können dir zunächst nur Freunde und Familienmitglieder, denen du deinen [QR-Code oder Einladungslink](#howtoe2ee) schickst, schreiben.

Deine Freunde können deine Kontaktdaten dann mit anderen Freunden teilen. Dies wird als **Anfrage** angezeigt.

- Du musst die Anfrage **akzeptieren**, bevor du antworten kannst.

- Du kannst sie auch "löschen", wenn du vorerst nicht mit ihm chatten möchten.

- If you delete a request, future messages from that contact will still appear
as message request, so you can change your mind. If you really don't want to
receive messages from this person, consider **blocking** them.


### Wie kann ich zwei meiner Freunde miteinander in Kontakt bringen?

Füge den ersten Kontakt zum Chat des zweiten Kontakts hinzu, indem du auf <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Anhängen → Kontakt** klickst.
Du kannst auch eine kurze Nachricht hinzufügen.

Der zweite Kontakt erhält dann die **Kontaktdaten** und
kann darauf tippen, um mit dem ersten Kontakt zu chatten.


### Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja. Bilder, Videos, Dateien, Sprachnachrichten und mehr können über die <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Anhang-**
  bzw. <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Sprachnachricht**-Buttons hinzugefügt werden

- Um die Leistung zu verbessern, werden die Bilder standardmäßig optimiert und in einer kleineren Größe gesendet, aber du kannst sie auch als "Datei" senden, um das Original zu erhalten.


### Was sind Profile? Wie kann ich zwischen ihnen wechseln? {#multiple-accounts}

Ein Profil besteht aus **einem Namen, einem Bild** und einigen zusätzlichen Informationen zum Verschlüsseln von Nachrichten.
Ein Profil existiert nur auf Ihren Geräten
und verwendet den Server nur für den Transport von Nachrichten.

Bei der Installation von Delta Chat wird ein erstes Profil erstellt.

Später kannst du auf dein Profilbild in der oberen linken Ecke tippen, um **Profile hinzuzufügen**
oder **Profile zu wechseln**.

Du kannst separate Profile für politische, familiäre oder berufliche Aktivitäten verwenden.

Vielleicht möchtest due auch erfahren, wie du [Profile auf mehreren Geräten verwenden kannst](#multiclient).


### Wer sieht mein Profilbild?

- Du kannst ein Profilbild in den Einstellungen hinzufügen. Wenn du deinen Kontakten eine Nachricht sendest oder sie über einen QR-Code hinzufügst, sehen diese automatisch dein Profilbild.

- Aus Datenschutzgründen sieht niemand dein Profilbild, dem du nicht zuvor eine Nachricht gesendet hast.


### Kann ich einen Status festlegen? {#signature}

Ja,
Du kannst dies unter "Einstellungen → Profil → Signatur" tun.
Sobald du eine Nachricht an einen Kontakt sendest, kann dieser deine Signatur in deinem Profil sehen.


### Was bedeutet Anheften, Stummschalten, Archivieren?

Verwende diese Tools, um deine Chats zu organisieren:

- **Angeheftete Chats** bleiben immer ganz oben in der Chatliste. So kannst du schnell auf deine Lieblingschats zugreifen oder du verwendest vorübergehend angeheftete Chats um Dinge nicht zu vergessen.

- **Stummgeschaltete Chats** erhalten keine Benachrichtigungen, bleiben ansonsten aber an ihrem Platz. Du kannst auch stummgeschaltete Chats anheften.

- **Archiviere Chats**, wenn du diese nicht mehr in deiner Chatliste sehen möchtest. Archivierte Chats bleiben oberhalb der Chatliste oder über die Suche zugänglich.

- Wenn ein archivierter Chat eine neue Nachricht erhält, wird er, sofern er nicht stummgeschaltet ist, **wieder in die normale Chatliste verschoben**.  **Stummgeschaltete Chats bleiben archiviert**, bis du sie manuell aus dem Archiv entfernst.

Um die Funktionen zu nutzen, lang auf einen Chat in der Chatliste tippen oder den Chat mit der rechten Maustaste anklicken.


### Wie funktionieren "Gespeicherte Nachrichten"? {#save}

**Gespeicherte Nachrichten** ist ein Chat, den du verwenden kannst, um dir Nachrichten zu merken und wiederzufinden.

- Tippen in einem beliebigen Chat lange auf eine Nachricht oder klicken mit der rechten Maustaste darauf und wähle **Speichern**.

- Gespeicherte Nachrichten werden mit dem Symbol
  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
  neben dem Datum markiert

- Öffnen später den Chat „Gespeicherte Nachrichten“; dort siehst du die gespeicherten Nachrichten.
Durch Tippen auf <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
kannst du zu der ursprünglichen Nachricht im ursprünglichen Chat zurückkehren

- Schließlich kannst du auch „Gespeicherte Nachrichten“ verwenden, um **persönliche Notizen** zu machen - öffnen den Chat, gib etwas ein, fügen ein Foto oder eine Sprachnachricht hinzu usw.

- Da „Gespeicherte Nachrichten“ synchronisiert werden, können sie sehr praktisch für die Übertragung von Daten zwischen Geräten sein

Nachrichten bleiben gespeichert, auch wenn sie bearbeitet oder gelöscht werden -
sei es durch den [Absender](#edit), durch [Automatisches Löschen](#delold) oder durch [verschwindende Nachrichten anderer Chats](#ephemeralmsgs).


### Was bedeutet der grüne Punkt?

Manchmal ist ein “grüner Punkt” <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/> neben dem Avatar eines Kontakts. Er bedeutet, dass der Kontakt **kürzlich von dir gesehen** wurde, in den letzten 10 Minuten, z.B. da du eine Nachricht oder eine Lesebestätigung empfangen hast.

Dies ist also kein Echtzeit-Online-Status - und auch andere werden nicht immer sehen, wenn du online bist.


### Was bedeuten die Häkchen neben den ausgehenden Nachrichten?

- **Ein Häkchen** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/> bedeutet, dass die Nachricht erfolgreich versandt wurde.

- **Zwei Häkchen**  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/> bedeuten, dass mindestens ein Gerät des Empfängers zurückgemeldet hat, die Nachricht empfangen zu haben.

- Lesebestätigungen können deaktiviert werden. D.h. auch wenn Sie nur ein Häkchen sehen, kann die Nachricht gelesen worden sein.

- Umgekehrt bedeuten zwei Häkchen nicht automatisch, dass ein Mensch die Nachricht gelesen oder verstanden hat ;)


### Schreibfehler korrigieren und Nachrichten nach dem Senden löschen {#edit}

- Du kannst den Text deiner Nachrichten nach dem Senden bearbeiten.
Tippen dazu lange auf die Nachricht oder klicke mit der rechten Maustaste auf die Nachricht und wähle **Bearbeiten** oder <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>

- Wenn du versehentlich eine Nachricht gesendet hast,
wähle im selben Menü **Löschen** und dann **Für alle löschen**.

Während bei bearbeiteten Nachrichten das „Bearbeitet“ neben dem Datum erscheint,
werden gelöschte Nachrichten ohne Markierung im Chat entfernt.
Es werden keine Benachrichtigungen verschickt und es gibt kein Zeitlimit.

Beachten, dass die ursprüngliche Nachricht dennoch von Chatteilnehmern empfangen worden sein könnte,
die die Nachricht bereits beantwortet, weitergeleitet, gespeichert, mit einem Screenshot versehen oder anderweitig kopiert haben könnten.


### Wie funktionieren "Verschwindende Nachrichten"? {#ephemeralmsgs}

Schalte "Verschwindende Nachrichten"
oben rechts im Chatfenster,
durch Auswahl einer Zeitspanne
zwischen 5 Minuten und 1 Jahr ein.

Bis die Einstellung wieder ausgeschaltet wird,
kümmern sich die Delta-Chat-Apps der Chat-Teilnehmer
um das Löschen der Nachrichten
nach der gewählten Zeitspanne.
Die Zeitspanne beginnt,
wenn der Empfänger die Nachricht zum ersten Mal in Delta Chat ansieht.
Die Nachrichten werden dann
sowohl auf den Servers,
als auch in den Apps selbst gelöscht.

Beachte, dass du dich auf verschwindende Nachrichten nur so lange verlassen kannst, wie du deinen Chat-Partnern vertraust;
böswillige Chatpartner können Fotos machen,
oder auf andere Weise Nachrichten vor dem Löschen speichern, kopieren oder weiterleiten.

Abgesehen davon, wenn ein Chat-Partner Delta Chat deinstalliert, kann es länger dauern, bis die (ohnehin verschlüsselten) Nachrichten vom Server gelöscht werden.


### Was passiert, wenn ich "Alte Nachrichten vom Gerät löschen" aktiviere? {#delold}

- Wenn du Speicherplatz auf deinem Gerät sparen möchtest, kannst du alte Nachrichten automatisch löschen lassen.
- Hierzu, öffne die "Chats und Medien"-Einstellungen und dort "Alte Nachrichten vom Gerät löschen". Du kannst einen Zeitraum zwischen "1 Stunde" und "1 Jahr" festlegen; auf diese Weise werden *alle* Nachrichten von Ihrem Gerät gelöscht, sobald sie älter als angegeben sind.

### Wie kann ich mein Chat-Profil löschen? {#remove-account} 

If you are using more than one chat profile,
you can remove single ones in the top profile switcher menu (on Android and iOS),
or in the sidebar with a right click (in the Desktop app).
Chat profiles are only removed on the device where deletion was triggered. 
Chat profiles on other devices will continue to fully function. 

If you use a single default chat profile you can simply uninstall the app.
This will still automatically trigger deletion of all associated address data on the chatmail server.
For more info, please refer to [nine.testrun.org address-deletion](https://nine.testrun.org/info.html#account-deletion) 
or the respective page from your chosen [3rd party chatmail server](https://chatmail.at/relays).


## Gruppen {#groups}

Groups let several people chat together privately with **equal rights**.

Anyone can
change the group name or avatar,
[add or remove members](#addmembers),
set [disappearing messages](#ephemeralmsgs),
and [delete their own messages](#edit) from all member's devices.

Because all members have the same rights, groups work best among **trusted friends and family**.


### Eine Gruppe anlegen

- Wähle **Neuer Chat** und dann **Neue Gruppe** aus dem Menü oben rechts oder über das entsprechende Symbol unter Android/iOS.
- Wähle auf dem folgenden Bildschirm die **Gruppenmitglieder** aus und klicke auf das Häkchen in der oberen rechten Ecke. Danach kannst du einen **Gruppennamen** und auch einen **Gruppenbild**  festlegen.
- Sobald du die **erste Nachricht** in die Gruppe schreibst, werden alle Mitglieder über die neue Gruppe informiert und können in der Gruppe antworten (solange du keine Nachricht in die Gruppe schreibst, ist die Gruppe für die Gruppenmitglieder nicht sichtbar).


### Mitglieder hinzufügen und entfernen {#addmembers}

- All group members have the **same rights**.
  For this reason, everyone can delete any member or add new ones.

- To **add or delete members**, tap the group name in the chat and select the member to add or remove.

- If the member is not yet in your contact list, but **face to face** with you,
  from the same screen, show a **QR code**.  
  Ask your chat partner to **scan** the QR image with their Delta Chat app by tapping
  <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> on the main screen.

- For a **remote** member addition,
  click "Copy" or "Share" and send the **invite link**
  through another private chat to the new member.

QR code and invite link can be used to add several members.
However, since groups are [meant for trusted people](#groups), avoid sharing them publicly.


### Ich habe mich selbst versehentlich gelöscht.

- Da du kein Gruppenmitglied mehr bist, kannst du sich selbst nicht mehr hinzufügen.
Kein Problem, bitte einfach ein anderes Gruppenmitglied in einem normalen Chat, dich hinzuzufügen.


### Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Lösche dich entweder aus der Mitgliederliste oder lösche den gesamten Chat. 
Wenn du der Gruppe später erneut beitreten möchtest, bitten ein anderes Gruppenmitglied, dich hinzuzufügen.

- Alternativ kannst du eine Gruppe auch "stummschalten" - dies bedeutet, dass du weiterhin alle Nachrichten erhälst und neue schreiben kannst, aber nicht mehr über neue Nachrichten informiert wirst.

### Eine Gruppe klonen

You can duplicate a group to start a separate discussion
or to exclude members without them noticing.

- Open the group profile and tap **Clone Chat** (Android/iOS),
  or right-click the group in the chat list (Desktop).

- Set a new name, choose an avatar, and adjust the member list if needed.

The new group is **fully independent** from the original,
which continues to work as before.


## In-Chat-Apps {#webxdc}

You can send apps to a chat - games, editors, polls and other tools.
This makes Delta Chat a truly extensible messenger.


### Wo bekomme ich In-Chat-Apps?

- In a chat, using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Apps**

- You can also [create your own app](#create-xdc) and attach it using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → File**


### Wie privat sind In-Chat-Apps?

- In-chat apps can not send data to the Internet, or download anything.

- An in-chat app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.

- The privacy an in-chat app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the in-chat app as well.

- This also means: Just like for web links, do not open apps from untrusted contacts.


### Wie kann mich meine eigene In-Chat-Apps erstellen? {#create-xdc}

- In-chat apps are zip files with `.xdc` extension containing html, css, and javascript code.

- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.

- All else you need to know is written in the
  [Webxdc documentation](https://webxdc.org/docs).

- If you have question, you can ask others with experience
  in the [Delta Chat Forum](https://support.delta.chat/c/webxdc/20).


## Sofortige Nachrichtenzustellung und Push-Benachrichtigungen {#instant-delivery}

### Was sind Push-Benachrichtigungen? Wie kann ich Nachrichten sofort erhalten?

Push-Benachrichtigungen werden von Apples und Googles „Push-Diensten“ an das Gerät des Benutzers gesendet,
so dass eine inaktive Delta-Chat-App im Hintergrund Nachrichten erhalten
und Benachrichtigungen auf dem Telefon des Nutzers anzeigen kann.

Push-Benachrichtigungen funktionieren mit allen [Chatmail](https://delta.chat/chatmail)-Servern auf

- iOS-Geräten, durch die Integration mit den Apple-Push-Diensten.

- Android-Geräten, durch die Integration des Google-FCM-Push-Dienstes,
auch auf Geräten, die [microG](https://microg.org)
anstelle von proprietärem Google-Code auf dem Telefon.


### Sind Push-Benachrichtigungen auf iOS-Geräten aktiviert? Gibt es Alternativen?

Ja, Delta Chat verwendet automatisch Push-Benachrichtigungen für [Chatmail](https://delta.chat/chatmail)-Profile.
Und nein, es gibt für Apple-Telefonen keine Alternative, Push-Benachrichten zuzustellen;
Apple-Geräte erlauben es Delta Chat nicht, Daten im Hintergrund abzurufen.
Push-Benachrichtigungen werden für iOS-Nutzer automatisch aktiviert, da
[Delta Chats datenschutzwahrendes Push-Benachrichtigungssystem](#privacy-notifications)
keine Daten an Apple weitergibt, die Apple nicht bereits hat.


### Sind Push-Benachrichtigungen auf Android-Geräten aktiviert/erforderlich? {#android-push}

If a "Push Service" is available, Delta Chat enables Push Notifications
to achieve instant message delivery for all chatmail users.

In den Delta-Chat-Einstellungen „Benachrichtigungen“ für „Sofortige Benachrichtigungen“
kannst du die folgenden Einstellungen ändern, die alle Chat-Profile betreffen:

- Hintergrundverbindung verwenden: Wenn du keinen Push-Dienst verwendest, kannst du  die „Batterie-Optimierung“ für Delta Chat deaktivieren, damit Nachrichten im Hintergrund abgerufen werden können. Dabei kann es jedoch zu Verzögerungen von Minuten bis Stunden kommen.
Einige Android-Hersteller schränken Apps sogar vollständig ein
(siehe [dontkillmyapp.com](https://dontkillmyapp.com))
und Delta Chat zeigt möglicherweise keine eingehenden Nachrichten an, bis du die App erneut manuell öffnest.
  
- Hintergrundverbindung erzwingen: Dies ist die Ausweichoption wenn die vorherigen Optionen nicht verfügbar sind oder keine „sofortige Zustellung“ erreichen. Die Aktivierung dieser Option führt zu einer permanenten Benachrichtigung auf Ihrem Telefon, die bei neueren Android-Telefonen manchmal „verkleinert“ werden kann.

Beide „Hintergrundverbindung“-Optionen sind energiesparend und
können sicher ausprobiert werden, wenn du feststellst, dass Nachrichten nur mit großer Verzögerung ankommen.


### Wie privat sind Delta-Chat-Push-Benachrichtigungen? {#privacy-notifications}

Delta Chat Push Notification support avoids leakage of private information.
It does not leak profile data, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

So verwendet Delta Chat Push-Benachrichtigungen:

- Eine Delta-Chat-Anwendung erhält lokal ein „Geräte-Token“, verschlüsselt und speichert es
auf dem [Chatmail](https://delta.chat/chatmail)-Server.

- When a [chatmail](https://delta.chat/chatmail) server receives a message for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or profile data of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the profile data of the device it wakes up.
  The central Apple/Google Push services never see any profile data (sender or receiver)
  and also never see any message content (also not in encrypted forms).


Der zentrale Delta-Chat-Benachrichtigungs-Proxy [ist klein und vollständig in Rust implementiert](https://github.com/deltachat/notifiers)
und vergisst die Geräte-Token, sobald Apple/Google/etc. sie verarbeitet hat,
normalerweise innerhalb weniger Millisekunden.

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees profile data, IP-addresses or
any cryptographic identity information associated with a user's device (token). 

Aufgrund dieses umfassenden Datenschutzkonzepts würde sogar die Beschlagnahmung eines Chatmail-Servers,
oder die vollständige Beschlagnahmung des zentralen Delta-Chat-Benachrichtigungsproxys
keine privaten Informationen preisgeben, die den zentralen Push-Diensten nicht bereits vorliegen.


### Warum integriert sich Delta Chat in zentralisierte, proprietäre Apple/Google-Push-Dienste?

Delta Chat ist ein freier, quelloffener, dezentraler Messenger mit freier Serverwahl,
aber wir wollen, dass die Nutzer eine zuverlässige „Sofortzustellung“ von Nachrichten haben,
wie sie es von WhatsApp, Signal oder Telegram kennen,
ohne im Vorfeld Fragen zu stellen, die eher für erfahrene Nutzer oder Entwickler geeignet sind.

Note that Delta Chat has a [small and privacy-preserving Push Notification system](#privacy-notifications)
that achieves "instant delivery" of messages for all chatmail servers
including a potential one [you might setup yourself without our permission](https://delta.chat/chatmail#selfhosted).
Welcome to the power of the interoperable chatmail relay network :)



## Mehrere Geräte verwenden {#multiclient}

### Kann ich Delta Chat auf mehreren Geräten zur selben Zeit verwenden?

Ja. Du kannst dasselbe Profil auf mehreren Geräten verwenden:

- Stelle sicher, dass sich beide Geräte im selben Wi-Fi oder Netzwerk befinden

- Gehen auf dem ersten Gerät zu **Einstellungen → Zweites Gerät hinzufügen**, entsperre den Bildschirm, falls erforderlich, und warte einen Moment, bis ein QR-Code angezeigt wird

- Auf dem zweiten Gerät [Delta Chat installieren](https://get.delta.chat)

- Auf dem zweiten Gerät Delta Chat starten, "Als Zweitgerät hinzufügen" wählen und den QR-Code vom ersten Gerät scannen

- Die Übertragung sollte nach ein paar Sekunden beginnen und während der Übertragung zeigen beide Geräte den **Fortschritt** an. Warte, bis der Vorgang auf beiden Geräten abgeschlossen ist.

Im Gegensatz zu vielen anderen Messengern, sind nach erfolgreicher Übertragung beide **Geräte völlig unabhängig voneinander. Das eine Gerät wird nicht benötigt, damit das Andere funktioniert.


### Fehlersuche

- Vergewissere dich, dass beide Geräte mit dem **gleichen Wi-Fi, WLAN oder Netzwerk** verbunden sind.

- Unter **Windows**, **Systemsteuerung / Netzwerk und Internet** öffnen
und sicherstellen, dass **Privates Netzwerk** als "Netzwerkprofiltyp" ausgewählt ist.
(nach der Übertragung kann wieder der ursprüngliche Wert verwendet werden)

- Auf **iOS**, sicherstellen, dass „Systemeinstellungen / Apps / Delta Chat / **Lokales Netzwerk**“ eingeschaltet ist

- Auf **macOS,** „Systemeinstellungen / Datenschutz & Sicherheit / **Lokales Netzwerk** / Delta Chat“ aktivieren

- Dein System verfügt möglicherweise über eine "Personal Firewall"; diese sind dafür bekannt, Probleme zu verursachen (insbesondere bei Windows). **Deaktiviere die Personal Firewall** für Delta Chat auf beiden Seiten und versuch es erneut

- In **Gastnetzwerken** z.B. der **Fritz!Box**, können Geräte möglicherweise nicht miteinander kommunizieren.
Verwende nach Möglichkeit ein Nicht-Gast-Netzwerk. Wenn du Zugriff auf den Router hast, kannst du auch die Kommunikation der Geräte untereinander für die Dauer der Übertragung erlauben.

- Wenn du immer noch Probleme bei der Verwendung desselben Netzwerks hast,
versuche, einen **Mobilen Hotspot** auf einem Gerät zu öffnen und dich mit dem anderen Gerät in dieses WLAN einzuwählen.

- Vergewissere dich, dass das Zielgerät über **genügend Speicher** verfügt

- Wenn die Übertragung begonnen hat, stelle sicher, dass die Geräte **aktiv bleiben** und nicht ausgehen. Beende Delta Chat nicht. (wir bemühen uns, die App im Hintergrund laufen zu lassen, aber [Systeme neigen dazu, Apps zu beenden](https://dontkillmyapp.com), leider)

- Du bist auf dem Zielgerät **bereits eingeloggt**? Du kannst mehrere Profile pro Gerät verwenden, füge einfach [ein weiteres Konto hinzu](#multiple-accounts)

- Wenn du immer noch Probleme hast oder wenn du **keinen QR-Code scannen kannst**, versuche die **manuelle Übertragung** wie unten beschrieben


### Manueller Transfer {#backup}

Diese Methode wird nur empfohlen, wenn "Zweites Gerät hinzufügen", wie oben beschrieben, nicht funktioniert.

- Auf dem alten Gerät, gehe zu "Einstellungen → Chats und Medien → Chats auf externem Speicher speichern". Gib deine PIN, dein Muster oder dein Passwort zum Entsperren des Bildschirms ein. Anschließend kannst du auf "Backup starten" klicken. Dadurch wird die Backup-Datei auf deinem Gerät gespeichert. Jetzt musst du sie auf das andere Gerät übertragen.
- Auf dem neuen Gerät, auf dem Anmeldebildschirm, wähle "Ich habe bereits ein Profil" und dann "Wiederherstellen aus Backup". Nach dem Import sind deine Chats, Medien und Einstellungen auf das neue Gerät kopiert.
  - **Wenn du iOS verwendest** und auf Schwierigkeiten stößt, hilft dir vielleicht [diese Anleitung](https://support.delta.chat/t/import-backup-to-ios/1628).
- Du bist nun synchronisiert und kannst beide Geräte zum Senden und Empfangen von Ende-zu-Ende-verschlüsselten-Nachrichten mit deinen Kommunikationspartnern verwenden.


### Gibt es Pläne für eine Delta-Chat-Web-Anwendung?

- Es gibt keine direkten Pläne, aber einige vorläufige Gedanken.
- Es gibt 2-3 Möglichkeiten, einen Delta-Chat-Web-Client einzuführen, aber sie bedeuten alle immense Arbeit. Im Moment fokussieren wir uns darauf, stabile native Apps in den Appstores (Google Play/iOS/Windows/macOS/Linux repositories) anzubieten. 
- Solltest du einen Web-Client benötigen, weil du auf deinem Arbeitsrechner keine Software installieren darfst, kannst du den portablen Windows-Desktop-Client bzw. Applmage für Linux nutzen. Du findest diese unter [get.delta.chat](https://get.delta.chat).


## Erweitert

### Experimentelle Features

Unter **Einstellungen → Erweitert → Experimentelle Features**
kannst du unfertige Features ausprobieren, an denen gearbeitet wird.

Die Features können **instabil** sein und **geändert oder entfernt** werden.

You can find more information
and give feedback in the [Forum](https://support.delta.chat).


### Was ist "Statistik an Delta Chat Entwickler senden"? {#statssending}

We would like to improve Delta Chat with your help,
which is why Delta Chat for Android asks whether you want
to send anonymous usage statistics.

You can turn it on and off at
**Settings → Advanced → Send statistics to Delta Chat's developers**.

When you turn it on,
weekly statistics will be automatically sent to a bot.

We are interested e.g. in statistics like:

- How many contacts are introduced by personally scanning a QR code?
- Which versions of Delta Chat are being used?
- How many messages are unencrypted?

We will _not_ collect any personally identifiable information about you.


### Kann ich eine klassische E-Mail-Adresse mit Delta Chat verwenden?

Yes, but only if the email address is used exclusively by [chatmail clients](https://chatmail.at/clients).

It is not supported to share usage of an email address with non-chatmail apps or web-based mailers,
for the following reasons:

- Non-chatmail apps are largely not accomplishing automatic end-to-end email encryption for their users,
  while chatmail apps and relays pervasively enforce end-to-end encryption and security standards.

- Non-chatmail apps use email servers as a long-term message archive
  while chatmail clients use email servers for ephemeral instant message transport.

- Supporting the full variety of classic email setups
  would require considerable development and maintenance efforts,
  and complicate making chatmail-based messaging more resilient, reliable and fast.

### Wie kann ich ein Chat-Profil mit einer klassischen E-Mail-Adresse als Transport konfigurieren? {#classic-email}

First off, **please do not use the same classic email address also from non-chatmail classic email apps**
unless you are prepared to deal with encrypted messages in the inbox,
double notifications, accidentally deleted emails or similar annoyances.

You can configure a email address for chatting at **New Profile → Use Other Server → Use Classic Mail as Transport**.
Note that classic email providers will generally not support [Push Notifications](#instant-delivery)
and have other limitations, see [Provider Overview](https://providers.delta.chat).
Chatmail uses the default INBOX for relay; ensure the provider setup does too. 
A chat profile using a classic email address allows to to send and receive unencrypted messages.
These messages, and the chats they appear in, are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### Ich möchte meinen eigenen Server für Delta Chat verwalten. Gibt es Empfehlungen?

Any well behaving email server setup will do fine 
except if your users' devices require Google/Apple [Push Notifications](#instant-delivery) to work properly.

We generally recommend to [set up a chatmail relay](https://chatmail.at/doc/relay/getting_started.html). 
[Chatmail](https://chatmail.at) is a community-driven project that encompasses both the setup of relays
and [core Rust developments](https://github.com/chatmail/core) 
that power [chatmail clients](https://chatmail.at/clients) of which Delta Chat is the most well known. 


### Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Siehe hierzu [in Delta Chat genutzte Standards]({% include standards-url %}).



## Verschlüsselung und Sicherheit {#e2ee}

### Welche Standards werden für die Ende-zu-Ende-Verschlüsselung verwendet?

Delta Chat verwendet eine [sichere Teilmenge des OpenPGP-Standards](#openpgp-secure), um eine automatische End-to-End-Verschlüsselung mit folgenden Protokollen bereitzustellen: 

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
zum Austausch von Verschlüsselungsinformationen durch Scannen von QR-Codes oder „Einladungslinks“. 

- [Autocrypt](https://autocrypt.org) wird verwendet, um automatisch eine Ende-zu-Ende-Verschlüsselung zwischen Kontakten und allen Mitgliedern einer Gruppe herzustellen. 

- [Teilen eines Kontakts im Chat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
ermöglicht es den Empfängern, eine Ende-zu-Ende-Verschlüsselung mit dem Kontakt zu verwenden. 

Delta Chat fragt keine OpenPGP-Keyserver ab, veröffentlicht dort keine Daten und interagiert auch sonst nicht mit diesen.

### Wie kann ich wissen, ob Nachrichten Ende-zu-Ende-verschlüsselt sind? {#whene2e}

Alle Nachrichten in Delta Chat sind **standardmäßig Ende-zu-Ende-verschlüsselt**.
Seit der Veröffentlichung von Delta Chat Version 2 (Juli 2025) gibt es keine Schlösser oder ähnliche Markierungen mehr an Ende‑zu‑Ende-verschlüsselten Nachrichten.

### Kann ich Nachrichten ohne Ende-zu-Ende-Verschlüsselung empfangen oder senden?

Wenn du die Standard-[Chatmail-Relays](https://chatmail.at/relays) verwendest, ist es unmöglich, Nachrichten ohne End-to-End-Verschlüsselung zu empfangen oder zu senden. 

If you instead use a [classic email server](#classic-email),
you can send and receive messages with or without end-to-end encryption.
Messages lacking end-to-end encryption are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### Was bedeutet das grüne Häkchen in einem Kontaktprofil? {#e2eeguarantee}

A contact profile might show a green checkmark
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
and an "Introduced by" line.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a green-checkmarked contact to a group with only green-checkmarked members 
becomes an introducer. 
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

Für eine ausführlichere Diskussion der "Garantierten Ende-zu-Ende-Verschlüsselung",
siehe [Secure-Join-Protokolle](https://securejoin.delta.chat/en/latest/new.html)
und dort speziell den Abschnitt zu "Verified Groups", dem technischen Begriff
für "Chats mit grünem Häkchen" oder "Garantierter Ende-zu-Ende-Verschlüsselung".

### Sind Anhänge (Bilder, Dateien, Audio usw.) Ende-zu-Ende-verschlüsselt?

Ja.

Wenn wir von einer "Ende-zu-Ende-verschlüsselten Nachricht" sprechen
meinen wir immer, dass eine ganze Nachricht verschlüsselt ist,
einschließlich aller Anhänge
und Anhang-Metadaten wie Dateinamen.


### Ist OpenPGP sicher? {#openpgp-secure}

Ja, Delta Chat verwendet ein sicheres subset von OpenPGP
das verlangt, dass die gesamte Nachricht ordnungsgemäß verschlüsselt und signiert wurde.
Als Beispiel, werden "angehängte Signaturen" nicht als sicher behandelt.

Die meisten öffentlich diskutierten OpenPGP-Probleme
resultieren in Wirklichkeit aus schlechter Usability oder schlechter Implementierung von Tools oder Anwendungen - oder beidem.
Es ist besonders wichtig, zwischen _OpenPGP_, dem IETF-Verschlüsselungsstandard 
und _GnuPG (GPG)_, einem Kommandozeilenprogramm, das OpenPGP implementiert, zu unterscheiden. 
In vielen öffentlichen Kritiken zu OpenPGP wird GnuPG diskutiert, das Delta Chat nie verwendet hat. 
Delta Chat verwendet stattdessen die OpenPGP-Rust-Implementierung [rPGP](https://github.com/rpgp/rpgp),
die als [ein unabhängiges "pgp"-Paket](https://crates.io/crates/pgp),
verfügbar ist und [2019 und 2024 sicherheitsgeprüft](#security-audits) wurde.

Unser Ziel ist, zusammen mit anderen OpenPGP-Implementierungen, 
die Sicherheitseigenschaften durch das im Sommer 2023 angenommene
[IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) weiter zu verbessern.


### Wurden Alternativen zu OpenPGP für die Ende-zu-Ende-Verschlüsselung in Betracht gezogen? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
but adopting them would mean breaking end-to-end encryption interoperability.
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat verfolgt einen ganzheitlichen Ansatz bei der "nutzbaren Sicherheit": 
Wir arbeiteten mit vielen Aktivistengruppen sowie mit 
renommierten Forschern wie [TeamUSEC](https://teamusec.de) zusammen, 
um die tatsächlichen Ergebnisse der Benutzer gegen Sicherheitsbedrohungen zu verbessern. 
Das Wire-Protokoll und der Standard für die Einrichtung der Ende-zu-Ende-Verschlüsselung ist
nur ein Teil der Ergebnisse,
siehe auch unsere Antworten auf [Gerätebeschlagnahmung](#device-seizure)
und [Metadaten](#message-metadata) Fragen.


### Ist Delta Chat anfällig für EFAIL?

Nein, [Delta Chat war nie anfällig für EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail).
Delta Chats OpenPGP-Implementierung [rPGP](https://github.com/rpgp/rpgp) 
verwendet beim Verschlüsseln von Nachrichten "Modification Detection Codes" 
und gibt [Fehler](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError) zurück,
wenn dieser falsch ist.

Delta Chat war auch nie anfällig für den EFAIL-Angriff "Direct Exfiltration",
da nur `multipart/encrypted` Nachrichten entschlüsselt werden,
die genau einen verschlüsselten und signierten Teil enthalten;
so wie in der Autocrypt-Level-1-Spezifikation definiert.


### Sind mit dem Mail-Symbol markierte Nachrichten im Internet sichtbar? {#tls}

If you are sending or receiving email messages without end-to-end encryption (using a classic email server),
they are still protected from cell or cable companies who can not read or modify your email messages.
But both your and your recipient's email providers
may read, analyze or modify your messages, including any attachments. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your email provider.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's email provider
will typically be transport-encrypted as well.
If the involved email servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between email providers
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.


### Wie schützt Delta Chat Metadaten in Nachrichten? {#message-metadata}

Anders als die meisten anderen Messenger 
speichern Delta-Chat-Apps keine Metadaten über Kontakte oder Gruppen auf Servern. Auch nicht in verschlüsselter Form. 
Stattdessen werden alle Gruppen-Metadaten durchgängig verschlüsselt und ausschließlich auf den Endgeräten der Nutzer gespeichert. 

Servers can therefore only see:

- the sender and receiver addresses
- and the message size.

By default, the addresses are randomly generated.

Alle anderen Metadaten zu Nachrichten, Kontakten und Gruppen befinden sich im Ende-zu-Ende-verschlüsselten Teil der Nachrichten. 

### Wie schützt man Metadaten und Kontakte, wenn ein Gerät beschlagnahmt wird? {#device-seizure}

Both for protecting against metadata-collecting servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random addresses for transport. 
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then chat contacts using short-lived profiles
can not be identified easily. 

### Unterstützt Delta Chat „Sealed Sender“? {#sealedsender}

Nein, noch nichts. 

Der Signal-Messenger führte 2018 ["Sealed Sender"](https://signal.org/blog/sealed-sender/) ein
um seine Serverinfrastruktur darüber im Unklaren zu lassen, wer eine Nachricht an eine Gruppe von Empfängern sendet. 
Dies ist besonders wichtig, weil der Signal-Server die Handynummer jedes Kontos kennt,
die in der Regel mit einer Passidentität verbunden ist.

Even if [chatmail relays](https://chatmail.at/relays) 
do not ask for any private data (including no phone numbers), 
it might still be worthwhile to protect relational metadata between addresses. 
We don't foresee bigger problems in using random throw-away addresses for sealed sending
but an implementation has not been agreed as a priority yet. 

### Unterstützt Delta Chat "Perfect Forward Secrecy"? {#pfs}

Nein, noch nichts. 

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

We designed a Forward Secrecy approach that withstood 
initial examination from some cryptographers and implementation experts 
but is pending a more formal write up 
to ascertain it reliably works in federated messaging and with multi-device usage,
before it could be implemented in [chatmail core](https://github.com/chatmail/core),
which would make it available in all [chatmail clients](https://chatmail.at/clients). 

### Unterstützt Delta Chat Post-Quantum-Verschlüsselung? {#pqc}

Nein, noch nichts. 

Delta Chat verwendet die Rust OpenPGP-Bibliothek [rPGP](https://github.com/rpgp/rpgp)
die den neuesten [IETF Post-Quantum-Cryptography OpenPGP Entwurf](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/) unterstützt. 
Wir beabsichtigen, PQC-Unterstützung zum [chatmail core](https://github.com/chatmail/core) hinzuzufügen, sobald der Entwurf bei der IETF in Zusammenarbeit mit anderen OpenPGP-Implementierern fertiggestellt ist. 

### Wie kann ich die Verschlüsselung manuell überprüfen?

Du kannst den Status der Ende-zu-Ende-Verschlüsselung manuell im Dialog "Verschlüsselung"
(Android/iOS: Benutzerprofil, Desktop: Rechtsklick auf den Chat eines Benutzers) überprüfen.
Delta Chat zeigt dort zwei Fingerabdrücke an.
Wenn die gleichen Fingerabdrücke auf Ihrem eigenen Gerät und auf dem Gerät Ihres Kontakts erscheinen,
ist die Verbindung sicher.

### Kann ich meinen existierenden privaten Schlüssel weiter verwenden? {#importkey}

Nein.

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1.
We do not recommend or offer users to perform manual key management.
We want to ensure that security audits can focus on a few proven cryptographic algorithms
instead of the full breadth of possible algorithms allowed with OpenPGP.
If you want to extract your OpenPGP key, there only is an expert method:
you need to look it up in the "keypairs" SQLite table of a profile backup tar-file.


### Wurde Delta Chat unabhängig auf Sicherheitslücken geprüft? {#security-audits}

Ja, mehrfach.
Das Delta-Chat-Projekt wird kontinuierlich unabhängigen Sicherheitsaudits und -analysen unterzogen:

- Im Dezember 2024 fand eine [von NLNET in Auftrag gegebene Bewertung von rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) durch [Radically Open Security](https://www.radicallyopensecurity.com/) statt.
rPGP wird für die [OpenPGP](https://openpgp.org)-Ende-zu-Ende-Verschlüsselung verwendet. 
Im Zusammenhang mit den Ergebnissen dieser Prüfung wurden zwei Hinweise veröffentlicht:

  - ["Panics on Malformed Untrusted Input"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potential Resource Exhaustion when handling Untrusted Messages"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

  Die in diesen Hinweisen beschriebenen Probleme wurden behoben und sind Bestandteil der Delta Chat Veröffentlichungen in allen Appstores seit Dezember 2024.

- Im März 2024 erhielten wir von der Forschungsgruppe "Applied Cryptography" der ETH Zürich eine umfassende Sicherheitsanalyse und haben alle aufgeworfenen Fragen adressiert. 
Weitere Informationen findest du in unserem Blogbeitrag über [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) und in der hinterher publizierten [Kryptografischen Analyse von Delta Chat](https://eprint.iacr.org/2024/918.pdf) 

- Im April 2023 haben wir Sicherheits- und Datenschutzprobleme mit dem "In Chats geteilten Apps"-Feature behoben, die mit Fehlern beim Sandboxing, insbesondere mit Chromium zusammenhängen. Wir haben daraufhin eine unabhängige Sicherheitsprüfung von Cure53 durchführen lassen, und alle gefundenen Probleme wurden mit den im April 2023 veröffentlichten 1.36 Releases behoben. Siehe [hier für die vollständige Hintergrundgeschichte](https://delta.chat/en/2023-05-22-webxdc-security).

- Im März 2023 analysierte [Cure53](https://cure53.de) sowohl die Transportverschlüsselung von Delta Chats Netzwerkverbindungen als auch das reproduzierbare Mailserver-Setup wie [auf dieser Seite empfohlen](serverguide). Du kannst mehr über das Audit [in unserem Blog](https://delta.chat/en/2023-03-27-third-independent-security-audit) lesen oder du liest den [vollständigen Bericht hier](../assets/blog/MER-01-report.pdf).

- Im Jahr 2020 analysierte [Include Security](https://includesecurity.com) Delta Chats Rust [core](https://github.com/deltachat/deltachat-core-rust/), [IMAP](https://github.com/async-email/async-imap),[SMTP](https://github.com/async-email/async-smtp), und [TLS](https://github.com/async-email/async-native-tls) Bibliotheken.
Es wurden keine kritischen oder hochgradig gefährlichen Probleme gefunden. Der Bericht wies auf einige Schwachstellen mittlerer Schwere hin - sie stellen für sich genommen keine Bedrohung für Delta-Chat-Benutzer dar, da sie von der Umgebung abhängen, in der Delta Chat verwendet wird. Aus Gründen der Benutzerfreundlichkeit und der Kompatibilität können wir nicht alle Schwachstellen beseitigen und haben beschlossen, Sicherheitsempfehlungen für bedrohte Benutzer zu geben. Du kannst den [vollständigen Bericht hier](../assets/blog/2020-second-security-review.pdf) lesen.

- Im Jahr 2019 analysierte [Include Security](https://includesecurity.com) die von Delta Chat verwendeten [PGP-](https://github.com/rpgp/rpgp) und [RSA-](https://github.com/RustCrypto/RSA) Bibliotheken.
Es wurden keine kritischen Probleme gefunden, aber zwei Probleme mit hohem Schweregrad, die wir anschließend behoben haben. Außerdem wurden ein mittelschweres und einige weniger schwerwiegende Probleme gefunden, aber es gab keine Möglichkeit, diese Schwachstellen in der Delta-Chat-Implementierung auszunutzen. Einige dieser Schwachstellen haben wir dennoch nach Abschluss des Audits behoben. Du kannst den [vollständigen Bericht hier](../assets/blog/2019-first-security-review.pdf) lesen.


## Verschiedenes

### Welche App-Berechtigungen benötigt Delta Chat?

Some features require certain permissions,
e.g. you need to grant camera permission if you want to [scan an invite QR code](#howtoe2ee).

See [Privacy Policy](https://delta.chat/en/gdpr#24-app-permissions) for a detailed overview.


###  Wo können meine Freunde Delta Chat finden?

Delta Chat ist für alle großen und einige kleinere Plattformen verfügbar:

- Die **offizielle Website**, <https://delta.chat/download> zeigt alle Optionen im Detail

-  Falls nicht verfügbar, verwende den **Mirror** auf <https://deltachat.github.io/deltachat-pages>

- Öffne einen der folgenden **App-Stores und suchen Sie nach „Delta Chat“:** Google Play Store, F-Droid, Huawei App Gallery, iOS und macOS App Store, Microsoft Store

- Im **Paketmanager** Ihrer Linux-Distribution nachschauen

 - **Android-APKs** sind auch auf <https://github.com/deltachat/deltachat-android/releases> verfügbar.


### Wie wird Delta Chat finanziert?

Delta Chat erhält kein Risikokapital, ist nicht verschuldet und steht  unter keinem Druck, große Gewinne zu erzielen oder Nutzer, deren Freunde und Familie an Werbekunden zu verkaufen (oder Schlimmeres).
Wir nutzen vielmehr öffentliche Finanzierungsquellen, die bisher aus der EU und den USA stammen, um ein dezentrales und diverses Chat-Messaging-Ökosystem zu schaffen, basierend auf freien und quelloffenen Entwicklungen der Gemeinschaft.

Konkret wurden die Delta-Chat-Entwicklungen bisher aus diesen Quellen finanziert:

- Das EU-Projekt [NEXTLEAP](https://nextleap.eu) finanzierte 2017 und 2018 die Entwicklung und Implementierung von "Verifizierten Gruppen" und "Setup Kontakt" und half auch bei der Integration der Ende-zu-Ende-Verschlüsselung durch [Autocrypt](https://autocrypt.org).

- Der [Open Technology Fund](https://opentechfund.org) hat Delta Chat erstmals 2018/2019 bezuschusst; mit dieser Förderung (~$200K) wurden hauptsächlich die Android-App verbessert sowie das Release der Desktop-App in einer Betaversion ermöglicht. Basierend auf Nutzererfahrungen im Menschenrechtskontext wurden zudem verschiedene Funktionen entwickelt, siehe unseren Bericht [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
Die zweite Förderung 2019/2020 (~$300K) half uns bei der  Erstellung der iOS-Version, unsere Kernbibliothek in die Programmiersprache "Rust" zu konvertieren und neue Funktionen für alle Plattformen bereitzustellen.

- Die [NLnet-Stiftung](https://nlnet.nl/) bewilligte 2019/2020 46K  EUR für die Fertigstellung von Rust-/Python-Bindungs und die Einrichtung eines Chat-Bot-Ökosystems.

- Im Jahr 2021 erhielten wir weitere EU-Mittel für zwei "Next-Generation-Internet"-Anträge, nämlich für [EPPD - E-Mail-Provider-Portabilitätsverzeichnis](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) und [AEAP - E-Mail-Adressportierung](https://nlnet.nl/project/EmailPorting/) (~90K EUR). Ziel sind bessere Unterstützung von Mehrfachkonten, verbesserten QR-Code-Kontakt- und -Gruppen-Setups sowie Netzwerkverbesserungen auf allen Plattformen.

- Von Ende 2021 bis März 2023 erhielten wir eine *Internet-Freedom*-Finanzierung (500K USD) vom U.S. Bureau of Democracy, Human Rights and Labor (DRL). Diese Finanzierung unterstützte unsere langjährigen Ziele, Delta Chat benutzerfreundlicher und kompatibel mit einer breiten Palette von E-Mail-Servern weltweit zu machen, sowie widerstandsfähiger und sicherer an Orten, die häufig von Internetzensur und Abschaltungen betroffen sind.

- 2023-2024 schlossen wir erfolgreich das vom OTF finanzierte 
[Secure-Chatmail-Projekt](https://www.opentech.fund/projects-we-support/supported-projects/secure-chat-mail-with-delta-chat/) ab. 
Dieses fügt "Garantierte Verschlüsselung", 
das [Chatmail-Server-Netzwerk](https://delta.chat/chatmail) 
und „Instant Onboarding“ allen ab April 2024 veröffentlichten Anwendungen hinzu.

- 2023 und 2024 wurden wir in das Next-Generation-Internet-Programm (NGI)
für unsere Arbeit an [Webxdc-PUSH](https://nlnet.nl/project/WebXDC-Push/) aufgenommen,
zusammen mit Kooperationspartnern, die an 
[Webxdc-Evolve](https://nlnet.nl/project/Webxdc-Evolve/), 
[Webxdc-XMPP](https://nlnet.nl/project/WebXDC-XMPP/), 
[DeltaTouch](https://nlnet.nl/project/DeltaTouch/) und 
[DeltaTauri](https://nlnet.nl/project/DeltaTauri/). 
Alle diese Projekte sind teilweise abgeschlossen oder sollen Anfang 2025 abgeschlossen werden. 

- Manchmal erhalten wir einmalige Spenden von Privatpersonen, wofür wir sehr dankbar sind. Im Jahr 2021 hat uns zum Beispiel eine großzügige Privatperson 4000 EUR überwiesen mit dem Betreff "Weiter so!" 💜  Wir verwenden dieses Geld zur Finanzierung von Entwicklungstreffen oder zur Deckung von Ad-hoc-Ausgaben, die nicht ohne weiteres vorhersehbar sind oder nicht aus öffentlichen Fördermitteln erstattet werden können.
Der Erhalt von Spenden hilft uns auch, unabhängiger und langfristig lebensfähig zu werden, als Gemeinschaft.

  [Geld spenden](donate){: .cta-button}

- Last but by far not least beteiligen sich verschiedene ExpertInnen und Engagierte pro bono an Delta Chat. Sie erhalten dafür teils nur wenig, oftmals sogar überhaupt kein Geld. Ohne sie wäre Delta Chat nicht im entferntesten das, was es heute ist! 

Die oben aufgeführte finanzielle Förderung wird hauptsächlich von der merlinux GmbH in Freiburg (Deutschland) organisiert und an mehr als ein Dutzend Mitwirkende weltweit verteilt.

Möglichkeiten mitzuwirken findest du auf der [Delta-Chat-Seite "Mitwirken"](contribute).
