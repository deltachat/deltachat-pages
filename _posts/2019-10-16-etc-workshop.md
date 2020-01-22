---
title: People Learning how to Install Mail Servers - Delta Chat at /ETC
author: compl4xx
---

Recently, I had the chance to attend the [Eclectic Tech Carnival
(/ETC)](https://eclectictechcarnival.org) in Athens, a feminist event about
technology. It was full of self-organized learning, exploring technology in a
space far from the alienating IT culture.

Mostly women and nonbinary people attended, bringing a variety of skills
to share. I am used to the elitism of nerd culture -
the contrast was wild. Never did I see a learning atmosphere like that, where
everyone could learn from each other, without fear admitting to not knowing everything.

Donna and Juga conducted a workshop on installing and maintaining mail
servers - a very interesting topic for me, having installed my first own mail server
only weeks ago. The workshop was part of the effort to make [burner e-mail
accounts](https://delta.chat/en/2018-11-17-deltaxi#new-planned-features-for-at-risk-and-other-users)
a widespread feature on more mail servers. The main goal was teaching
attendees no witchcraft is involved in managing servers (not that there would be
anything to say against witchcraft).

![A group photo from /ETC. 19 people smile into the camera, some are horsing
around.](../assets/blog/20191021-delta-chat-etc-workshop-group-photo.jpg)

*Some people who attended /ETC - it was a lot of fun.* [(Photo:
/ETC)](https://eclectictechcarnival.org/etc/2019/athens/communications/group-photo/)

## How Delta Chat Can Benefit People

14 people attended to learn more about mail servers. We helped each other out,
sharing our experience with Delta Chat and mail servers. 

First, Donna gave an overview of Delta Chat. There was some discussion about
the possibilities of a messenger in the decentralized mail network, especially
the possibility of communicating with people using other e-mail applications.
The strengths of Autocrypt as an encryption standard was on display, in its
compatibility with many other e-mail clients.

Another emphasis was that of burner accounts. Many participants were activists, and
had to think about protecting their identities not only once. (Queer-)Feminist
work can be dangerous, whether having to deal with violent partners,
right-wing militants, or privacy-sensitive emotional support.

![A backyard in Athens](../assets/blog/20191021-delta-chat-etc-workshop-athens-backyard.jpg)

*We stayed at a quiet place in Athens, with a beautiful backyard.*

## Burner Mail Servers in a Workshop

Come time for more practice, folling the theory part, Donna handed out seven
pieces of paper containing logins. They were for virtual private servers
(VPS) she had created beforehand. Everyone started logging in via SSH
(a remote command line), finding out how the SSH command works,
struggling with the bad squat Wi-Fi.

Juga took over from there to teach everyone how to install a mail server, and
what to watch out for. To get started I teamed up with a friend, as did the others.
We could look up the instructions in a pad for how to install & configure a
postfix SMTP server - the software taking care of sending e-mails, and receiving
them from other mail servers on the Internet.

Following everyone getting an SMTP server up and running, the fun part - using it to
communicate with each other! With using Mutt on the server command-line, we
sent each other e-mails to prove that it works. It was really good to see it
actually working. I didn't expect it to function for everyone so quickly.

An SMTP server is however only half that of a good mail server - you also need an
IMAP server, so Delta Chat can download the received e-mails from the server.
We installed Dovecot for that, to be able to use the mail server with Delta Chat.

In the end we played around with it a bit more. Taking a look at the logs to
get some practice maintaining a server. The installation is the quick
part, as mail servers also need maintenance love.

![A command-line, projected on the
wall.](../assets/blog/20191022-delta-chat-etc-workshop-projector-command-line.png)

*Learning how to look at the running processes during the workshop.*

## So What Comes Next?

Time did not permit trying out the mail server with Delta Chat,
though with the feedback the workshop got, maybe next time. The workshop
is definitely going to take place more often, poised for the upcoming
[Chaos Communication Congress](https://events.ccc.de) among others.

Given more time come next workshop, setting up the burner accounts API is on the
list of things to do too. This is the part of the mail server allowing creation of
a temporary e-mail account with a single request. This means only having to tap
a single button in Delta Chat to create an account, sometime in the future.

It is not much effort to install a mail server. Even following the very first steps
on the command line; a beautiful sight.

Unfortunately servers had to be deleted afterwards - just more
motivation to set up our own outside the control of others ;)
Decentralization meets empowerment.

![A person holding a DIY Faraday bag with "cyberpunk is now" written on
it.](../assets/blog/20191021-delta-chat-etc-workshop-faraday-bag.jpg)

*At another workshop we could create our own Faraday bags;
a hardware airplane mode that looks super cool.*
