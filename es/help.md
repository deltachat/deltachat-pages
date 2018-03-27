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

## ¿Qué pasa si el receptor no usa Delta Chat?

- El destinatario recibirá un correo electrónico normal, y si le responde a usted, usted verá la respuesta en Delta Chat tal como espera.

## ¿Cuales mensajes aparecerán el Delta Chat?

Delta Chat muestra automáticamente...

- Mensajes de contactos en la **libreta de direcciones**
- Mensajes de contactos **contactados por vos**
- **Respuestas** a mensajes enviados por vos

Otros mensajes no aparecen automáticamente. Podes verlos en el menú principal en **Solicitudes de contacto** y, si querés, iniciar una conversación desde ahí.

## ¿Qué pasa con el Spam?

- Los mensajes que están en las carpetas comunes de Spam son ignorados y las direcciones que contengan no serán consideradas como contactos conocidos.
- Como los mensajes de remitentes desconocidos no son mostrados automáticamente, generalmente, no habrá **Spam**.
- Sin embargo, si fuera realmente necesario, podes **bloquear** cualquier a contacto.

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

- Si un pequeño **candado** es mostrado al lado de un mensaje, implica que ese mensaje esta cifrado punto a punto _y_ fue enviado por el remitente que muestra _y_ tu respuesta también sera cifrada punto a punto.
-Si **no hubiera candado**, el mensaje es generalmente transportado cifrado, quizás vos o el quien lo envía desactivo el cifrado punto a punto o el remitente usa una aplicación que no soporta cifrado punto a punto.


## ¿Como puedo verificar el remitente?

El perfile del usuario muestra información adicional:

- Para un cifrado punto a punto, Delta Chat muestra dos huellas criptográficas. Si son idénticas a las que muestra el dispositivo de tu compañero de conversación, esto quiere decir que la conexión es segura.
- Para el cifrado de transporte, el estado se mostrara allí.


## ¿qué estándares se utilizan para el cifrado punto a punto?

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


# Miscelaneo

## Delta Chat en Linux

- Delta Chat funciona en Ubunu Linux (o en cualquier otra distribución que soporte el formato de paquetes **snap**) simplemente instalando [Anbox](https://anbox.io) (Android in a Box) desde la terminal:

 $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- Para agregar la aplicación Delta Chat, descarga el archivo *com.b44t.messenger_\<version\>.apk* desde [esta](download) pagina e instalalo desde la terminal:

 $ *adb install path/to/com.b44t.messenger_\<version\>.apk*

adb son las siglas de Android Debug Brige y puede ser instalado desde los repositorios.

- En vez de instalar Delta Chat directamente desde el archivo APK, podes primero instalar el almacén de aplicaciones F-Droid vía [F-Droid-APK](https://f-droid.org/FDroid.apk)  y luego desde allí instalar Delta Chat. La mayor ventaja es que te informara sobre las actualizaciones y migrara la información y las conversaciones al instalarlas.


# Problemas de Login

Tengo un problema con ...

- Gmail: habilitar "Soporte para aplicaciones poco seguras" e IMAP, debería llegarte un mail para conceder permisos

## Estoy interesado en los detalles técnicos. ¿Podrías decirme más?

-- Visitá la pagina [Estándares usados en Delta Chat]({% include standards-url %}).
