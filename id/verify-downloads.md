---
title: Verifikasi Unduhan
lang: id
---

# Verifikasi Unduhan

Untuk Android, Anda dapat memverifikasi sertifikat penandatanganan di APK cocok dengan salah satu sidik jari SHA256 berikut:

* Untuk unduhan F-Droid:  
  `{% include fingerprint-f-droid %}`

* Unduhan APK lainnya:  
  `{% include fingerprint-local %}`

Untuk mencetak sidik jari SHA256 dari sertifikat penandatanganan APK Anda dapat menggunakan misal.
`keytool -list -printcert -jarfile <APK-file>`

