---
title: E-Mail-Server für Delta Chat einrichten
lang: de
---

# E-Mail-Server für Delta Chat einrichten

Delta Chat ist ein Chat-Messenger, der über E-Mail läuft. Das heißt, wir können jeden E-Mail-Server verwenden, um Delta-Chat-Konten zu betreiben. Ein E-Mail-Server, der leicht einzurichten und zu verwalten ist und sofort mit Delta Chat funktioniert, ist [Mailcow](https://mailcow.email).

Sie können es zusammen mit [mailadm](https://mailadm.readthedocs.io) ausführen, das Ihren Benutzern eine einfache Möglichkeit bietet, ein E-Mail-Konto zu erstellen und sich direkt bei Delta Chat anzumelden. Es ist ebenfalls in diesem Leitfaden enthalten.

Was Sie benötigen:

- Grundkenntnisse der Befehlszeile
- einen Domainnamen und Zugang zu dessen DNS-Einstellungen
- SSH-Zugang zu einem Linux-Server
  - mit einer öffentlichen IP,
  - mindestens 10 GB Speicherplatz,
  - und mindestens 2 GB RAM

## Docker installieren

Als Voraussetzung müssen Sie [docker und
docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation) installieren.

### Falls docker.com blockiert ist:

Je nach Land, in dem sich Ihr Server befindet, kann docker.com blockiert sein. Sie können auch docker und docker-compose aus anderen Quellen beziehen. Was möglicherweise funktioniert:

- Das offizielle apt-Repository von Ubuntu enthält in der Regel eine veraltete Docker-Version; das ist nicht die beste Idee.
- [snap](https://docs.docker.com/engine/install/ubuntu/) ist ein weiterer Weg, um docker zu installieren, aber für docker-compose funktioniert die snap-Variante nicht. Beachten Sie, wenn Sie docker über snap installieren, läuft es nicht in systemd, sondern in snap.
- Sie können die docker-compose-Binärdatei [von GitHub](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64) versuchen und sie an [den richtigen Ort](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually) kopieren
- Und schließlich können Sie versuchen, Zugriff auf einen Server außerhalb Ihres Landes zu erhalten, einen HTTPS-Proxy zu erstellen und diesen zur Installation von docker und docker-compose zu verwenden. Das ist knifflig, könnte aber funktionieren. Sie können uns [kontaktieren](mailto:mailadm@testrun.org), wenn Sie auf Probleme stoßen.

## DNS-Einträge erstellen

Wenn Sie noch keine Domain haben, können Sie bei einem Dienst wie [njal.la](https://njal.la) eine .net- oder .org-Domäne für 15 € pro Jahr kaufen. Sie können mit PayPal, Bitcoin oder Monero bezahlen.

Nehmen wir an:
- Sie haben example.org gekauft. Im Moment wollen Sie nur einen Mailserver, aber Sie überlegen, später eine Website unter https://example.org zu hosten.
- Ihr Server hat die IPv4-Adresse 24.48.100.24 - Sie können die echte IPv4-Adresse mit dem Befehl `ip a` herausfinden und nach einer ähnlich aussehenden Nummer suchen (die nicht mit 127 oder 172 beginnt).
- Ihr Server hat die IPv6-Adresse 7fe5:2f4:1ba:2381::3 (Sie finden sie in `ip a`, 2 Zeilen unterhalb der IPv4-Adresse. Ignorieren Sie das `/64` am Ende. Verwenden Sie nicht die, die mit `fe80` beginnt).

Nun könnten Sie die Domäneneinstellungen für example.org wie folgt konfigurieren:

| Type  | Name                      | Data                                                 | TTL  | Priority |
|-------|---------------------------|------------------------------------------------------|------|----------|
| A     | mail.example.org          | 24.48.100.24                                         | 5min |          |
| AAAA  | mail.example.org          | 7fe5:2f4:1ba:2381::3                                 | 5min |          |
| MX    | @                         | mail.example.org                                     | 5min |    10    |
| CNAME | autoconfig.example.org    | mail.example.org                                     | 5min |          |
| CNAME | autodiscover.example.org  | mail.example.org                                     | 5min |          |
| CNAME | mailadm.example.org       | mail.example.org                                     | 5min |          |
| TXT   | @                         | "v=spf1 mx -all"                                     | 5min |          |
| TXT   | \_dmarc.example.org       | v=DMARC1;p=quarantine;rua=mailto:mailadm@example.org | 5min |          |

Sie können den DKIM-Schlüssel nach der Einrichtung von mailcow unter System / Konfiguration / Optionen / ARC/DKIM-Schlüssel einrichten.

Sie können mehr als 5 Minuten einstellen, aber wenn Sie merken, dass etwas falsch ist, hilft eine kurze Zeitspanne bei der Korrektur des falschen Eintrags.

## Mailcow einrichten

### Mailcow-Optionen festlegen

Klonen Sie zuerst das Mailcow-Git-Repository - wenn Ihr Server keinen Zugang zu github.com hat, können Sie diesen Schritt auch woanders machen und `scp` benutzen, um es auf Ihren Server zu kopieren.

```
sudo apt install -y git
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```

Nun sollten Sie `./generate_config.sh` ausführen, um die Datei mailcow.conf zu erzeugen. Wenn Ihr Server keinen Zugang zu github.com hat, müssen Sie zuerst jeden Git-Befehl aus dem Skript entfernen. Geben Sie die Optionen wie folgt ein:

```
Mail server hostname (FQDN) - this is not your mail domain, but your mail servers hostname: mail.example.org
Timezone [Europe/Berlin]: UTC
Which branch of mailcow do you want to use?


Available Branches:
- master branch (stable updates) | default, recommended [1]
- nightly branch (unstable updates, testing) | not-production ready [2]
Choose the Branch with it´s number [1/2] 1
```

Sie sollten die folgenden Variablen in mailcow.conf angeben:

```
ADDITIONAL_SAN=mailadm.example.org
SKIP_CLAMD=y
SKIP_SOLR=y
SKIP_SOGO=y
```

Die letzten drei Optionen entfernen Dienste, die für eine Minimaleinrichtung nicht benötigt werden.

Danach müssen wir `echo '#' > data/conf/dovecot/global_sieve_before` ausführen.

### Mailadm NGINX-Konfiguration

`mailadm.example.org/new_email` muss erreichbar sein, damit HTTP-Anfragen funktionieren.
Wir müssen also zwei Dateien für Mailcows Nginx-Umleitung erstellen.
Zunächst `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`
und dann erstellen wir die Datei `data/conf/nginx/site.mailadm.custom`
und fügen ihr den folgenden Block hinzu:

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

Ersetzen Sie diese Beispiel-IP-Adresse durch die IP-Adresse Ihres Servers.

Dadurch werden später alle Anfragen an `mailadm.example.org/new_email` an den mailadm-Container weitergeleitet.

### Mailcow-Container herunterladen

Führen Sie nun `sudo docker compose pull` aus, um die mailcow-Container herunterzuladen. Wenn Sie bei diesem Schritt keinen Zugang zu docker.com haben, können Sie [einen HTTP-Proxy verwenden](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/).

### Mailcow starten

Starten Sie nun mailcow mit `sudo docker compose up -d`.

### IPv6 für Mailcow deaktivieren

Wenn Ihr Server keine IPv6-Adresse hat, sollten Sie [IPv6 deaktivieren](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/).

### Eine Domain zu Mailcow hinzufügen

Jetzt können Sie sich in das mailcow-Webinterface unter https://mail.example.org einloggen. Der Standard-Benutzername ist `admin` und das Passwort ist `moohoo`. Sie sollten dieses Passwort in ein Sichereres ändern.

![The Mailcow web interface.](../assets/blog/mailcow-UI-login.png)

Als nächstes fügen Sie in der Weboberfläche unter "E-Mail / Konfiguration / Domains" eine Domain hinzu. Ungefähr so:

- domain: example.org
- max. mailboxes: 999999
- default mailbox quota: 3076 (das ist egal, mailadm wird dies überschreiben)
- max. mailbox quota: 17240 (grundsätzlich etwas weniger als Ihr freier Speicherplatz)
- domain quota: 17240 (grundsätzlich etwas weniger als Ihr freier Speicherplatz)

![Eine Domain in Mailcow anlegen](../assets/blog/mailcow-create-domain.png)

Danach können Sie unter "E-Mail / Konfiguration / Mailboxen" ein erstes Konto anlegen. Sie können es jetzt mit Delta Chat ausprobieren.

#### Empfohlen: Weitere DNS-Einträge hinzufügen

Unter "E-Mail / Konfiguration / Domains" sehen Sie rechts neben Ihrer Domain einen blauen Schaltfläche "DNS". Dort finden Sie weitere Empfehlungen für DNS-Einträge, die Ihnen helfen können, wenn Sie Probleme bei der Zustellung Ihrer E-Mails an andere Server haben.

![DNS-Einstellungen in Mailcow anzeigen](../assets/blog/mailcow-dns-settings.png)

## mailadm einrichten

Jetzt können wir mailadm einrichten - mit diesem Tool können Sie QR-Codes generieren, die die Benutzer von Delta Chat einscannen können, um ein E-Mail-Konto auf Ihrem Server zu erstellen. Dies ist wahrscheinlich der einfachste Weg für Benutzer, mit Delta Chat zu beginnen.

### mailadm herunterladen

Sie können diese Befehle verwenden, um mailadm herunterzuladen:

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### mailadm bauen

Jetzt können Sie den mailadm-Docker-Container mit `sudo docker build . -t mailadm-mailcow` bauen.

#### Falls docker.com oder pypi.org blockiert ist

Wenn Ihr Server docker.com, dl-cdn.alpinelinux.org oder pypi.org nicht erreichen kann, wird dies fehlschlagen. Sie können jedoch den Docker-Container auf einem anderen Rechner erstellen und ihn auf den VPS kopieren:

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar example.org:
ssh example.org
sudo docker load --import mailadm-image.tar
```

### Ein API-Token vom Web-Interface erhalten

Jetzt können Sie wieder auf https://mail.example.org/admin gehen, um einen mailcow API-Schlüssel zu erhalten.

Sie müssen die API aktivieren (stellen Sie sicher, dass Sie die "Read-Write Access API" und nicht die "Read-Only Access API" verwenden!) und geben Sie die br-mailcow-interface-IP-Adresse Ihres Servers unter "API-Zugang von diesen IPs/CIDR-Netzwerk-Notationen erlauben". Sie können die IP-Adresse mit `ip a show br-mailcow` herausfinden.

Aktivieren Sie das Kontrollkästchen "Activate API" und klicken Sie dann auf "Save Changes" und kopieren Sie den API-Schlüssel.

### mailadm konfigurieren

Erstellen Sie dann im mailadm-Verzeichnis eine `.env`-Datei und konfigurieren Sie mailadm wie folgt:

```
MAIL_DOMAIN=example.org
WEB_ENDPOINT=https://mailadm.example.org/new_email
MAILCOW_ENDPOINT=https://mail.example.org/api/v1/
MAILCOW_TOKEN=238473-081241-7A78B1-B7098C-E798BA
```

Bei `MAILCOW_TOKEN` geben Sie den API-Schlüssel ein, den Sie gerade von der mailcow-Weboberfläche erhalten haben.

Wenn Sie sich nicht sicher sind, wie Sie die Werte in .env auswählen, werfen Sie einen Blick in die [Dokumentation](https://mailadm.readthedocs.io/en/latest/#configuration-details) von mailadm.

### Mailadm-Alias hinzufügen

Um die Ausführung der mailadm-Befehle zu erleichtern, fügen Sie diesen Alias hinzu:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### mailadm starten

Dann können Sie die Datenbank initialisieren und den Bot einrichten, den mailadm verwenden wird  um Befehle und Supportanfragen von Ihren Benutzern zu empfangen:

```
mailadm init
mailadm setup-bot
```

Dann werden Sie aufgefordert, einen QR-Code zu scannen, um der Admin-Gruppe beizutreten, einer verifizierten Delta-Chat-Gruppe. Jeder in der Gruppe kann über Delta Chat Befehle an mailadm senden. Sie können "/help" an die Gruppe senden, um zu erfahren, welche Befehle es gibt.

Nun, da alles konfiguriert ist, können wir den mailadm-Container schließlich starten:

```
sudo docker run -d -p 3691:3691 --mount type=bind,source=$PWD/docker-data,target=/mailadm/docker-data --name mailadm mailadm-mailcow gunicorn -b :3691 -w 1 mailadm.app:app
```

Dies startet einen `mailadm` Docker-Container. Sollten Sie den Docker-Container jemals neu starten wollen, können Sie dies mit `sudo docker restart mailadm` tun.

#### Erste Schritte mit mailadm

Das war's! Sie können nun mit der Erstellung von Token und Benutzern mit mailadm beginnen. Schauen Sie sich am besten die Dokumentation für die [ersten Schritte](https://mailadm.readthedocs.io/en/latest/#first-steps) - sie enthält auch Hinweise zur Fehlersuche, falls etwas nicht funktioniert.

## Empfohlen: POP3 deaktivieren

Delta Chat verwendet nur SMTP und IMAP, Wenn also alle Ihre Benutzer Delta Chat benutzen, können Sie POP3 deaktivieren.

Um dies zu tun, fügen Sie folgendes in die `mailcow.conf` ein:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Dann wenden Sie die Änderungen mit "sudo docker compose up -d" an.

## Empfohlen: Den gesamten HTTP-Verkehr auf HTTPS umleiten

Standardmäßig antwortet der nginx-Server auch unverschlüsselt auf Port 80. Das kann schlecht sein, da einige Benutzer möglicherweise Passwörter über diese unverschlüsselte Verbindung eingeben.

Um dies zu verhindern, erstellen Sie eine neue Datei `data/conf/nginx/redirect.conf` und fügen Sie die folgende Serverkonfiguration in die Datei ein:

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

Dann wenden Sie die Änderungen mit `sudo docker compose restart nginx-mailcow` an.

## Empfohlen: No Logs, No Masters

Mailcow protokolliert die IP-Adressen Ihrer Nutzer zu Debugging-Zwecken. Wenn Sie diese kritischen Informationen nicht auf Ihrem Server behalten wollen, sollten Sie das Logging deaktivieren. Beachten Sie, dass dies das Debuggen von Problemen erheblich erschwert. Niemand außer Ihnen kann beurteilen, ob dies in Ihrer Umgebung notwendig ist.

Mailcow behält einige Logs in Redis, so dass man sie im Webinterface anzeigen kann - aber wenn man `command: '--save ""'` zum redis-server Container in docker-compose.yml hinzufügt, werden sie nur im RAM gespeichert, was hoffentlich nicht von einem potentiellen Angreifer gespeichert wird.

Um die aktuellen Protokolldateien in `/dev/null`, auch bekannt als Nirvana, abzulegen, können Sie:

Fügen Sie die folgenden Zeilen zu jedem Container in `mailcow-dockerized/docker-compose.yml`:

```
      logging:
        driver: "syslog"
        options:
          syslog-address: "udp://127.0.0.1:514"
          syslog-facility: "local3"
```

Jetzt können Sie rsyslog so konfigurieren, dass es auf diesem Port auf Protokolleingaben wartet. Entfernen Sie das Kommentarzeichen bei den folgenden Zeilen in `/etc/rsyslog.conf`:

```
module(load="imudp")
input(type="imudp" port="514")
```

Und fügen Sie dies in `/etc/rsyslog.d/` ein, um all dies ins Nirwana umzuleiten:

```
local3.*        /dev/null
& stop
```

Zu guter Letzt, starten Sie rsyslog mit `sudo service rsyslog restart` neu und mailcow mit `sudo docker compose up -d`.

Übrigens: Die [Mailcow Logging Dokumentation](https://docs.mailcow.email/post_installation/firststeps-logging/#log-rotation) zeigt Alternativen zu dieser Konfiguration auf.

## Empfohlen: Reverse-DNS-Einträge zum Provider hinzufügen

Sie können auch Reverse-DNS-Einträge
für die IPv4- und IPv6-Adressen Ihres Servers erstellen,
die Ihre Domain enthalten.
Reverse-DNS-Einträge verbessern die Zustellbarkeit;
um anderen E-Mail-Servern
die Unterscheidung von Benutzermails von Spam zu erleichtern.

Das Setzen von rDNS-Einträgen sollte
in der Weboberfläche des Hosting-Anbieters möglich sein.
Sie können hierzu mehr
[in diesem Artikel](https://docs.hetzner.com/dns-console/dns/general/reverse-dns/) lesen.

