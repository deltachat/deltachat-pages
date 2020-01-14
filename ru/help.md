---
title: FAQ
lang: ru
render_toc: true
header: Часто задаваемые вопросы
---



<!-- GENERATED FILE -- DO NOT EDIT -->




## Что такое Delta Chat? 

Delta Chat — это новое приложение для чата, которое отправляет сообщения по электронной почте, зашифрованные, если это возможно, с помощью Autocrypt. 
**Вам не нужно нигде регистрироваться, просто используйте существующую учётную запись электронной почты в Delta Chat.** 


### Как мне найти людей для общения? 

С помощью Delta Chat вы можете писать на любые существующие адреса
электронной почты, даже если получатель не использует приложение Delta Chat.
Получателю не нужно устанавливать то же приложение, что и у вас, в отличии от других мессенджеров.


### Каковы преимущества Delta Chat по сравнению с другими мессенджерами?

_Независимый_ от любой компании или сервиса. _Вы_ распоряжаетесь своей информацией.
- Ваши данные не сохраняются на центральном сервере, если только все пользователи не используют те же самые почтовые серверы.
- Вы не отдаёте свою адресную книгу никому.
- _Быстрый_ благодаря использованию IMAP push.
- _Доступный максимальному количеству пользователей_ - получатель, _не_ использующий Delta Chat, может получить ваше сообщение.
- _Совместимый_ не только с самим собой.
- _Элегантный_ и _простой_ интерфейс пользователя.
- _Децентрализованная_ система.
- _Без спама_ - по умолчанию показываются сообщения только от известных отправителей.
- _Надёжный_ - безопасен для профессионального использования.
- _Заслуживает доверия_ - можно использовать даже для деловой переписки.
- Основан на _свободном (copyleft)_ соответствующем _стандартам_ программном обеспечении.


### Какие сообщения отображаются в Delta Chat?

Delta Chat автоматически показывает:

- Сообщения от контактов в вашей **адресной книги**
- Сообщения от контактов, которым **вы писали сами**
- **Ответы** на сообщения отправленные вами

Другие сообщения не отображаются автоматически и их можно найти в основном меню в разделе **Запросы контактов**. При желании чат можно начать оттуда.


### Как насчёт спама?

- Сообщения в общих папках нежелательной почты игнорируются, а содержащиеся в них адреса не считаются известными контактами.
- Поскольку сообщения от неизвестных контактов не появляются автоматически, как правило, **спама нет**.
- Конечно, при необходимости вы можете **заблокировать** любой контакт.


### Поддерживает ли Delta Chat вложения фото, видео или другие?

- Да. Помимо обычного текста, все вложения электронной почты отображаются в виде отдельных сообщений. В исходящие сообщения вложения встраиваются по мере необходимости автоматически.


### Кто видит моё изображение в профиле?

- You can add a profile picture in your settings. If you write to your contacts
  or add them via QR code, they automatically see it as your profile picture.

- Contacts who don't use Delta Chat see it as an E-Mail attachment.

- For privacy reasons, no one sees your profile picture until you write a
  message to them.

- Your profile picture isn't sent with every message, but regularly enough that
  your contacts will re-receive your profile picture, even if they add a new
  device.


### Поддерживает ли Delta Chat электронную почту в формате HTML?

- Да. Если во входящей электронной почте отсутствует текстовая часть, HTML-сообщение  преобразуется в текстовый вид в приложении. Исходящие сообщения всегда используют простой текст.


### Почему я должен вводить свой пароль от электронной почты в Delta Chat? Это безопасно?

As with other E-Mail programs like Thunderbird, K9-Mail, or Outlook, the
program needs the password so you can use it to send mails. Of course, the
password is stored only on your device. The password is only transmitted to
your E-Mail provider (when you login), which has access to your mails anyway. 

If you use an E-Mail provider with OAuth2 support like gmail.com or yandex.ru,
there is no need to store your password on the device. In this case, only an
access token is used.

