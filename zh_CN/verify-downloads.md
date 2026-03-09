---
title: 验证下载
lang: zh_CN
---

# 验证下载

## Android

对于 Android，您可以验证 APK 上的签名证书是否与以下 SHA256 指纹之一匹配：

* 对于 F-Droid 上的下载：  
  `{% include fingerprint-f-droid %}`

* 其他 APK 下载：  
  `{% include fingerprint-local %}`

要打印 APK 签名证书的 SHA256 指纹，可以使用
`keytool -printcert -jarfile <APK-file>`


## Desktop

1.打开终端，**更改目录**到要验证的文件，例如  
   `deltachat-desktop_<VERSION>_amd64.deb`

2.**下载已签名的校验和及导入密钥；**
   <VERSION> ` 需要用版本号代替，如 `2.33.0` 。

   ```
   wget https://download.delta.chat/desktop/v<VERSION>/signed-checksums.txt
   wget https://delta.chat/assets/deltachat_certificate.asc.txt
   gpg --import deltachat_certificate.asc.txt
   ```

   该密钥还可在 [keys.openpgp.org](https://keys.openpgp.org/search?q=deltachat-signing@merlinux.eu) 上获取。

3.**核实和检查结果**

   ```
   gpg --decrypt signed-checksums.txt | shasum -a 512 -ignore-missing -c -
   ```

   预期输出：

   ```
   gpg：来自 "deltachat-signing@merlinux.eu" [未知] 的良好签名
   gpg: WARNING: This key is not certified with a trusted signature！
   gpg: 没有迹象表明该签名属于所有者。
   主密钥指纹：63CD 1F81 5BA5 6051 8376 999C 626E 26C8 1695 1308
  <FILE> 确定
   ```

   确保指纹匹配且要验证的文件已列出。
   警告是正常的，因为你没有明确信任密钥。

如果系统上的 gpg 已损坏，可以使用  
`cat signed-checksums.txt | rsop inline-verify deltachat_certificate.asc.txt` 或  
`cat signed-checksums.txt | grep deltachat | shasum -a 512 -ignore-missing -c -` -` -
注意，后者检查的是完整性，而不是开发者的密钥。
