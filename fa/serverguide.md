---
title: راه‌اندازی سرور ایمیل برای دلتاچت
lang: fa
---

# راه‌اندازی سرور ایمیل برای دلتاچت

> **به‌روزرسانی:** این راهنما قدیمی است — اکنون به‌جای سرورهای mailcow برای چت با دلتاچت،
> [رله‌های Chatmail](2023-12-13-chatmail) را پیشنهاد می‌کنیم؛
> برای تحویل سریع‌تر، اعلان پوش قابل‌اعتماد، و رمزنگاری اجباری پیام.
> درباره راه‌اندازی بیشتر [در GitHub](https://github.com/chatmail/relay) بخوانید!
> mailcow عمدتاً گزینه‌ای است
> اگر بخواهید با کاربران ایمیل کلاسیک که نمی‌توانند رمزنگاری استفاده کنند ارتباط بگیرید.

دلتاچت یک پیام‌رسان چت است که روی ایمیل اجرا می‌شود. یعنی می‌توانیم از هر
سرور ایمیلی برای اجرای حساب‌های دلتاچت استفاده کنیم. یکی از سرورهای ایمیلی که راه‌اندازی
و مدیریت آن آسان است و از ابتدا با دلتاچت کار می‌کند
[Mailcow](https://mailcow.email) است.

می‌توانید آن را همراه با [mailadm](https://mailadm.readthedocs.io) اجرا کنید که
به کاربران راه آسانی برای ساخت حساب ایمیل و ورود مستقیم
با دلتاچت می‌دهد. این نیز در این راهنما آمده است.

آنچه نیاز دارید:

- دانش پایه خط فرمان
- یک نام دامنه، و دسترسی به تنظیمات DNS آن
- دسترسی SSH به یک سرور لینوکس
  - با IP عمومی،
  - حداقل ۱۰ گیگابایت فضای دیسک،
  - و حداقل ۲ گیگابایت RAM

## نصب Docker

به‌عنوان پیش‌نیاز باید [docker و
docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation) را نصب کنید.

### اگر docker.com مسدود است:

بسته به کشوری که سرور شما در آن است، ممکن است docker.com مسدود باشد.
همچنین می‌توانید docker و docker-compose را از منابع دیگر بگیرید:

- مخزن apt رسمی اوبونتو معمولاً نسخه قدیمی docker دارد؛ این
  بهترین ایده نیست.
- [snap](https://docs.docker.com/engine/install/ubuntu/) راه دیگری برای
  نصب docker است، اما برای docker-compose نسخه snap کار نمی‌کند. توجه کنید
  اگر docker را از طریق snap نصب کنید، در systemd اجرا نمی‌شود بلکه در snap.
- می‌توانید باینری docker-compose را [از GitHub](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64)
  دانلود کنید و به [محل درست](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually) کپی کنید
- و در نهایت می‌توانید به سروری خارج از کشور دسترسی بگیرید،
  یک پروکسی HTTPS بسازید و از آن برای نصب docker و docker-compose استفاده کنید.
  پیچیده است، اما ممکن است کار کند. اگر مشکل داشتید می‌توانید [با ما تماس بگیرید](mailto:mailadm@testrun.org).

## ساخت ورودی‌های DNS

اگر هنوز دامنه ندارید، می‌توانید از سرویسی مثل
[njal.la](https://njal.la) برای خرید دامنه .net یا .org به قیمت ۱۵€ در سال استفاده کنید.
می‌توانید با PayPal، بیت‌کوین یا Monero پرداخت کنید.

فرض کنیم:
- example.org را خریده‌اید. فعلاً فقط سرور ایمیل می‌خواهید، اما فکر می‌کنید
  بعداً وب‌سایتی در https://example.org میزبانی کنید.
- سرور شما آدرس IPv4 برابر 24.48.100.24 دارد — می‌توانید با دستور
  `ip a` پیدا کنید و به‌دنبال عددی شبیه آن بگردید (که با
  127 یا 172 شروع نشود).
- سرور شما آدرس IPv6 برابر 7fe5:2f4:1ba:2381::3 دارد (در `ip
  a`، ۲ خط پایین‌تر از آدرس IPv4. `/64` انتهای آن را نادیده بگیرید. از
  آدرسی که با `fe80` شروع می‌شود استفاده نکنید).

حالا می‌توانید تنظیمات دامنه example.org را این‌گونه پیکربندی کنید:

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

You can setup the DKIM key after setting up mailcow,
in System>Configuration>Options>ARC/DKIM keys.

You can do more than 5 minutes, but in case you notice something is wrong a
short time helps with fixing the wrong entry.

## راه‌اندازی Mailcow

### تنظیم گزینه‌های Mailcow

First clone the mailcow git repository - if your server doesn't have access to
github.com, you can do this step somewhere else and use `scp` to copy it to
your server.

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

### پیکربندی NGINX برای mailadm

`mailadm.example.org/new_email` needs to be reachable for HTTP requests to work.
So we need to create two files for Mailcows Nginx redirection.
First we do `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`
and then we create the file `data/conf/nginx/site.mailadm.custom`
and add the following block to it:

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

Make sure to replace this example IP address with your server's IP address.

This will forward all requests to `mailadm.example.org/new_email` to the mailadm
container later.

### دانلود کانتینرهای mailcow

Now run `sudo docker compose pull` to download the mailcow containers. If you don't
have access to docker.com at this step, you can [use an HTTP
proxy](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/).

### شروع Mailcow

Now start mailcow with `sudo docker compose up -d`.

### غیرفعال‌سازی IPv6 برای mailcow

If your server doesn't have an IPv6 address, you should [disable
IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/).

### افزودن دامنه در Mailcow

Now you can login to the mailcow web interface at https://mail.example.org. The
default username is `admin` and the password is `moohoo`. You should change
this password to something more secure.

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

#### پیشنهاد: افزودن ورودی‌های DNS بیشتر

In "E-Mail > Configuration > Domains", on the right next to your domain, you can see a blue
"DNS" button. It provides further recommendations for DNS entries which might
help if you have problems getting your e-mails delivered to other servers.

![Showing DNS settings in Mailcow](../assets/blog/mailcow-dns-settings.png)

## راه‌اندازی mailadm

Now we can set up mailadm - with this tool you can generate QR codes, which
people can scan from Delta Chat to create an e-mail account on your server. It
is probably the easiest way for users to get started with Delta Chat.

### دانلود mailadm

You can use these commands to download mailadm:

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### ساخت mailadm

Now you can build the mailadm docker container with
`sudo docker build . -t mailadm-mailcow`.

#### اگر docker.com یا pypi.org مسدود است

If your server can't reach docker.com, dl-cdn.alpinelinux.org, or pypi.org,
this will fail. But you can build the docker container on a different machine
and copy it to the VPS:

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar example.org:
ssh example.org
sudo docker load --import mailadm-image.tar
```

### دریافت توکن API از رابط وب

Now you can go to https://mail.example.org/admin again, to get a mailcow API
key.

You have to activate the API (Make sure to use the "Read-Write Access API" and
not the "Read-Only Access API"!) and enter your server's br-mailcow interface
IP address under "Allow API access from these IPs/CIDR network notations". You
can find out the IP address with `ip a show br-mailcow`.

Check the checkbox "Activate API and then click on "Save Changes" and copy the
API key.

### پیکربندی mailadm

Then, in the mailadm directory, create a `.env` file and configure mailadm like
this:

```
MAIL_DOMAIN=example.org
WEB_ENDPOINT=https://mailadm.example.org/new_email
MAILCOW_ENDPOINT=https://mail.example.org/api/v1/
MAILCOW_TOKEN=238473-081241-7A78B1-B7098C-E798BA
```

At `MAILCOW_TOKEN`, enter the API key which you just got from the mailcow web
interface.

If you are unsure how to choose the values in .env, take a look at the
[documentation](https://mailadm.readthedocs.io/en/latest/#configuration-details)
of mailadm.

### افزودن alias برای mailadm

Now to make it easier to run mailadm commands, add this alias:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### شروع mailadm

Then you can initialize the database and setup the bot mailadm will use to
receive commands and support requests from your users:

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

#### گام‌های اول با mailadm

That's it! You can now get started with creating tokens and users with mailadm.
Best look at the documentation for the [first
steps](https://mailadm.readthedocs.io/en/latest/#first-steps) - it also
contains hints for troubleshooting the setup if something doesn't work.

## پیشنهاد: غیرفعال‌سازی POP3

Delta Chat uses only SMTP and IMAP,
so if all of your users use Delta Chat,
you can disable POP3.

To do this, add the following to `mailcow.conf`:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Then apply the changes with `sudo docker compose up -d`.

## پیشنهاد: هدایت همه ترافیک HTTP به HTTPS

By default,
the nginx server also responds unencrypted
on port 80.
This can be bad,
as some users might enter passwords
over this unencrypted connection.

To prevent this,
create a new file `data/conf/nginx/redirect.conf`
and add the following server config to the file:

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

## پیشنهاد: بدون لاگ، بدون ارباب

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

## پیشنهاد: افزودن ورودی‌های Reverse DNS نزد ارائه‌دهنده

You might also create reverse DNS entries
for the IPv4 and IPv6 addresses of your server,
containing your domain.
Reverse DNS entries improve deliverability;
it helps other mail server
distinguish your user's mails from spam.

Setting rDNS entries should be possible
in the hosting provider web interface.
You can read more about it
[in this article](https://docs.hetzner.com/dns-console/dns/general/reverse-dns/).

