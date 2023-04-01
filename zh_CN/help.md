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

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _No Spam_ - only messages of known users are shown by default.
- _End-to-end-encryption_ via Autocrypt.
- _Copyleft_ and _Standards_ based libre software.
- _Flexible identity_ with built-in support for [multiple accounts](#multiple-accounts)


### 哪些消息会在 Delta Chat 中出现？

By default, Delta Chat shows all e-mails.

At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost. This is the default setting.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### 如果希望收到我从未发送过消息的人的消息，该怎么办?

- 来自未知联系人的消息会作为**请求**出现。您需要在回复之前先接收他的请求。
- 如果现在不想和他聊天，您也可以“删除”请求。这只会在设备上而 *不会* 在服务器上删除这条消息。所以您仍可以使用其他电子邮件应用来处理它。
- 删除了请求后，来自同一联系人的后续消息仍会作为聊天请求出现，所以您有机会来改变主意。如果您真的不想收到那个人的消息，那么可以考虑 *屏蔽* 他。


### Delta Chat 支持图像、视频和其他附件吗？

- 是的。除纯文本外，所有电子邮件附件均显示为单独的消息。发出消息会根据需要自动获得附件。

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#can-i-use-delta-chat-on-multiple-devices-at-the-same-time).

### 谁会看见我的个人资料图片？

- 您可以在设置中添加个人资料图片。如果您给您的联系人发消息或者通过二维码添加他们，他们会自动看到您的个人资料图片。

- 不使用 Delta Chat 的联系人不会看到个人资料图片（不过，他们可以安装 Delta Chat :）

- 出于隐私原因，在您向他们发送消息之前，没有人会看到您的个人资料照片。

- 您的个人资料图片并非随每条消息一起发送，但发送的频率足够高。因此即使您的联系人添加了新设备，也能够重新收到您的个人资料图片。


### Delta Chat 支持 HTML 电子邮件吗？

- 是的。如果需要，接收到的消息会得到一个“显示完整消息”按钮。发出的邮件总是使用纯文本。


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

### 固定、静音、归档是什么意思？

使用这些工具来管理您的聊天，让其井然有序：

- **已固定聊天**会呆在聊天列表顶部。您可以利用其快速访问最喜欢的聊天或临时记下某些东西。

- **静音聊天**，如果您不想再得到关于它们的通知。被静音的聊天会呆在原地，并且您可以固定被静音的聊天。

- **Archive chats** if you do not want to see them in your chat list any longer.
  Archived chats remain accessible above the chat list or via search. 

- 当被归档的聊天接收到一条新消息，除非其被静音，它会**从归档中弹出**并返回聊天列表。
  **被静音的聊天会保持被归档的状态**，除非您手动解档它们。 

要归档或固定一个聊天，可以长按（Android）、使用聊天内部的菜单（Android/桌面版）或者左滑（iOS）；
要静音一个聊天，可以使用聊天内部的菜单（Android/桌面版）或者通过聊天概要（iOS）。


### 绿色圆点代表什么？

- 自 Delta Chat 1.34 起，您有时会在联系人的头像旁看到一个“绿色圆点”。绿色圆点意味着“最近见到了”这些联系人。
- 具体来说，它代表着：在最近的 10 分钟内，Delta Chat 看到了他们：
  - 或是因为他们直接给您发消息了，
  - 因为他们在和您的共有群组中发消息了，
  - 因为他们对您的消息发送了已读回执，
  - 或是因为他们通过[私人应用](#private-apps--webxdc)给您的 Delta Chat 发送数据了。
- 所以，这并不是一个实时的在线状态——如果他人即使看起来在线也没有立即回复，不要心急，给他们一些空间 ;-)
- 另一方面，其他人并不总是能“看到您在线”。如果您关掉了已读回执，那么在您发消息给其他人以及和他们的共有群组前，其他人将不会看到绿色圆点。


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

- 默认情况下，Delta Chat 会在本地设备上存储您的所有消息。如果您，例如，想要节省邮件提供商处的存储空间，那么可以选择开启自动删除旧消息。这些消息还将保存在您的设备上（除非您在设备上删除它们）。
- 找到“聊天与媒体”设置中的“从服务器删除旧消息”，在从“立刻”到“一年后”的一系列选项中选择一个。这样，*每封* 电子邮件将会在所选时间长度后从服务器上删除。
- 注意：如果在多台设备上使用 Delta Chat，请将消息在服务器上保存足够长的时间，以便其他设备能够下载消息。在这种情况下，您应当根据其他设备的使用频率，将自动删除设置到“一天后”或相似的选项上。


### 打开“从设备删除旧消息”后，会发生什么？

- 若要节省设备上的存储空间，可以开启自动删除旧消息。
- 找到“聊天与媒体”设置中的“从设备删除旧消息”，在从“一小时后”到“一年后”的一系列选项中选择一个。这样，设备上 *所有* 比所选择时间长度老的消息将被删除。


## 加密

### Delta Chat 支持端到端加密吗？

- 是的。Delta Chat 实现了 Autocrypt 级别 1 标准，因此可以与其他支持 Autocrypt 的应用程序进行端到端加密的消息收发。 

- Delta Chat 还支持一种强端到端加密形式，其甚至可以抵御主动攻击，请参阅“已验证群组”。


### 为了激活端到端加密，我必须做什么？

- 什么都不需要。

- Delta Chat（以及其他兼容 [Autocrypt](https://autocrypt.org) 的电子邮件应用程序）会在第一条消息发送时自动分享端到端加密所需的密钥。 
在此之后，后续所有消息都将自动被端到端加密。
如果有一个聊天伙伴使用非 Autocrypt 电子邮件应用程序，那么在兼容 Autocrypt 的应用可用之前，后续消息不会被加密。

- 如果您希望默认不使用端到端加密的电子邮件，请修改“设置”或“高级设置”里的相关 Autocrypt 设置。


### 如果端到端加密不可用，则连接是否完全未加密？

- 对于大多数邮件服务器，Delta Chat 会建立 _传输加密_（[TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)）。这仅能保护您的设备和电子邮件服务器之间的连接。而端到端加密可提供在您的设备和朋友设备之间的安全性。 


### 如何与发送者验证加密状态？ 

如果聊天伙伴在您的旁边：

- 在一台设备上选择**邀请二维码**，然后在另一台设备上选择**扫描二维码**并扫描显示的二维码。如果两台设备都在线，则他们会在彼此间引入一个聊天频道（如果尚未存在）并验证加密密钥。双方都会在一对一聊天中看到“发送者已验证”系统消息。

如果您离聊天伙伴比较远，您可以在“加密”对话框（在 Android/iOS 的用户概要中，或在桌面版右键一个用户的聊天列表项）中手动检查加密状态：

- 对于端到端加密，Delta Chat 会在这里显示两个指纹。如果相同的指纹出现在聊天伙伴的设备上，那么连接就是安全的。

- 对于传输加密，状态就显示在那儿。


### 如何检查消息的加密状态？

- 消息旁边的小**挂锁**会指示该消息是否在给定的发送者那里进行了端到端加密。

- 如果**没有挂锁**，那么消息一般是未经加密传输的。例如：您或者发送者关掉了端到端加密，或者发送者使用了不支持端到端加密的应用程序。


### How can I ensure message encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is creating a verified group and turning on
self-destructing messages.

Verified groups are always encrypted and protected against [MITM
attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Metadata can't be encrypted, as the server needs to know where to deliver your
messages. But turning on "self-destructing messages" deletes the messages on
the server after they were delivered.

If you need the messages on your device, but not on the server, you can also
agree in the group to turn on ["delete messages from server
automatically"](#what-happens-if-i-turn-on-delete-old-messages-from-server).

If you want to protect a 1:1 conversation like this, you should create a
verified group with only 2 people. If the other person loses their device but
not their account, you can still communicate in the 1:1 chat. ([Read more](#what-is-the-difference-between-verified-groups-and-11-chats-with-verified-contacts))


### 端到端加密使用了哪些标准？

- [Autocrypt](https://autocrypt.org) 被用于和其他 Delta Chat 客户端以及其他兼容 Autocrypt 的邮件应用建立端到端加密。Autocrypt 使用了OpenPGP 功能的一个有限子集。

- Delta Chat 实现了 [countermitm 设置联系人与已验证群组协议](https://countermitm.readthedocs.io/en/latest/new.html)以实现针对主动网络攻击的防护。这超越了基于乐观防护的 Autocrypt 级别 1，同时保持了其易用性。

### 已验证群组和跟已验证联系人的一对一聊天有什么区别 ？

- 即使已验证群组中只有两个人，跟已验证联系人的一对一聊天和已验证群组也是不同的。一个区别是您可以轻松地将更多人添加到群组中。除此以外，还有其他的不明显区别。

- 已验证群组始终受保护。任何消息损坏（明文，或者错误签名的消息等）都会被标出；损坏的消息不会出现在聊天中。您可以相信：在这个带有已验证标记的聊天中，所有消息都没有被中间人阅读或修改。 

- 一对一聊天是乐观的，这意味着无论人们是否更改/更换了电子邮件客户端、设备和设置等东西，他们都可以进行交流。这就是即使您已经验证了联系人也不会有已验证标记的原因。


### Delta Chat 支持前向保密吗？

- 不支持。OpenPGP 不支持前向保密。前向保密是面向会话的；而电子邮件天生是异步的，并且经常在多个设备上独立使用。这意味着如果您的 Delta Chat 私钥泄露了，并且某（些）人记录了您所有的在途消息，那么他（们）就能读取这些消息。

- 请注意，如果有人夺走或入侵了您正在运行的手机，则无论是否有“前向保密”功能，他们通常都可以阅读所有消息。只要能访问到一个群组成员的单个设备，通常就会暴露出大量社交关系网的内容。而使用不易回溯到人员的电子邮件地址，则可使群组成员在面对设备夺取时更安全。

- 我们正在起草一些方案，以在发生设备夺取事件的时候更好地保护通讯。


### Delta Chat 如何保护我的元数据？

- 由于 Delta Chat 是去中心化的通信软件，Delta Chat 用户的元数据不会存储在单个中央服务器上。不过，它们会被存储在发送者和接收者的邮件服务器上。

- 目前，每个邮件服务器可以通过检查未加密的 To/Cc 头来知道谁发送了消息、谁接收了消息并判断哪些电子邮件地址是群组的一部分。Delta Chat 本身完全可以避开未加密的To/Cc 头，并始终只将它们放入加密部分。请参阅[不为已验证群组发送 To/CC 头](https://github.com/deltachat/deltachat-core-rust/issues/1032)。对于乐观聊天，主要关心的是这会如何影响参与聊天的其他邮件应用程序。

- 许多其他的电子邮件头，尤其是“Subject”头，是受端到端加密保护的。请参阅将要发布的 [IETF RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/)。


### 我可以重复使用现有的私钥吗？

- 是的。最好的方法是从其他电子邮件客户端发送 Autocrypt 设置消息。在其他客户端的设置中寻找类似于**启动 Autocrypt 设置传输**的东西，然后按那里显示的指示操作。

- 此外，您还可以使用”设置->高级设置->导入密钥“来手动导入。注意：请确保导入的密钥没有被密码保护；或者在这之前移除密码。

如果您没有密钥或者根本就不知道自己是否需要一个——不用担心：Delta Chat 会在需要时自动生成密钥，您不必为此按一个按钮。


### 我无法将现有的 PGP 密钥导入 Delta Chat。

最可能的原因是您的密钥被加密了和/或使用了密码。Delta Chat 不支持这样的密钥。您可以移除密码，之后再尝试导入。如果想保留密码，您需要创建电子邮件别名来使用 Delta Chat ，这样 Delta Chat 的密钥是绑定到这个电子邮件别名上的。

Delta Chat 支持常见的 OpenPGP 私钥格式。然而，不可能使每种来源的私钥都被完整支持。这不是 Delta Chat 的主要目标。实际上，大多数新用户在使用 Delta Chat 之前根本没有密钥。不过，我们确实在尝试支持尽可能多的私钥来源。

移除私钥密码的操作取决于您用于管理 PGP 密钥的软件。对于 Enigmail，您可以在密钥管理窗口中将密码设为空值。 对于 GnuPG，您可以[通过命令行](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429)来进行设置。对于其他程序，您应该能在网上找到解决方案。


## 多客户端 {#multiclient}

### 我能同时在多个设备上使用 Delta Chat 吗?

Yes. Delta Chat 1.36 comes with a new, experimental function for using the same account on different devices:

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- On the second device, [install Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- Transfer should start after a few seconds and during transfer both devices will show the **progress**.
  Wait until it is finished on both devices.

In contrast to many other messengers, after successful transfer,
both **devices are completely independent.**
One device is not needed for the other to work.


### Troubleshooting

- Double-check both devices are in the **same Wi-Fi or network**

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple accounts per device, just [add another account](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer

This method is only recommended if "Add Second Device" as described above does not work.

- 在旧设备上，找到“设置->聊天与媒体->导出备份”。输入屏幕解锁 PIN 码、图案或密码，然后点击“开始备份”。这会将备份文件保存到您的设备上。现在您必须用某种方法将备份文件传输到新设备。
- 在新设备的登录界面，请选择“导入备份”而不是登录您的电子邮件账户。在导入后，您的对话、加密密钥和媒体将会复制到新设备。
  - **iOS 用户：**如果您遇到了问题，[这份指南](https://support.delta.chat/t/import-backup-to-ios/1628)或许可以帮助您。
- 您现在已经同步了，并且可以使用两台设备与您的通信伙伴收发端到端加密消息。

### 有推出 Delta Chat Web 客户端的计划吗？

- 目前没有计划，但有一些初步的想法。
- 有 2-3 种途径来实现 Delta Chat Web 客户端，但是它们都需要巨大的工作量。目前，我们专注于将稳定的版本作为本地应用程序发布到所有应用程序商店（Google Play/iOS/Windows/macOS/Linux 仓库）。
- 如果是因为不能在工作的电脑上安装软件而需要一个 Web 客户端，您可以使用便携版的 Windows 桌面客户端，或者在 Linux 上使用 AppImage 版。您可以在 [get.delta.chat](https://get.delta.chat) 找到它们。


### “给自己发送副本”设置有什么用处？

向自己发送消息的副本可以确保您在所有设备上收到自己的消息。如果您在使用多台设备时没有打开此设置，那么您将只能看到其他人发过来的消息和您从当前设备发出的消息。

副本会被发送到收件箱，然后会被移动到 DeltaChat 文件夹；它不会被放到“已发送”文件夹里。Delta Chat *从不* 将东西上传到已发送文件夹，因为这意味着上传一条消息两次（一次通过 SMTP，一次通过 IMAP 到已发送文件夹）。

给自己发送副本的默认设置是“不”。

### 为什么我可以选择监视“已发送”文件夹？

监视已发送文件夹的唯一原因是：您在同时使用其他的邮件应用程序（比如 Thunderbird），并且想让邮件分发代理参与聊天对话。

不过，我们推荐使用 Delta Chat 桌面客户端；您可以在 [get.delta.chat](https://get.delta.chat) 下载它。监视“已发送”文件夹的选项是在还没有 Delta Chat 桌面客户端的时候引入的，这个选项可能会在未来消失。

### 为什么我可以选择不监视 DeltaChat 文件夹？

有些人将 Delta Chat 用作常规电子邮件客户端并希望将收件箱文件夹用于其邮件，而不是使用 DeltaChat 文件夹。如果禁用了“监视 DeltaChat 文件夹”，则还应该禁用“将聊天消息移动到 DeltaChat”。否则，删除消息或多设备设置可能无法正常工作。


## 私人应用 / webxdc

在 Delta Chat 中，您可以分享“私人应用”——带有 `.xdc ` 文件扩展名的附件。它们可以实现很多种不同的功能，而这使得 Delta Chat 成为了一款真正可扩展的聊天软件。其技术名称是 [webxdc](https://webxdc.org)。


### 私人应用有多么私人？

- 私人应用不能发送数据到互联网，也不能下载任何东西。
- 私人应用只能在一个 Delta Chat 聊天中，和它在您的聊天伙伴设备上的拷贝交换数据。除此以外，私人应用完全隔离于互联网。
- 私人应用所提供的私密性就是您聊天的私密性 - 只要您信任与您聊天的人，您也可以信任私人应用。
- 这也意味着：在您不信任的聊天中打开私人应用可能会带来隐私风险——正如您从电子邮件附件中所了解的那样，您只能打开受信任发件人的附件，而不能打开来自垃圾邮件发送者的附件。


### 可以从哪里获取私人应用？

- 总体来说，这里没有精选的应用商店，并且 Delta Chat 不对私人应用和它们的内容负责。所有人都可以无限制地分享私人应用。
- 您可以在 [webxdc.org](https://webxdc.org) 找到一些示例应用。
- 很多人编写了他们自己的私人应用，并将应用发布到了 [Delta Chat 论坛](https://support.delta.chat/c/webxdc/20)。


### 怎样创建我自己的私人应用？

- 私人应用只是包含 html、css、和 javascript 代码的 zip 文件。
- 您可以从 [Hello World 示例应用](https://github.com/webxdc/hello)开始扩展。
- [文档](https://docs.webxdc.org/)提供了您所需要知道的其他内容。
- 如果您有任何问题，可以在 [Delta Chat 论坛](https://support.delta.chat/c/webxdc/20)中向有经验的人提问。


## 实验性功能

我们非常感谢有关这些功能的反馈 - 您想分享您的想法吗？加入[论坛](https://support.delta.chat)，做出贡献。（您喜欢参与实验吗？通过“Sign up -> with Delta Chat“注册吧！）

### 怎样在 Delta Chat 中使用音频/视频通话？

- 要启用音频/视频通话，转到高级设置中的“实验性功能”部分，然后选择一个“视频聊天实例”。
- 当您邀请其他人参加视频聊天时，视频聊天会立即在您的浏览器/应用程序中打开。其他人会收到带有您 jitsi/BBB 房间链接的电子邮件。这种方式在聊天伙伴不使用 Delta Chat 时也是可用的。
- 请注意，对方没有铃声，您的聊天伙伴不会被视频聊天邀请打断。
- 您可以使用任意允许通过链接加入的视频聊天服务。只需在设置中添加链接。
- 例如，要使用旗舰 Jitsi Meet 实例，您可以输入 `https://meet.jit.si/$ROOM`。 `$ROOM` 变量将是一个随机值；这样，每次您与他人通话时，您都会使用一个新的随机 jitsi 房间。


### 什么是已验证群组？为什么它是实验性的？

- 已验证群组是一个面对主动攻击者时可保证安全的聊天。已验证聊天视图中的所有消息都是端到端加密的，成员可以通过扫描“邀请二维码”加入。这样，所有成员都通过邀请链相互连接，从而保证了面对主动攻击网络和提供商攻击时的加密一致性。要了解该功能背后的研发，请参阅 [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)。

- 在 2022 年 10 月，“已验证群组”仍然是实验性功能。自 2018 年引入后，该功能一直在不断改进，并且许多 bug 得到了修复。然而，仍然存在出现不一致或者消息变得不可读的情况，特别是在大群组中。


### 什么是广播列表？怎样使用它们？

- 使用广播列表，您可以一次性将一条消息发送给多个接收者；当他们回复您时，回复会出现在您与他们的直接 1 对 1 聊天中。 接收者之间无法相互看到。 
- 从技术上讲，它是密件抄送了许多收件人的电子邮件。 
- 您可以在高级设置的“实验性功能”部分启用该功能。启用后，您便能在“新建聊天”对话框中新建广播列表了。
- 在使用多台设备的情况下，目前广播列表不会在它们之间同步。
- 发送到广播列表的消息不会被加密。加密会使接收者们知道还有谁收到了消息，进而破坏了匿名性（出于发送速率限制和网络消耗的原因，向每个人发送单独的邮件会更糟）。


### 如何与聊天伙伴分享位置？

- 您可以在高级设置的“实验性功能”部分打开位置流。
- 如果您想在聊天中分享位置，找到“附件”然后选择“位置”。现在，在 5 分钟到 6 小时之间，设置一个将您的位置传输给聊天伙伴的时间长度。
- 在您的位置发生变化时，聊天中的其他人可以在地图上看到它。
- 要看到地图和他人的位置，您需要在高级设置中打开该功能。
- 此功能不会与您的聊天伙伴以外的任何人分享您的位置。 *但是：*为了显示地图，我们需要从 mapbox.com 下载地图图块。所以，当您 *查看* 地图时， mapbox.com 会收到下载特定区域地图的请求。 如果这对您来说是隐私风险，那么这项功能可能不适合您。我们正在寻找 Mapbox 的去中心化替代品。
- 在桌面端，操作系统通常不能确定您的位置。不过您可以在地图上右键，然后描述一个位置；这个位置会作为一条消息发送到聊天中，同时也会出现在地图上。


### 实验性的数据库加密到底保护了什么？

- 目前，数据库加密仍处于高度试验性状态。不要依靠它来提供保护。如果操作系统提供了加密，您还应当使用它。
- 数据库加密目前只加密了数据库的行与列，没有加密二进制数据块。这多少意味着您的消息是安全的，但您的附件不是。
- 对于 iOS 和 Android，加密密钥存储在系统钥匙串中。这意味着加密安全性和所运行在的操作系统安全性一样。
- 由于没有标准方法在不同平台上存储加密密钥，Delta Chat 桌面客户端尚未提供数据库加密。


### 为什么我可以选择只监视 DeltaChat 文件夹？

这是提供给尝试服务器端规则的人的实验性设置。在使用某些电子邮件提供商时，您可以将所有带有"Chat-Version"头的邮件移入 DeltaChat 文件夹。并不是所有的提供商都支持此操作；通常情况下，这是由 Delta Chat 应用完成的。

启用“只从 DeltaChat 文件夹获取”是有意义的，仅当您**同时**完成了：

- 已经启用了将带有 Chat-Version 头的所有消息移入 DeltaChat 文件夹的服务器端规则；和
- 已将“显示传统电子邮件”设置为“不显示，仅聊天”。

在这种情况下，Delta Chat 不需要监视收件箱，只监视 DeltaChat 文件夹就足够了。


### 如何将我的账户迁移到一个不同的电子邮件地址？

1. 在 Delta Chat“密码和账户”设置中更改电子邮件地址，输入密码和服务器设置（如果需要的话）。
2. 如果可能的话，将旧邮箱设置为转发所有邮件到新电子邮件地址。
3. 告诉您的联系人您已经更换了地址。如果发消息到已验证群组，他们将会自动知晓这件事。

要了解背后的细节，[请参阅我们的博文](https://delta.chat/en/2022-09-14-aeap)。


## 杂项

### Delta Chat 可用于 _我的_ 电子邮件提供商吗？

- 有很大的可能性是：可以的 :) 
  不过，某些提供商需要一些特殊设置才能正常工作，请参阅[提供商概览](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](2023-01-26-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### 使用电子邮件的 Delta Chat 真的是 _即时_ 通讯工具吗？

- 通常情况下，发送和接收消息会花费数秒。收发消息有时会花费更长时间；但是对于其他的通信软件来说，这也是真的。
- 在双方都积极使用本应用时，即时聊天反应迅速；而当应用运行在后台时，有时就会很慢。
- 由于 Android 与 iOS 经常阻止 Delta Chat 在后台运行、偶尔才会唤醒它，接收消息可能要花费数分钟。iOS 上的这种人为延迟通常比 Android 上的更糟糕。
- 另外，对于很多正常应用来说，Android 和 iOS 杀掉后台应用是一个问题。更多信息，请参阅 [dontkillmyapp.com](https://dontkillmyapp.com/)。


### Delta Chat 与 Protonmail / Tutanota / Criptext 兼容吗？

- 兼容，也不兼容。
- 您不能用 Protonmail、Tutanota 或 Criptext 账户来使用 Delta Chat；它们不提供使用 IMAP 接收邮件的服务。
- 您可以使用 Delta Chat 将消息发送给使用 Protonmail、Tutanota 或 Criptext 的人。然而，这些消息不会被端到端加密。这些提供商提供的端到端加密不兼容 Delta Chat 所使用的 [Autocrypt](https://autocrypt.org/)标准。
- Delta Chat 可以通过任何电子邮件提供商与[使用 Autocrypt 的电子邮件应用](https://autocrypt.org/dev-status.html)进行端到端加密。


### 我对技术细节很感兴趣。能告诉我更多吗？

- 请参阅 [Delta Chat 中使用的标准]({% include standards-url %})。

### Was Delta Chat independently audited for security vulnerabilities?

The Delta Chat project underwent three independent security audits in the last
years:

- In 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).

- In 2020, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's Rust [core](https://github.com/deltachat/deltachat-core-rust/),
  [IMAP](https://github.com/async-email/async-imap),
  [SMTP](https://github.com/async-email/async-smtp), and
  [TLS](https://github.com/async-email/async-native-tls) libraries.
  It did not find any critical or high-severity issues.
  The report raised a few medium-severity weaknesses -
  they are no threat to Delta Chat users on their own
  because they depend on the environment in which Delta Chat is used.
  For usability and compatibility reasons,
  we can not mitigate all of them
  and decided to provide security recommendations to threatened users.
  You can read the [full report here](../assets/blog/2020-second-security-review.pdf).

- Beginning 2023, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](2023-03-23-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

### Delta Chat 的开发是如何被资助的? 

Delta Chat 没有接受风险投资，也没有负债累累，更没有承受产生巨额利润或将用户及其朋友和家人卖给广告商（或更糟）的压力。我们宁愿使用（目前来自欧盟和美国的）公共资金，来帮助我们努力建立一个基于自由开源社区开发的、去中心化的、多样化的聊天消息（软件）生态系统。 

具体来说，到目前为止，对 Delta Chat 开发的资助有这些来源：

- 在 2017 年和 2018 年，[NEXTLEAP](https://nextleap.eu) EU 项目资助了已验证群组和联系人设置协议的研究与实现。他们还通过 [Autocrypt](https://autocrypt.org) 帮助集成了端到端加密。

- 在[开放技术基金](https://opentechfund.org) 2018/2019 年提供的第一笔赠款（约 20 万美元）期间，我们显著改善了安卓应用，发布了第一个桌面测试版，并根据人权方面的用户体验研究进行了功能开发，请参阅我们的结论[《需求发现与用户体验报告》](https://delta.chat/en/2019-07-19-uxreport)。2019/2020 年的第二笔赠款（约 30 万美元）对发布 Delta/iOS 版本，将核心库转换到 Rust ，以及为所有平台开发新功能提供了帮助。

- [NLnet 基金会](https://nlnet.nl/)在 2019/2020 年捐赠了 4.6 万欧元，用于完成 Rust/Python 绑定和建立聊天机器人生态系统。

- 在 2021 年，我们从两项下一代互联网提案收到了欧盟的进一步资助，即 [EPPD - 电子邮件提供商可移植性目录](https://dapsi.ngi.eu/hall-of-fame/eppd/)（约 9.7 万欧元）和 [AEAP - 电子邮件地址移植](https://nlnet.nl/project/EmailPorting/)（约 9 万欧元）。这带来了更好的多账户支持，改进的二维码联系人和群组设置，和所有平台上的多处网络改进。

- 在 2021/2022 年，我们从美国民主、人权和劳工局（DRL）获得 *互联网自由* 资助（约 50 万美元）。这笔资金资助我们的长期目标是使 Delta Chat 更易于使用，兼容世界上各类电子邮件服务器，以及在经常遭受互联网审查与互联网关闭的地方更具适应力和安全性。 

- 有时我们会收到来自个人的一次性捐款，对此我们心存感激。例如在2021 年，一位慷慨的个人向我们银行电汇了四千欧元，主题为“保持良好发展！"。我们使用这些钱款来资助开发聚会，以及应对难以预测或无法从公共资金赠款中报销的临时费用。

- 最后但并非最不重要的是，数位专家与热心人在没有收到或仅收到少量金钱的情况下为 Delta Chat 的开发做出了贡献。没有他们，Delta Chat 不会发展到、甚至无法接近目前的状况。

上面提到的钱款资助主要是由在弗赖堡（德国）的 merlinux GmbH 组织的，分发给了来自世界各地的十多位贡献者。

2022 年下半年，特别是 2023 年的资助是一个正在被关注的问题。除了申请更多的公共资金外，我们希望能更加独立于政府相关的资金来源。请查看 [Delta Chat 贡献渠道](https://delta.chat/en/contribute)来了解钱款和开发相关的支持可能性。
