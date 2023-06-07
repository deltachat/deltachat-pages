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
- I tuoi dati non vengono salvati su un server centrale a meno che non siano utilizzati da tutti gli utenti
gli stessi server di posta elettronica
- Non distribuisci la tua rubrica a nessuno.
- _Veloce_ mediante l'uso di Push-IMAP.
- _Base di utenti ampia_ - è possibile raggiungere anche i destinatari che _non_ utilizzano Delta Chat.
- _No Spam_ - per impostazione predefinita vengono visualizzati solo i messaggi degli utenti conosciuti.
- _Crittografia end-to-end_ tramite Autocrypt.
- Software libero basato su _Copyleft_ e _Standards_.
- _Identità flessibile_ con supporto integrato per [più account](#multiple-accounts)


### Quali messaggi vengono mostrati in Delta Chat?

Per impostazione predefinita, Delta Chat mostra tutte le e-mails.

In "Impostazioni -> Chat e
Media -> Mostra E-mail Tradizionali", puoi modificare questa impostazione. Hai queste opzioni:

- "No, solo chat": solo i messaggi inviati da altri utenti di Delta Chat e le "risposte a"
vengono visualizzati i tuoi messaggi di Delta Chat. Questo ha più senso se usi lo stesso
account di posta elettronica anche per le normali e-mail.
- "Per i contatti accettati": Delta Chat mostra tutte le e-mail dei contatti con cui
hai già una chat, ma le nuove chat vengono visualizzate solo per i messaggi di Delta Chat.
Questo aiuta a decidere caso per caso se si desidera avere una
conversazione in Delta Chat o in una "normale" app di posta elettronica.
- "Sì": Delta Chat mostra tutte l'e-mail inviate al tuo indirizzo e-mail. Questo
ha senso se vuoi usare Delta Chat per tutte le tue e-mail, quindi nessun messaggio
si perde. Questa è l'impostazione predefinita.


### Cosa succede se aspetto un messaggio da qualcuno a cui non ho scritto in passato?

- Se un messaggio proviene da un contatto sconosciuto, appare come una **richiesta**. È necessario
accettare la richiesta prima di poter rispondere.
- Si può anche "cancellare" il messaggio se non si vuole più chattare con esso. Questo
non cancella il messaggio sul server, ma solo sul dispositivo. Quindi è possibile
continuare a gestire il messaggio in un'altra applicazione di posta.
- Se si elimina una richiesta, i futuri messaggi di quel contatto continueranno a essere visualizzati come richieste di contatto
in modo da poter cambiare idea. Se non si vuole davvero ricevere
messaggi da questa persona, prendete in considerazione la possibilità di *bloccarla*.


### Delta Chat supporta immagini, video e altri allegati?

- Sì. Oltre al testo normale, tutti gli allegati e-mail vengono visualizzati come messaggi separati. I messaggi in uscita ricevono automaticamente gli allegati necessari.

- Per le prestazioni, le immagini sono ottimizzate e inviate in dimensioni inferiori per impostazione predefinita, ma è possibile inviarle come "file" per preservare l'originale.

<h3 id="multiple-accounts">Come posso aggiungere o passare da un account all'altro?</h3>

Puoi facilmente lavorare con account aggiuntivi sui client mobili e desktop di Delta Chat facendo clic su:
- sul pulsante del menu e poi su "Cambia Account" (Android e desktop)
- o l'icona del profilo e poi 'Aggiungi account' (iOS)

Potresti anche voler imparare [come aggiungere account a più dispositivi](#multiclient).

### Chi vede la mia immagine del profilo?

- Puoi aggiungere un'immagine del profilo nelle tue impostazioni. Se scrivi ai tuoi contatti
o li aggiungi tramite codice QR, la vedranno automaticamente come immagine del tuo profilo.

- I contatti che non usano Delta Chat non vedono l'immagine del profilo (tuttavia, ovviamente, possono installare Delta Chat :)

- Per motivi di privacy, nessuno vede la tua immagine del profilo finché non scrivi un
messaggio a loro.

- L'immagine del tuo profilo non viene inviata con ogni messaggio, ma abbastanza regolarmente che
i tuoi contatti riceveranno nuovamente la tua immagine del profilo, anche se aggiungono un nuovo
dispositivo.


### Delta Chat supporta le e-mail HTML?

- Sì. Se necessario, i messaggi in arrivo hanno un pulsante "Mostra messaggio completo". Le e-mail in uscita utilizzano sempre testo normale.


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

### Cosa significa Fissare, Silenziare, Archiviare?

Usa questi strumenti per organizzare le tue chat e tenere tutto in ordine:

- **Chat fissate** restano sempre in cima all'elenco. Puoi usarlo per accedere velocemente alle tue chat preferite o temporaneamente per non dimenticare alcune cose.

- **Silenzia chat** se non vuoi ricevere notifiche da queste. Le chat silenziate restano al loro posto e puoi anche fissare una chat silenziata.

- **Archivia chats** se non vuoi più vederle nel tuo elenco chat.
Le chat archiviate rimangono accessibili sopra l'elenco delle chat o tramite la ricerca.

- Quando una chat archiviata riceve un nuovo messaggio, a meno che non sia silenziata, **salterà fuori dall'archivio** e tornerà nell'elenco delle chat.
**Le chat silenziate restano archiviate** fino a che non le estrai manualmente.

Per archiviare o fissare una chat, premi a lungo (Android), usa il menu della chat (Android/Desktop) o striscia verso sinistra (iOS);
per silenziare una chat, usa il menu della chat (Android/Desktop) o il profilo della chat (iOS).


### Cosa significa il punto verde?

- Da Delta Chat 1.34 è possibile vedere un "punto verde" accanto all'avatar
di un contatto. Ciò significa che è stato "visto di recente".
- In dettaglio: significa che negli ultimi 10 minuti Delta Chat lo ha visto:
- o perché vi hanno messaggiato direttamente,
- perché hanno scritto qualcosa a un gruppo di cui siete entrambi membri,
- perché vi hanno inviato una ricevuta di lettura per un messaggio che avete scritto,
- o perché hanno inviato dati alla vostra applicazione Delta Chat utilizzando un'applicazione
[app privata](#webxdc).
- Quindi non si tratta di uno stato online in tempo reale - e se qualcuno non risponde
subito anche se sembra essere online, non preoccupatevi e lasciategli un po'
di spazio ;-)
- D'altra parte, gli altri non sempre "vedono che siete online". Se avete
disattivato le ricevute di lettura, non vedranno il pallino verde finché
non gli invierete un messaggio o non scriverete a un gruppo in cui si trovano anche loro.


### Come posso eliminare il mio account?

Poiché utilizzi un account e-mail per Delta Chat,
il modo in cui puoi eliminare il tuo account dipende dal tuo provider e-mail.
Non abbiamo alcun controllo sul tuo account e-mail,
quindi purtroppo non possiamo aiutarti in questo.

If you want to keep the account,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.


## Gruppi

### Creazione di un gruppo

- Seleziona **Nuova chat** e poi **Nuovo gruppo** dal menu nell'angolo in alto a destra o premi il pulsante corrispondente su Android/iOS.
- Nella schermata successiva, seleziona i **membri del gruppo** e definisci un **nome del gruppo**. Puoi anche selezionare un **avatar di gruppo**.
- Non appena scrivi il **primo messaggio** nel gruppo, tutti i membri vengono informati del nuovo gruppo e possono rispondere nel gruppo (finché non scrivi un messaggio nel gruppo il gruppo è invisibile ai membri).


### Aggiungi membri a un gruppo

- Ogni componente del gruppo ha gli **stessi diritti** di ogni altro. Per questo motivo chiunque può rimuovere chiunque o aggiungere nuovi componenti.
- Per aggiungere o rimuovere i membri, fai clic sul nome del gruppo nella conversazione.


### Mi sono cancellato per sbaglio.

- Poiché non sei più un membro del gruppo, non puoi aggiungerti di nuovo.
Tuttavia, nessun problema, chiedi a qualsiasi altro membro del gruppo in una normale chat di aggiungerti nuovamente.


### Non desidero più ricevere i messaggi di un gruppo.

- Elimina te stesso dall'elenco dei membri o elimina l'intera chat.
Se vuoi unirti di nuovo al gruppo in un secondo momento, chiedi a un altro membro del gruppo di aggiungerti di nuovo.

- In alternativa, puoi anche "Silenziare" un gruppo - così facendo riceverai tutti i messaggi e
puoi ancora scrivere, ma non viene più notificato alcun nuovo messaggio.


### Cosa significano i segni di spunta visualizzati accanto ai messaggi in uscita?

- **Un segno di spunta** significa che il messaggio è stato inviato con successo al tuo fornitore.
- **Due segni di spunta** significano che almeno un dispositivo del destinatario
ha riferito di aver ricevuto il messaggio.
- I destinatari possono avere le conferme di lettura disabilitate,
quindi anche se vedi solo un segno di spunta, il messaggio potrebbe essere stato letto.
- Al contrario, due segni di spunta non significano automaticamente
che un essere umano abbia letto o compreso il messaggio ;)


### Cosa succede se attivo "Elimina Messaggi dal Server"?

- Per impostazione predefinita, Delta Chat memorizza tutti i messaggi in locale sul dispositivo. Se
ad esempio, si vuole risparmiare spazio di archiviazione presso il proprio provider di posta elettronica, è possibile scegliere di
eliminare automaticamente i vecchi messaggi. I messaggi rimangono comunque sul dispositivo finché non li si cancella anche lì.

- To turn it on, go to **Delete Old Messages → Delete Messages from Server**
  in the "Chats and Media" settings.
  You can set a timeframe between "At once" and "After 1 year".
  All e-mails received by Delta Chat will be deleted from the server after this timeframe.

- Si noti che se si utilizza Delta Chat su più di un dispositivo, è consigliabile lasciare i messaggi sul server,
finché anche l'altro dispositivo non potrà scaricarli. In questo caso,
si dovrebbe impostare la cancellazione automatica su "Dopo 1 giorno" o qualcosa di simile,
a seconda della frequenza con cui si accende l'altro dispositivo.


### Cosa succede se attivo "Elimina Messaggi dal Dispositivo"? {#delold}

- Se si desidera risparmiare spazio sul dispositivo, è possibile scegliere di eliminare i vecchi
messaggi automaticamente.
- Per attivarla, andare su "Elimina Messaggi dal Dispositivo" nelle impostazioni di "Chat e Media".
È possibile impostare un intervallo di tempo compreso tra "Dopo 1 ora" e "Dopo 1 anno";
in questo modo, *tutti* i messaggi saranno eliminati dal dispositivo non appena saranno
più vecchi di quel periodo.


## Crittografia

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


### Come posso garantire la crittografia e l'eliminazione dei messaggi?

Il modo migliore per garantire che ogni messaggio sia crittografato,
e i metadati cancellati il più rapidamente possibile
è creando un gruppo verificato e che sia attivo
messaggi a scomparsa.

I gruppi verificati sono sempre crittografati e protetti dagli [attacchi
MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

I metadati non possono essere crittografati, poiché il server deve sapere dove consegnare i tuoi
messaggi. Ma l'attivazione dei "messaggi a scomparsa" elimina i messaggi sul
server dopo che sono stati consegnati.

Se hai bisogno dei messaggi sul tuo dispositivo, ma non sul server, puoi farlo anche tu
accetta nel gruppo di attivare ["cancella i messaggi dal server
automaticamente"](#delold).

Se vuoi proteggere una conversazione 1:1 come questa, dovresti creare un
gruppo verificato con solo 2 persone. Se l'altra persona perde il proprio dispositivo ma
non il suo account, puoi comunque comunicare nella chat 1:1. ([Per saperne di più](#verdiff))


### Quali standard vengono utilizzati per la crittografia end-to-end?

- [Autocrypt](https://autocrypt.org) viene utilizzato per stabilire
crittografia e2e con altri Delta Chat e altre app di posta compatibili con Autocrypt.
Autocrypt utilizza un sottoinsieme limitato di funzionalità OpenPGP.

- Delta Chat implementa [protocolli countermitm configurazione contatto e gruppo verificato](https://countermitm.readthedocs.io/en/latest/new.html) per ottenere protezione dagli attacchi di rete attivi. Questo va oltre la protezione
opportunistica base di Autocrypt Livello 1, pur mantenendo la sua facilità d'uso.

### Qual è la differenza tra i gruppi verificati e le chat 1:1 con contatti verificati? {#verdiff}

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
protette dalla crittografia end-to-end, vedi anche questo  [IETF
RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Posso riutilizzare la mia chiave privata esistente?

- Sì. Il modo migliore è inviare un messaggio di installazione di Autocrypt dall'altro client e-mail. Cerca qualcosa come **Avvia il trasferimento dell'installazione di Autocrypt** nelle impostazioni dell'altro client e segui le istruzioni mostrate lì.

- In alternativa, è possibile importare la chiave manualmente in "Impostazioni -> Avanzate -> Gestisci Chiavi -> Importa Chiavi Segrete". Attenzione: Assicurarsi che la chiave non sia protetta da una password o rimuoverla prima.

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


## Multi-client {#multiclient}

### Posso utilizzare Delta Chat su più dispositivi contemporaneamente?

Sì. Delta Chat 1.36 è dotato di una nuova funzione sperimentale che consente di utilizzare lo stesso account su diversi dispositivi:

- Sul primo dispositivo, andare su **Impostazioni → Aggiungi Secondo Dispositivo**, sbloccare lo schermo se necessario
  e attendere un attimo fino a quando non viene visualizzato un codice QR

- Sul secondo dispositivo, [installare Delta Chat](https://get.delta.chat)

- Sul secondo dispositivo, avviare Delta Chat, selezionare **Aggiungi Come Secondo Dispositivo** e scansionare il codice QR del vecchio dispositivo.

- Il trasferimento dovrebbe iniziare dopo pochi secondi e durante il trasferimento entrambi i dispositivi mostreranno il **progresso**.
 Attendere il termine del trasferimento su entrambi i dispositivi.

A differenza di molti altri messengers, dopo un trasferimento riuscito,
entrambi i **dispositivi sono completamente indipendenti.**
Un dispositivo non è necessario perché l'altro funzioni.


### Risoluzione dei problemi

- Verificare che entrambi i dispositivi siano nella **stessa rete o Wi-Fi**.

- Il sistema potrebbe avere un "personal firewall",
  che è noto per causare problemi (soprattutto su Windows).
  **Disattivare il firewall personale** per Delta Chat su entrambe le estremità e riprovare.

- Assicurarsi che sul dispositivo di destinazione ci sia **disponibilità di memoria sufficiente**.

- Se il trasferimento è iniziato, assicurarsi che i dispositivi **rimangano attivi** e non si addormentino.
  Non uscire da Delta Chat.
  (cerchiamo di far funzionare l'applicazione in background, ma [i sistemi tendono a uccidere le applicazioni](https://dontkillmyapp.com), purtroppo).

- Delta Chat è **già connesso** sul dispositivo di destinazione?
  È possibile utilizzare più account per dispositivo, basta [aggiungere un altro account](#multiple-accounts)

- Se si riscontrano ancora problemi o se **non si riesce a scansionare un codice QR**
  provate il **trasferimento manuale** descritto di seguito


### Trasferimento manuale

Questo metodo è consigliato solo se "Aggiungi Secondo Dispositivo" come descritto sopra non funziona.

- Sul vecchio dispositivo, andare su "Impostazioni -> Chat e Media -> Backup Chats su Memoria Esterna". Immettere il PIN, il tracciato o la password di
sblocco dello schermo. Quindi è possibile fare clic su "Avvia
Backup". Il file di backup viene salvato sul dispositivo. Ora è necessario trasferirlo
in qualche modo sull'altro dispositivo.
- Sul nuovo dispositivo, nella schermata di accesso, invece di accedere all'account e-mail, scegliere "Importa Backup".
Dopo l'importazione, le conversazioni, le chiavi di crittografia e i file multimediali dovrebbero essere copiati
sul nuovo dispositivo.
- Se si utilizza iOS:** e si riscontrano difficoltà, si consiglia di consultare
[questa guida](https://support.delta.chat/t/import-backup-to-ios/1628) vi aiuterà.
- Ora siete sincronizzati e potete utilizzare entrambi i dispositivi per l'invio e la ricezione di messaggi.
crittografati E2E con i vostri partner di comunicazione. 

### Sono previsti piani per l'introduzione di un client Web Delta Chat?

- Non ci sono piani immediati ma alcune riflessioni preliminari.
- Ci sono 2-3 strade per introdurre un client Web Delta Chat, ma tutte sono
lavoro significativo. Per ora, ci concentriamo sull'ottenere versioni stabili in tutti
gli app store (repository Google Play/iOS/Windows/macOS/Linux) come app native.
- Se hai bisogno di un Client Web, perché non sei autorizzato a installare software sul
computer con cui lavori, puoi utilizzare il client Desktop Windows Portatile,
o l'AppImage per Linux. Le trovi su
[get.delta.chat](https://get.delta.chat).


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


## Apps private / webxdc {#webxdc}

In Delta Chat è possibile condividere "apps private", allegati con estensione `.xdc`.
Possono fare molte cose diverse e rendono Delta Chat un messenger veramente
davvero estendibile. Il termine tecnico è [webxdc](https://webxdc.org).


### Quanto sono private le apps private?

- Le apps private non possono inviare dati a Internet o scaricare alcunché.
- Un'applicazione privata può scambiare dati solo all'interno di una chat di Delta Chat, con le sue copie sui dispositivi dei vostri partner di chat.
A parte questo, è completamente
isolata da Internet.
- La privacy offerta da un'app privata è la privacy della vostra chat: finché vi fidate delle persone con cui chattate, potete
fidarvi anche dell'app privata.
- Questo significa anche che può essere un rischio per la privacy aprire app private in chat in cui non ci si fida dei partecipanti.
come nel caso degli allegati di posta elettronica, per i quali si aprono
solo gli allegati di mittenti di cui ci si fida e non quelli degli spammer.


### Dove posso trovare apps private?

- In generale, non esiste un appstore curato e Delta Chat non è responsabile delle applicazioni private o del loro contenuto.
Chiunque può condividere apps private con
gli altri senza restrizioni.
- Potete trovare alcuni esempi di app su [webxdc.org](https://webxdc.org).
- Molte persone scrivono le proprie applicazioni private e le pubblicano sul [forum di Delta Chat
](https://support.delta.chat/c/webxdc/20).


### Come posso creare le mie apps private?

- Le applicazioni private sono solo file zip contenenti codice html, css e javascript.
- È possibile estendere l'applicazione [Hello World app di esempio](https://github.com/webxdc/hello)
per iniziare.
- Tutto il resto è scritto nella [documentazione](https://docs.webxdc.org/).
- Se si hanno domande, si possono fare ad altri esperti nel [Forum Delta Chat
](https://support.delta.chat/c/webxdc/20).


## Caratteristiche Sperimentali

Siamo molto grati per il feedback su queste funzionalità: volete condividere
le vostre idee?Unitevi al [Forum](https://support.delta.chat) per contribuire. (Ti
piacciono gli esperimenti? Registrati tramite "Iscriviti -> con Delta Chat")!

### Come posso utilizzare le chiamate audio/video con Delta Chat?

- Per attivare le chiamate audio/video, andare nella sezione "Funzionalità Sperimentali" delle impostazioni avanzate e scegliere una "istanza di videochat".
nelle impostazioni avanzate e scegliere una "Istanza Videochat". 
- Quando si invitano altre persone a una videochat, questa viene aperta subito nel browser/app.
una volta. Gli altri ricevono un'e-mail con un link alla vostra stanza jitsi/BBB. In questo
modo è compatibile anche se gli interlocutori che non utilizzano Delta Chat.
- Si noti che dall'altra parte non c'è una suoneria e che i vostri interlocutori non verranno interrotti da una videochiamata.
- È possibile utilizzare qualsiasi servizio di video chat che consenta l'accesso tramite link. È sufficiente aggiungerlo
nelle impostazioni.
- Ad esempio, per utilizzare l'istanza principale di Jitsi Meet, si può inserire
`https://meet.jit.si/$ROOM`. La variabile `$ROOM` sarà un valore casuale;
in questo modo, si avrà una nuova stanza Jitsi casuale ogni volta che si chiama qualcuno.


### Che cos'è un gruppo verificato? Perché è sperimentale?

- Un gruppo verificato è una chat che garantisce sicurezza contro un aggressore.
Tutti i messaggi in una chat verificata sono crittografati e2e, e
i membri possono partecipare scansionando un "codice di invito QR". Tutti i membri sono così
collegati tra loro attraverso una catena di inviti, che garantiscono
coerenza crittografica contro gli aggressori alla rete o al fornitore.
Vedi [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
per la Ricerca e Sviluppo alla base di questa funzione.

- A partire dall'ottobre 2022, i "gruppi verificati" rimangono una funzione sperimentale. È
continuamente migliorata e molti bug sono stati risolti dall'introduzione originale nel 2018.
Tuttavia, ci sono ancora casi, specialmente con gruppi di grandi dimensioni, in cui
possono verificarsi incongruenze o i messaggi diventano illeggibili.


### Cosa sono le Liste di Trasmissione e come si possono usare?

- Con una Lista di Trasmissione è possibile inviare un messaggio a molti destinatari contemporaneamente; quando questi vi rispondono, ricevete la risposta nella vostra chat diretta 1:1 con loro.
I destinatari non possono vedersi a vicenda.
- Tecnicamente, si tratta di un messaggio di posta elettronica con molti destinatari in BCC.
- È possibile attivare questa funzione nella sezione "Funzionalità Sperimentali" delle impostazioni avanzate.
Quindi è possibile creare una Lista di Trasmissione dalla finestra di dialogo "Nuova chat".
- Nel caso in cui si utilizzi più di un dispositivo, le Liste di Trasmissione non sono attualmente sincronizzate tra loro.
- I messaggi inviati alle Liste di Trasmissione non sono crittografate. La crittografia romperebbe l'anonimato, perché
tutti i destinatari saprebbero chi altro ha ricevuto il messaggio.
(l'invio di singoli messaggi di posta elettronica a tutti sarebbe peggiore per il limite di velocità e il
consumo di rete).


### Come posso condividere la mia posizione con i miei partner di chat?

- Puoi attivare la trasmissione della posizione nella sezione "Funzionalità Sperimentali" nelle
impostazioni avanzate.
- Ora, se vuoi condividere la tua posizione in una chat, vai su "allega" e seleziona
"Posizione". Ora puoi impostare un intervallo di tempo in cui verrà trasmessa la tua posizione
ai tuoi partner di chat, tra 5 minuti e 6 ore.
- Quando la tua posizione cambia, gli altri nella chat possono visualizzarla su una mappa nella
chat.
- Per vedere la mappa e visualizzare le posizioni degli altri, devi attivare la funzione
nelle impostazioni avanzate.
- Questa funzione non condividerà la tua posizione con nessuno tranne che con i tuoi partner di chat.
*Ma:* per mostrare la mappa, dobbiamo scaricare i riquadri della mappa da
mapbox.com, quindi se *visualizzi* la mappa, a mapbox.com viene richiesta la mappa di un
area specifica. Se questo è un rischio per la privacy per te, questa funzione potrebbe non esserlo più.
Stiamo lavorando per trovare un'alternativa decentralizzata per Mapbox.
- Su desktop, il sistema operativo in genere non è in grado di determinare la tua posizione. Invece puoi
fare clic con il tasto destro sulla mappa e descrivere una posizione, che viene inviata alla chat come
un messaggio, ma appare anche sulla mappa.


### Cosa protegge effettivamente la crittografia sperimentale del database?

- In questo momento, la crittografia del database è ancora molto sperimentale.  Non affidarti su di essa
 per sicurezza, dovresti inoltre utilizzare la crittografia del tuo sistema
 operativo, se ne prevede una.
 - La crittografia del database non crittografa ancora i BLOB, solo le righe e le
colonne del database. Questo più o meno significa che i tuoi messaggi sono al sicuro,
ma non i tuoi allegati.
- Per iOS e Android, le chiavi di crittografia sono memorizzate nel portachiavi di sistema.
Ciò significa che la crittografia è sicura quanto il sistema operativo
in esecuzione.
- Il client desktop Delta Chat non offre ancora la crittografia del database, come qui
non c'è un modo standard per memorizzare le chiavi di crittografia sulle diverse piattaforme
supportate.


### Perché posso scegliere di guardare solo la cartella DeltaChat?

Questa è un'impostazione sperimentale per alcune persone che stanno sperimentando
regole lato server. Non tutti i provider supportano questo, ma con alcuni puoi spostare
tutti i messaggi con un'intestazione "Chat-Version" nella cartella DeltaChat. Normalmente, questo
verrebbe eseguito dall'app Delta Chat.

Abilitare "Recupera dalla Cartella DeltaChat" ha senso se hai **entrambi**:

- abilitato una regola lato server per spostare tutti i messaggi con l'intestazione Chat-Version nella cartella DeltaChat, e
- aver impostato l'impostazione "Mostra email classiche" su "no, solo chat".

In questo caso, Delta Chat non ha bisogno di guardare la Posta in arrivo ed è sufficiente guardare solo la cartella DeltaChat.


### Come posso cambiare il mio account con un indirizzo e-mail diverso?

1. Modifica il tuo indirizzo nella schermata delle impostazioni "Password e Account" in Delta
Chatt, inserisci la tua password (e se necessario, le impostazioni del server) per il nuovo
account
2. Se possibile, fai in modo che il tuo vecchio provider di posta elettronica inoltri tutte le e-mail al tuo nuovo
indirizzo e-mail
3. Comunica ai tuoi contatti che hai cambiato indirizzo. Se scrivi questo ad un
gruppo verificato, lo riconosceranno automaticamente.

Per conoscere i dettagli alla base di questo, [leggi il nostro post sul blog
it](https://delta.chat/en/2022-09-14-aeap).


## Varie

### Delta Chat funziona con il _mio_ fornitore e-mail?

- Con buona possibilità: Sì :)
Tuttavia, alcuni provider necessitano di opzioni speciali per funzionare correttamente,
vedi [Panoramica fornitore](https://providers.delta.chat)


### Voglio gestire il mio server di posta elettronica per Delta Chat. Che cosa mi consigliate?

- La maggior parte dei server di posta funzionerà bene. Ma quello che raccomandiamo personalmente è una
combinazione di mailcow e mailadm, come descritto [in questo
blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- È possibile trovare una [guida all'installazione sul nostro sito Web](serverguide).


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

- Sì e No.
- No, non puoi usare il tuo account Protonmail, Tutanota o Criptext con Delta
    Chat; non offrono la ricezione di messaggi via IMAP.
- In ogni caso puoi usare Delta Chat per inviare messaggi a persone che usano
    Protonmail, Tutanota o Criptext. Questi messaggi non saranno crittografati
    End-to-End, però. La crittografia End-to-End che questi provider offrono non è
    compatibile con [Autocrypt](https://autocrypt.org/), lo standard che Delta Chat
    utilizza.
- Delta Chat può criptare e2e attraverso qualsiasi provider di posta elettronica con qualsiasi
    [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Sono interessato ai dettagli tecnici. Mi puoi dire di più?

- Vedi [Standard usati in Delta Chat]({% include standards-url %}).

### Delta Chat è stata verificata in modo indipendente per le vulnerabilità di sicurezza?

The Delta Chat project underwent four independent security audits in the last years:

- Nel 2019, [Include Security](https://includesecurity.com) ha analizzato le librerie
[PGP](https://github.com/rpgp/rpgp) e
[RSA](https://github.com/RustCrypto/RSA) di Delta Chat.
Non ha riscontrato criticità,
ma due problemi di elevata gravità che abbiamo successivamente risolto.
Ne sono emersi anche uno di media gravità e alcuni problemi meno gravi,
ma non c'era modo di sfruttare queste vulnerabilità nell'implementazione di Delta Chat.
Alcuni di essi sono stati comunque corretti dopo la conclusione dell'audit.
Puoi leggere il [rapporto completo qui](../assets/blog/2019-first-security-review.pdf).

- Nel 2020, [Include Security](https://includesecurity.com) ha analizzato il Delta
Chat's Rust [core](https://github.com/deltachat/deltachat-core-rust/),
[IMAP](https://github.com/async-email/async-imap),
[SMTP](https://github.com/async-email/async-smtp) e
[TLS](https://github.com/async-email/async-native-tls) librerie.
Non ha rilevato problemi critici o di elevata gravità.
Il rapporto ha sollevato alcuni punti deboli di media gravità:
da soli non rappresentano una minaccia per gli utenti di Delta Chat
perché dipendono dall'ambiente in cui viene utilizzato Delta Chat.
Per motivi di usabilità e compatibilità,
non possiamo mitigarli tutti
e ha deciso di fornire consigli sulla sicurezza agli utenti minacciati.
Puoi leggere il [rapporto completo qui](../assets/blog/2020-second-security-review.pdf).

- A partire dal 2023, [Cure53](https://cure53.de) ha analizzato sia la crittografia del trasporto delle
Connessioni di rete di Delta Chat e una configurazione del server di posta riproducibile come
[consigliato su questo sito](serverguide).
Puoi leggere ulteriori informazioni sull'audit [sul nostro blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
o leggere il [rapporto completo qui](../assets/blog/MER-01-report.pdf).

- Beginning 2023, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023. 
  See [here for the full background story on E2E security in the web](https://delta.chat/en/2023-05-22-webxdc-security). 


### Come viene finanziato lo sviluppo di Delta Chat?

Delta Chat non riceve alcun capitale di rischio e
non è indebitato e non è sotto pressione per produrre enormi profitti, o per farlo
vendere utenti e i loro amici e familiari agli inserzionisti (o peggio).
Utilizziamo piuttosto fonti di finanziamento pubblico, così lontane dalle origini dell'UE e degli Stati Uniti, per aiutare
i nostri sforzi nell'istigare un ecosistema di messaggistica di chat decentralizzato e diversificato
basato sugli sviluppi della comunità Free e Open-Source.

Concretamente, gli sviluppi di Delta Chat finora sono stati finanziati da queste fonti:

- Il progetto dell'UE [NEXTLEAP](https://nextleap.eu) ha finanziato la ricerca
e implementazione di gruppi verificati e configurazione di protocolli di contatto
nel 2017 e nel 2018 e ha anche contribuito a integrare la crittografia end-to-end
tramite [Autocrypt](https://autocrypt.org).

- L'[Open Technology Fund](https://opentechfund.org) ci ha dato una
prima sovvenzione 2018/2019 (~$200K) durante la quale abbiamo notevolmente migliorato l'app Android
e ha rilasciato una prima versione beta dell'app desktop, e che inoltre
ancorato i nostri sviluppi delle funzionalità nella ricerca sulla UX nei contesti dei diritti umani,
vedete il nostro [Rapporto Needfinding e UX] conclusivo (https://delta.chat/en/2019-07-19-uxreport).
La seconda sovvenzione 2019/2020 (~$300K) ci ha aiutato a farlo
rilasciare nelle versioni Delta/iOS, per convertire la nostra libreria principale in Rust, e
per fornire nuove funzionalità per tutte le piattaforme.

- La [fondazione NLnet](https://nlnet.nl/) ha concesso nel 2019/2020 46K EUR per
completare i collegamenti Rust/Python e avviare un ecosistema Chat-bot.

- Nel 2021 abbiamo ricevuto ulteriori finanziamenti dell'UE per due Next-Generation-Internet
proposte, in particolare per [EPPD - directory di portabilità del provider di posta elettronica](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) e [AEAP - portabilità dell'indirizzo e-mail](https://nlnet.nl/project/EmailPorting/) (~90K EUR) che ha portato a un migliore supporto multi-account, contatti QR-code migliorati e configurazioni di gruppo e molti miglioramenti della rete su tutte le piattaforme.

- Dalla fine del 2021 fino a Marzo 2023 abbiamo ricevuto finanziamenti *Internet Freedom* (500.000 USD) dall'Ufficio per la democrazia, i diritti umani e il lavoro degli Stati Uniti (DRL). Questo finanziamento ha supportato i nostri obiettivi a lungo termine per rendere Delta Chat più utilizzabile e compatibile con un'ampia gamma di server di posta elettronica in tutto il mondo e più resiliente e sicuro in luoghi spesso colpiti dalla censura e dalla chiusura di Internet.

- A partire dal 2023 siamo stati accettati nel programma Next Generation Internet (NGI) Affidamento per le nostre proposte di "App private decentralizzate". L'importo esatto è da definire (circa 100.000 euro). Questo finanziamento supporta ulteriori sviluppi di [webxdc "app condivise in una chat"](https://webxdc.org). 

- A volte riceviamo donazioni una tantum da privati.
Ad esempio, nel 2021 un generoso individuo ci ha trasferito in banca 4K EUR
con l'oggetto "mantenete il buoni sviluppi!". 💜
Usiamo questi soldi per finanziare incontri di sviluppo o per sostenere spese ad hoc
che non possono essere facilmente previsti o rimborsati da finanziamenti pubblici.
Ricevere più donazioni ci aiuta anche a diventare più indipendenti e vitali a lungo termine
come comunità di contributori.

[Dona denaro](donate){: .cta-button}

- Ultimo ma non meno importante, hanno contribuito diversi esperti e appassionati pro-bono
e contribuito allo sviluppo di Delta Chat senza ricevere denaro, o solo
piccole quantità. Senza di loro, Delta Chat non sarebbe dove è oggi, nemmeno
vicino.

Il finanziamento monetario di cui sopra è per lo più organizzato da merlinux GmbH in
Friburgo (Germania) ed è distribuito a più di una dozzina di contributori in tutto il mondo.

Consulta [Canali contribuzione di Delta Chat](contribute)
sia per le possibilità monetarie che contributive.
