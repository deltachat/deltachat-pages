---
title: FAQ
lang: id
render_toc: true
header: Pertanyaan yang Sering Diajukan
---


## Apa itu Delta Chat?

Delta Chat adalah aplikasi obrolan baru yang mengirim pesan melalui email, diekripsi jika memungkinkan, dengan Autocrypt
**Anda tidak harus mendaftar di mana saja, cukup gunakan akun email Anda yang ada dengan Delta Chat.**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Bagaimana Saya bisa menemukan orang untuk diajak ngobrol?

Dengan Delta Chat, anda dapat mengetik ke semua alamat email yang ada - meskipun
si penerima tidak menggunakan aplikasi Delta Chat. Tidak perlu bagi
penerima untuk menginstal aplikasi yang sama seperti milik Anda, seperti halnya dengan messenger-messanger lain.


### Apa kelebihan Delta Chat dibandingkan dengan messenger lain?

- _Independen_ dari perusahaan atau layanan apa pun. _Anda memiliki data Anda.
- Data Anda tidak disimpan di server pusat kecuali semua pengguna menggunakan
  server email yang sama
- Anda tidak mendistribusikan buku alamat Anda kepada siapa pun.
- _Cepat_ dengan menggunakan Push-IMAP.
- _Pengguna terluas_ - penerima _tidak_ menggunakan Delta Chat dapat dihubungi juga.
- _Kompatibel_ - tidak hanya untuk dirinya sendiri.
- Antarmuka pengguna _Elegan__ dan _simpel_.
- Sistem _Terdistribusi_.
- _Tidak Spam_ - hanya pesan dari pengguna yang dikenal yang ditampilkan secara default.
- _Diandalkan_ - aman untuk penggunaan profesional.
- _Terpercaya_ - bahkan dapat digunakan untuk pesan bisnis.
- Perangkat lunak gratis berbasis _Copyleft_ dan _Standards_.


### Pesan mana yang muncul di Delta Chat?

Delta Chat otomatis menampilkan:

- Pesan-pesan dari kontak di **buku alamat** Anda
- Pesan dari kontak **dihubungi oleh Anda**
- **Balasan** untuk pesan yang dikirim oleh Anda

Pesan lain tidak muncul secara otomatis, dan dapat ditemukan di **Permintaan kontak**. Jika diinginkan obrolan bisa dimulai dari sana.


### Apakah Delta Chat mendukung gambar, vidio dan lampiran lainnya?

- Ya, Di samping teks biasa, semua lampiran email ditampilkan sebagai pesan terpisah. Pesan keluar mendapatkan lampiran sesuai kebutuhan secara otomatis.


### Siapa yang dapat melihat Foto Profil saya?

- Anda dapat menambahkan gambar profil di pengaturan Anda. Jika Anda menulis ke kontak Anda
  atau menambahkannya melalui kode QR, mereka secara otomatis melihatnya sebagai gambar profil Anda.

- Contacts who don't use Delta Chat do not see the profile picture
  (however, of course, they can install Delta Chat :)

- Untuk alasan kerahasiaan, tidak ada satupun yang dapat melihat Foto Profil anda hingga anda menulis
sebuah pesan kepada mereka.

- Gambar profil Anda tidak dikirim dengan setiap pesan, tetapi cukup secara teratur
kontak Anda akan menerima kembali gambar profil Anda, bahkan jika mereka menambahkan yang perangkat
baru


### Apakah Delta Chat mendukung email HTML?

- Yes. If needed, incoming messages get a "Show full message" button. Outgoing e-mails always use plain text.


### Mengapa saya harus memasukkan kata sandi E-Mail saya ke Delta Chat? Apakah ini aman?

Seperti program E-Mail lainnya seperti Thunderbird, K9-Mail, atau Outlook,
program membutuhkan kata sandi sehingga Anda dapat menggunakannya untuk mengirim email. Tentu saja,
kata sandi hanya disimpan di perangkat Anda. Kata sandi hanya dikirimkan ke
penyedia E-Mail Anda (saat Anda login), yang tetap memiliki akses ke email Anda.

Jika Anda menggunakan penyedia E-Mail dengan dukungan OAuth2 seperti gmail.com atau yandex.ru,
tidak perlu menyimpan kata sandi Anda di perangkat. Dalam hal ini, hanya
token akses digunakan.

