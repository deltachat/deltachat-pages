---
title: Vérifier téléchargements
lang: fr
---

# Vérifier les téléchargements

Pour Android, vous pouvez vérifier que le certificat de signature sur l'APK correspond à l'une des empreintes SHA256 suivantes :  

* Pour les téléchargements depuis F-Droid :  
  `{% include fingerprint-f-droid %}`

* Pour les téléchargements d'autres APK :  
  `{% include fingerprint-local %}`

Pour imprimer les empreintes SHA256 du certificat de signature de l'APK vous pouvez utiliser, par ex. `keytool -list -printcert -jarfile <APK-file>`

