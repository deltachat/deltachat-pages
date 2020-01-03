---
title: FAQ
lang: it
render_toc: true
header: Frequently Asked Questions
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# General

## What is Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat è una nuova applicazione che permette di inviare messaggi via email, cifrati, quando possibile con AutoCrypt . 
**Non è necessario registrarsi ad un servizio, usa direttamente il tuo account email tramite Delta Chat.** 

## How can I find people to chat with? 

Con Delta Chat puoi scrivere a qualsiasi indirizzo email - anche
se il destinatario non usa Delta Chat. Al contrario di altre app,
non è necessario che il destinatario utilizzi la tua stessa app.

## What are the advantages of Delta Chat compared to other messengers?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
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

## Which messages do appear in Delta Chat?

Delta Chat mostra automaticamente:

- Messaggi dai contatti nella tua **rubrica**
- Messaggi dai contatti **che hai contattato tu**
- **Risposte** dai messaggi inviati da te

Gli altri messaggi non appaiono automaticamente e devono essere cercati nella sezione **Richieste di contatto**. La chat può essere avviata da lì.

## What about spam?

- I messaggi nelle cartelle di spam vengono ignorati e gli indirizzi lì presenti non vengono considerati come conosciuti.
- Come per i messaggi da utenti sconosciuti, non vengono mostrati automaticamente quindi normalmente **non c'è spam**.
- In ogni caso è possibile **bloccare* qualsiasi contatto.

## Does Delta Chat support images, videos and other attachments?

- Sì. Oltre al testo semplice, tutti gli allegati alle email vengono mostrati come messaggi separati. I file saranno automaticamente legati ai messaggi in uscita quando necessario.

## Does Delta Chat support HTML e-mails?

- Si. Se le email in arrivo non dispongono di un formato testo, l'email in HTML viene convertita in testo dall'applicazione. Le email in uscita sono sempre in formato testo.

# Groups

## Creation of a group

- Seleziona **Aggiungi Gruppo** dal "Sandwich menu" nell'angolo in alto a destra della lista delle chat.
- Nella schermata successiva, scegli i **membri del gruppo** e seleziona la spunta in alto a destra. Poi potrai definire il **nome del gruppo**.
- Appena invii il **primo messaggio** nel gruppo, tutto i membri verranno informati della creazione del gruppo e potranno rispondere (finchè non invii il primo messaggio il gruppo resta invisibile ai membri).

## Add members to a group

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other. It enforces e2e group encryption that is safe against provider or 
  network attacks. However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## I have deleted myself by accident.

- Se non sei più un membro del gruppo, non puoi scegliere tu quando rientrarci. 
 Ad ogni modo, puoi sempre chiedere via chat a uno dei membri di aggiungerti nuovamente.

## I do not want to receive the messages of a group any longer.

- Rimuovi te stesso dalla lista dei membri o elimina l'intera chat. 
  Se vorrai rientrare nel gruppo in futuro, chiedi ad un membro di aggiungerti nuovamente.

- In alternativa puoi anche "silenziare" un gruppo - così facendo riceverai i messaggi 
  e potrai rispondere, ma non ti appariranno più le notifiche.

# Encryption {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Si. DeltaChat implementa lo standard Autocrypt Level 1 e può anche 
  cifrare e2e i messaggi da e verso altre app compatibili con Autocrypt.

## What do I have to do to activate the end-to-end-encryption?

- Nulla.

- Le app di Delta Chat (e altre app e-mail compatibili con [Autocrypt](https://autocrypt.org)
 ) condividono automaticamente le chiavi richieste per la cifratura end-to-end 
  appena viene inviato il primo messaggio. 
  Dopodiché tutti i messaggi successivi vengono cifrati automaticamente. 
  Se un membro della chat non usa un'app compatibile con Autocrypt 
  i messaggi non vengono cifrati finché non ne viene usata una compatibile.

- Se desideri _disattivare_ la cifratura end-to-end, usa 
  l'impostazione corrispondente in  "Impostazioni / Impostazioni avanzate".

## If end-to-end-encryption is not available, is the connection not encrypted at all?

- No. With most mail servers will then use _transport encryption_ (TLS).


## How can I check the encryption?

- Se viene mostrato un piccolo **lucchetto** vicino al messaggio, significa che questo è cifrato end-to-end _e_ è inviato dal mittente dato _e_ anche la tua risposta sarà cifrata end-to-end.

- Se non c'è **nessun lucchetto**, il messaggio è solitamente trasmesso in chiaro. Ad esempio perché tu o il destinatario avete disabilitato la cifratura end-to-end o il mittente usa un'applicazione che non la supporta.


## How can I verify the sender?

Il profilo utente mostra alcune info aggiuntive:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, the connection is safe.

- Lo stato della cifratura nel trasporto viene mostrato qui.


## Which standards are used for end-to-end-encryption?

- OpenPGP. Key transport is done via [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Si. Il miglior modo per farlo è inviare un messaggio di configurazione Autocrypt dall'altro client e-mail. Cerca comandi come "Avvia trasferimento impostazioni Autocrypt" nelle impostazioni dell'altro client e segui le istruzioni.

- In alternativa, puoi importare la chiave manualmente da "Impostazioni Avanzate / Gestisci chiavi private". Attenzione: assicurati che la chiave non sia protetta da password o rimuovila prima.

Se non hai una chiave o non sai perché ne dovresti aver bisogno, non preoccuparti: Delta Chat ne genera una quando necessario, non devi premere nessun tasto.

## I can't import my existing PGP key into Delta Chat.

In general, Delta Chat should support "common" private key formats, however, it
is unlikely that we will support 100% of all private keys of any sources. This
is also not the main focus of Delta Chat (in fact, the large majority of the
Delta Chat users will not have any key before they start using Delta).
However, we try to support private keys from other sources as good as possible. 

With a very good chance, the problem is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat. Please remove the
encryption and the password and try the import again.

La rimozione della password dalle chiavi private può cambiare a seconda del
software usato per gestire le chiavi PGP. Con Enigmail puoi impostarla ad un
valore vuoto nella finestra di gestione delle chiavi. Anche con GnuPG puoi farlo
[tramite linea di comando](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Per gli altri programmi puoi trovare altre soluzioni online.

# Multi-client {#multiclient}

## Can I use Delta Chat on multiple devices at the same time?

Se vuoi usare lo **stesso account** su dispositivi (compatibili
Autocrypt) diversi, devi sincronizzare i loro strumenti di cifratura: 

- Nel primo dispositivo, scegli "Impostazioni avanzate / Invia messaggio di configurazione Autocrypt" 
  e clicca finché viene mostrato un "numero di sicurezza". 

- Nell'altro dispositivo attendi che arrivi il "Messaggio di configurazione Autocrypt" 
  e selezionalo, dovrebbe mostrarti un numero di sicurezza.

- ora hai correttamente sincronizzato i dispositivi e puoi usarli per
  inviare e ricevere messaggi cifrati E2E con i tuoi interlocutori. 

# Miscellaneous

## Does Delta Chat work with _my_ e-mail-provider?

- Con buona probabilità: si :)  
  Ad ogni modo, alcuni provider richiedono di attivare impostazioni particolari per funzionare. Gli utenti hanno raccolto alcuni casi nel forum [Provider Overview](https://support.delta.chat/t/provider-overview/)


## I'm interested in the technical details. Can you tell me more?

- Consulta la pagina [Standard utilizzati in Delta Chat]({% include standards-url %}).
