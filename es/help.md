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
- _No Spam_ - only messages of known users are shown by default.
- _End-to-end-encryption_ via Autocrypt.
- _Copyleft_ and _Standards_ based libre software.
- _Flexible identity_ with built-in support for [multiple accounts](#multiple-accounts)


### ¿Qué mensajes se muestran en Delta Chat?

By default, Delta Chat shows all e-mails.

At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost. This is the default setting.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### ¿Delta Chat soporta envío de imágenes, videos, documentos y otros archivos?

- Si. Además del texto sin formato, todos los archivos adjuntos de correo electrónico se muestran como mensajes separados. Los mensajes salientes obtienen archivos adjuntos según sea necesario automáticamente.

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#can-i-use-delta-chat-on-multiple-devices-at-the-same-time).

### ¿Quién ve mi foto de perfil?

- Puede agregar una foto de perfil en su configuración. Si escribe a sus contactos
o los agrega a través de un código QR, ellos lo verán automáticamente como su foto de perfil.

- Los contactos que no usen Delta Chat no verán la foto de perfil
  (a menos que instalen Delta Chat :)

- Por cuestiones de privacidad, nadie verá su foto de perfil hasta que les escriba un mensaje.

- Su foto de perfil no se envía con cada mensaje, pero con la frecuencia suficiente para
que sus contactos vuelvan a recibir su foto de perfil, incluso si agregan un nuevo
dispositivo.


### ¿Delta Chat soporta mensajes con formato HTML?

- Si. Si se necesita, los mensajes entrantes mostrarán un aviso de "Mostrar mensaje completo". E-mails salientes siempre se harán en texto plano


### ¿Por qué debo ingresar mi contraseña de correo electrónico en Delta Chat? ¿Es esto seguro?

Al igual que con otros programas de correo electrónico como Thunderbird, K9-Mail o Outlook, el
programa necesita la contraseña para que pueda usarla para enviar correos. Por supuesto, la
contraseña se almacena solo en su dispositivo. La contraseña solo se transmite a
su proveedor de correo electrónico (cuando inicia sesión), que tiene acceso a sus correos de todos modos.

Si utiliza un proveedor de correo electrónico con soporte de OAuth2 como gmail.com o yandex.ru,
no es necesario almacenar su contraseña en el dispositivo. En este caso, solo se usa un
token de acceso.

Como Delta Chat es de Código Abierto, puedes investigar el Código Fuente si quieres verificar que tus credenciales son gestionadas de manera segura.
Estamos felices de recibir críticas que hagan la aplicación más segura para todos los usuarios.


### ¿Qué permisos necesita Delta Chat?

Dependiendo del sistema operativo en uso,
quizás se te solicite garantizar permisos a la app.
Esto es lo que hace Delta Chat con esos permisos:

- Camera *(puede ser desactivada)*
  - tomar fotos y videos: para enviar fotos
- Contactos *(puede ser desactivado)*
  - lectura de tus contactos: para descubrir con que contactos chatear
- Ubicación *(puede ser desactivada)*
  - acceder a la ubicación aproximada (recursos de localización en red): para la función de transmitir ubicación
  - acceder a la ubicación precisa (recursos de ubicación en red y GPS): para la función de transmitir ubicación
- Micrófono *(puede ser desactivado)*
  - grabar audio: para mensajes de audio
- Almacenamiento *(puede ser desactivado)*
  - modificar o borrar el contenido de tu tarjeta SD: para descargar los adjuntos de los mensajes
  - leer el contenido de tu tarjeta SD: para compartir archivos con tus contactos
- Otras capacidades de la app
  - modificar los ajustes de audio: así puedas elegir los ringtones y volumen para las notificaciones y mensajes de audio
  - lanzarse al inicio: así no tengas que iniciar Delta Chat de forma manual
  - control de vibración: para notificaciones
  - observar las conexiones de red: para conectarte a tu proveedor de correo electrónico
  - evitar que el teléfono duerma: así puedes copiar de forma sencilla el código de seguridad durante el mensaje de configuración de autoencriptación
  - tener acceso completo a la red: para conectarse a tu servidor de correo electrónico
  - mirar las conexiones de Wi-Fi: para conectarse a tu servidor de correo electrónico
  - ignorar optimizaciones de batería: para los usuarios que deseen recibir notificaciones en todo momento

### ¿Qué significa fijar, mutear, archivar?

Usa estas herramientas para organizar tus chats y mantener todo en su lugar:

- **Chats fijados** siempre se mantienen al frente de tu listado. Puedes usarlos para acceder a tus chats preferidos de forma rápida o temporal para no olvidarte de tus cosas. 

- **Chats muteados** si no quieres recibir notificaciones de ellos. Chats muteados se mantienen en su lugar e inclusive puedes fijarlos.

- **Archive chats** if you do not want to see them in your chat list any longer.
  Archived chats remain accessible above the chat list or via search. 

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [private app](#private-apps--webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


## Grupos

### Creación de un grupo

- Selecciona **Nuevo chat** y luego **Nuevo grupo** del menu en el sector superior derecho o toca en el botón correspondiente en Android/iOS.
- En la siguiente pantalla selecciona a los **miembros del grupo** y define un **nombre de grupo**. Tambien puedes seleccionar un **avatar de grupo**.
- Tan pronto escribas el **primer mensaje** en el grupo, todos los miembros serán informados sobre el nuevo grupo y podrán responder en él (mientras no escribas un mensaje será invisible para los miembros).


### Agregar miembros a un grupo

- Todos los miembros del grupo tienen los **mismos derechos** que los demás. Por esta razón, todos pueden eliminar o añadir miembros al grupo.
- Para añadir o eliminar miembros, haga clic en el nombre del grupo en la pantalla de chat.


### Me he eliminado por accidente.

- Como ya no eres miembro del grupo, no puedes volver a agregarte.
Sin embargo, no hay problema, solo pídale a cualquier otro miembro del grupo en un chat normal que lo vuelva a agregar.


### No quiero recibir más los mensajes de un grupo.

- Elimínate de la lista de miembros o elimina todo el chat.
Si desea unirse al grupo nuevamente más tarde, pídale a otro miembro del grupo que lo agregue nuevamente.

- Como alternativa, también puede "silenciar" a un grupo, lo que significa que recibirá todos los mensajes y
aún puede escribir, pero ya no se le notifican nuevos mensajes.


### ¿Qué significan las marcas que se muestran junto a los mensajes salientes?

- **Una marca** significa que el mensaje se ha enviado correctamente a su proveedor.
- **Dos marcas** significan que al menos el dispositivo de un destinatario
ha informado de tener recibido el mensaje.
- Es posible que los destinatarios hayan desactivado recibos de lectura,
por lo que aunque sólo veas una marca, el mensaje puede haber sido leído.
- A la inversa, dos marcas no significan automáticamente que un humano haya leído o entendido el mensaje ;)


### What happens if I turn on "Delete old messages from server"?

- By default, Delta Chat stores all messages locally on your device. If you
  e.g. want to save storage space at your mail provider, you can choose to
  delete old messages automatically. They still remain on your device until you
  delete them there, too.
- To turn it on, go to "delete old messages from server" in the "Chats & Media"
  settings. You can set a timeframe between "at once" and "after a year"; this
  way, *all* e-mails will be deleted from the server after that timeframe. 
- Note that if you use Delta Chat on more than one device, you should leave the
  messages on the server, until the other device could download them, too. In
  this case, you should set auto-delete to "after a day" or something similar,
  depending on how often you turn on the other device.


### What happens if I turn on "Delete old messages from device"?

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

### ¿Delta Chat permite cifrado de extremo a extremo?

- Si. Delta Chat implementa el estándar Autocrypt Nivel 1 y, por lo tanto, puede cifrar E2E mensajes con otras aplicaciones compatibles con Autocrypt.

- Delta Chat también soporta una forma potente de encriptación punto a punto que es 
  más segura contra ataques activos, leer "grupos verificados" más abajo.


### ¿Qué debo hacer para activar el cifrado de extremo a extremo?

- Nada.

- Las aplicaciones de Delta Chat (y otras aplicaciones de correo electrónico compatibles con [Autocrypt](https://autocrypt.org)) comparten las claves necesarias para el cifrado de extremo a extremo automáticamente a medida que se envían los primeros mensajes.
Después de esto, todos los mensajes subsiguientes se cifran de extremo a extremo automáticamente.
Si uno de los compañeros de chat usa una aplicación de correo electrónico que no soporta Autocrypt, los mensajes no se cifrarán hasta que una aplicación compatible con Autocrypt sea utilizada.

- Si quieres evitar la encriptación punto a punto de los mails por defecto, 
  usar los ajustes correspondientes de autoencriptación en "Ajustes" o "Ajustes avanzados".


### Si el cifrado de extremo a extremo no está disponible, ¿la conexión no está cifrada?

- Con la mayoría de los servidores de correo, Delta Chat establece _cifrado del transporte_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  Eso sólo asegura la conexión entre su dispositivo y su servidor de correo electrónico.
Mientras que el cifrado de extremo a extremo proporciona seguridad entre
tu dispositivo y el de un amigo.


### ¿Cómo puedo verificar el estado criptográfico con un remitente?

Si se encuentra a una distancia inmediata del compañero de chat:

- Select **QR Invite code** on one device and then **Scan QR code**
  on the other one and scan the code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified.  Both will see a
  "sender verified" system message in their 1:1 chat. 

If you are not near the chat partner, you can check the status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop):

- Para el cifrado de extremo a extremo, Delta Chat muestra dos huellas digitales allí.
Si aparecen las mismas huellas digitales en el dispositivo de su compañero de chat,
la conexión es segura.

- Para el cifrado de transporte, este estado se muestra allí.


### ¿Cómo puedo verificar el cifrado de mensajes?

- A little **padlock** shown beside a message denotes whether the message is end-to-end-encrypted from from the given sender.

- Si no hay **ningún candado**, el mensaje generalmente se transporta sin encriptar, por ejemplo. porque usted o el remitente han deshabilitado el cifrado de extremo a extremo, o el remitente utiliza una aplicación que no admite el cifrado de extremo a extremo.


### How can I ensure message encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is creating a verified group and turning on
self-destructing messages.

Verified groups are always encrypted and protected against [MITM
attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Metadata can't be encrypted, as the server needs to know where to deliver your
messages. But turning on "self-destructing messages" deletes the messages on
the server after they were delivered.

If you need the messages on your device, but not on the server, you can also
agree in the group to turn on ["delete messages from server
automatically"](#what-happens-if-i-turn-on-delete-old-messages-from-server).

If you want to protect a 1:1 conversation like this, you should create a
verified group with only 2 people. If the other person loses their device but
not their account, you can still communicate in the 1:1 chat. ([Read more](#what-is-the-difference-between-verified-groups-and-11-chats-with-verified-contacts))


### ¿Qué estándares se utilizan para el cifrado de extremo a extremo?

- [Autocrypt](https://autocrypt.org) se utiliza para establecer
cifrado de extremo a extremo con otras aplicaciones de Delta Chat y otras aplicaciones de correo compatibles con Autocrypt.
Autocrypt utiliza un subconjunto limitado de la funcionalidad OpenPGP.

- Delta Chat implements [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) to achieve protection against active network attacks.  This goes beyond the opportunistic
  base protection of Autocrypt Level 1, while maintaining its ease of use.  

### ¿Cuál es la diferencia entre grupos verificados y chats 1:1 con contactos verificados?

- Los chats 1:1 con un contacto verificado y los grupos verificados no son lo mismo, incluso
si sólo hay 2 personas en el grupo verificado. Una diferencia es que tu
puedes fácilmente añadir más personas al grupo, pero también hay otras implicaciones.

- Los grupos verificados son invariablemente seguros. Cualquier infracción (texto plan o mensajes firmados erróneamente etc.) se marcará y dichos mensajes no se mostrarán en
este chat. Puede confiar en que todos los mensajes de este chat verificado
no han sido leídos/alterados por intermediarios.

- Los chats 1:1 son oportunistas, para que la gente se comunique sin importar
una cambia de clientes de correo electrónico, dispositivos, configuraciones, etc. Por eso
no nay una marca de verificación, aunque hayas verificado el contacto.


### ¿Delta Chat admite Perfect Forward Secrecy?

- No, OpenPGP no soporta secreto perfecto hacia adelante. El Perfect Forward Secrecy
funciona orientado a sesiones, pero el correo electrónico es asíncrono por naturaleza
y a menudo se utiliza desde múltiples dispositivos de forma independiente. Eso significa que si su
clave privada de Delta Chat se filtra, y alguien tiene un registro
de todos tus mensajes en tránsito, podrán leerlos.

- Tenga en cuenta que si alguien ha incautado o hackeado su teléfono en funcionamiento, que se puede
leer todos los mensajes, no importa si Perfect Forward Secrecy
está activado o no. Tener acceso a un solo dispositivo de un miembro de un grupo
normalmente expondrá gran parte del grafo social. Utilizar direcciones de correo electrónico que
no son fácilmente rastreables hasta las personas puede ayudar a los miembros del grupo a permanecer más seguros de
los efectos de la incautación de dispositivos.

- Estamos esbozando formas de proteger mejor las comunicaciones contra el evento
de incautación del dispositivo.


### ¿Cómo protege Delta Chat mis metadatos?

- Como Delta Chat es un mensajero descentralizado, los metadatos de los usuarios de Delta Chat
no se almacenan en un único servidor central. Sin embargo, se almacenan en los servidores de correo
del remitente y del destinatario de un mensaje.

- Actualmente, cada servidor de correo sabe quién envió y quién recibió un mensaje por
inspección de las cabeceras no encriptadas Para/Cc y así determinar qué direcciones de correo electrónico
forman parte de un grupo. Delta Chat podría evitar por completo las cabeceras Para/Cc sin cifrar
y ponerlas siempre sólo en la sección cifrada. Véase
[Evitar el envío de cabeceras Para/CC para grupos verificados](https://github.com/deltachat/deltachat-core-rust/issues/1032).
Para los chats oportunistas, la preocupación principal es cómo afecta otras aplicaciones de correo que
puedan participar en los chats.

- Muchos otros cabeceras de correo electrónico, en particular la cabecera "Asunto", están protegidas por cifrado de extremo a extremo, 
véase también este [IETF
RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### ¿Puedo reutilizar mi llave privada existente?

- Si. La mejor manera es enviar un Mensaje de Configuración de Autocrypt desde el otro cliente de correo electrónico. Busca algo como **Iniciar la Transferencia de la Configuración Autocrypt** en la configuración del otro cliente y seguir las instrucciones que se muestren allí.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Si no tienes una llave o ni siquiera sabes para qué la necesitas, no te preocupes: Delta Chat genera una según sea necesario de forma automática, no tienes que hacer nada.


### No puedo importar mi clave PGP existente en Delta Chat.

The most likely cause is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You could remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that private keys from all sources will be fully supported. This
is not the main goal of Delta Chat. In fact, the majority of new users 
will not have any key prior to using Delta Chat.
We do, however, try to support private keys from as many sources as possible. 

Removing the password from the private key will depend on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you should be able to find a solution online.


## Múltiples dispositivos {#multiclient}

### ¿Puedo usar Delta Chat en varios dispositivos al mismo tiempo?

Yes. Delta Chat 1.36 comes with a new, experimental function for using the same account on different devices:

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- On the second device, [install Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- Transfer should start after a few seconds and during transfer both devices will show the **progress**.
  Wait until it is finished on both devices.

In contrast to many other messengers, after successful transfer,
both **devices are completely independent.**
One device is not needed for the other to work.


### Troubleshooting

- Double-check both devices are in the **same Wi-Fi or network**

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple accounts per device, just [add another account](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer

This method is only recommended if "Add Second Device" as described above does not work.

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### ¿Tienen planeado crear un cliente web de Delta Chat?

- No hay planes inmediatos, pero sí algunas ideas preliminares.
- Hay 2-3 vías para introducir un cliente web de Delta Chat, pero todas son
trabajo significativo. Por ahora, nos centramos en conseguir versiones estables en todas las
tiendas de aplicaciones (Google Play/iOS/Windows/macOS/Linux repositorios) como aplicaciones nativas.
- Si necesitas un cliente web, porque no tienes permiso para instalar software en
el ordenador con que trabajas, puedes utilizar el cliente portátil Windows Desktop Client
o el AppImage para Linux. Puedes encontrarlos en
[get.delta.chat](https://get.delta.chat).


### ¿Para qué sirve la configuración "Enviar autocopia"?

Enviar una copia de sus mensajes a usted mismo asegura que recibirá sus propios mensajes en todos los dispositivos. Si tiene varios dispositivos y no habilita esta opción, solo verá los mensajes de otras personas y los mensajes que envíe desde el dispositivo actual.

La copia se envía a la bandeja de entrada y luego se mueve a la carpeta DeltaChat; no se coloca en la carpeta "Enviados". Delta Chat *nunca* carga nada en la carpeta Enviados porque esto significaría cargar un mensaje dos veces (una a través de SMTP y otra a través de IMAP en la carpeta Enviados).

La configuración predeterminada para "Enviar autocopia" es "no".

### ¿Por qué puedo elegir monitorear la carpeta "Enviados"?

La única razón por la que uno quiere ver la carpeta Enviados es si está utilizando otro
programa de correo (como Thunderbird) a la vez que su aplicación Delta Chat, y desea que su MUA
también participe en conversaciones de chat.

No obstante, recomendamos utilizar el cliente de escritorio Delta Chat; puede descargarlo
en [get.delta.chat](https://get.delta.chat). La opción de observar la carpeta "Enviados"
podría desaparecer en el futuro. Se introdujo en un momento en que no había
cliente Delta Chat Desktop disponible en todas las plataformas.

### ¿Por qué puedo elegir no monitorear la carpeta DeltaChat?

Algunas personas usan Delta Chat como un cliente de correo electrónico normal y desean mantener los correos en la bandeja de entrada, en lugar de la carpeta DeltaChat. Si deshabilita "Monitorear carpeta DeltaChat", también debe deshabilitar "mover automáticamente a la carpeta DeltaChat".
De lo contrario, eliminar mensajes o configuraciones de dispositivos múltiples podría no funcionar correctamente.


## Private Apps / webxdc

In Delta Chat, you can share "private apps", attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger. The technical term is [webxdc](https://webxdc.org).


### How private are private apps?

- Private apps can not send data to the Internet, or download anything.
- A private app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a private app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the private app as well.
- This also means: it can be a privacy risk to open private apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get private apps?

- In general, there is no curated appstore and Delta Chat is not responsible
  for private apps or their content. Anyone can share private apps with each
  other without restrictions.
- You can find some example apps on [webxdc.org](https://webxdc.org).
- Many people write their own private apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own private apps?

- Private apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimental Features

We are very grateful about feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. (You
like experiments? Register through "Sign up -> with Delta Chat"!)

### How can I use audio/video calls with Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "videochat instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to your jitsi/BBB room. This
  way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### ¿Qué es un grupo verificado? ¿Por qué es experimental?

- A verified group is a chat that guarantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature. 

- As of Oct 2022, "verified groups" remain an experimental feature. It is
  continuously improved and many bugs have been fixed since the original
  introduction in 2018. However, there remain cases, especially with large
  groups where inconsistencies can occur, or messages become unreadable.


### What are Broadcast Lists and how can I use them?

- With a Broadcast List you can send a message to many recipents at once; when
  they reply to you, you get the reply in your direct 1:1 chat with them. The
recipients can't see each other.
- Technically, it is an E-Mail with many recipients in BCC.
- You can turn on the feature in the "experimental features" section in the
  advanced settings. Then you can create a Broadcast List from the "New Chat"
dialog.
- In case you are using more than one device, Broadcast Lists are currently not
  synced between them.
- Messages sent to broadcast lists are not encrypted. Encryption would break
  anonymity, because then all recipients would know who else received it
  (Sending individual mails to everyone would be worse for rate limit and network
  consumption reason).


### How can I share my location with my chat partners?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat
  partners. *But:* to show the map, we need to download map tiles from
  mapbox.com, so if you *view* the map, mapbox.com is asked for the map of a
  specific area. If this is a privacy risk for you, this feature might not be
  for you. We are working on finding a decentralized alternative for Mapbox.
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### What does the experimental database encryption actually protect?

- Right now, the database encryption is still very experimental. Don't rely on
  it for protection, you should additionally use encryption of your operating
  system, if it provides any.
- The database encryption does not yet encrypt the blobs, only the rows and
  columns of the database. This more or less means that your messages are safe,
  but not your attachments.
- For iOS and Android, the encryption keys are stored in the system keychain.
  This means the encryption is as secure as the operating system it's running
  on.
- The Delta Chat desktop client doesn't offer database encryption yet, as there
  is no standard way to store the encryption keys on the different supported
  platforms.


### Why can I choose to only watch the DeltaChat folder?

Esta es una configuración experimental para algunas personas que están experimentando con reglas del lado del servidor. No todos los proveedores lo admiten, pero con algunos puede mover todos los correos con el encabezado "Chat-Version" a la carpeta DeltaChat. Normalmente, esto lo haría la aplicación Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- habilitó una regla del lado del servidor para mover todos los mensajes con el encabezado Chat-Version a la carpeta DeltaChat, y
- ha configurado la opción "Mostrar correos clásicos" en "no, solo chats".

In this case, Delta Chat doesn't need to watch the Inbox, and it's enough to only watch the DeltaChat folder.


### How can I change my account to a different e-mail address?

1. Change your address at the “Password and Account” seetings screen in Delta
   Chat, enter your password (and if necessary, server settings) for the new
   account
2. If possible, make your old e-mail provider forward all e-mails to your new
   email address
3. Tell your contacts that you changed your address. If you write this to a
   verified group, they will acknowledge this automatically.

To learn about the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Miscelaneo

### ¿Delta Chat funciona con _mi_ proveedor de correo electrónico?

- Es muy probable que sí :)
Sin embargo, algunos proveedores necesitan opciones especiales para funcionar correctamente, ver [Descripción de proveedores](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### Si Delta Chat utiliza el correo electrónico, ¿es realmente una aplicación de mensajería _instantánea_?

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in the background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occasionally. This artificial delay is usually worse on iOS than on Android.
- However, Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### ¿Delta Chat es compatible con Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is not 
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Estoy interesado en los detalles técnicos. ¿Pueden decirme más?

- Visita la página [Estándares usados en Delta Chat]({% include standards-url %}).

### Was Delta Chat independently audited for security vulnerabilities?

The Delta Chat project underwent three independent security audits in the last
years:

- In 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).

- In 2020, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's Rust [core](https://github.com/deltachat/deltachat-core-rust/),
  [IMAP](https://github.com/async-email/async-imap),
  [SMTP](https://github.com/async-email/async-smtp), and
  [TLS](https://github.com/async-email/async-native-tls) libraries.
  It did not find any critical or high-severity issues.
  The report raised a few medium-severity weaknesses -
  they are no threat to Delta Chat users on their own
  because they depend on the environment in which Delta Chat is used.
  For usability and compatibility reasons,
  we can not mitigate all of them
  and decided to provide security recommendations to threatened users.
  You can read the [full report here](../assets/blog/2020-second-security-review.pdf).

- Beginning 2023, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

### ¿Cómo se financia el desarrollo de Delta Chat?

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources:

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate End-to-End Encryption
  through [Autocrypt](https://autocrypt.org).

- The [Open Technology Fund](https://opentechfund.org) gave us a 
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app 
  and released a first Desktop app beta version, and which moreover 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-account support, improved QR-code contact and group setups and many networking improvements on all platforms.

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Beginning 2023 we got accepted in the Next Generation Internet (NGI)
  Entrust program for our "Private Decentralized Apps" proposals. 
  Exact amount is to be determined (around 100K EUR). 
  This funding supports further developments of [webxdc "apps shared in a chat"](https://webxdc.org). 

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

  [Donate Money](donate){: .cta-button}

- Por último, pero no por ello menos importante, varios expertos pro-bono y entusiastas contribuyeron
y contribuyen a los desarrollos de Delta Chat sin recibir dinero, o sólo
pequeñas cantidades. Sin ellos, Delta Chat no estaría donde está hoy, ni 
siquiera cerca.

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Please see [Delta Chat Contribution channels](https://delta.chat/en/contribute) 
for both monetary and and other contribution possibilities.  
