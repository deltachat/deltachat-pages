---
title: 常见问题
lang: zh_CN
render_toc: true
header: 常见问题
---


## 什么是 Delta Chat？

Delta Chat 是一个新的聊天应用，它通过电子邮件发送消息，并在条件允许情况下使用 Autocrypt 对其进行加密。**您不必在任何地方进行注册，在 Delta Chat 中使用您现有的电子邮件帐户即可。** 

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### 如何找到可以聊天的人？

通过 Delta Chat，您可以发消息到每个现有的电子邮件地址——即使收件人没有使用 Delta Chat 应用。不需要像其他通信软件一样，要收件人安装和您一样的应用。


### 与其他通信软件相比，Delta Chat 有哪些优势？

- _独立_ 于任何公司或服务。_您_ 拥有您的数据。
- 您的数据不会保存于中央服务器，除非所有用户都在使用同一个电子邮件服务器。
- 您不会将通讯录分发给任何人。
- _快速_——使用 Push-IMAP。
- _最广泛的用户基础_——也可以与 _不_ 使用 Delta Chat 的收件人进行联系。
- _兼容_——不仅仅对它本身。
- _优雅_、_简洁_ 的用户界面
- _分布式_ 系统
- _没有垃圾信息_——默认情况下仅显示已知用户的消息。
- _可靠_——可以安全地用于专业用途。
- _可信赖_——甚至可以用于商业讯息。
- 基于 _著佐权_ 与 _标准_ 的自由软件。


### 哪些消息会在 Delta Chat 中出现？

Delta Chat 自动显示：

- 来自您**通讯录**中联系人的消息
- 来自**您先前联系的**联系人的消息
- 对您发送的消息的**回复**

其他消息不会自动出现，而是可以在**联系人请求**中找到。 如有需要，可以从那里开始聊天。


### 垃圾信息呢？

- 普通垃圾邮件文件夹中的消息将被忽略，并且所包含的地址不会被视为已知联系人。
- 由于来自未知联系人的消息不会自动弹出，因此通常情况下**不会出现垃圾信息**。
- 不过，如有需要，您可以**屏蔽**任何联系人。


### Delta Chat 支持图像、视频和其他附件吗？

- 是的。除纯文本外，所有电子邮件附件均显示为单独的消息。发出消息会根据需要自动获得附件。


### 谁会看见我的个人资料图片？

- 您可以在设置中添加个人资料图片。如果您给您的联系人发消息或者通过二维码添加他们，他们会自动看到您的个人资料图片。

- 不使用 Delta Chat 的联系人将其视为电子邮件附件。

- 出于隐私原因，在您向他们发送消息之前，没有人会看到您的个人资料照片。

- 您的个人资料图片并非随每条消息一起发送，但发送的频率足够高。因此即使您的联系人添加了新设备，也能够重新收到您的个人资料图片。


### Delta Chat 支持 HTML 电子邮件吗？

- 是的。 如果收到的电子邮件缺少“纯文本”部分， HTML 电子邮件将在应用中被转换为纯文本。发出电子邮件始终使用纯文本。


### 为什么我必须在 Delta Chat 中输入我的电子邮件密码？ 这样安全吗？

与其他电子邮件程序（比如 Thunderbird、K9-Mail 或 Outlook）一样，本程序需要您的密码来允许您通过它发送邮件。当然，密码仅储存在您的设备上，并只会在登录时发送给您的电子邮件提供商（无论如何，您的提供商总是能够访问您的邮件）。

如果您使用具有 OAuth2 支持的电子邮件提供商，例如 gmail.com 或 yandex.ru，则无需在设备上存储密码。在这种情况下，只有访问令牌被使用。

由于 Delta Chat 是开源的，要验证您的凭据是否被安全地处理了，可以检查[源代码](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)。我们很高兴能收到使本应用对我们的所有用户更加安全的反馈。


### Delta Chat 需要哪些权限？

根据使用的操作系统，系统可能会要求您向本应用授予权限。下面 Delta Chat 使用各类权限进行的操作：

- 相机*（可被禁止）*
  - 拍照和录像：用于发送照片
- 联系人*（可被禁止）*
  - 读取联系人：发现要与之聊天的联系人
- 位置*（可被禁止）*
  - 访问大概位置（基于网络）：用于位置流功能
  - 访问精确位置（基于 GPS 和网络）：用于位置流功能
- 麦克风*（可被禁止）*
  - 录制音频：用于音频消息
- 存储*（可被禁止）*
  - 修改或删除 SD 卡的内容：下载消息附件
  - 读取 SD 卡的内容：与联系人分享文件
- 其他权限
  - 更改音频设置：允许您选择通知和音频消息的铃声和音量
  - 开机自启动：您不必手动启动 Delta Chat
  - 控制振动：用于通知
  - 查看网络连接：连接到您的电子邮件提供商
  - 阻止手机进入休眠状态：您可以在 Autocrypt 设置消息中更轻松地复制安全代码
  - 具有完全的网络访问权限：连接到您的电子邮件提供商
  - 查看 Wi-Fi 连接：连接到您的电子邮件提供商
  - 要求忽略电池优化：给希望一直接收消息的用户使用


