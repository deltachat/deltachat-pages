---
title: Datenschutzerklärung Delta Chat Apps
lang: de
---

# Datenschutzhinweise

**Das ist die Datenschutz-Erklärung der Delta Chat Apps. Die Datenschutzerklärung für diese Webseite [finden Sie hier](gdpr-website).**

## Zusammenfassung

Delta Chat ist eine E-Mail app, die einen strikten Privacy-by-Design Ansatz verfolgt. Alle Kommunikationsdaten verbleiben auf den Endgeräten bzw. bei den durch die NutzerIn gewählten e-mail servern.

<table>
    <thead>
        <tr>
            <th>Anforderung</th>
            <th>Umsetzung</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Vertraulichkeit</td>
            <td>
Ende-zu-Ende-Verschlüsselung durch Implementierung von <a href="https://autocrypt.org">Autocrypt</a>. Durch eine anwenderfreundliche Ende-zu-Ende-Verschlüsselung werden die Vorgaben der DSGVO bereits auf technischer Ebene umgesetzt, Privacy by Design.
            </td>
        </tr>
        <tr>
            <td>Datenminimierung</td>
            <td>Kein Upload des Adressbuchinhalts.</td>
        </tr>
        <tr>
            <td>Datenvermeidung</td>
            <td>Keine Delta Chat Server, keine Verarbeitung personenbezogener Daten. Alle Daten bleiben bei deinem E-Mail-Anbieter und auf deinen Geräten.  
            </td>
        </tr>
        <tr>
            <td>Rechtsgrundlage</td>
            <td>
Das Einholen einer Einwilligung für den Adressbuchabgleich entfällt, Art. 7 DSGVO, da keine Adressbuchdaten übertragen werden. Somit ist keine zusätzliche Rechtsgrundlage von Nöten.
            </td>
        </tr>
        <tr>
            <td>Daten an Dritte</td>
            <td>Wir erhalten nur den Token für die Push-Notification und leiten diesen an den Anbieter deines Betriebssystems weiter. Wenn du keine Push-Notifications erhalten möchtest, leiten wir auch kein Token weiter. </td>
        </tr>
        <tr>
            <td>Daten von Dritten</td>
            <td>
Einfache Implementierung in Unternehmen: Delta Chat verarbeitet keine personenbezogenen Daten im Auftrag des Verantwortlichen und bedarf somit keiner Weisung oder eines Auftragsverarbeitungsvertrages. Einfach Anbindung an eigenen E-Mail-Server.
            </td>
        </tr>
        <tr>
            <td>
DSFA
            </td>
            <td>
Es muss keine Datenschutz-Folgenabschätzung für Delta Chat (Artikel 35 DSGVO) durchgeführt werden, da keine Daten über die Nutzung als E-Mail App hinaus verarbeitet werden. Das Risiko für Rechte und Freiheiten natürlicher Personen beschränkt sich auf die unternehmensinterne Datenverarbeitung der E-Mail-Kommunikation und die der E-Mail-Provider.
            </td>
        </tr>
        <tr>
            <td>
Dokumentation
            </td>
            <td>
Eine Aufnahme der durch Delta Chat implementierten Maßnahmen ins Verzeichnis von Verarbeitungstätigkeiten kann sich positiv auf eventuelle Beweisführungen, Art. 30 DSGVO sowie Zertifizierungsprozesse auswirken, Art. 25 IV, 42 DSGVO. Die Dokumentierung von Verarbeitungstätigkeiten in Verbindung mit der Delta Chat E-Mail App entfällt und verlagert sich lediglich auf die Verzeichnung der Verarbeitungstätigkeiten Ihres E-Mail-Providers, Art. 30 II DSGVO.
            </td>
        </tr>
    </tbody>
</table>

## Detaillierte Datenschutzhinweise

### 1. Name und Anschrift des Verantwortlichen

Verantwortliche für die Verarbeitung Ihrer personenbezogenen Daten ist die

    merlinux GmbH
    Vertreten durch den Geschäftsführer Holger Krekel
    Reichgrafen Str. 20
    79102 Freiburg
    Germany

E-Mail: delta-privacy at merlinux.eu

### 2. Verarbeitung bei Nutzung des Delta Chat E-Mail Messengers