Karena Delta Chat adalah Open Source, Anda dapat memeriksa file [Source
Code](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
jika Anda ingin memverifikasi bahwa kredensial Anda ditangani dengan aman. Kami bahagia
tentang umpan balik yang membuat aplikasi lebih aman untuk semua pengguna kami.


### Izin apa yang dibutuhkan Delta Chat?

Tergantung operasi sistem yang digunakan,
Anda mungkin diminta untuk memberikan izin ke aplikasi.
Inilah yang dilakukan Delta Chat dengan izin ini:

- Kamera *(dapat dianulir)*
 - ambil gambar dan video: untuk mengirim Foto
- Kontak *(dapat dianulir)*
 - baca kontak Anda: untuk menemukan kontak untuk diajak ngobrol
- Lokasi *(dapat dianulir)*
 - Akses perkiraan lokasi (sumber lokasi jaringan): untuk fitur streaming lokasi
 - Akses lokasi yang tepat (GPS dan sumber lokasi jaringan): untuk fitur streaming lokasi
- Mikrofon *(dapat dianulir)*
 - rekam audio: untuk pesan audio
- Penyimpanan *(dapat dianulir)*
 - memodifikasi atau menghapus isi kartu SD Anda: untuk mengunduh lampiran pesan
 - baca isi kartu SD Anda: untuk berbagi file dengan kontak Anda
- Kemampuan aplikasi lainnya
 - ubah pengaturan audio Anda: sehingga Anda dapat memilih nada dering dan volume untuk pemberitahuan dan pesan audio
 - berjalan saat startup: jadi Anda tidak harus memulai Delta Chat secara manual
 - Kontrol getaran: untuk notifikasi
 - lihat koneksi jaringan: untuk terhubung ke penyedia E-Mail Anda
 - mencegah ponsel dari tidur: sehingga Anda dapat lebih mudah menyalin kode keamanan selama Pesan Pengaturan Autocrypt
 - memiliki akses jaringan penuh: untuk terhubung ke penyedia E-Mail Anda
 - lihat koneksi Wi-Fi: untuk terhubung ke penyedia E-Mail Anda
 - minta untuk mengabaikan optimisasi baterai: untuk pengguna yang ingin menerima pesan setiap saat

### What means Pinning, Muting, Archiving?

Use these tools to organize your chats and keep everything in its place:

- **Pinned chats** always stay atop of the chat list. You can use them to access your most loved chats quickly or temporarily to not forget about things.

- **Mute chats** if you do not want to get notifications for them. Muted chats stay in place and you can also pin a muted chat.

- **Archive chats** if you do not want to see them in your chat list any longer.
  At the very bottom of the chat list, in the menu or via search, you can still access the archived chats.

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


## Grup

### Pembuatan grup

- Select **New chat** and then **New group** from the menu in the upper right corner or hit the corresponding button on Android/iOS.
- On the following screen, select the **group members** and define a **group name**. You can also select a **group avatar**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).


### Tambahkan anggota ke grup

- Every group member has the **same rights** as any other. For this reason every one can delete every member or add new ones.
- To add or delete members, click on the group name in the chat.


### What is a verified group? Why is it experimental? 

- A verified group is a chat that guarantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature. 

- As of Dec 2019, a "verified group" remains an experimental feature.
  It is continuously improved and many bugs have been fixed since the
  original introduction in 2018.  However, there remain cases, especially 
  with large groups where inconsistencies can occur, or messages become 
  unreadable.  Early 2020 a security review is upcoming, and several new
  developments around qr-join protocols are taking place so chances
  are we remove the "experimental" label not too far in the future. 


### I have deleted myself by accident.

- As you're no longer a group member, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to re-add you.


### I do not want to receive the messages of a group any longer.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group again later on, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so means you get all messages and 
  can still write, but are no longer notified of any new messages.


### What do the ticks shown beside outgoing messages mean?

- **One tick** means that the message was sent successfully to your provider.
- **Two ticks** mean that at least one recipient's device
  reported back to having received the message.
- Recipients may have disabled read-receipts,
  so even if you see only one tick, the message may have been read.
- The other way round, two ticks do not automatically mean
  that a human has read or understood the message ;)


## Encryption {#encryption}

### Does Delta Chat support end-to-end-encryption?

- Yes. Delta Chat implements the Autocrypt Level 1 standard and can 
  thus E2E-encrypt messages with other Autocrypt-capable apps. 

- Delta Chat also supports a strong form of end-to-end encryption that is 
  even safe against active attacks, see "verified groups" further below. 


### What do I have to do to activate the end-to-end-encryption?

- Tidak ada.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to rather avoid end-to-end-encrypted e-mails by default, 
  use the corresponding Autocrypt setting in "Settings" or "Advanced settings".


### If end-to-end-encryption is not available, is the connection not encrypted at all?

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 


### How can I verify cryptographic status with a sender? 

If you are within immediate distance of the chat partner:

- Select **QR Invite code** on one device and then **Scan QR code**
  on the other one and scan the code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified.  Both will see a
  "sender verified" system message in their 1:1 chat. 

If you are not near the chat partner, you can check the status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop):

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appear on your chat partner's device, 
  the connection is safe.

- For transport encryption, this state is just shown there


### How can I check the encryption of messages?

- A little **padlock** shown beside a message denotes whether the message is end-to-end-encrypted from from the given sender.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.

### Which standards are used for end-to-end-encryption?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. 

- Delta Chat implements [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) to achieve protection against active network attacks.  This goes beyond the opportunistic
  base protection of Autocrypt Level 1, while maintaining its ease of use.  

### What is the difference between verified groups and 1:1 chats with verified contacts?

- 1:1 chats with a verified contact and verified groups are not the same, even
  if there are only 2 people in the verified group. One difference is that you
  could easily add more people to the group, but there are other implications as
  well.

