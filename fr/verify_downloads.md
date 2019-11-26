---
title: Vérification des téléchargements
lang: fr
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Vérifier les téléchargements

Pour Android, vous pouvez vérifier si le certificat de signature sur l’APK correspond à l’une des empreintes SHA256 empreintes suivantes :  

* Pour les téléchargements depuis F-Droid :  
  `{% include fingerprint-f-droid %}`

* Autres téléchargements des APK :  
  `{% include fingerprint-local %}`

To print the SHA256 fingerprints of the APK signing certificate you can use eg.  
`keytool -list -printcert -jarfile <APK-file>`