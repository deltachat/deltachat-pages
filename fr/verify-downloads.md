---
title: Vérifier téléchargements
lang: fr
---

# Vérifier les téléchargements

## Android

Pour Android, vous pouvez vérifier que le certificat de signature sur l'APK correspond à l'une des empreintes SHA256 suivantes :  

* Pour les téléchargements depuis F-Droid :  
  `{% include fingerprint-f-droid %}`

* Pour les téléchargements d'autres APK :  
  `{% include fingerprint-local %}`

Pour afficher les empreintes SHA256 du certificat de signature de l'APK vous pouvez utiliser, par exemple `keytool -printcert -jarfile <APK-file>`

## Version PC

1. Ouvrez un terminal et **placez vous dans le dossier** où se trouve le fichier que vous voulez vérifier, par exemple  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Téléchargez les sommes de contrôle signées et importez la clé;**
   `<VERSION>` doit être remplacé par le numéro de version, par exemple `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   La clé est également disponible sur [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Vérifiez et contrôlez le résultat**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Résultat attendu:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   Assurez-vous que l'empreinte corresponde et que le fichier que vous voulez vérifier est listé.
   L'alerte (warning) est normale puisque vous n'avez pas explicitement défini la clé comme de confiance.

Si gpg ne fonctionne pas sur votre système, vous pouvez faire  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` or  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
Notez que les commandes précédentes contrôlent l'intégrité mais _pas_ la clé du développeur.