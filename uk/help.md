---
title: FAQ
lang: uk
render_toc: true
header: Часті питання
---


## Що таке Delta Chat?

Delta Chat це новий додаток для спілкування, який надсилає повідомлення через електронну пошту, зашифровані, якщо можливо, за допомогою Autocrypt.
**Вам не потрібно будь-де реєструватися, просто використовуйте з Delta Chat вашу наявну електронну пошту**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Як мені знайти людей для спілкування?

З Delta Chat ви можете писати на будь-яку адресу електронної пошти, навіть якщо адресат не використовує Delta Chat. Отримувач не повинен інсталювати такий само додаток, що і у вас, як у інших месенджерів.


### Які переваги Delta Chat у порівнянні з іншими месенджерами?

- _Незалежний_ від будь-яких компаній та сервісів. _Ви_ власник ваших даних.
- Ваші дані не зберігаються на центральному сервері.
- Ви не передаєте нікому свою адресну книгу.
- _Швидкий_ завдяки використанню Push-IMAP.
- _Найбільша користувацька база_ - адресати, що _не_ використовують Delta Chat може отримати ваше повідомлення.
- _Сумісний_ не тільки сам із собою.
- _Елегантний_ та _простий_ користувацький інтерфейс.
- _Розподілена_ система.
- _Без спаму_ - лише повідомлення від відомих користувачів відображаються за умовчанням.
- _Надійний_ - безпечний для професійного використання.
- _Вартий довіри_ - може використовуватись навіть для ділового спілкування.
- _Вільне_ програмне забезпечення засноване на _стандартах_.


### Які повідомлення відображаються у Delta Chat?

Delta Chat автоматично показує:

- Повідомлення від контактів з вашої **адресної книги**
- Повідомлення від контактів котрим **ви самі писали**
- **Відповіді** на повідомлення надіслані вами

Інші повідомлення не відображаються автоматично, і можуть бути знайдені у пункті головного меню **Запити контактів**. За бажанням розмову може бути розпочато звідти.


### Як щодо спаму?

- Повідомлення в загальних папках зі спамом ігноруються, а їх адреси не вважаються відомими контактами.
- Оскільки повідомлення від невідомих контактів не відображаються автоматично, то **спаму немає**.
- Однак, якщо необхідно, ви можете **заблокувати** буди-який контакт.


### Чи підтримує Delta Chat вкладення у вигляді фото, відео тощо?

- Так. Крім звичайного тексту, всі вкладення електронної пошти відображаються у вигляді окремих повідомлень. Вихідні повідомлення автоматично отримують вкладення.


### Хто бачить моє зображення профілю?

- Ви можете додати зображення профілю в ваших налаштуваннях. Якщо ви пишете комусь із ваших контактів чи додаєте їх через QR код, вони автоматично побачать ваше зображення профілю.

- Контакти, які не використовують Delta Chat, бачать його як вкладення до повідомлення електронної пошти.

- Із міркувань приватності, ніхто не бачить ваше зображення профілю доки ви їм не напишете.

- Ваше зображення профілю не надсилається із кожним повідомленням, але достатньо регулярно для того щоб ваші контакти заново отримували ваше зображення профілю, навіть якщо вони додали новий пристрій.


### Чи підтримує Delta Chat HTML-листи?

- Так. Якщо у вхідній електронній пошті відсутній текстовий формат «text/plain», ми перетворюємо HTML-листи у текстовий формат самостійно. Вихідні листи завжди використовують текстовий формат.


### Чому я маю вводити пароль до моєї електронної пошти у Delta Chat? Чи це безпечно?

Як і інші клієнти електронної пошти, на зразок Thunderbird, K9-Mail, or Outlook, програма потребує пароль. Авжеж, пароль зберігається лише на вашому пристрої. Пароль передається лише до вашого провайдера електронної пошти, який все одно має доступ до ваших повідомлень.

Якщо ваш провайдер електронної пошти підтримує OAuth2, як gmail.com чи yandex.ru, то немає необхідності зберігати пароль на пристрої. В цьому випадку використовується лише токен доступу.

Оскільки Delta Chat має відкритий код, ви можете ознайомитись із [початковим кодом](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) якщо бажаєте перевірити що ваші дані для авторизації надійно зберігаються. Ми будемо раді вашим пропозиціям, які зроблять додаток більш безпечним для всіх користувачів.


