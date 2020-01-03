---
title: FAQ
lang: ru
render_toc: true
header: Часто задаваемые вопросы
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# General

## What is Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat — это новое приложение для чата, которое отправляет сообщения по электронной почте, зашифрованные, если это возможно, с помощью Autocrypt. 
**Вам не нужно нигде регистрироваться, просто используйте существующую учётную запись электронной почты в Delta Chat.** 

## How can I find people to chat with? 

С помощью Delta Chat вы можете писать на любые существующие адреса
электронной почты, даже если получатель не использует приложение Delta Chat.
Получателю не нужно устанавливать то же приложение, что и у вас, в отличии от других мессенджеров.

## What are the advantages of Delta Chat compared to other messengers?

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

## Which messages do appear in Delta Chat?

Delta Chat автоматически показывает:

- Сообщения от контактов в вашей **адресной книги**
- Сообщения от контактов, которым **вы писали сами**
- **Ответы** на сообщения отправленные вами

Другие сообщения не отображаются автоматически и их можно найти в основном меню в разделе **Запросы контактов**. При желании чат можно начать оттуда.

## What about spam?

- Сообщения в общих папках нежелательной почты игнорируются, а содержащиеся в них адреса не считаются известными контактами.
- Поскольку сообщения от неизвестных контактов не появляются автоматически, как правило, **спама нет**.
- Конечно, при необходимости вы можете **заблокировать** любой контакт.

## Does Delta Chat support images, videos and other attachments?

- Да. Помимо обычного текста, все вложения электронной почты отображаются в виде отдельных сообщений. В исходящие сообщения вложения встраиваются по мере необходимости автоматически.

## Does Delta Chat support HTML e-mails?

- Да. Если во входящей электронной почте отсутствует текстовая часть, HTML-сообщение  преобразуется в текстовый вид в приложении. Исходящие сообщения всегда используют простой текст.

# Groups

## Creation of a group

- Выберите **Добавить группу** в меню в правом верхнем углу списка чатов.
- На следующем экране выберите **участники группы** и отметьте галочку в правом верхнем углу. После этого, вы можете ввести **название группы**.
- Как только вы наберете **первое сообщение** в группе, все участники группы узнают о ее существовании и смогут ответить вам здесь же (до тех пор, пока вы не напишете сообщение в группу, группа будет невидима для остальных участников).

## Add members to a group

- Каждый участник группы имеет **те же права**, что и любой другой. По этой причине каждый может удалить любого участника или добавить нового.
- Чтобы добавить или удалить участников, нажмите на название группы в чате.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other. It enforces e2e group encryption that is safe against provider or 
  network attacks. However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## I have deleted myself by accident.

- Поскольку вы больше не являетесь членом группы, вы не можете добавлять себя снова. 
  Тем не менее, проблемы нет, просто попросите любого другого члена группы в обычном чате повторно добавить вас.

## I do not want to receive the messages of a group any longer.

- Либо удалите себя из списка участников, либо удалите весь чат. 
  Если позже вы снова захотите присоединиться к группе, попросите другого члена группы добавить вас.

- Или, в качестве альтернативы, вы также можете отключить уведомления для группы - это означает, что вы будете получать все сообщения и сможете их писать, но больше не будете получать уведомления о новых сообщениях.

# Encryption {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Да. В Delta Chat реализован стандарт Autocrypt Level 1 и поэтому
защищённые сквозным (E2E) шифрованием сообщения совместимы с
другими приложениями, поддерживающими Autocrypt.

## What do I have to do to activate the end-to-end-encryption?

- Ничего.

- Приложения Delta Chat (и другие [Autocrypt](https://autocrypt.org)-совместимые
  почтовые приложения) делятся ключами сквозного шифрования автоматически после отправки первого сообщения. 
  После этого все участники переписки подключаются к протоколу сквозного шифрования автоматически. 
  Если один из участников переписки использует приложение, не поддерживающее 
  Autocrypt, последующие сообщения не шифруются до тех пор, пока совместимое с 
  Autocrypt не будет снова доступно у всех участников. 

- Если вы хотите _отключить_ сквозное шифрование, используйте соответствующий пункт в меню "Настройки" / "Расширенные настройки".

## If end-to-end-encryption is not available, is the connection not encrypted at all?

- No. With most mail servers will then use _transport encryption_ (TLS).


## How can I check the encryption?

- Если за сообщением виден маленький **замок**, значит это сообщение зашифровано _и_ отправлено с использованием протокола сквозного шифрования, а также что _и_ ваш ответ тоже будет зашифрован.

- Если **нет замка**, сообщение обычно передаётся в незашифрованном виде, например, потому что вы или отправитель отключили сквозное шифрование, или отправитель использует приложение без поддержки сквозного шифрования.


## How can I verify the sender?

В профиле пользователя будет видна следующая информация:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, the connection is safe.

- При использовании транспортного шифрования просто отображается его состояние.


## Which standards are used for end-to-end-encryption?

- OpenPGP. Key transport is done via [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Да. Лучший способ — отправить сообщение с параметрами Autocrypt с другого почтового клиента. Ищите что-то вроде **Начать передачу настроек Autocrypt** в настройках другого клиента и следуйте указанным там инструкциям.

- Можно также импортировать ключ вручную в "Дополнительные параметры"  > "Управление ключами". Внимание: убедитесь, что ключ не защищён паролем или удалите пароль заранее.

Если у вас нет ключа или вы даже не знаете, что он вам понадобится, не волнуйтесь: Delta Chat сгенерирует его по мере необходимости, вам не нужно даже нажимать кнопку для этого. 

## I can't import my existing PGP key into Delta Chat.

In general, Delta Chat should support "common" private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat. Please remove the
encryption and the password and try the import again.

Удаление пароля приватного ключа будет отличаться в зависимости от программного обеспечения, используемого для управления ключами PGP. 
В Enigmail вы можете установить пустой пароль в окне управления ключами. 
В GnuPG вы можете установить его [через командную строку](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Для других программ ищите решение в интернете.

# Multi-client {#multiclient}

## Can I use Delta Chat on multiple devices at the same time?

Если вы хотите использовать **одну и ту же учётную запись** на различных устройствах (с поддержкой Autocrypt), необходимо синхронизировать их возможности шифрования: 

- На первом устройстве выберите "Дополнительные параметры" / "Отправить сообщение с параметрами Autocrypt" и удерживайте кнопку нажатой до тех пор, пока не появится "защитный код".

- На другом устройстве дождитесь "Сообщения с параметрами Autocrypt" и нажмите на него, что приведёт к запросу защитного кода.

- Теперь синхронизация выполнена и можно использовать оба устройства для отправки и получения сообщений, защищённых сквозным (E2E) шифрованием, вашим партнёрам по общению. 

# Miscellaneous

## Does Delta Chat work with _my_ e-mail-provider?

- В большинстве случаев: Да :)  
  Тем не менее, для некоторых почтовых служб(провайдеров), их корректной работы, требуются специфические настройки; наши пользователи собирают эти настройки на нашем форуме [Обзор поставщиков эл.почты](https://support.delta.chat/t/provider-overview/)


## I'm interested in the technical details. Can you tell me more?

- Смотрите [Стандарты, используемые в Delta Chat]({% include standards-url %}).
