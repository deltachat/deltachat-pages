---
title: Downloads verifizieren
lang: de
---

# Downloads verifizieren

## Android

Um Android-APKs zu verifizieren, können Sie überprüfen, ob das Signatur-Zertifikat einem der folgenden SHA256-Fingerabdrücke entspricht:

* Für F-Droid-Downloads: 
`{% include fingerprint-f-droid %}`

* Andere APK-Downloads: 
`{% include fingerprint-local %}`

Um den SHA256-Fingerabduck des Signatur-Zertifikats anzuzeigen, kann z.B. das folgende Kommando verwendet werden: 
`keytool -printcert -jarfile <APK-file>`

## Desktop

You can find detailed instructions for verification at `https://download.delta.chat/desktop/v<version>/signature.asc`

The public key used for signing desktop releases is published below and on <https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu>.

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