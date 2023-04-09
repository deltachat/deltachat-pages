---
title: FAQ
lang: ru
render_toc: true
header: Часто задаваемые вопросы
---


## Что такое Delta Chat? 

Delta Chat — это новое приложение для обмена мгновенными сообщениями, которое отправляет сообщения через электронную почту, шифруя сообщение (если это возможно) с помощью Autocrypt. 
**Вам не нужно нигде регистрироваться, просто используйте существующую учётную запись электронной почты в Delta Chat.** 

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Как мне найти людей для общения? 

С помощью Delta Chat вы можете писать на любые существующие адреса
электронной почты, даже если получатель не использует приложение Delta Chat.
Получателю не нужно устанавливать то же приложение, что и у вас, в отличии от других мессенджеров.


### Каковы преимущества Delta Chat по сравнению с другими мессенджерами?

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


### Какие сообщения отображаются в Delta Chat?

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


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Поддерживает ли Delta Chat вложения фото, видео или другие?

- Да. Помимо обычного текста, все вложения электронной почты отображаются в виде отдельных сообщений. В исходящие сообщения вложения встраиваются по мере необходимости автоматически.

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#multiclient).

### Кто видит моё изображение в профиле?

- Вы можете добавить изображение профиля в настройках. Если вы пишете своим
 контактам или добавляете их с помощью QR-кода, они автоматически видят его как
 изображение вашего профиля.

- Контакты, которые не используют Delta Chat не видят ваше изображение профиля
  (однако, конечно, они могут установить Delta Chat :)

- Из соображений конфиденциальности никто не увидит ваше изображение
 в профиле, пока вы не напишете им сообщение.

- Изображение вашего профиля отправляется не с каждым сообщением, но достаточно 
регулярно, чтобы ваши контакты снова его получили, даже если они добавят
 новое устройство.


### Поддерживает ли Delta Chat электронную почту в формате HTML?

- Да. При необходимости, во входящих сообщения появляется кнопка "Показать сообщение полностью". Исходящие сообщения всегда используют простой текст.


### Почему я должен вводить свой пароль от электронной почты в Delta Chat? Это безопасно?

Как и в случае других программ электронной почты, таких как Thunderbird,
 K9-Mail или Outlook, программе необходим пароль, чтобы использовать его
 для отправки почты. Конечно, пароль хранится только на вашем устройстве.
 Пароль передаётся только вашему провайдеру электронной почты (при входе
 в систему), который в любом случае имеет доступ к вашей почте.

Если вы используете провайдера электронной почты с поддержкой OAuth2,
 например, gmail.com или yandex.ru, нет необходимости хранить пароль на
 устройстве, так как в этом случае используется токен доступа.

Поскольку Delta Chat является программой открытым исходным кодом, вы
 можете изучить [исходный код](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs), если хотите убедиться, что ваши
 учётные данные обрабатываются безопасно. Мы будем рады вашим отзывам
 и предложениям, которые сделают приложение более безопасным для всех.


### Какие разрешения нужны Delta Chat?

В зависимости от используемой операционной системы 
вам может быть предложено предоставить разрешения для приложения. 
Вот что делает Delta Chat с этими разрешениями:

- Камера *(можно запретить)*
  - делайте фотографии и видео: для отправки фотографий
- Контакты *(можно запретить)*
  - чтение ваших контактов: чтобы найти контакты для общения
- Местоположение *(можно запретить)*
  - доступ к приблизительному местоположению (источники сетевого местоположения): для функции потоковой передачи местоположения
  - доступ к точному местоположению (GPS и сетевые источники местоположения): для функции потоковой передачи местоположения
- Микрофон *(можно запретить)*
  - запись аудио: для звуковых сообщений
- Память *(можно запретить)*
  - изменение или удаление содержимого вашей SD-карты: для загрузки вложений сообщений
  - чтение содержимого вашей SD-карты: чтобы делиться файлами с вашими контактами
- Другие возможности приложения
  - изменять настройки звука: таким образом, вы можете выбрать мелодию звонка и громкость для уведомлений и аудиосообщений
  - запуск при включении: вам не придется запускать Delta Chat вручную
  - контроль вибрации: для уведомлений
  - просмотр сетевых подключений: для подключения к провайдеру электронной почты
  - предотвращение спящего режима: так вы можете легче скопировать код безопасности во время Autocrypt Setup Message
  - иметь полный доступ к сети: для подключения к вашему провайдеру электронной почты
  - просмотр подключений Wi-Fi: для подключения к провайдеру электронной почты
  - игнорирование оптимизации батареи: для пользователей, которые хотят получать сообщения в любое время

