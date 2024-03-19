---
title: Weryfikacja pobranych plików
lang: pl
---

# Weryfikacja pobranych plików

W przypadku systemu Android można sprawdzić, czy certyfikat APK jest zgodny z jednym z poniższych odcisków palców SHA256: 

* Dla plików pobranych z F-Droid: 
`{% include fingerprint-f-droid %}`

* Dla plików pobranych z innych miejsc: 
`{% include fingerprint-local %}`

Do wydrukowania odcisków palców SHA256 certyfikatu podpisu aplikacji można użyć np.
`keytool -printcert -jarfile <APK-file>`

