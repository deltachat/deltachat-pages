---
title: Help
layout: default-uk
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Часті питання

- [Загальне](#general)
- [Групи](#groups)
- [Шифрування](#encryption)
- [Мульти-клієнт](#multiclient)
- [Інше](#miscellaneous)

# Загальне

## Кому я можу написати?

- За допомогою Delta Chat Ви можете написати на будь-яку існуючу адресу електронної пошти, навіть якщо одержувач (поки) не використовує цей додаток. Це одне з найбільших відмінностей від інших месенджерів: у одержувача немає необхідності встановлювати той же додаток, що і у Вас.

## Які переваги має Delta Chat у порівнянні з іншими месенджерами?

- _Independent_ of any company or services. _You_ own your data.
- Your data are not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP
- _Largest userbase_ - receivers _not_ using Delta Chat can be reached as well
- _Compatible_ - not only to itself
- _Elegant_ and _simple_ user interface
- _Distributed_ system
- _No Spam_ - only messages of known users are shown by default
- _Reliable_ - safe for professional use
- _Trustworthy_ - can even be used for business messages
- fully _Open Source_ and _Standards_ based

## Що буде, якщо одержувач не використовує Delta Chat?

- Ваш адресат отримає звичайного електронного листа. Якщо він відповість на нього, Ви побачите відповідь (зокрема відправлені файли) у додатку Delta Chat.

## Які повідомлення відображаються у Delta Chat?

Delta Chat автоматично показує...

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Інші повідомлення не відображаються автоматично. Ви можете ознайомитись з ними у пункті головного меню **Запити контактів** і, за бажанням, почати чат звідти.

## Як щодо спаму?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat підтримує вкладення у вигляді фото, відео і т.д.?

- Так. Крім звичайного тексту, всі вкладення електронної пошти відображаються у вигляді окремих повідомлень. Вихідні повідомлення автоматично отримують вкладення.

## Чи підтримує Delta Chat HTML-листи?

- Так. Якщо у вхідній електронній пошті відсутній текстовий формат «text/plain», ми перетворюємо HTML-листи у текстовий формат самостійно. Вихідні листи завжди використовують текстовий формат.

# Групи

## Як створити групу?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## How to add members to a group?

- Кожен учасник групи має **ті ж самі права**, що і будь-який інший. З цієї причини кожен може видалити будь-якого учасника або додати нового.
- Щоб додати або видалити учасників, натисніть на назву групи в чаті.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Я випадково себе видалив.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## Я більше не хочу отримувати повідомлення групи.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Шифрування {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Що потрібно зробити, щоб активувати наскрізне шифрування?

- Нічого.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Якщо наскрізне шифрування недоступне, з'єднання не шифрується взагалі?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Як перевірити шифрування?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Як мені перевірити відправника?

У профілі користувача буде видно наступну інформацію:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Які стандарти використовуються для наскрізного шифрування?

- Стандарт OpenPGP. Обмін ключами здійснюється через [Autocrypt](https://autocrypt.org).

## Чи можна повторно використовувати існуючий закритий ключ?

- Так. Найпростіший спосіб використати існуючий ключ – відправити повідомлення з параметрами Autocrypt з додатку для роботи з електронною поштою. Знайдіть в налаштуваннях свого додатку слова типу **Почати передачу параметрів Autocrypt** і дотримуйтесь подальших вказівок.

- Також можливо виконати імпорт ключів вручну. Для цього скористайтеся пунктом меню «Інші параметри → Управління закритими ключами». Увага: переконайтеся в тому, що ключі не захищені паролем (вимкніть і/або видаліть пароль перед їх використанням).

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Мульти-клієнт {#multiclient}

## Чи можна використовувати Delta Chat на декількох пристроях одночасно?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Інше

## Чи підтримує Delta Chat роботу з _моїм_ провайдером електронної пошти?

- У більшості випадків: Так :)
  Проте для коректної роботи деяких провайдерів потрібні специфічні налаштування. Користувачі збирають ці налаштування на нашому форумі [Огляд провайдерів електронної пошти](https://support.delta.chat/t/provider-overview/)


## Мене цікавлять технічні деталі. Можете розповісти більше?

- Дивіться на сторінці [Стандарти, що використовуются у Delta Chat]({% include standards-url %}).
