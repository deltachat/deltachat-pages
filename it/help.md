---
title: Help
layout: default-it
---

# Domande frequenti (FAQ)

- [Generali](#general)
- [Gruppi](#groups)
- [Cifratura](#encryption)
- [Multi-client](#multiclient)
- [Varie](#miscellaneous)


# Generali {#general}

## A chi posso scrivere?

- Con Delta Chat, è possibile scrivere a utenti che utilizzano Delta Chat o a qualunque altro client email esistente.
  Questa è una delle più grandi differenze dalle altre app di messaggistica:
  non c'è alcun bisogno che il destinatario installi la stessa app che utilizza il mittente.



## Quali sono i vantaggi di Delta Chat in confronto alle altre app di messaggistica?

- _Indipendente_ da qualunque azienda o servizio. _Tu_ mantieni il possesso dei tuoi dati.
- I propri dati non vengono salvati su un server centrale; in questo modo, al contrario alla maggior parte delle app di messaggistica, Delta Chat protegge anche i metadati (chi scrive a chi?)
- Non vengono distribuiti i propri contatti a nessuno.
- _Veloce_ grazie all'uso del Push-IMAP
- _Maggiore bacino di utenti_ - gli utenti che _non_ utilizzano Delta Chat possono comunque essere contattati.
- _Compatibile_ - non solo con se stessa
- _Elegante_ e _semplice_ interfaccia utente
- Sistema _distribuito_
- _Niente Spam_ - solo i messaggi da utenti conosciuti verranno mostrati per impostazione predefinita
- _Sicura_ - anche per l'uso in ambito professionale
- _Affidabile_ - può essere utilizzata anche per messaggi aziendali
- Completamente _Open Source_ e basta sugli _Standard_


## Cosa accade se il destinatario non utilizza Delta Chat?

- Il destinatario riceverà una normale email quindi - se quest'ultimo risponderà alla email, la risposta verrà mostrata in Delta Chat.


## Quali messaggi vengono mostrati in Delta Chat?

Delta Chat automaticamente mostra ...

- Messaggi dai contatti presenti nella propria **rubrica**
- Messaggi dagli utenti **contattati da te**
- Messaggi da **contatti dei propri contatti**
- **Risposte** a messaggi inviati da te

Gli altri messaggi non compariranno in maniera automatica. Sarà possibile vedere gli altri messaggi dal menù **Richieste di contatto** e, se lo si desidera, avviare da lì una conversazione.

## Informazioni sullo Spam?

- Come per i messaggi da utenti completamente sconosciuti non comparirà alcuna notifica, solitamente, **non c'è spam**.
- Tuttavia, se realmente necessario, è possibile **bloccare** tutti i contatti.



## Delta Chat supporta immagini, video e altri allegati?

- Sì. Insieme al testo semplice, tutti gli allegati alle email vengono mostrati come messaggi separati. I messaggi in uscita riceveranno automaticamente gli allegati.


## Delta Chat supporta le email in formato HTML?

- Sì. Se alle email in entrata manca una parte di testo semplice, l'app converte automaticamente le email HTML in
  testo semplice. Le email in uscita usano sempre il testo semplice.




# Gruppi {#groups}

## Come posso creare un gruppo?

- Selezionare **Aggiungi gruppo** dal "menù Sandwich" nell'angolo in alto a sinistra dell'anteprima delle conversazioni.
- Nella schermata successiva, selezionare i **membri del gruppo** e premere il segno di spunta nell'angolo in basso a destra. Fatto questo, è possibile scegliere il **nome del gruppo**.
- Non appena viene inviato il **primo messaggio** nel gruppo, tutti i membri vengono informati della creazione del nuovo gruppo e possono rispondere nel gruppo stesso (finché non verrà inviato un messaggio nel gruppo creato, lo stesso non sarà visibile agli altri membri).

## Chi può aggiungere membri a un gruppo?

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere membri, fare clic sul nome del gruppo nella conversazione.

## Ho accidentalmente rimosso me stesso dal gruppo.

- Non facendo più parte del gruppo, non sarà possibile aggiungere nuovamente se stessi. Tuttavia, nessun problema, basta semplicemente chiedere a un altro componente del gruppo di aggiungere nuovamente l'utente rimosso.

## Non voglio più ricevere i messaggi da un gruppo.

- Eliminare se stessi dall'elenco dei membri del gruppo, oppure eliminare l'intera conversazione. Se si vuole tornare a far parte del gruppo in futuro, chiedere a un altro dei membri di aggiungere nuovamente l'utente.
- In alternativa, è possibile anche "silenziare" un gruppo - in questo modo, si continueranno a ricevere tutti i messaggi e sarà possibile continuare a scrivere, ma non si riceveranno più le notifiche.




# Cifratura {#encryption}

## Delta Chat supporta la cifratura end-to-end?

- Sì.

## Cosa bisogna fare per attivare la cifratura end-to-end?

- Nulla.

- Delta Chat (e altri programmi email compatibili con Autocrypt) condividono le chiavi richieste per la cifratura end-to-end automaticamente appena vengono inviati i primi messaggi. Fatto questo, tutti i messaggi successivi utilizzeranno automaticamente la cifratura end-to-end. Se una persona con la quale si è già avviata una conversazione cifrata, utilizzasse successivamente una app che non supporta la cifratura end-to-end, la conversazione viene "sospesa" e automaticamente riattivata non appena la cifratura è nuovamente disponibile.

- Per _disattivare_ la cifratura end-to-end, usare la funzione corrispondente in "Impostazioni / Impostazioni avanzate".

## Se la cifratura end-to-end non è disponibile, anche la connessione non viene cifrata?

- No. In quel caso viene usato il normale standard email _transport encryption_.

## Come posso verificare la cifratura?

Selezionare "Crittografia" dal profilo utente:

- Per una cifratura end-to-end, Delta Chat mostra due impronte. Se sono le stesse sul dispositivo dell'altro utente con cui si sta conversando, la connessione è sicura.

- Per il _transport encryption_, questo stato viene mostrato direttamente nel profilo

## Quali standard sono usati per la cifratura end-to-end.

- OpenPGP. Il trasporto delle chiavi avviene attraverso Autocrypt.

## Posso utilizzare una chiave privata già esistente?

- Sì. Importare la chiave da "Impostazioni avanzate / Gestione chiavi private". Attenzione: assicurarsi che la chiave non sia protetta da una password, nel caso ne sia presente una, rimuoverla prima dell'importazione.

Se non si possiede una chiave o non si aveva idea che potesse servirne una, nessun problema: Delta Chat ne genererà una se necessario, non sarà necessaria alcuna operazione.


# Multi-client {#multiclient}

## Posso usare Delta Chat su più dispositivi allo stesso tempo?

- Se si vuole usare lo **stesso account** su dispositivi diversi, bisognerà assicurarsi che tutti i dispositivi usino la stessa chiave di cifratura:

    - Sul primo dispositivo, scegliere "Impostazioni avanzate / Gestione chiavi private / Esporta la chiave in Download"
    - Via USB, copiare il file chiave dalla directory "Download" del primo dispositivo al secondo.
    - Sul secondo dispositivo, "Impostazioni avanzate / Gestione chiavi private / Importa la chiave da Download"

- Tutto questo **non è necessario** per l'utilizzo standard di Delta Chat usando un solo dispositivo.

- NB: in modalità multi-client, i messaggi _in entrata_ vengono mostrati immediatamente su tutti i client. I messaggi _in uscita_ vengono sincronizzati circa due volte ogni ora. Forse sarà possibile migliorare questa caratteristica, ma sarà necessario più [supporto](support) per risolvere questo inconveniente.


# Varie {#miscellaneous}

## Problemi di accesso

Ho un problema con ...

- Gmail: abilitare "Supporta le applicazioni meno sicure" e IMAP, si potrebbe ricevere una email con la richiesta di concedere l'accesso


## Sono interessato ai dettagli tecnici. Posso avere ulteriori informazioni?

- Consultare la pagina [Standard utilizzati in Delta Chat](../en/	standards).
