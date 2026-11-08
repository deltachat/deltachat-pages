---
title: FAQ
lang: fr
render_toc: true
header: Foire aux questions
---

## Qu'est-ce que Delta Chat ?

Delta Chat est une application de messagerie fiable, décentralisée et sécurisée, disponible pour smartphones et ordinateurs de bureau.

- Création à la volée de **profils de discussion privés** grâce à des [relais chatmail](https://chatmail.at/relays) sécurisés et interopérables qui permettent des échanges instantanés et des notifications Push pour les appareils iOS et Android.

- Fonctionne en [multi-profils](#multiple-accounts) et [multi-appareils](#multiclient) sur toutes les plateformes et quelle que soit [l'application chatmail](https://chatmail.at/clients) utilisée.

- [Applications](#webxdc) interactives permettant de jouer et collaborer au sein des discussions.

- [Chiffrement de bout-en-bout audité](#security-audits) protégé contre les attaques réseaux et de serveurs.

- Logiciel libre et gratuit, autant côté serveur que côté application, développé autour des [standards d'internet]({% include standards-url %}).

### Comment trouver des personnes avec qui discuter ? {#howtoe2ee}

Delta Chat est une application de messagerie privée. Il n'y a pas de mécanisme de découverte publique des utilisateurs et utilisatrices. _Vous_ décidez avec qui vous échangez dans Delta Chat.

- En **présence physique** de vos amis ou de membres de votre famille, appuyez sur l'icône **QR code** <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> sur l'écran principal. Demandez à votre contact de **scanner** le QR code avec leur application Delta Chat.

- Pour la mise en place d'un échange **à distance**, cliquez sur l'icône **QR code** sur l'écran principal, puis sur le bouton "Lien", puis sur "Copier" ou "Partager" et envoyez le lien d'invitation via une autre messagerie privée.

Il suffit ensuite d'attendre que la connexion soit établie.

- Si les deux contacts sont en ligne, ils verront rapidement apparaître une nouvelle discussion et pourront tout de suite commencer une discussion sécurisée.

- Si l'un des contacts n'est pas en ligne ou a des problèmes de réseau, la possibilité de démarrer la discussion aura lieu dès que la connectivité sera rétablie.

Félicitations !
Vous utiliserez désormais le [chiffrement de bout-en-bout](#e2ee) avec ce contact.
Si vous vous ajoutez à des discussions de [groupe](#groups) le chiffrement de bout-en-bout sera établi entre tous les membres de la discussion.

### Pourquoi une discussion est marquée comme "invitation" ?

Delta Chat étant une messagerie privée, seules les personnes avec qui vous [partagez votre QR code ou lien d'invitation](#howtoe2ee) peuvent vous écrire.

Vos contacts peuvent cependant partager votre profil avec d'autres personnes, ce qui apparaît alors comme une <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">invitation</b>.

- Vous devez d'abord **accepter** pour pouvoir répondre au message.

- Vous pouvez également choisir de **supprimer** l'invitation si vous ne souhaitez pas discuter avec cet inconnu maintenant.

- Si vous supprimez une invitation, les futurs messages de ce contact apparaîtront
de nouveau comme des invitations, de sorte que vous pouvez changer d'avis par la suite. Si vous ne voulez vraiment pas
recevoir de messages de cette personne, nous vous conseillons de la **bloquer**.

### Comment mettre deux personnes en relation entre elles ?

Joignez le premier contact à votre discussion avec le second en utilisant <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Bouton pièce jointe → Contact**.
Profitez-en pour ajouter un message de présentation.

Le deuxième contact recevra une **carte** qu'il pourra cliquer pour commencer une discussion avec le premier.

### À quoi correspondent les profils ? Comment est-ce que je peux passer de l'un à l'autre ? {#multiple-accounts}

Un profil est **un nom, une photo** et quelques informations supplémentaires pour chiffrer des messages.
Un profil n'est présent que sur votre appareil/vos appareils et utilise le serveur seulement pour relayer les messages vers vos contacts.

Lors de la première installation de Delta Chat un premier profil est créé.

Par la suite vous pourrez cliquer sur votre image de profil en haut à gauche de l'écran principal pour **Ajouter un profil** ou **Changer de profil**.

Vous devriez utiliser des profils différents pour vos activités familiales, professionnelles ou politiques.

Vous pourriez aussi être intéressé par apprendre [comment utiliser le même profil sur plusieurs appareils](#multiclient).

### Qui peut voir ma photo de profil ?

Dans les paramètres vous pouvez ajouter une photo de profil. Si vous écrivez à vos contacts ou que vous les ajoutez via le QR code, ils la verront automatiquement comme votre photo de profil.

Pour des raisons de confidentialité, personne ne peut voir votre photo de profil sans que vous ayez d'abord entamé une discussion.

### Est-il possible de définir une Bio/un Statut avec Delta Chat ? {#signature}

Oui, vous pouvez le faire dans **Paramètres → Profil → Signature**.
À partir du moment ou vous échangez avec quelqu'un, cette personne pourra voir votre Signature en regardant les détails de votre profil.

### Épingler, mettre en sourdine et archiver une discussion {#pin-chats}

Ces options vous permettent d'organiser et trier vos discussions :

- Les **discussions épinglées** restent en haut de votre liste de discussions. Vous pouvez ainsi retrouver plus rapidement vos discussions favorites ou éviter d'oublier des messages importants.

- Utilisez la **sourdine** pour les discussions dont vous ne voulez pas recevoir les notifications. Les discussions en sourdine figurent toujours dans votre liste et peuvent aussi être les épinglées.

- **Archivez les discussions** si vous ne voulez plus les voir apparaître dans votre liste de discussions.  Les discussions archivées restent accessibles au-dessus de la liste de discussions ou via la recherche.

- Lorsqu'un nouveau message est envoyé sur une discussion que vous avez archivée, et que vous n'avez pas mise en sourdine, la discussion **sort des archives** et reprend sa place dans votre liste de discussions.
  **Les discussions en sourdine restent archivées** tant que vous ne les désarchivez pas manuellement.

Pour archiver ou épingler une discussion, faites un appui long sur la discussion concernée (Android), ouvrez le menu de la conversation (Android/application de bureau), ou balayez vers la gauche (iOS) ;
pour mettre une discussion en sourdine, ouvrez le menu de la conversation (Android/application de bureau) ou le profil de la discussion (iOS).

### Comment fonctionnent les "Messages enregistrés" ? {#save}

**Messages enregistrés** est une discussion que vous pouvez utiliser pour sauvegarder et retrouver facilement des messages.

- Dans n'importe quelle discussion, touchez <img style="vertical-align:middle; width:1.2em; margin:1px;" src="../assets/help/saved-icon.png" alt="Saved icon"/> ou faites un clic droit sur un message et sélectionnez **Enregistrer**.

- Les messages enregistrés sont identifiés par le symbole <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/> à côté de l'horodatage du message.

- Par la suite vous pourrez retrouver tous ces messages dans la discussion "Messages enregistrés".
En touchant <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/> vous retrouverez le message dans sa discussion d'origine.

- Enfin vous pouvez aussi utiliser la discussion "Messages enregistrés" pour prendre des **notes privées** - ouvrez la discussion, écrivez votre message, ajoutez une photo, un message vocal, etc.

- La discussion "Messages enregistrés" étant synchronisée elle peut être très pratique pour transférer des informations d'un appareil à un autre.

Les messages restent enregistrés même lorsqu'ils sont édités ou supprimés, que ça soit par [l'expéditeur⋅rice](#edit), par [suppression des anciens messages de l'appareil](#delold) ou par [disparition des messages éphémères au sein d'une discussion](#ephemeralmsgs).

### Comment fonctionnent les messages épinglés ? {#pin-messages}

**Épinglez les messages importants** comme une adresse, une heure de rendez-vous ou le règlement d'un groupe,
afin que tout le monde puisse les trouver rapidement.
Contrairement aux [Discussions épinglées](#pin-chats) qui ne servent qu'à organiser _votre_ liste de discussion,
les messages épinglés sont visibles par **tous les membres de discussion **.

- Dans une discussion, appuyez longuement ou faites un clic droit sur un message, puis sélectionnez <img style="vertical-align:middle; height:1.2em; margin:1px" src="../assets/help/pin-icon.png" alt=""/> **Épingler**.
  Pour le désépingler, sélectionnez <img style="vertical-align:middle; height:1.2em; margin:1px" src="../assets/help/unpin-icon.png" alt=""/> **Désépingler** dans le même menu.
  Le fait de désépingler un message s'applique à tous les membres de la discussion, pas seulement à vous.

- Les messages épinglés s'affichent dans une **barre en haut de la discussion**.
  Appuyez sur la barre pour accéder au message épinglé.
  S'il y en a plusieurs, vous pouvez les parcourir les uns après les autres.

- Si vous épinglez une [appli](#webxdc), un bouton **Démarrer** s'affiche,
  ce qui permet à tout le monde d'y accéder facilement, sans avoir à faire défiler la page ni à chercher.

- Il n'y a pas de limite du nombre de messages épinglés ni de durée pendant laquelle ils restent épinglés.

Pour conserver des messages rien que pour vous, utilisez la fonction [Messages enregistrés](#save).

### Que signifie le point vert ?

Vous pourrez parfois voir un **point vert** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/> sur le profil d'un contact.
Cela veut dire que vous avez **récemment vu** le contact dans les 10 dernières minutes, par exemple parce que vous avez échangé avec ce contact, ou que vous avez reçu un accusé de lecture.

Ceci n'est donc pas un indicateur temps réel de présence en ligne et vos contacts ne pourront donc pas toujours voir si vous êtes en ligne ou non.

### Que signifient les coches affichées à côté des messages sortants ?

- **Une marque** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/> veut dire que le message a été envoyé correctement au [relai](#relays).

- **Deux marques** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/> indiquent que votre contact a lu le message.

Au sein des [groupes](#groups) la seconde marque veut dire qu'au moins un membre du groupe a pu lire le message.

La seconde marque ne peut s'afficher que si vous et l'un des destinataires ayant lu le message avez activé **Paramètres → Discussions → Accusés de lecture**.

### Corriger des fautes et supprimer des messages après les avoir envoyés {#edit}

- Vous pouvez éditer le texte de votre message après l'avoir envoyé. Pour cela, appuyer longtemps ou faire clic droit sur le message et choisir **Modifier** ou <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>.

- Si vous avez envoyé un message par erreur vous pouvez le supprimer depuis le même menu en choisissant **Supprimer le message** puis **Supprimer pour moi** ou **Supprimer pour tout le monde**.

Les messages modifiés seront indiqués par le mot "Modifié" à côté de l'horodatage du message, tandis que les messages supprimés le sont sans notification, ni dans la discussion, ni sur l'appareil, et peuvent l'être sans limite dans le temps.

Remarque : le message original peut toutefois encore exister s'il a déjà été transféré, enregistré, ou si l'un des membres de la discussion en a fait une copie ou une capture d'écran.

### Comment est gérée la qualité des médias envoyés ? {#mediaquality}

Des images, vidéos, fichiers, messages vocaux, etc, peuvent être envoyés avec les boutons <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Pièce jointe** ou <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Message vocal**.

- Par défaut le niveau de compression choisi permet un **envoi rapide et efficace** des messages en respectant les limites de données et de stockage de tout le monde. C'est un réglage idéal pour des échanges standards.

- Dans les régions avec une connectivité limitée il est possible de choisir une compression plus forte dans **Paramètres → Discussions → Qualité du média en sortie**.

- Si vous souhaitez absolument transmettre un fichier en **qualité originale**, utilisez <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Pièce jointe → Fichier** dans la discussion. Pensez à utiliser cette fonctionnalité avec parcimonie pour limiter l'utilisation des données par toutes les personnes dans la discussion.

### Comment fonctionnent les messages éphémères ? {#ephemeralmsgs}

Vous pouvez activer les "Messages éphémères" dans les paramètres d'une discussion, dans le menu en haut à droite, en choisissant une durée prédéfinie entre 5 min et 1 an.

Tant que le paramètre reste activé, les applications de chacun des membres se chargent de supprimer les messages qui dépassent la durée définie. La durée est comptabilisée à partir du moment où le message est vu pour la première fois, et le message est supprimé au sein de l'application et sur le serveur.

Remarque : ne faites confiance au réglage "Messages éphémères" que si vous faites confiance aux membres de la discussion. Des membres mal intentionné⋅es peuvent très bien prendre des photos, copier, sauvegarder, transférer un message avant qu'il ne soit supprimé.

Enfin, si l'un⋅e des membres d'une discussion désinstalle l'application Delta Chat, les messages (chiffrés, pour rappel) peuvent rester plus longtemps sur le serveur avant d'être supprimés.

### Que se passe-t-il si j'active l'option "Supprimer les anciens messages de l'appareil" ? {#delold}

Vous pouvez choisir de supprimer automatiquement les anciens messages pour libérer de l'espace de stockage sur votre appareil.

Pour activer cette option, ouvrez les paramètres des "Discussions et fichiers multimédias" et cliquez sur "Supprimer les anciens messages de l'appareil". Vous pouvez définir le délai après lequel *tous* les messages seront supprimés de votre appareil, parmi plusieurs choix allant de "Immédiatement" à "Après 1 année".

### Comment puis-je supprimer un profil de discussion ? {#remove-account}

Si vous utilisez plus d'un profil dans l'application, vous pouvez supprimer un profil spécifique via le menu (en haut sur Android et iOS), ou dans la barre latérale (sur l'application de bureau) permettant de passer d'un profil à un autre. Les profils ne sont toujours supprimés que sur l'appareil en question. Les profils continueront donc d'exister sur les autres appareils le cas échéant.

Si vous utilisez un unique profil par défaut, vous pouvez simplement désinstaller l'application.
Cela déclenchera quand même automatiquement la suppression de toutes les données associées à l'adresse sur le serveur chatmail.
Pour plus d'informations, veuillez vous référer à la page de votre [fournisseur de serveur chatmail](https://chatmail.at/relays).

## Groupes {#groups}

Les groupes permettent à plusieurs personnes d'avoir une discussion. Chaque membre du groupe à les **mêmes droits**.

Chaque membre du groupe peut changer le nom du groupe ou l'avatar, [ajouter ou supprimer des membres](#addmembers), activer/désactiver [les messages éphémères](#ephemeralmsgs), et [supprimer leurs propres messages](#edit) sur tous les appareils des membres de la discussion.

Puisque tous les membres d'une discussion ont les mêmes droits, les groupes fonctionnent mieux avec des **personnes de confiance et la famille**.

### Création d'un groupe

- Sélectionnez **Nouvelle discussion** puis **Nouveau groupe** dans le menu à trois points situé en haut à droite de la fenêtre ou son équivalent sous Android et iOS.

- Sur l'écran suivant, sélectionnez **Ajouter des participants** et choisissez un **Nom du groupe**. Vous pouvez aussi choisir une **image de groupe**.

- Lorsque vous enverrez le **premier message** dans le groupe, tous les membres en seront informés et pourront répondre. Le groupe est invisible aux autres membres si vous n'écrivez pas de premier message.

### Ajouter et supprimer des membres {#addmembers}

Tous les membres d'un groupe disposent des **mêmes droits**.
C'est pourquoi chacun peut supprimer des membres ou en ajouter de nouveaux.

- Pour **ajouter ou supprimer des mambres**, cliquez sur le nom du groupe dans la discussion et sélectionnez le membre à ajouter ou supprimer.

- Si le membre ne figure pas encore dans votre liste de contacts, mais qu’il se trouve **face à vous**,
  depuis le même écran, affichez un **code QR**.  
  Demandez à votre partenaire de **scanner** le QR code avec son application Delta Chat en appuyant sur
 <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> sur l’écran principal.

- Pour ajouter un membre **à distance**,
  cliquez sur "Copier" ou "Partager" et envoyez le **lien d'invitation**
  au nouveau membre via un autre message privé.

Le QR code et le lien d'invitation peuvent être utilisés pour ajouter plusieurs membres.
Toutefois, les groupes étant [destinés à des personnes de confiance](#groups), évitez de les partager publiquement.

### J'ai quitté un groupe par accident.

Comme vous n'êtes plus membre du groupe, vous ne pouvez pas vous y ajouter vous-même. 
Contactez n'importe quel autre membre de ce groupe dans une discussion directe pour lui demander de vous y ré-inviter.

### Je ne souhaite plus recevoir les messages d'un groupe.

- Supprimez-vous de la liste des membres ou supprimez la discussion entière. 
Si souhaitez rejoindre le groupe plus tard, demandez à un autre membre du groupe de vous ré-inviter.

Vous pouvez également mettre un groupe en "Sourdine" : vous recevrez tous les messages et pourrez toujours écrire, mais n'aurez plus les notifications des nouveaux messages.

### Cloner un groupe

Vous pouvez dupliquer un groupe pour démarrer une conversation séparée
ou pour exclure des membres sans qu'ils puissent s'en apercevoir.

- Ouvrez le profil du groupe et cliquez sur **Cloner la discussion**.

- Définissez un nouveau nom, choisissez un avatar et modifiez la liste des membres si nécessaire.

Le nouveau groupe est **totalement indépendant** de l'original,
qui continuer de fonctionner comme auparavant.

### Combien de membres peut contenir un groupe ?

Il n'y a pas de limite technique stricte,
mais il n'est pas recommandé de dépasser 150.

As groups get larger, they can become socially unstable and may need a hierarchy -
where Delta Chat is a private messenger for chatting with [equal rights](#groups).
See [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number) for more insights.

## Canaux {#channels}

Un canal est un outil qui permet à une personne de diffuser des messages à de multiples destinataires.

### S'abonner à un canal

- Scannez le <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> **QR code**
  ou cliquez sur le **lien d’invitation** que vous avez obtenu de la part du propriétaire du canal.

C'est tout !
Vous recevrez quelques uns des derniers messages du canal
et, à partir de ce moment, tous les nouveaux messages du canal.

**Ne vous inquiétez pas** si cela ne se fait pas tout de suite.
Dès que le propriétaire du canal sera en ligne, votre demande d'accès sera traitée.

Comme l'ensemble de Delta Chat, les canaux sont privés et décentralisés,
il n'y a pas de découverte publique.

Les autres abonnés du canal ne verront pas que vous vous êtes abonné et ne pourront pas vous envoyer de messages.
Le propriétaire du canal, en revanche, pourra vous envoyer des messages.
Il verra également que vous avez lu un message, sauf si vous avez désactivé les confirmations de lecture.

Si vous ne souhaitez pas partager votre profil principal,
vous pouvez également créer une [profil dédié](#multiple-accounts) pour rejoindre un canal.

### Créer un canal

- Appuyez sur **Nouvelle discussion**, puis sélectionnez **Nouveau canal**.

- Choisissez un **nom**, éventuellement choisissez une **image** et une **description**, et cliquez sur le bouton **Créer**.

- Vous pouvez à présent envoyer et gérer des messages, comme d'habitude.

- Depuis le profil du canal, **partagez le QR code ou le lien d'invitation avec d'autres personnes**.

Les abonnés recevront vos messages,
mais ils ne pourront pas envoyer de messages dans votre canal.
Lorsqu'ils s'abonneront, ils recevront **quelques-uns des derniers messages de l'historique de la chaîne**.

Vous pouvez voir le **nombre de vues** à côté de chaque message.
Notez que ce chiffre ne prend en compte que les abonnés ayant activé les accusés de lecture ;
le nombre réel de vues peut donc être plus élevé.

### Combien d'abonnés un canal peut-il avoir ?

Les canaux sont destinées à un public bien plus large que les [groupes](#groups).

La limite pratique dépend des [relais](#relays) utilisés,
il n'existe donc pas de chiffre fixe unique valable dans tous les cas.

Pour les canaux de très grande taille comptant plusieurs dizaines de milliers d'abonnés,
nous vous recommandons d'utiliser un [profil dédié](#multiple-accounts) pour le canal
et de vérifier si le relai est adapté.

Mais n'hésitez pas trop: Delta Chat est conçu pour être compatible avec n'importe quel relai,
vous pouvez donc changer facilement de relai à tout moment -
vos abonnés actuels ne s'en rendront même pas compte.
Dans ce cas, il vous suffira de mettre à jour le lien d'invitation que vous partagez avec les nouveaux abonnés.

## Appels {#calls}

Delta Chat prend en charge les **appels audio** et les **appels vidéo** en tête-à-tête.

Les appels fonctionnent sur le client de bureau, Ubuntu Touch, iOS et Android 8 et versions supérieures.

### Passer un appel

- Dans une discussion entre deux personnes, cliquez sur 📞 **l'icône  appel**.

- Cela ouvre un menu
  depuis lequel vous pouvez choisir de passer **Appel audio** ou un **Appel vidéo**.

### Accepter ou rejeter un appel

- Quand quelqu'un vous appelle,
  Delta Chat affiche un **écran appel entrant** ou une notification.

- Cliquez sur **Accepter** pour répondre
  ou **Refuser** pour rejeter l'appel.

### Durant un appel

- Vous pouvez **couper le son** de votre micro.

- Vous pouvez **activer ou désactiver votre caméra**.

- Sur votre téléphone, vous pouvez **basculer entre la caméra avant et la caméra arrière**.

Selon l'appareil utilisé, vous pouvez aussi choisir la sortie audio ou utiliser le mode « image dans l'image ».
Sur un ordinateur de bureau, l'appel s'affiche dans une fenêtre dédiée
et vous pouvez continuer à utiliser la fenêtre principale de Delta Chat comme d'habitude.

### Appels manqués et notifications

- Si vous ne répondez pas, si vous n'entendez pas la sonnerie ou si vous n'avez pas votre appareil à portée de main,
  l'appel apparaît comme un **appel manqué**.

- **Seuls vos contacts acceptés** peuvent faire sonner votre appareil.
  Les demandes de contact s'afficheront comme d'habitude, mais ne feront pas sonner l'appareil.

- Dans **Paramètres → Notifications → Appels**,
  vous pouvez complètement désactiver l'écran spécial d'appel entrant.
  Si vous faites cela, vous ne serez dérangé par aucune notification de sonnerie.
  Vous pourrez toujours répondre à l'appel en cliquant sur l'info-bulle d'appel entrant dans la discussion.

## Applis de discussion {#webxdc}

Vous pouvez envoyer des applications dans une discussion: jeux, éditeurs, sondages et autres outils.
Cela fait de Delta Chat une messagerie aux fonctionnalités réellement étendues.

### Où puis-je trouver des applis de discussion ?

- Dans une discussion, utilisez le bouton <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Pièce jointe → Appli**

- Vous pouvez aussi [créer votre propre appli](#create-xdc) et l'envoyer en utilisant le bouton <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Pièce jointe → Fichier**

### En quoi les applis de discussion sont-elles privées ?

- Les applis de discussion ne peuvent pas envoyer de données vers Internet ou télécharger quoi que ce soit.

- Une appli de discussion ne peut échanger des données qu'au sein d'une discussion, ainsi que ses
  copies stockées sur les appareils de vos partenaires de discussion. En dehors de cela, c'est totalement
  isolé d'Internet.

- La confidentialité qu'offre une appli de discussion est du même niveau que la discussion – tant que vous
  faites confiance aux personnes avec lesquelles vous échangez, vous pouvez également faire confiance à l'appli de discussion.

- Ce qui veut aussi dire: comme pour les liens web, n'ouvrez pas les applis venant de contacts dans lesquels vous n'avez pas confiance.

### Comment je peux créer mes propres applis de discussion ? {#create-xdc}

- Les applis de discussion sont des fichiers ZIP portant l'extension `.xdc` et contenant du code HTML, CSS et JavaScript.

- Vous pouvez consulter [l'exemple d'application Hello World](https://github.com/webxdc/hello)
  pour commencer.

- Tout ce que vous devez savoir de plus se trouve dans la
  [documentation Webxdc](https://webxdc.org/docs).

- Si vous avez des questions, vous pouvez les poser à des personnes expérimentées
  sur le [forum](https://forum.delta.chat/c/webxdc/20).

## Distribution immédiate des messages et notifications Push {#instant-delivery}

### Qu'est-ce que les notifications Push ? Comment puis-je bénéficier de la distribution immédiate des messages ?

Les notifications Push sont envoyées par les "services Push" d'Apple et de Google vers l'appareil d'un utilisateur
afin que l'application Delta Chat inactive puisse récupérer des messages en arrière-plan
et afficher des notifications sur le téléphone de l'utilisateur si nécessaire.

Les notifications Push fonctionnent avec tous les serveurs [chatmail](https://delta.chat/chatmail) sur:

- Les appareils iOS, en s'intégrant avec les services Apple Push.

- Les appareils Android, en s'intégrant avec le service Google FCM Push,
  y compris sur les appareils qui utilisent [microG](https://microg.org)
  à la place de code Google propriétaire sur le téléphone.

### Est-ce que les notifications Push  sont activées sur les appareils iOS ? Y a-t-il une alternative ?

Oui, Delta Chat utilise automatiquement les notifications Push pour les profils [chatmail](https://delta.chat/chatmail).
Et non, il n'existe aucune alternative sur les téléphones Apple pour garantir la distribution immédiate des messages,
car les appareils Apple n'autorisent pas Delta Chat à récupérer des données en arrière-plan.
Les notifications Push sont automatiquement activées pour les utilisateurs sous iOS car
[le système de notifications Push de confidentialité Delta Chat qui préserve la confidentialité](#privacy-notifications)
ne divulgue pas à Apple des données dont elle ne dispose pas déjà.

### Est-ce que les notifications Push sont activées / requises sur les appareils Android ? {#android-push}

Si un "service Push" est disponible, Delta Chat active les notifications Push
afin de permettre la distribution immédiate des messages pour tous les utilisateurs chatmail.

Dans les paramètres "Notifications" de Delta Chat pour "Distribution immédiate"
vous pouvez changer les paramètres suivants qui s'appliquent à tous les profils de discussion:

- Utiliser la connexion en arrière-plan : si vous n'utilisez pas de service Push,
  vous pouvez désactiver les "optimisations de batterie" pour Delta Chat,
  ce qui lui permettra de récupérer les messages en arrière-plan.
  Cependant, cela peut entraîner des délais allant de quelques minutes à plusieurs heures.
  Certains fabricants d’appareils Android restreignent même complètement l’accès aux applications
  (voir [dontkillmyapp.com](https://dontkillmyapp.com))
  et il se peut que Delta Chat n’affiche pas les messages entrants
  tant que vous n’avez pas rouvert manuellement l’application.

- Forcer la connexion en arrière-plan: il s'agit de l'option de secours
  si les options précédentes ne sont pas disponible ou ne permettent pas une "distribution immédiate".
  Son activation entraîne l'affichage d'une notification permanente sur votre téléphone,
  qui peut parfois être "réduite" sur les téléphones Android récents.

Les deux options "Connexion en arrière-plan" sont efficaces d'un point de vue énergétique et
vous pouvez les utiliser sans risques si vous constatez que les messages arrivent après un long délais.

### Quel est le niveau de confidentialité des notifications Push de Delta Chat? {#privacy-notifications}

Le service de notifications Push Delta Chat empêche toute fuite d'informations confidentielles.
Il ne divulgue aucune donnée de profil, aucune adresse IP ni aucun contenu de message (pas même chiffré)
à aucun système intervenant dans la distribution des notifications Push.

Voici comment Delta Chat effectue la distribution des notifications Push:

- Une application Delta Chat obtient localement un "jeton d'appareil", le chiffre et le conserve
  sur le serveur [chatmail](https://delta.chat/chatmail).

- Lorsque qu'un serveur [chatmail](https://delta.chat/chatmail) reçoit un message pour un utilisateur de Delta Chat
  il transfert le jeton chiffré au proxy central de notification Delta Chat.

- Le proxy central de notification Delta Chat déchiffre le jeton d'appareil
  et le transfert au service Push respectif (Apple, Google, etc),
  sans jamais connaître l'adresse IP ou des données du profil des utilisateurs de Delta Chat.

- Le service central Push (Apple, Google, etc)
  réveille l'application Delta Chat sur votre appareil
  pour qu'elle vérifie, en arrière-plan, si des nouveaux messages sont arrivés.
  Il n'a pas connaissance des données de profil de l'appareil qu'il réveille.
  Le service Push central Apple/Google ne voit jamais aucune données de profil (émetteur ou destinataire)
  et également, ne voit jamais aucun contenu de message (y compris non chiffré).

Le proxy central de notification Delta Chat [est un petit programme entièrement, implémenté en Rust](https://github.com/deltachat/notifiers)
et efface les jetons d'appareil dès qu'Apple, Google, etc les ont traités,
généralement en quelques millisecondes.

Il convient de noter que le jeton de l'appareil est chiffré entre les applications et le proxy de notification,
mais qu'il n'est pas signé.
Le proxy de notification n'a donc jamais accès aux données de profil, aux adresses IP ni
à aucune information d'identité cryptographique associée à l'appareil d'un utilisateur (jeton). 

Compte tenu de cette conception globale de la confidentialité, même la saisie d'un serveur chatmail,
ou la saisie intégrale du proxy central de notification Delta Chat,
ne permettrait pas de révéler des informations privées dont les services Push ne disposent pas déjà.

### Pourquoi Delta Chat s'integre avec les services Push centralisés et propriétaires d'Apple/Google ?

Delta Chat est une application de messagerie décentralisée, libre et open source, offrant le libre choix du serveur,
mais nous souhaitons que les utilisateurs bénéficient d’une "distribution immédiate" fiable des messages,
à l’instar de ce qu’ils connaissent avec les applications WhatsApp, Signal ou Telegram,
sans avoir à répondre dès le départ à des questions qui s’adressent davantage aux utilisateurs experts ou aux développeurs.

Veuillez noter que Delta Chat a un [système de Notification Push minimal et respectueux de la vie privée](#privacy-notifications)
qui permet la "distribution immédiate" des messages pour tous les serveurs chatmail,
y compris un [que vous voudriez installer vous-même sans notre accord](https://delta.chat/chatmail#selfhosted).
Bienvenue dans la puissance du réseau de relais chatmail interopérable :)

## Multi-client {#multiclient}

### Puis-je utiliser Delta Chat sur plusieurs appareils en même temps?

Oui. Vous pouvez utiliser le même profil sur des appareils différents:

- Assurez-vous que les deux appareils se trouvent sur le même réseau Wi-Fi ou le même réseau local

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

- **Les réseaux invités** peuvent empêcher les appareils de communiquer entre eux.
  Si possible, utilisez un réseau autre que le réseau invité.

- Si vous ne parvenez toujours pas à utiliser le même réseau,
  essayez d'activer le **Point d'accès/partage de connexion** sur un des appareils et de vous connectez à ce réseau Wi-Fi depuis l'autre appareil.

- Assurez-vous de disposer d'un **espace de stockage suffisant** sur l'appareil de destination.

- Une fois que le transfert a commencé, assurez-vous que les appareils **restent actifs** et ne se mettent pas en veille.
  Ne quittez pas Delta Chat !
  (Nous faisons de notre mieux pour que l'application fonctionne en arrière-plan, mais les [systèmes ont une fâcheuse tendance à tuer les applis](https://dontkillmyapp.com).)

- Si Delta Chat est **déjà connecté** sur l'appareil de destination.
  Vous pouvez utiliser plusieurs comptes par appareil : [ajoutez un nouveau compte](#multiple-accounts).

- Si les problèmes persistent, ou si vous **ne pouvez pas scanner de code QR**,  essayez la méthode de **transfert manuel** décrite ci-dessous.

### Transfert manuel {#backup}

Recourez à cette méthode uniquement si les instructions ci-dessus pour "Ajouter un deuxième appareil" ont échoué.

- On the old device, go to **Settings → Chats → Export Backup**. Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.

- Sur le nouvel appareil, sélectionnez **J'ai déjà un profil → Rétablir une sauvegarde**.
  Si vous utilisez iOS et rencontrez des difficultés,
  [ce guide](https://forum.delta.chat/t/import-backup-to-ios/1628) pourrait vous aider.

Vous êtes désormais synchronisé et pouvez utiliser vos deux appareils pour envoyer et recevoir des messages chiffrés de bout en bout avec vos interlocuteurs.

### Le lancement d'un client Web Delta Chat est-il prévu ?

- Il n'y a pas de plans immédiats mais quelques idées préliminaires.
- Il y a 2-3 façons d'introduire un client Web Delta Chat, mais toutes représentent
 un travail conséquent. Pour l'instant, nous nous concentrons à sortir des versions stables dans tous les magasins d'applications (Google Play/iOS/Windows/macOS/centre de paquets Linux) en tant qu'applications natives.
- Si vous avez besoin d'un client Web parce que vous n'êtes pas autorisé à installer des logiciels sur l'ordinateur sur lequel vous travaillez, vous pouvez utiliser le Client Portable pour bureaux Windows ou l'AppImage pour Linux. Vous pouvez les trouver sur 
[get.delta.chat](https://get.delta.chat).

## Avancé

### Fonctionnalités expérimentales {#experiments}

Dans **Paramètres → Avancé → Fonctionnalités expérimentales**
vous pouvez essayer des fonctionnalités sur lesquelles nous travaillons encore.

Ces fonctionnalités peuvent être **instables** et sont susceptibles d'être **modifiées ou supprimées**.

Vous trouverez plus d'informations
et pourrez donner votre avis sur le [Forum](https://forum.delta.chat).

### Qu'est ce que sont les relais ? {#relays}

Les relais servent à stocker temporairement les messages au cas où votre appareil serait hors ligne.
Les relais sont des serveurs basiques et peu coûteux,
qui ne stockent aucune donnée utilisateur comme l'état des groupes, votre nom ou votre avatar —
toutes ces informations n'existent que sur votre appareil.
Les relais sont gérés par différents groupes et personnes.
Ils ne sont pas sous le contrôle des développeurs de Delta Chat.

Par défaut, les relais sont **définis automatiquement**,
donc vous n'avez pas besoin de vous en soucier.
Cependant, si vous voulez,
vous pouvez configurer les relais dans **Paramètres → Avancé → Relais**:

- Vous pouvez **supprimer** un relai de la liste (en appuyant longuement dessus)
  et en sélectionnant l'action de suppression. Avant de supprimer votre dernière relai,
  vous devrez d'abord en ajouter un autre.

- Vous pouvez **ajouter** un relai en scannant son QR code ou en collant son lien d'invitation;
  [chatmail.at/relays](https://chatmail.at/relays) liste quelques relais publics connus.
  Si vous avez configuré plusieurs relais, vous recevrez les messages sur chacun d'entre eux.

L'ajout ou la suppression d'un relai informera automatiquement vos partenaires de discussion afin qu'ils commencent ou arrêtent d'utiliser un relai pour discuter avec vous.

### Est-ce que je peux utiliser un courriel classique avec Delta Chat ?

Oui, mais seulement si l'adresse email est utilisée exclusivement par des [clients chatmail ](https://chatmail.at/clients).

Il n'est pas possible de partager l'utilisation d'une adresse email avec des applications non basée sur chatmail ou des clients mail en ligne,
pour les raisons suivantes :

- Les applications non basée sur chatmail ne mettent pas en œuvre le chiffrement de bout en bout automatique des emails,
  tandis que les applications chatmail et les relais appliquent systématiquement le chiffrement de bout en bout ainsi que d'autres standards de sécurité.

- Les applications non basées sur chatmail utilisent les serveurs de mail comme archive de messages sur le long terme,
  tandis que les applications chatmail utilisent les serveurs de mail pour le transfert instantanés éphémères des messages.

- Prendre en compte la grande variété des configurations d'email classique
  demanderait des efforts de développement et de maintenance considérables,
  et compliquerait le fait de rendre les messageries basées sur chatmail plus robustes, fiables et rapides.

### Comment configurer un profil de discussion avec un courriel classique comme relai ? {#classic-email}

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

### Je veux gérer mon propre serveur pour Delta Chat. Que recommandez-vous ?

Toute configuration de serveur mail fonctionnel fera l'affaire, 
sauf si les appareils de vos utilisateurs nécessitent les [notifications push](#instant-delivery) de Google/Apple pour fonctionner correctement.

De manière générale, nous recommandons de [mettre en place un relai chatmail](https://chatmail.at/doc/relay/getting_started.html). 
[Chatmail](https://chatmail.at) est un projet communautaire qui comprend à la fois la mise en place des relais
et le [développement central en Rust](https://github.com/chatmail/core) 
sur lesquels se basent les [clients chatmail](https://chatmail.at/clients), dont le plus connu est Delta Chat. 

### Qu'est-ce que "Envoyer les statistiques aux développeurs de Delta Chat"? {#statssending}

Nous aimerions améliorer Delta Chat grâce à votre aide,
c'est pourquoi Delta Chat pour Android demande si vous voulez
envoyer des statistiques d'utilisation anonymisées.

Vous pouvez les activer dans
**Paramètres → Avancé → Envoyer les statistiques aux développeurs de Delta Chat**.

Quand vous les activez,
des statistiques hebdomadaires seront envoyées à un bot.

Les statistiques qui nous intéressent sont, par exemple:

- Combien de contacts sont ajoutés en scannant un QR code ou en ouvrant un lien d'invitation ?

- Quelle version de Delta Chat est utilisée ?

- Quelles sont les erreurs que rencontrent les utilisateurs ?

Nous ne récolterons _pas_  d'informations personnelles sur vous.

### Les détails techniques m'intéressent. Pouvez-vous m'en dire plus ?

Consultez les [standards utilisés dans Delta Chat]({% include standards-url %}).

## Chiffrement et sécurité {#e2ee}

### Quels standards sont utilisés pour le chiffrement de bout en bout ?

Delta Chat utilise une [partie sécurisée du standard OpenPGP](#openpgp-secure)
pour fournir du chiffrement de bout en bout automatique, en utilisant ces protocoles: 

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  pour échanger les informations de chiffrement par le scan de QR-code ou les "liens d'invitation". 

- [Autocrypt](https://autocrypt.org) est utilisé pour établir
  automatiquement le chiffrement de bout en bout entre les contacts et tous les membres d'une discussion de groupe. 

- [Autocrypt v2](https://autocrypt2.org), qui est prévu pour 2026, amènera un chiffrement avec résistance post-quantique ainsi que la confidentialité persistante ("forward secrecy").

- [Partager un contact dans une
  discussion](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  permet au destinataire d'utiliser le chiffrement de bout en bout avec le contact. 

Delta Chat n'interroge, ne publie ni n'interagit avec aucun serveur de clés OpenPGP. 

### Comment je peux savoir si les messages sont chiffrés de bout en bout ? {#whene2e}

Tous les messages de Delta Chat sont **chiffrés de bout en bout par défaut**.
Depuis les versions 2 de Delta Chat (juillet 2025), 
les messages chiffrés de bout en bout ne comportent plus de marqueurs de verrouillage ni d'autres marqueurs similaires. 

### Puis-je toujours recevoir ou envoyer des messages sans chiffrement de bout en bout ?

Si vous utilisez les [relais chatmail](https://chatmail.at/relays) par défaut,
c'est impossible de recevoir en envoyer des messages sans chiffrement de bout en bout.

Si vous utilisez plutôt un [serveur de courriel classique](#classic-email),
vous pouvez envoyer et recevoir des messages avec ou sans chiffrement de bout en bout..
Les messages sans chiffrement de bout en bout sont indiqués avec une icône enveloppe 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.

### Est-ce que les pièces jointes (images, fichiers, audio, etc) sont chiffrés de bout en bout ?

Oui.

Lorsque nous parlons d’un "message chiffré de bout en bout",
nous entendons toujours un message complet,
y compris toutes les pièces jointes
et les métadonnées associées à ces pièces jointes, comme le nom des fichiers.

### OpenPGP est-il sûr ? {#openpgp-secure}

Oui, Delta Chat utilise une partie sécurisée d'OpenPGP
qui requiert que le message complet soit correctement chiffré et signé.
Par exemple, les "signatures détachées" ne sont pas considérées comme sûres. 

OpenPGP n'est pas en soi peu sûr.
La plupart des problèmes de sécurité d'OpenPGP dont on parle publiquement
proviennent en réalité d'une mauvaise ergonomie ou de mauvaises implémentations des outils ou des applications (ou les deux).
Il est particulièrement important de faire la distinction entre OpenPGP, la norme de chiffrement de l'IETF, 
et GnuPG (GPG), un outil en ligne de commande implémentant OpenPGP. 
De nombreuses critiques publiques d’OpenPGP portent en réalité sur GnuPG, que Delta Chat n’a jamais utilisé. Delta Chat utilise plutôt l’implémentation Rust d’OpenPGP [rPGP](https://github.com/rpgp/rpgp),
disponible sous la forme d’[un paquet « pgp » indépendant](https://crates.io/crates/pgp),
et [dont la sécurité a été auditée en 2019 et 2024](#security-audits). 

Notre objectif, en collaboration avec d'autres développeurs d'OpenPGP, 
est d'améliorer encore les caractéristiques de sécurité en mettant en œuvre la
[nouvelle spécification IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
qui a heureusement été adopté à l’été 2023. 

### Avez-vous pensé à utiliser des alternatives à OpenPGP pour le chiffrement de bout en bout ? {#openpgp-alternatives}

Oui, nous suivons de près des initiatives telles que [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
mais leur adoption impliquerait de rompre l'interopérabilité du chiffrement de bout en bout.
Ce ne serait donc pas une décision à prendre à la légère 
et il faudrait que cela apporte des améliorations concrètes aux utilisateurs. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing end-to-end encryption is
only one part of "user outcomes",
see also our answers to [device-seizure](#device-seizure)
and [message-metadata](#message-metadata) questions. 

### Est-ce que Delta Chat est vulnérable à EFAIL?

Non, [Delta Chat n'a jamais été vulnérable à EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
puisque son implémentation d'OpenPGP,  [rPGP](https://github.com/rpgp/rpgp), 
utilise Modification Detection Code lors du chiffrement des messages
et retourne [une erreur](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
si Modification Detection Code est incorrect.

De plus, Delta Chat n'a jamais été vulnérable à l'attaque EFAIL "Direct Exfiltration"
parce que, tel que défini dans la spécification Autocrypt Level 1, Delta Chat déchiffre uniquement les messages `multipart/encrypted` qui contiennent exactement une partie chifrée et signée.

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

### Comment Delta Chat protège les métadonnées des messages ? {#message-metadata}

Contrairement à la plupart des autres messageries,
l'application Delta Chat ne conserve sur les serveurs aucune métadonnée sur les contacts ou les groupes, même chiffrées.
Toutes les métadonnées sur les groupes sont chiffrées de bout en bout et uniquement conservées sur les appareils des utilisateurs.

Les serveurs peuvent donc uniquement voir:

- Les adresses des émetteurs et des destinataires, qui, par défaut, sont générées de manière aléatoire
- La taille des messages

Tout les autres métadonnées des messages, contacts et groupes se trouvent dans la partie des messages chiffrée de bout en bout.

### Comment protéger les métadonnées et les contacts lorsqu'un appareil est saisi ? {#device-seizure}

Pour se protéger à la fois des serveurs qui enregistrent les métadonnées
et du risque de saisie d'un appareil,
nous recommandons d'utiliser un [relai chatmail](https://chatmail.at/relays)
pour créer des profils de discussion qui utilisent des adresses de transport aléatoires.
Notez que les applications Delta Chat, quelle que soit la plateforme, permettent d'avoir plusieurs profils,
donc vous pouvez facilement utiliser des profils dédiés en plus de votre profil "principal",
tout en sachant que toutes leurs données et métadonnées seront supprimées.
De plus, si un appareil est saisi, les contacts qui utilisent des profils temporaires
ne peuvent pas être identifiés facilement.
 

### Qui voit mon adresse IP ?

Les [relays](#relays) utilisés ont besoin de voir votre adresse IP,
de même que, parfois, les appareils de vos contacts, si vous avez un [appel vocal](#calls)
ou que vous utilisez ensemble une [Applis de discussion](#webxdc).

Les adresses IP sont indispensables à la connectivité et à l'efficacité. Delta Chat ne les conserve ni ne les divulgue.
Notez que les adresses IP
ne sont pas comparables à une adresse que l'on communique à un service de livraison,
mais sont généralement moins précises, ne désignant souvent qu'une ville ou une région.

Si vous considérez que votre adresse IP représente un risque,
nous vous recommandons d'utiliser un VPN au niveau du système.
Les options de protection "par applications" laissent des failles dans votre système.
Par exemple, le simple fait de cliquer sur un lien peut exposer votre adresse IP à des tiers inconnus, ce qui constitue de loin le risque le plus important.

### Est-ce que Delta Chat supporte "Sealed Sender"? {#sealedsender}

Non, pas encore.

La messagerie Signal a mis en place ["Sealed Sender" en 2018](https://signal.org/blog/sealed-sender/)
pour s'assurer que leurs serveurs ne puissent pas savoir qui envoie un message à des destinataires. 
C'est particulièrement important parce que le serveur Signal connaît le numéro de téléphone portable de chaque compte,
lequel est souvent lié à une identité officielle.

Même si les [relais chatmail](https://chatmail.at/relays) 
ne demandent aucune données privées (ni même de numéro de téléphone), 
ça peut tout de même être bénéfique de protéger les métadonnées relationnelles entre les adresses. 
Nous ne voyons pas de problème à utiliser des adresses aléatoires jetables pour l'envoi "sealed"
mais pour l'instant, implémenter “Sealed Sender” n'est pas notre priorité.

### Est-ce que Delta Chat supporte Perfect Forward Secrecy? {#pfs}

Pas encore mais cela arrive avec [Autocrypt v2](https://autocrypt2.org).

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

[Autocrypt v2](https://autocrypt2.org), prévu pour 2026, permettra la suppression fiable (forward secrecy) grâce à une rotation automatique des clefs.
Cette approche est détaillée dans le brouillon du  [certificat Autocrypt v2 OpenPGP](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/).

### Est-ce que Delta Chat supporte la Cryptographie Post-Quantique ? {#pqc}

Pas encore mais cela arrive avec [Autocrypt v2](https://autocrypt2.org).

[Autocrypt v2](https://autocrypt2.org), prévu pour 2026, amènera un chiffrement avec résistance post-quantique pour protéger contre les attaques effectuées par des ordinateurs quantiques.
Delta Chat utilise la librairie Rust OpenPGP [rPGP](https://github.com/rpgp/rpgp) qui supporte les dernières [IETF Post-Quantum-Cryptography OpenPGP draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/).
L'implémentation est détaillée dans le brouillon du [certificat Autocrypt v2 OpenPGP](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/).

### Comment vérifier manuellement les informations de chiffrement ?

You may check the end-to-end encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop).
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.

### Puis-je ré-utiliser ma clé privée existante ? {#importkey}

Non.

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1.
We do not recommend or offer users to perform manual key management.
We want to ensure that security audits can focus on a few proven cryptographic algorithms
instead of the full breadth of possible algorithms allowed with OpenPGP.
If you want to extract your OpenPGP key, there only is an expert method:
you need to look it up in the "keypairs" SQLite table of a profile backup tar-file.

### Est-ce qu'un audit indépendant des failles de sécurité a été réalisé sur Delta Chat ? {#security-audits}

Oui, à plusieurs reprises. 
Le projet Delta Chat fait l'objet d'audits et d'analyses de sécurité indépendants en continu,
du plus récent au plus ancien : 

- En décembre 2024, une [évaluation de rPGP commandée par NLNET](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) a été effectuée par [Radically Open Security](https://www.radicallyopensecurity.com/).
  rPGP est la base de chiffrement de bout en bout [OpenPGP](https://openpgp.org) sur laquelle s'appuie Delta Chat. 
  Deux bulletins de sécurité ont été publiées à la suite de cet audit:

  - ["Panics on Malformed Untrusted Input"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potential Resource Exhaustion when handling Untrusted Messages"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

Les problèmes signalés dans ces bulletins de sécurité ont été corrigés et sont intégrés à Delta Chat
dans tous les magasins d'applications depuis Décembre 2024.

- En mars 2024, nous avons reçu une analyse de sécurité approfondie de la part du groupe de recherche de Cryptographie Appliquée de l'ETH Zurich et nous avons traité tous les problèmes remontés. 
  Consultez notre article de blog [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) pour plus de détails et l'article de recherche
  [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
  publié par la suite.

- Début 2023, nous avons réparé les failles de sécurité et de confidentialité de la fonctionnalité "partage d'appli web dans une discussion" liées à des dysfonctionnements en mode bac à sable, en particulier avec Chromium. Après quoi, nous avons soumis Delta Chat à un nouvel audit de sécurité indépendant par Cure53, puis effectué les réparations de toutes les failles découvertes pour la version 1.36 de nos applications, publiée en avril 2023. 
Vous trouverez [ici un article de fond complet à propos de la sécurité du chiffrement de bout-en-bout sur internet](https://delta.chat/en/2023-05-22-webxdc-security). 

- Début 2023, [Cure53](https://cure53.de) a analysé le chiffrement d'acheminement des connexions réseau de Delta Chat et testé une configuration de serveur de courriel reproductible, telle que [recommandée sur ce site](https://delta.chat/serverguide).
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

Quelques fonctionnalités requièrent certaines permissions,
par exemple, vous devez autoriser Appareil photo si vous voulez [scanner un QR code d'invitation](#howtoe2ee).

Consultez [Politique de confidentialité](https://delta.chat/privacy#app-permissions) pour un aperçu plus détaillé.

### Où est-ce que mes amis peuvent obtenir Delta Chat?

Delta Chat est disponible sur toutes plateformes principales et sur d'autres moins connues:

- Le **site officiel**, <https://delta.chat/download> montre en détail toutes les options

- S'il n'est pas accessible, utilisez le **miroir** <https://deltachat.github.io/deltachat-pages>

- Ouvrez un des **magasins d'appli suivants et recherchez «Delta Chat » :**
Google Play Store, F-Droid, l'App Gallery d'Huawei, l'App Store d'iOS et macOS, Microsoft Store

- Vérifiez le **gestionnaire de paquets** de votre distribution Linux

- Les **fichiers APK pour Android** sont également disponibles à l'adresse <https://github.com/deltachat/deltachat-android/releases>

### Comment est financé le développement de Delta Chat ?

Delta Chat ne reçoit par de fonds en capital-risque, n'est pas endetté et ne subit aucune pression pour générer de gros profits ou vendre ses utilisateurs et utilisatrices - en même temps que leurs amis et leur famille - à des annonceurs (ou pire). 
Nous préférons utiliser des fonds provenant d'institutions publiques, jusqu'à présent basées en Europe ou aux États-Unis, pour soutenir nos efforts de développement d'un système de messagerie diversifié et décentralisé, basé sur les contributions de la communauté du libre et de l'open-source.

Plus précisément, voici les sources de financement pour le développement de Delta Chat,
par ordre chronologique:

- In 2023 and 2024 we got accepted in the Next Generation Internet (NGI)
  program for our work in [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
  along with collaboration partners working on
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/),
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/),
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) and
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/).
  All of these projects are partially completed or to be completed in early 2025.

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - email provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-profile support, improved QR-code contact and group setups and many networking improvements on all platforms.

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system.

- The [Open Technology Fund](https://opentechfund.org) gave us a
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app
  and released a first Desktop app beta version, and which moreover
  moored our feature developments in UX research in human rights contexts,
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

- Nous recevons parfois des dons ponctuels de la part de personnes privées. 
 En 2021 par exemple, une généreuse personne nous a envoyé 4000€ par virement bancaire, avec l'intitulé "continuez votre super travail de développement !". 💜 
 Nous utilisons l'argent de ces dons pour financer des rencontres entre développeurs et développeuses ou pour des dépenses ponctuelles difficiles à anticiper ou à rembourser avec des subventions publiques.
Recevoir plus de dons aide notre communauté de contributrices et contributeurs à devenir plus indépendante et à rester viable sur le long terme.

  [Faire un don](donate){: .cta-button}

- Dernier point, mais certainement pas des moindres : quelques personnes passionnées et expertes ont apporté, et apportent toujours, leur contribution bénévole au développement de Delta Chat sans contrepartie financière - ou seulement de petites sommes. Sans leur énergie, Delta Chat n'en serait pas là aujourd'hui... et de très loin.

Les financements mentionnés précédemment sont gérés principalement par merlinux GmbH à Fribourg (Allemagne) et redistribués à plus d'une douzaine de contributeurs et contributrices du monde entier.

N'hésitez pas à consulter les [manières de contribution à Delta Chat](contribute) pour en savoir plus sur les différentes manières de contribuer, financières ou non.  