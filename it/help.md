---
title: Aiuto
layout: default-it
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Domande frequenti (FAQ)

- [Generali](#general)
- [Gruppi](#groups)
- [Crittografia](#encryption)
- [Multi-client](#multiclient)
- [Varie](#miscellaneous)

# Generali {#general}

## Con chi posso comunicare?

- Con Delta Chat, è possibile comunicare con qualsiasi indirizzo email, anche se il destinatario non usa (ancora) Delta Chat. Questa è una delle più grandi differenze dalle altre app di messaggistica: non c'è alcun bisogno che il destinatario installi la stessa app che utilizza il mittente.

## Quali sono i vantaggi di Delta Chat rispetto alle altre app di messaggistica?

- _Independent_ of any company or services. _You_ own your data.
- Your data are not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP
- _Largest userbase_ - receivers _not_ using Delta Chat can be reached as well
- _Compatible_ - not only to itself
- _Elegant_ and _simple_ user interface
- _Distributed_ system
- _No Spam_ - only messages of known users are shown by default
- _Reliable_ - safe for professional use
- _Trustworthy_ - can even be used for business messages
- fully _Open Source_ and _Standards_ based

## Cosa succede se il destinatario non usa Delta Chat?

- Il destinatario riceverà una normale email quindi, se quest'ultimo risponderà alla email, la risposta verrà mostrata in Delta Chat.

## Quali messaggi vengono mostrati in Delta Chat?

Delta Chat mostra automaticamente:

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Gli altri messaggi non compaiono in maniera automatica, ma sarà possibile vederli utilizzando il menù **Richieste di contatto** ed eventualmente avviare una conversazione da lì.

## Come viene gestito lo spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## Delta Chat supporta immagini, video e altri allegati?

- Sì. Oltre al testo semplice, tutti gli allegati alle email vengono mostrati come messaggi separati. I file saranno automaticamente legati ai messaggi in uscita quando necessario.

## Delta Chat supporta le email in formato HTML?

- Sì. Se le email in entrata non hanno una parte di testo semplice, l'app converte automaticamente le email HTML in testo semplice. Le email in uscita usano sempre il testo semplice.

# Gruppi {#groups}

## Come posso creare un gruppo?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## Who to add members to a group?

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Ho accidentalmente rimosso me stesso dal gruppo.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## Non voglio più ricevere i messaggi da un gruppo.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Crittografia {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## Cosa bisogna fare per attivare la cifratura end-to-end?

- Nulla.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Se la cifratura end-to-end non è disponibile, anche la connessione non viene cifrata?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Come posso verificare la cifratura?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Come posso verificare il mittente?

Seleziona "Crittografia" dal profilo utente:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Quali standard vengono usati per la crittografia end-to-end?

- OpenPGP. Il trasporto delle chiavi avviene attraverso [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Si. Il miglior modo per farlo è inviare un messaggio di configurazione Autocrypt dall'altro client e-mail. Cerca comandi come "Avvia trasferimento impostazioni Autocrypt" nelle impostazioni dell'altro client e segui le istruzioni.

- In alternativa, puoi importare la chiave manualmente da "Impostazioni Avanzate / Gestisci chiavi private". Attenzione: assicurati che la chiave non sia protetta da password o rimuovila prima.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Multi-client {#multiclient}

## Posso usare Delta Chat su più dispositivi allo stesso tempo?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Varie {#miscellaneous}

## Delta Chat funziona con la _mia_ casella email?

- Con buona probabilità: si :)  
  Ad ogni modo, alcuni provider richiedono di attivare impostazioni particolari per funzionare. Gli utenti hanno raccolto alcuni casi nel forum [Provider Overview](https://support.delta.chat/t/provider-overview/)


## Sono interessato ai dettagli tecnici. Posso avere ulteriori informazioni?

- Consulta la pagina [Standard utilizzati in Delta Chat]({% include standards-url %}).
