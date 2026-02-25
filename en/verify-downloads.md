---
title: Verify Downloads
lang: en
---

# Verify Downloads

## Android

For Android, you can verify the signing certificate on the APK matches one of the following SHA256 fingerprints:  

* For F-Droid downloads:  
  `{% include fingerprint-f-droid %}`

* Other APK downloads:  
  `{% include fingerprint-local %}`

To print the SHA256 fingerprints of the APK signing certificate you can use eg.  
`keytool -printcert -jarfile <APK-file>`


## Desktop

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
