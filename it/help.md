---
title: FAQ
lang: it
render_toc: true
header: Frequently Asked Questions
---


## Cos'è Delta Chat? 

Delta Chat è una nuova app di chat che invia messaggi tramite e-mail, se possibile crittografati, con Autocrypt. 
**Non devi registrarti da nessuna parte, usa semplicemente il tuo account e-mail esistente con Delta Chat.**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Come posso trovare persone con cui messaggiare? 

Con Delta Chat puoi scrivere a qualsiasi indirizzo e-mail esistente, anche
se il destinatario non sta utilizzando l'app Delta Chat. Non c'è bisogno per il
destinatario di installare la tua stessa app, come con altri messenger.


### Quali sono i vantaggi di Delta Chat rispetto ad altri messenger?

- _Indipendente_ da qualsiasi azienda o servizio. _Tu_ possiedi i tuoi dati.
- I tuoi dati non vengono salvati su un server centrale a meno che tutti gli utenti non stiano utilizzando
gli stessi server di posta elettronica
- Non distribuisci la tua rubrica a nessuno.
- _Veloce_ tramite l'utilizzo di Push-IMAP.
- _Base di utenti più ampia_ - è possibile raggiungere anche i destinatari _non_ che utilizzano Delta Chat.
- _Compatibile_ - non solo con se stesso.
- Interfaccia utente _elegante_ e _semplice_.
- Sistema _Distribuito_.
- _No Spam_ - per impostazione predefinita vengono mostrati solo i messaggi di utenti conosciuti.
- _Attendibile_ - sicuro per uso professionale.
- _Affidabile_ - può essere utilizzato anche per i messaggi aziendali.
- Software libero basato su _Copyleft_ e _Standards_.


### Quali messaggi vengono mostrati in Delta Chat?

Delta Chat mostra automaticamente:

- Messaggi dai contatti nella tua **rubrica**
- Messaggi dai contatti **contattati da te**
- **Risposte** ai messaggi inviati da te

Gli altri messaggi non vengono visualizzati automaticamente e si trovano in **Richieste di contatto**. Se lo si desidera, è possibile avviare una chat da lì.


### E lo spam?

- I messaggi nelle comuni cartelle di spam vengono ignorati e gli indirizzi contenuti non vengono considerati come contatti conosciuti.
- Poiché i messaggi provenienti da contatti sconosciuti non vengono visualizzati automaticamente, normalmente **non c'è spam**.
- Tuttavia, se necessario, puoi **bloccare** qualsiasi contatto.


### Delta Chat supporta immagini, video e altri allegati?

- Sì. Oltre al testo normale, tutti gli allegati e-mail vengono visualizzati come messaggi separati. I messaggi in uscita ricevono automaticamente gli allegati necessari.


### Chi vede la mia immagine del profilo?

- Puoi aggiungere un'immagine del profilo nelle tue impostazioni. Se scrivi ai tuoi contatti
o li aggiungi tramite codice QR, la vedranno automaticamente come immagine del tuo profilo.

- I contatti che non utilizzano Delta Chat lo vedono come un allegato E-Mail.

- Per motivi di privacy, nessuno vede la tua immagine del profilo finché non scrivi un
messaggio a loro.

- L'immagine del tuo profilo non viene inviata con ogni messaggio, ma abbastanza regolarmente che
i tuoi contatti riceveranno nuovamente la tua immagine del profilo, anche se aggiungono un nuovo
dispositivo.


### Delta Chat supporta le e-mail HTML?

- Sì. Se un messaggio e-mail in arrivo manca di una parte di testo normale, i messaggi e-mail HTML vengono convertiti in testo normale nell'app. Le e-mail in uscita utilizzano sempre il testo normale.


### Perché devo inserire la mia password E-Mail in Delta Chat? È sicuro?

Come con altri programmi di posta elettronica quali Thunderbird, K9-Mail o Outlook,il
programma ha bisogno della password in modo da poterla utilizzare per inviare mail. Naturalmente, la
password è memorizzata solo sul tuo dispositivo. La password viene trasmessa solo a
il tuo fornitore E-Mail (quando effettui il login), che ha comunque accesso alla tua posta.

