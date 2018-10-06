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

- È _indipendente_ da qualunque azienda o servizio. _Tu_ mantieni il possesso dei tuoi dati.
- I tuoi dati non vengono salvati su un server centrale; in questo modo, al contrario alla maggior parte delle app di messaggistica, Delta Chat protegge anche i metadati (chi scrive a chi?).
- Non vengono distribuiti i propri contatti a nessuno.
- È _veloce_ grazie all'uso del Push-IMAP.
- Offre la _più vasta base di utenti_. Anche coloro che _non_ utilizzano Delta Chat possono comunque essere contattati.
- È _compatibile_, non solo con se stessa.
- È _elegante_ e con una _semplice_ interfaccia utente.
- Utilizza un sistema _distribuito_.
- _Niente spam_, per impostazione predefinita vengono mostrati solo i messaggi da utenti conosciuti.
- È _sicura_, anche per l'uso in ambiti professionali.
- È _affidabile_ e può essere utilizzata anche per messaggi aziendali.
- È completamente _open source_ e basta sugli _standard_

## Cosa succede se il destinatario non usa Delta Chat?

- Il destinatario riceverà una normale email quindi, se quest'ultimo risponderà alla email, la risposta verrà mostrata in Delta Chat.

## Quali messaggi vengono mostrati in Delta Chat?

Delta Chat mostra automaticamente:

- Messaggi dai contatti presenti nella tua **rubrica**.
- Messaggi dagli utenti **contattati da te**.
- **Risposte** a messaggi inviati da te.

Gli altri messaggi non compaiono in maniera automatica, ma sarà possibile vederli utilizzando il menù **Richieste di contatto** ed eventualmente avviare una conversazione da lì.

## Come viene gestito lo spam?

- I messaggi nelle cartelle di spam vengono ignorati e gli indirizzi lì presenti non vengono considerati come conosciuti.
- Come per i messaggi da utenti completamente sconosciuti non compare alcuna notifica. Solitamente **non c'è spam**.
- Tuttavia, se realmente necessario, è possibile **bloccare** qualsiasi contatto.

## Delta Chat supporta immagini, video e altri allegati?

- Sì. Oltre al testo semplice, tutti gli allegati alle email vengono mostrati come messaggi separati. I file saranno automaticamente legati ai messaggi in uscita quando necessario.

## Delta Chat supporta le email in formato HTML?

- Sì. Se le email in entrata non hanno una parte di testo semplice, l'app converte automaticamente le email HTML in testo semplice. Le email in uscita usano sempre il testo semplice.

# Gruppi {#groups}

## Come posso creare un gruppo?

- Seleziona **Nuova conversazione** dal menù presente nella finestra di anteprima delle conversazioni e poi **Nuovo Gruppo**.
- Nella schermata successiva, selezionare i **membri del gruppo** e premere il segno di spunta. Fatto questo, è possibile scegliere il **nome del gruppo**.
- Non appena viene inviato il **primo messaggio**, tutti i membri vengono informati della creazione del nuovo gruppo e possono rispondere nel gruppo stesso (finché non viene inviato il primo messaggio, il gruppo non è visibile agli altri membri).

## Chi può aggiungere nuovi membri a un gruppo?

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.

## Ho accidentalmente rimosso me stesso dal gruppo.

- Non facendo più parte del gruppo, non ti sarà possibile aggiungere di nuovo te stesso. Tuttavia, nessun problema, basta chiedere a un altro componente del gruppo di aggiungerti alla conversazione.

## Non voglio più ricevere i messaggi da un gruppo.

- Puoi rimuovere te stesso dall'elenco dei membri del gruppo oppure eliminare l'intera conversazione. Se vorrai tornare a far parte del gruppo in futuro, dovrai chiedere ad un altro componente di aggiungerti di nuovo.
- In alternativa, puoi anche "silenziare" un gruppo. In questo modo continuerai a ricevere tutti i messaggi e sarà possibile continuare a scrivere, ma non riceverai le notifiche.

# Crittografia {#encryption}

