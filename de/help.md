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

- Für eine Kontaktaufnahme **aus der Ferne**, klicke im selben Bildschirm auf "Kopieren" oder "Teilen" und sende den **Einladungslink** über einen anderen privaten Chat.

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

Deine Freunde können deine Kontaktdaten dann mit anderen Freunden teilen. Dies wird als <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Anfrage</b> angezeigt.

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

Ja. Bilder, Videos, Dateien, Sprachnachrichten und mehr können über die <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Anhang-**
  bzw. <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Sprachnachricht**-Buttons hinzugefügt werden

Um die Leistung zu verbessern, werden die Bilder standardmäßig optimiert und in einer kleineren Größe gesendet, aber du kannst sie auch als "Datei" senden, um das Original zu erhalten.


### Was sind Profile? Wie kann ich zwischen ihnen wechseln? {#multiple-accounts}

Ein Profil besteht aus **einem Namen, einem Bild** und einigen zusätzlichen Informationen zum Verschlüsseln von Nachrichten.
Ein Profil existiert nur auf deinen Geräten
und verwendet den Server nur für den Transport von Nachrichten.

Bei der Installation von Delta Chat wird ein erstes Profil erstellt.

Später kannst du auf dein Profilbild in der oberen linken Ecke tippen, um **Profile hinzuzufügen**
oder **Profile zu wechseln**.

Du kannst separate Profile für politische, familiäre oder berufliche Aktivitäten verwenden.

