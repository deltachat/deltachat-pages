---
title: FAQ
lang: fr
render_toc: true
header: Foire aux questions
---


## Qu'est-ce que Delta Chat ?

Delta Chat est une application de clavardage qui utilise le courriel électronique pour délivrer ses messages et, si possible, les chiffre avec Autocrypt.
**Vous n'avez pas besoin de vous créer un nouveau compte, utilisez simplement votre compte de courriel existant avec Delta Chat**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Comment puis-je trouver des gens avec qui discuter ?

Avec Delta Chat, vous pouvez écrire à toutes les adresses courriels existantes, même si le destinataire n'utilise pas l'application. Votre correspondant pourra simplement répondre au courriel qu'il aura reçu. Contrairement aux autres messageries instantanées, il n'est pas nécessaire que vos amis installent le même client pour discuter avec vous.


### Quels sont les avantages de Delta Chat par rapport aux autres messageries ?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _No Spam_ - only messages of known users are shown by default.
- _End-to-end-encryption_ via Autocrypt.
- _Copyleft_ and _Standards_ based libre software.
- _Flexible identity_ with built-in support for [multiple accounts](#multiple-accounts)


### Quels messages apparaissent dans Delta Chat ?

By default, Delta Chat shows all e-mails.

At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost. This is the default setting.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### Et si j'attends un message de quelqu'un avec qui je n'ai encore jamais échangé ?

- Si vous recevez un message de la part d'un contact inconnu, vous recevez une **invitation** que vous
  devez d'abord accepter pour pouvoir répondre au message.
- Vous pouvez également choisir de "supprimer" l'invitation si vous ne souhaitez pas discuter avec cet inconnu maintenant. Cela
  ne supprime *pas* le message sur le serveur, seulement sur votre appareil. Vous pouvez donc
  toujours traiter le message depuis une application de courriel différente.
- Si vous supprimez une invitation, les futurs messages de ce contact apparaîtront
  de nouveau comme des invitations, de sorte que vous pouvez changer d'avis par la suite. Si vous ne voulez vraiment pas
  recevoir de messages de cette personne, nous vous conseillons de la *bloquer*.


### Delta Chat prend-il en charge les images, vidéos et autres pièces jointes ?

Oui. Comme le texte brut, toutes les pièces jointes aux courriels sont affichées sous forme de messages séparés. Les messages sortants expédient automatiquement les pièces jointes que vous ajoutez.

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#can-i-use-delta-chat-on-multiple-devices-at-the-same-time).

### Qui peut voir ma photo de profil ?

Dans les paramètres vous pouvez ajouter une photo de profil. Si vous écrivez à vos contacts ou que vous les ajoutez via le QR code, ils la verront automatiquement comme votre photo de profil.

- Les contacts qui n'utilisent pas Delta Chat ne voient pas la photo de profil.
(Toutefois, ils peuvent bien sûr installer Delta Chat :)

- Pour des raisons de confidentialité, personne ne peut voir votre photo de profil sans que vous ayez d'abord entamé une discussion.

- Votre photo de profil n'est pas envoyée avec chaque message, mais assez régulièrement pour que vos contacts aient une photo à jour même s'ils ajoutent un nouvel appareil.


### Est-ce que Delta Chat gère les courriels en HTML ?

Oui. Si nécessaire, les messages entrants disposent d'un bouton "Afficher le message complet". Les courriels sortants utilisent toujours le texte brut.


### Pourquoi dois-je entrer le mot de passe de mon compte de courriel dans Delta Chat ? Est-ce sécurisé ?

Comme pour les autres clients de courriel, Thunderbird, FairEmail, K9-Mail, Outlook, etc, celui-ci a besoin des identifiants / mots de passe pour recevoir et envoyer des courriels. 
Bien sûr le mot de passe est uniquement stocké sur votre appareil. Et il est utilisé uniquement pour vous authentifier auprès de votre fournisseur de courriel, qui a, rappelons-le, accès à vos courriels non chiffrés.

Si vous utilisez un fournisseur de courriel qui prend en charge OAuth2, comme gmail.com ou yandex.ru,
il n'est pas nécessaire de stocker votre mot de passe sur votre appareil. Dans ce cas, seul un jeton d'accès est utilisé.

Comme Delta Chat est un logiciel libre, vous pouvez étudier le [code source](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) pour vérifier que vos identifiants / mots de passe sont utilisés de façon sécurisée. Nous sommes très heureux d'avoir des retours pour renforcer la sécurité de l'application.


### De quelles autorisations Delta Chat a-t-il besoin?

Selon le système d'exploitation utilisé,
il vous sera peut-être demandé d'accorder des autorisations à l'application.
Voici ce que fait Delta Chat avec ces autorisations:

- Appareil photo * (peut être refusé) *
  - prendre des photos et des vidéos : pour envoyer des photos
- Contacts * (peut être refusé) *
  - lire vos contacts : pour trouver des contacts avec lesquels discuter
- Localisation * (peut être refusé) *
  - accéder à la localisation approximative (sources de localisation réseau) : pour la fonction de streaming de localisation
  - accéder à la localisation précise (GPS et sources de localisation réseau) : pour la fonction de localisation en continu
- Microphone * (peut être refusé) *
  - enregistrement audio : pour les messages audio
- Stockage * (peut être refusé) *
  - modifier ou supprimer le contenu de votre carte SD : pour télécharger les pièces jointes des messages
  - lire le contenu de votre carte SD : pour partager des fichiers avec vos contacts
- Autres capacités de l'application
  - modifier vos paramètres audio : pour choisir les sonneries et le volume des notifications et des messages audio
  - s'exécuter au démarrage : pour ne pas avoir besoin de démarrer Delta Chat manuellement
  - contrôler les vibrations : pour les notifications
  - afficher les connexions réseau : pour se connecter au fournisseur de messagerie
  - empêcher la veille du téléphone : pour copier plus facilement le code de sécurité pendant le message de configuration Autocrypt
  - avoir un accès complet au réseau : pour se connecter au fournisseur de messagerie
  - afficher les connexions Wi-Fi : pour se connecter au fournisseur de messagerie
  - demander d'ignorer les optimisations de batterie : pour les utilisateurs qui souhaitent recevoir des messages tout le temps

### Que signifient "épingler", "sourdine" et "archiver" ?

Ces options vous permettent d'organiser et trier vos discussions :

- Les **discussions épinglées** restent en haut de votre liste de discussions. Vous pouvez ainsi retrouver plus rapidement vos discussions favorites ou éviter d'oublier des messages importants.

- Utilisez la **sourdine** pour les discussions dont vous ne voulez pas recevoir les notifications. Les discussions en sourdine figurent toujours dans votre liste et peuvent aussi être les épinglées.

- **Archive chats** if you do not want to see them in your chat list any longer.
  Archived chats remain accessible above the chat list or via search. 

- Lorsqu'un nouveau message est envoyé sur une discussion que vous avez archivée, et que vous n'avez pas mise en sourdine, la discussion **sort des archives** et reprend sa place dans votre liste de discussions.
  **Les discussions en sourdine restent archivées** tant que vous ne les désarchivez pas manuellement.

Pour archiver ou épingler une discussion, faites un appui long sur la discussion concernée (Android), ouvrez le menu de la conversation (Android/application de bureau), ou balayez vers la gauche (iOS) ;
pour mettre une discussion en sourdine, ouvrez le menu de la conversation (Android/application de bureau) ou le profil de la discussion (iOS).


### Que signifie le point vert ?

- Depuis la version 1.34 de Delta Chat, vous voyez parfois un "point vert" à côté de la photo de profil
  d'un contact. Cela signifie qu'il a été "vu récemment".
- Plus précisément, cela signifie que Delta Chat a détecté l'activité de ce contact au cours des 10 dernières minutes :
  - soit parce qu'il vous a écrit personnellement ;
  - soit parce qu'il a écrit dans un groupe dont vous êtres tous les deux membres ;
  - soit parce qu'il a envoyé l'accusé de lecture d'un message que vous lui avez écrit ;
  - ou bien parce qu'il a envoyé des données à votre appli Delta Chat via une
    [appli privée](#private-apps--webxdc).
- Le "point vert" n'est donc pas un statut en temps réel. Aussi, si quelqu'un ne vous répond pas
  immédiatement alors qu'il semble être en ligne, ne vous en faites pas et
  patientez ;-)
- D'un autre côté, les autres ne vous voient pas forcément "en ligne". En particulier,
 si vous avez désactivé les accusés de lecture, ils ne verront pas de point vert
  tant que vous ne leur écrivez pas directement ou n'écrivez pas dans un groupe dont ils font aussi partie.


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


### Je ne souhaite plus recevoir les message d'un groupe.

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

- Par défaut, Delta Chat stocke tous les messages sur votre appareil. Vous pouvez donc choisir de supprimer les anciens messages automatiquement pour libérer de l'espace de stockage chez votre fournisseur de courriel. Ces messages seront conservés localement jusqu'à ce que vous les supprimiez aussi de votre appareil.
- Pour activer cette option, ouvrez les paramètres des "Discussions et fichiers multimédias" et cliquez sur "Supprimer les anciens messages sur le serveur". Vous pouvez définir le délai après lequel *tous* les messages seront supprimés du serveur, parmi plusieurs choix allant de "Immédiatement" à "Après 1 année".
- Attention : si vous utilisez Delta Chat sur plusieurs appareils, laissez les messages sur le serveur jusqu'à ce que l'(es) autre(s) appareil(s) ai(en)t pu les télécharger aussi. Dans ce cas, nous vous conseillons de paramétrer la suppression automatique sur "Après 1 jour" ou plus, en fonction de la fréquence à laquelle vous vous servez de ces autres appareils.


### Que se passe-t-il si j'active l'option "Supprimer les anciens messages de l'appareil" ?

- Vous pouvez choisir de supprimer automatiquement les anciens messages pour libérer de l'espace de stockage sur votre appareil. 
- Pour activer cette option, ouvrez les paramètres des "Discussions et fichiers multimédias" et cliquez sur "Supprimer les anciens messages de l'appareil". Vous pouvez définir le délai après lequel *tous* les messages seront supprimés de votre appareil, parmi plusieurs choix allant de "Immédiatement" à "Après 1 année".


## Chiffrement

### Delta Chat gère-t-il le chiffrement de bout en bout ?

- Oui. Delta Chat implémente la norme Autocrypt Niveau 1 et peut ainsi chiffrer de bout en bout les messages avec d'autres applications utilisant Autocrypt. 

Delta Chat propose également une version renforcée du chiffrement de bout en bout qui peut résister aux attaques actives sur le réseau.
Pour en savoir plus, consultez l'entrée "Groupes vérifiés" ci-dessous.


### Que faire pour activer le chiffrement de bout en bout ?

- Rien.

<br>- Delta Chat (et les autres applications de messagerie compatibles avec [Autocrypt](https://autocrypt.org)) partagent automatiquement les clés nécessaires au chiffrement de bout en bout dès l'envoi des premiers messages. 
Tous les messages ultérieurs sont chiffrés de bout en bout automatiquement. 
Si l'un des membres de la discussion utilise une application de messagerie non compatible avec Autocrypt, les messages ultérieurs ne sont pas chiffrés tant qu'une application gérant Autocrypt n'est pas à nouveau disponible. 

- Si vous préférez ne pas utiliser le courriel chiffré de bout en bout par défaut, changez
le paramètre Autocrypt correspondant dans “Configuration” ou “Avancé”.


### Si le chiffrement de bout en bout n'est pas disponible, la connexion n'est-elle pas chiffrée du tout ?

Avec la plupart des serveurs de messagerie, Delta Chat est capable d'établir une une connexion TLS   ([TLS](https://fr.wikipedia.org/wiki/Transport_Layer_Security)).
Ce type de connexion sécurise les échanges seulement entre votre appareil et votre serveur de messagerie, tandis que le chiffrement de bout en bout assure un sécurisation des échanges de votre appareil à celui de votre destinataire.


### Comment puis-je vérifier le statut de chiffrement auprès d'un expéditeur ?

Si vous êtes dans l'entourage physique immédiat de votre interlocuteur :

- Sélectionnez **code d'invitation QR** sur un appareil puis **Scanner le code QR** sur l'autre et faites scanner le code. Si les deux appareils sont en ligne, ils ouvriront un canal de discussion avec l'un l'autre (s'il n'existe pas déjà) et les clés de chiffrement seront aussi vérifiées. Les deux appareils verront un message système “destinataire vérifié” dans leur discussion
1:1.

Si vous n'êtes pas près physiquement de votre interlocuteur, vous pouvez vérifier manuellement l'état dans la boîte de dialogue “Afficher les informations de chiffrement” (profil utilisateur sur Android/iOS ou clic droit sur un objet de la liste des discussions sur l'appli de bureau) :

- Quand le chiffrement de bout en bout est actif, vous verrez deux empreintes. Si les mêmes empreintes apparaissent sur l'appareil de votre contact, la connexion est sécurisée.

- Pour la connexion sécurisée uniquement par TLS, c'est cet état qui sera affiché dans la boîte de dialogue.


## Comment puis-je vérifier le chiffrement des messages ?

- Si un petit **cadenas** est affiché à côté d'un message, cela signifie que le message est chiffré de bout en bout par l'expéditeur.

- S'il n'y a **aucun cadenas**, le message est généralement transporté en clair, par exemple parce que vous ou l'expéditeur avez désactivé le chiffrement-de-bout-en-bout ou que l'expéditeur utilise une application qui ne prend pas en charge le chiffrement-de-bout-en-bout.


### How can I ensure message encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is creating a verified group and turning on
self-destructing messages.

Verified groups are always encrypted and protected against [MITM
attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Metadata can't be encrypted, as the server needs to know where to deliver your
messages. But turning on "self-destructing messages" deletes the messages on
the server after they were delivered.

If you need the messages on your device, but not on the server, you can also
agree in the group to turn on ["delete messages from server
automatically"](#what-happens-if-i-turn-on-delete-old-messages-from-server).

If you want to protect a 1:1 conversation like this, you should create a
verified group with only 2 people. If the other person loses their device but
not their account, you can still communicate in the 1:1 chat. ([Read more](#what-is-the-difference-between-verified-groups-and-11-chats-with-verified-contacts))


## Quels standards sont utilisés pour le chiffrement de bout en bout ?

- [Autocrypt](https://autocrypt.org) est utilisé pour mettre en place le chiffrement de bout en bout avec un destinataire utilisant Delta Chat ou une autre application utilisant Autocrypt. 
  Autocrypt utilise un sous-ensemble restreint de la fonctionnalité OpenPGP. 

- Delta Chat implémente [les protocoles setup-contact et verified-group du projet countermitm](https://countermitm.readthedocs.io/en/latest/new.html) afin d'assurer la protection contre des attaques de réseaux actives. Ceci va au-delà de la protection opportuniste de base du niveau 1 d'Autocrypt, tout en préservant sa facilité d'utilisation.

### Quelle est la différence entre des groupes vérifiés et des discussions à deux avec des contacts vérifiés ?

- Les discussions à deux avec un contact vérifié et les groupes vérifiés sont deux types de discussions différents, même s'il y a seulement 2 personnes dans le groupe vérifié. La première différence est que vous pouvez ajouter plusieurs personnes dans le groupe.
 

- Les groupes vérifiés sont sécurisés en toutes circonstances. Toute faille de sécurité (texte non chiffré, messages mal signés, etc.) sera repérée et les messages concernés ne s'afficheront pas dans 
la discussion. Vous avez donc la certitude qu'aucun des messages du groupe vérifié n'a été lu ou altéré par des intermédiaires. 

- Les discussions à deux sont opportunistes, c'est-à-dire qu'elles doivent permettre à deux personnes de communiquer même si elles changent de client de messagerie, d'appareils, modifient leurs préférences de configuration, etc. C'est pourquoi il n'y pas de marque de vérification, même si vous avez vérifié le contact.


### Delta Chat prend-il en charge la confidentialité persistante parfaite (Perfect Forward Secrecy) ?

- Non, OpenPGP ne gère pas la confidentialité persistante parfaite. Ce protocole fonctionne 
pour une architecture orientée sur les sessions, mais le courriel est asynchrone par nature 
et souvent utilisé depuis plusieurs appareils. Cela signifie que si votre clé privée Delta Chat fuite et que quelqu'un a une copie de tous vos messages en transit, il pourra les lire.

- Notez que si quelqu'un s'est emparé de votre téléphone allumé ou l'a piraté, il pourra lire tous vos messages, que la PFS soit en place ou non.
 Avoir accès à l'appareil d'un membre d'un groupe représente un risque pour une bonne partie du cercle social. Utiliser des adresses de courriels qui ne permettent pas de retrouver facilement de vraies personnes aide à protéger les autres membres du groupe des effets de la spoliation d'un des appareils.

- Nous réfléchissons actuellement aux meilleurs moyens de protéger les communications en cas de spoliation d'appareil.


### Comment Delta Chat protège-t-il mes métadonnées?

- Puisque Delta Chat est une messagerie décentralisée, les métadonnées des utilisateurs de Delta Chat ne sont pas stockées sur un seul serveur central. Néanmoins, elles sont stockées sur les serveurs de courriels de l'émetteur et du destinataire d'un message.

- Chaque serveur de courriel sait qui a envoyé et qui a reçu un message grâce
 à l'analyse des en-têtes non chiffrées To/Cc et peut donc déterminer quelles adresses
 de courriel font partie d'un groupe. Delta Chat lui-même pourrait éviter les en-têtes To/Cc et
toujours les placer dans la partie chiffrée. Voyez ce ticket, [Évitez d'envoyer les entêtes  à/Cc pour des groupes vérifiés](https://github.com/deltachat/deltachat-core-rust/issues/1032).
La préoccupation principale concernant les discussions opportunistes est la façon dont seront impactées les autres applications de courriel potentiellement impliquées dans ces discussions.

- Beaucoup d'autres en-têtes de courriel, en particulier l'en-tête “Sujet” sont protégées avec le chiffrement de bout en bout, consultez également cette [RFC en cours pour l'IETF](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Puis-je ré-utiliser ma clé privée existante ?

Oui. Le plus simple est d'envoyer un message de configuration Autocrypt depuis un autre client de courriel. Cherchez quelque chose comme **Commencer le transfert de la configuration Autocrypt** dans les paramètres de l'autre client et suivez ses instructions.

- Sinon, vous pouvez importer la clé manuellement en allant dans "Configuration -> Avancé -> Importer des clés secrètes". Attention : assurez-vous que la clé n'est pas protégée par un mot de passe, ou bien supprimez le mot de passe au préalable.

Si vous n'avez pas de clé ou ne savez pas si vous en avez besoin, ne vous inquiétez pas : Delta Chat en génère dès que nécessaire, sans que vous ayez besoin de faire quoi que ce soit. 


### Je n'arrive pas à importer ma clé PGP existante dans Delta Chat.

L'origine la plus probable de ce problème est que votre clé est chiffrée ou requiert un mot de passe, ou les deux. Ce type de clés n'est pas géré par Delta Chat. Vous pouvez tenter de retirer le chiffrement et le mot de passe puis réessayer l'importation. Si vous voulez garder votre mot de passe, vous devez créer un alias de courriel que vous utiliserez avec Delta Chat, de sorte que la clé de Delta Chat soit liée à cet alias.

Delta Chat gère les formats de clé privée OpenPGP les plus communs, néanmoins il
 est peu probable que les clés privées générées par toutes les sources soient prises en charge. Mais l'objectif principal de Delta Chat n'est pas là. En pratique, la majorité des nouveaux utilisateurs ne possèdent pas de clés de chiffrement avant d'utiliser Delta Chat.
Néanmoins, nous essayons de gérer les clés privées d'autant de sources que possible.

La méthode pour retirer le mot de passe de la clé privée dépend du logiciel que vous utilisez pour gérer vos clés GPG. Avec Enigmail, vous pouvez définir votre mot de passe en laissant le champ vide dans la fenêtre de Gestion des Clés. Avec GnuPG, vous pouvez le définir [avec la ligne de commande](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Pour les autres programmes, vous devriez pouvoir trouver la solution en ligne.


### Pourquoi n'utilisez-vous pas pEp (pretty easy privacy) ?

- Delta Chat utilise le standard de chiffrement de bout en bout d'Autocrypt. Vous trouverez des explications concernant Autocrypt et pEp sur la [FAQ d'Autocrypt](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Puis-je utiliser Delta Chat sur plusieurs appareils en même temps? 

Yes. Delta Chat 1.36 comes with a new, experimental function for using the same account on different devices:

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- On the second device, [install Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- Transfer should start after a few seconds and during transfer both devices will show the **progress**.
  Wait until it is finished on both devices.

In contrast to many other messengers, after successful transfer,
both **devices are completely independent.**
One device is not needed for the other to work.


### Troubleshooting

- Double-check both devices are in the **same Wi-Fi or network**

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple accounts per device, just [add another account](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer

This method is only recommended if "Add Second Device" as described above does not work.

- Sur l'ancien appareil, allez dans “Paramètres -> Discussions et fichiers multimédia -> Exporter une sauvegarde". Entrez votre PIN, schéma ou mot de passe de déverrouillage, puis cliquez sur "Commencer la sauvegarde" pour enregistrer le fichier de sauvegarde sur votre appareil.
Ensuite, transférez-le sur l'autre appareil de la manière que vous préférez.
- Dans la fenêtre de connexion du nouvel appareil, sélectionnez "Importer la sauvegarde" au lieu de vous connecter avec votre compte courriel. L'importation terminée, vos discussions, clés de chiffrement, ainsi que vos fichiers multimédias devraient tous être copiés sur le nouvel appareil.
- **Si vous utilisez iOS ** et rencontrez des difficultés, [ce guide](https://support.delta.chat/t/import-backup-to-ios/1628) vous sera certainement utile.
- Votre compte est synchronisé, et vous pouvez utiliser vos deux appareils dès maintenant pour échanger des messages chiffrés de bout en bout avec vos interlocuteurs.

### Le lancement d'un client Web Delta Chat est-il prévu ?

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


## Applications privées / webxdc

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


## Fonctionnalités expérimentales

Nous apprécions tout particulièrement les retours sur ces fonctionnalités. Vous voulez donner votre avis ? Rejoignez-nous sur le [Forum](https://support.delta.chat) pour contribuer. (Vous aimez faire des expériences ? Inscrivez-vous en cliquant sur "Sign up -> with Delta Chat" !)

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


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](2023-01-26-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


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

### Was Delta Chat independently audited for security vulnerabilities?

The Delta Chat project underwent three independent security audits in the last
years:

- In 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).

- In 2020, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's Rust [core](https://github.com/deltachat/deltachat-core-rust/),
  [IMAP](https://github.com/async-email/async-imap),
  [SMTP](https://github.com/async-email/async-smtp), and
  [TLS](https://github.com/async-email/async-native-tls) libraries.
  It did not find any critical or high-severity issues.
  The report raised a few medium-severity weaknesses -
  they are no threat to Delta Chat users on their own
  because they depend on the environment in which Delta Chat is used.
  For usability and compatibility reasons,
  we can not mitigate all of them
  and decided to provide security recommendations to threatened users.
  You can read the [full report here](../assets/blog/2020-second-security-review.pdf).

- Beginning 2023, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](2023-03-23-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

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