## 群组

### 创建群组

- 从右上角的菜单中选择**新建聊天**，然后选择**新建群组**或在 Android/iOS 上点击相应的按钮。
- 在随后的屏幕上，选择**群组成员**并起一个**群组名称**。您也可以选择一个**群组头像**。
- 当您在群组中发送**第一条消息**时，所有成员都会被告知新群组的信息并可以在该群组中应答（只要您不在群组中发送第一条消息，那么群组对成员就是不可见的）。


### 添加成员到群组

- 每个群组成员均拥有与其他成员**相同的权限**。因此，每个人都可以删除成员或添加新成员。
- 要添加或删除成员，请在聊天中点击群组名称。


### 什么是已验证群组？为什么它是实验性的？

- 已验证群组是一个面对主动攻击者时可保证安全的聊天。已验证聊天视图中的所有消息都是端到端加密的，成员可以通过扫描“邀请二维码”加入。这样，所有成员都通过邀请链相互连接，从而保证了面对主动攻击网络和提供商攻击时的加密一致性。查看 [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) 来了解该功能背后的研发。

- 在 2019 年 12 月，“已验证群组”仍然是实验性功能。自 2018 年引入后，该功能一直在不断改进，并且许多 bug 得到了修复。然而，仍然存在出现不一致或消息变得不可读的情况，特别是在大型群组中。2020 年初，一个安全审查将会进行，并且围绕二维码加入协议的多项新开发正在进行中。所以，或许在不远的将来我们就能移除“实验性的”标签。


### 我不小心删除了我自己。

- 由于您不再是群组成员，您无法将自己加入到群组中。但是，问题不大，只需在普通聊天中请求其他群组成员将您重新加入即可。


### 我不想再收到某个群组中的消息了。

- 从成员列表中删除自己，或者删除整个聊天。如果您之后想再加入该群组，请让其他群组成员添加您。

- 另外，您也可以“静音”群组——这样做意味着您会收到所有消息并且仍可以编写消息，但不会再收到任何新消息的通知。


### 群组消息中的双对勾意味着什么？每个人都都读我的消息了吗？

- 消息被一半以上的接收者在屏幕上看到后，会显示双对勾。
- 请注意，某些接收者可能出于隐私原因禁用了已读回执。
- 如果群组中超过 50％ 的人禁用了已读回执，那么双对勾将永远不会出现。更多信息，请看[这篇博文](https://delta.chat/en/2017-07-06-read-receipts-and-social-pressure)。


## 加密 {#encryption}

### Delta Chat 支持端到端加密吗？

- Yes. Delta Chat implements the Autocrypt Level 1 standard and can 
  thus E2E-encrypt messages with other Autocrypt-capable apps. 

- Delta Chat also supports a strong form of end-to-end encryption that is 
  even safe against active attacks, see "verified groups" further below. 


### 为了激活端到端加密，我必须做什么？

- Nothing.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to rather avoid end-to-end-encrypted e-mails by default, 
  use the corresponding Autocrypt setting in "Settings" or "Advanced settings".


### 如果端到端加密不可用，则连接是否完全未加密？

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 


### 如何与发送者验证加密状态？ 

If you are within immediate distance of the chat partner:

- Select **QR Invite code** on one device and then **Scan QR code**
  on the other one and scan the code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified.  Both will see a
  "sender verified" system message in their 1:1 chat. 

If you are not near the chat partner, you can check the status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop):

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appear on your chat partner's device, 
  the connection is safe.

- For transport encryption, this state is just shown there


### 如何检查消息的加密状态？

- A little **padlock** shown beside a message denotes whether the message is end-to-end-encrypted from from the given sender.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.

### 端到端加密使用了哪些标准？

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. 

- Delta Chat implements [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) to achieve protection against active network attacks.  This goes beyond the opportunistic
  base protection of Autocrypt Level 1, while maintaining its ease of use.  

### 和已验证联系人的一对一聊天与已验证群组有什么区别 ？

- 1:1 chats with a verified contact and verified groups are not the same, even
  if there are only 2 people in the verified group. One difference is that you
  could easily add more people to the group, but there are other implications as
  well.

- Verified groups are invariably secured. Any breakage (cleartext or wrongly
  signed messages etc.) will be flagged and such messages will not be shown in
  this chat. You can trust all messages in this verified-checkmark chat to have
  not been read/altered by middle parties.

- 1:1 chats are opportunistic, it is meant to allow people to communicate no
  matter if they change e-mail clients, devices, setups etc. That's why there
  is no verification checkmark, even if you have verified the contact.


### Delta Chat 支持前向保密吗？

- No, OpenPGP doesn't support Perfect Forward Secrecy. Perfect Forward Secrecy
  works session-oriented, but E-Mail is asynchronous by nature
  and often used from multiple devices independently. This means that if your
  Delta Chat private key is leaked, and someone has a record
  of all your in-transit messages, they will be able to read them.  

