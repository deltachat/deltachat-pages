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

## A quién podré escribir mensajes?

- Con Delta Chat pude escribir mensajes instantáneos a cualquier otro usuario de Delta Chat, y a cualquier otro usuario de correo electrónico. Esta es una de las principales diferencias de Delta Chat con cualquier otro mensajero: El contacto destinatario no necesita tener instalada la misma aplicación que usted.

## Cuáles son las ventajas de Delta Chat comparado con otros mensajeros?

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

## ¿Qué pasa si el receptor no usa Delta Chat?

- El destinatario recibirá un correo electrónico normal, y si le responde a usted, usted verá la respuesta en Delta Chat tal como espera.

## ¿Cuales mensajes aparecerán el Delta Chat?

Delta Chat muestra automáticamente...

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Otros mensajes no aparecen automáticamente. Podes verlos en el menú principal en **Solicitudes de contacto** y, si querés, iniciar una conversación desde ahí.

## ¿Qué pasa con el Spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat soporta envío de imágenes, vidéos, documentos y otros archivos?

- Sí. Además del texto puro del mensaje, también se mostrarán los archivos adjuntos al mensaje. En los mensajes enviados se adjuntarán los archivos que usted quiera compartir.

## Delta Chat soporta mensajes con formato HTML?

- Sí. Incluso si le envian mensajes HTML a usted, el texto será convertido automaticamente para que usted pueda leerlo en la aplicación. Los mensajes enviados serán en formato de texto puro. 

# Grupos

## Cómo puedo crear grupos de chat?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## Who to add members to a group?

- Todos los miembros del grupo tienen los **mismos derechos** que los demás. Por esta razón, todos pueden eliminar o añadir miembros al grupo.
- Para añadir o eliminar miembros, haga clic en el nombre del grupo en la pantalla de chat.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Me he eliminado a mí mismo accidentalmente de un grupo.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## No quiero recibir nuevamente mensajes de un determinado grupo.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Encriptación {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Qué debo hacer para activar la encriptacin de extremo a extremo?

- Nada.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Si la encriptación extremo a extremo no está disponible, toda la comunicación es insegura?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Cómo puedo verificar la encriptación?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## ¿Como puedo verificar el remitente?

El perfile del usuario muestra información adicional:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## ¿qué estándares se utilizan para el cifrado punto a punto?

- OpenPGP. En el envío de las claves se realiza mediante [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for sth. like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually at "Advanced settings / Manage private keys". Caution: Make sure, the key is not protected by a password or remove it before.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Multiples dispositivos {#multiclient}

## Puedo usar Delta Chat en varios dispositivos al mismo tiempo?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Miscelaneo

## Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly; users have collected some of them in the forum at [Provider Overview](https://support.delta.chat/t/provider-overview/)


## Estoy interesado en los detalles técnicos. ¿Podrías decirme más?

-- Visitá la pagina [Estándares usados en Delta Chat]({% include standards-url %}).
