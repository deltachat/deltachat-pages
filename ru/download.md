---
title: Скачать
layout: default-ru
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Delta/Android Загрузки (Бета)

[<img style="float:right" src="../assets/home/get-it-on-gplay-beta.png" alt="Beta testing on Google Play" width="200" />](https://play.google.com/store/apps/details?id=chat.delta)
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

Delta/Android приложение DeltaChat с большей функциональностью и стабильно. 

* [Download from F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Download from Google Play Beta Channel](https://play.google.com/store/apps/details?id=chat.delta)
* [Download APK](https://github.com/deltachat/deltachat-android/releases) (experienced users only)
* [View Changelog]({% include changelog-url %}), [contribute to the Android repo](https://github.com/deltachat/deltachat-android/). 


# Delta/Desktop Загрузки (Бета)

Delta/Desktop хорошо для использовать на персональном компьютере или в связке с Android и iOS. 

* [download for Linux from flathub](https://flathub.org/apps/details/chat.delta.desktop)

* [download for Mac from our github release page](https://github.com/deltachat/deltachat-desktop/releases/).  

* [Поддержка Windows ожидается, нужна помощь!](https://github.com/deltachat/deltachat-desktop/issues/606) 

* [ЧАВО мультиклиентские](help#multiclient) страница как синхронизировать версию ПК с мобильными клиентами Delta. 

* [Просмотр изменения в log](https://github.com/deltachat/deltachat-desktop/blob/master/CHANGELOG.md),
  [оказать помощь в репозитарии для версии ПК](https://github.com/deltachat/deltachat-desktop/). 


# Delta/iOS Тестовый Полёт (Бета)

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Delta/iOS поддерживает базовые функции, но не все, что предоставлены в версиях для  для Android or Desktop. 
Беты предоставлены через Тестовый Полёт . 

- [страница, приглашение для тестовых полётов](https://testflight.apple.com/join/WVoYFOZe) для вашего iPhone или iPad.

- [помощь в разработке iOS](https://github.com/deltachat/deltachat-ios/). 

- Сканируйте этот QR код с помощью камеры вашего iPhone/iPad

  ![QRКод](../assets/home/deltachat_testflight_qrcode.png)


# Данные для проверки целостности загруженных файлов

Для Android, проверить подлинность возможно сравнив отпечатки  SHA256 сертификата установочного файла .apk со следующими контрольными суммами:

* Для загрузок с F-Droid:  
  `{% include fingerprint-f-droid %}`

* Другие загрузки .apk:  
  `{% include fingerprint-local %}`

Посмотреть отпечаток сертификата  SHA256, которым подписан установочный файл APK, возможно, например, при помощи команды 
`keytool -list -printcert -jarfile <APK-file>`

