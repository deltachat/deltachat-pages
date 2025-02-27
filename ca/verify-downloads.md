---
title: Verificació de les baixades
lang: ca
---

# Verificació de les baixades

Per Android, podeu verificar que el certificat signat a l'APK coincideix amb alguna de les següents empremtes SHA256:  

* Per les baixades d'F-Droid:  
  `{% include fingerprint-f-droid %}`

* Altres baixades APK:  
  `{% include fingerprint-local %}`

Si voleu imprimir les empremtes SHA256 del certificat de signatura APK podeu fer servir, per ex.  
`keytool -printcert -jarfile <APK-file>`

