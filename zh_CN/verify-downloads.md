---
title: 验证下载
lang: zh_CN
---

# 验证下载

对于 Android，您可以验证 APK 上的签名证书是否与以下 SHA256 指纹之一匹配：

* 对于 F-Droid 上的下载：  
  `{% include fingerprint-f-droid %}`

* 其他 APK 下载：  
  `{% include fingerprint-local %}`

要打印 APK 签名证书的 SHA256 指纹，可以使用
`keytool -list -printcert -jarfile <APK-file>`

