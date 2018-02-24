---
title: Standarde të përdorur në Delta Chat
layout: default
---

# Standarde të përdorur në Delta Chat

Për këdo që është i interesuar për anët teknike, ja disa nga standardet mbi të cilët bazohet Delta Chat-i.

Punë                            | Standarde
---------------------------------|---------------------------------------------
Transport                        | IMAP v4 ([RFC 3501](https://tools.ietf.org/html/rfc3501)), SMTP ([RFC 5321](https://tools.ietf.org/html/rfc5321)) dhe Internet Message Format (IMF, [RFC 5322](https://tools.ietf.org/html/rfc5322))
Trupëzim elementësh media                   | MIME Document Series ([RFC 2045](https://tools.ietf.org/html/rfc2045), [RFC 2046](https://tools.ietf.org/html/rfc2046)), Content-Disposition Header ([RFC 2183](https://tools.ietf.org/html/rfc2183)), Multipart/Related ([RFC 2387](https://tools.ietf.org/html/rfc2387))
Identifikim dosjesh shërbyesi          | IMAP LIST Extension ([RFC 6154](https://tools.ietf.org/html/rfc6154))
Push                             | IMAP IDLE ([RFC 2177](https://tools.ietf.org/html/rfc2177))
Fshehtëzim skaj-më-skaj            | [Autocrypt Level 1](https://autocrypt.org/level1.html), OpenPGP ([RFC 4880](https://tools.ietf.org/html/rfc4880)) dhe Security Multiparts for MIME ([RFC 1847](https://tools.ietf.org/html/rfc1847))
Asistencë formësimi         | [Autoconfigure](https://developer.mozilla.org/en-US/docs/Mozilla/Thunderbird/Autoconfiguration) dhe [Autodiscover](https://technet.microsoft.com/library/bb124251(v=exchg.150).aspx)
Funksione korrieri              | [Email-chat v0.9.0](https://delta.chat/en/spec)
Pikasje liste postimesh              | List-Id ([RFC 2919](https://tools.ietf.org/html/rfc2919)) dhe Precedence ([RFC 3834](https://tools.ietf.org/html/rfc3834))
Dërgim dhe marrje mesazhesh sistemi | Multipart/Report Media Type ([RFC 6522](https://tools.ietf.org/html/rfc6522))
Kthim faturash                  | Message Disposition Notification (MDN, [RFC 8098](https://tools.ietf.org/html/rfc8098), [RFC 3503](https://tools.ietf.org/html/rfc3503)) duke përdorur Chat-Disposition-Notification-To header

Vetë Delta Chat-i licencohet sipas licencës GPL.
Po qe se doni të dini nëse mbulohet një veçori e dhënë apo jo, mund t’ju ndihmonte t’i hidhni një sy [kodit burim](https://github.com/deltachat).
