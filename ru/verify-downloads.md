---
title: Проверка загрузок
lang: ru
---

# Проверка загрузок

## Android

Для Android вы можете проверить, что сертификат подписи на APK соответствует одному из следующих отпечатков SHA256:  

* Для загрузок с F-Droid:  
  `{% include fingerprint-f-droid %}`

* Для других загрузок APK:  
  `{% include fingerprint-local %}`

Чтобы вывести отпечатки SHA256 сертификата подписи APK, можно использовать, например:  
`keytool -printcert -jarfile <APK-file>`

## Компьютер

Открытый ключ, используемый для подписи версий для компьютера, опубликован ниже и на <https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu>.

Подробные инструкции по проверке можно найти по адресу `https://download.delta.chat/desktop/<version>/signature.asc` (например: инструкции для версии 1.59.1 можно найти по адресу: <https://download.delta.chat/desktop/v1.59.1/signature.asc>).

```
-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEaDSKLBYJKwYBBAHaRw8BAQdAbpU7t0wU34c3csvF60TBF+8NoH+xxew6vpG4
zjHdSlrNHWRlbHRhY2hhdC1zaWduaW5nQG1lcmxpbnV4LmV1wo8EEBYIADcCGQEF
Amg0iiwCGwMICwkIBwoNDAsFFQoJCAsCFgIBJxYhBGPNH4FbpWBRg3aZnGJuJsgW
lRMIAAoJEGJuJsgWlRMIQPoBAMjOBiayYuO2Eukfk1nC05sAOWeuEHuPnFugagMN
4ZjQAQCTS+YU83ydgv38sK6P5DykrrOaJRpxCA8K4xeRAPwlAM44BGg0iiwSCisG
AQQBl1UBBQEBB0Au68F0n/3QcRDzr2C3NYba3kCow4HkT/KnQs0YatVGdgMBCAfC
eAQYFggAIAUCaDSKLAIbDBYhBGPNH4FbpWBRg3aZnGJuJsgWlRMIAAoJEGJuJsgW
lRMIMYAA/3DQ+rGyobJzQjLcXgG3ZZoUe/WqIFZi2kIvG1k4h9uaAP9IwEKD/BmE
nHM0/o16fERF1PNx1mqPhUsXYQmUFPmeCg==
=isjO
-----END PGP PUBLIC KEY BLOCK-----
```

Загрузить: [deltachat_certificate.asc.txt](../assets/deltachat_certificate.asc.txt)