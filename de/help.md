---
title: FAQ
lang: de
render_toc: true
header: Häufig gestellte Fragen
---


## Was ist Delta Chat?

Delta Chat ist eine zuverlässige, dezentralisierte und sichere Messaging-App, verfügbar für Mobile- und Desktop-Plattformen.

Delta Chat sieht wie Whatsapp oder Telegram aus, aber kann auch als E-Mail-App verwendet und betracht werden. 
Sie können sich anonym bei einer Vielzahl von [interoperablen Chatmail-Servern](https://delta.chat/chatmail) anmelden, bei denen es sich um minimale E-Mail-Server handelt, die für einen schnellen und sicheren Betrieb optimiert sind. 
Oder Sie verwenden einen klassische E-Mail-Server und ein bestehendes E-Mail-Konto.
In diesem Fall fungiert Delta Chat als E-Mail-App. 

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Wie finde ich Leute, mit denen ich chatten kann? 

Zur sicheren Kontaktaufnahme mit anderen [scannen Sie einen Einladungs-QR-Code 
oder teilen Sie einen Einladungslink](#howtoe2ee). 
Dies ist erforderlich, wenn Sie ein Chatmail-basiertes Profil verwenden, weil Chatmail-Server unverschlüsselte ausgehende Nachrichten ablehnen.

Wenn Sie ein Profil mit einer klassischen E-Mail-Adresse verwenden, können Sie manuell Kontakte über bekannte E-Mail-Adresse hinzufügen und anschreiben -
auch wenn der Empfänger Delta Chat nicht benutzt.


### Welche Vorteile hat Delta Chat gegenüber anderen Messengern?

- Anonyme Chat-Profile mit schnellen, sicheren und interoperablen [Chatmail-Servern](https://delta.chat/chatmail),
die sofortige Push-Benachrichtigungen für iOS- und Android-Geräte bieten. 

- Durchgängige [Multi-Profil-](#multiple-accounts) und Multi-Geräte-Unterstützung auf allen Plattformen. 

- Interaktive [Webanwendungen in Chats](https://webxdc.org/apps) für Spiele und für die Zusammenarbeit

- [Geprüfte Ende-zu-Ende-Verschlüsselung](#security-audits), 
sicher gegen Netzwerk- und Serverangriffe. 

- Freie und quelloffene Software, sowohl app- als auch serverseitig. 
Basiert auf [E-Mail- und Web-Internet-Standards]({% include standards-url %}), 
um das [„Noch-ein-Standard-Syndrom“ (xkcd 927)](https://xkcd.com/927/) zu vermeiden.


### Was ist, wenn ich eine Nachricht von jemandem erwarte, dem ich in der Vergangenheit nicht geschrieben habe?

Wenn eine Nachricht von einem unbekannten Kontakt stammt, erscheint sie als **Anfrage**.

- Sie müssen die Anfrage **akzeptieren**, bevor Sie antworten können.

- Sie können sie auch "löschen", wenn Sie vorerst nicht mit ihm chatten möchten.

- If you delete a request, future messages from that contact will still appear
as message request, so you can change your mind. If you really don't want to
receive messages from this person, consider **blocking** them.


### Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja. Bilder, Videos, Dokumente, Sprachnachrichten usw. funktionieren wie üblich.

- Um die Leistung zu verbessern, werden die Bilder standardmäßig optimiert und in einer kleineren Größe gesendet, aber Sie können sie auch als "Datei" senden, um das Original zu erhalten.


### Was sind Profile? Wie kann ich zwischen ihnen wechseln? {#multiple-accounts}

Ein Profil besteht aus **einem Namen, einem Bild** und einigen zusätzlichen Informationen zum Verschlüsseln von Nachrichten.
Ein Profil existiert nur auf Ihren Geräten
und verwendet einen Chatmail- oder einen klassischen E-Mail-Server für den Transport von Nachrichten.

Bei der Installation von Delta Chat wird ein erstes Profil erstellt.

Später können Sie auf Ihr Profilbild in der oberen linken Ecke tippen, um **Profile hinzuzufügen**
oder **Profile zu wechseln**.

Vielleicht möchten Sie separate Profile für politische, familiäre oder berufliche Aktivitäten verwenden,
oder z. B. für ein spezielles „Spam-Profil“, mit dem Sie sich bei Websites und Plattformen anmelden
die dazu neigen, früher oder später unerwünschte Nachrichten („Spam“) zu versenden.

Vielleicht möchten Sie auch erfahren, wie Sie [Profile auf mehreren Geräten verwenden können](#multiclient).


### Wer sieht mein Profilbild?

- Sie können ein Profilbild in den Einstellungen hinzufügen. Wenn Sie Ihren Kontakten eine Nachricht senden oder sie über einen QR-Code hinzufügen, sehen diese automatisch Ihr Profilbild.

- Kontakte, die Delta Chat nicht nutzen, sehen das Profilbild nicht (aber natürlich können sie Delta Chat installieren :)

- Aus Datenschutzgründen sieht niemand Ihr Profilbild, dem Sie nicht zuvor eine Nachricht gesendet haben.

- Ihr Profilbild wird nicht mit jeder Nachricht gesendet, aber häufig genug, so dass Ihre Kontakte es auch dann erhalten, wenn diese ein neues Gerät nutzen.


### Kann ich eine Signatur (Status/Motto) festlegen? {#signature}

Ja,
Sie können dies unter "Einstellungen → Profil → Signatur" tun.
Kontakte, die Delta Chat nutzen, sehen die Signatur,
wenn Sie sich Ihre Kontaktdetails ansehen.
Für klassische E-Mail-Programme,
erscheint die Signatur
unter dem Text Ihrer Nachrichten.


### Was bedeutet Anheften, Stummschalten, Archivieren?

Verwenden Sie diese Tools, um Ihre Chats zu organisieren:

- **Angeheftete Chats** bleiben immer ganz oben in der Chatliste. So können Sie schnell auf Ihre Lieblingschats zugreifen oder Sie verwenden vorübergehend angeheftete Chats um Dinge nicht zu vergessen.

- **Stummgeschaltete Chats** erhalten keine Benachrichtigungen, bleiben ansonsten aber an ihrem Platz - so können Sie stummgeschaltete Chats auch anheften.

- **Archivieren Sie Chats**, wenn Sie diese nicht mehr in Ihrer Chatliste sehen möchten. Archivierte Chats bleiben oberhalb der Chatliste oder über die Suche zugänglich.

- Wenn ein archivierter Chat eine neue Nachricht erhält, wird er, sofern er nicht stummgeschaltet ist, **wieder in die normale Chatliste verschoben**.  **Stummgeschaltete Chats bleiben archiviert**, bis Sie sie manuell aus dem Archiv entfernen.

Um die Funktionen zu nutzen, lang auf einen Chat in der Chatliste tippen oder den Chat mit der rechten Maustaste anklicken.


### Wie funktionieren "Gespeicherte Nachrichten"? {#save}

**Gespeicherte Nachrichten** ist ein Chat, den Sie verwenden können, um sich Nachrichten zu merken und wiederzufinden.

- Tippen Sie in einem beliebigen Chat lange auf eine Nachricht oder klicken Sie mit der rechten Maustaste darauf und wählen **Speichern**.

- Gespeicherte Nachrichten werden mit dem Symbol
  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
  neben dem Datum markiert

- Öffnen Sie später den Chat „Gespeicherte Nachrichten“, sehen Sie dort die gespeicherten Nachrichten.
Durch Tippen auf <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
können Sie zu der ursprünglichen Nachricht im ursprünglichen Chat zurückkehren

- Schließlich können Sie auch „Gespeicherte Nachrichten“ verwenden, um **persönliche Notizen** zu machen - öffnen Sie den Chat, geben Sie etwas ein, fügen Sie ein Foto oder eine Sprachnachricht hinzu usw.

- Da „Gespeicherte Nachrichten“ synchronisiert werden, können sie sehr praktisch für die Übertragung von Daten zwischen Geräten sein

Nachrichten bleiben gespeichert, auch wenn sie bearbeitet oder gelöscht werden -
sei es durch den [Absender](#edit), durch [Automatisches Löschen](#delold) oder durch [verschwindende Nachrichten anderer Chats](#ephemeralmsgs).


### Was bedeutet der grüne Punkt?

Sie können manchmal einen “grünen Punkt” <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/> neben dem Avatar eines Kontakts sehen. Es bedeutet, dass der Kontakt **kürzlich gesehen** wurde, in den letzten 10 Minuten:

- entweder weil der Kontakt Ihnen direkt eine Nachricht gesendet hat,
- weil der Kontakt etwas an eine Gruppe geschrieben hat, in der sie beide Mitglied sind,
- weil der Kontakt Ihnen eine Lesebestätigung für eine von Ihnen geschriebene Nachricht gesendet hat
- weil der Kontakt eine Nachricht bearbeitet oder gelöscht hat
- oder weil der Kontakt Daten mithilfe einer [App](#webxdc) in einem geteilten Chat gesendet hat.

Dies ist also kein Echtzeit-Online-Status - und wenn jemand nicht sofort antwortet, obwohl er online zu sein scheint, machen Sie sich keine Sorgen und geben Sie ihm etwas Raum. ;-)

Andererseits werden andere nicht immer “sehen, dass Sie online sind”. Wenn Sie Lesebestätigungen deaktiviert haben, sehen sie den grünen Punkt erst, wenn einer der oben aufgeführten Punkte erfüllt ist.


### Schreibfehler korrigieren und Nachrichten nach dem Senden löschen {#edit}

- Sie können den Text Ihrer Nachrichten nach dem Senden bearbeiten.
Tippen Sie dazu lange auf die Nachricht oder klicken Sie mit der rechten Maustaste auf die Nachricht und wählen Sie **Bearbeiten** oder <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>

- Wenn Sie versehentlich eine Nachricht gesendet haben,
wählen Sie im selben Menü **Löschen** und dann **Für alle löschen**.

Während bei bearbeiteten Nachrichten das „Bearbeitet“ neben dem Datum erscheint,
werden gelöschte Nachrichten ohne Markierung im Chat entfernt.
Es werden keine Benachrichtigungen verschickt und es gibt kein Zeitlimit.

Beachten Sie, dass die ursprüngliche Nachricht dennoch von Chatteilnehmern empfangen werden konnte,
die die Nachricht bereits beantwortet, weitergeleitet, gespeichert, mit einem Screenshot versehen oder anderweitig kopiert haben könnten.


### Wie funktionieren "Verschwindende Nachrichten"? {#ephemeralmsgs}

Sie schalten "Verschwindende Nachrichten"
oben rechts im Chatfenster,
durch Auswahl einer Zeitspanne
zwischen 1 Minute und 5 Wochen ein.

Bis die Einstellung wieder ausgeschaltet wird,
kümmern sich die Delta-Chat-Apps der Chat-Teilnehmer
um das Löschen der Nachrichten
nach der gewählten Zeitspanne.
Die Zeitspanne beginnt,
wenn der Empfänger die Nachricht zum ersten Mal in Delta Chat ansieht.
Die Nachrichten werden dann
sowohl in den E-Mail-Konten auf dem Server,
als auch in der App selbst gelöscht.

Beachten Sie, dass Sie sich auf verschwindende Nachrichten nur so lange verlassen können, wie Sie Ihren Chat-Partnern vertrauen;
böswillige Chatpartner können Fotos machen,
oder auf andere Weise Nachrichten vor dem Löschen speichern, kopieren oder weiterleiten.

Abgesehen davon,
wenn ein Chat-Partner Delta Chat deinstalliert,
werden die Nachrichten nicht aus seinem E-Mail-Konto gelöscht.
Sie werden höchstwahrscheinlich aber auch nicht mehr entschlüsselt werden können.


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

Stand Mai 2024 unterstützen die klassischen E-Mail-Server keine Push-Benachrichtigungen für Delta-Chat-Benutzer.


### Sind Push-Benachrichtigungen auf iOS-Geräten aktiviert? Gibt es Alternativen?

Ja, Delta Chat verwendet automatisch Push-Benachrichtigungen für [Chatmail](https://delta.chat/chatmail)-Profile.
Und nein, es gibt für Apple-Telefonen keine Alternative, Push-Benachrichten zuzustellen;
Apple-Geräte erlauben es Delta Chat nicht, Daten im Hintergrund abzurufen.
Push-Benachrichtigungen werden für iOS-Nutzer automatisch aktiviert, da
[Delta Chats datenschutzwahrendes Push-Benachrichtigungssystem](#privacy-notifications)
keine Daten an Apple weitergibt, die Apple nicht bereits hat.


### Sind Push-Benachrichtigungen auf Android-Geräten aktiviert/erforderlich? {#android-push}

Wenn ein „Push-Service“ verfügbar ist, aktiviert Delta Chat Push-Benachrichtigungen,
um eine sofortige Nachrichtenzustellung für alle Chatmail-Benutzer zu erreichen.
Wenn Sie einen klassischen E-Mail-Anbieter anstelle von [chatmail](https://delta.chat/chatmail) Servern verwenden,
sind Push-Benachrichtigungen nicht verfügbar.

In den Delta-Chat-Einstellungen „Benachrichtigungen“ für „Sofortige Benachrichtigungen“
können Sie die folgenden Einstellungen ändern, die alle Chat-Profile betreffen:

- Hintergrundverbindung verwenden: Wenn Sie keinen Push-Dienst verwenden, können Sie die „Batterie-Optimierung“ für Delta Chat deaktivieren, damit Nachrichten im Hintergrund abgerufen werden können. Dabei kann es jedoch zu Verzögerungen von Minuten bis Stunden kommen.
Einige Android-Hersteller schränken Apps sogar vollständig ein
(siehe [dontkillmyapp.com](https://dontkillmyapp.com))
und Delta Chat zeigt möglicherweise keine eingehenden Nachrichten anbis Sie die App erneut manuell öffnen.
  
- Hintergrundverbindung erzwingen: Dies ist die Ausweichoption wenn die vorherigen Optionen nicht verfügbar sind oder keine „sofortige Zustellung“ erreichen. Die Aktivierung dieser Option führt zu einer permanenten Benachrichtigung auf Ihrem Telefon, die bei neueren Android-Telefonen manchmal „verkleinert“ werden kann.

Beide „Hintergrundverbindung“-Optionen sind energiesparend und
können sicher ausprobiert werden, wenn Sie feststellen, dass Nachrichten nur mit großer Verzögerung ankommen.


### Wie privat sind Delta-Chat-Push-Benachrichtigungen? {#privacy-notifications}

Delta Chats Vorgehensweise, Push-Benachrichtigungen zu verwenden, vermeidet die Weitergabe privater Informationen.
Es werden keine E-Mail- oder IP-Adressen oder Nachrichteninhalte (auch nicht verschlüsselt)
an irgendein System, das an der Zustellung von Push-Benachrichtigungen beteiligt ist, weitergegeben.

So verwendet Delta Chat Push-Benachrichtigungen:

- Eine Delta-Chat-Anwendung erhält lokal ein „Geräte-Token“, verschlüsselt und speichert es
auf dem [Chatmail](https://delta.chat/chatmail)-Server.

- Wenn ein [Chatmail](https://delta.chat/chatmail)-Server eine E-Mail für einen Delta-Chat-Benutzer erhält
erhält, leitet er das verschlüsselte Geräte-Token an den zentralen Delta-Chat-Benachrichtigungs-Proxy weiter.

- Der zentrale Delta-Chat-Benachrichtigungs-Proxy entschlüsselt das Geräte-Token und leitet es an den jeweiligen Push-Dienst (Apple, Google, etc.) weiter,
ohne jemals die IP- oder E-Mail-Adresse des Delta-Chat-Benutzers zu kennen.

- Der zentrale Push-Dienst (Apple, Google, etc.)
weckt die Delta-Chat-App auf Ihrem Gerät auf
um im Hintergrund nach neuen Nachrichten zu suchen.
Der zentrale Push-Dienst weiß nichts über die Chatmail- oder E-Mail-Adresse des Geräts, das er aufweckt und sieht nie eine E-Mail-Adresse (Absender oder Empfänger)
und auch nie den Inhalt einer Nachricht (auch nicht in verschlüsselter Form).


Der zentrale Delta-Chat-Benachrichtigungs-Proxy [ist klein und vollständig in Rust implementiert](https://github.com/deltachat/notifiers)
und vergisst die Geräte-Token, sobald Apple/Google/etc. sie verarbeitet hat,
normalerweise innerhalb weniger Millisekunden.

Beachten Sie, dass das Geräte-Token zwischen Anwendungen und dem Benachrichtigungs-Proxy verschlüsselt,
aber nicht signiert ist. 
Der Benachrichtigungs-Proxy sieht also niemals E-Mail-Adressen, IP-Adressen oder
irgendwelche kryptografischen Identitätsinformationen, die mit dem Gerät oder dem Geräte-Token eines Nutzers verbunden sind. 

Aufgrund dieses umfassenden Datenschutzkonzepts würde sogar die Beschlagnahmung eines Chatmail-Servers,
oder die vollständige Beschlagnahmung des zentralen Delta-Chat-Benachrichtigungsproxys
keine privaten Informationen preisgeben, die den zentralen Push-Diensten nicht bereits vorliegen.


### Warum integriert sich Delta Chat in zentralisierte, proprietäre Apple/Google-Push-Dienste?

Delta Chat ist ein freier, quelloffener, dezentraler Messenger mit freier Serverwahl,
aber wir wollen, dass die Nutzer eine zuverlässige „Sofortzustellung“ von Nachrichten haben,
wie sie es von WhatsApp, Signal oder Telegram kennen,
ohne im Vorfeld Fragen zu stellen, die eher für erfahrene Nutzer oder Entwickler geeignet sind.

Beachten Sie, dass Delta Chat ein [kleines, die Privatsphäre wahrendes Push-Benachrichtigungssystem](#privacy-notifications)
hat, das eine „sofortige Zustellung“ von Nachrichten für alle Chatmail-Server erreicht.
Einschließlich dem Chatmail-Server, [den Sie selbst ohne unsere Erlaubnis einrichten könnten](https://delta.chat/chatmail#selfhosted).
Willkommen bei der Macht des interoperablen und massiven Chatmail- und E-Mail-Systems :)


## Verschlüsselung und Sicherheit

### Welche Standards werden für die Ende-zu-Ende-Verschlüsselung verwendet?

[Autocrypt](https://autocrypt.org) wird verwendet, um automatisch
eine Ende-zu-Ende-Verschlüsselung mit Kontakten und Gruppenchats herzustellen.
Autocrypt verwendet eine begrenzte und [sichere Untermenge des OpenPGP-Standards](#openpgp-secure).
Ende-zu-Ende-verschlüsselte Nachrichten sind mit einem Vorhängeschloss gekennzeichnet <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>

[Secure-Join-Protokolle](https://securejoin.delta.chat/en/latest/new.html)
werden für Chats mit garantierter Ende-zu-Ende-Verschlüsselung verwendet, 
die vor Netzwerkangriffen und kompromittierten Servern schützt.
Chats, die mit einem grünen Häkchen markiert sind 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
garantieren Ende-zu-Ende-verschlüsselte Nachrichten.

### Wie kann ich wissen, ob Nachrichten Ende-zu-Ende-verschlüsselt sind? {#whene2e}

Ende-zu-Ende-verschlüsselten Nachrichten sind mit einem Vorhängeschloss versehen:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

Die Ende-zu-Ende-Verschlüsselung ist garantiert, wenn neben dem Chat-Titel ein grünes Häkchen zu sehen ist:

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### Wie kann ich garantierte Ende-zu-Ende-Verschlüsselung und grüne Häkchen erhalten? {#howtoe2ee}

Wenn Sie einen zweiten Kommunikationskanal mit Ihrem Chatpartner haben,
wie einen Video-Chat oder einen anderen Messenger,
können Sie einen Einladungslink erstellen.

Wenn Sie persönlich zusammen sind,
können Sie Ihrem Chat-Partner einen QR-Code zeigen.

- Für **Gruppeneinladungen**,
tippen Sie auf den Titel der Gruppe, um die Mitgliederliste anzuzeigen,
und wählen Sie „QR-Einladungscode“.

- Für **Direktchat-Einladungen**,
tippen Sie auf das QR-Code-Symbol <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
auf dem Hauptbildschirm der Delta-Chat-App.

Lassen Sie Ihren Chat-Partner den QR-Code mit der Delta-Chat-App scannen.
Oder Sie klicken auf „Kopieren“ oder „Teilen“, um einen Einladungslink zu erstellen und diesen mit Ihrem Chat-Partner zu teilen.

Warten Sie nun, während das [Secure-Join-Protokoll](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol) zwischen beiden Geräten abläuft.

- Wenn beide Geräte online sind,
sehen beide Seiten schließlich einen Gruppen- oder Direkt-Chat mit einem grünen Häkchen
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
neben dem Titel.

- Wenn eines der Geräte offline ist, erscheinen die grünen Häkchen erst
später, wenn das Gerät wieder mit dem Internet verbunden ist
und das Secure-Join-Protokoll abgeschlossen werden kann.

Herzlichen Glückwunsch! 🎉
Sie verwenden nun eine garantierte Ende-zu-Ende-Verschlüsselung
mit diesem Kontakt und Sie beide können sich gegenseitig zu grün markierten Gruppen hinzufügen
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>,
Dadurch wird die garantierte Ende-zu-Ende-Verschlüsselung automatisch unter den Mitgliedern dieser Gruppe verbreitet.


### Was bedeuten das "Grüne Häkchen" und die "garantierte Ende-zu-Ende-Verschlüsselung"? {#e2eeguarantee}

**Chat-Titel mit grünen Häkchen**
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
bedeuten, dass alle Nachrichten im Chat Ende-zu-Ende-verschlüsselt werden
und nicht von kompromittierten E-Mail-Servern oder Internet-Providern gelesen oder verändert werden können. 
Beim Beitritt zu Gruppenchats mit grünen Häkchen
werden Verschlüsselungsinformationen (und die grünen Häkchen) aller Teilnehmer sicher so weitergegeben,
dass die Ende-zu-Ende-Verschlüsselung in der Gruppe und zwischen den Mitgliedern garantiert werden kann.

**Kontaktprofile mit grünen Häkchen** 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
bedeuten, dass die Nachrichtenübermittlung an einen Kontakt derzeit garantiert Ende-zu-Ende-verschlüsselt ist.
Jeder grün markierte Kontakt hat entweder einen direkten [QR-Scan](#howtoe2ee) mit Ihnen durchgeführt
oder wurde von einem anderen Kontakt mit grünem Häkchen eingeführt.
Das Einführen geschieht automatisch, wenn Sie Mitglieder zu Gruppen hinzufügen. 
Wer einen Kontakt zu einer Gruppe mit grünem Häkchen hinzufügt, wird zum Einführenden 
für die Mitglieder, die noch nichts von dem hinzugefügten Kontakt wussten.
In einem Kontaktprofil können Sie wiederholt auf den Text "Eingeführt von ..." tippen
bis Sie zu demjenigen gelangen, mit dem Sie einen direkten [QR-Scan](#howtoe2ee) gemacht haben.

Beachten Sie, dass Sie in einem Kontaktprofil unter Umständen Einführende sehen und antippen können, aber kein grünes Häkchen im Profiltitel vorhanden ist. 
Dies bedeutet normalerweise, dass der Kontakt ["eine Nachricht von einem anderen Gerät gesendet hat"](#nocryptanymore).

Für eine ausführlichere Diskussion der "Garantierten Ende-zu-Ende-Verschlüsselung",
siehe [Secure-Join-Protokolle](https://securejoin.delta.chat/en/latest/new.html)
und dort speziell den Abschnitt zu "Verified Groups", dem technischen Begriff
für "Chats mit grünem Häkchen" oder "Garantierter Ende-zu-Ende-Verschlüsselung".


### Ein Kontakt hat eine Nachricht von einem anderen Gerät gesendet", was kann ich tun? {#nocryptanymore}

Wenn Sie diese Warnung sehen, wurde das grüne Häkchen entfernt, da für den Kontakt die Ende-zu-Ende-Verschlüsselung nicht mehr garantiert werden kann.
**Wenn Sie den Wegfall der garantierten Ende-zu-Ende-Verschlüsselung 
für diesen Kontakt überraschend finden, akzeptieren Sie die Warnung nicht!**
Versuchen Sie stattdessen mit Ihrem Kontakt über einen zweiten Kanal (z.B. Videoanruf, Telefon oder ein anderer Messenger) herauszufinden, was passiert ist.

Wenn Ihr Kontakt tatsächlich den Ausfall der garantierten Ende-zu-Ende-Verschlüsselung verursacht hat,
finden Sie in den nächsten Abschnitten häufige Gründe und Abhilfe. 
Unabhängig davon bleiben alle anderen Chats mit einem grünen Häkchen garantiert Ende-zu-Ende-verschlüsselt,
auch wenn der Kontakt dort Mitglied ist.

**Ihr Kontakt verwendet Delta Chat auf einem zweiten Gerät (Smartphone oder Laptop)**

Wenn Ihr Kontakt ein weiteres Gerät mit Delta Chat eingerichtet hat,
sollte das Konto von dem neuen Gerät entfernen werden und [als zweites Gerät, wie hier beschrieben](#multiclient), erneut hinzugefügt werden.
Sobald sie sich danach schreiben, wird die Warnung verschwinden
und die Verschlüsselung ist mit beiden Geräten Ihres Kontakts garantiert.

**Ihr Kontakt hat Delta Chat mit seinem alten Login neu installiert**
 
Wenn Ihr Kontakt [ein Backup](#backup) hat, 
sollte das Profil auf dem neuen Gerät 
entfernt werden und stattdessen das Backup importiert werden, um das Konto neu zu erstellen. 
Sobald sie sich danach schreiben, wird die Warnung verschwinden
und die garantierte Verschlüsselung wird für diesen Kontakt wiederhergestellt.

Wenn Ihr Kontakt kein Backup hat, ist es am besten, einen [QR-Code-Scan](#howtoe2ee) 
mit Ihrem Chat-Partner durchzuführen, um die garantierte Ende-zu-Ende-Verschlüsselung wiederherzustellen.

**Ihr Kontakt hat eine E-Mail über Webmail oder eine andere E-Mail-Anwendung gesendet,
wird Delta Chat aber bald wieder benutzen.**

Wenn Sie wissen, dass der Kontakt manchmal Webmail,
oder andere E-Mail-Anwendungen ohne Ende-zu-Ende-Verschlüsselung verwendet,
dann können Sie die Warnung akzeptieren.
Sobald Ihr Kontakt Delta Chat wieder benutzt, 
wird die garantierte Ende-zu-Ende-Verschlüsselung automatisch wiederhergestellt.

**Ihr Kontakt hat die Nutzung von Delta Chat komplett eingestellt**

Manchmal ist es wichtiger, in Kontakt zu bleiben als eine Ende-zu-Ende-Verschlüsselung zu haben;
die ["Transport Layer Encryption" (TLS)](#tls) kann die Vertraulichkeit
Ihrer Nachrichten zwischen Ihrem Gerät und dem E-Mail-Server dennoch schützen. 
Ohne Ende-zu-Ende-Verschlüsselung vertrauen Sie und Ihr Chat-Partner jedoch darauf, dass Ihr E-Mail-Server Nachrichten nicht liest oder manipuliert und sie nicht an Dritte weitergibt.

In jedem Fall können Sie nicht viel mehr tun, als die Warnung zu akzeptieren.
Bitte entfernen Sie den Kontakt auch aus allen aktiven, grün markierten Gruppen 
die Sie unter "Gemeinsame Chats" im Profil des Kontakts finden können. 
So vermeiden Sie, dass Ihr Kontakt "unlesbare" Nachrichten erhält.

Wenn der Kontakt Delta Chat aufgrund von Fehlern oder Bugs nicht mehr verwendet, 
können Sie diese in unser [Support-Forum](https://support.delta.chat) schreiben, 
und uns so dabei helfen, häufige Probleme zu identifizieren und zu lösen. Vielen Dank!


### Sind Anhänge (Bilder, Dateien, Audio usw.) Ende-zu-Ende-verschlüsselt?

Ja.

Wenn wir von einer "Ende-zu-Ende-verschlüsselten Nachricht" sprechen
meinen wir immer, dass eine ganze Nachricht verschlüsselt ist,
einschließlich aller Anhänge
und Anhang-Metadaten wie Dateinamen.


### Ist OpenPGP sicher? {#openpgp-secure}

Ja, Delta Chat verwendet eine sichere Untermenge von OpenPGP
und zeigt nur dann ein Vorhängeschloss auf einer Nachricht an,
wenn die gesamte Nachricht ordnungsgemäß verschlüsselt und signiert ist.
Zum Beispiel werden "Detached Signatures" nicht als sicher betrachtet.

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

Ja, wir verfolgen Ansätze wie [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
oder [Saltpack](https://saltpack.org/). 
Diese zu übernehmen würde aber bedeuten, die Interoperabilität der Ende-zu-Ende-Verschlüsselung 
mit allen anderen E-Mail-Anwendungen zu zerstören. 
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


### Wird eine Nachricht im Klartext gesendet, wenn keine Ende-zu-Ende-Verschlüsselung verfügbar ist? {#tls}

Auch wenn Ihre Nachrichten nicht Ende-zu-Ende-verschlüsselt sind, 
sind sie dennoch vor Internetanbietern wie Mobilfunk- oder Telefongesellschaften geschützt. 
Allerdings können Ihr E-Mail-Provider und der des Empfängers 
Ihre Nachrichten lesen, analysieren oder sogar verändern,
wenn sie nicht Ende-zu-Ende-verschlüsselt sind.

Delta Chat verwendet standardmäßig strikte 
[TLS-Verschlüsselung](https://en.wikipedia.org/wiki/Transport_Layer_Security), 
die die Verbindungen zwischen Ihrem Gerät und Ihrem E-Mail-Anbieter sichert. 
Die gesamte TLS-Implementierung wurde unabhängig [sicherheitsgeprüft](#security-audits).
Die Verbindung zwischen Ihrem E-Mail-Providern und dem des Empfängers
ist in der Regel ebenfalls transportverschlüsselt.
Wenn die beteiligten E-Mail-Server [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461) unterstützen,
wird TLS zwischen den E-Mail-Anbietern durchgesetzt. 
In diesem Fall wird die Delta-Chat-Kommunikation niemals im Klartext ins Internet gelangen
selbst wenn die Nachricht nicht Ende-zu-Ende-verschlüsselt war.

Beachten Sie, dass die [Beibehaltung der garantierten Ende-zu-Ende-Verschlüsselung](#howtoe2ee) zusätzlich zur TLS-Verschlüsselung 
eine allumfassende Sicherheit zwischen Ihrem Gerät und dem des Empfängers bietet.
Nicht einmal Ihr E-Mail- oder Internet-Provider wird in der Lage sein, Ihre Nachrichten zu lesen oder zu verändern.


### Wie schützt Delta Chat Metadaten in Nachrichten? {#message-metadata}

Delta Chat schützt die meisten Metadaten von Nachrichten, indem es die folgenden Informationen
in den Ende-zu-Ende-verschlüsselten Teil der Nachrichten verschiebt:

- Betreffzeile 
- Avatar und Name der Gruppe 
- Lesebestätigungen (`Chat-Disposition-Notification-To`)
- Timer für verschwindende Nachrichten (`Ephemeral-Timer`) 
-  `Chat-Group-Member-Removed`, `Chat-Group-Member-Added` 
- `Secure-Join`-Header
- Aktivierung des Standort-Streamings
- WebRTC-Raum-URL

E-Mail-Server erhalten keinen Zugriff auf diese geschützten Metadaten, 
sehen aber Datum und Größe der Nachricht sowie die Absender- und Empfängeradressen. 
E-Mail-Server benötigen Empfängeradressen, um Nachrichten 
Nachrichten an die Geräte der Empfänger weiterzuleiten und zuzustellen.


### Wie schützt man Metadaten und Kontakte, wenn ein Gerät beschlagnahmt wird? {#device-seizure}

Sowohl zum Schutz vor E-Mail-Servern, die Metadaten sammeln, 
als auch gegen die Gefahr der Beschlagnahmung von Geräten
empfehlen wir die Verwendung einer für Delta Chat optimierten [E-Mail-Server-Instanz](https://delta.chat/serverguide), um pseudonym-temporäre Konten durch Scannen von QR-Codes zu erstellen.
Beachten Sie, dass Delta-Chat-Apps auf allen Plattformen mehrere Konten unterstützen. 
Sie können also problemlos aktionsspezifische "1-Wochen-" oder "1-Monats-Konten" neben Ihrem "Hauptkonto" verwenden,
mit dem Wissen, dass alle temporären Kontodaten zusammen mit allen Metadaten gelöscht werden.
Wenn ein Gerät beschlagnahmt wird, können Kontakte mit temporären E-Mail-Konten
Konten nicht so leicht identifiziert werden, wie dies bei Messengern der Fall ist, die die
Telefonnummern in Chatgruppen preisgeben, die wiederum oft mit legalen Identitäten verbunden sind.


### Wie kann ich die Verschlüsselungsinformationen überprüfen?

Sie können den Status der Ende-zu-Ende-Verschlüsselung manuell im Dialog "Verschlüsselung"
(Android/iOS: Benutzerprofil, Desktop: Rechtsklick auf den Chat eines Benutzers) überprüfen.
Delta Chat zeigt dort zwei Fingerabdrücke an.
Wenn die gleichen Fingerabdrücke auf Ihrem eigenen Gerät und auf dem Gerät Ihres Kontakts erscheinen,
ist die Verbindung sicher.


### Wie kann ich den Verschlüsselungsstatus von Nachrichten überprüfen?

Ein kleines **Vorhängeschloss** in einer Nachrichten zeigt an,
dass die Nachricht vom Absender korrekt Ende-zu-Ende-verschlüsselt wurde.
Wenn **kein Vorhängeschloss** vorhanden ist, wurde die Nachricht nicht oder nicht korrekt Ende-zu-Ende-verschlüsselt.
Höchstwahrscheinlich, weil der Absender ein Webmail-Interface oder eine App
ohne Ende-zu-Ende-Unterstützung verwendet.


### Warum sehe ich unverschlüsselte Nachrichten?

Wenn ein Kontakt keine Autocrypt-fähige App verwendet,
werden alle Nachrichten, die diesen Kontakt betreffen (in Gruppen- oder Direkt-Chats),
nicht Ende-zu-Ende-verschlüsselt und zeigen daher kein "Vorhängeschloss".
Beachten Sie, auch Kontakte, die primär Delta Chat verwenden,
können gleichzeitig auch nicht-Autocrypt-fähige Apps verwenden.
Das unverschlüsselte Antworten auf unverschlüsselte Nachrichten wird von Autocrypt vorgeschrieben
um zu verhindern, dass unlesbare Nachrichten auf der Seite Ihrer Kontakte ankommen.

### Wie kann ich einen Ende-zu-Ende-verschlüsselten Chat mit einem Delta-Chat-Kontakt führen, der manchmal Webmail oder eine andere E-Mail-Anwendung ohne Autocrypt verwendet?

Wenn Sie einen sicheren Ende-zu-Ende-verschlüsselten Chat mit einem Kontakt benötigen, 
der sowohl Delta Chat als auch Nicht-Autocrypt-Anwendungen nutzt,
können Sie eine [garantierte Ende-zu-Ende-Verschlüsselung](#howtoe2ee) einrichten, mit einer Gruppe mit Ihnen beiden als Mitgliedern. 
In diesem Gruppenchat werden alle Nachrichten Ende-zu-Ende verschlüsselt werdejn,
auch wenn im Direkt-Chat eine
["Nachricht von einem anderen Gerät gesendet"](#nocryptanymore) wurde.


### Wie kann ich Ende-zu-Ende-Verschlüsselung und Löschen von Nachrichten sicherstellen?

Der beste Weg, um sicherzustellen, dass alle Nachrichten Ende-zu-Ende-verschlüsselt sind
und Metadaten so schnell wie möglich gelöscht werden,
ist [die Verwendung von Chats mit garantierter Ende-zu-Ende-Verschlüsselung](#howtoe2ee)
und die Aktivierung von [verschwindenden Nachrichten](#ephemeralmsgs).

Garantierte Ende-zu-Ende-Verschlüsselung schützt vor [MITM-Angriffen](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
und das Aktivieren von "Verschwindende Nachrichten" löscht die Nachrichten
auf dem Server und Lokal nach einer vom Benutzer eingestellten Zeit.

Wenn Sie die Nachrichten auf Ihrem Gerät, aber nicht auf dem Server benötigen, können Sie auch in der Gruppe vereinbaren, ["Nachrichten automatisch vom Server löschen"](#delold) einzuschalten.


### Unterstützt Delta Chat "Perfect Forward Secrecy"? {#pfs}

Nein, Delta Chat unterstützt kein "Perfect Forward Secrecy" (PFS).
Das bedeutet, wenn Ihr privater Delta-Chat-Schlüssel durchgesickert ist
und jemand Ihre vorherigen In-Transit-Nachrichten gesammelt hat,
können diese mit dem veröffentlichtem Schlüssel entschlüsselt werden.

Beachten Sie jedoch, dass jemand, der in den Besitz Ihrer privaten Schlüssel gelangt, in der Regel auch in der Lage sein wird, Ihre Nachrichten zu lesen - unabhängig davon, ob Perfect Forward Secrecy nun verwendet wird oder nicht. 
Die typische, reale Situation für durchgesickerte private Schlüssel, ist die [Beschlagnahme von Geräten](#device-seizure).

Es ist möglich, dass Delta Chat eine Tages "Perfect Forward Secrecy" unterstützt -
OpenPGP ist nur ein Container für verschlüsselte Nachrichten mit dem
die Verwaltung der Schlüssel (und damit die Schlüsselrotation oder das Schlüssel-"Ratcheting") 
auf flexible Weise organisiert werden kann. 
Siehe [Seqouias PFS-Prototyp](https://gitlab.com/sequoia-pgp/openpgp-dr)
für bestehende Experimente in der OpenPGP-Community.


### Ist die Ende-zu-Ende-Verschlüsselung von Delta Chat genauso sicher wie die von Signal?

Das hängt davon ab, was für Sie wichtig ist. 
Delta Chat [unterstützt kein PFS](#pfs),
bietet aber [garantierte Ende-zu-Ende-Verschlüsselung](#e2eeguarantee),
die vor kompromittierten Servern oder korrupten Netzwerken schützt. 
Signal und die meisten anderen PFS-unterstützenden Messenger bieten kein 
praktisches System zum Schutz von Chatgruppen vor Netzwerkangriffen.
Diese sind besorgniserregender und realer 
als ein potenzieller Angreifer, der zwar Ihr Telefon und Ihre privaten Schlüssel beschlagnahmt,
aber irgendwie nicht Ihre Nachrichten - gleichzeitig aber eine vollständige Aufzeichnung aller 
vergangenen verschlüsselten Nachrichten hat.

In jedem Fall verwendet die Ende-zu-Ende-Verschlüsselung von Delta Chat eine [sichere Untermenge von OpenPGP](#openpgp-secure)
das [unabhängig sicherheitsgeprüft](../assets/blog/2019-first-security-review.pdf) wurde.

### Kann ich meinen existierenden privaten Schlüssel weiter verwenden? {#importkey}

Nein.

Delta Chat erzeugt sichere OpenPGP-Schlüssel gemäß der Autocrypt-Spezifikation 1.1. 
Sie können Ihren privaten Schlüssel exportieren, aber Sie können keine weiteren privaten Schlüssel importieren. 

Im Allgemeinen empfehlen wir, die Schlüsselverwaltung nicht manuell vorzunehmen, und bieten dies auch nicht an. 
Wir wollen sicherstellen, dass sich Sicherheitsaudits auf wenige, bewährte kryptographische Algorithmen konzentrieren können - statt einen Strauß möglicher Algorithmen, die mit OpenPGP erlaubt sind. 

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
Weitere Informationen finden Sie in unserem Blogbeitrag über [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) und in der hinterher publizierten [Kryptografischen Analyse von Delta Chat](https://eprint.iacr.org/2024/918.pdf) 

- Im April 2023 haben wir Sicherheits- und Datenschutzprobleme mit dem "In Chats geteilten Apps"-Feature behoben, die mit Fehlern beim Sandboxing, insbesondere mit Chromium zusammenhängen. Wir haben daraufhin eine unabhängige Sicherheitsprüfung von Cure53 durchführen lassen, und alle gefundenen Probleme wurden mit den im April 2023 veröffentlichten 1.36 Releases behoben. Siehe [hier für die vollständige Hintergrundgeschichte](https://delta.chat/en/2023-05-22-webxdc-security).

- Im März 2023 analysierte [Cure53](https://cure53.de) sowohl die Transportverschlüsselung von Delta Chats Netzwerkverbindungen als auch das reproduzierbare Mailserver-Setup wie [auf dieser Seite empfohlen](serverguide). Sie können mehr über das Audit [in unserem Blog](https://delta.chat/en/2023-03-27-third-independent-security-audit) lesen oder Sie lesen den [vollständigen Bericht hier](../assets/blog/MER-01-report.pdf).

- Im Jahr 2020 analysierte [Include Security](https://includesecurity.com) Delta Chats Rust [core](https://github.com/deltachat/deltachat-core-rust/), [IMAP](https://github.com/async-email/async-imap),[SMTP](https://github.com/async-email/async-smtp), und [TLS](https://github.com/async-email/async-native-tls) Bibliotheken.
Es wurden keine kritischen oder hochgradig gefährlichen Probleme gefunden. Der Bericht wies auf einige Schwachstellen mittlerer Schwere hin - sie stellen für sich genommen keine Bedrohung für Delta-Chat-Benutzer dar, da sie von der Umgebung abhängen, in der Delta Chat verwendet wird. Aus Gründen der Benutzerfreundlichkeit und der Kompatibilität können wir nicht alle Schwachstellen beseitigen und haben beschlossen, Sicherheitsempfehlungen für bedrohte Benutzer zu geben. Sie können den [vollständigen Bericht hier](../assets/blog/2020-second-security-review.pdf) lesen.

- Im Jahr 2019 analysierte [Include Security](https://includesecurity.com) die von Delta Chat verwendeten [PGP-](https://github.com/rpgp/rpgp) und [RSA-](https://github.com/RustCrypto/RSA) Bibliotheken.
Es wurden keine kritischen Probleme gefunden, aber zwei Probleme mit hohem Schweregrad, die wir anschließend behoben haben. Außerdem wurden ein mittelschweres und einige weniger schwerwiegende Probleme gefunden, aber es gab keine Möglichkeit, diese Schwachstellen in der Delta-Chat-Implementierung auszunutzen. Einige dieser Schwachstellen haben wir dennoch nach Abschluss des Audits behoben. Sie können den [vollständigen Bericht hier](../assets/blog/2019-first-security-review.pdf) lesen.



## Mehrere Geräte verwenden {#multiclient}

### Kann ich Delta Chat auf mehreren Geräten zur selben Zeit verwenden?

Ja. You can use the same profile on different devices:

- Stellen Sie sicher, dass sich beide Geräte im selben Wi-Fi oder Netzwerk befinden

- Gehen Sie auf dem ersten Gerät zu **Einstellungen → Zweites Gerät hinzufügen**, entsperren Sie den Bildschirm, falls erforderlich und warten Sie einen Moment, bis ein QR-Code angezeigt wird

- Auf dem zweiten Gerät [Delta Chat installieren](https://get.delta.chat)

- Auf dem zweiten Gerät Delta Chat starten, "Als Zweitgerät hinzufügen" wählen und den QR-Code vom ersten Gerät scannen

- Die Übertragung sollte nach ein paar Sekunden beginnen und während der Übertragung zeigen beide Geräte den **Fortschritt** an. Warten Sie, bis der Vorgang auf beiden Geräten abgeschlossen ist.

Im Gegensatz zu vielen anderen Messengern, sind nach erfolgreicher Übertragung beide **Geräte völlig unabhängig voneinander. Das eine Gerät wird nicht benötigt, damit das Andere funktioniert.


### Fehlersuche

- Vergewissern Sie sich, dass beide Geräte mit dem **gleichen Wi-Fi, WLAN oder Netzwerk** verbunden sind.

- Unter **Windows**, **Systemsteuerung / Netzwerk und Internet** öffnen
und sicherstellen, dass **Privates Netzwerk** als "Netzwerkprofiltyp" ausgewählt ist.
(nach der Übertragung kann wieder der ursprüngliche Wert verwendet werden)

- Auf **iOS**, sicherstellen, dass „Systemeinstellungen / Apps / Delta Chat / **Lokales Netzwerk**“ eingeschaltet ist

- Auf **macOS,** „Systemeinstellungen / Datenschutz & Sicherheit / **Lokales Netzwerk** / Delta Chat“ aktivieren

- Ihr System verfügt möglicherweise über eine "Personal Firewall", diese sind dafür bekannt, Probleme zu verursachen (insbesondere bei Windows). **Deaktivieren Sie die Personal Firewall** für Delta Chat auf beiden Seiten und versuchen Sie es erneut

- In **Gastnetzwerken** z.B. der **Fritz!Box**, können Geräte möglicherweise nicht miteinander kommunizieren.
Verwenden Sie nach Möglichkeit ein Nicht-Gast-Netzwerk. Wenn Sie Zugriff auf den Router haben, können Sie auch die Kommunikation der Geräte untereinander für die Dauer der Übertragung erlauben.

- Wenn Sie immer noch Probleme bei der Verwendung desselben Netzwerks haben,
versuchen Sie, einen **Mobilen Hotspot** auf einem Gerät zu öffnen und sich mit dem anderen Gerät in dieses WLAN einzuwählen.

- Vergewissern Sie sich, dass das Zielgerät über **genügend Speicher** verfügt

- Wenn die Übertragung begonnen hat, stellen Sie sicher, dass die Geräte **aktiv bleiben** und nicht ausgehen. Beenden Sie Delta Chat nicht. (wir bemühen uns, die App im Hintergrund laufen zu lassen, aber [Systeme neigen dazu, Apps zu beenden](https://dontkillmyapp.com), leider)

- Sie sind auf dem Zielgerät **bereits eingeloggt**? Sie können mehrere Profile pro Gerät verwenden, fügen Sie einfach [ein weiteres Konto hinzu](#multiple-accounts)

- Wenn Sie immer noch Probleme haben oder wenn Sie **keinen QR-Code scannen können** versuchen Sie die **manuelle Übertragung** wie unten beschrieben


### Manueller Transfer {#backup}

Diese Methode wird nur empfohlen, wenn "Zweites Gerät hinzufügen", wie oben beschrieben, nicht funktioniert.

- Auf dem alten Gerät gehen Sie zu "Einstellungen → Chats und Medien → Chats auf externem Speicher speichern". Geben Sie Ihre PIN, Ihr Muster oder Ihr Passwort zum Entsperren des Bildschirms ein. Anschließend können Sie auf "Backup starten" klicken. Dadurch wird die Backup-Datei auf Ihrem Gerät gespeichert. Jetzt müssen Sie sie irgendwie auf das andere Gerät übertragen.
- Auf dem neuen Gerät, auf dem Anmeldebildschirm, wählen Sie, anstatt sich bei Ihrem E-Mail-Konto anzumelden, "Wiederherstellen aus Backup". Nach dem Import sollten Ihre Unterhaltungen, Verschlüsselungsschlüssel und Medien auf das neue Gerät kopiert sein.
  - **Wenn Sie iOS verwenden** und auf Schwierigkeiten stoßen, hilft Ihnen vielleicht [diese Anleitung](https://support.delta.chat/t/import-backup-to-ios/1628).
- Sie sind nun synchronisiert und können beide Geräte zum Senden und Empfangen von Ende-zu-Ende-verschlüsselten-Nachrichten mit Ihren Kommunikationspartnern verwenden.

### Wird Löschen, Anheften, Archivieren, Speichern, Stummschalten usw. über alle Geräte synchronisiert?

Ja.

Wenn Sie z.B. einen Chat oder eine Nachricht von Ihrem Telefon löschen,
wird sie auch auf Ihrem Desktop gelöscht, sobald dieser online ist.

Ausnahmen sind [Alte Nachrichten vom Gerät löschen](#delold),
da verschiedene Geräte unterschiedliche Speicherkapazitäten haben können,
und systemspezifische Einstellungen wie Benachrichtigungstöne.


### Gibt es Pläne für eine Delta-Chat-Web-Anwendung?

- Es gibt keine direkten Pläne, aber einige vorläufige Gedanken.
- Es gibt 2-3 Möglichkeiten, einen Delta-Chat-Web-Client einzuführen, aber sie bedeuten alle immense Arbeit. Im Moment fokussieren wir uns darauf, stabile native Apps in den Appstores (Google Play/iOS/Windows/macOS/Linux repositories) anzubieten. 
- Sollten Sie einen Web-Client benötigen, weil Sie auf Ihrem Arbeitsrechner keine Software installieren dürfen, können Sie den Windows-Desktop-Client bzw. Applmage für Linux nutzen. Sie finden diese unter [get.delta.chat](https://get.delta.chat).


## Webxdc-Apps {#webxdc}

In Delta Chat können Sie [Webxdc-Apps](https://webxdc.org), Anhänge mit der Dateierweiterung ".xdc" teilen. Sie können sehr unterschiedliche Dinge tun und machen Delta Chat zu einem wirklich erweiterbaren Messenger. 


### Wie privat sind Webxdc Apps?

- Webxdc Apps können keine Daten ins Internet senden oder etwas herunterladen.
- Eine Webxdc App kann Daten nur innerhalb eines Delta-Chat-Chats mit ihren Kopien auf den Geräten Ihrer Chat-Partner austauschen. Ansonsten ist sie komplett vom Internet isoliert.
- Die Privatsphäre, die eine Webxdc App bietet, ist die Privatsphäre Ihres Chats - solange Sie den Personen vertrauen, mit denen Sie chatten, können Sie auch der Webxdc App vertrauen.
- Das bedeutet auch: Es kann ein Datenschutzrisiko darstellen, Webxdc Apps in Chats zu öffnen, in denen man den Mitgliedern nicht vertraut - so wie man es von E-Mail-Anhängen kennt, wo man nur Anhänge von Absendern öffnet, denen man vertraut, und nicht von Spammern. Spammer erhalten alle Daten, die Sie Ihnen senden zusammen mit Ihrer IP-Adresse.


### Wo bekomme ich Webxdc Apps?

- Grundsätzlich kann jeder Webxdc-Apps mit anderen ohne Einschränkungen teilen.
- Von [webxdc.org/apps](https://webxdc.org/apps/).
- Sie können ['hallo' an xstore@testrun.org senden](https://delta.chat/en/2023-08-11-xstore)
  um einen experimentellen Webxdc Appstore zu sehen.
  Alle Apps dort sind Open Source und umsonst.
- Viele Apps werden auch im [Delta Chat
  forum](https://support.delta.chat/c/webxdc/20) veröffentlicht und diskutiert.


### Wie kann ich meine eigenen Webxdc Apps erstellen?

- Webxdc Apps sind nur ZIP-Dateien, die HTML-, CSS- und JavaScript-Code enthalten.
- Sie können die [Hello-World-Beispiel-App](https://github.com/webxdc/hello) erweitern, um loszulegen.
- Alles andere, was Sie wissen müssen, steht in der [Dokumentation](https://docs.webxdc.org/).
- Wenn Sie Fragen haben, können Sie andere mit Erfahrung im [Delta-Chat-Forum](https://support.delta.chat/c/webxdc/20) fragen.


## Experimentelle Features

Wir sind sehr dankbar für Feedback zu diesen Funktionen - möchten Sie Ihre Ideen teilen? Treten Sie dem [Forum](https://support.delta.chat) bei, um einen Beitrag zu leisten. (Sie mögen Experimente? Registrieren Sie sich über "Sign Up → with Delta Chat"!)

### Wie kann ich Audio-/Videoanrufe mit Delta Chat verwenden?

- Um Audio-/Videoanrufe zu aktivieren, gehen Sie in den erweiterten Einstellungen zum Abschnitt "Experimentelle Features" und wählen Sie eine "Videochat-Instanz" aus.
- Wenn Sie andere zu einem Videochat einladen, wird dieser sofort in Ihrem Browser/Ihrer App geöffnet. Die anderen erhalten eine E-Mail mit einem Link zu Ihrem Raum. Auf diese Weise ist es auch kompatibel, wenn Ihre Chat-Partner Delta Chat nicht verwenden.
- Beachten Sie, dass es auf der anderen Seite keinen Klingelton gibt und Ihre Chat-Partner nicht durch eine Videochat-Einladung unterbrochen werden.
- Sie können jeden Videochat-Dienst verwenden, der die Teilnahme per Link ermöglicht. Fügen Sie einfach den Link in den Einstellungen hinzu.
- Um beispielsweise die Flaggschiff-Jitsi Meet-Instanz zu verwenden, könnten Sie `https://meet.jit.si/$ROOM` eingeben. Die Variable `$ROOM` ist ein zufälliger Wert; auf diese Weise haben Sie jedes Mal, wenn Sie jemanden anrufen, einen neuen zufälligen Jitsi-Raum.


### Was sind Broadcast-Listen und wie kann ich sie verwenden?

Mit einer Broadcast-Liste können Sie eine Nachricht an viele Empfänger auf einmal senden; die Empfänger können in dieser Liste nicht antworten. Broadcast-Listen sind experimentell und werden sehr wahrscheinlich durch etwas anderes ersetzt werden, bleiben Sie dran :)


### Wie kann ich meinen Standort mit meinen Chat-Partnern teilen?

- Sie können das Standort-Streaming im Abschnitt "Experimentelle Features" der erweiterten Einstellungen aktivieren.
- Wenn Sie nun Ihren Standort in einem Chat teilen möchten, gehen Sie zu "Anhängen" und wählen Sie "Standort". Sie können nun einen Zeitraum zwischen 5 Minuten und 6 Stunden festlegen, in dem Ihr Standort an Ihre Chat-Partner gestreamt wird.
- Wenn sich Ihr Standort ändert, können die anderen im Chat ihn auf einer Karte im Chat sehen.
- Um die Karte und die Standorte anderer anzuzeigen, müssen Sie die Funktion in den erweiterten Einstellungen aktivieren.
- Diese Funktion teilt Ihren Standort mit niemandem außer Ihren Chat-Partnern. Kartendaten werden von  [OpenStreetMap](https://openstreetmap.org) heruntergeladen.
- Auf dem Desktop kann das Betriebssystem Ihren Standort normalerweise nicht bestimmen. Stattdessen können Sie mit der rechten Maustaste auf die Karte klicken und einen Ort beschreiben, der als Nachricht an den Chat gesendet wird, aber auch auf der Karte erscheint.


### Warum kann ich mich dafür entscheiden, nur den DeltaChat-Ordner zu beobachten?

Dies ist eine experimentelle Einstellung für BenutzerInnen, die serverseitige Regeln verwenden möchten. Dies wird nicht von allen Providern unterstützt, aber bei einigen können Sie Nachrichten mit einem "Chat-Version"-Header vom Server in den DeltaChat-Ordner verschieben. Normalerweise wird dies von der Delta-Chat-App erledigt.

Die Aktivierung von "Nur aus DeltaChat-Ordner lesen" ist sinnvoll, wenn Sie **beides** haben:

- Es existiert eine serverseitige Regel, Nachrichten mit einem Chat-Version-Header in den DeltaChat-Ordner zu kopieren.
- "Normale E-Mails anzeigen" ist auf "Nein, nur Chats" gesetzt.

In diesem Fall muss Delta Chat den Posteingang nicht beobachten, und es reicht aus, nur den DeltaChat-Ordner zu beobachten.


### Wie kann ich mein Profil auf eine andere E-Mail-Adresse ändern?

1. Ändern Sie Ihre E-Mail-Adresse unter "Einstellungen → Erweitert → Passwort und E-Mail-Konto" und
geben Sie das Passwort Ihres neuen E-Mail-Konto (und ggf. die Servereinstellungen) ein.
Sie erhalten einen Hinweis darauf, dass Sie zu einer neuen E-Mail-Adresse umziehen. 
Ein zusätzlicher Hinweis erscheint auch in Ihrem Chat "Systemnachrichten".

2. Wenn möglich, weisen Sie Ihren alten E-Mail-Provider an, alle Nachrichten an die neue Adresse weiterzuleiten.

3. Teilen Sie Ihren Kontakten mit, dass Sie Ihre E-Mail-Adresse geändert haben. 
Sobald Sie in "Garantiert Ende-zu-Ende-verschlüsselten" Chats schreiben,
werden die anderen Mitglieder automatisch von Ihrem Umzug erfahren
und werden mit Ihnen unter Ihrer neuen Adresse weiterchatten.

Beachten Sie, dass Delta Chat keine Nachrichten mehr von Ihrem alten E-Mail-Anbieter abrufen wird.
Wenn Sie Ihren E-Mail-Provider nicht für die Weiterleitung von Nachrichten konfiguriert haben (Schritt 2.) 
werden nur die Kontakte, denen Sie eine Nachricht in einem garantiert Ende-zu-Ende-verschlüsselten Chat gesendet haben
gesendet haben, Nachrichten an Ihre neue Adresse senden.

Um mehr über die Details dahinter zu erfahren, [lesen Sie unseren Blogpost dazu](https://delta.chat/en/2022-09-14-aeap).


## Verschiedenes

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


### Funktioniert Delta Chat mit _meinem_ E-Mail-Anbieter?

- Mit ziemlich hoher Wahrscheinlichkeit: Ja :) 
  Allerdings benötigen einige Anbieter besondere Einstellungen, um ordnungsgemäß zu funktionieren; eine von NutzerInnen erstellte Sammlung zu einigen Optionen findet sich unter [Provider Overview](https://providers.delta.chat).


### I want to manage my own server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  chatmail relay server, as described [in this
  blogpost](https://delta.chat/en/2023-12-13-chatmail).
- You can find an [installation guide on GitHub](https://github.com/chatmail/relay).


### Weshalb muss ich mein E-Mail-Kennwort in Delta Chat eingeben? Ist das sicher?

Genau wie auch bei anderen E-Mail-Programmen (z. B. Thunderbird, K9-Mail oder Outlook) benötigt Delta Chat das Passwort, um E-Mails versenden zu können. Das Passwort wird nur auf Ihrem Gerät gespeichert und bei der Anmeldung an Ihren E-Mail-Anbieter gesendet.

Da Delta Chat Open Source ist, können Sie den [Quellcode](https://github.com/chatmail/core/blob/main/src/login_param.rs) einsehen und sich davon überzeugen, dass Ihre Zugangsdaten sicher gehandhabt werden. Wir freuen uns über Feedback, das unsere App sicherer für all unsere NutzerInnen macht.


### Welche Nachrichten erscheinen in Delta Chat?

In der Standardeinstellung zeigt Delta Chat alle E-Mails an.

Unter "Einstellungen → Erweitert → Normale E-Mails anzeigen" können Sie dies ändern. Sie haben die folgenden Optionen:

- "Nein, nur Chats": Es werden die von anderen Delta-Chat-Benutzern gesendeten Nachrichten sowie alle Antworten auf Ihre Nachrichten angezeigt. Dies ist sinnvoll, wenn Sie das gleiche E-Mail-Konto noch mit einer anderen E-Mail-App bearbeiten.
- "Alle": Delta Chat zeigt alle E-Mails an, die an Ihre E-Mail-Adresse gesendet werden. Dies ist sinnvoll, wenn Sie Delta Chat für alle Ihre E-Mails verwenden möchten, damit keine Nachricht verloren geht. Dies ist die Standardeinstellung.
- "Akzeptierte Kontakte": Delta Chat zeigt alle E-Mails von Kontakten an, mit denen Sie bereits einen Chat haben, aber neue Chats werden nur für Delta Chat-Nachrichten angezeigt. So können Sie von Fall zu Fall entscheiden, ob Sie eine Unterhaltung in Delta Chat oder in einer "normalen" E-Mail-App führen möchten.


### Unterstützt Delta Chat HTML-E-Mails?

- Ja. Eingehende HTML-Nachrichten erhalten eine Schaltfläche "Ganze Nachricht anzeigen". Ausgehende E-Mails verwenden immer "Nur Text".


### Kann ich den E-Mail "Betreff" (das "Subject") mit Delta Chat setzen?

Delta Chat setzt (und [verschlüsselt](#message-metadata)!) die klassische E-Mail-Betreffzeile
automatisch auf den Gruppennamen oder den Absendernamen.

Wenn Sie also den Betreff selbst festlegen möchten,
zum Beispiel für eine formelle E-Mail an einen Geschäftskontakt,
können Sie eine Gruppe erstellen
erstellen, die nur Sie und den/die Empfänger enthält.
Setzen Sie den Chat-Titel auf den von Ihnen gewünschten Betreff.
Wenn die Empfänger Delta Chat nicht verwenden,
wird sie wie eine normale,
formelle E-Mail aussehen.
Bonuspunkte für Professionalität gibt es,
wenn Sie eine [Signaturtext](#signature) einfügen.


### Was macht die Option "Kopie an mich selbst senden"?

Das Senden einer Kopie an Sie selbst stellt sicher, dass Sie Ihre eigenen Nachrichten auf all Ihren Geräten sehen. Wenn Sie mehrere Geräte nutzen, aber diese Option nicht eingeschaltet ist, sehen Sie nur die Nachrichten, die andere Ihnen geschickt haben, und die ausgehenden Nachrichten, die auf dem Gerät selbst verschickt wurden.

Die Kopie wird dabei an den Posteingang verschickt und von dort in den DeltaChat-Ordner verschoben. Delta Chat lädt *niemals* etwas in den Gesendet-Ordner hoch, weil dies bedeuten würde, dass eine Nachricht zweimal hochgeladen werden müsste (einmal durch SMTP und dann durch IMAP in den Gesendet-Ordner).

Die Standardeinstellung für "Kopie an mich selbst senden" ist "An".


### Warum gibt es die Funktion "Gesendet-Ordner beobachten"?

Der einzige Grund, den Gesendet-Ordner zu beobachten, ist, wenn Sie ein weiteres E-Mail-Programm (wie Thunderbird) mit demselben E-Mail-Account verwenden und die von dort versendeten Nachrichten in der Chat-Historie aufgeführt werden sollen.

Wir empfehlen für diesen Zweck aber "Delta Chat Desktop"; Sie können die App unter [get.delta.chat](https://get.delta.chat) herunterladen. Möglicherweise wird die Option "Gesendet-Ordner beobachten" zukünftig wegfallen; sie kommt aus einer Zeit, als Delta Chat Desktop noch nicht auf allen Plattformen zur Verfügung stand.


### Warum kann ich "DeltaChat-Ordner beobachten" ausschalten?

Einige BenutzerInnen verwenden Delta Chat als reguläres E-Mail-Programm und möchten lieber den Posteingang anstatt des DeltaChat-Ordners verwenden. Wenn Sie "DeltaChat-Ordner beobachten" ausschalten, sollten Sie auch "Autom. Verschieben in den DeltaChat-Ordner" ausschalten. Andernfalls funktioniert die Verwendung auf mehreren Geräten möglicherweise nicht richtig.


### Ist Delta Chat kompatibel mit Proton Mail / Tutanota / Criptext?

- Ja und Nein.
- Nein, Sie können sich nicht mit Delta Chat in ein Proton-Mail-, Tutanota- oder Criptext-Konto einloggen, da diese keinen Standard-E-Mail-Empfang über IMAP anbieten.
- Ja, Sie können Delta Chat verwenden, um Nachrichten an Personen zu senden, die Protonmail, Tutanota oder Criptext verwenden. Diese Nachrichten werden jedoch nicht Ende-zu-Ende-verschlüsselt, da diese Anbieter keine mit dem [Autocrypt](https://autocrypt.org/)-Standard kompatible Verschlüsselung verwenden.
- Delta Chat kann Ende-zu-Ende-Verschlüsselung über jeden E-Mail-Anbieter mit jeder
[Autocrypt-fähige E-Mail-Anwendung](https://autocrypt.org/dev-status.html) herstellen


### Wie kann ich mein Konto löschen? {#remove-account}

Wenn Sie ein Standard-Profil verwenden, können Sie die Anwendung einfach deinstallieren.
Dies löst automatisch die Löschung aller zugehörigen Account-Daten auf dem Chatmail-Server aus.
Weitere Informationen finden Sie unter [nine.testrun.org](https://nine.testrun.org/info.html#account-deletion) für den Standard-Onboarding-Server,
oder die entsprechende Seite des von Ihnen gewählten [Chatmail-Server](https://delta.chat/chatmail).

Wenn Sie Ihr Profil auf mehreren Geräten eingerichtet haben müssen Sie es von allen Geräten entfernen.

Wenn Sie mehr als ein Account verwenden,
aber nicht alle loswerden wollen,können Sie es im Menü „Profilwechsel“ (auf Android und iOS) entfernen,
oder in der Seitenleiste mit einem Rechtsklick (im Desktop-Client).

Konten bei [klassischen E-Mail-Anbietern](https://providers.delta.chat)
werden nicht automatisch gelöscht;
wie Sie Ihr Konto löschen können, hängt von Ihrem E-Mail-Anbieter ab. Wir haben keine Kontrolle über E-Mail-Konten bei diesen Anbietern.

Wenn Sie ein klassisches E-Mail-Konto weiterhin mit anderen Anwendungen verwenden möchten,
aber Delta Chat deinstallieren,
ist es ratsam, jeden Gruppenchat zu verlassen, bevor Sie Delta Chat deinstallieren.
Andernfalls könnten Sie unverschlüsselte Nachrichten aus diesen Gruppenchats erhalten.


### Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Siehe hierzu [in Delta Chat genutzte Standards]({% include standards-url %}).



###  Wo können meine Freunde Delta Chat finden?

Delta Chat ist für alle großen und einige kleinere Plattformen verfügbar:

- Die **offizielle Website**, <https://delta.chat/download> zeigt alle Optionen im Detail

-  Falls nicht verfügbar, verwenden Sie den **Mirror** auf <https://deltachat.github.io/deltachat-pages>

- Öffnen Sie einen der folgenden **App-Stores und suchen Sie nach „Delta Chat“:** Google Play Store, F-Droid, Huawei App Gallery, Amazon App Store, iOS und macOS App Store, Microsoft Store

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

Möglichkeiten mitzuwirken finden Sie Auf der [Delta-Chat-Seite "Mitwirken"](contribute).
