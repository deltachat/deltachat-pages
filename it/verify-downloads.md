---
title: Verifica dei download
lang: it
---

# Verifica dei download

## Android

Per Android, puoi verificare che il certificato di firma dell'APK corrisponda ad una delle seguenti impronte SHA256:

* Per i download da F-Droid: 
`{% include fingerprint-f-droid %}`

* Altri download di APK: 
`{% include fingerprint-local %}`

Per stampare l'impronta SHA256 del certificato di firma dell'APK puoi usare, per esempio, <br>`keytool -printcert -jarfile <APK-file>`


## Desktop

1. Apri il terminale e **cambia cartella** per trovare il file che vuoi verificare, ad esempio
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Scarica i codici di verifica firmati e importa la chiave;**
   `<VERSION>` deve essere sostituito dal numero di versione, ad esempio `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   La chiave è disponibile anche su [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Verifica e controlla i risultati**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Risultato previsto:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   Assicurati che l'impronta digitale corrisponda e che il file che desideri verificare sia elencato.
L'avviso è normale, poiché non hai esplicitamente considerato attendibile la chiave.

Se gpg è danneggiato sul tuo sistema, puoi usare
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` or  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
si noti che quest'ultimo verifica l'integrità ma _non_ la chiave dello sviluppatore.