Vielleicht möchtest due auch erfahren, wie du [Profile auf mehreren Geräten verwenden kannst](#multiclient).


### Wer sieht mein Profilbild?

Du kannst ein Profilbild in den Einstellungen hinzufügen. Wenn du deinen Kontakten eine Nachricht sendest oder sie über einen QR-Code hinzufügst, sehen diese automatisch dein Profilbild.

Aus Datenschutzgründen sieht niemand dein Profilbild, dem du nicht zuvor eine Nachricht gesendet hast.


### Kann ich einen Status festlegen? {#signature}

Ja,
Du kannst dies unter "Einstellungen → Profil → Signatur" tun.
Sobald du eine Nachricht an einen Kontakt sendest, kann dieser deine Signatur in deinem Profil sehen.


### Was bedeutet Anheften, Stummschalten, Archivieren?

Verwende diese Tools, um deine Chats zu organisieren:

- **Angeheftete Chats** bleiben immer ganz oben in der Chatliste. So kannst du schnell auf deine Lieblingschats zugreifen oder du verwendest vorübergehend angeheftete Chats um Dinge nicht zu vergessen.

- **Stummgeschaltete Chats** erhalten keine Benachrichtigungen, bleiben ansonsten aber an ihrem Platz. Du kannst auch stummgeschaltete Chats anheften.

- **Archiviere Chats**, wenn du diese nicht mehr in deiner Chatliste sehen möchtest; sie bleiben oberhalb der Chatliste oder über die Suche zugänglich und werden als <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Archiviert</b> gekennzeichnet

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

- **Ein Häkchen** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/> bedeutet, dass die Nachricht erfolgreich versandt wurde und das [Relay](#relays) erreicht hat.

- **Zwei Häkchen**  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/> bedeuten, dass der Empfänger die Nachricht gelesen hat.

In [Gruppen](#groups) bedeutet das zweite Häkchen, dass die Nachricht von mindestens einem Mitglied gelesen wurde.

Du erhälst nur dann das zweite Häkchen, wenn sowohl du als auch einer der Empfänger, die die Nachricht gelesen haben, **Einstellungen → Chats → Lesebestätigungen** aktiviert haben.


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


### Was passiert, wenn ich “Nachrichten vom Gerät löschen” aktiviere? {#delold}

Wenn du Speicherplatz auf deinem Gerät sparen möchtest, kannst du alte Nachrichten automatisch löschen lassen.

Hierzu, öffne **Einstellungen → Chats → Nachrichten vom Gerät löschen**. Du kannst einen Zeitraum zwischen “1 Stunde” und “1 Jahr” festlegen; auf diese Weise werden alleNachrichten von deinem Gerät gelöscht, sobald sie älter als angegeben sind.


### Wie kann ich mein Chat-Profil löschen? {#remove-account} 

Wenn du mehr als ein Chat-Profil verwendest,
kannst du einzelne Profile über den Avatar oben links (Android/iOS)
oder über die Seitenleiste (Desktop, Rechtsklick) entfernen.
Chat-Profile werden nur auf dem Gerät entfernt, auf dem "Löschen" ausgewählt wurde. 
Chat-Profile auf anderen Geräten funktionieren uneingeschränkt weiter. 

Wenn du ein einzelnes Standard-Chat-Profil verwendest, kannst du die App einfach deinstallieren.
Dadurch werden automatisch alle zugehörigen Daten gelöscht.
Weitere Informationen findest du auf der Seite des ausgewählten [Relay](https://chatmail.at/relays).


## Gruppen {#groups}

Gruppen ermöglichen es mehreren Personen, privat miteinander bei **gleichen Rechte** zu chatten.

Jeder kann
den Gruppennamen oder Avatar ändern,
[Mitglieder hinzufügen oder entfernen](#addmembers),
[Verschwindende Nachrichten](#ephemeralmsgs) einstellen 
und seine [eigenen Nachrichten von Geräten der Mitglieder löschen](#edit).

Da alle Mitglieder die gleichen Rechte haben, funktionieren Gruppen am besten unter **vertrauten Freunden und Familienmitgliedern**.


### Eine Gruppe anlegen

- Wähle **Neuer Chat** und dann **Neue Gruppe** aus dem Menü oben rechts oder über das entsprechende Symbol unter Android/iOS.

- Wähle auf dem folgenden Bildschirm die **Gruppenmitglieder** aus und klicke auf das Häkchen in der oberen rechten Ecke. Danach kannst du einen **Gruppennamen** und auch einen **Gruppenbild**  festlegen.

- Sobald du die **erste Nachricht** in die Gruppe schreibst, werden alle Mitglieder über die neue Gruppe informiert und können in der Gruppe antworten (solange du keine Nachricht in die Gruppe schreibst, ist die Gruppe für die Gruppenmitglieder nicht sichtbar).


### Mitglieder hinzufügen und entfernen {#addmembers}

Alle Gruppenmitglieder haben **dieselben Rechte**. Jeder kann daher jeden löschen oder weitere Mitglieder hinzufügen.

- Um **Mitglieder hinzuzufügen oder zu entfernen**, tippe im Chat auf den Gruppennamen und wähle das Mitglied aus, das du hinzufügen oder entfernen möchtest.

- Wenn das Mitglied noch nicht in deiner Kontaktliste ist, sie sich aber **persönlich** treffen, wählen Sie dort **QR-Einladungscode** an. Dein Chat-Partner kann nun den QR-Code mit seiner Delta Chat-App **scannen** indem er auf <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> auf dem Hauptbildschirm tippt.

- Für eine Kontaktaufnahme **aus der Ferne**, tippe dort “Kopieren” oder “Teilen” und sende den Einladungslink über einen anderen privaten Chat zum neuen Mitglied.

Mit einem QR-Code und dem Einladungslink können mehrere Mitglieder hinzugefügt werden. Da Gruppen jedoch [für vertrauenswürdige Personen gedacht sind](#groups), solltest du diese nicht öffentlich teilen.


### Ich habe mich selbst versehentlich gelöscht.

Da du kein Gruppenmitglied mehr bist, kannst du sich selbst nicht mehr hinzufügen.
Kein Problem, bitte einfach ein anderes Gruppenmitglied in einem normalen Chat, dich hinzuzufügen.


### Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Lösche dich entweder aus der Mitgliederliste oder lösche den gesamten Chat. 
Wenn du der Gruppe später erneut beitreten möchtest, bitten ein anderes Gruppenmitglied, dich hinzuzufügen.

Alternativ kannst du eine Gruppe auch "stummschalten" - dies bedeutet, dass du weiterhin alle Nachrichten erhälst und neue schreiben kannst, aber nicht mehr über neue Nachrichten informiert wirst.

### Eine Gruppe klonen

Du kannst eine Gruppe duplizieren, um eine separate Diskussion zu starten
oder um Mitglieder auszuschließen, ohne dass diese es bemerken.

- Öffnen das Gruppenprofil und tippe auf **Chat klonen** (Android/iOS)
oder klicken mit der rechten Maustaste auf die Gruppe in der Chat-Liste (Desktop).

- Legen einen neuen Namen fest, wähle einen Avatar und passe gegebenenfalls die Mitgliederliste an.

Die neue Gruppe ist **völlig unabhängig** von der ursprünglichen,
die weiterhin wie bisher funktioniert.


### Wie viele Mitglieder können in einer einzelnen Gruppe sein?

Es gibt keine technische Begrenzung,
aber mehr als 150 sind nicht empfohlen.

Wenn Gruppen größer werden, können sie sozial instabil werden und benötigen möglicherweise eine Hierarchie - und Delta Chat ist ein privater Messenger für Chats mit [gleichen Rechten](#groups). Vgl. [Dunbar-Zahl](https://de.wikipedia.org/wiki/Dunbar-Zahl).


## In-Chat-Apps {#webxdc}

Du kannst Apps an einen Chat senden – Spiele, Editoren, Umfragen und andere Tools.
Dies macht Delta Chat zu einem wirklich erweiterbaren Messenger.


### Wo bekomme ich In-Chat-Apps?

- Im Chat unter <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Anhängen → Apps**

- Du kannst deine [eigenen Apps erstellen](#create-xdc) und mit <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Anhängen → Datei** anhängen


### Wie privat sind In-Chat-Apps?

- In-Chat-Apps können keine Daten ins Internet senden oder etwas herunterladen.

- Eine App kann nur Daten innerhalb eines Chats austauschen. Ansonsten ist sie vollständig vom Internet isoliert.

- Die Privatsphäre, die eine App bietet, ist die Privatsphäre des Chats – solange Sie den Personen, mit denen Sie chatten, vertrauen, können Sie auch der App vertrauen.

- Das bedeutet auch: Genauso wie bei Weblinks, öffne keine Apps von nicht-vertrauenswürdigen Kontakten.


### Wie kann mich meine eigene In-Chat-Apps erstellen? {#create-xdc}

- In-Chat-Apps sind ZIP-Dateien mit der Erweiterung `.xdc`, die HTML-, CSS- und JavaScript-Code enthalten.

- Um loszulegen, kannst du das [Hello-World-Beispiel](https://github.com/webxdc/hello) bearbeiten.

- Alle weitere, was du wissen musst, ist in der 
  [Webxdc-Dokumentation](https://webxdc.org/docs) beschrieben.

- Wenn du Fragen hast, kannst du andere mit mehr Erfahrung
im [Forum](https://support.delta.chat/c/webxdc/20) ansprechen.


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

Wenn ein „Push-Dienst“ verfügbar ist, aktiviert Delta Chat Push-Benachrichtigungen,
um eine sofortige Nachrichtenzustellung für alle Chatmail-Benutzer zu erreichen.

In den Delta-Chat-Einstellungen „Benachrichtigungen“ für „Sofortige Benachrichtigungen“
kannst du die folgenden Einstellungen ändern, die alle Chat-Profile betreffen:

- Hintergrundverbindung verwenden: Wenn du keinen Push-Dienst verwendest, kannst du  die „Batterie-Optimierung“ für Delta Chat deaktivieren, damit Nachrichten im Hintergrund abgerufen werden können. Dabei kann es jedoch zu Verzögerungen von Minuten bis Stunden kommen.
Einige Android-Hersteller schränken Apps sogar vollständig ein
(siehe [dontkillmyapp.com](https://dontkillmyapp.com))
und Delta Chat zeigt möglicherweise keine eingehenden Nachrichten an, bis du die App erneut manuell öffnest.
  
- Hintergrundverbindung erzwingen: Dies ist die Ausweichoption wenn die vorherigen Optionen nicht verfügbar sind oder keine „sofortige Zustellung“ erreichen. Die Aktivierung dieser Option führt zu einer permanenten Benachrichtigung auf deinem Telefon, die bei neueren Android-Telefonen manchmal „verkleinert“ werden kann.

Beide „Hintergrundverbindung“-Optionen sind energiesparend und
können sicher ausprobiert werden, wenn du feststellst, dass Nachrichten nur mit großer Verzögerung ankommen.


### Wie privat sind Delta-Chat-Push-Benachrichtigungen? {#privacy-notifications}

Delta Chats Vorgehensweise, Push-Benachrichtigungen zu verwenden, vermeidet die Weitergabe privater Informationen.
Es werden keine Profildaten, IP-Adressen oder Nachrichteninhalte (auch nicht verschlüsselt)
an irgendein System, das an der Zustellung von Push-Benachrichtigungen beteiligt ist, weitergegeben.

So verwendet Delta Chat Push-Benachrichtigungen:

- Eine Delta-Chat-Anwendung erhält lokal ein „Geräte-Token“, verschlüsselt und speichert es
auf dem [Chatmail](https://delta.chat/chatmail)-Server.

- Wenn ein [Chatmail](https://delta.chat/chatmail)-Server eine Nachricht für einen Delta-Chat-Benutzer erhält
erhält, leitet er das verschlüsselte Geräte-Token an den zentralen Delta-Chat-Benachrichtigungs-Proxy weiter.

- Der zentrale Delta-Chat-Benachrichtigungs-Proxy entschlüsselt das Geräte-Token und leitet es an den jeweiligen Push-Dienst (Apple, Google, etc.) weiter,
ohne jemals die Adresse oder IP-Adresse des Delta-Chat-Benutzers zu kennen.

- Der zentrale Push-Dienst (Apple, Google, etc.)
weckt die Delta-Chat-App auf deinem Gerät auf
um im Hintergrund nach neuen Nachrichten zu suchen.
Der zentrale Push-Dienst weiß nichts über das Profil des Geräts, das er aufweckt,
sieht nie eine Adresse (weder Absender noch Empfänger)
und auch nie den Inhalt einer Nachricht (auch nicht in verschlüsselter Form).


Der zentrale Delta-Chat-Benachrichtigungs-Proxy [ist klein und vollständig in Rust implementiert](https://github.com/deltachat/notifiers)
und vergisst die Geräte-Token, sobald Apple/Google/etc. sie verarbeitet hat,
normalerweise innerhalb weniger Millisekunden.

Beachten, dass das Geräte-Token zwischen Anwendungen und dem Benachrichtigungs-Proxy verschlüsselt,
aber nicht signiert ist. 
Der Benachrichtigungs-Proxy sieht also niemals Profildaten, IP-Adressen oder
irgendwelche kryptografischen Identitätsinformationen, die mit dem Gerät oder dem Geräte-Token eines Nutzers verbunden sind. 

Aufgrund dieses umfassenden Datenschutzkonzepts würde sogar die Beschlagnahmung eines Chatmail-Servers,
oder die vollständige Beschlagnahmung des zentralen Delta-Chat-Benachrichtigungsproxys
keine privaten Informationen preisgeben, die den zentralen Push-Diensten nicht bereits vorliegen.


### Warum integriert sich Delta Chat in zentralisierte, proprietäre Apple/Google-Push-Dienste?

Delta Chat ist ein freier, quelloffener, dezentraler Messenger mit freier Serverwahl,
aber wir wollen, dass die Nutzer eine zuverlässige „Sofortzustellung“ von Nachrichten haben,
wie sie es von WhatsApp, Signal oder Telegram kennen,
ohne im Vorfeld Fragen zu stellen, die eher für erfahrene Nutzer oder Entwickler geeignet sind.

Beachte, dass Delta Chat ein [kleines, die Privatsphäre wahrendes Push-Benachrichtigungssystem](#privacy-notifications)
hat, das eine „sofortige Zustellung“ von Nachrichten für alle Chatmail-Server erreicht.
Einschließlich dem Chatmail-Server, [den du selbst ohne unsere Erlaubnis einrichten kannst](https://delta.chat/chatmail#selfhosted).



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

- Unter **Windows**, "Systemsteuerung / Netzwerk und Internet" öffnen
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

- Auf dem alten Gerät, gehe zu **Einstellungen → Chats und Medien → Chats auf externem Speicher speichern**. Gib deine PIN, dein Muster oder dein Passwort zum Entsperren des Bildschirms ein. Anschließend kannst du auf "Backup starten" klicken. Dadurch wird die Backup-Datei auf deinem Gerät gespeichert. Jetzt musst du sie auf das andere Gerät übertragen.

- Auf dem neuen Gerät, auf dem Anmeldebildschirm, wähle **Ich habe bereits ein Profil → Wiederherstellen aus Backup**. Nach dem Import sind deine Chats, Medien und Einstellungen auf das neue Gerät kopiert.
Wenn du iOS verwendest und auf Schwierigkeiten stößt, hilft dir vielleicht [diese Anleitung](https://support.delta.chat/t/import-backup-to-ios/1628).

Du bist nun synchronisiert und kannst beide Geräte zum Senden und Empfangen von Ende-zu-Ende-verschlüsselten-Nachrichten mit deinen Kommunikationspartnern verwenden.


### Gibt es Pläne für eine Delta-Chat-Web-Anwendung?

- Es gibt keine direkten Pläne, aber einige vorläufige Gedanken.
- Es gibt 2-3 Möglichkeiten, einen Delta-Chat-Web-Client einzuführen, aber sie bedeuten alle immense Arbeit. Im Moment fokussieren wir uns darauf, stabile native Apps in den Appstores (Google Play/iOS/Windows/macOS/Linux repositories) anzubieten. 
- Solltest du einen Web-Client benötigen, weil du auf deinem Arbeitsrechner keine Software installieren darfst, kannst du den portablen Windows-Desktop-Client bzw. Applmage für Linux nutzen. Du findest diese unter [get.delta.chat](https://get.delta.chat).


## Erweitert

### Experimentelle Features {#experiments}

Unter **Einstellungen → Erweitert → Experimentelle Features**
kannst du unfertige Features ausprobieren, an denen gearbeitet wird.

Die Features können **instabil** sein und **geändert oder entfernt** werden.

Du findest weitere Informationen im [Forum](https://support.delta.chat), wo du auch Feedback geben kannst.


### Was sind Relays? {#relays}

Relays werden verwendet, um Nachrichten vorübergehend zu speichern, falls dein Gerät offline ist.
Relays sind billige und einfache Server,
die keine Daten wie Gruppenstatus, deinen Namen oder deinen Avatar speichern –
all das existiert nur auf deinem Gerät.
Relays werden von verschiedenen Gruppen und Personen betrieben.

Standardmäßig wird nach der Installation ein Relay **automatisch** hinzugefügt;
darum musst du dich nicht kümmern.
Wenn du möchtest,
kannst du jedoch unter **Einstellungen → Erweitert → Relays** Änderungen vornehmen:

- Du kannst ein Relay **hinzufügen**, indem du einen QR-Code scannst,
z.B. von <https://chatmail.at/relays>.
Bei mehreren Relays, empfängst du die Nachrichten von allen Relays.

- **Standard** legt das Relay fest, an das deine Chatpartner zukünftig Nachrichten senden.

- Wenn du ein Relay **entfernst**,
stelle sicher, dass ein anderes Standard-Relay ausreichend lange verwendet wurde.
Andernfalls erreichen dich keine Nachrichten von deinen Kontakten.
Im Zweifelsfall entferne das Relay später.

Weitere Details und zukünftige Möglichkeiten findest du im [Forum](https://support.delta.chat).


### Kann ich eine klassische E-Mail-Adresse mit Delta Chat verwenden?

Ja, aber nur, wenn die E-Mail-Adresse ausschließlich von [Chatmail-Clients](https://chatmail.at/clients) verwendet wird.

Die gemeinsame Nutzung einer E-Mail-Adresse mit Nicht-Chatmail-Apps oder webbasierten Mailprogrammen wird aus folgenden Gründen nicht unterstützt:

- Nicht-Chatmail-Apps bieten ihren Nutzern größtenteils keine automatische End-to-End-Verschlüsselung,
während Chatmail-Apps und Relays durchgängig End-to-End-Verschlüsselung und Sicherheitsstandards durchsetzen.

- Nicht-Chatmail-Anwendungen nutzen E-Mail-Server als langfristiges Nachrichtenarchiv,
während Chatmail-Clients E-Mail-Server für die kurzlebige Weiterleitung von Nachrichten verwenden.

- Die Unterstützung der gesamten Bandbreite klassischer E-Mail-Konfigurationen
würde einen erheblichen Entwicklungs- und Wartungsaufwand erfordern
und Chatmail-basiertes Messaging weniger robust, zuverlässig und schnell machen.

### Wie kann ich ein Chat-Profil mit einer klassischen E-Mail-Adresse als Relay konfigurieren? {#classic-email}

Zunächst einmal, **verwenden bitte nicht dieselbe klassische E-Mail-Adresse auch in anderen klassischen E-Mail-Anwendungen**,
es sei denn, du bist sind bereit, dich mit verschlüsselten Nachrichten im Posteingang,
doppelten Benachrichtigungen, versehentlich gelöschten E-Mails oder ähnlichen Ärgernissen auseinanderzusetzen.

Sie können eine E-Mail-Adresse unter **Neues Profil → Anderen Server verwenden → Klassische E-Mail als Relay** konfigurieren.
Beachten Sie, dass klassische E-Mail-Anbieter in der Regel keine [Push-Benachrichtigungen](#instant-delivery) unterstützen
und andere Einschränkungen haben, siehe [Provider-Overview](https://providers.delta.chat).
Chatmail verwendet den Standard-INBOX für die Weiterleitung; stellen Sie sicher, dass dies auch bei der Einrichtung Ihres Anbieters der Fall ist. 
Ein Chat-Profil mit klassischer E-Mail-Adresse, ermöglicht das Senden und Empfangen unverschlüsselter Nachrichten; diese sind mit dem E-Mail-Symbol <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>  gekennzeichnet.


### Ich möchte meinen eigenen Server für Delta Chat verwalten. Gibt es Empfehlungen?

Jede gut funktionierende E-Mail-Server-Konfiguration ist geeignet, 
es sei denn, die Geräte Ihrer Benutzer erfordern Google/Apple [Push-Benachrichtigungen](#instant-delivery), um ordnungsgemäß zu funktionieren.

Wir empfehlen generell, [ein Chatmail-Relay einzurichten](https://chatmail.at/doc/relay/getting_started.html). 
[Chatmail](https://chatmail.at) ist ein Community-basiertes Projekt, das sowohl die Einrichtung von Relays
als auch [Entwicklungen in Rust](https://github.com/chatmail/core) 
für die [Chatmail-Clients](https://chatmail.at/clients) umfasst, von denen Delta Chat der bekannteste ist.


### Was ist "Statistik an Delta Chat Entwickler senden"? {#statssending}

Wir möchten Delta Chat mit deiner Hilfe verbessern.
Deshalb fragt Delta Chat für Android, ob du
anonyme Nutzungsstatistiken senden möchtest.

Du kannst dies unter
**Einstellungen → Erweitert → Statistik an Delta Chat Entwickler senden** ein- und ausschalten.

Wenn eingeschaltet,
werden wöchentlich Statistiken automatisch an einen Bot gesendet.

Wir sind beispielsweise an folgenden Statistiken interessiert:

- Wie viele Kontakte werden durch das persönliche Scannen eines QR-Codes hergestellt?

- Welche Versionen von Delta Chat werden verwendet?

- Welche Fehler treten bei Benutzern auf?

Wir werden _keinerlei_ personenbezogene Daten über dich sammeln.


### Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

Siehe hierzu [in Delta Chat genutzte Standards]({% include standards-url %}).



## Verschlüsselung und Sicherheit {#e2ee}

### Welche Standards werden für die Ende-zu-Ende-Verschlüsselung verwendet?

Delta Chat verwendet eine [sichere Teilmenge des OpenPGP-Standards](#openpgp-secure), um eine automatische End-to-End-Verschlüsselung mit folgenden Protokollen bereitzustellen: 

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
zum Austausch von Verschlüsselungsinformationen durch Scannen von QR-Codes oder „Einladungslinks“. 

- [Autocrypt](https://autocrypt.org) wird verwendet, um automatisch eine Ende-zu-Ende-Verschlüsselung zwischen Kontakten und allen Mitgliedern einer Gruppe herzustellen. 

- [Autocrypt v2](https://autocrypt2.org), dessen vollständige Implementierung für 2026 geplant ist, 
wir post-quantum-resistente Verschlüsselung und Forward Secrecy einführen.

- [Teilen eines Kontakts im Chat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
ermöglicht es den Empfängern, eine Ende-zu-Ende-Verschlüsselung mit dem Kontakt zu verwenden. 

Delta Chat fragt keine OpenPGP-Keyserver ab, veröffentlicht dort keine Daten und interagiert auch sonst nicht mit diesen.

### Wie kann ich wissen, ob Nachrichten Ende-zu-Ende-verschlüsselt sind? {#whene2e}

Alle Nachrichten in Delta Chat sind **standardmäßig Ende-zu-Ende-verschlüsselt**.
Seit der Veröffentlichung von Delta Chat Version 2 (Juli 2025) gibt es keine Schlösser oder ähnliche Markierungen mehr an Ende‑zu‑Ende-verschlüsselten Nachrichten.

### Kann ich Nachrichten ohne Ende-zu-Ende-Verschlüsselung empfangen oder senden?

Wenn du die Standard-[Chatmail-Relays](https://chatmail.at/relays) verwendest, ist es unmöglich, Nachrichten ohne End-to-End-Verschlüsselung zu empfangen oder zu senden. 

Wenn du stattdessen ein Profil mit einem [klassischen E-Mail-Server](#classic-email) erstellst, kannst du Nachrichten mit und ohne Ende-zu-Ende-Verschlüsselung senden und empfangen.  Nachrichten ohne Ende-zu-Ende-Verschlüsselung werden mit einem E-Mail-Symbol gekennzeichnet  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### Was bedeutet das grüne Häkchen in einem Kontaktprofil? {#e2eeguarantee}

Ein Kontaktprofile kann ein grünes Häkchen 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
und "Eingeführt von" enthalten. 
Jeder so markierte Kontakt hat entweder einen direkten [QR-Scan](#howtoe2ee) mit Ihnen durchgeführt
oder wurde von einem anderen Kontakt mit grünem Häkchen eingeführt.
Das Einführen geschieht automatisch, wenn Sie Mitglieder zu Gruppen hinzufügen. 
Wer einen Kontakt mit grünem Häkchen zu einer Gruppe hinzufügt, wird zum Einführenden.
In einem Kontaktprofil können Sie wiederholt auf den Text "Eingeführt von" tippen
bis Sie zu demjenigen gelangen, mit dem Sie einen direkten [QR-Scan](#howtoe2ee) gemacht haben.

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

Ja, wir verfolgen Ansätze wie [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security). 
Diese zu übernehmen würde aber bedeuten, die Interoperabilität der Ende-zu-Ende-Verschlüsselung 
mit allen anderen Anwendungen zu zerstören. 
Die Entscheidung wäre also nicht leicht zu treffen 
und müsste spürbare Verbesserungen für die Nutzer bringen.

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

Wenn du E-Mail-Nachrichten ohne Ende-zu-Ende-Verschlüsselung sendest oder empfängst (mit einem klassischen E-Mail-Server),
sind sie immer noch vor Mobilfunkanbietern oder Kabelnetzbetreibern geschützt, die deine E-Mail-Nachrichten nicht lesen oder verändern können. 

Aber sowohl dein E-Mail-Anbieter als auch der E-Mail-Anbieter des Empfängers 
können Nachrichten, einschließlich aller Anhänge, lesen, analysieren oder verändern. 

Delta Chat verwendet standardmäßig strikte 
[TLS-Verschlüsselung](https://en.wikipedia.org/wiki/Transport_Layer_Security), 
die die Verbindungen zwischen deinem Gerät und dem E-Mail-Anbieter sichert. 
Die gesamte TLS-Implementierung wurde unabhängig [sicherheitsgeprüft](#security-audits).
Die Verbindung zwischen deinem E-Mail-Provider und dem des Empfängers
ist in der Regel ebenfalls transportverschlüsselt.
Wenn die beteiligten E-Mail-Server [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461) unterstützen,
wird TLS zwischen den E-Mail-Anbietern durchgesetzt. 
In diesem Fall wird die Delta-Chat-Kommunikation niemals im Klartext ins Internet gelangen
selbst wenn die Nachricht nicht Ende-zu-Ende-verschlüsselt war.


### Wie schützt Delta Chat Metadaten in Nachrichten? {#message-metadata}

Anders als die meisten anderen Messenger 
speichern Delta-Chat-Apps keine Metadaten über Kontakte oder Gruppen auf Servern. Auch nicht in verschlüsselter Form. 
Stattdessen werden alle Gruppen-Metadaten durchgängig verschlüsselt und ausschließlich auf den Endgeräten der Nutzer gespeichert. 

Server können daher nur das folgende sehen:

- Absender- und Empfängeradressen, standardmäßig zufällig generiert 
- Größe der Nachricht

Alle anderen Metadaten zu Nachrichten, Kontakten und Gruppen befinden sich im Ende-zu-Ende-verschlüsselten Teil der Nachrichten. 

### Wie schützt man Metadaten und Kontakte, wenn ein Gerät beschlagnahmt wird? {#device-seizure}

Sowohl zum Schutz vor Servern, die Metadaten sammeln, 
als auch als Schutz bei Beschlagnahmung von Geräten
empfehlen wir die Verwendung eines [Chatmail-Relays](https://chatmail.at/relays),
um Chat-Profile mit zufälligen Adressen für den Transport zu erstellen. 
Beachte, dass Delta-Chat-Apps mehrere Profile unterstützen,
sodass du neben deinem „Hauptprofil” ganz einfach situationsspezifische Profile verwenden kannst,
mit der Gewissheit, dass alle Daten sowie alle Metadaten gelöscht werden.
Darüber hinaus können Chat-Kontakte, die kurzlebige Profile verwenden,
im Falle einer Beschlagnahmung des Geräts nicht ohne Weiteres identifiziert werden. 


### Wer sieht meine IP-Adresse?

Das verwendete [Relay](#relays) muss Ihre IP-Adresse kennen,
sowie manchmal auch die Geräte Ihrer Kontakte, wenn Sie einen [Anruf](#experiments) tätigen
oder gemeinsam [Apps](#webxdc) verwenden.

IP-Adressen sind für Verbindungen und für Effizienz erforderlich.
Sie werden weder gespeichert noch offengelegt.
Beachten Sie, dass die IP-Adresse
nicht mit einer Adresse, die Sie einem Lieferdienst geben,  vergleichbar ist - 
sondern viel gröber ist und oft nur die Region oder das Land angibt.

Da dies die Standardfunktion des Internets und anderer Messenger ist,
bieten wir hier keine Optionen an und stellen auch keine Fragen im Voraus.

Wenn Sie Ihre IP-Adresse als Sicherheits- oder Datenschutzrisiko betrachten,
empfehlen wir Ihnen, ein VPN in Kombination mit dem System-Lockdown-Modus zu verwenden.
Alle einzelnen Apps auf Ihrem System nach IP-Optionen abzusuchen wird nicht zufriedenstellen sein;
beispielsweise legt das Antippen eines Links IP-Adressen gegenüber unbekannten Parteien offen und stellt hier das weitaus größere Risiko dar.


### Unterstützt Delta Chat „Sealed Sender“? {#sealedsender}

Nein, noch nicht.

Der Signal-Messenger führte 2018 ["Sealed Sender"](https://signal.org/blog/sealed-sender/) ein
um seine Serverinfrastruktur darüber im Unklaren zu lassen, wer eine Nachricht an eine Gruppe von Empfängern sendet. 
Dies ist besonders wichtig, weil der Signal-Server die Handynummer jedes Kontos kennt,
die in der Regel mit einer Passidentität verbunden ist.

Auch wenn [Chatmail-Relays](https://chatmail.at/relays) 
keine privaten Daten (einschließlich Telefonnummern) abfragen, 
könnte es dennoch sinnvoll sein, Metadaten zwischen Adressen zu schützen. 
Wir sehen keine größeren Probleme bei der Verwendung von zufälligen Wegwerfadressen für aber eine Umsetzung wurde noch nicht als priorisiert. 

### Unterstützt Delta Chat "Perfect Forward Secrecy"? {#pfs}

Noch nicht, aber es kommt mit [Autocrypt v2](https://autocrypt2.org). 

Delta Chat unterstützt derzeit keine Perfect Forward Secrecy (PFS).
Das bedeutet, dass, wenn Ihr privater Schlüssel offengelegt wird
und jemand Ihre früheren Nachrichten während der Übertragung gesammelt hat,
diese mit dem offengelegten Schlüssel entschlüsselt und gelesen werden können.
Beachten Sie, dass Forward Secrecy die Sicherheit nur erhöht, wenn du Nachrichten löschst. 
Andernfalls kann jemand, der deinen Schlüssel erhält,
in der Regel auch alle deine nicht gelöschten Nachrichten abrufen
und muss zuvor gesammelte Nachrichten nicht einmal entschlüsseln. 

[Autocrypt v2](https://autocrypt2.org), dessen vollständige Implementierung für 2026 geplant ist,
wird durch automatische Schlüsselrotation eine zuverlässige Löschung (Forward Secrecy) gewährleisten.
Dieser Ansatz ist im Entwurf [Autocrypt v2 OpenPGP Certificates](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/) festgelegt.

### Unterstützt Delta Chat Post-Quantum-Verschlüsselung? {#pqc}

Noch nicht, aber es kommt mit [Autocrypt v2](https://autocrypt2.org). 

[Autocrypt v2](https://autocrypt2.org), dessen vollständige Implementierung für 2026 geplant ist,
wird eine post-quantum-resistente Verschlüsselung zum Schutz vor Angriffen durch Quantencomputer bieten.
Delta Chat verwendet die Rust-OpenPGP-Bibliothek [rPGP](https://github.com/rpgp/rpgp),
die den neuesten [IETF Post-Quantum-Kryptografie OpenPGP Entfurf](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/) unterstützt.
Die Implementierung ist in [Autocrypt v2 OpenPGP Certificates](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/) festgelegt. 

### Wie kann ich die Verschlüsselung manuell überprüfen?

Du kannst den Status der Ende-zu-Ende-Verschlüsselung manuell im Dialog "Verschlüsselung"
(Android/iOS: Benutzerprofil, Desktop: Rechtsklick auf den Chat eines Benutzers) überprüfen.
Delta Chat zeigt dort zwei Fingerabdrücke an.
Wenn die gleichen Fingerabdrücke auf deinem eigenen Gerät und auf dem Gerät deines Kontakts erscheinen,
ist die Verbindung sicher.

### Kann ich meinen existierenden privaten Schlüssel weiter verwenden? {#importkey}

Nein.

Delta Chat generiert sichere OpenPGP-Schlüssel gemäß der Autocrypt-Spezifikation 1.1.
Wir bieten Benutzern keine manuelle Schlüsselverwaltung an, noch empfehlen diese.
Wir wollen sicherstellen, dass sich Sicherheitsüberprüfungen auf einige wenige bewährte kryptografische Algorithmen konzentrieren können,
anstatt auf die gesamte Bandbreite der mit OpenPGP zulässigen Algorithmen.
Wenn Sie Ihren OpenPGP-Schlüssel extrahieren möchten, gibt es nur eine Methode für Experten: Sie müssen ihn in der SQLite-Tabelle „keypairs” des Backups nachschlagen.


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

Einige Features erfordern bestimmte Berechtigungen.
So muss z.B. der Kamerazugriff gewährt werden, wenn du einen [QR-Code scannen](#howtoe2ee) möchtest.

Siehe [Datenschutzhinweise](https://delta.chat/de/gdpr#24-berechtigungen-der-app) für eine detaillierte Übersicht.


###  Wo können meine Freunde Delta Chat finden?

Delta Chat ist für alle großen und einige kleinere Plattformen verfügbar:

- Die **offizielle Website**, <https://delta.chat/download> zeigt alle Optionen im Detail

-  Falls nicht verfügbar, verwende den **Mirror** auf <https://deltachat.github.io/deltachat-pages>

- Öffne einen der folgenden **App-Stores und suche nach „Delta Chat“:** Google Play Store, F-Droid, Huawei App Gallery, iOS und macOS App Store, Microsoft Store

- Im **Paketmanager** deiner Linux-Distribution nachschauen

 - **Android-APKs** sind auch auf <https://github.com/deltachat/deltachat-android/releases> verfügbar.


### Wie wird Delta Chat finanziert?

Delta Chat erhält kein Risikokapital, ist nicht verschuldet und steht  unter keinem Druck, große Gewinne zu erzielen oder Nutzer, deren Freunde und Familie an Werbekunden zu verkaufen (oder Schlimmeres).
Wir nutzen vielmehr öffentliche Finanzierungsquellen, die bisher aus der EU und den USA stammen, um ein dezentrales und diverses Chat-Messaging-Ökosystem zu schaffen, basierend auf freien und quelloffenen Entwicklungen der Gemeinschaft.

Konkret wurden die Delta-Chat-Entwicklungen bisher aus diesen Quellen finanziert:

- 2023 und 2024 wurden wir in das Next-Generation-Internet-Programm (NGI)
für unsere Arbeit an [Webxdc-PUSH](https://nlnet.nl/project/WebXDC-Push/) aufgenommen,
zusammen mit Kooperationspartnern, die an 
[Webxdc-Evolve](https://nlnet.nl/project/Webxdc-Evolve/), 
[Webxdc-XMPP](https://nlnet.nl/project/WebXDC-XMPP/), 
[DeltaTouch](https://nlnet.nl/project/DeltaTouch/) und 
[DeltaTauri](https://nlnet.nl/project/DeltaTauri/). 
Alle diese Projekte sind teilweise abgeschlossen oder sollen Anfang 2025 abgeschlossen werden. 

- Im Jahr 2021 erhielten wir weitere EU-Mittel für zwei "Next-Generation-Internet"-Anträge, nämlich für [EPPD - E-Mail-Provider-Portabilitätsverzeichnis](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) und [AEAP - E-Mail-Adressportierung](https://nlnet.nl/project/EmailPorting/) (~90K EUR). Ziel sind bessere Unterstützung von Mehrfachkonten, verbesserten QR-Code-Kontakt- und -Gruppen-Setups sowie Netzwerkverbesserungen auf allen Plattformen.

- Die [NLnet-Stiftung](https://nlnet.nl/) bewilligte 2019/2020 46K  EUR für die Fertigstellung von Rust-/Python-Bindungs und die Einrichtung eines Chat-Bot-Ökosystems.

- Der [Open Technology Fund](https://opentechfund.org) hat Delta Chat erstmals 2018/2019 bezuschusst; mit dieser Förderung (~$200K) wurden hauptsächlich die Android-App verbessert sowie das Release der Desktop-App in einer Betaversion ermöglicht. Basierend auf Nutzererfahrungen im Menschenrechtskontext wurden zudem verschiedene Funktionen entwickelt, siehe unseren Bericht [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
Die zweite Förderung 2019/2020 (~$300K) half uns bei der  Erstellung der iOS-Version, unsere Kernbibliothek in die Programmiersprache "Rust" zu konvertieren und neue Funktionen für alle Plattformen bereitzustellen.

- Das EU-Projekt [NEXTLEAP](https://nextleap.eu) finanzierte 2017 und 2018 die Entwicklung und Implementierung von "Verifizierten Gruppen" und "Setup Kontakt" und half auch bei der Integration der Ende-zu-Ende-Verschlüsselung durch [Autocrypt](https://autocrypt.org).

- Manchmal erhalten wir einmalige Spenden von Privatpersonen, wofür wir sehr dankbar sind. Im Jahr 2021 hat uns zum Beispiel eine großzügige Privatperson 4000 EUR überwiesen mit dem Betreff "Weiter so!" 💜  Wir verwenden dieses Geld zur Finanzierung von Entwicklungstreffen oder zur Deckung von Ad-hoc-Ausgaben, die nicht ohne weiteres vorhersehbar sind oder nicht aus öffentlichen Fördermitteln erstattet werden können.
Der Erhalt von Spenden hilft uns auch, unabhängiger und langfristig lebensfähig zu werden, als Gemeinschaft.

  [Geld spenden](donate){: .cta-button}

- Last but by far not least beteiligen sich verschiedene ExpertInnen und Engagierte pro bono an Delta Chat. Sie erhalten dafür teils nur wenig, oftmals sogar überhaupt kein Geld. Ohne sie wäre Delta Chat nicht im entferntesten das, was es heute ist! 

Die oben aufgeführte finanzielle Förderung wird hauptsächlich von der merlinux GmbH in Freiburg (Deutschland) organisiert und an mehr als ein Dutzend Mitwirkende weltweit verteilt.

Möglichkeiten mitzuwirken findest du auf der [Delta-Chat-Seite "Mitwirken"](contribute).
