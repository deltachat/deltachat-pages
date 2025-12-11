---
title: Verifica dei download
lang: it
---

# Verifica dei download

## Android

Per Android, puoi verificare che il certificato di firma dell'APK corrisponda ad una delle seguenti impronte SHA256:

* Per i download da F-Droid: 
`{% include fingerprint-f-droid %}`

* Altri download di APK: 
`{% include fingerprint-local %}`

Per stampare l'impronta SHA256 del certificato di firma dell'APK puoi usare, per esempio, <br>`keytool -printcert -jarfile <APK-file>`

## Desktop

È possibile trovare istruzioni dettagliate per la verifica all'indirizzo `https://download.delta.chat/desktop/v<version>/signature.asc`

La chiave pubblica utilizzata per firmare le versioni desktop è pubblicata di seguito e su <https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu>.

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

Scaricala: [deltachat_certificate.asc.txt](../assets/deltachat_certificate.asc.txt)