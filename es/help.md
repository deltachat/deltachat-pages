---
title: FAQ
lang: es
render_toc: true
header: Preguntas Frecuentes
---


## ¿Qué es Delta Chat? 

Delta Chat es una nueva aplicación de chat que envía mensajes por correo electrónico, encriptados si es posible, con Autocrypt.
**No tiene que registrarse en ningún lugar, solo use su cuenta de correo electrónico existente con Delta Chat.**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### ¿Cómo puedo encontrar personas con las que chatear? 

Con Delta Chat, puede escribir en cada dirección de correo electrónico existente - incluso
si el destinatario no está utilizando la aplicación Delta Chat. No es necesario que el
destinatario instale la misma aplicación que usted, como ocurre con otros mensajeros.


### ¿Cuáles son las ventajas de Delta Chat comparado con otras aplicaciones de mensajería?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
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


### ¿Qué mensajes se muestran en Delta Chat?

Delta Chat muestra automáticamente:

- Mensajes de contactos en tu **libreta de direcciones**
- Mensajes de contactos **contactados por ti**
- **Respuestas** a mensajes enviados por ti

Otros mensajes no aparecen automáticamente y se encuentran en el menú principal en **Solicitudes de contacto**. Si lo desea, puede iniciar un chat desde allí.


### ¿Qué pasa con el Spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there is **no spam**.
- However, if needed, you can **block** any contact.


### ¿Delta Chat soporta envío de imágenes, videos, documentos y otros archivos?

- Si. Además del texto sin formato, todos los archivos adjuntos de correo electrónico se muestran como mensajes separados. Los mensajes salientes obtienen archivos adjuntos según sea necesario automáticamente.


### ¿Quién ve mi foto de perfil?

- You can add a profile picture in your settings. If you write to your contacts
  or add them via QR code, they automatically see it as your profile picture.

- Los contactos que no usan Delta Chat lo ven como un archivo adjunto al correo electrónico.

- Por cuestiones de privacidad, nadie verá su foto de perfil hasta que les escriba un mensaje.

- Su foto de perfil no se envía con cada mensaje, pero con la frecuencia suficiente para
que sus contactos vuelvan a recibir su foto de perfil, incluso si agregan un nuevo
dispositivo.


### ¿Delta Chat soporta mensajes con formato HTML?

- Si. Si el correo electrónico entrante carece de una parte de texto sin formato, los correos electrónicos HTML se convierten en texto sin formato en la aplicación. Los correos electrónicos salientes siempre usan texto sin formato.


### ¿Por qué debo ingresar mi contraseña de correo electrónico en Delta Chat? ¿Es esto seguro?

As with other E-Mail programs like Thunderbird, K9-Mail, or Outlook, the
program needs the password so you can use it to send mails. Of course, the
password is stored only on your device. The password is only transmitted to
your E-Mail provider (when you login), which has access to your mails anyway. 

Si utiliza un proveedor de correo electrónico con soporte de OAuth2 como gmail.com o yandex.ru,
no es necesario almacenar su contraseña en el dispositivo. En este caso, solo se usa un
token de acceso.

