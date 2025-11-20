---
title: Verifikoni Shkarkime
lang: sq
---

# Verifikoni Shkarkimet

## Android

Për Android, mund të verifikoni se dëshmia e nënshkrimit në APK përputhet me një nga shenjat vijuese SHA256 të gishtave: 

* Për shkarkime nga F-Droid: 
`{% include fingerprint-f-droid %}`

* Të tjera shkarkime APK: 
`{% include fingerprint-local %}`

Për shtypjen e shenjave të gishtave SHA256 të dëshmisë së nënshkrimit të APK-së mund të përdorni, për shembull, 
`keytool -printcert -jarfile <APK-file>`

## Desktop

Udhëzime të hollësishme rreth verifikimit mund të gjeni te `https://download.delta.chat/desktop/v<version>/signature.asc`

Kyçi publik i përdorur për nënshkrimin e hedhjeve në qarkullim të versionit për desktop jepet më poshtë dhe te <https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu>.

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

Shkarkim: [deltachat_certificate.asc.txt](../assets/deltachat_certificate.asc.txt)