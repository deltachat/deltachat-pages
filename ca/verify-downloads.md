---
title: Verificació de les baixades
lang: ca
---

# Verificació de les baixades

## Android

Per Android, podeu verificar que el certificat signat a l'APK coincideix amb alguna de les següents empremtes SHA256:  

* Per les baixades d'F-Droid:  
  `{% include fingerprint-f-droid %}`

* Altres baixades APK:  
  `{% include fingerprint-local %}`

Si voleu imprimir les empremtes SHA256 del certificat de signatura APK podeu fer servir, per ex.  
`keytool -printcert -jarfile <APK-file>`

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