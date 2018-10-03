---
title: Delta.Chat desktop update
author: karissa, magnus
---

We are working on a desktop application for Delta.Chat. It's written in electron, based on the [node bindings](https://github.com/deltachat/deltachat-node) and partially based on the ui from Signal desktop. There are some early releases for Linux and Mac out already (Windows in the works). You can download them [here](https://github.com/deltachat/deltachat-desktop/releases/).

At the moment the application can be considered in early alpha with rudimentary features only:

* login with IMAP user and password
* create contacts
* create chats with contacts
* create group chats
* send and receive messages
* image, audio and video attachments
* send and receive [Autocrypt setup messages](https://autocrypt.org/level1.html#autocrypt-setup-message) for synchronizing secret keys between devices
* multi language support (25 languages and counting)

What's not expected work:

* group chats verified by qr code
* voice messages
* advanced configuration

We are looking for testing and feedback on the following:

* downloading and installing the application
* starting the application
* logging in
* creating contacts
* creating chats with contacts
* sending and receiving messages

We also need help with contributions in the following areas:

* css/design
* windows support
* translations via [transifex](https://www.transifex.com/delta-chat/delta-chat-desktop/)

If you have any feedback, please create an account at our [support forum](https://support.delta.chat/). From there we can create issues on respective github repository and take action from there.

Cheers!
