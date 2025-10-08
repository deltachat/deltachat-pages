---
title: FAQ
lang: es
render_toc: true
header: Preguntas Frecuentes
---


## ¿Qué es Delta Chat? 

Delta Chat es una aplicación de mensajería segura, descentralizada y confiable. Está disponible para las plataformas móviles y del escritorio.

Delta Chat parece como Whatsapp o Telegram, pero también puedes utilizarlo y considerarlo como una aplicación de correo electrónico.
Puedes registrarte de forma anónima en varios [servidores de chatmail interoperables](https://delta.chat/chatmail)
que son servidores de correo electrónico mínimos y optimizados para operaciones rápidas y seguras.
O puedes utilizar servidores de correo electrónico clásicos y una cuenta de correo electrónico existente
en cuyo caso, Delta Chat actúa como una aplicación de correo electrónico.

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### ¿Cómo puedo encontrar personas con las que chatear? 

Para establecer contacto con otros de forma segura [escanea un código QR de invitación 
o comparte un enlace de invitación](#howtoe2ee). 
Esto es necesario cuando se utiliza un perfil de chat (predeterminado) basado en chatmail 
porque los servidores de chatmail rechazan los mensajes salientes no cifrados.

Si crees un perfil de chat con una dirección de correo electrónico clásica
puedes crear manualmente un contacto si conoces su dirección de correo electrónico
y escribirle un mensaje
aunque el destinatario no utilice Delta Chat.


### ¿Cuáles son las ventajas de Delta Chat comparado con otras aplicaciones de mensajería?

- Perfiles de chat anónimos con [servidores de chatmail](https://delta.chat/chatmail) rápidos, seguros e interoperables
  que ofrecen notificaciones Push instantáneas para dispositivos con iOS y Android. 

Soporte omnipresente, [múltiples perfiles](#multiple-accounts) y múltiples dispositivos en todas las plataformas. 

Interactivas [aplicaciones de web en un chat](https://webxdc.org/apps) para jugar y colaborar

 [Cifrado de extremo a extremo auditado](#security-audits)
seguro contra ataques a la red y al servidor.

- Software libre y de código abierto, tanto para aplicaciones como para servidores. 
  Basado en [Estándares de Internet para correo electrónico y web]({% include standards-url %}),
  [para evitar el "síndrome de otro estándar más (xkcd 927)"](https://xkcd.com/927/) 


### ¿Qué pasa si espero un mensaje de alguien a quien no le escribí en el pasado?

Si un mensaje proviene de un contacto desconocido, aparece como una **solicitud**.

- Necesitas **aceptar** la solicitud antes de poder responder.

- También puedes **eliminarlo** si no quieres chatear con ellos por ahora.

- Si eliminas una solicitud, los mensajes futuros de ese contacto seguirán apareciendo como solicitud de mensaje, por lo que puedes cambiar de opinión. Si realmente no quieres recibir mensajes de esta persona, considera **bloquearlos**.


### ¿Delta Chat soporta envío de imágenes, videos, documentos y otros archivos?

- Si. Además del texto sin formato, todos los archivos adjuntos de correo electrónico se muestran como mensajes separados. Los mensajes salientes obtienen archivos adjuntos según sea necesario automáticamente.

- Para mejorar el rendimiento, las imágenes se optimizan y se envían en un tamaño más pequeño de forma predeterminada, pero puedes enviarla como un "archivo" para conservar la original.


### ¿Qué son los perfiles? ¿Cómo puedo cambiar entre ellos? {#multiple-accounts}

Un perfil es **un nombre, una foto** y algunas informaciones adicionales para encriptar los mensajes.
Un perfil solo existe dentro de tu dispositivo(s)
y utilice un servidor de chatmail o correo electrónico clásico para el transporte de los mensajes.

En la primera instalación de Delta Chat se crea un primer perfil.

Después, puedes tocar la imagen de tu perfil en la esquina superior izquierda para **Añadir perfiles**
o para **Cambiar perfiles**.

Se podría considerar la utilización de perfiles diferenciados para actividades vinculadas con políticas, familia o trabajo, o para un perfil dedicado a "spam", que podría ser utilizado para páginas web y plataformas que tendrán la capacidad de generar mensajes no solicitados.

Quizás quieres aprender [cómo se usa el mismo perfil en múltiples dispositivos](#multiclient).


### ¿Quién ve mi foto de perfil?

- Puede agregar una foto de perfil en su configuración. Si escribe a sus contactos
o los agrega a través de un código QR, ellos lo verán automáticamente como su foto de perfil.

- Los contactos que no usen Delta Chat no verán la foto de perfil
  (a menos que instalen Delta Chat :)

- Por cuestiones de privacidad, nadie verá su foto de perfil hasta que les escriba un mensaje.

- Su foto de perfil no se envía con cada mensaje, pero con la frecuencia suficiente para
que sus contactos vuelvan a recibir su foto de perfil, incluso si agregan un nuevo
dispositivo.


### ¿Puedo establecer un texto de firma con Delta Chat? {#signature}

Sí,
es posible hacerlo en "Ajustes → Perfil → Texto de firma".
Los contactos que usan Delta Chat podrán ver
si revisan los detalles de tu perfil.  
Además, se encontrará en la firma de correos electrónicos clásicos.


### ¿Qué significa fijar, mutear, archivar?

Usa estas herramientas para organizar tus chats y mantener todo en su lugar:

- **Chats fijados** siempre se mantienen al frente de tu listado. Puedes usarlos para acceder a tus chats preferidos de forma rápida o temporal para no olvidarte de tus cosas. 

- **Chats muteados** si no quieres recibir notificaciones de ellos. Chats muteados se mantienen en su lugar e inclusive puedes fijarlos.

- **Archivar chats** si no deseas verlos en tu lista de chats.
Los chats archivados siguen siendo accesibles arriba de la lista de chats o a través de la búsqueda.

- Cuando un chat archivado recibe un nuevo mensaje, a menos que esté silenciado, **saldrá del archivo** y volverá a aparecer en tu lista de chats.
Los chats **silenciados permanecen archivados** hasta que los desarchivas manualmente.

Para archivar o fijar un chat, toque prolongadamente (Android), use el menú del chat (Android/Escritorio) o deslícese hacia la izquierda (iOS);
para silenciar un chat, use el menú del chat (Android/Escritorio) o el perfil del chat (iOS).


### ¿Cómo funcionan los "Mensajes guardados"? {#save}

**Mensajes guardados** es un chat que puedes utilizar para recordar y encontrar mensajes fácilmente.

- En cualquier chat, mantén pulsado o haz clic con el botón derecho en un mensaje y selecciona **Guardar**

- Los mensajes guardados se marcan con el símbolo
 <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
  junto a la marca de tiempo

- Después puedes abrir el chat "Mensajes guardados" - y allí verás los mensajes guardados.
  Con pulsar a <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
  puedes volver al mensaje original en el chat original

- Finalmente, también se puede utilizar "Mensajes guardados" para tomar **notas personales** - abre el chat, escribe algo, añade una foto o un mensaje de voz, etc.

- Como los "mensajes guardados" se sincronizan, pueden ser muy útiles para transferir datos entre dispositivos.

Los mensajes se quedan guardados, también si se han cambiado o están borrados -
Sea por el [remitente](#edit), por la [limpieza del dispositivo](#delold) o por la [desaparición de mensajes de otros chats](#ephemeralmsgs).


### ¿Qué significa el punto verde?

A veces puede ver un **punto verde** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/>
junto al avatar de un contacto.
Significa que ha sido **visto recientemente** en los últimos 10 minutos:

- sea porque te enviaron un mensaje directamente,
- porque escribieron algo en un grupo en que ambos son miembros,
- porque te enviaron un acuse de recibo de un mensaje que escribiste,
- porque editaron o borraron un mensaje en un chat compartido contigo,
- o porque utilizan una [app](#webxdc) en un chat compartido contigo.

Así que esto no es un estado de en línea en tiempo real -
y si alguien no responde de inmediato, aunque parece que estar en línea,
no te preocupes y dale un poco de espacio :)

On the other hand, others will not always "see that you are online".
If you have turned off read receipts,
they will not see the green dot
until one of the above conditions are met.


### Corregir errores y borrar mensajes después de enviar {#edit}

- Se puede editar el texto de los mensajes después de enviarlos.
Para ello, mantenga pulsado o haz clic con el botón derecho en el mensaje y seleccione **Editar**
o <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>.

- Si has enviado un mensaje accidentalmente
  desde el mismo menú, seleccione **Borrar** y después **Borrar para todos**.

Mientras que los mensajes editados tendrán la palabra "Editado" junto a la marca de tiempo,
los mensajes borrados serán eliminados sin un marcador en el chat.
No se envían notificaciones y no hay límite de tiempo.

Note, that the original message may still be received by chat members
who could have already replied, forwarded, saved, screenshotted or otherwise copied the message.


### ¿Cómo funciona la desaparición de mensajes? {#ephemeralmsgs}

You can turn on "disappearing messages"
in the settings of a chat,
at the top right of the chat window,
by selecting a time span
between 5 minutes and 1 year.

Hasta que la configuración se desactive nuevamente,
La aplicación Delta Chat de cada miembro del chat se encarga
de borrar los mensajes
después del lapso de tiempo seleccionado.
Comienza el lapso de tiempo
cuando el receptor ve por primera vez el mensaje en Delta Chat.
Los mensajes se eliminan.
tanto en cada cuenta de correo electrónico en el servidor,
y en la propia aplicación.

Tenga en cuenta que puede confiar en los mensajes que desaparecen
sólo mientras confíes en tus compañeros de chat;
compañeros de chat maliciosos pueden tomar fotos,
o guardar, copiar o reenviar mensajes antes de eliminarlos.

Aparte de eso,
si un compañero de chat desinstala Delta Chat,
los mensajes no se eliminarán de su cuenta de correo electrónico.
Lo más probable es que ya no sean descifrables.
(siempre que estuvieran cifrados en primer lugar).


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


### ¿Qué pasa si activo "Borrar mensajes del servidor"?

- De forma predeterminada, Delta Chat almacena todos los mensajes localmente en su dispositivo.
Si por ej. desea ahorrar espacio de almacenamiento en su proveedor de correo,
puedes configurar Delta Chat
para eliminar automáticamente los mensajes antiguos ya recibidos en el servidor.
Aún permanecen en su dispositivo hasta que los elimine allí también.

- To turn it on, go to **Delete Old Messages → Delete Messages from Server**
  in the "Chats and Media" settings.
  You can set a timeframe between "At once" and "After 1 year".
  All e-mails received by Delta Chat will be deleted from the server after this timeframe.

- Tenga en cuenta que si utiliza Delta Chat en más de un dispositivo,
debes dejar el mensaje en el servidor con un plazo de tiempo suficiente
para que los otros dispositivos también puedan descargarlos.


### ¿Qué pasa si activo "Borrar mensajes del dispositivo"? {#delold}

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Entrega de mensajes instantáneos y notificaciones Push {#instant-delivery}


### ¿Qué son las Notificaciones Push? ¿Cómo puedo recibir mensajes instantáneos?

Push Notifications are sent by Apple and Google "Push services" to a user's device
so that an inactive Delta Chat app can fetch messages in the background
and show notifications on a user's phone if needed.

Las notificaciones push funcionan con todos los servidores de [chatmail](https://delta.chat/chatmail) en

- dispositivos iOS, por la integración de los servicios Push de Apple.

- Android devices, by integrating with the Google FCM Push service,
  including on devices that use [microG](https://microg.org)
  instead of proprietary Google code on the phone.

A partir de mayo de 2024, los servidores de correo electrónico clásicos no admiten notificaciones push
para los usuarios de Delta Chat.


### ¿Están activadas las notificaciones Push en los dispositivos iOS? ¿Existe alguna alternativa?

Yes, Delta Chat automatically uses Push Notifications for [chatmail](https://delta.chat/chatmail) profiles.
And no, there is no alternative on Apple's phones to achieve instant message delivery
because Apple devices do not allow Delta Chat to fetch data in the background.
Push notifications are automatically activated for iOS users because
[Delta Chat's privacy-preserving Push Notification system](#privacy-notifications)
does not expose data to Apple that it doesn't already have.


### ¿Están habilitadas / son necesarias las notificaciones Push en los dispositivos Android? {#android-push}

If a "Push Service" is available, Delta Chat enables Push Notifications
to achieve instant message delivery for all chatmail users.
If you are using a classic e-mail provider instead of [chatmail](https://delta.chat/chatmail) servers,
Push Notifications are not available.

In the Delta Chat "Notifications" settings for "Instant delivery"
you can change the following settings effecting all chat profiles:

- Use Background Connection: If you are not using a Push service,
  you may disable "battery optimizations" for Delta Chat,
  allowing it to fetch messages in the background.
  However, there could be delays from minutes to hours.
  Some Android vendors even restrict apps completely
  (see [dontkillmyapp.com](https://dontkillmyapp.com))
  and Delta Chat might not show  incoming messages
  until you manually open the app again.
  
- Force Background Connection: This is the fallback option
  if the previous options are not available or do not achieve "instant delivery".
  Enabling it causes a permanent notification on your phone
  which may sometimes be "minified" with recent Android phones.

Both "Background Connection" options are energy-efficient and
safe to try if you experience messages arrive only with long delays.


### ¿Qué privadas son las notificaciones push de Delta Chat? {#privacy-notifications}

Delta Chat Push Notification support avoids leakage of private information.
It does not leak e-mail, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Así es como las aplicaciones Delta Chat realizan la entrega de Notificaciones Push:

- A Delta Chat app obtains a "device token" locally, encrypts it and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives an e-mail for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or e-mail address of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the chatmail or e-mail address of the device it wakes up.
  The central Apple/Google Push services never see an e-mail address (sender or receiver)
  and also never see any message content (also not in encrypted forms).


The central Delta Chat notification proxy [is small and fully implemented in Rust](https://github.com/deltachat/notifiers)
and forgets about device-tokens as soon as Apple/Google/etc processed them,
usually in a matter of milliseconds.

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees e-mail addresses, IP-addresses or
any cryptographic identity information associated with a user's device (token). 

Resulting from this overall privacy design, even the seizure of a chatmail server,
or the full seizure of the central Delta Chat notification proxy
would not reveal private information that Push services do not already have.


### Why does Delta Chat integrate with centralized proprietary Apple/Google push services?

Delta Chat is a free and open source decentralized messenger with free server choice,
but we want users to reliably experience "instant delivery" of messages,
like they experience from WhatsApp, Signal or Telegram apps,
without asking questions up-front that are more suited to expert users or developers.

Note that Delta Chat has a [small and privacy-preserving Push Notification system](#privacy-notifications)
that achieves "instant delivery" of messages for all chatmail servers
including a potential one [you might setup yourself without our permission](https://delta.chat/chatmail#selfhosted).
Welcome to the power of the interoperable and massive chatmail and e-mail system :)


## Cifrado y seguridad {#e2ee}

### ¿Qué estándares se utilizan para el cifrado de extremo a extremo? 

Delta Chat uses a [secure subset of the OpenPGP standard](#openpgp-secure)
to provide automatic end-to-end encryption using these protocols: 

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  to exchange encryption setup information through QR-code scanning or "invite links". 

- [Autocrypt](https://autocrypt.org) is used for automatically
  establishing end-to-end encryption between contacts and all members of a group chat. 

- [Sharing a contact to a
  chat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  enables receivers to use end-to-end encryption with the contact. 

Delta Chat does not query, publish or interact with any OpenPGP key servers. 

### ¿Cómo puedo saber si los mensajes están cifrados de extremo a extremo? {#whene2e}

All messages in Delta Chat are **end-to-end encrypted by default**.
Since the Delta Chat Version 2 release series (July 2025) 
there are no lock or similar markers on end-to-end encrypted messages, anymore. 

### Can i still receive or send mails without end-to-end encryption? 

If you use default [chatmail relays](https://chatmail.at/relays),
it is impossible to receive or send messages without end-to-end encryption. 

If you instead create a profile using a classic e-mail server,
you can send and receive messages with or without end-to-end encryption.
Messages lacking end-to-end encryption are marked with an e-mail icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.

### ¿Cómo puedo establecer un chat con un nuevo contacto? {#howtoe2ee}

You can send an invite link through another private chat, 
show an invitation QR code when next to each other or in a video call,
or click on a "contact" that was shared in a chat. 

- For **Group invitations**,
  tap the chat group title to see its member list,
  and select "QR Invite code".

- For **direct 1:1 chat invitations**, 
  tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen.

Ask your chat partner to scan the QR image
with their Delta Chat app,
or click "Copy" or "Share" to create an invite link
and share it with your chat partner.

Now wait while [end-to-end encryption is getting established](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol). 

- If both sides are online, they will soon see a (group or direct) chat
  and can start messaging securely. 

- If one side is offline or in bad network, 
  the  ability to chat is delayed until connectivity is restored. 

Congratulations! 
You now will automatically use end-to-end encryption
with this contact. 
If you add each other to chat groups,
end-to-end encryption will be established among all members. 


### What does the green checkmark in a contact profile mean? {#e2eeguarantee}

A contact profile might show a green checkmark
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
and an "Introduced by" line.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a green-checkmarked contact to a group with only green-checkmarked members 
becomes an introducer. 
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

Para obtener una discusión más detallada sobre "cifrado de extremo a extremo garantizado", por favor consulta los [protocolos Secure-Join](https://securejoin.delta.chat/en/latest/new.html) y lee específicamente sobre "Grupos Verificados", el término técnico de lo que aquí se llama chats "marcados con una estampilla verde" o "cifrados de extremo a extremo garantizado".

### ¿Los adjuntos (imágenes, archivos, audio, etc.) están cifrados de extremo a extremo?

Yes.

Cuando hablamos de un mensaje "cifrado de extremo a extremo",
siempre nos referimos a que todo el mensaje está cifrado,
incluyendo todos los archivos adjuntos
y los metadatos de los archivos adjuntos, como los nombres de archivo.


### ¿Es OpenPGP seguro? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
requiring the whole message to be properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publicly discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019 and 2024](#security-audits). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for end-to-end-encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking end-to-end encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing end-to-end encryption is
only one part of "user outcomes",
see also our answers to [device-seizure](#device-seizure)
and [message-metadata](#message-metadata) questions. 


### ¿Es Delta Chat vulnerable a EFAIL?

No, [Delta Chat never was vulnerable to EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
because its OpenPGP implementation [rPGP](https://github.com/rpgp/rpgp) 
uses Modification Detection Code when encrypting messages
and returns [an error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
if the Modification Detection Code is incorrect.

Delta Chat also never was vulnerable to the "Direct Exfiltration" EFAIL attack
because it only decrypts `multipart/encrypted` messages
which contain exactly one encrypted and signed part,
as defined by the Autocrypt Level 1 specification. 


### Are messages marked with the mail icon exposed on the Internet? {#tls}

If you are sending or receiving e-mail messages without end-to-end encryption (using a classic e-mail server),
they are still protected from cell or cable companies who can not read or modify your e-mail messages. 
But both your and your recipient's e-mail providers 
may read, analyze or modify your messages, including any attachments. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your e-mail provider. 
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's e-mail provider
will typically be transport-encrypted as well.
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between e-mail providers 
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.


### ¿Cómo Delta Chat protege los metadatos en los mensajes? {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

E-mail Servers can therefore only see

- the message date, 

- sender and receiver addresses 

- and message size. 

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### ¿Cómo proteger los metadatos y los contactos cuando se incauta un dispositivo? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random e-mail addresses for transport. 
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then chat contacts using short-lived profiles
can not be identified easily. 

### Does Delta Chat support "Sealed Sender"? {#sealedsender}

No, not yet. 

The Signal messenger introduced ["Sealed Sender" in 2018](https://signal.org/blog/sealed-sender/)
to keep their server infrastructure ignorant of who is sending a message to a set of recipients. 
It is particularly important because the Signal server knows the mobile number of each account,
which is usually associated with a passport identity.

Even if [chatmail relays](https://chatmail.at/relays) 
do not ask for any private data (including no phone numbers), 
it might still be worthwhile to protect relational metadata between addresses. 
We don't foresee bigger problems in using random throw-away e-mail addresses for sealed sending
but an implementation has not been agreed as a priority yet. 

### ¿Soporta Delta Chat Perfect Forward Secrecy? {#pfs}

No, not yet. 

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

We designed a Forward Secrecy approach that withstood 
initial examination from some cryptographers and implementation experts 
but is pending a more formal write up 
to ascertain it reliably works in federated messaging and with multi-device usage,
before it could be implemented in [chatmail core](https://github.com/chatmail/core),
which would make it available in all [chatmail clients](https://chatmail.at/clients). 

### Does Delta Chat support Post-Quantum-Cryptography? {#pqc}

No, not yet. 

Delta Chat uses the Rust OpenPGP library [rPGP](https://github.com/rpgp/rpgp)
which supports the latest [IETF Post-Quantum-Cryptography OpenPGP draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/). 
We aim to add PQC support in [chatmail core](https://github.com/chatmail/core)  after the draft is finalized at the IETF
in collaboration with other OpenPGP implementers. 

### How can I manually check encryption information?

Puede verificar manualmente el estado de cifrado de extremo a extremo en el diálogo "Cifrado" (perfil de usuario en Android/iOS o hacer clic derecho en el elemento de lista de chat de un usuario en el escritorio). Delta Chat muestra dos huellas digitales allí. Si las mismas huellas digitales aparecen en su propio dispositivo y en el dispositivo de su contacto, la conexión es segura.

### ¿Puedo reutilizar mi clave privada existente? {#importkey}

No. 

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1. 
You can export your private key but you can not import additional private keys. 

In general, we do not recommend or offer users to perform manual key management. 
We want to ensure that security audits can focus on a few proven cryptographic algorithms 
instead of the full breadth of possible algorithms allowed with OpenPGP. 

### ¿Se auditó Delta Chat de forma independiente en busca de vulnerabilidades de seguridad? {#security-audits}

Yes, multiple times. 
The Delta Chat project continuously undergoes independent security audits and analysis,
from most recent to older: 

- 2024 December, an [NLNET-commissioned Evaluation of
  rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) by [Radically Open Security](https://www.radicallyopensecurity.com/) took place.
  rPGP serves as the end-to-end encryption [OpenPGP](https://openpgp.org) engine of Delta Chat. 
  Two advisories were released related to the findings of this audit:

  - ["Panics on Malformed Untrusted Input"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potential Resource Exhaustion when handling Untrusted Messages"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

  The issues outlined in these advisories have been fixed and are part of Delta Chat 
  releases on all appstores since December 2024. 

- 2024 March, we received a deep security analysis from the Applied Cryptography
  research group at ETH Zuerich and addressed all raised issues. 
  See our blog post about [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) for more detailed information and the
  [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
  research paper published afterwards. 

- 2023 April, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023.
  See [here for the full background story on end-to-end security in the web](https://delta.chat/en/2023-05-22-webxdc-security).

- 2023 March, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

- 2020, [Include Security](https://includesecurity.com) analyzed Delta
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

- 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).



## Múltiples dispositivos {#multiclient}

### ¿Puedo usar Delta Chat en varios dispositivos al mismo tiempo?

Yes. You can use the same profile on different devices:

- Asegurate que ambos dispositivos estén en la misma Wi-Fi o red

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- En el otro dispositivo, [instala Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- La transferencia debería comenzar después de unos segundos y durante la transferencia ambos dispositivos mostrarán el **progreso**.
Espere hasta que termine en ambos dispositivos.

A diferencia de muchas otras aplicaciones de mensajería, después de una transferencia exitosa,
ambos **dispositivos son completamente independientes.**
No es necesario un dispositivo para que el otro funcione.


### Solución de problemas

- Vuelve a verificar que ambos dispositivos estén en la **misma Wi-Fi o red**

- On **Windows**, go to **Control Panel / Network and Internet**
  and make sure, **Private Network** is selected as "Network profile type"
  (after transfer, you can change back to the original value)

- On **iOS**, make sure "System Settings / Apps / Delta Chat / **Local Network**" access is granted

- On **macOS**, enable "System Settings / Privacy & Security / **Local Network** / Delta Chat"

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- **Guest Networks** may not allow devices to communicate with each other.
  If possible, use a non-guest network.

- If you still have troubles using the same network,
  try to open **Mobile Hotspot** on one device and join that Wi-Fi from the other one

- Asegurate que haya **suficiente espacio** en el dispositivo destino

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple profiles per device, just [add another profile](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Transferencia manual {#backup}

This method is only recommended if "Add Second Device" as described above does not work.

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, in the "I already have a profile" menu,
  choose "restore from backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  end-to-end encrypted messages with your communication partners.

### Is Deletion, Pinning, Archiving, Saving, Muting etc. synced to all devices?

Yes.

If you e.g. delete a chat or a message from your phone,
it will be deleted on your desktop as soon as it comes online again.

Notable exceptions are [Delete old messages from Device](#delold),
as different devices may have different storage capacities,
and system specific settings as notification sounds.


### ¿Tienen planeado crear un cliente web de Delta Chat?

- No hay planes inmediatos, pero sí algunas ideas preliminares.
- Hay 2-3 vías para introducir un cliente web de Delta Chat, pero todas son
trabajo significativo. Por ahora, nos centramos en conseguir versiones estables en todas las
tiendas de aplicaciones (Google Play/iOS/Windows/macOS/Linux repositorios) como aplicaciones nativas.
- Si necesitas un cliente web, porque no tienes permiso para instalar software en
el ordenador con que trabajas, puedes utilizar el cliente portátil Windows Desktop Client
o el AppImage para Linux. Puedes encontrarlos en
[get.delta.chat](https://get.delta.chat).


## aplicaciones webxdc  {#webxdc}

In Delta Chat, you can share [webxdc apps](https://webxdc.org), attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger.


### ¿Qué tan privadas son las aplicaciones webxdc?

- webxdc apps can not send data to the Internet, or download anything.
- A webxdc app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a webxdc app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the webxdc app as well.
- This also means: it can be a privacy risk to open apps in chats with untrusted members.
  Just like with e-mail attachments, video calls or plain links:
  open them only from senders you trust, and not from spammers.
  Spammers can get to know any data you send to them, as well as your IP address.


### ¿Dónde puedo obtener aplicaciones webxdc?

- In general, anyone can share webxdc apps with each
  other without restrictions.
- From [webxdc.org/apps](https://webxdc.org/apps/).
- You can [send 'hi' to xstore@testrun.org](https://delta.chat/en/2023-08-11-xstore)
  to see an experimental webxdc appstore.
  All of the apps are open source and for free.
- Many people write their own webxdc apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### ¿Cómo puedo crear mis propias aplicaciones webxdc?

- webxdc apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Funcionalidades experimentales

We are very grateful for feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. 
You may conveniently login via Delta Chat and a QR code scan,
another rather stable experiment we run on the side (sic!).

### ¿Cómo puedo usar llamadas de audio/video con Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "Video Chat Instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to the video chat. 
  This way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random Jitsi room every time you call someone.


### ¿Qué son las listas de difusión y cómo puedo usarlas?

With a Broadcast List you can send a message to many recipients at once;
the recipients cannot reply in that list.
Broadcast lists are still highly experimental
and will very probably be replaced by something else, stay tuned :)


### ¿Cómo puedo compartir mi ubicación con mis compañeros de chat?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat partners.
  Map tiles are downloaded from [OpenStreetMap](https://openstreetmap.org).
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### ¿Por qué puedo seleccionar "solo obtener de la carpeta DeltaChat"?

Esta es una configuración experimental para algunas personas que están experimentando con reglas del lado del servidor. No todos los proveedores lo admiten, pero con algunos puede mover todos los correos con el encabezado "Chat-Version" a la carpeta DeltaChat. Normalmente, esto lo haría la aplicación Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- habilitó una regla del lado del servidor para mover todos los mensajes con el encabezado Chat-Version a la carpeta DeltaChat, y
- ha configurado la opción "Mostrar correos clásicos" en "no, solo chats".

En este caso, Delta Chat no necesita monitorear la Bandeja de entrada, y es suficiente con monitorear solo la carpeta DeltaChat.


### ¿Cómo puedo cambiar mi cuenta a una dirección de correo electrónico diferente?

Note: 
Changing email addresses is temporarily disabled
because of ongoing changes to the DeltaChat core.
It should be available again in a few months.

1. Change your address in “Settings → Advanced → Password and Account” and
   enter the password of your new e-mail account (and if necessary, server settings).
   You will get an information notice about the fact that you are moving to a new address. 
   An additional notice will also show up in your "Device messages" chat. 

2. Si es posible, permite que tu antiguo proveedor de correo electrónico reenvíe todos los mensajes a tu nueva dirección.

3. Dile a tus contactos que cambiaste tu dirección. Escribir en chats y grupos con cifrado de extremo a extremo garantizado, hará que ellos noten tu cambio automáticamente y seguirán chateando contigo usando tu nueva dirección.

Note that Delta Chat will not retrieve messages anymore from your old e-mail provider.
If you didn't configure your e-mail provider to forward messages (step 2.) 
only those contacts to whom you sent a message in a guaranteed end-to-end encrypted chat
will send messages to your new address. 

To learn more about this the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Miscelaneo

### ¿Qué permisos necesita Delta Chat?

Dependiendo del sistema operativo en uso,
quizás se te solicite garantizar permisos a la app.
Esto es lo que hace Delta Chat con esos permisos:

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
  - ask to ignore battery optimisations: for achieving "instant message delivery"


### ¿Delta Chat funciona con _mi_ proveedor de correo electrónico?

- Es muy probable que sí :)
Sin embargo, algunos proveedores necesitan opciones especiales para funcionar correctamente, ver [Descripción de proveedores](https://providers.delta.chat)


### Can I use Delta Chat in parallel with other E-Mail apps?

Yes, but it is not recommended.

Parallel usage with the same E-Mail address might lead to the following inconveniences:

- Next to your Delta Chat notifications,
  you might also get notifications for (encrypted, so unreadable) chat mail messages
  in your other email app
- If Delta Chat is not running
  or "Advanced > Move automatically to the DeltaChat Folder" is disabled,
  encrypted Delta Chat messages might clutter the Inbox in your other E-Mail apps.

[Sieve rules](https://support.delta.chat/t/sieve-rule-to-move-deltachat-mails-to-deltachat-folder/288/10) can solve these problems.


### I want to manage my own server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  chatmail relay server, as described [in this
  blogpost](https://delta.chat/en/2023-12-13-chatmail).
- You can find an [installation guide on GitHub](https://github.com/chatmail/relay).


### ¿Por qué debo ingresar mi contraseña de correo electrónico en Delta Chat? ¿Es esto seguro?

Al igual que con otros programas de correo electrónico como Thunderbird, K9-Mail o Outlook, el
programa necesita la contraseña para que pueda usarla para enviar correos. Por supuesto, la
contraseña se almacena solo en su dispositivo. La contraseña solo se transmite a
su proveedor de correo electrónico (cuando inicia sesión), que tiene acceso a sus correos de todos modos.

Como Delta Chat es de Código Abierto, puedes investigar el [Código Fuente](https://github.com/chatmail/core/blob/main/src/login_param.rs) si quieres verificar que tus credenciales son gestionadas de manera segura.
Estamos felices de recibir críticas que hagan la aplicación más segura para todos los usuarios.


### ¿Qué mensajes se muestran en Delta Chat?

Por defecto, Delta Chat muestra todos los e-mail

At "Settings → Advanced → Show Classic E-Mails",
you can change this. You have these options:

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


### ¿Delta Chat soporta mensajes con formato HTML?

Sí, los mensajes HTML entrantes vienen con un botón "Mostrar mensaje completo". Los mensajes salientes siempre usan texto plano.


### Can I set the E-Mail Subject with Delta Chat?

Delta Chat sets (and [encrypts](#message-metadata)!) the classic e-mail subject
automatically to  the group name or to the sender name.

So if you want to set the subject yourself,
for example for a formal e-mail to a business contact,
you can create a group
with only yourself and the recipient(s).
Set the Chat Title to the Subject you want,
and then send your e-mail as the first message.
If the recipients don't use Delta Chat,
it will look like a normal,
formal e-mail to them.
You will get bonus professionalism points
if you set a [signature text](#signature).


### ¿Para qué sirve la configuración "Enviar autocopia"?

Enviar una copia de sus mensajes a usted mismo asegura que recibirá sus propios mensajes en todos los dispositivos. Si tiene varios dispositivos y no habilita esta opción, solo verá los mensajes de otras personas y los mensajes que envíe desde el dispositivo actual.

La copia se envía a la bandeja de entrada y luego se mueve a la carpeta DeltaChat; no se coloca en la carpeta "Enviados". Delta Chat *nunca* carga nada en la carpeta Enviados porque esto significaría cargar un mensaje dos veces (una a través de SMTP y otra a través de IMAP en la carpeta Enviados).

The default setting for "Send Copy to Self" is "on".


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


### ¿Delta Chat es compatible con Proton Mail / Tutanota / Criptext?

- Si y no.
- No, no puede usar su cuenta de Proton Mail, Tutanota o Criptext con Delta Chat; esos servicios no permiten recibir correos a través de IMAP.
- En cualquier caso, puede usar Delta Chat para enviar mensajes a personas que usan Protonmail, Tutanota o Criptext. Sin embargo, esos mensajes no se cifrarán de extremo a extremo. El cifrado de extremo a extremo que ofrecen esos proveedores solo funciona dentro de sus plataformas y no es compatible con nadie externo.
- Delta Chat puede encriptar e2e a través de cualquier proveedor de correo electrónico con cualquier [aplicación de correo electrónico compatible con Autocrypt](https://autocrypt.org/dev-status.html).


### ¿Cómo puedo eliminar mi cuenta? {#remove-account}

If you use a default chat profile
you can simply uninstall the app.
This will automatically trigger deletion of all associated account data on the chatmail server.
For more info, please refer to [nine.testrun.org account-deletion](https://nine.testrun.org/info.html#account-deletion) for the default onboarding server,
or the respective page from your chosen [3rd party chatmail server](https://delta.chat/chatmail).

If you have set up your chat profile on multiple devices
you need to remove it from all devices.

If you are using more than one account,
but don't want to get rid of all of them,
you can remove it in the account switcher menu (on android and iOS),
or in the sidebar with a right click (in the desktop client).

Accounts on [classic e-mail providers](https://providers.delta.chat)
will not be deleted automatically;
how you can delete your account depends on your e-mail provider.
We don't have any control over e-mail accounts at those providers,
so unfortunately we can't help you with that.

If you want to continue using a classic e-mail account with other apps,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.
Otherwise you might receive undecryptable messages from those group chats.


### Estoy interesado en los detalles técnicos. ¿Pueden decirme más?

- Visita la página [Estándares usados en Delta Chat]({% include standards-url %}).



### Where can my friends find Delta Chat?

Delta Chat is available for all major and some minor platforms:

- The **official website**, <https://delta.chat/download> shows all options in detail

- If unavailable, use the **mirror** at <https://deltachat.github.io/deltachat-pages>

- Open one of the following **app stores and search for "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, Amazon App Store, iOS and macOS App Store, Microsoft Store

- Check the **package manager** of your Linux distributions

- **Android APKs** are also available on <https://github.com/deltachat/deltachat-android/releases>


### ¿Cómo se financia el desarrollo de Delta Chat?

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources,
ordered chronologically: 

- El proyecto de la UE [NEXTLEAP](https://nextleap.eu) financió la investigación
e implementación de grupos verificados y protocolos de contacto
en 2017 y 2018 y también ayudó a integrar el cifrado de extremo a extremo
a través de [Autocrypt](https://autocrypt.org).

- The [Open Technology Fund](https://opentechfund.org) gave us a 
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app 
  and released a first Desktop app beta version, and which moreover 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system. 

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-profile support, improved QR-code contact and group setups and many networking improvements on all platforms.

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- 2023-2024 we successfully completed the OTF-funded 
  [Secure Chatmail project](https://www.opentech.fund/projects-we-support/supported-projects/secure-chat-mail-with-delta-chat/), 
  allowing us to introduce guaranteed encryption, 
  creating a [chatmail server network](https://delta.chat/chatmail) 
  and providing "instant onboarding" in all apps released from April 2024 on. 

- In 2023 and 2024 we got accepted in the Next Generation Internet (NGI)
  program for our work in [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
  along with collaboration partners working on 
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/), 
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/), 
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) and 
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/). 
  All of these projects are partially completed or to be completed in early 2025. 

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

  [Donar dinero](donate){: .cta-button}

- Por último, pero no por ello menos importante, varios expertos pro-bono y entusiastas contribuyeron
y contribuyen a los desarrollos de Delta Chat sin recibir dinero, o sólo
pequeñas cantidades. Sin ellos, Delta Chat no estaría donde está hoy, ni 
siquiera cerca.

La financiación monetaria mencionada anteriormente es principalmente organizada por merlinux GmbH en Freiburg (Alemania), y se distribuye a más de una docena de colaboradores en todo el mundo.

Por favor, consulta [Canales de contribución de Delta Chat](contribute) para conocer las posibilidades de contribución tanto monetarias como otras.
