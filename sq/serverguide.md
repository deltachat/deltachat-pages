---
titull: Si të Ujdiset një Shërbyes Poste për Delta Chat-in
lang: sq
---

# Si të Ujdiset një Shërbyes Poste për Delta Chat-in

Delta Chat-i është një shkëmbyes mesazhesh fjalosjeje që xhiron në email. Kjo
do të thotë se mundemi të përdorim çfarëdo shërbyesi email për të krijuar llogari
Delta Chat-i. Një shërbyes email-i që është i kollajtë për t’u ujdisur dhe administruar
dhe që funksionon fill pas instalimi me Delta Chat-in, është [Mailcow](https://mailcow.email).

Mund ta xhironi tok me [mailadm](https://mailadm.readthedocs.io), që u ofron
përdoruesve tuaj një rrugë të lehtë për të krijuar një llogari email dhe bërë hyrjen
drejtpërsëdrejti me Delta Chat-in. Edhe ky përfshihet në këtë udhërrëfyes.

Ç’ju duhet:

- gjëra elementare për t’u ditur për rresht urdhrash
- një emër përkatësie dhe hyrje te rregullimet DNS të tij
- hyrje SSH te një shërbyes linux
  - me një IP publike,
  - minimumi 10 GB hapësirë disku,
  - dhe minimumi 2 GB RAM

## Instalim Docker-i

Si një parakusht, lypset të instaloni [docker dhe
docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation).

### Nëse docker.com është i Bllokuar:

Në varësi të vendit ku gjendet shërbyesi juaj, docker.com mund të jetë i bllokuar.
Mundeni të merrni docker & docker-compose gjetkë, çka mund të funksionojë:

- depoja zyrtare apt e Ubuntu-së zakonisht ka një version të vjetruar të
  Docker-it; që s’është ideja më e mirë.
- [snap](https://docs.docker.com/engine/install/ubuntu/) është një tjetër rrugë
  për të instaluar Docker-in, por, për docker-compose, varianti Snap s’funksionon.
  Vini re se nëse instaloni Docker-in përmes Snap-i, nuk xhiron në systemd, por në Snap.
- You can try to download the docker-compose binary [from GitHub](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64)
  and copy it to [the right location](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)
- And finally you can try to get access to a server outside your country,
  create a HTTPS proxy, and use that to install docker and docker-compose. It's
  tricky, but might work. You can [contact us](mailto:mailadm@testrun.org) if
  you run into problems.

## Krijoni Zëra DNS

Nëse s’keni ende një përkatësi, mund të përdorni një shërbim si
[njal.la](https://njal.la), që të blini një përkatësi .net, ose .org, për 15€ në vit.
Mund të paguani me PayPal, Bitcoin, ose Monero.

Le të hamendësojmë se:
- bletë shembull.org. Tani për tani doni vetëm një shërbyes email-esh, por
  mendoni për strehimin më vonë të një sajti https://shembull.org më vonë.
- shërbyesi juaj ka adresën IPv4 24.48.100.24 - mund ta gjeni përmes
  urdhrit `ip a` dhe shihni për një numër që ngjan me të (i cili s’fillon
  me 127 ose 172).
- shërbyesi juaj ka adresën IPv6 7fe5:2f4:1ba:2381::3 (mund ta gjeni me `ip
  a`, 2 rreshta nën adresën IPv4. Shpërfillni `/64` në fund. Mos përdorni
  atë që fillon me `fe80`, nuk quhet).

Tani mund të formësonit rregullimet e përkatësisë shembull.org në këtë mënyrë:

| Lloj | Emër | Të dhëna | TTL | Përparësi |
|-------|---------------------------|------------------------------------------------------|------|---------- |
| A | mail.example.org | 24.48.100.24 | 5min | |
| AAAA | mail.example.org | 7fe5:2f4:1ba:2381::3 | 5min | |
| MX | @ | mail.example.org | 5min | 10 |
| CNAME | autoconfig.example.org | mail.example.org | 5min | |
| CNAME | autodiscover.example.org | mail.example.org | 5min | |
| CNAME | mailadm.example.org | mail.example.org | 5min | |
| TXT | @ | "v=spf1 mx -all" | 5min | |
| TXT | \_dmarc.example.org | v=DMARC1;p=quarantine;rua=mailto:mailadm@example.org | 5min | |

Kyçin DKIM mund ta ujdisni pasi të ujdisni Mailcow-un,
te Sistem>Formësim>Mundësi>ARC/Kyçe DKIM.

Mund t’ju duhen edhe më shumë se 5 minuta, por në rast se vini re se diçka
është gabim, një kohë e shkurtër ndihmon me ndreqjen e zërit të gabuar.

## Ujdisje e Mailcow-ut

### Ujdisni Mundësi Mailcow

Së pari klononi depon git të Mailcow-ut - nëse shërbyesi juaj s’ka hyrje në
github.com, mund ta bëni këtë hap diku gjetkë dhe përdorni `scp` që
ta kopjoni në shërbyesin tuaj.

```
sudo apt install -y git
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```

Tani duhet të xhironi `./generate_config.sh`, për prodhimin e kartelës
mailcow.conf. Nëse shërbyesi juaj s’hyn dot në github.com, së pari, ju duhet
të hiqni çfarëdo urdhri git nga programthi. Jepini mundësitë kështu:

```
Strehëemër shërbyesi email (FQDN) - ky s’është përkatësia juaj e email-it, por strehëemri i shërbyesit tuaj email: mail.example.org
Zonë kohore [Europë/Berlin]: UTC
Cilën degë të Mailcow-it doni të përdoret?


Degë të përdorshme:
- dega kryesore (përditësime të qëndrueshme) | parazgjedhje, e rekomanduar [1]
- dega e përnatshme (përditësime të paqëndrueshme, testim) | jo gati për funksionim real [2]
Zgjidhni degën me numrin e saj [1/2] 1
```

Te mailcow.conf duhet të përcaktoni ndryshoret vijuese:

```
ADDITIONAL_SAN=mailadm.example.org
SKIP_CLAMD=y
SKIP_SOLR=y
SKIP_SOGO=y
```

3 mundësitë e fundit heqin shërbime që s’janë të nevojshme të një instalim minimal.

Pas kësaj, na duhet të xhirojmë `echo '#' > data/conf/dovecot/global_sieve_before`.

### Formësim për Mailadm NGINX

`mailadm.example.org/new_email` lypset të jetë i kapshëm për kërkesa HTTP që të funksionojë.
Ndaj na duhet të krijojmë dy kartela për ridrejtim Mailcows Nginx.
Së pari, japim `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`
dhe mandej krijojmë kartelën `data/conf/nginx/site.mailadm.custom`
dhe shtojmë në të bllokun vijues:

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

Mos harroni të zëvendësoni këtë adresë IP shembull me adresën IP të shërbyesit tuaj.

Kjo do të përcjellë krejt kërkesat ndaj `mailadm.example.org/new_email` te kontejneri
Mailadm më vonë.

### Shkarkoni kontejnerë Mailcow

Tani xhironi `sudo docker compose pull` që të shkarkoni kontejnerët Mailcow.
Nëse s’keni hyrje te docker.com në këtë pikë, mund [të përdorni një
ndërmjetës HTTP](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/).

### Nisni Mailcow-un

Tani nisni mailcow-un me `sudo docker compose up -d`.

### Çaktivizim IPv6 për Mailcow

Nëse shërbyesi juaj s’ka adresë IPv6, duhet [të çaktivizoni
IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/).

### Shtim Përkatësie në Mailcow

Tani mund të bëni hyrjen te ndërfaqja e Mailcow-ut në https://mail.example.org. Emri
i përdoruesit parazgjedhje është `admin` dhe fjalëkalimi është `moohoo`. Duhet ta
ndryshoni fjalëkalimin në diçka më të siguruar.

![Ndërfaqja web e Mailcow-ut.](../assets/blog/mailcow-UI-login.png)

Në vazhdim, shtoni një përkatësi te ndërfaqja web, nën “Email > Formësim > Përkatësi”.
Ka kuptim diçka e tillë:

- domain: example.org
- max. mailboxes: 999999
- default mailbox quota: 3076 (s’ka rëndësi, mailadm do ta anashkalojë këtë)
- max. mailbox quota: 17240 (në thelb, diçka më pak se hapësira e lirë e juaja në disk)
- domain quota: 17240 (në thelb, diçka më pak se hapësira e lirë e juaja në disk)

![Krijimi i një përkatësie në Mailcow](../assets/blog/mailcow-create-domain.png)

Pas kësaj, mund të kaloni te “Email > Formësim > Kuti postare” dhe krijoni llogarinë
e parë.
Tani mund të provoni Delta Chat-in.

#### E rekomanduar: Shtoni Zëra DNS Shtesë

Te “Email > Formësim > Përkatësi”, djathtas në krah të përkatësisë tuaj, mund
të shihni një buton blu “DNS”. Ky jep rekomandime të mëtejshme për zëra DNS që
mund t’ju ndihmojnë, nëse keni probleme me mbërritjen e email-eve tuaj në
shërbyes të tjerë.

![Pamje e rregullimeve DNS në Mailcow](../assets/blog/mailcow-dns-settings.png)

## Ujdisje e Mailadm-it

Tani mund të ujdisni mailadm-in - me këtë mjet mund të prodhoni kode QR, të cilët
njerëzit mund t’i skanojnë që nga Delta Chat-i për të krijuar një llogari email
në shërbyesin tuaj.
Mbase është rruga më e lehtë që përdoruesit t’ia fillojnë me Delta Chat-in.

### Shkarkim i Mailadm-it

Për të shkarkuar Mailadm-in mund të përdorni këto urdhra:

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### Montim i Mailadm-it

Tani mund të montoni kontejnerin Docker për mailadm-in, me
`sudo docker build . -t mailadm-mailcow`.

#### Po qe se docker.com ose pypi.org janë të Bllokuar

Nëse shërbyesi juaj s’lidhet dot me docker.com, dl-cdn.alpinelinux.org, ose pypi.org,
kjo do të dështojë. Por mund të montoni kontejnerin Docker në një makinë tjetër
dhe ta kopjoni në VPS:

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar example.org:
ssh example.org
sudo docker load --import mailadm-image.tar
```

### Marrja e një token-i API nga ndërfaqja web

Tani mund të kaloni te https://mail.example.org/admin sërish, që të merrni
një kyç API për Mailcow-un.

Do t’ju duhet të aktivizoni API-n (Sigurohuni të përdorni “Read-Write Access API” dhe
jo “Read-Only Access API”!) dhe jepni adresën IP të ndërfaqes së shërbyesit tuaj
br-mailcow nën “Allow API access from these IPs/CIDR network notations”. Mund
të zbuloni adresën IP me urdhrin `ip a show br-mailcow`.

I vini shenjë kutizës “Aktivizoni API-n” dhe mandej klikoni mbi “Ruaji Ndryshimet”
dhe kopjoni kyçin API.

### Formësim i Mailadm-it

Mandej, te drejtoria mailadm, krijoni një kartelë `.env` dhe formësoni mailadm-in
kështu:

```
MAIL_DOMAIN=example.org
WEB_ENDPOINT=https://mailadm.example.org/new_email
MAILCOW_ENDPOINT=https://mail.example.org/api/v1/
MAILCOW_TOKEN=238473-081241-7A78B1-B7098C-E798BA
```

Te `MAILCOW_TOKEN`, jepni kyçin API që sapo morët nga ndërfaqja e mailcow-ut.

Nëse jeni të pasigurt se si të zgjidhni vlerat te .env, hidhini një sy
[dokumentimit](https://mailadm.readthedocs.io/en/latest/#configuration-details)
të mailadm-it.

### SHtoni alias mailadm

Tani, për ta bërë të lehtë të jepen urdhra mailadm, shtoni këtë alias:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### Nisni mailadm-in

Mandej mund të bëni gati bazën e të dhënave dhe të ujdisni robotin që
mailadm-i do të përdorë për të marrë urdhra dhe për të kryer kërkesa prej
përdoruesve tuaj:

```
mailadm init
mailadm setup-bot
```

Mandej ju kërkohet të skanoni një kod QR që të bëheni pjesë e Grupit
të Përgjegjësve, një grup Delta Chat i verifikuar. Cilido në këtë grup mund t’i japë
urdhra mailadm-it përmes Delta Chat-it.
Mund t’i dërgoni grupit “/help”, që të mësoni si të përdoret.

Tani që gjithçka është formësuar, mund të nisim përfundimisht kontejnerin mailadm:

```
sudo docker run -d -p 3691:3691 --mount type=bind,source=$PWD/docker-data,target=/mailadm/docker-data --name mailadm mailadm-mailcow gunicorn -b :3691 -w 1 mailadm.app:app
```

Kjo nis një kontejner Docker `mailadm`. Mund ta rinisni me `sudo docker
restart mailadm`, nëse do të donit ndonjëherë.

#### Hapat e parë me mailadm

Kaq! Tani mund të filloni duke krijuar token-ë dhe përdorues me mailadm-in.
Më e mira, të shihni te dokumentimi për [hapat e
para](https://mailadm.readthedocs.io/en/latest/#first-steps) - përmban
gjithashtu ndihmëza për diagnostikim të ujdisjes, nëse diçka s’funksionon.

## E rekomanduar: Çaktivizoni POP3

Delta Chat-i përdor vetëm SMTP dhe IMAP,
ndaj, nëse krejt përdoruesit tuaj përdorin Delta Chat,
mund të çaktivizoni POP3-shin.

Për ta bërë këtë, shtoni te `mailcow.conf` sa vijon:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Mandej aplikoni ndryshimet me `sudo docker compose up -d`.

## E rekomanduar: Ridrejtoni krejt trafikun HTTP në HTTPS

Si parazgjedhje,
shërbyesi nginx përgjigjet gjithashtu pa fshehtëzim
në portën 80.
Kjo mund të jetë ters,
ngaqë disa përdorues mund të japin fjalëkalime
përmes kësaj lidhjeje të pafshehtëzuar.

Që të parandalohet kjo,
krijoni një kartelë të re `data/conf/nginx/redirect.conf`
dhe shtoni në kartelë formësimin vijues të shërbyesit:

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

Mandej aplikoni ndryshimet me `sudo docker compose restart nginx-mailcow`.

## E rekomanduar: Pa Regjistra, Pa Ustallarë

Mailcow regjistron adresat IP të përdoruesve tuaj për qëllime diagnostikimi, ndaj
nëse s’doni të mbani hollësi kritike në shërbyesin tuaj, mund të donit të çaktivizoni
mbajtje regjistrash. Kini parasysh se kjo e bën diagnostikimin e problemeve shumë
më të zorshëm.
Vetëm ju mund ta dini nëse ju duhet apo jo kjo në mjedisin tuaj.

Mailcow mban disa regjistra në Redis, që të mund t’i shfaqni në ndërfaqen web - por
nëse shtoni `command: '--save ""'` te kontejneri redis-server container në
docker-compose.yml, i mban ata vetëm në RAM, që shpresojmë të mos ruhet nga
një agresor potencial.

Që të shpini te `/dev/null`, aka Nirvana, kartelat faktike regjistër, mund:

Të shtoni rreshtat vijues te çdo kontejner në
`mailcow-dockerized/docker-compose.yml`:

```
      logging:
        driver: "syslog"
        options:
          syslog-address: "udp://127.0.0.1:514"
          syslog-facility: "local3"
```

Tani mund të formësoni rsyslog-un të përgjojë atë portë për regjistrim të ç’jepet.
Hiqni shenjën e komentit nga rreshtat vijues te `/etc/rsyslog.conf`:

```
module(load="imudp")
input(type="imudp" port="514")
```

Dhe vendoseni këtë në `/etc/rsyslog.d/` që të ridrejtohet e tëra kjo në nirvana:

```
local3.*        /dev/null
& stop
```

Dhe në fund, rinisni rsyslog-un me `sudo service rsyslog restart` dhe mailcow-un
me `sudo docker compose up -d`.

Për alternative të këtij formësimi, shihni
mundësinë e leximit te [dokumentimi i
regjistrave të Mailcow-ut](https://docs.mailcow.email/post_installation/firststeps-logging/#log-rotation).

## E rekomanduar: Shtoni Zëra “Reverse DNS” te Furnizuesi Juaj

Mund edhe të krijoni zëra “reverse DNS”
për adresat IPv4 dhe IPv6 të shërbyesit tuaj,
që përmbajnë përkatësinë tuaj.
Zërat “Reverse DNS” përmirësojnë shkallën e dërgimit;
ndihmon shërbyes të tjerë poste
të dallojnë mesazhet tuaj nga ata të padëshiruar.

Udjisja e zërave rDNS duhet të jetë e mundur
te ndërfaqja web e furnizuesit të strehimit.
Më tepër rreth kësaj mund të lexoni
[në këtë artikull](https://docs.hetzner.com/dns-console/dns/general/reverse-dns/).

