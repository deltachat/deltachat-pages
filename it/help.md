---
title: Help
lang: it
---



<!-- GENERATED FILE -- DO NOT EDIT -->




# Frequently Asked Questions
{:toc}

# Generali {#general}

## Cos'è Delta Chat? 

<img style="float: right;" width="400px" src="../assets/home/delta-what.png" />

Delta Chat è una nuova applicazione che permette di inviare messaggi via email, cifrati, quando possibile con AutoCrypt . 
**Non è necessario registrarsi ad un servizio, usa direttamente il tuo account email tramite Delta Chat.** 

## Come posso trovare persone con cui messaggiare? 

Con Delta Chat puoi scrivere a qualsiasi indirizzo email - anche
se il destinatario non usa Delta Chat. Al contrario di altre app,
non è necessario che il destinatario utilizzi la tua stessa app.

## Quali sono i vantaggi di Delta Chat rispetto alle altre app di messaggistica?

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

## Quali messaggi vengono mostrati in Delta Chat?

Delta Chat automatically shows:

- Messaggi dai contatti nella tua **rubrica**
- Messaggi dai contatti **che hai contattato tu**
- **Risposte** dai messaggi inviati da te

Other messages do not appear automatically, and are to be found in the main menu at **Contact requests**. If desired a chat can be started from there.

## What about spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there is **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat supporta immagini, video e altri allegati?

- Yes. Beside the plain text, all e-mail attachments are displayed as separate messages. Outgoing messages get attachments as needed automatically.

## Does Delta Chat support HTML e-mails?

- Yes. If incoming e-mail lacks a plain text part, HTML-emails is converted to plain text in the app. Outgoing e-mails always use plain text.

# Gruppi {#groups}

## Creation of a group

- Seleziona **Aggiungi Gruppo** dal "Sandwich menu" nell'angolo in alto a destra della lista delle chat.
- Nella schermata successiva, scegli i **membri del gruppo** e seleziona la spunta in alto a destra. Poi potrai definire il **nome del gruppo**.
- Appena invii il **primo messaggio** nel gruppo, tutto i membri verranno informati della creazione del gruppo e potranno rispondere (finchè non invii il primo messaggio il gruppo resta invisibile ai membri).

## Add members to a group

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.

## Cos'è un gruppo verificato?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other. It enforces e2e group encryption that is safe against provider or 
  network attacks. However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Ho accidentalmente rimosso me stesso dal gruppo.

- As you're no longer a group member, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to re-add you.

## Non voglio più ricevere i messaggi da un gruppo.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group again later on, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so means you get all messages and 
  can still write, but are no longer notified of any new messages.

# Crittografia {#encryption}

## Delta Chat supporta la cifratura end-to-end?

- Yes. Delta Chat implements the Autocrypt Level 1 standard and can 
  thus E2E-encrypt messages with other Autocrypt-capable apps. 

## Cosa bisogna fare per attivare la cifratura end-to-end?

- Nulla.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app, subsequent 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _turn off_ the end-to-end-encryption, 
  use the corresponding setting in "Settings / Advanced settings".

## Se la cifratura end-to-end non è disponibile, anche la connessione non viene cifrata?

- No. With most mail servers will then use _transport encryption_ (TLS).


## Come posso verificare la cifratura?

- If a little **padlock** is shown beside a message, this denotes the message is end-to-end-encrypted _and_ is sent from the given sender _and_ that your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transported unencrypted e.g. because you or the sender have turned off end-to-end-encryption, or the sender uses an app without support for end-to-end-encryption.


## Come posso verificare il mittente?

The user's profile shows some additional info:

- Tap "QR Invite code" on Android and then use the "Scan QR code"
  button on another device to scan this code. If both devices are online,
  they will introduce a chat channel with each-other (if it doesn't exist already) 
  and the encryption keys will also be verified. 

- For end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If the same fingerprints appears on your chat partner's device, the connection is safe.

- Lo stato della cifratura nel trasporto viene mostrato qui.


## Quali standard vengono usati per la crittografia end-to-end?

- OpenPGP. Il trasporto delle chiavi avviene attraverso [Autocrypt](https://autocrypt.org).

## Posso riutilizzare le mie chiavi private esistenti?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Advanced settings / Manage private keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

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

Removing the password from the private key will be different, depending on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you can find a solution online.

# Multi-client {#multiclient}

## Can I use Delta Chat on multiple devices at the same time?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to sync their encryption capabilities: 

- Nel primo dispositivo, scegli "Impostazioni avanzate / Invia messaggio di configurazione Autocrypt" 
  e clicca finché viene mostrato un "numero di sicurezza". 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it, which should prompt you for the security number. 

- You are now synchronized, and can use both devices for
  sending and receiving E2E-encrypted messages with your communication partners. 

# Varie {#miscellaneous}

## Delta Chat funziona con la _mia_ casella email?

- Con buona probabilità: si :)  
  Ad ogni modo, alcuni provider richiedono di attivare impostazioni particolari per funzionare. Gli utenti hanno raccolto alcuni casi nel forum [Provider Overview](https://support.delta.chat/t/provider-overview/)


## Sono interessato ai dettagli tecnici. Posso avere ulteriori informazioni?

- See [Standards used in Delta Chat]({% include standards-url %}).