### Яких дозволів потребує Delta Chat?

В залежності від операційної системи, додаток може потребувати наступних дозволів:

- Камера *(може бути заборонено)*
  - знімати фото та відео: для надсилання фотографій
- Контакти *(може бути заборонено)*
  - зчитувати ваші контакти: знаходити контакти для спілкування
- Місцезнаходження *(може бути заборонено)*
  - доступ до приблизного місцезнаходження (мережеві джерела місцезнаходження): для функції стримінгу координат
  - доступ до точного місцезнаходження (GPS та мережеві джерела координат): для функції стримінгу координат
- Мікрофон *(може бути заборонено)*
  - записувати звук: для звукових повідомлень
- Сховище *(може бути заборонено)*
  - змінювати та видаляти вміст вашої SD-карти: для завантаження вкладень до повідомлень
  - зчитувати вміст вашої SD-карти: для надсилання файлів вашим контактам
- Інші можливості додатку:
  - змінювати налаштування звуку: ви можете змінювати сигнали та гучність для сповіщень та звукових повідомлень
  - запуск на старті: вам не потрібно запускати Delta Chat вручну
  - вібрація: для сповіщень
  - перегляд мережевих з'єднань: для під'єднання до сервера електронної пошти
  - запобігання переходу телефону у сплячий режим: так вам буде легше скопіювати код безпеки при налаштування Autocrypt
  - повний доступ до мережі: для під'єднання до сервера електронної пошти
  - перегляд Wi-Fi з'єднань: для під'єднання до сервера електронної пошти
  - запитувати дозволу ігнорувати оптимізації батареї: для користувачів які хочуть бути на постійному зв'язку


## Групи

### Створення групи

- Оберіть **Новий чат**, потім **Нова групи** у меню в верхньому правому кутку або натисніть відповідну кнопку у Android/iOS.
- На наступному екрані виберіть **учасники групи** та встановіть **назву групи**. Ви також можете обрати **аватар групи**.
- Як тільки ви напишете **перше повідомлення** у групу, усі учасники будуть проінформовані про нову групу і зможуть відповісти у нову групу (доки ви не напишете повідомлення у групі, група залишатиметься невидимою для учасників).


### Додавання учасників групи

- Кожен учасник групи має **ті ж самі права**, що і будь-який інший. З цієї причини кожен може видалити будь-якого учасника або додати нового.
- Щоб додати або видалити учасників, натисніть на назву групи в чаті.


### Що таке перевірена група? Чому це експеримент? 

- Перевірена група це чат, що гарантує безпеку від активного нападника. Усі повідомлення у перевіреному чаті зашифровані наскрізним шифруванням, а нових учасників можна додавати лише через сканування QR-коду запрошення. Таким чином, всі учасники з'єднані один з одним через ланцюжок запрошень, що гарантує криптографічну узгодженість від активних мережевих атак або атак провайдерів. Дивіться [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) для технічних деталей цієї функції.

- Станом на грудень 2019 року, "верифікована група" залишається експериментальною функцією. Вона постійно удосконалюється, багато помилок було виправлено з часу її початкового введення у 2018 році. Однак, залишаються випадки, особливо у великих групах, коли повідомлення стають нечитабельними. На початку 2020 року очікується аудит безпеки та декілька нових розробок щодо протоколів приєднання по QR-кодам, тож існують шанси на видалення "експериментальної" позначки у недалекому майбутньому.


### Я випадково себе видалив

- Оскільки ви більше не учасник групи, ви не зможете додати себе знову. Однак, це не проблема, просто попросіть будь-якого іншого учасника групи в звичайному чаті додати вас знову.


### Я більше не хочу отримувати повідомлення групи.

- Або видаліть себе із списку учасників групи, або видаліть весь чат. Якщо ви хочете повернутись до чату пізніше, попросіть іншого учасника групи додати вас знову.

- Ви також можете "Заглушити" групу - це означає, що ви будете отримувати усі повідомлення та можете писати у групу, але ви більше не будете отримувати сповіщення про нові повідомлення.


### Що означають подвійні галочки у групових повідомленнях? Всі прочитали моє повідомлення?

