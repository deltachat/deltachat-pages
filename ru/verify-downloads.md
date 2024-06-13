---
title: Проверка Загрузок
lang: ru
---

# Проверка Загрузок

Для Android вы можете проверить, что сертификат подписи на APK соответствует одному из следующих отпечатков SHA256: 

* Для загрузок с F-Droid: 
`{% include fingerprint-f-droid %}`

* Для других загрузок APK: 
`{% include fingerprint-local %}`

Для отображения отпечатков SHA256 сертификата подписи APK можно использовать, например, 
`keytool -printcert -jarfile <APK-file>`

