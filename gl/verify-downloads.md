---
title: Verificar Descargas
lang: gl
---

# Verificar Descargas

En Android, podes verificar que o certificado da sinatura no APK concorda cunha de estas impresións dixitais SHA256:

* Nas descargas en F-Droid: 
 `{% include fingerprint-f-droid %}`

* Outras descargas APK: 
 `{% include fingerprint-local %}`

Para mostrar a impresión dixital SHA256 do certificado de sinatura do APK podes utilizar 
`keytool -printcert -jarfile <APK-file>`

