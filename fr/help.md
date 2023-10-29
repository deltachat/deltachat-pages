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

Vous pouvez changer cette préférence en vous rendant dans vos "Paramètres -> Discussions & fichiers multimédia -> Voir les courriels classiques". Trois options sont disponibles :

- "Non, seulement les discussions": vous verrez seulement les messages envoyés par d'autres utilisateurs de Delta Chat et les réponses à vos messages Delta Chat. Cette option est recommandée si vous utilisez le même compte pour recevoir aussi des courriels normaux.
- "Tout": vous verrez dans Delta Chat tous les courriels envoyés à votre adresse. Cette option est recommandée si vous souhaitez utiliser Delta Chat pour tous vos courriels, afin de ne rater aucun message.
- "Pour les contacts acceptés": vous verrez dans Delta Chat tous les courriels envoyés par les personnes avec qui vous avez déjà ouvert une discussion, mais les notifications de nouvelles conversations ne s'afficheront que pour des messages envoyés via Delta Chat. Cette option vous permet de décider au cas par cas si vous souhaitez échanger via Delta Chat ou via une application de courriel "classique".


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

- Pour améliorer les performances, les images sont redimensionnées et envoyées en taille réduite par défaut ; mais vous pouvez les envoyer en tant que "fichier" pour en conserver la taille originale.

<h3 id="multiple-accounts">Comment naviguer entre plusieurs comptes et comment en ajouter ?</h3>

Vous pouvez facilement gérer des comptes supplémentaires sur les clients Delta Chat mobile ou de bureau en cliquant :
- soit sur le bouton du menu, puis sur "Changer de compte" (Android et PC) ;
- soit sur l'icône de profil, puis sur "Ajouter un compte" (iOS).

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

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [webxdc app](#webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


### Comment supprimer mon compte ?

Étant donné que vous utilisez Delta Chat à travers un compte courriel, la façon dont vous pouvez supprimer votre compte dépend de votre fournisseur de courriel.
Comme nous n'exerçons aucun contrôle sur votre compte courriel, nous ne sommes pas en mesure de vous aider à le supprimer.

Si vous souhaitez conserver votre compte mais désinstaller Delta Chat, nous vous recommandons de quitter toutes les discussions de groupe avant de procéder à la désinstallation.


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


## Chiffrement and Security 

### Which standards are used for end-to-end encryption? 

[Autocrypt](https://autocrypt.org) is used for automatically
establishing E2E-encryption with contacts and group chats. 
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure). 

[Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html) 
are used to implement [verified groups](#verifiedchats) 
which provide pervasive protection against network attacks and compromised servers.
Verified groups enforce all messages in a chat to be safely E2E-encrypted
with an unparalleled ease of use that avoids users having to learn about 
public key cryptography, key management or key verification. 


### When will messages be E2E-encrypted? 

After a first message was received from a Delta Chat or other Autocrypt-capable contact, 
Delta Chat defaults to using E2E-encryption with that contact (and vice versa). 
When creating a group chat with contacts where E2E-encrypted is individually in place,
all group members will automatically use E2E-encryption with each other and in the group. 
However, if you add a contact that lacks E2E-encryption, 
the group chat will not use E2E-encryption. 

If you want to be sure to always and only use E2E-encryption in a group
use [verified chat groups](#verifiedchats) 
which additionally protects against compromised or malfeasant e-mail servers. 


### Are attachments (pictures, files, audio etc.) E2E-encrypted? 

Yes. 
When we talk about an "E2E-encrypted message" 
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
and only displays a padlock security indicator on a message
if the whole message is properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publically discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019](https://delta.chat/assets/blog/2019-first-security-review.pdf). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for E2E-encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking E2E-encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing E2E-encryption is
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


### Is a message exposed in cleartext if E2E-encryption is not available? {#tls}

No,
this does not necessarily mean that the message is exposed in cleartext.

Delta Chat always uses ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)) encryption
which secures connections between your device and your e-mail provider
unless you explicitly disable it.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).

