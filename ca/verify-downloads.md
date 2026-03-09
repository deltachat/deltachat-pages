---
title: Verificació de les baixades
lang: ca
---

# Verificació de les baixades

## Android

Per Android, podeu verificar que el certificat signat a l'APK coincideix amb alguna de les següents empremtes SHA256:  

* Per les baixades d'F-Droid:  
  `{% include fingerprint-f-droid %}`

* Altres baixades APK:  
  `{% include fingerprint-local %}`

Si voleu imprimir les empremtes SHA256 del certificat de signatura APK podeu fer servir, per ex.  
`keytool -printcert -jarfile <APK-file>`


## Escriptori

1. Obre un terminal i **canvia de directori** al fitxer que vols verificar, per exemple:  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Baixa el checksums signat i importa la clau;**
   `<VERSION>` cal substituir-lo pel número de versió, per exemple: `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   La clau també està disponible a [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Verificar i comprobar els resultats**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Resultat esperat:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
 gpg: AVÍS: Aquesta clau no ve certificada per una signatura de confiança! 
 gpg:     No hi ha res que indique que la signatura pertany al seu propietari. 
 Empremtes digital de la clau primària:
 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

Assegureu-vos que l'empremta digital coincideixi i que el fitxer que voleu verificar aparegui a la llista.
L'avís és normal, ja que no heu confiat explícitament en la clau.

Si gpg no funciona en el teu sistema, pots utilitzar  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` o  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
tingues en compte que aquest últim comprova la integritat però _no_ la clau del desenvolupador.
