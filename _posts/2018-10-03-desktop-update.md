---
title: Delta.Chat desktop update
author: karissa, magnus
---

We are working on a desktop application for Delta.Chat. It's written in electron, based on the [node bindings](https://github.com/deltachat/deltachat-node) and partially based on the ui from Signal desktop. There are some early releases for Linux and Mac out already (Windows in the works). You can download them [here](https://github.com/deltachat/deltachat-desktop/releases/).

At the moment the application can be considered in early alpha with rudimentary features only. You can:

* login with your IMAP user and password
* create contacts
* create chats with contacts
* send and receive messages (image attachments should work)
* import keys from another device
* multi language support (25 languages and counting)

What's not expected work:

* voice, sound and video messages
* group chats
* advanced configuration

What do we need help with and what kind of feedback is useful to us right now?

* basic testing in the form of:
  * downloading and installing the application
  * starting the application
  * logging in
  * creating contacts
  * creating chats with contacts
  * sending and receiving messages
* translations via [transifex](https://www.transifex.com/delta-chat/delta-chat-desktop/)

If you have any feedback, please create an account at our [support forum](https://support.delta.chat/). From there we can create issues on respective github repository and take action from there.

Cheers!
