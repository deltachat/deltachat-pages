---
title: Downloads verifiëren
layout: nl
---

# Downloads verifiëren

Bij de Android-versie kun je het APK-certificaat verifiëren middels één van de volgende SHA256-vingerafdrukken:

* Voor F-Droid-downloads: 
`{% include fingerprint-f-droid %}`

* Voor overige APK-downloads: <br>`{% include fingerprint-local %}`

Om de SHA256-vingerafdrukken van het APK-certificaat te tonen, kun je bijv. <br>`keytool -list -printcert -jarfile 1`<br>gebruiken.

