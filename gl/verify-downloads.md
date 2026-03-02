---
title: Verificar Descargas
lang: gl
---

# Verificar Descargas

## Android

En Android, podes verificar que o certificado da sinatura no APK concorda cunha de estas impresións dixitais SHA256:

* Nas descargas en F-Droid: 
 `{% include fingerprint-f-droid %}`

* Outras descargas APK: 
 `{% include fingerprint-local %}`

Para mostrar a impresión dixital SHA256 do certificado de sinatura do APK podes utilizar 
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
