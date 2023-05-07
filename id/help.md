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

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _No Spam_ - only messages of known users are shown by default.
- _End-to-end-encryption_ via Autocrypt.
- _Copyleft_ and _Standards_ based libre software.
- _Flexible identity_ with built-in support for [multiple accounts](#multiple-accounts)


### Pesan mana yang muncul di Delta Chat?

By default, Delta Chat shows all e-mails.

At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost. This is the default setting.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Apakah Delta Chat mendukung gambar, vidio dan lampiran lainnya?

- Ya, Di samping teks biasa, semua lampiran email ditampilkan sebagai pesan terpisah. Pesan keluar mendapatkan lampiran sesuai kebutuhan secara otomatis.

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#multiclient).

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
  Archived chats remain accessible above the chat list or via search. 

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [private app](#webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


## Grup

### Pembuatan grup

- Select **New chat** and then **New group** from the menu in the upper right corner or hit the corresponding button on Android/iOS.
- On the following screen, select the **group members** and define a **group name**. You can also select a **group avatar**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).


### Tambahkan anggota ke grup

- Every group member has the **same rights** as any other. For this reason every one can delete every member or add new ones.
- To add or delete members, click on the group name in the chat.


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


### What happens if I turn on "Delete old messages from server"?

- By default, Delta Chat stores all messages locally on your device. If you
  e.g. want to save storage space at your mail provider, you can choose to
  delete old messages automatically. They still remain on your device until you
  delete them there, too.
- To turn it on, go to "delete old messages from server" in the "Chats & Media"
  settings. You can set a timeframe between "at once" and "after a year"; this
  way, *all* e-mails will be deleted from the server after that timeframe. 
- Note that if you use Delta Chat on more than one device, you should leave the
  messages on the server, until the other device could download them, too. In
  this case, you should set auto-delete to "after a day" or something similar,
  depending on how often you turn on the other device.


### What happens if I turn on "Delete old messages from device"? {#delold}

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

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


### How can I ensure message encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is creating a verified group and turning on
disappearing messages.

Verified groups are always encrypted and protected against [MITM
attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Metadata can't be encrypted, as the server needs to know where to deliver your
messages. But turning on "disappearing messages" deletes the messages on
the server after they were delivered.

If you need the messages on your device, but not on the server, you can also
agree in the group to turn on ["delete messages from server
automatically"](#delold).

If you want to protect a 1:1 conversation like this, you should create a
verified group with only 2 people. If the other person loses their device but
not their account, you can still communicate in the 1:1 chat. ([Read more](#verdiff))


### Which standards are used for end-to-end-encryption?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. 

- Delta Chat implements [countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html) to achieve protection against active network attacks.  This goes beyond the opportunistic
  base protection of Autocrypt Level 1, while maintaining its ease of use.  

### What is the difference between verified groups and 1:1 chats with verified contacts? {#verdiff}

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

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

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


## Multi-client {#multiclient}

### Can I use Delta Chat on multiple devices at the same time?

Yes. Delta Chat 1.36 comes with a new, experimental function for using the same account on different devices:

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- On the second device, [install Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- Transfer should start after a few seconds and during transfer both devices will show the **progress**.
  Wait until it is finished on both devices.

In contrast to many other messengers, after successful transfer,
both **devices are completely independent.**
One device is not needed for the other to work.


### Troubleshooting

- Double-check both devices are in the **same Wi-Fi or network**

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple accounts per device, just [add another account](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer

This method is only recommended if "Add Second Device" as described above does not work.

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
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


## Private Apps / webxdc {#webxdc}

In Delta Chat, you can share "private apps", attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger. The technical term is [webxdc](https://webxdc.org).


### How private are private apps?

- Private apps can not send data to the Internet, or download anything.
- A private app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a private app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the private app as well.
- This also means: it can be a privacy risk to open private apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get private apps?

- In general, there is no curated appstore and Delta Chat is not responsible
  for private apps or their content. Anyone can share private apps with each
  other without restrictions.
- You can find some example apps on [webxdc.org](https://webxdc.org).
- Many people write their own private apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own private apps?

- Private apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimental Features

We are very grateful about feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. (You
like experiments? Register through "Sign up -> with Delta Chat"!)

### How can I use audio/video calls with Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "videochat instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to your jitsi/BBB room. This
  way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### What is a verified group? Why is it experimental? 

- A verified group is a chat that guarantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature. 

- As of Oct 2022, "verified groups" remain an experimental feature. It is
  continuously improved and many bugs have been fixed since the original
  introduction in 2018. However, there remain cases, especially with large
  groups where inconsistencies can occur, or messages become unreadable.


### What are Broadcast Lists and how can I use them?

- With a Broadcast List you can send a message to many recipents at once; when
  they reply to you, you get the reply in your direct 1:1 chat with them. The
recipients can't see each other.
- Technically, it is an E-Mail with many recipients in BCC.
- You can turn on the feature in the "experimental features" section in the
  advanced settings. Then you can create a Broadcast List from the "New Chat"
dialog.
- In case you are using more than one device, Broadcast Lists are currently not
  synced between them.
- Messages sent to broadcast lists are not encrypted. Encryption would break
  anonymity, because then all recipients would know who else received it
  (Sending individual mails to everyone would be worse for rate limit and network
  consumption reason).


### How can I share my location with my chat partners?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat
  partners. *But:* to show the map, we need to download map tiles from
  mapbox.com, so if you *view* the map, mapbox.com is asked for the map of a
  specific area. If this is a privacy risk for you, this feature might not be
  for you. We are working on finding a decentralized alternative for Mapbox.
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### What does the experimental database encryption actually protect?

- Right now, the database encryption is still very experimental. Don't rely on
  it for protection, you should additionally use encryption of your operating
  system, if it provides any.
- The database encryption does not yet encrypt the blobs, only the rows and
  columns of the database. This more or less means that your messages are safe,
  but not your attachments.
- For iOS and Android, the encryption keys are stored in the system keychain.
  This means the encryption is as secure as the operating system it's running
  on.
- The Delta Chat desktop client doesn't offer database encryption yet, as there
  is no standard way to store the encryption keys on the different supported
  platforms.


### Why can I choose to only watch the DeltaChat folder?

This is an experimental setting for some people who are experimenting with
server-side rules. Not all providers support this, but with some you can move
all mails with a "Chat-Version" header to the DeltaChat folder. Normally, this
would be done by the Delta Chat app.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- enabled a server-side rule to move all messages with Chat-Version header to the DeltaChat folder, and
- have set the "Show classic emails" setting to "no, chats only".

In this case, Delta Chat doesn't need to watch the Inbox, and it's enough to only watch the DeltaChat folder.


### How can I change my account to a different e-mail address?

1. Change your address at the “Password and Account” seetings screen in Delta
   Chat, enter your password (and if necessary, server settings) for the new
   account
2. If possible, make your old e-mail provider forward all e-mails to your new
   email address
3. Tell your contacts that you changed your address. If you write this to a
   verified group, they will acknowledge this automatically.

To learn about the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Miscellaneous

### Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly,
  see [Provider Overview](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


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

### Was Delta Chat independently audited for security vulnerabilities?

The Delta Chat project underwent three independent security audits in the last
years:

- In 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).

- In 2020, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's Rust [core](https://github.com/deltachat/deltachat-core-rust/),
  [IMAP](https://github.com/async-email/async-imap),
  [SMTP](https://github.com/async-email/async-smtp), and
  [TLS](https://github.com/async-email/async-native-tls) libraries.
  It did not find any critical or high-severity issues.
  The report raised a few medium-severity weaknesses -
  they are no threat to Delta Chat users on their own
  because they depend on the environment in which Delta Chat is used.
  For usability and compatibility reasons,
  we can not mitigate all of them
  and decided to provide security recommendations to threatened users.
  You can read the [full report here](../assets/blog/2020-second-security-review.pdf).

- Beginning 2023, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

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

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Beginning 2023 we got accepted in the Next Generation Internet (NGI)
  Entrust program for our "Private Decentralized Apps" proposals. 
  Exact amount is to be determined (around 100K EUR). 
  This funding supports further developments of [webxdc "apps shared in a chat"](https://webxdc.org). 

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

  [Donate Money](donate){: .cta-button}

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Please see [Delta Chat Contribution channels](contribute)
for both monetary and and other contribution possibilities.  
