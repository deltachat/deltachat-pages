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

By default, Delta Chat shows:

- Messages sent by other Delta Chat users
- Replies to your Delta Chat messages, even if they are "normal e-mails".

Other e-mails don't appear in your app by default. At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well. This is the default setting.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost.
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


### Чи підтримує Delta Chat вкладення у вигляді фото, відео тощо?

- Так. Крім звичайного тексту, всі вкладення електронної пошти відображаються у вигляді окремих повідомлень. Вихідні повідомлення автоматично отримують вкладення.


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

- **Архівуйте чати** якщо ви не хочете бачити їх у вашому списку чатів.
  Ви все одно можете отримати доступ до архівних чатів: в нижній частині списку чатів, в меню або через пошук.

- Коли архівний чат отримує нове повідомлення, якщо не приглушений, він **вискочить з архіву** і повернеться у ваш список чатів.
  **Приглушені чати залишаються заархівованим** доки ви не розархівуєте їх вручну.

Щоб заархівувати або закріпити чат, довго торкніться (Android), скористайтеся меню чату (Android/комп'ютер) або проведіть пальцем ліворуч (iOS); щоб вимкнути звук чату, скористайтеся меню чату (Android/комп'ютер) або профілем чату (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [private app](#private-apps--webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


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


### What happens if I turn on "Delete old messages from device"?

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

### Чи підтримує Delta Chat наскрізне шифрування?

- Так. Delta Chat реалізує стандарт Autocrypt Level 1, таким чином наскрізно зашифровані повідомлення сумісні з іншими програмами, що підтримують Autocrypt.

- Delta Chat також підтримує сильну форму наскрізного шифрування, яка безпечна навіть від активних атак, див. "перевірені групи" нижче.


### Що потрібно зробити, щоб активувати наскрізне шифрування?

- Нічого.

- Додатки  Delta Chat (та інші [Autocrypt](https://autocrypt.org)-сумісні програми для електронної пошти) діляться ключами необхідними для наскрізного шифрування автоматично, як тільки надіслано перше повідомлення. Після цього, усі наступні повідомлення автоматично наскрізно шифруються. Якщо один із учасників чату використовує додаток несумісний з Autocrypt, наступні повідомлення не шифруються доки Autocrypt-сумісний додаток не стане знову доступним.

- Якщо ж ви бажаєте уникнути наскрізного шифрування повідомлень за замовчуванням, використайте відповідне налаштування Autocrypt  у "Налаштуваннях" або "Додаткових налаштуваннях".


### Якщо назкрізне шифрування недоступне, чи буде з'єднання повністю незашифрованим?

- З більшістю серверів електронної пошти, Delta Chat встановлює _транспортне шифрування_ ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)). Це захищає тільки з'єднання між вашим пристроєм та вашим сервером електронної пошти. Тоді як наскрізне шифрування забезпечує безпеку між вашим пристроєм та пристроєм вашого друга.


### Як я можу перевірити криптографічний статус відправника?

Якщо ви знаходитесь безпосередньо поруч із співрозмовником з чату:

- Оберіть **QR-код запрошення** на одному пристрої, потім оберіть **Сканувати QR-код** на іншому та відскануйте код. Якщо обидва пристрої в мережі, вони запровадять канал чату між собою (якщо його не було до цього), ключі шифрування також будуть підтверджені. Обидва побачать системне повідомлення "відправник підтверджений" у їх чаті 1 на 1.

Якщо ви не поруч із співбесідником, ви можете перевірити статус вручну в діалозі "Шифрування" (у профілі користувача на Android/iOS або правий клік на елементі списку чатів на десктопі):

- Для наскрізного шифрування Delta Chat відобразить там два відбитки ключів. Якщо однакові відбитки відображаються на вашому пристрої та на пристрої співбесідника - з'єднання безпечне.

- При транспортному шифруванні просто відображається його статус.


### Як перевірити шифрування повідомлень?

- Маленький **замочок**, що відображається поряд з повідомленням, вказує, чи зашифроване повідомлення наскрізним шифруванням для цього відправника.

- Якщо ж **замочка немає**, повідомлення зазвичай відправлено незашифрованим тому, що ви або відправник вимкнули наскрізне шифрування, або відправник використовує додаток без підтримки наскрізного шифрування.

### Які стандарти використовуються для наскрізного шифрування?

- [Autocrypt](https://autocrypt.org) використовується для встановлення наскрізного шифрування з іншими клієнтами Delta Chat та іншими додатками із підтримкою Autocrypt. Autocrypt використовує обмежену підмножину функцій OpenPGP. 

- Delta Chat імплементує [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) аби досягти захисту від активних мережевих атак.  Це виходить за рамки опортуністичного базового захисту Autocrypt Level 1, зберігаючи при цьому простоту його використання.

### В чому різниця між верифікованими групами та чатами 1:1 з верифікованими контактами?

- чат 1:1 з верифікованим контактом і верифіковані групи - це не одне й те саме, навіть якщо у верифікованій групі лише 2 людини. Одна з відмінностей полягає в тому, що ви можете легко додати більше людей до групи, але є й інші особливості.

- Верифіковані групи постійно захищені. Будь-яка неполадка (незашифрований текст або помилково підписані повідомлення тощо) буде позначена, і такі повідомлення не відображатимуться в цьому чаті. Ви можете довіряти тому, що всі повідомлення в цьому чаті, з позначенням галочкою як верифікованого, не були прочитані/змінені посередниками.

- Чати 1:1 є опортуністичними, вони призначені для того, щоб дозволити людям спілкуватися незалежно від того, змінюють вони клієнти електронної пошти, пристрої, налаштування тощо. Ось чому немає галочки верифікації, навіть якщо ви верифікували контакт.


### Чи підтримує Delta Chat Perfect Forward Secrecy?

- Ні, OpenPGP не підтримує Perfect Forward Secrecy. Perfect Forward Secrecy орієнтовна на сесійну роботу, а електронна пошта асинхронна за своєю природою і часто використовується незалежно на декількох пристроях. Це означає, що якщо ваш приватний ключ витік і хтось зберіг ваші повідомлення, він зможе прочитати їх.

- Зверніть увагу: якщо хтось вилучить або зламає ваш телефон, що працює, вони зможуть, зазвичай, прочитати всі повідомлення, не має значення присутня Perfect Forward Secrecy чи ні. Маючи доступ до одного пристрою члена групи можна відкрити багато соціальних зв'язків. Використання електронних адрес, які нелегко відстежити до особи, допомагає учасникам групи захиститися від наслідків захоплення пристрою.

- Ми розробляємо схеми кращого захисту комунікацій від вилучення пристрою. 


### Яким чином Delta Chat захищає мої метадані?

- Оскільки Delta Chat це децентралізований месенджер, метадані користувачів Delta Chat не зберігаються на жодному центральному сервері. Однак вони зберігаються на поштових серверах відправника та отримувача повідомлення.

- Кожен поштовий сервер наразі знає про те хто відправив і хто отримав повідомлення через незашифровані заголовки To/Cc, таким чином визначаючи хто є членом групи. Delta Chat сам може уникнути незашифрованих заголовків To/Cc і завжди розміщує їх у зашифрованій частині. Див. [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). Для опортуністичних чатів головним питанням є те, як це впливає на інші поштові програми, які можуть брати участь у чатах.

- Багато інших заголовків електронної пошти, зокрема заголовок "Subject", захищені наскрізним шифруванням, дивіться також майбутній [IETF RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


## Чи можна повторно використовувати існуючий закритий ключ?

- Так. Найпростіший спосіб використати існуючий ключ – відправити повідомлення з параметрами Autocrypt з додатку для роботи з електронною поштою. Знайдіть в налаштуваннях свого додатку слова типу **Почати передачу параметрів Autocrypt** і дотримуйтесь подальших вказівок.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Якщо у вас немає ключа або ви навіть не знаєте, чи він вам знадобиться - не хвилюйтеся: Delta Chat генерує ключі за необхідності, вам не потрібно натискати для цього кнопку.


### Я не можу імпортувати свій існуючий PGP ключ у Delta Chat.

Найімовірнішою причиною є те, що ваш ключ зашифрований та/або використовується пароль. Такі ключі не підтримуються Delta Chat. Ви можете видалити шифрування парольної фрази та пароль і спробувати імпорт знову. Якщо ви хочете зберегти свою парольну фразу, вам доведеться створити псевдонім електронної пошти для використання з Delta Chat, щоб ключ Delta Chat був прив’язаний до цього псевдоніма електронної пошти.

Delta Chat підтримує поширені формати приватних ключів OpenPGP, однак навряд чи приватні ключі з усіх джерел будуть повністю підтримуватися. Це не головна мета Delta Chat. Фактично, більшість нових користувачів не матимуть жодного ключа до використання Delta Chat. Однак ми намагаємось підтримувати приватні ключі з якомога більшої кількості джерел.

Видалення пароля з приватного ключа буде залежати від програмного забезпечення, яке використовується для управління ключами PGP. За допомогою Enigmail ви можете встановити для порожній пароль у вікні Керування ключами. За допомогою GnuPG ви можете встановити його [через командний рядок](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429). Для інших програм ви зможете знайти рішення в інтернеті.


### Чому ви не використовуєте pEp (pretty easy privacy)?

- Delta Chat використовує наскрізне шифрування Autocrypt. Для обговорення Autocrypt та pEp, перейдіть до [Autocrypt FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Мульти-клієнт {#multiclient}

## Чи можна використовувати Delta Chat на декількох пристроях одночасно?

Якщо ви хочете використовувати **один і той же обліковий запис** на різних пристроях, вам слід експортувати резервну копію із старого пристрою та імпортувати її на новий пристрій:

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


## Private Apps / webxdc

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


### Що таке перевірена група? Чому це експеримент? 

- Перевірена група це чат, що гарантує безпеку від активного нападника. Усі повідомлення у перевіреному чаті зашифровані наскрізним шифруванням, а нових учасників можна додавати лише через сканування QR-коду запрошення. Таким чином, всі учасники з'єднані один з одним через ланцюжок запрошень, що гарантує криптографічну узгодженість від активних мережевих атак або атак провайдерів. Дивіться [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) для технічних деталей цієї функції.

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

Це експериментальне налаштування для деяких людей, які експериментують з правилами на стороні сервера. Не всі провайдери підтримують це, але деякі дозволятимуть перемістити всі листи із заголовком "Chat-Version" до папки DeltaChat. Зазвичай це робиться додатком Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- увімкнене правило на стороні сервера для переміщення всіх повідомлень із заголовком Chat-Version до папки DeltaChat та
- встановлено параметр "Показувати класичні електронні листи" у значення "ні, лише чати".

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


## Інше

### Чи підтримує Delta Chat роботу з _моїм_ провайдером електронної пошти?

- У більшості випадків: Так :)
Проте для коректної роботи деяких провайдерів потрібні специфічні налаштування. Дивіться наш [огляд провайдерів](https://providers.delta.chat)


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

- На 2021/2022 рік ми отримуємо фінансування *Internet Freedom* (~500 тис. дол. США) від Бюро США з питань демократії, прав людини та праці (DRL). Це фінансування підтримує наші довгострокові цілі зробити Delta Chat більш зручним для використання і сумісним з широким спектром серверів електронної пошти по всьому світу, більш стійким і безпечним в місцях, які постраждали від інтернет-цензури та відключення інтернету.

– Іноді ми отримуємо одноразові пожертви від приватних осіб за які ми вдячні. Наприклад, у 2021 році щедра приватна особа перерахував нам 4 тис. євро з повідомленням «так тримати!». Ми використовуємо такі пожертви для фінансування зборів на розвиток або для тимчасових витрат, які важко передбачити або відшкодувати за рахунок грантів державного фінансування.

- Кілька експертів та ентузіастів, які працюють на громадських засадах, сприяли розробці програми Delta Chat, не отримуючи грошей або лише невеликі суми. Без них Delta Chat не був би там, де є сьогодні, навіть близько.

Зазначене вище грошове фінансування в основному організовано компанією merlinux GmbH у Фрайбурзі (Німеччина) і розподілено між більше ніж дюжиною розробників по всьому світу.

Фінансування на другу половину 2022 року і особливо на 2023 рік є постійним питанням, що викликає занепокоєння. Окрім подання заявки на отримання додаткового державного фінансування, ми хочемо стати більш незалежними від державних джерел фінансування. Будь ласка, перегляньте [способи допомоги Delta Chat](https://delta.chat/en/contribute) для отримання можливостей фінансової підтримки та підтримки, пов’язаної з розробкою.
