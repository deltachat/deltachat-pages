---
title: 常见问题
lang: zh_CN
render_toc: true
header: 常见问题
---


## 什么是 Delta Chat？

Delta Chat 是一款可靠、去中心化和安全的消息应用程序、 
适用于移动和桌面平台。

Delta Chat 感觉就像 Whatsapp 或 Telegram，但你也可以把它当作电子邮件应用程序来使用。 
你可以匿名注册到各种[可互操作的聊天邮件服务器](https://delta.chat/chatmail)
这些都是为快速安全运行而优化的最小电子邮件服务器。 
您也可以使用传统的电子邮件服务器和现有的电子邮件账户
在这种情况下， Delta Chat 可充当邮件客户端。

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### 如何找到可以聊天的人？

要安全地与他人建立联系[扫描邀请二维码 
或分享邀请链接](#howtoe2ee)。 
使用（默认的）基于chatmail的聊天账户时需要这样做 
因为chatmail会拒绝未加密的发送信息。

当使用经典电子邮件地址创建聊天配置文件时 
如果您知道联系人的电子邮件地址，您可以手动创建联系人
然后给他们写信息 
即使收件人没有使用Delta Chat 。


### 与其他通信软件相比，Delta Chat 有哪些优势？

- 使用快速、安全、可互操作的 [chatmail 服务器](https://delta.chat/chatmail) 创建匿名聊天账户
  为 iOS 和 Android 设备提供即时推送通知。 

- 跨平台支持 [多配置文件](#multiple-accounts) 和多设备。 

- 交互性 [聊天中的网页小程序](https://webxdc.org/apps)

- [经审计的端到端加密](#security-audits) 
  安全地抵御网络和服务器攻击。 

- 免费开源软件，包括应用程序和服务器端。 
  基于[电子邮件和网络互联网标准]({% include standards-url %})、 
  [避免 "又一个标准综合症（xkcd 927）"](https://xkcd.com/927/) 


### 如果希望收到我从未发送过消息的人的消息，该怎么办?

当收到陌生联系人的消息时，系统会将其显示为**请求**形式。

- 需先**通过**该验证请求，用户方可发送回复。

- 若你暂无交流意愿，可直接**删除**该请求以终止对话。

- 若您选择删除某条消息请求，对方后续发来的消息仍会以「消息请求」形式显示，
以便您保留重新考虑的机会。若需彻底拒收该联系人消息，
建议直接启用 ​**Block** 功能进行屏蔽。


### Delta Chat 支持图像、视频和其他附件吗？

- 是的。图片、视频、文件、语音消息等会像往常一样被处理。

- 为了提高性能，默认情况下会对图像进行优化并以较小的尺寸发送，但您也可以将其作为 "文件 "发送，以保留原始图像。


### 什么是账户资料？如何在它们之间切换？ {#multiple-accounts}

一份账户资料包括**姓名、照片**和一些额外的加密信息。
个人配置只存在于您的设备(们)中
并使用聊天邮件或传统电子邮件服务器传输信息。

首次安装Delta Chat 时，会创建第一个账户资料文件。

之后，您可以点击左上角的个人资料图像，**添加个人账户**
或**切换账户**。

您可能希望为政治、家庭或工作相关的活动使用不同的账户资料,
或者例如，为专门用于注册网站和平台的“垃圾邮件账户资料”,
这些网站和平台往往会早晚导致未经请求的消息（即“垃圾邮件”）

您可能还想了解 [如何在多台设备上使用同一账户资料](#multiclient)。


### 谁会看见我的个人资料图片？

- 您可以在设置中添加个人资料图片。如果您给您的联系人发消息或者通过二维码添加他们，他们会自动看到您的个人资料图片。

- 不使用 Delta Chat 的联系人不会看到个人资料图片（不过，他们可以安装 Delta Chat :）

- 出于隐私原因，在您向他们发送消息之前，没有人会看到您的个人资料照片。

- 您的个人资料图片并非随每条消息一起发送，但发送的频率足够高。因此即使您的联系人添加了新设备，也能够重新收到您的个人资料图片。


### 我可以为 Delta Chat 设置签名文本/状态/格言吗？ {#signature}

是的，
您可以在“设置 > 个人资料 > 签名文本”下执行此操作。
使用 Delta Chat 的联系人查看您的联系方式时将会看到它。
对其他所有人来说，
它将显示为在您所有消息文本下方的电子邮件签名。


### 固定、静音、归档是什么意思？

使用这些工具来管理您的聊天，让其井然有序：

- **已固定聊天**会呆在聊天列表顶部。您可以利用其快速访问最喜欢的聊天或临时记下某些东西。

- **静音聊天**，如果您不想再得到关于它们的通知。被静音的聊天会呆在原地，并且您可以固定被静音的聊天。

- 如果您不想再在聊天列表中看到聊天记录，请**归档聊天**。
  已归档的聊天仍可在聊天列表上方或通过搜索访问。 

- 当被归档的聊天接收到一条新消息，除非其被静音，它会**从归档中弹出**并返回聊天列表。
  **被静音的聊天会保持被归档的状态**，除非您手动解档它们。 

要归档或固定一个聊天，可以长按（Android）、使用聊天内部的菜单（Android/桌面版）或者左滑（iOS）；
要静音一个聊天，可以使用聊天内部的菜单（Android/桌面版）或者通过聊天概要（iOS）。


### “保存的消息”如何工作？ {#save}

**Saved Messages** 是专用于存储消息的专属对话窗口，可帮助您便捷存储和快速检索重要信息。

- 在任何聊天中，长按或右键单击消息并选择 ** 保存 **

- 已保存的消息会显示专属标识符号。
  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
  在时间戳右侧

- 后续操作时，进入「Saved Messages」对话窗口即可查看所有已保存内容。
轻触 <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/> 按钮，
系统将带您快速跳转回原始聊天中的对应消息。

- 您还可以将「Save Messages」作为**个人记事本**使用：进入该对话窗口后，既可编辑文字内容，也能添加图片、语音录音等多媒体素材。

- "Saved Message" 的同步特性使其成为设备间数据迁移的实用方案——用户通过该功能可轻松实现手机、电脑等多终端信息流转。

即使消息遭到修改或删除 - 无论是[发送者编辑](#edit)、[设备清理操作](#delold)，还是[其他聊天中的临时消息功能](#ephemeralmsgs)所触发 - 这些信息仍将保留在系统中。


### 绿色圆点代表什么？

您有时可以在联系人头像旁看到一个 "绿点"。
绿点。这意味着他们 "最近被看到"。<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/> 
具体来说：这意味着在过去 10 分钟内，Delta Chat 看到过他们：

- 因为他们直接给你发了消息、
- 因为他们在你们都是成员的群组里写了什么、
- 因为他们向您发送了您所写信息的读取回执、
- 或者因为他们通过使用 [webxdc 应用程序](#webxdc) 向您的 Delta Chat 应用发送数据。

因此，这并不是实时在线状态 -- 如果有人没有立即回复，即使他们看起来是在线的，也不要担心，给他们一些空间 :)

另一方面，别人也不会总是 "看到你在线"。如果您关闭了读取收据功能，他们就不会看到绿点，直到您给他们发消息或给他们所在的群组写信。


### 发送后更正错别字并删除邮件 {#edit}

- 已发送消息支持文本内容修改。操作时，用户只需长按（移动端）或右键单击（电脑端）目标消息，调出功能菜单后点选**Edit**或<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>即可进入编辑模式。

- 若发生消息误发情况，
可通过以下路径撤回：在当前操作菜单中，依次选择**删除**和**为所有人删除**选项。

在聊天场景中，经过编辑的消息会在时间戳旁标注“Edited”提示，
而被删除的信息则会彻底消失且不显示任何痕迹。
相关操作既不会触发系统通知，也没有规定必须在时限内完成修改。

需特别提示：若聊天成员已对消息进行过回复、转发、保存本地、截图留存或其他形式的复制操作，
即使您后续编辑了原始消息，对方设备上仍可能留存原内容。


### 消息定时销毁是如何工作的？ {#ephemeralmsgs}

您可以在聊天窗口右上角的聊天设置中通过选择 1 分钟到 5 周之间的时间跨度打开“消息定时销毁”。

在再次关闭该设置之前，
每个聊天成员的 Delta Chat 应用都会负责
在选定的时间跨度后删除消息。
时间跨度从
接收者首次在 Delta Chat 中看到消息时开始。
消息将在
服务器上的每个电子邮件帐户中以及应用本身中删除。

请注意，只有当您信任您的聊天伙伴时，您才可以依赖“消息定时销毁”；
不怀好意的人可能会拍照，或者在删除之前以其他方式保存、复制或转发消息。

除此之外，
如果一个聊天伙伴卸载了 Delta Chat，
消息将不会从他们的电子邮件帐户中删除。
它们很可能也无法再解密
（只要它们首先是加密的）。


## 群组

### 创建群组

- 从右上角的菜单中选择**新建聊天**，然后选择**新建群组**或在 Android/iOS 上点击相应的按钮。
- 在随后的屏幕上，选择**群组成员**并起一个**群组名称**。您也可以选择一个**群组头像**。
- 当您在群组中发送**第一条消息**时，所有成员都会被告知新群组的信息并可以在该群组中应答（只要您不在群组中发送第一条消息，那么群组对成员就是不可见的）。


### 添加成员到群组

- 每个群组成员均拥有与其他成员**相同的权限**。因此，每个人都可以删除成员或添加新成员。
- 要添加或删除成员，请在聊天中点击群组名称。


### 我不小心删除了我自己。

- 由于您不再是群组成员，您无法将自己加入到群组中。但是，问题不大，只需在普通聊天中请求其他群组成员将您重新加入即可。


### 我不想再收到某个群组中的消息了。

- 从成员列表中删除自己，或者删除整个聊天。如果您之后想再加入该群组，请让其他群组成员添加您。

- 另外，您也可以“静音”群组——这样做意味着您会收到所有消息并且仍可以编写消息，但不会再收到任何新消息的通知。


### 显示在发出消息旁边的对勾表示什么？

- **一个对勾**表示消息已成功发送给您的服务提供商。
- **两个对勾**表示至少一个接收者的设备对接收该消息进行了回报。
- 接收者或许会禁用已读回执，所以即使您只看见了一个对勾，消息也可能已被阅读。
- 反过来说，两个对勾也不一定表示某个人类已阅读或理解了该消息 ;)


### 打开“从服务器删除旧消息”后，会发生什么？

- 默认情况下，Delta Chat 会在本地设备上存储您的所有消息。
 如果您，例如，想要节省邮件提供商处的存储空间，
那么可以选择配置Delta Chat 以开启服务端自动删除旧消息。
这些消息还将保存在您的设备上,除非您在设备上删除它们。

- 要打开它，请转到 "聊天和媒体 "设置中的**删除旧信息 → 从服务器删除信息**。
  您可以在 "立即 "和 "1 年后 "之间设置时限。
  Delta Chat 收到的所有电子邮件都将在此期限后从服务器中删除。

- 注意：如果在多台设备上使用 Delta Chat，请将消息在服务器上保存足够长的时间，以便其他设备能够下载消息。在这种情况下，您应当根据其他设备(们)的使用频率，将自动删除设置到“一天后”或相似的选项上。


### 打开“从设备删除旧消息”后，会发生什么？ {#delold}

- 若要节省设备上的存储空间，可以开启自动删除旧消息。
- 找到“聊天与媒体”设置中的“从设备删除旧消息”，在从“一小时后”到“一年后”的一系列选项中选择一个。这样，设备上 *所有* 比所选择时间长度老的消息将被删除。


## 即时消息传递和推送通知 {#instant-delivery}


### 什么是推送通知？如何获得即时消息传递？

推送通知由 Apple 和 Google 的“推送服务”发送到用户的设备，以便非活动状态的 Delta Chat 应用可以在后台获取消息，并在需要时在用户的手机上显示通知。

推送通知适用于以下所有 [chatmail](https://delta.chat/chatmail) 服务器：

- iOS 设备通过与 Apple Push 服务集成。

- Android 设备，通过与 Google FCM Push 服务集成，
包括使用 [microG](https://microg.org)
而不是手机上专有 Google 代码的设备。

自 2024 年 5 月起，传统电子邮件服务器不再支持 Delta Chat 用户的推送通知。


### iOS 设备上是否启用了推送通知？我还有其他的选择吗？

是的，Delta Chat 会自动使用推送通知来接收 [chatmail](https://delta.chat/chatmail) 个人资料。
而且，Apple 手机上没有其他方式可以实现即时消息传递
因为 Apple 设备不允许 Delta Chat 在后台获取数据。
推送通知会自动为 iOS 用户激活，因为
[Delta Chat 的隐私保护推送通知系统](#privacy-notifications)
不会向 Apple 泄露其尚未拥有的数据。


### Android 设备上是否启用/需要推送通知？ {#android-push}

如果有“推送服务”可用，Delta Chat 将启用推送通知，
以实现所有聊天邮件用户的即时消息传递。
如果您使用的是传统电子邮件提供商而不是 [chatmail](https://delta.chat/chatmail) 服务器，则无法使用推送通知。

在 Delta Chat“通知”的“推送通知”设置中，您可以更改以下影响所有聊天配置文件的设置：

- 使用后台连接：如果你没有使用推送服务，
你可以禁用 Delta Chat 的“电池优化”，
允许它在后台获取消息。
但是，可能会有几分钟到几小时的延迟。
一些 Android 供应商甚至完全限制应用
（请参阅 [dontkillmyapp.com](https://dontkillmyapp.com)），
并且 Delta Chat 可能不会显示传入的消息，
直到你手动再次打开应用为止。
  
- 强制后台连接：如果之前的选项不可用或无法实现“即时传递”，
这是后备选项。
启用它会在你的手机上导致永久通知，
这有时可能会被最新的 Android 手机“最小化”。

如果消息到达时间延迟较长，
则“后台连接”选项都节能且安全，可以尝试。


### Delta Chat 推送通知的隐私性如何？ {#privacy-notifications}

Delta Chat 推送通知支持避免了私人信息的泄露。
它不会将电子邮件、IP 地址或消息内容（甚至加密后的内容）
泄露给参与推送通知传递的任何系统。

以下是 Delta Chat 应用如何执行推送通知传递：

- Delta Chat 应用在本地获取“设备令牌”，对其进行加密并将其存储在
[Chatmail](https://delta.chat/chatmail) 服务器上。

- 当 [Chatmail](https://delta.chat/chatmail) 服务器收到 Delta Chat 用户的电子邮件时，
它会将加密的设备令牌转发到中央 Delta Chat 通知代理。

- 中央 Delta Chat 通知代理解密设备令牌
并将其转发到相应的推送服务（Apple、Google 等），
而永远不知道 Delta Chat 用户的 IP 或电子邮件地址。

- 中央推送服务（Apple、Google 等）
唤醒你设备上的 Delta Chat 应用
，以便在后台检查新消息。
它不知道它唤醒的设备的 Chatmail 或电子邮件地址。
中央 Apple/Google 推送服务永远不会看到电子邮件地址（发件人或收件人），
也永远不会看到任何消息内容（也包括未加密的形式）。


中央 Delta Chat 通知代理[体积小，完全用 Rust 实现](https://github.com/deltachat/notifiers)
，并在 Apple/Google 等处理设备令牌后立即忘记它们，
通常在几毫秒内。

请注意，设备令牌在应用和通知代理之间加密，
但未签名。
因此，通知代理永远不会看到与用户设备（令牌）关联的电子邮件地址、IP 地址或
任何加密身份信息。

由此产生的整体隐私设计，即使查封 Chatmail 服务器，
或完全查封中央 Delta Chat 通知代理
也不会泄露推送服务尚未拥有的私人信息。


### 为什么 Delta Chat 与集中式专有的 Apple/Google 推送服务集成？

Delta Chat 是一款免费且开源的去中心化即时通讯应用，用户可以自由选择服务器，
但我们希望用户可靠地体验到“即时消息传递”，
就像他们从 Whatsapp、Signal 或 Telegram 应用体验到的那样，
而无需预先提出更适合专家用户或开发人员的问题。

请注意，Delta Chat 具有[小型且隐私保护的推送通知系统](#privacy-notifications)，
可为所有 Chatmail 服务器实现“即时消息传递”，
包括[你可能在未经我们许可的情况下自行设置的服务器](https://delta.chat/chatmail#selfhosted)。
欢迎来到可互操作且庞大的 Chatmail 和电子邮件系统的力量 :)


## 加密和安全 {#e2ee}

### 端到端加密使用了哪些标准 ？ 

Delta Chat uses a [secure subset of the OpenPGP standard](#openpgp-secure)
to provide automatic end-to-end encryption using these protocols: 

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  to exchange encryption setup information through QR-code scanning or "invite links". 

- [Autocrypt](https://autocrypt.org) is used for automatically
  establishing end-to-end encryption between contacts and all members of a group chat. 

- [Sharing a contact to a
  chat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  enables receivers to use end-to-end encryption with the contact. 

Delta Chat does not query, publish or interact with any OpenPGP key servers. 

### 我如何知道信息是否经过端到端加密？ {#whene2e}

All messages in Delta Chat are **end-to-end encrypted by default**.
Since the Delta Chat Version 2 release series (July 2025) 
there are no lock or similar markers on end-to-end encrypted messages, anymore. 

### Can i still receive or send mails without end-to-end encryption? 

If you use default [chatmail relays](https://chatmail.at/relays),
it is impossible to receive or send messages without end-to-end encryption. 

If you instead create a profile using a classic e-mail server,
you can send and receive messages without end-to-end encryption. 
Such messages lacking end-to-end encryption are marked with an e-mail icon 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.

### How can I establish a chat with a new contact? {#howtoe2ee}

You can send an invite link through another private chat, 
show an invitation QR code when next to each other or in a video call,
or click on a "contact" that was shared in a chat. 

- 对于**群组邀请**，
点击聊天群组标题以查看其成员列表，
然后选择“QR 邀请码”。

- For **direct 1:1 chat invitations**, 
  tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen.

Ask your chat partner to scan the QR image
with their Delta Chat app,
or click "Copy" or "Share" to create an invite link
and share it with your chat partner.

Now wait while [end-to-end encryption is getting established](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol). 

- If both sides are online, they will soon see a (group or direct) chat
  and can start messaging securely. 

- If one side is offline or in bad network, 
  the  ability to chat is delayed until connectivity is restored. 

Congratulations! 
You now will automatically use end-to-end encryption
with this contact. 
If you add each other to chat groups,
end-to-end encryption will be established among all members. 


### What does the green checkmark in a contact profile mean? {#e2eeguarantee}

A contact profile might show a green checkmark
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
and an "Introduced by" line.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a green-checkmarked contact to a group with only green-checkmarked members 
becomes an introducer. 
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

有关“保证的端到端加密”的更深入讨论，
请参阅 [安全加入协议](https://securejoin.delta.chat/en/latest/new.html)，
并专门阅读有关“已验证群组”的内容，这是
此处所谓的“带有绿色复选标记”或“保证的端到端加密”聊天的技术术语。

### 附件（图片、文件、音频等）是否已端到端加密？

是的。

当我们谈论“端到端加密消息”时，
我们始终指的是整个消息都已加密，
包括所有附件和附件元数据，例如文件名。


### OpenPGP 安全吗？ {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
requiring the whole message to be properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP 加密标准本身不存在安全隐患。 
目前公众讨论中涉及的 OpenPGP 安全问题， 
大多源自相关工具或应用的用户体验缺陷或技术实现漏洞（或二者叠加）。 
需特别澄清的是：OpenPGP 作为 IETF 制定的加密标准， 
与基于命令行操作的 GnuPG（GPG）工具不可混为一谈。 
诸多对 OpenPGP 的质疑实际指向 GnuPG 工具，而 Delta Chat 即时通讯应用从未采用该工具。 
Delta Chat 实际使用的是 Rust 语言编写的 OpenPGP 实现库 [rPGP](https://github.com/rpgp/rpgp)， 
该库以[独立 "pgp" 组件包](https://crates.io/crates/pgp)形式提供， 
且[已通过 2019 和 2024 年两次安全审计](#security-audits)。 

我们的目标是与其他 OpenPGP 实现者一起，
通过实施 [新的 IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/)
来进一步提高安全特性，该标准已于 2023 年夏季获得通过，令人欣慰。


### Did you consider using alternatives to OpenPGP for end-to-end-encryption? {#openpgp-alternatives}

是的，我们正在关注 [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
或 [Saltpack](https://saltpack.org/) 等工作，
但采用它们将意味着破坏与
通常支持 OpenPGP 加密的所有其他电子邮件应用的端到端加密互操作性。
因此，这不是一个可以轻易做出的决定，
并且必须为用户带来切实的改进。

Delta Chat 采用整体“可用安全性”方法，
并与广泛的活动家团体以及
[TeamUSEC](https://teamusec.de) 等知名研究人员合作
，以改进针对安全威胁的实际用户结果。
用于建立端到端加密的线路协议和标准
只是“用户结果”的一部分，
另请参阅我们对 [设备查封](#device-seizure)
和 [消息元数据](#message-metadata) 问题的回答。


### Delta Chat 是否容易受到 EFAIL 攻击？

不，[Delta Chat 从未受到任何 EFAIL 攻击](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
因为所使用的 OpenPGP 实现了 [rPGP](https://github.com/rpgp/rpgp)
在加密消息时“修改检测代码”
并且如果“修改检测代码”不正确则返回 [错误](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)。

Delta Chat 也从未容易受到“直接泄露”EFAIL 攻击，
因为它只解密 `multipart/encrypted` 消息，
这些消息正好包含一个加密和签名的部分，
如 Autocrypt Level 1 规范所定义。


### Are messages marked with the mail icon exposed on the Internet? {#tls}

If you are sending or receiving e-mail messages without end-to-end encryption (using a classic e-mail server),
they are still protected from cell or cable companies who can not read or modify your e-mail messages. 
But both your and your recipient's e-mail providers 
may read, analyze or modify your messages, including any attachments. 

Delta Chat 默认使用严格的
[TLS 加密](https://en.wikipedia.org/wiki/Transport_Layer_Security)，
这可以保护你的设备和电子邮件提供商之间的连接安全。
Delta Chat 的所有 TLS 处理都经过了独立的 [安全审计](#security-audits)。
此外，你的和接收者的电子邮件提供商之间的连接
通常也会进行传输加密。
如果所涉及的电子邮件服务器支持 [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)，
则将在电子邮件提供商之间强制执行传输加密，
在这种情况下，即使消息未进行端到端加密，Delta Chat 通信也永远不会以明文形式暴露给互联网。


### Delta Chat 如何保护消息中的元数据？ {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

E-mail Servers can therefore only see

- the message date, 

- sender and receiver addresses 

- and message size. 

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### 当设备被查封时，如何保护元数据和联系人？ {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random e-mail addresses for transport. 
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then chat contacts using short-lived profiles
can not be identified easily. 

### Does Delta Chat support "Sealed Sender"? {#sealedsender}

No, not yet. 

The Signal messenger introduced ["Sealed Sender" in 2018](https://signal.org/blog/sealed-sender/)
to keep their server infrastructure ignorant of who is sending a message to a set of recipients. 
It is particularly important because the Signal server knows the mobile number of each account,
which is usually associated with a passport identity.

Even if [chatmail relays](https://chatmail.at/relays) 
do not ask for any private data (including no phone numbers), 
it might still be worthwhile to protect relational metadata between addresses. 
We don't foresee bigger problems in using random throw-away e-mail addresses for sealed sending
but an implementation has not been agreed as a priority yet. 

### Delta Chat 是否支持完美前向保密？ {#pfs}

No, not yet. 

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

We designed a Forward Secrecy approach that withstood 
initial examination from some cryptographers and implementation experts 
but is pending a more formal write up 
to ascertain it reliably works in federated messaging and with multi-device usage,
before it could be implemented in [chatmail core](https://github.com/chatmail/core),
which would make it available in all [chatmail clients](https://chatmail.at/clients). 

### Does Delta Chat support Post-Quantum-Cryptography? {#pqc}

No, not yet. 

Delta Chat uses the Rust OpenPGP library [rPGP](https://github.com/rpgp/rpgp)
which supports the latest [IETF Post-Quantum-Cryptography OpenPGP draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/). 
We aim to add PQC support in [chatmail core](https://github.com/chatmail/core)  after the draft is finalized at the IETF
in collaboration with other OpenPGP implementers. 

### How can I manually check encryption information?

你可以在“加密”对话框中手动检查端到端加密状态
（Android/iOS 上的用户配置文件或桌面上的用户聊天列表项上右键单击）。
Delta Chat 在此处显示两个指纹。
如果相同的指纹出现在你自己的设备和你联系人的设备上，
则连接是安全的。

### 我可以重复使用现有的私钥吗？ {#importkey}

不。

Delta Chat 采用 Autocrypt 1.1 标准规范生成 OpenPGP 加密密钥。
用户虽可导出自身私钥进行备份，但系统设计上不支持导入其他私钥。

基于安全考量，系统默认不开放手动密钥管理功能。
此项设计旨在让安全审计工作聚焦于少量成熟加密算法（如 Autocrypt 标准），
避免因支持 OpenPGP 协议所允许的所有算法而增加潜在安全风险。

### Delta Chat 是否已进行独立的安全漏洞审计？ {#security-audits}

确实如此，且已进行多次。
Delta Chat 长期接受第三方独立机构的安全审计与漏洞分析，
以下按时间倒序列出历年检测记录：

-  2024年12月，网络安全机构[Radically Open Security](https://www.radicallyopensecurity.com/) 受NLNET委托，完成了对加密协议[rPGP的专项审计](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf)。
作为即时通讯工具Delta Chat的核心加密引擎，rPGP采用[OpenPGP](https://openpgp.org) 标准实现端到端加密。
基于审计发现，研究团队同步公开了两份技术通告：

- [畸形数据触发系统崩溃漏洞](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv)（编号CVE-2024-53856）
- [恶意消息潜在导致资源枯竭漏洞](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285)（编号CVE-2024-53857）

自 2024 年 12 月之后，各应用商店发布的 Delta Chat 版本均已修复上述安全公告提及的问题。
相关更新作为常规版本升级的一部分，现已全面覆盖所有 appstore 平台。

- 2024 年 3 月，我们收到了苏黎世联邦理工学院应用密码学
研究小组的深入安全性分析，并解决了所有提出的问题。
有关更多详细信息，请参阅我们关于 [加强保证的端到端加密](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) 的博客文章以及
之后发表的 [Delta Chat 密码学分析](https://eprint.iacr.org/2024/918.pdf)
研究论文。

- 2023 年 4 月，我们修复了“在聊天中共享的 Web 应用”的安全性
和隐私问题，这些问题与沙箱故障有关，尤其是在 Chromium 中。 随后，我们获得了 Cure53 的独立安全
审计，并且在 2023 年 4 月发布的 1.36 应用系列中修复了发现的所有问题。
请参阅 [此处，了解有关 Web 中端到端安全性的完整背景故事](https://delta.chat/en/2023-05-22-webxdc-security)。

- 2023 年 3 月，[Cure53](https://cure53.de) 分析了 Delta Chat 网络连接的传输加密和一个可重现的邮件服务器设置，如
[本网站](serverguide) 推荐的那样。
你可以在 [我们的博客](https://delta.chat/en/2023-03-27-third-independent-security-audit) 上阅读有关审计的更多信息
，或在此处阅读 [完整报告](../assets/blog/MER-01-report.pdf)。

- 2020 年，[Include Security](https://includesecurity.com) 分析了 Delta Chat 的 Rust [核心](https://github.com/deltachat/deltachat-core-rust/)、
[IMAP](https://github.com/async-email/async-imap)、
[SMTP](https://github.com/async-email/async-smtp) 和
[TLS](https://github.com/async-email/async-native-tls) 库。
它没有发现任何严重或高严重性问题。
该报告提出了一些中等严重性的弱点 -
它们本身不会对 Delta Chat 用户构成威胁，
因为它们取决于 Delta Chat 使用的环境。
出于可用性和兼容性原因，
我们无法减轻所有这些弱点，
并决定向受威胁的用户提供安全建议。
你可以在 [此处阅读完整报告](../assets/blog/2020-second-security-review.pdf)。

- 2019 年，[Include Security](https://includesecurity.com) 分析了 Delta
Chat 的 [PGP](https://github.com/rpgp/rpgp) 和
[RSA](https://github.com/RustCrypto/RSA) 库。
它没有发现任何严重问题，
但发现了两个高严重性问题，我们随后修复了这些问题。
它还揭示了一个中等严重性和一些不太严重的问题，
但在 Delta Chat 实现中无法利用这些漏洞。
尽管如此，自审计结束以来，我们仍然修复了其中一些问题。
你可以在 [此处阅读完整报告](../assets/blog/2019-first-security-review.pdf)。



## 多客户端 {#multiclient}

### 我能同时在多个设备上使用 Delta Chat 吗?

是的。 You can use the same profile on different devices:

- 确保两台设备都在同一个 Wi-Fi 或网络中

- 在第一台设备上，转到**设置 → 添加第二台设备**，如果需要，解锁屏幕
并稍等片刻，直到显示二维码

- 在第二台设备上，[安装 Delta Chat](https://get.delta.chat)

- 在第二台设备上，启动 Delta Chat，选择**添加为第二台设备**，然后扫描旧设备上的二维码

- 传输应在几秒钟后开始，并且在传输过程中，两台设备都将显示**进度**。
等待直到两台设备都完成。

与其他许多即时通讯应用不同，在成功传输后，
两台**设备完全独立。**
一台设备不是另一台设备工作的必要条件。


### 故障排除

- 仔细检查两台设备是否在**同一个 Wi-Fi 或网络中**

- 在 **Windows** 上，转到**控制面板 / 网络和 Internet**
并确保**专用网络**被选为“网络配置文件类型”
（传输后，你可以更改回原始值）

- 在 **iOS** 上，确保授予“系统设置 / 应用 / Delta Chat / **本地网络**”访问权限

- 在 **macOS** 上，启用“系统设置 / 隐私和安全 / **本地网络** / Delta Chat”

- 你的系统可能具有“个人防火墙”，
已知这会引起问题（尤其是在 Windows 上）。
在两端**禁用个人防火墙**以用于 Delta Chat，然后重试

- **访客网络**可能不允许设备相互通信。
如果可能，请使用非访客网络。

- 当设备间网络通信持续异常时，
建议采取设备直连方案：在一台终端开启 ​**Mobile Hotspot**​（移动热点），另一台设备通过扫描 Wi-Fi 接入该临时网络。

- 确保目标设备上有**足够的存储空间**

- 如果传输已开始，请确保设备**保持活动状态**，并且不会进入睡眠状态。
不要退出 Delta Chat。
（我们努力使应用在后台工作，但不幸的是，[系统倾向于杀死应用](https://dontkillmyapp.com)）

- 目标设备上**已登录** Delta Chat？
你可以在每台设备上使用多个配置文件，只需[添加另一个配置文件](#multiple-accounts)

- 如果你仍然遇到问题，或者**无法扫描二维码**
，请尝试下面描述的**手动传输**


### 手动传输 {#backup}

仅当上述“添加第二台设备”方法不起作用时，才建议使用此方法。

- 在旧设备上，转到“设置 -> 聊天和媒体 -> 导出备份”。 输入你的
屏幕解锁 PIN 码、图案或密码。 然后你可以点击“开始
备份”。 这会将备份文件保存到你的设备。 现在你必须
以某种方式将其传输到另一台设备。
- 在新设备上，在“我已经有一个配置文件”菜单中，
选择“从备份还原”。 导入后，你的对话、加密
密钥和媒体应复制到新设备。
- **如果你使用 iOS：** 并且你遇到困难，也许
[本指南](https://support.delta.chat/t/import-backup-to-ios/1628) 将
帮助你。
- 你现在已同步，并且可以使用两台设备与你的通信伙伴发送和接收
端到端加密消息。

### 删除、置顶、归档、保存、静音等操作是否同步到所有设备？

是的。

例如，如果您从手机中删除某个聊天或信息，
当您的桌面客户端再次上线时，该内容也会被同步删除。

值得注意的例外情况包括[从设备删除旧消息](#delold)，
因为不同设备可能具有不同的存储容量，
以及通知提示音等系统特定设置。


### 有推出 Delta Chat Web 客户端的计划吗？

- 目前没有计划，但有一些初步的想法。
- 有 2-3 种途径来实现 Delta Chat Web 客户端，但是它们都需要巨大的工作量。目前，我们专注于将稳定的版本作为本地应用程序发布到所有应用程序商店（Google Play/iOS/Windows/macOS/Linux 仓库）。
- 如果是因为不能在工作的电脑上安装软件而需要一个 Web 客户端，您可以使用便携版的 Windows 桌面客户端，或者在 Linux 上使用 AppImage 版。您可以在 [get.delta.chat](https://get.delta.chat) 找到它们。


## Webxdc 应用 {#webxdc}

在 Delta Chat 中，你可以共享 [Webxdc 应用](https://webxdc.org)，即带有 `.xdc` 文件扩展名的附件。
它们可以做非常不同的事情，并使 Delta Chat 成为真正的可扩展即时通讯应用。


### Webxdc 应用的隐私性如何？

- webxdc apps can not send data to the Internet, or download anything.
- A webxdc app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a webxdc app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the webxdc app as well.
- This also means: it can be a privacy risk to open apps in chats with untrusted members.
  Just like with e-mail attachments, video calls or plain links:
  open them only from senders you trust, and not from spammers.
  Spammers can get to know any data you send to them, as well as your IP address.


### 我在哪里可以获得 Webxdc 应用？

- 总的来说，任何人都可以相互共享 WebXDC 应用，没有任何限制。
- 来自 [webxdc.org/apps](https://webxdc.org/apps/)。
- 你可以 [向 xstore@testrun.org 发送“hi”](https://delta.chat/en/2023-08-11-xstore)
以查看实验性的 WebXDC 应用商店。
所有应用都是开源且免费的。
- 许多人编写自己的 WebXDC 应用并将其发布到 [Delta Chat
论坛](https://support.delta.chat/c/webxdc/20)。


### 如何创建自己的 WebXDC 应用？

- WebXDC 应用只是包含 html、css 和 javascript 代码的 zip 文件。
- 你可以扩展 [Hello World 示例应用](https://github.com/webxdc/hello)
以开始入门。
- 你需要了解的所有其他内容都写在
[文档](https://docs.webxdc.org/) 中。
- 如果你有疑问，可以在 [Delta Chat
论坛](https://support.delta.chat/c/webxdc/20) 中向有经验的人提问。


## 实验性功能

我们非常感谢您对这些功能的反馈 - 您想分享您的想法吗？ 加入 [论坛](https://support.delta.chat) 以做出贡献。
你可以通过 Delta Chat 和二维码扫描方便地登录，
这是我们顺便运行的另一个相当稳定的实验（sic！）。

### 怎样在 Delta Chat 中使用音频/视频通话？

- 要开启音频/视频通话，请转到高级设置中的“实验性功能”部分，
然后选择“视频聊天实例”。
- 当你邀请其他人进行视频聊天时，它会立即在你的浏览器/应用中打开。
其他人会收到一封包含视频聊天链接的电子邮件。
这样，即使你的聊天伙伴不使用 Delta Chat，它也兼容。
- 请注意，另一端没有铃声，你的聊天伙伴
不会被视频聊天邀请打断。
- 你可以使用任何允许通过链接加入的视频聊天服务。 只需在设置中添加
链接即可。
- 例如，要使用旗舰 Jitsi Meet 实例，你可以输入
`https://meet.jit.si/$ROOM`。 `$ROOM` 变量将是一个随机值；
这样，每次你呼叫某人时，你都会有一个新的随机 Jitsi 房间。


### 什么是广播列表？怎样使用它们？

With a Broadcast List you can send a message to many recipients at once;
the recipients cannot reply in that list.
Broadcast lists are still highly experimental
and will very probably be replaced by something else, stay tuned :)


### 如何与聊天伙伴分享位置？

- 你可以在高级设置的“实验性功能”部分中开启位置流式传输。
- 现在，如果你想在聊天中分享你的位置，请转到“附加”并选择
“位置”。 你现在可以设置一个时间范围，在此期间你的位置将
流式传输给你的聊天伙伴，时间范围在 5 分钟到 6 小时之间。
- 当你的位置发生变化时，聊天中的其他人可以在聊天中的地图上查看它。
- 要查看地图并查看其他人的位置，你需要开启高级设置中的功能。
- 此功能不会与除你的聊天伙伴之外的任何人分享你的位置。
地图瓦片从 [OpenStreetMap](https://openstreetmap.org) 下载。
- 在桌面上，操作系统通常无法确定你的位置。 相反，你可以
右键单击地图并描述一个位置，该位置将作为消息发送到聊天中，
但也显示在地图上。


### 为什么我可以选择只监视 DeltaChat 文件夹？

这是提供给尝试服务器端规则的人的实验性设置。在使用某些电子邮件提供商时，您可以将所有带有"Chat-Version"头的邮件移入 DeltaChat 文件夹。并不是所有的提供商都支持此操作；通常情况下，这是由 Delta Chat 应用完成的。

启用“只从 DeltaChat 文件夹获取”是有意义的，仅当您**同时**完成了：

- 已经启用了将带有 Chat-Version 头的所有消息移入 DeltaChat 文件夹的服务器端规则；和
- 已将“显示传统电子邮件”设置为“不显示，仅聊天”。

在这种情况下，Delta Chat 不需要监视收件箱，只监视 DeltaChat 文件夹就足够了。


### 如何将我的账户迁移到一个不同的电子邮件地址？

Note: 
Changing email addresses is temporarily disabled
because of ongoing changes to the DeltaChat core.
It should be available again in a few months.

 1. 在“设置 → 高级 → 密码和帐户”中更改你的地址，
然后输入你的新电子邮件帐户的密码（如有必要，还需输入服务器设置）。
你将收到有关你正在迁移到新地址的信息通知。
在你的“设备消息”聊天中也会显示一条附加通知。

2. 如果可能，让你的旧电子邮件提供商将所有消息转发到你的新地址。

3. 告诉你的联系人你已更改地址。
向保证的端到端加密聊天和群组发送消息，
将使他们自动注意到你的迁移，
并且他们将继续使用你的新地址与你聊天。

请注意，Delta Chat 将不再从你的旧电子邮件提供商处检索消息。
如果你没有配置你的电子邮件提供商转发消息（步骤 2），
则只有你在保证的端到端加密聊天中向其发送消息的联系人
才会将消息发送到你的新地址。

要了解有关此操作背后细节的更多信息，请[阅读我们关于
它的博客文章](https://delta.chat/en/2022-09-14-aeap)。


## 杂项

### Delta Chat 需要哪些权限？

根据使用的操作系统，系统可能会要求您向本应用授予权限。下面 Delta Chat 使用各类权限进行的操作：

- 相机 *(可以拒绝)*
- 拍照和录制视频：用于发送照片
- 联系人 *(可以拒绝)*
- 读取你的联系人：发现要聊天的联系人
- 位置 *(可以拒绝)*
- 访问大致位置（网络位置来源）：用于位置流式传输功能
- 访问精确位置（GPS 和网络位置来源）：用于位置流式传输功能
- 麦克风 *(可以拒绝)*
- 录制音频：用于音频消息
- 存储 *(可以拒绝)*
- 修改或删除 SD 卡的内容：下载消息附件
- 读取 SD 卡的内容：与你的联系人分享文件
- 其他应用功能
- 更改你的音频设置：以便你可以为通知和音频消息选择铃声和音量
- 在启动时运行：这样你就不必手动启动 Delta Chat
- 控制振动：用于通知
- 查看网络连接：连接到你的电子邮件提供商
- 阻止手机休眠：以便你可以更轻松地在 Autocrypt 设置消息期间复制安全代码
- 完全的网络访问权限：连接到你的电子邮件提供商
- 查看 Wi-Fi 连接：连接到你的电子邮件提供商
- 请求忽略电池优化：实现“即时消息传递”


### Delta Chat 可用于 _我的_ 电子邮件提供商吗？

- 有很大的可能性是：可以的 :) 
  不过，某些提供商需要一些特殊设置才能正常工作，请参阅[提供商概览](https://providers.delta.chat)


### I want to manage my own server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  chatmail relay server, as described [in this
  blogpost](https://delta.chat/en/2023-12-13-chatmail).
- You can find an [installation guide on GitHub](https://github.com/chatmail/relay).


### 为什么我必须在 Delta Chat 中输入我的电子邮件密码？ 这样安全吗？

与其他电子邮件程序（比如 Thunderbird、K9-Mail 或 Outlook）一样，本程序需要您的密码来允许您通过它发送邮件。当然，密码仅储存在您的设备上，并只会在登录时发送给您的电子邮件提供商（无论如何，您的提供商总是能够访问您的邮件）。

由于 Delta Chat 是开源的，要验证您的凭据是否被安全地处理了，可以检查[源代码](https://github.com/chatmail/core/blob/main/src/login_param.rs)。我们很高兴能收到使本应用对我们的所有用户更加安全的反馈。


### 哪些消息会在 Delta Chat 中出现？

默认情况下， Delta Chat 会显示所有电子邮件。

在“设置 → 高级 → 显示经典电子邮件”中，
你可以更改此设置。 你有以下选项：

- “不显示，仅聊天”：只显示由其他 Delta Chat 用户发送的消息和对您 Delta Chat 消息的回复。这在电子邮件地址同时用于处理普通邮件的情况下很有用。
- “全部”：Delta Chat 会显示发送到您电子邮件地址的所有邮件。用于您希望使用 Delta Chat 处理所有电子邮件的情况，这样就不会有消息被落下了。默认设置。
- “已接受的联系人”：Delta Chat 会显示已有聊天的联系人的所有电子邮件，而新聊天只会为 Delta Chat 消息弹出。可用于希望逐一决定是在 Delta Chat 中还是在“普通”电子邮件应用中对话的情况。


### Delta Chat 支持 HTML 电子邮件吗？

是的，收到的 HTML 邮件会有一个 "显示完整消息 "按钮。 
发出的邮件始终使用纯文本。


### 我可以在 Delta Chat 中设置电子邮件主题吗？

Delta Chat 会自动将经典电子邮件主题设置为群组名称或发件人姓名，
并对其进行[加密](#message-metadata)！

因此，如果你想自己设置主题，
例如， для正式给商业联系人发送电子邮件，
你可以创建一个只有你和收件人的群组。
将聊天标题设置为你想要的主题，
然后将你的电子邮件作为第一条消息发送。
如果收件人不使用 Delta Chat，
则对他们来说，它看起来就像一封普通的
正式电子邮件。
如果你设置了[签名文本](#signature)，你将获得额外的专业加分。


### “给自己发送副本”设置有什么用处？

向自己发送消息的副本可以确保您在所有设备上收到自己的消息。如果您在使用多台设备时没有打开此设置，那么您将只能看到其他人发过来的消息和您从当前设备发出的消息。

副本会被发送到收件箱，然后会被移动到 DeltaChat 文件夹；它不会被放到“已发送”文件夹里。Delta Chat *从不* 将东西上传到已发送文件夹，因为这意味着上传一条消息两次（一次通过 SMTP，一次通过 IMAP 到已发送文件夹）。

"给自己发送副本"的默认设置为 "开"。


### 为什么我可以选择监视“已发送”文件夹？

监视已发送文件夹的唯一原因是：您在使用Delta Chat软件的同时也使用其他的邮件应用程序（比如 Thunderbird），并且想让邮件分发代理参与聊天对话。

不过，我们推荐使用 Delta Chat 桌面客户端；您可以在 [get.delta.chat](https://get.delta.chat) 下载它。监视“已发送”文件夹的选项是在还没有 Delta Chat 桌面客户端的时候引入的，这个选项可能会在未来消失。


### 为什么我可以选择不监视 DeltaChat 文件夹？

有些人将 Delta Chat 用作常规电子邮件客户端并希望将收件箱文件夹用于其邮件，而不是使用 DeltaChat 文件夹。如果禁用了“监视 DeltaChat 文件夹”，则还应该禁用“将聊天消息移动到 DeltaChat”。否则，删除消息或多设备设置可能无法正常工作。


### Delta Chat 与 Proton Mail / Tutanota / Criptext 兼容吗？

 - 是的，也不是。
- 否，你不能将你的 Proton Mail、Tutanota 或 Criptext 帐户与 Delta
Chat 一起使用； 它们不提供通过 IMAP 接收邮件的功能。
- 在任何情况下，你都可以使用 Delta Chat 向使用 
 
Protonmail、Tutanota 或 Criptext 的人发送消息。 但是，这些消息不会进行端到端
加密。 这些提供商提供的端到端加密与
Delta Chat 使用的 [Autocrypt](https://autocrypt.org/) 不兼容。
- Delta Chat 可以通过任何电子邮件提供商与任何
[启用 Autocrypt 的电子邮件应用](https://autocrypt.org/dev-status.html) 进行端到端加密。


### 如何删除我的账户？ {#remove-account}

如果你使用默认聊天配置文件，
则只需卸载该应用即可。
这将自动触发删除 Chatmail 服务器上的所有关联帐户数据。
有关更多信息，请参阅默认入职服务器的 [nine.testrun.org 帐户删除](https://nine.testrun.org/info.html#account-deletion)，
或你选择的 [第三方 Chatmail 服务器](https://delta.chat/chatmail) 的相应页面。

如果你已在多台设备上设置了聊天配置文件，
则需要从所有设备中删除它。

如果你使用多个帐户，
但不希望删除所有帐户，
则可以在帐户切换器菜单（在 Android 和 iOS 上）中删除它，
或者在侧边栏中右键单击（在桌面客户端中）。

[传统电子邮件提供商](https://providers.delta.chat) 上的帐户
不会自动删除；
如何删除你的帐户取决于你的电子邮件提供商。
我们无法控制这些提供商的电子邮件帐户，
因此很遗憾，我们无法在这方面为你提供帮助。

如果你想继续将传统电子邮件帐户与其他应用一起使用，
但卸载 Delta Chat，
建议在卸载 Delta Chat 之前退出任何群组聊天。
否则，你可能会收到来自这些群组聊天的无法解密的消息。


### 我对技术细节很感兴趣。能告诉我更多吗？

- 请参阅 [Delta Chat 中使用的标准]({% include standards-url %})。



### 我的朋友在哪里可以找到 Delta Chat？

Delta Chat 适用于所有主要平台和一些次要平台：

- **官方网站**，<https://delta.chat/download> 详细显示所有选项

- 如果不可用，请使用 **镜像** <https://deltachat.github.io/deltachat-pages>

- 打开以下 **应用商店之一并搜索“Delta Chat”：**
Google Play 商店、F-Droid、华为应用商店、亚马逊应用商店、iOS 和 macOS 应用商店、Microsoft Store

- 检查你的 Linux 发行版的 **软件包管理器**

- **Android APK** 也可在 <https://github.com/deltachat/deltachat-android/releases> 上获得


### Delta Chat 的开发是如何被资助的? 

Delta Chat 没有接受风险投资，也没有负债累累，更没有承受产生巨额利润或将用户及其朋友和家人卖给广告商（或更糟）的压力。我们宁愿使用目前来自欧盟和美国的公共资金，来帮助我们努力建立一个基于自由开源社区开发的、去中心化的、多样化的聊天消息软件生态系统。 

具体而言，Delta Chat 的开发迄今为止已从以下来源获得资金，
按时间顺序排列：

- [NEXTLEAP](https://nextleap.eu)欧盟项目资助了以下研究和实施工作：在 2017 年和 2018 年实施的验证组和设置联系协议和通过 [Autocrypt](https://autocrypt.org)整合了端到端加密。

- 在[开放技术基金](https://opentechfund.org) 2018/2019 年提供的第一笔赠款（约 20 万美元）期间，我们显著改善了安卓应用，发布了第一个桌面测试版，并根据人权方面的用户体验研究进行了功能开发，请参阅我们的结论[《需求发现与用户体验报告》](https://delta.chat/en/2019-07-19-uxreport)。2019/2020 年的第二笔赠款（约 30 万美元）对发布 Delta/iOS 版本，将核心库转换到 Rust ，以及为所有平台开发新功能提供了帮助。

- [NLnet 基金会](https://nlnet.nl/) 2019/2020 年拨款 4.6 万欧元，用于完成 Rust/Python 绑定并建立聊天机器人生态系统。 

- 在 2021 年，我们从两项下一代互联网提案收到了欧盟的进一步资助，即 [EPPD - 电子邮件提供商可移植性目录](https://dapsi.ngi.eu/hall-of-fame/eppd/)（约 9.7 万欧元）和 [AEAP - 电子邮件地址移植](https://nlnet.nl/project/EmailPorting/)（约 9 万欧元）。这带来了更好的多账户支持，改进的二维码联系人和群组设置，和所有平台上的多处网络改进。

- 从 2021 年底到 2023 年 3 月，我们从美国民主、人权和劳工局（DRL）获得了*互联网自由*资金（50 万美元）。这笔资金支持了我们的长期目标，即让Delta Chat 更好用，并与全球范围内的各种电子邮件服务器兼容，而且在经常受到互联网审查制度影响的地方更具弹性和安全性。

- 2023-2024 年，我们成功完成了 OTF 资助的
[安全 Chatmail 项目](https://www.opentech.fund/projects-we-support/supported-projects/secure-chat-mail-with-delta-chat/)，
使我们能够引入保证的加密，
创建一个 [Chatmail 服务器网络](https://delta.chat/chatmail)，
并在 2024 年 4 月起发布的所有应用中提供“即时入职”。

- 在 2023 年和 2024 年，我们的 [WebXDC PUSH](https://nlnet.nl/project/WebXDC-Push/) 工作已在下一代互联网 (NGI) 中获得认可，
并与致力于
[WebXDC evolve](https://nlnet.nl/project/Webxdc-Evolve/)、
[WebXDC XMPP](https://nlnet.nl/project/WebXDC-XMPP/)、
[DeltaTouch](https://nlnet.nl/project/DeltaTouch/) 和
[DeltaTauri](https://nlnet.nl/project/DeltaTauri/) 的合作伙伴合作。
所有这些项目都已部分完成或将在 2025 年初完成。

- 我们有时会收到个人的一次性捐款。 例如，2021 年，一位慷慨的人士以 "继续保持良好的发展态势！"为主题通过银行向我们捐赠了4千欧元💜。 我们用这些钱来资助发展活动或支付不容易预测或从公共基金中报销的临时费用。收到更多的捐款也有助于我们作为一个贡献者社区变得更加独立和长期可持续。

  [捐助钱款](donate){: .cta-button}

- 最后但并非最不重要的是，数位专家与热心人在没有收到或仅收到少量金钱的情况下为 Delta Chat 的开发做出了贡献。没有他们，Delta Chat 不会发展到、甚至无法接近目前的状况。

上面提到的钱款资助主要是由在弗赖堡（德国）的 merlinux GmbH 组织的，分发给了来自世界各地的十多位贡献者。

请参阅 [Delta Chat 捐款渠道](contribute)
以了解货币捐款和其他捐款的可能性。  
