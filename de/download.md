---
title: Download
layout: default-de
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Delta/Android Downloads (Beta)

[<img style="float:right" src="../assets/home/get-it-on-gplay-beta.png" alt="Beta testing on Google Play" width="200" />](https://play.google.com/store/apps/details?id=chat.delta)
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

Delta/Android is the most feature-rich and stable Delta Chat app. 

* [Von F-Droid herunterladen](https://f-droid.org/app/com.b44t.messenger)
* [Vom Google Play Beta Kanal herunterladen](https://play.google.com/store/apps/details?id=chat.delta)
* [Download der APK](https://github.com/deltachat/deltachat-android/releases) (nur für erfahrene Anwender)
* [Änderungshistorie ansehen]({% include changelog-url %}), [Beitragen zur Android repo](https://github.com/deltachat/deltachat-android/). 


# Delta/Desktop Downloads (Beta)

Delta/Desktop ist gut verwendbar und kann einzeln oder in Verbindung mit Android oder iOS betrieben werden. 

* [download Latest for Mac OSX, Ubuntu 16.04-19.10 (scroll and click "assets")](https://github.com/deltachat/deltachat-desktop/releases/latest)

* [download experimental pre-release for Windows](https://github.com/deltachat/deltachat-desktop/releases/)

* [download for Linux from flathub (OUTDATED)](https://flathub.org/apps/details/chat.delta.desktop)

* [FAQ Multiclient](help#multiclient) Hilfe zur Synchronisation von Desktop mit einer anderen Delta-Applikation 

* [Changelog anzeigen](https://github.com/deltachat/deltachat-desktop/blob/master/CHANGELOG.md),
  [zu den Desktop-Quellen beitragen](https://github.com/deltachat/deltachat-desktop/). 


# Delta/iOS auf TestFlight (Beta)

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Delta/iOS unterstützt grundlegende Funktionen, aber nicht alle Features, die für Android oder Desktop angeboten werden. 
Betas werden über Testflight verteilt.

- [testflight invite page](https://testflight.apple.com/join/uEMc1NxS) for your iPhone or iPad.

- [zur Entwicklung für iOS beitragen](https://github.com/deltachat/deltachat-ios/). 

- Diesen QR-Code mit der Kamera-App des iPhone/iPad scannen

  ![QRCode](../assets/home/deltachat_testflight_qrcode.png)


# Downloads verifizieren

Um Android-APKs zu verifizieren, können Sie überprüfen, ob das Signatur-Zertifikat einem der folgenden SHA256-Fingerabdrücke entspricht:

* Für F-Droid Downloads:  
  `{% include fingerprint-f-droid %}`

* Andere APK downloads:  
  `{% include fingerprint-local %}`

Um den  SHA256-Fingerabduck des Signatur-Zertifikats anzuzeigen, kann z.B. das folgende Kommando verwendet werden:  
`keytool -list -printcert -jarfile <APK-Datei>`

