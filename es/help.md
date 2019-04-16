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

## What is Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat is a new chat app that uses e-mails for transfering messages. 
If you receive a chat message just use your e-mail app to read the
message and reply. **You are not required to sign up anywhere, go to a website
or install Delta Chat.**

## How can i find people to chat with? 

With Delta Chat, you can write to every existing e-mail address - even
if the recipient is not using the Delta Chat App. This is one of
the biggest differences to other messengers: There is no need for the
receiver to install the same app as yours.

## Cuáles son las ventajas de Delta Chat comparado con otras aplicaciones de mensajería?

- _Independiente_ de cualquier empresa o servicio. _Tú_ eres dueño de tus datos.
- Tus datos no se guardan en un servidor central; de esta manera, a diferencia de la mayoría de las otras aplicaciones de mensajería, Delta Chat incluso protege tus metadatos (¿quién escribe a quién?)
- No distribuyes tu libreta de direcciones a nadie.
- _Rápido_ gracias al uso de Push-IMAP
- _La mayor cantidad de usuarios_ - también se puede contactar con los receptores que _no_ usan Delta Chat
- _Compatible_ - no sólo consigo mismo
- _Elegante_ y _simple_ interfaz de usuario
- Sistema _distribuido_
- _No hay spam_: sólo se muestran de forma predeterminada los mensajes de usuarios conocidos
- _Seguro_ - seguro para uso profesional
- _Confiable_ - incluso se puede utilizar para mensajes de negocios
- Totalmente _Código Libre_ y basado en _Standards_

## ¿Cuáles mensajes aparecerán en Delta Chat?

Delta Chat muestra automáticamente...

- Mensajes de contactos en tu **libreta de direcciones**
- Mensajes de contactos **contactados por ti**
- **Respuestas** a mensajes enviados por ti

Otros mensajes no aparecen automáticamente. Podes verlos en el menú principal en **Solicitudes de contacto** y, si querés, iniciar una conversación desde ahí.

## ¿Qué pasa con el Spam?

- Los mensajes en la carpeta de spam se ignoran y las direcciones de los que envían esos mensajes no se consideran contactos conocidos.
- Como los mensajes de contactos desconocidos no aparecen automáticamente, normalmente **no hay spam**.
- Sin embargo, si es necesario, puede **bloquear** cualquier contacto.

## Delta Chat soporta envío de imágenes, vidéos, documentos y otros archivos?

- Sí. Además del texto puro del mensaje, también se mostrarán los archivos adjuntos al mensaje. En los mensajes enviados se adjuntarán los archivos que usted quiera compartir.

## Delta Chat soporta mensajes con formato HTML?

- Sí. Incluso si le envian mensajes HTML a usted, el texto será convertido automaticamente para que usted pueda leerlo en la aplicación. Los mensajes enviados serán en formato de texto puro. 

# Grupos

## Cómo puedo crear grupos de chat?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## ¿Cómo agregar miembros a un grupo?

- Todos los miembros del grupo tienen los **mismos derechos** que los demás. Por esta razón, todos pueden eliminar o añadir miembros al grupo.
- Para añadir o eliminar miembros, haga clic en el nombre del grupo en la pantalla de chat.

## ¿Qué es un grupo verificado?

- Un "grupo verificado" es una función experimental (desde enero del 2019).
Al agregarse unos a otros a través de escanear códigos QR, un grupo de miembros "verificados" pueden hablar juntos. Esto hace que el cifrado de grupo e2e sea seguro, evitando manipulación de nuestros proveedores o ataques a la red. Sin embargo, algunas pruebas de usuarios y comentarios sugieren que es necesario mejorar esta funcionalidad. Se pueden encontrar discusiones recientes al respecto aquí: https://countermitm.readthedocs.io/en/latest/new.html

## Me he eliminado a mí mismo accidentalmente de un grupo.

- Como ya no eres miembro del grupo, no puedes volver a agregarte tu mismo.
Sin embargo, no hay problema, solo pídele a cualquier otro miembro del grupo en un chat normal que te agregue de nuevo.

## No quiero recibir nuevamente mensajes de un determinado grupo.

- Elimínate de la lista de miembros o elimina el chat completo.
Si deseas unirte al grupo más tarde, pídele a otro miembro del grupo que te agregue nuevamente.