As Delta Chat is Open Source, you can check the [Source
Code](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
if you want to verify that your credentials are handled securely. We are happy
about feedback which makes the app more secure for all of our users.


### Какие разрешения Android нужны для Delta Chat?

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
  - ask to ignore battery optimisations: for users who want to receive messages all the time


## Группы

### Создание группы

- Выберите **Добавить группу** в меню в правом верхнем углу списка чатов.
- На следующем экране выберите **участники группы** и отметьте галочку в правом верхнем углу. После этого, вы можете ввести **название группы**.
- Как только вы наберете **первое сообщение** в группе, все участники группы узнают о ее существовании и смогут ответить вам здесь же (до тех пор, пока вы не напишете сообщение в группу, группа будет невидима для остальных участников).


### Добавление участников в группу

- Каждый участник группы имеет **те же права**, что и любой другой. По этой причине каждый может удалить любого участника или добавить нового.
- Чтобы добавить или удалить участников, нажмите на название группы в чате.


### Что такое проверенная группа? Почему это экспериментальная функция?

- A verified group is a chat that gurantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature. 

- As of Dec 2019, a "verified group" remains an experimental feature.
  It is continously improved and many bugs have been fixed since the
  original introduction in 2018.  However, there remain cases, especially 
  with large groups where inconsistencies can occure, or messages become 
  unreadable.  Early 2020 a security review is upcoming, and several new
  developments around qr-join protocols are taking place so chances
  are we remove the "experimental" label not too far in the future. 


### Я случайно себя удалил.

- Поскольку вы больше не являетесь членом группы, вы не можете добавлять себя снова. 
  Тем не менее, проблемы нет, просто попросите любого другого члена группы в обычном чате повторно добавить вас.


### Я больше не хочу получать сообщения группы.

- Либо удалите себя из списка участников, либо удалите весь чат. 
  Если позже вы снова захотите присоединиться к группе, попросите другого члена группы добавить вас.

- Или, в качестве альтернативы, вы также можете отключить уведомления для группы - это означает, что вы будете получать все сообщения и сможете их писать, но больше не будете получать уведомления о новых сообщениях.


## Шифрование {#encryption}

### Поддерживает ли Delta Chat сквозное шифрование?

- Да. В Delta Chat реализован стандарт Autocrypt Level 1 и поэтому
защищённые сквозным (E2E) шифрованием сообщения совместимы с
другими приложениями, поддерживающими Autocrypt.


### Что нужно сделать, чтобы активировать сквозное шифрование?

- Ничего.

- Приложения Delta Chat (и другие [Autocrypt](https://autocrypt.org)-совместимые
  почтовые приложения) делятся ключами сквозного шифрования автоматически после отправки первого сообщения. 
  После этого все участники переписки подключаются к протоколу сквозного шифрования автоматически. 
  Если один из участников переписки использует приложение, не поддерживающее 
  Autocrypt, последующие сообщения не шифруются до тех пор, пока совместимое с 
  Autocrypt не будет снова доступно у всех участников. 

- Если вы хотите _отключить_ сквозное шифрование, используйте соответствующий пункт в меню "Настройки" / "Расширенные настройки".


### Если сквозное шифрование недоступно, связь не шифруется вообще?

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 


### Как проверить криптографический статус у нас с отправителем? 

В профиле пользователя будет видна следующая информация:

- Нажмите "QR-код приглашения" в Android, а затем используйте кнопку
  "Сканировать QR-код" на другом устройстве для сканирования этого кода.
  Если оба устройства находятся в сети, на них будет открыт канал общения
  друг с другом (если он ещё не существует) и ключи шифрования будут проверены. 
  Оба увидят системное сообщение "отправитель проверен" в их чате 1-на-1.

- При использовании сквозного шифрования будут показаны отпечатки двух ключей.
  Если они совпадают на обоих устройствах, то соединение безопасно.

- При использовании транспортного шифрования просто отображается его состояние.


### Как проверить шифрование сообщений?

- Если за сообщением виден маленький **замок**, значит это сообщение зашифровано _и_ отправлено с использованием протокола сквозного шифрования, а также что _и_ ваш ответ тоже будет зашифрован.

- Если **нет замка**, сообщение обычно передаётся в незашифрованном виде, например, потому что вы или отправитель отключили сквозное шифрование, или отправитель использует приложение без поддержки сквозного шифрования.


### Какие стандарты используются для сквозного шифрования?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. Moreover, 
  Delta Chat implements the "countermitm" protocols to achieve
  protection against active network attacks, going beyond the opportunistic
  base protection of Autocrypt, see questions about "Verified Groups".


### В чём разница между проверенными группами и чатами 1-на-1 с проверенными контактами?

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


### Does Delta Chat support Perfect Forward Secrecy?

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


### Как Delta Chat защищает мои метаданные?

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently know about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Можно ли повторно использовать существующий закрытый ключ?

- Да. Лучший способ — отправить сообщение с параметрами Autocrypt с другого почтового клиента. Ищите что-то вроде **Начать передачу настроек Autocrypt** в настройках другого клиента и следуйте указанным там инструкциям.

- Можно также импортировать ключ вручную в "Дополнительные параметры"  > "Управление ключами". Внимание: убедитесь, что ключ не защищён паролем или удалите пароль заранее.

Если у вас нет ключа или вы даже не знаете, что он вам понадобится, не волнуйтесь: Delta Chat сгенерирует его по мере необходимости, вам не нужно даже нажимать кнопку для этого. 


### Я не могу импортировать мой существующий ключ PGP в Delta Chat.

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You may remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Format wise, Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

Удаление пароля приватного ключа будет отличаться в зависимости от программного обеспечения, используемого для управления ключами PGP. 
В Enigmail вы можете установить пустой пароль в окне управления ключами. 
В GnuPG вы можете установить его [через командную строку](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Для других программ ищите решение в интернете.


### Почему не используется pEp (pretty easy privacy)?

- Delta Chat использует стандарт сквозного шифрования Autocrypt.
  Сравнение Autocrypt и pEp смотрите в [Autocrypt FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Мультиклиент {#multiclient}

### Можно ли использовать Delta Chat на нескольких устройствах одновременно?

Если вы хотите использовать **одну и ту же учётную запись** на различных устройствах (с поддержкой Autocrypt), необходимо синхронизировать их возможности шифрования: 

- На первом устройстве выберите "Дополнительные параметры" / "Отправить сообщение с параметрами Autocrypt" и удерживайте кнопку нажатой до тех пор, пока не появится "защитный код".

- На другом устройстве дождитесь "Сообщения с параметрами Autocrypt" и нажмите на него, что приведёт к запросу защитного кода.

- Теперь синхронизация выполнена и можно использовать оба устройства для отправки и получения сообщений, защищённых сквозным (E2E) шифрованием, вашим партнёрам по общению. 


## Другое

### Поддерживает ли Delta Chat работу с _моим_ провайдером электронной почты?

- В большинстве случаев: да :)  
  Тем не менее, для корректной работы некоторых почтовых служб (провайдеров)
  требуются специфические настройки;
  смотрите [Обзор провайдеров](https://providers.delta.chat)


### Меня интересуют технические детали. Можете рассказать больше?

- Смотрите [Стандарты, используемые в Delta Chat]({% include standards-url %}).

