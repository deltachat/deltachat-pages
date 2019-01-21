---
title: Download
layout: default-en
---

# Download DeltaChat 

DeltaChat is stable enough that it is used both by developers and 
an estimated 10-30K people on a daily basis, including for private 
communications with friends. DeltaChat operates no own servers and 
does not track users or installs and thus can not determine 
more precise download numbers. 

## Android (Beta)

<img src="../assets/home/get-it-on-gplay.png" alt="Get it on Google Play" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />
[<img style="float:right" src="../assets/home/get-it-on-fdroid.png" alt="Get it on F-Droid" width="200" />](https://f-droid.org/app/com.b44t.messenger)

Delta/Android is the most feature-rich and stable DeltaChat app. 

* [Download from F-Droid](https://f-droid.org/app/com.b44t.messenger)
* [Download APK](https://github.com/deltachat/deltachat-android/releases) (experienced users only)
* [View Changelog]({% include changelog-url %}), [contribute to the Android repo](https://github.com/deltachat/deltachat-android/). 


## Delta/Desktop Downloads (Beta)

Delta/Desktop is well usable and can be operated standalone, without a mobile phone,
or in conjunction with Android or iOS. See also our [FAQ multiclient](help#multiclient) page.

For Linux and OSX [you can download from our github release page](https://github.com/deltachat/deltachat-desktop/releases/).  

For a potential Windows install package, we are tracking [progress here, contributions welcome!](https://github.com/deltachat/deltachat-desktop/issues/606) 

See here for the [Desktop Changelog](https://github.com/deltachat/deltachat-desktop/blob/master/CHANGELOG.md)


## iOS on TestFlight (Beta)

<img src="../assets/home/get-it-on-ios.png" alt="Download on Apple AppStore" width="200" style="float:right; filter: opacity(.3) grayscale(100%);" />

Delta/iOS supports basic functionality but not all features offered by Android or Desktop. 
Betas are distributed via Testflight. Just scan this QR code with the camera app of your iPhone/iPad

![QRCode](../assets/home/deltachat_testflight_qrcode.png)

or visit this [testflight invite page](https://testflight.apple.com/join/WVoYFOZe) 
on your iPhone or iPad.

If you can, please [contribute to iOS development](https://github.com/deltachat/deltachat-ios/). 


# Verify Downloads

For Android, you can verify the signing certificate on the APK matches one of the following SHA256 fingerprints:  

* For F-Droid downloads:  
  `{% include fingerprint-f-droid %}`

* Other APK downloads:  
  `{% include fingerprint-local %}`

To print the SHA256 fingerprints of the APK signing certificate you can use eg.  
`keytool -list -printcert -jarfile <APK-file>`

