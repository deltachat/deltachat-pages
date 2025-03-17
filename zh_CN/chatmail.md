---
title: 即时、互通和隐私的 chatmail 消息服务
lang: zh_CN
---


## 什么是 Chatmail 服务器，如何选择

<img alt="Chatmail logo" src="../assets/logos/chatmail.svg" width="80" style="float:right;" />

Chatmail 服务器为 Delta Chat 优化，提供保护隐私且快速的用户体验，与 Chatmail 和传统电子邮件服务器安全互操作。
**点击 Chatmail 服务器链接** 查看主页，然后点击那里的 QR 邀请码：

- [nine.testrun.org](https://nine.testrun.org) 是 Delta Chat 应用的默认 Chatmail 服务器，自 [2023 年 12 月 Chatmail 公告](https://delta.chat/en/2023-12-13-chatmail) 发布以来一直保持稳定。

- [mehl.cloud](https://mehl.cloud) 面向德语用户，自 2024年1月 以来一直稳定运行。

- [mailchat.pl](https://mailchat.pl) 面向波兰语用户，自 2024年1月 以来一直稳定运行。

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/)
主要面向意大利语用户，自2024年5月以来运行稳定。

- [chika.aangat.lahat.computer](https://chika.aangat.lahat.computer/)
在美国运营，自2024年7月以来运行稳定。

- [tarpit.fun](https://tarpit.fun)
托管于奥地利，自2024年12月以来运行稳定。

There are also additional chatmail servers not listed publically.  
All chatmail servers are operated by different groups and people. 
The nine.testrun.org default server is operated by core Delta Chat team members. 


## 我可以使用常规电子邮件服务器代替 chatmail 吗？

是的，许多用户成功地使用常规电子邮件服务器，特别是如果他们希望使用 Delta Chat 处理他们的常规电子邮件通信。 查看 [提供商数据库](https://providers.delta.chat) 了解选项。 请注意，Delta Chat 支持多账户，因此可以配置一个账户使用您的常规电子邮件地址，另一个账户用于聊天。


## chatmail 服务器与电子邮件服务器有何不同?

Chatmail 服务器是为速度、安全性和便利性设计的最小化电子邮件服务器：

- **便利:**  在几秒内自动登录并接收推送通知

- **隐私:** 不询问问题，不需要姓名、数字或电子邮件

- **快速:** 端到端消息传递在不到一秒钟内就可以完成

- **可靠：** 没有烦人的垃圾邮件检查或速率限制

- **安全：** 对外发送的信息必须进行端到端加密、传入信息要经过严格的真实性检查。


## Chatmail服务器的可信度如何？

每个 chatmail 服务器在其网页上提供额外的隐私信息。 通常，chatmail 服务器只处理加密消息，并在最多保留20天后，自动、无条件的删除消息。

Delta Chat 提供 [确保端到端加密](https://delta.chat/en/2023-11-23-jumbo-42) 这意味着在大多数使用情况下，即使服务器运营商尝试，也无法阅读您的信息， 这一保证得到了 ETH Zuerich 最近的[安全分析](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) 的背书。


## Chatmail服务器是如何运行的？我能自己运行一个吗？ {#selfhosted}

所有 chatmail 服务器都使用 [公共 chatmail 开发存储库](https://github.com/deltachat/chatmail) 自动部署和更新。Chatmail 服务器由经过验证的标准电子邮件服务器组件组成，[Postfix](https://postfix.org) 和 [Dovecot](https://dovecot.org)，配置为无人值守运行，并且所需维护工作量非常低。chatmail 服务器可以愉快地运行在低端硬件上，如 Raspberry Pi。


# Chatmail 服务器是如何获得资金的？

Chatmail 服务器在设计上就考虑了低成本运营，它们通常由运营商自筹资金。请查看每个 chatmail 服务器的首页以获取更多信息。

为了支持 Chatmail 的开发和运行默认的登机服务器，非常欢迎您贡献力量。

[捐助钱款](donate){: .cta-button}
