---
title: Ověř si stažené soubory
lang: cs
---

# Ověř stažené soubory

Na Androidu lze ověřit certifikát APK souboru porovnáním s následujícím otiskem SHA256:  

* Pro stažení v F-Droidu:  
  `{% include fingerprint-f-droid %}`

* Ostatní stažené APK soubory:  
  `{% include fingerprint-local %}`

Zobrazit otisk SHA256 pro certifikát APK souboru lze napřiklad takto:  
`keytool -printcert -jarfile <APK-file>`

