---
title: FAQ
lang: ru
render_toc: true
header: Часто задаваемые вопросы (FAQ)
---


## Что такое Delta Chat? 

Delta Chat — надежное, децентрализованное и безопасное приложение для мгновенных сообщений,
доступное для мобильных и настольных платформ.

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

Your friends may share your contact with other friends, this appears as a **request**.

— Нужно **принять** запрос, прежде чем ответить.

— Вы также можете **удалить** его, если не хотите общаться с этим человеком.

- Если вы удалите запрос, будущие сообщения от этого контакта все равно будут появляться
  как запрос сообщения, так что вы можете передумать. Если вы действительно не хотите
  получать сообщения от этого человека, подумайте о его **блокировке**.


### How can I put two of my friends in contact with each other?

Attach the first contact to the chat of the second using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Contact**.
You can also add a little introduction message.

The second contact will receive a **card** then
and can tap it to start chatting with the first contact.


### Поддерживает ли Delta Chat изображения, видео и другие вложения?

- Да. Images, videos, files, voice messages etc. can be sent using the <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment-**
  or <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Voice Message** buttons

- Для лучшей производительности изображения по умолчанию оптимизируются и отправляются в меньшем размере, но вы можете отправить их как "файл", чтобы сохранить оригинал.


### Что такое профили? Как я могу переключатся между ними? {#multiple-accounts}

A profile is **a name, a picture** and some additional information for encrypting messages.
A profile lives on your device(s) only
and uses the server only to relay messages.

При первой установке Delta Chat создаётся первый профиль.

Позже, вы можете нажать на изображение вашего профиля в верхнем левом углу, чтобы **Добавить профили**
или **Сменить профили**.

You may want to use separate profiles for political, family or work related activities.

