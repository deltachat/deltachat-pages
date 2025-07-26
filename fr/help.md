---
title: FAQ
lang: fr
render_toc: true
header: Foire aux questions
---


## Qu'est-ce que Delta Chat ?

Delta Chat est une application de messagerie fiable, décentralisée et sécurisée, 
Disponible pour les plateformes smartphone et ordinateurs de bureau.

Delta Chat ressemble à Whatsapp ou Telegram mais vous pouvez aussi l'utiliser et la considérer comme une application e-mail. 
Vous pouvez vous inscrire anonymement à une variété [de serveurs chatmail interéopérables](https://delta.chat/chatmail)
Qui sont des serveurs e-mails minimalistes optimisés pour des opérations rapides et sécurisées. 
Ou vous pouvez utiliser des serveurs e-mail classiques et utiliser votre compte e-mail
dans ce cas Delta Chat agit comme une application de courriel.

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Comment puis-je trouver des gens avec qui discuter ?

Pour établir un contact en toute sécurité avec d'autres personnes [scanner un code QR d'invitation 
ou partager un lien d'invitation](#howtoe2ee). 
Cette opération est nécessaire lors de l'utilisation d'un profil de discussion basé sur le chatmail (par défaut). 
car les serveurs de chatmail rejettent les messages sortants non chiffrés.

Si vous créez un profil discussion avec une adresse courriel classique 
vous pouvez créer manuellement un contact si vous connaissez son adresse courriel 
et lui écrire un message 
même si le destinataire n'utilise pas Delta Chat.


### Quels sont les avantages de Delta Chat par rapport aux autres messageries ?

- Profils anonymes de discussion avec des [serveurs de chatmail](https://delta.chat/chatmail) rapides, sécurisés et interopérables 
  qui offrent des notifications push instantanées pour les appareils iOS et Android. 

- Fonctionnalités de [multi-profil](#multiple-accounts) et de multi-appareil supportées sur toutes les plateformes. 

- [web apps dans les chats](https://webxdc.org/apps) interactifs pour le gaming et la collaboration

- [Chiffrement de bout en bout audité](#security-audits) 
  contre les attaques ciblées sur le réseau et les serveurs. 

- Logiciel libre et open source, à la fois appli et côté serveur. 
  Construit sur des [Standards d'Internet et d'e-mail]({% include standards-url %}), 
  [pour éviter le syndrome du "standard de plus" (xkcd 927)](https://xkcd.com/927/) 


### Et si j'attends un message de quelqu'un avec qui je n'ai encore jamais échangé ?

Si vous recevez un message de la part d'un contact inconnu, vous recevez une **invitation**.

- Vous devez d'abord **accepter** pour pouvoir répondre au message.

- Vous pouvez également choisir de **supprimer** l'invitation si vous ne souhaitez pas discuter avec cet inconnu maintenant.

- Si vous supprimez une invitation, les futurs messages de ce contact apparaîtront
de nouveau comme des invitations, de sorte que vous pouvez changer d'avis par la suite. Si vous ne voulez vraiment pas
recevoir de messages de cette personne, nous vous conseillons de la **bloquer**.


### Delta Chat prend-il en charge les images, vidéos et autres pièces jointes ?

Oui. En plus du texte brut, toutes les pièces jointes aux courriels sont affichées sous forme de messages séparés. Les messages sortants expédient automatiquement les pièces jointes que vous ajoutez.

- Pour améliorer les performances, les images sont redimensionnées et envoyées en taille réduite par défaut ; mais vous pouvez les envoyer en tant que "fichier" pour en conserver la taille originale.


### What are profiles? How can I switch between them? {#multiple-accounts}

A profile is **a name, a picture** and some additional information for encrypting messages.
A profile lives on your device(s) only
and uses a chatmail or a classic e-mail server to transport messages.

On first installation of Delta Chat a first profile is created.

Later, you can tap your profile image in the upper left corner to **Add Profiles**
or to **Switch Profiles**.

You may want to use separate profiles for political, family or work related activities,
or e. g. for a dedicated "spam-profile" with which you register at websites and platforms
that tend to cause unsolicited messages ("spam") sooner or later.

You may also wish to learn [how to use the same profile on multiple devices](#multiclient).


### Qui peut voir ma photo de profil ?

Dans les paramètres vous pouvez ajouter une photo de profil. Si vous écrivez à vos contacts ou que vous les ajoutez via le QR code, ils la verront automatiquement comme votre photo de profil.

- Les contacts qui n'utilisent pas Delta Chat ne voient pas la photo de profil.
(Toutefois, ils peuvent bien sûr installer Delta Chat :)

- Pour des raisons de confidentialité, personne ne peut voir votre photo de profil sans que vous ayez d'abord entamé une discussion.

- Votre photo de profil n'est pas envoyée avec chaque message, mais assez régulièrement pour que vos contacts aient une photo à jour même s'ils ajoutent un nouvel appareil.


### Puis-je afficher une Bio/Signature ou un Status/Motto avec Delta Chat? {#signature}

Oui,
vous pouvez le faire sous **Paramètres → Profil → Bio**.
Vos contacts qui utilisent Delta Chat le verront
lorsqu'ils consulteront vos coordonnées.
De plus, elle apparaîtra sous la forme d'une signature classique sur vos courriels.


### Que signifient "épingler", "sourdine" et "archiver" ?

Ces options vous permettent d'organiser et trier vos discussions :

- Les **discussions épinglées** restent en haut de votre liste de discussions. Vous pouvez ainsi retrouver plus rapidement vos discussions favorites ou éviter d'oublier des messages importants.

- Utilisez la **sourdine** pour les discussions dont vous ne voulez pas recevoir les notifications. Les discussions en sourdine figurent toujours dans votre liste et peuvent aussi être les épinglées.

- **Archivez les discussions** si vous ne voulez plus les voir apparaître dans votre liste de discussions.
  Les discussions archivées restent accessibles au-dessus de la liste de discussions ou via la recherche. 

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

- Finally, you can also use "Save Messages" to take **personal notes** - open the chat, type something, add a photo or a voice message etc.

- As "Saved Message" are synced, they can become very handy for transferring data between devices

Messages stay saved even if they are edited or deleted -
may it be by [sender](#edit), by [device cleanup](#delold) or by [disappearing messages of other chats](#ephemeralmsgs).


### Que signifie le point vert ?

Vous voyez parfois un **point vert** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/> à côté de la photo de profil d'un contact. Cela signifie qu'il a été "vu récemment".
Plus précisément, cela signifie que Delta Chat a détecté l'activité de ce contact au cours des 10 dernières minutes :

- soit parce qu'il vous a écrit personnellement ;
- soit parce qu'il a écrit dans un groupe dont vous êtres tous les deux membres ;
- soit parce qu'il a renvoyé l'accusé de lecture d'un message que vous lui avez écrit ;
- ou bien parce qu'il a envoyé des données à votre appli Delta Chat via une [appli](#webxdc).

Le "point vert" n'est donc pas un statut en temps réel. Aussi, si quelqu'un ne vous répond pas immédiatement alors qu'il semble être en ligne, ne vous inquiétez pas et donnez-lui du temps :)

D'un autre côté, vos contacts ne vous voient pas forcément "en ligne". Si vous avez désactivé les accusés de lecture, ils ne verront pas de point vert tant que vous ne leur écrivez pas directement ou n'écrivez pas dans un groupe dont ils font aussi partie.


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
between 1 minute and 5 weeks.

Until the setting is turned off again,
each chat member's Delta Chat app takes care
of deleting the messages
after the selected time span.
The time span begins
when the receiver first sees the message in Delta Chat.
The messages are deleted
both in each email account on the server,
and in the app itself.

Note that you can rely on disappearing messages
only as long as you trust your chat partners;
malicious chat partners can take photos,
or otherwise save, copy or forward messages before deletion.

Apart from that,
if one chat partner uninstalls Delta Chat,
the messages will not get deleted from their email account.
They will most likely also not be decryptable anymore
(as long as they were encrypted in the first place).


## Groupes

### Création d'un groupe

- Sélectionnez **Nouvelle discussion** puis **Nouveau groupe** dans le menu à trois points situé en haut à droite de la fenêtre ou son équivalent sous Android et iOS.
- Sur l'écran suivant, sélectionnez **Ajouter des participants** et choisissez un **Nom du groupe**. Vous pouvez aussi choisir une **image de groupe**.
- Lorsque vous enverrez le **premier message** dans le groupe, tous les membres en seront informés et pourront répondre. Le groupe est invisible aux autres membres si vous n'écrivez pas de premier message.


### Ajouter une personne à un groupe

- Chaque membre du groupe a les **mêmes droits** que les autres. Pour cette raison, chacun peut supprimer tous les membres ou en ajouter de nouveaux.
- Pour ajouter ou supprimer des membres, cliquez sur le nom du groupe dans le chat.


### J'ai quitté un groupe par accident.

- Comme vous n'êtes plus membre du groupe, vous ne pouvez pas vous y ajouter vous-même. 
Contactez n'importe quel autre membre de ce groupe dans une discussion directe pour lui demander de vous y ré-inviter.


### Je ne souhaite plus recevoir les messages d'un groupe.

- Supprimez-vous de la liste des membres ou supprimez la discussion entière. 
Si souhaitez rejoindre le groupe plus tard, demandez à un autre membre du groupe de vous ré-inviter.

- Vous pouvez également mettre un groupe en "Sourdine" : vous recevrez tous les messages et pourrez toujours écrire, mais n'aurez plus les notifications des nouveaux messages.


### Que signifient les coches affichées à côté des messages sortants ?

- **Une coche** signifie que le message a été envoyé avec succès à votre fournisseur.
- **Deux coches** signifient qu'au moins un appareil du destinataire
a signalé avoir reçu le message.
- Il se peut que les destinataires aient désactivé les accusés de réception,
donc même si vous ne voyez qu'une seule coche, le message peut avoir été lu.
- À l'envers, deux coches ne signifient pas automatiquement
qu'un humain a lu ou compris le message ;)


### Que se passe-t-il si j'active l'option "Supprimer les anciens messages sur le serveur" ?

- Par défaut, Delta Chat stocke tous les messages sur votre appareil. Vous pouvez donc configurer Delta Chat pour qu'il supprime automatiquement les anciens messages reçus, si vous souhaitez libérer de l'espace de stockage chez votre fournisseur de courriel. Ces messages seront conservés localement jusqu'à ce que vous les supprimiez aussi de votre appareil.

- Pour activer cette option, accédez à vos paramètres de "Discussions et fichiers multimédia", puis à **Supprimer les anciens messages → Supprimer les messages du serveur**.
  Vous pouvez régler un délai allant de "Immédiatement" à "Après 1 année".
  Tous les courriels reçus sur Delta Chat seront supprimés du serveur une fois le délai écoulé.

- Attention : si vous utilisez Delta Chat sur plusieurs appareils, vous devez laisser vos messages sur le serveur suffisamment longtemps pour permettre à votre/vos autre(s) appareil(s) de les télécharger aussi.


### Que se passe-t-il si j'active l'option "Supprimer les anciens messages de l'appareil" ? {#delold}

- Vous pouvez choisir de supprimer automatiquement les anciens messages pour libérer de l'espace de stockage sur votre appareil. 
- Pour activer cette option, ouvrez les paramètres des "Discussions et fichiers multimédias" et cliquez sur "Supprimer les anciens messages de l'appareil". Vous pouvez définir le délai après lequel *tous* les messages seront supprimés de votre appareil, parmi plusieurs choix allant de "Immédiatement" à "Après 1 année".


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

As of May 2024, classic e-mail servers do not support Push Notifications
for Delta Chat users.


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
If you are using a classic e-mail provider instead of [chatmail](https://delta.chat/chatmail) servers,
Push Notifications are not available.

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
It does not leak e-mail, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Here is how Delta Chat apps perform Push Notification delivery:

- A Delta Chat app obtains a "device token" locally, encrypts it and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives an e-mail for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or e-mail address of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the chatmail or e-mail address of the device it wakes up.
  The central Apple/Google Push services never see an e-mail address (sender or receiver)
  and also never see any message content (also not in encrypted forms).


The central Delta Chat notification proxy [is small and fully implemented in Rust](https://github.com/deltachat/notifiers)
and forgets about device-tokens as soon as Apple/Google/etc processed them,
usually in a matter of milliseconds.

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees e-mail addresses, IP-addresses or
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
Welcome to the power of the interoperable and massive chatmail and e-mail system :)


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

### How can i know if messages are end-to-end encrypted? {#whene2e}

All messages in Delta Chat are **end-to-end encrypted by default**.
Since the Delta Chat Version 2 release series (July 2025) 
there are no lock or similar markers on end-to-end encrypted messages, anymore. 

### Can i still receive or send mails without end-to-end encryption? 

If you use default [chatmail relays](https://chatmail.at/relays),
it is impossible to receive or send messages without end-to-end encryption. 

If you instead create a profile using a classic e-mail server,
you can send and receive messages without end-to-end encryption. 
Such messages lacking end-to-end encryption are marked with an e-mail icon 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.

### How can I establish a chat with a new contact? {#howtoe2ee}

You can send an invite link through another private chat, 
show an invitation QR code when next to each other or in a video call,
or click on a "contact" that was shared in a chat. 

- For **Group invitations**,
  tap the chat group title to see its member list,
  and select "QR Invite code".

- For **direct 1:1 chat invitations**, 
  tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen.

Ask your chat partner to scan the QR image
with their Delta Chat app,
or click "Copy" or "Share" to create an invite link
and share it with your chat partner.

Now wait while [end-to-end encryption is getting established](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol). 

- If both sides are online, they will soon see a (group or direct) chat
  and can start messaging securely. 

- If one side is offline or in bad network, 
  the  ability to chat is delayed until connectivity is restored. 

Congratulations! 
You now will automatically use end-to-end encryption
with this contact. 
If you add each other to chat groups,
end-to-end encryption will be established among all members. 


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
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking end-to-end encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
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

If you are sending or receiving e-mail messages without end-to-end encryption (using a classic e-mail server),
they are still protected from cell or cable companies who can not read or modify your e-mail messages. 
But both your and your recipient's e-mail providers 
may read, analyze or modify your messages, including any attachments. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your e-mail provider. 
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's e-mail provider
will typically be transport-encrypted as well.
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between e-mail providers 
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.


### How does Delta Chat protect metadata in messages? {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

E-mail Servers can therefore only see

- the message date, 

- sender and receiver addresses 

- and message size. 

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random e-mail addresses for transport. 
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
We don't foresee bigger problems in using random throw-away e-mail addresses for sealed sending
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
You can export your private key but you can not import additional private keys. 

In general, we do not recommend or offer users to perform manual key management. 
We want to ensure that security audits can focus on a few proven cryptographic algorithms 
instead of the full breadth of possible algorithms allowed with OpenPGP. 

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

- On **Windows**, go to **Control Panel / Network and Internet**
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

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, in the "I already have a profile" menu,
  choose "restore from backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  end-to-end encrypted messages with your communication partners.

### Is Deletion, Pinning, Archiving, Saving, Muting etc. synced to all devices?

Oui.

If you e.g. delete a chat or a message from your phone,
it will be deleted on your desktop as soon as it comes online again.

Notable exceptions are [Delete old messages from Device](#delold),
as different devices may have different storage capacities,
and system specific settings as notification sounds.


### Le lancement d'un client Web Delta Chat est-il prévu ?

- Il n'y a pas de plans immédiats mais quelques idées préliminaires.
- Il y a 2-3 façons d'introduire un client Web Delta Chat, mais toutes représentent
 un travail conséquent. Pour l'instant, nous nous concentrons à sortir des versions stables dans tous les magasins d'applications (Google Play/iOS/Windows/macOS/centre de paquets Linux) en tant qu'applications natives.
- Si vous avez besoin d'un client Web parce que vous n'êtes pas autorisé à installer des logiciels sur l'ordinateur sur lequel vous travaillez, vous pouvez utiliser le Client Portable pour bureaux Windows ou l'AppImage pour Linux. Vous pouvez les trouver sur 
[get.delta.chat](https://get.delta.chat).


## webxdc apps {#webxdc}

In Delta Chat, you can share [webxdc apps](https://webxdc.org), attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger.


### How private are webxdc apps?

- webxdc apps can not send data to the Internet, or download anything.
- A webxdc app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a webxdc app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the webxdc app as well.
- This also means: it can be a privacy risk to open apps in chats with untrusted members.
  Just like with e-mail attachments, video calls or plain links:
  open them only from senders you trust, and not from spammers.
  Spammers can get to know any data you send to them, as well as your IP address.


### Where can I get webxdc apps?

- In general, anyone can share webxdc apps with each
  other without restrictions.
- From [webxdc.org/apps](https://webxdc.org/apps/).
- You can [send 'hi' to xstore@testrun.org](https://delta.chat/en/2023-08-11-xstore)
  to see an experimental webxdc appstore.
  All of the apps are open source and for free.
- Many people write their own webxdc apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own webxdc apps?

- webxdc apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Fonctionnalités expérimentales

We are very grateful for feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. 
You may conveniently login via Delta Chat and a QR code scan,
another rather stable experiment we run on the side (sic!).

### Comment passer des appels audio/vidéo avec Delta Chat ?

- Pour activer les appels audio/vidéo, accédez à la section "Fonctionnalités expérimentales" des paramètres avancés et choisissez une "instance de discussion vidéo". 
- Quand vous invitez d'autres personnes dans une discussion vidéo, elle s'ouvre automatiquement dans votre application/navigateur et les destinataires reçoivent un courriel contenant un lien vers votre salon Jitsi/BBB. De cette manière, même les personnes n'utilisant pas Delta Chat peuvent participer.
- Veuillez noter qu'il n'y a pas de sonnerie pour les destinataires, qui ne sont donc pas dérangé⋅e⋅s par votre invitation à une discussion vidéo.
- Vous pouvez utiliser n'importe quel service de discussion vidéo permettant de rejoindre un salon par un lien. Il vous suffit de renseigner le lien dans vos paramètres.
- Par exemple, pour utiliser l'instance Jitsi Meet principale, vous pouvez insérer :`https://meet.jit.si/$ROOM`. La variable`$ROOM`est une valeur aléatoire qui vous permet de rejoindre un nouveau salon Jitsi choisi au hasard à chaque nouvel appel.


### Que sont les listes de diffusion et comment les utiliser ?

With a Broadcast List you can send a message to many recipients at once;
the recipients cannot reply in that list.
Broadcast lists are still highly experimental
and will very probably be replaced by something else, stay tuned :)


### Comment partager ma géolocalisation avec mes contacts ?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat partners.
  Map tiles are downloaded from [OpenStreetMap](https://openstreetmap.org).
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### Pourquoi peut-on choisir de ne consulter que le dossier Delta Chat ?

Il s'agit d'un paramètre expérimental à destination des personnes qui expérimentent avec des règles côté serveur. Tous les fournisseurs ne le prennent pas en charge, mais certains permettent de déplacer tous les courriels avec un en-tête "Chat-Version" dans le dossier DeltaChat. Normalement, cette action est réalisé par l'application Delta Chat.

Activer l'option "Ne consulter que le dossier Delta Chat" est intéressant si vous avez **à la fois** :

- activé une règle côté serveur pour déplacer tous les messages avec un en-tête "Chat-Version" dans le dossier Delta Chat ;
- modifié le paramètre "Voir les courriels classiques" pour "Non, seulement les discussions".

Si ces deux conditions sont remplies, Delta Chat n'a pas besoin de surveiller la boîte de réception, seulement le dossier Delta Chat.


### Comment changer mon compte pour une adresse courriel différente ?

Note: 
Changing email addresses is temporarily disabled
because of ongoing changes to the DeltaChat core.
It should be available again in a few months.

1. Change your address in “Settings → Advanced → Password and Account” and
   enter the password of your new e-mail account (and if necessary, server settings).
   You will get an information notice about the fact that you are moving to a new address. 
   An additional notice will also show up in your "Device messages" chat. 

2. If possible, let your old e-mail provider forward all messages to your new address.

3. Tell your contacts that you changed your address. 
   Writing to guaranteed end-to-end encrypted chats and groups,
   will make them notice your move automatically 
   and they will continue chatting with you using your new address. 

Note that Delta Chat will not retrieve messages anymore from your old e-mail provider.
If you didn't configure your e-mail provider to forward messages (step 2.) 
only those contacts to whom you sent a message in a guaranteed end-to-end encrypted chat
will send messages to your new address. 

To learn more about this the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Divers

### De quelles autorisations Delta Chat a-t-il besoin?

Selon le système d'exploitation utilisé,
il vous sera peut-être demandé d'accorder des autorisations à l'application.
Voici ce que fait Delta Chat avec ces autorisations:

- Camera *(can be disallowed)*
  - take pictures and videos: for sending Photos
- Contacts *(can be disallowed)*
  - read your contacts: to discover contacts to chat with
- Location *(can be disallowed)*
  - access approximate location (network location sources): for the location streaming feature
  - access precise location (GPS and network location sources): for the location streaming feature
- Microphone *(can be disallowed)*
  - record audio: for audio messages
- Storage *(can be disallowed)*
  - modify or delete the contents of your SD card: to download message attachments
  - read the contents of your SD card: to share files with your contacts
- Other app capabilities
  - change your audio settings: so you can choose ring tones and volume for notifications and audio messages
  - run at startup: so you don't have to start Delta Chat manually
  - control vibration: for notifications
  - view network connections: to connect to your E-Mail provider
  - prevent phone from sleeping: so you can easier copy the security code during the Autocrypt Setup Message
  - have full network access: to connect to your E-Mail provider
  - view Wi-Fi connections: to connect to your E-Mail provider
  - ask to ignore battery optimisations: for achieving "instant message delivery"


### Est-ce que Delta Chat fonctionne avec _mon_ fournisseur de courriel ? 

- Il y a de bonnes chances que oui :)
Cependant, il faut activer des options spéciales pour que cela fonctionne correctement avec certains fournisseurs... Voir [la liste des fournisseurs](https://providers.delta.chat).


### I want to manage my own server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  chatmail relay server, as described [in this
  blogpost](https://delta.chat/en/2023-12-13-chatmail).
- You can find an [installation guide on GitHub](https://github.com/chatmail/relay).


### Pourquoi dois-je entrer le mot de passe de mon compte de courriel dans Delta Chat ? Est-ce sécurisé ?

Comme pour les autres clients de courriel, Thunderbird, FairEmail, K9-Mail, Outlook, etc, celui-ci a besoin des identifiants / mots de passe pour recevoir et envoyer des courriels. 
Bien sûr le mot de passe est uniquement stocké sur votre appareil. Et il est utilisé uniquement pour vous authentifier auprès de votre fournisseur de courriel, qui a, rappelons-le, accès à vos courriels non chiffrés.

Comme Delta Chat est un logiciel libre, vous pouvez étudier le [code source](https://github.com/chatmail/core/blob/main/src/login_param.rs) pour vérifier que vos identifiants / mots de passe sont utilisés de façon sécurisée. Nous sommes très heureux d'avoir des retours pour renforcer la sécurité de l'application.


### Quels sont les messages qui apparaissent dans Delta Chat ?

Par défaut, Delta Chat affiche tous les courriels.

At "Settings → Advanced → Show Classic E-Mails",
you can change this. You have these options:

- "Non, seulement les discussions": vous verrez seulement les messages envoyés par d'autres utilisateurs de Delta Chat et les réponses à vos messages Delta Chat. Cette option est recommandée si vous utilisez le même compte pour recevoir aussi des courriels normaux.
- "Tout": vous verrez dans Delta Chat tous les courriels envoyés à votre adresse. Cette option est recommandée si vous souhaitez utiliser Delta Chat pour tous vos courriels, afin de ne rater aucun message.
- "Pour les contacts acceptés": vous verrez dans Delta Chat tous les courriels envoyés par les personnes avec qui vous avez déjà ouvert une discussion, mais les notifications de nouvelles conversations ne s'afficheront que pour des messages envoyés via Delta Chat. Cette option vous permet de décider au cas par cas si vous souhaitez échanger via Delta Chat ou via une application de courriel "classique".


### Est-ce que Delta Chat gère les courriels en HTML ?

Yes, incoming HTML messages come with a "Show full message" button.
Outgoing messages always use plain text.


### Can I set the E-Mail Subject with Delta Chat?

Delta Chat sets (and [encrypts](#message-metadata)!) the classic e-mail subject
automatically to  the group name or to the sender name.

So if you want to set the subject yourself,
for example for a formal e-mail to a business contact,
you can create a group
with only yourself and the recipient(s).
Set the Chat Title to the Subject you want,
and then send your e-mail as the first message.
If the recipients don't use Delta Chat,
it will look like a normal,
formal e-mail to them.
You will get bonus professionalism points
if you set a [signature text](#signature).


### Quel est l'intérêt du paramètre “M'envoyer une copie”? 

Envoyer une copie de vos messages à vous-même garantit que vous recevez vos propres
 messages sur tous les appareils. Si vous avez de multiples appareils et que vous ne l'activez pas, vous voyez seulement les messages des autres personnes et les messages que vous avez envoyé depuis l'appareil en cours.

La copie est envoyée dans la Boîte de réception puis déplacée dans le dossier DeltaChat; elle n'est pas mise dans le dossier “Envoyés”. Delta Chat ne téléverse jamais quelque chose dans le dossier Envoyés car ça signifierait de le téléverser deux fois (une fois via SMTP, puis une fois dans le dossier Envoyés via IMAP).

The default setting for "Send Copy to Self" is "on".


### Pourquoi puis-je choisir de regarder le dossier “Envoyés”? 

La seule raison de regarder le dossier Envoyés est si vous utilisez un autre programme de courriel (tel que Thunderbird) en parallèle de votre application Delta Chat, et que vous voulez que votre client de messagerie participe aux discussions.

Cependant, nous recommandons d'utiliser le client de bureau Delta Chat; vous pouvez le télécharger sur [get.delta.chat](https://get.delta.chat). L'option de regarder le dossier “Envoyés” pourrait disparaître dans le futur. Elle a été introduite à une époque où il n'y avait pas de client de bureau Delta Chat disponible sur toutes les plateformes.


### Pourquoi puis-je choisir de ne pas regarder le dossier Delta Chat? 

Certaines personnes utilisent Delta Chat comme un client de messagerie normal, et veulent utiliser la Boîte de réception pour leurs mails au lieu d'utiliser le dossier DeltaChat. Si vous désactivez “Surveiller le dossier DeltaChat”, vous devriez aussi désactiver “déplacer les messages de discussions dans DeltaChat”.
Sinon, la suppression de messages dans une configuration multi-appareils pourrait ne pas marcher correctement.


### Delta Chat est-il compatible avec Proton Mail / Tutanota / Criptext ?

- Oui et non.
- Non, vous ne pouvez pas utiliser votre compte Proton Mail, Tutanota ou Cryptext avec Delta Chat, car ils ne permettent pas de recevoir les courriels en IMAP.
- Vous pouvez toujours utiliser Delta Chat pour envoyer des messages à des personnes utilisant Protonmail, Tutanota, or Criptext. Toutefois, ces messages ne seront pas chiffrés de bout en bout, car le chiffrement offert par ces fournisseurs n'est pas compatible avec [Autocrypt](https://autocrypt.org/), le protocole utilisé par Delta Chat.
- Delta Chat peut chiffrer des courriels de bout en bout avec un fournisseur de courriel utilisant [toute application de courriel compatible avec Autocrypt](https://autocrypt.org/dev-status.html).


### Comment supprimer mon compte ? {#remove-account}

If you use a default chat profile
you can simply uninstall the app.
This will automatically trigger deletion of all associated account data on the chatmail server.
For more info, please refer to [nine.testrun.org account-deletion](https://nine.testrun.org/info.html#account-deletion) for the default onboarding server,
or the respective page from your chosen [3rd party chatmail server](https://delta.chat/chatmail).

If you have set up your chat profile on multiple devices
you need to remove it from all devices.

If you are using more than one account,
but don't want to get rid of all of them,
you can remove it in the account switcher menu (on android and iOS),
or in the sidebar with a right click (in the desktop client).

Accounts on [classic e-mail providers](https://providers.delta.chat)
will not be deleted automatically;
how you can delete your account depends on your e-mail provider.
We don't have any control over e-mail accounts at those providers,
so unfortunately we can't help you with that.

If you want to continue using a classic e-mail account with other apps,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.
Otherwise you might receive undecryptable messages from those group chats.


### Les détails techniques m'intéressent. Pouvez-vous m'en dire plus ?

- Consultez les [standards utilisés dans Delta Chat]({% include standards-url %}).



### Where can my friends find Delta Chat?

Delta Chat is available for all major and some minor platforms:

- The **official website**, <https://delta.chat/download> shows all options in detail

- If unavailable, use the **mirror** at <https://deltachat.github.io/deltachat-pages>

- Open one of the following **app stores and search for "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, Amazon App Store, iOS and macOS App Store, Microsoft Store

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

- En 2021, nous avons reçu un financement européen supplémentaire pour deux initiatives de Next Generation Internet : 97.000€ pour la création d'un [annuaire de la portabilité des fournisseurs de courriel](https://dapsi.ngi.eu/hall-of-fame/eppd/) (ou EPPD pour "e-mail provider portability directory"), et environ 90.000€ pour le développement du [portage des adresses courriel](https://nlnet.nl/project/EmailPorting/) (ou AEAP pour "email address porting"). Ces deux projets ont aussi permis une meilleure prise en charge de la fonctionnalité multi-compte, un QR code de contact plus performant et de nombreuses améliorations concernant la gestion des réseaux et les configurations de groupe sur toutes les plateformes.

- Entre la fin de l'année 2021 et mars 2023, nous avons bénéficié d'un fonds *Internet Freedom* (pour la "liberté d'internet", de 500.000$) du Bureau of Democracy, Human Rights and Labor (DRL) des États-Unis. 
Cet argent est venu soutenir nos deux objectifs de longue date ; à savoir améliorer la compatibilité de Delta Chat pour le rendre utilisable plus facilement avec un large éventail de serveurs de courriel dans le monde entier, et en améliorer la résistance et la sécurité dans les régions où les coupures internet et la censure d'internet sont monnaie courante.

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
