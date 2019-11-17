---
title: Help
lang: ru
---



<!-- GENERATED FILE -- DO NOT EDIT -->




# Frequently Asked Questions
{:toc}

# Общее

## Что такое Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat — это новое приложение для чата, которое отправляет сообщения по электронной почте, зашифрованные, если это возможно, с помощью Autocrypt. 
**Вам не нужно нигде регистрироваться, просто используйте существующую учётную запись электронной почты в Delta Chat.** 

## Как мне найти людей для общения? 

С помощью Delta Chat вы можете писать на любые существующие адреса
электронной почты, даже если получатель не использует приложение Delta Chat.
Получателю не нужно устанавливать то же приложение, что и у вас, в отличии от других мессенджеров.

## Каковы преимущества Delta Chat по сравнению с другими мессенджерами?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _Compatible_ - not only to itself.
- _Elegant_ and _simple_ user interface.
- _Distributed_ system.
- _No Spam_ - only messages of known users are shown by default.
- _Reliable_ - safe for professional use.
- _Trustworthy_ - can even be used for business messages.
- _Copyleft_ and _Standards_ based libre software.

## Какие сообщения отображаются в Delta Chat?

Delta Chat автоматически показывает:

- Сообщения от контактов в вашей **адресной книги**
- Сообщения от контактов, которым **вы писали сами**
- **Ответы** на сообщения отправленные вами

Другие сообщения не отображаются автоматически и их можно найти в основном меню в разделе **Запросы контактов**. При желании чат можно начать оттуда.

## Как насчёт спама?

- Сообщения в общих папках нежелательной почты игнорируются, а содержащиеся в них адреса не считаются известными контактами.
- Поскольку сообщения от неизвестных контактов не появляются автоматически, как правило, **спама нет**.
- Конечно, при необходимости вы можете **заблокировать** любой контакт.

## Delta Chat поддерживает вложения типа фото, видео или чего-нибудь ещё?

- Да. Помимо обычного текста, все вложения электронной почты отображаются в виде отдельных сообщений. В исходящие сообщения вложения встраиваются по мере необходимости автоматически.

## Поддерживает ли Delta Chat электронную почту в формате HTML?

- Да. Если во входящей электронной почте отсутствует текстовая часть, HTML-сообщение  преобразуется в текстовый вид в приложении. Исходящие сообщения всегда используют простой текст.

# Группы

## Создание группы

- Выберите **Добавить группу** в меню в правом верхнем углу списка чатов.
- На следующем экране выберите **участники группы** и отметьте галочку в правом верхнем углу. После этого, вы можете ввести **название группы**.
- Как только вы наберете **первое сообщение** в группе, все участники группы узнают о ее существовании и смогут ответить вам здесь же (до тех пор, пока вы не напишете сообщение в группу, группа будет невидима для остальных участников).

## Добавление участников в группу

- Каждый участник группы имеет **те же права**, что и любой другой. По этой причине каждый может удалить любого участника или добавить нового.
- Чтобы добавить или удалить участников, нажмите на название группы в чате.

##Что такое проверенная группа?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other. It enforces e2e group encryption that is safe against provider or 
  network attacks. However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Я случайно себя удалил.

- Поскольку вы больше не являетесь членом группы, вы не можете добавлять себя снова. 
  Тем не менее, проблемы нет, просто попросите любого другого члена группы в обычном чате повторно добавить вас.

## Я больше не хочу получать сообщения группы.

- Либо удалите себя из списка участников, либо удалите весь чат. 
  Если позже вы снова захотите присоединиться к группе, попросите другого члена группы добавить вас.

- As an alternative, you can also "Mute" a group - doing so means you get all messages and 
  can still write, but are no longer notified of any new messages.

# Шифрование {#encryption}

## Поддерживает ли Delta Chat сквозное шифрование?

- Да. В Delta Chat реализован стандарт Autocrypt Level 1 и поэтому
защищённые сквозным (E2E) шифрованием сообщения совместимы с
другими приложениями, поддерживающими Autocrypt.

## Что нужно сделать, чтобы активировать сквозное шифрование?

- Ничего.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _turn off_ the end-to-end-encryption, 
  use the corresponding setting in "Settings / Advanced settings".

## Если сквозное шифрование недоступно, связь не шифруется вообще?

- No. With most mail servers will then use _transport encryption_ (TLS).


## Как проверить шифрование?

- If a little **padlock** is shown beside a message, this denotes the message is end-to-end-encrypted _and_ is sent from the given sender _and_ that your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.


## Как мне проверить отправителя?

The user's profile shows some additional info:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, the connection is safe.

- For transport encryption, this state is just shown there


## Какие стандарты используются для сквозного шифрования?

- Стандарт OpenPGP. Обмен ключами осуществляется через [Autocrypt](https://autocrypt.org).

## Можно ли повторно использовать существующий закрытый ключ?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

## I can't import my existing PGP key into Delta Chat.

In general, Delta Chat should support "common" private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat. Please remove the
encryption and the password and try the import again.

Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.

# Мульти-клиент {#multiclient}

## Can I use Delta Chat on multiple devices at the same time?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to sync their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it, which should prompt you for the security number. 

- You are now synchronized, and can use both devices for
  sending and receiving E2E-encrypted messages with your communication partners. 

# Прочее

## Дельта.Чат поддерживает работу с _моим_ провайдером эл.почты?

- В большинстве случаев: Да :)  
  Тем не менее, для некоторых почтовых служб(провайдеров), их корректной работы, требуются специфические настройки; наши пользователи собирают эти настройки на нашем форуме [Обзор поставщиков эл.почты](https://support.delta.chat/t/provider-overview/)


## Меня интересуют технические детали. Можете рассказать больше?

- Смотрите [Стандарты, используемые в Delta Chat]({% include standards-url %}).
