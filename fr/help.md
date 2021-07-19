---
title: FAQ
lang: fr
render_toc: true
header: Foire aux questions
---


## Qu'est ce que Delta Chat?

Delta Chat est une application de clavardage qui utilise le courriel électronique pour délivrer ses messages et, si possible, les chiffre avec Autocrypt.

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Comment puis-je trouver des gens avec qui discuter ?

Avec Delta Chat, vous pouvez écrire à toutes les adresses courriels existantes, même si le destinataire n'utilise pas l'application. Votre correspondant pourra simplement répondre à l'e-mail qu'il aura reçu. Contrairement aux autres messageries instantanées vos amis n'ont pas besoins d'installer le même client pour discuter avec vous.


### Quels sont les avantages de Delta Chat par rapport aux autres messageries ?

 Indépendant de toute entreprise ou de service. _Vous possédez vos propres données_.
- Vos données ne sont pas sauvegardées sur un serveur central, à moins que vous utilisez tous le même fournisseur de mail.
- Vous ne distribuez pas votre carnet d'adresses à qui que ce soit.
- _Rapide_ par l'utilisation de Push-IMAP-.
- _La plus grande base d'utilisateurs_ : Même les destinataires n'utilisant _pas_ Delta Chat peuvent être contactés.
- _Compatible_ - pas seulement avec lui-même.
- Interface utilisateur _élegante_ et _simple_. 
- _Système distribué_.
- _Pas de Spam_ - Seuls les messages des utilisateurs connus sont affichés par défaut.
- _Fiable_ - et _sûr_ pour un usage professionnel.
 - Code source entièrement _ouvert_ et basé sur des _normes_ internationales.


### Quels messages apparaissent dans Delta Chat

Delta Chat affiche automatiquement :

- Messages des contacts de votre **carnet d'adresses**.
- Messages de vos contacts **contactés par vous**
- Réponses** aux messages envoyés par vous

Les autres messages n'apparaissent pas automatiquement, et se trouvent dans les **demandes de contact**. Si vous le souhaitez, une discussion peut être lancée depuis là.


### A propos des spams

- Les messages contenus dans les dossiers indésirables courants sont ignorés et les adresses qu'ils contiennent ne sont pas considérées comme des contacts connus.
- Comme les messages provenant de contacts inconnus n'apparaissent pas automatiquement, normalement, il n'y a pas de **spam**.
- Cependant, si nécessaire, vous pouvez **bloquer** n'importe quel contact.


### Delta Chat prend-il en charge les images, vidéos et autres pièces jointes ?

Oui. Comme le texte brut, toutes les pièces jointes aux e-mails sont affichées sous forme de messages séparés. Les messages sortants reçoivent automatiquement les pièces jointes nécessaires.


### Qui peut voir ma photo de profile ?

Dans les paramètres vous pouvez ajouter une photo de profil. Si vous écrivez à vos contacts ou que vous les ajoutez via le QR code, ils la verront automatiquement comme votre photo de profil.

- Les contacts qui n'utilisent pas Delta Chat la retrouveront en pièce jointe.

- Pour des questions de confidentialité, personne ne peut voir votre photo de profil avant de vous avoir écrit.

- Votre photo de profil n'est pas envoyé avec chaque message, mais assez régulièrement afin que vos contacts aient une photo à jour même s'ils ajoutent un nouvel appareil.


### Est-ce que Delta Chat support les e-mails en HTML

- Oui, si le courriel entrant ne comprend pas le texte brut, Delta Chat convertit les courriels HTML en texte brut. Les courriels sortants sont du texte brut.


### Pourquoi dois-je entrer le mot de passe de mon compte E-mail dans Delta Chat ? Est-ce sécurisé ?

Comme pour les autres clients mail, Thunderbird, FairEmail, K9-Mail, Outlook, etc, 
celui-ci a besoin des identifiants / mots de passe pour recevoir et envoyer des E-mails. 
Bien sûr le mot de passe est uniquement stocké sur votre appareil. Et il est utilisé uniquement pour vous authentifier auprès de votre fournisseur d'E-mail, qui a, rappelons-le, accès à vos E-mails non chiffrés.

Si vous utilisez un fournisseur d'E-mail supportant OAuth2 comme gmail.com et yandex.ru
il n'est pas nécessaire de stocker votre mot de passe sur votre appareil. Dans ce cas, seulement un jeton d'accès est utilisé.

