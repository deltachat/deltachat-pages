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

- _Independiente_ de cualquier empresa o servicio. _Usted_ es dueño de sus datos.
- Sus datos no se guardan en un servidor central a menos que todos los usuarios estén usando
los mismos servidores de correo electrónico
- No distribuye su libreta de direcciones a nadie.
- _Rápido_ mediante el uso de Push-IMAP.
- _La base de usuarios más grande_ - destinatarios que _no_ usen Delta Chat pueden ser contactados también.
- _Compatible_ - no solo con sí mismo.
- Interfaz de usuario _elegante_ y _simple_.
- Sistema _distribuido._
- _No Spam_: solo se muestran mensajes de usuarios conocidos de forma predeterminada.
- _Reliable_ - seguro para uso profesional.
- _Confiable_ - incluso se puede usar en entornos empresariales.
- Software _libre_ basado en _estándares._


### ¿Qué mensajes se muestran en Delta Chat?

Delta Chat muestra automáticamente:

- Mensajes de contactos en tu **libreta de direcciones**
- Mensajes de contactos **contactados por ti**
- **Respuestas** a mensajes enviados por ti

Otros mensajes no aparecen automáticamente, y se pueden encontrar en **Solicitudes de contacto**. Si se desea el chat se puede iniciar desde allí


### ¿Qué pasa con el Spam?

- Se ignoran los mensajes en carpetas de spam comunes, y las direcciones que contienen no se consideran contactos conocidos.
- Como los mensajes de contactos desconocidos no aparecen automáticamente, normalmente **no hay spam**.
- De todas formas, de ser necesario, puedes **bloquear** cualquier contacto.


### ¿Delta Chat soporta envío de imágenes, videos, documentos y otros archivos?

- Si. Además del texto sin formato, todos los archivos adjuntos de correo electrónico se muestran como mensajes separados. Los mensajes salientes obtienen archivos adjuntos según sea necesario automáticamente.


### ¿Quién ve mi foto de perfil?

- Puede agregar una foto de perfil en su configuración. Si escribe a sus contactos
o los agrega a través de un código QR, ellos lo verán automáticamente como su foto de perfil.

- Los contactos que no usan Delta Chat lo ven como un archivo adjunto al correo electrónico.

- Por cuestiones de privacidad, nadie verá su foto de perfil hasta que les escriba un mensaje.

- Su foto de perfil no se envía con cada mensaje, pero con la frecuencia suficiente para
que sus contactos vuelvan a recibir su foto de perfil, incluso si agregan un nuevo
dispositivo.


### ¿Delta Chat soporta mensajes con formato HTML?

- Si. Si el correo electrónico entrante carece de una parte de texto sin formato, los correos electrónicos HTML se convierten en texto sin formato en la aplicación. Los correos electrónicos salientes siempre usan texto sin formato.


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


### Grupos

### Creación de un grupo

- Select **New chat** and then **New group** from the menu in the upper right corner or hit the corresponding button on Android/iOS.
- On the following screen, select the **group members** and define a **group name**. You can also select a **group avatar**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).


### Agregar miembros a un grupo

- Todos los miembros del grupo tienen los **mismos derechos** que los demás. Por esta razón, todos pueden eliminar o añadir miembros al grupo.
- Para añadir o eliminar miembros, haga clic en el nombre del grupo en la pantalla de chat.


### ¿Qué es un grupo verificado? ¿Por qué es experimental?

- A verified group is a chat that guarantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature. 

- As of Dec 2019, a "verified group" remains an experimental feature.
  It is continuously improved and many bugs have been fixed since the
  original introduction in 2018.  However, there remain cases, especially 
  with large groups where inconsistencies can occur, or messages become 
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


### ¿Qué significan las dobles tildes en los mensajes de grupo? ¿Han leído todos mis mensajes? 

- A message shows double ticks after more than half of the recipients have
  seen the message on their display.
- Note that some recipients might have disabled read-receipts for
  privacy-reasons.
