---
title: تأیید صحت دانلودها
lang: fa
---

# تأیید صحت دانلودها

## اندروید

برای اندروید، می‌توانید بررسی کنید که گواهی امضای APK با یکی از اثرانگشت‌های SHA256 زیر مطابقت دارد:

* برای دانلودهای F-Droid:  
  `{% include fingerprint-f-droid %}`

* سایر دانلودهای APK:  
  `{% include fingerprint-local %}`

برای چاپ اثرانگشت‌های SHA256 گواهی امضای APK می‌توانید مثلاً از این دستور استفاده کنید:  
`keytool -printcert -jarfile <APK-file>`


## دسکتاپ

1. ترمینال را باز کنید و **به پوشه فایلی که می‌خواهید تأیید کنید بروید**، مثلاً  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **چک‌سام‌های امضاشده را دانلود و کلید را وارد کنید؛**
   `<VERSION>` را با شماره نسخه جایگزین کنید، مثلاً `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   کلید همچنین در [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu) در دسترس است

3. **تأیید و بررسی نتایج**

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

   مطمئن شوید اثرانگشت مطابقت دارد و فایلی که می‌خواهید تأیید کنید فهرست شده است.
   هشدار طبیعی است چون صراحتاً به کلید اعتماد نکرده‌اید.

اگر gpg روی سیستم شما خراب است، می‌توانید از  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` یا  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` استفاده کنید —
توجه کنید که روش دوم یکپارچگی را بررسی می‌کند اما _نه_ کلید توسعه‌دهنده را.