- Como alternativa, también puedes "Silenciar" a un grupo. Al hacerlo, recibirás todos los mensajes y
aún puedes escribir, pero no se te notificará cuando hay nuevos mensajes en ese grupo.

# Encriptación {#encryption}

## ¿Delta Chat admite cifrado de extremo a extremo?

- Sí. DeltaChat implementa el estándar Autocrypt Nivel 1 y puede
por lo tanto, cifrar de extremo a extremo mensajes con otras aplicaciones compatibles con Autocrypt.

## Qué debo hacer para activar la encriptacin de extremo a extremo?

- Nada.

- Las aplicaciones de Delta Chat (y otras aplicaciones de correo electrónico compatibles con [Autocrypt](https://autocrypt.org)) comparten las claves necesarias para el cifrado de extremo a extremo automáticamente a medida que se envían los primeros mensajes.
Después de esto, todos los mensajes subsiguientes se cifran de extremo a extremo automáticamente.
Si uno de los compañeros de chat usa una aplicación de correo electrónico que no soporta Autocrypt, los mensajes no se cifrarán hasta que una aplicación compatible con Autocrypt sea utilizada.

- Si desea _desactivar_ el cifrado de extremo a extremo,
use la configuración correspondiente en "Ajustes / Avanzado".

## Si la encriptación extremo a extremo no está disponible, toda la comunicación es insegura?

- No. Con la mayoría de los servidores de correo electrónico se utilizará _cifrado de transporte_ (TLS) entonces.


## Cómo puedo verificar la encriptación?

- Si se muestra un pequeño **candado** junto a un mensaje, esto implica que el mensaje está encriptado de extremo a extremo _y_ se envía desde el remitente dado, _y_ su respuesta también se cifrará de extremo a extremo.

- If there is **no padlock**, the message is usually transported unencrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## ¿Como puedo verificar el remitente?

El perfile del usuario muestra información adicional:

- You can tap "QR Invite code" on Android and then use the "scan QR code"
  button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- Para un cifrado de extremo a extremo, Delta Chat muestra dos huellas digitales allí.
Si son iguales en el dispositivo de su compañero de chat, la conexión es segura.

- Para el cifrado de transporte, este estado se muestra allí.


## ¿qué estándares se utilizan para el cifrado punto a punto?

- OpenPGP. En el envío de las claves se realiza mediante [Autocrypt](https://autocrypt.org).

## ¿Puedo reutilizar mi llave privada existente?

- Si. La mejor manera es enviar un Mensaje de Configuración de Autocrypt desde el otro cliente de correo electrónico. Busca algo como **Iniciar la Transferencia de la Configuración Autocrypt** en la configuración del otro cliente y seguir las instrucciones que se muestren allí.

- Alternativamente, puede importar la clave manualmente en "Configuración avanzada / Administrar claves privadas". Precaución: asegúrese de que la clave no esté protegida por una contraseña o elimínela antes.

Si no tienes una llave o ni siquiera sabes para qué la necesitas, no te preocupes: Delta Chat genera una según sea necesario de forma automática, no tienes que hacer nada.

# Multiples dispositivos {#multiclient}

## Puedo usar Delta Chat en varios dispositivos al mismo tiempo?

Si desea utilizar la **misma cuenta** en diferentes dispositivos (que soporten Autocrypt), tienes que sincronizar sus llaves de cifrado:

- En el primer dispositivo, elija "Configuración avanzada / Enviar mensaje de configuración de Autocrypt" y haga clic hasta que aparezca un "número de seguridad".

- En el otro dispositivo, espere a que llegue el "Mensaje de configuración de Autocrypt" y haga clic en él, lo cual debe solicitarle el número de seguridad.

- ahora está sincronizado correctamente y puede usar ambos dispositivos para enviar y recibir mensajes encriptados e2e con sus compañeros.

# Miscelaneo

## ¿Delta Chat funciona con _mi_ proveedor de correo electrónico?

- Es muy probable que sí :)
Sin embargo, algunos proveedores necesitan opciones especiales para funcionar correctamente; los usuarios han recopilado algunas de ellas en el foro en [Descripción de proveedores](https://support.delta.chat/t/provider-overview/)


## Estoy interesado en los detalles técnicos. ¿Podrías decirme más?

-- Visitá la pagina [Estándares usados en Delta Chat]({% include standards-url %}).
