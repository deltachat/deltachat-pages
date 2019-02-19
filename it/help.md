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

- Con Delta Chat, è possibile comunicare con qualsiasi indirizzo email, anche se il destinatario non usa (ancora) Delta Chat. Questa è una delle più grandi differenze rispetto alle altre app di messaggistica: non c'è alcun bisogno che il destinatario installi la stessa app usata dal mittente.

## Quali sono i vantaggi di Delta Chat rispetto alle altre app di messaggistica?

- _Indipendente_ da ogni azienda o servizio. _Tu_ possiedi i tuoi dati.
- I tuoi dati non vengono salvati in un server centrale; in questo modo, contrariamente alla maggior parte delle app di messggistica, Delta Chat protegge anche i metadati (chi scrive a chi?)
- Non condividi la tua rubrica con nessuno.
- _Veloce_ grazia all'uso del Push-IMAP
- _Base utenti amplia_ - puoi comunicare anche con i destinatari che _non_ usano Delta Chat
- _Compatibile_ - non solo con sé stessa
- Interfaccia _Elegante_ e _semplice_
- Sistema _Distribuito_ system
- _Niente Spam_ - di default vengono mostrati solo i messaggi degli utenti conosciuti
- _Solida_ - sicura per l'uso professionale
- _Affidabile_ - può essere usata anche per messaggi aziendali
- Completamente _Open Source_ e basata sugli _Standard_

## Cosa succede se il destinatario non usa Delta Chat?

- Il destinatario riceverà una normale email quindi, se quest'ultimo risponderà alla email, la risposta verrà mostrata in Delta Chat.

## Quali messaggi vengono mostrati in Delta Chat?

Delta Chat mostra automaticamente:

- Messaggi dai contatti nella tua **rubrica**
- Messaggi dai contatti **che hai contattato tu**
- **Risposte** dai messaggi inviati da te

Gli altri messaggi non compaiono in maniera automatica, ma sarà possibile vederli utilizzando il menù **Richieste di contatto** ed eventualmente avviare una conversazione da lì.

## Come viene gestito lo spam?

- I messaggi nelle cartelle di spam comuni vengono ignorati e gli indirizzi contenuti non vengono considerati come contatti conosciuti.
- I messaggi dai contatti sconosciuti non appaiono automaticamente, di solito **non c'è spam**.
- Ad ogni modo, se necessario, puoi **bloccare** qualsiasi contatto.

## Delta Chat supporta immagini, video e altri allegati?

- Sì. Oltre al testo semplice, tutti gli allegati alle email vengono mostrati come messaggi separati. I file saranno automaticamente legati ai messaggi in uscita quando necessario.

## Delta Chat supporta le email in formato HTML?

- Sì. Se le email in entrata non hanno una parte di testo semplice, l'app converte automaticamente le email HTML in testo semplice. Le email in uscita usano sempre il testo semplice.

# Gruppi {#groups}

## Come posso creare un gruppo?

- Seleziona **Aggiungi Gruppo** dal "Sandwich menu" nell'angolo in alto a destra della lista delle chat.
- Nella schermata successiva, scegli i **membri del gruppo** e seleziona la spunta in alto a destra. Poi potrai definire il **nome del gruppo**.
- Appena invii il **primo messaggio** nel gruppo, tutto i membri verranno informati della creazione del gruppo e potranno rispondere (finchè non invii il primo messaggio il gruppo resta invisibile ai membri).

## Come aggiungo membri ad un gruppo?

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.

## Cos'è un gruppo verificato?

- Un "gruppo verificato" è una funzionalità sperimentale (Gennaio 2019)
Aggiungendosi l'un l'altro tramite la scansione dei codice QR, un gruppo di membri "verificati"
può parlarsi. Viene forzata la crittografia e2e del gruppo, per garantire sicurezza contro i provider 
o gli attacchi di rete. Tuttavia, alcuni test e feedback suggeriscono la necessità di alcune 
modifiche nella UX e nell'implementazione. Discussioni recenti si possono trovare su:
https://countermitm.readthedocs.io/en/latest/new.html

## Ho accidentalmente rimosso me stesso dal gruppo.

- Se non sei più un membro del gruppo, non puoi scegliere tu quando rientrarci. 
 Ad ogni modo, puoi sempre chiedere via chat a uno dei membri di aggiungerti di nuovo.

## Non voglio più ricevere i messaggi da un gruppo.

- Rimuovi te stesso dalla lista dei membri o elimina l'intera chat. 
  Se vorrai rientrare nel gruppo in futuro, chiedi ad un membro di aggiungerti nuovamente.

