---
title: FAQ
lang: it
render_toc: true
header: Frequently Asked Questions
---



<!-- GENERATED FILE -- DO NOT EDIT -->




## Cos'è Delta Chat? 

Delta Chat è una nuova applicazione che permette di inviare messaggi via email, cifrati, quando possibile con AutoCrypt . 
**Non è necessario registrarsi ad un servizio, usa direttamente il tuo account email tramite Delta Chat.** 


### Come posso trovare persone con cui messaggiare? 

Con Delta Chat puoi scrivere a qualsiasi indirizzo email - anche
se il destinatario non usa Delta Chat. Al contrario di altre app,
non è necessario che il destinatario utilizzi la tua stessa app.


### Quali sono i vantaggi di Delta Chat rispetto alle altre app di messaggistica?

- _Indipendente_ da ogni azienda o servizio. _Tu_ possiedi i tuoi dati.
- I dati non sono salvati in un server centrale, a meno che tutti gli utenti non usino lo stesso server
- Non condivide la tua rubrica con nessuno.
- _Veloce_ grazia all'uso del Push-IMAP
- _Base utenti ampia_ - puoi comunicare anche con chi _non_ usa Delta Chat
- _Compatibile_ - non solo con sé stessa
- Interfaccia _Elegante_ e _semplice_
- Sistema _Distribuito_
- _Niente Spam_ - di default vengono mostrati solo i messaggi degli utenti conosciuti
- _Solida_ - sicura per l'uso professionale
- _Affidabile_ - può essere usata anche per messaggi aziendali
- Completamente _Open Source_ e basata sugli _standard_


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


### Chi può vedere la mia immagine del profilo?

- Puoi aggiungere una immagine profilo nelle impostazioni. Se scrivi ai contatti
o li aggiungi tramite codice QR, vedranno automaticamente la tua foto profilo.

- I contatti che non usano Delta Chat la vedranno come allegato email. 

- Per motivi di privacy, nessuno vede la tua immagine profilo finchè non
gli scrivi un messaggio.

- La tua immagine profilo non viene inviata in ogni messaggio, ma abbastanza
spesso affinché i tuoi contatti la ricevano anche se cambiano dispositivo.


### Delta Chat supporta le email in HTML?

- Si. Se le email in arrivo non dispongono di un formato testo, l'email in HTML viene convertita in testo dall'applicazione. Le email in uscita sono sempre in formato testo.


### Perchè devo inserire la password della ma email in Delta Chat? E' sicuro?

Come tutti gli altri programmi email, quali Thunderbird, K9-Mail o Outlook,
l'applicazione necessita della password per inviare le email. Ovviamente la
password viene memorizzata solo sul dispositivo e viene trasmessa solo
al tuo fornitore del servizio email (quando accedi) che ha già accesso alla posta.

Se utilizzi un fornitore del servizio email che supporta la OAuth2, come gmail.com
o yandex.ru, non c'è bisogno di memorizzare la password nel dispositivo. In tal caso
viene usato solo un token.

