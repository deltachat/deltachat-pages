---
title: Скачать
layout: default-ru
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Скачать Delta Chat

**В настоящее время Delta Chat находится в стадии активной разработки**

Версия программы в статусе бета для Android доступна на F-Droid. После [версии 1.0](https://github.com/deltachat/deltachat-android/milestone/1) будет доступна и на Google Play. 
Кроме того в планах выпустить приложение и для iOS, Mac, Linux или Windows.
Вы также можете принять активное [участие](contribute) в разработке.

## Android (Бета)

<img src="../assets/home/get-it-on-gplay.png" alt="Get it on Google Play" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

* [Загрузить из F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Загрузить .apk файл](https://github.com/deltachat/deltachat-android/releases) (только для продвинутых пользователей)
* [Посмотреть список изменений]({% include changelog-url %})


## Apple

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Разработка для iOS уже начата, но находится в ранней стадии. Будем рады новым [участникам](contribute) :)


## Linux

Delta Chat для Linux пока недоступен. Тем не менее вы можете запустить Android приложение в [Anbox](https://anbox.io) (Android in a Box) на вашем ПК.
Более подробная информация представлена ​на [FAQ](help#multiclient) странице.


# Данные для проверки целостности загруженных файлов

При использовании ОС Android, проверить подлинность возможно сравнив отпечатки  SHA256 сертификата установочного файла (.apk) со следующими контрольными суммами:

* Для файлов, полученных из магазина приложений F-Droid: 
 `{% include fingerprint-f-droid %}`
* Для установочных файлов .apk, полученных из других источников:
`{% include fingerprint-local %}`

Посмотреть отпечаток сертификата  SHA256, которым подписан установочный файл APK, возможно, например, при помощи команды 
`keytool -list -printcert -jarfile <APK-file>`

