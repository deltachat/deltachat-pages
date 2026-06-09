---
title: Перевірка завантажених файлів
lang: uk
---

# Перевірка завантажених файлів

## Android

Для Android Ви можете перевірити автентичність, порівнявши відбитки сертифікату SHA256 інсталяційного файлу APK з наступними контрольними сумами:

* Для завантажень з F-Droid:
 `{% include fingerprint-f-droid %}`

* Інші завантаження APK:
  `{% include fingerprint-local %}`

Ви можете подивитися відбиток сертифікату SHA256, яким підписано інсталяційний файл APK, за допомогою команди
`keytool -printcert -jarfile <APK-file>`


## Комп'ютер

1. Відкрийте ваш термінал і **перейдіть до каталогу**, де знаходиться файл, який потрібно перевірити, наприклад:  
   `deltachat-desktop_<VERSION>_amd64.deb`

2. **Завантажте підписані контрольні суми та ключ імпорту;**
   `<VERSION>` потрібно замінити на номер версії, наприклад `2.33.0`

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   Цей ключ також доступний за адресою [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Перевірка та аналіз результатів**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Очікуваний вивід:

   ```
   gpg: Good signature from "deltachat-signing@merlinux.eu" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
   <FILE>: OK
   ```

   Переконайтеся, що відбиток збігається і що файл, який ви хочете перевірити, є у списку.
   Це попередження є нормальним, оскільки ви ще не підтвердили довіру до цього ключа.

Якщо у вашій системі не працює gpg, ви можете скористатися командою  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` або  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -
зверніть увагу, що останнє перевіряє цілісність, але _не_ ключ розробника.
