---
title: Verificar Descargas
lang: es
---

# Verificar Descargas

## Android

Para Android, puede verificar que el certificado de firma en la APK coincida con una de las siguientes firmas digitales SHA256:

* Para descargas de F-Droid:
`{% include fingerprint-f-droid %}`

* Otras descargas de APK:
`{% include fingerprint-local %}`

Para imprimir las firmas SHA256 del certificado de firma de APK, puede usar, por ejemplo:
`keytool -printcert -jarfile <APK-file>`


## Escritorio

1. Abre el terminal y **cambia de directorio** al archivo que quieras comprobar, por ejemplo:  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Descargar las sumas de verificación firmadas y la clave de importación;**
   Hay que sustituir `<VERSION>` por el número de versión, p. ej., `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   La clave también está disponible en [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Verifica y comprueba los resultados**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Resultado esperado:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   Asegúrate de que la huella digital coincida y de que el archivo que deseas verificar aparezca en la lista.
   La advertencia es normal, ya que no has marcado explícitamente la clave como de confianza.

Si GPG no funciona correctamente en tu sistema, puedes utilizar  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` o  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
ten en cuenta que este último comprueba la integridad, pero _no_ la clave del desarrollador.