Вы также можете изучить [как использовать один и тот же профиль на нескольких устройствах](#multiclient).


### Кто видит изображение моего профиля?

- Вы можете добавить изображение профиля в настройках. Если вы пишете своим контактам
  или добавляете их с помощью QR-кода, они автоматически видят его как изображение вашего профиля.

- По соображениям конфиденциальности, никто не увидит изображение вашего профиля,
  пока вы не напишете им сообщение.


### Can I set a Bio/Status with Delta Chat? {#signature}

Yes,
you can do so under **Settings → Profile → Bio**.
Once you sent a message to a contact,
they will see it when they view your contact details.


### Что означают: Закрепить, Отключить уведомления и Отправить в архив?

Используйте эти инструменты, чтобы организовать чаты и поддерживать порядок во всём:

- **Закрепленные чаты** всегда находятся наверху списка чатов. Вы можете использовать их чтобы быстро получать доступ к вашим любимым чатам или чтобы не забыть о важных вещах.

- **Отключить уведомления** в чатах необходимо, если вы не хотите получать уведомления от них. Чаты с отключенными уведомлениями остаются на месте, и вы также можете закрепить такой чат.

- **Отправить в архив** необходимо, если вы не хотите больше видеть их в списке чатов.
  Архивные чаты остаются доступными над списком чатов или через поиск.

- Когда в чат, находящийся в архиве, приходит новое сообщение, если не включена опция **Отключить уведомления**, он **Возвращается из архива** в ваш список чатов.
  Чаты с **Отключенными уведомлениями** остаются в архиве до тех пор, пока вы не разархивируете их вручную.

Чтобы использовать функции, нажмите долгим нажатием или щелкните правой кнопкой мыши по чату в списке чатов.


### Как работают "Сохраненные сообщения"? {#save}

**Сохраненные сообщения** - это чат, который можно использовать, чтобы легко запоминать и находить сообщения.

- В любом чате нажмите и удерживайте или щелкните правой кнопкой мыши на сообщении и выберите **Сохранить**

- Сохраненные сообщения отмечаются символом
  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Иконка сохранения"/>
  рядом с меткой времени

- Затем, зайдите в чат "Сохраненные сообщения" - и вы увидите там все сохраненные сообщения.
  Нажав <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Значок со стрелкой вправо"/>,
  вы можете вернуться к этому сообщению в исходном чате

- Наконец, вы также можете использовать "Сохраненные сообщения" для создания **личных заметок** - откройте чат, введите что-то, добавьте фото или голосовое сообщение и т.д.

- Поскольку "Сохраненные сообщения" синхронизируются, они могут стать удобным способом передачи данных между устройствами

Сообщения остаются сохраненными, даже если они были отредактированы или удалены -
будь то [отправителем](#edit), [очисткой устройства](#delold) или [исчезающими сообщениями из других чатов](#ephemeralmsgs).


### Что означает зеленая точка?

You can sometimes see a **green dot** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/>
next to the avatar of a contact.
It means they were **recently seen by you** in the last 10 minutes,
e.g. because they messaged you or sent a read receipt.

So this is not a real time online status
and others will as well not always see that you are "online".


### Что означают галочки рядом с исходящими сообщениями?

- **One tick** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/>
  means that the message was sent successfully to your provider.

- **Two ticks**  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/>
  mean that at least one recipient's device
  reported back to having received the message.

- Recipients may have disabled read-receipts,
  so even if you see only one tick, the message may have been read.

- The other way round, two ticks do not automatically mean
  that a human has read or understood the message ;)


### Исправление опечаток и удаление сообщений после отправки {#edit}

- Вы можете редактировать текст сообщений после отправки.
  Для этого нажмите и удерживайте или щелкните правой кнопкой мыши сообщение и выберите **Редактировать**
  или <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Редактировать"/>.

- Если вы отправили сообщение случайно,
  в том же меню выберите **Удалить** и затем **Удалить для всех**.

При этом отредактированные сообщения будут иметь слово "Отредактировано" рядом с временной меткой,
удаленные сообщения будут удалены без каких-либо маркеров в чате.
Уведомления не отправляются, и нет ограничений по времени.

Обратите внимание, что исходное сообщение все еще может быть получено участниками чата
которые могли уже ответить, переслать, сохранить, сделать скриншот или иным образом скопировать сообщение.


### Как работают исчезающие сообщения? {#ephemeralmsgs}

Вы можете включить "исчезающие сообщения"
в настройках чата,
в правом верхнем углу окна чата,
выбрав временной интервал
от 5 минут до 1 года.

Until the setting is turned off again,
each chat member's Delta Chat app takes care
of deleting the messages
after the selected time span.
The time span begins
when the receiver first sees the message in Delta Chat.
The messages are deleted both,
on the servers,
and in the apps itself.

Обратите внимание, что на исчезающие сообщения можно полагаться
только до тех пор, пока вы доверяете своим собеседникам;
злонамеренные собеседники могут делать фотографии,
или иным образом сохранить, скопировать или переслать сообщения перед удалением.

Apart from that,
if one chat partner uninstalls Delta Chat,
the (anyway encrypted) messages may take longer to get deleted from their server.


### Что произойдет, если я включу функцию "Удалять старые сообщения с устройства"? {#delold}

- Если вы хотите сэкономить место на устройстве, вы можете выбрать
  автоматическое удаление старых сообщений. 
- Чтобы включить эту функцию, перейдите в "Удалять сообщения с устройства" в настройках "Чаты и медиафайлы"
  Вы можете установить период от "Через 1 час" до "Через 1 год";
  Таким образом, *все* сообщения будут удалены с устройства, как только они станут старше выбранного срока.

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


### Создание группы

- Выберите **Новый чат**, а затем **Новая группа** из меню в правом верхнем углу или нажмите соответствующую кнопку на Android/iOS. 
- На следующем экране выберите **участников** и придумайте **название группы**. Вы также можете выбрать **изображение группы**. 
- Как только вы напишете **первое сообщение** в группе, все участники будут проинформированы о новой группе и смогут ответить. (Пока вы не напишете сообщение в группе, группа будет невидима для участников).


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


### Я случайно удалил самого себя.

- Поскольку вы больше не являетесь участником группы, вы не можете добавлять себя снова. 
  Однако, это не проблема, просто попросите любого другого участника группы в обычном чате добавить вас снова.


### Я больше не хочу получать сообщения группы.

- Либо удалите себя из списка участников, либо удалите весь чат. 
  Если позже вы снова захотите присоединиться к группе, попросите другого участника группы добавить вас.

- Или, вместо этого, вы можете "отключить уведомления" для группы — это означает, что вы будете получать все сообщения и сможете их писать, но больше не будете получать уведомления о новых сообщениях.

### Cloning a group

You can duplicate a group to start a separate discussion
or to exclude members without them noticing.

- Open the group profile and tap **Clone Chat** (Android/iOS),
  or right-click the group in the chat list (Desktop).

- Set a new name, choose an avatar, and adjust the member list if needed.

The new group is **fully independent** from the original,
which continues to work as before.


## In-chat apps {#webxdc}

You can send apps to a chat - games, editors, polls and other tools.
This makes Delta Chat a truly extensible messenger.


### Where can I get in-chat apps?

- In a chat, using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Apps**

- You can also [create your own app](#create-xdc) and attach it using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → File**


### Насколько конфиденциальны приложения внутри чата?

- In-chat apps can not send data to the Internet, or download anything.

- An in-chat app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.

- The privacy an in-chat app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the in-chat app as well.

- This also means: Just like for web links, do not open apps from untrusted contacts.


### Как создать собственные приложения внутри чата? {#create-xdc}

- In-chat apps are zip files with `.xdc` extension containing html, css, and javascript code.

- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.

- All else you need to know is written in the
  [Webxdc documentation](https://webxdc.org/docs).

- If you have question, you can ask others with experience
  in the [Delta Chat Forum](https://support.delta.chat/c/webxdc/20).


## Мгновенная доставка сообщений и Push-уведомления {#instant-delivery}

### Что такое Push-уведомления? Как я могу получить мгновенную доставку сообщений?

Push-уведомления отправляются "Push-сервисами" Apple и Google на устройство пользователя, чтобы неактивное приложение Delta Chat могло получать сообщения в фоновом режиме
и при необходимости показывать уведомления на телефоне пользователя.

Push-уведомления работают со всеми серверами [chatmail](https://delta.chat/chatmail) на

- iOS устройствах, путем интеграции с сервисами Apple Push.

- Android устройствах, путем интеграции с сервисом Google FCM Push,
  в том числе на устройствах, использующих [microG](https://microg.org)
  вместо проприетарного кода Google на телефоне.


### Включены ли Push-уведомления на устройствах iOS? Есть ли альтернатива?

Да, Delta Chat автоматически использует Push-уведомления для профилей [chatmail](https://delta.chat/chatmail).
И нет, на устройствах Apple нет альтернативы для обеспечения мгновенной доставки сообщений,
поскольку устройства Apple не позволяют Delta Chat запрашивать данные в фоновом режиме.
Push-уведомления автоматически активируются для пользователей iOS, потому что
[Система Push-уведомлений Delta Chat, обеспечивающая конфиденциальность](#privacy-notifications)
не передает данные Apple, которых у нее еще нет.


### Включены / нужны ли Push-уведомления на устройствах Android? {#android-push}

Если доступен "push-сервис" Delta Chat включает push-уведомления,
чтобы обеспечить мгновенную доставку сообщений для всех пользователей chatmail.

В настройках Delta Chat "Уведомления", раздел "Мгновенная доставка"
вы можете изменить следующие настройки, которые влияют на все профили чата:

- "Использовать соединение в фоновом режиме": если вы не используете сервис Push,
  вы можете отключить "оптимизацию батареи" для Delta Chat,
  позволяя ему получать сообщения в фоновом режиме.
  Однако могут быть задержки от нескольких минут до нескольких часов.
  Некоторые производители Android даже полностью ограничивают приложения
  (см. [dontkillmyapp.com](https://dontkillmyapp.com))
  и Delta Chat может не показывать входящие сообщения,
  пока вы снова не откроете приложение вручную.
  
- Принудительное соединение в фоновом режиме: это запасной вариант
  если предыдущие варианты недоступны или не обеспечивают "мгновенную доставку".
  Включение этого параметра вызывает постоянное уведомление на вашем телефоне,
  которое иногда может быть "сжато" на последних телефонах Android.

Оба варианта "Фонового соединения" являются энергосберегающими и
безопасными для использования, если вы заметили, что сообщения приходят только с большой задержкой.


### Насколько конфиденциальны Push-уведомления Delta Chat? {#privacy-notifications}

Delta Chat Push Notification support avoids leakage of private information.
It does not leak profile data, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Вот как приложения Delta Chat выполняют доставку Push-уведомлений:

- Приложение Delta Chat локально получает "токен устройства" шифрует его и сохраняет
  на сервере [chatmail](https://delta.chat/chatmail).

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


Центральный прокси-сервер уведомлений Delta Chat [небольшой и полностью реализован на Rust](https://github.com/deltachat/notifiers)
забывает о токенах устройств, как только Apple/Google/и т. д. обработали их,
обычно за несколько миллисекунд.

Обратите внимание, что токен устройства шифруется при передаче между приложениями и прокси-сервером уведомлений
но не подписывается. 
Таким образом, прокси-сервер уведомлений никогда не видит данные профиля, IP-адреса или
какую-либо криптографическую идентификационную информацию, связанную с устройством (токеном) пользователя. 

В результате такого общего подхода к обеспечению конфиденциальности, даже захват почтового сервера chatmail,
или полный захват центрального прокси-сервера уведомлений Delta Chat
не раскроет конфиденциальную информацию, которой сервисы Push уже не обладают.


### Почему Delta Chat интегрируется с централизованными проприетарными Push-сервисами Apple/Google?

Delta Chat — это бесплатный децентрализованный мессенджер с открытым исходным кодом и возможностью выбора сервера,
но мы хотим, чтобы пользователи гарантированно получали "мгновенную доставку" сообщений,
такую же, что и в приложениях WhatsApp, Signal или Telegram,
не задавая вопросов, которые больше подходят для опытных пользователей или разработчиков.

Обратите внимание, что в Delta Chat используется [компактная и приватная система push-уведомлений](#privacy-notifications)
которая обеспечивает "мгновенную доставку" сообщений для всех серверов chatmail
включая тот, [который вы можете настроить сами без нашего разрешения](https://delta.chat/chatmail#selfhosted).
Добро пожаловать в мощную интероперабельную сеть релеев chatmail :)



## Мультиклиент {#multiclient}

### Можно ли использовать Delta Chat на нескольких устройствах одновременно?

Да. Вы можете использовать один и тот же профиль на разных устройствах:

- Убедитесь, что оба устройства подключены к одному и тому же Wi-Fi или локальной сети

- На первом устройстве перейдите в **Настройки → Добавить второе устройство**, при необходимости разблокируйте экран
  и подождите немного, пока не появится QR-код

- На втором устройстве, [установите Delta Chat](https://get.delta.chat)

- На втором устройстве запустите Delta Chat, выберите **Добавить как второе устройство** и отсканируйте QR-код со старого устройства

- Передача должна начаться через несколько секунд и во время передачи на обоих устройствах будет показан **прогресс**.
  Подождите, пока передача не завершится на обоих устройствах.

В отличие от многих других мессенджеров, после успешной передачи,
оба **устройства полностью независимы.**
Одно устройство не требуется для работы другого.


### Устранение неполадок

- Перепроверьте, что оба устройства находятся **в одной Wi-Fi или локальной сети**.

- В **Windows** перейдите в **Панель управления / Сеть и Интернет**
  и убедитесь, что в качестве "Типа сетевого профиля" выбрана **Частная сеть**.
  (после передачи, вы можете изменить обратно на исходное значение)

- На **iOS**, убедитесь, что предоставлен доступ "Настройки системы / Приложения / Delta Chat / **Локальная сеть**"

- На **macOS**, включите "Системные настройки / Конфиденциальность и безопасность / **Локальная сеть** / Delta Chat"

- В вашей системе может быть установлен "персональный брандмауэр",
  который может вызвать проблемы (особенно на Windows).
  **Отключите персональный брандмауэр** для Delta Chat на обоих сторонах и попробуйте снова

- **Гостевые сети** могут блокировать взаимодействие между устройствами.
  Если возможно, используйте не гостевую сеть.

- Если у вас всё ещё возникают проблемы с использованием одной и той же сети,
  попробуйте создать **Мобильную точку доступа** на одном устройстве и подключиться к этой сети Wi-Fi с другого устройства

- Убедитесь, что на устройстве-приемнике имеется **достаточно места**

- Если передача началась, убедитесь, что устройства **остаются активными** и не переходят в режим сна.
  Не выходите из Delta Chat.
  (мы стараемся сделать так, чтобы приложение работало в фоновом режиме, но [системы склонны убивать приложения](https://dontkillmyapp.com), к сожалению)

- Delta Chat **уже авторизован** на устройстве-приемнике?
  Вы можете использовать несколько профилей на одном устройстве, просто [добавьте еще один профиль](#multiple-accounts)

- Если у вас всё ещё возникают проблемы или вы **не можете отсканировать QR-код**
  попробуйте **ручную передачу**, описанную ниже


### Ручная передача {#backup}

Этот метод рекомендуется использовать только в том случае, если функция "Добавить второе устройство", описанная выше, не работает.

- На старом устройстве, перейдите в "Настройки -> Чаты и медиафайлы -> Экспорт резервной копии". Введите свой
  PIN-код разблокировки экрана, графический ключ или пароль. Затем вы можете нажать "Начать
  резервное копирование". Это сохранит файл резервной копии на вашем устройстве. Теперь вам нужно передать
  его на другое устройство каким-то образом.
- На новом устройстве, в меню "У меня уже есть профиль",
  выберите "Восстановить из резервной копии". После импорта, ваши чаты, ключи
  шифрования, медиафайлы будут скопированы на новое устройство.
  - **Если вы используете iOS:** и у вас возникли трудности, возможно,
    [это руководство](https://support.delta.chat/t/import-backup-to-ios/1628)
    поможет вам.
- Теперь вы синхронизированы и можете использовать оба устройства для отправки и получения
   зашифрованных сквозным шифрованием сообщений с вашими собеседниками.


### Есть ли какие-либо планы по внедрению веб-клиента Delta Chat?

- Ближайших планов нет, но есть некоторые предварительные идеи.
- Существуют 2-3 способа внедрения веб-клиента Delta Chat, но все
  они требуют значительных усилий. На данный момент мы сосредоточены на выпуске стабильных релизов во всех
  магазинах приложений (Google Play/iOS/Windows/macOS/Linux).
- Если вам нужен веб-клиент, потому что вы не можете устанавливать программное обеспечение на
  компьютере, на которым работаете, вы можете использовать портативный клиент для настольных систем Windows
  или AppImage для Linux. Вы можете найти их на
  [get.delta.chat](https://get.delta.chat).


## Расширенные

### Экспериментальные функции

At **Settings → Advanced → Experimental Features**
you can try out features we are working on.

The features may be **unstable** and may be **changed or removed**.

You can find more information
and give feedback in the [Forum](https://support.delta.chat).


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
- How many messages are unencrypted?

We will _not_ collect any personally identifiable information about you.


### Могу ли я использовать обычный адрес электронной почты с Delta Chat?

Yes, but only if the email address is used exclusively by [chatmail clients](https://chatmail.at/clients).

It is not supported to share usage of an email address with non-chatmail apps or web-based mailers,
for the following reasons:

- Non-chatmail apps are largely not accomplishing automatic end-to-end email encryption for their users,
  while chatmail apps and relays pervasively enforce end-to-end encryption and security standards.

- Non-chatmail apps use email servers as a long-term message archive
  while chatmail clients use email servers for ephemeral instant message transport.

- Supporting the full variety of classic email setups
  would require considerable development and maintenance efforts,
  and complicate making chatmail-based messaging more resilient, reliable and fast.

### How can I configure a chat profile with a classic email address as transport? {#classic-email}

First off, **please do not use the same classic email address also from non-chatmail classic email apps**
unless you are prepared to deal with encrypted messages in the inbox,
double notifications, accidentally deleted emails or similar annoyances.

You can configure a email address for chatting at **New Profile → Use Other Server → Use Classic Mail as Transport**.
Note that classic email providers will generally not support [Push Notifications](#instant-delivery)
and have other limitations, see [Provider Overview](https://providers.delta.chat).
Chatmail uses the default INBOX for relay; ensure the provider setup does too. 
A chat profile using a classic email address allows to to send and receive unencrypted messages.
These messages, and the chats they appear in, are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### Я хочу управлять своим собственным сервером для Delta Chat. Что вы посоветуете?

Подойдет любая корректная настройка почтового сервера, за исключением случаев, когда для корректной работы устройств ваших пользователей требуются [Push-уведомления](#instant-delivery) Google/Apple.

Мы обычно рекомендуем [настроить chatmail relay](https://chatmail.at/doc/relay/getting_started.html). 
[Chatmail](https://chatmail.at)  — это проект, поддерживаемый сообществом который охватывает как настройку релеев, так
и [основные разработки на Rust](https://github.com/chatmail/core) 
которые обеспечивают работу [клиентов chatmail](https://chatmail.at/clients) наиболее известным из которых является Delta Chat. 


### Меня интересуют технические детали. Можете рассказать больше?

- Смотрите [Стандарты, используемые в Delta Chat]({% include standards-url %}).



## Шифрование и безопасность {#e2ee}

### Какие стандарты используются для сквозного шифрования? 

Delta Chat использует [безопасное подмножество стандарта OpenPGP](#openpgp-secure)
для реализации автоматического сквозного шифрования c помощью следующих протоколов: 

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  для обмена информацией о настройке шифрования через сканирование QR-кода или "ссылок-приглашений". 

- [Autocrypt](https://autocrypt.org) используется для автоматической
  настройки сквозного шифрования между контактами и всеми членами группового чата. 

- [Обмен контактом в
  чате](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  позволяет получателям настроить сквозное шифрование с этим контактом. 

Delta Chat не запрашивает, не публикует и не взаимодействует с какими-либо серверами ключей OpenPGP.

### Как узнать, зашифрованы ли сообщения с помощью сквозного шифрования? {#whene2e}

Все сообщения в Delta Chat **по умолчанию шифруются сквозным шифрованием**.
С момента выхода серии релизов Delta Chat версии 2 (июль 2025 года) 
на сообщениях со сквозным шифрованием больше не отображаются замки или другие подобные индикаторы. 

### Могу ли я получать или отправлять сообщения без сквозного шифрования?

Если вы используете стандартные [ретрансляторы chatmail](https://chatmail.at/relays),
невозможно получать или отправлять сообщения без сквозного шифрования. 

Если вы вместо этого используете [классический почтовый сервер](#classic-email),
вы можете отправлять и получать сообщения с использованием или без сквозного шифрования.
Сообщения, не имеющие сквозного шифрования, отмечены значком электронной почты
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### Что означает зеленая галочка в профиле контакта? {#e2eeguarantee}

В профиле контакта может отображаться зелёная галочка
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="зелёная галочка" />
и строка "Подтверждён пользователем".
Каждый контакт с зелёной галочкой либо выполнил непосредственное сканирование [QR-кода](#howtoe2ee) с вами,
либо был подтверждён другим контактом с зелёной галочкой.
Подтверждения происходят автоматически при добавлении участников в группы. 
Тот, кто добавляет контакт с зелёной галочкой в группу, где только участники с зелёными галочками, 
становится подтверждающим. 
В профиле контакта вы можете последовательно нажимать на текст "Подтверждён ..." до тех пор,
пока не дойдёте до того, с кем вы напрямую выполнили сканирование [QR-кода](#howtoe2ee).

Для более подробного обсуждения "гарантированного сквозного шифрования"
пожалуйста, обратитесь к [протоколам Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
и прочитайте о "Проверенных группах", техническом термине,
который здесь называется "группами с зелёной галочкой" или чатами с "гарантированным сквозным шифрованием".

### Зашифрованы ли вложения (изображения, файлы, аудио и т. д.) сквозным шифрованием?

Да.

Когда мы говорим о "сообщении, зашифрованном сквозным шифрованием"
мы всегда имеем в виду, что всё сообщение зашифровано,
включая все вложения
и метаданные вложений, такие как имена файлов.


### OpenPGP безопасен? {#openpgp-secure}

Да, Delta Chat использует безопасное подмножество OpenPGP
требующее, чтобы всё сообщение было правильно зашифровано и подписано.
Например, "Отделённые подписи" не считаются безопасными.

OpenPGP сам по себе не является небезопасным.
Большинство обсуждаемых в публичной сфере проблем безопасности OpenPGP
на самом деле возникают из-за плохого удобства использования или плохой реализации инструментов или приложений (или того и другого).
Особенно важно различать OpenPGP, стандарт шифрования IETF,
и GnuPG (GPG), инструмент командной строки, реализующий OpenPGP. 
Многие публичные критические замечания по OpenPGP фактически касаются GnuPG, который Delta Chat никогда не использовал.
Delta Chat вместо этого использует реализацию OpenPGP на Rust [rPGP](https://github.com/rpgp/rpgp),
доступную как [независимый пакет "pgp"](https://crates.io/crates/pgp),
и [проверенную на безопасность в 2019 и 2024 годах](#security-audits). 

Вместе с другими разработчиками OpenPGP мы стремимся, 
повысить характеристики безопасности путём реализации
[нового стандарта IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/), 
который был успешно принят летом 2023 года.


### Рассматривали ли вы альтернативы OpenPGP для сквозного шифрования? {#openpgp-alternatives}

Да, мы следим за разработками, такими как [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
но их внедрение означало бы потерю совместимости сквозного шифрования.
Так что это будет непростое решение 
и оно должно принести пользователям ощутимые улучшения. 

Delta Chat использует комплексный подход "удобной безопасности" 
и работает с широким кругом групп активистов, а также 
известными исследователями, такими как [TeamUSEC](https://teamusec.de), 
для улучшения фактических результатов пользователей в борьбе с угрозами безопасности. 
Протокол передачи данных и стандарт для установления сквозного шифрования:
только одна часть "результатов пользователя",
см. также наши ответы на [захват устройства](#device-seizure)
и [метаданные сообщения](#message-metadata). 


### Подвержен ли Delta Chat уязвимости EFAIL?

Нет, [Delta Chat никогда не был уязвим к EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
потому что его реализация OpenPGP [rPGP](https://github.com/rpgp/rpgp) 
использует код обнаружения модификации при шифровании сообщений
и возвращает [ошибку](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
если код обнаружения модификаций не совпадает.

Delta Chat также никогда не был уязвим к атаке "Direct Exfiltration" EFAIL,
потому что он расшифровывает только `многочастные/зашифрованные` сообщения,
которые содержат ровно одну зашифрованную и подписанную часть,
как определено спецификацией Autocrypt Level 1.


### Видны ли в Интернете сообщения, отмеченные значком почты? {#tls}

Если вы отправляете или получаете электронные сообщения без сквозного шифрования (используя классический почтовый сервер),
они всё равно защищены от операторов сотовой связи или интернет-провайдеров, которые не могут прочитать или изменить ваши электронные сообщения. 
Однако и ваш почтовый провайдер, и почтовый провайдер вашего получателя 
могут читать, анализировать или изменять ваши сообщения, включая любые вложения. 

Delta Chat по умолчанию использует строгое 
[TLS-шифрование](https://en.wikipedia.org/wiki/Transport_Layer_Security), 
которое защищает соединения между вашим устройством и провайдером электронной почты. 
Вся обработка TLS в Delta Chat прошла независимый [аудит безопасности](#security-audits).
Более того, соединение между вашим устройством и провайдером электронной почты получателя
как правило, также будет зашифровано.
Если задействованные серверы электронной почты поддерживают [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461),
то между провайдерами электронной почты будет применяться протокол защиты транспортного уровня. 
В этом случае сообщения Delta Chat никогда не будут переданы в открытом виде через Интернет,
даже если сообщение не было зашифровано сквозным шифрованием.


### Как Delta Chat защищает метаданные в сообщениях? {#message-metadata}

В отличие от большинства других мессенджеров, 
приложения Delta Chat не сохраняют никакие метаданные о контактах или группах на серверах, даже в зашифрованной форме. 
Вместо этого все групповые метаданные шифруются сквозным шифрованием и хранятся исключительно на устройствах конечных пользователей. 

Таким образом, серверы могут видеть только:

- адрес отправителя и получателя
- а также размер сообщения.

По умолчанию адреса генерируются случайным образом.

Все прочие метаданные сообщений, контактов и групп содержатся в части сообщений, защищённой сквозным шифрованием.

### Как защитить метаданные и контакты при изъятии устройства? {#device-seizure}

Для защиты от серверов электронной почты, собирающих метаданные, 
а также от угрозы конфискации устройства,
мы рекомендуем использовать [релей chatmail](https://chatmail.at/relays)
для создания чат-профилей с использованием случайных электронных адресов для передачи сообщений. 
Обратите внимание, что приложения Delta Chat на всех платформах поддерживают несколько профилей,
так что вы можете легко использовать отдельные профили, для конкретной ситуации, помимо вашего "основного" профиля,
зная, что все их данные, вместе с метаданными, будут удалены.
Кроме того, если устройство изъято, контакты, использующие временные профили,
не могут быть легко идентифицированы. 

### Поддерживает ли Delta Chat функцию "Sealed Sender" (Засекреченный отправитель)? {#sealedsender}

Нет, пока нет.

Мессенджер Signal внедрил функцию ["Sealed Sender" (Засекреченный отправитель) в 2018 году](https://signal.org/blog/sealed-sender/),
чтобы их серверная инфраструктура не имела информации о том, кто отправляет сообщение группе получателей. 
Это особенно важно, поскольку сервер Signal знает мобильный номер каждого аккаунта,
который обычно привязан к паспортным данным.

Даже если [релеи chatmail](https://chatmail.at/relays) 
не запрашивают никаких личных данных (включая телефонные номера), 
всё равно может быть полезно защитить реляционные метаданные между адресами 
Мы не видим серьёзных проблем в использовании случайных одноразовых электронных адресов для функции sealed sender,
но реализация пока не определена как приоритетная задача. 

### Поддерживает ли Delta Chat свойство Perfect forward secrecy, PFS (Совершенную прямую секретность)? {#pfs}

Нет, пока нет.

На данный момент, Delta Chat не поддерживает Perfect Forward Secrecy (PFS) (Совершенную прямую секретность).
Это означает, что если ваш приватный ключ дешифрования будет скомпрометирован,
и кто-то собрал ваши предыдущие сообщения во время передачи,
они смогут расшифровать и прочитать их, используя скомпрометированный ключ дешифрования.
Обратите внимание, что Forward Secrecy (Прямая секретность) повышает безопасность только если вы удаляете сообщения. 
В противном случае, тот, кто получает ваши ключи дешифрования
также может получить все ваши не удалённые сообщения
и ему даже не нужно расшифровывать какие-либо ранее собранные сообщения.

Мы разработали подход к Forward Secrecy (Прямой секретности), который прошёл 
первичную проверку некоторыми криптографами и экспертами по реализации 
но требует более формального описания 
чтобы убедиться, что он надёжно работает в федеративном обмене сообщениями и при использовании нескольких устройств,
прежде чем он может быть внедрён в [ядро chatmail](https://github.com/chatmail/core),
что сделает его доступным во всех [клиентах clients](https://chatmail.at/clients). 

### Поддерживает ли Delta Chat Post-Quantum-Cryptography (Постквантовую криптографию)? {#pqc}

Нет, пока нет.

Delta Chat использует библиотеку OpenPGP на Rust [rPGP](https://github.com/rpgp/rpgp),
которая поддерживает последний [черновик IETF Post-Quantum-Cryptography OpenPGP](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/). 
Мы планируем добавить поддержку PQC в [ядро chatmail](https://github.com/chatmail/core)  после того, как черновик будет окончательно утвержден в IETF
в сотрудничестве с другими разработчиками OpenPGP. 

### Как можно вручную проверить информацию о шифровании?

Вы можете проверить статус сквозного шифрования вручную в диалоговом окне "Шифрование"
(профиль пользователя на Android/iOS или щелкните правой кнопкой мыши элемент списка чата пользователя в приложении для ПК).
Delta Chat показывает там два отпечатка.
Если на вашем устройстве и на устройстве вашего контакта показаны одинаковые отпечатки,
соединение безопасно.

### Можно ли повторно использовать существующий секретный ключ? {#importkey}

Нет.

Delta Chat генерирует безопасные ключи OpenPGP в соответствии со спецификацией Autocrypt 1.1. 
Вы можете экспортировать свой закрытый ключ, но не можете импортировать дополнительные закрытые ключи.

В целом, мы не рекомендуем и не предлагаем пользователям выполнять ручное управление ключами. 
Мы стремимся к тому, чтобы аудиты безопасности могли сосредоточиться на нескольких проверенных криптографических алгоритмах, 
а не на всем разнообразии возможных алгоритмов, доступных с OpenPGP.

### Проходил ли Delta Chat независимую проверку на наличие уязвимостей безопасности? {#security-audits}

Да, множество раз. 
Проект Delta Chat находится в постоянном режиме аудита безопасности и анализа,
от последних до более ранних: 

- Декабрь 2024 года, [экспертиза rPGP, организованная
 NLNET](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) выполненная [Radically Open Security](https://www.radicallyopensecurity.com/).
  rPGP является движком сквозного шифрования OpenPGP [OpenPGP](https://openpgp.org) в Delta Chat. 
  В результате этого аудита были подготовлены два отчета по безопасности:

  - ["Паника при обработке некорректных, недоверенных входных данных"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Возможная нехватка ресурсов при обработке непроверенных сообщений"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

  Проблемы, описанные в этих рекомендациях, были исправлены и включены в релизы Delta Chat, 
  во всех магазинах приложений с декабря 2024 года. 

- В марте 2024 года мы получили подробный анализ безопасности от исследовательской группы
  Applied Cryptography в ETH Цюрихе и устранили все выявленные проблемы. 
  Читайте наш пост в блоге о [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) для более подробной информации и 
  [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
  научной статьи, опубликованной позже. 

- В Апреле 2023 года мы исправили проблемы безопасности и конфиденциальности в веб-интерфейсе,
функция "приложения, которыми делятся в чате", связанная со сбоями в песочнице
особенно с Chromium. После этого мы провели независимый аудит
безопасности с Cure53, и все выявленные проблемы были исправлены в серии приложений 1.36, выпущенной в апреле 2023 года.
См. здесь [полную информацию о безопасности сквозного шифрования в Интернете](https://delta.chat/en/2023-05-22-webxdc-security).

- В Марте 2023 года, [Cure53](https://cure53.de) проанализировал как протокол защиты транспортного уровня
  сетевого соединения Delta Chat, так и воспроизводимую установку почтового сервера,
  [рекомендуемую на этом сайте](serverguide).
  Подробнее об аудите можно узнать [в нашем блоге](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  или прочитать [полный отчёт здесь](../assets/blog/MER-01-report.pdf).

- 2020 год, [Include Security](https://includesecurity.com) проанализировала Delta
  Chat Rust [ядро](https://github.com/deltachat/deltachat-core-rust/),
  [IMAP](https://github.com/async-email/async-imap),
  [SMTP](https://github.com/async-email/async-smtp) и
  Библиотеки [TLS](https://github.com/async-email/async-native-tls).
  Никаких критических или серьёзных проблем обнаружено не было.
  В отчете выявлено несколько слабых мест средней серьёзности:
  они не представляют угрозы для пользователей Delta Chat сами по себе,
  поскольку они зависят от окружения, в котором используется Delta Chat.
  По соображениям удобства использования и совместимости,
  мы не можем устранить их все
  и решили предоставить рекомендации по безопасности для пользователей, которым угрожают эти уязвимости.
  Вы можете прочитать [полный отчет здесь](../assets/blog/2020-second-security-review.pdf).

- 2019 год [Include Security](https://includesecurity.com) проанализировало библиотеки Delta
  Chat [PGP](https://github.com/rpgp/rpgp) и
[RSA](https://github.com/RustCrypto/RSA).
  Не было обнаружено критических проблем,
  но были выявлены две серьёзные проблемы, которые мы впоследствии исправили.
  Также были выявлены, одна проблема средней серьёзности и несколько менее опасных проблем,
  но не было возможности эксплуатировать эти уязвимости в реализации Delta Chat.
  Некоторые из них мы исправили после завершения аудита.
  Вы можете прочитать [полный отчёт здесь](../assets/blog/2019-first-security-review.pdf).


## Разное

### Какие разрешения нужны Delta Chat?

Некоторые функции требуют определенных разрешений,
например, вам нужно предоставить разрешение на использование камеры, если вы хотите [отсканировать QR-код приглашения](#howtoe2ee).

Подробную информацию можно найти в [Политике конфиденциальности](https://delta.chat/en/gdpr#24-app-permissions).


### Где мои друзья могут найти Delta Chat?

Delta Chat доступен на всех популярных и некоторых менее известных платформах:

- На **официальной странице загрузки**, <https://delta.chat/download> можно найти подробную информацию о всех вариантах

- Если основной сайт недоступен, используйте **зеркало** <https://deltachat.github.io/deltachat-pages>

- Откройте один из следующих **магазинов приложений и найдите "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, iOS и macOS App Store, Microsoft Store

- Проверьте **менеджер пакетов** вашего дистрибутива Linux

- Файлы **APK для Android** доступны на <https://github.com/deltachat/deltachat-android/releases>


### Как финансируются разработки Delta Chat? 

Delta Chat не получает никакого венчурного капитала,
не имеет долгов, и не ставит целью заработать огромную прибыль или 
продавать пользователей, их друзей и семью рекламодателям (или ещё кому-либо). 
Мы предпочитаем использовать государственные источники финансирования далёкие от Евросоюза и США, чтобы
продолжить создавать децентрализованную экосистему обмена сообщениями,
основанную на Свободном и Открытом исходном коде.

В частности, разработка Delta Chat финансировалась из следующих источников,
перечислены в хронологическом порядке: 

- Проект ЕС [NEXTLEAP](https://nextleap.eu) финансировал исследование
  и внедрение проверенных групп и настройку протоколов контактов
  в 2017 и 2018 годах, а также помог интегрировать сквозное шифрование
  через [Autocrypt](https://autocrypt.org).

- Фонд [Open Technology Fund](https://opentechfund.org) предоставил нам 
  первый грант в 2018/2019 году (~$200 тыс.), благодаря которому мы существенно улучшили приложение для Android 
  и выпустили первую бета-версию приложения для настольных систем, а также провели 
  исследования в области UX в контексте прав человека, 
   см. наш заключительный отчет [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  Второй грант, полученный в 2019/2020 году (~$300 тыс.), помог нам 
  выпустить версии Delta/iOS, перевести наш основной код на Rust и 
  предоставить новые функции для всех платформ.  

- [Фонд NLnet](https://nlnet.nl/) выделил в 2019/2020 году 46 тыс. евро на
завершение привязки Rust/Python и создание экосистемы чат-ботов.

- В 2021 г. мы получили дополнительное финансирование из ЕС для двух Next-Generation-Internet
  целей, а именно для [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97 тыс. евро) и [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90 тыс. евро). Это привело к улучшению поддержки нескольких профилей, улучшению настройки контактов и групп с помощью QR-кода и многим улучшениям в сетевом взаимодействии на всех платформах.

- С конца 2021 года по март 2023 года мы получили финансирование в размере ($500 тыс.) от
  U.S. Bureau of Democracy, Human Rights and Labor (DRL) для поддержки *свободы интернета*. 
  Это финансирование поддержало наши долгосрочные цели, сделать Delta Chat более удобным для использования 
  и совместимым с широким спектром электронных почтовых серверов по всему миру, а также более устойчивым
  и безопасным в местах, часто подвергающихся интернет-цензуре и отключениям.

- 2023-2024 мы завершили проект финансируемый OTF 
  [Secure Chatmail project](https://www.opentech.fund/projects-we-support/supported-projects/secure-chat-mail-with-delta-chat/), 
  что позволило нам внедрить гарантированное шифрование, 
  создать сеть серверов [chatmail](https://delta.chat/chatmail) 
  и обеспечить "немедленную регистрацию" во всех приложениях, выпущенных с апреля 2024 года. 

- В 2023 и 2024 годах мы были приняты в программу Next Generation Internet (NGI)
  за нашу работу над [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
  в сотрудничестве с партнерами, работающими над 
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/), 
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/), 
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) и 
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/). 
  Все эти проекты частично завершены или будут завершены в начале 2025 года. 

- Иногда мы получаем разовые пожертвования от физических лиц. 
  Например, в 2021 году один щедрый человек перевел нам 4 тыс. евро банковским переводом
  с подписью "Продолжайте хорошие разработки!". 💜 
  Мы используем такие деньги для финансирования собраний разработчиков или для покрытия непредвиденных расходов,
которые не могут быть легко предсказаны или возмещены из грантов общественного финансирования. 
  Получение большего количества пожертвований также помогает нам стать более независимыми и жизнеспособными в долгосрочной перспективе
  как сообщество участников.

  [Пожертвовать](donate){: .cta-button}

- И последнее, но далеко не менее важное: несколько экспертов и энтузиастов безвозмездно внесли 
  и вносят свой вклад в развитие Delta Chat, не получая за это денег или получая
  только небольшие суммы. Без них Delta Chat не был бы там, где он находится сегодня,
  даже близко.

Финансирование, упомянутое выше, в основном организовано компанией merlinux GmbH в
Фрайбурге (Германия) и распределяется среди более чем десятка участников по всему миру.

Пожалуйста, обратите внимание на [Каналы пожертвований в Delta Chat](contribute)
для финансовых взносов и других возможностей участия.
