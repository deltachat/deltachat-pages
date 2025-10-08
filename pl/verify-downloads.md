---
title: Weryfikacja pobranych plików
lang: pl
---

# Weryfikacja pobranych plików

## Android

W przypadku systemu Android można sprawdzić, czy certyfikat APK jest zgodny z jednym z poniższych odcisków palców SHA256: 

* Dla plików pobranych z F-Droid: 
`{% include fingerprint-f-droid %}`

* Dla plików pobranych z innych miejsc: 
`{% include fingerprint-local %}`

Do wydrukowania odcisków palców SHA256 certyfikatu podpisu aplikacji można użyć np.
`keytool -printcert -jarfile <APK-file>`

## Komputer stacjonarny

Szczegółowe instrukcje dotyczące weryfikacji można znaleźć pod adresem `https://download.delta.chat/desktop/v<version>/signature.asc` 

Klucz publiczny używany do podpisywania wydań na komputery stacjonarne jest opublikowany poniżej i na <https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu>.

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

Pobierz: [deltachat_certificate.asc.txt](../assets/deltachat_certificate.asc.txt)