---
title: Aide
layout: default-fr
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Foire aux questions

- [Général](#general)
- [Groupes](#groups)
- [Chiffrement](#encryption)
- [Multi-client](#multiclient)
- [Divers](#miscellaneous)

# Général {#general}

## A qui puis-je écrire?

- Avec Delta Chat, vous pouvez écrire à toutes les adresses de courriel existantes, même si le destinataire n'utilise pas (encore) l'application Delta Chat. C'est l'une des plus grandes différences avec les autres messageries: le destinataire n'a pas besoin d'installer la même application que la vôtre.

## Quels sont les avantages de Delta Chat par rapport aux autres messageries?

- _Independent_ of any company or services. _You_ own your data.
- Your data are not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP
- _Largest userbase_ - receivers _not_ using Delta Chat can be reached as well
- _Compatible_ - not only to itself
- _Elegant_ and _simple_ user interface
- _Distributed_ system
- _No Spam_ - only messages of known users are shown by default
- _Reliable_ - safe for professional use
- _Trustworthy_ - can even be used for business messages
- fully _Open Source_ and _Standards_ based

## Que se passe-t'il si le destinataire n'utilise pas Delta Chat?

- Le destinataire recevra un courriel normal - s'il y répond, vous verrez la réponse dans l'application Delta Chat.

## Quels messages apparaissent dans Delta Chat?

Delta Chat affiche automatiquement ...

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Les autres messages n'apparaissent pas automatiquement. Vous pouvez voir les autres messages dans le menu principal de ** demandes de contact ** et, si vous le souhaitez, commencer une conversation à partir de là.

## Qu'en est-il des spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat prend-il en charge les images, vidéos et autres pièces jointes?

- Oui. À côté du texte brut, toutes les pièces jointes sont affichées comme des messages séparés. Les messages sortants recevront automatiquement les pièces jointes nécessaires.

## Est-ce que Delta Chat prend en charge les courriels en HTML?

- Oui, si le courriel entrant manque d'une partie en texte brut, Delta Chat convertit les courriels HTML en texte brut. Les courriels sortants utilisent toujours du texte brut.

# Groupes {#groups}

## Comment puis-je créer un groupe?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## How to add members to a group?

- Chaque membre du groupe a les **mêmes droits** que les autres. Pour cette raison, chacun peut supprimer tous les membres ou en ajouter de nouveaux.
- Pour ajouter ou supprimer des membres, cliquez sur le nom du groupe dans le chat.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Je me suis retiré(e) du groupe par accident.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## Je ne veux plus recevoir les messages d'un groupe.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Chiffrement {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Que dois-je faire pour activer le chiffrement bout en bout?

- Rien.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Si le chiffrement bout en bout n'est pas disponible, la connexion n'est pas chiffrée?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Comment puis-je vérifier le chiffrement?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Comment puis-je vérifier l'expéditeur?

Le profil de l'utilisateur affiche des informations supplémentaires:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Quels standards sont utilisés pour le chiffrement bout en bout?

- OpenPGP. Le transport des clés s'effectue via [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Oui. La meilleure façon est d'envoyer un message de transfert de clé Autocrypt à partir de l'autre client de courriel. Cherchez quelque chose comme **Lancer le transfert de clé Autocrypt** dans les paramètres de l'autre client et suivez les étapes indiquées là.

- Sinon, vous pouvez aussi importer les clés manuellement avec le menu "Paramètres avancés / Gérer les clés privés". Attention: assurez-vous que la clé n'est pas protégée par un mot de passe ou enlevez le auparavant.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Multi-client {#multiclient}

## Puis-je utiliser Delta Chat sur plusieurs appareils en même temps?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Divers {#miscellaneous}

## Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly; users have collected some of them in the forum at [Provider Overview](https://support.delta.chat/t/provider-overview/)


## Je suis intéressé par les détails techniques. Pouvez-vous m'en dire plus?

- Voir la page des [standards utilisés dans Delta Chat]({% include standards-url %}).
