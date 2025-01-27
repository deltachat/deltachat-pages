---
title: 如何为 Delta Chat 搭建邮件服务器
lang: zh_CN
---

# 如何为 Delta Chat 搭建邮件服务器

Delta Chat 是运行在电子邮件之上的聊天软件。这意味着可以使用任意电子邮件服务器来支持 Delta Chat 账户。 [Mailcow](https://mailcow.email) 是易于搭建与管理，并且可对 Delta Chat 开箱即用的电子邮件服务器。

你可以将其与 [mailadm](https://mailadm.readthedocs.io) 一起运行，mailadm 为你的用户提供了一种简单的方式来创建电子邮件账户并直接使用 Delta Chat 登录。本指南也包含了 mailadm 的安装说明。

你需要：

- 基本的命令行知识
- 一个域名，且可以访问其 DNS 设置
- 到 Linux 服务器的 SSH 访问权限
  - 具有公共 IP，with a public IP，
  - 至少 10 GB 磁盘空间，
  - 以及至少 2 GB 内存

## 安装 Docker

作为前提条件，你需要安装 [docker 和 docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation)。

### 如果 docker.com 被屏蔽：

取决于你的服务器所在的国家/地区，docker.com 可能会被屏蔽。你也可以从其他来源获取 docker 和 docker-compose，这些来源可能可以工作：

- Ubuntu 官方 apt 仓库通常提供过时的 Docker 版本；这不是最佳选择。
- [snap](https://docs.docker.com/engine/install/ubuntu/) 是安装 Docker 的另一种方式，但对于 docker-compose，snap 版本无法正常工作。 请注意，如果你通过 snap 安装 Docker，它不会在 systemd 中运行，而是在 snap 中运行。
- 你可以尝试[从 GitHub 下载 docker-compose 二进制文件](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64) 并将其复制到[正确的位置](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)
- 最后，你可以尝试访问你所在国家/地区以外的服务器，创建 HTTPS 代理，并使用它来安装 docker 和 docker-compose。这有点棘手，但可能会奏效。如果你遇到问题，可以[联系我们](mailto:mailadm@testrun.org)

## 创建 DNS 记录

如果你还没有域名，可以使用 [njal.la](https://njal.la) 等服务购买一个 .net 或 .org 域名，每年 15 欧元。你可以使用 PayPal、比特币或 Monero 付款。

假设：
- 你购买了 example.org。目前你只需要一个邮件服务器，但你考虑稍后在 https://example.org 上托管一个网站。
- 你的服务器的 IPv4 地址是 24.48.100.24 - 你可以使用命令 `ip a` 找到它，并查找类似的数字（不以 127 或 172 开头）。
- 你的服务器的 IPv6 地址是 7fe5:2f4:1ba:2381::3 （你可以在 `ip a` 中找到它，在 IPv4 地址下方 2 行。忽略末尾的 `/64`。不要使用以 `fe80` 开头的地址，它不算数）。

现在你可以像这样配置 example.org 的域名设置：

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

你可以在设置 mailcow 后设置 DKIM 密钥，位置在 System>Configuration>Options>ARC/DKIM keys。

你可以设置超过 5 分钟的 TTL，但如果你注意到某些设置错误，较短的时间有助于更快地修复错误的条目。

## 安装 Mailcow

### 设置 Mailcow 选项

首先克隆 mailcow git 仓库 - 如果你的服务器无法访问 github.com，你可以先在其他地方执行此步骤，然后使用 `scp` 将其复制到你的服务器。

```
sudo apt install -y git
git clone https://github.com/mailcow/mailcow-dockerized
cd mailcow-dockerized
```

现在你应该运行 `./generate_config.sh` 来生成 mailcow.conf 文件。如果你的服务器无法访问 github.com，你首先需要从脚本中删除任何 git 命令。像这样输入选项：

```
Mail server hostname (FQDN) - this is not your mail domain, but your mail servers hostname: mail.example.org
Timezone [Europe/Berlin]: UTC
Which branch of mailcow do you want to use?


Available Branches:
- master branch (stable updates) | default, recommended [1]
- nightly branch (unstable updates, testing) | not-production ready [2]
Choose the Branch with it´s number [1/2] 1
```

你应该在 mailcow.conf 中指定以下变量：

```
ADDITIONAL_SAN=mailadm.example.org
SKIP_CLAMD=y
SKIP_SOLR=y
SKIP_SOGO=y
```

最后 3 个选项移除了最小化设置不需要的服务。

之后我们需要运行 `echo '#' > data/conf/dovecot/global_sieve_before`。

### Mailadm NGINX 配置

`mailadm.example.org/new_email` 需要能够通过 HTTP 请求访问才能工作。因此我们需要为 Mailcow 的 Nginx 重定向创建两个文件。首先我们执行 `echo 'mailadm.example.org' > data/conf/nginx/server_name.active`，然后我们创建文件 `data/conf/nginx/site.mailadm.custom` 并向其中添加以下块：

```
  location /new_email {
    proxy_pass http://24.48.100.24:3691/;
  }
```

请务必将此示例 IP 地址替换为你的服务器的 IP 地址。

这将把所有对 `mailadm.example.org/new_email` 的请求转发到稍后的 mailadm 容器。

### 下载 mailcow 容器

现在运行 `sudo docker compose pull` 来下载 mailcow 容器。如果你在此步骤中无法访问 docker.com，你可以[使用 HTTP 代理](https://elegantinfrastructure.com/docker/ultimate-guide-to-docker-http-proxy-configuration/)。

### 启动 Mailcow

现在使用 `sudo docker compose up -d` 启动 mailcow。

### 为 mailcow 禁用 IPv6

在服务器没有 IPv6 地址的情况下，你应当[禁用 IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/)。

### 在 Mailcow 中添加域名

现在你可以使用 https://mail.example.org 登录 mailcow Web 界面。默认用户名是 `admin`，密码是 `moohoo`。你应该将此密码更改为更安全的密码。

![Mailcow Web 界面登录页面。](../assets/blog/mailcow-UI-login.png)

接下来，在 Web 界面中的 "E-Mail > Configuration > Domains" 下添加一个域名。像这样的设置是合理的：

- 域名: example.org
- 最大邮箱数: 999999
- 默认邮箱配额: 3076 (没关系，mailadm 会覆盖它)
- 最大邮箱配额: 17240 (基本上比你的可用磁盘空间略小)
- 域名配额: 17240 (基本上比你的可用磁盘空间略小)

![在 Mailcow 中创建域名](../assets/blog/mailcow-create-domain.png)

完成此操作后，你可以转到 "E-Mail > Configuration > Mailboxes" 并创建第一个帐户。现在你可以用 Delta Chat 尝试一下了。

#### 推荐：添加额外的 DNS 记录

在 "E-Mail > Configuration > Domains" 中，在你的域名右侧，你可以看到一个蓝色的 "DNS" 按钮。它提供了进一步的 DNS 记录建议，如果你在将电子邮件传递到其他服务器时遇到问题，这些记录可能会有所帮助。

![在 Mailcow 中显示 DNS 设置](../assets/blog/mailcow-dns-settings.png)

## 安装 mailadm

现在我们可以设置 mailadm 了 - 使用此工具，你可以生成二维码，人们可以使用 Delta Chat 扫描二维码，以便在你的服务器上创建电子邮件帐户。这可能是用户开始使用 Delta Chat 最简单的方式。

### 下载 mailadm

现在你可以使用 `sudo docker build . -t mailadm-mailcow` 构建 mailadm docker 容器。

```
cd ~
git clone https://github.com/deltachat/mailadm
cd mailadm
mkdir docker-data
```

### 构建 mailadm

现在你可以使用 `sudo docker build . -t mailadm-mailcow` 构建 mailadm docker 容器。

#### 如果 docker.com 或 pypi.org 被屏蔽

如果你的服务器无法访问 docker.com、dl-cdn.alpinelinux.org 或 pypi.org，这将失败。但你可以在另一台机器上构建 docker 容器并将其复制到 VPS：

```
sudo docker build . -t mailadm-mailcow
sudo docker save -o mailadm-image.tar mailadm-mailcow
scp mailadm-image.tar example.org:
ssh example.org
sudo docker load --import mailadm-image.tar
```

### 从 Web 界面获取 API 令牌

现在你可以再次访问 https://mail.example.org/admin，以获取 mailcow API 密钥。

你必须激活 API（请务必使用“读写访问 API”，而不是“只读访问 API”！），并在“允许来自这些 IP/CIDR 网络符号的 API 访问”下输入你的服务器的 br-mailcow 接口 IP 地址。你可以使用 `ip a show br-mailcow` 找到 IP 地址。

选中“激活 API”复选框，然后单击“保存更改”并复制 API 密钥。

### 配置 mailadm

然后，在 mailadm 目录中，创建一个 `.env` 文件并像这样配置 mailadm：

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

### Add mailadm alias

Now to make it easier to run mailadm commands, add this alias:

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### Start mailadm

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

#### First steps with mailadm

That's it! You can now get started with creating tokens and users with mailadm.
Best look at the documentation for the [first
steps](https://mailadm.readthedocs.io/en/latest/#first-steps) - it also
contains hints for troubleshooting the setup if something doesn't work.

## Recommended: Disable POP3

Delta Chat uses only SMTP and IMAP,
so if all of your users use Delta Chat,
you can disable POP3.

To do this, add the following to `mailcow.conf`:

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

Then apply the changes with `sudo docker compose up -d`.

## Recommended: Redirect all HTTP traffic to HTTPS

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

## Recommended: No Logs, No Masters

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

## Recommended: Add Reverse DNS Entries at Your Provider

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

