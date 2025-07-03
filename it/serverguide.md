---
titolo: Come Configurare un Server E-mail per Delta Chat
lang: it
---

# Come Configurare un Server E-mail per Delta Chat

> **Update:** This is outdated - we no longer recommend mailcow Servers,
> but [Chatmail Relays](2023-12-13-chatmail) for chatting with Delta Chat.
> Read more [on GitHub](https://github.com/chatmail/relay) about how to set it up!

Delta Chat è un messenger di chat che funziona su e-mail. Ciò significa che possiamo usare qualsiasi
server e-mail per eseguire gli account Delta Chat. Un server e-mail facile da usare
configurare e gestire, e funziona con Delta Chat fuori dagli schemi, è
[Mailcow](https://mailcow.email).

Puoi eseguirlo insieme a [mailadm](https://mailadm.readthedocs.io), che
offre ai tuoi utenti un modo semplice per creare un account e-mail e accedere direttamente
con Delta Chat. È incluso anche in questa guida.

Quello che ti serve:

- conoscenza di base della riga di comando
- un nome di dominio e l'accesso alle relative impostazioni DNS
- Accesso SSH a un server Linux
- con IP pubblico,
- minimo 10 GB di spazio su disco,
- e almeno 2 GB di RAM

## Installazione di Docker

Come prerequisito è necessario installare [docker e
docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation).

### Se docker.com è bloccato:

A seconda del paese in cui si trova il tuo server, docker.com potrebbe essere bloccato. Tu
può anche ottenere docker e docker-compose da altre fonti, che potrebbero funzionare:

- Il repository apt ufficiale di Ubuntu di solito ha una versione docker obsoleta; Quella
non è l'idea migliore.
- [snap](https://docs.docker.com/engine/install/ubuntu/) è un altro modo per
installare docker, ma per docker-compose la variante snap non funziona. Nota
che se installi docker tramite snap, non viene eseguito in systemd, ma in snap.
- Puoi provare a scaricare il binario docker-compose [da GitHub](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64)
e copialo nella [posizione corretta](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)
- E infine puoi provare ad accedere a un server al di fuori del tuo paese,
crea un proxy HTTPS e usalo per installare docker e docker-compose. E'
complicato, ma potrebbe funzionare. Puoi [contattarci](mailto:mailadm@testrun.org) se
incontri problemi.

## Crea voci DNS

Se non hai ancora un dominio, puoi utilizzare un servizio come
[njal.la](https://njal.la) per acquistare un dominio .net o .org a 15€ all'anno. Puoi
pagare con PayPal, Bitcoin o Monero.

Assumiamo che:
- hai acquistato example.org. Per ora vuoi solo un server di posta, ma pensi
all'hosting di un sito Web su https://example.org in un secondo momento.
- il tuo server ha l'indirizzo IPv4 24.48.100.24 - puoi scoprirlo con il
comando `ip a` e cercare un numero dall'aspetto simile (che non inizia
con 127 o 172).
- il tuo server ha l'indirizzo IPv6 7fe5:2f4:1ba:2381::3 (puoi trovarlo in `ip
a`, 2 righe sotto l'indirizzo IPv4. Ignora il "/64" alla fine. Non usare
quello che inizia con `fe80`, non conta).

Ora puoi configurare le impostazioni del dominio per example.org in questo modo:

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

Puoi configurare la chiave DKIM dopo aver configurato mailcow,
in Sistema>Configurazione>Opzioni>Chiavi ARC/DKIM.

Puoi fare più di 5 minuti, ma se noti che qualcosa non va un
tempo minore aiuta a correggere la voce sbagliata.

## Configurare Mailcow

### Imposta le Opzioni di Mailcow

Per prima cosa clona il repository git di mailcow, se il tuo server non ha accesso a
github.com, puoi eseguire questo passaggio da qualche altra parte e utilizzare `scp` per copiarlo
sul tuo server.

```
sudo apt install -y git
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```

Ora dovresti eseguire `./generate_config.sh` per generare il file mailcow.conf.
Se il tuo server non ha accesso a github.com, devi prima rimuoverne qualsiasi
comando git dallo script. Inserisci le opzioni in questo modo:

```
Nome host del server di posta (FQDN): questo non è il tuo dominio di posta, ma il nome host del tuo server di posta: mail.example.org
Fuso orario [Europa/Berlino]: UTC
Quale ramo di mailcow vuoi usare?


Rami disponibili:
- ramo principale (aggiornamenti stabili) | predefinito, consigliato [1]
- ramo notturno (aggiornamenti instabili, test) | non pronto per la produzione [2]
Scegli il ramo con il suo numero [1/2] 1
```

Dovresti specificare le seguenti variabili in mailcow.conf:

```
ADDITIONAL_SAN=mailadm.example.org
SKIP_CLAMD=y
SKIP_SOLR=y
SKIP_SOGO=y
```

Le ultime 3 opzioni rimuovono i servizi che non sono necessari per una configurazione minima.

Dopodiché è necessario eseguire `echo '#' > data/conf/dovecot/global_sieve_before`.

### Configurazione Mailadm NGINX

`mailadm.example.org/new_email` deve essere raggiungibile affinché le richieste HTTP funzionino.
Quindi dobbiamo creare due file per il reindirizzamento di Mailcows Nginx.
Prima di tutto facciamo `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`
e poi creiamo il file `data/conf/nginx/site.mailadm.custom
e aggiungiamo il seguente blocco:

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

Assicurati di sostituire questo indirizzo IP di esempio con l'indirizzo IP del tuo server.

Questo inoltrerà tutte le richieste a `mailadm.example.org/new_email` al contenitore
mailadm in seguito.

### Scarica i containers mailcow

Ora esegui `sudo docker compose pull` per scaricare i container mailcow. Se non hai
accesso a docker.com in questo passaggio, puoi [usare un proxy
HTTP](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/).

### Avvia Mailcow

Ora avvia mailcow con `sudo docker compose up -d`.

### Disattivazione di IPv6 per mailcow

Se il tuo server non ha un indirizzo IPv6, dovresti [disabilitare
IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/).

### Aggiunta Dominio in Mailcow

Ora puoi accedere all'interfaccia web di mailcow su https://mail.example.org. Il
nome utente predefinito è `admin` e la password è `moohoo`. Dovresti cambiare
questa password con qualcosa di più sicuro.

![L'interfaccia web di Mailcow.](../assets/blog/mailcow-UI-login.png)

Successivamente, aggiungi un dominio nell'interfaccia web in "E-Mail > Configurazione > Domini".
Una cosa del genere ha senso:

- domain: example.org
- max. mailboxes: 999999
- default mailbox quota: 3076 (non importa, mailadm lo sovrascriverà)
- max. mailbox quota: 17240 (fondamentalmente un po' meno dello spazio libero su disco)
- domain quota: 17240 (fondamentalmente un po' meno dello spazio libero su disco)

![Creazione di un dominio in mailcow](../assets/blog/mailcow-create-domain.png)

Successivamente, puoi andare su "E-Mail > Configurazione > Caselle di posta" e creare un primo account.
Puoi provarlo ora con Delta Chat.

#### Consigliato: Aggiungi Ulteriori Voci DNS

In "E-Mail > Configurazione > Domini", a destra accanto al tuo dominio, puoi vedere un pulsante
blu "DNS". Fornisce ulteriori consigli per le voci DNS che potrebbero
aiutarti se hai problemi a consegnare le tue e-mail ad altri server.

![Visualizzazione delle impostazioni DNS in Mailcow](../assets/blog/mailcow-dns-settings.png)

## Configurazione di mailadm

Ora possiamo configurare mailadm: con questo strumento puoi generare codici QR, che
le persone possono scansionare da Delta Chat per creare un account e-mail sul tuo server. Esso
è probabilmente il modo più semplice per gli utenti di iniziare con Delta Chat.

### Scaricare mailadm

Puoi usare questi comandi per scaricare mailadm:

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### Costruire mailadm

Ora puoi creare il container docker mailadm con
`sudo docker build . -t mailadm-mailcow`.

#### Se docker.com o pypi.org è Bloccato

Se il tuo server non riesce a raggiungere docker.com, dl-cdn.alpinelinux.org, o pypi.org,
questo fallirà. Ma puoi creare il contenitore docker su una macchina diversa
e copialo nel VPS:

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar example.org:
ssh example.org
sudo docker load --import mailadm-image.tar
```

### Ottenere un token API dall'interfaccia web

Ora puoi andare su https://mail.example.org/admin di nuovo, per ottenere una chiave API
mailcow.

Devi attivare l'API (assicurati di utilizzare "Read-Write Access API" e
non "Read-Only Access API"!) ed entra nell'interfaccia br-mailcow del tuo server
Indirizzo IP in "Allow API access from these IPs/CIDR network notations". Tu
può trovare l'indirizzo IP con `ip a show br-mailcow`.

Seleziona la casella di controllo "Activate API, quindi fai clic su "Save Changes" e copia la
Chiave API.

### Configurazione di mailadm

Quindi, nella directory mailadm, crea un file `.env` e configura mailadm come
Questo:

```
MAIL_DOMAIN=example.org
WEB_ENDPOINT=https://mailadm.example.org/new_email
MAILCOW_ENDPOINT=https://mail.example.org/api/v1/
MAILCOW_TOKEN=238473-081241-7A78B1-B7098C-E798BA
```

In `MAILCOW_TOKEN`, inserisci la chiave API che hai appena ricevuto dall'interfaccia web
mailcow.

Se non sei sicuro di come scegliere i valori in .env, dai un'occhiata al file
[documentazione](https://mailadm.readthedocs.io/en/latest/#configuration-details)
di mailadm.

### Aggiungi alias mailadm

Ora per semplificare l'esecuzione dei comandi mailadm, aggiungi questo alias:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### Esegui mailadm

Poi puoi inizializzare il database e configurare il bot che mailadm utilizzerà
per ricevere comandi e richieste di supporto dai tuoi utenti:

```
mailadm init
mailadm setup-bot
```

Poi ti viene chiesto di scansionare un codice QR per unirti al Gruppo di Amministratori, un gruppo
verificato di Delta Chat. Chiunque nel gruppo può impartire comandi a mailadm tramite Delta Chat.
Puoi inviare "/help" al gruppo per imparare ad usarlo.

Ora che tutto è configurato, possiamo avviare definitivamente il container mailadm:

```
sudo docker run -d -p 3691:3691 --mount type=bind,source=$PWD/docker-data,target=/mailadm/docker-data --name mailadm mailadm-mailcow gunicorn -b :3691 -w 1 mailadm.app:app
```

Questo avvia un container docker `mailadm`. Puoi riavviarlo con `sudo docker
restart mailadm`, se lo desideri.

#### Primi passi con mailadm

Questo è tutto! Ora puoi iniziare a creare token e utenti con mailadm.
Dai un'occhiata alla documentazione per i [primi
passi](https://mailadm.readthedocs.io/en/latest/#first-steps) - e contiene
anche suggerimenti per la risoluzione dei problemi d'installazione se qualcosa non funziona.

## Consigliato: Disabilita POP3

Delta Chat utilizza solo SMTP e IMAP,
quindi, se tutti i tuoi utenti utilizzano Delta Chat,
puoi disabilitare POP3.

Per fare ciò, aggiungi quanto segue a `mailcow.conf`:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Quindi applica le modifiche con `sudo docker compose up -d`.

## Consigliato: Reindirizzare tutto il traffico HTTP su HTTPS

Per impostazione predefinita,
anche il server nginx risponde in chiaro
sulla porta 80.
Questo può essere un male,
poiché alcuni utenti potrebbero inserire password
su questa connessione non crittografata.

Per evitare questo,
creare un nuovo file `data/conf/nginx/redirect.conf`
e aggiungi la seguente configurazione del server al file:

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

Quindi applica le modifiche con `sudo docker compose restart nginx-mailcow`.

## Consigliato: Nessun Logs, Nessun Masters

Mailcow registra gli indirizzi IP dei tuoi utenti a scopo di debug, quindi se tu
non vuoi mantenere queste informazioni critiche sul tuo server, potresti voler
disabilitare la registrazione. Si noti che ciò rende notevolmente più difficile il debugging dei problemi.
Nessuno tranne te può indovinare se questo è necessario nel tuo ambiente.

Mailcow conserva alcuni log in redis, quindi puoi mostrarli nell'interfaccia web, ma
se aggiungi `command: '--save ""'` al container redis-server in
docker-compose.yml, li mantiene solo nella RAM, che si spera non venga salvata
da un potenziale aggressore.

Per puntare i file di log effettivi in `/dev/null`, noto anche come Nirvana, puoi:

Aggiungi le seguenti righe a ciascun container in
`mailcow-dockerized/docker-compose.yml`:

```
      logging:
        driver: "syslog"
        options:
          syslog-address: "udp://127.0.0.1:514"
          syslog-facility: "local3"
```

Ora puoi configurare rsyslog per ascoltare su quella porta l'input del log. Decommenta
le seguenti righe in `/etc/rsyslog.conf`:

```
module(load="imudp")
input(type="imudp" port="514")
```

E inserisci questo in `/etc/rsyslog.d/` per reindirizzare tutto ciò al nirvana:

```
local3.*        /dev/null
& stop
```

Infine, riavvia rsyslog con `sudo service rsyslog restart` e mailcow con
`sudo docker componi -d`.

Prendi in considerazione l'idea di esaminare il file [Registrazione di Mailcow
documentazione](https://docs.mailcow.email/post_installation/firststeps-logging/#log-rotation)
per alternative a questa configurazione.

## Consigliato: Aggiungi Voci DNS Inverse al Tuo Provider

Potresti anche creare voci DNS inverse
per gli indirizzi IPv4 e IPv6 del tuo server,
contenente il tuo dominio.
Le voci DNS inverse migliorano la consegna;
aiuta altri server di posta a
distinguere le email dei tuoi utenti dallo spam.

Dovrebbe essere possibile impostare le voci rDNS
nell'interfaccia web del provider di hosting.
Puoi leggere di più a riguardo
[in questo articolo](https://docs.hetzner.com/dns-console/dns/general/reverse-dns/).

