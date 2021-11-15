---
title: Datenschutzerklärung Delta Chat Apps
lang: de
---

# Datenschutzhinweise

**Das ist die Datenschutz-Erklärung der Delta Chat Apps. Die Datenschutzerklärung für diese Webseite [findest du hier](gdpr-website).**

## Zusammenfassung

Delta Chat ist eine E-Mail App, die einen strikten Privacy-by-Design Ansatz verfolgt. Alle Kommunikationsdaten verbleiben auf den Endgeräten bzw. bei den durch die Nutzer\*in gewählten E-Mail-Servern.

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
<b>Ende-zu-Ende-Verschlüsselung</b> durch Implementierung von <a href="https://autocrypt.org">Autocrypt</a> and <a href="https://countermitm.readthedocs.io/en/latest/new.html">Verified groups</a>. Durch eine anwenderfreundliche Ende-zu-Ende-Verschlüsselung werden die Vorgaben der DSGVO bereits auf technischer Ebene umgesetzt, <b>Privacy by Design</b>.
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
Das Einholen einer Einwilligung für den Adressbuchabgleich entfällt, <a href="https://dsgvo-gesetz.de/art-7-dsgvo/">Art.7 DSGVO</a>, da keine Adressbuchdaten übertragen werden. Somit ist <b>keine zusätzliche Rechtsgrundlage</b> von Nöten.
            </td>
        </tr>
        <tr>
            <td>Daten an Dritte</td>
            <td>Wir erhalten nur den Token für die Push-Notification und leiten diesen an den Anbieter deines Betriebssystems weiter. Wenn du keine Push-Notifications erhalten möchtest, leiten wir auch keinen Token weiter. </td>
        </tr>
        <tr>
            <td>Daten von Dritten</td>
            <td>
Einfache Implementierung in Unternehmen: Delta Chat verarbeitet keine personenbezogenen Daten im Auftrag der/des Verantwortlichen und bedarf somit <b>keiner Weisung oder eines Auftragsverarbeitungsvertrages</b>. Einfache Anbindung an eigenen E-Mail-Server.
            </td>
        </tr>
        <tr>
            <td>
DSFA
            </td>
            <td>
Es muss <b>keine Datenschutz-Folgenabschätzung</b> für Delta Chat (<a href="https://dsgvo-gesetz.de/art-35-dsgvo/">Art.35 DSGVO</a>) durchgeführt werden, da keine Daten über die Nutzung als E-Mail App hinaus verarbeitet werden. Das Risiko für Rechte und Freiheiten natürlicher Personen beschränkt sich auf die unternehmensinterne Datenverarbeitung der E-Mail-Kommunikation und die der E-Mail-Anbieter.
            </td>
        </tr>
        <tr>
            <td>
Dokumentation
            </td>
            <td>
Eine Aufnahme der durch Delta Chat implementierten Maßnahmen ins <b>Verzeichnis von Verarbeitungstätigkeiten</b> kann sich positiv auf eventuelle Beweisführungen, <a href="https://dsgvo-gesetz.de/art-30-dsgvo/">Art.30 DSGVO</a> sowie Zertifizierungsprozesse auswirken, <a href="https://dsgvo-gesetz.de/art-25-dsgvo/">Art.25 DSGVO</a> Art.25(4), <a href="https://dsgvo-gesetz.de/art-42-dsgvo/">Art.42 DSGVO</a>.

Die <b>Dokumentierung von Verarbeitungstätigkeiten</b> in Verbindung mit der Delta Chat E-Mail App entfällt und verlagert sich lediglich auf die Verzeichnung der Verarbeitungstätigkeiten deines E-Mail-Anbieters, <a href="https://dsgvo-gesetz.de/art-30-dsgvo/">Art.30(2) DSGVO</a>.
            </td>
        </tr>
    </tbody>
</table>

## Detaillierte Datenschutzhinweise

### 1. Name und Anschrift der/des Verantwortlichen

Verantwortliche für die Verarbeitung deiner personenbezogenen Daten ist die

```
    merlinux GmbH
    Vertreten durch den Geschäftsführer Holger Krekel
    Reichsgrafen Str. 20
    79102 Freiburg
    Germany
    
```
E-Mail: [delta-privacy@merlinux.eu](mailto:delta-privacy@merlinux.eu)


Der Datenschutzbeauftragte der merlinux GmbH ist **Prof. Dr. Fabian Schmieder**, c/o lexICT UG (haftungsbeschränkt), Ostfelstraße 49, 30559 Hannover. Du kannst ihn über [info@lexict.de](mailto:info@lexict.de) mit Stichwort: DeltaChat kontaktieren.

### 2. Verarbeitung bei Nutzung des Delta Chat E-Mail Messengers

