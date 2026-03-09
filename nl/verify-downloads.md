---
title: Downloads verifiëren
lang: nl
---

# Downloads verifiëren

## Android

Bij de Android-versie kun je het APK-certificaat verifiëren middels één van de volgende SHA256-vingerafdrukken:

* Voor F-Droid-downloads: 
`{% include fingerprint-f-droid %}`

* Voor overige APK-downloads: <br>`{% include fingerprint-local %}`

Om de SHA256-vingerafdrukken van het APK-certificaat te tonen, kun je bijv. <br>`keytool -printcert -jarfile <APK-file>`<br>gebruiken.


## Computer

1. Open een terminalvester, **verander de map** in die waar het te verifiëren bestand staat, bijv.  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Download de controlesommen en importsleutel;**
   `<VERSION>` dient te worden vervangen door het versienummer, bijv. `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   De openbare sleutel is tevens beschikbaar op [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Verifieer en controleer de resultaten**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Verwachte uitvoer:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   Ga na of de vingerafdruk overeenkomt en dat het te verifiëren bestand vermeld is.
   De waarschuwing kan worden genegeerd, daar je de sleutel nog niet als vertrouwelijk hebt aangemerkt.

Als gpg niet naar behoren werkt, kun je deze opdracht gebruiken:  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` or  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
Maar let op: hierdoor wordt alléén de integriteit gecontroleerd, dus _niet_ de ontwikkelaarssleutel.
