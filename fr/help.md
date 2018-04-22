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

- Indépendant de toute entreprise ou de service. _Vous possédez vos propres données_.
- Vos données ne sont pas sauvegardées sur un serveur central; De cette façon, contrairement à la plupart des autres messageries, Delta Chat protège même vos métadonnées (qui écrit à qui?)
- Vous ne distribuez pas votre carnet d'adresses à qui que ce soit.
- _Rapide_ par l'utilisation de Push-IMAP
- _Le plus de destinataire_ - Même les destinataires utilisant _pas_ Delta Chat peuvent être contactés
- _Compatible_ - pas seulement avec lui-même
- Interface utilisateur _élegant_ et _simple_
- _Système distribué_
- _Pas de Spam_ - seuls les messages des utilisateurs connus sont affichés par défaut
- _Fiable_ - et _sûr_ pour un usage professionnel
- Entièrement _OpenSource_ et basé sur les _Standards_

## Que se passe-t'il si le destinataire n'utilise pas Delta Chat?

- Le destinataire recevra un courriel normal - s'il y répond, vous verrez la réponse dans l'application Delta Chat.

## Quels messages apparaissent dans Delta Chat?

Delta Chat affiche automatiquement ...

- Messages des contacts de votre **carnet d'adresses**
- Messages des contacts **contactés par vous**
- Les **réponses** aux messages envoyés par vous

Les autres messages n'apparaissent pas automatiquement. Vous pouvez voir les autres messages dans le menu principal de ** demandes de contact ** et, si vous le souhaitez, commencer une conversation à partir de là.

## Qu'en est-il des spam?

- Les messages dans les dossiers de spam courants sont ignorés et les adresses contenues ne sont pas considérées comme des contacts connus.
- Comme les messages provenant de contacts inconnus ne s'affichent pas automatiquement, normalement, il n'y a **pas de spam**.
- Cependant, si vraiment nécessaire, vous pouvez **bloquer** un contact.

## Delta Chat prend-il en charge les images, vidéos et autres pièces jointes?

- Oui. À côté du texte brut, toutes les pièces jointes sont affichées comme des messages séparés. Les messages sortants recevront automatiquement les pièces jointes nécessaires.

## Est-ce que Delta Chat prend en charge les courriels en HTML?

- Oui, si le courriel entrant manque d'une partie en texte brut, Delta Chat convertit les courriels HTML en texte brut. Les courriels sortants utilisent toujours du texte brut.

# Groupes {#groups}

## Comment puis-je créer un groupe?

