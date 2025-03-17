---
titre : Chatmail pour une messagerie instantanée, interopérable et qui préserve votre vie privée
lang : fr
---


## Qu'est-ce qu'un serveur chatmail et comment en choisir un ? 

<img alt="Chatmail logo" src="../assets/logos/chatmail.svg" width="80" style="float:right;" />

Les serveurs Chatmail sont optimisés pour la messagerie avec Delta Chat 
afin d'offrir à l'utilisateur une expérience rapide et respectueuse de confidentialité, 
interopérables en toute sécurité avec les serveurs chatmail et de courriel classiques. 
**Appuyez sur le lien d'un serveur de messagerie instantanée** pour voir la page d'accueil et appuyez sur le code d'invitation QR qui s'y trouve : 

- [nine.testrun.org](https://nine.testrun.org) est le serveur de messagerie instantanée par défaut 
  par défaut pour les applications Delta Chat et est stable depuis l'[annonce de Chatmail de décembre 2023](https://delta.discussion/en/2023-12-13-chatmail).

- [mehl.cloud](https://mehl.cloud) est orienté vers les utilisateurs germanophones.
   et est stable depuis janvier 2024.

- [mailchat.pl](https://mailchat.pl) s'adresse aux personnes parlant le polonais
et est stable depuis janvier 2024.

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/)
  s'adresse aux utilisateurs italophones et est  
  stable depuis mai 2024.

- [chika.aangat.lahat.computer](https://chika.aangat.lahat.computer/)
  opère aux États-Unis et est stable depuis juillet 2024.

- [tarpit.fun](https://tarpit.fun)
  est hébergé en Autriche et est stable depuis décembre 2024.

There are also additional chatmail servers not listed publically.  
All chatmail servers are operated by different groups and people. 
The nine.testrun.org default server is operated by core Delta Chat team members. 


## Puis-je également utiliser un serveur courriel classique au lieu de chatmail ?

Oui, de nombreux utilisateurs utilisent avec succès des serveurs de courriel ordinaires
surtout s'ils veulent gérer leurs e-mails classiques avec Delta Chat.
Voir la [base de données des fournisseurs](https://providers.delta.chat) pour les options.
Notez que Delta Chat vous permet d'avoir plusieurs comptes, donc
il n'y a pas de problème à avoir un compte configuré avec votre adresse e-mail habituelle,
et un autre compte pour le chat.


## En quoi les serveurs chatmail sont-ils différents des serveurs e-mail ?

Les serveurs Chatmail sont des serveurs de courriel minimalistes conçus pour la vitesse, la sécurité et la facilité d'usage :

- Facilité d'usage : **Rejoignez automatiquement en quelques secondes et recevez des notifications push

- **confidentialité:** Aucune question n'est posée, aucun nom, numéro ou courriel n'est nécessaire.

- Vitesse : la livraison des messages s'effectue en moins d'une seconde, de bout en bout.

- **Fiabilité:** Pas de contrôle de spam ou de limite de bridage

- **Sécurité:** Les messages sortants doivent être transmis de bout en bout à l'adresse chiffré,
  l'authenticité des messages entrants est strictement vérifiée.


## Quelle est la fiabilité des serveurs chatmail ?

Chaque serveur chatmail fournit des informations supplémentaires sur leur politique de confidentialité sur sa page web.
En règle générale, un serveur chatmail ne traite que les messages chiffrés et
met en œuvre la suppression automatique et inconditionnelle des messages au bout de 20 jours au maximum.

Delta Chat fournit [un chiffrement garanti de bout en bout E2E](https://delta.discussion/fr/2023-11-23-jumbo-42)
ce qui signifie que dans la plupart des cas d'utilisation, les opérateurs du serveur ne peuvent jamais lire vos messages, même s'ils essaient,
une garantie soutenue par une récente [analyse de sécurité de l'ETH Zurich](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin).


## Comment fonctionnent les serveurs chatmail ? Puis-je en faire fonctionner un moi-même ? {#selfhosted}

Tous les serveurs chatmail sont automatiquement déployés et mis à jour à l'aide de
[du dépôt public de développement de Chatmail](https://github.com/deltachat/chatmail).
Les serveurs de chatmail sont constitués de composants standard éprouvés des serveurs e-mail,
[Postfix](https://postfix.org) et [Dovecot](https://dovecot.org),
et sont configurés pour fonctionner sans surveillance et ne nécessiter que très peu d'efforts de maintenance.
Les serveurs Chatmail fonctionnent volontiers sur du matériel bas de gamme comme un Raspberry Pi.


# Comment sont financés les serveurs chatmail ?

Les serveurs chatmail sont conçus pour être très économique à héberger,
et sont généralement autofinancés par les opérateurs.
Pour plus d'informations, veuillez consulter la page d'accueil de chaque serveur chatmail.

Pour aider le développement du chatmail et le fonctionnement du serveur d'accueil par défaut
vous êtes les bienvenus pour apporter votre contribution.

[Faire un don](donate){: .cta-button}
