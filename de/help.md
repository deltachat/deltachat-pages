---
title: Hilfe
layout: default-de
---



<!-- GENERATED FILE -- DO NOT EDIT -->



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
- Your data are not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP
- _Largest userbase_ - receivers _not_ using Delta Chat can be reached as well
- _Compatible_ - not only to itself
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

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Alle anderen Nachrichten werden _nicht_ automatisch angezeigt. Über den Menüpunkt **Kontaktanfragen** können Sie sich aber eine Übersicht der weiteren Nachrichten anzeigen lassen und gegebenenfalls einen Chat starten.

## Was ist mit Spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## Unterstützt Delta Chat Bilder, Videos und Dateianhänge?

- Ja.

## Unterstützt Delta Chat HTML-E-Mails?

- Ja.

# Gruppen

## Wie kann ich eine neue Gruppe erstellen?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## Who to add members to a group?

- Jedes Gruppenmitglied hat **dieselben Rechte** wie jedes andere. Jeder kann daher jeden löschen oder weitere Mitglieder hinzufügen.
- Um die Mitglieder zu verwalten einfach in der Gruppe auf den Gruppennamen klicken.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Ich habe mich selbst versehentlich gelöscht.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## Ich möchte keine Nachrichten einer Gruppe mehr empfangen.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Verschlüsselung {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Was muss ich tun, um die Ende-zu-Ende-Verschlüsselung zu aktivieren?

- Nichts.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Wird ohne Ende-zu-Ende-Verschlüsselung gar nicht verschlüsselt?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Wie kann ich die Verschlüsselung überprüfen?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Wie kann ich den Absender überprüfen?

Den angegebenen Absender können Sie im Profil des Chatpartners unter der die Option "Verschlüsselung" überprüfen:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Welches Verfahren wird für die Ende-zu-Ende-Verschlüsselung verwendet?

- OpenPGP. Der Schlüsselaustausch findet automatisch über den [Autocrypt](https://autocrypt.org)-Standard statt.

## Can I re-use my existing private key?

- Ja. Der beste Weg ist, in der anderen E-Mail-App eine _Autocrypt Setup Message_ loszuschicken. Eine solche Option finden Sie in den Einstellungen der anderen App z.B. unter "Autocrypt Setup Transfer starten"; folgen Sie dann den dort angezeigten Hinweisen.

- Alternativ können Schlüssel unter "Erweiterte Einstellungen / Schlüssel verwalten" importiert werden. Achtung: Der private Schlüssel darf nicht mit einem Passwort geschützt sein, bzw. dieses muss bei Bedarf zuvor entfernt werden.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Mehrere Geräte verwenden {#multiclient}

## Kann ich Delta Chat auf mehreren Geräten gleichzeitig verwenden?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Verschiedenes

## Funktioniert Delta Chat mit _meinem_ E-Mail-Anbieter?

- Mit ziemlich hoher Wahrscheinlichkeit: Ja :) 
Allerdings benötigen einige Anbieter besondere Optionen um ordnungsgemäß zu funktionieren; Eine von Nutzern erstellte Sammlung zu einigen Optionen findet sich unter [Provider Overview](https://support.delta.chat/t/provider-overview/)


## Ich bin an technischen Details interessiert. Gibt es hierzu weitere Infos?

- Ja, auf der Seite [Standards used in Delta Chat]({% include standards-url %}).
