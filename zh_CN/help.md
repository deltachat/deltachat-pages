---
title: 常见问题
lang: zh_CN
render_toc: true
header: 常见问题
---


## 什么是 Delta Chat？

Delta Chat is a reliable, decentralized and secure instant messaging app,
available for mobile and desktop platforms.

- Instant creation of **private chat profiles**
  with secure and interoperable [chatmail relays](https://chatmail.at/relays)
  that offer instant message delivery, and Push Notifications for iOS and Android devices.

- Pervasive [multi-profile](#multiple-accounts) and
  [multi-device](#multiclient) support on all platforms
  and between different [chatmail apps](https://chatmail.at/clients).

- Interactive [in-chat apps](#webxdc) for gaming and collaboration

- [Audited end-to-end encryption](#security-audits)
  safe against network and server attacks.

- Free and Open Source software, both app and server side,
  built on [Internet Standards]({% include standards-url %}).


### How can I find people to chat with? {#howtoe2ee}

First, note that Delta Chat is a private messenger.
There is no public discovery, _you_ decide about your contacts.

- If you are **face to face** with your friend or family,
  tap the **QR Code** icon <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" />
  on the main screen.  
  Ask your chat partner to **scan** the QR image
  with their Delta Chat app.

- For a **remote** contact setup,
  from the same screen,
  click "Copy" or "Share" and send the **invite link**
  through another private chat.

Now wait while connection gets established.

- If both sides are online, they will soon see a chat
  and can start messaging securely.

- If one side is offline or in bad network,
  the ability to chat is delayed until connectivity is restored.

Congratulations!
You now will automatically use [end-to-end encryption](#e2ee) with this contact.
If you add each other to [groups](#groups), end-to-end encryption will be established among all members.


### Why is a chat marked as "Request"?

As being a private messenger,
only friends and family you [share your QR code or invite link with](#howtoe2ee) can write to you.

Your friends may share your contact with other friends,
this appears as <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Request</b>

- 需先**通过**该验证请求，用户方可发送回复。

- 若你暂无交流意愿，可直接**删除**该请求以终止对话。

- 若您选择删除某条消息请求，对方后续发来的消息仍会以「消息请求」形式显示，
以便您保留重新考虑的机会。若需彻底拒收该联系人消息，
建议直接启用 ​**Block** 功能进行屏蔽。


### How can I put two of my friends in contact with each other?

Attach the first contact to the chat of the second using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Contact**.
You can also add a little introduction message.

The second contact will receive a **card** then
and can tap it to start chatting with the first contact.


### Delta Chat 支持图像、视频和其他附件吗？

是的。 Images, videos, files, voice messages etc. can be sent using the <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment-**
or <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Voice Message** buttons

为了提高性能，默认情况下会对图像进行优化并以较小的尺寸发送，但您也可以将其作为 "文件 "发送，以保留原始图像。


### 什么是账户资料？如何在它们之间切换？ {#multiple-accounts}

A profile is **a name, a picture** and some additional information for encrypting messages.
A profile lives on your device(s) only
and uses the server only to relay messages.

首次安装Delta Chat 时，会创建第一个账户资料文件。

之后，您可以点击左上角的个人资料图像，**添加个人账户**
或**切换账户**。

You may want to use separate profiles for political, family or work related activities.

您可能还想了解 [如何在多台设备上使用同一账户资料](#multiclient)。


### 谁会看见我的个人资料图片？

您可以在设置中添加个人资料图片。如果您给您的联系人发消息或者通过二维码添加他们，他们会自动看到您的个人资料图片。

出于隐私原因，在您向他们发送消息之前，没有人会看到您的个人资料照片。


### Can I set a Bio/Status with Delta Chat? {#signature}

Yes,
you can do so under **Settings → Profile → Bio**.
Once you sent a message to a contact,
they will see it when they view your contact details.


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

You can sometimes see a **green dot** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/>
next to the avatar of a contact.
It means they were **recently seen by you** in the last 10 minutes,
e.g. because they messaged you or sent a read receipt.

So this is not a real time online status
and others will as well not always see that you are "online".


### 显示在发出消息旁边的对勾表示什么？

- **One tick** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/>
  means that the message was sent successfully to the [relay](#relays).

- **Two ticks**  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/>
  indicate your contact has read the message.

In [groups](#groups) the second tick means that at least one member has reported back having read the message.

You will only get the second tick if both you and one of the recipients who read the message
has **Settings → Chats → Read Receipts** enabled.


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

You can turn on "disappearing messages"
in the settings of a chat,
at the top right of the chat window,
by selecting a time span
between 5 minutes and 1 year.

Until the setting is turned off again,
each chat member's Delta Chat app takes care
of deleting the messages
after the selected time span.
The time span begins
when the receiver first sees the message in Delta Chat.
The messages are deleted both,
on the servers,
and in the apps itself.

请注意，只有当您信任您的聊天伙伴时，您才可以依赖“消息定时销毁”；
不怀好意的人可能会拍照，或者在删除之前以其他方式保存、复制或转发消息。

Apart from that,
if one chat partner uninstalls Delta Chat,
the (anyway encrypted) messages may take longer to get deleted from their server.


### 打开“从设备删除旧消息”后，会发生什么？ {#delold}

若要节省设备上的存储空间，可以开启自动删除旧消息

找到“聊天与媒体”设置中的“从设备删除旧消息”，在从“一小时后”到“一年后”的一系列选项中选择一个。这样，设备上 *所有* 比所选择时间长度老的消息将被删除


### How can I delete my chat profile? {#remove-account} 

If you are using more than one chat profile,
you can remove single ones in the top profile switcher menu (on Android and iOS),
or in the sidebar with a right click (in the Desktop app).
Chat profiles are only removed on the device where deletion was triggered. 
Chat profiles on other devices will continue to fully function. 

If you use a single default chat profile you can simply uninstall the app.
This will still automatically trigger deletion of all associated address data on the chatmail server.
For more info, please refer to [nine.testrun.org address-deletion](https://nine.testrun.org/info.html#account-deletion) 
or the respective page from your chosen [3rd party chatmail server](https://chatmail.at/relays).


## Groups {#groups}

Groups let several people chat together privately with **equal rights**.

Anyone can
change the group name or avatar,
[add or remove members](#addmembers),
set [disappearing messages](#ephemeralmsgs),
and [delete their own messages](#edit) from all member's devices.

Because all members have the same rights, groups work best among **trusted friends and family**.


### 创建群组

- 从右上角的菜单中选择**新建聊天**，然后选择**新建群组**或在 Android/iOS 上点击相应的按钮。
- 在随后的屏幕上，选择**群组成员**并起一个**群组名称**。您也可以选择一个**群组头像**。
- 当您在群组中发送**第一条消息**时，所有成员都会被告知新群组的信息并可以在该群组中应答（只要您不在群组中发送第一条消息，那么群组对成员就是不可见的）。


### Add and remove members {#addmembers}

- All group members have the **same rights**.
  For this reason, everyone can delete any member or add new ones.

- To **add or delete members**, tap the group name in the chat and select the member to add or remove.

- If the member is not yet in your contact list, but **face to face** with you,
  from the same screen, show a **QR code**.  
  Ask your chat partner to **scan** the QR image with their Delta Chat app by tapping
  <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> on the main screen.

- For a **remote** member addition,
  click "Copy" or "Share" and send the **invite link**
  through another private chat to the new member.

QR code and invite link can be used to add several members.
However, since groups are [meant for trusted people](#groups), avoid sharing them publicly.


### 我不小心删除了我自己。

- 由于您不再是群组成员，您无法将自己加入到群组中。但是，问题不大，只需在普通聊天中请求其他群组成员将您重新加入即可。


### 我不想再收到某个群组中的消息了。

- 从成员列表中删除自己，或者删除整个聊天。如果您之后想再加入该群组，请让其他群组成员添加您。

- 另外，您也可以“静音”群组——这样做意味着您会收到所有消息并且仍可以编写消息，但不会再收到任何新消息的通知。

### Cloning a group

You can duplicate a group to start a separate discussion
or to exclude members without them noticing.

- Open the group profile and tap **Clone Chat** (Android/iOS),
  or right-click the group in the chat list (Desktop).

- Set a new name, choose an avatar, and adjust the member list if needed.

The new group is **fully independent** from the original,
which continues to work as before.


### How many members can participate in a single group?

There is no strict technical limit,
but more than 150 is not recommended.

As groups get larger, they can become socially unstable and may need a hierarchy -
where Delta Chat is a private messenger for chatting with [equal rights](#groups).
See [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number) for more insights.


## In-chat apps {#webxdc}

You can send apps to a chat - games, editors, polls and other tools.
This makes Delta Chat a truly extensible messenger.


### Where can I get in-chat apps?

- In a chat, using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Apps**

- You can also [create your own app](#create-xdc) and attach it using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → File**


### How private are in-chat apps?

- In-chat apps can not send data to the Internet, or download anything.

- An in-chat app can only exchange data within a chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.

- The privacy an in-chat app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the in-chat app as well.

- This also means: Just like for web links, do not open apps from untrusted contacts.


### How can I create my own in-chat apps? {#create-xdc}

- In-chat apps are zip files with `.xdc` extension containing html, css, and javascript code.

- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.

- All else you need to know is written in the
  [Webxdc documentation](https://webxdc.org/docs).

- If you have question, you can ask others with experience
  in the [Delta Chat Forum](https://support.delta.chat/c/webxdc/20).


## 即时消息传递和推送通知 {#instant-delivery}

### 什么是推送通知？如何获得即时消息传递？

推送通知由 Apple 和 Google 的“推送服务”发送到用户的设备，以便非活动状态的 Delta Chat 应用可以在后台获取消息，并在需要时在用户的手机上显示通知。

推送通知适用于以下所有 [chatmail](https://delta.chat/chatmail) 服务器：

- iOS 设备通过与 Apple Push 服务集成。

- Android 设备，通过与 Google FCM Push 服务集成，
包括使用 [microG](https://microg.org)
而不是手机上专有 Google 代码的设备。


### iOS 设备上是否启用了推送通知？我还有其他的选择吗？

是的，Delta Chat 会自动使用推送通知来接收 [chatmail](https://delta.chat/chatmail) 个人资料。
而且，Apple 手机上没有其他方式可以实现即时消息传递
因为 Apple 设备不允许 Delta Chat 在后台获取数据。
推送通知会自动为 iOS 用户激活，因为
[Delta Chat 的隐私保护推送通知系统](#privacy-notifications)
不会向 Apple 泄露其尚未拥有的数据。


### Android 设备上是否启用/需要推送通知？ {#android-push}

If a "Push Service" is available, Delta Chat enables Push Notifications
to achieve instant message delivery for all chatmail users.

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

Delta Chat Push Notification support avoids leakage of private information.
It does not leak profile data, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

以下是 Delta Chat 应用如何执行推送通知传递：

- Delta Chat 应用在本地获取“设备令牌”，对其进行加密并将其存储在
[Chatmail](https://delta.chat/chatmail) 服务器上。

- When a [chatmail](https://delta.chat/chatmail) server receives a message for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or profile data of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the profile data of the device it wakes up.
  The central Apple/Google Push services never see any profile data (sender or receiver)
  and also never see any message content (also not in encrypted forms).


中央 Delta Chat 通知代理[体积小，完全用 Rust 实现](https://github.com/deltachat/notifiers)
，并在 Apple/Google 等处理设备令牌后立即忘记它们，
通常在几毫秒内。

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees profile data, IP-addresses or
any cryptographic identity information associated with a user's device (token). 

由此产生的整体隐私设计，即使查封 Chatmail 服务器，
或完全查封中央 Delta Chat 通知代理
也不会泄露推送服务尚未拥有的私人信息。


### 为什么 Delta Chat 与集中式专有的 Apple/Google 推送服务集成？

Delta Chat 是一款免费且开源的去中心化即时通讯应用，用户可以自由选择服务器，
但我们希望用户可靠地体验到“即时消息传递”，
就像他们从 Whatsapp、Signal 或 Telegram 应用体验到的那样，
而无需预先提出更适合专家用户或开发人员的问题。

Note that Delta Chat has a [small and privacy-preserving Push Notification system](#privacy-notifications)
that achieves "instant delivery" of messages for all chatmail servers
including a potential one [you might setup yourself without our permission](https://delta.chat/chatmail#selfhosted).
Welcome to the power of the interoperable chatmail relay network :)



## 多客户端 {#multiclient}

### 我能同时在多个设备上使用 Delta Chat 吗?

是的，您可以在不同设备上使用相同的配置文件：

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

- 在 **Windows** 上，转到"控制面板 / 网络和 Internet"
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

- 在旧设备上，转到“设置 -> 聊天和媒体 -> 导出备份”。 输入你的 屏幕解锁 PIN 码、图案或密码。 然后你可以点击“开始 备份”。 这会将备份文件保存到你的设备。 现在你必须 以某种方式将其传输到另一台设备。

- 在新设备上，在“我已经有一个配置文件”菜单中，选择“从备份还原”。 导入后，你的对话、加密 密钥和媒体应复制到新设备。
如果你使用 iOS： 并且你遇到困难，也许 [本指南](https://support.delta.chat/t/import-backup-to-ios/1628) 将 帮助你。

你现在已同步，并且可以使用两台设备与你的通信伙伴发送和接收 端到端加密消息。


### 有推出 Delta Chat Web 客户端的计划吗？

- 目前没有计划，但有一些初步的想法。
- 有 2-3 种途径来实现 Delta Chat Web 客户端，但是它们都需要巨大的工作量。目前，我们专注于将稳定的版本作为本地应用程序发布到所有应用程序商店（Google Play/iOS/Windows/macOS/Linux 仓库）。
- 如果是因为不能在工作的电脑上安装软件而需要一个 Web 客户端，您可以使用便携版的 Windows 桌面客户端，或者在 Linux 上使用 AppImage 版。您可以在 [get.delta.chat](https://get.delta.chat) 找到它们。


## Advanced

### Experimental Features

At **Settings → Advanced → Experimental Features**
you can try out features we are working on.

The features may be **unstable** and may be **changed or removed**.

You can find more information
and give feedback in the [Forum](https://support.delta.chat).


### What are Relays? {#relays}

Relays are used to temporarily hold messages in case your device is offline.
Relays are cheap and dumb servers,
that do not store data as group states, your name or avatar -
all that exist only on your device.
Relays are operated by different groups and people.

By default, after installation, a relay is **automatically set up**,
so you do not need to care about that.
However, if you want to,
you can configure relays at At **Settings → Advanced → Relays**:

- You can **add** a relay by scanning its QR code;
  <https://chatmail.at/relays> shows some known ones.
  If you have multiple relays, you will receive messages on all of them.

- The **default** defines the one where your chat partners send future messages to.

- If you **remove** a relay,
  make sure another default relay was used for a sufficient amount of time.
  Otherwise, messages from your chat partners won't reach you.
  If in doubt, remove later.

For more details and future possibilities of relays,
you can follow discussions in the [Forum](https://support.delta.chat).


### Can I use a classic email address with Delta Chat?

Yes, but only if the email address is used exclusively by [chatmail clients](https://chatmail.at/clients).

It is not supported to share usage of an email address with non-chatmail apps or web-based mailers,
for the following reasons:

- Non-chatmail apps are largely not accomplishing automatic end-to-end email encryption for their users,
  while chatmail apps and relays pervasively enforce end-to-end encryption and security standards.

- Non-chatmail apps use email servers as a long-term message archive
  while chatmail clients use email servers for ephemeral instant message relay.

- Supporting the full variety of classic email setups
  would require considerable development and maintenance efforts,
  and complicate making chatmail-based messaging more resilient, reliable and fast.

### How can I configure a chat profile with a classic email address as relay? {#classic-email}

First off, **please do not use the same classic email address also from non-chatmail classic email apps**
unless you are prepared to deal with encrypted messages in the inbox,
double notifications, accidentally deleted emails or similar annoyances.

You can configure a email address for chatting at **New Profile → Use Other Server → Use Classic Mail as Relay**.
Note that classic email providers will generally not support [Push Notifications](#instant-delivery)
and have other limitations, see [Provider Overview](https://providers.delta.chat).
Chatmail uses the default INBOX for relay; ensure the provider setup does too. 
A chat profile using a classic email address allows to to send and receive unencrypted messages.
These messages, and the chats they appear in, are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### I want to manage my own server for Delta Chat. What do you recommend?

Any well behaving email server setup will do fine 
except if your users' devices require Google/Apple [Push Notifications](#instant-delivery) to work properly.

We generally recommend to [set up a chatmail relay](https://chatmail.at/doc/relay/getting_started.html). 
[Chatmail](https://chatmail.at) is a community-driven project that encompasses both the setup of relays
and [core Rust developments](https://github.com/chatmail/core) 
that power [chatmail clients](https://chatmail.at/clients) of which Delta Chat is the most well known. 


### What is "Send statistics to Delta Chat's developers"? {#statssending}

We would like to improve Delta Chat with your help,
which is why Delta Chat for Android asks whether you want
to send anonymous usage statistics.

You can turn it on and off at
**Settings → Advanced → Send statistics to Delta Chat's developers**.

When you turn it on,
weekly statistics will be automatically sent to a bot.

We are interested e.g. in statistics like:

- How many contacts are introduced by personally scanning a QR code?

- Which versions of Delta Chat are being used?

- What errors occur for users?

We will _not_ collect any personally identifiable information about you.


### 我对技术细节很感兴趣。能告诉我更多吗？

- 请参阅 [Delta Chat 中使用的标准]({% include standards-url %})。



## 加密和安全 {#e2ee}

### 端到端加密使用了哪些标准 ？ 

Delta Chat 使用 [OpenPGP 标准的安全子集](#openpgp-secure)
使用以下协议提供自动端到端加密：

- [安全加入](https://securejoin.delta.chat/en/latest/new.html)
  通过二维码扫描或“邀请链接”交换加密设置信息。

- [Autocrypt](https://autocrypt.org) is used for automatically
  用于在联系人和群聊的所有成员之间自动建立端到端加密。

- [将联系人分享到聊天中
](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  接收者可以与该联系人使用端到端加密。

Delta Chat 不会查询、发布或与任何 OpenPGP 密钥服务器交互。

### How can I know if messages are end-to-end encrypted? {#whene2e}

Delta Chat 中的所有消息 **默认都采用端到端加密**。
自 Delta Chat 版本 2 发布系列（2025 年 7 月）起， 
端到端加密消息上不再有锁或类似的标记。

### Can I still receive or send messages without end-to-end encryption?

如果您使用默认的 [chatmail 中继](https://chatmail.at/relays)，
则不可能在没有端到端加密的情况下接收或发送消息。

If you instead use a [classic email server](#classic-email),
you can send and receive messages with or without end-to-end encryption.
Messages lacking end-to-end encryption are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


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

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
but adopting them would mean breaking end-to-end encryption interoperability.
So it would not be a light decision to take 
and there must be tangible improvements for users. 

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

If you are sending or receiving email messages without end-to-end encryption (using a classic email server),
they are still protected from cell or cable companies who can not read or modify your email messages.
But both your and your recipient's email providers
may read, analyze or modify your messages, including any attachments. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your email provider.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's email provider
will typically be transport-encrypted as well.
If the involved email servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between email providers
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.


### Delta Chat 如何保护消息中的元数据？ {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

Servers can therefore only see:

- the sender and receiver addresses
- and the message size.

By default, the addresses are randomly generated.

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### 当设备被查封时，如何保护元数据和联系人？ {#device-seizure}

Both for protecting against metadata-collecting servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random addresses for transport. 
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
We don't foresee bigger problems in using random throw-away addresses for sealed sending
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

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1.
We do not recommend or offer users to perform manual key management.
We want to ensure that security audits can focus on a few proven cryptographic algorithms
instead of the full breadth of possible algorithms allowed with OpenPGP.
If you want to extract your OpenPGP key, there only is an expert method:
you need to look it up in the "keypairs" SQLite table of a profile backup tar-file.


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


## 杂项

### Delta Chat 需要哪些权限？

Some features require certain permissions,
e.g. you need to grant camera permission if you want to [scan an invite QR code](#howtoe2ee).

See [Privacy Policy](https://delta.chat/en/gdpr#24-app-permissions) for a detailed overview.


### 我的朋友在哪里可以找到 Delta Chat？

Delta Chat 适用于所有主要平台和一些次要平台：

- **官方网站**，<https://delta.chat/download> 详细显示所有选项

- 如果不可用，请使用 **镜像** <https://deltachat.github.io/deltachat-pages>

- Open one of the following **app stores and search for "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, iOS and macOS App Store, Microsoft Store

- 检查你的 Linux 发行版的 **软件包管理器**

- **Android APK** 也可在 <https://github.com/deltachat/deltachat-android/releases> 上获得


### Delta Chat 的开发是如何被资助的? 

Delta Chat 没有接受风险投资，也没有负债累累，更没有承受产生巨额利润或将用户及其朋友和家人卖给广告商（或更糟）的压力。我们宁愿使用目前来自欧盟和美国的公共资金，来帮助我们努力建立一个基于自由开源社区开发的、去中心化的、多样化的聊天消息软件生态系统。 

具体而言，Delta Chat 的开发迄今为止已从以下来源获得资金，
按时间顺序排列：

- [NEXTLEAP](https://nextleap.eu)欧盟项目资助了以下研究和实施工作：在 2017 年和 2018 年实施的验证组和设置联系协议和通过 [Autocrypt](https://autocrypt.org)整合了端到端加密。

- 在[开放技术基金](https://opentechfund.org) 2018/2019 年提供的第一笔赠款（约 20 万美元）期间，我们显著改善了安卓应用，发布了第一个桌面测试版，并根据人权方面的用户体验研究进行了功能开发，请参阅我们的结论[《需求发现与用户体验报告》](https://delta.chat/en/2019-07-19-uxreport)。2019/2020 年的第二笔赠款（约 30 万美元）对发布 Delta/iOS 版本，将核心库转换到 Rust ，以及为所有平台开发新功能提供了帮助。

- [NLnet 基金会](https://nlnet.nl/) 2019/2020 年拨款 4.6 万欧元，用于完成 Rust/Python 绑定并建立聊天机器人生态系统。 

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - email provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-profile support, improved QR-code contact and group setups and many networking improvements on all platforms.

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of email servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

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
