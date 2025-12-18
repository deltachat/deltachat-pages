---
title: FAQ
lang: fr
render_toc: true
header: Foire aux questions
---


## Qu'est-ce que Delta Chat ?

Delta Chat is a reliable, decentralized and secure instant messaging app,
available for mobile and desktop platforms.

- Instant creation of **private chat profiles**
  with secure and interoperable [chatmail relays](https://chatmail.at/relays)
  that offer instant message delivery, and Push Notifications for iOS and Android devices.

- Pervasive [multi-profile](#multiple-accounts) and
  [multi-device](#multiclient) support on all platforms
  and between different [chatmail apps](https://chatmail.at/clients).

- Interactive [in-chat apps](#webxdc) for gaming and collaboration

- [Audited end-to-end encryption](#security-audits)
  safe against network and server attacks.

- Free and Open Source software, both app and server side,
  built on [Internet Standards]({% include standards-url %}).


### How can I find people to chat with? {#howtoe2ee}

First, note that Delta Chat is a private messenger.
There is no public discovery, _you_ decide about your contacts.

- If you are **face to face** with your friend or family,
  tap the **QR Code** icon <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" />
  on the main screen.  
  Ask your chat partner to **scan** the QR image
  with their Delta Chat app.

- For a **remote** contact setup,
  from the same screen,
  click "Copy" or "Share" and send the **invite link**
  through another private chat.

Now wait while connection gets established.

- If both sides are online, they will soon see a chat
  and can start messaging securely.

- If one side is offline or in bad network,
  the ability to chat is delayed until connectivity is restored.

Congratulations!
You now will automatically use [end-to-end encryption](#e2ee) with this contact.
If you add each other to [groups](#groups), end-to-end encryption will be established among all members.


### Why is a chat marked as "Request"?

As being a private messenger,
only friends and family you [share your QR code or invite link with](#howtoe2ee) can write to you.

Your friends may share your contact with other friends,
this appears as <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Request</b>

- Vous devez d'abord **accepter** pour pouvoir répondre au message.

- Vous pouvez également choisir de **supprimer** l'invitation si vous ne souhaitez pas discuter avec cet inconnu maintenant.

- Si vous supprimez une invitation, les futurs messages de ce contact apparaîtront
de nouveau comme des invitations, de sorte que vous pouvez changer d'avis par la suite. Si vous ne voulez vraiment pas
recevoir de messages de cette personne, nous vous conseillons de la **bloquer**.


### How can I put two of my friends in contact with each other?

Attach the first contact to the chat of the second using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Contact**.
You can also add a little introduction message.

The second contact will receive a **card** then
and can tap it to start chatting with the first contact.


### Delta Chat prend-il en charge les images, vidéos et autres pièces jointes ?

Oui. Images, videos, files, voice messages etc. can be sent using the <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment-**
or <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Voice Message** buttons

Pour améliorer les performances, les images sont redimensionnées et envoyées en taille réduite par défaut ; mais vous pouvez les envoyer en tant que "fichier" pour en conserver la taille originale.


### What are profiles? How can I switch between them? {#multiple-accounts}

A profile is **a name, a picture** and some additional information for encrypting messages.
A profile lives on your device(s) only
and uses the server only to relay messages.

On first installation of Delta Chat a first profile is created.

Later, you can tap your profile image in the upper left corner to **Add Profiles**
or to **Switch Profiles**.

You may want to use separate profiles for political, family or work related activities.

You may also wish to learn [how to use the same profile on multiple devices](#multiclient).


### Qui peut voir ma photo de profil ?

Dans les paramètres vous pouvez ajouter une photo de profil. Si vous écrivez à vos contacts ou que vous les ajoutez via le QR code, ils la verront automatiquement comme votre photo de profil.

Pour des raisons de confidentialité, personne ne peut voir votre photo de profil sans que vous ayez d'abord entamé une discussion.


### Can I set a Bio/Status with Delta Chat? {#signature}

Yes,
you can do so under **Settings → Profile → Bio**.
Once you sent a message to a contact,
they will see it when they view your contact details.


### Que signifient "épingler", "sourdine" et "archiver" ?

Ces options vous permettent d'organiser et trier vos discussions :

- Les **discussions épinglées** restent en haut de votre liste de discussions. Vous pouvez ainsi retrouver plus rapidement vos discussions favorites ou éviter d'oublier des messages importants.

- Utilisez la **sourdine** pour les discussions dont vous ne voulez pas recevoir les notifications. Les discussions en sourdine figurent toujours dans votre liste et peuvent aussi être les épinglées.

- **Archivez les discussions** si vous ne voulez plus les voir apparaître dans votre liste de discussions.  Les discussions archivées restent accessibles au-dessus de la liste de discussions ou via la recherche.

- Lorsqu'un nouveau message est envoyé sur une discussion que vous avez archivée, et que vous n'avez pas mise en sourdine, la discussion **sort des archives** et reprend sa place dans votre liste de discussions.
  **Les discussions en sourdine restent archivées** tant que vous ne les désarchivez pas manuellement.

Pour archiver ou épingler une discussion, faites un appui long sur la discussion concernée (Android), ouvrez le menu de la conversation (Android/application de bureau), ou balayez vers la gauche (iOS) ;
pour mettre une discussion en sourdine, ouvrez le menu de la conversation (Android/application de bureau) ou le profil de la discussion (iOS).


### How do "Saved Messages" work? {#save}

**Saved Messages** is a chat that you can use to easily remember and find messages.

- In any chat, long tap or right click a message and select **Save**

- Saved messages are marked by the symbol
  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
  next to the timestamp

- Later, open the "Saved Messages" chat - and you will see the saved messages there.
  By tapping <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
  you can go back to the original message in the original chat

- Finally, you can also use "Saved Messages" to take **personal notes** - open the chat, type something, add a photo or a voice message etc.

- As "Saved Message" are synced, they can become very handy for transferring data between devices

Messages stay saved even if they are edited or deleted -
may it be by [sender](#edit), by [device cleanup](#delold) or by [disappearing messages of other chats](#ephemeralmsgs).


### Que signifie le point vert ?

You can sometimes see a **green dot** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/>
next to the avatar of a contact.
It means they were **recently seen by you** in the last 10 minutes,
e.g. because they messaged you or sent a read receipt.

So this is not a real time online status
and others will as well not always see that you are "online".


### Que signifient les coches affichées à côté des messages sortants ?

- **One tick** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/>
  means that the message was sent successfully to the [relay](#relays).

- **Two ticks**  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/>
  indicate your contact has read the message.

In [groups](#groups) the second tick means that at least one member has reported back having read the message.

You will only get the second tick if both you and one of the recipients who read the message
has **Settings → Chats → Read Receipts** enabled.


### Correct typos and delete messages after sending {#edit}

- You can edit the text of your messages after sending.
  For that, long tap or right click the message and select **Edit**
  or <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>.

- If you have sent a message accidentally,
  from the same menu, select **Delete** and then **Delete for Everyone**.

While edited messages will have the word "Edited" next to the timestamp,
deleted messages will be removed without a marker in the chat.
Notifications are not sent and there is no time limit.

Note, that the original message may still be received by chat members
who could have already replied, forwarded, saved, screenshotted or otherwise copied the message.


### How do disappearing messages work? {#ephemeralmsgs}

You can turn on "disappearing messages"
in the settings of a chat,
at the top right of the chat window,
by selecting a time span
between 5 minutes and 1 year.

Until the setting is turned off again,
each chat member's Delta Chat app takes care
of deleting the messages
after the selected time span.
The time span begins
when the receiver first sees the message in Delta Chat.
The messages are deleted both,
on the servers,
and in the apps itself.

Note that you can rely on disappearing messages
only as long as you trust your chat partners;
malicious chat partners can take photos,
or otherwise save, copy or forward messages before deletion.

Apart from that,
if one chat partner uninstalls Delta Chat,
the (anyway encrypted) messages may take longer to get deleted from their server.


### Que se passe-t-il si j'active l'option "Supprimer les anciens messages de l'appareil" ? {#delold}

- Vous pouvez choisir de supprimer automatiquement les anciens messages pour libérer de l'espace de stockage sur votre appareil. 
- Pour activer cette option, ouvrez les paramètres des "Discussions et fichiers multimédias" et cliquez sur "Supprimer les anciens messages de l'appareil". Vous pouvez définir le délai après lequel *tous* les messages seront supprimés de votre appareil, parmi plusieurs choix allant de "Immédiatement" à "Après 1 année".

### How can I delete my chat profile? {#remove-account} 

If you are using more than one chat profile,
you can remove single ones in the top profile switcher menu (on Android and iOS),
or in the sidebar with a right click (in the Desktop app).
Chat profiles are only removed on the device where deletion was triggered. 
Chat profiles on other devices will continue to fully function. 

If you use a single default chat profile you can simply uninstall the app.
This will still automatically trigger deletion of all associated address data on the chatmail server.
For more info, please refer to [nine.testrun.org address-deletion](https://nine.testrun.org/info.html#account-deletion) 
or the respective page from your chosen [3rd party chatmail server](https://chatmail.at/relays).


## Groups {#groups}

Groups let several people chat together privately with **equal rights**.

Anyone can
change the group name or avatar,
[add or remove members](#addmembers),
set [disappearing messages](#ephemeralmsgs),
and [delete their own messages](#edit) from all member's devices.

Because all members have the same rights, groups work best among **trusted friends and family**.


### Création d'un groupe

- Sélectionnez **Nouvelle discussion** puis **Nouveau groupe** dans le menu à trois points situé en haut à droite de la fenêtre ou son équivalent sous Android et iOS.
- Sur l'écran suivant, sélectionnez **Ajouter des participants** et choisissez un **Nom du groupe**. Vous pouvez aussi choisir une **image de groupe**.
- Lorsque vous enverrez le **premier message** dans le groupe, tous les membres en seront informés et pourront répondre. Le groupe est invisible aux autres membres si vous n'écrivez pas de premier message.


### Add and remove members {#addmembers}

- All group members have the **same rights**.
  For this reason, everyone can delete any member or add new ones.

- To **add or delete members**, tap the group name in the chat and select the member to add or remove.

- If the member is not yet in your contact list, but **face to face** with you,
  from the same screen, show a **QR code**.  
  Ask your chat partner to **scan** the QR image with their Delta Chat app by tapping
  <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> on the main screen.

- For a **remote** member addition,
  click "Copy" or "Share" and send the **invite link**
  through another private chat to the new member.

QR code and invite link can be used to add several members.
However, since groups are [meant for trusted people](#groups), avoid sharing them publicly.


### J'ai quitté un groupe par accident.

- Comme vous n'êtes plus membre du groupe, vous ne pouvez pas vous y ajouter vous-même. 
Contactez n'importe quel autre membre de ce groupe dans une discussion directe pour lui demander de vous y ré-inviter.


### Je ne souhaite plus recevoir les messages d'un groupe.

- Supprimez-vous de la liste des membres ou supprimez la discussion entière. 
Si souhaitez rejoindre le groupe plus tard, demandez à un autre membre du groupe de vous ré-inviter.

- Vous pouvez également mettre un groupe en "Sourdine" : vous recevrez tous les messages et pourrez toujours écrire, mais n'aurez plus les notifications des nouveaux messages.

### Cloning a group

You can duplicate a group to start a separate discussion
or to exclude members without them noticing.

- Open the group profile and tap **Clone Chat** (Android/iOS),
  or right-click the group in the chat list (Desktop).

- Set a new name, choose an avatar, and adjust the member list if needed.

The new group is **fully independent** from the original,
which continues to work as before.


### How many members can participate in a single group?

There is no strict technical limit,
but more than 150 is not recommended.

As groups get larger, they can become socially unstable and may need a hierarchy -
where Delta Chat is a private messenger for chatting with [equal rights](#groups).
See [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number) for more insights.


## In-chat apps {#webxdc}

You can send apps to a chat - games, editors, polls and other tools.
This makes Delta Chat a truly extensible messenger.


### Where can I get in-chat apps?

- In a chat, using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Apps**

- You can also [create your own app](#create-xdc) and attach it using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → File**


### How private are in-chat apps?

- In-chat apps can not send data to the Internet, or download anything.

- An in-chat app can only exchange data within a chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.

- The privacy an in-chat app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the in-chat app as well.

- This also means: Just like for web links, do not open apps from untrusted contacts.


### How can I create my own in-chat apps? {#create-xdc}

- In-chat apps are zip files with `.xdc` extension containing html, css, and javascript code.

- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.

- All else you need to know is written in the
  [Webxdc documentation](https://webxdc.org/docs).

- If you have question, you can ask others with experience
  in the [Delta Chat Forum](https://support.delta.chat/c/webxdc/20).


## Instant message delivery and Push Notifications {#instant-delivery}

### What are Push Notifications? How can I get instant message delivery?

Push Notifications are sent by Apple and Google "Push services" to a user's device
so that an inactive Delta Chat app can fetch messages in the background
and show notifications on a user's phone if needed.

Push Notifications work with all [chatmail](https://delta.chat/chatmail) servers on

- iOS devices, by integrating with Apple Push services.

- Android devices, by integrating with the Google FCM Push service,
  including on devices that use [microG](https://microg.org)
  instead of proprietary Google code on the phone.


### Are Push Notifications enabled on iOS devices? Is there an alternative?

Yes, Delta Chat automatically uses Push Notifications for [chatmail](https://delta.chat/chatmail) profiles.
And no, there is no alternative on Apple's phones to achieve instant message delivery
because Apple devices do not allow Delta Chat to fetch data in the background.
Push notifications are automatically activated for iOS users because
[Delta Chat's privacy-preserving Push Notification system](#privacy-notifications)
does not expose data to Apple that it doesn't already have.


### Are Push notifications enabled / needed on Android devices? {#android-push}

If a "Push Service" is available, Delta Chat enables Push Notifications
to achieve instant message delivery for all chatmail users.

In the Delta Chat "Notifications" settings for "Instant delivery"
you can change the following settings effecting all chat profiles:

- Use Background Connection: If you are not using a Push service,
  you may disable "battery optimizations" for Delta Chat,
  allowing it to fetch messages in the background.
  However, there could be delays from minutes to hours.
  Some Android vendors even restrict apps completely
  (see [dontkillmyapp.com](https://dontkillmyapp.com))
  and Delta Chat might not show  incoming messages
  until you manually open the app again.
  
- Force Background Connection: This is the fallback option
  if the previous options are not available or do not achieve "instant delivery".
  Enabling it causes a permanent notification on your phone
  which may sometimes be "minified" with recent Android phones.

Both "Background Connection" options are energy-efficient and
safe to try if you experience messages arrive only with long delays.


### How private are Delta Chat Push Notifications? {#privacy-notifications}

Delta Chat Push Notification support avoids leakage of private information.
It does not leak profile data, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Here is how Delta Chat apps perform Push Notification delivery:

- A Delta Chat app obtains a "device token" locally, encrypts it and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives a message for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or profile data of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the profile data of the device it wakes up.
  The central Apple/Google Push services never see any profile data (sender or receiver)
  and also never see any message content (also not in encrypted forms).


The central Delta Chat notification proxy [is small and fully implemented in Rust](https://github.com/deltachat/notifiers)
and forgets about device-tokens as soon as Apple/Google/etc processed them,
usually in a matter of milliseconds.

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees profile data, IP-addresses or
any cryptographic identity information associated with a user's device (token). 

Resulting from this overall privacy design, even the seizure of a chatmail server,
or the full seizure of the central Delta Chat notification proxy
would not reveal private information that Push services do not already have.


### Why does Delta Chat integrate with centralized proprietary Apple/Google push services?

Delta Chat is a free and open source decentralized messenger with free server choice,
but we want users to reliably experience "instant delivery" of messages,
like they experience from WhatsApp, Signal or Telegram apps,
without asking questions up-front that are more suited to expert users or developers.

Note that Delta Chat has a [small and privacy-preserving Push Notification system](#privacy-notifications)
that achieves "instant delivery" of messages for all chatmail servers
including a potential one [you might setup yourself without our permission](https://delta.chat/chatmail#selfhosted).
Welcome to the power of the interoperable chatmail relay network :)



## Multi-client {#multiclient}

### Puis-je utiliser Delta Chat sur plusieurs appareils en même temps?

Oui. You can use the same profile on different devices:

- Make sure both devices are on the same Wi-Fi or network

- Sur le premier appareil, allez dans **Paramètres → Ajouter un deuxième appareil**, déverrouillez l'écran si nécessaire, et patientez un peu jusqu'à ce qu'un code QR s'affiche.

- Sur le deuxième appareil, [installez Delta Chat](https://get.delta.chat).

- Sur le deuxième appareil, ouvrez Delta Chat, sélectionnez **Ajouter comme deuxième appareil**, et scannez le code QR du premier appareil.

- Le transfert devrait commencer quelques secondes après et, pendant l'opération, les deux appareils affichent l'**état d'avancement**.
  Patientez jusqu'à ce que le transfert soit terminé sur les deux appareils.

Contrairement à de nombreuses autres messageries, une fois le transfert terminé, les deux **appareils sont complètement indépendants**.
L'un n'a pas besoin de l'autre pour pouvoir fonctionner.


### Dépannage

- Vérifier à nouveau que les deux appareils sont sur **le même réseau ou le même Wi-Fi**.

- On **Windows**, go to "Control Panel / Network and Internet"
  and make sure, **Private Network** is selected as "Network profile type"
  (after transfer, you can change back to the original value)

- On **iOS**, make sure "System Settings / Apps / Delta Chat / **Local Network**" access is granted

- On **macOS**, enable "System Settings / Privacy & Security / **Local Network** / Delta Chat"

- Il se peut que votre système dispose d'un "pare-feu personnalisé",
  source bien connue de dysfonctionnements (en particulier sur Windows).
  **Désactivez le pare-feu personnalisé** sur chaque appareil pour Delta Chat et réessayez.

- **Guest Networks** may not allow devices to communicate with each other.
  If possible, use a non-guest network.

- If you still have troubles using the same network,
  try to open **Mobile Hotspot** on one device and join that Wi-Fi from the other one

- Assurez-vous de disposer d'un **espace de stockage suffisant** sur l'appareil de destination.

- Une fois que le transfert a commencé, assurez-vous que les appareils **restent actifs** et ne se mettent pas en veille.
  Ne quittez pas Delta Chat !
  (Nous faisons de notre mieux pour que l'application fonctionne en arrière-plan, mais les [systèmes ont une fâcheuse tendance à tuer les applis](https://dontkillmyapp.com).)

- Si Delta Chat est **déjà connecté** sur l'appareil de destination.
  Vous pouvez utiliser plusieurs comptes par appareil : [ajoutez un nouveau compte](#multiple-accounts).

- Si les problèmes persistent, ou si vous **ne pouvez pas scanner de code QR**,  essayez la méthode de **transfert manuel** décrite ci-dessous.


### Manual Transfer {#backup}

Recourez à cette méthode uniquement si les instructions ci-dessus pour "Ajouter un deuxième appareil" ont échoué.

- On the old device, go to **Settings → Chats → Export Backup**. Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.

- On the new device, select **I Already Have a Profile → Restore from Backup**.
  If you use iOS and encounter difficulties,
  [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) might help you.

You are now synchronized, and can use both devices for sending and receiving
end-to-end encrypted messages with your communication partners.


### Le lancement d'un client Web Delta Chat est-il prévu ?

- Il n'y a pas de plans immédiats mais quelques idées préliminaires.
- Il y a 2-3 façons d'introduire un client Web Delta Chat, mais toutes représentent
 un travail conséquent. Pour l'instant, nous nous concentrons à sortir des versions stables dans tous les magasins d'applications (Google Play/iOS/Windows/macOS/centre de paquets Linux) en tant qu'applications natives.
- Si vous avez besoin d'un client Web parce que vous n'êtes pas autorisé à installer des logiciels sur l'ordinateur sur lequel vous travaillez, vous pouvez utiliser le Client Portable pour bureaux Windows ou l'AppImage pour Linux. Vous pouvez les trouver sur 
[get.delta.chat](https://get.delta.chat).


## Advanced

### Experimental Features

At **Settings → Advanced → Experimental Features**
you can try out features we are working on.

The features may be **unstable** and may be **changed or removed**.

You can find more information
and give feedback in the [Forum](https://support.delta.chat).


### What are Relays? {#relays}

Relays are used to temporarily hold messages in case your device is offline.
Relays are cheap and dumb servers,
that do not store data as group states, your name or avatar -
all that exist only on your device.
Relays are operated by different groups and people.

By default, after installation, a relay is **automatically set up**,
so you do not need to care about that.
However, if you want to,
you can configure relays at At **Settings → Advanced → Relays**:

- You can **add** a relay by scanning its QR code;
  <https://chatmail.at/relays> shows some known ones.
  If you have multiple relays, you will receive messages on all of them.

- The **default** defines the one where your chat partners send future messages to.

- If you **remove** a relay,
  make sure another default relay was used for a sufficient amount of time.
  Otherwise, messages from your chat partners won't reach you.
  If in doubt, remove later.

For more details and future possibilities of relays,
you can follow discussions in the [Forum](https://support.delta.chat).


### Can I use a classic email address with Delta Chat?

Yes, but only if the email address is used exclusively by [chatmail clients](https://chatmail.at/clients).

It is not supported to share usage of an email address with non-chatmail apps or web-based mailers,
for the following reasons:

- Non-chatmail apps are largely not accomplishing automatic end-to-end email encryption for their users,
  while chatmail apps and relays pervasively enforce end-to-end encryption and security standards.

- Non-chatmail apps use email servers as a long-term message archive
  while chatmail clients use email servers for ephemeral instant message relay.

- Supporting the full variety of classic email setups
  would require considerable development and maintenance efforts,
  and complicate making chatmail-based messaging more resilient, reliable and fast.

### How can I configure a chat profile with a classic email address as relay? {#classic-email}

First off, **please do not use the same classic email address also from non-chatmail classic email apps**
unless you are prepared to deal with encrypted messages in the inbox,
double notifications, accidentally deleted emails or similar annoyances.

You can configure a email address for chatting at **New Profile → Use Other Server → Use Classic Mail as Relay**.
Note that classic email providers will generally not support [Push Notifications](#instant-delivery)
and have other limitations, see [Provider Overview](https://providers.delta.chat).
Chatmail uses the default INBOX for relay; ensure the provider setup does too. 
A chat profile using a classic email address allows to to send and receive unencrypted messages.
These messages, and the chats they appear in, are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### I want to manage my own server for Delta Chat. What do you recommend?

Any well behaving email server setup will do fine 
except if your users' devices require Google/Apple [Push Notifications](#instant-delivery) to work properly.

We generally recommend to [set up a chatmail relay](https://chatmail.at/doc/relay/getting_started.html). 
[Chatmail](https://chatmail.at) is a community-driven project that encompasses both the setup of relays
and [core Rust developments](https://github.com/chatmail/core) 
that power [chatmail clients](https://chatmail.at/clients) of which Delta Chat is the most well known. 


### What is "Send statistics to Delta Chat's developers"? {#statssending}

We would like to improve Delta Chat with your help,
which is why Delta Chat for Android asks whether you want
to send anonymous usage statistics.

You can turn it on and off at
**Settings → Advanced → Send statistics to Delta Chat's developers**.

When you turn it on,
weekly statistics will be automatically sent to a bot.

We are interested e.g. in statistics like:

- How many contacts are introduced by personally scanning a QR code?

- Which versions of Delta Chat are being used?

- What errors occur for users?

We will _not_ collect any personally identifiable information about you.


### Les détails techniques m'intéressent. Pouvez-vous m'en dire plus ?

- Consultez les [standards utilisés dans Delta Chat]({% include standards-url %}).



## Encryption and Security {#e2ee}

### Which standards are used for end-to-end encryption? 

Delta Chat uses a [secure subset of the OpenPGP standard](#openpgp-secure)
to provide automatic end-to-end encryption using these protocols: 

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  to exchange encryption setup information through QR-code scanning or "invite links". 

- [Autocrypt](https://autocrypt.org) is used for automatically
  establishing end-to-end encryption between contacts and all members of a group chat. 

- [Sharing a contact to a
  chat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  enables receivers to use end-to-end encryption with the contact. 

Delta Chat does not query, publish or interact with any OpenPGP key servers. 

### How can I know if messages are end-to-end encrypted? {#whene2e}

All messages in Delta Chat are **end-to-end encrypted by default**.
Since the Delta Chat Version 2 release series (July 2025) 
there are no lock or similar markers on end-to-end encrypted messages, anymore. 

### Can I still receive or send messages without end-to-end encryption?

If you use default [chatmail relays](https://chatmail.at/relays),
it is impossible to receive or send messages without end-to-end encryption. 

If you instead use a [classic email server](#classic-email),
you can send and receive messages with or without end-to-end encryption.
Messages lacking end-to-end encryption are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### What does the green checkmark in a contact profile mean? {#e2eeguarantee}

A contact profile might show a green checkmark
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
and an "Introduced by" line.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a green-checkmarked contact to a group with only green-checkmarked members 
becomes an introducer. 
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

For more in-depth discussion of "guaranteed end-to-end encryption"
please see [Secure-Join protocols](https://securejoin.delta.chat/en/latest/new.html)
and specifically read about "Verified Groups", the technical term
of what is called here "green-checkmarked" or "guaranteed end-to-end encrypted" chats.

### Are attachments (pictures, files, audio etc.) end-to-end encrypted?

Oui.

When we talk about an "end-to-end encrypted message"
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
requiring the whole message to be properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publicly discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019 and 2024](#security-audits). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for end-to-end-encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
but adopting them would mean breaking end-to-end encryption interoperability.
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing end-to-end encryption is
only one part of "user outcomes",
see also our answers to [device-seizure](#device-seizure)
and [message-metadata](#message-metadata) questions. 


### Is Delta Chat vulnerable to EFAIL?

No, [Delta Chat never was vulnerable to EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
because its OpenPGP implementation [rPGP](https://github.com/rpgp/rpgp) 
uses Modification Detection Code when encrypting messages
and returns [an error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
if the Modification Detection Code is incorrect.

Delta Chat also never was vulnerable to the "Direct Exfiltration" EFAIL attack
because it only decrypts `multipart/encrypted` messages
which contain exactly one encrypted and signed part,
as defined by the Autocrypt Level 1 specification. 


### Are messages marked with the mail icon exposed on the Internet? {#tls}

If you are sending or receiving email messages without end-to-end encryption (using a classic email server),
they are still protected from cell or cable companies who can not read or modify your email messages.
But both your and your recipient's email providers
may read, analyze or modify your messages, including any attachments. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your email provider.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's email provider
will typically be transport-encrypted as well.
If the involved email servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between email providers
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.


### How does Delta Chat protect metadata in messages? {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

Servers can therefore only see:

- the sender and receiver addresses
- and the message size.

By default, the addresses are randomly generated.

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random addresses for transport. 
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then chat contacts using short-lived profiles
can not be identified easily. 

### Does Delta Chat support "Sealed Sender"? {#sealedsender}

No, not yet. 

The Signal messenger introduced ["Sealed Sender" in 2018](https://signal.org/blog/sealed-sender/)
to keep their server infrastructure ignorant of who is sending a message to a set of recipients. 
It is particularly important because the Signal server knows the mobile number of each account,
which is usually associated with a passport identity.

Even if [chatmail relays](https://chatmail.at/relays) 
do not ask for any private data (including no phone numbers), 
it might still be worthwhile to protect relational metadata between addresses. 
We don't foresee bigger problems in using random throw-away addresses for sealed sending
but an implementation has not been agreed as a priority yet. 

### Does Delta Chat support Perfect Forward Secrecy? {#pfs}

No, not yet. 

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

We designed a Forward Secrecy approach that withstood 
initial examination from some cryptographers and implementation experts 
but is pending a more formal write up 
to ascertain it reliably works in federated messaging and with multi-device usage,
before it could be implemented in [chatmail core](https://github.com/chatmail/core),
which would make it available in all [chatmail clients](https://chatmail.at/clients). 

### Does Delta Chat support Post-Quantum-Cryptography? {#pqc}

No, not yet. 

Delta Chat uses the Rust OpenPGP library [rPGP](https://github.com/rpgp/rpgp)
which supports the latest [IETF Post-Quantum-Cryptography OpenPGP draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/). 
We aim to add PQC support in [chatmail core](https://github.com/chatmail/core)  after the draft is finalized at the IETF
in collaboration with other OpenPGP implementers. 

### How can I manually check encryption information?

You may check the end-to-end encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop).
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.

### Puis-je ré-utiliser ma clé privée existante ? {#importkey}

No. 

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1.
We do not recommend or offer users to perform manual key management.
We want to ensure that security audits can focus on a few proven cryptographic algorithms
instead of the full breadth of possible algorithms allowed with OpenPGP.
If you want to extract your OpenPGP key, there only is an expert method:
you need to look it up in the "keypairs" SQLite table of a profile backup tar-file.


### Est-ce qu'un audit indépendant des failles de sécurité a été réalisé sur Delta Chat ? {#security-audits}

Yes, multiple times. 
The Delta Chat project continuously undergoes independent security audits and analysis,
from most recent to older: 

- 2024 December, an [NLNET-commissioned Evaluation of
  rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) by [Radically Open Security](https://www.radicallyopensecurity.com/) took place.
  rPGP serves as the end-to-end encryption [OpenPGP](https://openpgp.org) engine of Delta Chat. 
  Two advisories were released related to the findings of this audit:

  - ["Panics on Malformed Untrusted Input"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potential Resource Exhaustion when handling Untrusted Messages"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

  The issues outlined in these advisories have been fixed and are part of Delta Chat 
  releases on all appstores since December 2024. 

- 2024 March, we received a deep security analysis from the Applied Cryptography
  research group at ETH Zuerich and addressed all raised issues. 
  See our blog post about [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) for more detailed information and the
  [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
  research paper published afterwards. 

- Début 2023, nous avons réparé les failles de sécurité et de confidentialité de la fonctionnalité "partage d'appli web dans une discussion" liées à des dysfonctionnements en mode bac à sable, en particulier avec Chromium. Après quoi, nous avons soumis Delta Chat à un nouvel audit de sécurité indépendant par Cure53, puis effectué les réparations de toutes les failles découvertes pour la version 1.36 de nos applications, publiée en avril 2023. 
Vous trouverez [ici un article de fond complet à propos de la sécurité du chiffrement de bout-en-bout sur internet](https://delta.chat/en/2023-05-22-webxdc-security). 

- Début 2023, [Cure53](https://cure53.de) a analysé le chiffrement d'acheminement des connexions réseau de Delta Chat et testé une configuration de serveur de courriel reproductible, telle que [recommandée sur ce site](serverguide).
Vous trouverez plus d'informations sur cet audit [sur notre blog](https://delta.chat/en/2023-03-27-third-independent-security-audit) ou dans [le rapport complet ici](../assets/blog/MER-01-report.pdf).

- En 2020, [Include Security](https://includesecurity.com) a analysé les [bibliothèques principales](https://github.com/deltachat/deltachat-core-rust/) Rust de Delta Chat, ainsi que ses bibliothèques [IMAP](https://github.com/async-email/async-imap), [SMTP](https://github.com/async-email/async-smtp) et [TLS](https://github.com/async-email/async-native-tls).
Aucun problème grave ou critique n'a été découvert.
Le rapport a tout de même révélé quelques vulnérabilités de gravité moyenne, qui ne représentent pas une menace en elles-mêmes pour les utilisateurs et les utilisatrices de Delta Chat, car elles dépendent de l'environnement dans lequel Delta Chat est utilisé.
Pour des raison de compatibilité et de facilité d'utilisation, nous ne pouvons pas les pallier toutes et avons préféré fournir des préconisations de sécurité aux personnes exposées.
Le rapport complet [est consultable ici](../assets/blog/2020-second-security-review.pdf).

- En 2019, [Include Security](https://includesecurity.com) a analysé les bibliothèques [PGP](https://github.com/rpgp/rpgp) et
[RSA](https://github.com/RustCrypto/RSA) de Delta Chat.
Aucune faille critique n'a été trouvée, mais deux failles sévères ont été identifiées et immédiatement réparées par nos soins.
Une faille de gravité moyenne ainsi que quelques failles de gravité moindre ont également été découvertes, sans qu'il soit toutefois possible de les exploiter dans le fonctionnement de Delta Chat.
Nous en avons néanmoins réparées certaines depuis le rapport d'audit.
Le rapport complet [est consultable ici](../assets/blog/2019-first-security-review.pdf).


## Divers

### De quelles autorisations Delta Chat a-t-il besoin?

Some features require certain permissions,
e.g. you need to grant camera permission if you want to [scan an invite QR code](#howtoe2ee).

See [Privacy Policy](https://delta.chat/en/gdpr#24-app-permissions) for a detailed overview.


### Where can my friends find Delta Chat?

Delta Chat is available for all major and some minor platforms:

- The **official website**, <https://delta.chat/download> shows all options in detail

- If unavailable, use the **mirror** at <https://deltachat.github.io/deltachat-pages>

- Open one of the following **app stores and search for "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, iOS and macOS App Store, Microsoft Store

- Check the **package manager** of your Linux distributions

- **Android APKs** are also available on <https://github.com/deltachat/deltachat-android/releases>


### Comment est financé le développement de Delta Chat ?

Delta Chat ne reçoit par de fonds en capital-risque, n'est pas endetté et ne subit aucune pression pour générer de gros profits ou vendre ses utilisateurs et utilisatrices - en même temps que leurs amis et leur famille - à des annonceurs (ou pire). 
Nous préférons utiliser des fonds provenant d'institutions publiques, jusqu'à présent basées en Europe ou aux États-Unis, pour soutenir nos efforts de développement d'un système de messagerie diversifié et décentralisé, basé sur les contributions de la communauté du libre et de l'open-source.

Concretely, Delta Chat developments have so far been funded from these sources,
ordered chronologically: 

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

- L'association [Open Technology Fund](https://opentechfund.org) nous a octroyé une première subvention en 2018/2019 (de 200.000$ environ), grâce à laquelle nous avons pu apporter des améliorations majeures à l'application Android et publier une première version Beta de l'application de bureau. Elle nous a aussi permis d'ancrer notre recherche UX de développement de fonctionnalités dans des contextes de droits humains.   
À ce sujet, vous pouvez consulter notre rapport en anglais ["Needfinding and UX report"](https://delta.chat/en/2019-07-19-uxreport).
La seconde subvention de 2019/2020 (environ 300.000$) nous a permis de publier des version iOS de Delta Chat, de convertir notre bibliothèque principale en Rust et de créer de nouvelles fonctionnalités pour toutes les plateformes.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system. 

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - email provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-profile support, improved QR-code contact and group setups and many networking improvements on all platforms.

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of email servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- 2023-2024 we successfully completed the OTF-funded 
  [Secure Chatmail project](https://www.opentech.fund/projects-we-support/supported-projects/secure-chat-mail-with-delta-chat/), 
  allowing us to introduce guaranteed encryption, 
  creating a [chatmail server network](https://delta.chat/chatmail) 
  and providing "instant onboarding" in all apps released from April 2024 on. 

- In 2023 and 2024 we got accepted in the Next Generation Internet (NGI)
  program for our work in [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
  along with collaboration partners working on 
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/), 
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/), 
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) and 
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/). 
  All of these projects are partially completed or to be completed in early 2025. 

- Nous recevons parfois des dons ponctuels de la part de personnes privées. 
 En 2021 par exemple, une généreuse personne nous a envoyé 4000€ par virement bancaire, avec l'intitulé "continuez votre super travail de développement !". 💜 
 Nous utilisons l'argent de ces dons pour financer des rencontres entre développeurs et développeuses ou pour des dépenses ponctuelles difficiles à anticiper ou à rembourser avec des subventions publiques.
Recevoir plus de dons aide notre communauté de contributrices et contributeurs à devenir plus indépendante et à rester viable sur le long terme.

  [Faire un don](donate){: .cta-button}

- Dernier point, mais certainement pas des moindres : quelques personnes passionnées et expertes ont apporté, et apportent toujours, leur contribution bénévole au développement de Delta Chat sans contrepartie financière - ou seulement de petites sommes. Sans leur énergie, Delta Chat n'en serait pas là aujourd'hui... et de très loin.

Les financements mentionnés précédemment sont gérés principalement par merlinux GmbH à Fribourg (Allemagne) et redistribués à plus d'une douzaine de contributeurs et contributrices du monde entier.

N'hésitez pas à consulter les [Canaux de contribution à Delta Chat Contribution](contribute) pour en savoir plus sur les différentes manières de contribuer, financières ou non.  
