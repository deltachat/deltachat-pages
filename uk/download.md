---
title: Завантажити
layout: default-uk
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Delta/Android Завантаження (Бета)

[<img style="float:right" src="../assets/home/get-it-on-gplay-beta.png" alt="Beta testing on Google Play" width="200" />](https://play.google.com/store/apps/details?id=chat.delta)
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

Delta/Android is the most feature-rich and stable Delta Chat app. 

* [Download from F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Download from Google Play Beta Channel](https://play.google.com/store/apps/details?id=chat.delta)
* [Download APK](https://github.com/deltachat/deltachat-android/releases) (experienced users only)
* [View Changelog]({% include changelog-url %}), [contribute to the Android repo](https://github.com/deltachat/deltachat-android/). 


# Delta/Desktop Завантаження (Бета)

Delta/Desktop добре використовується на персональному комп'ютері або у поєднанні з Android і iOS.

* [download Latest for Mac OSX, Ubuntu 16.04-19.10 (scroll and click "assets")](https://github.com/deltachat/deltachat-desktop/releases/latest)

* [download experimental pre-release for Windows](https://github.com/deltachat/deltachat-desktop/releases/)

* [download for Linux from flathub (OUTDATED)](https://flathub.org/apps/details/chat.delta.desktop)

* [ЧаПи мультиклієнтські](help#multiclient) сторінка про те, як синхронізувати версію для ПК з мобільними клієнтами Delta.

* [Перегляд журналу змін](https://github.com/deltachat/deltachat-desktop/blob/master/CHANGELOG.md),
  [зробити внесок в репозитарій версії для ПК](https://github.com/deltachat/deltachat-desktop/).


# Delta/iOS Тестовий Політ (Бета)

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Delta/iOS підтримує базові функції, але не всі, які є у версіях для Android або ПК.
Бета-версії надані через Тестовий Політ.

- [testflight invite page](https://testflight.apple.com/join/uEMc1NxS) for your iPhone or iPad.

- [зробити внесок у розробку iOS](https://github.com/deltachat/deltachat-ios/).

- Скануйте цей QR-код за допомогою камери Вашого iPhone/iPad

 ![QR-код](../assets/home/deltachat_testflight_qrcode.png)


# Перевірка завантажених файлів

Для Android Ви можете перевірити автентичність, порівнявши відбитки сертифікату SHA256 інсталяційного файлу APK з наступними контрольними сумами:

* Для завантажень з F-Droid:
 `{% include fingerprint-f-droid %}`

* Інші завантаження APK:
  `{% include fingerprint-local %}`

Ви можете подивитися відбиток сертифікату SHA256, яким підписано інсталяційний файл APK, за допомогою команди
`keytool -list -printcert -jarfile <APK-file>`

