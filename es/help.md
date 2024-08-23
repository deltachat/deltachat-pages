---
title: FAQ
lang: es
render_toc: true
header: Preguntas Frecuentes
---


## ¿Qué es Delta Chat? 

Delta Chat is a reliable, decentralized and secure messaging app, 
available for mobile and desktop platforms.

Delta Chat feels like Whatsapp or Telegram but you can also use and regard it as an e-mail app. 
You can signup anonymously to a variety of [interoperable chatmail servers](https://delta.chat/chatmail)
which are minimal e-mail servers optimized for fast and secure operations. 
Or you may use classic e-mail servers and an existing e-mail account
in which case Delta Chat acts as an e-mail app. 

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### ¿Cómo puedo encontrar personas con las que chatear? 

To securely setup contact with others [scan an invite QR code 
or share an invite link](#howtoe2ee). 
This is required when using a (default) chatmail-based chat profile 
because chatmail servers reject un-encrypted outgoing messages.

If you create a chat profile with a classic e-mail address 
you may manually create a contact if you know their e-mail address
and then write a message to them 
even if the recipient is not using Delta Chat.


### ¿Cuáles son las ventajas de Delta Chat comparado con otras aplicaciones de mensajería?

- Anonymous chat profiles with fast, secure and interoperable [chatmail servers](https://delta.chat/chatmail)
  which offer instant Push Notifications for iOS and Android devices. 

- Pervasive [multi-profile](#multiple-accounts) and multi-device support on all platforms. 

- Interactive [web apps in chats](https://webxdc.org/apps) for gaming and collaboration

- [Audited end-to-end encryption](#security-audits) 
  safe against network and server attacks. 

- Free and Open Source software, both app and server side. 
  Built on [E-mail and Web Internet Standards](https://github.com/deltachat/deltachat-core-rust/blob/master/standards.md), 
  [to avoid "yet another standard syndrome (xkcd 927)"](https://xkcd.com/927/) 


### ¿Qué pasa si espero un mensaje de alguien a quien no le escribí en el pasado?

- Si un mensaje proviene de un contacto desconocido, aparece como una **solicitud**. Necesitas aceptar la solicitud antes de poder responder.
- También puedes "eliminarlo" si no quieres chatear con ellos por ahora. Esto *no* elimina el mensaje en el servidor, solo en tu dispositivo. Por lo tanto, aún puedes manejar el mensaje en una aplicación de correo diferente.
- Si eliminas una solicitud, los mensajes futuros de ese contacto seguirán apareciendo como solicitud de mensaje, por lo que puedes cambiar de opinión. Si realmente no quieres recibir mensajes de esta persona, considera *bloquearlos*.


### ¿Delta Chat soporta envío de imágenes, videos, documentos y otros archivos?

- Si. Además del texto sin formato, todos los archivos adjuntos de correo electrónico se muestran como mensajes separados. Los mensajes salientes obtienen archivos adjuntos según sea necesario automáticamente.

- Para mejorar el rendimiento, las imágenes se optimizan y se envían en un tamaño más pequeño de forma predeterminada, pero puedes enviarla como un "archivo" para conservar la original.


### What are profiles? How can I switch between them? {#multiple-accounts}

A profile is **a name, a picture** and some additional information for encrypting messages.
A profile lives on your device(s) only
and uses a chatmail or a classic e-mail server to transport messages.

On first installation of Delta Chat a first profile is created.

Later, you can tap your profile image in the upper left corner to **Add Profiles**
or to **Switch Profiles**.

You may want to use separate profiles for political, family or work related activities,
or e. g. for a dedicated "spam-profile" with which you register at websites and platforms
that tend to cause unsolicited messages ("spam") sooner or later.

You may also wish to learn [how to use the same profile on multiple devices](#multiclient).


### ¿Quién ve mi foto de perfil?

- Puede agregar una foto de perfil en su configuración. Si escribe a sus contactos
o los agrega a través de un código QR, ellos lo verán automáticamente como su foto de perfil.

- Los contactos que no usen Delta Chat no verán la foto de perfil
  (a menos que instalen Delta Chat :)

- Por cuestiones de privacidad, nadie verá su foto de perfil hasta que les escriba un mensaje.

- Su foto de perfil no se envía con cada mensaje, pero con la frecuencia suficiente para
que sus contactos vuelvan a recibir su foto de perfil, incluso si agregan un nuevo
dispositivo.


### Can I set a Bio/Signature/Status/Motto with Delta Chat? {#signature}

Yes,
you can do so under **Settings → Profile → Bio**.
Your contacts who use Delta Chat will see it
when they view your contact details.
Moreover, it will appear as a classic e-mail signature.


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


### ¿Qué significa el punto verde?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [webxdc app](#webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


### ¿Cómo funciona la desaparición de mensajes? {#ephemeralmsgs}

Puedes activar "desaparición de mensajes"
en la configuración de un chat,
en la parte superior derecha de la ventana de chat,
seleccionando un lapso de tiempo
entre 1 minuto y 5 semanas.

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


## Instant message delivery and Push Notifications {#instant-delivery}


### What are Push Notifications? How can I get instant message delivery?

Push Notifications are sent by Apple and Google "Push services" to a user's device
so that an inactive Delta Chat app can fetch messages in the background
and show notifications on a user's phone if needed.

Push Notifications work with all [chatmail](https://delta.chat/chatmail) servers on

- iOS devices, by integrating with Apple Push services.

- Android devices, by integrating with the Google FCM Push service,
  including on devices that use [microG](https://microg.org)
  instead of proprietary Google code on the phone.

As of May 2024, classic e-mail servers do not support Push Notifications
for Delta Chat users.


### Are Push Notifications enabled on iOS devices? Is there an alternative?

Yes, Delta Chat automatically uses Push Notifications for [chatmail](https://delta.chat/chatmail) profiles.
And no, there is no alternative on Apple's phones to achieve instant message delivery
because Apple devices do not allow Delta Chat to fetch data in the background.
Push notifications are automatically activated for iOS users because
[Delta Chat's privacy-preserving Push Notification system](#privacy-notifications)
does not expose data to Apple that it doesn't already have.


### Are Push notifications enabled / needed on Android devices? {#android-push}

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


### How private are Delta Chat Push Notifications? {#privacy-notifications}

Delta Chat Push Notification support avoids leakage of private information.
It does not leak e-mail, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Here is how Delta Chat apps perform Push Notification delivery:

- A Delta Chat app obtains a "device token" locally and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives an e-mail for a Delta Chat user
  it forwards the "device token" to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy forwards
  the "device token" to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or e-mail address of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the chatmail or e-mail address of the device it wakes up.
  The central Apple/Google Push services never see an e-mail address (sender or receiver)
  and also never see any message content (also not in encrypted forms).

As of May 2024, chatmail servers know about "device tokens"
but we plan to encrypt this information to the notification proxy
such that the chatmail server never learns the device token.

The central Delta Chat notification proxy [is small and fully implemented in Rust](https://github.com/deltachat/notifiers)
and forgets about device-tokens as soon as Apple/Google/etc processed them,
usually in a matter of milliseconds.

Resulting from this overall privacy design, even the seizure of a chatmail server,
or the full seizure of the central Delta Chat notification proxy
would not reveal private information that Push services do not already have.


### Why does Delta Chat integrate with centralized proprietary Apple/Google push services?

Delta Chat is a free and open source decentralized messenger with free server choice,
but we want users to reliably experience "instant delivery" of messages,
like they experience from Whatsapp, Signal or Telegram apps,
without asking questions up-front that are more suited to expert users or developers.

Note that Delta Chat has a [small and privacy-preserving Push Notification system](#privacy-notifications)
that achieves "instant delivery" of messages for all chatmail servers
including a potential one [you might setup yourself without our permission](https://delta.chat/chatmail#selfhosted).
Welcome to the power of the interoperable and massive chatmail and e-mail system :)


## Cifrado y seguridad

### ¿Qué estándares se utilizan para el cifrado de extremo a extremo? 

[Autocrypt](https://autocrypt.org) is used for automatically
establishing end-to-end encryption with contacts and group chats.
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure).
End-to-End encrypted messages are marked with a padlock 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>.

[Protocolos de Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
se utilizan para establecer chats con cifrado de extremo a extremo garantizado
que protege contra ataques de red y servidores comprometidos.
Los chats marcados con una estampilla verde
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
garantizan mensajes cifrados de extremo a extremo.

### ¿Cómo puedo saber si los mensajes están cifrados de extremo a extremo? {#whene2e}

Todos los mensajes cifrados de extremo a extremo tienen un candado:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

El cifrado de extremo a extremo está garantizado si hay una estampilla verde  cerca del nombre del chat: 

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### ¿Cómo puedo obtener cifrado de extremo a extremo garantizado y estampillas verdes? {#howtoe2ee}

If you have a second communication channel with your chat partner,
like a video chat or a different messenger,
you can generate an invite link.

If you are together in person,
you can show a QR code to your chat partner.

- For **Group invitations**,
  tap the chat group title to see its member list,
  and select "QR Invite code".

- For **direct 1:1 chat invitations**,
  tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen.

Let your chat partner scan the QR image
with their Delta Chat app,
or click "Copy" or "Share" to create an invite link
and share it with your chat partner.

Now wait while [Secure-Join network messages are exchanged](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol) between both devices.

- Si ambos dispositivos están en línea,
ambas partes eventualmente verán un chat (grupal o directo) con una estampilla verde
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
junto al título.

- Si uno de los dispositivos está sin conexión, las estampillas verdes solo aparecerán más tarde cuando el dispositivo vuelva a estar conectado a Internet y se complete el protocolo de red Secure-Join.

¡Felicitaciones!
Ahora utilizarás automáticamente el cifrado de extremo a extremo garantizado
con este contacto y ambos pueden agregarse mutuamente a grupos con estampilla verde
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>,
de esta manera se propagará automáticamente el cifrado de extremo a extremo garantizado entre sus miembros.


### ¿Qué significa la estampilla verde y "cifrado de extremo a extremo garantizado"? {#e2eeguarantee}

Títulos de chat con estampillas verdes
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
significan que todos los mensajes en el chat estarán cifrados de extremo a extremo
y no pueden ser leídos o alterados por servidores de correo electrónico o proveedores de Internet comprometidos.
Unirse a chats grupales con estampillas verdes
difunde de manera segura la información de cifrado de todos (y las estampillas verdes)
de una manera que garantiza el cifrado de extremo a extremo en el grupo y entre los miembros.

Perfiles de contacto con estampillas verdes
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
significa que el envío de mensajes a un contacto está actualmente garantizado que está cifrado de extremo a extremo.
Cada contacto con estampilla verde hizo un escaneo directo de [QR](#howtoe2ee) contigo
o fue presentado por otro contacto con estampilla verde.
Las presentaciones ocurren automáticamente al agregar miembros a grupos.
Quien agregue un contacto a un grupo con estampilla verde se convierte en un presentador
para aquellos miembros que aún no conocían al contacto agregado.
En un perfil de contacto, puedes tocar repetidamente el texto "Presentado por ..."
hasta llegar al que hizo un escaneo directo de [QR](#howtoe2ee) contigo.

Ten en cuenta que en un perfil de contacto puedes ver y tocar a las personas que te presentaron a ese contacto, pero puede pasar que no haya una estampilla verde en el título del perfil. Esto generalmente significa que el contacto ["envió un mensaje desde otro dispositivo"](#nocryptanymore).

Para obtener una discusión más detallada sobre "cifrado de extremo a extremo garantizado", por favor consulta los [protocolos Secure-Join](https://securejoin.delta.chat/en/latest/new.html) y lee específicamente sobre "Grupos Verificados", el término técnico de lo que aquí se llama chats "marcados con una estampilla verde" o "cifrados de extremo a extremo garantizado".


### Un contacto "envió un mensaje desde otro dispositivo", ¿qué puedo hacer? {#nocryptanymore}

Tu chat con un contacto perdió el cifrado de extremo a extremo garantizado.
La estampilla verde fue eliminada para este chat y contacto cuando veas esta advertencia.
**Si encuentras sorprendente la repentina pérdida de cifrado de extremo a extremo garantizado
para este contacto, ¡no aceptes la advertencia!**
En su lugar, verifica con tu contacto a través de un segundo canal
como una videollamada, otra app de chat o una llamada telefónica,
para averiguar qué sucedió.

Si tu contacto realmente causó la caída del cifrado de extremo a extremo garantizado, por favor vea los siguientes párrafos para conocer las razones comunes y sus mitigaciones. Sin embargo, todos los demás chats marcados con una estampilla verde siguen estando cifrados de extremo a extremo garantizado, incluso si el contacto es miembro allí.

**Tu contacto está usando Delta Chat en un segundo dispositivo (teléfono o computadora portátil)**

Si tienen otro dispositivo con la aplicación Delta Chat en funcionamiento,
deben eliminar la cuenta del nuevo dispositivo
y agregarla [como un segundo dispositivo según se describe aquí](#multiclient).
Tan pronto como te envíen un mensaje después, la advertencia desaparecerá
y se establecerá el cifrado garantizado con ambos dispositivos de tu contacto.

**Tu contacto reinstaló Delta Chat utilizando su antiguo inicio de sesión de cuenta**
 
Si tienen [un archivo de respaldo](#backup),
deben eliminar la cuenta del nuevo dispositivo
y en su lugar importar el archivo de respaldo para recrear su cuenta.
Tan pronto como te envíen un mensaje después, la advertencia desaparecerá
y se restablecerá el cifrado garantizado para este contacto.

Si no tienen un archivo de respaldo, es mejor realizar un [escaneo QR](#howtoe2ee) con tu compañero de chat para restablecer el cifrado de extremo a extremo garantizado.

**Tu contacto envió un correo a través de una interfaz de correo web o otra aplicación de correo electrónico y volverá a usar Delta Chat pronto.**

Si estás seguro de que el contacto a veces utiliza webmail,
o alguna otra aplicación de correo que carece de cifrado de extremo a extremo,
entonces puedes aceptar la advertencia.
Tan pronto como tu contacto vuelva a utilizar Delta Chat,
el cifrado de extremo a extremo garantizado se restablecerá automáticamente.

**Tus contactos dejaron de usar Delta Chat completamente**

A veces, mantenerse en contacto es más importante que el cifrado de extremo a extremo. El cifrado de capa de transporte [("Transport Layer Encryption" o TLS)](#tls) puede proteger de manera significativa la confidencialidad de tus mensajes entre tu dispositivo y el servidor de correo electrónico. Pero sin el cifrado de extremo a extremo, tú y tu contacto están confiando en que el servidor de correo electrónico no lea ni manipule tus mensajes, y que no los entregue a terceros.

En cualquier caso, no puedes hacer mucho más que aceptar la advertencia.
Por favor, también elimina el contacto de cualquier grupo activo con estampilla verde
que puedas encontrar en "Chats compartidos" en el perfil del contacto.
Esto evitará que tu contacto reciba mensajes "ilegibles".

Si el contacto eliminó Delta Chat debido a un comportamiento defectuoso o indeseable,
por favor considera publicar en nuestro [foro de soporte](https://support.delta.chat)
para ayudarnos a identificar y solucionar problemas comunes. ¡Gracias!


### ¿Los adjuntos (imágenes, archivos, audio, etc.) están cifrados de extremo a extremo?

Yes.

Cuando hablamos de un mensaje "cifrado de extremo a extremo",
siempre nos referimos a que todo el mensaje está cifrado,
incluyendo todos los archivos adjuntos
y los metadatos de los archivos adjuntos, como los nombres de archivo.


### ¿Es OpenPGP seguro? {#openpgp-secure}

Sí, Delta Chat utiliza un subconjunto seguro de OpenPGP
y solo muestra un indicador de seguridad de candado en un mensaje
si todo el mensaje está correctamente cifrado y firmado.
Por ejemplo, las "firmas desvinculadas" no se consideran seguras.

OpenPGP is not insecure by itself.
Most publically discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019](https://delta.chat/assets/blog/2019-first-security-review.pdf). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### ¿Consideraron usar alternativas a OpenPGP para el cifrado de extremo a extremo? {#openpgp-alternatives}

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


### ¿Se expone un mensaje en texto claro si no está disponible el cifrado de extremo a extremo? {#tls}

Even if your messages are not guaranteed to be end-to-end encrypted, 
they are still protected from Internet providers like cell or cable companies. 
However, your and your recipient's e-mail providers 
may read, analyze or even modify your messages, 
including any attachments,
if they are not end-to-end encrypted. 

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

Ten en cuenta que [mantener un cifrado de extremo a extremo garantizado](#howtoe2ee) sobre el cifrado TLS proporciona seguridad generalizada entre tus dispositivos y los del destinatario. Ni siquiera tu proveedor de correo electrónico o de Internet podrá leer o modificar tus mensajes.


### ¿Cómo Delta Chat protege los metadatos en los mensajes? {#message-metadata}

Delta Chat protege la mayoría de los metadatos de los mensajes al colocar la siguiente información en la parte cifrada de extremo a extremo de los mensajes:

- Subject line 
- Group avatar and name 
- MDN (read receipt) requests (`Chat-Disposition-Notification-To`)
- Disappearing message timer (`Ephemeral-Timer`) 
- `Chat-Group-Member-Removed`, `Chat-Group-Member-Added` 
- `Secure-Join` header containing secure join commands
- Notification about enabling location streaming
- WebRTC room URL

Los servidores de correo electrónico no obtienen acceso a estos metadatos protegidos
pero sí ven la fecha del mensaje así como el tamaño del mensaje,
y, lo que es más importante, las direcciones del remitente y del destinatario.
Los servidores de correo electrónico necesitan direcciones de destinatarios para enrutar y
entregar mensajes a los dispositivos del destinatario.


### ¿Cómo proteger los metadatos y los contactos cuando se incauta un dispositivo? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a [chatmail server](https://delta.chat/chatmail)
to create pseudonymous temporary profiles through QR-code scans.
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then contacts using temporary profiles
can not be identified easily, as compared to messengers which reveal
phone numbers in chat groups which in turn are often associated with legal identities.


### ¿Cómo puedo verificar la información de cifrado?

Puede verificar manualmente el estado de cifrado de extremo a extremo en el diálogo "Cifrado" (perfil de usuario en Android/iOS o hacer clic derecho en el elemento de lista de chat de un usuario en el escritorio). Delta Chat muestra dos huellas digitales allí. Si las mismas huellas digitales aparecen en su propio dispositivo y en el dispositivo de su contacto, la conexión es segura.


### ¿Cómo puedo verificar el estado de cifrado de los mensajes?

Un pequeño **candado** en una burbuja de mensaje indica que el mensaje fue correctamente cifrado de extremo a extremo por el remitente dado. Si no hay **candado**, es probable que el mensaje no esté correctamente cifrado de extremo a extremo, ya que el remitente utiliza una aplicación o interfaz de correo web sin soporte para el cifrado de extremo a extremo.


### ¿Por qué veo mensajes sin cifrar?

If a contact uses a non-Autocrypt e-mail app,
all messages involving this contact (in a group or 1:1 chat)
will not be end-to-end encrypted, and thus not show a "padlock" with messages.
Note that even if your contacts use Delta Chat on their account,
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages.
Replying unencrypted to unencrypted messages is mandated by Autocrypt
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app.

### ¿Cómo puedo obtener un chat cifrado de extremo a extremo con un contacto de Delta Chat que a veces utiliza webmail u otra aplicación de correo electrónico no Autocrypt?

Si necesitas un chat cifrado de extremo a extremo de forma segura con un contacto que está utilizando su cuenta tanto con Delta Chat como con aplicaciones no-Autocrypt (por ejemplo, webmail), lo mejor es configurar [cifrado de extremo a extremo garantizado con ellos](#howtoe2ee) y luego crear un grupo cifrado de extremo a extremo garantizado con ustedes dos como miembros. En este chat de grupo, todos los mensajes estarán cifrados de extremo a extremo, incluso si el chat directo entre ustedes dos tiene una advertencia de ["… envió un mensaje desde otro dispositivo"](#nocryptanymore).


### ¿Cómo puedo asegurar el cifrado de extremo a extremo y la eliminación de mensajes?

La mejor manera de asegurar que cada mensaje esté cifrado de extremo a extremo
y que los metadatos se borren lo más rápido posible
es [utilizando chats con cifrado de extremo a extremo garantizado](#howtoe2ee)
y activando la [desaparición de mensajes](#ephemeralmsgs).

Los chats con cifrado de extremo a extremo garantizado protegen contra ataques [MITM](https://es.wikipedia.org/wiki/Ataque_de_intermediario)
y al activar "mensajes efímeros" se borran los mensajes
en el servidor después de un tiempo configurado por el usuario.

Si no necesitas una copia de tus mensajes en el servidor durante más tiempo,
también puedes activar ["eliminar mensajes del servidor automáticamente"](#delold).


### ¿Soporta Delta Chat Perfect Forward Secrecy? {#pfs}

No, Delta Chat no soporta  Perfect Forward Secrecy (PFS).
Esto significa que si se filtra tu clave privada de descifrado de Delta Chat,
y alguien ha recopilado tus mensajes previos en tránsito,
podrán descifrarlos y leerlos utilizando la clave de descifrado filtrada.

Ten en cuenta, sin embargo, que si alguien obtiene tus claves de descifrado,
también podrán obtener tus mensajes,
independientemente de si se implementa o no el Perfect Forward Secrecy.
La situación típica en el mundo real para las claves de descifrado filtradas es la incautación del dispositivo,
que discutimos en nuestra respuesta [sobre metadatos e incautación de dispositivos](#device-seizure).

It is possible that Delta Chat evolves to support Perfect Forward Secrecy,
because OpenPGP is just a container for encrypted messages 
but encryption key management (and thus key rotation or key "ratcheting") 
could be organized in flexible ways. 
See [Seqouia's PFS prototype](https://gitlab.com/sequoia-pgp/openpgp-dr)
for existing experiments in the OpenPGP implementor community.


### ¿Es el cifrado de extremo a extremo de Delta Chat tan seguro como el de Signal? 

It depends on what is important to you. 
Delta Chat [does not support PFS](#pfs) like Signal does
but it provides [guaranteed end-to-end encrypted chats](#e2eeguarantee)
that are safe against compromised servers or corrupted networks. 
Signal and most other PFS-supporting messengers do not provide 
a practical scheme for protecting chat groups from network attacks
which are arguably more worrysome 
than a potential attacker who seizes your phone and private encryption setup
but somehow not your messages, yet has a full record of all 
past encrypted messages. 

In any case, Delta Chat's end-to-end encryption uses a [secure subset of OpenPGP](#openpgp-secure)
which has been [independently security-audited](../assets/blog/2019-first-security-review.pdf).

### ¿Puedo reutilizar mi clave privada existente?

- Si. La mejor manera es enviar un Mensaje de Configuración de Autocrypt desde el otro cliente de correo electrónico. Busca algo como **Iniciar la Transferencia de la Configuración Autocrypt** en la configuración del otro cliente y seguir las instrucciones que se muestren allí.

- Alternativamente, puede importar la clave manualmente en "Configuración avanzada / Administrar claves privadas". Precaución: asegúrese de que la clave no esté protegida por una contraseña o elimine la contraseña de antemano.

Si no tienes una clave o ni siquiera sabes para qué necesitarías una, no te preocupes: Delta Chat genera claves según sea necesario, no tienes que presionar un botón para ello.

### No puedo importar mi clave PGP existente en Delta Chat.

La causa más probable es que su clave esté cifrada y/o utilice una contraseña.
Delta Chat no admite dichas claves.
Puede eliminar el cifrado de la frase de contraseña y la contraseña e intentar importar nuevamente.

Otro error común es tener una extensión de archivo incorrecto.
Utilice el formato blindado ASCII y una extensión de archivo `.asc`.

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

### ¿Se auditó Delta Chat de forma independiente en busca de vulnerabilidades de seguridad? {#security-audits}

The Delta Chat project underwent four independent security audits and one
independent security analysis, from most recent to older: 

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

Si. Delta Chat 1.36 viene con una nueva funcionalidad experimental que permite usar la misma cuenta en diferentes dispositivos:

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

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- **Guest Networks** may not allow devices to communicate with each other.
  If possible, use a non-guest network.

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

- Las aplicaciones webxdc no pueden enviar datos a Internet ni descargar nada.
- Una aplicación webxdc solo puede intercambiar datos dentro de un chat de Delta Chat, con su
copias en los dispositivos de tus compañeros de chat. Aparte de eso, es completamente
aislado de Internet.
- La privacidad que ofrece una aplicación webxdc es la privacidad de tu chat, siempre y cuando
confíe en las personas con las que chateas, también puedes confiar en la aplicación webxdc.
- Esto también significa: puede suponer un riesgo para la privacidad abrir aplicaciones webxdc en chats donde
no confías en los miembros, como lo sabes por los archivos adjuntos de correos electrónicos, donde
solo abre archivos adjuntos de remitentes en los que confía y no de spammers.


### ¿Dónde puedo obtener aplicaciones webxdc?

- In general, anyone can share webxdc apps with each
  other without restrictions.
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
  this way, you will have a new random jitsi room every time you call someone.


### ¿Qué son las listas de difusión y cómo puedo usarlas?

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


### Quiero manejar mi propio servidor de correo para Delta Chat. ¿Qué me recomiendan?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### ¿Por qué debo ingresar mi contraseña de correo electrónico en Delta Chat? ¿Es esto seguro?

Al igual que con otros programas de correo electrónico como Thunderbird, K9-Mail o Outlook, el
programa necesita la contraseña para que pueda usarla para enviar correos. Por supuesto, la
contraseña se almacena solo en su dispositivo. La contraseña solo se transmite a
su proveedor de correo electrónico (cuando inicia sesión), que tiene acceso a sus correos de todos modos.

Como Delta Chat es de Código Abierto, puedes investigar el Código Fuente si quieres verificar que tus credenciales son gestionadas de manera segura.
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


### ¿Delta Chat es compatible con Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be end-to-end
  encrypted, though. The end-to-end encryption those providers offer is not
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can end-to-end-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### ¿Cómo puedo eliminar mi cuenta?

Al utilizar una cuenta de correo electrónico para Delta Chat,
La forma de eliminar tu cuenta depende de tu proveedor de correo electrónico.
No tenemos ningún control sobre su cuenta de correo electrónico,
Lamentablemente no podemos ayudarte con eso.

Si quieres mantener la cuenta, pero desinstalar Delta Chat, se recomienda salir de cualquier chat grupal antes de desinstalar Delta Chat.


### Estoy interesado en los detalles técnicos. ¿Pueden decirme más?

- Visita la página [Estándares usados en Delta Chat]({% include standards-url %}).


### ¿Cómo se financia el desarrollo de Delta Chat?

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretamente, los desarrollos de Delta Chat hasta ahora han sido financiados a partir de estas fuentes:

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

 [Donar dinero](donate){: .cta-button}

- Por último, pero no por ello menos importante, varios expertos pro-bono y entusiastas contribuyeron
y contribuyen a los desarrollos de Delta Chat sin recibir dinero, o sólo
pequeñas cantidades. Sin ellos, Delta Chat no estaría donde está hoy, ni 
siquiera cerca.

La financiación monetaria mencionada anteriormente es principalmente organizada por merlinux GmbH en Freiburg (Alemania), y se distribuye a más de una docena de colaboradores en todo el mundo.

Por favor, consulta [Canales de contribución de Delta Chat](contribute) para conocer las posibilidades de contribución tanto monetarias como otras.
