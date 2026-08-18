---
عنوان: راستی‌آزمایی بارگیری‌ها
زبان: fa
---

# راستی‌آزمایی بارگیری‌ها

## اندروید

در اندروید، می‌توانید گواهی امضای APK را با یکی از SHA256 fingerprintهای زیر مقایسه کنید: 

* برای بارگیری‌های اف-دروید:  
  `{% include fingerprint-f-droid %}`

* برای APK‌های دریافتی دیگر:  
  `{% include fingerprint-local %}`

برای چاپ SHA256 fingerprintهای گواهی امضای APK می‌توانید مثال زیر را بکار ببرید.
`keytool -printcert -jarfile <APK-file>`


## رایانه

1. ترمینال را باز کنید و مانند مثال زیر **مسیر را تغییر دهید** به فایلی که می‌خواهید راستی‌آزمایی کنید.
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **بارگیری checksumهای امضاشده و وارد کردن کلید؛**
   `<VERSION>` باید با شمارهٔ نگارش جایگزین شود، مثلاً `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   این کلید همچنین در [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu) در دسترس است

3. **راستی‌آزمایی و بررسی نتایج**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   خروجی مورد انتظار:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   مطمئن شوید fingerprint هم‌خوانی دارد و فایلی که می‌خواهید راستی‌آزمایی کنید فهرست شده است.
   این هشدار طبیعی است زیرا شما صراحتاً به کلید اعتماد نکرده‌اید.

اگر gpg روی سامانه‌تان خراب است، می‌توانید از  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` یا  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` استفاده کنید -
توجه: گزینهٔ دوم یکپارچگی را بررسی می‌کند اما _نه_ کلید توسعه‌دهنده را.
