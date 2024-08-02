---
title: Как Настроить Сервер Эл.почты для Delta Chat
lang: ru
---

# Как Настроить Сервер Эл.почты для Delta Chat

Delta Chat — это мессенджер, работающий по электронной почте. Это означает, что мы можем использовать любой
сервер эл.почты для запуска аккаунтов Delta Chat. Один почтовый сервер, который легко
настроить и управлять, работающий с Delta Chat из коробки, это
[Mailcow](https://mailcow.email).

Вы можете запустить его вместе с [mailadm](https://mailadm.readthedocs.io), который
предлагает вашим пользователям простой способ создать учетную запись электронной почты и напрямую войти в систему
с Delta Chat. Это также включено в это руководство.

Что вам нужно:

- базовые знания командной строки
- доменное имя, и доступ к настройкам DNS 
- SSH доступ к серверу linux
  - с публичным IP,
  - минимум 10 Гб дискового пространства,
  - и минимум 2 Гб ОЗУ

## Докер Установка

В качестве предварительного условия вам необходимо установить [docker and
docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation).

### Если docker.com Блокирован:

В зависимости от страны, в которой находится ваш сервер, docker.com может быть заблокирован. Вы
также можете получить docker & docker-compose из других источников, которые могут сработать:

- Официальный репозиторий apt Ubuntu обычно имеет устаревшую версию докера; это не лучшая идея.
- [snap](https://docs.docker.com/engine/install/ubuntu/) это еще один способ 
установки докера, но для docker-compose вариант snap не работает. Обратите внимание: если вы устанавливаете Docker через Snap, он запускается не в systemd, а в Snap.
- Вы можете попробовать загрузить двоичный файл docker-compose. [из GitHub](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64)
  и скопировать его в [правильное место](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)
- И наконец, вы можете попытаться получить доступ к серверу за пределами вашей страны, создав HTTPS-прокси и использовать его для установки docker и docker-compose. Это сложно, но может сработать. Вы можете [связаться с нами](mailto:mailadm@testrun.org) если
 у вас по прежнему проблемы.

## Создание Записей DNS

Если у вас ещё нет домена, вы можете использовать такой ​​сервис как
[njal.la](https://njal.la) для покупки .net или .org домена за 15€ в год. Вы можете
оплачивать через PayPal, Bitcoin или Monero.

Давайте исходить из того что:
- вы купили example.org. Сейчас вам нужен только почтовый сервер, но вы думаете
  о размещении веб-сайта по адресу https://example.org позже.
- ваш сервер имеет IPv4 адрес 24.48.100.24 - вы можете посмотреть его
  запустив команду `ip a` и найдите похожий номер (который не начинается
  с 127 или 172).
- ваш сервер имеет IPv6 адрес 7fe5:2f4:1ba:2381::3 (вы найдёте его `ip
  a`, 2 линии ниже IPv4 адрес. Игнорируйте `/64` в конце. Не используйте
 тот, который начинается с `fe80`, это не в счёт).

Теперь вы можете настроить параметры домена example.org следующим образом:

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

Вы сможете установить DKIM ключ после настройки mailcow,
в System>Configuration>Options>ARC/DKIM keys.

Вы можете выставить более 5 минут, но если вы заметите, что что-то не так,
короткий промежуток времени поможет исправить неправильную запись.

## Настройка Mailcow

### Настройка Mailcow Опций

Сначала клонируйте репозиторий git mailcow — если у вашего сервера нет доступа к
 github.com, вы можете выполнить этот шаг где-нибудь еще и использовать `scp` чтобы скопировать его на свой сервер.

```
sudo apt install -y git
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```

Теперь запустите `./generate_config.sh` для генерации mailcow.conf файла.
Если у вашего сервера нет доступа к github.com, сначала необходимо удалить все
git команды из скрипта. Введите такие параметры:

```
Mail server hostname (FQDN) - this is not your mail domain, but your mail servers hostname: mail.example.org
Timezone [Europe/Berlin]: UTC
Which branch of mailcow do you want to use?


Available Branches:
- master branch (stable updates) | default, recommended [1]
- nightly branch (unstable updates, testing) | not-production ready [2]
Choose the Branch with it´s number [1/2] 1
```

В mailcow.conf необходимо указать следующие переменные:

```
ADDITIONAL_SAN=mailadm.example.org
SKIP_CLAMD=y
SKIP_SOLR=y
SKIP_SOGO=y
```

Последние 3 варианта удаляют службы, которые не нужны для минимальной настройки.

После этого нам нужно запустить `echo '#' > data/conf/dovecot/global_sieve_before`.

### Mailadm NGINX конфиг

`mailadm.example.org/new_email` должен быть доступен для работы HTTP-запросов.
Итак, нам нужно создать два файла для перенаправления Mailcows Nginx.
Сначала мы делаем `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`
а затем мы создаем файл `data/conf/nginx/site.mailadm.custom`
затем добавим в него следующий блок:

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

Обязательно замените этот пример IP-адреса,  IP-адресом вашего сервера.

Все запросы будут перенаправлены на `mailadm.example.org/new_email` в mailadm
контейнер позже.

### Загрузка mailcow контейнеров

Запустите `sudo docker compose pull` для загрузки  контейнеров mailcow. Если у вас нет доступа к docker.com на этом шаге, вы можете [использовать HTTP
proxy](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/).

### Запуск Mailcow

Теперь запустите mailcow с `sudo docker compose up -d`.

### Отключение IPv6 для mailcow

Если у вашего сервера нет адреса IPv6, вам следует [отключить
IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/).

### Добавление Домена в  Mailcow

Теперь вы можете войти в веб-интерфейс mailcow по адресу https://mail.example.org. Имя пользователя по умолчанию `admin` и пароль `moohoo`. Вы должны изменить
этот пароль на что-то более безопасное.

![The Mailcow web interface.](../assets/blog/mailcow-UI-login.png)

Затем добавьте домен в веб-интерфейсе в разделе "E-Mail > Configuration > Domains".
Что то в таком духе:

- domain: example.org
- max. mailboxes: 999999
- default mailbox quota: 3076 (не имеет значения, mailadm это отменит)
- max. mailbox quota: 17240 (в основном немного меньше вашего свободного места на диске)
- domain quota: 17240 (в основном немного меньше вашего свободного места на диске)

![Creating a domain in mailcow](../assets/blog/mailcow-create-domain.png)

После этого, перейдите в  "E-Mail > Configuration > Mailboxes" и создайте первый аккаунт.
Теперь вы можете использовать Delta Chat.

#### Рекомендуется: Добавить Дополнительные Записи DNS

В "E-Mail > Configuration > Domains", справа от вашего домена вы увидите синюю кнопку "DNS". Он предоставляет дополнительные рекомендации по записям DNS, которые могут помочь, если у вас возникнут проблемы с доставкой электронной почты на другие серверы.

![Showing DNS settings in Mailcow](../assets/blog/mailcow-dns-settings.png)

## Установка mailadm

Теперь мы можем настроить mailadm — с помощью этого инструмента можно генерировать QR-коды, которые
люди могут сканировать из Delta Chat, чтобы создать учётную запись электронной почты на вашем сервере. Это
вероятно, это самый простой способ начать работу с Delta Chat.

### Загрузка mailadm

Вы можете использовать эти команды для загрузки mailadm:

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### Компиляция mailadm

Теперь вы можете компилировать докер-контейнер
`sudo docker build . -t mailadm-mailcow`.

#### Если docker.com или pypi.org Блокирован

Если ваш сервер не может связаться с docker.com, dl-cdn.alpinelinux.org или pypi.org. Вы можете собрать докер-контейнер на другой машине и скопировать его на VPS:

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar example.org:
ssh example.org
sudo docker load --import mailadm-image.tar
```

###  Получение токена API из веб-интерфейса

Перейдите на  https://mail.example.org/admin снова для получения mailcow API
ключа.

Вам необходимо активировать API (обязательно используйте "Read-Write Access API" а не "Read-Only Access API"!) и введите в интерфейс br-mailcow вашего сервера в разделе "Allow API access from these IPs/CIDR network notations". Узнать IP-адрес можно с помощью `ip a show br-mailcow`.

Установите флажок  "Активировать API и нажмите "Сохранить изменения", затем скопируйте ключ API.

### Настройка mailadm

Затем в директории mailadm, создайте `.env` файл и сконфигурируйте mailadm как
здесь:

```
MAIL_DOMAIN=example.org
WEB_ENDPOINT=https://mailadm.example.org/new_email
MAILCOW_ENDPOINT=https://mail.example.org/api/v1/
MAILCOW_TOKEN=238473-081241-7A78B1-B7098C-E798BA
```

В `MAILCOW_TOKEN`, введите API ключ  который вы получили из интерфейса mailcow web.

Если вы не уверены как выбрать значения values в .env, посмотрите документацию
[документация](https://mailadm.readthedocs.io/en/latest/#configuration-details) mailadm.

### Добавление mailadm alias

Теперь, чтобы облегчить запуск команд mailadm, добавьте этот alias:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### Запуск mailadm

Затем вы можете инициализировать базу данных и настроить бота mailadm, который будет использоваться для получения команд и поддерживать запросы от ваших пользователей:

```
mailadm init
mailadm setup-bot
```

Затем вам будет предложено отсканировать QR-код, чтобы присоединиться к Группе Администраторов, проверенной группе Delta Chat. Любой член группы может отправлять команды mailadm через Delta Chat. Вы можете отправить “/help” группе, чтобы узнать, как ее использовать.

Теперь, когда все настроено, мы можем запустить контейнер mailadm насовсем:

```
sudo docker run -d -p 3691:3691 --mount type=bind,source=$PWD/docker-data,target=/mailadm/docker-data --name mailadm mailadm-mailcow gunicorn -b :3691 -w 1 mailadm.app:app
```

Это запустит докер-контейнер `mailadm`. Вы можете перезапустить его с помощью `sudo docker
restart mailadm`, если захотите.

#### Первые шаги с mailadm

Вот и все! Теперь вы можете приступить к созданию токенов и пользователей с помощью mailadm. Лучшая документация для [первых шагов](https://mailadm.readthedocs.io/en/latest/#first-steps) - также содержит подсказки по устранению неполадок при настройке, если что-то не работает.

## Рекомендуется: Отключить POP3

Delta Chat использует только SMTP и IMAP,
так что если все ваши пользователи используют Delta Chat,
вы можете отключить POP3.

Для этого добавьте следующее, в файле `mailcow.conf`:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Затем примените изменения с помощью `sudo docker compose up -d`.

## Рекомендуется: Перенаправить весь HTTP-трафик на HTTPS

По умолчанию,
сервер nginx также отвечает в незашифрованном виде
на port 80.
Это может быть плохо,
поскольку некоторые пользователи могут вводить пароли
через не зашифрованное соединение.

Чтобы этого не произошло,
создайте новый файл `data/conf/nginx/redirect.conf`
и добавьте серверу следующий конфигурационный файл:

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

Затем примените изменения с помощью `sudo docker compose restart nginx-mailcow`.

## Рекомендуется: Нет журналов, Нет Мастерства

Mailcow ведёт журнал IP-адресов ваших пользователей в целях отладки, поэтому, если вы не хотите хранить эту важную информацию на своем сервере, вы можете отключить ведение журнала. Обратите внимание, что это значительно усложняет отладку проблем. Никто, но только вы, сможет предположить, нужно ли это в вашей среде.

Mailcow хранит некоторые журналы в redis, поэтому вы можете показать их в веб-интерфейсе, но если вы добавите `command: '--save ""'` контейнеру redis сервера
docker-compose.yml, это хранится только в ОЗУ, которая, будем надеяться, не будет сохранена потенциальным злоумышленником.

Чтобы указать фактические файлы журналов в `/dev/null`, aka Nirvana, вы можете:

Добавьте следующие строки в каждый контейнер
`mailcow-dockerized/docker-compose.yml`:

```
      logging:
        driver: "syslog"
        options:
          syslog-address: "udp://127.0.0.1:514"
          syslog-facility: "local3"
```

Теперь вы можете настроить rsyslog для прослушивания этого порта на предмет входных данных журнала. Раскомментируйте
следующие строки в `/etc/rsyslog.conf`:

```
module(load="imudp")
input(type="imudp" port="514")
```

 И вставь это `/etc/rsyslog.d/` перенаправив все это в нирвану:

```
local3.*        /dev/null
& stop
```

Наконец, перезапустите rsyslog с помощью `sudo service rsyslog restart` и mailcow с
`sudo docker compose up -d`.

Рассмотрите возможность просмотра [Документации логов Mailcow](https://docs.mailcow.email/post_installation/firststeps-logging/#log-rotation)
для альтернативы этой конфигурации.

## Рекомендуется: Добавьте Записи Обратного DNS у Вашего Провайдера.

Вы также можете создать обратные записи DNS для адресов IPv4 и IPv6 вашего сервера, содержащего ваш домен. Обратные записи DNS улучшают доставляемость; это помогает другому почтовому серверу отличать письма вашего пользователя от спама.

Установка записей rDNS должна быть возможной
в веб-интерфейсе хостинг-провайдера.
Вы можете прочитать об этом больше
[в этой статье](https://docs.hetzner.com/dns-console/dns/general/reverse-dns/).

