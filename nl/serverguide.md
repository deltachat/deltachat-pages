---
title: Hoe zet ik een e-mailserver voor Delta Chat op?
lang: nl
---

# Hoe zet ik een e-mailserver voor Delta Chat op?

> **Update:** This is outdated - we now recommend
> [Chatmail Relays](2023-12-13-chatmail) over mailcow servers for chatting with Delta Chat,
> for faster delivery, reliable push notifications, and enforced message encryption.
> Read more [on GitHub](https://github.com/chatmail/relay) about how to set it up!
> mailcow is mostly an option
> if you want to communicate with classic mail users who can't use encryption.

Delta Chat is een gespreksapp die op basis van e-mail werkt. Dit houdt in dat je elke
e-mailserver kunt gebruiken. Een van de eenvoudigste e-mailservers
(zowel qua instellen als beheer) en direct met Delta Chat werkt is
[Mailcow](https://mailcow.email).

Je kunt Mailcow koppelen aan [mailadm](https://mailadm.readthedocs.io), zodat je
gebruikers eenvoudig een e-mailaccount kunnen aanmaken en direct kunnen inloggen
in Delta Chat. Later meer hierover.

Vereisten:

- Basiskennis van de opdrachtregel (terminal);
- Een domeinnaam met toegang tot de dns-instellingen;
- Ssh-toegang tot een Linuxserver met
  - een openbaar ip-adres;
  - minimaal 10 GB vrije schijfruimte;
  - minimaal 2 GB ramgeheugen.

## Installeer Docker

Als eerste dien je [docker en
docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation) te installeren.

### Als docker.com geblokkeerd is:

Het kan voorkomen dat docker.com geblokkeerd is in het land waar je server staat. In dat geval
kun je docker en docker-compose uit andere bronnen proberen te installeren:

- Ubuntu's officiële apt-pakketbron bevat doorgaans een verouderde Dockerversie, dus dat
  is geen goed idee.
- [Snap](https://docs.docker.com/engine/install/ubuntu/) is een mogelijkheid om
  Docker te installeren, maar dit werkt niet voor docker-compose. Let op:
  als Docker via Snap installeert, dan wordt er geen gebruikgemaakt van systemd.
- Je kunt proberen om het uitvoerbare bestand van docker-compose te downloaden [van GitHub](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64)
  en naar [de juiste locatie](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually) te kopiëren.
- Ook kun je proberen toegang te krijgen tot een server in een ander land,
  en een https-proxy op te zetten waarmee je docker en docker-compose kunt installeren. Dit is niet eenvoudig,
  maar het zou kunnen werken. Als je problemen ervaart, dan kun je [contact met ons](mailto:mailadm@testrun.org) opnemen.

## Maak dns-items aan

Als je nog geen domeinnaam hebt, dan kun je met behulp van een dienst als
[njal.la](https://njal.la) een .net- of .org-domeinnaam aanschaffen voor €15 per jaar. Betalen is mogelijk
met PayPal, Bitcoin of Monero.

Laten we van het volgende uitgaan:
- je hebt de domeinnaam voorbeeld.org aangeschaft. Je wilt nu alleen een mailserver, maar later misschien ook
  nog een website hosten op https://voorbeeld.org.
- je server heeft het ipv4-adres 24.48.100.24 - je kunt dit opvragen met behulp van de
  opdracht `ip a` en zoeken naar een vergelijkbaar nummer (dat niet begint
  met 127 of 172).
- je server heeft het ipv6-adres 7fe5:2f4:1ba:2381::3 (je kunt dit opvragen met `ip
  a`, 2 regels onder het ipv4-adres. Negeer de `/64` op het einde. Gebruik niet het adres dat
  begint met `fe80`).

Je kunt de domeininstellingen van voorbeeld.org dan als volgt instellen:

| Type  | Naam            | Gegevens                                                 | TTL  | Prioriteit |
|-------|-----------------|------------------------------------------------------|------|----------|
| A     | mail            | 24.48.100.24                                         | 5min |          |
| AAAA  | mail            | 7fe5:2f4:1ba:2381::3                                 | 5min |          |
| MX    | @               | mail.voorbeeld.org                                     | 5min |    10    |
| CNAME | autoconfig      | mail.voorbeeld.org                                     | 5min |          |
| CNAME | autodiscover    | mail.voorbeeld.org                                     | 5min |          |
| CNAME | mailadm         | mail.voorbeeld.org                                     | 5min |          |
| TXT   | @               | "v=spf1 mx -all"                                     | 5min |          |
| TXT   | _dmarc          | v=DMARC1;p=quarantine;rua=mailto:mailadm@voorbeeld.org | 5min |          |

Je kunt de DKIM-sleutel instellen nadat je Mailcow heb ingesteld,
en wel via Systeem → Configuratie → Opties → ARC-/DKIM-sleutels.

Je kunt het aantal van 5 minuten verhogen, maar als je merkt dat er iets misgaat,
dan kan een kortere tijd helpen dit op te lossen.

## Mailcow instellen

### Mailcow-opties instellen

Kloon de Mailcow-gitrepo. Als je server geen toegang tot github.com heeft,
dan kun je deze stap elders uitvoeren en Mailcow met behulp van `scp` naar je
server kopiëren.

```
sudo apt install -y git
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```

Voer `./generate_config.sh` uit om het mailcow.conf-bestand samen te stellen.
Als je server geen toegang tot github.com heeft, dan dien je de
git-opdracht uit het script te verwijderen. Gebruik de volgende opties:

```
Mailserver-hostnaam (FQDN) - dit is niet je e-maildomein, maar de hostnaam van je mailserver: mail.voorbeeld.org
Tijdzone [Europa/Berlijn]: UTC
Welke tak van Mailcow wil je gebruiken?


Beschikbare takken:
- master (stabiele updates) | standaard, aanbevolen [1]
- nightly (instabiele updates) | voor testdoeleinden [2]
Kies de gewenste tak met behulp van het getal [1/2] 1
```

Stel de volgende variabelen in mailcow.conf in:

```
ADDITIONAL_SAN=mailadm.voorbeeld.org
SKIP_CLAMD=y
SKIP_SOLR=y
SKIP_SOGO=y
```

De laatste 3 opties verwijderen diensten die niet nodig zijn in een minimale omgeving.

Voer daarna `echo '#' > data/conf/dovecot/global_sieve_before` uit.

### Mailadm NGINX instellen

`mailadm.example.org/new_email` dient bereikbaar te zijn voor http-verzoeken.
Hiervoor moeten er twee bestanden voor Mailcows Nginx-doorverwijzing aangemaakt worden.
Ten eerste `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`
en ten tweede `data/conf/nginx/site.mailadm.custom`
en voeg het volgende toe om te blokkeren:

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

Let op: vervang het voorbeeld-ip-adres door dat van je eigen server.

Hierdoor worden alle verzoeken van `mailadm.voorbeeld.org/new_email` later naar de mailadm-
container gestuurd.

### Download Mailcow-containers

Voer nu `sudo docker compose pull` uit om de Mailcow-containers te downloaden. Als je geen toegang
tot docker.com hebt, dan kun je een [http-
proxy gebruiken](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/).

### Start Mailcow

Start mailcow met de opdracht `sudo docker compose up -d`.

### Schakel ipv6 uit in Mailcow

Als je server niet over een ipv6-adres beschikt, dan dien je [ipv6
uit te schakelen](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/).

### Voeg de domeinnaam toe aan Mailcow

Nu kun je inloggen op de Mailcow-webinterface op https://mail.voorbeeld.org. De
standaard gebruikersnaam is `admin` en het wachtwoord is `moohoo`. Wijzig
het wachtwoord in een veiliger wachtwoord.

![De Mailcow-webinterface.](../assets/blog/mailcow-UI-login.png)

Voeg vervolgens een domeinnaam toe via de webinterface: E-mail → Configuratie → Domeinnamen.
De volgende instellingen zijn afdoende:

- domeinnaam: voorbeeld.org
- max. aantal mailboxen: 999999
- standaard mailboxquota: 3076 (maakt niet uit, want mailadm overschrijft de quota)
- max. mailboxquota: 17240 (iets minder dan je vrije schijfruimte)
- domeinnaamquota: 17240 (iets minder dan je vrije schijfruimte)

![Domeinnaam instellen in Mailcow](../assets/blog/mailcow-create-domain.png)

Ga dan naar E-mail → Configuratie → Mailboxes en maak je eerste account aan.
Je kunt dit account meteen testen in Delta Chat.

#### Aanbevolen: voeg aanvullende dns-items toe

In E-mail → Configuratie → Domeinen, direct naast je domeinnaam, staat een blauwe
dns-knop. Hieronder staan aanbevelingen voor dns-items die kunnen
helpen als je problemen met de aflevering van e-mails aan andere servers ervaart.

![Dns-instellingen in Mailcow](../assets/blog/mailcow-dns-settings.png)

## Stel mailadm in

Nu kun je verder met het opzetten van mailadm. Met dit hulpmiddel kun je QR-codes genereren, die
door Delta Chat-gebruikers kunnen worden gescand om een e-mailaccount aan te maken op je server. Dit
is de eenvoudigste methode om aan de slag te gaan met Delta Chat.

### Download mailadm

Je kunt onderstaande opdrachten gebruiken om mailadm te downloaden:

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### Compileer mailadm

Nu kun je de mailadm-dockercontainer compileren met
`sudo docker build . -t mailadm-mailcow`.

#### Als docker.com of pypi.org geblokkeerd is:

Als je server docker.com, dl-cdn.alpinelinux.org of pypi.org niet kan bereiken,
dan mislukt het compileren. In dat geval kan je de dockercontainer op een andere computer compileren
en deze naar de vps kopiëren:

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar voorbeeld.org:
ssh voorbeeld.org
sudo docker load --import mailadm-image.tar
```

### Api-sleutel ophalen via webinterface

Nu kun je nogmaals naar https://mail.example.org/admin gaan om een mailcow-api-
sleutel op te halen.

Activeer de api (met ‘Read-Write Access API’ en
niet ‘Read-Only Access API’!) en voer het ip-adres van de br-mailcow-interface
op je server in onder ‘Api-toegang van deze ip's/CIDR-netwerknotaties toestaan’. Je
kunt je ip-adres opvragen met behulp van `ip a show br-mailcow`.

Kruis ‘Api activeren’ aan, dan op ‘Wijzigingen opslaan’ en kopieer vervolgens de
api-sleutel.

### Stel mailadm in

Maak in de mailadm-map een `.env`-bestand aan en stel mailadm als
volgt in:

```
MAIL_DOMAIN=voorbeeld.org
WEB_ENDPOINT=https://mailadm.voorbeeld.org/new_email
MAILCOW_ENDPOINT=https://mail.voorbeeld.org/api/v1/
MAILCOW_TOKEN=238473-081241-7A78B1-B7098C-E798BA
```

Voer bij `MAILCOW_TOKEN` de zojuist gekopieerde api-sleutel in.

Als je niet weet welke waarden je in .env moet kiezen, neem dan de
[documentatie](https://mailadm.readthedocs.io/en/latest/#configuration-details)
van mailadm door.

### Mailadm-alias toevoegen

Voeg de volgende alias toe om het uitvoeren van mailadm-opdrachten eenvoudiger te maken:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### Start mailadm

Nu kun je de databank en bot opzetten die mailadm zal gebruiken om
opdrachten en ondersteuningsverzoeken van gebruikers te ontvangen:

```
mailadm init
mailadm setup-bot
```

Vervolgens word je gevraagd om een QR-code te scannen zodat je lid kunt worden van de beheerdersgroep, geverifieerde Delta
Chat-groep. Iedereen in deze groep kan opdrachten versturen naar mailadm.
Verstuur ‘/help’ aan de groep om te leren hoe je dit doet.

Nu is alles ingesteld en kan de mailadm-container voor eens en voor altijd worden gestart:

```
sudo docker run -d -p 3691:3691 --mount type=bind,source=$PWD/docker-data,target=/mailadm/docker-data --name mailadm mailadm-mailcow gunicorn -b :3691 -w 1 mailadm.app:app
```

Hiermee wordt de `mailadm`-dockercontainer gestart. Je kunt deze desgewenst herstarten met behulp van `sudo docker
restart mailadm`.

#### Aan de slag met mailadm

Klaar is Kees! Je kunt nu je eerste toegangssleutels en gebruikers aanmaken met mailadm.
Neem hiervoor de [documentatie](https://mailadm.readthedocs.io/en/latest/#first-steps)
door. De documentatie bevat tevens probleem-
oplossingstips.

## Aanbevolen: schakel pop3 uit

Delta Chat maakt alleen gebruik van SMTP en IMAP,
dus als al je gebruikers alleen gebruikmaken van Delta Chat,
dan kun je pop3 uitschakelen.

Voeg hiervoor het volgende toe aan `mailcow.conf`:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Pas de wijzigingen toe met de opdracht `sudo docker compose up -d`.

## Aanbevolen: verwijs http-verkeer door naar https

Standaard reageert
de nginx-server op onversleutelde opdrachten
op poort 80.
Dit kan slecht zijn voor de veiligheid,
aangezien sommige gebruikers hun wachtwoord
invoeren op deze onbeveiligde verbinding.

Dit kan worden voorkomen
door een nieuw bestand `data/conf/nginx/redirect.conf`
aan te maken en de volgende serverinstellingen toe te voegen:

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

Pas de wijzigingen toe met de opdracht `sudo docker compose restart nginx-mailcow`.

## Aanbevolen: geen logboeken

Mailcow houdt de ip-adressen van al je gebruikers bij voor foutopsporingsdoeleinden. Als je deze
kritieke informatie niet op je server wilt bewaren, dan kun je
deze functie beter uitschakelen. Let op: dit maakt foutopsporing een heel stuk moeilijker.
Niemand kan voor je bepalen of dit handig is in jouw omgeving.

Mailcow bewaart enkele logboeken in redis, die je kunt lezen via de webinterface. Echter,
als je de `opdracht ‘--save ""’` toevoegt aan de redis-servercontainer in
docker-compose.yml, dan worden de logboeken alleen in het ramgeheugen bewaard, zodat ze hopelijk niet
kunnen worden ingezien door een potentiële aanvaller.

Om de logboeken naar `/dev/null` - oftewel het hiernamaals - te verwijzen kun je:

De volgende regels toevoegen aan de container in
`mailcow-dockerized/docker-compose.yml`:

```
      logging:
        driver: "syslog"
        options:
          syslog-address: "udp://127.0.0.1:514"
          syslog-facility: "local3"
```

Nu kun je rsyslog instellen om te luisteren naar die poort voor logboekinvoer. Haal het #-teken
bij de volgende regels in `/etc/rsyslog.conf` weg:

```
module(load="imudp")
input(type="imudp" port="514")
```

En voeg het volgende toe aan `/etc/rsyslog.d/` om alles naar het hiernamaals te sturen:

```
local3.*        /dev/null
& stop
```

Herstart rsyslog met de opdracht `sudo service rsyslog restart` en mailcow met
`sudo docker compose up -d`.

Neem de [Mailcow-logboek-
documentatie](https://docs.mailcow.email/post_installation/firststeps-logging/#log-rotation)
door om meer te weten te komen over alternatieve configuraties.

## Aanbevolen: voeg omgekeerde dns-items (rDNS) toe aan je provider

Je kunt ook omgekeerde dns-items voor ipv4- en ipv6-
items toevoegen aan de server waarop je
domein draait.
Omgekeerde dns-items kunnen zorgen voor een betere bezorging, omdat
andere e-mailservers e-mails van jouw
gebruikers kunnen onderscheiden van ongewenste e-mail.

Het instellen van rDNS-items zou mogelijk moeten zijn
in de online-instellingen van je hostingprovider.
Meer informatie is te vinden
[in dit artikel](https://docs.hetzner.com/dns-console/dns/general/reverse-dns/).

