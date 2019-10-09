---
title: Скачать
layout: default-ru
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Delta/Android Загрузки (Бета)

[<img style="float:right" src="../assets/home/get-it-on-gplay-beta.png" alt="Beta testing on Google Play" width="200" />](https://play.google.com/store/apps/details?id=chat.delta)
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

Delta/Android is the most feature-rich and stable Delta Chat app. 

* [Загрузить из F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Загрузить бета-версию из Google Play Beta Channel](https://play.google.com/store/apps/details?id=chat.delta)
* [Загрузить APK](https://github.com/deltachat/deltachat-android/releases) (только для продвинутых пользователей)
* [Смотреть список изменений]({% include changelog-url %}), [участвовать в разработке приложения для Android](https://github.com/deltachat/deltachat-android/). 


# Delta/Desktop Загрузки (Бета)

Delta/Desktop хорошо для использовать на персональном компьютере или в связке с Android и iOS. 

* [download Latest for Mac OSX, Ubuntu 16.04-19.10 (scroll and click "assets")](https://github.com/deltachat/deltachat-desktop/releases/latest)

* [download experimental pre-release for Windows](https://github.com/deltachat/deltachat-desktop/releases/)

* [download for Linux from flathub (OUTDATED)](https://flathub.org/apps/details/chat.delta.desktop)

* [ЧАВО мультиклиентские](help#multiclient) страница как синхронизировать версию ПК с мобильными клиентами Delta. 

* [Просмотр изменения в log](https://github.com/deltachat/deltachat-desktop/blob/master/CHANGELOG.md),
  [оказать помощь в репозитарии для версии ПК](https://github.com/deltachat/deltachat-desktop/). 


# Delta/iOS Тестовый Полёт (Бета)

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Delta/iOS поддерживает базовые функции, но не все, что предоставлены в версиях для  для Android or Desktop. 
Беты предоставлены через Тестовый Полёт . 

- [testflight invite page](https://testflight.apple.com/join/uEMc1NxS) for your iPhone or iPad.

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