- Verified groups are invariably secured. Any breakage (cleartext or wrongly
  signed messages etc.) will be flagged and such messages will not be shown in
  this chat. You can trust all messages in this verified-checkmark chat to have
  not been read/altered by middle parties.

- 1:1 chats are opportunistic, it is meant to allow people to communicate no
  matter if they change e-mail clients, devices, setups etc. That's why there
  is no verification checkmark, even if you have verified the contact.


### Does Delta Chat support Perfect Forward Secrecy?

- No, OpenPGP doesn't support Perfect Forward Secrecy. Perfect Forward Secrecy
  works session-oriented, but E-Mail is asynchronous by nature
  and often used from multiple devices independently. This means that if your
  Delta Chat private key is leaked, and someone has a record
  of all your in-transit messages, they will be able to read them.  

- Note that if anyone has seized or hacked your running phone, they will
  typically be able to read all messages, no matter if Perfect Forward Secrecy
  is in place or not. Having access to a single device from a member of a group,
  will typically expose a lot of the social graph. Using e-mail addresses that
  are not easily tracked back to persons helps group members to stay safer from
  the effects of device seizure. 

- We are sketching ways to protect communications better against the event
  of device seizure. 


### How does Delta Chat protect my Metadata?

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently knows about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Can I reuse my existing private key?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Settings" or "Advanced settings" and then "Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it. 


### I can't import my existing PGP key into Delta Chat.

The most likely cause is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You could remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that private keys from all sources will be fully supported. This
is not the main goal of Delta Chat. In fact, the majority of new users 
will not have any key prior to using Delta Chat.
We do, however, try to support private keys from as many sources as possible. 

Removing the password from the private key will depend on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you should be able to find a solution online.


### Why don't you use pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Can I use Delta Chat on multiple devices at the same time?

If you want to use the **same account** on different devices, you should export
a backup from the old device, and import it into the new device:

- On the old device, go to "Settings" or "Settings / Chats and media" and then to "Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### Are there any plans for introducing a Delta Chat Web Client?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  app stores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


### Why can I choose not to watch the Inbox?

This is an experimental setting for some people who are experimenting with
server-side rules. Not all providers support this, but with some you can move
all mails with a "Chat-Version" header to the DeltaChat folder. Normally, this
would be done by the Delta Chat app.

Watching the Inbox makes sense to turn off, if you have both:

- enabled a server-side rule to move all messages with Chat-Version header to the DeltaChat folder, and
- have set the "Show classic emails" setting to "no, chats only".

In this case, Delta Chat doesn't need to watch the Inbox.

### What is the "Send Copy to Self" setting good for?

Sending a copy of your messages to yourself ensures that you receive your own
messages on all devices. If you have multiple devices and don't turn it on, you
see only the messages from other people, and the messages you send from the
current device. 

The copy is sent to the Inbox, and then moved to the DeltaChat folder; it's not
put into the "Sent" folder. Delta Chat *never* uploads anything to the Sent
folder because this would mean uploading a message twice (once through SMTP,
and once through IMAP to Sent folder).

The default setting for copy-to-self is "no".

### Why can I choose to watch the "Sent" folder?

The only reason one wants to watch the Sent folder is if you are using another
mail program (like Thunderbird) next to your Delta Chat app, and want your MUA
to participate in chat conversations.

However, we recommend using the Delta Chat Desktop Client; you can download it
on [get.delta.chat](https://get.delta.chat). The option to watch the "Sent"
folder might go away in the future. It was introduced at a time where there was
no Delta Chat Desktop client available on all platforms. 

### Why can I choose not to watch the DeltaChat folder?

Some people use Delta Chat as a regular email client, and want to use the Inbox
folder for their mail, instead of the DeltaChat folder. If you disable "Watch
DeltaChat folder", you should also disable "move chat messages to DeltaChat".
Otherwise, deleting messages or multi-device setups might not work properly.

## Miscellaneous

### Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly,
  see [Provider Overview](https://providers.delta.chat)


### If Delta Chat uses E-Mail, is it really an _Instant_ Messenger?

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in the background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occasionally. This artificial delay is usually worse on iOS than on Android.
- However, Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### Is Delta Chat compatible with Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is not 
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### I'm interested in the technical details. Can you tell me more?

- See [Standards used in Delta Chat]({% include standards-url %}).

### How are Delta Chat developments funded? 

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources:

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate End-to-End Encryption
  through [Autocrypt](https://autocrypt.org).

- The [Open Technology Fund](https://opentechfund.org) gave us a 
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app 
  and released a first Desktop app beta version, and which moreover 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-account support, improved QR-code contact and group setups and many networking improvements on all platforms.

- For 2021/2022 we are receiving *Internet Freedom* funding (~500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supports our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Sometimes we receive one-time donations from private individuals for
  which we are grateful. For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". We use such money to fund
  development gatherings or to care for ad-hoc expenses that can not easily be predicted
  for or reimbursed from public funding grants. 

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Funding for second half of 2022 and especially for 2023 is an ongoing issue of concern. Apart from applying for more public funding we want to become more independent from government-related funding sources. Please see [Delta Chat Contribution channels](https://delta.chat/en/contribute) for both monetary and development related support possibilities. 
