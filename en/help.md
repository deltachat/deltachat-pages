---
title: FAQ
lang: en
render_toc: true
header: Frequently Asked Questions
---


## Delta Chat?

Chat via messages over e-mail, encrypted if possible (with Autocrypt).
**No registration, just your existing e-mail account and the Delta Chat software.**


### Chat with?

Everyone that has an e-mail address - even if the recipient is not using
the Delta Chat app. End-to-end encryption to everyone with an Autocrypt capable e-mail program.


### Advantages?

- _Independent_ of any company or services. You own _your_ data.
- Your data is not saved on a central server unless all users for some reason are using
  the same e-mail servers.
- _Your_ address book is not distributed to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat get your messages too.
- _Compatible_ - not only with itself.
- _Elegant_ and _simple_ user interface.
- _Distributed_ system.
- _No Spam_ - only messages of known users are shown by default.
- _Reliable_ - safe for professional use.
- _Trustworthy_ - can even be used for business messages.
- _Copyleft_ and _Standards_ based libre software.


### What messages are shown?

- Messages from your **address book** contacts
- Messages and replies from contacts **contacted by you**

Other messages can be found in the main menu under **Contact requests**, from where chats can be started too.

### Spam?

- Messages and addresses in spam folders are ignored.
- With no automatic messages from unknown contacts, normally there is **no spam**.
- **Block** contacts if needed.


### Images, videos and other attachments?

- Yes. All incoming and outgoing e-mail attachments are displayed and attached as separate messages.


### _Your_ profile picture?

- Only contacts you write to see your profile picture, if you add one.

- It is attached for contacts not on Delta Chat.

- It is sent often enough that your contacts will get it on their new device.


### HTML e-mails?

- Yes. If e-mail you get has no plain text part, HTML is converted to plain text in the app.
Sent e-mails always use plain text.


### Delta chat login?

Username and password, like other e-mail programs such as Thunderbird, K-9 Mail, or Mutt.
This is used to connect to the e-mail server, which sends and receives e-mails.
The password is only stored on your device, and only sent to your e-mail provider (when you log in).

If you use an e-mail provider with OAuth 2.0 support like gmail.com or yandex.ru,
there is no need to store your password on the device. In this case, only an
access token is used.

Delta Chat is libre softwre; use, see, change and share at will, with all.
Anyone can verify credentials are handled securely in the [source code](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs).
Feedback on making the app better and more secure is appreciated.


### Android permissions?

- Camera *(can be disallowed)*.
  - Take pictures and videos: For sending photos.
- Contacts *(can be disallowed)*.
  - Read your contacts: To discover contacts to chat with.
- Location *(can be disallowed)*.
  - Access approximate location (network location sources): For the location streaming feature.
  - Access precise location (GPS and network location sources): For the location streaming feature.
- Microphone *(can be disallowed)*.
  - Record audio: For audio messages.
- Storage *(can be disallowed)*.
  - Modify or delete the contents of your SD card: To download message attachments.
  - Read the contents of your SD card: To share files with your contacts.
  - Full network access: To connect to your e-mail provider.
  - View Wi-Fi connections: To connect to your e-mail provider.
- Other optional capabilities
  - Change your audio settings: So you can choose ringtones and volume for notifications and audio messages.
  - Run at startup: So you don't have to start Delta Chat manually.
  - Control vibration: For notifications.
  - View network connections: to connect to your e-mail provider.
  - Prevent phone from sleeping: Easier copying of the security code from the Autocrypt Setup Message.
  - Ignoring battery optimisations: For users who want to receive messages all the time.


## Groups

### Creation

- **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- Select **group members** and hit the checkmark in the upper right corner. Type in a **group name**.
-Write the **first message** in the group and all members are informed about it and can answer in it (otherwise it is invisible to its members).


### Add members

- Everyone in a group has the **same rights**. Everyone can delete or add new members by clicking
  the group name in the chat.


### (Experimental) verified groups? 

- All Messages are end-to-end encrypted.
  Members can join by scanning a "QR invite code". All members are thus connected with each other
  through a chain of invites, guaranteeing cryptographic consistency against active network or
  provider attacks. See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
  for the R&D behind this feature.
  
- Not the same as 1:1 chats with a verified contact, even if there are only 2 people in the verified group.
  One difference is that you could easily add more people to the group, but there are other implications as
  well.

- Verified groups are invariably secured. Any breakage (cleartext or wrongly
  signed messages etc.) will be flagged and such messages will not be shown in
  this chat. You can trust all messages in this verified-checkmark chat to have
  not been read/altered by middle parties.

- 1:1 chats are opportunistic, it is meant to allow people to communicate no
  matter if they change e-mail clients, devices, setups etc. That's why there
  is no verification checkmark, even if you have verified the contact.

- Continual improvement since introduction in 2018.
  Large groups can be problematic, or messages can become unreadable.
  Early 2020 a security review is underway, and the QR-join protocols are being worked on.

