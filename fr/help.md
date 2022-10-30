---
title: FAQ
lang: fr
render_toc: true
header: Foire aux questions
---


## Qu'est ce que Delta Chat?

Delta Chat est une application de clavardage qui utilise le courriel électronique pour délivrer ses messages et, si possible, les chiffre avec Autocrypt.
**vous n'avez pas à vous créer un nouveau compte, juste utiliser votre compte de courriel existant, avec Delta Chat**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Comment puis-je trouver des gens avec qui discuter ?

Avec Delta Chat, vous pouvez écrire à toutes les adresses courriels existantes, même si le destinataire n'utilise pas l'application. Votre correspondant pourra simplement répondre à l'e-mail qu'il aura reçu. Contrairement aux autres messageries instantanées vos amis n'ont pas besoins d'installer le même client pour discuter avec vous.


### Quels sont les avantages de Delta Chat par rapport aux autres messageries ?

 Indépendant de toute entreprise ou de service. _Vous possédez vos propres données_.
- Vos données ne sont pas sauvegardées sur un serveur central, à moins que vous n'utilisiez tous le même fournisseur de courriel.
- Vous ne distribuez pas votre carnet d'adresses à qui que ce soit.
- _Rapide_ par l'utilisation de Push-IMAP-.
- _La plus grande base d'utilisateurs_ : Même les destinataires n'utilisant pas Delta Chat peuvent être contactés.
- _Compatible_ - pas seulement avec lui-même.
- Interface utilisateur élégante et simple_. 
- _Système distribué_.
- _Pas de Spam_ - Seuls les messages des utilisateurs connus sont affichés par défaut.
- _Fiable - et sûr pour un usage professionnel.
- Code source entièrement ouvert et basé sur des normes internationales.


### Quels messages apparaissent dans Delta Chat

By default, Delta Chat shows:

- Messages sent by other Delta Chat users
- Replies to your Delta Chat messages, even if they are "normal e-mails".

Other e-mails don't appear in your app by default. At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well. This is the default setting.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Delta Chat prend-il en charge les images, vidéos et autres pièces jointes ?

Oui. Comme le texte brut, toutes les pièces jointes aux e-mails sont affichées sous forme de messages séparés. Les messages sortants reçoivent automatiquement les pièces jointes nécessaires.


### Qui peut voir ma photo de profil ?

Dans les paramètres vous pouvez ajouter une photo de profil. Si vous écrivez à vos contacts ou que vous les ajoutez via le QR code, ils la verront automatiquement comme votre photo de profil.

- Contacts who don't use Delta Chat do not see the profile picture
  (however, of course, they can install Delta Chat :)

- Pour des questions de confidentialité, personne ne peut voir votre photo de profil avant de leur avoir écrit.

- Votre photo de profil n'est pas envoyée avec chaque message, mais assez régulièrement pour que vos contacts aient une photo à jour même s'ils ajoutent un nouvel appareil.


### Est-ce que Delta Chat gère les courriels en HTML ?

- Yes. If needed, incoming messages get a "Show full message" button. Outgoing e-mails always use plain text.


### Pourquoi dois-je entrer le mot de passe de mon compte de courriel dans Delta Chat ? Est-ce sécurisé ?

Comme pour les autres clients de courriel, Thunderbird, FairEmail, K9-Mail, Outlook, etc, celui-ci a besoin des identifiants / mots de passe pour recevoir et envoyer des courriels. 
Bien sûr le mot de passe est uniquement stocké sur votre appareil. Et il est utilisé uniquement pour vous authentifier auprès de votre fournisseur de courriel, qui a, rappelons-le, accès à vos courriels non chiffrés.

Si vous utilisez un fournisseur d'E-mail supportant OAuth2 comme gmail.com et yandex.ru
il n'est pas nécessaire de stocker votre mot de passe sur votre appareil. Dans ce cas, seulement un jeton d'accès est utilisé.

Comme Delta Chat est un logiciel libre, vous pouvez étudier le [code source](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) pour vérifier que vos identifiants / mots de passe sont utilisés de façon sécurisée. Nous sommes très heureux d'avoir des retours pour renforcer la sécurité de l'application.


