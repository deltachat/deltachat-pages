---
title: Hilfe
layout: default-de
---

# Hilfe

- [Allgemein](#general)
- [Gruppen](#groups)
- [Verschlüsselung](#encryption)
- [Multi-client](#multiclient)
- [Verschiedenes](#miscellaneous)

# Allgemein

## An wen kann ich schreiben?

- Mit Delta Chat können Sie an Benutzer, die Delta Chat verwenden, schreiben - und an Benutzer, die irgend einen anderen E-Mail-Client verwenden! Dies ist einer der größten Unterschiede zu anderen Messengern: Ihre Kontakte müssen _nicht_ denselben Messenger wie Sie verwenden.

## Welche Vorteile hat Delta Chat gegenüber anderen Messengern?

- _Independent_ of any company or services. _You_ own your data.
- Ihre Daten landen nicht auf zentralen Servern. So schützt Delta Chat im Gegensatz zu den meisten anderen Messengern sogar die Metadaten, d.h. wer mit wem kommuniziert
- Sie geben die Inhalte Ihres Adressbuches nicht weiter - was auch illegal ist, wenn Sie sich nicht die Zustimmung aller Ihrer Freunde, Bekannten und Geschäftspartner eingeholt haben.
- _Fast_ by the use of Push-IMAP
- _Riesige Nutzerbasis_ - Sie können auch Leute erreichen, die Delta Chat _nicht_ verwenden!
- _Kompatibel_, überprüfbar, Open Source
- _Elegant_ and _simple_ user interface
- _Distributed_ system
- _No Spam_ - only messages of known users are shown by default
- _Reliable_ - safe for professional use
- _Trustworthy_ - can even be used for business messages
- fully _Open Source_ and _Standards_ based

## Was, wenn der Empfänger kein Delta Chat verwendet?

- Der Empfänger erhält dann eine normale E-Mail, auf die er auch antworten kann. Seine Antwort erscheint dann wie gewohnt im Delta Chat Messenger

## Welche Nachrichten erscheinen in Delta Chat?

In Delta Chat erscheinen automatisch nur:

- Nachrichten von Kontakten aus Ihrem **Adressbuch**
- Nachrichten von Kontakten, die Sie **selbst kontaktiert** haben
- **Antworten** auf Ihre Nachrichten

Alle anderen Nachrichten werden _nicht_ automatisch angezeigt. Über den Menüpunkt **Kontaktanfragen** können Sie sich aber eine Übersicht der weiteren Nachrichten anzeigen lassen und gegebenenfalls einen Chat starten.

## Was ist mit Spam?

- Da Nachrichten von komplett unbekannten Absendern nicht direkt angezeigt werden, werden Sie in Delta Chat der Regel **keinen Spam** sehen.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- Bei Bedarf können Sie unerwünschte Kontakte aber jederzeit **blockieren**.

## Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja.

## Unterstützt Delta Chat HTML-E-Mails?

- Ja.

# Gruppen

## Wie kann ich eine neue Gruppe erstellen?

- Select **Add group** from the "Sandwich menu" in the upper left corner of the chat overview.
- Wählen Sie dann alle **Gruppenmitglieder** aus und klicken auf den Haken oben rechts; auf der nächsten Seite können Sie noch einen **Gruppennamen** vergeben.
- Sobald Sie eine **erste Nachricht** in der Gruppe schreiben, werden alle Gruppenmitglieder über die neue Gruppe informiert und können auch dort schreiben (solange Sie in der neuen Gruppe keine Nachricht geschrieben haben, ist sie für die anderen Mitglieder noch nicht sichtbar).

## Wer kann Mitglieder hinzufügen oder löschen?

- Jedes Gruppenmitglied hat **dieselben Rechte** wie jedes andere. Jeder kann daher jeden löschen oder weitere Mitglieder hinzufügen.
- Um die Mitglieder zu verwalten einfach in der Gruppe auf den Gruppennamen klicken.

## Ich habe mich selbst versehentlich gelöscht.

- Da Sie selbst nun kein Gruppenmitglied mehr sind, können Sie sich auch nicht selbst wieder hinzufügen. Bitten Sie ein anderes Gruppenmitglied in einem normalen Chat, Sie wieder hinzuzufügen.

## Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- **Löschen** Sie entweder sich selbst als Gruppenmitglied oder den Chat selbst. Möchten Sie später wieder an der Gruppe teilnehmen, müssen Sie von einem noch aktiven Mitglied hinzugefügt werden.
- Alternativ können Sie eine Gruppe auch nur **stummschalten** - Sie erhalten dann alle Nachrichten und können bei Bedarf auch noch schreiben; es erfolgt dann aber keine Benachrichtigung mehr bei neuen Nachrichten.

# Verschlüsselung {#encryption}

## Gibt es eine Ende-zu-Ende-Verschlüsselung?

- Ja.

## Was muss ich tun, um die Ende-zu-Ende-Verschlüsselung zu aktivieren?

- Nichts.

- Delta Chat (und andere [Autocrypt](https://autocrypt.org)-kompatible E-Mail-Programme) tauschen die Schlüssel selbständig mit den ersten versendeten Nachrichten aus.
Danach ist die Verbindung Ende-zu-Ende-verschlüsselt. Verwenden Sie oder Ihr Chatpartner zwischenzeitlich ein Programm, das nicht automatisch Ende-zu-Ende verschlüsseln kann, wird die Ende-zu-Ende-Verschlüsselung automatisch ausgesetzt - und automatisch wieder begonnen, sobald die verwendeten Programme dies unterstützten.

- If you want to _deactivate_ the end-to-end-encryption, use the corresponding setting at "Settings / Advanced settings".

## If end-to-end-encryption is not available, is the connection not encrypted at all?

- No. The normal, email-standard _transport encryption_ is used then.


## How can I check the encryption?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is send from the given sender _and_ your answer will be end-to-end-encrypted as well.
- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## How can I verify the sender?

The user's profile shows some additional information:

- For an end-to-end-encryption, Delta Chat show two fingerprints there. If they are the same on the device of your chat partner, the connection is safe.
- For transport encryption, this state is just shown there


## Which standards are used for end-to-end-encryption.

- OpenPGP. Key transport is done via [Autocrypt](https://autocrypt.org).

## Can I re-use by existing private key?

- Yes. Importing it at "Advanced settings / Manage private keys". Caution: Make sure, they key is not protected by a password or remove it before.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you have to do nothing.

# Multi-client {#multiclient}

## Can I use Delta Chat on multiple devices the same time?

- If you want to use the **same account** on different devices, you have to make sure, all devices use the same keys for encryption:

  - On the first device, choose "Advanced settings / Manage private keys / Export key to Downloads"
  - Via USB, copy the key file from the "Downloads" directory of the first device to the second one.
  - On the second device, "Advanced settings / Manage private keys / Import key from Downloads"

- All this is **not needed** for the standard usage of Delta Chat using just one device.

- NB: In multi-client mode, _incoming_ messages are shown at once on all clients. _Outgoing_ messages are synced about two times an hour. We can improve this, but we would need more [support](contribute) on this issue.


# Miscellaneous

## Delta Chat on Linux Desktop

- You can run Delta Chat on Ubuntu Linux desktop (or other linux distributions supporting the **snap**-package format) by simply installing [Anbox](https://anbox.io) (Android in a Box) from terminal:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- To add the Delta Chat application, download the *com.b44t.messenger_\<version\>.apk* file from [this](download) page and install it from terminal:

  $ *adb install path/to/com.b44t.messenger_\<version\>.apk*

  adb is the Android Debug Bridge and can be installed from repository.

- Instead of installing Delta Chat directly via APK file, you can first install the F-Froid store via [F-Droid-apk](https://f-droid.org/FDroid.apk) and then install Delta Chat using the store. The great benefit is the information about updates and the migration of existing config and chat data.


## Login Issues

I have a problem with ...

- Gmail: Enable "Support less secure apps" and IMAP, you may receive a mail to grant permission

## I'm interested in the technical details. Can you tell me more?

- See page [Standards used in Delta Chat]({% include standards-url %}).
