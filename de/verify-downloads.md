---
title: Downloads verifizieren
lang: de
---

# Downloads verifizieren

## Android

Um Android-APKs zu verifizieren, prüfe, ob das Signatur-Zertifikat einem der folgenden SHA256-Fingerabdrücke entspricht:

* Für F-Droid-Downloads: 
`{% include fingerprint-f-droid %}`

* Andere APK-Downloads: 
`{% include fingerprint-local %}`

Um den SHA256-Fingerabduck des Signatur-Zertifikats anzuzeigen, kann z.B. das folgende Kommando verwendet werden: 
`keytool -printcert -jarfile <APK-file>`


## Desktop

1. Öffnen dein Terminal und **wechsle in das Verzeichnis** in dem sich die zu überprüfende Datei befindet, z. B.  `deltachat-desktop_1_amd64.deb`

2. **Signierte Prüfsummen und Importschlüssel herunterladen;** `<VERSION>` muss durch die Versionsnummer ersetzt werden, z. B. `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   Der Schlüssel ist auch unter [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu) verfügbar

3. **Ergebnisse überprüfen und kontrollieren**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Erwartetes Ergebnis:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   Vergewissere dich, dass der Fingerabdruck übereinstimmt und dass die Datei, die du überprüfen möchtest, aufgeführt ist. Die Warnung ist normal, da du dem Schlüssel nicht ausdrücklich vertraut hast.

Falls `gpg` auf deinem System nicht funktioniert, kannst du folgendes tun: 
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` oder  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
beachte, dass letzteres die Integrität prüft, aber _nicht_ den Schlüssel des Entwicklers.
