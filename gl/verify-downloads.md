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


## Escritorio

1. Abre o terminal e **cambia de directorio** ao ficheiro que queres verificar, por exemplo.
 `deltachat-desktop_<VERSION>_amd64.deb`

2. **Descargar a suma de comprobación asinadas e importar clave;**
`<VERSION>` debe ser substituído polo número de versión, por exemplo, `2.33.0`

```
wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
wget https://delta.chat/assets/deltachat_certificate.asc.txt
gpg --importar deltachat_certificate.asc.txt
 ```

A clave tamén está dispoñible en [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Verificar e comprobar os resultados**

 ```
gpg --descifrar sumas-de-comprobación-asinadas.txt | shasum -a 512 --ignorar-falta -c -
 ```

Saída esperada:

 ```
gpg: Sinatura correcta de "deltachat-signing@merlinux.eu" [descoñecido]
gpg: AVISO: Esta chave non está certificada cunha sinatura de confianza!
gpg: Non hai ningunha indicación de que a sinatura pertenza ao propietario.
Pegada dixital da clave primaria: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
<FILE>:OK
 ```

   Asegúrate de que a pegada coincida e de que o ficheiro que queres verificar figure na lista.
   A advertencia é normal xa que non confiaches explicitamente na chave.

Se gpg está roto no teu sistema, podes usar 
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` ou 
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
ten en conta que o último comproba a integridade pero _non_ a chave do desenvolvedor.