Moreover, the connection between your and the recipient's e-mail provider 
will today typically be transport-encrypted as well. 
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced in all inter e-mail server communications
in which case Delta Chat communications will never be exposed in cleartext to the network 
even if the message was not E2E-encrypted. 

Note that maintaining E2E-encryption on top of TLS encryption is highly advisable 
because it provides safety between your device and a contact's device,
irrespective of any hops over potentially compromised e-mail servers. 


### How does Delta Chat protect metadata in messages? {#message-metadata}

Delta Chat protects most message metadata by putting the following information
into the E2E-encrypted part of messages: 

- Subject line 
- Group avatar and name 
- MDN (read receipt) requests (`Chat-Disposition-Notification-To`)
- Disappearing message timer (`Ephemeral-Timer`) 
- `Chat-Group-Member-Removed`, `Chat-Group-Member-Added` 
- `Secure-Join` header containing secure join commands
- Notification about enabling location streaming
- WebRTC room URL

E-Mail servers do not get access to this protected metadata 
but they do see the message date as well as the message size,
and, more importantly, the sender and receiver addresses. 
E-mail servers need receiver addresses to route and 
deliver messages to recipient's devices. 


### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a Delta Chat optimized [e-mail server instance](https://delta.chat/serverguide)
to create pseudonymous temporary accounts through QR-code scans.
Note that Delta Chat apps on all platforms support multiple accounts 
so you can easily use action-specific "1-week" or "1-month" accounts next to your "main" account
with the knowledge that all temporary account data, along with all metadata, will be deleted. 
Moreover, if a device is seized then contacts using temporary e-mail accounts 
can not be identified easily, as compared to messengers which reveal 
phone numbers in chat groups which in turn are often associated with passport identities. 


### How can I verify E2E-security with a contact? 

If you are within immediate distance of your contact,
select **QR Invite code** on one device and then **Scan QR code**
from within Delta Chat on the other device. 
If both devices are online, 
they will setup a chat with each-other (if it doesn't exist already)
and both will see a "sender verified" system message in their chat. 
Showing and scanning a QR code can also happen in any "second channel" 
such as a video call or another messenger. 

If QR code scanning is for some reason not viable, 
you may check the E2E encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop). 
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.


### How can I check the encryption status of messages?

A little **padlock** in a message bubble denotes 
that the message was properly E2E-encrypted from the given sender.
If there is **no padlock**, the message was not properly E2E-encrypted 
most likely because the sender uses an app or webmail interface 
without support for E2E--encryption.


### Why do I see unencrypted messages? 

If a contact uses a non-Autocrypt e-mail app, 
all messages involving this contact (in a group or 1:1 chat) 
will not be E2E-encrypted, and thus not show a "padlock" with messages. 
Note that even if your contacts use Delta Chat on their account, 
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages. 
Replying unencrypted to unencrypted messages is mandated by Autocrypt 
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app. 

If you need a safely E2E-encrypted chat with contacts
who are using their account also with Autocrypt-incapable apps (e.g. webmail) 
it's best to create a [verified group chat](#verifiedchats) with them. 
Any message sent into a verified group chat will be E2E-encrypted
irrespective of the last incoming message from a contact. 


### How can I ensure message E2E-encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is using [verified groups](#verifiedchats) 
and turning on disappearing messages.

Verified groups are always encrypted and protected against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) 
and turning on "disappearing messages" deletes the messages 
on the server after a user-configured time. 

