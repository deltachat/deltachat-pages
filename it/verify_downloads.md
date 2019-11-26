---
title: Verify Downloads
lang: it
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Verifica Download

Per Android, puoi verificare che il certificato di firma dell'APK corrisponda ad uno dei seguienti fingerprint SHA256:

* Per download da F-Droid:  
  `{% include fingerprint-f-droid %}`

* Altri download APK:  
  `{% include fingerprint-local %}`

Per stampare il fingerprint SHA256 del certificato di firma dell'APK, puoi usare ad es.  
`keytool -list -printcert -jarfile <APK-file>`