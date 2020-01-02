---
title: FAQ
lang: it
render_toc: true
header: Frequently Asked Questions
---



<!-- GENERATED FILE -- DO NOT EDIT -->



## Generali {#general}

### Cos'è Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat è una nuova applicazione che permette di inviare messaggi via email, cifrati, quando possibile con AutoCrypt . 
**Non è necessario registrarsi ad un servizio, usa direttamente il tuo account email tramite Delta Chat.** 

### Come posso trovare persone con cui messaggiare? 

Con Delta Chat puoi scrivere a qualsiasi indirizzo email - anche
se il destinatario non usa Delta Chat. Al contrario di altre app,
non è necessario che il destinatario utilizzi la tua stessa app.

### Quali sono i vantaggi di Delta Chat rispetto alle altre app di messaggistica?

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

### Quali messaggi vengono mostrati in Delta Chat?

Delta Chat mostra automaticamente:

- Messaggi dai contatti nella tua **rubrica**
- Messaggi dai contatti **che hai contattato tu**
- **Risposte** dai messaggi inviati da te

Gli altri messaggi non appaiono automaticamente e devono essere cercati nella sezione **Richieste di contatto**. La chat può essere avviata da lì.

### Come viene gestita la spam?

- I messaggi nelle cartelle di spam vengono ignorati e gli indirizzi lì presenti non vengono considerati come conosciuti.
- Come per i messaggi da utenti sconosciuti, non vengono mostrati automaticamente quindi normalmente **non c'è spam**.
- In ogni caso è possibile **bloccare* qualsiasi contatto.

### Delta Chat supporta immagini, video e altri allegati?

- Sì. Oltre al testo semplice, tutti gli allegati alle email vengono mostrati come messaggi separati. I file saranno automaticamente legati ai messaggi in uscita quando necessario.

### Who sees my profile picture?

- You can add a profile picture in your settings. If you write to your contacts
  or add them via QR code, they automatically see it as your profile picture.

- Contacts who don't use Delta Chat see it as an E-Mail attachment.

- For privacy reasons, no one sees your profile picture until you write a
  message to them.

- Your profile picture isn't sent with every message, but regularly enough that
  your contacts will re-receive your profile picture, even if they add a new
  device.

### Delta Chat supporta le email in HTML?

- Si. Se le email in arrivo non dispongono di un formato testo, l'email in HTML viene convertita in testo dall'applicazione. Le email in uscita sono sempre in formato testo.

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

## Gruppi {#groups}

### Creare un gruppo

- Seleziona **Aggiungi Gruppo** dal "Sandwich menu" nell'angolo in alto a destra della lista delle chat.
- Nella schermata successiva, scegli i **membri del gruppo** e seleziona la spunta in alto a destra. Poi potrai definire il **nome del gruppo**.
- Appena invii il **primo messaggio** nel gruppo, tutto i membri verranno informati della creazione del gruppo e potranno rispondere (finchè non invii il primo messaggio il gruppo resta invisibile ai membri).

### Aggiungere membri ad un gruppo

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.

### Cos'è un gruppo verificato? Why is it experimental? 

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

### Ho accidentalmente rimosso me stesso dal gruppo.

- Se non sei più un membro del gruppo, non puoi scegliere tu quando rientrarci. 
 Ad ogni modo, puoi sempre chiedere via chat a uno dei membri di aggiungerti nuovamente.

### Non voglio più ricevere i messaggi da un gruppo.

- Rimuovi te stesso dalla lista dei membri o elimina l'intera chat. 
  Se vorrai rientrare nel gruppo in futuro, chiedi ad un membro di aggiungerti nuovamente.

- In alternativa puoi anche "silenziare" un gruppo - così facendo riceverai i messaggi 
  e potrai rispondere, ma non ti appariranno più le notifiche.

## Crittografia {#encryption}

### Delta Chat supporta la cifratura end-to-end?

- Si. DeltaChat implementa lo standard Autocrypt Level 1 e può anche 
  cifrare e2e i messaggi da e verso altre app compatibili con Autocrypt.

### Cosa bisogna fare per attivare la cifratura end-to-end?

- Nulla.