- Повідомлення відображає дів галочки після того як більше половини отримувачів побачили повідомлення на їх екрані.
- Зверніть увагу, що деякі одержувачі могли відключити сповіщення про прочитання через причини-конфіденційності.
- Якщо більше 50% відключили сповіщення про прочитання, подвійні галочки не будуть відображатися взагалі. За деталями дивіться [цей пост у блозі](https://delta.chat/en/2017-07-06-read-receipts-and-social-pressure).


## Шифрування {#encryption}

### Чи підтримує Delta Chat наскрізне шифрування?

- Так. Delta Chat реалізує стандарт Autocrypt Level 1, таким чином наскрізно зашифровані повідомлення сумісні з іншими програмами, що підтримують Autocrypt.

- Delta Chat також підтримує сильну форму наскрізного шифрування, яка безпечна навіть від активних атак, див. "перевірені групи" нижче.


### Що потрібно зробити, щоб активувати наскрізне шифрування?

- Нічого.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to rather avoid end-to-end-encrypted e-mails by default, 
  use the corresponding Autocrypt setting in "Settings" or "Advanced settings".


### If end-to-end-encryption is not available, is the connection not encrypted at all?

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 


### How can I verify cryptographic status with a sender? 

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


### How can I check the encryption of messages?

- A little **padlock** shown beside a message denotes whether the message is end-to-end-encrypted from from the given sender.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.

### Which standards are used for end-to-end-encryption?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. 

- Delta Chat implements [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) to achieve protection against active network attacks.  This goes beyond the opportunistic
  base protection of Autocrypt Level 1, while maintaining its ease of use.  

### What is the difference between verified groups and 1:1 chats with verified contacts?

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


### How does Delta Chat protect my Metadata?

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


### Can I reuse my existing private key?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Settings" or "Advanced settings" and then "Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it. 


### I can't import my existing PGP key into Delta Chat.

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


### Why don't you use pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Can I use Delta Chat on multiple devices at the same time?

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

### Are there any plans for introducing a Delta Chat Web Client?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  app stores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


### Why can I choose not to watch the Inbox?

This is an experimental setting for some people who are experimenting with
server-side rules. Not all providers support this, but with some you can move
all mails with a "Chat-Version" header to the DeltaChat folder. Normally, this
would be done by the Delta Chat app.

Watching the Inbox makes sense to turn off, if you have both:

- enabled a server-side rule to move all messages with Chat-Version header to the DeltaChat folder, and
- have set the "Show classic emails" setting to "no, chats only".

In this case, Delta Chat doesn't need to watch the Inbox.

### What is the "Send Copy to Self" setting good for?

Sending a copy of your messages to yourself ensures that you receive your own
messages on all devices. If you have multiple devices and don't turn it on, you
see only the messages from other people, and the messages you send from the
current device. 

The copy is sent to the Inbox, and then moved to the DeltaChat folder; it's not
put into the "Sent" folder. Delta Chat *never* uploads anything to the Sent
folder because this would mean uploading a message twice (once through SMTP,
and once through IMAP to Sent folder).

The default setting for copy-to-self is "no".

### Why can I choose to watch the "Sent" folder?

The only reason one wants to watch the Sent folder is if you are using another
mail program (like Thunderbird) next to your Delta Chat app, and want your MUA
to participate in chat conversations.

However, we recommend using the Delta Chat Desktop Client; you can download it
on [get.delta.chat](https://get.delta.chat). The option to watch the "Sent"
folder might go away in the future. It was introduced at a time where there was
no Delta Chat Desktop client available on all platforms. 

### Why can I choose not to watch the DeltaChat folder?

Some people use Delta Chat as a regular email client, and want to use the Inbox
folder for their mail, instead of the DeltaChat folder. If you disable "Watch
DeltaChat folder", you should also disable "move chat messages to DeltaChat".
Otherwise, deleting messages or multi-device setups might not work properly.

## Miscellaneous

### Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly,
  see [Provider Overview](https://providers.delta.chat)


### If Delta Chat uses E-Mail, is it really an _Instant_ Messenger?

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


### Is Delta Chat compatible with Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is only
  working inside their platforms, and not compatible with anyone outside.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### I'm interested in the technical details. Can you tell me more?

- See [Standards used in Delta Chat]({% include standards-url %}).

### How are Delta Chat developments funded? 

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
