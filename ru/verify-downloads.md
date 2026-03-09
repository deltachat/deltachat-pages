---
title: Проверка загрузок
lang: ru
---

# Проверка загрузок

## Android

Для Android вы можете проверить, что сертификат подписи на APK соответствует одному из следующих отпечатков SHA256:  

* Для загрузок с F-Droid:  
  `{% include fingerprint-f-droid %}`

* Для других загрузок APK:  
  `{% include fingerprint-local %}`

Чтобы вывести отпечатки SHA256 сертификата подписи APK, можно использовать, например:  
`keytool -printcert -jarfile <APK-file>`


## Компьютер

1. Откройте терминал и **измените папку** на файл, который вы хотите проверить, например.  
   `deltachat-desktop_<VERSION>_amd64.deb`.

2. **Загрузите подписанные контрольные суммы и импортируйте ключ;**.
   `<VERSION>` необходимо заменить на номер версии, например `2.33.0`.

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   Ключ также доступен по адресу [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu)

3. **Проверьте и сравните результаты**.

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 --ignore-missing -c -
   ```

   Ожидаемый результат:

   ```
   gpg: Хорошая подпись от "deltachat-signing@merlinux.eu" [неизвестно]
   gpg: ПРЕДУПРЕЖДЕНИЕ: Этот ключ не сертифицирован доверенной подписью!
   gpg: Нет никаких указаний на то, что подпись принадлежит владельцу.
   Отпечаток первичного ключа: 63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
  <FILE>: OK
   ```

   Убедитесь, что отпечаток ключа совпадает и что файл, который вы хотите проверить, указан в списке.
   Предупреждение является нормальным, поскольку вы явно не подтвердили доверие к ключу.

Если gpg не работает в вашей системе, вы можете использовать  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` или  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 --ignore-missing -c -` -.
обратите внимание, что последняя команда проверяет целостность, а _не_ ключ разработчика.
