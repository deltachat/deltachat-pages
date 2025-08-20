---
title: Перевірка завантажених файлів
lang: uk
---

# Перевірка завантажених файлів

## Android

Для Android Ви можете перевірити автентичність, порівнявши відбитки сертифікату SHA256 інсталяційного файлу APK з наступними контрольними сумами:

* Для завантажень з F-Droid:
 `{% include fingerprint-f-droid %}`

* Інші завантаження APK:
  `{% include fingerprint-local %}`

Ви можете подивитися відбиток сертифікату SHA256, яким підписано інсталяційний файл APK, за допомогою команди
`keytool -printcert -jarfile <APK-file>`

## Комп'ютер

You can find detailed instructions for verification at `https://download.delta.chat/desktop/v<version>/signature.asc`

Відкритий ключ, який використовується для підписання десктопних випусків, опубліковано нижче та на <https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu>.

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

Завантажити: [deltachat_certificate.asc.txt](../assets/deltachat_certificate.asc.txt)