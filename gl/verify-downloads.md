---
título: Verificar Descargas
idioma: gl
---

# Verificar Descargas

En Android, podes verificar que certificado da sinatura no APK concorda con unha de estas pegadas dactilares SHA256:

* Nas descargas en F-Droid: 
 `{% include fingerprint-f-droid %}`

* Outras descargas APK: 
 `{% include fingerprint-local %}`

Para mostrar a pegada dactilar SHA256 do certificado de sinatura do APK podes utilizar 
`keytool -list -printcert -jarfile `

