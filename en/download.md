---
title: Download
layout: default-en
---

# Download Delta Chat

**Delta Chat is currently under development**

A beta-state Android version is available on F-Droid. After the [version 1.0 milestone](https://github.com/deltachat/deltachat-android/milestone/1) availability on Google Play will follow. 
Further variants for iOS, Mac, Linux or Windows are planned.
You can actively [support](contribute) us in the development.

## Android (Beta)

<img src="../assets/home/get-it-on-gplay.png" alt="Get it on Google Play" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

* [Download from F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Download APK](https://github.com/deltachat/deltachat-android/releases) (experienced users only)
* [View Changelog]({% include changelog-url %})


## Apple

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

iOS development has started but it nees more work until we can present a download here. [Contributors](contribute) welcome :)


## Linux

Delta Chat for Linux is not yet available. However it is possible to run the Android app in [Anbox](https://anbox.io) (Android in a Box) on your desktop.
Further details are provided in our [FAQ](help#multiclient) page.


# Verify Downloads

For Android, you can verify the signing certificate on the APK matches one of the following SHA256 fingerprints:  

* For F-Droid downloads:  
  `{% include fingerprint-f-droid %}`
* Other APK downloads:  
  `{% include fingerprint-local %}`

To print the SHA256 fingerprints of the APK signing certificate you can use eg.  
`unzip <APK-file>; keytool -printcert -file META-INF/*.RSA`