Comme Delta Chat est un logiciel libre, vous pouvez étudier le [code source](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) pour vérifier que vos identifiants / mots de passe sont utilisés de façon sécurisé. Nous sommes avares de retours pour renforcer la sécurité de l'application.


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


## Groupes

### Création d'un groupe

- Sélectionnez **Nouvelle discussion** puis **Nouveau groupe** dans le menu à trois points situé en haut à droite de la fenêtre ou son équivalent sous Android et iOS.
- Sur l'écran suivant, sélectionnez **Ajouter des participants** et choisissez un **Nom du groupe**. Vous pouvez aussi choisir une **image de groupe**.
- Lorsque vous enverrez le **premier message** dans le groupe, tous les membres en seront informés et pourront répondre. Le groupe est invisible aux autres membres si vous n'écrivez pas de premier message.


### Ajouter une personne à un groupe

- Chaque membre du groupe a les **mêmes droits** que les autres. Pour cette raison, chacun peut supprimer tous les membres ou en ajouter de nouveaux.
- Pour ajouter ou supprimer des membres, cliquez sur le nom du groupe dans le chat.


### Qu'est qu'un groupe vérifié ? Pourquoi est-ce une fonction expérimentale ?

- Un groupe vérifié est une discussion qui garantit une 
sécurité contre un attaquant actif. Tous les messages d'une discussion vérifiée
sont chiffrés de bout en bout (e2ee), et les membres peuvent joindre en scannant
un code barre à deux dimensions (QR code) d'invitation. Tous les membres sont alors connectés l'un à l'autre
à travers une chaîne d'invitation, qui garanti une consistence cryptographique
contre des attaques réseaux actives ou des fournisseurs. 
Consultez [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
pour en savoir plus sur la R&amp;D derrière cette fonctionnalité.

- En décembre 2019, un "groupe vérifié" reste une fonction expérimentale. Elle est continuellement améliorée et de nombreux bogues ont été corrigés depuis son introduction en 2018. Toutefois, il reste des cas, notamment avec de grands groupes, où des incohérences peuvent se produire, ou des messages qui deviennent illisibles. Début 2020, un examen de la sécurité est prévu, et plusieurs nouveaux développements autour des protocoles qr-join ont lieu de sorte qu'il y a des chances que nous supprimions le label "expérimental" dans un proche avenir.


### Je me suis retiré du groupe par accident.

- Comme vous n'êtes plus membre du groupe, vous ne pouvez pas vous y ajouter à nouveau. 
Demandez simplement dans un tchat à n'importe quel autre membre de ce groupe de vous y ré-inviter.


### Je ne souhaite plus recevoir les message d'un groupe.

- Supprimez-vous de la liste des membres ou supprimez le tchat en entier. 
Si souhaitez rejoindre le groupe plus tard, demandez à un autre membre du groupe de vous ré-inviter.

- Vous pouvez également mettre un groupe en "Muet", ce qui signifie que vous recevez tous les messages et pourrez toujours écrire, mais vous ne serez plus informés de l'arrivée de nouveaux messages.


### Que signifient les doubles marques dans un message groupé ? Tout le monde a-t-il bien lu mon message ?

- Un message montre des doubles coches après plus que la moitié des destinataires
ont vu le message sur leur écran.</li>
- Notez que certains destinataires ont peut-être désactiver leurs notifications
de lecture pour des raisons de confidentialité.</li>
- Si plus de 50% du groupe a désactivé les notifications de lecture, les
doubles coches n'apparaitront pas. Pour en savoir plus, lisez [ce billet de blog](https://delta.chat/en/2017-07-06-read-receipts-and-social-pressure)


## Chiffrement {#encryption}

### Delta Chat gère-t-il le chiffrement de bout en bout ?

- Oui. Delta Chat implémente la norme Autocrypt Niveau 1 et peut ainsi chiffrer E2E (de bout en bout) les messages avec d'autres applications Autocrypt. 

- Delta Chat supporte aussi une forme robuste du chiffrement bout à bout qui
est même sécurisé contre les attaques actives, voir les “groupes vérifiés” un peu plus ci-dessous.


### Que faire pour activer le chiffrement de bout en bout ?

- Rien.

<br>- Delta Chat (et les autres applications de messagerie compatibles avec[Autocrypt](https://autocrypt.org)) partagent automatiquement les clés nécessaires au chiffrement de bout en bout dès l'envoi des premiers messages. 
Tous les messages suivants sont chiffrés de bout en bout automatiquement. 
Si l'un des partenaires de tchat utilise une application de messagerie non-compatible avec Autocrypt, les messages ultérieurs ne sont pas chiffrés tant qu'une application conforme à Autocrypt n'est pas à nouveau disponible. 

- Si vous préférez éviter le courriel électronique chiffré de bout en bout par défaut, changez
le paramètre Autocrypt correspondant dans “Paramètres” ou “Paramètres avancés”.


### Si le chiffrement de bout en bout n'est pas disponible, la connexion n'est-elle pas chiffrée du tout ?

- Delta Chat établit le _chiffrement du transport_ avec 
la majorité des serveurs de mail ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
Celà sécurise seulement la connexion entre votre appareil et le serveur
de mail, alors que le chiffrement e2ee fournit de la sécurité
entre votre appareil et celui d'un ami.


### Comment puis-je vérifier le statut de chiffrement auprès d'un expéditeur ?

Si vous êtes dans l'entourage physique immédiat de votre interlocuteur:

- Sélectionnez **code d'invitation QR** sur un appareil puis
**Scanner le code QR** sur l'autre et faites scanner le code. Si les deux
appareils sont en ligne, ils ouvriront un canal de discussion avec l'un l'autre (s'il
n'existe pas déjà) et les clés de chiffrement seront aussi vérifiées. Les deux
appareils verront un message système “destinataire vérifié” dans leur discussion
1:1.

Si vous n'êtes pas près physiquement de l'interlocuteur, vous pouvez vérifier manuellement le status dans le dialogue “Chiffrement” (profil utilisateur sur Android/iOS ou un clic droit sur un objet de la liste des discussions sur l'appli de bureau):

- Pour le chiffrement de bout en bout, Delta Chat y montrera deux empreintes. Si les mêmes empreintes apparaissent sur l'appareil de votre partenaire de chat, la connexion est sécurisée.

- Pour le cryptage de la communication, cet état est juste affiché ici


## Comment puis-je vérifier le chiffrement des messages ?

- Si un petit **cadenas** est affiché à côté d'un message, cela signifie que le message est chiffré de bout en bout par l'expéditeur.

- S'il n'y a **aucun cadenas**, le message est généralement transporté en clair, par exemple parce que vous ou l'expéditeur avez désactivé le chiffrement-de-bout-en-bout ou que l'expéditeur utilise une application qui ne prend pas en charge le chiffrement-de-bout-en-bout.

## Quels standards sont utilisés pour le chiffrement-de-bout-en-bout ?

- [Autocrypt](https://autocrypt.org) est utiliser pour mettre en place
  le chiffrement de bout en bout avec un destinataire utilisant Delta Chat ou un autre application utilisant Autocrypt. 
  Autocrypt utilise un sous-ensemble restreint de fonctionnalités d'OpenPGP. 

- Delta Chat implémente [les protocoles setup-contact et verified-group du projet countermitm](https://countermitm.readthedocs.io/en/latest/new.html) afin d'achever la protection contre des attaques de réseaux actives. Ceci va au-delà de la protection opportunistique 
de base du niveau 1 d'Autocrypt, tout en préservant sa facilité d'utilisation.

### Quel est la différence entre les groupes vérifiés et des discussions 1:1 avec des contacts vérifiés?

- Les discussions 1:1 avec un contact vérifié, et des groupes vérifiés, ne sont pas les mêmes choses même si il y a seulement 2 personnes dans le groupe vérifié. Une différence est que vous pouvez facilement ajouter plus de personnes dans le groupe, mais il y a aussi d'autres implications.
 

- Les groupes vérifiés sont sécurisés en tout temps. Quelconque disruption (texte non chiffré ou messages mal 
signés etc.) seront marqués et de tels messages ne seront pas montrés dans 
ce chat. Vous pouvez vous assurez que tous les messages dans cette discussion de personnes vérifiés 
n'ont pas été lu ou altéré par des tierces parties. 

-  Les discussions 1:1 sont opportunistiques, c'est à dire que ça permet aux gens de communiquer 
même s'ils changent leur client de mail, appareils, configurations etc. C'est pour celà qu'il 
n'y pas de marque de vérification, même si vous avez vérifié le contact.


### Est-ce que Delta Chat supporte la Confidentialité Persistante Parfaite (Perfect Forward Secrecy) ?

- Non, OpenPGP ne supporte pas la Perfect Forward Secrecy. La PFS marche 
pour une architecture orienté sur les sessions, mais l'E-mail est asynchrone par nature 
et souvent utilisé depuis plusieurs appareils. Celà signifie que si votre
 clé privée Delta Chat fuite et que quelqu'un a une copie
 de tout vos messages en cours de route, il sera capable de les lire.

- Notez que si quelqu'un s'est emparé ou a hacké votre téléphone sous tension, il sera 
capable de lire tous vos messages, que la PFS soit en place ou non.
 Avoir accès à l'appareil d'un membre d'un groupe
 exposera normalement une bonne partie du cercle social. Utiliser des adresses mails
 qui ne sont pas facilement remontables à de vraies personnes aide les membres du groupe à rester plus sûr en cas
 de la perquisition d'un appareil.

- Nous sommes en train de réfléchir à des moyens de mieux protéger les communications en cas
 de perquisition de matériel.


### Comment est-ce Delta Chat protège mes métadonnées?

- Puisque Delta Chat est une messagerie décentralisé, les métadonnées des utilisateurs de Delta Chat
 ne sont pas stockés sur un seul serveur central. Néanmoins, elles sont stockées sur les serveurs mails 
de l'émetteur et du destinataire d'un message.

- Chaque serveur de mail sait, en ce moment, qui a envoyé et qui a reçu un message en
 analysant les en-têtes non chiffrés To/Cc et donc peut déterminer quelles adresses
 mails font partie d'un groupe. Delta Chat lui-même pourrait éviter les en-têtes To/Cc et
tout le temps les mettre dans la partie chiffrée. Voyez 
ce ticket, [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032).
La préocuppation principale pour les discussions opportunistiques est comment celà va impacter les autres applications de mail qui
 pourrait participer à ces discussions.

- Beaucoup d'autres en-têtes d'e-mail, en particulier l'en-tête “Sujet” sont prévus d'être protégés avec le chiffrement-de-bout-en-bout, consultez également cette [RFC en cours pour l'IETF](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Puis-je ré-utiliser ma clé privée existante ?

Oui. La meilleure façon est d'envoyer un message de configuration Autocrypt depuis l'autre client de mail. Cherchez pour quelque chose comme **Commencer le transfert de la configuration Autocrypt** dans les paramètres de l'autre client et suivez les instructions affichés.

Alternativement, vous pouvez importer les clés manuellement dans “Paramètres” ou “Paramètres avancés” et puis “Importer des clefs secrètes”. Attention: soyez sûrs que la clé n'est pas protégé par un mot de passe, assurez-vous d'enlever le mot de passe avant.

Si vous n'avez pas de clé ou ne savez même pas que vous en auriez besoin, ne vous inquiétez pas : Delta Chat en génère une si nécessaire, vous n'avez pas besoin d'appuyer sur un bouton pour cela. 


### Je ne peux pas importer ma clé PGP existante dans Delta Chat. 

Le problème le plus probable est que votre clé est chiffrée ou qu'elle utilise
 un mot de passe, ou les deux. De telles clefs ne sont pas supportées par Delta Chat. Vous pourriez enlever
 le chiffrement par mot de passe et le mot de passe puis réessayer l'import de nouveau. Si vous voulez
garder votre mot de passe, vous aurez a créer un alias d'e-mail à utiliser avec
Delta Chat de telle sorte que la clé de Delta Chat est lié a cet alias d'e-mail.

Delta Chat supporte les formats communs de clé privé OpenPGP, néanmoins il
 n'est pas certain que nous supporterons la totalité des clef privés de n'importe quelles sources. Ce
 n'est pas aussi l'occupation principale de Delta Chat. En pratique, la majorité des nouveaux utilisateurs
 de Delta Chat n'auront pas de clefs avant d'utiliser Delta Chat.
Néanmoins, nous essayons de supporter les clés privés d'autant de sources que possible.

Enlever le mot de passe de la clé privé dépendra du 
logiciel que vous utilisez pour gérer vos clés GPG. Avec Enigmail, vous pouvez définir votre 
mot de passe par une valeur vide dans la fenêtre de Gestion des Clés. Avec GnuPG vous pouvez le définir
 [via la ligne de commande](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Pour les autres programmes, vous devriez être capable de trouver la solution en ligne.


### Pourquoi n'utilisiez-vous pas pEp (pretty easy privacy)?

- Delta Chat utilise le standard de chiffrement e2ee
d'Autocrypt. Pour une discussion sur Autocrypt et pEp, regardez la [FAQ d'Autocrypt](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Puis-je utiliser Delta Chat sur plusieurs appareils en même temps? 

Si vous voulez utiliser le **même compte** sur d'autres appareils, vous devriez exporter
 une sauvegarde depuis l'ancien appareil puis l'importer dans le nouveau:

 

- Sur l'ancien appareil, allez dans “Paramètres” ou “Paramètres / Discussions et médias” et puis
ensuite à “Sauvegarde”. Entrez votre PIN, schéma ou mot de passe de dévérouillage puis ensuite vous pouvez
cliquer sur "Commencer la sauvegarde". Celà enregistrera le fichier de sauvegarde sur votre appareil.
Vous allez devoir maintenant le transférer sur l'autre appareil d'une manière quelconque.
- Sur l'écran de connexion du nouvel appareil, choisissez "Importer la sauvegarde" au lieu de vous
connecter dans votre compte de mail. Après l'importation, vos discussions, clés de chiffrement ainsi que
vos médias devrait être copiés sur le nouvel appareil.
- Vous êtes maintenant synchronisé et pouvez utiliser les deux appareils pour envoyer et recevoir
des messages chiffré e2ee avec vos interlocuteurs.

### Est-ce qu'il y a des plans d'introduction d'un client Web pour Delta Chat? 

- Il n'y a pas de plans immédiats mais quelques idées préléminaires.
- Il y a 2-3 façons d'introduire un client Web Delta Chat, mais toutes représentent
 un travail conséquent. Pour l'instant, nous nous concentrons à sortir des versions stables dans tout
 les magasins d'applications (Google Play/iOS/Windows/macOS/centre de paquets Linux) en tant qu'applications natives.
- Si vous avez besoin d'un client Web parce que vous n'êtes pas autorisé à installer des logiciels sur
 l'ordinateur sur lequel vous travaillez, vous pouvez utiliser le Client Portable pour bureaux Windows
 ou l'AppImage pour Linux. Vous pouvez les trouver sur 
[get.delta.chat](https://get.delta.chat).


### Pourquoi je peux choisir de ne pas regarder la boîte de réception? 

C'est un paramètre expérimental pour certaines personnes qui expérimente avec
 des règles côté serveur. Tous les fournisseurs ne supporte pas ceci mais certains permettent de déplacer
 tous les mails avec un en-tête tel que "Chat-Version" dans le dossier DeltaChat. Normalement, l'application
 Delta Chat s'en occupe. .

Ne pas Surveiller la Boîte de réception est judicieux si vous avez:

- activé une règle côté serveur pour déplacer tous les messages avec un en-tête "Chat-Version" dans le dossier DeltaChat, et
- défini le paramètre "Voir les mails classiques" sur "Non, seulement les tchats".

Dans ce cas là, Delta Chat n'a pas besoin de surveiller la Boîte de réception.

### À quoi est bon le paramètre “M'envoyer une copie”? 

Envoyer une copie de vos messages à vous-même s'assure que vous recevez vos propres
 messages sur tous les appareils. Si vous avez de multiples appareils et que vous ne l'activez pas, vous
 voyez seulement les messages des autres personnes et les messages que vous avez envoyé depuis
 l'appareil en cours.

La copie est envoyée dans la Boîte de réception puis déplacée dans le dossier DeltaChat; elle n'est
 pas mise dans le dossier “Envoyés”. Delta Chat ne téléverse jamais quelque chose dans le dossier Envoyés
 car ça signifierait de le téléverser deux fois (une fois via SMTP, puis une fois
 dans le dossier Envoyés via IMAP).

Le paramètre par défaut pour l'envoi à soi-même est "Non".

### Pourquoi puis-je choisir de regarder le dossier “Envoyés”? 

La seule raison de regarder le dossier Envoyés est si vous utilisiez un autre
 programme de mail (tel que Thunderbird) en parallèle de votre application Delta Chat, et que vous voulez que votre client de messagerie
 participe aux discussions.

Cependant, nous recommandons d'utiliser le client de bureau Delta Chat; vous pouvez le télécharger
 sur [get.delta.chat](https://get.delta.chat). L'option de regarder le dossier “Envoyés”
 pourrait disparaître dans le futur. Elle a été introduite à un temps où il n'y avait pas
 de client de bureau Delta Chat disponible sur toutes les plateformes.

### Pourquoi puis-je choisir de ne pas regarder le dossier Delta Chat? 

Certaines personnes utilisent Delta Chat comme un client de messagerie normal, et veulent utiliser la Boîte de réception
 pour leurs mails au lieu d'utiliser le dossier DeltaChat. Si vous désactivez “Surveiller le dossier DeltaChat”, vous
 devriez aussi désactiver “déplacer les messages de discussions dans DeltaChat”.
Sinon, la suppression de messages dans une configuration multi-appareils pourrait ne pas marcher correctement.

## Divers

### Est-ce que Delta Chat fonctionne avec _mon_ fournisseur de courriel électronique? 

- Avec de grandes chances: oui :)
Cependant, quelques fournisseurs ont besoin d'options spéciales pour bien fonctionner, consultez
 [l'aperçu des fournisseurs](https://providers.delta.chat)


### Si Delta Chat se base sur le courriel électronique, est-ce vraiment une Messagerie _Instantanée_? 

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in the background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occasionally. This artificial delay is usually worse on iOS than on Android.
- However, Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### Est-ce Delta Chat est compatible avec Protonmail / Tutanota / Criptext? 

- Oui et Non
- Non, vous ne pouvez pas utiliser votre compte Protonmail, Tutanota ou Criptext avec
Delta Chat; ils n'offrent pas de recevoir les mails via IMAP.
- Dans tous les cas vous pouvez utiliser Delta Chat pour envoyer des Mesasges
à des personnes qui utilise Protonmail, Tutanota ou Criptext. Par contre, ces messages ne seront pas chiffré de bout en bout. Le chiffrement de bout en bout que ces fournisseurs offre fonctionne
seulement à l'intérieur de leurs plateformes et n'est pas compatible avec quelqu'un d'en dehors.
- Delta Chat peut chiffrer en e2ee à travers n'importe quel autre fournisseur et avec 
[une application e-mail compatible Autocrypt](https://autocrypt.org/dev-status.html).


### Les détails techniques m'intéressent. Pouvez-vous m'en dire plus? 

- Consultez les [standards utilisés dans Delta Chat]({% include standards-url %}).

### Comment sont financées les avancées de Delta Chat? 

Premièrement, Delta Chat ne reçoit aucun capital risque et n'est pas endetté, et
 n'est pas sous pression de produire d'énormes profits ou
 de vendre ses utilisateurs et leurs amis et familles à des publicitaires (ou pire).

Jusqu'ici les avancées de Delta Chat ont été financées par quatre sources majeures:

- Le projet européen [NEXTLEAP](https://nextleap.eu) a financé en 2017 et 2018 la recherche
 et l'implémentation des protocoles de groupes vérifiés et de la configuration des contacts.

- L'[Open Technology Fund](https://opentechfund.org) a donné deux subventions.
La première subvention (~$200K) de 2018/2019 a majoritairement amelioré l'application Android
 et nous a permi de sortir une version beta de l'application de Bureau, et a aussi
 ancré nos avancées de fonctionnalités dans la recherche UX dans les contextes de droit de l'homme, consultez notre
 [rapport de réponses aux besoins et UX](https://delta.chat/en/2019-07-19-uxreport) pour en savoir plus.
La deuxième subvention (~$300K) de 2019/2020 est encore en cours et nous aide
 à sortir des versions Delta/iOS, à convertir notre bibliothèque moteur vers Rust, et de fournir de nouvelles fonctionnalités pour toutes les plateformes. Pour en savoir plus
, consultez notre [blog](https://delta.chat/en/blog).

- La [fondation NLnet](https://nlnet.nl/) nous a subventionné de 46K€ pour
 la complétion des interfaces Rust/Python et l'encouragement d'un écosystème de Chatbot.

- En dernier mais de loin pas des moindre, quelques enthousiastes et experts bénévoles qui ont contribué
 et contribue au développement de Delta Chat sans recevoir d'argent, ou seulement
 de petites sommes. Sans eux, Delta Chat n'en serait pas où il en est aujourd'hui, et
 de très loin.

- Le financement mentionné ci-dessus a été organisé par merlinux GmbH à 
Freiburg (Allemagne) puis ensuite distribué à presque une douzaine de contributeurs.

Le financement pour 2020/2021 est encore a déterminer. Nous sommes en train de poursuivre différentes
 opportunités avec de différentes organisations et partenaires. Nous sommes aussi
 en train de réfléchir au fait de demander des dons. En fait, nous avons commencé
 à titre d'expérimentation un [petit compte de don Liberapay pour Delta Chat](https://liberapay.com/delta.chat/)
Delta Chat mais nous ne l'avons pas encore publié. Il y a eu aussi jusqu'ici autour de 3-4K
 donnés à Bjoern (l'auteur original de Delta Chat) en don Paypal et 
canaux de don en Bitcoin.
