---
title: Preguntas frecuentes
layout: default-es
---

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

- Es _independiente_ de cualquier empresa de servicios. _Su_ información es solo _suya_.
- Su informacin no es almacenada en un servidor central; a diferencia de la mayoría de los mensajeros instantáneos, Delta Chat proteje incluso su meta-informacin (quién le escribe a quién?)
- Usted no le entrega su libreta de contactos a ninguna empresa.
- Es _rápido_ gracias al uso del protocolo Push-IMAP
- _Alcanza a la mayor cantidad de usuarios_ - los destinatarios que _no_ usan Delta Chat reciben sus mensajes por correo
- _Compatible_ - no solo consigo mismo sino con cualquier casilla de correo
- _Elegante_ y _simple_ interfaz de usuario
- Sistema _distribuído_ - ninguna empresa centraliza la información de todos los usuarios del sistema
- _Sin Spam_ - solo muestra por defecto los mensajes de sus contactos conocidos
- _Fehaciente y seguro_ - incluso para uso profesional, como cualquier otro correo electrónico
- _Confiable_ - incluso para mensajes confidenciales y de negocios
- completamente _software libre_ y basado en _estándares_

## Qué pasa si el destinatario de mis mensajes no tiene o no usa Delta Chat?

- El destinatario recibirá un correo electrónico normal, y si le responde a usted, usted verá la respuesta en Delta Chat tal como espera.

## Which messages do appear in Delta Chat?

Delta Chat automatically shows ...

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages send by you

Other messages do not appear automatically. You can see the other messages in the main menu at **Contact requests** and, if desired, start a chat from there.

## What about Spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if really needed, you can **block** any contact.

## Delta Chat soporta envío de imágenes, vidéos, documentos y otros archivos?

- Sí. Además del texto puro del mensaje, también se mostrarán los archivos adjuntos al mensaje. En los mensajes enviados se adjuntarán los archivos que usted quiera compartir.

## Delta Chat soporta mensajes con formato HTML?

- Sí. Incluso si le envian mensajes HTML a usted, el texto será convertido automaticamente para que usted pueda leerlo en la aplicación. Los mensajes enviados serán en formato de texto puro. 

# Grupos

## Cómo puedo crear grupos de chat?

- Seleccione **Nuevo grupo** desde el "Menu".
- En la siguiente pantalla, seleccione los **miembros del grupo** y confirme en la esquina superior derecha. Luego, ingrese el **nombre del grupo**.
- Al enviar el **primer mensaje** en el grupo, todos los miembros del mismo reciben la notificacin y pueden responder también al grupo (hasta que usted no envíe el primer mensaje los demás miembros no podrán ver el grupo).

## Quién puede añadir miembros a un grupo?

- Todos los miembros del grupo tienen los **mismos derechos** que los demás. Por esta razón, todos pueden eliminar o añadir miembros al grupo.
- Para añadir o eliminar miembros, haga clic en el nombre del grupo en la pantalla de chat.

## Me he eliminado a mí mismo accidentalmente de un grupo.

- Al no ser ya miembro del grupo, no puede volver a añadirse usted mismo. Simplemente pida a cualquier otro miembro que lo vuelva a añadir.

## No quiero recibir nuevamente mensajes de un determinado grupo.

- Puede eliminarse usted mismo de la lista, o directamente eliminar el chat completo. Si más tarde quiere volver al grupo, pida a cualquier otro miembro que lo vuelva a añadir a la lista.
- Alternativamente, usted puede "Silenciar" (Mute) un grupo, de este modo, usted podrá leer y enviar mensajes al grupo, pero no recibirá notificaciones indeseadas.

# Encriptación {#encryption}

## Delta Chat posee un método de encriptación de mensajes desde un extremo al otro?

- Sí.

## Qué debo hacer para activar la encriptacin de extremo a extremo?

- Nada.

- Delta Chat (así como otros programas de correo compatibles con [Autocrypt](https://autocrypt.org)) intercambiasn las claves de autoencriptación automáticamente al enviar/recibir el primer mensaje. A partir de allí, todos los mensajes son encriptados automáticamente. Si algún destinatario posteriormente utiliza un programa que no es compatible con encriptación, la misma se pausa automaticamente, y se reinicia cuando el contacto vuelva a disponer de autoencriptación.

- Si quiere _desactivar_ la encriptación de extremo a extremo, use la configuración correspondiente en "Ajustes / Ajustes avanzados".

## Si la encriptación extremo a extremo no está disponible, toda la comunicación es insegura?

- No. En tal caso, la encriptación con el servidor de correo se sigue utilizando igualmente.


## Cómo puedo verificar la encriptación?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is send from the given sender _and_ your answer will be end-to-end-encrypted as well.
- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## How can I verify the sender?

The user's profile shows some additional information:

- For an end-to-end-encryption, Delta Chat show two fingerprints there. If they are the same on the device of your chat partner, the connection is safe.
- For transport encryption, this state is just shown there


## Qué estándares se utiliza para la encriptación.

- OpenPGP. En el envío de las claves se realiza mediante [Autocrypt](https://autocrypt.org).

## Puedo reutilizar una clave pre-existente?

- Sí. Importing it at "Advanced settings / Manage private keys". Caution: Make sure, they key is not protected by a password or remove it before.

Si no posee una clave, no se preocupe, Delta Chat generará una clave automaticamente.

# Multiples dispositivos {#multiclient}

## Puedo usar Delta Chat en varios dispositivos al mismo tiempo?

- Si quiere utilizar **la misma cuenta** de correo en diferentes dispositivos con Delta Chat, asegurese que todos los dispositivos utilizan la misma clave de encriptación:

 - En el primer dispositivo que configure, seleccione "Ajustes avanzados / Gestionar claves privadas / Export to Downloads"
 - Copie los archivos de claves de "Downloads" en el primer dispositivo hacia el segundo dispositivo.
 - En el segundo dispositivo seleccione "Ajustes avanzados / Gestionar claves privadas / Import from Downloads"

- Todo esto **no es necesario** para usar Delta Chat en un solo dispositivo.

- NB: En modo de múltiples dispositivos, los mensajes _recibidos_ se muestran al mismo tiempo en todos los dispositivos. Los mensajes _enviados_ se sincronizan dos veces por hora. Tal vez podemos mejorar esto, pero necesitamos [ayuda](contribute) con este asunto.


# Miscellaneous

## Delta Chat on Linux Desktop

- You can run Delta Chat on Ubuntu Linux desktop (or other linux distributions supporting the **snap**-package format) by simply installing [Anbox](https://anbox.io) (Android in a Box) from terminal:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- To add the Delta Chat application, download the *com.b44t.messenger_\<version\>.apk* file from [this](download) page and install it from terminal:

  $ *adb install path/to/com.b44t.messenger_\<version\>.apk*

  adb is the Android Debug Bridge and can be installed from repository.

- Instead of installing Delta Chat directly via APK file, you can first install the F-Froid store via [F-Droid-apk](https://f-droid.org/FDroid.apk) and then install Delta Chat using the store. The great benefit is the information about updates and the migration of existing config and chat data.


# Problemas de Login

I have a problem with ...

- Gmail: Enable "Support less secure apps" and IMAP, you may receive a mail to grant permission

## I'm interested in the technical details. Can you tell me more?

- See page [Standards used in Delta Chat]({% include standards-url %}).