- If more than 50% in a group disabled read receipts, the double ticks will
  never show up. For more detailed information, see
  [this blogpost](https://delta.chat/en/2017-07-06-read-receipts-and-social-pressure).


## Cifrado {#encryption}

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

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 


### ¿Cómo puedo verificar el estado criptográfico con un remitente?

If you are within immediate distance of the chat partner:

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

### ¿Qué estándares se utilizan para el cifrado de extremo a extremo?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. 

- Delta Chat implements [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) to achieve protection against active network attacks.  This goes beyond the opportunistic
  base protection of Autocrypt Level 1, while maintaining its ease of use.  

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

- Each mail server currently knows about who sent and who received a message by 
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

- Si. La mejor manera es enviar un Mensaje de Configuración de Autocrypt desde el otro cliente de correo electrónico. Busca algo como **Iniciar la Transferencia de la Configuración Autocrypt** en la configuración del otro cliente y seguir las instrucciones que se muestren allí.

- Alternatively, you can import the key manually in "Settings" or "Advanced settings" and then "Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

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


### ¿Por qué no usan pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Múltiples dispositivos {#multiclient}

### ¿Puedo usar Delta Chat en varios dispositivos al mismo tiempo?

If you want to use the **same account** on different devices, you should export
a backup from the old device, and import it into the new device:

- On the old device, go to "Settings" or "Settings / Chats and media" and then to "Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### ¿Tienen planeado crear un cliente web de Delta Chat?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  app stores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


### ¿Por qué puedo elegir no monitorear la Bandeja de Entrada?

Esta es una configuración experimental para algunas personas que están experimentando con reglas del lado del servidor. No todos los proveedores lo admiten, pero con algunos puede mover todos los correos con el encabezado "Chat-Version" a la carpeta DeltaChat. Normalmente, esto lo haría la aplicación Delta Chat.

Tiene sentido desactivar el monitoreo de la Bandeja de Entrada, si:

- habilitó una regla del lado del servidor para mover todos los mensajes con el encabezado Chat-Version a la carpeta DeltaChat, y
- ha configurado la opción "Mostrar correos clásicos" en "no, solo chats".

En este caso, Delta Chat no necesita monitorear la Bandeja de Entrada.

### ¿Para qué sirve la configuración "Enviar autocopia"?

Enviar una copia de sus mensajes a usted mismo asegura que recibirá sus propios mensajes en todos los dispositivos. Si tiene varios dispositivos y no habilita esta opción, solo verá los mensajes de otras personas y los mensajes que envíe desde el dispositivo actual.

La copia se envía a la bandeja de entrada y luego se mueve a la carpeta DeltaChat; no se coloca en la carpeta "Enviados". Delta Chat *nunca* carga nada en la carpeta Enviados porque esto significaría cargar un mensaje dos veces (una a través de SMTP y otra a través de IMAP en la carpeta Enviados).

La configuración predeterminada para "Enviar autocopia" es "no".

### ¿Por qué puedo elegir monitorear la carpeta "Enviados"?

La única razón por la que uno quiere ver la carpeta Enviados es si está utilizando otro
programa de correo (como Thunderbird) a la vez que su aplicación Delta Chat, y desea que su MUA
también participe en conversaciones de chat.

However, we recommend using the Delta Chat Desktop Client; you can download it
on [get.delta.chat](https://get.delta.chat). The option to watch the "Sent"
folder might go away in the future. It was introduced at a time where there was
no Delta Chat Desktop client available on all platforms. 

### ¿Por qué puedo elegir no monitorear la carpeta DeltaChat?

Algunas personas usan Delta Chat como un cliente de correo electrónico normal y desean mantener los correos en la bandeja de entrada, en lugar de la carpeta DeltaChat. Si deshabilita "Monitorear carpeta DeltaChat", también debe deshabilitar "mover automáticamente a la carpeta DeltaChat".
De lo contrario, eliminar mensajes o configuraciones de dispositivos múltiples podría no funcionar correctamente.

## Miscelaneo

### ¿Delta Chat funciona con _mi_ proveedor de correo electrónico?

- Es muy probable que sí :)
Sin embargo, algunos proveedores necesitan opciones especiales para funcionar correctamente, ver [Descripción de proveedores](https://providers.delta.chat)


### Si Delta Chat utiliza el correo electrónico, ¿es realmente una aplicación de mensajería _instantánea_?

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in the background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occasionally. This artificial delay is usually worse on iOS than on Android.
- Note that Delta Chat doesn't use Google Cloud Messaging (GCM) or the Apple
  Push Notification Service (APNS), because this leads to user tracking and
  central control which Delta Chat aims to avoid as much as feasible.
- However, Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### ¿Delta Chat es compatible con Protonmail / Tutanota / Criptext?

- Si y no.
- No, no puede usar su cuenta de Protonmail, Tutanota o Criptext con Delta Chat; esos servicios no permiten recibir correos a través de IMAP.
- En cualquier caso, puede usar Delta Chat para enviar mensajes a personas que usan Protonmail, Tutanota o Criptext. Sin embargo, esos mensajes no se cifrarán de extremo a extremo. El cifrado de extremo a extremo que ofrecen esos proveedores solo funciona dentro de sus plataformas y no es compatible con nadie externo.
- Delta Chat puede encriptar e2e a través de cualquier proveedor de correo electrónico con cualquier [https://autocrypt.org/dev-status.html](aplicación de correo electrónico compatible con Autocrypt).


### Estoy interesado en los detalles técnicos. ¿Pueden decirme más?

- Visita la página [Estándares usados en Delta Chat]({% include standards-url %}).

### How are Delta Chat developments funded? 

First of all, Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 

Delta Chat developments have so far been funded from four major sources: 

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018. 

- The [Open Technology Fund](https://opentechfund.org) has given two grants.
  The first 2018/2019 grant (~$200K) majorly improved the Android app 
  and allowed us to release a Desktop app beta version, and also 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) is still ongoing and helps us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  See the 
  ongoing [blog posts](https://delta.chat/en/blog) for more info. 

- The [NLnet foundation](https://nlnet.nl/) granted EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

The monetary funding mentioned above was organized by merlinux GmbH in
Freiburg (Germany), and then distributed to almost a dozen contributors. 

Funding for 2020/2021 is yet to be determined. We are pursuing several
opportunities with different organisations and partners. We also are
considering to ask for donations. In fact, we experimentally started
a little [Delta Chat / Liberapay donation account](https://liberapay.com/delta.chat/)
but have not published this yet.  There were also around 3-4K so far
donated to Bjoern's (the original author of Delta Chat) paypal and bitcoin
donation channels.  