### What means Pinning, Muting, Archiving?

Use these tools to organize your chats and keep everything in its place:

- **Pinned chats** always stay atop of the chat list. You can use them to access your most loved chats quickly or temporarily to not forget about things.

- **Mute chats** if you do not want to get notifications for them. Muted chats stay in place and you can also pin a muted chat.

- **Archive chats** if you do not want to see them in your chat list any longer.
  Archived chats remain accessible above the chat list or via search. 

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [private app](#webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


## Группы

### Создание группы

- Выберите **Новый чат**, а затем **Новая группа** из меню в правом верхнем углу или нажмите соответствующую кнопку на Android/iOS. 
- На следующем экране выберите **участников** и придумайте **название группы**. Вы также можете выбрать **изображение группы**. 
- Как только вы напишете **первое сообщение** в группе, все участники будут проинформированы о новой группе и смогут ответить (до тех пор, пока вы не напишете сообщение в группе, группа будет невидима для участников).


### Добавление участников в группу

- Каждый участник группы имеет **те же права**, что и любой другой. По этой причине каждый может удалить любого участника или добавить нового. 
- Чтобы добавить или удалить участников, нажмите на название группы в чате.


### Я случайно себя удалил.

- Поскольку вы больше не являетесь членом группы, вы не можете добавлять себя снова. 
  Тем не менее, проблемы нет, просто попросите любого другого члена группы в обычном чате повторно добавить вас.


### Я больше не хочу получать сообщения группы.

- Либо удалите себя из списка участников, либо удалите весь чат. 
  Если позже вы снова захотите присоединиться к группе, попросите другого члена группы добавить вас.

- Или, в качестве альтернативы, вы также можете отключить уведомления для группы - это означает, что вы будете получать все сообщения и сможете их писать, но больше не будете получать уведомления о новых сообщениях.


### Что означают галочки рядом с исходящими сообщениями?

- **Одна галочка** означает, что сообщение было успешно отправлено вашему провайдеру.
- **Две галочки** означают, что хотя бы одно устройство получателя
  сообщило о получении сообщения.
- Получатели могут отключить функцию чтения сообщений,
  поэтому даже если вы видите только одну галочку, сообщение может быть прочитано.
- И наоборот, две галочки не означают,
 что человек прочитал или понял сообщение ;)


### What happens if I turn on "Delete old messages from server"?

- By default, Delta Chat stores all messages locally on your device. If you
  e.g. want to save storage space at your mail provider, you can choose to
  delete old messages automatically. They still remain on your device until you
  delete them there, too.
- To turn it on, go to "delete old messages from server" in the "Chats & Media"
  settings. You can set a timeframe between "at once" and "after a year"; this
  way, *all* e-mails will be deleted from the server after that timeframe. 
- Note that if you use Delta Chat on more than one device, you should leave the
  messages on the server, until the other device could download them, too. In
  this case, you should set auto-delete to "after a day" or something similar,
  depending on how often you turn on the other device.


### What happens if I turn on "Delete old messages from device"? {#delold}

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

### Поддерживает ли Delta Chat сквозное шифрование?

- Да. В Delta Chat реализован стандарт Autocrypt 1 уровня и поэтому
 защищённые сквозным шифрованием E2E сообщения совместимы с
 другими приложениями, поддерживающими Autocrypt.

- Delta Chat также поддерживает более надёжную форму сквозного шифрования, которая
 защищена от активных атак, см. раздел "Проверенные группы".


### Что нужно сделать, чтобы активировать сквозное шифрование?

- Ничего.

