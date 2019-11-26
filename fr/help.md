---
title: FAQ
lang: fr
render_toc: true
header: Foire aux questions
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Général {#general}

## C’est quoi Delta Chat ? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat is a new chat app that sends messages via e-mails, encrypted if possible, with Autocrypt. 
**You do not have to sign up anywhere, just use your existing e-mail account with Delta Chat.** 

## Comment puis-je trouver des gens avec qui discuter ? 

With Delta Chat, you can write to every existing e-mail address - even
if the recipient is not using the Delta Chat app. No need for the
recipient to install the same app as yours, as with other messengers.

## Quels sont les avantages de Delta Chat par rapport aux autres messageries ?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
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

## Quels messages apparaissent dans Delta Chat ?

Delta Chat affiche automatiquement :

- Messages des contacts de votre **carnet d'adresses**.
- Messages de vos contacts **contactés par vous**
- Réponses** aux messages envoyés par vous

Other messages do not appear automatically, and are to be found in the main menu at **Contact requests**. If desired a chat can be started from there.

## Qu’en est-il du spam ?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there is **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat prend-il en charge les images, vidéos et autres pièces jointes ?

- Yes. Beside the plain text, all e-mail attachments are displayed as separate messages. Outgoing messages get attachments as needed automatically.

## Delta Chat prend-il en charge les courriels en HTML ?

- Yes. If incoming e-mail lacks a plain text part, HTML-emails is converted to plain text in the app. Outgoing e-mails always use plain text.

# Groupes {#groups}

## Création d’un groupe

- Sélectionnez **Ajouter groupe** dans le "Menu sandwich" dans le coin supérieur droit de l'aperçu du tchat.
- Sur l'écran suivant, sélectionnez les **membres du groupe** et cochez la case dans le coin supérieur droit. Ensuite, vous pouvez définir un **nom de groupe**.
- Dès que vous écrivez le **premier message** dans le groupe, tous les membres sont informés du nouveau groupe et peuvent répondre dans le groupe (tant que vous n'écrivez pas un message dans le groupe, le groupe est invisible aux membres).

## Ajouter de membres à un groupe

- Chaque membre du groupe a les **mêmes droits** que les autres. Pour cette raison, chacun peut supprimer tous les membres ou en ajouter de nouveaux.
- Pour ajouter ou supprimer des membres, cliquez sur le nom du groupe dans le chat.

## Qu'est qu'un groupe vérifié ?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other. It enforces e2e group encryption that is safe against provider or 
  network attacks. However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Je me suis retiré(e) du groupe par accident.

- As you're no longer a group member, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to re-add you.

## Je ne veux plus recevoir les messages d'un groupe.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group again later on, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so means you get all messages and 
  can still write, but are no longer notified of any new messages.

# Chiffrement {#encryption}

## Est-ce que Delta Chat supporte le chiffrement de bout en bout ?

- Yes. Delta Chat implements the Autocrypt Level 1 standard and can 
  thus E2E-encrypt messages with other Autocrypt-capable apps. 

## Que dois-je faire pour activer le chiffrement bout en bout ?

- Rien.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _turn off_ the end-to-end-encryption, 
  use the corresponding setting in "Settings / Advanced settings".

## Si le chiffrement bout en bout n’est pas disponible, la connexion n’est-elle pas chiffrée ?

- No. With most mail servers will then use _transport encryption_ (TLS).


## Comment puis-je vérifier le chiffrement ?

- If a little **padlock** is shown beside a message, this denotes the message is end-to-end-encrypted _and_ is sent from the given sender _and_ that your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.


## Comment puis-je vérifier l’expéditeur ?

The user's profile shows some additional info:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, the connection is safe.

- Pour le cryptage de la communication, cet état est juste affiché ici


## Quels standards sont utilisés pour le chiffrement bout en bout ?

- OpenPGP. Le transport des clés s'effectue via [Autocrypt](https://autocrypt.org).

## Puis-je réutiliser ma clé privée existante ?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Si vous n'avez pas de clé ou ne savez même pas que vous en auriez besoin, ne vous inquiétez pas : Delta Chat en génère une si nécessaire, vous n'avez pas besoin d'appuyer sur un bouton pour cela. 

## Je ne peux pas importer ma clé PGP existante dans Delta Chat.

In general, Delta Chat should support "common" private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat. Please remove the
encryption and the password and try the import again.

Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.

# Multi-client {#multiclient}

## Puis-je utiliser Delta Chat sur plusieurs appareils en même temps ?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to sync their encryption capabilities: 

- Sur le premier appareil, choisissez "Paramètres avancés / Envoyer le message de configuration du cryptage automatique". 
et cliquez jusqu'à ce qu'un "numéro de sécurité" s'affiche. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it, which should prompt you for the security number. 

- You are now synchronized, and can use both devices for
  sending and receiving E2E-encrypted messages with your communication partners. 

# Divers {#miscellaneous}

## Est-ce Delta Chat fonctionne avec mon service de courriel ?

- Avec de bonnes chances : Oui :) 
Cependant, certains fournisseurs ont besoin d'options spéciales pour fonctionner correctement ; les utilisateurs ont rassemblé certaines d'entre elles dans le forum à l'adresse [Aperçu des fournisseurs](https://support.delta.chat/t/provider-overview/)


## Je suis intéressé par les détails techniques. Pouvez-vous m’en dire plus ?

- Voir les [normes utilisées dans Delta Chat]({% include standards-url %}).
