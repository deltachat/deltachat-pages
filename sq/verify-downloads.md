---
title: Verifikoni Shkarkime
lang: sq
---

# Verifikoni Shkarkimet

## Android

Për Android, mund të verifikoni se dëshmia e nënshkrimit në APK përputhet me një nga shenjat vijuese SHA256 të gishtave: 

* Për shkarkime nga F-Droid: 
`{% include fingerprint-f-droid %}`

* Të tjera shkarkime APK: 
`{% include fingerprint-local %}`

Për shtypjen e shenjave të gishtave SHA256 të dëshmisë së nënshkrimit të APK-së mund të përdorni, për shembull, 
`keytool -printcert -jarfile <APK-file>`


## Desktop

1. Hapni terminalin tuaj dhe **ndryshoni drejtori** te kartela që doni të verifikohet, p.sh.,  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Shkarkoni checksum-e të nënshkruar dhe importoni kyçe;**
   `<VERSION>` duhet zëvendësuar me numrin e versionit, p.sh., `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   Kyçi mund të gjendet edhe në [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Bëni verifikimin dhe kontrolloni përfundimet**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Përfundim i pritshëm:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   Sigurohuni se shenjat e gishtit përputhen dhe se kartela që doni të verifikoni është e pranishme.
   Sinjalizimi është normal, ngaqë s’e keni besuar shprehimisht kyçin.

Nëse gpg në sistemin tuaj është e dëmtuar, mund të përdorni  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` ose  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
Kini parasysh se e dyta kontrollon integritetin, por _jo_ kyçin e zhvilluesit.
