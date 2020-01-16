---
titre: Vérifier téléchargements
lang: fr
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Vérifier téléchargement

Pour Android, vous pouvez vérifier le que certificat de signature sur l'APK correspond à l'une des empreintes SHA256 suivantes:  

* Pour téléchargement F-Droid:  
  `{% include fingerprint-f-droid %}`

* téléchargement d'autres APK :  
  `{% include fingerprint-local %}`

Pour imprimer les empreintes SHA256 du certificat de signature de l'APK vous pouvez utiliser par ex. `keytool -list -printcert -jarfile <APK-file>`