Dato che Delta Chat è Open Source, puoi controllare il [Codice
Sorgente](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
per essere certo che le credenziali siano gestite in modo sicuro. Siamo felici
di ricevere feedback che aiutino a rendere l'app più sicura per tutti gli utenti. 


### Quali autorizzazioni di Android richiede Delta Chat?

- Camera *(può essere negata)*
  - scatta foto e video: per poter inviarli
- Contatti *(può essere negata)*
  - legge i contatti: per mostrarti con chi chattare
- Posizione *(può essere negata)*
  - posizione approssimativa (basata sulla rete): per la funzione di streaming della posizione
  - posizione esatta (GPS e rete): per la funzione di streaming della posizione
- Microfono *(può essere negata)*
  - registra audio: per l'invio di messaggi vocali
- Archiviazione *(può essere negata)*
  - modifica o eliminazione contanuti della scheda SD: per scaricare gli allegati
  - lettura dei contenuti della scheda SD: per condividere file con i contatti
- Altre funzionalità utilizzate
  - modifica impostazioni audio: per scegliere suonerie e volume ed ascoltare i messaggi vocali
  - esecuzione all'avvio: per non dover avviare Delta Chat manualmente
  - controllo della vibrazione: per le notifiche
  - visualizzazione connessioni di rete: per connettersi al fornitore del servizio email
  - disabilitazione spegnimento schermo: per agevolare la copia del codice di configurazione Autocrypt
  - accesso completo alla rete: per connettersi al fornitore del servizio email
  - visualizzazione reti Wi-Fi: per connettersi al fornitore del servizio email
  - richiesta di ignorare l'ottimizzazione della batteria: per gli utenti che vogliono ricevere immediatamente i messaggi


## Groups

### Creare un gruppo

- Seleziona **Aggiungi Gruppo** dal "Sandwich menu" nell'angolo in alto a destra della lista delle chat.
- Nella schermata successiva, scegli i **membri del gruppo** e seleziona la spunta in alto a destra. Poi potrai definire il **nome del gruppo**.
- Appena invii il **primo messaggio** nel gruppo, tutto i membri verranno informati della creazione del gruppo e potranno rispondere (finchè non invii il primo messaggio il gruppo resta invisibile ai membri).


### Aggiungere membri ad un gruppo

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.


### Cos'è un gruppo verificato? Perché è sperimentale?

- Un gruppo verificato è una chat che garantisce protezione dagli attacchi
attivi. Tutti i messaggi in una chat verificata sono cifrati e2e e i membri
possono essere aggiunti tramite il "Codice QR di invito". Tutti i membri sono
quindi connessi attraverso una catena di inviti, che garantisce una consistenza
crittografica dagli attacchi di rete o al provider.
Vedi [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
per la ricerca alla base di questa funzionalità.

- A Dicembre 2019, i gruppi verificati sono ancora sperimentali. 
Vengono migliorati costantemente e sono stati risolti molti bug dalla
loro introduzione nel 2018. Rimangono però alcuni casi, specialmente
in gruppi molto grandi, in cui può verificarsi una inconsistenza o i messaggi
diventare illeggibili. All'inizio del 2020 è prevista una revisione della
sicurezza e verranno implementati nuovi sistemi relativi ai protocolli QR
così che la funzione possa uscire al più presto dallo stato sperimentale.


### Ho rimosso me stesso per errore.

- Se non sei più un membro del gruppo, non puoi scegliere tu quando rientrarci. 
 Ad ogni modo, puoi sempre chiedere via chat a uno dei membri di aggiungerti nuovamente.


### Non voglio più ricevere messaggi dal gruppo.

- Rimuovi te stesso dalla lista dei membri o elimina l'intera chat. 
  Se vorrai rientrare nel gruppo in futuro, chiedi ad un membro di aggiungerti nuovamente.

- In alternativa puoi anche "silenziare" un gruppo - così facendo riceverai i messaggi 
  e potrai rispondere, ma non ti appariranno più le notifiche.


## Cifratura {#encryption}

### Delta Chat supporta la cifratura end-to-end?

- Si. DeltaChat implementa lo standard Autocrypt Level 1 e può anche 
  cifrare e2e i messaggi da e verso altre app compatibili con Autocrypt.


### Cosa devo fare per attivare la cifratura end-to-end?

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

- Con la maggior parte dei server email Delta Chat stabilsce una _transport encryption_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  Questo rende sicura solo la comunicazione tra il dispositivo e il server
  email. La cifratura e2e rende invece sicura la comunicazione 
  tra il tuo dispositivo e quello del destinatario. 


### Come posso verificare lo stato di cifratura con il mittente? 

Il profilo utente mostra alcune info aggiuntive:

- Tocca "Codice QR di invito" su Android e poi usa il tasto "Scansiona codice QR"
  sull'altro dispositivo per scansionarlo. Se entrambi i dispositivi hanno accesso
  alla rete, creeranno un canale di comunicazione tra di loro (se non esiste già) 
  e verificheranno le chiavi di cifratura. Entrambi vedranno un
  messaggio di sistema "mittente verificato" nella chat 1:1. 

- Per la cifratura end-to-end, Delta Chat mostra due impronte qui. 
  Se le stesse impronte appaiono sul dispositivo dell'intelocutore, 
  la connessione è sicura.

- Lo stato della cifratura nel trasporto viene mostrato qui.


### Come posso verificare la cifratura dei messaggi?

- Se viene mostrato un piccolo **lucchetto** vicino al messaggio, significa che questo è cifrato end-to-end _e_ è inviato dal mittente dato _e_ anche la tua risposta sarà cifrata end-to-end.

- Se non c'è **nessun lucchetto**, il messaggio è solitamente trasmesso in chiaro. Ad esempio perché tu o il destinatario avete disabilitato la cifratura end-to-end o il mittente usa un'applicazione che non la supporta.


### Quali standard vengono usati per la crittografia end-to-end?

- [Autocrypt](https://autocrypt.org) viene usato per stabilire una
  cifratura e2e tra Delta Chat e le altre app di email compatibili con Autocrypt. 
  Autocrypt usa un sottoinsieme di funzionalità di OpenGPG. In più
  Delta Chat implementa protocolli "countermitm" per fornire una
  protezione dagli attacchi di rete, andando oltre alla sola protezione di
  base di Autocrypt, vedi le domande sui "Gruppi verificati".


### Qual è la differenza tra i gruppi verificati e le chat 1:1 con i contatti verificati?

- Le chat 1:1 con un contatto verificato non è uguale ad un gruppo verificato,
  anche se ci fossero solo due persone nel gruppo verificato. Una differenza sta
  nel fatto di poter facilmente aggiungere altre persone, ma non è la sola
  e ci sono altri aspetti.

- I gruppi verificati sono sempre sicuri. Qualsiasi problema (testo in chiaro, errori
  nella firma dei messaggi, ecc) vengono riconosciuti e i messaggi non sono
  mostrati nella chat. Tutti i messaggi della chat con il segno di spunta verificato
  non sono stati letti/modificati da un altro soggetto.

- Le chat 1:1 sono studiate per permettere alle persone di comunicare tra loro
  anche se cambiano client email, dispositivo, configurazione etc. Questo è
  il motivo per cui non c'è la spunta di contatto verificato, anche se lo è.


### Delta Chat supporta Perfect Forward Secrecy?

- No, OpenPGP non supporta Perfect Forward Secrecy. Perfect Forward Secrecy
  si basa sulle singole sessioni, ma le email sono asincrone per loro natura
  e spesso vengono usate da più dispositivi indipendenti. Ciò significa che
  se la chiave privata di Delta Chat viene rubata e qualcuno ha un registro
  di tutti i tuoi messaggi in transito, sarà capace di leggerli.

- Tieni presente che se qualcuno ha sequestrato o hackerato il tuo telefono 
  sarà probabilmente già in grado di leggere i messaggi, indipendentemente
  dal fatto che Perfect Forward Secrecy sia presente o meno. Avere accesso al
  dispositivo di un membro del gruppo dice già molto del suo grafico sociale. 
  Usare un indirizzo che non sia riconducibile ad un soggetto aiuta i membri
  del gruppo a proteggersi dagli effetti di un possibile sequestro del dispositivo. 

- Stiamo abbozzando alcuni sistemi per proteggere le comunicazioni in caso
  di sequestro del dispositivo. 


### Come fa Delta Chat a proteggere i miei metadata?

- Dato che Delta Chat è decentralizzato, i metadata degli utenti di Delta Chat
  non vengono memorizzati in un server centrale, ma sui server email del 
  mittente e del destinatario del messaggio.

- Attualmente, ogni server email conosce il mittente e il destinatario ispezionando
  le intestazioni A/Cc non cifrate nella email e determina quale indirizzo email fa parte
  del gruppo. Delta Chat può evitare l'invio non cifrato delle intestazioni A/Cc e li 
  inserisce sempre nella parte cifrata del messaggio . Vedi 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  La principale preoccupazione è come questo possa incidere sulle altre app di email 
  che potrebbero partecipare alla chat. 

- Moltri altri header email, in particolare il campo "Oggetto" vengono
  protetti con cifratura end-to-end, vedi anche il prossimo [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Posso riutilizzare le mie chiavi private?

- Si. Il miglior modo per farlo è inviare un messaggio di configurazione Autocrypt dall'altro client e-mail. Cerca comandi come "Avvia trasferimento impostazioni Autocrypt" nelle impostazioni dell'altro client e segui le istruzioni.

- In alternativa, puoi importare la chiave manualmente da "Impostazioni Avanzate / Gestisci chiavi private". Attenzione: assicurati che la chiave non sia protetta da password o rimuovila prima.

Se non hai una chiave o non sai perché ne dovresti aver bisogno, non preoccuparti: Delta Chat ne genera una quando necessario, non devi premere nessun tasto.


### Non riesco ad importare la mia chiave PGP in Delta Chat.

Con molta probabilità, il problema sta nel fatto che la tua chiave è cifata e/o usa
una password. Queste chiavi non sono supportate da Delta Chat. Rimuovi la
cifratura e la password e prova ad importarla nuovamente. Se vuoi mantenere
password di cifratura, dovrai creare un alias email per usarlo con Delta Chat
poichè le chiavi di Delta Chat sono legate all'alias email.

Delta Chat supporta i formati di chiave privata OpenPGP comuni, ma difficilmente
potrà supportare il 100% delle chiavi private da ogni sorgente. Questo non è
nemmeno il focus principale di Delta Chat (la maggioranza degli utenti
Delta Chat non ha una chiave quando iniziano ad usare Delta).
Ad ogni modo proveremo a supportare al meglio le chiavi private dalle altri sorgenti.

La rimozione della password dalle chiavi private può cambiare a seconda del
software usato per gestire le chiavi PGP. Con Enigmail puoi impostarla ad un
valore vuoto nella finestra di gestione delle chiavi. Anche con GnuPG puoi farlo
[tramite linea di comando](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Per gli altri programmi puoi trovare altre soluzioni online.


### Perchè non usate pEp (pretty easy privacy)?

- Delta Chat usa lo standard Autocrypt per la cifratura e2e. Per
  approfondire una discussione su Autocrypt and pEp, vedi [Autocrypt
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


## Varie

### Delta Chat funziona con il _mio_ provider email?

- Con buona probabilità: si :)  
  Ad ogni modo, alcuni provider richiedono di attivare impostazioni particolari per funzionare,
  vedi [Provider Overview](https://providers.delta.chat)


### Sono interessato ai dettagli tecnici. Posso avere ulteriori informazioni?

- Consulta la pagina [Standard utilizzati in Delta Chat]({% include standards-url %}).

