---
title: Помощь
layout: default-ru
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Часто задаваемые вопросы

- [Общее](#general)
- [Группы](#groups)
- [Шифрование](#encryption)
- [Мульти-клиент](#multiclient)
- [Прочее](#miscellaneous)

# Общее

## What is Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat is a new chat app that uses e-mails for transfering messages. 
If you receive a chat message just use your e-mail app to read the
message and reply. **You are not required to sign up anywhere, go to a website
or install Delta Chat.**

## How can i find people to chat with? 

With Delta Chat, you can write to every existing e-mail address - even
if the recipient is not using the Delta Chat App. This is one of
the biggest differences to other messengers: There is no need for the
receiver to install the same app as yours.

## Каковы преимущества Delta Chat по сравнению с другими мессенджерами?

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

## Какие сообщения отображаются в Delta Chat?

Delta Chat автоматически показывает ...

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Другие сообщения не отображаются автоматически. Вы можете посмотреть другие сообщения в пункте главного меню **Запросы контактов** и, при желании, начать чат оттуда.

## Что насчёт спама?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat поддерживает вложения типа фото, видео или чего-нибудь ещё?

- Да. Помимо обычного текста, все вложения электронной почты отображаются в виде отдельных сообщений. Исходящие сообщения автоматически получают вложения.

## Поддерживает ли Delta Chat HTML-письма?

- Да. Если во входящей электронной почте отсутствует текстовый формат «text/plain» , мы преобразуем HTML-письма в текстовый формат самостоятельно. Исходящие письма всегда используют текстовый формат.

# Группы

## Как создать группу?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## How to add members to a group?

- Каждый участник группы имеет **те же права**, что и любой другой. По этой причине каждый может удалить любого участника или добавить нового.
- Чтобы добавить или удалить участников, нажмите на название группы в чате.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Я случайно себя удалил.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## Я больше не хочу получать сообщения группы.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Шифрование {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Что нужно сделать, чтобы активировать сквозное шифрование?

- Ничего.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Если сквозное шифрование недоступно, связь не шифруется вообще?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Как проверить шифрование?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Как мне проверить отправителя?

В профиле пользователя будет видна следующая информация:

- You can tap "QR Invite code" on Android and then use the "scan QR code"
  button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Какие стандарты используются для сквозного шифрования?

- Стандарт OpenPGP. Обмен ключами осуществляется через [Autocrypt](https://autocrypt.org).

## Можно ли повторно использовать существующий закрытый ключ?

— Да. Самый простой способ использовать существующий ключ — отправить его из приложения для работы с электронной почтой. Найдите в настройка слова типа "Autocrypt Setup Message" в параметрах своего приложения и следуйте дальнейшим указаниям.

— Также возможно выполнить импорт ключей вручную. Для этого воспользуйтесь пунктом меню «Расширенные настройки →  Управление закрытыми ключами». Внимание: убедитесь в том что ключи незащищены паролем, отключите и/или удалите пароль перед их использованием.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Мульти-клиент {#multiclient}

## Могу ли я использовать Delta Chat на нескольких устройствах одновременно?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Прочее

## Дельта.Чат поддерживает работу с _моим_ провайдером эл.почты?

- В большинстве случаев: Да :)  
  Тем не менее, для некоторых почтовых служб(провайдеров), их корректной работы, требуются специфические настройки; наши пользователи собирают эти настройки на нашем форуме [Обзор поставщиков эл.почты](https://support.delta.chat/t/provider-overview/)


## Меня интересуют технические детали. Можете рассказать больше?

- Смотрите на странице [Стандарты используемые в Delta Chat]({% include standards-url %}).
