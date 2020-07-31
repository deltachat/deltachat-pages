---
title: Disappearing messages and Video chats
author: bjoern
image: ../assets/blog/2020-07-scan-videochat-provider.jpg
---

We're happy that we can introduce **two more major, frequently requested features** in Delta Chat:
_Disappearing messages_ and _Video chats_.


### Video chats

_"How can e-mail and video chats go together?"_

_"And what if the called person does not even use Delta Chat?"_  
(remember, we do not force people to use our app)

_"Also, how this can fit with our decentralized approach?"_

We were thinking a lot about these questions in the past,
together with different user groups and tester,
and driven by various ux-researches.


<img src="../assets/blog/2020-07-scan-videochat-provider.jpg" width="320" style="float:right; clear:both; margin-left:1em; margin-bottom:.2em;" alt="" />
So - it is **up to the user to decide which video chat provider to use.**

- They can enter it in the **settings**
- The video provider may come from the **provider-info** with the other server-data 
(which makes a lot of sense, however, currently this is not supported by many email-provider).
- Finally, the user can also scan a video chat provider **from a qr-code** - 
this way, video chat providers can be shared easily and quickly.

Delta Chat is **not very picky** about the provider choosen -
the user can use every instance that reads the roomname from the url, 
which is basically any open service, jitsy, talky, appear.in and many more,
may they are open or not.

<img src="../assets/blog/2020-07-videochat-invite2.png" width="220" style="float:right; clear:both; margin-left:1em; margin-bottom:.2em;" alt="" />
We believe in widely decentralizing the video chat services
is a good idea for overall privacy.
Giving the user the option to just use existing instances helps a lot on this approach.

However, once set, **starting a video chat is simple** -
just tap "Video chat" in any one-to-one chat and wait for the recipient to join.
(there is no need for the recipient to set a video chat provider on its own -
and also, the recipeint is still free to join the chat from a 
non-delta-client, if they really want to :)

_Video chats can be started from Android 1.12 and Desktop 1.10 and
can be joined from all existing clients_

## Disappearing messages


Another major feature are of all current Delta Chat versions are the so called 
_Disappearing messages_.

Once enabled in the settings,
with that, one user of a chat can decide that he likes to see all subsequent
messages disappearing.

After a chosen timeout,
the messages will disappear on all the users devices, 
on the users server -
and moreover, also on devices and servers of 
the other memvers if they are using Delta Chat and did not make a copy somehow.

It is all about trust -
you cannot guarantee deletion in any way, 
not for Delta Chat nor for any other messengers -
eg. users may use use a camera ...

However, together with the burner accounts and the 
deletion of old messages, Delta Chat has a pretty good
set of features to get rid of things :)


## Try out the new releases!

If you have not got the newest Delta Chat yet,
see [get.delta.chat](https://get.delta.chat) for an overview.
You'll also find detailed **changelogs** there.

As usual, the different stores take different lengths of times for updates — thanks for your patience. 
Also, thanks to all the ux-research attendees, testers, translators and developers to make this release happen :)
