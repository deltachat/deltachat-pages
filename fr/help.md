---
title: FAQ
lang: fr
render_toc: true
header: Questions Fréquentes
---



<!-- GENERATED FILE -- DO NOT EDIT -->




## What is Delta Chat?

Delta Chat est une application de clavardage qui utilise le courriel electronique pour délivrer ses messages et, si possible, les chiffre avec Autocrypt.


### Comment puis-je trouver des gens avec qui discuter ? 

Avec Delta Chat, vous pouvez écrire à toutes les adresses courriels existantes, même si le destinataire n'utilise pas l'application. Votre correspondant pourra simplement répondre à l'e-mail qu'il aura reçu. Contrairement aux autres messageries instantanées vos amis n'ont pas besoins d'installer le même client pour discuter avec vous.


### Quels sont les avantages de Delta Chat par rapport aux autres messageries ?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _Compatible_ - not only to itself.
- _Elegant_ and _simple_ user interface.
- _Distributed_ system.
- _No Spam_ - only messages of known users are shown by default.
- _Reliable_ - safe for professional use.
- _Trustworthy_ - can even be used for business messages.
- _Copyleft_ and _Standards_ based libre software.


### Quels messages apparaissent dans Delta Chat

Delta Chat affiche automatiquement :

- Messages des contacts de votre **carnet d'adresses**.
- Messages de vos contacts **contactés par vous**
- Réponses** aux messages envoyés par vous

Les autres messages n'apparaissent pas automatiquement. Vous pouvez les retrouver dans le menu principal, ** demandes de contact ** et, si vous le souhaitez, commencer une conversation à partir de là.


### A propos des spams

- Les messages contenus dans les dossiers indésirables courants sont ignorés et les adresses qu'ils contiennent ne sont pas considérées comme des contacts connus.
- Comme les messages provenant de contacts inconnus n'apparaissent pas automatiquement, normalement, il n'y a pas de **spam**.
- Cependant, si nécessaire, vous pouvez **bloquer** n'importe quel contact.


## Delta Chat prend-il en charge les images, vidéos et autres pièces jointes?

Oui. Comme le texte brut, toutes les pièces jointes aux e-mails sont affichées sous forme de messages séparés. Les messages sortants reçoivent automatiquement les pièces jointes nécessaires.


### Qui peut voir ma photo de profile ?

- Dans les paramètres vous pouvez joutez une photo de profile. Si vous écrivez à vos contacts ou que vous les ajoutez via le QR code, il la verront automatiquement comme votre photo de profile.

- Les contacts qui n'utilisent pas Delta Chat la retrouveront en pièce jointe.

- Pour des questions de confidentialité, personne ne peut voir votre photo de profile avant de vous avoir écrit.

- Votre photo de profile n'est pas envoyé avec chaque message, mais assez régulièrement afin que vos contacts aient une photo à jour même s'ils ajoutent un nouvel appareil.


### Est-ce que Delta Chat support les e-mails en HTML

- Oui, si le courriel entrant ne comprend pas le texte brut, Delta Chat convertit les courriels HTML en texte brut. Les courriels sortants sont du texte brut.


### Pourquoi dois-je entrer le mot de passe de mon compte E-mail dans Delta Chat ? Est-ce sécurisé ?

Comme pour les autres clients mail, Thunderbird, K9-Mail, Outlook, etc, 
celui-ci a besoin des identifiants / mots de passe pour recevoir et envoyer des E-mails. 
Bien sûr le mot de passe n'est uniquement stocké sur votre appareil. Le mot de passe n'est transmit qu'à votre fournisseur d'E-mail (lors de la connexion), qui a de toute manière accès à vos E-mails non chiffrés.

Si vous utilisez un fournisseur d'E-mail supportant OAuth2 comme gmail.com et yandex.ru
il n'est pas nécessaire de stocker votre mot de passe sur votre appareil. Dans ce cas, seulement un jeton d'accès est utilisé.

Comme Delta Chat est un logiciel libre, vous pouvez étudier le [code source](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) pour vérifier que vos identifiants / mots de passe sont utilisés de façon sécurisé. Nous sommes avares de retours pour renforcer la sécurité de l'application.


### Quels sont les permissions Delta Chat demande à Android ?

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

