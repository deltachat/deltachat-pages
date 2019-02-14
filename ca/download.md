---
title: Descàrrega
layout: default-ca
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Delta/Android Downloads (Beta)

[<img style="float:right" src="../assets/home/get-it-on-gplay-beta.png" alt="Beta testing on Google Play" width="200" />](https://play.google.com/apps/testing/chat.delta)
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

Delta/Android is the most feature-rich and stable DeltaChat app. 

* [Download from F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Download from Google Play Beta Channel](https://play.google.com/apps/testing/chat.delta)
  (currenty, you have to use this link; the app is not yet listed in the main store)
* [Download APK](https://github.com/deltachat/deltachat-android/releases) (experienced users only)
* [View Changelog]({% include changelog-url %}), [contribute to the Android repo](https://github.com/deltachat/deltachat-android/). 


# Delta/Desktop Downloads (Beta)

Delta/Desktop is well usable and can be operated standalone or in conjunction with Android or iOS. 

* [download for Linux or Mac from our github release page](https://github.com/deltachat/deltachat-desktop/releases/).  

* [Windows support pending, help needed!](https://github.com/deltachat/deltachat-desktop/issues/606) 

* [FAQ multiclient](help#multiclient) page on how to synchronize Desktop with another Delta app. 

* [View Changelog](https://github.com/deltachat/deltachat-desktop/blob/master/CHANGELOG.md),
  [contribute to Desktop repository](https://github.com/deltachat/deltachat-desktop/). 


# Delta/iOS on TestFlight (Beta)

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Delta/iOS supports basic functionality but not all features offered by Android or Desktop. 
Betas are distributed via Testflight. 

- [testflight invite page](https://testflight.apple.com/join/WVoYFOZe) for your iPhone or iPad.

- [contribute to iOS development](https://github.com/deltachat/deltachat-ios/). 

- Scan this QR code with the camera app of your iPhone/iPad

  ![QRCode](../assets/home/deltachat_testflight_qrcode.png)


# Verificació de les descàrregues

Per Android, pots verificar que el certificat de signatura a l'APK coincideix amb alguna d'aquestes petjades SHA256:

* For F-Droid downloads:  
  `{% include fingerprint-f-droid %}`

* Other APK downloads:  
  `{% include fingerprint-local %}`

Si vols imprimir les petjades SHA256 del certificat de signatura APK  pots usar per ex.  
`keytool -list -printcert -jarfile <APK-file>`

