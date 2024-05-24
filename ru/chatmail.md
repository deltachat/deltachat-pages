---
title: Chatmail для мгновенного, совместимого и конфиденциального общения
lang: ru
---


## What are chatmail servers and how to select one? 

<img alt="Chatmail logo" src="../assets/logos/chatmail.svg" width="80" style="float:right;" />

Chatmail servers are optimized for messaging with Delta Chat 
to provide a privacy-preserving and speedy user experience, 
securely interoperable with chatmail and classic e-mail servers. 
**Tap a chatmail server link** to see the home page and then tap the QR invite code there: 

- [nine.testrun.org](https://nine.testrun.org) is the default onboarding chatmail server
  for Delta Chat apps and has been stable since the [December 2023 Chatmail announcement](https://delta.chat/en/2023-12-13-chatmail).

- [mehl.cloud](https://mehl.cloud) ориентирован на немецкоязычных пользователей и стабильно работает с января 2024 года.

- [mailchat.pl](https://mailchat.pl) ориентирован на польскоязычных пользователей пользователей и стабильно работает с января 2024 года.

- [bcc.chat](https://bcc.chat) работает в США и стабильно работает с февраля 2024 года.

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/)
  is geared towards Italian speaking users and has been 
  stable since May 2024. 

All chatmail servers are operated by different groups and people. 
The nine.testrun.org default server is operated by core Delta Chat team members. 

## Can i also use a regular e-mail server instead of chatmail?

Да, многие пользователи успешно используют обычные почтовые серверы
особенно если они хотят обрабатывать свою обычную электронную почту с помощью Delta Chat.
Варианты смотрите в [базе данных провайдеров](https://providers.delta.chat).
Обратите внимание, что Delta Chat поддерживает несколько учетных записей, поэтому
вполне достаточно иметь один аккаунт, настроенный на ваш обычный адрес электронной почты,
а другой - для общения в чате.


## Чем серверы chatmail отличаются от серверов e-mail?

Серверы Chatmail это минимальные серверы электронной почты, разработанные для обеспечения скорости, безопасности и удобства:

- **Удобство:** Автоматическое подключение за несколько секунд и получение push-уведомлений

- **Приватность:** Никаких вопросов, никаких имен, номеров или электронной почты.

- **Скорость:** Доставка сообщений из конца в конец занимает менее секунды.

- Надежность:** Никаких раздражающих проверок на спам или ограничений скорости.

- **Безопасность:** Исходящие сообщения требуются быть зашифрованы сквозным шифрованием,
  входящие сообщения строго проверяются на подлинность.


## Насколько можно доверять серверам chatmail?

Each chatmail server provides additional privacy information on their web page.
Typically, a chatmail server only processes encrypted messages and
implements automatic, unconditional message deletion after at most 20 days.

Delta Chat обеспечивает [гарантированное сквозное шифрование](https://delta.chat/en/2023-11-23-jumbo-42)
что означает, что в большинстве случаев операторы сервера не смогут прочитать ваши сообщения, даже если попытаются это сделать,
Эта гарантия подтверждена недавним [анализом безопасности от Швейцарской высшей технической школой Цюриха ETH](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin).


## Как работают серверы chatmail?

Все серверы chatmail автоматически развертываются и обновляются с помощью
[публичного репозитория разработки chatmail](https://github.com/deltachat/chatmail).
Серверы chatmail состоят из проверенных стандартных компонентов сервера электронной почты,
[Postfix](https://postfix.org) и [Dovecot](https://dovecot.org),
и сконфигурированы таким образом, чтобы работать без присмотра и не требовать больших усилий по обслуживанию.
Серверы Chatmail с удовольствием работают на недорогом оборудовании, например на Raspberry Pi.


# Как финансируются серверы chatmail?

Серверы Chatmail разработаны так, чтобы их эксплуатация была очень дешевой,
и, как правило, они финансируются операторами самостоятельно.
Дополнительную информацию можно найти на главной странице каждого сервера chatmail.

Чтобы поддержать развитие chatmail и работу сервера по умолчанию
вы можете внести свою лепту.

[Пожертвовать деньги](donate){: .cta-button}