Alle Daten sind lokal auf deinem Endgerät gespeichert oder bei deinem E-Mail-Anbieter. Wir bzw. Delta Chat Entwickler\*innen haben keine Möglichkeit auf Daten der Endnutzer\*innen zuzugreifen, da jegliche Kommunikation bzw. Datenverarbeitung auf dem Endgerät der Nutzer\*innen stattfindet, ohne dass Delta Chat Server beteiligt sind. Lediglich für die optionale Push Benachrichtigung (vgl. 2.2) wird der Push Notification Token durch Delta Chat Server verarbeitet, ohne dass diese Kenntnis über die Nachrichten selbst erhalten, auch nicht in verschlüsselter Form.

#### 2.1 Anmeldung bei deinem E-Mail-Anbieter

Die Kommunikation von Delta Chat funktioniert über deinen E-Mail-Account. Damit die Verbindung hergestellt werden kann, benötigt die App die Zugangsdaten. Diese werden nur lokal auf deinem Endgerät gepeichert:

- E-Mail-Adresse
- Dein Passwort

Rechtsgrundlage der Verarbeitung ist [Art.6 Abs. 1 S. 1 lit.b DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/), da du mit uns durch die Benutzung unserer Services einen Nutzungsvertrag hast.

#### 2.2 Heartbeat Push-Benachrichtigungen

Push-Benachrichtigungen können in regelmäßigen Abständen an das Telefon des Benutzers gesendet werden, um einen Empfang von Nachrichten zu ermöglichen, während die Delta Chat App gerade nicht aktiv ist. Aktuelle Nachrichten können dann auf dem Endgerät abgerufen werden. Der Token wird nur erstellt, sofern die Nutzer\*innen einen zuverlässigen Empfang von Nachrichten möchte, auch wenn die App nicht aktiv ist. 

Um Push-Benachrichtigungen nutzen zu können, wird nach dem Download und der Installation der App ein eindeutiger Bezeichner oder Token (Push Notification Token) erstellt. Dieser Token ermöglicht es, den Delta Chat Servern Benachrichtigungen an das Gerät der Nutzer\*innen zu senden. Der Token wird vom Anbieter generiert und bereitgestellt. Der Token wird dann auf unseren Systemen gespeichert und in regelmäßigen Abständen an das Endgerät geschickt, um die App zu veranlassen vom E-Mail-Anbieter neue Nachrichten abzurufen. Unsere Systeme haben keine Kenntnis davon, ob eine Nachricht ankommt oder wer eine Nachricht ggf. geschickt hat.