- Delta Chat (и другие [Autocrypt](https://autocrypt.org)-совместимые
  почтовые приложения) делятся ключами сквозного шифрования автоматически после отправки первого сообщения. 
  После этого все участники переписки подключаются к протоколу сквозного шифрования автоматически. 
  Если один из участников переписки использует приложение, не поддерживающее 
  Autocrypt, последующие сообщения не шифруются до тех пор, пока совместимое с 
  Autocrypt не будет снова доступно у всех участников. 

- Если вы хотите избежать сквозного шифрования электронной почты по умолчанию,
 используйте соответствующую настройку Autocrypt в разделе "Настройки" или "Дополнительные настройки".


### Если сквозное шифрование недоступно, связь не шифруется вообще?

- С большинством почтовых серверов Delta Chat устанавливает _транспортное шифрование_
 ([TLS](https://ru.wikipedia.org/wiki/TLS)).
Это только обеспечивает соединение между вашим устройством и сервером электронной почты.
 В то время как сквозное шифрование обеспечивает безопасность между
 вашим устройством и устройством друга.


### Как проверить криптографический статус у нас с отправителем? 

Если вы находитесь в непосредственной близости от собеседника:

- Выберите **приглашение по QR-коду** на одном устройстве, а затем **отсканировать QR-код**
 на другом, отсканируйте код. Если оба устройства находятся в сети,
 они создадут чат друг с другом (если он еще не существует)
 и ключи шифрования также будут проверены. Оба собеседника увидят
 системное сообщение "отправитель проверен" в своем чате.

Если вы находитесь не рядом с собеседником, вы можете проверить статус вручную в диалоговом окне "Шифрование"
 (в профиле пользователя на Android/iOS, в настольной версии щелкните ПКМ на элемент список чатов):

- При использовании сквозного шифрования будут показаны отпечатки двух ключей.
 Если они совпадают на обоих устройствах, то соединение безопасно.

- При использовании транспортного шифрования просто отображается его состояние.


### Как проверить шифрование сообщений?

- Маленький **замок**, показанный рядом с сообщением, означает, что сообщение зашифровано сквозным шифрованием от данного отправителя.

- Если **нет замка**, сообщение обычно передаётся в незашифрованном виде, например, потому что вы или отправитель отключили сквозное шифрование, или отправитель использует приложение без поддержки сквозного шифрования.


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
automatically"](#delold).

If you want to protect a 1:1 conversation like this, you should create a
verified group with only 2 people. If the other person loses their device but
not their account, you can still communicate in the 1:1 chat. ([Read more](#verdiff))


### Какие стандарты используются для сквозного шифрования?

- [Autocrypt](https://autocrypt.org) используется для создания 
сквозного шифрования с пользователями Delta Chat и другими почтовыми приложениями поддерживающими Autocrypt.
 Autocrypt использует ограниченное подмножество функций OpenPGP.

- Delta Chat реализует [протоколы настройки противодействию MITM, для контактов и проверенных групп](https://countermitm.readthedocs.io/en/latest/new.html) для обеспечения защиты от активных сетевых атак. Это выходит за рамки беспринципной
 базовой защиты Autocrypt 1 уровня, сохраняя при этом простоту использования.

### В чём разница между проверенными группами и чатами 1-на-1 с проверенными контактами? {#verdiff}

- Чаты 1-на-1 с проверенным контактом и проверенными группами это не одно и то же, даже
 если в проверенной группе всего 2 человека. Одно из отличий состоит в том, что вы
 можете легко добавить больше людей, но конечно, есть и другие
 отличия.

- Проверенные группы неизменно защищены. Любая поломка (незашифрованный текст или неправильно
 подписанное сообщение и т.п.) будут отмечены, и не будут отображаться в
 чате. Вы можете быть уверены, что все сообщения с галочкой в этом проверенном чате
 не были прочитаны или изменены третьими лицами.

- Чаты 1-на-1 являются условными, они предназначены для того, чтобы люди 
могли общаться независимо от того, меняют ли они почтовые клиенты, устройства, настройки и т. д. Вот почему нет 
галочки проверено, даже если вы проверили контакт.


### Поддерживает ли Delta Chat - Perfect Forward Secrecy?

- Нет, OpenPGP не поддерживает Perfect Forward Secrecy. Perfect Forward Secrecy
работает в режиме сеанса, а электронная почта по своей природе асинхронна
и часто используется с нескольких устройств независимо. Это означает, что если ваш
секретный ключ Delta Chat будет известен, и у кого-то есть запись
всех ваших переданных сообщений, они смогут их прочитать.

- Обратите внимание, если кто-то захватил или взломал ваш рабочий телефон, он, 
как правило, сможет прочитать все сообщения, независимо от того, установлено ли Perfect Forward Secrecy,
 или нет. Наличие доступа к одному из устройств участника группы,
 как правило, раскрывает большую часть социального графа. Использование адресов электронной почты, которые
нелегко отследить - помогает участникам группы оставаться в безопасности от
последствий захвата устройства.

- Мы прорабатываем способы лучшей защиты коммуникаций в случае
захвата устройства.


### Как Delta Chat защищает мои метаданные?

- Поскольку Delta Chat является децентрализованным мессенджером, метаданные пользователей Delta Chat
не хранятся на одном центральном сервере. Однако они хранятся на почтовых
 серверах отправителя и получателя сообщений.

- Каждый почтовый сервер в настоящее время знает о том, кто отправил и кто получил сообщение,
проверяя незашифрованные заголовки "To (Кому:) / Cc (Копия:)" и, таким образом, определяя, какие адреса электронной почты
являются частью группы. Delta Chat мог бы полностью избегать незашифрованных заголовков To/Cc
и всегда помещать их только в зашифрованный раздел. Посмотрите:
[Избегайте отправки заголовков To/CC для проверенных групп](https://github.com/deltachat/deltachat-core-rust/issues/1032).
Для условных чатов основная проблема заключается в том, как это влияет на другие почтовые приложения, которые
могут участвовать в общении.

- Многие другие заголовки электронной почты, в частности заголовок "Тема",
 защищены сквозным шифрованием, посмотрите также: [IETF
RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Можно ли повторно использовать существующий секретный ключ?

- Да. Лучший способ — отправить сообщение с параметрами Autocrypt с другого почтового клиента. Ищите что-то вроде **Начать передачу настроек Autocrypt** в настройках другого клиента и следуйте указанным там инструкциям.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Если у вас нет ключа или вы не знаете, нужен он или нет, не волнуйтесь: Delta Chat сгенерирует его по мере необходимости, вам не нужно даже нажимать кнопку для этого. 


### Я не могу импортировать мой существующий ключ PGP в Delta Chat.

Вероятная причина заключается в том, что ваш ключ зашифрован и/или использует
пароль. Такие ключи не поддерживаются Delta Chat. Вы можете удалить
шифрование парольной фразы и пароль, а затем повторить попытку импорта. Если вы хотите
сохранить свою парольную фразу, вам придется создать псевдоним электронной почты для использования
 Delta Chat, чтобы ключ Delta Chat был привязан к этому псевдониму электронной почты.

Delta Chat поддерживает расспространённые форматы закрытых ключей OpenPGP, однако
маловероятно, что мы будем поддерживать все закрытые ключи из любых источников. Это
 не является главным фокусом Delta Chat. На самом деле, подавляющее большинство
пользователей Delta Chat не будут иметь никакого ключа, прежде чем они начнут использовать его.
Однако мы стараемся поддерживать закрытые ключи из как можно большего числа источников.

Удаление пароля закрытого ключа будет отличаться в зависимости от программного обеспечения, используемого для управления ключами PGP. 
В Enigmail вы можете установить пустой пароль в окне управления ключами. 
В GnuPG вы можете установить его [через командную строку](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Для других программ ищите решение в интернете.


## Мультиклиент {#multiclient}

### Можно ли использовать Delta Chat на нескольких устройствах одновременно?

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

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### Есть ли какие-либо планы по внедрению веб-клиента Delta Chat?

- Ближайших планов нет, но есть некоторые предварительные идеи.
- Существуют 2-3 способа внедрения веб-клиента Delta Chat, но все
они требуют значительных усилий. На данный момент мы сосредоточены на выпуске стабильных релизов во всех
магазинах приложений (Google Play/iOS/Windows/macOS/Linux).
- Если вам нужен веб-клиент, поскольку вы не можете устанавливать программное обеспечение на
компьютере, на которым вы работаете, вы можете использовать портативный настольный клиент Windows
или AppImage для Linux. Вы можете найти их на
[get.delta.chat](https://get.delta.chat).


### Для чего нужен параметр "Отправить копию себе"?

Отправка копии ваших сообщений себе гарантирует, что вы получите свои собственные
сообщения на всех устройствах. Если у вас есть несколько устройств и вы не включили его, вы
видите только сообщения от других людей и сообщения, которые вы отправляете с
текущего устройства.

Копия отправляется в папку "Входящие", а затем перемещается в папку DeltaChat; она не
помещается в папку "Отправлено". Delta Chat *никогда* ничего не загружает в папку Отправлено
, потому что это означало бы загрузку сообщения дважды (один раз через SMTP
и один раз через IMAP в папку Отправлено).

Значение для "Отправить копию себе" по умолчанию - нет.

### Для чего нужен параметр "следить за папкой Отправлено"?

Этот параметр, важен для тех, кто использует другую
почтовую программу (например, Thunderbird) вместе с приложением Delta Chat.

Однако мы рекомендуем использовать настольный клиент Delta Chat; вы можете скачать его
на [get.delta.chat](https://get.delta.chat). Возможность "слежения за папкой Отправлено"
может быть убрана в будущем. Эта функция была представлена в то время, когда не было
 настольного клиента Delta Chat доступного на всех платформах.

### Почему я могу отключить "следить за папкой Delta Chat"?

Некоторые люди используют Delta Chat в качестве обычного почтового клиента и хотят использовать папку "Входящие"
для своей почты вместо папки DeltaChat. Если вы отключите функцию "следить за
папкой DeltaChat", вы также должны отключить "переместить сообщения чата в DeltaChat".
В противном случае удаление сообщений или настройки могут работать неправильно.


## Private Apps / webxdc {#webxdc}

In Delta Chat, you can share "private apps", attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger. The technical term is [webxdc](https://webxdc.org).


### How private are private apps?

- Private apps can not send data to the Internet, or download anything.
- A private app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a private app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the private app as well.
- This also means: it can be a privacy risk to open private apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get private apps?

- In general, there is no curated appstore and Delta Chat is not responsible
  for private apps or their content. Anyone can share private apps with each
  other without restrictions.
- You can find some example apps on [webxdc.org](https://webxdc.org).
- Many people write their own private apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own private apps?

- Private apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimental Features

We are very grateful about feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. (You
like experiments? Register through "Sign up -> with Delta Chat"!)

### How can I use audio/video calls with Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "videochat instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to your jitsi/BBB room. This
  way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### Что такое проверенная группа? Почему это экспериментальная функция?

- Проверенная группа - это чат, который гарантирует безопасность от активного
 злоумышленника. Все сообщения в проверенном чате зашифрованы сквозным шифрованием, а
 участники могут присоединиться, сканируя QR-код приглашение. Таким образом, все участники 
связаны друг с другом цепочкой приглашений, которые гарантируют 
криптографическую согласованность от активных сетевых атак или атак провайдера. 
Смотрите [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) 
о исследованиях и разработке данной функции.

- As of Oct 2022, "verified groups" remain an experimental feature. It is
  continuously improved and many bugs have been fixed since the original
  introduction in 2018. However, there remain cases, especially with large
  groups where inconsistencies can occur, or messages become unreadable.


### What are Broadcast Lists and how can I use them?

- With a Broadcast List you can send a message to many recipents at once; when
  they reply to you, you get the reply in your direct 1:1 chat with them. The
recipients can't see each other.
- Technically, it is an E-Mail with many recipients in BCC.
- You can turn on the feature in the "experimental features" section in the
  advanced settings. Then you can create a Broadcast List from the "New Chat"
dialog.
- In case you are using more than one device, Broadcast Lists are currently not
  synced between them.
- Messages sent to broadcast lists are not encrypted. Encryption would break
  anonymity, because then all recipients would know who else received it
  (Sending individual mails to everyone would be worse for rate limit and network
  consumption reason).


### How can I share my location with my chat partners?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat
  partners. *But:* to show the map, we need to download map tiles from
  mapbox.com, so if you *view* the map, mapbox.com is asked for the map of a
  specific area. If this is a privacy risk for you, this feature might not be
  for you. We are working on finding a decentralized alternative for Mapbox.
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### What does the experimental database encryption actually protect?

- Right now, the database encryption is still very experimental. Don't rely on
  it for protection, you should additionally use encryption of your operating
  system, if it provides any.
- The database encryption does not yet encrypt the blobs, only the rows and
  columns of the database. This more or less means that your messages are safe,
  but not your attachments.
- For iOS and Android, the encryption keys are stored in the system keychain.
  This means the encryption is as secure as the operating system it's running
  on.
- The Delta Chat desktop client doesn't offer database encryption yet, as there
  is no standard way to store the encryption keys on the different supported
  platforms.


### Why can I choose to only watch the DeltaChat folder?

Это экспериментальная функция для некоторых людей, которые экспериментируют с
правилами на стороне сервера. Не все провайдеры поддерживают это, но с некоторыми вы можете переместить
все письма с заголовком "Chat-Version" в папку DeltaChat. Обычно это
делается с помощью приложения Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- включено правило на стороне сервера для перемещения всех сообщений с заголовком "Chat-Version" в папку Delta Chat, и
- установлен параметр "Показывать классические электронные письма" со значеним "Нет, только чаты".

In this case, Delta Chat doesn't need to watch the Inbox, and it's enough to only watch the DeltaChat folder.


### How can I change my account to a different e-mail address?

1. Change your address at the “Password and Account” seetings screen in Delta
   Chat, enter your password (and if necessary, server settings) for the new
   account
2. If possible, make your old e-mail provider forward all e-mails to your new
   email address
3. Tell your contacts that you changed your address. If you write this to a
   verified group, they will acknowledge this automatically.

To learn about the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Другое

### Поддерживает ли Delta Chat работу с _моим_ провайдером электронной почты?

- В большинстве случаев - да :)  
  Тем не менее, для корректной работы некоторых почтовых служб (провайдеров)
  требуются специфические настройки;
  смотрите [Обзор провайдеров](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### Если Delta Chat использует электронную почту, действительно ли это сервис обмена мгновенными сообщениями (мессенджер)?

- Отправка и получение сообщений обычно занимает несколько секунд. Иногда
  есть случаи, когда это занимает больше времени, но это, возможно, верно и для
  любого другого мессенджера.
- Мгновенный чат работает быстро, если обе стороны активно используют приложение. Иногда это
  происходит медленнее, если приложение работает в фоновом режиме.
- Получение сообщений тогда может занять несколько минут, потому что и Android, и iOS часто
  останавливают работу Delta Chat в фоновом режиме и только иногда пробуждают его
  . Эта искусственная задержка обычно хуже работает на iOS, чем на Android.
- Однако Android и iOS убивают приложения, работающие в фоновом режиме, что является
  проблемой для многих законных приложений. Для получения дополнительной информации см.
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### Совместим ли Delta Chat с Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is not 
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Меня интересуют технические детали. Можете рассказать больше?

- Смотрите [Стандарты, используемые в Delta Chat]({% include standards-url %}).

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
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

### Как финансируются разработки Delta Chat?

Delta Chat не получает никакого венчурного капитала,
не имеет долгов, и не ставит целью заработать огромную прибыль или 
продавать пользователей, их друзей и семью рекламодателям (или ещё кому-либо). 
Мы предпочитаем использовать государственные источники финансирования далёкие от Евросоюза и США, чтобы
продолжить создавать децентрализованную экосистему обмена сообщениями,
основанную на Свободном и Открытом исходном коде.

Конкретно до этого момента, разработки Delta Chat финансировались из этих источников:

- Проект [NEXTLEAP](https://nextleap.eu) финансировал исследование
и внедрение проверенных групп, а также настройку контактных протоколов
в 2017 и 2018 году, а ещё помог внедрить сквозное шифрование
через [Autocrypt](https://autocrypt.org).

- [Фонд открытых технологий](https://opentechfund.org) предоставил нам 
два гранта. Первый грант 2018/2019 года (~$200 тыс.) помог значительно улучшить Android приложение 
и выпустить бета-версию настольного клиента, кроме того 
закрепил наши разработки в области исследований UX в контексте прав человека, 
смотрите наш отчёт [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
Второй грант 2019/2020 года (~$300 тыс.) помог нам 
выпустить Delta/iOS версии, преобразовать нашу основную библиотеку Rust, а также
предоставить новые функции для всех платформ.  

- Фонд [NLnet](https://nlnet.nl/) в 2019/2020 году выделил 46 тысяч евро на
завершение привязки Rust/Python и создание экосистемы ботов.

- В 2021 мы получили дополнительное финансирование из ЕС для двух Next-Generation-Internet
целей, а именно для [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97 тыс. евро) и [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90 тыс. евро). Это привело к улучшению поддержки мультиклиентности, QR-кодов, настройки контактов и групп, и множеству улучшений в работе сети для всех платформ.

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

  [Donate Money](donate){: .cta-button}

- И последнее, но далеко не менее важное: несколько экспертов и энтузиастов на общественных началах внесли
 и вносят свой вклад в развитие Delta Chat, не получая денег, а только
небольшие суммы. Без них Delta Chat не был бы там, где он есть сегодня,
даже близко.

Упомянутые выше денежные сборы было организованы компанией merlinux GmbH в городе
Фрайбург (Германия), и распределяются среди более чем дюжины участников по всему миру. 

Please see [Delta Chat Contribution channels](https://delta.chat/en/contribute) 
for both monetary and and other contribution possibilities.  
