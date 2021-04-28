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

- Також можливо виконати імпорт ключів вручну у "Налаштуваннях" або "Додаткових налаштуваннях" виберіть "Імпортувати секретні ключі. Увага: переконайтеся, що ключі не захищені паролем, або видаліть пароль заздалегідь.

Якщо у вас немає ключа або ви навіть не знаєте, чи він вам знадобиться - не хвилюйтеся: Delta Chat генерує ключі за необхідності, вам не потрібно натискати для цього кнопку.


### Я не можу імпортувати свій існуючий PGP ключ у Delta Chat.

Найімовірнішою причиною є те, що ваш ключ зашифрований та/або використовується пароль. Такі ключі не підтримуються Delta Chat. Ви можете видалити шифрування парольної фрази та пароль і спробувати імпорт знову. Якщо ви хочете зберегти свою парольну фразу, вам доведеться створити псевдонім електронної пошти для використання з Delta Chat, щоб ключ Delta Chat був прив’язаний до цього псевдоніма електронної пошти.

Delta Chat підтримує поширені формати приватних ключів OpenPGP, однак навряд чи приватні ключі з усіх джерел будуть повністю підтримуватися. Це не головна мета Delta Chat. Фактично, більшість нових користувачів не матимуть жодного ключа до використання Delta Chat. Однак ми намагаємось підтримувати приватні ключі з якомога більшої кількості джерел.

Видалення пароля з приватного ключа буде залежати від програмного забезпечення, яке використовується для управління ключами PGP. За допомогою Enigmail ви можете встановити для порожній пароль у вікні Керування ключами. За допомогою GnuPG ви можете встановити його [через командний рядок](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429). Для інших програм ви зможете знайти рішення в інтернеті.


### Чому ви не використовуєте pEp (pretty easy privacy)?

- Delta Chat використовує наскрізне шифрування Autocrypt. Для обговорення Autocrypt та pEp, перейдіть до [Autocrypt FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Мульти-клієнт {#multiclient}

## Чи можна використовувати Delta Chat на декількох пристроях одночасно?

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
