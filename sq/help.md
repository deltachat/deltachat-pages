---
title: PBR
lang: sq
render_toc: true
header: Pyetje të Bëra Rëndom
---



<!-- GENERATED FILE -- DO NOT EDIT -->



## Të përgjithshme

## Ç’është Delta Chat-i?

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat është një aplikacion i ri bisedash që i dërgon mesazhet përmes emai-i, të fshehtëzuar, nëse është e mundur, me Autocrypt. 
**Nuk ju duhet të regjistroheni gjëkundi, thjesht përdorni me Delta Chat-in llogarinë tuaj ekzistuese email.** 

### Si mund të gjej persona për të biseduar me ta? 

Me Delta Chat-in, mund t’i shkruani cilësdo adresë email ekzistuese - madje
edhe kur marrësi nuk përdor aplikacionin Delta Chat. Për marrësin s’është
e nevojshme të instalojë të njëjtin aplikacion me ju, si me programe të tjera

### Cilat janë përparësitë e Delta Chat-it krahasuar me programe të tjerë të llojit?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _Compatible_ - not only to itself.
- _Elegant_ and _simple_ user interface.
- _Distributed_ system.
- _No Spam_ - only messages of known users are shown by default.
- _Reliable_ - safe for professional use.
- _Trustworthy_ - can even be used for business messages.
- _Copyleft_ and _Standards_ based libre software.

### Cilat mesazhe shfaqen në Delta Chat?

Delta Chat shfaq automatikisht:

- Mesazhe nga kontakte prej **librit tuaj të adresave**
- Mesazhe nga kontakte **të kontaktuar nga ju**
- **Përgjigje** ndaj mesazheve dërguar nga ju

Mesazhet e tjera nuk shfaqen automatikisht dhe mund të gjenden te menuja kryesore, te **Kërkesa kontakti**. Nëse dëshirohet, një bisedë mund të fillohet që prej atje.

### Po mesazhet e padëshiruara?

- Mesazhet në dosje të zakonshme mesazhesh të padëshiruar shpërfillen dhe adresat në ta nuk konsiderohen si kontakte të njohur.
- Meqë mesazhet prej kontaktesh të panjohur nuk shfaqen automatikisht, normalisht, **s’ka mesazhe të padëshiruar**.
- Sido qoftë, nëse duhet vërtet, mundeni të **bllokoni** cilindo kontakt.

### A mbulon Delta Chat-i figura, video dhe bashkëngjitje të tjera?

- Po. Veç tekstit të thjeshtë, krejt bashkëngjitjet email shfaqen si mesazhe më vete. Mesazhet ikëse do të pranojnë vetvetiu bashkëngjitje sipas nevojës.

### Who sees my profile picture?

- You can add a profile picture in your settings. If you write to your contacts
  or add them via QR code, they automatically see it as your profile picture.

- Contacts who don't use Delta Chat see it as an E-Mail attachment.

- For privacy reasons, no one sees your profile picture until you write a
  message to them.

- Your profile picture isn't sent with every message, but regularly enough that
  your contacts will re-receive your profile picture, even if they add a new
  device.

### A mbulon Delta Chat-i email-e HTML?

- Po. Nëse email-i ardhës nuk ka pjesë nën tekst të thjeshtë, email-et HTML shndërrohen në tekst të thjeshtë te aplikacioni. Email-et dërgohen përherë si tekst i thjeshtë.

### Why do I have to enter my E-Mail password into Delta Chat? Is this secure?

As with other E-Mail programs like Thunderbird, K9-Mail, or Outlook, the
program needs the password so you can use it to send mails. Of course, the
password is stored only on your device. The password is only transmitted to
your E-Mail provider (when you login), which has access to your mails anyway. 

If you use an E-Mail provider with OAuth2 support like gmail.com or yandex.ru,
there is no need to store your password on the device. In this case, only an
access token is used.