- Sélectionnez **Ajouter groupe** dans le "Menu sandwich" dans le coin supérieur droit de l'aperçu du tchat.
- Sur l'écran suivant, sélectionnez les **membres du groupe** et cochez la case dans le coin supérieur droit. Ensuite, vous pouvez définir un **nom de groupe**.
- Dès que vous écrivez le **premier message** dans le groupe, tous les membres sont informés du nouveau groupe et peuvent répondre dans le groupe (tant que vous n'écrivez pas un message dans le groupe, le groupe est invisible aux membres).


### Ajouter une personne à un groupe

- Chaque membre du groupe a les **mêmes droits** que les autres. Pour cette raison, chacun peut supprimer tous les membres ou en ajouter de nouveaux.
- Pour ajouter ou supprimer des membres, cliquez sur le nom du groupe dans le chat.


## Qu'est qu'un groupe vérifié ? Pourquoi est-ce une fonction expérimentale ?

- A verified group is a chat that gurantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature. 

- As of Dec 2019, a "verified group" remains an experimental feature.
  It is continously improved and many bugs have been fixed since the
  original introduction in 2018.  However, there remain cases, especially 
  with large groups where inconsistencies can occure, or messages become 
  unreadable.  Early 2020 a security review is upcoming, and several new
  developments around qr-join protocols are taking place so chances
  are we remove the "experimental" label not too far in the future. 


## Je me suis retiré du groupe par accident.

- Comme vous n'êtes plus membre du groupe, vous ne pouvez pas vous y ajouter à nouveau. 
Demandez simplement dans un tchat à n'importe quel autre membre de ce groupe de vous y ré-inviter.


### Je ne souhaite plus recevoir les message d'un groupe.

- Supprimez-vous de la liste des membres ou supprimez le tchat en entier. 
Si souhaitez rejoindre le groupe plus tard, demandez à un autre membre du groupe de vous ré-inviter.

- As an alternative, you can also "Mute" a group - doing so means you get all messages and 
  can still write, but are no longer notified of any new messages.


## Encryption {#encryption}

### Does Delta Chat support end-to-end-encryption?

- Yes. Delta Chat implements the Autocrypt Level 1 standard and can 
  thus E2E-encrypt messages with other Autocrypt-capable apps. 


### What do I have to do to activate the end-to-end-encryption?

- Rien.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _turn off_ the end-to-end-encryption, 
  use the corresponding setting in "Settings / Advanced settings".


### If end-to-end-encryption is not available, is the connection not encrypted at all?

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 


### How can I verify cryptographic status with a sender? 

The user's profile shows some additional info:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified.  Both will see a
  "sender verified" system message in their 1:1 chat. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, 
  the connection is safe.

- Pour le cryptage de la communication, cet état est juste affiché ici


### How can I check the encryption of messages?

- If a little **padlock** is shown beside a message, this denotes the message is end-to-end-encrypted _and_ is sent from the given sender _and_ that your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.


### Which standards are used for end-to-end-encryption?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. Moreover, 
  Delta Chat implements the "countermitm" protocols to achieve
  protection against active network attacks, going beyond the opportunistic
  base protection of Autocrypt, see questions about "Verified Groups".


### What is the difference between verified groups and 1:1 chats with verified contacts?

- 1:1 chats with a verified contact and verified groups are not the same, even
  if there are only 2 people in the verified group. One difference is that you
  could easily add more people to the group, but there are other implications as
  well.

- Verified groups are invariably secured. Any breakage (cleartext or wrongly
  signed messages etc.) will be flagged and such messages will not be shown in
  this chat. You can trust all messages in this verified-checkmark chat to have
  not been read/altered by middle parties.

- 1:1 chats are opportunistic, it is meant to allow people to communicate no
  matter if they change e-mail clients, devices, setups etc. That's why there
  is no verification checkmark, even if you have verified the contact.


### Does Delta Chat support Perfect Forward Secrecy?

- No, OpenPGP doesn't support Perfect Forward Secrecy. Perfect Forward Secrecy
  works session-oriented, but E-Mail is asynchronous by nature
  and often used from multiple devices independently. This means that if your
  Delta Chat private key is leaked, and someone has a record
  of all your in-transit messages, they will be able to read them.  

- Note that if anyone has seized or hacked your running phone, they will
  typically be able to read all messages, no matter if Perfect Forward Secrecy
  is in place or not. Having access to a single device from a member of a group,
  will typically expose a lot of the social graph. Using e-mail addresses that
  are not easily tracked back to persons helps group members to stay safer from
  the effects of device seizure. 

- We are sketching ways to protect communications better against the event
  of device seizure. 


### How does Delta Chat protect my Metadata?

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently know about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Can I re-use my existing private key?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Si vous n'avez pas de clé ou ne savez même pas que vous en auriez besoin, ne vous inquiétez pas : Delta Chat en génère une si nécessaire, vous n'avez pas besoin d'appuyer sur un bouton pour cela. 


### I can't import my existing PGP key into Delta Chat.

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You may remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Format wise, Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.


### Why don't you use pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Can I use Delta Chat on multiple devices at the same time?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to sync their encryption capabilities: 

- Sur le premier appareil, choisissez "Paramètres avancés / Envoyer le message de configuration du cryptage automatique". 
et cliquez jusqu'à ce qu'un "numéro de sécurité" s'affiche. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it, which should prompt you for the security number. 

- You are now synchronized, and can use both devices for
  sending and receiving E2E-encrypted messages with your communication partners. 


## Miscellaneous

### Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly,
  see [Provider Overview](https://providers.delta.chat)


### I'm interested in the technical details. Can you tell me more?

- See [Standards used in Delta Chat]({% include standards-url %}).

