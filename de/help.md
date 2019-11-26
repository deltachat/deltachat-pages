---
title: FAQ
lang: de
render_toc: true
header: Häufige Fragen
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Allgemein {#general}

## Was ist Delta Chat?

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat ist eine neue Chat App, die Nachrichten als E-Mails verschickt. Sie werden, wann immer möglich, mit Autocrypt verschlüsselt.
**Du musst dich nirgendwo anmelden, du kannst einfach deinen E-Mail Account mit Delta Chat benutzen.** 

## Wie finde ich andere Leute zum chatten? 

Mit Delta Chat kannst du mit allen Leuten schreiben, die eine 
E-Mail-Adresse haben - auch wenn sie nicht Delta Chat benutzen. Die
andere Seite braucht nicht dieselbe App wie du, anders als bei anderen
Messengern.

## Welche Vorteile hat Delta Chat gegenüber anderen Messengern?

- _Unabhängig_ von irgendwelchen Firmen oder Diensten. Deine Daten gehören _dir_.
- Deine Daten werden nicht auf einem zentralen Server gespeichert; im Gegensatz zu den meisten anderen Messengern beschützt Delta Chat sogar deine Metadaten (wer schreibt mit wem?)
- Dein Adressbuch wird mit niemandem synchronisiert.
- _Schnell_ durch die Verwendung von Push-IMAP.
- Größte Anzahl an Nutzer*innen: du kannst auch mit Leuten schreiben, die kein Delta Chat benutzen.
- _Kompatibel_ - nicht nur mit sich selbst.
- _Elegante_ und _einfache_ Bedienung.
- _Verteiltes_ System.
- _Kein Spam_ - standartmäßig werden nur Nachrichten von bekannten Kontakten angezeigt.
- _Verlässlich_ - für Verwendung im professionellen Bereich geeignet.
- _Vertrauenswürdig_ - kann auch für Business-Nachrichten verwendet werden.
- Freie Software mit _Copyleft_-Lizenz, auf aktuellen Standards basierend.

## Welche Nachrichten erscheinen in Delta Chat?

Delta Chat zeigt automatisch an:

- Nachrichten von Kontakten in Ihrem **Adressbuch**
- Nachrichten von Kontakten, **die von Ihnen kontaktiert wurden**
- **Antworten** auf von Ihnen gesendete Nachrichten

Andere Nachrichten tauchen nicht automatisch auf, und sind nur unter "Kontaktanfragen" im Menü zu finden. Wenn gewünscht, kann von dort ein Chat gestartet werden.

## Und was ist mit Spam?

- Nachrichten in üblichen Spam-Ordnern werden ignoriert; Adressen darin werden nicht als bekannte Kontakte behandelt.
- Nachrichten von unbekannten Kontakten tauchen nicht automatisch auf. Normalerweise gibt es einfach **keinen Spam**.
- Wenn es aber notwendig werden sollte, können auch Kontakte **geblockt** werden.

## Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja. Neben normalem Text werden alle E-Mail-Anhänge als zusätzliche Nachrichten angezeigt. Beim Absenden werden die Anhänge automatisch an die richtige Nachricht angehängt.

## Unterstützt Delta Chat HTML-E-Mails?

- Ja. Wenn eine erhaltene E-Mail keinen einfachen Text enthält, wird eine HTML-Mail automatisch zu Text konvertiert. Ausgehende E-Mails sind immer in einfachem Text.

# Gruppen {#groups}

## Erstellung von Gruppen

- Wählen Sie **Gruppe hinzufügen** aus dem "Sandwich-Menü" in der oberen rechten Ecke der Chat-Übersicht.
- Wählen Sie auf dem folgenden Bildschirm die **Gruppenmitglieder** aus und klicken Sie auf das Häkchen in der oberen rechten Ecke. Danach können Sie einen **Gruppennamen** festlegen.
- Sobald Sie die **erste Nachricht** in die Gruppe schreiben, werden alle Mitglieder über die neue Gruppe informiert und können in der Gruppe antworten (solange Sie keine Nachricht in die Gruppe schreiben, ist die Gruppe für die Gruppenmitglieder nicht sichtbar).

## Kontakte zu einer Gruppe hinzufügen

- Jedes Gruppenmitglied hat **dieselben Rechte** wie jedes andere. Jeder kann daher jeden löschen oder weitere Mitglieder hinzufügen.
- Um die Mitglieder zu verwalten, einfach in der Gruppe auf den Gruppennamen klicken.

## Was ist eine verifizierte Gruppe?

- Verifizierte Gruppen sind ein experimentelles Feature.
  Indem man sich gegenseitig durch QR-Code-Scans hinzufügt, kann eine Gruppe von
  verifizierten Mitgliedern miteinander schreiben. Verifizierte Ende-zu-Ende-Verschlüsselung
  schützt die Gruppe gegen Provider- oder Netzwerk-Angriffe. Allerdings ist die Implementierung
  durch Nutzer*innen-Tests und Feedback immer wieder Änderungen unterworfen.
  Aktuelle Diskussionen gibt es hier: https://countermitm.readthedocs.io/en/latest/new.html

## Ich habe mich selbst versehentlich gelöscht.

- Wenn man kein Gruppenmitglied mehr ist, kann man sich nicht selbst wieder hinzufügen.
  Allerdings kannst du natürlich andere Gruppenmitglieder in einem normalen Chat fragen,
  ob sie dich wieder hinzufügen.

## Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Entferne dich entweder aus der Liste der Mitglieder oder lösche den ganzen Chat.
  Wenn du der Gruppe später wieder beitreten willst, frag andere aus der Gruppe,
  ob sie dich wieder hinzufügen können.

- Eine Alternative ist, eine Gruppe stumm zu schalten. Du erhältst immer noch alle Nachrichten
  und kannst immer noch schreiben, aber wirst nicht länger benachrichtigt, wenn neue Nachrichten 
  ankommen.

# Verschlüsselung {#encryption}

## Unterstützt Delta Chat eine Ende-zu-Ende-Verschlüsselung?

- Ja. Delta Chat implementiert den Autocrypt Level 1 Standart und kann
  dadurch Ende-zu-Ende-verschlüsselte Nachrichten mit anderen 
  Autocrypt-Apps und -Programmen austauschen. 

## Was muss ich tun, um die Ende-zu-Ende-Verschlüsselung zu aktivieren?

- Nichts.

- Delta Chat apps (und andere [Autocrypt](https://autocrypt.org)-kompatible
  E-Mail Programme) tauschen bei der ersten Nachricht automatisch die Schlüssel
  aus, die für die Ende-zu-Ende-Verschlüsselung benötigt werden.
  Danach werden alle folgenden Nachrichten automatisch Ende-zu-Ende 
  verschlüsselt. Wenn einer der Konrakte eine nicht-Autocrypt-App verwenden,
  werden folgende Nachrichten nicht verschlüsselt, bis wieder eine Autocrypt-App
  verfügbar ist. 

- In den erweiterten Einstellungen kann man die 
  Ende-zu-Ende-Verschlüsselung abschalten, wenn gewünscht.

## Wird ohne Ende-zu-Ende-Verschlüsselung gar nicht verschlüsselt?

- Doch. Mit den meisten Mail-Servern wird ohnehin _Transporverschlüsselung_ (TLS) verwendet.


## Wie kann ich die Verschlüsselung überprüfen?

- Wenn ein kleines Schloss neben der Nachricht angezeigt wird, heißt 
  das, dass die Nachricht Ende-zu-Ende verschlüsselt wurde, _und_ 
  tatsächlich vom Sender stammt, _und_ dass deine Antwort auch
  Ende-zu-Ende-verschlüsselt sein wird.

- Wenn **kein Schloss** angezeigt wird, wird die Nachricht normalerweise unverschlüsselt 
  übermittelt; entweder weil du oder dein Kontakt die Ende-zu-Ende-Verschlüsselung
  abgeschalten habt, oder weil die App deines Kontakts die Ende-zu-Ende-Verschlüsselung
  nicht unterstützt.


## Wie kann ich den Absender überprüfen?

Das Nutzerprofil zeigt einige zusätzliche Information:

- Tippe auf "QR-Einladungscode" auf Android, und dann benutze den "QR-Code
  scannen"-Button auf anderen Geräten. Wenn beide Geräte online sind, werden 
  sie einen Channel miteinander aufbauen (wenn der nicht bereits existiert), und 
  die Schlüssel werden ebenfalls verifiziert. 

- Für Ende-zu-Ende-Verschlüsselung zeigt Delta Chat zwei einzigartige Zahlen als 
  Fingerabdrücke an. Wenn dieselben Zahlen auch auf dem Gerät deines Kontakts
  auftauchen, ist die Verbindung sicher.

- Bei der Transportverschlüsselung wird dieser Zustand dort nur angezeigt.


## Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

- OpenPGP. Der Schlüsselaustausch findet automatisch über den [Autocrypt](https://autocrypt.org)-Standard statt.

## Kann ich meinen existierenden privaten Schlüssel weiter verwenden?

- Ja. Der beste Weg ist eine Autocrypt Setup Message vom anderen 
  E-Mail-Programm zu senden. Halte in den Einstellungen des anderen 
  Programms nach einem **Autocrypt Setup Transfer** Ausschau, und
  folge der Anleitung dort.

- Alternativ kannst du auch den Schlüssel manuell in den erweiterten Einstellungen 
  importieren. Der Schlüssel darf dafür nicht mit einem Passwort geschützt sein; eventuell
  muss das Passwort vorher entfernt werden.

Wenn Sie keinen Schlüssel besitzen oder nicht einmal wissen, dass Sie einen benötigen - keine Sorge: Delta Chat erstellt einen Schlüssel, wenn er benötigt wird.

## Ich kann meinen existierenden PGP-Schlüssel nicht in Delta Chat importieren.

Im Allgemeinen sollte Delta Chat die meisten Formate von privaten Schlüsseln
unterstützen. Natürlich ist es unwahrscheinlich, dass wir 100% aller Schlüssel aus
allen Quellen unterstützen können. Das ist außerdem nicht der Hauptfokus von
Delta Chat (tatsächlich haben die meisten Delta Chat-Nutzer*innen wahrscheinlich
gar keinen Schlüssel, bevor sie anfangen, Delta zu benutzen). Wir versuchen aber,
private Schlüssel aus anderen Quellen so gut wie möglich zu unterstützen. 

Die Chance ist sehr hoch, dass dein Schlüssel verschlüsselt ist, oder mit einem
Passwort geschützt ist. Solche Schlüssel werden nicht von Delta Chat unterstützt.
Bitte entferne das Passwort oder die Verschlüsselung und versuche es noch mal.

Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.

# Mehrere Geräte verwenden {#multiclient}

## Can I use Delta Chat on multiple devices at the same time?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to sync their encryption capabilities: 

- Wählen Sie auf dem ersten Gerät "Weitere Einstellungen / Autocrypt-Setup-Nachricht versenden"
und klicken Sie, bis ein "Setup-Code" angezeigt wird. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it, which should prompt you for the security number. 

- You are now synchronized, and can use both devices for
  sending and receiving E2E-encrypted messages with your communication partners. 

# Verschiedenes {#miscellaneous}

## Funktioniert Delta Chat mit _meinem_ E-Mail-Anbieter?

- Mit ziemlich hoher Wahrscheinlichkeit: Ja :) 
Allerdings benötigen einige Anbieter besondere Optionen, um ordnungsgemäß zu funktionieren; eine von Nutzern erstellte Sammlung zu einigen Optionen findet sich unter [Provider Overview](https://support.delta.chat/t/provider-overview/).


## Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- See [Standards used in Delta Chat]({% include standards-url %}).
