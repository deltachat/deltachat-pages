---
title: 如何为 Delta Chat 设置邮件服务器
lang: zh_CN
---

# 如何为 Delta Chat 设置邮件服务器

Delta Chat 是一款基于电子邮件运行的聊天软件。这意味着我们可以使用任何电子邮件服务器来运行 Delta Chat 账户。[Mailcow](https://mailcow.email) 就是一个易于设置和管理，并且开箱即用支持 Delta Chat 的邮件服务器。

你可以将其与 [mailadm](https://mailadm.readthedocs.io) 一起运行，mailadm 为你的用户提供了一种简单的方式来创建电子邮件账户并直接使用 Delta Chat 登录。本指南也包含了 mailadm 的安装说明。

你需要准备：

- 基本的命令行知识
- 一个域名，以及访问其 DNS 设置的权限
- SSH 访问一台 Linux 服务器
  - 具有公网 IP 地址
  - 至少 10 GB 磁盘空间
  - 至少 2 GB 内存

## 安装 Docker

作为前提条件，你需要安装 [docker 和 docker-compose](https://docs.mailcow.email/getstarted/install/#docker-and-docker-compose-installation)。

### 如果 docker.com 被屏蔽：

取决于你的服务器所在的国家/地区，docker.com 可能会被屏蔽。你也可以从其他来源获取 docker 和 docker-compose，这些来源可能可以工作：

- Ubuntu 官方 apt 仓库通常提供过时的 Docker 版本；这不是最佳选择。
- [snap](https://docs.docker.com/engine/install/ubuntu/) 是安装 Docker 的另一种方式，但对于 docker-compose，snap 版本无法正常工作。 请注意，如果你通过 snap 安装 Docker，它不会在 systemd 中运行，而是在 snap 中运行。
- 你可以尝试[从 GitHub 下载 docker-compose 二进制文件](https://github.com/docker/compose/releases/download/v2.12.0/docker-compose-linux-x86_64) 并将其复制到[正确的位置](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)
- 最后，你可以尝试访问你所在国家/地区以外的服务器，创建 HTTPS 代理，并使用它来安装 docker 和 docker-compose。这有点棘手，但可能会奏效。如果你遇到问题，可以[联系我们](mailto:mailadm@testrun.org)。

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

## 设置 Mailcow

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

### 禁用 Mailcow 的 IPv6

如果你的服务器没有 IPv6 地址，你应该[禁用 IPv6](https://docs.mailcow.email/post_installation/firststeps-disable_ipv6/)。

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

## 设置 mailadm

现在我们可以设置 mailadm 了 - 使用此工具，你可以生成二维码，人们可以使用 Delta Chat 扫描二维码，以便在你的服务器上创建电子邮件帐户。这可能是用户开始使用 Delta Chat 最简单的方式。

### 下载 mailadm

你可以使用以下命令下载 mailadm：

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

在 `MAILCOW_TOKEN` 中，输入你刚刚从 mailcow Web 界面获得的 API 密钥。

如果你不确定如何选择 .env 中的值，请查看 mailadm 的[文档](https://mailadm.readthedocs.io/en/latest/#configuration-details)。

### 添加 mailadm 别名

现在为了更轻松地运行 mailadm 命令，添加此别名：

```
alias mailadm="$PWD/scripts/mailadm.sh"
echo "alias mailadm=$PWD/scripts/mailadm.sh" >> ~/.bashrc
```

### 启动 mailadm

然后你可以初始化数据库并设置 mailadm 将用于接收来自用户的命令和支持请求的机器人：

```
mailadm init
mailadm setup-bot
```

然后会要求你扫描二维码以加入管理组，这是一个经过验证的 Delta Chat 群组。群组中的任何人都可以通过 Delta Chat 向 mailadm 发出命令。你可以向群组发送 “/help” 以了解如何使用它。

现在，由于一切都已配置好，我们可以永久启动 mailadm 容器了：

```
sudo docker run -d -p 3691:3691 --mount type=bind,source=$PWD/docker-data,target=/mailadm/docker-data --name mailadm mailadm-mailcow gunicorn -b :3691 -w 1 mailadm.app:app
```

这将启动一个 `mailadm` docker 容器。你可以使用 `sudo docker restart mailadm` 重启它，如果你想这样做的话。

#### mailadm 的初步使用

就这样！你现在可以开始使用 mailadm 创建令牌和用户了。最好查看[初步使用](https://mailadm.readthedocs.io/en/latest/#first-steps)的文档 - 它还包含如果某些内容无法正常工作时，故障排除的提示。

## 推荐：禁用 POP3

Delta Chat 仅使用 SMTP 和 IMAP，因此如果你的所有用户都使用 Delta Chat，则可以禁用 POP3。

为此，请将以下内容添加到 `mailcow.conf`：

```
POP_PORT=127.0.0.1:110
POPS_PORT=127.0.0.1:995
```

然后使用 `sudo docker compose up -d` 应用更改。

## 推荐：将所有 HTTP 流量重定向到 HTTPS

默认情况下，nginx 服务器也会在端口 80 上以未加密的方式响应。这可能不好，因为某些用户可能会通过此未加密的连接输入密码。

为了防止这种情况，创建一个新文件 `data/conf/nginx/redirect.conf` 并将以下服务器配置添加到该文件：

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

然后使用 `sudo docker compose restart nginx-mailcow` 应用更改。

## 推荐：无日志，无主日志

Mailcow 会记录用户的 IP 地址以进行调试，因此如果你不想在服务器上保留此关键信息，你可能需要禁用日志记录。请注意，这会使问题调试变得更加困难。只有你自己才能判断这在你的环境中是否必要。

Mailcow 将一些日志保存在 Redis 中，因此你可以在 Web 界面中显示它 - 但如果你在 docker-compose.yml 中的 redis-server 容器中添加 `command: '--save ""'`，它只会将它们保存在 RAM 中，希望潜在的攻击者不会保存 RAM 中的数据。

要将实际的日志文件指向 `/dev/null`，又名涅槃，你可以：

在 `mailcow-dockerized/docker-compose.yml` 中的每个容器中添加以下行：

```
      logging:
        driver: "syslog"
        options:
          syslog-address: "udp://127.0.0.1:514"
          syslog-facility: "local3"
```

现在你可以配置 rsyslog 以侦听该端口的日志输入。取消注释 `/etc/rsyslog.conf` 中的以下行：

```
module(load="imudp")
input(type="imudp" port="514")
```

并将此内容放入 `/etc/rsyslog.d/` 中，以将所有内容重定向到涅槃：

```
local3.*        /dev/null
& stop
```

最后，使用 `sudo service rsyslog restart` 重启 rsyslog，并使用 `sudo docker compose up -d` 重启 mailcow。

可以考虑查看 [Mailcow 日志记录文档](https://docs.mailcow.email/post_installation/firststeps-logging/#log-rotation) 以获取此配置的替代方案。

## 推荐：在你的提供商处添加反向 DNS 记录

你还可以为服务器的 IPv4 和 IPv6 地址创建反向 DNS 记录，其中包含你的域名。反向 DNS 记录可以提高送达率；它有助于其他邮件服务器将你用户的邮件与垃圾邮件区分开来。

应该可以在托管提供商的 Web 界面中设置 rDNS 记录。你可以在[本文](https://docs.hetzner.com/dns-console/dns/general/reverse-dns/)中阅读有关它的更多信息。
