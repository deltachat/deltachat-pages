---
title: Política de privacidad de las aplicaciones Delta Chat
lang: es
---

# Política de privacidad de las aplicaciones Delta Chat

**Esta es la política de privacidad para las aplicaciones Delta Chat. Puedes consultar la [política de privacidad de este sitio web aquí](gdpr-website).**

## Resumen

Delta Chat es una aplicación de correo electrónico que sigue un estricto enfoque de privacidad desde el diseño. Todos los datos de comunicación permanecen en los dispositivos finales o en los servidores de correo electrónico seleccionados por el usuario.

<table>
    <thead>
        <tr>
            <th>Requisito</th>
            <th>Implementación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Confidencialidad</td>
            <td>
<b>Cifrado de extremo a extremo</b> mediante la implementación de <a href="https://autocrypt.org">Autocrypt</a> y <a href="https://countermitm.readthedocs.io/en/latest/new.html">Grupos verificados</a>. Un cifrado de extremo a extremo fácil de usar significa que los requisitos del RGPD ya se implementan a nivel técnico, <b>Privacidad desde el diseño</b>.
            </td>
        </tr>
        <tr>
            <td>Minimización de datos</td>
            <td><b>No subir</b> la lista de contactos de tu teléfono.</td>
        </tr>
        <tr>
            <td>Evitación de datos</td>
            <td><b>No hay servidores de Delta Chat</b>, no se procesan datos personales. Todos los datos permanecen con tu proveedor de correo electrónico.
            </td>
        </tr>
        <tr>
            <td>Base legal</td>
            <td>
No es necesario obtener consentimiento para la comparación de agendas, <a href="https://gdpr-info.eu/art-7-gdpr/">Art.7 RGPD</a>, ya que no se transfieren datos de la agenda. Por lo tanto, <b>no se requiere ninguna base legal adicional</b>.
            </td>
        </tr>
        <tr>
            <td>Datos a terceros</td>
            <td>Solo recibimos el <b>token de notificaciones push</b> y lo reenviamos al proveedor de tu sistema operativo. Si no quieres recibir notificaciones push, no enviaremos ningún token.</td>
        </tr>
        <tr>
            <td>Datos de terceros</td>
            <td>
Implementación sencilla en empresas: Delta Chat no procesa datos personales en nombre del responsable y, por lo tanto, <b>no requiere instrucciones ni acuerdo de tratamiento</b>. Conexión fácil con el servidor de correo corporativo.
            </td>
        </tr>
        <tr>
            <td>Evaluación de impacto (DPIA)</td>
            <td>
No es necesario realizar una <b>evaluación de impacto en la protección de datos</b> para Delta Chat según el <a href="https://gdpr-info.eu/art-35-gdpr/">Art.35 RGPD</a>, ya que no se procesan datos adicionales específicos más allá del proceso de mensajería por correo electrónico.

El riesgo para los derechos y libertades de las personas físicas se limita al procesamiento interno de la comunicación por correo electrónico y al de los proveedores de correo electrónico.
            </td>
        </tr>
        <tr>
            <td>Documentación</td>
            <td>
Incluir las medidas implementadas por Delta Chat en el <b>registro de actividades de tratamiento</b> puede tener un impacto positivo en posibles pruebas, según el <a href="https://gdpr-info.eu/art-30-gdpr/">Art.30 RGPD</a>, así como en procesos de certificación, <a href="https://gdpr-info.eu/art-25-gdpr/">Art.25 (4) RGPD</a> y <a href="https://gdpr-info.eu/art-42-gdpr/">Art.42 RGPD</a>.

La <b>documentación de actividades de tratamiento</b> relacionadas con la comunicación de mensajería se omite y se traslada únicamente al registro de tu proveedor de correo electrónico, <a href="https://gdpr-info.eu/art-30-gdpr/">Art.30(2) RGPD</a>.
            </td>
        </tr>
    </tbody>
</table>

## Información detallada sobre protección de datos

### 1. Nombre y datos de contacto del responsable del tratamiento

El responsable del tratamiento de tus datos personales es 
```
    merlinux GmbH
    Representado por el director general Holger Krekel
    Reichsgrafen Str. 20
    79102 Friburgo
    Alemania
```
Correo electrónico: [delta-privacy@merlinux.eu](mailto:delta-privacy@merlinux.eu)

Nuestro delegado de protección de datos: **Prof. Dr. Fabian Schmieder**, lexICT UG (limitada), Ostfeldstr. 49, 30559 Hannover. Puedes contactar con él en [info@lexict.de](mailto:info@lexict.de) Palabra clave: DeltaChat.

### 2. Tratamiento al usar el mensajero de correo electrónico Delta

Todos los datos se almacenan localmente en tu dispositivo o con tu proveedor de correo electrónico. Ni nosotros ni los desarrolladores de Delta Chat tenemos la posibilidad de acceder a los datos del usuario final, ya que toda la comunicación y el procesamiento de datos se realizan en el dispositivo del usuario final sin la intervención de servidores de Delta Chat. Solo para la opción de Notificación Push (ver 2.2) se procesa el Token de Notificación Push en los servidores de Delta Chat sin que estos tengan conocimiento sobre los mensajes en sí, ni siquiera en forma cifrada.

