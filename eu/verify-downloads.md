---
title: Deskargak egiaztatu
lang: eu
---

# Deskargak egiaztatu

## Android

Android-erako, APK fitxategiaren sinadura-ziurtagiria ondorengo SHA256 hatz-marka hauetako batekin bat datorrela egiaztatu dezakezu:

* F-Droid bidezko deskargetarako:  
  `{% include fingerprint-f-droid %}`

* Beste APK deskarga batzuk::  
  `{% include fingerprint-local %}`

APKaren sinadura-ziurtagiriaren SHA256 hatz-markak bistaratzeko, adibidez, honako hau erabili dezakezu: `keytool -printcert -jarfile <APK-file>`


## Mahaigaina

1. Ireki terminala eta **aldatu direktorioa** egiaztatu nahi duzun fitxategia dagoen tokira, adibidez:  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Deskargatu sinatutako checksum-ak eta inportatu gakoa;** '<VERSION>' bertsio-zenbakiarekin ordezkatu behar da, adibidez: 2.33.0.

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

Gakoa [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu) helbidean ere eskuragarri dago.

3. **Egiaztatu eta aztertu emaitzak**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

Espero den emaitza:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

Ziurtatu hatz-marka bat datorrela eta egiaztatu nahi duzun fitxategia zerrendan agertzen dela.
Abisua normala da, ez baitiozu gakoari berariazko konfiantzarik eman.

Zure sisteman gpg apurtuta badago edo erabili ezin baduzu, honako hau erabil dezakezu: 
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` or  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
Kontuan izan azken honek osotasuna egiaztatzen duela, baina ez garatzailearen gakoa.