As Delta Chat is Open Source, you can check the [Source
Code](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
if you want to verify that your credentials are handled securely. We are happy
about feedback which makes the app more secure for all of our users.

### Which Android permissions does Delta Chat need?

- Camera *(can be disallowed)*
  - take pictures and videos: for sending Photos
- Contacts *(can be disallowed)*
  - read your contacts: to discover contacts to chat with
- Location *(can be disallowed)*
  - access approximate location (network location sources): for the location streaming feature
  - access precise location (GPS and network location sources): for the location streaming feature
- Microphone *(can be disallowed)*
  - record audio: for audio messages
- Storage *(can be disallowed)*
  - modify or delete the contents of your SD card: to download message attachments
  - read the contents of your SD card: to share files with your contacts
- Other app capabilities
  - change your audio settings: so you can choose ring tones and volume for notifications and audio messages
  - run at startup: so you don't have to start Delta Chat manually
  - control vibration: for notifications
  - view network connections: to connect to your E-Mail provider
  - prevent phone from sleeping: so you can easier copy the security code during the Autocrypt Setup Message
  - have full network access: to connect to your E-Mail provider
  - view Wi-Fi connections: to connect to your E-Mail provider
  - ask to ignore battery optimisations: for users who want to receive messages all the time

## Grupe

### Krijimi i një grupi

- Përzgjidhni **Shtoni grup** që nga "menuja sanduiç" në cepin e sipërm djathtas te skena bazë e bisedave.
- Te skena vijuese, përzgjidhni **anëtarët e grupit** dhe i vini shenjë kutizës në cepin e sipërm djathtas. Pas kësaj, mund të përcaktoni një **emër grupi**.
- Sapo të shkruani **mesazhin tuaj të parë** në grup, krejt anëtarët e mësojnë krijimin e grupit të ri dhe mund të përgjigjen te grupi (për sa kohë që nuk shkruani një mesazh te grupi, grupi është i padukshëm për anëtarët).

### Shtim anëtarësh te një grup?

- Çdo anëtar i grupit ka **të njëjtat të drejta** si kushdo tjetër. Për këtë arsye, gjithkush mund të fshijë cilindo anëtar ose të shtojë të rinj.
- Për të shtuar ose fshirë anëtarë, klikoni mbi emrin e grupit te biseda.

### Ç’është një grup i verifikuar? Why is it experimental? 

- A verified group is a chat that gurantees safety against an active
  attacker.  All Messages in a verified chat view are e2e-encrypted, and
  members can join by scanning a "QR invite code".  All members are thus 
  connected with each other through a chain of invites, which guarantee 
  cryptographic consistency against active network or provider attacks. 
  See https://countermitm.readthedocs.io/en/latest/new.html
  for the R&D behind this feature. 

- As of Dec 2019, a "verified group" remains an experimental feature.
  It is continously improved and many bugs have been fixed since the
  original introduction in 2018.  However, there remain cases, especially 
  with large groups where inconsistencies can occure, or messages become 
  unreadable.  Early 2020 a security review is upcoming, and several new
  developments around qr-join protocols are taking place so chances
  are we remove the "experimental" label not too far in the future. 

### Fshiva veten padashje.

- Ngaqë s’jeni më anëtar i grupit, s’mund të shtoni veten sërish. 
  Megjithatë, s’ka problem, thjesht kërkojini një anëtari tjetër të grupit në një fjalosje të zakonshme t’ju shtojë sërish.

### S’dua t’i marr më mesazhet e një grupi.

- Ose fshini veten si anëtar i listës, ose fshini krejt bisedën. 
  Nëse më vonë doni të ribëheni pjesë e grupit, kërkojini një anëtari tjetër të grupit t’ju shtojë sërish.

- Ndryshe, mundeni edhe ta "Heshtoni" një grup - duke bërë këtë, do të merrni
krejt mesazhet dhe prapë mund të shkruani, por nuk njoftoheni më, 
për çfarëdo mesazhesh të rinj.

## Fshehtëzim {#encryption}

### A ka Delta Chat-i fshehtëzim skaj-më-skaj?

- Po. DeltaChat sendërton standardin Autocrypt Level 1 
  dhe është pra në gjendje të fshehtëzojë mesazhe me e2e-n 
  përmes aplikacionesh të tjera të afta të përdorin Autocrypt-in. 

### Ç’duhet të bëj që të aktivizohet fshehtëzimi skaj-më-skaj?

- Asgjë.

- Aplikacionet Delta Chat (dhe të tjerë aplikacione email të aftë për [Autocrypt](https://autocrypt.org))
përdorin automatikisht të njëjtat kyçe të domosdoshëm për fshehtëzim 
skaj-më-skaj, teksa dërgohen mesazhet e para. Pas kësaj, krejt mesazhet 
pasues fshehtëzohen automatikisht skaj-më-skaj. Nëse një nga partnerët 
në bisedë, më pas, përdor një aplikacion email që nuk mbulon Autocrypt-in, 
mesazhet nuk fshehtëzohen, derisa të ketë sërish një aplikacion të aftë për Autocrypt-in.

- Nëse doni të _çaktivizohet_ fshehtëzimi skaj-më-skaj, 
  përdorni fushën përkatës te "Rregullime / Rregullime të mëtejshme".

### Nëse s’ka fshehtëzim skaj-më-skaj, a lihet lidhja pa u fshehtëzuar fare?

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 

### How can I verify cryptographic status with a sender? 

Profili i përdoruesit shfaq disa të dhëna shtesë:

- Prekni "Kod Ftese QR" te Android dhe mandej përdorni butonin 
  “Skanoni kod QR” te pajisja tjetër që të skanoni këtë kod.  Nëse që të dyja 
  pajisjet janë në linjë, do të vendosin një kanal bisede me njëra-tjetrën 
  (nëse ky s’ekziston tashmë) dhe do të verifikohen edhe kyçet e fshehtëzimit.  Both will see a
  "sender verified" system message in their 1:1 chat. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, 
  the connection is safe.

- Për fshehtëzim të transportit, gjendja thjesht tregohet atje


### How can I check the encryption of messages?

- Nëse në krah të mesazhit shfaqet një **dry** i vockël, kjo tregon se mesazhi është i fshehtëzuar skaj-më-skaj _dhe_ se është dërguar nga dërguesi i dhënë _dhe_ se përgjigja juaj edhe ajo do të fshehtëzohet skaj-më-skaj.

- Nëse **s’ka dry**, mesazhi zakonisht transportohet i pafshehtëzuar, p.sh., ngaqë ju ose dërguesi keni çaktivizuar fshehtëzimin skaj-më-skaj, ose dërguesi përdor një aplikacion që nuk mbulon fshehtëzimin skaj-më-skaj.


### Cilët standarde përdoren për fshehtëzim skaj-më-skaj?

- [Autocrypt](https://autocrypt.org) is used for establishing
  e2e-encryption with other Delta Chat and other Autocrypt-capable mail apps. 
  Autocrypt uses a limited subset of OpenPGP functionality. Moreover, 
  Delta Chat implements the "countermitm" protocols to achieve
  protection against active network attacks, going beyond the opportunistic
  base protection of Autocrypt, see questions about "Verified Groups".


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

- Note that if anyone has seized or hacked your running phone, 
  they will typically be able to read all messages, no matter if Perfect
  Forward Secrecy is in place or not.  Having access to a single device
  from a member of a group, will typically a lot of the social graph. 
  Using e-mail addresses that are not easily tracked back to persons
  helps group members to stay safer from the effects of device seizure. 

- We are sketching ways to protect communications better against the event
  of device seizure. 

### How does Delta Chat protect my Metadata?

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently know about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).

### A mund të ripërdor kyçin tim ekzistues privat?

- Po. Rruga më e mirë është të dërgohet një Mesazh Rregullimi Autocrypt-i që nga klienti tjetër email. Shihni për diçka si **Start Autocrypt Setup Transfer** te rregullimet e klientit tjetër dhe ndiqni udhëzimet e dhëna atje.

- Ndryshe, mund ta importoni kyçin dorazi që nga "Rregullime të mëtejshme / Administroni kyçe private". Kujdes: Sigurohuni që kyçi nuk mbrohet me fjalëkalim, ndryshe hiqjani fjalëkalimin paraprakisht.

Nëse s’keni kyç ose as që e dinit se mund t’ju duhej një i tillë… mos u bëni merak: Delta Chat-i prodhon një të tillë, kur duhet, dhe s’keni gjë për të bërë. 

### S’importoj dot në Delta Chat kyçet e mi ekzistues PGP.

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You may remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Format wise, Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

Heqja e fjalëkalimi nga kyçi privat do të jetë e ndryshme, varet nga software-i
që ju përdorni për administrim kyçesh PGP. Me Enigmail-in, mund t’i jepni
fjalëkalimit tuaj një vlerë të zbrazët, që nga dritarja Administrim Kyçesh. Me
GnuPG-në mund ta bëni [përmes rreshti urdhrash](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Për programe të tjera, mund të gjeni një zgjidhje në internet.

### Why don't you use pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-klient {#multiclient}

### A mund ta përdor Delta Chat-in në shumë pajisje njëherësh në të njëjtën kohë?

Nëse doni të përdorni **të njëjtën llogari** në pajisje të ndryshme (të afta 
për Autocrypt), lypset të njëkohësoni aftësitë e tyre për fshehtëzim: 

- Në pajisjen e parë, zgjidhni "Rregullime të mëtejshme / Dërgo mesazh Rregullimi Autocrypt-i" 
  dhe klikoni derisa të shfaqet një "numër sigurie". 

- Në pajisjen tjetër, pritni të mbërrijë "Mesazh Rregullimi Autocrypt-i" 
  dhe klikoni mbi të, çka do të duhej t’ju kërkonte numrin e sigurisë. 

- tani jeni i njëkohësuar dhe mund të përdorni që të dyja pajisjet për marrje
dhe dërgim mesazhesh, të fshehtëzuar me E2E, me partnerët tuaj në komunikim.

## Të ndryshme

### A funksionon Delta Chat me shërbimin tim email?

- Shumë gjasa janë që: Po :)  
  Sidoqoftë, disa shërbime lypin mundësi speciale për të punuar si duhet; përdoruesit kanë grumbulluar disa prej tyre te forumi në [Përmbledhje Shërbimesh](https://support.delta.chat/t/provider-overview/)


### Më interesojnë hollësitë teknike. Mund të më tregoni diçka më tepër?

- Shihni [Standarde të përdorur në Delta Chat]({% include standards-url %}).
