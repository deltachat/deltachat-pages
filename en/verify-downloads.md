---
title: Verify Downloads
lang: en
---

# Verify Downloads

For Android, you can verify the signing certificate on the APK matches one of the following SHA256 fingerprints:  

* For F-Droid downloads:  
  `{% include fingerprint-f-droid %}`

* Other APK downloads:  
  `{% include fingerprint-local %}`

To print the SHA256 fingerprints of the APK signing certificate you can use eg.  
`keytool -printcert -jarfile <APK-file>`

