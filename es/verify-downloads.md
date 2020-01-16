---
title: Verificar Descargas
lang: es
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Verificar Descargas

Para Android, puede verificar que el certificado de firma en la APK coincida con una de las siguientes firmas digitales SHA256:

* Para descargas de F-Droid:
`{% include fingerprint-f-droid %}`

* Otras descargas de APK:
`{% include fingerprint-local %}`

Para imprimir las firmas SHA256 del certificado de firma de APK, puede usar, por ejemplo:
`keytool -list -printcert -jarfile `

