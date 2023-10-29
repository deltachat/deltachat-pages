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
- _Без спаму_ - лише повідомлення від відомих користувачів відображаються за умовчанням.
- _Наскрізне шифрування_, що базується на Autocrypt.
- _Вільне_ програмне забезпечення засноване на _стандартах_.
- _Гнучка ідентифікація_ з вбудованою підтримкою [кількох облікових записів](#multiple-accounts)


### Які повідомлення відображаються у Delta Chat?

За замовчуванням Delta Chat відображає всі електронні листи.

У "Налаштування -> Чати та Медіа -> Показати класичні електронні листи", ви можете змінити це. У вас є такі параметри:

- «Ні, лише чати»: лише повідомлення, надіслані іншими користувачами Delta Chat, і відповіді на них відображаються ваші повідомлення Delta Chat. Це має найбільший сенс, якщо ви використовуєте той самий обліковий запис електронної пошти також для звичайної електронної пошти.
- «Усі»: Delta Chat показує всі електронні листи, надіслані на вашу електронну адресу. Це має сенс, якщо ви хочете використовувати Delta Chat для всіх ваших електронних листів, тому жодних повідомлень не губиться. Це налаштування за замовчуванням.
- «Для прийнятих контактів»: Delta Chat показує всі електронні листи від контактів, з ким у вас уже є чат, але нові чати з’являються лише для повідомлень Delta Chat. Це допоможе вирішити в кожному конкретному випадку, чи бажаєте ви мати a розмова в Delta Chat або в «звичайній» програмі електронної пошти.


### Що робити, якщо я очікую повідомлення від когось, кому раніше не писав?

- Якщо повідомлення приходить від невідомого контакту, воно відображається як **запит**. ви потрібно прийняти запит, перш ніж ви зможете відповісти. 
- Ви також можете "видалити" його, якщо ви не хочете зараз спілкуватися з ними. Це *не* видаляє повідомлення на сервері, лише на вашому пристрої. Отже, ви можете як і раніше обробляти повідомлення в іншій поштовій програмі. 
- Якщо ви видалите запит, майбутні повідомлення від цього контакту все одно відображатимуться як запит на повідомлення, щоб ви могли змінити свою думку. Якщо дуже не хочеться отримувати повідомлення від цієї особи, подумайте про її *блокування*.


### Чи підтримує Delta Chat вкладення у вигляді фото, відео тощо?

- Так. Крім звичайного тексту, всі вкладення електронної пошти відображаються у вигляді окремих повідомлень. Вихідні повідомлення автоматично отримують вкладення.

- З міркувань продуктивності, зображення оптимізовані та надсилаються в меншому розмірі за замовчуванням, але ви можете надіслати їх як «файл», щоб зберегти оригінал.

<h3 id="multiple-accounts">Як я можу додати або переключитися між кількома обліковими записами?</h3>

Ви можете легко працювати з додатковими обліковими записами в мобільних і десктопних клієнтах Delta Chat, натиснувши одне з: 
- на кнопці меню, а потім «Змінити обліковий запис» (Android і десктоп) 
- або значок профілю, а потім «Додати обліковий запис» (iOS)

Ви також можете дізнатися [як додати облікові записи на кілька пристроїв](#multiclient).

### Хто бачить моє зображення профілю?

- Ви можете додати зображення профілю в ваших налаштуваннях. Якщо ви пишете комусь із ваших контактів чи додаєте їх через QR код, вони автоматично побачать ваше зображення профілю.

- Контакти, які не використовують Delta Chat, не бачать зображення профілю (однак, звичайно, вони можуть встановити Delta Chat :)

- Із міркувань приватності, ніхто не бачить ваше зображення профілю доки ви їм не напишете.

- Ваше зображення профілю не надсилається із кожним повідомленням, але достатньо регулярно для того щоб ваші контакти заново отримували ваше зображення профілю, навіть якщо вони додали новий пристрій.


### Чи підтримує Delta Chat HTML-листи?

 - Так. Якщо потрібно, вхідні повідомлення отримують кнопку «Показати повне повідомлення». У вихідних електронних листах завжди використовується звичайний текст.


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

### Що значить Закріплення, Приглушення, Архівування?

Використовуйте ці інструменти, щоб організувати ваші чати і тримати все на своєму місці:

- **Закріплені чати** завжди залишаються першими в списку чатів. Ви можете використовувати їх, щоб мати швидкий доступ до ваших найулюбленіших чат або тимчасово аби про щось не забути.

- **Приглушіть чати** якщо ви не хочете отримувати сповіщення для них. Приглушені чати залишаються на місці і ви також можете закріпити приглушений чат.

- **Архівуйте чати**, якщо ви більше не хочете бачити їх у своєму списку чатів. 
Заархівовані чати залишаються доступними над списком чатів або через пошук.

- Коли архівний чат отримує нове повідомлення, якщо не приглушений, він **вискочить з архіву** і повернеться у ваш список чатів.
  **Приглушені чати залишаються заархівованим** доки ви не розархівуєте їх вручну.

Щоб заархівувати або закріпити чат, довго торкніться (Android), скористайтеся меню чату (Android/комп'ютер) або проведіть пальцем ліворуч (iOS); щоб вимкнути звук чату, скористайтеся меню чату (Android/комп'ютер) або профілем чату (iOS).


### Що означає зелена точка?

- Починаючи з Delta Chat 1.34, ви іноді можете бачити "зелену крапку" поруч із аватаром контакту. Це означає, що контакт «нещодавно бачили». 
- Детально: це означає, що за останні 10 хвилин Delta Chat бачив їх: 
- або тому, що вони надіслали вам повідомлення безпосередньо, 
- тому що вони написали щось групі, учасником якої є ви обоє, 
- тому що вони надіслали вам сповіщення про прочитання повідомлення, яке ви написали, 
- або тому, що вони надіслали дані до вашої програми Delta Chat за допомогою a [приватна програма](#webxdc). 
– Отже, це не онлайн-статус у реальному часі – і якщо хтось не відповідає відразу, навіть якщо вони, здаються, онлайн, не хвилюйтесь і дайте їм трохи простору ;-) 
– З іншого боку, інші не завжди «побачать, що ви онлайн». Якщо ви вимкнули сповіщення про прочитання, вони не побачать зелену крапку, доки ви не надішлете їм повідомлення або напишете у групу, до якої вони входять.


### Як мені видалити свій обліковий запис?

Оскільки ви використовуєте обліковий запис електронної пошти для Delta Chat, спосіб видалення облікового запису залежить від вашого постачальника послуг електронної пошти. Ми не маємо жодного контролю над вашим обліковим записом електронної пошти, тому, на жаль, ми не можемо вам у цьому допомогти.

Якщо ви хочете зберегти обліковий запис, але видалити Delta Chat, перед видаленням Delta Chat рекомендується покинути будь-які групові чати.


## Групи

### Створення групи

- Оберіть **Новий чат**, потім **Нова групи** у меню в верхньому правому кутку або натисніть відповідну кнопку у Android/iOS.
- На наступному екрані виберіть **учасники групи** та встановіть **назву групи**. Ви також можете обрати **аватар групи**.
- Як тільки ви напишете **перше повідомлення** у групу, усі учасники будуть проінформовані про нову групу і зможуть відповісти у нову групу (доки ви не напишете повідомлення у групі, група залишатиметься невидимою для учасників).


### Додавання учасників групи

- Кожен учасник групи має **ті ж самі права**, що і будь-який інший. З цієї причини кожен може видалити будь-якого учасника або додати нового.
- Щоб додати або видалити учасників, натисніть на назву групи в чаті.


### Я випадково себе видалив

- Оскільки ви більше не учасник групи, ви не зможете додати себе знову. Однак, це не проблема, просто попросіть будь-якого іншого учасника групи в звичайному чаті додати вас знову.


### Я більше не хочу отримувати повідомлення групи.

- Або видаліть себе із списку учасників групи, або видаліть весь чат. Якщо ви хочете повернутись до чату пізніше, попросіть іншого учасника групи додати вас знову.

- Ви також можете "Заглушити" групу - це означає, що ви будете отримувати усі повідомлення та можете писати у групу, але ви більше не будете отримувати сповіщення про нові повідомлення.


### Що означають галочки біля вихідних повідомлень?

- **Одна галочка** означає, що повідомлення було успішно надіслано вашому провайдеру.
- **Дві галочки** означають, що принаймні один пристрій одержувача повідомив про отримання повідомлення.
- Одержувачі могли вимкнути звіти про прочитання, тож навіть якщо ви бачите лише одну галочку, можливо, повідомлення прочитане.
- Навпаки, дві галочки не означають автоматично, що людина прочитала або зрозуміла повідомлення ;)


### Що станеться, якщо я ввімкну «Видаляти старі повідомлення з сервера»?

- За умовчанням Delta Chat зберігає всі повідомлення локально на вашому пристрої. Якщо ви, наприклад, бажаєте заощадити місце для зберігання у свого провайдера електронної пошти, ви можете вибрати автоматичне видалення старих повідомлень. Вони все ще залишаються на вашому пристрої, поки ви видалите їх і там.

- Щоб увімкнути його, перейдіть до **Видалити старі повідомлення → Видалити повідомлення з сервера** в налаштуваннях «Чати та медіа». Ви можете встановити часові рамки між «Одразу» та «Через 1 рік». Усі електронні листи, отримані Delta Chat, будуть видалені з сервера після закінчення цього терміну.

- Зауважте, що якщо ви використовуєте Delta Chat на кількох пристроях, вам слід залишити повідомлення на сервері, доки інший пристрій не зможе завантажити їх. У цьому випадку вам слід встановити для автоматичного видалення значення «через день» або щось подібне, залежно від того, як часто ви вмикаєте інший пристрій.


### Що станеться, якщо я ввімкну «Видаляти старі повідомлення з пристрою»? {#delold}

- Якщо ви хочете заощадити пам’ять на своєму пристрої, ви можете видалити старе повідомлення автоматично.
- Щоб увімкнути його, перейдіть до «видалити старі повідомлення з пристрою» в налаштуваннях «Чатів та медіа» . Ви можете встановити часові рамки від «через годину» до «через рік»; 
Таким чином, *усі* повідомлення будуть видалені з вашого пристрою, як тільки вони будуть старішими за це.


## Encryption and Security 

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


### Чи підтримує Delta Chat Perfect Forward Secrecy?

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


### Чи можна повторно використовувати існуючий закритий ключ?

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

### Я не можу імпортувати свій існуючий PGP ключ у Delta Chat.

Найімовірнішою причиною є те, що ваш ключ зашифрований та/або використовується пароль. Такі ключі не підтримуються Delta Chat. Ви можете видалити шифрування парольної фрази та пароль і спробувати імпорт знову. Якщо ви хочете зберегти свою парольну фразу, вам доведеться створити псевдонім електронної пошти для використання з Delta Chat, щоб ключ Delta Chat був прив’язаний до цього псевдоніма електронної пошти.

Delta Chat підтримує поширені формати приватних ключів OpenPGP, однак навряд чи приватні ключі з усіх джерел будуть повністю підтримуватися. Це не головна мета Delta Chat. Фактично, більшість нових користувачів не матимуть жодного ключа до використання Delta Chat. Однак ми намагаємось підтримувати приватні ключі з якомога більшої кількості джерел.

Видалення пароля з приватного ключа буде залежати від програмного забезпечення, яке використовується для управління ключами PGP. За допомогою Enigmail ви можете встановити для порожній пароль у вікні Керування ключами. За допомогою GnuPG ви можете встановити його [через командний рядок](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429). Для інших програм ви зможете знайти рішення в інтернеті.


## Мульти-клієнт {#multiclient}

### Чи можна використовувати Delta Chat на декількох пристроях одночасно?

Так. У Delta Chat 1.36 є нова експериментальна функція для використання одного облікового запису на різних пристроях:

- Упевніться, що обидва пристрої підключені до одного Wi-Fi або мережі

- На першому пристрої перейдіть до **Налаштування → Додати другий пристрій**, розблокуйте екран, якщо потрібно і трохи зачекайте, поки не з’явиться QR-код

- На другому пристрої [встановіть Delta Chat](https://get.delta.chat)

- На другому пристрої запустіть Delta Chat, виберіть **Додати як другий пристрій** і відскануйте QR-код зі старого пристрою

- Передача має розпочатися через кілька секунд, і під час передачі обидва пристрої відображатимуть **прогрес**. Дочекайтеся завершення на обох пристроях.

На відміну від багатьох інших месенджерів, після успішної передачі, обидва **пристрої повністю незалежні.** Один пристрій не потрібен для роботи іншого.


### Вирішення проблем

- Ще раз упевніться, що обидва пристрої підключені до **одного Wi-Fi або мережі**

- Ваша система може мати "персональний брандмауер", який, як відомо, викликає проблеми (особливо у Windows). **Вимкніть персональний брандмауер** для Delta Chat на обох кінцях і повторіть спробу

- Переконайтеся, що на цільовому пристрої **достатньо пам’яті**

- Якщо передача почалася, переконайтеся, що пристрої **залишаються активними** і не засинають.  Не виходьте з Delta Chat. (ми докладаємо всіх зусиль, щоб програма працювала у фоновому режимі, але [системи, як правило, вбивають програми](https://dontkillmyapp.com), на жаль)

- Delta Chat **уже ввійшов** на цільовому пристрої? Ви можете використовувати кілька облікових записів на одному пристрої, просто [додайте інший обліковий запис](#multiple-accounts)

- Якщо у вас усе ще виникають проблеми або якщо ви **не можете відсканувати QR-код** спробуйте **перенесення вручну**, описане нижче


### Перенесення вручну

Цей спосіб рекомендований, лише якщо «Додати другий пристрій», як описано вище, не працює.

- На старому пристрої перейдіть у «Налаштування -> Чати та медіа -> Експорт резервної копії». Введіть ваш PIN-код, ключ або пароль розблокування екрана. Потім ви можете натиснути "Почати Резервне копіювання". Це збереже файл резервної копії на вашому пристрої. Тепер вам потрібно перенести на інший пристрій якимось чином. 
- На новому пристрої, на екрані входу, замість входу в свою електронну пошту виберіть «Імпорт резервної копії». Після імпорту, ваші розмови, ключі шифрування та носій потрібно скопіювати на новий пристрій. 
- **Якщо ви використовуєте iOS:** і у вас виникають труднощі, можливо [цей посібник](https://support.delta.chat/t/import-backup-to-ios/1628) допоможе вам. 
- Тепер ви синхронізовані та можете використовувати обидва пристрої для надсилання та отримання зашифрованих E2E повідомлень з вашими партнерами по спілкуванню.

### Чи планується впровадження веб-клієнта Delta Chat?

- Немає найближчих планів, крім попередніх думок.
- Є 2-3 способи створити веб-клієнт Delta Chat, але всі вони вимагають значної роботи. На даний момент ми зосереджені на отриманні стабільних релізів в усіх магазини додатків (Google Play / IOS / Windows / MacOS / репозитаріїв Linux), як нативних додатків.
- Якщо вам потрібен веб-клієнт, через заборону встановлювати програмне забезпечення на комп’ютері, з яким ви працюєте, ви можете використовувати портативний клієнт Windows Desktop або AppImage для Linux. Ви можете знайти їх на [get.delta.chat](https://get.delta.chat).


### Для чого потрібне налаштування "Відправити копію собі"?

Надсилаючи собі копію своїх повідомлень, ви отримуєте власні повідомлення на всіх пристроях. Якщо у вас кілька пристроїв, і ви не вмикаєте це налаштування, ви бачите лише повідомлення інших людей та повідомлення, які ви надсилаєте з поточного пристрою.

Копія надсилається у папку Вхідні, а потім переміщується до папки DeltaChat; вона не поміщається в папку «Відправлені». Delta Chat *ніколи* не завантажує нічого в папку Надіслане, оскільки це означало б завантаження повідомлень двічі (один раз через SMTP і один раз через IMAP до папки Надіслані).

За замовчуванням параметр копії для себе - "ні".

### Чому я можу обрати стеження за  папкою "Надіслані"?

Єдина причина, через яку захочеться стежити за папкою Надіслане, полягає в тому, що якщо ви використовуєте іншу поштову програму (наприклад, Thunderbird) разом із вашим додатком Delta Chat і хочете, щоб ваш поштовий клієнт брав участь у розмовах.

Однак ми рекомендуємо використовувати клієнт Delta Chat Desktop; Ви можете завантажити його на [get.delta.chat](https://get.delta.chat). Можливість стеження папки "Надіслане" може зникнути в майбутньому. Вона був представлена у той час, коли на всіх платформах ще не було клієнта Delta Chat Desktop.

### Чому я можу відмовитись від стеження за  папкою DeltaChat?

Деякі люди використовують Delta Chat як звичайний поштовий клієнт і хочуть використовувати папку Вхідні для своєї пошти замість папки DeltaChat. Якщо ви вимкнете "Перегляд папки DeltaChat", вам слід також вимкнути "переміщення повідомлень чату до DeltaChat".
В іншому випадку видалення повідомлень або налаштування декількох пристроїв може не працювати належним чином.


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


## Експериментальні функції

Ми дуже вдячні за відгуки про ці функції - чи хочете ви поділитися вашими ідеями? Приєднуйтесь до [форуму](https://support.delta.chat), щоб зробити внесок. (Ви любите експерименти? Зареєструйтесь через «Зареєструватися -> з Delta Chat»!)

### Як я можу робити аудіо/відеодзвінки з Delta Chat?

- Щоб увімкнути аудіо/відеодзвінки, перейдіть до розділу «експериментальні функції» в розширених налаштуваннях і виберіть «екземпляр відеочату». 
- Коли ви запрошуєте інших до відеочату, він відразу відкривається у вашому браузері/додатку. Інші отримають електронний лист із посиланням на вашу кімнату jitsi/BBB. Таким чином, він також сумісний, якщо ваші партнери по чату не використовують Delta Chat. 
- Зауважте, що на іншій стороні немає мелодії дзвінка, і ваші партнери по чату не будуть перериватися запрошенням у відеочат. 
- Ви можете використовувати будь-який сервіс відеочату, який дозволяє приєднатися за посиланням. Просто додайте посилання в налаштуваннях. 
- Наприклад, щоб використовувати флагманський екземпляр Jitsi Meet, ви можете ввести `https://meet.jit.si/$ROOM`. Змінна `$ROOM` буде випадковим значенням; Таким чином, ви матимете нову випадкову кімнату jitsi кожного разу, коли ви телефонуєте комусь.


### What is a verified group? Why is it experimental? {#verifiedchats}

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


### Що таке списки широкомовлення та як ними користуватися?

- За допомогою списку розсилки ви можете надіслати повідомлення багатьом одержувачам одночасно; коли вони відповідають вам, ви отримуєте відповідь у своєму прямому чаті 1:1 з ними. Одержувачі не бачать один одного. 
- Технічно це електронний лист із багатьма одержувачами в BCC. 
- Ви можете ввімкнути функцію в розділі «експериментальні функції» в розширених налаштуваннях. Потім ви можете створити список трансляцій у діалоговому вікні «Новий чат». 
- Якщо ви використовуєте більше ніж один пристрій, списки трансляцій наразі не синхронізуються між ними. 
- Повідомлення, надіслані до списків розсилки, не шифруються. Шифрування порушило б анонімність, оскільки тоді всі одержувачі знали б, хто ще його отримав (надсилання окремих листів усім було б гіршим через обмеження швидкості та споживання мережі).


### Як я можу поділитися своїм місцезнаходженням зі своїми співрозмовниками в чаті?

- Ви можете ввімкнути потокове передавання місцезнаходження в розділі «експериментальні функції» в розширених налаштуваннях. 
- Тепер, якщо ви хочете поділитися своїм місцезнаходженням у чаті, перейдіть до «прикріпити» та виберіть "Місцезнаходження". Тепер ви можете встановити часові рамки, протягом яких ваше місцезнаходження транслюється вашим партнерам у чаті від 5 хвилин до 6 годин. 
- Коли ваше місцезнаходження змінюється, інші учасники чату можуть побачити його на карті в чат. 
- Щоб бачити карту та місцезнаходження інших, потрібно ввімкнути цю функцію у розширених налаштуваннях. 
- Ця функція не надасть доступу до вашого місцезнаходження нікому, крім ваших співрозмовників в чаті. *Але:* щоб показати карту, нам потрібно завантажити фрагменти карти з mapbox.com, тому, якщо ви *переглядаєте* карту, mapbox.com запитує карту конкретної області. Якщо це загроза конфіденційності для вас, ця функція може бути не для вас. Ми працюємо над пошуком децентралізованої альтернативи для Mapbox. 
- На комп’ютері ОС зазвичай не може визначити ваше місцезнаходження. Натомість ви можете клацнути правою кнопкою миші на карті та надсилати до чату як повідомлення, яке також з’являється на карті.


### Що насправді захищає експериментальне шифрування бази даних?

- На даний момент шифрування бази даних все ще є експериментальним. Не покладайтеся на нього для захисту, ви повинні додатково використовувати шифрування вашої операційної системи, якщо воно передбачає таке. 
- Шифрування бази даних ще не шифрує блоби, лише рядки та стовпці бази даних. Це більш-менш означає, що ваші повідомлення в безпеці, але не вкладені файли. 
- Для iOS і Android ключі шифрування зберігаються в системному брелоку. Це означає, що шифрування настільки ж безпечно, як і операційна система, на якій воно працює. 
- Настільний клієнт Delta Chat поки що не пропонує шифрування бази даних, оскільки немає стандартного способу зберігання ключів шифрування на різних підтримуваних платформах.


### Чому я можу вибрати лише стеження за папкою DeltaChat?

Це експериментальне налаштування для деяких людей, які експериментують з правилами на стороні сервера. Не всі провайдери підтримують це, але деякі дозволятимуть перемістити всі листи із заголовком "Chat-Version" до папки DeltaChat. Зазвичай це робиться додатком Delta Chat.

Увімкнення «Отримувати лише з папки DeltaChat» має сенс, якщо у вас є **обидва**:

- увімкнене правило на стороні сервера для переміщення всіх повідомлень із заголовком Chat-Version до папки DeltaChat та
- встановлено параметр "Показувати класичні електронні листи" у значення "ні, лише чати".

У цьому випадку Delta Chat не потрібно стежити за папкою «Вхідні», а достатньо лише стежити за папкою DeltaChat.


### Як я можу змінити мій обліковий запис на іншу адресу електронної пошти?

1. Змініть свою адресу на екрані налаштувань «Пароль і обліковий запис» у Delta Chat, введіть свій пароль (і, якщо потрібно, налаштування сервера) для нового облікового запису
2. Якщо можливо, змусьте старого провайдера електронної пошти пересилати всі електронні листи на нову адресу електронної пошти 
3. Повідомте своїм контактам, що ви змінили адресу. Якщо ви напишете це в перевірену групу, вони підтвердять це автоматично.

Щоб дізнатися про деталі цього, [прочитайте нашу публікацію в блозі](https://delta.chat/en/2022-09-14-aeap).


## Інше

### Чи підтримує Delta Chat роботу з _моїм_ провайдером електронної пошти?

- У більшості випадків: Так :)
Проте для коректної роботи деяких провайдерів потрібні специфічні налаштування. Дивіться наш [огляд провайдерів](https://providers.delta.chat)


### Я хочу керувати власним сервером електронної пошти для Delta Chat. Що ви порадите?

- Більшість поштових серверів працюватимуть добре. Але ми особисто рекомендуємо поєднання mailcow і mailadm, як описано [у цьому пості](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops). 
- Ви можете знайти [посібник із встановлення на нашому веб-сайті](serverguide).


### Якщо Delta Chat використовує електронну пошту, чи насправді він є _Instant_ месенджером?

- Надсилання та отримання повідомлень зазвичай триває кілька секунд. Іноді трапляються випадки, коли це займає більше часу, але це, безперечно, справедливо і для будь-якого іншого месенджера.
- Миттєвий чат працює швидко, якщо обидві сторони активно використовують додаток. Іноді це повільніше, якщо програма працює у фоновому режимі.
- Отримання повідомлень тоді може зайняти хвилини, оскільки як Android, так і iOS часто припиняють роботу Delta Chat у фоновому режимі і лише час від часу прокидають його. Ця штучна затримка зазвичай гірша на iOS, ніж на Android.
- Однак програми для Android та iOS вбивають програми, що працюють у фоновому режимі, є проблемою для багатьох законних програм. Для отримання додаткової інформації див. [dontkillmyapp.com](https://dontkillmyapp.com/).


### Чи сумісний Delta Chat із Protonmail / Tutanota / Criptext?

- Так і ні.
- Ні, ви не можете використовувати ваші Protonmail, Tutanota, або Criptext аккаунти з Delta
  Chat; вони не надають можливість отримання повідомлень через IMAP.
- В будь-якому разі ви можете використовувати Delta Chat, щоб надсилати Повідомлення
  людям, які використовують Protonmail, Tutanota, або Criptext. Однак ці повідомлення не 
  будуть наскрізно зашифровані. Наскрізне шифрування, яке пропонують ці сервіси не є 
  сумісне з [Autocrypt](https://autocrypt.org/), стандартом, який використовує Delta Chat.
- Delta Chat може насрізно шифрувати через будь-якого постачальника e-mail з будь-яким
  [Autocrypt підтримуваним додатком e-mail](https://autocrypt.org/dev-status.html).


### Мене цікавлять технічні деталі. Можете розповісти більше?

- Дивіться [Стандарти, що використовуються у Delta Chat]({% include standards-url %}).

### Чи проходив Delta Chat незалежний аудит на наявність вразливостей у безпеці? {#security-audits}

За останні роки проект Delta Chat пройшов чотири незалежні аудити безпеки:

- У 2019 році [Include Security](https://includesecurity.com) проаналізувала бібліотеки [PGP](https://github.com/rpgp/rpgp) і [RSA](https://github.com/RustCrypto/RSA) із Delta Chat. Він не виявив критичних проблем, лише дві серйозні проблеми, які ми згодом виправили. Він також виявив одну проблему середньої тяжкості та кілька менш серйозних, але не було можливості використати ці вразливості в реалізації Delta Chat. Деякі з них ми все ж усунули після завершення аудиту. Ви можете прочитати [повний звіт тут](../assets/blog/2019-first-security-review.pdf).

- У 2020 році [Include Security](https://includesecurity.com) проаналізувала Rust-[ядро](https://github.com/deltachat/deltachat-core-rust/) Delta Chat і бібліотеки [IMAP](https://github.com/async-email/async-imap), [SMTP](https://github.com/async-email/async-smtp) та [TLS](https://github.com/async-email/async-native-tls). Він не виявив критичних або серйозних проблем. У звіті виявлено кілька слабких місць середнього ступеня тяжкості – вони самі по собі не становлять загрози для користувачів Delta Chat оскільки вони залежать від середовища, у якому використовується Delta Chat. З міркувань зручності використання та сумісності ми не можемо пом'якшити їх усі тому вирішили надати рекомендації щодо безпеки користувачам, яким загрожує небезпека. Ви можете прочитати [повний звіт тут](../assets/blog/2020-second-security-review.pdf).

- Починаючи з 2023 року [Cure53](https://cure53.de) проаналізував транспортне шифрування мережевих з’єднань Delta Chat і відтворюване налаштування поштового сервера як [рекомендовано на цьому сайті](serverguide). Ви можете прочитати більше про аудит [у нашому блозі](https://delta.chat/en/2023-03-27-third-independent-security-audit) або прочитайте [повний звіт тут](../assets/blog/MER-01-report.pdf).

– Починаючи з 2023 року, ми вирішували проблеми з безпекою та конфіденційністю "веб-додатків, що поширені в чаті", пов’язані зі збоями пісочниці, особливо у Chromium. Згодом ми отримали незалежну аудит безпеки від Cure53, і всі виявлені проблеми були виправлені в версії 1.36, випущеній у квітні 2023 року. Перегляньте [тут повну історію безпеки наскрізного шифрування в Інтернеті](https://delta.chat/en/2023-05-22-webxdc-security).


### Як фінансується розробка Delta Chat?

Delta Chat не отримує жодного Венчурного Капіталу і не є в боргу, не знаходиться під тиском отримання значних прибутків, або продажу користувачів і їхніх друзів з родиною рекламодавцям (або гірше). Ми скоріше використовуємо джерела державного фінансування поки що від ЄС та США, щоб допомогти нашим зусиллям у створенні децентралізованої та різноманітної екосистеми обміну повідомленнями на основі вільного та відкритого коду спільноти розробників 

Конкретно, розробки Delta Chat поки що фінансуються з цих джерел:

- Проект ЄС [NEXTLEAP](https://nextleap.eu) фінансував дослідження
  та впровадження перевірених груп і налаштування контактних протоколів
  в 2017 і 2018, а також допоміг впрводвадити Наскрізне шифрування
  через [Autocrypt](https://autocrypt.org).

- [Open Technology Fund](https://opentechfund.org) надав нам два гранти. 
  Перший грант 2018/2019 року (~$200K), допоміг значно покращили додаток для Android
  і випустили першу бета-версію додатка для ПК, і який до того ж
  закріпив наші розробки функцій у дослідженнях UX у контексті прав людини, 
  дивіться наш підсумковий звіт [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  Другий грант 2019/2020 року (~$300K) допоміг нам 
  випустити Delta/iOS версію, конвертувати нашу основному бібліотеку на Rust,
  і додати нові функції для всіх платформ.  

- [Фундація NLnet](https://nlnet.nl/) надала в 2019/2020 46 тис. євро на
  завершення прив'язок Rust/Python і створення екосистеми Чат-Ботів. 

– У 2021 році ми отримали подальше фінансування ЄС для двох Інтернет-технологій наступного покоління пропозиції, а саме для [EPPD - каталог перенесення електронної пошти](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97 тис. євро) та [AEAP - перенесення електронної адреси](https://nlnet.nl/project/EmailPorting/) (~90 тис. євро), що призвело до кращої підтримки кількох облікових записів, покращеного QR-коду контактів і налаштувань груп, а також багатьох покращень роботи мережі на всіх платформах.

- З кінця 2021 до березня 2023 року ми отримували фінансування *Internet Freedom* (500 тис. дол. США) від Бюро США з питань демократії, прав людини та праці (DRL). Це фінансування підтримало наші довгострокові цілі зробити Delta Chat більш зручним для використання і сумісним з широким спектром серверів електронної пошти по всьому світу, більш стійким і безпечним в місцях, які постраждали від інтернет-цензури та відключення інтернету.

- На початку 2023 року нас прийняли в Next Generation Internet (NGI)
Entrust program для наших пропозицій щодо «Приватних децентралізованих додатків». Точна сума буде визначена (близько 100 тис. євро). Це фінансування підтримує подальший розвиток [webxdc "додатків, якими діляться в чаті"](https://webxdc.org).

– Іноді ми отримуємо одноразові пожертви від приватних осіб. Наприклад, у 2021 році щедра приватна особа перерахував нам 4 тис. євро з повідомленням «так тримати!». 💜 Ми використовуємо такі пожертви для фінансування зборів на розвиток або для тимчасових витрат, які важко передбачити або відшкодувати за рахунок грантів державного фінансування. Отримання більшої кількості пожертв також допомагає нам стати більш незалежними та довгостроково життєздатними як спільнота контриб'юторів.

 [Задонатити грошей](donate){: .cta-button}

- Кілька експертів та ентузіастів, які працюють на громадських засадах, сприяли розробці програми Delta Chat, не отримуючи грошей або лише невеликі суми. Без них Delta Chat не був би там, де є сьогодні, навіть близько.

Зазначене вище грошове фінансування в основному організовано компанією merlinux GmbH у Фрайбурзі (Німеччина) і розподілено між більше ніж дюжиною розробників по всьому світу.

Перегляньте [канали контрибуції Delta Chat](contribute) як для грошових, так і для інших можливостей допомоги.