As Delta Chat is Open Source, you can check the [Source
Code](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
if you want to verify that your credentials are handled securely. We are happy
about feedback which makes the app more secure for all of our users.


### ¿Qué permisos de Android necesita Delta Chat?

- Camera *(can be disallowed)*
  - take pictures and videos: for sending Photos
- Contacts *(can be disallowed)*
  - read your contacts: to discover contacts to chat with
- Location *(can be disallowed)*
  - access approximate location (network location sources): for the location streaming feature
  - access precise location (GPS and network location sources): for the location streaming feature
- Microphone *(can be disallowed)*
  - record audio: for audio messages
- Storage *(can be disallowed)*
  - modify or delete the contents of your SD card: to download message attachments
  - read the contents of your SD card: to share files with your contacts
- Other app capabilities
  - change your audio settings: so you can choose ring tones and volume for notifications and audio messages
  - run at startup: so you don't have to start Delta Chat manually
  - control vibration: for notifications
  - view network connections: to connect to your E-Mail provider
  - prevent phone from sleeping: so you can easier copy the security code during the Autocrypt Setup Message
  - have full network access: to connect to your E-Mail provider
  - view Wi-Fi connections: to connect to your E-Mail provider
  - ask to ignore battery optimisations: for users who want to receive messages all the time


### Grupos

### Creación de un grupo

- Seleccione **Agregar grupo** desde el "Menú sándwich" en la esquina superior derecha de la descripción del chat.
- En la siguiente vista, seleccione los **miembros del grupo** y presione la marca de verificación en la esquina superior derecha. Después de eso, usted puede definir un **nombre de grupo**.
- Tan pronto como escriba **el primer mensaje**, se le informará a todos los miembros sobre el nuevo grupo y pueden responder en el grupo (hasta que no escriba un mensaje en el grupo, este es invisible para los miembros).


### Agregar miembros a un grupo

- Todos los miembros del grupo tienen los **mismos derechos** que los demás. Por esta razón, todos pueden eliminar o añadir miembros al grupo.
- Para añadir o eliminar miembros, haga clic en el nombre del grupo en la pantalla de chat.


### ¿Qué es un grupo verificado? ¿Por qué es experimental?

- A verified group is a chat that gurantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature. 

- As of Dec 2019, a "verified group" remains an experimental feature.
  It is continously improved and many bugs have been fixed since the
  original introduction in 2018.  However, there remain cases, especially 
  with large groups where inconsistencies can occure, or messages become 
  unreadable.  Early 2020 a security review is upcoming, and several new
  developments around qr-join protocols are taking place so chances
  are we remove the "experimental" label not too far in the future. 


### Me he eliminado por accidente.

- Como ya no eres miembro del grupo, no puedes volver a agregarte.
Sin embargo, no hay problema, solo pídale a cualquier otro miembro del grupo en un chat normal que lo vuelva a agregar.


### No quiero recibir más los mensajes de un grupo.

- Elimínate de la lista de miembros o elimina todo el chat.
Si desea unirse al grupo nuevamente más tarde, pídale a otro miembro del grupo que lo agregue nuevamente.

- Como alternativa, también puede "silenciar" a un grupo, lo que significa que recibirá todos los mensajes y
aún puede escribir, pero ya no se le notifican nuevos mensajes.


## Cifrado {#encryption}

### ¿Delta Chat permite cifrado de extremo a extremo?

- Si. Delta Chat implementa el estándar Autocrypt Nivel 1 y, por lo tanto, puede cifrar E2E mensajes con otras aplicaciones compatibles con Autocrypt.


### ¿Qué debo hacer para activar el cifrado de extremo a extremo?

- Nada.

- Las aplicaciones de Delta Chat (y otras aplicaciones de correo electrónico compatibles con [Autocrypt](https://autocrypt.org)) comparten las claves necesarias para el cifrado de extremo a extremo automáticamente a medida que se envían los primeros mensajes.
Después de esto, todos los mensajes subsiguientes se cifran de extremo a extremo automáticamente.
Si uno de los compañeros de chat usa una aplicación de correo electrónico que no soporta Autocrypt, los mensajes no se cifrarán hasta que una aplicación compatible con Autocrypt sea utilizada.

- Si desea _desactivar_ el cifrado de extremo a extremo,
use la configuración correspondiente en "Ajustes / Avanzado".


### Si el cifrado de extremo a extremo no está disponible, ¿la conexión no está cifrada?

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 


### ¿Cómo puedo verificar el estado criptográfico con un remitente?

El perfil del usuario muestra información adicional:

- Puede pulsar "Código de invitación QR" en Android y luego usar el botón "Escanear código QR "
en otro dispositivo para escanear este código. Si ambos dispositivos están en línea,
comenzarán un chat entre sí (si no existe ya)
y también se verificarán las claves de cifrado. Ambos verán un
mensaje del sistema "remitente verificado" en su chat 1:1.

- Para el cifrado de extremo a extremo, Delta Chat muestra dos huellas digitales allí.
Si aparecen las mismas huellas digitales en el dispositivo de su compañero de chat,
la conexión es segura.

- Para el cifrado de transporte, este estado se muestra allí.


### ¿Cómo puedo verificar el cifrado de mensajes?

- If a little **padlock** is shown beside a message, this denotes the message is end-to-end-encrypted _and_ is sent from the given sender _and_ that your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.


### ¿Qué estándares se utilizan para el cifrado de extremo a extremo?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. Moreover, 
  Delta Chat implements the "countermitm" protocols to achieve
  protection against active network attacks, going beyond the opportunistic
  base protection of Autocrypt, see questions about "Verified Groups".


### ¿Cuál es la diferencia entre grupos verificados y chats 1:1 con contactos verificados?

- 1:1 chats with a verified contact and verified groups are not the same, even
  if there are only 2 people in the verified group. One difference is that you
  could easily add more people to the group, but there are other implications as
  well.

- Verified groups are invariably secured. Any breakage (cleartext or wrongly
  signed messages etc.) will be flagged and such messages will not be shown in
  this chat. You can trust all messages in this verified-checkmark chat to have
  not been read/altered by middle parties.

- 1:1 chats are opportunistic, it is meant to allow people to communicate no
  matter if they change e-mail clients, devices, setups etc. That's why there
  is no verification checkmark, even if you have verified the contact.


### ¿Delta Chat admite Perfect Forward Secrecy?

- No, OpenPGP doesn't support Perfect Forward Secrecy. Perfect Forward Secrecy
  works session-oriented, but E-Mail is asynchronous by nature
  and often used from multiple devices independently. This means that if your
  Delta Chat private key is leaked, and someone has a record
  of all your in-transit messages, they will be able to read them.  

- Note that if anyone has seized or hacked your running phone, they will
  typically be able to read all messages, no matter if Perfect Forward Secrecy
  is in place or not. Having access to a single device from a member of a group,
  will typically expose a lot of the social graph. Using e-mail addresses that
  are not easily tracked back to persons helps group members to stay safer from
  the effects of device seizure. 

- Estamos esbozando formas de proteger mejor las comunicaciones contra el evento
de incautación del dispositivo.


### ¿Cómo protege Delta Chat mis metadatos?

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently know about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### ¿Puedo reutilizar mi llave privada existente?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Si no tienes una llave o ni siquiera sabes para qué la necesitas, no te preocupes: Delta Chat genera una según sea necesario de forma automática, no tienes que hacer nada.


### No puedo importar mi clave PGP existente en Delta Chat.

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You may remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Format wise, Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.


### ¿Por qué no usan pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Múltiples dispositivos {#multiclient}

### ¿Puedo usar Delta Chat en varios dispositivos al mismo tiempo?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to sync their encryption capabilities: 

- En el primer dispositivo, elija "Configuración avanzada / Enviar mensaje de configuración de Autocrypt" y haga clic hasta que aparezca un "número de seguridad".

- En el otro dispositivo, espere la llega del "Mensaje de Configuración de Autocrypt"
y haga clic en él, lo cual debe solicitarle el número de seguridad.

- Ahora está sincronizado y puede usar ambos dispositivos para
enviar y recibir mensajes cifrados E2E con tus compañeros.

### Are there any plans for introducing a Delta Chat Web Client?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  appstores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


### ¿Por qué puedo elegir no monitorear la Bandeja de Entrada?

This is an experimental setting for some people who are experimenting with
server-side rules. Not all providers support this, but with some you can move
all mails with a "Chat-Version" header to the DeltaChat folder. Normally, this
would be done by the Delta Chat app.

Tiene sentido desactivar el monitoreo de la Bandeja de Entrada, si:

- habilitó una regla del lado del servidor para mover todos los mensajes con el encabezado Chat-Version a la carpeta DeltaChat, y
- ha configurado la opción "Mostrar correos clásicos" en "no, solo chats".

En este caso, Delta Chat no necesita monitorear la Bandeja de Entrada.

### ¿Para qué sirve la configuración "Enviar autocopia"?

Sending a copy of your messages to yourself ensures that you receive your own
messages on all devices. If you have multiple devices and don't turn it on, you
see only the messages from other people, and the messages you send from the
current device. 

The copy is send to the Inbox, and then moved to the DeltaChat folder; it's not
put into the "Sent" folder. Delta Chat *never* uploads anything to the Sent
folder because this would mean uploading a message twice (once through SMTP,
and once through IMAP to Sent folder).

La configuración predeterminada para "Enviar autocopia" es "no".

### ¿Por qué puedo elegir monitorear la carpeta "Enviados"?

La única razón por la que uno quiere ver la carpeta Enviados es si está utilizando otro
programa de correo (como Thunderbird) a la vez que su aplicación Delta Chat, y desea que su MUA
también participe en conversaciones de chat.

However, we recommend to use the Delta Chat Desktop Client; you can download it
on [get.delta.chat](https://get.delta.chat). The option to watch the "Sent"
folder might go away in the future. It was introduced at a time where there was
no Delta Chat Desktop client available on all platforms. 

### ¿Por qué puedo elegir no monitorear la carpeta DeltaChat?

Some people use Delta Chat as a regular email client, and want to use the Inbox
folder for their mail, instead of the DeltaChat folder. If you disable "Watch
DeltaChat folder", you should also disable "move chat messages to DeltaChat".
Otherwise, deleting messages or multi-device setups might not work properly.

## Miscelaneo

### ¿Delta Chat funciona con _mi_ proveedor de correo electrónico?

- Es muy probable que sí :)
Sin embargo, algunos proveedores necesitan opciones especiales para funcionar correctamente, ver [Descripción de proveedores](https://providers.delta.chat)


### If Delta Chat uses E-Mail, is it really an _Instant_ Messenger?

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occassionally. This artifical delay is usually worse on iOS than on Android.
- Note that Delta Chat doesn't use Google Cloud Messaging (GCM) or the Apple
  Push Notification Service (APNS), because this leads to user tracking and
  central control which Delta Chat aims to avoid as much as feasible.
- However, that Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### Is Delta Chat compatible with Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is only
  working inside their platforms, and not compatible with anyone outside.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [https://autocrypt.org/dev-status.html](Autocrypt-enabled e-mail app).


### Estoy interesado en los detalles técnicos. ¿Pueden decirme más?

- Visita la página [Estándares usados en Delta Chat]({% include standards-url %}).
