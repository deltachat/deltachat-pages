---
title: 常见问题
lang: zh_CN
render_toc: true
header: 常见问题
---


## 什么是 Delta Chat？

Delta Chat 是一款可靠、去中心化和安全的消息应用程序、 
适用于移动和桌面平台。

- 立即创建快速、安全、可互操作的 [chatmail 服务器](https://chatmail.at/relays) 创建匿名聊天账户
  为 iOS 和 Android 设备提供即时推送通知。 

- 跨平台且跨[邮件提供商](https://chatmail.at/clients)支持[多配置文件](#multiple-accounts) 和[多设备](#multiclient)。

🥳 在聊天中体验互动[网页应用](https://webxdc.org/)，一起游戏和协作

- [经审计的端到端加密](#security-audits) 
  安全地抵御网络和服务器攻击。 

- 免费开源软件，包括应用程序和服务器端、
  基于[互联网标准]（{% include standards-url %}）。


### 如何找到可以聊天的人？ {#howtoe2ee}

首先，请注意Delta Chat 是一个私人信使。
没有公开的发现功能，由您决定您的联系人。

- 如果您与朋友或家人**面对面**、
  点击主屏幕上的 **二维码** 图标<img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" />
  图标。  
  请您的聊天对象在 Delta Chat 上**扫描** 二维码 。

- 对于**远程**联络设置、
  在同一屏幕上，点击 "复制 "或 "分享"，然后通过另一个私聊发送**邀请链接**。

现在等待连接 建立。

- 如果双方都在线，他们很快就会看到一个聊天
  并开始安全地发送信息。

- 如果一方离线或网络状况不佳、
  聊天功能会延迟，直到恢复连接。

恭喜您！
现在您将自动与该联系人使用 [端到端加密](#e2ee)。
如果你们将对方添加到 [群组](#groups)，所有成员之间将建立端对端加密 。


### 为什么聊天被标记为 "请求"？

作为私人信使，
只有您[分享二维码或邀请链接]（#howtoe2ee）的亲朋好友才能给您写信。

您的朋友可能会与其他朋友分享您的联系方式、
这将显示为<b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">请求</b>

- 需先**通过**该验证请求，用户方可发送回复。

- 若你暂无交流意愿，可直接**删除**该请求以终止对话。

- 若您选择删除某条消息请求，对方后续发来的消息仍会以「消息请求」形式显示，
以便您保留重新考虑的机会。若需彻底拒收该联系人消息，
建议直接启用 ​**Block** 功能进行屏蔽。


### 如何让我的两个朋友相互联系？

使用<img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **附加按钮 → 联系人**，将第一个联系人附加到第二个联系人的聊天中。
您还可以添加一条小小的介绍信息。

第二个联系人将收到一张**卡**，
然后可以点击它与第一个联系人开始聊天。


### 什么是账户资料？如何在它们之间切换？ {#multiple-accounts}

一份账户资料包括**姓名、照片**和一些额外的加密信息。
个人配置只存在于您的设备(们)中
并使用聊天邮件或传统电子邮件服务器传输信息。

首次安装Delta Chat 时，会创建第一个账户资料文件。

之后，您可以点击左上角的个人资料图像，**添加个人账户**
或**切换账户**。

您可能需要为政治、家庭或工作相关活动使用单独的个人资料。

您可能还想了解 [如何在多台设备上使用同一账户资料](#multiclient)。


### 谁会看见我的个人资料图片？

您可以在设置中添加个人资料图片。如果您给您的联系人发消息或者通过二维码添加他们，他们会自动看到您的个人资料图片。

出于隐私原因，在您向他们发送消息之前，没有人会看到您的个人资料照片。


### 我可以用Delta Chat 设置个人介绍/个人照片/状态吗？ {#signature}

是的、
您可以在“设置 > 个人资料 > 签名文本”下执行此操作。
向联系人发送信息后、
他们在查看您的联系人详情时就会看到。


### 固定、静音、归档是什么意思？

使用这些工具来管理您的聊天，让其井然有序：

- **已固定聊天**会呆在聊天列表顶部。您可以利用其快速访问最喜欢的聊天或临时记下某些东西。

- **静音聊天**，如果您不想再得到关于它们的通知。被静音的聊天会呆在原地，并且您可以固定被静音的聊天。

- 如果不想再在聊天列表中看到聊天内容，**归档聊天**。
  已归档的聊天仍可在聊天列表上方或通过搜索访问。
  并标记为<b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">存档</b>

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

有时您会在联系人头像旁边看到一个**绿点**。<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/>
在联系人的头像旁边。
这意味着您在过去 10 分钟内**最近看到过他们、
例如，因为他们给您发了信息或发送了阅读回执。

因此，这不是实时在线状态
其他人也不会总是看到你 "在线"。


### 显示在发出消息旁边的对勾表示什么？

- 一勾**<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/>
  表示信息已成功发送到 [中继](#relays)。

- 两勾** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/>
  表示您的联系人已阅读信息。

在 [群组](#groups) 中，第二个"√"表示至少有一名成员报告已阅读该信息。

只有您和其中一位阅读过信息的收信人都启用了**设置 → 隐私 → 已读回执**，您才会得到第二个勾。


### 发送后更正错别字并删除邮件 {#edit}

- 已发送消息支持文本内容修改。操作时，用户只需长按（移动端）或右键单击（电脑端）目标消息，调出功能菜单后点选**Edit**或<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>即可进入编辑模式。

- 若发生消息误发情况，
可通过以下路径撤回：在当前操作菜单中，依次选择**删除**和**为所有人删除**选项。

在聊天场景中，经过编辑的消息会在时间戳旁标注“Edited”提示，
而被删除的信息则会彻底消失且不显示任何痕迹。
相关操作既不会触发系统通知，也没有规定必须在时限内完成修改。

需特别提示：若聊天成员已对消息进行过回复、转发、保存本地、截图留存或其他形式的复制操作，
即使您后续编辑了原始消息，对方设备上仍可能留存原内容。


### How is media quality handled? {#mediaquality}

Images, videos, files, voice messages etc. can be sent using the <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attach-**
or <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Voice Message** buttons.

- By default, compression ensures **fast, efficient delivery** that respects everyone's data limits and storage.
  This is ideal for everyday communication.

- In regions with worse connectivity,
  you can choose higher compression at **Settings → Chats → Outgoing Media Quality**.

- If you specifically need to send media in its **original quality**, use <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attach → File** in the chat.
  Please use this method sparingly, as sending original files will significantly increase data usage for you and all recipients in the chat.


### 消息定时销毁是如何工作的？ {#ephemeralmsgs}

您可以在聊天设置中开启 " 消息定时销毁 "功能
在聊天设置中、
聊天窗口右上方、
选择时间范围
5 分钟到 1 年之间。

在再次关闭该设置之前，
每个聊天成员的 Delta Chat 应用都会负责
在选定的时间跨度后删除消息。
时间跨度从
接收者首次在 Delta Chat 中看到消息时开始。
消息将在
服务器上的每个电子邮件帐户中以及应用本身中删除。

请注意，只有当您信任您的聊天伙伴时，您才可以依赖“消息定时销毁”；
不怀好意的人可能会拍照，或者在删除之前以其他方式保存、复制或转发消息。

但是，如果一个聊天伙伴卸载了Delta Chat 、
(加密）信息可能需要更长的时间才能从他们的服务器上删除。


### 打开“从设备删除旧消息”后，会发生什么？ {#delold}

若要节省设备上的存储空间，可以开启自动删除旧消息

找到“聊天与媒体”设置中的“从设备删除旧消息”，在从“一小时后”到“一年后”的一系列选项中选择一个。这样，设备上 *所有* 比所选择时间长度老的消息将被删除


### 如何删除我的账户？ {#remove-account}

如果您使用多个聊天配置文件、
你可以在顶部的配置文件切换器菜单中删除单个配置文件（在 Android 和 iOS 上）、
或在侧边栏中右键单击（在桌面应用中）。
聊天配置文件只会在本设备上删除。 
其他设备上的聊天配置文件将继续完整运行。 

如果您只使用一个默认聊天配置文件，可以直接卸载应用程序。
这将自动触发删除 Chatmail 服务器上的所有关联帐户数据。
有关更多信息，请参阅 [nine.testrun.org address-deletion](https://nine.testrun.org/info.html#account-deletion) 
或您选择的 [第三方 Chatmail 服务器](https://chatmail.at/relays) 的相关页面。


## 群组 {#groups}

群组允许几个人私下一起聊天，他们享有**相同的权力**。

任何人都可以
更改群组名称或头像、
[添加或删除成员]（#addmembers）、
设置[消息自动销毁]（#ephemeralmsgs）、
[删除自己的信息](#edit)。

由于所有成员都拥有相同的权力，因此群组在**信任的朋友和家人**之间效果最佳。


### 创建群组

- 从右上角的菜单中选择**新建聊天**，然后选择**新建群组**或在 Android/iOS 上点击相应的按钮。

- 在随后的屏幕上，选择**群组成员**并起一个**群组名称**。您也可以选择一个**群组头像**。

- 当您在群组中发送**第一条消息**时，所有成员都会被告知新群组的信息并可以在该群组中应答（只要您不在群组中发送第一条消息，那么群组对成员就是不可见的）。


### 添加和删除成员 {#addmembers}

所有群组成员都拥有**相同的权限。
因此，每个人都可以删除任何成员或添加新成员。

- 要**添加或删除成员**，请点击聊天中的群组名称，然后选择要添加或删除的成员。

- 如果会员还不在您的联系人列表中，但可以**与您面对面**、
  在同一屏幕上，显示**二维码**。  
  在 Delta Chat 主屏幕上点击。

- 如需添加**远程**成员、
  点击 "复制 "或 "分享"，然后通过另一个私聊向新会员发送**邀请链接**。

二维码和邀请链接可用于添加多个成员。
不过，由于群组是[为信任的人准备的](#groups)，因此应避免公开分享。


### 我不小心删除了我自己。

由于您不再是群组成员，您无法将自己加入到群组中。但是，问题不大，只需在普通聊天中请求其他群组成员将您重新加入即可。


### 我不想再收到某个群组中的消息了。

- 从成员列表中删除自己，或者删除整个聊天。如果您之后想再加入该群组，请让其他群组成员添加您。

另外，您也可以“静音”群组——这样做意味着您会收到所有消息并且仍可以编写消息，但不会再收到任何新消息的通知。

### 克隆群组

您可以复制一个组以开始单独的讨论
或在不被成员察觉的情况下排除成员。

- 打开群组配置文件，然后点击 ** 克隆聊天** （Android/iOS）、
  或右键单击聊天列表中的群组（桌面）。

- 设置新名称、选择头像，并根据需要调整成员名单。

新群组与原群组完全独立、
新群组将一如既往地工作。


#### 一个小组可以有多少成员？

没有严格的技术限制、
但不建议超过 150 个。

随着群体规模的扩大，他们的社会地位可能会变得不同，可能需要一个等级制度。
其中Delta Chat 是与[平等权利](#groups) 聊天的私人信使。
相关知识，请参阅[邓巴数](https://en.wikipedia.org/wiki/Dunbar%27s_number)。


## Webxdc 应用 {#webxdc}

您可以向聊天发送应用程序--游戏、编辑器、投票和其他工具。
这使得Delta Chat 成为一个真正可扩展的聊天工具。


### 我在哪里可以获得 Webxdc 应用？

- 在聊天中，使用<img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **附件按钮 → 应用程序**

- 您还可以[创建自己的应用程序]（#create-xdc），并使用<img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **附件按钮 → 文件**附加它。


### Webxdc 应用的隐私性如何？

- 聊天应用程序不能向互联网发送数据，也不能下载任何东西。

- 聊天中的应用程序只能在对话中交换数据，其可以与
  聊天对象设备上的副本进行数据交换。除此之外，它完全
  与互联网隔离。

- 聊天应用提供的隐私保护仅限于您的聊天隐私——只要您

只要您信任与您聊天的人，您也可以信任聊天应用本身。

- 这也意味着：就像网页链接一样，不要打开来自不可信联系人的应用程序。


### 如何创建自己的 WebXDC 应用？{#create-xdc}

- 聊天应用程序是以`.xdc`为扩展名的压缩文件，包含 html、css 和 javascript 代码。

- 您可以扩展 [Hello World 示例应用程序](https://github.com/webxdc/hello)
  来快速入门。

- 您需要了解的所有其他信息都写在
  [Webxdc 文档](https://webxdc.org/docs)。

- 如果您有问题，可以在 [Delta Chat 论坛]        (https://support.delta.chat/c/webxdc/20)。


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

如果推送服务可用，Delta Chat 会启用推送通知
为所有聊天邮件用户发送即时信息。

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

Delta Chat 推送通知支持可避免泄漏私人信息。
它不会将个人资料数据、IP 地址或信息内容（即使是加密的）泄露给参与通知推送的任何系统。

以下是 Delta Chat 应用如何执行推送通知传递：

- Delta Chat 应用在本地获取“设备令牌”，对其进行加密并将其存储在
[Chatmail](https://delta.chat/chatmail) 服务器上。

- 当 [chatmail](https://delta.chat/chatmail) 服务器收到Delta Chat 用户的信息时
  就会将加密设备令牌转发到Delta Chat 中央通知代理。

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


## 高级

## 实验性功能 {#experiments}

在**设置 → 高级 → 实验功能**
您可以试用我们正在开发的功能。

这些功能可能**不稳定**，可能会**更改或删除**。

您可以在 [论坛](https://support.delta.chat) 提供反馈。


### 什么是中继服务器？ {#relays}

中继服务器用于在您的设备离线时临时保存消息。

中继服务器是廉价且功能简单的服务器，

它们不会存储群组状态、您的姓名或头像等数据——

这些数据仅存在于您的设备上。

中继服务器由不同的团队和个人运营。

默认情况下，安装完成后会自动设置中继服务器，

因此您无需担心。

但是，如果您需要，

可以在“设置 → 高级 → 中继服务器”中配置：

- You can **add** a relay by scanning its QR code;
  [chatmail.at/relays](https://chatmail.at/relays) shows some known ones.
  If you have multiple relays, you will receive messages on all of them.
  Contacts learn your current relays automatically when you message them.

- Tap on a relay to set it as **used for sending**.

- If you **remove** a relay,
  contacts who only know this relay may not reach you until you message them again.
  To stay reachable in the meantime, choose **Hide from Contacts** in the confirmation dialog
  instead of removing it right away.

- To **show** a hidden relay again, tap on it.

有关中继服务器的更多细节和未来可能性、
您可以关注 [论坛](https://support.delta.chat) 中的讨论。


#### 我可以在Delta Chat 中使用传统电子邮件吗？

可以，但前提是该电子邮件地址只能由 [chatmail 客户端](https://chatmail.at/clients) 使用。

不支持与非聊天邮件应用程序或网络邮件程序共享电子邮件地址、
原因如下：

- 非聊天邮件应用程序在很大程度上无法为用户实现自动端到端电子邮件加密 、
  而 Chatmail 则普遍执行端到端加密 和安全标准。

- 非聊天邮件应用程序使用电子邮件服务器作为长期信息存档
  而聊天邮件客户端使用电子邮件服务器作为短暂的即时信息中继。

- 支持各种经典的电子邮件设置
  需要大量的开发和维护工作、
  这将使基于聊天邮件的信息传送变得更加灵活、可靠和快速。

#### 如何使用经典电子邮件地址作为中继配置聊天配置文件？ {#classic-email}

首先，**请不要在非 Chatmail 经典电子邮件应用程序中使用相同的经典电子邮件地址**。
除非你准备好处理收件箱中的加密邮件、
双重通知、误删邮件或类似的烦恼。

您可以在 ** 新配置文件 → 使用其他服务器 → 使用经典邮件作为中继** 配置用于聊天的电子邮件地址。
请注意，经典电子邮件提供商一般不支持 [推送通知](#instant-delivery)
并有其他限制，请参阅[提供商概述](https://providers.delta.chat)。
Chatmail 使用默认的 INBOX 进行中继；请确保提供商的设置也是如此。 
使用传统电子邮件地址的聊天配置文件允许收发未加密信息。
这些信息及其在聊天中出现的信息都会用电子邮件图标标记
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


#### 我想管理自己的服务器Delta Chat 。您有什么建议？

任何表现良好的电子邮件服务器设置都可以正常工作 
除非用户的设备需要 Google/Apple [推送通知](#instant-delivery) 才能正常工作。

我们通常建议您[设置一个聊天邮件中继服务器](https://chatmail.at/doc/relay/getting_started.html)。

[Chatmail](https://chatmail.at)是一个社区驱动的项目，涵盖了中继的设置

以及[核心Rust开发](https://github.com/chatmail/core)

这些核心Rust开发为[聊天邮件客户端](https://chatmail.at/clients)提供支持，其中Delta Chat是最知名的客户端。


#### 什么是 "向Delta Chat'开发人员发送统计数据"？ {#statssending}

我们希望在您的帮助下改进Delta Chat 、
这就是为什么Delta Chat for Android 会询问您是否希望
发送匿名使用统计数据。

您可以在以下位置打开或关闭它
**设置 → 高级 → 将统计数据发送给Delta Chat 的开发人员**。

打开后
每周统计数据将自动发送到机器人。

我们感兴趣的统计数据包括

- 通过亲自扫描二维码，有多少人被介绍认识？

- 使用的是Delta Chat 的哪些版本？

- 用户出现哪些错误？

我们**不会**收集您的任何个人身份信息。


### 我对技术细节很感兴趣。能告诉我更多吗？

请参阅 [Delta Chat 中使用的标准]({% include standards-url %})。



## 加密和安全 {#e2ee}

### 端到端加密使用了哪些标准 ？ 

Delta Chat 使用 [OpenPGP 标准的安全子集](#openpgp-secure)
使用以下协议提供自动端到端加密：

- [安全加入](https://securejoin.delta.chat/en/latest/new.html)
  通过二维码扫描或“邀请链接”交换加密设置信息。

- [Autocrypt](https://autocrypt.org) is used for automatically
  用于在联系人和群聊的所有成员之间自动建立端到端加密。

- [Autocrypt v2](https://autocrypt2.org)，计划于 2026 年全面实施、 
  将带来后量子抗加密 和前向保密。 

- [将联系人分享到聊天中
](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  接收者可以与该联系人使用端到端加密。

Delta Chat 不会查询、发布或与任何 OpenPGP 密钥服务器交互。

#### 我如何知道信息是否经过端到端加密？{#whene2e}

Delta Chat 中的所有消息 **默认都采用端到端加密**。
自 Delta Chat 版本 2 发布系列（2025 年 7 月）起， 
端到端加密消息上不再有锁或类似的标记。

### 没有端到端加密 ，我还能接收或发送信息吗？

如果您使用默认的 [chatmail 中继](https://chatmail.at/relays)，
则不可能在没有端到端加密的情况下接收或发送消息。

如果您使用的是 [classic 电子邮件服务器](#classic-email)、
您可以发送和接收带有或不带端到端加密 的邮件。
没有端到端加密 的邮件会用电子邮件图标标出
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### 联系人资料中的绿色复选标记是什么意思？ {#e2eeguarantee}

带有绿色复选标记的联系人配置文件
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="绿色复选标记" />
表示当前保证与联系人的消息传递是端到端加密的。
每个带有绿色复选标记的联系人要么直接与你进行了 [二维码扫描](#howtoe2ee)，
要么由另一个带有绿色复选标记的联系人介绍。
当向群组添加成员时，介绍会自动发生。
任何将联系人添加到带有绿色复选标记的群组的人都成为
那些还不认识添加的联系人的成员的介绍人。
在联系人配置文件中，你可以反复点击“由...介绍”文本
，直到你到达直接与你进行 [二维码扫描](#howtoe2ee) 的那个人。

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

是的，Delta Chat 使用的是 OpenPGP 的一个安全子集，

它要求整条消息都必须经过正确的加密和签名。

例如，“分离式签名”不被视为安全。

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


#### 您是否考虑过使用 OpenPGP 的替代版端到端加密 ？{#openpgp-alternatives}

是的，我们正在关注 [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)等努力。
但采用它们将意味着破坏端到端加密 的互操作性。
因此，这不是一个轻而易举的决定。 
而且必须为用户带来切实的改进。 

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


### 带有邮件图标的邮件是否会在互联网上公开显示？{#tls}

如果您发送或接收电子邮件时没有端到端加密 （使用传统电子邮件服务器）、
它们仍然受到手机或有线电视公司的保护，他们无法阅读或修改您的电子邮件。
但您和收件人的电子邮件提供商
可以阅读、分析或修改您的邮件，包括任何附件。 

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

与其他大多数聊天工具不同、 
Delta Chat 应用程序不会在服务器上存储任何有关联系人或群组的元数据，也不会以加密形式存储。 
相反，所有群组元数据都经过端到端加密，仅存储在终端用户设备上。 

因此，服务器只能看到

- 发件人和收件人地址，默认情况下随机生成
- 信息大小

所有其他信息、联系人和群组元数据都保存在信息的端到端加密部分。 

### 当设备被查封时，如何保护元数据和联系人？ {#device-seizure}

为了防止收集元数据的电子邮件服务器
以及设备查封的威胁，
我们建议使用 [Chatmail 服务器](https://chatmail.at/relays)
通过二维码扫描创建匿名临时配置文件。
请注意，所有平台上的 Delta Chat 应用都支持多配置文件，
因此你可以轻松地在你“主要”配置文件旁边使用特定于情况的配置文件，
并且知道它们的所有数据以及所有元数据都将被删除。
此外，如果设备被查封，则与使用临时配置文件的联系人
相比，无法轻易识别，因为即时通讯应用会在聊天群组中显示
电话号码，而电话号码通常与合法身份相关联。


#### 谁能看到我的 IP 地址？

使用的 [中继服务器](#relays) 需要知道您的 IP 地址、
有时还需要知道联系人的设备（如果你们有 [通话](#experiments)），或一起使用 [Webxdc应用程序](#webxdc)。

IP 地址是连接和提高效率所必需的。
它们既不会持久存在，也不会暴露。
请注意，IP 地址
不像你给快递服务的详细地址、
而是更粗略，通常只定义地区或国家。

这只是互联网和其他信使的默认工作方式、
我们在此不提供选项，也不预先提问。

如果你认为你的 IP 地址存在安全或隐私风险、
我们建议使用 VPN 并结合系统锁定模式。
在系统的所有应用程序中查找选项会留下漏洞。
例如，点击链接会将 IP 地址暴露给未知方，这是目前最大的风险。


###Delta Chat 是否支持 "密封发件人"？{#sealedsender}

不，还没有。 

Signal 信使在 2018 年推出["密封发件人"](https://signal.org/blog/sealed-sender/)
以保持其服务器基础设施不知道谁在向一组收件人发送信息。 
这一点尤为重要，因为 Signal 服务器知道每个账户的手机号码、
这通常与个人身份信息相关联。

即使 [chatmail relays](https://chatmail.at/relays) 
不要求提供任何私人数据（包括电话号码）、 
还是值得保护地址之间的关系元数据。 
我们认为使用随机地址进行密封发送不会有太大问题。
但目前还没有达成优先实施方案。 

### Delta Chat 是否支持完美前向保密？ {#pfs}

目前还没有，但 [Autocrypt v2](https://autocrypt2.org) 会提供。 

Delta Chat 如今不支持完美前向保密（PFS）。
这意味着，如果你的私人解密密钥被泄露、
并且有人收集了你之前的传输中信息、
他们就能使用泄漏的解密密钥解密并读取这些信息。
请注意，只有在删除信息的情况下，前向保密才能提高安全性。 
否则，获得你的解密密钥的人
通常也能获得所有未删除的信息
甚至不需要对以前收集的任何信息进行解密。 

[Autocrypt v2](https://autocrypt2.org)计划于2026年全面实施，

它将通过自动密钥轮换提供可靠的删除（前向保密）。

该方法在[Autocrypt v2 OpenPGP证书](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/)草案中进行了详细说明。

###Delta Chat 支持后量子加密吗？{#pqc}

目前还没有，但 [Autocrypt v2](https://autocrypt2.org) 会提供。

[Autocrypt v2](https://autocrypt2.org)计划于2026年全面实施，

它将带来后量子加密技术，以抵御量子计算机攻击。

Delta Chat使用Rust OpenPGP库[rPGP](https://github.com/rpgp/rpgp)，

该库支持最新的[IETF后量子加密OpenPGP草案](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/)。

具体实现详见[Autocrypt v2 OpenPGP证书](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/)草案。

#### 如何手动检查加密 信息？

你可以在“加密”对话框中手动检查端到端加密状态
（Android/iOS 上的用户配置文件或桌面上的用户聊天列表项上右键单击）。
Delta Chat 在此处显示两个指纹。
如果相同的指纹出现在你自己的设备和你联系人的设备上，
则连接是安全的。

### 我可以重复使用现有的私钥吗？ {#importkey}

不。

Delta Chat 根据 Autocrypt 规范 1.1 生成安全 OpenPGP 密钥。
我们不建议或提供用户进行手动密钥管理。
我们希望确保安全审计能专注于少数几种经过验证的加密算法
而不是 OpenPGP 允许的所有可能算法。
如果您想提取 OpenPGP 密钥，只有一种专业方法：
您需要在配置文件备份 tar 文件的 "keypairs "SQLite 表中查找它。


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
[本网站](https://delta.chat/serverguide) 推荐的那样。
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

某些功能需要特定权限、
例如，如果您想[扫描邀请二维码]（#howtoe2ee），则需要授予相机权限。

详见 [隐私政策](https://delta.chat/en/gdpr#24-app-permissions)。


### 我的朋友在哪里可以找到 Delta Chat？

Delta Chat 适用于所有主要平台和一些次要平台：

- **官方网站**，<https://delta.chat/download> 详细显示所有选项

- 如果不可用，请使用 **镜像** <https://deltachat.github.io/deltachat-pages>

- 打开下列**应用商店之一，搜索 "Delta Chat"：**
  谷歌应用商店、F-Droid、华为应用商店、iOS 和 macOS 应用商店、微软应用商店

- 检查你的 Linux 发行版的 **软件包管理器**

- **Android APK** 也可在 <https://github.com/deltachat/deltachat-android/releases> 上获得


### Delta Chat 的开发是如何被资助的? 

Delta Chat 没有接受风险投资，也没有负债累累，更没有承受产生巨额利润或将用户及其朋友和家人卖给广告商（或更糟）的压力。我们宁愿使用目前来自欧盟和美国的公共资金，来帮助我们努力建立一个基于自由开源社区开发的、去中心化的、多样化的聊天消息软件生态系统。 

具体而言，Delta Chat 的开发迄今为止已从以下来源获得资金，
按时间顺序排列：

- 在 2023 年和 2024 年，我们的 [WebXDC PUSH](https://nlnet.nl/project/WebXDC-Push/) 工作已在下一代互联网 (NGI) 中获得认可，
并与致力于
[WebXDC evolve](https://nlnet.nl/project/Webxdc-Evolve/)、
[WebXDC XMPP](https://nlnet.nl/project/WebXDC-XMPP/)、
[DeltaTouch](https://nlnet.nl/project/DeltaTouch/) 和
[DeltaTauri](https://nlnet.nl/project/DeltaTauri/) 的合作伙伴合作。
所有这些项目都已部分完成或将在 2025 年初完成。

- 2021年，我们获得了欧盟的进一步资助，用于两项下一代互联网提案

分别是[EPPD - 电子邮件提供商可移植性目录](https://dapsi.ngi.eu/hall-of-fame/eppd/)（约9.7万欧元）和[AEAP - 电子邮件地址可移植性](https://nlnet.nl/project/EmailPorting/)（约9万欧元）。这两项提案带来了更好的多配置文件支持、改进的二维码联系人和群组设置，以及所有平台上的许多网络改进。

- [NLnet 基金会](https://nlnet.nl/) 2019/2020 年拨款 4.6 万欧元，用于完成 Rust/Python 绑定并建立聊天机器人生态系统。 

- 在[开放技术基金](https://opentechfund.org) 2018/2019 年提供的第一笔赠款（约 20 万美元）期间，我们显著改善了安卓应用，发布了第一个桌面测试版，并根据人权方面的用户体验研究进行了功能开发，请参阅我们的结论[《需求发现与用户体验报告》](https://delta.chat/en/2019-07-19-uxreport)。2019/2020 年的第二笔赠款（约 30 万美元）对发布 Delta/iOS 版本，将核心库转换到 Rust ，以及为所有平台开发新功能提供了帮助。

- [NEXTLEAP](https://nextleap.eu)欧盟项目资助了以下研究和实施工作：在 2017 年和 2018 年实施的验证组和设置联系协议和通过 [Autocrypt](https://autocrypt.org)整合了端到端加密。

- 我们有时会收到个人的一次性捐款。 例如，2021 年，一位慷慨的人士以 "继续保持良好的发展态势！"为主题通过银行向我们捐赠了4千欧元💜。 我们用这些钱来资助发展活动或支付不容易预测或从公共基金中报销的临时费用。收到更多的捐款也有助于我们作为一个贡献者社区变得更加独立和长期可持续。

  [捐助钱款](donate){: .cta-button}

- 最后但并非最不重要的是，数位专家与热心人在没有收到或仅收到少量金钱的情况下为 Delta Chat 的开发做出了贡献。没有他们，Delta Chat 不会发展到、甚至无法接近目前的状况。

上面提到的钱款资助主要是由在弗赖堡（德国）的 merlinux GmbH 组织的，分发给了来自世界各地的十多位贡献者。

请参阅 [Delta Chat 捐款渠道](contribute)
以了解货币捐款和其他捐款的可能性。  
