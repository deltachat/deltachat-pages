---
title: FAQ
lang: fr
render_toc: true
header: Foire aux questions
---


## Qu'est-ce que Delta Chat ?

Delta Chat est une application de clavardage qui utilise le courrier électronique pour délivrer ses messages et les chiffre avec Autocrypt lorsque c'est possible.
**Vous n'avez pas besoin de vous créer un nouveau compte, vous pouvez simplement utiliser votre compte courriel existant avec Delta Chat.**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Comment puis-je trouver des gens avec qui discuter ?

Avec Delta Chat, vous pouvez écrire à toutes les adresses courriels existantes, même si le destinataire n'utilise pas l'application. Votre correspondant pourra simplement répondre au courriel qu'il aura reçu. Contrairement aux autres messageries instantanées, il n'est pas nécessaire que vos amis installent le même client pour discuter avec vous.


### Quels sont les avantages de Delta Chat par rapport aux autres messageries ?

- Elle est_indépendante_ de toute entreprise et de tout service. Vos données _vous_ appartiennent.
- Vos données ne sont pas stockées sur un serveur central, à moins que tous les membres d'une conversation n'utilisent le même serveur de courriel.
- Vous ne partagez votre carnet d'adresses avec personne.
- Elle est_rapide_ grâce à l'utilisation de Push-IMAP.
- Elle fournit _la plus grande base utilisateurs_ : vous pouvez contacter aussi vos correspondants qui _n'utilisent pas_ Delta Chat.
- _Aucun spam_ : par défaut, vous ne voyez que les messages envoyés par les utilisateurs connus.
- _Chiffrement de bout-en-bout_ via Autocrypt.
- Logiciel libre basé sur le_copyleft_ et les _Standards_.
- _Identité flexible_ grâce à la gestion intégrée des [comptes multiples](#multiple-accounts).


### Quels sont les messages qui apparaissent dans Delta Chat ?

Par défaut, Delta Chat affiche tous les courriels.

Vous pouvez changer cette préférence en allant dans "Paramètres -> Discussions & fichiers multimédia -> Voir les courriels classiques". Trois options sont disponibles :

- "Non, seulement les discussions": vous verrez seulement les messages envoyés par d'autres utilisateurs de Delta Chat et les réponses à vos messages Delta Chat. Cette option est recommandée si vous utilisez le même compte pour recevoir aussi des courriels normaux.
- "Tout": vous verrez dans Delta Chat tous les courriels envoyés à votre adresse. Cette option est recommandée si vous souhaitez utiliser Delta Chat pour tous vos courriels, afin de ne rater aucun message.
- "Pour les contacts acceptés": vous verrez dans Delta Chat tous les courriels envoyés par les personnes avec qui vous avez déjà ouvert une discussion, mais les notifications de nouvelles conversations ne s'afficheront que pour des messages envoyés via Delta Chat. Cette option vous permet de décider au cas par cas si vous souhaitez échanger via Delta Chat ou via une application de courriel "normale".


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

Oui. En plus du texte brut, toutes les pièces jointes aux courriels sont affichées sous forme de messages séparés. Les messages sortants expédient automatiquement les pièces jointes que vous ajoutez.

- Pour de meilleures performances, les images sont optimisées et envoyées en taille réduite par défaut, mais vous pouvez les envoyer en tant que "fichier" pour en conserver la taille originale.

<h3 id="multiple-accounts">Comment naviguer entre mes différents comptes et comment en ajouter ?</h3>

Vous pouvez facilement gérer des comptes supplémentaires sur les clients Delta Chat mobile ou de bureau en cliquant sur :
- le bouton du menu, puis sur "Changer de compte" (Android et bureau) ;
- l'icône de profil, puis sur "Ajouter un compte" (iOS).

Peut-être voudrez-vous aussi savoir [comment ajouter un compte sur plusieurs appareils](#multiclient).

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

- **Archivez les discussions** si vous ne voulez plus les voir apparaître dans votre liste de discussions.
  Les discussions archivées restent accessibles au-dessus de la liste de discussions ou via la recherche. 

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
    [appli privée](#webxdc).
- Le "point vert" n'est donc pas un statut en temps réel. Aussi, si quelqu'un ne vous répond pas
  immédiatement alors qu'il semble être en ligne, ne vous en faites pas et
  patientez ;-)
- D'un autre côté, les autres ne vous voient pas forcément "en ligne". En particulier,
 si vous avez désactivé les accusés de lecture, ils ne verront pas de point vert
  tant que vous ne leur écrivez pas directement ou n'écrivez pas dans un groupe dont ils font aussi partie.


### How can I delete my account?

As you use an e-mail account for Delta Chat,
how you can delete your account depends on your e-mail provider.
We don't have any control over your e-mail account,
so unfortunately we can't help you with that.

If you want to keep the account,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.


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

- Par défaut, Delta Chat stocke tous les messages sur votre appareil. Vous pouvez donc choisir de supprimer les anciens messages automatiquement pour libérer de l'espace de stockage chez votre fournisseur de courriel. Ces messages seront conservés localement jusqu'à ce que vous les supprimiez aussi de votre appareil.

- Pour activer cette option, allez dans les paramètres de "Discussions et fichiers multimédia" et **Supprimer les anciens messages → Supprimer les messages du serveur**.
  Vous pouvez régler un délai allant de "Immédiatement" à "Après 1 année".
  Tous les courriels reçus sur Delta Chat seront supprimés du serveur une fois le délai écoulé.

- Attention : si vous utilisez Delta Chat sur plusieurs appareils, laissez les messages sur le serveur jusqu'à ce que l'(es) autre(s) appareil(s) ai(en)t pu les télécharger aussi. Dans ce cas, nous vous conseillons de paramétrer la suppression automatique sur "Après 1 jour" ou plus, en fonction de la fréquence à laquelle vous vous servez de ces autres appareils.


### Que se passe-t-il si j'active l'option "Supprimer les anciens messages de l'appareil" ? {#delold}

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


### Comment puis-je vérifier le chiffrement des messages ?

- Si un petit **cadenas** est affiché à côté d'un message, cela signifie que le message est chiffré de bout en bout par l'expéditeur.

- S'il n'y a **aucun cadenas**, le message est généralement transporté en clair, par exemple parce que vous ou l'expéditeur avez désactivé le chiffrement-de-bout-en-bout ou que l'expéditeur utilise une application qui ne prend pas en charge le chiffrement-de-bout-en-bout.


### Comment puis-je faire en sorte que les messages soient chiffrés et supprimés ?

La meilleure façon de garantir que chaque message soit chiffré et les métadonnées effacées aussi vite que possible c'est de créer un groupe vérifié et d'activer les messages éphémères.

Les groupes vérifiés sont toujours chiffrés et protégés contre les [attaques de l'homme du milieu](https://fr.wikipedia.org/wiki/Attaque_de_l%27homme_du_milieu).

Les métadonnées ne peuvent pas être chiffrées puisque le serveur doit savoir où envoyer vos messages. Mais activer les "messages éphémères" permet de supprimer les messages du serveur immédiatement après leur réception.

Si vous avez besoin de conserver vos messages sur votre appareil, mais pas sur le serveur, vous pouvez aussi vous mettre d'accord dans le groupe pour activer l'option ["Supprimer les messages du serveur immédiatement"](#delold).

Si vous souhaitez protéger une conversation à deux de cette manière, nous vous conseillons de créer un groupe vérifié avec seulement deux personnes. Si jamais l'autre personne perdait son appareil, mais pas son compte, vous pourriez toujours communiquer dans la conversation à deux. ([En savoir plus](#verdiff))


### Quels standards sont utilisés pour le chiffrement de bout en bout ?

- [Autocrypt](https://autocrypt.org) est utilisé pour mettre en place le chiffrement de bout en bout avec un destinataire utilisant Delta Chat ou une autre application utilisant Autocrypt. 
  Autocrypt utilise un sous-ensemble restreint de la fonctionnalité OpenPGP. 

- Delta Chat implémente [les protocoles setup-contact et verified-group du projet countermitm](https://countermitm.readthedocs.io/en/latest/new.html) afin d'assurer la protection contre des attaques de réseaux actives. Ceci va au-delà de la protection opportuniste de base du niveau 1 d'Autocrypt, tout en préservant sa facilité d'utilisation.

### Quelle est la différence entre des groupes vérifiés et des discussions à deux avec des contacts vérifiés ? {#verdiff}

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


## Multi-client {#multiclient}

### Puis-je utiliser Delta Chat sur plusieurs appareils en même temps?

Oui. Delta Chat 1.36 propose une nouvelle fonctionnalité expérimentale pour utiliser le même compte sur plusieurs appareils.

- Sur le premier appareil, allez dans **Paramètres → Ajouter un deuxième appareil**, déverrouillez l'écran si nécessaire, et patientez un peu jusqu'à ce qu'un code QR s'affiche.

- Sur le deuxième appareil, [installez Delta Chat](https://get.delta.chat).

- Sur le deuxième appareil, ouvrez Delta Chat, sélectionnez **Ajouter comme deuxième appareil**, et scannez le code QR du premier appareil.

- Le transfert devrait commencer quelques secondes après et, pendant l'opération, les deux appareils affichent l'**état d'avancement**.
  Patientez jusqu'à ce que le transfert soit terminé sur les deux appareils.

Contrairement à de nombreuses autres messageries, une fois le transfert terminé, les deux **appareils sont complètement indépendants**.
L'un n'a pas besoin de l'autre pour pouvoir fonctionner.


### Dépannage

- Vérifier à nouveau que les deux appareils sont sur **le même réseau ou le même Wi-Fi**.

- Il se peut que votre système dispose d'un "pare-feu personnalisé",
  source bien connue de dysfonctionnements (en particulier sur Windows).
  **Désactivez le pare-feu personnalisé** sur chaque appareil pour Delta Chat et réessayez.

- Assurez-vous de disposer d'un **espace de stockage suffisant** sur l'appareil de destination.

- Une fois que le transfert a commencé, assurez-vous que les appareils **restent actifs** et ne se mettent pas en veille.
  Ne quittez pas Delta Chat !
  (Nous faisons de notre mieux pour que l'application fonctionne en arrière-plan, mais les [systèmes ont une fâcheuse tendance à tuer les applis](https://dontkillmyapp.com).)

- Delta Chat est **déjà connecté** sur l'appareil de destination.
  Vous pouvez utiliser plusieurs comptes sur tous vos appareils : [ajoutez un nouveau compte](#multiple-accounts).

- Si les problèmes persistent, ou si vous **ne pouvez pas scanner de code QR**,  essayez la méthode de **transfert manuel** décrite ci-dessous.


### Transfert manuel

Recourez à cette méthode uniquement si les instructions ci-dessus pour "Ajouter un deuxième appareil" ont échoué.

- Sur le premier appareil, allez dans “Paramètres -> Discussions et fichiers multimédia -> Exporter une sauvegarde". Entrez votre PIN, schéma ou mot de passe de déverrouillage, puis cliquez sur "Commencer la sauvegarde" pour enregistrer le fichier de sauvegarde sur votre appareil.
Ensuite, transférez-le sur l'autre appareil de la manière que vous préférez.
- Dans la fenêtre de connexion du deuxième appareil, sélectionnez "Importer la sauvegarde" au lieu de vous connecter avec votre compte courriel. L'importation terminée, vos discussions, clés de chiffrement, ainsi que vos fichiers multimédias devraient tous être copiés sur le nouvel appareil.
- **Si vous utilisez iOS ** et rencontrez des difficultés, [ce guide](https://support.delta.chat/t/import-backup-to-ios/1628) vous sera certainement utile.
- Votre compte est synchronisé et vous pouvez utiliser vos deux appareils dès maintenant pour échanger des messages chiffrés de bout en bout avec vos contacts.

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


## Applications privées / webxdc {#webxdc}

Dans Delta Chat, vous pouvez partager des "applications privées" : ce sont des pièces jointes avec une extension de fichier `.xdc`. Elles possèdent des fonctionnalités très variées et peuvent faire de Delta Chat une messagerie vraiment extensible. En jargon technique, on parle de [webxdc](https://webxdc.org).


### Dans quelle mesure les applications privées sont-elles privées ?

- Les applications privées ne peuvent ni envoyer des données sur internet ni télécharger quoi que ce soit.
- Une application privée peut échanger des données uniquement au sein d'une discussion Delta Chat, ainsi qu'avec les copies sur les différents appareils des autres membres de la discussion. En dehors de cela, l'appli privée est complètement isolée d'internet.
- La confidentialité offerte par une application privée est celle de votre discussion : si vous faites confiance aux personnes avec qui vous discutez, vous pouvez aussi vous fier à l'application privée.
- Cela signifie aussi qu'ouvrir des applications privées dans des discussions où se trouvent des membres à qui vous ne faites pas confiance peut représenter un risque en matière de confidentialité. En fait, c'est la même situation qu'avec les courriels : vous ouvrez uniquement les pièces jointes envoyées par une adresse que vous connaissez et pas celles envoyées par un émetteur malveillant.


### Où puis-je me procurer des applications privées ?

- De manière générale, il n'existe aucun magasin d'applications présélectionnées et Delta Chat n'est pas responsable des applications privées ou de leur contenu. Tout le monde peut partager des applications privées avec n'importe qui, sans restrictions.
- Vous trouverez des exemples d'applications sur [webxdc.org](https://webxdc.org).
- Beaucoup de gens développent leurs propres applications privées et les postent ensuite sur [le forum Delta Chat](https://support.delta.chat/c/webxdc/20).


### Comment créer mes propres applications privées ?

- Les applications privées sont simplement des fichiers zip contenant du code html, css, et javascript.
- Pour débuter, vous pouvez vous baser sur le [modèle d'application Hello World](https://github.com/webxdc/hello).
- Tout ce que vous devez savoir d'autre se trouve dans la [documentation en anglais](https://docs.webxdc.org/).
- Si vous avez des questions, vous pouvez les poser à des personnes plus expérimentées sur le [Forum Delta Chat](https://support.delta.chat/c/webxdc/20).


## Fonctionnalités expérimentales

Nous apprécions tout particulièrement les retours sur ces fonctionnalités. Vous voulez donner votre avis ? Rejoignez-nous sur le [Forum](https://support.delta.chat) pour contribuer. (Vous aimez faire des expériences ? Inscrivez-vous en cliquant sur "Sign up -> with Delta Chat" !)

### Comment utiliser les appels audio/vidéo avec Delta Chat ?

- Pour activer les appels audio/vidéo, allez dans la section "Fonctionnalités expérimentales" des paramètres avancés et choisissez une "instance de discussion vidéo". 
- Quand vous invitez d'autres personnes dans une discussion vidéo, elle s'ouvre automatiquement dans votre application/navigateur et les destinataires reçoivent un courriel contenant un lien vers votre salon Jitsi/BBB. De cette manière, même les personnes n'utilisant pas Delta Chat peuvent participer.
- Veuillez noter qu'il n'y a pas de sonnerie pour les destinataires, qui ne sont donc pas dérangé⋅e⋅s par votre invitation à une discussion vidéo.
- Vous pouvez utiliser n'importe quel service de discussion vidéo permettant de rejoindre un salon par un lien. Il vous suffit de renseigner le lien dans vos paramètres.
- Par exemple, pour utiliser l'instance Jitsi Meet principale, vous pouvez insérer :`https://meet.jit.si/$ROOM`. La variable`$ROOM`est une valeur aléatoire pour que vous puissiez rejoindre un nouveau salon Jitsi choisi au hasard à chaque nouvel appel.


### Qu'est qu'un groupe vérifié ? Pourquoi est-ce une fonctionnalité expérimentale ?

- Un groupe vérifié est une discussion qui garantit une sécurité contre un attaquant actif. Tous les messages d'une discussion vérifiée sont chiffrés de bout en bout (e2ee), et les membres peuvent joindre en scannant un code barre à deux dimensions (QR code) d'invitation. Tous les membres sont alors connectés l'un à l'autre à travers une chaîne d'invitation, qui garanti une cohérence cryptographique contre des attaques réseaux actives ou des fournisseurs. 
Consultez [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) pour en savoir plus sur la R&D derrière cette fonctionnalité.

- En octobre 2022, nous avons décidé que la fonctionnalité "groupes vérifiés" restait expérimentale, bien qu'elle soit améliorée en permanence et que de nombreux bugs aient été réparés depuis sa mise en place en 2018. En effet, certaines erreurs persistent, en particulier avec les groupes très larges, et les messages deviennent parfois illisibles.


### Que sont les listes de diffusion et comment les utiliser ?

- Une liste de diffusion vous permet d'envoyer un message à plusieurs destinataires en même temps sans qu'ils puissent se voir mutuellement. Vous recevez leurs réponses respectives dans les discussions privées que vous avez avec chacun d'eux.
- Concrètement, c'est un courriel avec plusieurs destinataires en copie cachée.
- Vous pouvez activer cette option dans la section "Fonctionnalités expérimentales" des paramètres avancés. Vous pourrez ensuite créer une liste de diffusion à partir du bouton "Nouvelle discussion".
- Si vous utilisez plusieurs appareils, veuillez noter qu'il n'est pas possible, pour l'instant, de synchroniser les listes de diffusion.
- Les messages envoyés à des listes de diffusion ne sont pas chiffrés, parce que le chiffrement empêche l'anonymat puisque tous les destinataires peuvent voir qui d'autre a reçu le message.
  (Mais envoyer des courriels individuels à tout le monde serait encore pire pour la consommation du réseau et à cause des limites d'envoi).


### Comment puis-je partager ma géolocalisation avec mes contacts ?

- Vous pouvez activer l'envoi de la géolocalisation à la demande dans la section "Fonctionnalités expérimentales" des paramètres avancés.
- Ensuite, si vous voulez partager votre position dans une discussion, allez dans "Ajouter une pièce jointe" et sélectionnez "Position". Vous pouvez alors choisir la durée pendant laquelle vous voulez partager votre position avec les membres de la discussion, de 5 minutes à 6 heures.
- Quand vous vous déplacez, vos contacts voient votre position sur une carte dans la discussion.
- Vous devez activer cette fonctionnalité dans les paramètres avancés pour pouvoir voir la carte et la position de vos contacts.
- Cette fonctionnalité ne partage votre position avec personne d'autre que les membres de la discussion. *Cependant,* pour que la carte s'affiche, les tuiles de carte sont téléchargées depuis mapbox.com, donc si vous *visualisez* la cart, une requête pour afficher une zone spécifique est envoyée à mapbox.com. Si vous considérez cela comme une faille de sécurité, cette fonctionnalité n'est malheureusement pas faite pour vous. Nous nous efforçons de trouver une alternative décentralisée à Mapbox.
- Sur le bureau, votre OS ne peut généralement pas déterminer votre position. À la place, vous pouvez faire un clic droit sur la carte pour décrire votre position, qui sera ensuite envoyée dans la discussion en tant que message tout en apparaissant sur la carte.


### Qu'est-ce que le chiffrement expérimental de base de données protège réellement ?

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


### Comment puis-je changer mon compte pour une adresse courriel différente ?

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

### Est-ce que Delta Chat fonctionne avec _mon_ fournisseur de courriel ? 

- Il y a de bonnes chances que oui :)
Cependant, il faut activer des options spéciales pour que cela fonctionne correctement avec certains fournisseurs... Voir [la liste des fournisseurs](https://providers.delta.chat).


### Je veux administrer mon propre serveur courriel pour Delta Chat : que me conseillez-vous ?

- La plupart du temps, tous les serveurs courriel fonctionnent très bien. Mais nous conseillons un mélange de mailcow et mailadm, ainsi que nous le décrivons [sur notre blog](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- Vous trouverez un [guide d'installation sur notre site internet](serverguide).


### Si Delta Chat se base sur le courrier électronique, est-ce vraiment une messagerie _instantanée_? 

- L'envoi et la réception de messages prennent généralement quelques secondes. Il arrive parfois que cela prenne plus de temps, mais c'est aussi le cas avec n'importe quelle autre messagerie.
- La messagerie instantanée est rapide quand les deux parties utilisent activement l'application. Elle peut devenir plus lente si l'application fonctionne en arrière-plan.
- La réception de messages peut alors prendre plusieurs minutes, car Android et iOS empêchent souvent Delta Chat de fonctionner en arrière-plan et ne le réveillent qu'occasionnellement. Ce délai artificiel est généralement pire sur iOS que sur Android.
- Cependant, le fait qu'Android et iOS tuent les applications fonctionnant en arrière-plan constitue un problème pour de nombreuses applications reconnues.
Pour plus d'informations, voir [dontkillmyapp.com](https://dontkillmyapp.com/).


### Delta Chat est-il compatible avec Protonmail / Tutanota / Criptext ?

- Oui et non.
- Non, vous ne pouvez pas utiliser votre compte Protonmail, Tutanota ou Cryptext avec Delta Chat, car ils ne prennent pas en charge la réception des courriels en IMAP.
- Vous pouvez toujours utiliser Delta Chat pour envoyer des messages à des personnes utilisant Protonmail, Tutanota, or Criptext. Toutefois, ces messages ne seront pas chiffrés de bout en bout, car le chiffrement offert par ces fournisseurs n'est pas compatible avec [Autocrypt](https://autocrypt.org/), le protocole utilisé par Delta Chat.
- Delta Chat peut chiffrer des courriels de bout en bout avec tout fournisseur de courriel utilisant
  [toute application de courriel compatible avec Autocrypt](https://autocrypt.org/dev-status.html).


### Les détails techniques m'intéressent. Pouvez-vous m'en dire plus ?

- Consultez les [standards utilisés dans Delta Chat]({% include standards-url %}).

### Was Delta Chat independently audited for security vulnerabilities?

The Delta Chat project underwent four independent security audits in the last years:

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
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

- Beginning 2023, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023. 
  See [here for the full background story on E2E security in the web](https://delta.chat/en/2023-05-22-webxdc-security). 


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

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Beginning 2023 we got accepted in the Next Generation Internet (NGI)
  Entrust program for our "Private Decentralized Apps" proposals. 
  Exact amount is to be determined (around 100K EUR). 
  This funding supports further developments of [webxdc "apps shared in a chat"](https://webxdc.org). 

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

[Faire un don](donate){: .cta-button}

- Enfin, en dernier mais largement pas des moindres, plusieurs passionné⋅e⋅s et expert⋅e⋅s ont contribué, et contribuent toujours, bénévolement au développement de Delta Chat sans gagner d'argent, ou seulement de petites sommes. Sans leur énergie, Delta Chat n'en serait pas là aujourd'hui... et de très loin.

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Please see [Delta Chat Contribution channels](contribute)
for both monetary and and other contribution possibilities.  