- Le app di Delta Chat (e altre app e-mail compatibili con [Autocrypt](https://autocrypt.org)
 ) condividono automaticamente le chiavi richieste per la cifratura end-to-end 
  appena viene inviato il primo messaggio. 
  Dopodiché tutti i messaggi successivi vengono cifrati automaticamente. 
  Se un membro della chat non usa un'app compatibile con Autocrypt 
  i messaggi non vengono cifrati finché non ne viene usata una compatibile.

- Se desideri _disattivare_ la cifratura end-to-end, usa 
  l'impostazione corrispondente in  "Impostazioni / Impostazioni avanzate".

### Se la cifratura end-to-end non è disponibile, anche la connessione non viene cifrata?

- With most mail servers, Delta Chat establishes _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  This only secures the connection between your device and your e-mail
  server. Whereas e2e-encryption provides safety between 
  your device and a friend's device. 

### How can I verify cryptographic status with a sender? 

Il profilo utente mostra alcune info aggiuntive:

- Puoi premere su "Codice QR di invito" su Android e poi usare la funzione
"Scansiona codice QR" su un altro dispositivo. Se entrambi i dispositivi sono
online, verrà creata una chat tra di loro (se non ne esiste già una) e verranno
anche verificate le chiavi di cifratura. Both will see a
  "sender verified" system message in their 1:1 chat. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, 
  the connection is safe.

- Lo stato della cifratura nel trasporto viene mostrato qui.


### How can I check the encryption of messages?

- Se viene mostrato un piccolo **lucchetto** vicino al messaggio, significa che questo è cifrato end-to-end _e_ è inviato dal mittente dato _e_ anche la tua risposta sarà cifrata end-to-end.

- Se non c'è **nessun lucchetto**, il messaggio è solitamente trasmesso in chiaro. Ad esempio perché tu o il destinatario avete disabilitato la cifratura end-to-end o il mittente usa un'applicazione che non la supporta.


### Quali standard vengono usati per la crittografia end-to-end?

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

### Posso riutilizzare le mie chiavi private esistenti?

- Si. Il miglior modo per farlo è inviare un messaggio di configurazione Autocrypt dall'altro client e-mail. Cerca comandi come "Avvia trasferimento impostazioni Autocrypt" nelle impostazioni dell'altro client e segui le istruzioni.

- In alternativa, puoi importare la chiave manualmente da "Impostazioni Avanzate / Gestisci chiavi private". Attenzione: assicurati che la chiave non sia protetta da password o rimuovila prima.

Se non hai una chiave o non sai perché ne dovresti aver bisogno, non preoccuparti: Delta Chat ne genera una quando necessario, non devi premere nessun tasto.

### Non riesco ad importare la mia chiave PGP in Delta Chat.

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

La rimozione della password dalle chiavi private può cambiare a seconda del
software usato per gestire le chiavi PGP. Con Enigmail puoi impostarla ad un
valore vuoto nella finestra di gestione delle chiavi. Anche con GnuPG puoi farlo
[tramite linea di comando](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Per gli altri programmi puoi trovare altre soluzioni online.

### Why don't you use pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Posso usare Delta Chat su più dispositivi contemporaneamente?

Se vuoi usare lo **stesso account** su dispositivi (compatibili
Autocrypt) diversi, devi sincronizzare i loro strumenti di cifratura: 

- Nel primo dispositivo, scegli "Impostazioni avanzate / Invia messaggio di configurazione Autocrypt" 
  e clicca finché viene mostrato un "numero di sicurezza". 

- Nell'altro dispositivo attendi che arrivi il "Messaggio di configurazione Autocrypt" 
  e selezionalo, dovrebbe mostrarti un numero di sicurezza.

- ora hai correttamente sincronizzato i dispositivi e puoi usarli per
  inviare e ricevere messaggi cifrati E2E con i tuoi interlocutori. 

## Varie {#miscellaneous}

### Delta Chat funziona con la _mia_ casella email?

- Con buona probabilità: si :)  
  Ad ogni modo, alcuni provider richiedono di attivare impostazioni particolari per funzionare. Gli utenti hanno raccolto alcuni casi nel forum [Provider Overview](https://support.delta.chat/t/provider-overview/)


### Sono interessato ai dettagli tecnici. Posso avere ulteriori informazioni?

- Consulta la pagina [Standard utilizzati in Delta Chat]({% include standards-url %}).