### De quelles autorisations Delta Chat a-t-il besoin?

Selon le système d'exploitation utilisé,
il vous sera peut-être demandé d'accorder des autorisations à l'application.
Voici ce que fait Delta Chat avec ces autorisations:

- Appareil photo * (peut être refusé) *
  - prendre des photos et des vidéos: pour envoyer des photos
- Contacts * (peut être refusé) *
  - lire vos contacts: pour découvrir les contacts avec lesquels discuter
- Emplacement * (peut être refusé) *
  - accéder à l'emplacement approximatif (sources d'emplacement réseau): pour la fonction de streaming d'emplacement
  - accéder à la localisation précise (GPS et sources de localisation réseau): pour la fonction de localisation en continu
- Microphone * (peut être refusé) *
  - enregistrement audio: pour les messages audio
- Stockage * (peut être refusé) *
  - modifier ou supprimer le contenu de votre carte SD pour télécharger les pièces jointes des messages
  - lire le contenu de votre carte SD pour partager des fichiers avec vos contacts
- Autres capacités de l'application
  - modifier vos paramètres audio pour choisir les sonneries et le volume des notifications et des messages audio
  - s'exécuter au démarrage pour ne pas avoir besoin de démarrer Delta Chat manuellement
  - contrôler les vibrations pour les notifications
  - afficher les connexions réseau pour vous connecter à votre fournisseur de messagerie
  - empêcher la veille du téléphone pour copier plus facilement le code de sécurité pendant le message de configuration Autocrypt
  - avoir un accès complet au réseau pour vous connecter à votre fournisseur de messagerie
  - afficher les connexions Wi-Fi pour vous connecter à votre fournisseur de messagerie
  - demander d'ignorer les optimisations de batterie pour les utilisateurs qui souhaitent recevoir des messages tout le temps

### What means Pinning, Muting, Archiving?

Use these tools to organize your chats and keep everything in its place:

- **Pinned chats** always stay atop of the chat list. You can use them to access your most loved chats quickly or temporarily to not forget about things.

- **Mute chats** if you do not want to get notifications for them. Muted chats stay in place and you can also pin a muted chat.

- **Archive chats** if you do not want to see them in your chat list any longer.
  At the very bottom of the chat list, in the menu or via search, you can still access the archived chats.

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [private app](#private-apps--webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


## Groupes

### Création d'un groupe

- Sélectionnez **Nouvelle discussion** puis **Nouveau groupe** dans le menu à trois points situé en haut à droite de la fenêtre ou son équivalent sous Android et iOS.
- Sur l'écran suivant, sélectionnez **Ajouter des participants** et choisissez un **Nom du groupe**. Vous pouvez aussi choisir une **image de groupe**.
- Lorsque vous enverrez le **premier message** dans le groupe, tous les membres en seront informés et pourront répondre. Le groupe est invisible aux autres membres si vous n'écrivez pas de premier message.


### Ajouter une personne à un groupe

- Chaque membre du groupe a les **mêmes droits** que les autres. Pour cette raison, chacun peut supprimer tous les membres ou en ajouter de nouveaux.
- Pour ajouter ou supprimer des membres, cliquez sur le nom du groupe dans le chat.


### Je me suis retiré du groupe par accident.

- Comme vous n'êtes plus membre du groupe, vous ne pouvez pas vous y ajouter à nouveau. 
Demandez simplement dans un tchate à n'importe quel autre membre de ce groupe de vous y ré-inviter.


### Je ne souhaite plus recevoir les message d'un groupe.

- Supprimez-vous de la liste des membres ou supprimez le tchate en entier. 
Si souhaitez rejoindre le groupe plus tard, demandez à un autre membre du groupe de vous ré-inviter.

- Vous pouvez également mettre un groupe en "Muet", ce qui signifie que vous recevez tous les messages et pourrez toujours écrire, mais vous ne serez plus informés de l'arrivée de nouveaux messages.


### What do the ticks shown beside outgoing messages mean?

- **One tick** means that the message was sent successfully to your provider.
- **Two ticks** mean that at least one recipient's device
  reported back to having received the message.
- Recipients may have disabled read-receipts,
  so even if you see only one tick, the message may have been read.
- The other way round, two ticks do not automatically mean
  that a human has read or understood the message ;)


