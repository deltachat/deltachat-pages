---
title: Downloads verifizieren
lang: de
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Downloads verifizieren

Um Android-APKs zu verifizieren, können Sie überprüfen, ob das Signatur-Zertifikat einem der folgenden SHA256-Fingerabdrücke entspricht:

* Für F-Droid Downloads: 
`{% include fingerprint-f-droid %}`

* Andere APK Downloads: 
`{% include fingerprint-local %}`

Um den SHA256-Fingerabduck des Signatur-Zertifikats anzuzeigen, kann z.B. das folgende Kommando verwendet werden: 
`keytool -list -printcert -jarfile 2`

