---
title: Preguntas frecuentes
layout: default-es
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Preguntas frecuentes

- [General](#general)
- [Grupos](#groups)
- [Encriptación](#encryption)
- [Multiples dispositivos](#multiclient)
- [Problemas de Login](#login-issues)

# General

## ¿Qué es Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat is a new chat app that sends messages via e-mails, encrypted if possible, with Autocrypt. 
**You do not have to sign up anywhere, just use your existing e-mail account with Delta Chat.** 

## How can I find people to chat with? 

With Delta Chat, you can write to every existing e-mail address - even
if the recipient is not using the Delta Chat app. No need for the
recipient to install the same app as yours, as with other messengers.

## Cuáles son las ventajas de Delta Chat comparado con otras aplicaciones de mensajería?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _Compatible_ - not only to itself.
- _Elegant_ and _simple_ user interface.
- _Distributed_ system.
- _No Spam_ - only messages of known users are shown by default.
- _Reliable_ - safe for professional use.
- _Trustworthy_ - can even be used for business messages.
- _Copyleft_ and _Standards_ based libre software.

## ¿Cuáles mensajes aparecerán en Delta Chat?

Delta Chat automatically shows:

- Mensajes de contactos en tu **libreta de direcciones**
- Mensajes de contactos **contactados por ti**
- **Respuestas** a mensajes enviados por ti

Other messages do not appear automatically, and are to be found in the main menu at **Contact requests**. If desired a chat can be started from there.

## What about spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there is **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat soporta envío de imágenes, vidéos, documentos y otros archivos?

- Yes. Beside the plain text, all e-mail attachments are displayed as separate messages. Outgoing messages get attachments as needed automatically.

## Does Delta Chat support HTML e-mails?

- Yes. If incoming e-mail lacks a plain text part, HTML-emails is converted to plain text in the app. Outgoing e-mails always use plain text.

# Grupos

## Creation of a group

- Seleccione **Agregar grupo** desde el "Menú sándwich" en la esquina superior derecha de la descripción del chat.
- En la siguiente vista, seleccione los **miembros del grupo** y presione la marca de verificación en la esquina superior derecha. Después de eso, usted puede definir un **nombre de grupo**.
- Tan pronto como escriba **el primer mensaje**, se le informará a todos los miembros sobre el nuevo grupo y pueden responder en el grupo (hasta que no escriba un mensaje en el grupo, este es invisible para los miembros).

## Add members to a group

- Todos los miembros del grupo tienen los **mismos derechos** que los demás. Por esta razón, todos pueden eliminar o añadir miembros al grupo.
- Para añadir o eliminar miembros, haga clic en el nombre del grupo en la pantalla de chat.

## ¿Qué es un grupo verificado?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other. It enforces e2e group encryption that is safe against provider or 
  network attacks. However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Me he eliminado a mí mismo accidentalmente de un grupo.

- As you're no longer a group member, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to re-add you.

## No quiero recibir nuevamente mensajes de un determinado grupo.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group again later on, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so means you get all messages and 
  can still write, but are no longer notified of any new messages.

# Encriptación {#encryption}

## ¿Delta Chat admite cifrado de extremo a extremo?

- Yes. Delta Chat implements the Autocrypt Level 1 standard and can 
  thus E2E-encrypt messages with other Autocrypt-capable apps. 

## Qué debo hacer para activar la encriptacin de extremo a extremo?

- Nada.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _turn off_ the end-to-end-encryption, 
  use the corresponding setting in "Settings / Advanced settings".

## Si la encriptación extremo a extremo no está disponible, toda la comunicación es insegura?

- No. With most mail servers will then use _transport encryption_ (TLS).


## Cómo puedo verificar la encriptación?

- If a little **padlock** is shown beside a message, this denotes the message is end-to-end-encrypted _and_ is sent from the given sender _and_ that your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.


## ¿Como puedo verificar el remitente?

The user's profile shows some additional info:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, the connection is safe.

- Para el cifrado de transporte, este estado se muestra allí.


## ¿qué estándares se utilizan para el cifrado punto a punto?

- OpenPGP. En el envío de las claves se realiza mediante [Autocrypt](https://autocrypt.org).

## ¿Puedo reutilizar mi llave privada existente?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Si no tienes una llave o ni siquiera sabes para qué la necesitas, no te preocupes: Delta Chat genera una según sea necesario de forma automática, no tienes que hacer nada.

## I can't import my existing PGP key into Delta Chat.

In general, Delta Chat should support "common" private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat. Please remove the
encryption and the password and try the import again.

Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.

# Multiples dispositivos {#multiclient}

## Can I use Delta Chat on multiple devices at the same time?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to sync their encryption capabilities: 

- En el primer dispositivo, elija "Configuración avanzada / Enviar mensaje de configuración de Autocrypt" y haga clic hasta que aparezca un "número de seguridad".

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it, which should prompt you for the security number. 

- You are now synchronized, and can use both devices for
  sending and receiving E2E-encrypted messages with your communication partners. 

# Miscelaneo

## ¿Delta Chat funciona con _mi_ proveedor de correo electrónico?

- Es muy probable que sí :)
Sin embargo, algunos proveedores necesitan opciones especiales para funcionar correctamente; los usuarios han recopilado algunas de ellas en el foro en [Descripción de proveedores](https://support.delta.chat/t/provider-overview/)


## Estoy interesado en los detalles técnicos. ¿Podrías decirme más?

- See [Standards used in Delta Chat]({% include standards-url %}).