Alle Daten sind lokal auf deinem Endgerät gespeichert oder bei deinem Mailprovider. Wir bzw. Delta Chat EntwicklerInnen haben keine Möglichkeit auf Daten des Endnutzers zuzugreifen, da jegliche Kommunikation bzw. Datenverarbeitung auf dem Endgerät des Nutzers stattfindet, ohne dass Delta Chat Server beteiligt sind. Lediglich für die optionale Push Benachrichtigung (vgl. 2.2) wird der Push Notification Token durch Delta Chat Server verarbeitet, ohne dass diese Kenntnis über die Nachrichten selbst erhalten, auch nicht in verschlüsselter Form.

#### 2.1 Anmeldung bei deinem E-Mail Provider

Die Kommunikation von Delta Chat funktioniert über deinen E-Mail-Account. Damit die Verbindung hergestellt werden kann, benötigt die App die Zugangsdaten. Diese werden nur lokal auf deinem Endgerät gepeichert:

- E-Mail-Adresse
- Passwort

Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. b DSGVO, da du mit uns durch die Benutzung unserer Services einen Nutzungsvertrag hast.

#### 2.2 Heartbeat Push-Benachrichtigungen

Push-Benachrichtigungen können in regelmäßigen Abständen an das Telefon des Benutzers gesendet werden, um einen Empfang von Nachrichten zu ermöglichen, während die Delta Chat App gerade nicht aktiv ist. Aktuelle Nachrichten können dann auf dem Endgerät aberufen werden. Der Token wird nur erstellt, sofern der Nutzer einen zuverlässigen Empfang von Nachrichten möchte, auch wenn die App nicht aktiv ist. 

Um Push-Benachrichtigungen nutzen zu können, wird nach dem Download und der Installation der App ein eindeutiger Bezeichner oder Token (Push Notification Token) erstellt. Dieses Token ermöglicht es den Delta Chat Servern Benachrichtigungen an das Gerät des Nutzers zu senden. Das Token wird vom Anbieter generiert und bereitgestellt. Der Token wird dann auf unseren Systemen gespeichert und in regelmäßigen Abständen an das Endgerät geschickt, um die App zu veranlassen vom E-Mail provider neue Nachrichten abzurufen. Unsere Systeme haben keine Kenntnis davon, ob eine Nachricht ankommt oder wer eine Nachricht ggf. geschickt hat.

- Push Notification Provider für iOS Systeme sind die Apple Services. Werden Push-Nachrichten aktiviert, wird zur Bereitstellung dieser Funktion der Apple Push No-tification Service (iOS-Version) genutzt. Weitere Informationen finden Sie unter https://support.apple.com/de-de/guide/deployment-reference-ios/ior9d28751c0/web. Die Datenschutzerklärung finden Sie unter https://www.apple.com/legal/privacy/de-ww/.

- Push Notification Provider für Android Systeme ist Google Firebase. Der Anbieter ist Google Inc. und weitere Informationen finden Sie unter unter https://firebase.google.com/products/cloud-messaging/ und in der Datenschutzerklärung von Google unter http://www.google.de/intl/de/policies/privacy.

Die genannten Daten werden nur mit Ihrer Einwilligung verarbeitet, gem. Art. 6 Abs. 1 S. 1 lit. a DSGVO.

#### 2.3 Daten in der App

Die Delta Chat App arbeitet datensparsam. Alle relevanten Daten sind ausschliesslich auf den jeweiligen Endgeräten gespeichert: 

    • Chatverläufe (Textnachrichten, Sprachnachrichten, Medien, …)
    • Kontakte
    • Einstellungen 

Delta Chat Server haben keinen Zugriff auf diese Daten, auch nicht in verschlüsselter Form, da die Datenverarbeitung nur auf den Endgeräten stattfindet.

#### 2.4 Berechtigungen der App

Im Rahmen der App können Sie diverse Informationen, Aufgaben und Aktivitäten eingeben, verwalten und bearbeiten. Die App erfordert darüber hinaus folgende Berechtigungen:

<table>
    <thead>
        <tr>
            <th>Berechtigung</th>
            <th>Grund</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Internetzugriff</td>
            <td>Dieser wird benötigt, um die Nachrichten an den Kommunikationsteilnehmer zu schicken. </td>
        </tr>
        <tr>
            <td>Kamerazugriff (optional)</td>
            <td>
Dieser wird benötigt, damit Sie Fotos anfertigen und über die App versenden können. Außerdem ermöglicht der Kamerazugriff das Scannen von QR-Codes.
            </td>
        </tr>
        <tr>
            <td>Mikrofonzugriff (optional)</td>
            <td>
