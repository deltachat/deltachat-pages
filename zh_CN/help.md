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
或分享邀请链接]（#howtoe2ee）。 
使用（默认的）基于chatmail的聊天账户时需要这样做 
因为chatmail会拒绝未加密的发送信息。

当使用经典电子邮件地址创建聊天配置文件时 
如果您知道联系人的电子邮件地址，您可以手动创建联系人
然后给他们写信息 
即使收件人没有使用Delta Chat 。


### 与其他通信软件相比，Delta Chat 有哪些优势？

- 使用快速、安全、可互操作的 [chatmail 服务器](https://delta.chat/chatmail) 创建匿名聊天账户
  为 iOS 和 Android 设备提供即时推送通知。 

- 跨平台支持 [多配置文件]（#多账户）和多设备。 

- 交互性 [聊天中的网页小程序](https://webxdc.org/apps)

- [经审计的端到端加密](#security-audits) 
  安全地抵御网络和服务器攻击。 

- 免费开源软件，包括应用程序和服务器端。 
  基于[电子邮件和网络互联网标准](https://github.com/deltachat/deltachat-core-rust/blob/master/standards.md)、 
  [避免 "又一个标准综合症（xkcd 927）"](https://xkcd.com/927/) 


### 如果希望收到我从未发送过消息的人的消息，该怎么办?

- 来自未知联系人的消息会作为**请求**出现。您需要在回复之前先接收他的请求。
- 如果现在不想和他聊天，您也可以“删除”请求。这只会在设备上而 *不会* 在服务器上删除这条消息。所以您仍可以使用其他电子邮件应用来处理它。
- 删除了请求后，来自同一联系人的后续消息仍会作为聊天请求出现，所以您有机会来改变主意。如果您真的不想收到那个人的消息，那么可以考虑 *屏蔽* 他。


### Delta Chat 支持图像、视频和其他附件吗？

- 是的。除纯文本外，所有电子邮件附件均显示为单独的消息。发出消息会根据需要自动获得附件。

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


### 绿色圆点代表什么？

- 自 Delta Chat 1.34 版起，您有时可以在联系人头像旁看到一个 "绿点"。
  绿点。这意味着他们 "最近被看到"。
- 具体来说：这意味着在过去 10 分钟内，Delta Chat 看到过他们：
  - 因为他们直接给你发了消息、
  - 因为他们在你们都是成员的群组里写了什么、
  - 因为他们向您发送了您所写信息的读取回执、
- 或者因为他们通过使用 [webxdc 应用程序](#webxdc) 向您的 Delta Chat 应用发送数据。
- 因此，这并不是实时在线状态 -- 如果有人没有立即回复，即使他们看起来是在线的，也不要担心，给他们一些空间 ;-)
- 另一方面，别人也不会总是 "看到你在线"。如果您关闭了读取收据功能，他们就不会看到绿点，直到您给他们发消息或给他们所在的群组写信。


### 消息定时销毁是如何工作的？ {#ephemeralmsgs}

您可以在聊天窗口右上角的聊天设置中通过选择 1 分钟到 5 周之间的时间跨度打开“消息定时销毁”。

Until the setting is turned off again,
each chat member's Delta Chat app takes care
of deleting the messages
after the selected time span.
The time span begins
when the receiver first sees the message in Delta Chat.
The messages are deleted
both in each email account on the server,
and in the app itself.

Note that you can rely on disappearing messages
only as long as you trust your chat partners;
malicious chat partners can take photos,
or otherwise save, copy or forward messages before deletion.

Apart from that,
if one chat partner uninstalls Delta Chat,
the messages will not get deleted from their email account.
They will most likely also not be decryptable anymore
(as long as they were encrypted in the first place).


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


## Instant message delivery and Push Notifications {#instant-delivery}


### What are Push Notifications? How can I get instant message delivery?

Push Notifications are sent by Apple and Google "Push services" to a user's device
so that an inactive Delta Chat app can fetch messages in the background
and show notifications on a user's phone if needed.

Push Notifications work with all [chatmail](https://delta.chat/chatmail) servers on

- iOS devices, by integrating with Apple Push services.

- Android devices, by integrating with the Google FCM Push service,
  including on devices that use [microG](https://microg.org)
  instead of proprietary Google code on the phone.

As of May 2024, classic e-mail servers do not support Push Notifications
for Delta Chat users.


### Are Push Notifications enabled on iOS devices? Is there an alternative?

Yes, Delta Chat automatically uses Push Notifications for [chatmail](https://delta.chat/chatmail) profiles.
And no, there is no alternative on Apple's phones to achieve instant message delivery
because Apple devices do not allow Delta Chat to fetch data in the background.
Push notifications are automatically activated for iOS users because
[Delta Chat's privacy-preserving Push Notification system](#privacy-notifications)
does not expose data to Apple that it doesn't already have.


### Are Push notifications enabled / needed on Android devices? {#android-push}

If a "Push Service" is available, Delta Chat enables Push Notifications
to achieve instant message delivery for all chatmail users.
If you are using a classic e-mail provider instead of [chatmail](https://delta.chat/chatmail) servers,
Push Notifications are not available.

In the Delta Chat "Notifications" settings for "Instant delivery"
you can change the following settings effecting all chat profiles:

- Use Background Connection: If you are not using a Push service,
  you may disable "battery optimizations" for Delta Chat,
  allowing it to fetch messages in the background.
  However, there could be delays from minutes to hours.
  Some Android vendors even restrict apps completely
  (see [dontkillmyapp.com](https://dontkillmyapp.com))
  and Delta Chat might not show  incoming messages
  until you manually open the app again.
  
- Force Background Connection: This is the fallback option
  if the previous options are not available or do not achieve "instant delivery".
  Enabling it causes a permanent notification on your phone
  which may sometimes be "minified" with recent Android phones.

Both "Background Connection" options are energy-efficient and
safe to try if you experience messages arrive only with long delays.


### How private are Delta Chat Push Notifications? {#privacy-notifications}

Delta Chat Push Notification support avoids leakage of private information.
It does not leak e-mail, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Here is how Delta Chat apps perform Push Notification delivery:

- A Delta Chat app obtains a "device token" locally and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives an e-mail for a Delta Chat user
  it forwards the "device token" to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy forwards
  the "device token" to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or e-mail address of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the chatmail or e-mail address of the device it wakes up.
  The central Apple/Google Push services never see an e-mail address (sender or receiver)
  and also never see any message content (also not in encrypted forms).

As of May 2024, chatmail servers know about "device tokens"
but we plan to encrypt this information to the notification proxy
such that the chatmail server never learns the device token.

The central Delta Chat notification proxy [is small and fully implemented in Rust](https://github.com/deltachat/notifiers)
and forgets about device-tokens as soon as Apple/Google/etc processed them,
usually in a matter of milliseconds.

Resulting from this overall privacy design, even the seizure of a chatmail server,
or the full seizure of the central Delta Chat notification proxy
would not reveal private information that Push services do not already have.


### Why does Delta Chat integrate with centralized proprietary Apple/Google push services?

Delta Chat is a free and open source decentralized messenger with free server choice,
but we want users to reliably experience "instant delivery" of messages,
like they experience from Whatsapp, Signal or Telegram apps,
without asking questions up-front that are more suited to expert users or developers.

Note that Delta Chat has a [small and privacy-preserving Push Notification system](#privacy-notifications)
that achieves "instant delivery" of messages for all chatmail servers
including a potential one [you might setup yourself without our permission](https://delta.chat/chatmail#selfhosted).
Welcome to the power of the interoperable and massive chatmail and e-mail system :)


## 加密和安全 

### 端到端加密使用了哪些标准 ？ 

[Autocrypt](https://autocrypt.org) is used for automatically
establishing end-to-end encryption with contacts and group chats.
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure).
End-to-End encrypted messages are marked with a padlock 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>.

[Secure-Join protocols](https://securejoin.delta.chat/en/latest/new.html)
are used for establishing chats with guaranteed end-to-end encryption 
which protects against network attacks and compromised servers.
Chats marked with a green checkmark 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
guarantee end-to-end encrypted messages. 

### 我如何知道信息是否经过端到端加密？{#whene2e}

All end-to-end encrypted messages carry a padlock:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

End-to-end encryption is guaranteed if there is a green checkmark next to the chat title:

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### How can I get guaranteed end-to-end encryption and green checkmarks? {#howtoe2ee}

If you have a second communication channel with your chat partner,
like a video chat or a different messenger,
you can generate an invite link.

If you are together in person,
you can show a QR code to your chat partner.

- For **Group invitations**,
  tap the chat group title to see its member list,
  and select "QR Invite code".

- For **direct 1:1 chat invitations**,
  tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen.

Let your chat partner scan the QR image
with their Delta Chat app,
or click "Copy" or "Share" to create an invite link
and share it with your chat partner.

Now wait while [Secure-Join network messages are exchanged](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol) between both devices.

- If both devices are online,
  both sides will eventually see a (group or direct) chat with a green checkmark
  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
  next to the title.

- If one of the devices is offline, the green checkmarks will only
  appear later when the device is internet-connected again
  and the Secure-Join network protocol completed. 

Congratulations! 
You now will automatically use guaranteed end-to-end encryption
with this contact and both of you can add each other to green-checkmarked groups
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>,
thereby automatically spreading guaranteed end-to-end encryption among its members. 


### What does the green checkmark and "guaranteed end-to-end encryption" mean? {#e2eeguarantee}

Chat titles with green checkmarks
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
mean that all messages in the chat will be end-to-end encrypted
and can not be read or altered by compromised e-mail servers or Internet providers. 
Joining green-checkmarked group chats
safely spreads everybody's encryption information (and green checkmarks)
in a manner that guarantees end-to-end encryption in the group and among members. 

Contact profiles with green checkmarks 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
mean that messaging a contact is currently guaranteed to be end-to-end encrypted.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a contact to a green-checkmarked group becomes an introducer 
to those members who didn't yet know about the added contact.
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

Note that in a contact profile you may see and tap introducers 
but there is no green checkmark in the profile title. 
This usually means that the contact ["sent a message from another device"](#nocryptanymore). 

For more in-depth discussion of "guaranteed end-to-end encryption"
please see [Secure-Join protocols](https://securejoin.delta.chat/en/latest/new.html)
and specifically read about "Verified Groups", the technical term
of what is called here "green-checkmarked" or "guaranteed end-to-end encrypted" chats.


### A contact "sent a message from another device", what can i do? {#nocryptanymore}

Your chat with a contact lost guaranteed end-to-end encryption. 
The green checkmark was removed for this chat and contact when you see this warning. 
**If you find the sudden drop of guaranteed end-to-end encryption 
surprising for this contact then don't accept the warning!**
Instead check with your contact through a second channel 
like a video call, other messenger or a phone call,
to find out what happened. 

If your contact actually caused the drop of guaranteed end-to-end encryption
please see the next paragraphs for common reasons and their mitigations. 
Regardless, all other green-checkmarked chats remain guaranteed end-to-end encrypted
even if the contact is a member there. 

**Your contact is using Delta Chat on a second device (phone or laptop)**

If they have another device with a Delta Chat app running,
they should remove the profile from the new device
and add it [as a second device as described here](#multiclient).
As soon as they message you afterwards, the warning will be gone
and guaranteed encryption is established with both devices of your contact. 

**Your contact reinstalled Delta Chat using their old account login**
 
If they have [a backup file](#backup), 
they should remove the profile from the new device
and rather import the backup file to re-create their profile.
As soon as they message you afterwards, the warning will be gone
and guaranteed encryption is re-established for this contact.

If they don't have a backup file, it's best to perform a [QR scan](#howtoe2ee) 
with your chat partner to re-establish guaranteed end-to-end encryption.

**Your contact sent a mail through a webmail interface or another e-mail app
and will get back to using Delta Chat soon again.**

If you are sure that the contact sometimes uses webmail,
or another mail app lacking end-to-end encryption,
then you may accept the warning.
As soon as your contact uses Delta Chat again, 
guaranteed end-to-end encryption will be automatically re-established. 

**Your contact stopped using Delta Chat entirely**

Sometimes remaining in contact is more important than end-to-end encryption.
["Transport Layer Encryption" (TLS)](#tls) may still meaningfully protect
the confidentiality of your messages between your device and the e-mail server. 
But without end-to-end encryption you and your contact are trusting your e-mail server
to not read or manipulate your messages, and to not hand them to third parties. 

In any case, you can not do much else than accept the warning.
Please also remove the contact from any active green-checkmarked group 
which you can find in "Shared chats" in the Contact profile. 
This spares your contact from getting "unreadable" messages. 

If the contact removed Delta Chat because of buggy or undesirable behaviour, 
please consider posting to our [support forum](https://support.delta.chat) 
to help us identify and address common problems. Thanks!


### Are attachments (pictures, files, audio etc.) end-to-end encrypted?

Yes.

When we talk about an "end-to-end encrypted message"
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


### Did you consider using alternatives to OpenPGP for end-to-end -encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking end-to-end encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing end-to-end encryption is
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


### Is a message exposed in cleartext if end-to-end encryption is not available? {#tls}

Even if your messages are not guaranteed to be end-to-end encrypted, 
they are still protected from Internet providers like cell or cable companies. 
However, your and your recipient's e-mail providers 
may read, analyze or even modify your messages, 
including any attachments,
if they are not end-to-end encrypted. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your e-mail provider. 
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's e-mail provider
will typically be transport-encrypted as well.
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between e-mail providers 
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.

Note that [maintaining guaranteed end-to-end encryption](#howtoe2ee) on top of TLS encryption 
provides pervasive safety between your and the recipient's devices.
Not even your e-mail or Internet provider will be able to read or modify your messages. 


### How does Delta Chat protect metadata in messages? {#message-metadata}

Delta Chat protects most message metadata by putting the following information
into the end-to-end encrypted part of messages:

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
we recommend to use a [chatmail server](https://delta.chat/chatmail)
to create pseudonymous temporary profiles through QR-code scans.
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then contacts using temporary profiles
can not be identified easily, as compared to messengers which reveal
phone numbers in chat groups which in turn are often associated with legal identities.


### How can i check encryption information?

You may check the end-to-end encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop).
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.


### How can I check the encryption status of messages?

A little **padlock** in a message bubble denotes
that the message was properly end-to-end encrypted from the given sender.
If there is **no padlock**, the message was not properly end-to-end encrypted
most likely because the sender uses an app or webmail interface
without support for end-to-end--encryption.


### Why do I see unencrypted messages? 

If a contact uses a non-Autocrypt e-mail app,
all messages involving this contact (in a group or 1:1 chat)
will not be end-to-end encrypted, and thus not show a "padlock" with messages.
Note that even if your contacts use Delta Chat on their account,
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages.
Replying unencrypted to unencrypted messages is mandated by Autocrypt
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app.

### How can i get an end-to-end encrypted chat with a Delta Chat contact who sometimes uses webmail or another non-Autocrypt e-mail app? 

If you need a safely end-to-end encrypted chat with a contact 
who is using their e-mail account both with Delta Chat and non-Autocrypt apps (e.g. webmail),
it's best to setup [guaranteed end-to-end encryption with them](#howtoe2ee)
and then create a guaranteed end-to-end encrypted group chat with you two as members. 
In this group chat all messages will be end-to-end encrypted 
even if the direct chat between you two has a
["… sent a message from another device"](#nocryptanymore) warning. 


### How can I ensure message end-to-end encryption and deletion?

The best way to ensure every message is end-to-end encrypted,
and metadata deleted as quickly as possible
is [using chats with guaranteed end-to-end encryption](#howtoe2ee)
and turning on [disappearing messages](#ephemeralmsgs).

Guaranteed end-to-end encrypted chats protect against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
and turning on disappearing messages deletes the messages
on the server after a user-configured time.

If you don't need a longer-lived copy of your messages on the server, 
you can also turn on ["delete messages from server automatically"](#delold).


### Does Delta Chat support Perfect Forward Secrecy? {#pfs}

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


### Is end-to-end encryption of Delta Chat as safe as Signal? 

It depends on what is important to you. 
Delta Chat [does not support PFS](#pfs) like Signal does
but it provides [guaranteed end-to-end encrypted chats](#e2eeguarantee)
that are safe against compromised servers or corrupted networks. 
Signal and most other PFS-supporting messengers do not provide 
a practical scheme for protecting chat groups from network attacks
which are arguably more worrysome 
than a potential attacker who seizes your phone and private encryption setup
but somehow not your messages, yet has a full record of all 
past encrypted messages. 

In any case, Delta Chat's end-to-end encryption uses a [secure subset of OpenPGP](#openpgp-secure)
which has been [independently security-audited](../assets/blog/2019-first-security-review.pdf).

### 我可以重复使用现有的私钥吗？ {#importkey}

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

### 我无法将现有的 PGP 密钥导入 Delta Chat。

最可能的原因是您的密钥被加密了和/或使用了密码。Delta Chat 不支持这样的密钥。您可以移除密码，之后再尝试导入。如果想保留密码，您
需要创建电子邮件别名来使用 Delta Chat ，这样 Delta Chat 的密钥是绑定到这个电子邮件别名上的

Another common error is having the wrong file ending.
Use the ASCII armored format and an `.asc` file ending.

Delta Chat 支持常见的 OpenPGP 私钥格式。然而，不可能使每种来源的私钥都被完整支持。这不是 Delta Chat 的主要目标。实际上，大多数新用户在使用 Delta Chat 之前根本没有密钥。不过，我们确实在尝试支持尽可能多的私钥来源。

移除私钥密码的操作取决于您用于管理 PGP 密钥的软件。对于 Enigmail，您可以在密钥管理窗口中将密码设为空值。 对于 GnuPG，您可以[通过命令行](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429)来进行设置。对于其他程序，您应该能在网上找到解决方案。

### Was Delta Chat independently audited for security vulnerabilities? {#security-audits}

The Delta Chat project underwent four independent security audits and one
independent security analysis, from most recent to older: 

- 2024 March, we received a deep security analysis from the Applied Cryptography
  research group at ETH Zuerich and addressed all raised issues. 
  See our blog post about [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) for more detailed information and the
  [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
  research paper published afterwards. 

- 2023 April, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023.
  See [here for the full background story on end-to-end security in the web](https://delta.chat/en/2023-05-22-webxdc-security).

- 2023 March, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

- 2020, [Include Security](https://includesecurity.com) analyzed Delta
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

- 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).



## 多客户端 {#multiclient}

### 我能同时在多个设备上使用 Delta Chat 吗?

Yes. Delta Chat 1.36 comes with a new, experimental function for using the same profile on different devices:

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

- On **Windows**, go to **Control Panel / Network and Internet**
  and make sure, **Private Network** is selected as "Network profile type"
  (after transfer, you can change back to the original value)

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- **Guest Networks** may not allow devices to communicate with each other.
  If possible, use a non-guest network.

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple profiles per device, just [add another profile](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer {#backup}

This method is only recommended if "Add Second Device" as described above does not work.

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, in the "I already have a profile" menu,
  choose "restore from backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  end-to-end encrypted messages with your communication partners.

### 有推出 Delta Chat Web 客户端的计划吗？

- 目前没有计划，但有一些初步的想法。
- 有 2-3 种途径来实现 Delta Chat Web 客户端，但是它们都需要巨大的工作量。目前，我们专注于将稳定的版本作为本地应用程序发布到所有应用程序商店（Google Play/iOS/Windows/macOS/Linux 仓库）。
- 如果是因为不能在工作的电脑上安装软件而需要一个 Web 客户端，您可以使用便携版的 Windows 桌面客户端，或者在 Linux 上使用 AppImage 版。您可以在 [get.delta.chat](https://get.delta.chat) 找到它们。


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

We are very grateful for feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. 
You may conveniently login via Delta Chat and a QR code scan,
another rather stable experiment we run on the side (sic!).

### 怎样在 Delta Chat 中使用音频/视频通话？

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "Video Chat Instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to the video chat. 
  This way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### 什么是广播列表？怎样使用它们？

- 使用广播列表，您可以一次性将一条消息发送给多个接收者；当他们回复您时，回复会出现在您与他们的直接 1 对 1 聊天中。 接收者之间无法相互看到。 
- 从技术上讲，它是密件抄送了许多收件人的电子邮件。 
- 您可以在高级设置的“实验性功能”部分启用该功能。启用后，您便能在“新建聊天”对话框中新建广播列表了。
- 在使用多台设备的情况下，目前广播列表不会在它们之间同步。
- 发送到广播列表的消息不会被加密。加密会使接收者们知道还有谁收到了消息，进而破坏了匿名性（出于发送速率限制和网络消耗的原因，向每个人发送单独的邮件会更糟）。


### 如何与聊天伙伴分享位置？

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat partners.
  Map tiles are downloaded from [OpenStreetMap](https://openstreetmap.org).
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### 为什么我可以选择只监视 DeltaChat 文件夹？

这是提供给尝试服务器端规则的人的实验性设置。在使用某些电子邮件提供商时，您可以将所有带有"Chat-Version"头的邮件移入 DeltaChat 文件夹。并不是所有的提供商都支持此操作；通常情况下，这是由 Delta Chat 应用完成的。

启用“只从 DeltaChat 文件夹获取”是有意义的，仅当您**同时**完成了：

- 已经启用了将带有 Chat-Version 头的所有消息移入 DeltaChat 文件夹的服务器端规则；和
- 已将“显示传统电子邮件”设置为“不显示，仅聊天”。

在这种情况下，Delta Chat 不需要监视收件箱，只监视 DeltaChat 文件夹就足够了。


### 如何将我的账户迁移到一个不同的电子邮件地址？

1. Change your address in “Settings → Advanced → Password and Account” and
   enter the password of your new e-mail account (and if necessary, server settings).
   You will get an information notice about the fact that you are moving to a new address. 
   An additional notice will also show up in your "Device messages" chat. 

2. If possible, let your old e-mail provider forward all messages to your new address.

3. Tell your contacts that you changed your address. 
   Writing to guaranteed end-to-end encrypted chats and groups,
   will make them notice your move automatically 
   and they will continue chatting with you using your new address. 

Note that Delta Chat will not retrieve messages anymore from your old e-mail provider.
If you didn't configure your e-mail provider to forward messages (step 2.) 
only those contacts to whom you sent a message in a guaranteed end-to-end encrypted chat
will send messages to your new address. 

To learn more about this the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## 杂项

### Delta Chat 需要哪些权限？

根据使用的操作系统，系统可能会要求您向本应用授予权限。下面 Delta Chat 使用各类权限进行的操作：

- Camera *(can be disallowed)*
  - take pictures and videos: for sending Photos
- Contacts *(can be disallowed)*
  - read your contacts: to discover contacts to chat with
- Location *(can be disallowed)*
  - access approximate location (network location sources): for the location streaming feature
  - access precise location (GPS and network location sources): for the location streaming feature
- Microphone *(can be disallowed)*
  - record audio: for audio messages
- Storage *(can be disallowed)*
  - modify or delete the contents of your SD card: to download message attachments
  - read the contents of your SD card: to share files with your contacts
- Other app capabilities
  - change your audio settings: so you can choose ring tones and volume for notifications and audio messages
  - run at startup: so you don't have to start Delta Chat manually
  - control vibration: for notifications
  - view network connections: to connect to your E-Mail provider
  - prevent phone from sleeping: so you can easier copy the security code during the Autocrypt Setup Message
  - have full network access: to connect to your E-Mail provider
  - view Wi-Fi connections: to connect to your E-Mail provider
  - ask to ignore battery optimisations: for achieving "instant message delivery"


### Delta Chat 可用于 _我的_ 电子邮件提供商吗？

- 有很大的可能性是：可以的 :) 
  不过，某些提供商需要一些特殊设置才能正常工作，请参阅[提供商概览](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### 为什么我必须在 Delta Chat 中输入我的电子邮件密码？ 这样安全吗？

与其他电子邮件程序（比如 Thunderbird、K9-Mail 或 Outlook）一样，本程序需要您的密码来允许您通过它发送邮件。当然，密码仅储存在您的设备上，并只会在登录时发送给您的电子邮件提供商（无论如何，您的提供商总是能够访问您的邮件）。

由于 Delta Chat 是开源的，要验证您的凭据是否被安全地处理了，可以检查[源代码](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)。我们很高兴能收到使本应用对我们的所有用户更加安全的反馈。


### 哪些消息会在 Delta Chat 中出现？

默认情况下， Delta Chat 会显示所有电子邮件。

At "Settings → Advanced → Show Classic E-Mails",
you can change this. You have these options:

- “不显示，仅聊天”：只显示由其他 Delta Chat 用户发送的消息和对您 Delta Chat 消息的回复。这在电子邮件地址同时用于处理普通邮件的情况下很有用。
- “全部”：Delta Chat 会显示发送到您电子邮件地址的所有邮件。用于您希望使用 Delta Chat 处理所有电子邮件的情况，这样就不会有消息被落下了。默认设置。
- “已接受的联系人”：Delta Chat 会显示已有聊天的联系人的所有电子邮件，而新聊天只会为 Delta Chat 消息弹出。可用于希望逐一决定是在 Delta Chat 中还是在“普通”电子邮件应用中对话的情况。


### Delta Chat 支持 HTML 电子邮件吗？

是的，收到的 HTML 邮件会有一个 "显示完整消息 "按钮。 
发出的邮件始终使用纯文本。


### Can I set the E-Mail Subject with Delta Chat?

Delta Chat sets (and [encrypts](#message-metadata)!) the classic e-mail subject
automatically to  the group name or to the sender name.

So if you want to set the subject yourself,
for example for a formal e-mail to a business contact,
you can create a group
with only yourself and the recipient(s).
Set the Chat Title to the Subject you want,
and then send your e-mail as the first message.
If the recipients don't use Delta Chat,
it will look like a normal,
formal e-mail to them.
You will get bonus professionalism points
if you set a [signature text](#signature).


### “给自己发送副本”设置有什么用处？

向自己发送消息的副本可以确保您在所有设备上收到自己的消息。如果您在使用多台设备时没有打开此设置，那么您将只能看到其他人发过来的消息和您从当前设备发出的消息。

副本会被发送到收件箱，然后会被移动到 DeltaChat 文件夹；它不会被放到“已发送”文件夹里。Delta Chat *从不* 将东西上传到已发送文件夹，因为这意味着上传一条消息两次（一次通过 SMTP，一次通过 IMAP 到已发送文件夹）。

"给自己发送副本"的默认设置为 "开"。


### 为什么我可以选择监视“已发送”文件夹？

监视已发送文件夹的唯一原因是：您在使用Delta Chat软件的同时也使用其他的邮件应用程序（比如 Thunderbird），并且想让邮件分发代理参与聊天对话。

不过，我们推荐使用 Delta Chat 桌面客户端；您可以在 [get.delta.chat](https://get.delta.chat) 下载它。监视“已发送”文件夹的选项是在还没有 Delta Chat 桌面客户端的时候引入的，这个选项可能会在未来消失。


### 为什么我可以选择不监视 DeltaChat 文件夹？

有些人将 Delta Chat 用作常规电子邮件客户端并希望将收件箱文件夹用于其邮件，而不是使用 DeltaChat 文件夹。如果禁用了“监视 DeltaChat 文件夹”，则还应该禁用“将聊天消息移动到 DeltaChat”。否则，删除消息或多设备设置可能无法正常工作。


### Delta Chat 与 Protonmail / Tutanota / Criptext 兼容吗？

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be end-to-end
  encrypted, though. The end-to-end encryption those providers offer is not
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can end-to-end-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### 如何删除我的账户？ {#remove-account}

If you use a default chat profile
you can simply uninstall the app.
This will automatically trigger deletion of all associated account data on the chatmail server.
For more info, please refer to [nine.testrun.org account-deletion](https://nine.testrun.org/info.html#account-deletion) for the default onboarding server,
or the respective page from your chosen [3rd party chatmail server](chatmail).

If you have set up your chat profile on multiple devices
you need to remove it from all devices.

If you are using more than one account,
but don't want to get rid of all of them,
you can remove it in the account switcher menu (on android and iOS),
or in the sidebar with a right click (in the desktop client).

Accounts on [classic e-mail providers](https://providers.delta.chat)
will not be deleted automatically;
how you can delete your account depends on your e-mail provider.
We don't have any control over e-mail accounts at those providers,
so unfortunately we can't help you with that.

If you want to continue using a classic e-mail account with other apps,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.
Otherwise you might receive undecryptable messages from those group chats.


### 我对技术细节很感兴趣。能告诉我更多吗？

- 请参阅 [Delta Chat 中使用的标准]({% include standards-url %})。


### Delta Chat 的开发是如何被资助的? 

Delta Chat 没有接受风险投资，也没有负债累累，更没有承受产生巨额利润或将用户及其朋友和家人卖给广告商（或更糟）的压力。我们宁愿使用目前来自欧盟和美国的公共资金，来帮助我们努力建立一个基于自由开源社区开发的、去中心化的、多样化的聊天消息软件生态系统。 

具体来说，到目前为止，对 Delta Chat 开发的资助有这些来源：

- [NEXTLEAP](https://nextleap.eu)欧盟项目资助了以下研究和实施工作：在 2017 年和 2018 年实施的验证组和设置联系协议和通过 [Autocrypt](https://autocrypt.org)整合了端到端加密。

- 在[开放技术基金](https://opentechfund.org) 2018/2019 年提供的第一笔赠款（约 20 万美元）期间，我们显著改善了安卓应用，发布了第一个桌面测试版，并根据人权方面的用户体验研究进行了功能开发，请参阅我们的结论[《需求发现与用户体验报告》](https://delta.chat/en/2019-07-19-uxreport)。2019/2020 年的第二笔赠款（约 30 万美元）对发布 Delta/iOS 版本，将核心库转换到 Rust ，以及为所有平台开发新功能提供了帮助。

- [NLnet 基金会](https://nlnet.nl/) 2019/2020 年拨款 4.6 万欧元，用于完成 Rust/Python 绑定并建立聊天机器人生态系统。 

- 在 2021 年，我们从两项下一代互联网提案收到了欧盟的进一步资助，即 [EPPD - 电子邮件提供商可移植性目录](https://dapsi.ngi.eu/hall-of-fame/eppd/)（约 9.7 万欧元）和 [AEAP - 电子邮件地址移植](https://nlnet.nl/project/EmailPorting/)（约 9 万欧元）。这带来了更好的多账户支持，改进的二维码联系人和群组设置，和所有平台上的多处网络改进。

- 从 2021 年底到 2023 年 3 月，我们从美国民主、人权和劳工局（DRL）获得了*互联网自由*资金（50 万美元）。这笔资金支持了我们的长期目标，即让Delta Chat 更好用，并与全球范围内的各种电子邮件服务器兼容，而且在经常受到互联网审查制度影响的地方更具弹性和安全性。

- 从 2023 年开始，我们的 "私有去中心化应用程序 "提案获得了 下一代互联网(NGI)托付计划的青睐。 具体金额待定（约 10 万欧元）。这笔资金将支持[webxdc "聊天共享应用程序"](https://webxdc.org)的进一步开发。 

- 我们有时会收到个人的一次性捐款。 例如，2021 年，一位慷慨的人士以 "继续保持良好的发展态势！"为主题通过银行向我们捐赠了4千欧元💜。 我们用这些钱来资助发展活动或支付不容易预测或从公共基金中报销的临时费用。收到更多的捐款也有助于我们作为一个贡献者社区变得更加独立和长期可持续。

  [捐助钱款](donate){: .cta-button}

- 最后但并非最不重要的是，数位专家与热心人在没有收到或仅收到少量金钱的情况下为 Delta Chat 的开发做出了贡献。没有他们，Delta Chat 不会发展到、甚至无法接近目前的状况。

上面提到的钱款资助主要是由在弗赖堡（德国）的 merlinux GmbH 组织的，分发给了来自世界各地的十多位贡献者。

请参阅 [Delta Chat 捐款渠道]（捐款）
以了解货币捐款和其他捐款的可能性。  