If you don't need a longer-lived copy of your messages on the server, 
you can also turn on ["delete messages from server automatically"](#delold).


### Delta Chat prend-il en charge la confidentialité persistante parfaite (Perfect Forward Secrecy) ?

No, Delta Chat doesn't support Perfect Forward Secrecy (PFS).
This means that if your Delta Chat private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.

Note, however, that if anyone obtains to your decryption keys, 
they will typically also be able to obtain your messages, 
irrespective if Perfect Forward Secrecy is in place or not. 
The typical real-world situation for leaked decryption keys is device seizure
which we discuss in our answer [on metadata and device seizure](#device-seizure). 

It is possible that Delta Chat evolves to support Perfect Forward Secrecy,
because OpenPGP is just a container for encrypted messages 
but encryption key management (and thus key rotation or key "ratcheting") 
could be organized in flexible ways. 
See [Seqouia's PFS prototype](https://gitlab.com/sequoia-pgp/openpgp-dr)
for existing experiments in the OpenPGP implementor community. 


### Puis-je ré-utiliser ma clé privée existante ?

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

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

- Il se peut que votre système dispose d'un "pare-feu personnalisé",
  source bien connue de dysfonctionnements (en particulier sur Windows).
  **Désactivez le pare-feu personnalisé** sur chaque appareil pour Delta Chat et réessayez.

- Assurez-vous de disposer d'un **espace de stockage suffisant** sur l'appareil de destination.

- Une fois que le transfert a commencé, assurez-vous que les appareils **restent actifs** et ne se mettent pas en veille.
  Ne quittez pas Delta Chat !
  (Nous faisons de notre mieux pour que l'application fonctionne en arrière-plan, mais les [systèmes ont une fâcheuse tendance à tuer les applis](https://dontkillmyapp.com).)

- Si Delta Chat est **déjà connecté** sur l'appareil de destination.
  Vous pouvez utiliser plusieurs comptes par appareil : [ajoutez un nouveau compte](#multiple-accounts).

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
- This also means: it can be a privacy risk to open webxdc apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get webxdc apps?

- In general, anyone can share webxdc apps with each
  other without restrictions.
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

Nous apprécions tout particulièrement les retours sur ces fonctionnalités. Vous voulez donner votre avis ? Rejoignez-nous sur le [Forum](https://support.delta.chat) pour contribuer. (Vous aimez faire des expériences ? Inscrivez-vous en cliquant sur "Sign up -> with Delta Chat" !)

### Comment passer des appels audio/vidéo avec Delta Chat ?

- Pour activer les appels audio/vidéo, accédez à la section "Fonctionnalités expérimentales" des paramètres avancés et choisissez une "instance de discussion vidéo". 
- Quand vous invitez d'autres personnes dans une discussion vidéo, elle s'ouvre automatiquement dans votre application/navigateur et les destinataires reçoivent un courriel contenant un lien vers votre salon Jitsi/BBB. De cette manière, même les personnes n'utilisant pas Delta Chat peuvent participer.
- Veuillez noter qu'il n'y a pas de sonnerie pour les destinataires, qui ne sont donc pas dérangé⋅e⋅s par votre invitation à une discussion vidéo.
- Vous pouvez utiliser n'importe quel service de discussion vidéo permettant de rejoindre un salon par un lien. Il vous suffit de renseigner le lien dans vos paramètres.
- Par exemple, pour utiliser l'instance Jitsi Meet principale, vous pouvez insérer :`https://meet.jit.si/$ROOM`. La variable`$ROOM`est une valeur aléatoire qui vous permet de rejoindre un nouveau salon Jitsi choisi au hasard à chaque nouvel appel.


### Qu'est qu'un groupe vérifié ? Pourquoi est-ce une fonctionnalité expérimentale ?{#verifiedchats}

Verified groups carry a green verification checkmark in the group title that guarantees
that all messages are E2E-encrypted and can not be read or altered by e-mail servers. 
Each member in a verified group chat can add already verified contacts 
or tap "QR Invite code" to let invitees scan the code to get verified and added ("secure-join").
This "secure-join" protocol ensures that all verified group chat members 
are connected with each other through a chain of verifications ("web of trust"), 
guaranteeing E2E-encryption consistency even if e-mail servers are compromised or malfeasant.
See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
for a detailed security discussion. 

Note that "1:1" chats are currently only opportunistically encrypted (Autocrypt). 
You need to create a verified group with your contact 
to ensure that all messages will be safely E2E-encrypted between you two. 
We plan to introduce verified 1:1 chats around the end of 2023, 
simplifying and extending the guarantees of verified E2E-encryption for all chat types. 
Until then verified groups will remain classified as an experimental feature 
although they are widely and successfully used already, 
and reported bugs have been continously fixed in the last years. 


### Que sont les listes de diffusion et comment les utiliser ?

- Une liste de diffusion vous permet d'envoyer un message à plusieurs destinataires en même temps sans qu'ils puissent se voir mutuellement. Vous recevez leurs réponses respectives dans les discussions privées que vous avez avec chacun d'eux.
- Concrètement, c'est un courriel avec plusieurs destinataires en copie cachée.
- Vous pouvez activer cette option dans la section "Fonctionnalités expérimentales" des paramètres avancés. Vous pourrez ensuite créer une liste de diffusion à partir du bouton "Nouvelle discussion".
- Si vous utilisez plusieurs appareils, veuillez noter qu'il n'est pas possible, pour l'instant, de synchroniser les listes de diffusion.
- Les messages envoyés à des listes de diffusion ne sont pas chiffrés, parce que le chiffrement romprait l'anonymat puisque tous les destinataires pourraient alors voir qui d'autre a reçu le message.
  (Mais envoyer des courriels individuels à tout le monde serait encore pire à cause de la consommation du réseau requise et des limites d'envoi).


### Comment partager ma géolocalisation avec mes contacts ?

- Vous pouvez activer l'envoi de la géolocalisation à la demande dans la section "Fonctionnalités expérimentales" des paramètres avancés.
- Pour partager votre position dans une discussion, allez dans "Ajouter une pièce jointe" et sélectionnez "Position". Vous pouvez alors choisir la durée pendant laquelle vous voulez partager votre position avec les membres de la discussion, de 5 minutes à 6 heures.
- Quand vous vous déplacez, vos contacts voient votre position sur une carte dans la discussion.
- Vous devez activer cette fonctionnalité dans les paramètres avancés pour pouvoir voir la carte et la position de vos contacts.
- Cette fonctionnalité ne partage votre position avec personne d'autre que les membres de la discussion. *Cependant,* pour que la carte s'affiche, les tuiles de carte sont téléchargées depuis mapbox.com, donc si vous *visualisez* la carte, une requête pour afficher une zone spécifique est envoyée à mapbox.com. Si cela constitue un risque pour la protection de votre vie privée, cette fonctionnalité n'est probablement pas faite pour vous. Nous nous efforçons de trouver une alternative décentralisée à Mapbox.
- Sur l'application de bureau, votre système d'exploitation ne peut généralement pas déterminer votre position. À la place, vous pouvez faire un clic droit sur la carte pour décrire votre position, qui sera ensuite envoyée dans la discussion en tant que message, tout en apparaissant sur la carte.


### Que protège réellement le chiffrement expérimental de base de données ?

- À l'heure actuelle, le chiffrement de la base de données est encore expérimental. Mieux vaut ne pas vous y fier pour la protection de vos données et activer aussi le chiffrement votre système d'exploitation si vous le pouvez.
- Le chiffrement de base de données ne permet pas encore de chiffrer les blobs, seulement les lignes et les colonnes de la base. Cela signifie grosso modo que vos messages sont bien protégés, mais pas les pièces jointes.
- Sur iOS et Android, les clefs de chiffrements sont stockées dans le trousseau système. Par conséquent, le chiffrement est aussi fiable que le système d'exploitation dont il dépend.
- Comme il n'existe aucun moyen standardisé de stocker les clefs de chiffrement sur les différentes plateformes disponibles, le chiffrement de la base de données n'est pas encore disponible pour le client bureau de Delta Chat.


### Pourquoi peut-on choisir de ne consulter que le dossier Delta Chat ?

Il s'agit d'un paramètre expérimental à destination des personnes qui expérimentent avec des règles côté serveur. Tous les fournisseurs ne le prennent pas en charge, mais certains permettent de déplacer tous les courriels avec un en-tête "Chat-Version" dans le dossier DeltaChat. Normalement, cette action est réalisé par l'application Delta Chat.

Activer l'option "Ne consulter que le dossier Delta Chat" est intéressant si vous avez **à la fois** :

- activé une règle côté serveur pour déplacer tous les messages avec un en-tête "Chat-Version" dans le dossier Delta Chat ;
- modifié le paramètre "Voir les courriels classiques" pour "Non, seulement les discussions".

Si ces deux conditions sont remplies, Delta Chat n'a pas besoin de surveiller la boîte de réception, seulement le dossier Delta Chat.


### Comment changer mon compte pour une adresse courriel différente ?

1. Remplacez votre adresse courriel dans la fenêtre de configuration "Mot de passe et compte" et renseignez le mot de passe (ainsi que les paramètres serveur, si nécessaire) du nouveau compte.
2. Si vous le pouvez, demandez à votre ancien fournisseur de transférer tous vos courriels sur votre nouveau compte.
3. Informez vos contacts de votre changement d'adresse courriel. Si vous écrivez à un groupe vérifié, le changement sera pris en compte automatiquement par tout le monde.

Pour connaître les détails derrière ce procédé, [lisez notre article de blog en anglais](https://delta.chat/en/2022-09-14-aeap).


## Divers

### Est-ce que Delta Chat fonctionne avec _mon_ fournisseur de courriel ? 

- Il y a de bonnes chances que oui :)
Cependant, il faut activer des options spéciales pour que cela fonctionne correctement avec certains fournisseurs... Voir [la liste des fournisseurs](https://providers.delta.chat).


### Je veux administrer mon propre serveur courriel pour Delta Chat : que me conseillez-vous ?

- La plupart des serveurs courriel fonctionneront très bien. Mais nous conseillons de combiner mailcow et mailadm, ainsi que nous le décrivons [sur notre blog](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- Vous trouverez un [guide d'installation sur notre site internet](serverguide).


### Si Delta Chat se base sur le courrier électronique, est-ce vraiment une messagerie _instantanée_? 

- L'envoi et la réception de messages prennent généralement quelques secondes. Il arrive parfois que cela prenne plus de temps, mais c'est aussi le cas avec n'importe quelle autre messagerie.
- La messagerie instantanée est rapide quand les deux parties utilisent activement l'application. Elle peut devenir plus lente si l'application fonctionne en arrière-plan.
- La réception de messages peut alors prendre plusieurs minutes, car Android et iOS empêchent souvent Delta Chat de fonctionner en arrière-plan et ne le réveillent qu'occasionnellement. Ce délai artificiel est généralement pire sur iOS que sur Android.
- Cependant, le fait qu'Android et iOS tuent les applications fonctionnant en arrière-plan constitue un problème pour de nombreuses applications reconnues.
Pour plus d'informations, voir [dontkillmyapp.com](https://dontkillmyapp.com/).


### Delta Chat est-il compatible avec Protonmail / Tutanota / Criptext ?

- Oui et non.
- Non, vous ne pouvez pas utiliser votre compte Protonmail, Tutanota ou Cryptext avec Delta Chat, car ils ne permettent pas de recevoir les courriels en IMAP.
- Vous pouvez toujours utiliser Delta Chat pour envoyer des messages à des personnes utilisant Protonmail, Tutanota, or Criptext. Toutefois, ces messages ne seront pas chiffrés de bout en bout, car le chiffrement offert par ces fournisseurs n'est pas compatible avec [Autocrypt](https://autocrypt.org/), le protocole utilisé par Delta Chat.
- Delta Chat peut chiffrer des courriels de bout en bout avec un fournisseur de courriel utilisant [toute application de courriel compatible avec Autocrypt](https://autocrypt.org/dev-status.html).


### Les détails techniques m'intéressent. Pouvez-vous m'en dire plus ?

- Consultez les [standards utilisés dans Delta Chat]({% include standards-url %}).

### Est-ce qu'un audit indépendant des failles de sécurité a été réalisé sur Delta Chat ? {#security-audits}

Quatre audits indépendants ont été réalisés sur le projet Delta Chat ces dernières années :

- En 2019, [Include Security](https://includesecurity.com) a analysé les bibliothèques [PGP](https://github.com/rpgp/rpgp) et
[RSA](https://github.com/RustCrypto/RSA) de Delta Chat.
Aucune faille critique n'a été trouvée, mais deux failles sévères ont été identifiées et immédiatement réparées par nos soins.
Une faille de gravité moyenne ainsi que quelques failles de gravité moindre ont également été découvertes, sans qu'il soit toutefois possible de les exploiter dans le fonctionnement de Delta Chat.
Nous en avons néanmoins réparées certaines depuis le rapport d'audit.
Le rapport complet [est consultable ici](../assets/blog/2019-first-security-review.pdf).

- En 2020, [Include Security](https://includesecurity.com) a analysé les [bibliothèques principales](https://github.com/deltachat/deltachat-core-rust/) Rust de Delta Chat, ainsi que ses bibliothèques [IMAP](https://github.com/async-email/async-imap), [SMTP](https://github.com/async-email/async-smtp) et [TLS](https://github.com/async-email/async-native-tls).
Aucun problème grave ou critique n'a été découvert.
Le rapport a tout de même révélé quelques vulnérabilités de gravité moyenne, qui ne représentent pas une menace en elles-mêmes pour les utilisateurs et les utilisatrices de Delta Chat, car elles dépendent de l'environnement dans lequel Delta Chat est utilisé.
Pour des raison de compatibilité et de facilité d'utilisation, nous ne pouvons pas les pallier toutes et avons préféré fournir des préconisations de sécurité aux personnes exposées.
Le rapport complet [est consultable ici](../assets/blog/2020-second-security-review.pdf).

- Début 2023, [Cure53](https://cure53.de) a analysé le chiffrement d'acheminement des connexions réseau de Delta Chat et testé une configuration de serveur de courriel reproductible, telle que [recommandée sur ce site](serverguide).
Vous trouverez plus d'informations sur cet audit [sur notre blog](https://delta.chat/en/2023-03-27-third-independent-security-audit) ou dans [le rapport complet ici](../assets/blog/MER-01-report.pdf).

- Début 2023, nous avons réparé les failles de sécurité et de confidentialité de la fonctionnalité "partage d'appli web dans une discussion" liées à des dysfonctionnements en mode bac à sable, en particulier avec Chromium. Après quoi, nous avons soumis Delta Chat à un nouvel audit de sécurité indépendant par Cure53, puis effectué les réparations de toutes les failles découvertes pour la version 1.36 de nos applications, publiée en avril 2023. 
Vous trouverez [ici un article de fond complet à propos de la sécurité du chiffrement de bout-en-bout sur internet](https://delta.chat/en/2023-05-22-webxdc-security). 


### Comment est financé le développement de Delta Chat ?

Delta Chat ne reçoit par de fonds en capital-risque, n'est pas endetté et ne subit aucune pression pour générer de gros profits ou vendre ses utilisateurs et utilisatrices - en même temps que leurs amis et leur famille - à des annonceurs (ou pire). 
Nous préférons utiliser des fonds provenant d'institutions publiques, jusqu'à présent basées en Europe ou aux États-Unis, pour soutenir nos efforts de développement d'un système de messagerie diversifié et décentralisé, basé sur les contributions de la communauté du libre et de l'open-source.

Jusqu'à présent, le développement de Delta Chat a été financé par les sources suivantes :

- Le projet européen [NEXTLEAP](https://nextleap.eu) a financé la recherche et le développement des groupes vérifiés, ainsi que la configuration des protocoles de contact en 2017 et 2018. Il a également aidé à intégrer le chiffrement de bout-en-bout avec [Autocrypt](https://autocrypt.org).

- L'association [Open Technology Fund](https://opentechfund.org) nous a octroyé une première subvention en 2018/2019 (de 200.000$ environ), grâce à laquelle nous avons pu apporter des améliorations majeures à l'application Android et publier une première version Beta de l'application de bureau. Elle nous a aussi permis d'ancrer notre recherche UX de développement de fonctionnalités dans des contextes de droits humains.   
À ce sujet, vous pouvez consulter notre rapport en anglais ["Needfinding and UX report"](https://delta.chat/en/2019-07-19-uxreport).
La seconde subvention de 2019/2020 (environ 300.000$) nous a permis de publier des version iOS de Delta Chat, de convertir notre bibliothèque principale en Rust et de créer de nouvelles fonctionnalités pour toutes les plateformes.  

- La [NLnet foundation](https://nlnet.nl/) nous a octroyé une subvention de 46.000€ en 2019/2020 pour avoir achevé la liaison entre Rust et Python, ainsi que pour avoir instauré un système de chatbot. 

- En 2021, nous avons reçu un financement européen supplémentaire pour deux initiatives de Next Generation Internet : 97.000€ pour la création d'un [annuaire de la portabilité des fournisseurs de courriel](https://dapsi.ngi.eu/hall-of-fame/eppd/) (ou EPPD pour "e-mail provider portability directory"), et environ 90.000€ pour le développement du [portage des adresses courriel](https://nlnet.nl/project/EmailPorting/) (ou AEAP pour "email address porting"). Ces deux projets ont aussi permis une meilleure prise en charge de la fonctionnalité multi-compte, un QR code de contact plus performant et de nombreuses améliorations concernant la gestion des réseaux et les configurations de groupe sur toutes les plateformes.

- Entre la fin de l'année 2021 et mars 2023, nous avons bénéficié d'un fonds *Internet Freedom* (pour la "liberté d'internet", de 500.000$) du Bureau of Democracy, Human Rights and Labor (DRL) des États-Unis. 
Cet argent est venu soutenir nos deux objectifs de longue date ; à savoir améliorer la compatibilité de Delta Chat pour le rendre utilisable plus facilement avec un large éventail de serveurs de courriel dans le monde entier, et en améliorer la résistance et la sécurité dans les régions où les coupures internet et la censure d'internet sont monnaie courante.

- Début 2023, nous avons été acceptés dans le programme Entrust de Next Generation Internet (NGI) pour nos projets d'applications privées décentralisées. 
Le montant exact de la subvention reste à déterminer (autour de 100.000€). 
Ce financement nous permettra de continuer le développement des [appli webxdc partagées dans une discussion](https://webxdc.org). 

- Nous recevons parfois des dons ponctuels de la part de personnes privées. 
 En 2021 par exemple, une généreuse personne nous a envoyé 4000€ par virement bancaire, avec l'intitulé "continuez votre super travail de développement !". 💜 
 Nous utilisons l'argent de ces dons pour financer des rencontres entre développeurs et développeuses ou pour des dépenses ponctuelles difficiles à anticiper ou à rembourser avec des subventions publiques.
Recevoir plus de dons aide notre communauté de contributrices et contributeurs à devenir plus indépendante et à rester viable sur le long terme.

[Faire un don](donate){: .cta-button}

- Dernier point, mais certainement pas des moindres : quelques personnes passionnées et expertes ont apporté, et apportent toujours, leur contribution bénévole au développement de Delta Chat sans contrepartie financière - ou seulement de petites sommes. Sans leur énergie, Delta Chat n'en serait pas là aujourd'hui... et de très loin.

Les financements mentionnés précédemment sont gérés principalement par merlinux GmbH à Fribourg (Allemagne) et redistribués à plus d'une douzaine de contributeurs et contributrices du monde entier.

N'hésitez pas à consulter les [Canaux de contribution à Delta Chat Contribution](contribute) pour en savoir plus sur les différentes manières de contribuer, financières ou non.  
