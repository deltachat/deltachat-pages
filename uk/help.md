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

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _No Spam_ - only messages of known users are shown by default.
- _End-to-end encryption_ via Autocrypt.
- _Copyleft_ and _Standards_ based libre software.
- _Flexible identity_ with built-in support for [multiple accounts](#multiple-accounts)


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

Yes, incoming HTML messages come with a "Show full message" button. 
Outgoing messages always use plain text.


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

### Які стандарти використовуються для наскрізного шифрування?

[Autocrypt](https://autocrypt.org) is used for automatically
establishing end-to-end encryption with contacts and group chats.
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure).
End-to-End encrypted messages are marked with a padlock 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>.

[Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html)
are used for establishing chats with guaranteed end-to-end encryption 
which protects against network attacks and compromised servers.
Chats marked with a green checkmark 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
guarantee end-to-end encrypted messages. 

### How can i know if messages are end-to-end encrypted? {#whene2e}

All end-to-end encrypted messages carry a padlock:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

End-to-end encryption is guaranteed if there is a green checkmark next to the chat title:

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### How can I get guaranteed end-to-end encryption and green checkmarks? {#howtoe2ee}

Meet your chat partner outside Delta Chat, preferably in person
but a second channel like a video chat
or a different messenger is fine as well.
Perform the following QR show/scan procedure with your chat partner.
One of you is the "Inviter", the other is the "Joiner". 

**Inviter side**:

- Group invitation: 
  Tap the chat group title to see its member list, and select "QR Invite code". 
  Share the QR image with the other side either in person or through a second channel.

- Direct 1:1 chat invitation: 
  Tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen -- 
  on Desktop the QR Icon is in the left-side sandwich menu.
  Share the QR image with the other side either in person or through a second channel.

**Joiner side**:

- Tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen -- 
  on Desktop the QR Icon is in the left-side sandwich menu.

- Choose "SCAN QR CODE" and scan the QR Code 
  that you see from your chat partner in a second channel.

- Tap "OK"


**Both Inviter and Joiner**:

Wait while [Secure-Join network messages are exchanged](https://countermitm.readthedocs.io/en/latest/new.html#setup-contact-protocol) between both devices.

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
please see [Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html)
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
they should remove the account from the new device
and add it [as a second device as described here](#multiclient).
As soon as they message you afterwards, the warning will be gone
and guaranteed encryption is established with both devices of your contact. 

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
But without end-to-end encryption you and your contract are trusting your e-mail server 
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
and turning on disappearing messages.

Guranteed end-to-end encrypted chats protect against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
and turning on "disappearing messages" deletes the messages
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


### Manual Transfer {#backup}

Цей спосіб рекомендований, лише якщо «Додати другий пристрій», як описано вище, не працює.

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

We are very grateful for feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. 
You may conveniently login via Delta Chat and a QR code scan,
another rather stable experiment we run on the side (sic!).

### Як я можу робити аудіо/відеодзвінки з Delta Chat?

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


### Мене цікавлять технічні деталі. Можете розповісти більше?

- Дивіться [Стандарти, що використовуються у Delta Chat]({% include standards-url %}).

### Чи проходив Delta Chat незалежний аудит на наявність вразливостей у безпеці? {#security-audits}

За останні роки проект Delta Chat пройшов чотири незалежні аудити безпеки:

- У 2019 році [Include Security](https://includesecurity.com) проаналізувала бібліотеки [PGP](https://github.com/rpgp/rpgp) і [RSA](https://github.com/RustCrypto/RSA) із Delta Chat. Він не виявив критичних проблем, лише дві серйозні проблеми, які ми згодом виправили. Він також виявив одну проблему середньої тяжкості та кілька менш серйозних, але не було можливості використати ці вразливості в реалізації Delta Chat. Деякі з них ми все ж усунули після завершення аудиту. Ви можете прочитати [повний звіт тут](../assets/blog/2019-first-security-review.pdf).

- У 2020 році [Include Security](https://includesecurity.com) проаналізувала Rust-[ядро](https://github.com/deltachat/deltachat-core-rust/) Delta Chat і бібліотеки [IMAP](https://github.com/async-email/async-imap), [SMTP](https://github.com/async-email/async-smtp) та [TLS](https://github.com/async-email/async-native-tls). Він не виявив критичних або серйозних проблем. У звіті виявлено кілька слабких місць середнього ступеня тяжкості – вони самі по собі не становлять загрози для користувачів Delta Chat оскільки вони залежать від середовища, у якому використовується Delta Chat. З міркувань зручності використання та сумісності ми не можемо пом'якшити їх усі тому вирішили надати рекомендації щодо безпеки користувачам, яким загрожує небезпека. Ви можете прочитати [повний звіт тут](../assets/blog/2020-second-security-review.pdf).

- Починаючи з 2023 року [Cure53](https://cure53.de) проаналізував транспортне шифрування мережевих з’єднань Delta Chat і відтворюване налаштування поштового сервера як [рекомендовано на цьому сайті](serverguide). Ви можете прочитати більше про аудит [у нашому блозі](https://delta.chat/en/2023-03-27-third-independent-security-audit) або прочитайте [повний звіт тут](../assets/blog/MER-01-report.pdf).

- Beginning 2023, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023.
  See [here for the full background story on end-to-end security in the web](https://delta.chat/en/2023-05-22-webxdc-security).


### Як фінансується розробка Delta Chat?

Delta Chat не отримує жодного Венчурного Капіталу і не є в боргу, не знаходиться під тиском отримання значних прибутків, або продажу користувачів і їхніх друзів з родиною рекламодавцям (або гірше). Ми скоріше використовуємо джерела державного фінансування поки що від ЄС та США, щоб допомогти нашим зусиллям у створенні децентралізованої та різноманітної екосистеми обміну повідомленнями на основі вільного та відкритого коду спільноти розробників 

Конкретно, розробки Delta Chat поки що фінансуються з цих джерел:

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

- [Open Technology Fund](https://opentechfund.org) надав нам два гранти. 
  Перший грант 2018/2019 року (~$200K), допоміг значно покращили додаток для Android
  і випустили першу бета-версію додатка для ПК, і який до того ж
  закріпив наші розробки функцій у дослідженнях UX у контексті прав людини, 
  дивіться наш підсумковий звіт [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  Другий грант 2019/2020 року (~$300K) допоміг нам 
  випустити Delta/iOS версію, конвертувати нашу основному бібліотеку на Rust,
  і додати нові функції для всіх платформ.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system. 

– У 2021 році ми отримали подальше фінансування ЄС для двох Інтернет-технологій наступного покоління пропозиції, а саме для [EPPD - каталог перенесення електронної пошти](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97 тис. євро) та [AEAP - перенесення електронної адреси](https://nlnet.nl/project/EmailPorting/) (~90 тис. євро), що призвело до кращої підтримки кількох облікових записів, покращеного QR-коду контактів і налаштувань груп, а також багатьох покращень роботи мережі на всіх платформах.

- З кінця 2021 до березня 2023 року ми отримували фінансування *Internet Freedom* (500 тис. дол. США) від Бюро США з питань демократії, прав людини та праці (DRL). Це фінансування підтримало наші довгострокові цілі зробити Delta Chat більш зручним для використання і сумісним з широким спектром серверів електронної пошти по всьому світу, більш стійким і безпечним в місцях, які постраждали від інтернет-цензури та відключення інтернету.

- На початку 2023 року нас прийняли в Next Generation Internet (NGI)
Entrust program для наших пропозицій щодо «Приватних децентралізованих додатків». Точна сума буде визначена (близько 100 тис. євро). Це фінансування підтримує подальший розвиток [webxdc "додатків, якими діляться в чаті"](https://webxdc.org).

– Іноді ми отримуємо одноразові пожертви від приватних осіб. Наприклад, у 2021 році щедра приватна особа перерахував нам 4 тис. євро з повідомленням «так тримати!». 💜 Ми використовуємо такі пожертви для фінансування зборів на розвиток або для тимчасових витрат, які важко передбачити або відшкодувати за рахунок грантів державного фінансування. Отримання більшої кількості пожертв також допомагає нам стати більш незалежними та довгостроково життєздатними як спільнота контриб'юторів.

 [Задонатити грошей](donate){: .cta-button}

- Кілька експертів та ентузіастів, які працюють на громадських засадах, сприяли розробці програми Delta Chat, не отримуючи грошей або лише невеликі суми. Без них Delta Chat не був би там, де є сьогодні, навіть близько.

Зазначене вище грошове фінансування в основному організовано компанією merlinux GmbH у Фрайбурзі (Німеччина) і розподілено між більше ніж дюжиною розробників по всьому світу.

Перегляньте [канали контрибуції Delta Chat](contribute) як для грошових, так і для інших можливостей допомоги.