Mit dieser Berechtigung können Sie Sprachnachrichten verschicken.
            </td>
        </tr>
        <tr>
            <td>Standortzugriff (optional)</td>
            <td>
Dieser wird benötigen, wenn Sie ihren Standort mit einem Kommunikationsteilnehmer teilen möchten.
            </td>
        </tr>
        <tr>
            <td>Hintergrund Standortzugriff (optional)</td>
            <td>
Dieser wird benötigen, wenn Sie ihren Standort ueber einen Zeitraum teilen wollen.
            </td>
        </tr>
        <tr>
            <td>Kontaktzugriff (optional)</td>
            <td>
Mit dieser können Sie Kontakte aus Ihrem Telefonbuch in die App laden und speichern. Die Kontaktdaten werden dabei lokal in der App gespeichert und nicht auf Delta Chat Server weitergeleitet und gespeichert.
            </td>
        </tr>
        <tr>
            <td>
Speicher (optional)
            </td>
            <td>Sie können Bilder und Dateien aus der App auf Ihrem Endgerät speichern.  </td>
        </tr>
    </tbody>
</table>

Die Verarbeitung und Verwendung der obigen Berechtigungen erfolgt zur Bereitstellung des Dienstes. Der Internetzugriff ist für die Nutzung erforderlich, daher ist die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. b DSGVO, da du mit uns durch die Benutzung unserer Services einen Nutzungsvertrag hast.

Die optionalen Berechtigungen finden nur aufgrund deiner Einwilligung gem. Art. 6 Abs. 1 lit. a DSGVO statt und kann auch auf einzelne Dienste reduziert werden, z.B. nur Internetnutzung um Nachrichten ohne Bilder oder Standortdaten zu versenden. Delta Chat erhält keinerlei Zugriff auf diese Daten.

### 3. Plattformabhängige Verarbeitung

Bestimmte Informationen werden bereits automatisch verarbeitet, sobald Sie die App verwenden. Welche personenbezogenen Daten genau verarbeitet werden, haben wir im Folgenden für Sie aufgeführt:

Beim Download der App werden bestimmte erforderliche Informationen an den von Ihnen ausgewählten App Store (z.B. Google Play oder Apple App Store) übermittelt, insbesondere können dabei der Nutzername, die E-Mail-Adresse, die Kundennummer Ihres Accounts, der Zeitpunkt des Downloads, Zahlungsinformationen sowie die individuelle Gerätekennziffer verarbeitet werden. Die Verarbeitung dieser Daten erfolgt ausschließlich durch den jeweiligen App Store und liegt außerhalb unseres Einflussbereiches.

Im Übrigen verweisen wir auf die Datenschutzerklärungen der jeweiligen App Store Anbieter bzw. Verantwortlichen der Betriebssysteme. Wir erheben und/oder verarbeiten keine weiteren Daten.

Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. 

# 4. Betroffenenrechte

Als Betroffene\*r einer Verarbeitung personenbezogener Daten hast du das Recht,

<ol class="p">
<li>
gemäß Art. 15 DSGVO Auskunft über deine von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere kannst du Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen deine Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft deiner Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;
</li>
<li>
gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung deiner bei uns gespeicherten personenbezogenen Daten zu verlangen;
</li>
<li>
gemäß Art. 17 DSGVO die Löschung deiner bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;
</li>
<li>
gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung deiner personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von dir bestritten wird, die Verarbeitung unrechtmäßig ist, du aber deren Löschung ablehnst und wir die Daten nicht mehr benötigen, du jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigst oder du gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt hast;
</li>
<li>
gemäß Art. 20 DSGVO deine personenbezogenen Daten, die du uns bereitgestellt hast, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;
</li>
<li>
gemäß Art. 7 Abs. 3 DSGVO deine einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und
</li>
<li>
gemäß Art. 77 DSGVO dich bei einer Aufsichtsbehörde zu beschweren. In der Regel kannst du dich hierfür an die Aufsichtsbehörde deines üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Geschäftssitzes wenden. Die für unseren Geschäftssitz zuständige Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg in 70173 Stuttgart.
</li>
</ol> 

# 5. Aktualität und Änderung dieser Datenschutzerklärung

Diese Datenschutzerklärung hat den Stand Juli 2021. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben, kann es notwendig werden, diese Datenschutzerklärung zu ändern.

Die jeweils aktuelle Datenschutzerklärung kann jederzeit in der App oder unter https://Delta.Chat/de/gdpr von Ihnen abgerufen und ausgedruckt werden.