- Note that if anyone has seized or hacked your running phone, they will
  typically be able to read all messages, no matter if Perfect Forward Secrecy
  is in place or not. Having access to a single device from a member of a group,
  will typically expose a lot of the social graph. Using e-mail addresses that
  are not easily tracked back to persons helps group members to stay safer from
  the effects of device seizure. 

- We are sketching ways to protect communications better against the event
  of device seizure. 


### Delta Chat 如何保护我的元数据？

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently knows about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### 我可以重复使用现有的私钥吗？

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Settings" or "Advanced settings" and then "Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it. 


### 我无法将现有的 PGP 密钥导入 Delta Chat。

The most likely cause is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You could remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that private keys from all sources will be fully supported. This
is not the main goal of Delta Chat. In fact, the majority of new users 
will not have any key prior to using Delta Chat.
We do, however, try to support private keys from as many sources as possible. 

Removing the password from the private key will depend on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you should be able to find a solution online.


### 为什么不使用 pEp（pretty easy privacy）？

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## 多客户端 {#multiclient}

### 我能同时在多个设备上使用 Delta Chat 吗?

If you want to use the **same account** on different devices, you should export
a backup from the old device, and import it into the new device:

- On the old device, go to "Settings" or "Settings / Chats and media" and then to "Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### 有推出 Delta Chat Web 客户端的计划吗？

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  app stores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


### 为什么我可以选择不监视收件箱？

This is an experimental setting for some people who are experimenting with
server-side rules. Not all providers support this, but with some you can move
all mails with a "Chat-Version" header to the DeltaChat folder. Normally, this
would be done by the Delta Chat app.

Watching the Inbox makes sense to turn off, if you have both:

- enabled a server-side rule to move all messages with Chat-Version header to the DeltaChat folder, and
- have set the "Show classic emails" setting to "no, chats only".

In this case, Delta Chat doesn't need to watch the Inbox.

### “给自己发送副本”设置有什么用处？

Sending a copy of your messages to yourself ensures that you receive your own
messages on all devices. If you have multiple devices and don't turn it on, you
see only the messages from other people, and the messages you send from the
current device. 

The copy is sent to the Inbox, and then moved to the DeltaChat folder; it's not
put into the "Sent" folder. Delta Chat *never* uploads anything to the Sent
folder because this would mean uploading a message twice (once through SMTP,
and once through IMAP to Sent folder).

The default setting for copy-to-self is "no".

### 为什么我可以选择监视“已发送”文件夹？

The only reason one wants to watch the Sent folder is if you are using another
mail program (like Thunderbird) next to your Delta Chat app, and want your MUA
to participate in chat conversations.

However, we recommend using the Delta Chat Desktop Client; you can download it
on [get.delta.chat](https://get.delta.chat). The option to watch the "Sent"
folder might go away in the future. It was introduced at a time where there was
no Delta Chat Desktop client available on all platforms. 

### 为什么我可以选择不监视 DeltaChat 文件夹？

Some people use Delta Chat as a regular email client, and want to use the Inbox
folder for their mail, instead of the DeltaChat folder. If you disable "Watch
DeltaChat folder", you should also disable "move chat messages to DeltaChat".
Otherwise, deleting messages or multi-device setups might not work properly.

## 杂项

### Delta Chat 可用于 _我的_ 电子邮件提供商吗？

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly,
  see [Provider Overview](https://providers.delta.chat)


### 使用电子邮件的 Delta Chat 真的是 _即时_ 通讯工具吗？

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in the background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occasionally. This artificial delay is usually worse on iOS than on Android.
- Note that Delta Chat doesn't use Google Cloud Messaging (GCM) or the Apple
  Push Notification Service (APNS), because this leads to user tracking and
  central control which Delta Chat aims to avoid as much as feasible.
- However, Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### Delta Chat 与 Protonmail / Tutanota / Criptext 兼容吗？

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is only
  working inside their platforms, and not compatible with anyone outside.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### 我对技术细节很感兴趣。能告诉我更多吗？

- See [Standards used in Delta Chat]({% include standards-url %}).

### Delta Chat 的开发是如何被资助的? 

First of all, Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 

Delta Chat developments have so far been funded from four major sources: 

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018. 

- The [Open Technology Fund](https://opentechfund.org) has given two grants.
  The first 2018/2019 grant (~$200K) majorly improved the Android app 
  and allowed us to release a Desktop app beta version, and also 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) is still ongoing and helps us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  See the 
  ongoing [blog posts](https://delta.chat/en/blog) for more info. 

- The [NLnet foundation](https://nlnet.nl/) granted EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

The monetary funding mentioned above was organized by merlinux GmbH in
Freiburg (Germany), and then distributed to almost a dozen contributors. 

Funding for 2020/2021 is yet to be determined. We are pursuing several
opportunities with different organisations and partners. We also are
considering to ask for donations. In fact, we experimentally started
a little [Delta Chat / Liberapay donation account](https://liberapay.com/delta.chat/)
but have not published this yet.  There were also around 3-4K so far
donated to Bjoern's (the original author of Delta Chat) paypal and bitcoin
donation channels.  
