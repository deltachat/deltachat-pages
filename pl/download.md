---
title: Pobierz
layout: default-pl
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Pobierz Delta Chat

**Delta Chat jest obecnie w fazie rozwoju**

Wersja beta dla systemu Android jest dostępna na platformie F-Droid. Po wydaniu [wersji 1.0](https://github.com/deltachat/deltachat-android/milestone/1) Delta Chat zostanie udostępniony w Google Play. 
Planowane są kolejne warianty dla iOS, Mac, Linux lub Windows.
Możesz aktywnie [wspierać](contribute) nas w rozwoju.

## Android (Beta)

<img src="../assets/home/get-it-on-gplay.png" alt="Get it on Google Play" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

* [Pobierz z F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Pobierz APK](https://github.com/deltachat/deltachat-android/releases) (tylko doświadczeni użytkownicy)
* [Przejrzyj rejestr zmian]({% include changelog-url %})


## Apple

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Prace nad rozwojem wersji na iOS już się rozpoczęły, ale wymaga to więcej pracy, zanim będziemy mogli zaprezentować tutaj plik do pobrania. Zapraszamy do [wsparcia](contribute) :)


## Linux

Delta Chat dla systemu Linux jeszcze nie jest dostępny. Możliwe jest jednak uruchamianie aplikacji na Androida w [Anbox](https://anbox.io) (Android in a Box) na pulpicie.
Więcej informacji znajduje się na naszej stronie [FAQ](help#multiclient).


# Weryfikacja pobranych plików

W przypadku systemu Android można sprawdzić, czy certyfikat APK jest zgodny z jednym z poniższych odcisków palców SHA256: 

* Dla plików pobranych z F-Droid:  
  `{% include fingerprint-f-droid %}`
* Dla plików pobranych z innych miejsc:  
  `{% include fingerprint-local %}`

Do wydrukowania odcisków palców SHA256 certyfikatu podpisu aplikacji można użyć np.  
`keytool -list -printcert -jarfile <APK-file>`