Se utilizzi un provider E-Mail con supporto OAuth2 come gmail.com o yandex.ru,
non è necessario memorizzare la password sul dispositivo. In questo caso, solo un
token di accesso viene utilizzato.

Poiché Delta Chat è Open Source, puoi controllare il [Codice
Sorgente](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
se vuoi verificare che le tue credenziali siano gestite in modo sicuro. Siamo felici dei feedback che rendono l'app più sicura per tutti i nostri utenti.


### Di quali autorizzazioni ha bisogno Delta Chat?

A seconda del sistema operativo in uso,
potrebbe esserti chiesto di concedere le autorizzazioni all'app.
Questo è ciò che fa Delta Chat con queste autorizzazioni:

- Fotocamera *(può essere disabilitata)*
- scattare foto e video: per l'invio di foto
- Contatti *(possono essere disabilitati)*
- leggi i tuoi contatti: per scoprire i contatti con cui chattare
- Posizione *(può essere non consentita)*
- accedere alla posizione approssimativa (fonti di posizione di rete): per la funzione di trasmissione della posizione
- accedere alla posizione precisa (GPS e fonti di localizzazione di rete): per la funzione di trasmissione della posizione
- Microfono *(può essere disattivato)*
- registra audio: per i messaggi audio
- Memoria *(può essere disabilitata)*
- modificare o eliminare il contenuto della scheda SD: per scaricare gli allegati dei messaggi
- leggere il contenuto della tua scheda SD: per condividere file con i tuoi contatti
- Altre funzionalità dell'app
- modificare le impostazioni audio: così puoi scegliere suonerie e volume per notifiche e messaggi audio
- esegui all'avvio: così non devi avviare Delta Chat manualmente
- controllo vibrazione: per le notifiche
- visualizzare le connessioni di rete: per connettersi al proprio fornitore E-Mail
- impedisce al telefono di andare in sospensione: così puoi copiare più facilmente il codice di sicurezza durante il messaggio di configurazione di Autocrypt
- avere pieno accesso alla rete: per connettersi al proprio fornitore E-Mail
- visualizzare le connessioni Wi-Fi: per connettersi al proprio fornitore E-Mail
- chiedi di ignorare le ottimizzazioni della batteria: per gli utenti che vogliono ricevere immediatamente i messaggi


## Gruppi

### Creazione di un gruppo

- Seleziona **Nuova chat** e poi **Nuovo gruppo** dal menu nell'angolo in alto a destra o premi il pulsante corrispondente su Android/iOS.
- Nella schermata successiva, seleziona i **membri del gruppo** e definisci un **nome del gruppo**. Puoi anche selezionare un **avatar di gruppo**.
- Non appena scrivi il **primo messaggio** nel gruppo, tutti i membri vengono informati del nuovo gruppo e possono rispondere nel gruppo (finché non scrivi un messaggio nel gruppo il gruppo è invisibile ai membri).


### Aggiungi membri a un gruppo

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.


### Che cos'è un gruppo verificato? Perché è sperimentale?

- Un gruppo verificato è una chat che garantisce sicurezza contro un aggressore.
Tutti i messaggi in una chat verificata sono crittografati e2e, e
i membri possono partecipare scansionando un "codice di invito QR". Tutti i membri sono così
collegati tra loro attraverso una catena di inviti, che garantiscono
coerenza crittografica contro gli aggressori alla rete o al fornitore.
Vedi [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
per la Ricerca e Sviluppo alla base di questa funzione.

- A partire da dicembre 2019, un "gruppo verificato" rimane una funzionalità sperimentale.
È continuamente migliorato e molti bug sono stati risolti
dall'introduzione originale nel 2018. Tuttavia, rimangono casi, in particolare
con grandi gruppi in cui possono verificarsi incongruenze o messaggi che diventano
illeggibili. All'inizio del 2020 è in arrivo una revisione della sicurezza, e diversi nuovi
sviluppi intorno ai protocolli qr-join stanno avendo luogo, quindi è probabile
che rimuoveremo l'etichetta "sperimentale" a breve. 


### Mi sono cancellato per sbaglio.

- Poiché non sei più un membro del gruppo, non puoi aggiungerti di nuovo.
Tuttavia, nessun problema, chiedi a qualsiasi altro membro del gruppo in una normale chat di aggiungerti nuovamente.


### Non desidero più ricevere i messaggi di un gruppo.

- Elimina te stesso dall'elenco dei membri o elimina l'intera chat.
Se vuoi unirti di nuovo al gruppo in un secondo momento, chiedi a un altro membro del gruppo di aggiungerti di nuovo.

- In alternativa, puoi anche "Silenziare" un gruppo - così facendo riceverai tutti i messaggi e
puoi ancora scrivere, ma non viene più notificato alcun nuovo messaggio.


### What do the ticks shown beside outgoing messages mean?

- **One tick** means that the message was sent successfully to your provider.
- **Two ticks** mean that at least one recipient's device
  reported back to having received the message.
- Recipients may have disabled read-receipts,
  so even if you see only one tick, the message may have been read.
- The other way round, two ticks do not automatically mean
  that a human has read or understood the message ;)


## Crittografia {#encryption}

### Delta Chat supporta la crittografia end-to-end?

- Sì. Delta Chat implementa lo standard Autocrypt Level 1 e può
quindi criptare i messaggi E2E con altre applicazioni compatibili Autocrypt.

- Delta Chat supporta anche una forte forma di crittografia end-to-end che è
anche sicura contro gli attacchi attivi, vedere "gruppi verificati" più avanti.


### Cosa devo fare per attivare la crittografia end-to-end?

- Nulla.

- Delta Chat (e altre [Autocrypt](https://autocrypt.org) applicazioni e-mail
compatibili) condividono automaticamente le chiavi necessarie per la crittografia end-to-end
man mano che vengono inviati i primi messaggi.
Dopo questo, tutti i messaggi successivi vengono crittografati automaticamente end-to-end.
Se uno degli interlocutori della chat utilizza un'app di posta elettronica non Autocrypt, successivamente
i messaggi non vengono crittografati finché un'app compatibile con Autocrypt non è nuovamente disponibile.

- Se si desidera evitare le e-mail crittografate end-to-end per impostazione predefinita,
utilizzare l'impostazione Autocrypt corrispondente in "Impostazioni" o "Impostazioni avanzate".


### Se la crittografia end-to-end non è disponibile, la connessione non è affatto crittografata?

- Con la maggior parte dei server di posta, Delta Chat stabilisce la _crittografia del trasporto_
([TLS](https://it.wikipedia.org/wiki/Transport_Layer_Security)).
Questo protegge solo la connessione tra il tuo dispositivo e il tuo server
e-mail. Considerando che la crittografia e2e fornisce sicurezza tra
il tuo dispositivo e il dispositivo di un amico.


### Come posso verificare lo stato crittografico con un mittente?

Se sei nelle immediate vicinanze dell'interlocutore della chat:

- Seleziona **Codice QR Invito** su un dispositivo e poi **Scansiona codice QR**
sull'altro e scansiona il codice. Se entrambi i dispositivi sono online,
introdurranno un canale di chat tra loro (se non esiste già)
e verranno verificate anche le chiavi di crittografia. Entrambi vedranno un
messaggio di sistema "mittente verificato" nella loro chat 1:1.

Se non sei vicino all' interlocutore della chat, puoi controllare lo stato manualmente nella finestra di dialogo "Crittografia"
(profilo utente su Android/iOS o fare clic con il pulsante destro del mouse sull'elemento dell'elenco chat di un utente sul desktop):

- Per la crittografia end-to-end, Delta Chat mostra due impronte digitali.
Se le stesse impronte digitali appaiono sul dispositivo del tuo interlocutore della chat,
la connessione è sicura.

- Per la crittografia del trasporto, questo stato viene mostrato qui


### Come posso controllare la crittografia dei messaggi?

- Un piccolo **lucchetto** mostrato accanto a un messaggio indica se il messaggio è crittografato end-to-end dal mittente specificato.

- Se non c'è **nessun lucchetto**, il messaggio viene solitamente trasportato in chiaro, ad es. perché tu o il mittente avete disattivato la crittografia end-to-end oppure il mittente usa un'app senza supporto per la crittografia end-to-end.

### Quali standard vengono utilizzati per la crittografia end-to-end?

- [Autocrypt](https://autocrypt.org) viene utilizzato per stabilire
crittografia e2e con altri Delta Chat e altre app di posta compatibili con Autocrypt.
Autocrypt utilizza un sottoinsieme limitato di funzionalità OpenPGP.

- Delta Chat implementa [protocolli countermitm configurazione contatto e gruppo verificato](https://countermitm.readthedocs.io/en/latest/new.html) per ottenere protezione dagli attacchi di rete attivi. Questo va oltre la protezione
opportunistica base di Autocrypt Livello 1, pur mantenendo la sua facilità d'uso.

### Qual è la differenza tra i gruppi verificati e le chat 1:1 con contatti verificati?

- Le chat 1:1 con un contatto verificato e i gruppi verificati non sono la stessa cosa, anche
se ci sono solo 2 persone nel gruppo verificato. Una differenza è che tu
potresti facilmente aggiungere più persone al gruppo, ma ci sono ben altre implicazioni.

- I gruppi verificati sono invariabilmente protetti. Qualsiasi rottura (testi in chiaro o errati
messaggi firmati, ecc.) verranno contrassegnati e tali messaggi non verranno visualizzati in
questa chat. Puoi fidarti di tutti i messaggi in questa chat con segno di spunta verificato che
non sono stati letti/modificati dalle parti intermedie.

- Le chat 1:1 sono opportunistiche, hanno lo scopo di consentire alle persone di comunicare non
importa se cambiano client di posta elettronica, dispositivi, configurazioni ecc. Ecco perché non c'è
un segno di spunta di verifica, anche se hai verificato il contatto.


### Delta Chat supporta Perfect Forward Secrecy?

- No, OpenPGP non supporta Perfect Forward Secrecy. Perfect Forward Secrecy
funziona orientato alla sessione, ma la posta elettronica è asincrona per natura
e spesso utilizzato da più dispositivi in modo indipendente. Ciò significa che se la tua
chiave privata di Delta Chat è trapelata e qualcuno ha un record
di tutti i tuoi messaggi in transito, saranno in grado di leggerli.

- Nota che se qualcuno ha sequestrato o hackerato il tuo telefono acceso, sarà
in grado di leggere tutti i messaggi, non importa se Perfect Forward Secrecy
è presente o no. Avere accesso a un singolo dispositivo da un membro di un gruppo,
in genere esporrà gran parte del grafico sociale. Utilizzo di indirizzi e-mail che
non sono facilmente riconducibili alle persone aiuta i membri del gruppo a stare più al sicuro da
gli effetti del sequestro del dispositivo.

- Stiamo abbozzando sistemi per proteggere meglio le comunicazioni contro l'evento
di sequestro del dispositivo.


### In che modo Delta Chat protegge i miei metadati?

- Poiché Delta Chat è un messenger decentralizzato, i metadati degli utenti di Delta Chat
non sono memorizzati su un unico server centrale. Tuttavia, sono memorizzati nel server
di posta del mittente e del destinatario di un messaggio.

- Ogni server di posta attualmente sa chi ha inviato e chi ha ricevuto un messaggio ispezionando
le intestazioni A/Cc non crittografate e quindi determinare quali indirizzi e-mail
fanno parte di un gruppo. Delta Chat può evitare del tutto le intestazioni A/Cc non crittografate
e metterle sempre solo nella sezione criptata. Vedere
[Evita di inviare intestazioni A/CC per gruppi verificati](https://github.com/deltachat/deltachat-core-rust/issues/1032).
Per le chat opportunistiche la preoccupazione principale è come influisce su altre app di posta che
potrebbero partecipare alle chat.

- Molte altre intestazioni e-mail, in particolare l'intestazione "Oggetto", sono
protette dalla crittografia end-to-end, vedi anche questo prossimo [IETF
RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Posso riutilizzare la mia chiave privata esistente?

- Sì. Il modo migliore è inviare un messaggio di installazione di Autocrypt dall'altro client e-mail. Cerca qualcosa come **Avvia il trasferimento dell'installazione di Autocrypt** nelle impostazioni dell'altro client e segui le istruzioni mostrate lì.

- In alternativa, puoi importare la chiave manualmente in "Impostazioni" o "Impostazioni avanzate" e poi "Importa chiavi segrete". Attenzione: assicurarsi che la chiave non sia protetta da password o rimuovere prima la password.

Se non hai una chiave o non sai nemmeno di averne bisogno, non preoccuparti: Delta Chat genera le chiavi secondo necessità, non devi premere un pulsante per ottenerle.


### Non riesco a importare la mia chiave PGP esistente in Delta Chat.

La causa più probabile è che la tua chiave sia crittografata e/o utilizzi
una password. Tali chiavi non sono supportate da Delta Chat. Potresti rimuovere la
crittografia della passphrase e la password e riprovare l'importazione. Se vuoi
per mantenere la tua passphrase dovrai creare un alias e-mail per l'uso
con Delta Chat in modo che la chiave di Delta Chat sia collegata a questo alias e-mail.

Delta Chat supporta i formati di chiave privata OpenPGP comuni, tuttavia,
è improbabile che le chiavi private di tutte le fonti siano completamente supportate. Questo
non è l'obiettivo principale di Delta Chat. In effetti, la maggior parte dei nuovi utenti
non avrà alcuna chiave prima di utilizzare Delta Chat.
Tuttavia, cerchiamo di supportare le chiavi private dal maggior numero possibile di fonti.

La rimozione della password dalla chiave privata dipenderà dal
software che usi per gestire le tue chiavi PGP. Con Enigmail puoi impostare la tua
password su un valore vuoto nella finestra Gestione chiavi. Con GnuPG puoi impostarla
[tramite la linea
di comando](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Per altri programmi, dovresti essere in grado di trovare una soluzione online.


### Perché non usi pEp (pretty easy privacy)?

- Delta Chat utilizza lo standard di crittografia e2e di Autocrypt. Per
una discussione su Autocrypt e pEp, vedi [Autocrypt
FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Posso utilizzare Delta Chat su più dispositivi contemporaneamente?

Se desideri utilizzare lo **stesso account** su dispositivi diversi, devi esportare
un backup dal vecchio dispositivo e importarlo nel nuovo dispositivo:

- Sul vecchio dispositivo, vai su "Impostazioni" o "Impostazioni / Chat e media" e poi su "Backup". Inserisci il tuo
PIN, sequenza o password di sblocco dello schermo. Quindi puoi fare clic su "Avvia"
Backup". Questo salva il file di backup sul tuo dispositivo. Ora devi trasferirlo
in qualche modo sull'altro dispositivo.
- Sul nuovo dispositivo, nella schermata di accesso, invece di accedere al tuo account
e-mail, scegli "Importa backup". Dopo l'importazione, le tue conversazioni, le chiavi
crittografiche e i media devono essere copiati sul nuovo dispositivo.
- Ora sei sincronizzato e puoi utilizzare entrambi i dispositivi per l'invio e la ricezione
dei Messaggi crittografati E2E con i tuoi interlocutori.

### Sono previsti piani per l'introduzione di un client Web Delta Chat?

- Non ci sono piani immediati ma alcune riflessioni preliminari.
- Ci sono 2-3 strade per introdurre un client Web Delta Chat, ma tutte sono
lavoro significativo. Per ora, ci concentriamo sull'ottenere versioni stabili in tutti
gli app store (repository Google Play/iOS/Windows/macOS/Linux) come app native.
- Se hai bisogno di un Client Web, perché non sei autorizzato a installare software sul
computer con cui lavori, puoi utilizzare il client Desktop Windows Portatile,
o l'AppImage per Linux. Le trovi su
[get.delta.chat](https://get.delta.chat).


### Perché posso scegliere di non guardare la Posta in arrivo?

Questa è un'impostazione sperimentale per alcune persone che stanno sperimentando
regole lato server. Non tutti i provider supportano questo, ma con alcuni puoi spostare
tutti i messaggi con un'intestazione "Chat-Version" nella cartella DeltaChat. Normalmente, questo
verrebbe eseguito dall'app Delta Chat.

È opportuno disattivare la visualizzazione della Posta in arrivo, se si dispone di entrambi:

- abilitato una regola lato server per spostare tutti i messaggi con l'intestazione Chat-Version nella cartella DeltaChat, e
- aver impostato l'impostazione "Mostra email classiche" su "no, solo chat".

In questo caso, Delta Chat non ha bisogno di guardare la Posta in arrivo.

### A cosa serve l'impostazione "Invia copia a se stessi"?

L'invio di una copia dei tuoi messaggi a te stesso ti assicura di ricevere i tuoi
messaggi su tutti i dispositivi. Se disponi di più dispositivi e non lo attivi,
vedrai solo i messaggi di altre persone e i messaggi che invii dal
dispositivo attuale.

La copia viene inviata alla Posta in arrivo, quindi spostata nella cartella DeltaChat; non è
messa nella cartella "Inviata". Delta Chat *non* carica mai nulla su Posta
Inviata perché questo significherebbe caricare un messaggio due volte (una volta tramite SMTP,
e una volta tramite IMAP nella cartella Posta Inviata).

L'impostazione predefinita per la copia su se stesso è "no".

### Perché posso scegliere di guardare la cartella "Inviata"?

L'unico motivo per cui si vuole guardare la cartella Inviata è se ne stai usando un'altro
programma di posta (come Thunderbird) accanto alla tua app Delta Chat e desideri il tuo MUA
per partecipare a conversazioni in chat.

Tuttavia, consigliamo di utilizzare il client desktop Delta Chat; puoi scaricarlo
su [get.delta.chat](https://get.delta.chat). L'opzione per guardare la cartella
"Inviata" potrebbe scomparire in futuro. È stato introdotto in un momento in cui non c'era
nessun client Delta Chat Desktop disponibile su tutte le piattaforme.

### Perché posso scegliere di non guardare la cartella DeltaChat?

Alcune persone usano Delta Chat come un normale client di posta elettronica e desiderano utilizzare la cartella Posta in arrivo
per la loro posta, invece della cartella DeltaChat. Se disabiliti "Controlla
cartella DeltaChat", dovresti anche disabilitare "sposta messaggi chat in DeltaChat".
In caso contrario, l'eliminazione dei messaggi o configurazioni multi-dispositivo potrebbero non funzionare correttamente.

## Varie

### Delta Chat funziona con il _mio_ fornitore e-mail?

- Con buona possibilità: Sì :)
Tuttavia, alcuni provider necessitano di opzioni speciali per funzionare correttamente,
vedi [Panoramica fornitore](https://providers.delta.chat)


### Se Delta Chat utilizza l' E-Mail, è davvero una Messaggistica _Istantanea_?

- L'invio e la ricezione dei messaggi richiedono generalmente alcuni secondi. Qualche volta
ci sono casi in cui ci vuole più tempo, ma questo è probabilmente vero anche per
qualsiasi altro messenger.
- La chat istantanea funziona velocemente se entrambe le parti utilizzano attivamente l'app. È
a volte più lento se l'app è in esecuzione in background.
- La ricezione dei messaggi può richiedere minuti perché spesso sia Android che iOS
interrompono l'esecuzione di Delta Chat in background e riattivandola solo
occasionalmente. Questo ritardo artificiale è solitamente peggiore su iOS che su Android.
- Tuttavia, Android e iOS uccidono le app in esecuzione in background ed è un
problema per molte app legittime. Per ulteriori informazioni, vedi
[dontkillmyapp.com](https://dontkillmyapp.com/).


### Delta Chat è compatibile con Protonmail / Tutanota / Criptext?

- Sì e no.
- No, non puoi usare il tuo account Protonmail, Tutanota o Criptext con Delta
Chat; non offrono la ricezione di posta tramite IMAP.
- In ogni caso puoi utilizzare Delta Chat per inviare Messaggi alle persone che utilizzano
Protonmail, Tutanota o Criptext. Questi messaggi però non saranno crittati
End-to-End. La crittografia End-to-End offerta da questi fornitori lavorano
solamente all'interno delle loro piattaforme e non sono compatibili con nessuno all'esterno.
- Delta Chat può crittografare e2e tramite qualsiasi provider di posta elettronica con qualsiasi
[App di posta elettronica abilitata Autocrypt](https://autocrypt.org/dev-status.html).


### Sono interessato ai dettagli tecnici. Mi puoi dire di più?

- Vedi [Standard usati in Delta Chat]({% include standards-url %}).

### Come viene finanziato lo sviluppo di Delta Chat?

Innanzitutto, Delta Chat non riceve alcun Capitale di Rischio e
non è indebitato e non è sottoposto a pressioni per produrre enormi profitti o per
vendere gli utenti e i loro amici e familiari agli inserzionisti (o peggio).

Finora lo sviluppo di Delta Chat sono stati finanziati da quattro fonti principali:

- Il progetto [NEXTLEAP](https://nextleap.eu) dell'UE ha finanziato la ricerca
e implementazione dei gruppi verificati e l'impostazione dei protocolli di contatto
nel 2017 e nel 2018.

- L'[Open Technology Fund](https://opentechfund.org) ha assegnato due sovvenzioni.
La prima sovvenzione 2018/2019 (~$200K) ha notevolmente migliorato l'app Android
e ci ha permesso di rilasciare una versione beta dell'app desktop e anche
ha assicurato i nostri sviluppi nella ricerca delle funzionalità UX in contesti di diritti umani,
vedi la nostra conclusione [report Needfinding e UX](https://delta.chat/en/2019-07-19-uxreport).
La seconda sovvenzione 2019/2020 (~$300K) è ancora in corso e ci aiuta a
rilasciare le versioni Delta/iOS, per convertire la nostra libreria principale in Rust e
per fornire nuove funzionalità per tutte le piattaforme. Vedi il
[post del blog](https://delta.chat/en/blog) in corso per maggiori informazioni.

- La [Fondazione NLnet](https://nlnet.nl/) ha concesso EUR 46K per
completare i collegamenti Rust/Python e avviare un ecosistema di Chat-bot.

- Ultimo ma non meno importante, hanno contribuito diversi esperti e appassionati pro-bono
e contribuito allo sviluppo di Delta Chat senza ricevere denaro, o solo
piccole quantità. Senza di loro, Delta Chat non sarebbe dove è oggi, nemmeno
vicino.

Il finanziamento monetario sopra menzionato è stato organizzato da merlinux GmbH in
Friburgo (Germania), e poi distribuito a quasi una dozzina di contributori.

Il finanziamento per il 2020/2021 è ancora da definire. Stiamo perseguendo diversi
opportunità con diverse organizzazioni e partner. Anche noi stiamo
considerando di chiedere donazioni. In effetti, abbiamo iniziato sperimentalmente
un po' [Delta Chat / Conto donazioni Liberapay](https://liberapay.com/delta.chat/)
ma non lo abbiamo ancora pubblicato. C'erano anche circa 3-4K finora
donati a Bjoern (l'autore originale di Delta Chat) paypal e bitcoin
canali di donazione.
