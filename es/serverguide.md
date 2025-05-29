---
title: Cómo Configurar un Servidor de Correo para Delta Chat
lang: es
---

# Cómo Configurar un Servidor de Correo para Delta Chat

Delta Chat es una aplicación de mensajería que funciona sobre e-mail. Esto significa que podemos usar cualquier proveedor de e-mail para configurar una cuenta de Delta Chat. Un proveedor que es fácil de configurar y administrar y funciona con Delta Chat instantáneamente es [Mailcow](https://mailcow.email).

Puedes integrarlo con [mailadm](https://mailadm.readthedocs.io),
que ofrece a tus usuarios una forma sencilla de crear una cuenta de correo
y acceder directamente con Delta Chat. También se detalla en esta guía.

Qué necesitas:

- conocimiento básico de línea de comandos
- un nombre de dominio y acceso a su configuración de DNS
- acceso SSH a un servidor Linux
  - con una IP pública,
  - un mínimo de 10 GB de espacio de almacenamiento,
  - y un mínimo de 2 GB RAM

## Instalando Docker

Como requisito previo, instala [Docker y docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation).

### Si docker.com está Bloqueado:

Dependiendo del país donde esté tu servidor, docker.com puede estar bloqueado.
También puedes obtener Docker y docker-compose desde otras fuentes:

- El repositorio oficial de Ubuntu (apt) suele incluir una versión desactualizada de Docker; no está recomendado.
- [Snap](https://docs.docker.com/engine/install/ubuntu/) es otra forma de instalar Docker, pero la variante de snap no funciona con docker-compose. Ten en cuenta que, al instalar Docker via snap, se ejecuta en el entorno de snap y no en systemd.
- Puedes descargar el binario de docker-compose desde [GitHub](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64) y copiarlo a la ubicación adecuada según la [guía oficial](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually).
- Por último, puedes intentar usar un servidor fuera de tu país para crear un proxy HTTPS y así instalar Docker y docker-compose. Es un proceso complejo, pero podría funcionar. Si tienes problemas, [contáctanos](mailto:mailadm@testrun.org).

## Crear entradas DNS

Si aún no tienes un dominio, puedes usar un servicio como
[njal.la](https://njal.la) para comprar un dominio .net u .org por 15 € al año. Puedes
pagar con PayPal, Bitcoin o Monero.

Supongamos:
- Compraste example.org. Por ahora solo necesitas un servidor de correo, pero
  podrías alojar un sitio web en https://example.org más adelante.
- Tu servidor tiene la dirección IPv4 24.48.100.24 – puedes verificarlo con
  `ip a` y buscar un número similar (que no empiece por 127 o 172).
- Tu servidor tiene la dirección IPv6 7fe5:2f4:1ba:2381::3 – la verás en `ip a`,
  dos líneas más abajo de la IPv4. Ignora la parte `/64` final y no uses la que
  empiece por `fe80`, ya que no cuenta).

Ahora podrías configurar los ajustes de dominio para example.org de la siguiente
manera:

| Tipo   | Nombre                    | Datos                                                | TTL  | Prioridad |
|--------|---------------------------|------------------------------------------------------|------|-----------|
| A     | mail.example.org          | 24.48.100.24                                         | 5min |          |
| AAAA  | mail.example.org          | 7fe5:2f4:1ba:2381::3                                 | 5min |          |
| MX    | @                         | mail.example.org                                     | 5min |    10    |
| CNAME | autoconfig.example.org    | mail.example.org                                     | 5min |          |
| CNAME | autodiscover.example.org  | mail.example.org                                     | 5min |          |
| CNAME | mailadm.example.org       | mail.example.org                                     | 5min |          |
| TXT   | @                         | "v=spf1 mx -all"                                     | 5min |          |
| TXT   | \_dmarc.example.org       | v=DMARC1;p=quarantine;rua=mailto:mailadm@example.org | 5min |           |

You can setup the DKIM key after setting up mailcow,
in System>Configuration>Options>ARC/DKIM keys.

-|

Puedes configurar la clave DKIM después de instalar Mailcow,
en Sistema > Configuración > Opciones > Claves ARC/DKIM.

You can do more than 5 minutes, but in case you notice something is wrong a
short time helps with fixing the wrong entry.

-|

Puedes optar por un TTL superior a 5 minutos, pero si detectas un error rápidamente,
un intervalo corto facilita corregir la entrada equivocada.

## Configuración de Mailcow

### Configurar opciones de Mailcow

Primero clona el repositorio de Mailcow - si tu servidor no tiene acceso a
GitHub, puedes realizar este paso en otra máquina y usar `scp` para copiarlo a
tu servidor.

```
sudo apt install -y git
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```

Now you should run `./generate_config.sh` to generate the mailcow.conf file.
If your server doesn't have access to github.com, you first need to remove any
git command from the script. Enter the options like this:

```
Mail server hostname (FQDN) - this is not your mail domain, but your mail servers hostname: mail.example.org
Timezone [Europe/Berlin]: UTC
Which branch of mailcow do you want to use?


Available Branches:
- master branch (stable updates) | default, recommended [1]
- nightly branch (unstable updates, testing) | not-production ready [2]
Choose the Branch with it´s number [1/2] 1
```

You should specify the following variables in mailcow.conf:

```
ADDITIONAL_SAN=mailadm.example.org
SKIP_CLAMD=y
SKIP_SOLR=y
SKIP_SOGO=y
```

The last 3 options remove services which are not needed for a minimal setup.

After that we need to run `echo '#' > data/conf/dovecot/global_sieve_before`.

-|

Después, ejecuta `echo '#' > data/conf/dovecot/global_sieve_before`.

### Configuración de NGINX para Mailadm

`mailadm.example.org/new_email` debe ser accesible para que funcionen las solicitudes HTTP.
Por ello, crearemos dos archivos para la redirección de Nginx de Mailcow.
Primero ejecuta `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`
seguidamente crea el archivo `data/conf/nginx/site.mailadm.custom`
y añade el siguiente bloque:

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

Make sure to replace this example IP address with your server's IP address.

This will forward all requests to `mailadm.example.org/new_email` to the mailadm
container later.

### Descargar contenedores de Mailcow

Ahora ejecuta `sudo docker compose pull` para descargar los contenedores de Mailcow.
Si no tienes acceso a docker.com en este paso, puedes [usar un proxy HTTP](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/).

### Iniciar Mailcow

Ahora inicia Mailcow con `sudo docker compose up -d`.

### Deshabilitar IPv6 para Mailcow

Si tu servidor no tiene dirección IPv6, deberías [desactivar
IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/).

### Añadir dominio en Mailcow

Ahora puedes acceder a la interfaz web de Mailcow en https://mail.example.org.
El usuario predeterminado es `admin` y la contraseña `moohoo`. Deberías cambiar
esta contraseña por una más segura.

![The Mailcow web interface.](../assets/blog/mailcow-UI-login.png)

Next, add a domain in the web interface under "E-Mail > Configuration > Domains".
Somethings like this makes sense:

- domain: example.org
- max. mailboxes: 999999
- default mailbox quota: 3076 (it doesn't matter, mailadm will override this)
- max. mailbox quota: 17240 (basically a bit less than your free disk space)
- domain quota: 17240 (basically a bit less than your free disk space)

![Creating a domain in mailcow](../assets/blog/mailcow-create-domain.png)

After this, you can go to "E-Mail > Configuration > Mailboxes" and create a first account.
You can try it out with Delta Chat now.

#### Recomendado: Añadir entradas DNS adicionales

En "E-Mail > Configuration > Domains", a la derecha de tu dominio, verás un botón azul
"DNS". Ofrece recomendaciones adicionales de entradas DNS que pueden
ayudar si tienes problemas para que tus correos lleguen a otros servidores.

![Showing DNS settings in Mailcow](../assets/blog/mailcow-dns-settings.png)

## Configuración de mailadm

Ahora podemos configurar mailadm - con esta herramienta puedes generar códigos QR, que
las personas pueden escanear desde Delta Chat para crear una cuenta de correo en tu servidor. Es
probablemente la forma más fácil para que los usuarios comiencen a usar Delta Chat.

### Descargar mailadm

Puedes usar estos comandos para descargar mailadm:

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### Compilar mailadm

Ahora puedes construir el contenedor docker de mailadm con
`sudo docker build . -t mailadm-mailcow`.

#### Si docker.com o pypi.org están bloqueados

Si tu servidor no puede acceder a docker.com, dl-cdn.alpinelinux.org, o pypi.org,
esto fallará. Pero puedes construir el contenedor docker en otra máquina
y copiarlo al VPS:

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar example.org:
ssh example.org
sudo docker load --import mailadm-image.tar
```

### Obtener un token de API desde la interfaz web

Ahora puedes ir a https://mail.example.org/admin nuevamente, para obtener una clave de API
de mailcow.

Debes activar la API (¡Asegúrate de usar la "API de acceso de lectura y escritura" y
no la "API de acceso solo de lectura"!) e ingresar la dirección IP de tu servidor
en la interfaz br-mailcow bajo "Permitir acceso a la API desde estas IPs/anotaciones de red CIDR".
Puedes encontrar la dirección IP con `ip a show br-mailcow`.

Marca la casilla "Activar API" y luego haz clic en "Guardar cambios" y copia la
clave API.

### Configurando mailadm

Luego, en el directorio de mailadm, crea un archivo `.env` y configura mailadm así:

```
MAIL_DOMAIN=example.org
WEB_ENDPOINT=https://mailadm.example.org/new_email
MAILCOW_ENDPOINT=https://mail.example.org/api/v1/
MAILCOW_TOKEN=238473-081241-7A78B1-B7098C-E798BA
```

En `MAILCOW_TOKEN`, ingresa la clave API que acabas de obtener de la interfaz web de mailcow.

Si no estás seguro de cómo elegir los valores en .env, consulta la
[documentación](https://mailadm.readthedocs.io/en/latest/#configuration-details)
de mailadm.

### Añadir alias para mailadm

Ahora, para facilitar la ejecución de comandos mailadm, añade este alias:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### Iniciar mailadm

Luego puedes inicializar la base de datos y configurar el bot que mailadm utilizará para
recibir comandos y solicitudes de soporte de tus usuarios:

```
mailadm init
mailadm setup-bot
```

Then you are asked to scan a QR code to join the Admin Group, a verified Delta
Chat group. Anyone in the group can issue commands to mailadm via Delta Chat.
You can send “/help” to the group to learn how to use it.

Now, as everything is configured, we can start the mailadm container for good:

```
sudo docker run -d -p 3691:3691 --mount type=bind,source=$PWD/docker-data,target=/mailadm/docker-data --name mailadm mailadm-mailcow gunicorn -b :3691 -w 1 mailadm.app:app
```

This starts a `mailadm` docker container. You can restart it with `sudo docker
restart mailadm`, should you ever want to.

#### Primeros pasos con mailadm

¡Eso es todo! Ahora puedes comenzar a crear tokens y usuarios con mailadm.
Lo mejor es consultar la documentación para los [primeros
pasos](https://mailadm.readthedocs.io/en/latest/#first-steps) - también
contiene pistas para solucionar problemas de configuración si algo no funciona.

## Recomendado: Deshabilitar POP3

Delta Chat usa solo SMTP e IMAP,
así que si todos tus usuarios usan Delta Chat,
puedes deshabilitar POP3.

Para hacer esto, añade lo siguiente a `mailcow.conf`:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Then apply the changes with `sudo docker compose up -d`.

## Recomendado: Redirigir todo el tráfico HTTP a HTTPS

Por defecto,
el servidor nginx también responde sin cifrado
en el puerto 80.
Esto puede ser malo,
ya que algunos usuarios podrían ingresar sus contraseñas
a través de esta conexión no cifrada.

Para prevenir esto,
crea un nuevo archivo `data/conf/nginx/redirect.conf`
y añade la siguiente configuración de servidor al archivo:

```
server {
  root /web;
  listen 80 default_server;
  listen [::]:80 default_server;
  include /etc/nginx/conf.d/server_name.active;
  if ( $request_uri ~* "%0A|%0D" ) { return 403; }
  location ^~ /.well-known/acme-challenge/ {
    allow all;
    default_type "text/plain";
  }
  location / {
    return 301 https://$host$uri$is_args$args;
  }
}
```

Then apply the changes with `sudo docker compose restart nginx-mailcow`.

## Recomendado: Sin registros, sin amos

Mailcow logs the IP addresses of your users for debugging purposes, so if you
don't want to keep this critical information on your server, you might want to
disable logging. Note that this makes debugging of issues considerably harder.
Nobody but you can guess whether this is necessary in your environment.

Mailcow keeps some logs in redis, so you can show it in the web interface - but
if you add `command: '--save ""'` to the redis-server container in
docker-compose.yml, it keeps them only in the RAM, which is hopefully not saved
by a potential attacker.

To point the actual log files in `/dev/null`, aka Nirvana, you can:

Add the following lines to each container in
`mailcow-dockerized/docker-compose.yml`:

```
      logging:
        driver: "syslog"
        options:
          syslog-address: "udp://127.0.0.1:514"
          syslog-facility: "local3"
```

Now you can configure rsyslog to listen on that port for log input. Uncomment
the following lines in `/etc/rsyslog.conf`:

```
module(load="imudp")
input(type="imudp" port="514")
```

And put this in `/etc/rsyslog.d/` to redirect all of that to nirvana:

```
local3.*        /dev/null
& stop
```

Finally, restart rsyslog with `sudo service rsyslog restart` and mailcow with
`sudo docker compose up -d`.

Consider looking at the [Mailcow logging
documentation](https://docs.mailcow.email/post_installation/firststeps-logging/#log-rotation)
for alternatives to this configuration.

## Recomendado: Añadir entradas PTR inversas en tu proveedor

También podrías crear entradas DNS inversas
para las direcciones IPv4 e IPv6 de tu servidor,
conteniendo tu dominio.
Las entradas DNS inversas mejoran la entregabilidad;
ayuda a otros servidores de correo
a distinguir los correos de tus usuarios del spam.

Configurar entradas rDNS debería ser posible
en la interfaz web de tu proveedor de hosting.
Puedes leer más sobre ello