## Delta Chat supporta la cifratura end-to-end?

- Sì.

## Cosa bisogna fare per attivare la cifratura end-to-end?

- Nulla.

- Delta Chat (e altri programmi email compatibili con [Autocrypt](https://autocrypt.org)) condividono le chiavi richieste per la cifratura end-to-end automaticamente appena vengono inviati i primi messaggi. Fatto questo, tutti i messaggi successivi utilizzeranno automaticamente la cifratura end-to-end. Se una persona con la quale si è già avviata una conversazione cifrata utilizzasse successivamente una app che non supporta la cifratura end-to-end, questa viene "sospesa" e automaticamente riattivata non appena la cifratura sarà nuovamente disponibile.

- Per _disattivare_ la cifratura end-to-end, usa la funzione corrispondente in "Impostazioni / Impostazioni avanzate".

## Se la cifratura end-to-end non è disponibile, anche la connessione non viene cifrata?

- No. In quel caso viene usato il normale standard email _transport encryption_.


## Come posso verificare la cifratura?

- Se è presente un piccolo **lucchetto** a fianco del messaggio, significa che il messaggio è criptato end-to-end _e_ è stato spedito dal mittente selezionato _e_ anche la tua risposta verrà crittografata. 
- Se non è presente **nessun lucchetto**, il messaggio viene di solito cifrato solo fino al server, ad esempio perché tu o il mittente avete disabilitato la crittografia end-to-end o il mittente usa un'applicazione che non la supporta. 


## Come posso verificare il mittente?

Seleziona "Crittografia" dal profilo utente:

- Per una cifratura end-to-end, Delta Chat mostra due impronte. Se sono le stesse sul dispositivo dell'altro utente con cui si sta conversando, la connessione è sicura.
- Per il _transport encryption_, questo stato viene mostrato direttamente nel profilo


## Quali standard vengono usati per la crittografia end-to-end?

- OpenPGP. Il trasporto delle chiavi avviene attraverso [Autocrypt](https://autocrypt.org).

## Posso utilizzare una chiave privata già esistente?

- Sì. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for sth. like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- In alternativa, puoi importare la chiave manualmente da "Impostazioni Avanzate / Gestisci chiavi private". Attenzione: assicurati che la chiave non sia protetta da password o rimuovila prima.

Se non possiedi una chiave o non avevi idea che potesse servirne una, nessun problema: se necessario, Delta Chat ne genererà una per te e non sarà necessaria alcuna operazione.

# Multi-client {#multiclient}

## Posso usare Delta Chat su più dispositivi allo stesso tempo?

- Se vuoi usare lo **stesso account** su dispositivi diversi, devi assicurarti che tutti i dispositivi usino la stessa chiave di cifratura:

 - Sul primo dispositivo, scegli "Impostazioni avanzate / Gestione chiavi private / Esporta chiavi private"
 - Via USB, copia il file della chiave dalla cartella "Download" del primo dispositivo al secondo.
 - Sul secondo dispositivo, seleziona "Impostazioni avanzate / Gestione chiavi private / Importa chiavi private"

- Tutto questo **non è necessario** per l'utilizzo normale di Delta Chat da un solo dispositivo.

- NB: in modalità multi-client, i messaggi _in entrata_ vengono mostrati immediatamente su tutti i client. I messaggi _in uscita_ vengono sincronizzati circa due volte ogni ora. Forse potremmo migliorare questa funzione, ma sarebbe necessario più [supporto](contribute) per risolvere questo inconveniente.


# Varie {#miscellaneous}

## Delta Chat funziona con la _mia_ casella email?

- Con buona probabilità: si :)  
  Ad ogni modo, alcuni provider richiedono di attivare impostazioni particolari per funzionare. Gli utenti hanno raccolto alcuni casi nel forum [Provider Overview](https://support.delta.chat/t/provider-overview/)


## Sono interessato ai dettagli tecnici. Posso avere ulteriori informazioni?

- Consulta la pagina [Standard utilizzati in Delta Chat]({% include standards-url %}).
