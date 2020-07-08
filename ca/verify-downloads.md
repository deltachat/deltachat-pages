---
title: Verificació de les descàrregues
lang: ca
---

# Verificació de les descàrregues

Per Android, podeu verificar que el certificat signat a l'APK coincideix amb alguna de les següents empremtes SHA256:  

* Per les descàrregues d'F-Droid:  
  `{% include fingerprint-f-droid %}`

* Altres descàrregues APK:  
  `{% include fingerprint-local %}`

Si voleu imprimir les empremtes SHA256 del certificat de signatura APK podeu fer servir, per ex.  
`keytool -list -printcert -jarfile <APK-file>`