- Push Notification Provider für iOS Systeme sind die Apple Services. Werden Push-Nachrichten aktiviert, wird zur Bereitstellung dieser Funktion der Apple Push Notification Service (iOS-Version) genutzt. Weitere Informationen findest du unter [https://support.apple.com/de-de/guide/deployment-reference-ios/ior9d28751c0/web](https://support.apple.com/de-de/guide/deployment-reference-ios/ior9d28751c0/web). Die Datenschutzerklärung findest du unter [https://www.apple.com/legal/privacy/de-ww/](https://www.apple.com/legal/privacy/de-ww/).

- Push Notification Provider für Android Systeme ist Google Firebase. Der Anbieter ist Google Inc. und weitere Informationen findest du unter [https://firebase.google.com/products/cloud-messaging/](https://firebase.google.com/products/cloud-messaging/) und in der Datenschutzerklärung von Google unter [http://www.google.de/intl/de/policies/privacy](http://www.google.de/intl/de/policies/privacy).

Die genannten Daten werden nur mit deiner Einwilligung verarbeitet, gem. [Art.6 lit.a DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/).

#### 2.3 Daten in der App

Die Delta Chat App arbeitet datensparsam. Alle relevanten Daten sind ausschließlich auf den jeweiligen Endgeräten gespeichert: 
- Chatverläufe (Textnachrichten, Sprachnachrichten, Medien, …)
- Kontakte
- Einstellungen 
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
            <td>Dieser wird benötigt, um die Nachrichten an die Kommunikationsteilnehmer\*innen zu schicken. </td>
        </tr>
        <tr>
            <td>Kamerazugriff (optional)</td>
            <td>
Dieser wird benötigt, damit du Fotos anfertigen und über die App versenden kannst. Außerdem ermöglicht der Kamerazugriff das Scannen von QR-Codes.
            </td>
        </tr>
        <tr>
            <td>Mikrofonzugriff (optional)</td>
            <td>
Dieser wird benötigt, damit du Sprachnachrichten verschicken kannst.
            </td>
        </tr>
        <tr>
            <td>Standortzugriff (optional)</td>
            <td>
Dieser wird benötigt, wenn du deinen Standort mit einem/r Kommunikationsteilnehmer\*in teilen möchtest.
            </td>
        </tr>
        <tr>
            <td>Hintergrund Standortzugriff (optional)</td>
            <td>
Dieser wird benötigt, wenn du deinen Standort über einen Zeitraum teilen willst.
            </td>
        </tr>
        <tr>
            <td>Kontaktzugriff (optional)</td>
            <td>
Dieser wird benötigt, damit du Kontakte aus deinem Telefonbuch in die App laden und speichern kannst. Die Kontaktdaten werden dabei lokal in der App gespeichert und nicht auf Delta Chat Server weitergeleitet und gespeichert.
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

Die Verarbeitung und Verwendung der obigen Berechtigungen erfolgt zur Bereitstellung des Dienstes. Der Internetzugriff ist für die Nutzung erforderlich, daher ist die Rechtsgrundlage der Verarbeitung [Art.6 lit.b DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/), da du mit uns durch die Benutzung unserer Services einen Nutzungsvertrag hast.

Die optionalen Berechtigungen finden nur aufgrund deiner Einwilligung gem. [Art.6 lit.b DSGVO](https://dsgvo-gesetz.de/art-6-dsgvo/) statt und kann auch auf einzelne Dienste reduziert werden, z.B. nur Internetnutzung um Nachrichten ohne Bilder oder Standortdaten zu versenden. Delta Chat erhält keinerlei Zugriff auf diese Daten.

### 3. Plattformabhängige Verarbeitung

Bestimmte Informationen werden bereits automatisch verarbeitet, sobald du die App verwendest. Welche personenbezogenen Daten genau verarbeitet werden, haben wir im Folgenden für dich aufgeführt:

Beim Download der App werden bestimmte erforderliche Informationen an den von dir ausgewählten App Store (z.B. Google Play oder Apple App Store) übermittelt, insbesondere können dabei der Nutzername, die E-Mail-Adresse, die Kundennummer deines Accounts, der Zeitpunkt des Downloads, Zahlungsinformationen sowie die individuelle Gerätekennziffer verarbeitet werden. Die Verarbeitung dieser Daten erfolgt ausschließlich durch den jeweiligen App Store und liegt außerhalb unseres Einflussbereiches.

Im Übrigen verweisen wir auf die Datenschutzerklärungen der jeweiligen App Store Anbieter bzw. Verantwortlichen der Betriebssysteme. Wir erheben und/oder verarbeiten keine weiteren Daten.

Eine Übermittlung deiner persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. 

# 4. Betroffenenrechte

Als Betroffene\*r einer Verarbeitung personenbezogener Daten hast du das Recht,

1. gemäß [Art.15 DSGVO](https://dsgvo-gesetz.de/art-15-dsgvo/) Auskunft über deine von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere kannst du Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfänger\*innen, gegenüber denen deine Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft deiner Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;
2. gemäß [Art.16 DSGVO](https://dsgvo-gesetz.de/art-16-dsgvo/) unverzüglich die Berichtigung unrichtiger oder Vervollständigung deiner bei uns gespeicherten personenbezogenen Daten zu verlangen;
3. gemäß [Art.17 DSGVO](https://dsgvo-gesetz.de/art-17-dsgvo/) die Löschung deiner bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;
4. gemäß [Art.18 DSGVO](https://dsgvo-gesetz.de/art-18-dsgvo/) die Einschränkung der Verarbeitung deiner personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von dir bestritten wird, die Verarbeitung unrechtmäßig ist, du aber deren Löschung ablehnst und wir die Daten nicht mehr benötigen, du jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigst oder du gemäß [Art.21 DSGVO](https://dsgvo-gesetz.de/art-21-dsgvo/) Widerspruch gegen die Verarbeitung eingelegt hast;
5. gemäß [Art.20 DSGVO](https://dsgvo-gesetz.de/art-20-dsgvo/) deine personenbezogenen Daten, die du uns bereitgestellt hast, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;
6. gemäß [Art.7(3) DSGVO](https://dsgvo-gesetz.de/art-7-dsgvo/) deine einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und
7. gemäß [Art.77 DSGVO](https://dsgvo-gesetz.de/art-77-dsgvo/) dich bei einer Aufsichtsbehörde zu beschweren. In der Regel kannst du dich hierfür an die Aufsichtsbehörde deines üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Geschäftssitzes wenden. Die für unseren Geschäftssitz zuständige Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg in 70173 Stuttgart.

# 5. Aktualität und Änderung dieser Datenschutzerklärung

Diese Datenschutzerklärung hat den Stand November 2021. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben, kann es notwendig werden, diese Datenschutzerklärung zu ändern.

Die jeweils aktuelle Datenschutzerklärung kann jederzeit in der App oder unter [https://Delta.Chat/de/gdpr](https://Delta.Chat/de/gdpr) von dir abgerufen und ausgedruckt werden.