- In alternativa puoi anche "Silenziare" un gruppo - così facendo riceverai i messaggi 
  e potrai rispondere, ma non ti appariranno più le notifiche.

# Crittografia {#encryption}

## Delta Chat supporta la cifratura end-to-end?

- Si. DeltaChat implementa lo standard Autocrypt Level 1 e può anche 
  cifrare e2e i messaggi da e verso altre app compatibili con Autocrypt. 

## Cosa bisogna fare per attivare la cifratura end-to-end?

- Nulla.

- Le app di Delta Chat (e altre app e-mail compatibili con [Autocrypt](https://autocrypt.org)
 ) condividono automaticamente le chiavi richieste per la cifratura end-to-end 
  appena viene inviato il primo messaggio. 
  Dopodiché tutti i messaggi successivi vengono cifrati automaticamente. 
  Se un componente della chat non usa un'app compatibile con Autocrypt 
  i messaggi non vengono cifrati finché non ne viene usata una compatibile. 

- Se desideri _disattivare_ la cifratura end-to-end, usa 
  l'impostazione corrispondente in  "Impostazioni / Impostazioni avanzate".

## Se la cifratura end-to-end non è disponibile, anche la connessione non viene cifrata?

- No. Con la maggior parte dei server viene usata la _transport encryption_ (TLS).


## Come posso verificare la cifratura?

- Se viene mostrato un piccolo **lucchetto** vicino al messaggio, significa che questo è cifrato end-to-end _e_ è inviato dal mittente dato _e_ anche la tua risposta sarà cifrata end-to-end.

- Se non c'è **nessun lucchetto**, il messaggio è solitamente cifrato solo nel trasporto, ad es. perché tu o il destinatario avete disabilitato la cifratura end-to-end o il mittente usa un'app che non la supporta.


## Come posso verificare il mittente?

Seleziona "Crittografia" dal profilo utente:

- Puoi selezionare "Codice di invito QR" su Android e usare la "Scansione codice QR"
  su un altro dispositivo per scansionare il codice.  Se entrambi i dispositivi sono connessi
  verrà creata una chat con entrambi i partecipanti (se non è già presente) 
  e verranno anche verificate le chiavi di cifratura. 

- Per la cifratura end-to-end, Delta Chat mostra due impronte qui.
  Se sono identiche a quelle sul dispositivo del tuo interlocutore, la connessione è sicura.

- Lo stato della cifratura nel trasporto viene mostrato qui.


## Quali standard vengono usati per la crittografia end-to-end?

- OpenPGP. Il trasporto delle chiavi avviene attraverso [Autocrypt](https://autocrypt.org).

## Posso riutilizzare le mie chiavi private esistenti?

- Si. Il miglior modo per farlo è inviare un messaggio di configurazione Autocrypt dall'altro client e-mail. Cerca comandi come "Avvia trasferimento impostazioni Autocrypt" nelle impostazioni dell'altro client e segui le istruzioni.

- In alternativa, puoi importare la chiave manualmente da "Impostazioni Avanzate / Gestisci chiavi private". Attenzione: assicurati che la chiave non sia protetta da password o rimuovila prima.

Se non hai una chiave o non sai perché ne dovresti aver bisogno, non preoccuparti: Delta Chat ne genera una quando necessario, non devi premere nessun tasto.

# Multi-client {#multiclient}

## Posso usare Delta Chat su più dispositivi allo stesso tempo?

Se vuoi usare lo **stesso account** su dispositivi (compatibili
Autocrypt) diversi, devi sincronizzare i loro strumenti di cifratura: 

- Nel primo dispositivo, scegli "Impostazioni avanzate / Invia messaggio di configurazione Autocrypt" 
  e clicca finché viene mostrato un "numero di sicurezza". 

- Nell'altro dispositivo attendi che arrivi il "Messaggio di configurazione Autocrypt" 
  e selezionalo, dovrebbe mostrarti un numero di sicurezza. 

- ora hai correttamente sincronizzato i dispositivi e puoi usarli per
  inviare e ricevere messaggi cifrati end-to-end con i tuoi interlocutori. 

# Varie {#miscellaneous}

## Delta Chat funziona con la _mia_ casella email?

- Con buona probabilità: si :)  
  Ad ogni modo, alcuni provider richiedono di attivare impostazioni particolari per funzionare. Gli utenti hanno raccolto alcuni casi nel forum [Provider Overview](https://support.delta.chat/t/provider-overview/)


## Sono interessato ai dettagli tecnici. Posso avere ulteriori informazioni?

- Consulta la pagina [Standard utilizzati in Delta Chat]({% include standards-url %}).
