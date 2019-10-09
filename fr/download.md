---
title: Téléchargement
layout: default-fr
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Télécharger Delta/Android (Bêta)

[<img style="float:right" src="../assets/home/get-it-on-gplay-beta.png" alt="Beta testing on Google Play" width="200" />](https://play.google.com/store/apps/details?id=chat.delta)
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

Delta/Android is the most feature-rich and stable Delta Chat app. 

* [Télécharger depuis F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Télécharger depuis Google Play Beta Channel](https://play.google.com/store/apps/details?id=chat.delta)
* [Télécharger l'APK](https://github.com/deltachat/deltachat-android/releases) (utilisateurs avertis seulement)
* [Voir le journal des modifications]({% include changelog-url %}), [contribuer au dépôt Android](https://github.com/deltachat/deltachat-android/). 


# Télécharger Delta/Desktop pour votre ordinateur (Bêta)

Delta/Desktop est bien fonctionnel et peut être utilisé seul ou  combiné avec Android ou iOS. 

* [download Latest for Mac OSX, Ubuntu 16.04-19.10 (scroll and click "assets")](https://github.com/deltachat/deltachat-desktop/releases/latest)

* [download experimental pre-release for Windows](https://github.com/deltachat/deltachat-desktop/releases/)

* [download for Linux from flathub (OUTDATED)](https://flathub.org/apps/details/chat.delta.desktop)

* page [FAQ multi-client](aide#multi-client) sur comment synchroniser l'application ordinateur de bureau avec une autre application Delta. 

* [Voir journal des modifications](https://github.com/deltachat/deltachat-desktop/blob/master/CHANGELOG.md),
  [contribuer au dépôt Delta/Desktop](https://github.com/deltachat/deltachat-desktop/). 


# Delta/iOS sur le TestFlight (Bêta)

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Delta/iOS prend en charge les fonctionnalités de base, mais pas toutes les fonctionnalités offertes par Android ou Desktop. 
Les versions bêta sont distribuées via Testflight. 

- [testflight invite page](https://testflight.apple.com/join/uEMc1NxS) for your iPhone or iPad.

- [contribuer au développement iOS](https://github.com/deltachat/deltachat-ios/). 

- Numérisez ce QR code avec l'application caméra de votre iPhone/iPad

  ![QRCode](../assets/home/deltachat_testflight_qrcode.png)


# Vérifier les téléchargements

Pour Android, vous pouvez vérifier que la signature du certificat de l'APK correspond à l'une des empreintes SHA256 suivantes:

* Pour téléchargements F-Droid :  
  `{% include fingerprint-f-droid %}`

* Autres téléchargements d'APK :  
  `{% include fingerprint-local %}`

La commande suivante peut être utilisée pour afficher l'empreinte SHA256 du certificat de signature: 
`keytool -list -printcert -jarfile <APK-file>`

