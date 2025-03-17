---
title: Ověření stažených souborů
lang: cs
---

# Ověření stažených souborů

Na systému Android můžete ověřit, zda podpisový certifikát souboru APK odpovídá jednomu z následujících otisků SHA256:  

* Pro soubory z F-Droidu:  
  `{% include fingerprint-f-droid %}`

* Ostatní soubory APK:  
  `{% include fingerprint-local %}`

Zobrazit otisk SHA256 pro certifikát APK souboru lze napřiklad následujícím příkazem:  
`keytool -printcert -jarfile <APK-file>`

