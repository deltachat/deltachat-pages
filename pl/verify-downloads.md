---
title: Weryfikacja pobranych plików
lang: pl
---

# Weryfikacja pobranych plików

## Android

W przypadku systemu Android można sprawdzić, czy certyfikat APK jest zgodny z jednym z poniższych odcisków palców SHA256: 

* Dla plików pobranych z F-Droid: 
`{% include fingerprint-f-droid %}`

* Dla plików pobranych z innych miejsc: 
`{% include fingerprint-local %}`

Do wydrukowania odcisków palców SHA256 certyfikatu podpisu aplikacji można użyć np.
`keytool -printcert -jarfile <APK-file>`


## Komputer stacjonarny

1. Open your terminal and **change directory** to the file you want to verify, eg.  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Download signed checksums and import key;**
   `<VERSION>` needs to be replaced by the version number, eg. `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   The key is also available at [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Verify and check results**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Expected output:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   Make sure the fingerprint matches and that the file you want to verify is listed.
   The warning is normal as you have not explicitly trusted the key.

If gpg is broken on your system, you can use  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` or  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
note, that the latter checks integrity but _not_ the developer's key.