- Sélectionnez **Créer un groupe** dans le "menu" dans le coin supérieur gauche de l'aperçu du chat.
- Sur l'écran suivant, sélectionnez les **membres du groupe** et cliquez sur la coche dans le coin supérieur droit. Après cela, vous pouvez définir un **nom de groupe**.
- Dès que vous écrivez le **premier message** dans le groupe, tous les membres sont informés du nouveau groupe et peuvent répondre dans le groupe (tant que vous n'écrivez pas un message dans le groupe, le groupe est invisible pour les membres du groupe).

## Qui peut ajouter des membres à un groupe?

- Chaque membre du groupe a les **mêmes droits** que les autres. Pour cette raison, chacun peut supprimer tous les membres ou en ajouter de nouveaux.
- Pour ajouter ou supprimer des membres, cliquez sur le nom du groupe dans le chat.

## Je me suis retiré(e) du groupe par accident.

- Comme vous n'êtes plus membre du groupe maintenant, vous ne pouvez pas vous ajouter à nouveau. Cependant, pas de problème, il suffit de demander à un autre membre du groupe dans un chat normal de vous ajouter à nouveau.

## Je ne veux plus recevoir les messages d'un groupe.

- Effacez-vous de la liste des membres ou supprimez tout le chat. Si vous souhaitez rejoindre le groupe plus tard, demandez à un autre membre du groupe de vous rajouter.
- Comme alternative, vous pouvez également "mettre silencieux" le groupe - en faisant cela, vous obtiendrez tous les messages et pouvez toujours écrire mais vous n'êtes plus averti de nouveaux messages.

# Chiffrement {#encryption}

## Delta Chat dispose-t-il d'un chiffrement bout en bout?

- Oui.

## Que dois-je faire pour activer le chiffrement bout en bout?

- Rien.

- Delta Chat (et d'autres programmes de messagerie compatibles [Autocrypt](https://autocrypt.org)) partagent automatiquement les clés requises pour le chiffrement bout en bout lorsque les premiers messages sont envoyés. Après cela, tous les messages suivants sont chiffrés de bout en bout automatiquement. Si l'un des partenaires de chat utilise ultérieurement une application qui ne peut pas utiliser le cryptage de bout en bout, elle est mise en pause pour cette fois et automatiquement réactivée dès que possible.

- Si vous souhaitez _désactiver_ le chiffrement bout en bout, utilisez le paramètre correspondant dans "Paramètres / Paramètres avancés".

## Si le chiffrement bout en bout n'est pas disponible, la connexion n'est pas chiffrée?

- Non, le chiffrement standard du courrier électronique est alors utilisé.


## Comment puis-je vérifier le chiffrement?

- Si un petit **cadenas** est affiché à côté d'un message, cela signifie que le message est chiffré de bout en bout _et_ est envoyé par l'expéditeur donné _et_ votre réponse sera également chiffrée de bout en bout.
- S'il n'y a pas de **cadenas**, le message est transporté normalement. Parce que vous ou l'expéditeur avez désactivé le chiffrement bout en bout ou que l'expéditeur utilise une application qui ne prend pas en charge le chiffrement bout en bout.


## Comment puis-je vérifier l'expéditeur?

Le profil de l'utilisateur affiche des informations supplémentaires:

- Pour un chiffrement bout en bout, Delta Chat affiche deux empreintes digitales. Si elles sont identiques sur l'appareil de votre partenaire de discussion, la connexion est sécurisée.
- Pour le chiffrement du transport, l'état est juste montré à cet endroit


## Quels standards sont utilisés pour le chiffrement bout en bout?

- OpenPGP. Le transport des clés s'effectue via [Autocrypt](https://autocrypt.org).

## Puis-je réutiliser ma clé privée existante?

- Oui. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for sth. like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Sinon, vous pouvez aussi importer les clés manuellement avec le menu "Paramètres avancés / Gérer les clés privés". Attention: assurez-vous que la clé n'est pas protégée par un mot de passe ou enlevez le auparavant.

Si vous n'avez pas de clé ou ne savez même pas que vous en auriez besoin, ne vous inquiétez pas: Delta Chat en génère une au besoin, vous n'avez rien à faire.

# Multi-client {#multiclient}

## Puis-je utiliser Delta Chat sur plusieurs appareils en même temps?

- Si vous souhaitez utiliser le **même compte** sur différents appareils, vous devez vous assurer que tous les appareils utilisent les mêmes clés pour le chiffrement:

 - Sur le premier appareil, choisissez "Paramètres avancés / Gérer les clés privées / Exporter la clé vers Téléchargements"
 - Via USB, copiez le fichier clé du répertoire "Téléchargements" du premier appareil vers le second.
 - Sur le second appareil, "Paramètres avancés / Gérer les clés privées / Importer les clefs depuis Téléchargements"

- Tout ceci n'est **pas nécessaire** pour l'utilisation standard de Delta Chat sur un seul appareil.

- NB: En mode multi-client, les messages _entrants_ sont affichés en même temps sur tous les clients. Les messages sortants sont synchronisés environ deux fois par heure. Nous pouvons améliorer cela, mais nous aurions besoin de plus de [soutien](../fr/contribute) sur cette question.


# Divers {#miscellaneous}

## Delta Chat sur Linux

- Vous pouvez exécuter Delta Chat sous Linux Ubuntu (ou d'autres distributions Linux supportant le format **snap**) en installant simplement [Anbox](https://anbox.io) (Android dans une boîte) à partir du terminal:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- Pour ajouter l'application delta chat, téléchargez le fichier *com.b44t.messenger_\<version\>.apk* à partir de [cette page](../fr/download) et installez-le à partir du terminal:

  $ *adb install path/to/com.b44t.messenger_\<version\>.apk*

 adb est le pont de débogage Android et peut être installé à partir du dépot.

- Au lieu d'installer Delta Chat directement via le fichier APK, vous pouvez d'abord installer le magasin F-Froid via [F-Droid-apk](https://f-droid.org/FDroid.apk), puis installer Delta Chat en utilisant le magasin. Le grand avantage est l'information sur les mises à jour et la migration des données de configuration et des discussions existantes.


## Problèmes de connexion

J'ai un problème avec ...

- Gmail: Activez "Supporter les applications moins sécurisées" et IMAP, vous pourriez recevoir un mail pour accorder la permission

## Je suis intéressé par les détails techniques. Pouvez-vous m'en dire plus?

- Voir la page des [standards utilisés dans Delta Chat]({% include standards-url %}).
