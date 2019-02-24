---
title: Pobierz
layout: default-pl
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Delta/Android (Beta)

[<img style="float:right" src="../assets/home/get-it-on-gplay-beta.png" alt="Beta testing on Google Play" width="200" />](https://play.google.com/store/apps/details?id=chat.delta)
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

Delta/Android to najbardziej funkcjonalna i stabilna aplikacja DeltaChat. 

* [Pobierz z F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Pobierz z kanału Beta Google Play](https://play.google.com/store/apps/details?id=chat.delta)
* [Pobierz APK](https://github.com/deltachat/deltachat-android/releases) (tylko doświadczeni użytkownicy)
* [Zobacz dziennik zmian]({% include changelog-url %}), [wnieś coś do repozytorium Android](https://github.com/deltachat/deltachat-android/). 


# Delta/Desktop (Beta)

Delta/Desktop jest wystarczająco funkcjonalny i może być używany samodzielnie lub w połączeniu z systemem Android lub iOS. 

* [Pobierz dla Linuxa z flathub](https://flathub.org/apps/details/chat.delta.desktop)

* [Pobierz dla Mac z naszej strony GitHub](https://github.com/deltachat/deltachat-desktop/releases/).  

* [Obsługa systemu Windows w toku, potrzebna pomoc!](https://github.com/deltachat/deltachat-desktop/issues/606) 

* Strona [FAQ multi-klienta](help#multiclient) – jak zsynchronizować Desktop z inną aplikacją Delta. 

* [Zobacz dziennik zmian](https://github.com/deltachat/deltachat-desktop/blob/master/CHANGELOG.md),
  [wnieś coś do repozytorium Desktop](https://github.com/deltachat/deltachat-desktop/). 


# Delta/iOS na TestFlight (Beta)

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Delta/iOS obsługuje podstawową funkcjonalność, ale nie wszystkie funkcje oferowane przez Android lub Desktop. 
Wersje beta są dystrybuowane za pośrednictwem Testflight.

- [Strona z zaproszeniem do TestFlight](https://testflight.apple.com/join/WVoYFOZe) dla Twojego iPhona lub iPada.

- [Przyczyń się do rozwoju iOS](https://github.com/deltachat/deltachat-ios/). 

- Zeskanuj ten kod QR za pomocą aplikacji aparatu na swoim iPhonie/iPadzie

  ![Kod QR](../assets/home/deltachat_testflight_qrcode.png)


# Weryfikacja pobranych plików

W przypadku systemu Android można sprawdzić, czy certyfikat APK jest zgodny z jednym z poniższych odcisków palców SHA256: 

* Dla plików pobranych z F-Droid:  
  `{% include fingerprint-f-droid %}`

* Dla plików pobranych z innych miejsc:  
  `{% include fingerprint-local %}`

Do wydrukowania odcisków palców SHA256 certyfikatu podpisu aplikacji można użyć np.  
`keytool -list -printcert -jarfile <APK-file>`

