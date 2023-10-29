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
- _没有垃圾信息_——默认情况下仅显示已知用户的消息。
- _端到端加密_——通过 Autocrypt。
- 基于 _著佐权_ 与 _标准_ 的自由软件。
- _身份灵活_，内置[多账户](#multiple-accounts)支持。


### 哪些消息会在 Delta Chat 中出现？

默认情况下， Delta Chat 会显示所有电子邮件。

通过“设置->聊天与媒体->显示传统电子邮件”，您可以改变这种行为。有三个选项：

- “不显示，仅聊天”：只显示由其他 Delta Chat 用户发送的消息和对您 Delta Chat 消息的回复。这在电子邮件地址同时用于处理普通邮件的情况下很有用。
- “全部”：Delta Chat 会显示发送到您电子邮件地址的所有邮件。用于您希望使用 Delta Chat 处理所有电子邮件的情况，这样就不会有消息被落下了。默认设置。
- “已接受的联系人”：Delta Chat 会显示已有聊天的联系人的所有电子邮件，而新聊天只会为 Delta Chat 消息弹出。可用于希望逐一决定是在 Delta Chat 中还是在“普通”电子邮件应用中对话的情况。


### 如果希望收到我从未发送过消息的人的消息，该怎么办?

- 来自未知联系人的消息会作为**请求**出现。您需要在回复之前先接收他的请求。
- 如果现在不想和他聊天，您也可以“删除”请求。这只会在设备上而 *不会* 在服务器上删除这条消息。所以您仍可以使用其他电子邮件应用来处理它。
- 删除了请求后，来自同一联系人的后续消息仍会作为聊天请求出现，所以您有机会来改变主意。如果您真的不想收到那个人的消息，那么可以考虑 *屏蔽* 他。


### Delta Chat 支持图像、视频和其他附件吗？

- 是的。除纯文本外，所有电子邮件附件均显示为单独的消息。发出消息会根据需要自动获得附件。

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">如何添加账户或在多个账户之间切换？</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#multiclient).

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

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [webxdc app](#webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


### 如何删除我的账户？

As you use an e-mail account for Delta Chat,
how you can delete your account depends on your e-mail provider.
We don't have any control over your e-mail account,
so unfortunately we can't help you with that.

If you want to keep the account,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.


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

- To turn it on, go to **Delete Old Messages → Delete Messages from Server**
  in the "Chats and Media" settings.
  You can set a timeframe between "At once" and "After 1 year".
  All e-mails received by Delta Chat will be deleted from the server after this timeframe.

- 注意：如果在多台设备上使用 Delta Chat，请将消息在服务器上保存足够长的时间，以便其他设备能够下载消息。在这种情况下，您应当根据其他设备的使用频率，将自动删除设置到“一天后”或相似的选项上。


### 打开“从设备删除旧消息”后，会发生什么？ {#delold}

- 若要节省设备上的存储空间，可以开启自动删除旧消息。
- 找到“聊天与媒体”设置中的“从设备删除旧消息”，在从“一小时后”到“一年后”的一系列选项中选择一个。这样，设备上 *所有* 比所选择时间长度老的消息将被删除。


## 加密 and Security 

### Which standards are used for end-to-end encryption? 

[Autocrypt](https://autocrypt.org) is used for automatically
establishing E2E-encryption with contacts and group chats. 
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure). 

[Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html) 
are used to implement [verified groups](#verifiedchats) 
which provide pervasive protection against network attacks and compromised servers.
Verified groups enforce all messages in a chat to be safely E2E-encrypted
with an unparalleled ease of use that avoids users having to learn about 
public key cryptography, key management or key verification. 


### When will messages be E2E-encrypted? 

After a first message was received from a Delta Chat or other Autocrypt-capable contact, 
Delta Chat defaults to using E2E-encryption with that contact (and vice versa). 
When creating a group chat with contacts where E2E-encrypted is individually in place,
all group members will automatically use E2E-encryption with each other and in the group. 
However, if you add a contact that lacks E2E-encryption, 
the group chat will not use E2E-encryption. 

If you want to be sure to always and only use E2E-encryption in a group
use [verified chat groups](#verifiedchats) 
which additionally protects against compromised or malfeasant e-mail servers. 


### Are attachments (pictures, files, audio etc.) E2E-encrypted? 

Yes. 
When we talk about an "E2E-encrypted message" 
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
and only displays a padlock security indicator on a message
if the whole message is properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publically discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019](https://delta.chat/assets/blog/2019-first-security-review.pdf). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for E2E-encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking E2E-encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing E2E-encryption is
only one part of "user outcomes",
see also our answers to [device-seizure](#device-seizure)
and [message-metadata](#message-metadata) questions. 


### Is Delta Chat vulnerable to EFAIL?

No, [Delta Chat never was vulnerable to EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
because its OpenPGP implementation [rPGP](https://github.com/rpgp/rpgp) 
uses Modification Detection Code when encrypting messages
and returns [an error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
if the Modification Detection Code is incorrect.

Delta Chat also never was vulnerable to the "Direct Exfiltration" EFAIL attack
because it only decrypts `multipart/encrypted` messages
which contain exactly one encrypted and signed part,
as defined by the Autocrypt Level 1 specification. 


### Is a message exposed in cleartext if E2E-encryption is not available? {#tls}

No,
this does not necessarily mean that the message is exposed in cleartext.

Delta Chat always uses ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)) encryption
which secures connections between your device and your e-mail provider
unless you explicitly disable it.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).

Moreover, the connection between your and the recipient's e-mail provider 
will today typically be transport-encrypted as well. 
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced in all inter e-mail server communications
in which case Delta Chat communications will never be exposed in cleartext to the network 
even if the message was not E2E-encrypted. 

Note that maintaining E2E-encryption on top of TLS encryption is highly advisable 
because it provides safety between your device and a contact's device,
irrespective of any hops over potentially compromised e-mail servers. 


### How does Delta Chat protect metadata in messages? {#message-metadata}

Delta Chat protects most message metadata by putting the following information
into the E2E-encrypted part of messages: 

- Subject line 
- Group avatar and name 
- MDN (read receipt) requests (`Chat-Disposition-Notification-To`)
- Disappearing message timer (`Ephemeral-Timer`) 
- `Chat-Group-Member-Removed`, `Chat-Group-Member-Added` 
- `Secure-Join` header containing secure join commands
- Notification about enabling location streaming
- WebRTC room URL

E-Mail servers do not get access to this protected metadata 
but they do see the message date as well as the message size,
and, more importantly, the sender and receiver addresses. 
E-mail servers need receiver addresses to route and 
deliver messages to recipient's devices. 


### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a Delta Chat optimized [e-mail server instance](https://delta.chat/serverguide)
to create pseudonymous temporary accounts through QR-code scans.
Note that Delta Chat apps on all platforms support multiple accounts 
so you can easily use action-specific "1-week" or "1-month" accounts next to your "main" account
with the knowledge that all temporary account data, along with all metadata, will be deleted. 
Moreover, if a device is seized then contacts using temporary e-mail accounts 
can not be identified easily, as compared to messengers which reveal 
phone numbers in chat groups which in turn are often associated with passport identities. 


### How can I verify E2E-security with a contact? 

If you are within immediate distance of your contact,
select **QR Invite code** on one device and then **Scan QR code**
from within Delta Chat on the other device. 
If both devices are online, 
they will setup a chat with each-other (if it doesn't exist already)
and both will see a "sender verified" system message in their chat. 
Showing and scanning a QR code can also happen in any "second channel" 
such as a video call or another messenger. 

If QR code scanning is for some reason not viable, 
you may check the E2E encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop). 
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.


### How can I check the encryption status of messages?

A little **padlock** in a message bubble denotes 
that the message was properly E2E-encrypted from the given sender.
If there is **no padlock**, the message was not properly E2E-encrypted 
most likely because the sender uses an app or webmail interface 
without support for E2E--encryption.


### Why do I see unencrypted messages? 

If a contact uses a non-Autocrypt e-mail app, 
all messages involving this contact (in a group or 1:1 chat) 
will not be E2E-encrypted, and thus not show a "padlock" with messages. 
Note that even if your contacts use Delta Chat on their account, 
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages. 
Replying unencrypted to unencrypted messages is mandated by Autocrypt 
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app. 

If you need a safely E2E-encrypted chat with contacts
who are using their account also with Autocrypt-incapable apps (e.g. webmail) 
it's best to create a [verified group chat](#verifiedchats) with them. 
Any message sent into a verified group chat will be E2E-encrypted
irrespective of the last incoming message from a contact. 


### How can I ensure message E2E-encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is using [verified groups](#verifiedchats) 
and turning on disappearing messages.

Verified groups are always encrypted and protected against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) 
and turning on "disappearing messages" deletes the messages 
on the server after a user-configured time. 

If you don't need a longer-lived copy of your messages on the server, 
you can also turn on ["delete messages from server automatically"](#delold).


### Delta Chat 支持前向保密吗？

No, Delta Chat doesn't support Perfect Forward Secrecy (PFS).
This means that if your Delta Chat private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.

Note, however, that if anyone obtains to your decryption keys, 
they will typically also be able to obtain your messages, 
irrespective if Perfect Forward Secrecy is in place or not. 
The typical real-world situation for leaked decryption keys is device seizure
which we discuss in our answer [on metadata and device seizure](#device-seizure). 

It is possible that Delta Chat evolves to support Perfect Forward Secrecy,
because OpenPGP is just a container for encrypted messages 
but encryption key management (and thus key rotation or key "ratcheting") 
could be organized in flexible ways. 
See [Seqouia's PFS prototype](https://gitlab.com/sequoia-pgp/openpgp-dr)
for existing experiments in the OpenPGP implementor community. 


### 我可以重复使用现有的私钥吗？

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

### 我无法将现有的 PGP 密钥导入 Delta Chat。

最可能的原因是您的密钥被加密了和/或使用了密码。Delta Chat 不支持这样的密钥。您可以移除密码，之后再尝试导入。如果想保留密码，您需要创建电子邮件别名来使用 Delta Chat ，这样 Delta Chat 的密钥是绑定到这个电子邮件别名上的。

Delta Chat 支持常见的 OpenPGP 私钥格式。然而，不可能使每种来源的私钥都被完整支持。这不是 Delta Chat 的主要目标。实际上，大多数新用户在使用 Delta Chat 之前根本没有密钥。不过，我们确实在尝试支持尽可能多的私钥来源。

移除私钥密码的操作取决于您用于管理 PGP 密钥的软件。对于 Enigmail，您可以在密钥管理窗口中将密码设为空值。 对于 GnuPG，您可以[通过命令行](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429)来进行设置。对于其他程序，您应该能在网上找到解决方案。


## 多客户端 {#multiclient}

### 我能同时在多个设备上使用 Delta Chat 吗?

Yes. Delta Chat 1.36 comes with a new, experimental function for using the same account on different devices:

- Make sure both devices are on the same Wi-Fi or network

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- On the second device, [install Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- Transfer should start after a few seconds and during transfer both devices will show the **progress**.
  Wait until it is finished on both devices.

In contrast to many other messengers, after successful transfer,
both **devices are completely independent.**
One device is not needed for the other to work.


### 故障排除

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


### 手动传输

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


## webxdc apps {#webxdc}

In Delta Chat, you can share [webxdc apps](https://webxdc.org), attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger.


### How private are webxdc apps?

- webxdc apps can not send data to the Internet, or download anything.
- A webxdc app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a webxdc app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the webxdc app as well.
- This also means: it can be a privacy risk to open webxdc apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get webxdc apps?

- In general, anyone can share webxdc apps with each
  other without restrictions.
- You can [send 'hi' to xstore@testrun.org](https://delta.chat/en/2023-08-11-xstore)
  to see an experimental webxdc appstore.
  All of the apps are open source and for free.
- Many people write their own webxdc apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own webxdc apps?

- webxdc apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## 实验性功能

我们非常感谢有关这些功能的反馈 - 您想分享您的想法吗？加入[论坛](https://support.delta.chat)，做出贡献。（您喜欢参与实验吗？通过“Sign up -> with Delta Chat“注册吧！）

### 怎样在 Delta Chat 中使用音频/视频通话？

- 要启用音频/视频通话，转到高级设置中的“实验性功能”部分，然后选择一个“视频聊天实例”。
- 当您邀请其他人参加视频聊天时，视频聊天会立即在您的浏览器/应用程序中打开。其他人会收到带有您 jitsi/BBB 房间链接的电子邮件。这种方式在聊天伙伴不使用 Delta Chat 时也是可用的。
- 请注意，对方没有铃声，您的聊天伙伴不会被视频聊天邀请打断。
- 您可以使用任意允许通过链接加入的视频聊天服务。只需在设置中添加链接。
- 例如，要使用旗舰 Jitsi Meet 实例，您可以输入 `https://meet.jit.si/$ROOM`。 `$ROOM` 变量将是一个随机值；这样，每次您与他人通话时，您都会使用一个新的随机 jitsi 房间。


### 什么是已验证群组？为什么它是实验性的？{#verifiedchats}

Verified groups carry a green verification checkmark in the group title that guarantees
that all messages are E2E-encrypted and can not be read or altered by e-mail servers. 
Each member in a verified group chat can add already verified contacts 
or tap "QR Invite code" to let invitees scan the code to get verified and added ("secure-join").
This "secure-join" protocol ensures that all verified group chat members 
are connected with each other through a chain of verifications ("web of trust"), 
guaranteeing E2E-encryption consistency even if e-mail servers are compromised or malfeasant.
See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
for a detailed security discussion. 

Note that "1:1" chats are currently only opportunistically encrypted (Autocrypt). 
You need to create a verified group with your contact 
to ensure that all messages will be safely E2E-encrypted between you two. 
We plan to introduce verified 1:1 chats around the end of 2023, 
simplifying and extending the guarantees of verified E2E-encryption for all chat types. 
Until then verified groups will remain classified as an experimental feature 
although they are widely and successfully used already, 
and reported bugs have been continously fixed in the last years. 


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
  blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
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

### Was Delta Chat independently audited for security vulnerabilities? {#security-audits}

The Delta Chat project underwent four independent security audits in the last years:

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
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

- Beginning 2023, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023. 
  See [here for the full background story on E2E security in the web](https://delta.chat/en/2023-05-22-webxdc-security). 


### Delta Chat 的开发是如何被资助的? 

Delta Chat 没有接受风险投资，也没有负债累累，更没有承受产生巨额利润或将用户及其朋友和家人卖给广告商（或更糟）的压力。我们宁愿使用（目前来自欧盟和美国的）公共资金，来帮助我们努力建立一个基于自由开源社区开发的、去中心化的、多样化的聊天消息（软件）生态系统。 

具体来说，到目前为止，对 Delta Chat 开发的资助有这些来源：

- 在 2017 年和 2018 年，[NEXTLEAP](https://nextleap.eu) EU 项目资助了已验证群组和联系人设置协议的研究与实现。他们还通过 [Autocrypt](https://autocrypt.org) 帮助集成了端到端加密。

- 在[开放技术基金](https://opentechfund.org) 2018/2019 年提供的第一笔赠款（约 20 万美元）期间，我们显著改善了安卓应用，发布了第一个桌面测试版，并根据人权方面的用户体验研究进行了功能开发，请参阅我们的结论[《需求发现与用户体验报告》](https://delta.chat/en/2019-07-19-uxreport)。2019/2020 年的第二笔赠款（约 30 万美元）对发布 Delta/iOS 版本，将核心库转换到 Rust ，以及为所有平台开发新功能提供了帮助。

- [NLnet 基金会](https://nlnet.nl/)在 2019/2020 年捐赠了 4.6 万欧元，用于完成 Rust/Python 绑定和建立聊天机器人生态系统。

- 在 2021 年，我们从两项下一代互联网提案收到了欧盟的进一步资助，即 [EPPD - 电子邮件提供商可移植性目录](https://dapsi.ngi.eu/hall-of-fame/eppd/)（约 9.7 万欧元）和 [AEAP - 电子邮件地址移植](https://nlnet.nl/project/EmailPorting/)（约 9 万欧元）。这带来了更好的多账户支持，改进的二维码联系人和群组设置，和所有平台上的多处网络改进。

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Beginning 2023 we got accepted in the Next Generation Internet (NGI)
  Entrust program for our "Private Decentralized Apps" proposals. 
  Exact amount is to be determined (around 100K EUR). 
  This funding supports further developments of [webxdc "apps shared in a chat"](https://webxdc.org). 

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

  [捐助钱款](donate){: .cta-button}

- 最后但并非最不重要的是，数位专家与热心人在没有收到或仅收到少量金钱的情况下为 Delta Chat 的开发做出了贡献。没有他们，Delta Chat 不会发展到、甚至无法接近目前的状况。

上面提到的钱款资助主要是由在弗赖堡（德国）的 merlinux GmbH 组织的，分发给了来自世界各地的十多位贡献者。

Please see [Delta Chat Contribution channels](contribute)
for both monetary and and other contribution possibilities.  