#### 2.1 Registro con tu proveedor de correo electrónico

La comunicación de Delta Chat funciona a través de tu cuenta de correo electrónico. Para establecer la conexión, la aplicación necesita los datos de acceso. Estos se almacenan únicamente de forma local en tu dispositivo:

- dirección de correo electrónico
- tu contraseña

La base legal para el tratamiento es el [Art.6 (1) lit.b RGPD](https://gdpr-info.eu/art-6-gdpr/), ya que tienes un contrato de uso con nosotros al utilizar nuestros servicios. 

#### 2.2 Notificación push de latido

Se pueden enviar notificaciones push al teléfono del usuario a intervalos regulares para permitir la recepción de mensajes mientras la aplicación Delta Chat no está activa. Los mensajes actuales se pueden recuperar en el dispositivo final. El token solo se crea si el usuario desea una recepción fiable de los mensajes incluso cuando la aplicación no está activa. 

Para utilizar las notificaciones push, se crea un identificador único o token (Token de Notificación Push) después de que la aplicación se descarga e instala. Este token permite a los servidores de Delta Chat enviar notificaciones al dispositivo del usuario. El token lo genera y proporciona el proveedor. El token se almacena en nuestros sistemas y se envía al dispositivo a intervalos regulares para hacer que la aplicación recupere nuevos mensajes del proveedor de correo electrónico. Nuestros sistemas no tienen conocimiento de si llega un mensaje o de quién puede haber enviado un mensaje.

- El proveedor de notificaciones push para sistemas iOS son los Servicios de Apple. Si las notificaciones push están habilitadas, se utiliza el Servicio de Notificaciones Push de Apple (versión iOS) para proporcionar esta función. Para más información, visita [https://support.apple.com/en-au/guide/deployment-reference-ios/ior9d28751c0/web](https://support.apple.com/en-au/guide/deployment-reference-ios/ior9d28751c0/web). Puedes encontrar la política de privacidad en [https://www.apple.com/legal/privacy/](https://www.apple.com/legal/privacy/).  

Los datos mencionados anteriormente solo se procesarán con tu consentimiento, de acuerdo con el [Art.6 (1) lit.a RGPD](https://gdpr-info.eu/art-6-gdpr/).

#### 2.3 Datos en la aplicación

La aplicación Delta Chat funciona de manera que ahorra datos. Todos los datos relevantes se almacenan exclusivamente en los respectivos dispositivos finales:

```
- historiales de chat (mensajes de texto, mensajes de voz, medios, ...).
- contactos
- configuraciones 
```
Los servidores de Delta Chat no tienen acceso a estos datos, ni siquiera en forma cifrada, ya que el procesamiento de datos solo tiene lugar en los dispositivos finales.

#### 2.4 Permisos de la aplicación

Dentro de la aplicación, puedes ingresar, gestionar y editar varias informaciones, tareas y actividades. La aplicación también requiere los siguientes permisos:

<table>
    <thead>
        <tr>
            <th>Permiso</th>
            <th>Razón</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Acceso a Internet</td>
            <td>Esto es necesario para enviar los mensajes al compañero de comunicación. </td>
        </tr>
        <tr>
            <td>Acceso a la cámara</td>
            <td>
Esto es necesario para que puedas tomar fotos y enviarlas a través de la aplicación. Además, el acceso a la cámara te permite escanear códigos QR.
            </td>
        </tr>
        <tr>
            <td>Acceso al micrófono (opcional)</td>
            <td>
Este permiso te permite enviar mensajes de voz.
            </td>
        </tr>
        <tr>
            <td>Acceso a la ubicación (opcional)</td>
            <td>
Esto es necesario si deseas compartir tu ubicación con un compañero de comunicación.
            </td>
        </tr>
        <tr>
            <td>Acceso a la ubicación en segundo plano (opcional)</td>
            <td>
Esto será necesario si deseas compartir tu ubicación durante un cierto período de tiempo.
            </td>
        </tr>
        <tr>
            <td>Acceso a contactos (opcional)</td>
            <td>
Esto te permite cargar y guardar contactos de tu agenda telefónica en la aplicación. Los datos de contacto se almacenan localmente en la aplicación y no se reenvían ni se almacenan en el servidor de Delta Chat.
            </td>
        </tr>
        <tr>
            <td>
Almacenamiento (opcional)
            </td>
            <td>Puedes guardar imágenes y archivos de la aplicación en tu dispositivo.</td>
        </tr>
    </tbody>
</table>

El procesamiento y uso de los permisos anteriores se realizan para proporcionar el servicio. El acceso a Internet es necesario para su uso, por lo tanto, la base legal del procesamiento es el [Art.6 (1) lit.a RGPD](https://gdpr-info.eu/art-6-gdpr/), ya que tienes un contrato de uso con nosotros al utilizar nuestros servicios.

Los permisos opcionales solo se llevan a cabo con base en tu consentimiento de acuerdo con el [Art.6 (1) lit.a RGPD](https://gdpr-info.eu/art-6-gdpr/) y también se pueden reducir a servicios individuales, por ejemplo, solo el uso de Internet para enviar mensajes sin imágenes o datos de ubicación. Delta Chat no recibe ningún acceso a estos datos.

### 3. Procesamiento dependiente de la plataforma

Cierta información ya se procesa automáticamente tan pronto como usas la aplicación. A continuación, hemos enumerado qué datos personales se procesan exactamente:

Cuando descargas la aplicación, cierta información requerida se transmite a la tienda de aplicaciones que utilizas (por ejemplo, Google Play o Apple App Store), en particular, el nombre de usuario, la dirección de correo electrónico, el número de cliente de tu cuenta, la hora de la descarga, la información de pago, así como el número de identificación del dispositivo individual pueden ser procesados. El procesamiento de estos datos es realizado exclusivamente por la respectiva tienda de aplicaciones y está más allá de nuestro control.

Para el resto, nos remitimos a las políticas de protección de datos de los respectivos proveedores de la tienda de aplicaciones o de las partes responsables de los sistemas operativos. No recopilamos ni procesamos ningún otro dato.

Tus datos personales no se transferirán a terceros para fines distintos a los enumerados a continuación.

# 4. Derechos del interesado

Como interesado en un tratamiento de datos personales, tienes derecho a 

1. solicitar información sobre tus datos personales procesados por nosotros de acuerdo con el [Art.15 RGPD](https://gdpr-info.eu/art-15-gdpr/). En particular, puedes solicitar información sobre los fines del procesamiento, la categoría de datos personales, las categorías de destinatarios a quienes se han divulgado o se divulgarán tus datos, el plazo de almacenamiento previsto, la existencia de un derecho de rectificación, supresión, restricción del procesamiento u oposición, la existencia de un derecho de reclamación, el origen de tus datos si no han sido recopilados por nosotros, así como la existencia de decisiones automatizadas, incluido el perfilado y, en su caso, información significativa sobre sus detalles;
2. de acuerdo con el [Art.16 RGPD](https://gdpr-info.eu/art-16-gdpr/) del RGPD, solicitar inmediatamente la corrección de datos personales inexactos o incompletos almacenados por nosotros;
3. de conformidad con el [Art.17 RGPD](https://gdpr-info.eu/art-17-gdpr/) del RGPD, solicitar la supresión de tus datos personales almacenados por nosotros, a menos que el procesamiento sea necesario para el ejercicio del derecho a la libertad de expresión e información, para el cumplimiento de una obligación legal, por razones de interés público, o para el establecimiento, ejercicio o defensa de reclamaciones legales;
4. de acuerdo con el [Art.18 RGPD](https://gdpr-info.eu/art-18-gdpr/), solicitar la restricción del procesamiento de tus datos personales, en la medida en que tú disputes la exactitud de los datos, el procesamiento sea ilícito, pero te opongas a su supresión y nosotros ya no necesitemos los datos, pero tú los necesites para la afirmación, ejercicio o defensa de reclamaciones legales o te hayas opuesto al procesamiento de acuerdo con el [Art.21 RGPD](https://gdpr-info.eu/art-21-gdpr/);
5. de conformidad con el [Art.20 RGPD](https://gdpr-info.eu/art-20-gdpr/), recibir tus datos personales que nos has proporcionado en un formato estructurado, común y legible por máquina o solicitar que se transfieran a otro responsable;
6. de acuerdo con el [Art.7 (3) RGPD](https://gdpr-info.eu/art-7-gdpr/), revocar tu consentimiento dado a nosotros en cualquier momento. Esto tiene como consecuencia que ya no podremos continuar con el procesamiento de datos basado en este consentimiento en el futuro; y
7. presentar una reclamación ante una autoridad de supervisión de acuerdo con el [Art.77 RGPD](https://gdpr-info.eu/art-77-gdpr/) del RGPD. Como regla general, puedes contactar con la autoridad de supervisión de tu lugar habitual de residencia o trabajo o con nuestra oficina registrada para este propósito. La autoridad de supervisión responsable de nuestro lugar de negocio es el Comisionado Estatal para la Protección de Datos y la Libertad de Información de Baden-Württemberg en 70173 Stuttgart.


# 5. Actualidad y modificación de esta declaración de protección de datos

Esta declaración de protección de datos es válida desde noviembre de 2021. Debido al desarrollo posterior de nuestro sitio web y ofertas o debido a cambios en los requisitos legales o administrativos, puede ser necesario revisar esta declaración de protección de datos de vez en cuando.

Puedes acceder e imprimir la declaración de protección de datos actual en cualquier momento en [https://delta.chat/gdpr](https://delta.chat/gdpr).
