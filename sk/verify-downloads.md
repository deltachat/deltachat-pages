---
title: Overiť stiahnuté súbory
lang: sk 
---

# Overiť stiahnuté súbory

## Android

Pre Android môžete overiť, že podpisový certifikát na APK sa zhoduje s jedným z nasledujúcich odtlačkov SHA256:

* Pre sťahovanie F-Droid:
  `{% include fingerprint-f-droid %}`

* Ďalšie APK stiahnutia:
  `{% include fingerprint-local %}`

Na tlač odtlačkov SHA256 podpisového certifikátu APK môžete použiť napr.
`keytool -printcert -jarfile <APK-file> `

## Desktop

The public key used for signing desktop releases is published below and on <https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu>.

You can find detailed instructions for verification at `https://download.delta.chat/desktop/<version>/signature.asc` (example: for v1.59.1 you can find instructions in <https://download.delta.chat/desktop/v1.59.1/signature.asc>).

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

Download: [deltachat_certificate.asc.txt](../assets/deltachat_certificate.asc.txt)