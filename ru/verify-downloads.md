---
title: Проверка загрузок
lang: ru
---

# Проверка загрузок

Для Android вы можете проверить, что сертификат подписи на APK соответствует одному из следующих отпечатков SHA256:  

* Для загрузок с F-Droid:  
  `{% include fingerprint-f-droid %}`

* Для других загрузок APK:  
  `{% include fingerprint-local %}`

Чтобы вывести отпечатки SHA256 сертификата подписи APK, можно использовать, например:  
`keytool -printcert -jarfile <APK-file>`

