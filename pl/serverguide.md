---
title: Jak skonfigurować serwer pocztowy dla Delta Chat
lang: pl
---

# Jak skonfigurować serwer pocztowy dla Delta Chat

Delta Chat jest komunikatorem, który działa w oparciu o e-mail. Oznacza to, że możemy użyć dowolnego serwera e-mail do uruchomienia kont Delta Chat. Jednym z serwerów e-mail, który jest łatwy do skonfigurowania i zarządzania, a także od razu współpracuje z Delta Chat, jest [Mailcow](https://mailcow.email).

Możesz go uruchomić razem z [mailadm](https://mailadm.readthedocs.io), który oferuje twoim użytkownikom łatwy sposób na utworzenie konta e-mail i bezpośrednie logowanie za pomocą Delta Chat. Jest to również zawarte w tym przewodniku.

Potrzebujesz do tego:

- podstawowej znajomości wiersza poleceń
- nazwę domeny i dostęp do jej ustawień DNS
- dostęp SSH do serwera linux
  - z publicznym adresem IP,
  - minimum 10 GB miejsca na dysku,
  - i minimum 2 GB RAM

## Zainstaluj Dockera

Jako warunek wstępny musisz zainstalować [docker i
docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation).

### Jeśli docker.com jest zablokowany:

W zależności od kraju, w którym znajduje się twój serwer, docker.com może być zablokowany. Możesz również uzyskać docker i docker-compose z innych źródeł, które mogą działać:

- Oficjalne repozytorium apt Ubuntu zwykle zawiera przestarzałą wersję dockera; to nie jest najlepszy pomysł.
- [snap](https://docs.docker.com/engine/install/ubuntu/) to inny sposób na zainstalowanie dockera, ale dla docker-compose wariant snap nie działa. Zauważ, że jeśli zainstalujesz docker przez snap, nie działa on w systemd, ale w snap.
- Możesz spróbować pobrać binarny docker-compose [z GitHub](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64) i skopiować go do [właściwej lokalizacji](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)
- Na koniec możesz spróbować uzyskać dostęp do serwera poza swoim krajem, utworzyć proxy HTTPS i użyć go do zainstalowania dokera i docker-compose. To trudne, ale może zadziałać. Możesz [skontaktować się](mailto:mailadm@testrun.org) z nami, jeśli napotkasz problemy.

## Utwórz wpisy DNS

Jeśli nie masz jeszcze domeny, możesz skorzystać z usługi takiej jak [njal.la](https://njal.la), aby kupić domenę .net lub .org za 15 € rocznie. Możesz zapłacić za pomocą PayPal, Bitcoin lub Monero.

Załóżmy, że:
-  kupiłeś przyklad.org. Na razie chcesz mieć tylko serwer pocztowy, ale myślisz o tym, żeby później umieścić na nim stronę internetową https://przyklad.org.
- twój serwer ma adres IPv4 24.48.100.24 - możesz to sprawdzić poleceniem `ip a` i poszukać podobnie wyglądającego numeru (który nie zaczyna się od 127 lub 172).
- twój serwer ma adres IPv6 7fe5:2f4:1ba:2381::3 (możesz go znaleźć w `ip a`, 2 linijki poniżej adresu IPv4. Zignoruj `/64` na końcu. Nie używaj tego zaczynającego się od `fe80`, to się nie liczy).

Teraz możesz skonfigurować ustawienia domeny dla przyklad.org w następujący sposób:

| Typ   | Nazwa                     | Data                                                 | TTL  | Priorytet|
|-------|---------------------------|------------------------------------------------------|------|----------|
| A     | mail.przyklad.org         | 24.48.100.24                                         | 5min |          |
| AAAA  | mail.przyklad.org         | 7fe5:2f4:1ba:2381::3                                 | 5min |          |
| MX    | @                         | mail.przyklad.org                                    | 5min |    10    |
| CNAME | autoconfig.przyklad.org   | mail.przyklad.org                                    | 5min |          |
| CNAME | autodiscover.przyklad.org | mail.przyklad.org                                    | 5min |          |
| CNAME | mailadm.przyklad.org      | mail.przyklad.org                                    | 5min |          |
| TXT   | @                         | "v=spf1 mx -all"                                     | 5min |          |
| TXT   | \_dmarc.przyklad.org      | v=DMARC1;p=quarantine;rua=mailto:mailadm@przyklad.org| 5min |          |

Możesz ustawić klucz DKIM po skonfigurowaniu mailcow,
w System>Konfiguracja>Opcje>Klucze ARC/DKIM.

Możesz ustawić więcej niż 5 minut, ale jeśli zauważysz, że coś jest nie tak, krótki czas pomaga naprawić błędny wpis.

## Skonfiguruj Mailcow

### Ustaw opcje Mailcow

Najpierw sklonuj repozytorium git mailcow - jeśli twój serwer nie ma dostępu do github.com, możesz wykonać ten krok kiedy indziej i użyć `scp` do skopiowania go na swój serwer.

```
sudo apt install -y git
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```

Teraz należy uruchomić `./generate_config.sh`, aby wygenerować plik mailcow.conf. Jeśli twój serwer nie ma dostępu do github.com, najpierw musisz usunąć ze skryptu wszelkie polecenia git. Wpisz opcje w taki sposób:

```
Mail server hostname (FQDN) - this is not your mail domain, but your mail servers hostname: mail.example.org
Timezone [Europe/Berlin]: UTC
Which branch of mailcow do you want to use?


Available Branches:
- master branch (stable updates) | default, recommended [1]
- nightly branch (unstable updates, testing) | not-production ready [2]
Choose the Branch with it´s number [1/2] 1
```

Powinieneś określić następujące zmienne w mailcow.conf:

```
ADDITIONAL_SAN=mailadm.example.org
SKIP_CLAMD=y
SKIP_SOLR=y
SKIP_SOGO=y
```

Ostatnie 3 opcje usuwają usługi, które nie są potrzebne do minimalnej konfiguracji.

Następnie trzeba uruchomić `echo '#' > data/conf/dovecot/global_sieve_before`.

### Skonfiguruj Mailadm NGINX

`mailadm.example.org/new_email` musi być osiągalny, aby żądania HTTP działały. Musimy więc utworzyć dwa pliki do przekierowania Mailcows Nginx. Najpierw wykonujemy `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`, a następnie tworzymy plik `data/conf/nginx/site.mailadm.custom` i dodajemy do niego następujący blok:

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

Pamiętaj, aby zastąpić ten przykładowy adres IP adresem IP swojego serwera.

Spowoduje to przekazanie później wszystkich żądań do `mailadm.example.org/new_email` do kontenera mailadm.

### Pobierz kontenery mailcow

Teraz uruchom `sudo docker compose pull`, aby pobrać kontenery mailcow. Jeśli na tym etapie nie masz dostępu do witryny docker.com, możesz [użyć proxy HTTP](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/).

### Uruchom Mailcow

Teraz uruchom mailcow za pomocą `sudo docker compose up -d`.

### Wyłączanie IPv6 dla mailcow

Jeśli twój serwer nie ma adresu IPv6, powinieneś [wyłączyć IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/).

### Dodawanie domeny w Mailcow

Teraz możesz zalogować się do interfejsu internetowego mailcow pod adresem https://mail.przyklad.org. Domyślna nazwa użytkownika to `admin`, a hasło to `moohoo`. Powinieneś zmienić to hasło na bardziej bezpieczne.

![Interfejs internetowy Mailcow.](../assets/blog/mailcow-UI-login.png)

Następnie dodaj domenę w interfejsie internetowym w „E-mail > Konfiguracja > Domeny”. Coś takiego ma sens:

- domena: przyklad.org
- maks. liczba skrzynek: 999999
- domyślny limit skrzynki: 3076 (nie ma znaczenia, mailadm to zastąpi)
- maks. limit skrzynki: 17240 (w zasadzie trochę mniej niż wolne miejsce na dysku)
- łączny limit domeny: 17240 (w zasadzie trochę mniej niż wolne miejsce na dysku)

![Tworzenie domeny w mailcow](../assets/blog/mailcow-create-domain.png)

Następnie możesz przejść do „E-mail > Konfiguracja > Skrzynki” i utworzyć pierwsze konto. Możesz je teraz wypróbować za pomocą Delta Chat.

#### Zalecane: dodaj dodatkowe wpisy DNS

W „E-mail » Konfiguracja » Domeny” po prawej stronie obok twojej domeny możesz zobaczyć niebieski przycisk „DNS”. Zawiera dalsze zalecenia dotyczące wpisów DNS, które mogą być pomocne w przypadku problemów z dostarczaniem wiadomości e-mail na inne serwery.

![Wyświetlanie ustawień DNS w Mailcow](../assets/blog/mailcow-dns-settings.png)

## Skonfiguruj mailadm

Teraz możesz skonfigurować mailadm - za pomocą tego narzędzia możesz generować kody QR, które ludzie mogą zeskanować z Delta Chat, aby utworzyć konto e-mail na swoim serwerze. Jest to prawdopodobnie najłatwiejszy sposób na rozpoczęcie pracy z Delta Chat.

### Pobieranie mailadm

Możesz użyć tych poleceń, aby pobrać mailadm:

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### Budowanie mailadm

Teraz możesz zbudować kontener doker mailadm za pomocą `sudo docker build . -t mailadm-mailcow`.

#### Jeśli strona docker.com lub pypi.org jest zablokowana

Jeśli twój serwer nie może dotrzeć do docker.com, dl-cdn.alpinelinux.org, lub pypi.org, to zadanie się nie powiedzie. Możesz jednak zbudować kontener docker na innej maszynie i skopiować go na VPS:

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar przyklad.org:
ssh przyklad.org
sudo docker load --import mailadm-image.tar
```

### Uzyskanie tokena API z interfejsu WWW

Teraz możesz ponownie przejść do https://mail.przyklad.org/admin, aby uzyskać klucz API mailcow.

Musisz aktywować API (upewnij się, że używasz „Read-Write Access API”, a nie „Read-Only Access API”!) i wprowadź adres IP interfejsu br-mailcow twojego serwera w „Allow API access from these IPs/CIDR network notations”. Możesz poznać adres IP za pomocą `ip a show br-mailcow`.

Zaznacz pole wyboru „Activate API”, a następnie kliknij „Zapisz zmiany” i skopiuj klucz API.

### Konfiguracja mailadm

Następnie w katalogu mailadm utwórz plik `.env` i skonfiguruj mailadm w następujący sposób:

```
MAIL_DOMAIN=przyklad.org
WEB_ENDPOINT=https://mailadm.przyklad.org/new_email
MAILCOW_ENDPOINT=https://mail.przyklad.org/api/v1/
MAILCOW_TOKEN=238473-081241-7A78B1-B7098C-E798BA
```

W `MAILCOW_TOKEN`, wprowadź klucz API, który właśnie otrzymałeś z interfejsu webowego mailcow.

Jeśli nie jesteś pewien, jak wybrać wartości w .env, zajrzyj do [dokumentacji](https://mailadm.readthedocs.io/en/latest/#configuration-details) mailadm.

### Dodaj alias mailadm

Teraz, aby ułatwić uruchamianie poleceń mailadm, dodaj ten alias:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### Uruchom mailadm

Następnie możesz zainicjować bazę danych i skonfigurować bota, którego mailadm będzie używał do otrzymywania poleceń i próśb o wsparcie od użytkowników:

```
mailadm init
mailadm setup-bot
```

Następnie zostaniesz poproszony o zeskanowanie kodu QR, aby dołączyć do grupy administratorów, zweryfikowanej grupy Delta Chat. Każdy w grupie może wydawać polecenia do mailadm przez Delta Chat. Możesz wysłać „/help” do grupy, aby dowiedzieć się, jak z niego korzystać.

Teraz, gdy wszystko jest skonfigurowane, możemy na dobre uruchomić kontener mailadm:

```
sudo docker run -d -p 3691:3691 --mount type=bind,source=$PWD/docker-data,target=/mailadm/docker-data --name mailadm mailadm-mailcow gunicorn -b :3691 -w 1 mailadm.app:app
```

Spowoduje to uruchomienie kontenera `mailadm` docker. Możesz go zrestartować za pomocą `sudo docker restart mailadm`, jeśli kiedykolwiek zechcesz.

#### Pierwsze kroki z mailadm

To wszystko! Możesz teraz zacząć tworzyć tokeny i użytkowników za pomocą mailadm. Najlepiej zajrzyj do dokumentacji, aby wykonać [pierwsze kroki](https://mailadm.readthedocs.io/en/latest/#first-steps) — zawiera ona również wskazówki dotyczące rozwiązywania problemów z konfiguracją, jeśli coś nie działa.

## Zalecane: wyłącz POP3

Delta Chat używa tylko SMTP i IMAP, więc jeśli wszyscy twoi użytkownicy korzystają z Delta Chat, możesz wyłączyć POP3.

Aby to zrobić, dodaj następujące elementy do pliku `mailcow.conf`:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Następnie zastosuj zmiany za pomocą `sudo docker compose up -d`.

## Zalecane: Przekieruj cały ruch HTTP na HTTPS

Domyślnie serwer nginx odpowiada również w trybie niezaszyfrowanym na porcie 80. Może to być złe, ponieważ niektórzy użytkownicy mogą wprowadzać hasła przez to niezaszyfrowane połączenie.

Aby temu zapobiec, utwórz nowy plik `data/conf/nginx/redirect.conf` i dodaj do niego następującą konfigurację serwera:

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

Następnie zastosuj zmiany za pomocą `sudo docker compose restart nginx-mailcow`.

## Zalecane: bez dzienników, bez wzorców

Mailcow rejestruje adresy IP użytkowników w celu debugowania, więc jeśli nie chcesz przechowywać tych krytycznych informacji na swoim serwerze, możesz wyłączyć rejestrowanie. Zauważ, że znacznie utrudni to debugowanie problemów. Nikt poza tobą nie jest w stanie zgadnąć, czy jest to konieczne w twoim środowisku.

Mailcow przechowuje niektóre logi w redis, więc możesz je pokazać w interfejsie WWW, ale jeśli dodasz `command: '--save ""'` do kontenera redis-server w docker-compose.yml, przechowuje je tylko w pamięci RAM, która, miejmy nadzieję, nie zostanie zapisana przez potencjalnego napastnika.

Aby wskazać rzeczywiste pliki dziennika w `/dev/null`, czyli Nirvana, możesz:

Dodaj następujące wiersze do każdego kontenera w `mailcow-dockerized/docker-compose.yml`:

```
      logging:
        driver: "syslog"
        options:
          syslog-address: "udp://127.0.0.1:514"
          syslog-facility: "local3"
```

Teraz możesz skonfigurować rsyslog, aby nasłuchiwał na tym porcie dla wejścia dziennika. Odkomentuj następujące linie w `/etc/rsyslog.conf`:

```
module(load="imudp")
input(type="imudp" port="514")
```

I umieść to w `/etc/rsyslog.d/`, aby przekierować to wszystko do nirwany:

```
local3.*        /dev/null
& stop
```

Na koniec zrestartuj rsyslog za pomocą `sudo service rsyslog restart` i mailcow za pomocą `sudo docker compose up -d`.

Rozważ przejrzenie [dokumentacji rejestrowania Mailcow](https://docs.mailcow.email/post_installation/firststeps-logging/#log-rotation) w celu znalezienia alternatyw dla tej konfiguracji.

## Zalecane: dodaj odwrotne wpisy DNS u swojego dostawcy

Możesz także utworzyć odwrotne wpisy DNS dla adresów IPv4 i IPv6 swojego serwera, zawierających twoją domenę. Odwrotne wpisy DNS poprawiają dostarczanie poczty; pomagają innemu serwerowi pocztowemu odróżnić wiadomości e-mail użytkownika od spamu.

Ustawienie wpisów rDNS powinno być możliwe w interfejsie internetowym dostawcy usług hostingowych. Więcej na ten temat przeczytasz [w tym artykule](https://docs.hetzner.com/dns-console/dns/general/reverse-dns/).

