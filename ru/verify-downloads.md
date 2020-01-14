---
title: Проверка загрузок
lang: ru
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Проверка загрузок

Для Android вы можете проверить, что сертификат подписи на APK соответствует одному из следующих отпечатков SHA256: 

* Для загрузок с F-Droid: 
`{% include fingerprint-f-droid %}`

* Для других загрузок APK: 
`{% include fingerprint-local %}`

Для отображения отпечатков SHA256 сертификата подписи APK можно использовать, например, 
`keytool -list -printcert -jarfile 1`

