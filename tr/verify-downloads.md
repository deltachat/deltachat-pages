---
title: İndirmeleri Doğrula
lang: tr
---

# İndirmeleri Doğrula

Android için APK üzerindeki imzalama sertifikasının aşağıdaki SHA256 parmak izlerinin biriyle eşleştiğini doğrulayabilirsiniz:  

* F-Droid indirmeleri için:  
  `{% include fingerprint-f-droid %}`

* Diğer APK indirmeleri:  
  `{% include fingerprint-local %}`

APK imzalama sertifikasının SHA256 parmak izlerini yazdırmak için örn.  
`keytool -list -printcert -jarfile <APK dosyası>` kullanabilirsiniz

