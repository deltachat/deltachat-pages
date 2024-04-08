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

- _Незавим_ от любых компаний и сервисов. _Вы_ владеете вашими данными.
- Ваши данные не хранятся на центральном сервере, если только 
  все пользователи не используют одни и те же серверы электронной почты.
- Вы никому не передаете свою адресную книгу.
- _Быстрый_ за счет использования Push-IMAP.
- _Большая база пользователей_ - адресаты, _не_ использующие Delta Chat, также могут быть доступны.
- Никакого спама - по умолчанию отображаются только сообщения известных пользователей.
- _Сквозное шифрование_ с помощью Autocrypt.
-  Свободное ПО на основе _копилефта_ и _стандартов_.
- _Гибкая идентификация_ со встроенной поддержкой [нескольких учетных записей](#multiple-accounts)


### Какие сообщения отображаются в Delta Chat?

По умолчанию Delta Chat показывает все сообщения электронной почты.

В разделе "Настройки -> Чаты и
Медиа -> Показывать классические электронные письма" вы можете изменить этот параметр. У вас есть эти опции:

- "Нет, только чаты": Отображаются только сообщения и ответы отправленные другими пользователями Delta Chat.
  Это наиболее целесообразно, если вы используете одну и ту же
  учетную запись электронной почты и для обычной почты.
- "Все": Delta Chat показывает все сообщения, отправленные на ваш электронный адрес.
  Это имеет смысл, если вы хотите использовать Delta Chat для всех своих писем,
  чтобы ни одно сообщение не было потеряно. Это настройка по умолчанию.
- "Для принятых контактов": Delta Chat показывает все сообщения электронной почты от контактов,
  с которыми у вас уже есть чат, но новые чаты появляются только для сообщений Delta Chat.
  Это помогает в каждом конкретном случае решить, хотите ли вы вести разговор
  в Delta Chat или в "обычном" приложении электронной почты.


### Что если я ожидаю сообщение от кого-то кому я ранее не писал?

- Если сообщение приходит от неизвестного контакта, оно отображается как **запрос**. Вам
  необходимо принять запрос, чтобы ответить.
- Вы также можете "удалить" его, если не хотите общаться с ним в данный момент. Это
  не удаляет сообщение на сервере, а только на вашем устройстве. Таким образом, вы можете
  по-прежнему работать с сообщением в другом почтовом приложении.
- Если вы удалите запрос, будущие сообщения от этого контакта по-прежнему будут отображаться
  как запрос сообщения, так что вы можете передумать. Если вы действительно не хотите
  получать сообщения от этого человека, подумайте о том, чтобы *заблокировать* его.


### Поддерживает ли Delta Chat вложения фото, видео или другие?

- Да. Помимо обычного текста, все вложения электронной почты отображаются в виде отдельных сообщений. В исходящие сообщения вложения встраиваются по мере необходимости автоматически.

- Для лучшей производительности изображения по умолчанию оптимизируются и отправляются в меньшем размере, но вы можете отправить его в виде "файла", чтобы сохранить оригинал.

<h3 id="multiple-accounts">Как я могу добавить или сменить аккаунт?</h3>

Вы можете легко работать с дополнительными учетными записями в мобильном и настольном клиентах Delta Chat, нажав либо:
- на кнопку меню и затем "Переключить аккаунт" (Android и настольный компьютер)
- или на значок профиля и затем "Добавить аккаунт" (iOS).

Возможно, вы также захотите узнать [как добавить учетные записи на несколько устройств](#multiclient).

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


### Can I set a Signature Text/Status/Motto with Delta Chat? {#signature}

Yes,
you can do so under "Settings > Profile > Signature Text".
Your contacts who use Delta Chat will see it
when they view your contact details.
To everyone else,
It will appear as an e-mail signature
below the text of all your messages.


### Поддерживает ли Delta Chat электронную почту в формате HTML?

Yes, incoming HTML messages come with a "Show full message" button. 
Outgoing messages always use plain text.


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

### What do Pinning, Muting and Archiving mean?

Используйте эти инструменты чтобы организовать ваши чаты:

- **Закрепленные чаты** всегда находятся наверху списка чатов. Вы можете использовать их чтобы быстро получать доступ к вашим любимым чатам или чтобы не забыть о важных вещах.

- **Mute chats** if you do not want to get notifications for them. Muted chats stay in place and you can also pin a muted chat.

- **Archive chats** if you do not want to see them in your chat list any longer.
  Archived chats remain accessible above the chat list or via search. 

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


### Что означает зеленая точка?

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


### Как работают исчезающие сообщения? {#ephemeralmsgs}

Вы можете включить "исчезающие сообщения"
в настройках чата,
в правом верхнем углу окна чата,
выбрав временной интервал
от 1 минуты до 5 недель.

Пока настройка не будет снова отключена,
приложение Delta Chat каждого участника чата позаботится 
об удалении сообщений
по истечении выбранного периода времени.
Отсчет времени начинается
когда получатель впервые видит сообщение в Delta Chat.
Сообщения удаляются
как в каждой учетной записи электронной почты на сервере,
и в самом приложении.

Note that you can rely on disappearing messages
only as long as you trust your chat partners;
malicious chat partners can take photos,
or otherwise save, copy or forward messages before deletion.

Apart from that,
if one chat partner uninstalls Delta Chat,
the messages will not get deleted from their email account.
They will most likely also not be decryptable anymore
(as long as they were encrypted in the first place).


### Как я могу удалить аккаунт?

As you use an e-mail account for Delta Chat,
how you can delete your account depends on your e-mail provider.
We don't have any control over your e-mail account,
so unfortunately we can't help you with that.

If you want to keep the account,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.


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


### Что произойдет, если я включу функцию "Удалять старые сообщения с сервера"?

- По умолчанию Delta Chat хранит все сообщения локально на вашем устройстве.
  Если вы, например, хотите сэкономить место у своего почтового провайдера,
  вы можете настроить Delta Chat
  автоматически удалять старые, уже полученные сообщения на сервере.
  Они по-прежнему остаются на вашем устройстве, пока вы не удалите их там же.

- To turn it on, go to **Delete Old Messages → Delete Messages from Server**
  in the "Chats and Media" settings.
  You can set a timeframe between "At once" and "After 1 year".
  All e-mails received by Delta Chat will be deleted from the server after this timeframe.

- Note that if you use Delta Chat on more than one device,
  you need to leave the message on the server with a sufficient timeframe
  so that the other device(s) can download them, too.


### Что произойдет, если я включу функцию "Удалять старые сообщения с устройства"? {#delold}

- Если вы хотите сэкономить место на устройстве,
  можно выбрать функцию автоматического удаления старых сообщений.
- Чтобы включить эту функцию, перейдите к пункту "Удалять старые сообщения с устройства" в настройках "Чаты и медиа".
 Вы можете установить временной интервал от "через час" до "через год";
  таким образом, *все* сообщения будут удаляться с устройства,
  как только они станут старше этого срока.


## Шифрование и безопасность

### Какие стандарты используются для сквозного шифрования? 

[Autocrypt](https://autocrypt.org) используется для автоматического
установки сквозного шифрования при работе с контактами и групповыми чатами.
Autocrypt использует ограниченное и [подмножество стандарта OpenPGP](#openpgp-secure).
Зашифрованные сообщения помечаются навесным замком 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>.

[Secure-Join protocols](https://securejoin.delta.chat/en/latest/new.html)
используются для создания чатов с гарантированным сквозным шифрованием. 
что защищает от сетевых атак и взлома серверов.
Чаты, отмеченные зеленой галочкой 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
гарантируют сквозное шифрование сообщений. 

### Как узнать зашифрованы ли сообщения сковзным шифрованием? {#whene2e}

Все сквозные зашифрованные сообщения отображаются с навесным замком:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

Сквозное шифрование гарантировано, если рядом с заголовком чата стоит зеленая галочка:

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### Как получить гарантированное сквозное шифрование и зеленые галочки? {#howtoe2ee}

Встретьтесь с партнером по чату вне Delta Chat, предпочтительно лично.
но можно использовать и второй канал, например, видеочат
или другой мессенджер тоже подойдет.
Выполните следующую процедуру показа/сканирования QR с вашим партнером по чату.
Один из вас - "Приглашающий", другой - "Присоединившийся". 

**Сторона приглашающего**:

- Приглашение в группу: 
  Нажмите на название чат-группы, чтобы увидеть список ее участников, и выберите "QR-код приглашения". 
  Поделитесь QR-изображением с собеседником лично или по второму каналу.

- Direct 1:1 chat invitation: 
  Tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen.
  Share the QR image with the other side either in person or through a second channel.

**Сторона приглашённого**:

- Tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen.

- Выберите "Сканировать QR код" и отсканируйте QR-код 
  который вы видите у партнера по чату во втором канале.

- Нажмите "OK".


**Оба пришлатель и приглашённый**:

Подождите, пока между устройствами будет происходить обмен [сетевыми сообщениями Secure-Join](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol).

- Если оба устройства находятся в сети,
  обе стороны в конечном итоге увидят (групповой или прямой) чат с зеленой галочкой
 <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
  рядом с названием.

- Если одно из устройств находится в автономном режиме, зеленые галочки появятся только тогда.
  появятся позже, когда устройство снова будет подключено к Интернету
  и сетевой протокол Secure-Join будет завершен. 

Поздравляем! 
Теперь вы будете автоматически использовать гарантированное сквозное шифрование
с этим контактом, и вы оба сможете добавлять друг друга в группы, отмеченные зеленым флажком
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>,
тем самым автоматически распространяя гарантированное сквозное шифрование среди ее членов. 


### Что означает зеленая галочка и "гарантированное сквозное шифрование"? {#e2eeguarantee}

Названия чатов с зелеными галочками
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
означают, что все сообщения в чате будут зашифрованы от конца до конца
и не могут быть прочитаны или изменены взломанными серверами электронной почты или интернет-провайдерами. 
Присоединение к групповым чатам с зелеными отметками
безопасно распространяет информацию о шифровании (и зеленые отметки)
таким образом, чтобы гарантировать сквозное шифрование в группе и между ее участниками. 

Профили контактов с зелеными галочками 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
означают, что обмен сообщениями с контактом в настоящее время гарантированно зашифрован.
Каждый контакт с зеленой галочкой либо совершил с вами прямой [QR-сканирование](#howtoe2ee)
либо был представлен другим контактом с зеленой отметкой.
Знакомство происходит автоматически при добавлении участников в группы. 
Тот, кто добавляет контакт в группу, отмеченную зеленым флажком, становится представителем 
для тех участников, которые еще не знают о добавленном контакте.
В профиле контакта можно несколько раз нажать на текст "Представлен ..."
пока не дойдете до того, с кем вы непосредственно провели [QR-сканирование](#howtoe2ee).

Обратите внимание, что в профиле контакта вы можете увидеть и коснуться знакомых 
но в заголовке профиля нет зеленой галочки. 
Обычно это означает, что контакт ["отправил сообщение с другого устройства"](#nocryptanymore). 

Для более подробного обсуждения "гарантированного сквозного шифрования"
пожалуйста, смотрите [Secure-Join protocols](https://securejoin.delta.chat/en/latest/new.html)
и, в частности, читайте о "Проверенных группах", техническом термине
того, что здесь называется "чатами с зелеными галочками" или "чатами с гарантированным сквозным шифрованием".


### A contact "sent a message from another device", what can i do? {#nocryptanymore}

Your chat with a contact lost guaranteed end-to-end encryption. 
The green checkmark was removed for this chat and contact when you see this warning. 
**If you find the sudden drop of guaranteed end-to-end encryption 
surprising for this contact then don't accept the warning!**
Instead check with your contact through a second channel 
like a video call, other messenger or a phone call,
to find out what happened. 

Если ваш контакт действительно привел к снижению уровня гарантированного сквозного шифрования
пожалуйста, ознакомьтесь с распространенными причинами и способами их устранения в следующих параграфах. 
Независимо от этого, все остальные чаты, отмеченные зеленым флажком, остаются гарантированно зашифрованными
даже если ваш собеседник является его участником. 

**Ваш собеседник использует Delta Chat на втором устройстве (телефоне или ноутбуке)**.

Если у них есть другое устройство с запущенным приложением Delta Chat,
им следует удалить учетную запись с нового устройства
и добавить его [как второе устройство, как описано здесь](#multiclient).
Как только они сообщат вам об этом, предупреждение исчезнет
и гарантированное шифрование будет установлено на обоих устройствах вашего собеседника. 

**Your contact reinstalled Delta Chat using their old account login**
 
If they have [a backup file](#backup), 
they should remove the account from the new device 
and rather import the backup file to re-create their account. 
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
we recommend to use a Delta Chat optimized [e-mail server instance](https://delta.chat/serverguide)
to create pseudonymous temporary accounts through QR-code scans.
Note that Delta Chat apps on all platforms support multiple accounts 
so you can easily use action-specific "1-week" or "1-month" accounts next to your "main" account
with the knowledge that all temporary account data, along with all metadata, will be deleted.
Moreover, if a device is seized then contacts using temporary e-mail accounts
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
who is using their account both with Delta Chat and non-Autocrypt apps (e.g. webmail),
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

### Можно ли повторно использовать существующий секретный ключ?

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

### Я не могу импортировать мой существующий ключ PGP в Delta Chat.

С очень большой вероятностью проблема заключается в том, что ваш ключ зашифрован и/или использует пароль. Такие ключи не поддерживаются Delta Chat. Пожалуйста, удалите шифрование и пароль, после чего повторите попытку импорта.

Another common error is having the wrong file ending.
Use the ASCII armored format and an `.asc` file ending.

Delta Chat поддерживает расспространённые форматы закрытых ключей OpenPGP, однако
маловероятно, что мы будем поддерживать все закрытые ключи из любых источников. Это
 не является главным фокусом Delta Chat. На самом деле, подавляющее большинство
пользователей Delta Chat не будут иметь никакого ключа, прежде чем они начнут использовать его.
Однако мы стараемся поддерживать закрытые ключи из как можно большего числа источников.

Удаление пароля закрытого ключа будет отличаться в зависимости от программного обеспечения, используемого для управления ключами PGP. 
В Enigmail вы можете установить пустой пароль в окне управления ключами. 
В GnuPG вы можете установить его [через командную строку](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Для других программ ищите решение в интернете.

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
  See [here for the full background story on end-to-end security in the web](https://delta.chat/en/2023-05-22-webxdc-security).


## Мультиклиент {#multiclient}

### Можно ли использовать Delta Chat на нескольких устройствах одновременно?

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


### Troubleshooting

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
  You can use multiple accounts per device, just [add another account](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer {#backup}

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
  end-to-end encrypted messages with your communication partners.

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


## Experimental Features

We are very grateful for feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. 
You may conveniently login via Delta Chat and a QR code scan,
another rather stable experiment we run on the side (sic!).

### How can I use audio/video calls with Delta Chat?

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

1. Change your address in “Settings - Password and Account” and
   enter the password of your new account (and if necessary, server settings).
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


### Совместим ли Delta Chat с Protonmail / Tutanota / Criptext?

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


### Меня интересуют технические детали. Можете рассказать больше?

- Смотрите [Стандарты, используемые в Delta Chat]({% include standards-url %}).


### Как финансируются разработки Delta Chat?

Delta Chat не получает никакого венчурного капитала,
не имеет долгов, и не ставит целью заработать огромную прибыль или 
продавать пользователей, их друзей и семью рекламодателям (или ещё кому-либо). 
Мы предпочитаем использовать государственные источники финансирования далёкие от Евросоюза и США, чтобы
продолжить создавать децентрализованную экосистему обмена сообщениями,
основанную на Свободном и Открытом исходном коде.

Конкретно до этого момента, разработки Delta Chat финансировались из этих источников:

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

- [Фонд открытых технологий](https://opentechfund.org) предоставил нам 
два гранта. Первый грант 2018/2019 года (~$200 тыс.) помог значительно улучшить Android приложение 
и выпустить бета-версию настольного клиента, кроме того 
закрепил наши разработки в области исследований UX в контексте прав человека, 
смотрите наш отчёт [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
Второй грант 2019/2020 года (~$300 тыс.) помог нам 
выпустить Delta/iOS версии, преобразовать нашу основную библиотеку Rust, а также
предоставить новые функции для всех платформ.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system. 

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

Please see [Delta Chat Contribution channels](contribute)
for both monetary and and other contribution possibilities.  
