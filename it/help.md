---
title: Aiuto
layout: default-it
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Domande frequenti (FAQ)

- [Generali](#general)
- [Gruppi](#groups)
- [Cifratura](#encryption)
- [Multi-client](#multiclient)
- [Varie](#miscellaneous)

# Generali {#general}

## A chi posso scrivere?

- Con Delta Chat, è possibile scrivere sia a utenti che utilizzano Delta Chat si a coloro che utilizzano un qualunque altro client email esistente. Questa è una delle più grandi differenze dalle altre app di messaggistica: non c'è alcun bisogno che il destinatario installi la stessa app che utilizza il mittente.

## Quali sono i vantaggi di Delta Chat in confronto alle altre app di messaggistica?

- È _indipendente_ da qualunque azienda o servizio. _Tu_ mantieni il possesso dei tuoi dati.
- I propri dati non vengono salvati su un server centrale; in questo modo, al contrario alla maggior parte delle app di messaggistica, Delta Chat protegge anche i metadati (chi scrive a chi?).
- Non vengono distribuiti i propri contatti a nessuno.
- È _veloce_ grazie all'uso del Push-IMAP.
- Offre una _maggiore base di utenti_. Coloro che _non_ utilizzano Delta Chat possono comunque essere contattati.
- È _compatibile_, non solo con se stessa.
- È _elegante_ e con una _semplice_ interfaccia utente.
- Utilizza un sistema _distribuito_.
- _Niente spam_, per impostazione predefinita, solo i messaggi da utenti conosciuti verranno mostrati.
- È _sicura_, anche per l'uso in ambiti professionali.
- È _affidabile_ e può essere utilizzata anche per messaggi aziendali.
- È completamente _open source_ e basta sugli _standard_

## What if the receiver does not use Delta Chat?

- Il destinatario riceverà una normale email quindi, se quest'ultimo risponderà alla email, la risposta verrà mostrata in Delta Chat.

## Quali messaggi vengono mostrati in Delta Chat?

Delta Chat automaticamente mostra...

- Messaggi dai contatti presenti nella propria **rubrica**.
- Messaggi dagli utenti **contattati da te**.
- **Risposte** a messaggi inviati da te.

Gli altri messaggi non compariranno in maniera automatica, sarà possibile vederli utilizzando il menù **Richieste di contatto** e, se lo si desidera, avviare da lì una conversazione.

## Come viene gestito lo spam?

- Come per i messaggi da utenti completamente sconosciuti non comparirà alcuna notifica, solitamente, **non c'è spam**.
- Tuttavia, se realmente necessario, è possibile **bloccare** tutti i contatti.

## Delta Chat supporta immagini, video e altri allegati?

- Sì. Oltre al testo semplice, tutti gli allegati alle email vengono mostrati come singoli messaggi. I messaggi in uscita riceveranno automaticamente gli allegati.

## Delta Chat supporta le email in formato HTML?

- Sì. Se alle email in entrata manca una parte di testo semplice, l'app converte automaticamente le email HTML in testo semplice. Le email in uscita usano sempre il testo semplice.

# Gruppi {#groups}

## Come posso creare un gruppo?

- Selezionare **Aggiungi gruppo** dal menù presente nella finestra di anteprima delle conversazioni.
- Nella schermata successiva, selezionare i **membri del gruppo** e premere il segno di spunta. Fatto questo, è possibile scegliere il **nome del gruppo**.
- Non appena viene inviato il **primo messaggio**, tutti i membri vengono informati della creazione del nuovo gruppo e possono rispondere nel gruppo stesso (finché non verrà inviato un messaggio nel gruppo creato, lo stesso non sarà visibile agli altri membri).

## Chi può aggiungere nuovi membri a un gruppo?

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fare clic sul nome del gruppo nella conversazione.

## Ho accidentalmente rimosso me stesso dal gruppo.

- Non facendo più parte del gruppo, non sarà possibile aggiungere nuovamente se stessi. Tuttavia, nessun problema, basta semplicemente chiedere a un altro componente del gruppo di aggiungere l'utente rimosso.

## Non voglio più ricevere i messaggi da un gruppo.

- Eliminare se stessi dall'elenco dei membri del gruppo, oppure eliminare l'intera conversazione. Se si vuole tornare a far parte del gruppo in futuro, chiedere a un altro dei componenti di aggiungere nuovamente l'utente.
- In alternativa, è possibile anche "silenziare" un gruppo. In questo modo si continueranno a ricevere tutti i messaggi e sarà possibile continuare a scrivere, ma non si riceveranno più le notifiche.

# Crittografia {#encryption}

## Delta Chat supporta la cifratura end-to-end?

- Sì.

## Cosa bisogna fare per attivare la cifratura end-to-end?

- Nulla.

- Delta Chat (e altri programmi email compatibili con [Autocrypt](https://autocrypt.org)) condividono le chiavi richieste per la cifratura end-to-end automaticamente appena vengono inviati i primi messaggi. Fatto questo, tutti i messaggi successivi utilizzeranno automaticamente la cifratura end-to-end. Se una persona con la quale si è già avviata una conversazione cifrata, utilizzasse successivamente una app che non supporta la cifratura end-to-end, questa viene "sospesa" e automaticamente riattivata non appena la cifratura sarà nuovamente disponibile.

- Per _disattivare_ la cifratura end-to-end, usare la funzione corrispondente in "Impostazioni / Impostazioni avanzate".

## Se la cifratura end-to-end non è disponibile, anche la connessione non viene cifrata?

- No. In quel caso viene usato il normale standard email _transport encryption_.


## Come posso verificare la cifratura?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is send from the given sender _and_ your answer will be end-to-end-encrypted as well.
- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Come posso verificare la cifratura?

Selezionare "Crittografia" dal profilo utente:

- Per una cifratura end-to-end, Delta Chat mostra due impronte. Se sono le stesse sul dispositivo dell'altro utente con cui si sta conversando, la connessione è sicura.
- Per il _transport encryption_, questo stato viene mostrato direttamente nel profilo


## Which standards are used for end-to-end-encryption?

- OpenPGP. Il trasporto delle chiavi avviene attraverso [Autocrypt](https://autocrypt.org).

## Posso utilizzare una chiave privata già esistente?

- Sì. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for sth. like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually at "Advanced settings / Manage private keys". Caution: Make sure, the key is not protected by a password or remove it before.

Se non si possiede una chiave o non si aveva idea che potesse servirne una, nessun problema: Delta Chat ne genererà una se necessario, non sarà necessaria alcuna operazione.

# Multi-client {#multiclient}

## Posso usare Delta Chat su più dispositivi allo stesso tempo?

- Se si vuole usare lo **stesso account** su dispositivi diversi, bisognerà assicurarsi che tutti i dispositivi usino la stessa chiave di cifratura:

 - Sul primo dispositivo, scegliere "Impostazioni avanzate / Gestione chiavi private / Esporta la chiave in Download"
 - Via USB, copiare il file della chiave dalla directory "Download" dal primo dispositivo al secondo.
 - Sul secondo dispositivo, "Impostazioni avanzate / Gestione chiavi private / Importa la chiave da Download"

- Tutto questo **non è necessario** per l'utilizzo standard di Delta Chat usando un solo dispositivo.

- NB: in modalità multi-client, i messaggi _in entrata_ vengono mostrati immediatamente su tutti i client. I messaggi _in uscita_ vengono sincronizzati circa due volte ogni ora. Forse sarà possibile migliorare questa caratteristica, ma sarà necessario più [supporto](contribute) per risolvere questo inconveniente.


# Varie {#miscellaneous}

## Delta Chat on Linux Desktop

- You can run Delta Chat on Ubuntu Linux desktop (or other linux distributions supporting the **snap**-package format) by simply installing [Anbox](https://anbox.io) (Android in a Box) from terminal:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- To add the Delta Chat application, download the *com.b44t.messenger_\<version\>.apk* file from [this](download) page and install it from terminal:

  $ *adb install path/to/com.b44t.messenger_\<version\>.apk*

  adb is the Android Debug Bridge and can be installed from repository.

- Instead of installing Delta Chat directly via APK file, you can first install the F-Droid store via [F-Droid-APK](https://f-droid.org/FDroid.apk) and then install Delta Chat using the store. The great benefit is the information about updates and the migration of existing config and chat data.


## Problemi di accesso

Ho un problema con ...

- Gmail: abilitare "Supporta le applicazioni meno sicure" e IMAP, si potrebbe ricevere una email con la richiesta di concedere l'accesso

## Sono interessato ai dettagli tecnici. Posso avere ulteriori informazioni?

- Consultare la pagina [Standard utilizzati in Delta Chat]({% include standards-url %}).