### What happens if I turn on "Delete old messages from server"?

- By default, Delta Chat stores all messages locally on your device. If you
  e.g. want to save storage space at your mail provider, you can choose to
  delete old messages automatically. They still remain on your device until you
  delete them there, too.
- To turn it on, go to "delete old messages from server" in the "Chats & Media"
  settings. You can set a timeframe between "at once" and "after a year"; this
  way, *all* e-mails will be deleted from the server after that timeframe. 
- Note that if you use Delta Chat on more than one device, you should leave the
  messages on the server, until the other device could download them, too. In
  this case, you should set auto-delete to "after a day" or something similar,
  depending on how often you turn on the other device.


### What happens if I turn on "Delete old messages from device"?

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

### Delta Chat gère-t-il le chiffrement de bout en bout ?

- Oui. Delta Chat implémente la norme Autocrypt Niveau 1 et peut ainsi chiffrer E2E (de bout en bout) les messages avec d'autres applications capables d'Autocrypt. 

- Delta Chat supporte aussi une forme robuste du chiffrement bout à bout qui est même sécurisé contre les attaques actives, voir les “groupes vérifiés” ci-dessous.


### Que faire pour activer le chiffrement de bout en bout ?

- Rien.

<br>- Delta Chat (et les autres applications de messagerie compatibles avec[Autocrypt](https://autocrypt.org)) partagent automatiquement les clés nécessaires au chiffrement de bout en bout dès l'envoi des premiers messages. 
Tous les messages suivants sont chiffrés de bout en bout automatiquement. 
Si l'un des partenaires de tchate utilise une application de messagerie non-compatible avec Autocrypt, les messages ultérieurs ne sont pas chiffrés tant qu'une application conforme à Autocrypt n'est pas à nouveau disponible. 

- Si vous préférez éviter le courriel électronique chiffré de bout en bout par défaut, changez
le paramètre Autocrypt correspondant dans “Paramètres” ou “Paramètres avancés”.


### Si le chiffrement de bout en bout n'est pas disponible, la connexion n'est-elle pas chiffrée du tout ?

- Delta Chat établit le chiffrement du transport avec 
la majorité des serveurs de courriel ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
Cela sécurise seulement la connexion entre votre appareil et le serveur de courriel, alors que le chiffrement e2ee fournit de la sécurité entre votre appareil et celui d'un ami.


### Comment puis-je vérifier le statut de chiffrement auprès d'un expéditeur ?

Si vous êtes dans l'entourage physique immédiat de votre interlocuteur:

- Sélectionnez **code d'invitation QR** sur un appareil puis **Scanner le code QR** sur l'autre et faites scanner le code. Si les deux appareils sont en ligne, ils ouvriront un canal de discussion avec l'un l'autre (s'il n'existe pas déjà) et les clés de chiffrement seront aussi vérifiées. Les deux appareils verront un message système “destinataire vérifié” dans leur discussion
1:1.

Si vous n'êtes pas près physiquement de l'interlocuteur, vous pouvez vérifier manuellement l'état dans le dialogue “Chiffrement” (profil utilisateur sur Android/iOS ou un clic droit sur un objet de la liste des discussions sur l'appli de bureau):

- Pour le chiffrement de bout en bout, Delta Chat y montrera deux empreintes. Si les mêmes empreintes apparaissent sur l'appareil de votre partenaire de tchate, la connexion est sécurisée.

- Pour le cryptage de la communication, cet état est juste affiché ici


## Comment puis-je vérifier le chiffrement des messages ?

- Si un petit **cadenas** est affiché à côté d'un message, cela signifie que le message est chiffré de bout en bout par l'expéditeur.

- S'il n'y a **aucun cadenas**, le message est généralement transporté en clair, par exemple parce que vous ou l'expéditeur avez désactivé le chiffrement-de-bout-en-bout ou que l'expéditeur utilise une application qui ne prend pas en charge le chiffrement-de-bout-en-bout.

## Quels standards sont utilisés pour le chiffrement-de-bout-en-bout ?

- [Autocrypt](https://autocrypt.org) est utilisé pour mettre en place le chiffrement de bout en bout avec un destinataire utilisant Delta Chat ou un autre application utilisant Autocrypt. 
  Autocrypt utilise un sous-ensemble restreint de fonctionnalités d'OpenPGP. 

- Delta Chat implémente [les protocoles setup-contact et verified-group du projet countermitm](https://countermitm.readthedocs.io/en/latest/new.html) afin d'achever la protection contre des attaques de réseaux actives. Ceci va au-delà de la protection opportuniste de base du niveau 1 d'Autocrypt, tout en préservant sa facilité d'utilisation.

### Quel est la différence entre les groupes vérifiés et des discussions 1:1 avec des contacts vérifiés?

- Les discussions 1:1 avec un contact vérifié, et des groupes vérifiés, ne sont pas les mêmes choses même si il y a seulement 2 personnes dans le groupe vérifié. Une différence est que vous pouvez facilement ajouter plus de personnes dans le groupe, mais il y a aussi d'autres implications.
 

- Les groupes vérifiés sont sécurisés en tout temps. Toute violation (texte non chiffré ou messages mal signés etc.) sera signalée et de tels messages ne seront pas montrés dans 
ce tchate. Vous pouvez être assurés que tous les messages dans cette discussion vérifiée n'ont pas été lus ou altérés par des intermédiaires. 

-  Les discussions 1:1 sont opportunistes, c'est à dire que ça permet aux gens de communiquer même s'ils changent leur client de courriel, appareils, configurations etc. C'est pour cela qu'il n'y pas de marque de vérification, même si vous avez vérifié le contact.


### Est-ce que Delta Chat supporte la Confidentialité Persistante Parfaite (Perfect Forward Secrecy) ?

- Non, OpenPGP ne supporte pas la Perfect Forward Secrecy. La PFS marche 
pour une architecture orientée sur les sessions, mais le courriel est asynchrone par nature 
et souvent utilisé depuis plusieurs appareils. Cela signifie que si votre clé privée Delta Chat fuite et que quelqu'un a une copie de tout vos messages en cours de route, il sera capable de les lire.

- Notez que si quelqu'un s'est emparé ou a piraté votre téléphone allumé, il sera capable de lire tous vos messages, que la PFS soit en place ou non.
 Avoir accès à l'appareil d'un membre d'un groupe exposera normalement une bonne partie du cercle social. Utiliser des adresses de courriels qui ne permettent pas de retrouver facilement de vraies personnes, aide les membres du groupe à rester plus sûrs en cas de la perquisition d'un appareil.

- Nous sommes en train de réfléchir à des moyens de mieux protéger les communications en cas de perquisition de matériel.


### Comment est-ce Delta Chat protège mes métadonnées?

- Puisque Delta Chat est une messagerie décentralisée, les métadonnées des utilisateurs de Delta Chat ne sont pas stockées sur un seul serveur central. Néanmoins, elles sont stockées sur les serveurs de courriels de l'émetteur et du destinataire d'un message.

- Chaque serveur de mail sait actuellement qui a envoyé et qui a reçu un message en
 analysant les en-têtes non chiffrées To/Cc et donc peut déterminer quelles adresses
 de courriel font partie d'un groupe. Delta Chat lui-même pourrait éviter les en-têtes To/Cc et
tout le temps les mettre dans la partie chiffrée. Voyez ce ticket, [Évitez d'envoyer les entêtes  à/Cc pour des groupes vérifiés](https://github.com/deltachat/deltachat-core-rust/issues/1032).
La préoccupation principale pour les discussions opportunistes est comment cela va impacter les autres applications de courriel qui pourrait participer à ces discussions.

- Beaucoup d'autres en-têtes de courriel, en particulier l'en-tête “Sujet” sont prévues d'être protégées avec le chiffrement-de-bout-en-bout, consultez également cette [RFC en cours pour l'IETF](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Puis-je ré-utiliser ma clé privée existante ?

Oui. La meilleure façon est d'envoyer un message de configuration Autocrypt depuis l'autre client de mail. Cherchez quelque chose comme **Commencer le transfert de la configuration Autocrypt** dans les paramètres de l'autre client et suivez les instructions affichées.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Si vous n'avez pas de clé ou ne savez même pas que vous en auriez besoin, ne vous inquiétez pas : Delta Chat en génère une si nécessaire, vous n'avez pas besoin d'appuyer sur un bouton pour cela. 


### Je ne peux pas importer ma clé PGP existante dans Delta Chat. 

Le problème le plus probable est que votre clé est chiffrée ou qu'elle utilise un mot de passe, ou les deux. De telles clefs ne sont pas gérées par Delta Chat. Vous pourriez enlever le chiffrement par mot de passe et le mot de passe puis réessayer l'importation. Si vous voulez garder votre mot de passe, vous aurez a créer un alias de courriel à utiliser avec Delta Chat de telle sorte que la clé de Delta Chat soit liée a cet alias.

Delta Chat gère les formats communs de clé privé OpenPGP, néanmoins il
 n'est pas certain que nous gérions la totalité des clef privés de n'importe quelles sources. Ce n'est pas aussi le but principal de Delta Chat. En pratique, la majorité des nouveaux utilisateurs de Delta Chat n'auront pas de clefs avant d'utiliser Delta Chat.
Néanmoins, nous essayons de gérer les clés privées d'autant de sources que possible.

Enlever le mot de passe de la clé privée dépendra du logiciel que vous utilisez pour gérer vos clés GPG. Avec Enigmail, vous pouvez définir votre mot de passe par une valeur vide dans la fenêtre de Gestion des Clés. Avec GnuPG vous pouvez le définir [via la ligne de commande](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Pour les autres programmes, vous devriez être capable de trouver la solution en ligne.


### Pourquoi n'utilisez-vous pas pEp (pretty easy privacy)?

- Delta Chat utilise le standard de chiffrement e2ee d'Autocrypt. Pour une discussion sur Autocrypt et pEp, regardez la [FAQ d'Autocrypt](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Puis-je utiliser Delta Chat sur plusieurs appareils en même temps? 

Si vous voulez utiliser le **même compte** sur d'autres appareils, vous devriez exporter
 une sauvegarde depuis l'ancien appareil puis l'importer dans le nouveau:

 

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### Est-ce qu'il y a des plans d'introduction d'un client Web pour Delta Chat? 

- Il n'y a pas de plans immédiats mais quelques idées préliminaires.
- Il y a 2-3 façons d'introduire un client Web Delta Chat, mais toutes représentent
 un travail conséquent. Pour l'instant, nous nous concentrons à sortir des versions stables dans tous les magasins d'applications (Google Play/iOS/Windows/macOS/centre de paquets Linux) en tant qu'applications natives.
- Si vous avez besoin d'un client Web parce que vous n'êtes pas autorisé à installer des logiciels sur l'ordinateur sur lequel vous travaillez, vous pouvez utiliser le Client Portable pour bureaux Windows ou l'AppImage pour Linux. Vous pouvez les trouver sur 
[get.delta.chat](https://get.delta.chat).


### Quel est l'intérêt du paramètre “M'envoyer une copie”? 

Envoyer une copie de vos messages à vous-même garantit que vous recevez vos propres
 messages sur tous les appareils. Si vous avez de multiples appareils et que vous ne l'activez pas, vous voyez seulement les messages des autres personnes et les messages que vous avez envoyé depuis l'appareil en cours.

La copie est envoyée dans la Boîte de réception puis déplacée dans le dossier DeltaChat; elle n'est pas mise dans le dossier “Envoyés”. Delta Chat ne téléverse jamais quelque chose dans le dossier Envoyés car ça signifierait de le téléverser deux fois (une fois via SMTP, puis une fois dans le dossier Envoyés via IMAP).

Le paramètre par défaut pour l'envoi à soi-même est "Non".

### Pourquoi puis-je choisir de regarder le dossier “Envoyés”? 

La seule raison de regarder le dossier Envoyés est si vous utilisez un autre programme de courriel (tel que Thunderbird) en parallèle de votre application Delta Chat, et que vous voulez que votre client de messagerie participe aux discussions.

Cependant, nous recommandons d'utiliser le client de bureau Delta Chat; vous pouvez le télécharger sur [get.delta.chat](https://get.delta.chat). L'option de regarder le dossier “Envoyés” pourrait disparaître dans le futur. Elle a été introduite à une époque où il n'y avait pas de client de bureau Delta Chat disponible sur toutes les plateformes.

### Pourquoi puis-je choisir de ne pas regarder le dossier Delta Chat? 

Certaines personnes utilisent Delta Chat comme un client de messagerie normal, et veulent utiliser la Boîte de réception pour leurs mails au lieu d'utiliser le dossier DeltaChat. Si vous désactivez “Surveiller le dossier DeltaChat”, vous devriez aussi désactiver “déplacer les messages de discussions dans DeltaChat”.
Sinon, la suppression de messages dans une configuration multi-appareils pourrait ne pas marcher correctement.


## Private Apps / webxdc

In Delta Chat, you can share "private apps", attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger. The technical term is [webxdc](https://webxdc.org).


### How private are private apps?

- Private apps can not send data to the Internet, or download anything.
- A private app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a private app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the private app as well.
- This also means: it can be a privacy risk to open private apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get private apps?

- In general, there is no curated appstore and Delta Chat is not responsible
  for private apps or their content. Anyone can share private apps with each
  other without restrictions.
- You can find some example apps on [webxdc.org](https://webxdc.org).
- Many people write their own private apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own private apps?

- Private apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimental Features

We are very grateful about feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. (You
like experiments? Register through "Sign up -> with Delta Chat"!)

### How can I use audio/video calls with Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "videochat instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to your jitsi/BBB room. This
  way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### Qu'est qu'un groupe vérifié ? Pourquoi est-ce une fonction expérimentale ?

- Un groupe vérifié est une discussion qui garantit une sécurité contre un attaquant actif. Tous les messages d'une discussion vérifiée sont chiffrés de bout en bout (e2ee), et les membres peuvent joindre en scannant un code barre à deux dimensions (QR code) d'invitation. Tous les membres sont alors connectés l'un à l'autre à travers une chaîne d'invitation, qui garanti une cohérence cryptographique contre des attaques réseaux actives ou des fournisseurs. 
Consultez [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) pour en savoir plus sur la R&D derrière cette fonctionnalité.

- As of Oct 2022, "verified groups" remain an experimental feature. It is
  continuously improved and many bugs have been fixed since the original
  introduction in 2018. However, there remain cases, especially with large
  groups where inconsistencies can occur, or messages become unreadable.


### What are Broadcast Lists and how can I use them?

- With a Broadcast List you can send a message to many recipents at once; when
  they reply to you, you get the reply in your direct 1:1 chat with them. The
recipients can't see each other.
- Technically, it is an E-Mail with many recipients in BCC.
- You can turn on the feature in the "experimental features" section in the
  advanced settings. Then you can create a Broadcast List from the "New Chat"
dialog.
- In case you are using more than one device, Broadcast Lists are currently not
  synced between them.
- Messages sent to broadcast lists are not encrypted. Encryption would break
  anonymity, because then all recipients would know who else received it
  (Sending individual mails to everyone would be worse for rate limit and network
  consumption reason).


### How can I share my location with my chat partners?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat
  partners. *But:* to show the map, we need to download map tiles from
  mapbox.com, so if you *view* the map, mapbox.com is asked for the map of a
  specific area. If this is a privacy risk for you, this feature might not be
  for you. We are working on finding a decentralized alternative for Mapbox.
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### What does the experimental database encryption actually protect?

- Right now, the database encryption is still very experimental. Don't rely on
  it for protection, you should additionally use encryption of your operating
  system, if it provides any.
- The database encryption does not yet encrypt the blobs, only the rows and
  columns of the database. This more or less means that your messages are safe,
  but not your attachments.
- For iOS and Android, the encryption keys are stored in the system keychain.
  This means the encryption is as secure as the operating system it's running
  on.
- The Delta Chat desktop client doesn't offer database encryption yet, as there
  is no standard way to store the encryption keys on the different supported
  platforms.


### Why can I choose to only watch the DeltaChat folder?

C'est un paramètre expérimental pour certaines personnes qui expérimentent avec des règles côté serveur. Tous les fournisseurs ne supportent pas ceci mais certains permettent de déplacer tous les courriels avec un en-tête "Chat-Version" dans le dossier DeltaChat. Normalement, cela marchera dans l'application Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- activé une règle côté serveur pour déplacer tous les messages avec un en-tête "Chat-Version" dans le dossier DeltaChat, et - défini le paramètre "Voir les mails classiques" sur "Non, seulement les tchates".

In this case, Delta Chat doesn't need to watch the Inbox, and it's enough to only watch the DeltaChat folder.


### How can I change my account to a different e-mail address?

1. Change your address at the “Password and Account” seetings screen in Delta
   Chat, enter your password (and if necessary, server settings) for the new
   account
2. If possible, make your old e-mail provider forward all e-mails to your new
   email address
3. Tell your contacts that you changed your address. If you write this to a
   verified group, they will acknowledge this automatically.

To learn about the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Divers

### Est-ce que Delta Chat fonctionne avec _mon_ fournisseur de courriel électronique? 

- Avec de grandes chances: oui :)
Cependant, quelques fournisseurs ont besoin d'options spéciales pour bien fonctionner, consultez [l'aperçu des fournisseurs](https://providers.delta.chat)


### Si Delta Chat se base sur le courrier électronique, est-ce vraiment une Messagerie _Instantanée_? 

- L'envoi et la réception de messages prennent quelques secondes, en général. Parfois, il y a des cas où cela prend plus de temps, mais on peut dire que c'est vrai aussi pour tout autre messager.
- Le tchate instantané fonctionne rapidement si les deux parties utilisent activement l'application. Il est parfois plus lent si l'application fonctionne en arrière-plan.
- La réception de messages peut alors prendre plusieurs minutes car Android et iOS empêchent souvent Delta Chat de fonctionner en arrière-plan, et ne le réveillent qu'occasionnellement. Ce délai artificiel est généralement pire sur iOS que sur Android.
- Cependant, le fait qu'Android et iOS tuent les applications fonctionnant en arrière-plan est un problème pour de nombreuses applications légitimes.
Pour plus d'informations, voir [dontkillmyapp.com](https://dontkillmyapp.com/).


### Est-ce Delta Chat est compatible avec Protonmail / Tutanota / Criptext? 

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is not 
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Les détails techniques m'intéressent. Pouvez-vous m'en dire plus ? 

- Consultez les [standards utilisés dans Delta Chat]({% include standards-url %}).

### Comment est financé le développement de Delta Chat? 

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources:

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate End-to-End Encryption
  through [Autocrypt](https://autocrypt.org).

- The [Open Technology Fund](https://opentechfund.org) gave us a 
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app 
  and released a first Desktop app beta version, and which moreover 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-account support, improved QR-code contact and group setups and many networking improvements on all platforms.

- For 2021/2022 we are receiving *Internet Freedom* funding (~500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supports our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Sometimes we receive one-time donations from private individuals for
  which we are grateful. For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". We use such money to fund
  development gatherings or to care for ad-hoc expenses that can not easily be predicted
  for or reimbursed from public funding grants. 

- En dernier mais de loin pas des moindres, quelques enthousiastes et experts bénévoles qui ont contribué et contribuent au développement de Delta Chat sans recevoir d'argent, ou seulement de petites sommes. Sans eux, Delta Chat n'en serait pas où il en est aujourd'hui, et de très loin.

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Funding for second half of 2022 and especially for 2023 is an ongoing issue of concern. Apart from applying for more public funding we want to become more independent from government-related funding sources. Please see [Delta Chat Contribution channels](https://delta.chat/en/contribute) for both monetary and development related support possibilities. 