### Deleted myself.

- No. As you're no longer a group member, you cannot add yourself again. 
  Ask any other group member to re-add you.


### Group exit.

- Delete the chat group or your user from the group list, or "mute" it.
  Muting means you can get and write messages, but are not notified of new ones.


## Encryption {#encryption}

### End-to-end-encryption?

- Yes. Autocrypt Level 1 standard support means messages sent to
  other [Autocrypt](https://autocrypt.org)-capable apps are end-to-end encrypted automatically.

### Explain.

- If the sender and recipient has a program with Autocrypt support, keys required for
  end-to-end-encryption are exchanged automatically to the recipient in the first message.
  All subsequent messages are end-to-end encrypted automatically. 
  
  If the sender or recipient doesn't have a Autocrypt capable e-mail program, messages
  are sent unencrypted.

  Autocrypt uses a limited subset of OpenPGP functionality. Moreover, 
  Delta Chat implements the "countermitm" protocols to achieve
  protection against active network attacks, going beyond the opportunistic
  base protection of Autocrypt, see questions about "Verified Groups".


### Without end-to-end encryption?


- It is possible to _turn off_ end-to-end-encryption in "Settings → Advanced settings".

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your mail
  server, and end-to-end encryption provides safety that is never broken between 
  your device and the recipient's device.


### Verification of encryption? 

Verification of all contacts is needed to make sure they aren't someone else.

This is done automatically when adding a contact in person, by checking the user profile of your contact:

- Tap "QR Invite code" on the device you want to verify, then tap "Scan QR code" and do so.
  If both devices are online a chat channel between them is set up (if it doesn't exist already). 
  Both users see "sender verified" when done. 

- If you did not add a contact in person, make sure the shown fingerprint matches on both devices manually.


### Encryption optics?

- In addition to end-to-end encryption status, there is also an indicator for transport level encryption.

- A **padlock** is shown beside messages from verified senders that are end-to-end-encrypted.
  It also means messages you send to this contact are also end-to-end-encrypted.

- **No padlock**. Usually you or the sender have turned off end-to-end encryption, or your contact doesn't have
  an e-mail client with support for Autocrypt.


### Perfect Forward Secrecy?

- No, Delta Chat uses OpenPGP under the hood, and it doesn't support it.
  Perfect Forward Secrecy works session-oriented, but e-mail is asynchronous by nature
  and often used from multiple devices independently. This means that if your
  Delta Chat private key is leaked, and someone has a record
  of all your in-transit messages, that someone will be able to read them.  

- Note that if anyone has seized or hacked your running device, that someone can
  typically read all your messages, regardless if Perfect Forward Secrecy
  is in place or not. Having access to a single device from a member of a group,
  will typically expose a lot of the social graph. Using e-mail addresses that
  are not easily tracked back to persons helps more for protecting group members from
  the effects of device seizure.

- Delta Chat developers are sketching up ways to better protect communications against the event
  of device seizure.


### Metadata protection?

- As a decentralized messenger, metadata from Delta Chat users
  is are not stored on a single central server. However, it is stored on the different mail
  servers of the respective sender and recipient of a message.

- Each mail server can currently determine who sent and received a message from the unencrypted To/CC headers,
  This also distinguishes who is part of a group. Delta Chat itself could avoid unencrypted To/CC headers quite easily
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other e-mail apps participating in chats. 

- Many other e-mail headers, in particular the "Subject" header, are protected with
  end-to-end-encryption, this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/) is also relevant.


### Existing private key?

- Yes. Send an Autocrypt Setup Message from the the e-mail client you use it on. Look for **Start Autocrypt Setup Transfer** in the settings of the other e-mail program.

- Alternatively, import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Again, Delta Chat does not need a preexisting key, it generates one for you automatically.


### But how?

Remove the passphrase encryption or password of the key you are trying to use and try again.
(Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.)

Alternatively, keep your passphrase by creating an e-mail alias for use with Delta Chat such that Delta Chat's
key is tied to this e-mail alias.

While Delta Chat supports common OpenPGP private key formats, unlikely 100% of all private keys from any sources.


### pEp (pretty easy privacy)?

- No. (Autocrypt end-to-end encryption standard is used).
  [Discussion on Autocrypt and pEp](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multiple devices {#multiclient}

To use the same Autocrypt encryption setup, with the **same account** on different (Autocrypt
capable) devices:

- On your first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On your other device, wait for the "Autocrypt Setup Message" to
  arrive. Click on it. It asks you for the security number. 

- Done. You can now use both your devices for sending and receiving
  end-to-end encrypted messages with your communication partners. 


## Miscellaneous

### _My_ e-mail-provider?

- Yes :)  
  However, sometimes not yet, and some providers need special options to work properly.
  Peruse the [provider overview](https://providers.delta.chat)


### More!

- Dig deep, here are the [standards]({% include standards-url %}) used in Delta Chat.
