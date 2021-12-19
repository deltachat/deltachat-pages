---
title: Overiť stiahnuté súbory
lang: sk 
---

# Overiť stiahnuté súbory

Pre Android môžete overiť, že podpisový certifikát na APK sa zhoduje s jedným z nasledujúcich odtlačkov SHA256:

* Pre sťahovanie F-Droid:
  `{% include fingerprint-f-droid %}`

* Ďalšie APK stiahnutia:
  `{% include fingerprint-local %}`

Na tlač odtlačkov SHA256 podpisového certifikátu APK môžete použiť napr.
`keytool -list -printcert -jarfile <APK-file> `

