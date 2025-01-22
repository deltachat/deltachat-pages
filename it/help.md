---
title: FAQ
lang: it
render_toc: true
header: Frequently Asked Questions
---


## Cos'è Delta Chat? 

Delta Chat è un'app di messaggistica affidabile, decentralizzata e sicura, 
disponibile per piattaforme mobili e desktop.

Delta Chat sembra Whatsapp o Telegram ma puoi anche usarlo e considerarlo come un'app e-mail. 
Puoi iscriverti in modo anonimo a una varietà di [server chatmail interoperabili](https://delta.chat/chatmail)
che sono server e-mail minimi ottimizzati per operazioni veloci e sicure. 
Oppure puoi utilizzare i classici server e-mail e un profilo e-mail esistente
nel qual caso Delta Chat funge da app e-mail.

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Come posso trovare persone con cui messaggiare? 

Per impostare in modo sicuro il contatto con gli altri [scansiona un codice QR di invito 
o condividi un link di invito](#howtoe2ee). 
Ciò è necessario quando si utilizza un profilo chat basato su chatmail (predefinito). 
perché i server chatmail rifiutano i messaggi in uscita non crittografati.

Se crei un profilo di chat con un indirizzo e-mail classico 
puoi creare manualmente un contatto se conosci il loro indirizzo e-mail
e poi scrivi loro un messaggio 
anche se il destinatario non utilizza Delta Chat.


### Quali sono i vantaggi di Delta Chat rispetto ad altri messenger?

- Profili chat anonimi con [server chatmail](https://delta.chat/chatmail) veloci, sicuri e interoperabili
  che offrono Notifiche Push istantanee per dispositivi iOS e Android.

- Pervasivo [multi-profilo](#multiple-accounts) e supporto multi-dispositivo su tutte le piattaforme.

- Interattive [web app nelle chat](https://webxdc.org/apps) per giochi e collaborazione

- [Crittografia end-to-end controllata](#security-audits) 
sicuro contro gli attacchi alla rete e al server.

- Software Libero e Open Source, sia lato app che lato server. 
Basato su [Standard E-mail e Web Internet](https://github.com/deltachat/deltachat-core-rust/blob/master/standards.md), 
[per evitare "l'ennesima sindrome standard (xkcd 927)"](https://xkcd.com/927/)


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


### Cosa sono i profili? Come posso passare dall'uno all'altro? {#multiple-accounts}

Un profilo è **un nome, un'immagine** e alcune informazioni aggiuntive per crittografare i messaggi.
Un profilo risiede solo sui tuoi dispositivo(i)
e utilizza una chatmail o un classico server e-mail per trasportare i messaggi.

Alla prima installazione di Delta Chat viene creato un primo profilo.

Successivamente, puoi toccare l'immagine del tuo profilo nell'angolo in alto a sinistra per **Aggiungere Profili**
o **Cambiare Profili**.

Potresti voler utilizzare profili separati per attività politiche, familiari o lavorative,
o es. per un "profilo spam" dedicato con il quale ti registri su siti web e piattaforme
che prima o poi tendono a causare messaggi non richiesti ("spam").

Potresti anche voler imparare [come utilizzare lo stesso profilo su più dispositivi](#multiclient).


### Chi vede la mia immagine del profilo?

- Puoi aggiungere un'immagine del profilo nelle tue impostazioni. Se scrivi ai tuoi contatti
o li aggiungi tramite codice QR, la vedranno automaticamente come immagine del tuo profilo.

- I contatti che non usano Delta Chat non vedono l'immagine del profilo (tuttavia, ovviamente, possono installare Delta Chat :)

- Per motivi di privacy, nessuno vede la tua immagine del profilo finché non scrivi un
messaggio a loro.

- L'immagine del tuo profilo non viene inviata con ogni messaggio, ma abbastanza regolarmente che
i tuoi contatti riceveranno nuovamente la tua immagine del profilo, anche se aggiungono un nuovo
dispositivo.


### Posso impostare una Bio/Firma/Stato/Motto con Delta Chat? {#signature}

Sì,
puoi farlo in **Impostazioni → Profilo → Biografia**.
I tuoi contatti che usano Delta Chat lo vedranno
quando visualizzeranno i tuoi dati di contatto.
Inoltre, apparirà come una classica firma e-mail.


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

- A partire da Delta Chat 1.34 a volte puoi vedere un "punto verde" accanto all'avatar
  di un contatto. Significa che è stato "visto di recente".
- Nel dettaglio: significa che negli ultimi 10 minuti Delta Chat lo ha visto:
- o perché ti ha inviato un messaggio direttamente,
- perché ha scritto qualcosa a un gruppo di cui siete entrambi membri,
- perché ti ha inviato una conferma di lettura per un messaggio che hai scritto,
- o perché ha inviato dati alla tua app Delta Chat utilizzando l'
[applicazione webxdc](#webxdc).
- Quindi questo non è uno stato online in tempo reale - e se qualcuno non risponde
subito anche se sembra online, non preoccuparti e dagli un po'
di spazio ;-)
- D'altra parte, non sempre gli altri "vedranno che sei online". Se tu
hai disattivato le conferme di lettura, non vedranno il punto verde finché non lo farai tu
invia loro un messaggio o scrivi anche a un gruppo a cui appartengono.


### Come funzionano i messaggi a scomparsa? {#ephemeralmsgs}

Puoi attivare i "messaggi che scompaiono"
nelle impostazioni di una chat,
in alto a destra nella finestra della chat,
selezionando un intervallo di tempo
tra 1 minuto e 5 settimane.

Fino a quando l'impostazione non viene nuovamente disattivata,
l'app Delta Chat di ogni membro della chat si prende cura
di eliminare i messaggi
dopo l'intervallo di tempo selezionato.
Inizia il lasso di tempo
quando il destinatario vede per la prima volta il messaggio in Delta Chat.
I messaggi vengono eliminati
entrambi in ciascun profilo e-mail sul server,
e nell'app stessa.

Tieni presente che puoi fare affidamento sui messaggi che scompaiono
solo finché ti fidi dei tuoi partner di chat;
i partner di chat dannosi possono scattare foto,
o altrimenti salvare, copiare o inoltrare messaggi prima della cancellazione.

A parte quello,
se un partner di chat disinstalla Delta Chat,
i messaggi non verranno eliminati dal loro profilo e-mail.
Molto probabilmente non saranno più decifrabili
(a patto che siano stati crittografati in primo luogo).


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

- Per attivarlo, vai su **Elimina i vecchi messaggi → Elimina messaggi dal server**
nelle impostazioni "Chat e Media".
Puoi impostare un intervallo di tempo compreso tra "Subito" e "Dopo 1 anno".
Tutte le e-mail ricevute da Delta Chat verranno eliminate dal server dopo questo periodo di tempo.

- Tieni presente che se utilizzi Delta Chat su più di un dispositivo, è necessario lasciare il messaggio sul server con un tempo sufficiente
in modo che anche gli altri dispositivi(o) possano scaricarli.


### Cosa succede se attivo "Elimina Messaggi dal Dispositivo"? {#delold}

- Se si desidera risparmiare spazio sul dispositivo, è possibile scegliere di eliminare i vecchi
messaggi automaticamente.
- Per attivarla, andare su "Elimina Messaggi dal Dispositivo" nelle impostazioni di "Chat e Media".
È possibile impostare un intervallo di tempo compreso tra "Dopo 1 ora" e "Dopo 1 anno";
in questo modo, *tutti* i messaggi saranno eliminati dal dispositivo non appena saranno
più vecchi di quel periodo.


## Consegna messaggi istantanei e Notifiche Push {#instant-delivery}


### Cosa sono le Notifiche Push? Come posso ottenere la consegna dei messaggi istantanei?

Le Notifiche Push vengono inviate dai "Servizi push" di Apple e Google al dispositivo di un utente
in modo che un'app Delta Chat inattiva possa recuperare i messaggi in background
e mostrare le notifiche sul telefono di un utente, se necessario.

Le Notifiche Push funzionano con tutti i server [chatmail](https://delta.chat/chatmail) attivi

- Dispositivi iOS, attraverso l'integrazione con i servizi Push di Apple.

- Dispositivi Android, attraverso l'integrazione con il servizio Google FCM Push,
anche sui dispositivi che utilizzano [microG](https://microg.org)
invece del codice proprietario di Google sul telefono.

A partire da Maggio 2024, i server e-mail classici non supportano le Notifiche Push
per gli utenti di Delta Chat.


### Le Notifiche Push sono abilitate sui dispositivi iOS? Esiste un'alternativa?

Sì, Delta Chat utilizza automaticamente le notifiche push per i profili [chatmail](https://delta.chat/chatmail).
E no, non esiste alcuna alternativa sui telefoni Apple per ottenere la consegna dei messaggi istantanei
perché i dispositivi Apple non consentono a Delta Chat di recuperare i dati in background.
Le notifiche push vengono attivate automaticamente per gli utenti iOS perché
[Sistema di notifiche push che tutela la privacy di Delta Chat](#privacy-notifications)
non espone ad Apple i dati che non possiede già.


### Le Notifiche Push sono abilitate / necessarie sui dispositivi Android? {#android-push}

Se è disponibile un "Servizio Push", Delta Chat abilita le Notifiche Push
per ottenere la consegna di messaggi istantanei a tutti gli utenti chatmail.
Se utilizzi un provider e-mail classico anziché i server [chatmail](https://delta.chat/chatmail),
Le notifiche push non sono disponibili.

Nelle impostazioni "Notifiche" di Delta Chat per "Consegna istantanea"
puoi modificare le seguenti impostazioni che interessano tutti i profili chat:

- Utilizza Connessione in Background: se non stai utilizzando un servizio Push,
puoi disattivare le "ottimizzazioni della batteria" per Delta Chat,
permettendogli di recuperare i messaggi in background.
Tuttavia potrebbero verificarsi ritardi da minuti ad ore.
Alcuni fornitori Android limitano addirittura completamente le app
(vedi [dontkillmyapp.com](https://dontkillmyapp.com))
e Delta Chat potrebbe non mostrare i messaggi in arrivo
finché non riapri manualmente l'app.
  
- Forza Connessione Background: questa è l'opzione di ripiego
se le opzioni precedenti non sono disponibili o non raggiungono la "consegna immediata".
Abilitandolo si genera una notifica permanente sul tuo telefono
che a volte può essere "minimizzato" con i recenti telefoni Android.

Entrambe le opzioni "Connessione in Background" sono efficienti dal punto di vista energetico ed
è sicuro provarlo se riscontri che i messaggi arrivano solo con lunghi ritardi.


### Quanto sono private le Notifiche Push di Delta Chat? {#privacy-notifications}

Il supporto delle Notifiche Push di Delta Chat evita la fuga di informazioni private.
Non perde e-mail, indirizzo IP o contenuto dei messaggi (nemmeno crittografati)
a qualsiasi sistema coinvolto nella consegna di Notifiche Push.

Ecco come le app Delta Chat eseguono l'invio delle Notifiche Push:

- A Delta Chat app obtains a "device token" locally, encrypts it and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives an e-mail for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or e-mail address of Delta Chat users.

- Il Servizio Push centrale (Apple, Google, ecc.)
attiva l'app Delta Chat sul tuo dispositivo
per verificare la presenza di nuovi messaggi in background.
Non conosce chatmail o l'indirizzo e-mail del dispositivo che si attiva.
I servizi centrali Apple/Google Push non vedono mai un indirizzo e-mail (mittente o destinatario)
e inoltre non vedono mai il contenuto del messaggio (anche non in forma crittografata).


Il proxy di notifica centrale di Delta Chat [è piccolo e completamente implementato in Rust](https://github.com/deltachat/notifiers)
e si dimentica dei gettoni del dispositivo non appena Apple/Google/ecc li elabora,
di solito nel giro di pochi millisecondi.

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees e-mail addresses, IP-addresses or
any cryptographic identity information associated with a user's device (token). 

Come risultato di questo disegno complessivo sulla riservatezza, anche il sequestro di un server chatmail,
o il sequestro totale del proxy di notifica centrale di Delta Chat
non rivelerebbe informazioni private che i servizi Push non abbiano già.


### Perché Delta Chat si integra con i servizi push centralizzati proprietari di Apple/Google?

Delta Chat è un messenger decentralizzato gratuito e open source con scelta libera del server,
ma vogliamo che gli utenti sperimentino in modo affidabile la "consegna istantanea" dei messaggi,
come sperimentano dalle app Whatsapp, Signal o Telegram,
senza porre domande in anticipo, più adatte a utenti esperti o sviluppatori.

Tieni presente che Delta Chat dispone di un [sistema di Notifiche Push piccolo e rispettoso della privacy](#privacy-notifications)
che consente la "consegna istantanea" dei messaggi a tutti i server chatmail
incluso uno potenziale [potresti configurarlo tu stesso senza la nostra autorizzazione](https://delta.chat/chatmail#selfhosted).
Benvenuti nella potenza del sistema interoperabile e massiccio di chatmail ed e-mail :)


## Crittografia e Sicurezza

### Quali standards vengono utilizzati per la crittografia end-to-end?

[Autocrypt](https://autocrypt.org) viene utilizzato automaticamente per stabilire la crittografia end-to-end con contatti e chat di gruppo. Autocrypt utilizza un [sottoinsieme limitato e sicuro dello standard OpenPGP](#openpgp-secure). I messaggi crittografati end-to-end sono contrassegnati da un lucchetto 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>.

[Protocolli Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
vengono utilizzati per stabilire chat con crittografia end-to-end garantita
che protegge dagli attacchi di rete e dai server compromessi.
Chat contrassegnata da un segno di spunta verde
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
garantisce messaggi crittografati end-to-end.

### Come posso sapere se i messaggi sono crittografati end-to-end?  {#whene2e}

Tutti i messaggi crittografati end-to-end portano un lucchetto:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

La crittografia end-to-end è garantita se è presente un segno di spunta verde accanto al titolo della chat:

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### Come posso ottenere la crittografia end-to-end garantita e i segni di spunta verdi? {#howtoe2ee}

Se disponi di un secondo canale di comunicazione con il tuo partner di chat,
come una chat video o un altro messenger,
puoi generare un link d'invito.

Se siete insieme di persona,
puoi mostrare un codice QR al tuo partner di chat.

- Per **Inviti di gruppo**,
tocca il titolo del gruppo di chat per vedere l'elenco dei membri,
e seleziona "Codice QR di Invito".

- Per **inviti diretti alla chat 1:1**,
  tocca l'icona del codice QR <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  nella schermata principale dell'app Delta Chat.

Lascia che il tuo partner di chat esegua la scansione dell'immagine QR
con la loro app Delta Chat,
oppure fai clic su "Copia" o "Condividi" per creare un collegamento di invito
e condividilo con il tuo partner di chat.

Ora attendi che [i messaggi di rete Secure-Join vengano scambiati](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol) tra entrambi i dispositivi.

- Se entrambi i dispositivi sono online,
  entrambe le parti vedranno eventualmente una chat (di gruppo o diretta) con un segno di spunta verde
  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
  accanto al titolo.

- Se uno dei dispositivi è offline, verranno visualizzati solo i segni di spunta verdi
  verranno visualizzati in seguito quando il dispositivo sarà nuovamente connesso a Internet
  e il protocollo di rete Secure-Join è stato completato.

Congratulazioni!
Ora utilizzerai automaticamente la crittografia end-to-end garantita
con questo contatto potete aggiungervi a vicenda nei gruppi contrassegnati da un segno di spunta verde
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>,
diffondendo così automaticamente la crittografia end-to-end garantita tra i suoi membri.


### Cosa significano il segno di spunta verde e la "crittografia end-to-end garantita"? {#e2eeguarantee}

Titoli di chat con segni di spunta verde
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
significa che tutti i messaggi nella chat saranno crittografati end-to-end
e non possono essere letti o modificati da server di e-mail o provider Internet compromessi.
Partecipare alle chat di gruppo contrassegnate da un segno di spunta verde diffonde in modo sicuro le informazioni di crittografia di tutti (e i segni di spunta verdi)
in modo da garantire la crittografia end-to-end nel gruppo e tra i membri.

Profili di contatto con segni di spunta verdi
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
significa che attualmente è garantita la crittografia end-to-end dei messaggi a un contatto.
Ogni contatto contrassegnato dal segno di spunta verde ha effettuato una [scansione QR](#howtoe2ee) diretta con te
o è stato presentato da un altro contatto contrassegnato da un segno di spunta verde.
Le presentazioni avvengono automaticamente quando si aggiungono membri ai gruppi.
Chi aggiunge un contatto a un gruppo contrassegnato da un segno di spunta verde diventa un introduttore
a quei membri che non erano ancora a conoscenza del contatto aggiunto. In un profilo di contatto è possibile toccare ripetutamente il testo "Presentato da...".
fino ad arrivare a quello con cui hai effettuato direttamente una [scansione QR](#howtoe2ee).

Tieni presente che nel profilo di un contatto potresti vedere e toccare gli introduttori
ma non c'è il segno di spunta verde nel titolo del profilo.
Questo di solito significa che il contatto ["ha inviato un messaggio da un altro dispositivo"](#nocryptanymore).

Per una discussione più approfondita sulla "crittografia end-to-end garantita"
consultare [Protocolli Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
e leggi nello specifico i "Gruppi Verificati", il termine tecnico
di quelle che qui vengono chiamate chat "con segno di spunta verde" o "crittografate end-to-end garantite".


### Un contatto "ha inviato un messaggio da un altro dispositivo", cosa posso fare? {#nocryptanymore}

La tua chat con un contatto che ha perso la crittografia end-to-end garantita.
Il segno di spunta verde è stato rimosso per questa chat e per questo contatto quando vedi questo avviso.
**Se riscontri l'improvvisa rimozione della crittografia end-to-end garantita
inaspettatamente per questo contatto allora non accettare l'avviso!**
Verifica invece con il tuo contatto attraverso un secondo canale
come una videochiamata, un altro messenger o una telefonata,
per scoprire cosa è successo.

Se il tuo contatto ha effettivamente causato la rimozione della crittografia end-to-end garantita
consultare i paragrafi successivi per i motivi comuni e le relative attenuazioni.
Indipendentemente da ciò, tutte le altre chat contrassegnate da un segno di spunta verde rimangono garantite con crittografia end-to-end
anche se il contatto è un membro.

**Il tuo contatto sta utilizzando Delta Chat su un secondo dispositivo (telefono o laptop)**

Se hanno un altro dispositivo con l'app Delta Chat in esecuzione,
dovrebbero rimuovere il profilo dal nuovo dispositivo
e aggiungerlo [come secondo dispositivo come descritto qui](#multiclient).
Non appena ti invieranno un messaggio, l'avviso scomparirà
e la crittografia garantita viene stabilita con entrambi i dispositivi del tuo contatto.

**Il tuo contatto ha reinstallato Delta Chat utilizzando il vecchio login del profilo**
 
Se hanno [un file di backup](#backup),
dovrebbero rimuovere il profilo dal nuovo dispositivo
e piuttosto importare il file di backup per ricreare il proprio profilo.
Non appena ti invieranno un messaggio, l'avviso scomparirà
e la crittografia garantita viene ristabilita per questo contatto.

Se non hanno un file di backup, è meglio eseguire una [scansione QR](#howtoe2ee)
con il tuo partner di chat per ristabilire la crittografia end-to-end garantita.

**Il tuo contatto ha inviato un'e-mail tramite un'interfaccia webmail o un'altra app di posta elettronica
e presto tornerà a utilizzare Delta Chat.**

Se sei sicuro che il contatto a volte utilizza la webmail,
o un'altra app di posta priva di crittografia end-to-end,
allora puoi accettare l'avvertimento.
Non appena il tuo contatto utilizzerà nuovamente Delta Chat,
la crittografia end-to-end garantita verrà ristabilita automaticamente.

**Il tuo contatto ha smesso completamente di utilizzare Delta Chat**

A volte rimanere in contatto è più importante della crittografia end-to-end.
["Transport Layer Encryption" (TLS)](#tls) può comunque proteggere in modo significativo
la riservatezza dei tuoi messaggi tra il tuo dispositivo e il server di posta elettronica.
Ma senza la crittografia end-to-end tu e il tuo contratto vi fidate del vostro server di posta elettronica
a non leggere o manipolare i tuoi messaggi e a non trasmetterli a terzi.

In ogni caso, non puoi fare molto altro che accettare l'avvertimento.
Rimuovi anche il contatto da qualsiasi gruppo attivo contrassegnato da un segno di spunta verde
che puoi trovare in "Chat condivise" nel profilo dei contatti.
Ciò evita che il tuo contatto riceva messaggi "illeggibili".

Se il contatto ha rimosso Delta Chat a causa di bug o di comportamenti indesiderati,
ti invitiamo a pubblicare post sul nostro [forum di supporto](https://support.delta.chat)
per aiutarci a identificare e affrontare i problemi comuni. Grazie!


### Gli allegati (immagini, file, audio, ecc.) sono crittografati end-to-end?

Sì.

Quando parliamo di "messaggio crittografato end-to-end"
intendiamo sempre che l'intero messaggio è crittografato,
compresi tutti gli allegati
e metadati degli allegati come i nomi dei file.


### OpenPGP è sicuro? {#openpgp-secure}

Sì, Delta Chat utilizza un sottoinsieme sicuro di OpenPGP
e visualizza solo un indicatore di sicurezza lucchetto su un messaggio
se l'intero messaggio è crittografato e firmato correttamente.
Ad esempio, le "Firme distaccate" non sono considerate sicure.

OpenPGP non è insicuro di per sé.
I problemi di sicurezza di OpenPGP più discussi pubblicamente
in realtà derivano da una cattiva usabilità o da cattive implementazioni di strumenti o app (o entrambi).
È particolarmente importante distinguere tra OpenPGP, lo standard di crittografia IETF,
e GnuPG (GPG), uno strumento da riga di comando che implementa OpenPGP.
Molte critiche pubbliche di OpenPGP in realtà discutono di GnuPG che Delta Chat non ha mai utilizzato.
Delta Chat utilizza piuttosto l'implementazione OpenPGP Rust [rPGP](https://github.com/rpgp/rpgp),
disponibile come [un pacchetto "pgp" indipendente](https://crates.io/crates/pgp),
e [controllato sulla sicurezza nel 2019](https://delta.chat/assets/blog/2019-first-security-review.pdf).

Puntiamo, insieme ad altri implementatori di OpenPGP,
per migliorare ulteriormente le caratteristiche di sicurezza implementando il
[nuovo aggiornamento crittografico IETF OpenPGP](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) che per fortuna è stato adottato nell’estate 2023.


### Avete considerato l'utilizzo di alternative a OpenPGP per la crittografia end-to-end? {#openpgp-alternative}

Sì, stiamo seguendo iniziative come [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
o [Saltpack](https://saltpack.org/)
ma adottarli significherebbe rompere l’interoperabilità della crittografia end-to-end
con tutte le altre app di posta elettronica che in genere supportano la crittografia OpenPGP.
Quindi non sarebbe una decisione facile da prendere
e devono esserci miglioramenti tangibili per gli utenti.

Delta Chat adotta un approccio olistico di "sicurezza utilizzabile".
e lavora anche con una vasta gamma di gruppi di attivisti
ricercatori rinomati come [TeamUSEC](https://teamusec.de)
per migliorare i risultati effettivi degli utenti contro le minacce alla sicurezza.
Il protocollo dei messaggi e lo standard per stabilire la crittografia end-to-end è
solo una parte dei "risultati utente",
vedi anche le nostre risposte a [device-seizure](#device-seizure)
e domande su [metadati-messaggio](#message-metadata).


### Delta Chat è vulnerabile agli EFAIL?

No, [Delta Chat non è mai stato vulnerabile all'EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
perché la sua implementazione OpenPGP [rPGP](https://github.com/rpgp/rpgp)
utilizza il codice di rilevamento delle modifiche durante la crittografia dei messaggi
e restituisce [un errore](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
se il codice di rilevamento della modifica non è corretto.

Inoltre, Delta Chat non è mai stata vulnerabile all'attacco EFAIL "Direct Exfiltration"
perché decodifica solo i messaggi "multipart/encrypted".
che contengono esattamente una parte crittografata e firmata,
come definito dalla specifica Autocrypt Level 1.


### Un messaggio viene esposto in chiaro se la crittografia end-to-end non è disponibile? {#tls}

Anche se non è garantito che i tuoi messaggi siano crittografati end-to-end,
sono ancora protetti dai fornitori di Internet come le società di telefonia mobile o via cavo.
Tuttavia, i provider di posta elettronica tuoi e del destinatario
potranno leggere, analizzare o addirittura modificare i tuoi messaggi,
compresi eventuali allegati,
se non sono crittografati end-to-end.

Delta Chat per impostazione predefinita utilizza
[Crittografia TLS] rigorosa (https://en.wikipedia.org/wiki/Transport_Layer_Security)
che protegge le connessioni tra il tuo dispositivo e il tuo provider e-mail.
Tutta la gestione TLS di Delta Chat è stata sottoposta a [controlli di sicurezza](#security-audits) in modo indipendente.
Inoltre, la connessione tra il tuo provider e-mail e quello del destinatario
sarà in genere anche crittografato per il trasporto.
Se i server e-mail coinvolti supportano [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
verrà applicata la crittografia del trasporto tra i provider e-mail
in tal caso le comunicazioni Delta Chat non verranno mai esposte in chiaro su Internet
anche se il messaggio non sarà crittografato end-to-end.

Tieni presente che [mantenere la crittografia end-to-end garantita](#howtoe2ee) oltre alla crittografia TLS
fornisce una sicurezza pervasiva tra i tuoi dispositivi e quelli del destinatario.
Nemmeno il tuo provider e-mail o Internet sarà in grado di leggere o modificare i tuoi messaggi.


### In che modo Delta Chat protegge i metadati nei messaggi? {#message-metadata}

Delta Chat protegge la maggior parte dei metadati dei messaggi inserendo le seguenti informazioni
nella parte crittografata end-to-end dei messaggi:

- Linea oggetto
- Avatar e nome del gruppo
- Richieste MDN (conferma di lettura) ("Chat-Disposition-Notification-To")
- Temporizzatore dei messaggi che scompaiono ("Ephemeral-Timer")
- "Membro del gruppo chat rimosso", "Membro del gruppo chat aggiunto".
- Intestazione "Secure-Join" contenente comandi di join sicuri
- Notifica sull'attivazione dello streaming della posizione
- URL della stanza WebRTC

I server E-Mail non hanno accesso a questi metadati protetti
ma vedono la data del messaggio e la dimensione del messaggio,
e, cosa ancora più importante, gli indirizzi del mittente e del destinatario.
I server E-Mail necessitano di indirizzi di destinatari per instradare e
consegnare messaggi ai dispositivi del destinatario.


### Come proteggere i metadati e contatti quando un dispositivo viene sequestrato? {#device-seizure}

Entrambi per la protezione dai server e-mail che raccolgono metadati
nonché contro il pericolo di sequestro del dispositivo
consigliamo di utilizzare un'[istanza del server e-mail](https://delta.chat/serverguide) ottimizzata per Delta Chat
per creare profili temporanei pseudonimi tramite scansioni di codici QR.
Tieni presente che le app Delta Chat su tutte le piattaforme supportano più profili
in questo modo puoi utilizzare facilmente profili "1 settimana" o "1 mese" specifici per azioni accanto al tuo profilo "principale".
con la consapevolezza che tutti i dati temporanei del profilo, insieme a tutti i metadati, verranno cancellati.
Inoltre, se un dispositivo viene sequestrato, i contatti utilizzano profili e-mail temporanei
non possono essere identificati facilmente, rispetto ai messaggeri che rivelano
numeri di telefono nei gruppi di chat che a loro volta sono spesso associati a identità legali.


### Come posso verificare le informazioni di crittografia?

È possibile verificare manualmente lo stato della crittografia end-to-end nella finestra di dialogo "Crittografia".
(profilo utente su Android/iOS o clic con il pulsante destro del mouse sull'elemento dell'elenco chat di un utente sul desktop).
Delta Chat mostra due impronte digitali.
Se sul tuo dispositivo e su quello del tuo contatto vengono visualizzate le stesse impronte digitali,
la connessione è sicura.


### Come posso verificare lo stato di crittografia dei messaggi?

Un piccolo **lucchetto** in un fumetto denota
che il messaggio è stato correttamente crittografato end-to-end dal mittente specificato.
Se **non è presente alcun lucchetto**, il messaggio non è stato crittografato correttamente end-to-end
molto probabilmente perché il mittente utilizza un'app o un'interfaccia webmail
senza supporto per la crittografia end-to-end.


### Perché vedo messaggi non crittografati?

Se un contatto utilizza un'app e-mail non Autocrypt,
tutti i messaggi che coinvolgono questo contatto (in un gruppo o in una chat 1:1)
non sarà crittografato end-to-end e quindi non mostrerà un "lucchetto" con i messaggi.
Tieni presente che anche se i tuoi contatti utilizzano Delta Chat sul proprio profilo,
potrebbero anche utilizzare un'app di posta elettronica non Autocrypt su quel profilo
che quindi potrebbe causare messaggi non crittografati in modo intermittente.
La risposta non crittografata a messaggi non crittografati è richiesta da Autocrypt
per evitare messaggi illeggibili tra i tuoi contatti
e la loro app e-mail non Autocrypt.

### Come posso ottenere una chat crittografata end-to-end con un contatto Delta Chat che a volte utilizza la webmail o un'altra app e-mail non Autocrypt?

Se hai bisogno di una chat crittografata end-to-end sicura con un contatto
chi utilizza il proprio profilo sia con Delta Chat che con app non Autocrypt (ad esempio webmail),
è meglio configurare [la crittografia end-to-end garantita con loro](#howtoe2ee)
e quindi crea una chat di gruppo crittografata end-to-end garantita con voi due come membri.
In questa chat di gruppo tutti i messaggi verranno crittografati end-to-end
anche se la chat diretta tra voi due ha a
["... inviato un messaggio da un altro dispositivo"](#nocryptanymore) avviso.


### Come posso garantire la crittografia e l'eliminazione end-to-end dei messaggi?

Il modo migliore per garantire che ogni messaggio sia crittografato end-to-end,
e i metadati vengono eliminati il ​​più rapidamente possibile
è [utilizzare chat con crittografia end-to-end garantita](#howtoe2ee)
e l'attivazione dei [messaggi a scomparsa](#ephemeralmsgs).

Le chat crittografate end-to-end garantiscono la protezione dagli [attacchi MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
e l'attivazione dei "messaggi che scompaiono" elimina i messaggi
sul server dopo un tempo configurato dall'utente.

Se non hai bisogno di una copia più longeva dei tuoi messaggi sul server,
puoi anche attivare ["elimina messaggi dal server"](#delold).


### Delta Chat supporta Perfect Forward Secrecy? {#pfs}

No, Delta Chat non supporta Perfect Forward Secrecy (PFS).
Ciò significa che se la tua chiave di decrittazione privata Delta Chat viene divulgata,
e qualcuno ha raccolto i tuoi precedenti messaggi in transito,
sarà in grado di decrittografarli e leggerli utilizzando la chiave di decrittazione trapelata.

Tieni presente, tuttavia, che se qualcuno ottiene le tue chiavi di decrittazione,
in genere saranno anche in grado di ricevere i tuoi messaggi,
indipendentemente dal fatto che Perfect Forward Secrecy sia attivo o meno.
La tipica situazione reale in caso di fuga di chiavi di decrittazione è il sequestro del dispositivo
di cui discutiamo nella nostra risposta [sui metadati e sul sequestro dei dispositivi](#device-seizure).

È possibile che Delta Chat si evolva per supportare Perfect Forward Secrecy,
perché OpenPGP è solo un contenitore per messaggi crittografati
ma la gestione delle chiavi di crittografia (e quindi la rotazione delle chiavi o "cricchetto")
potrebbero essere organizzati in modo flessibile.
Vedi [prototipo PFS di Seqouia](https://gitlab.com/sequoia-pgp/openpgp-dr)
per gli esperimenti esistenti nella comunità degli implementatori di OpenPGP.


### La crittografia end-to-end di Delta Chat è sicura quanto quella di Signal?

Dipende da cosa è importante per te.
Delta Chat [non supporta PFS](#pfs) come fa Signal
ma fornisce [chat crittografate end-to-end garantite](#e2eeguarantee)
che sono sicuri contro server compromessi o reti danneggiate.
Signal e la maggior parte degli altri servizi di messaggistica che supportano PFS non forniscono
uno schema pratico per proteggere i gruppi di chat dagli attacchi di rete
che sono probabilmente più preoccupanti
di un potenziale utente malintenzionato che si impadronisce del tuo telefono e della configurazione di crittografia privata
ma in qualche modo non i tuoi messaggi, ma ha un registro completo di tutti
messaggi crittografati precedenti.

In ogni caso, la crittografia end-to-end di Delta Chat utilizza un [sottoinsieme sicuro di OpenPGP](#openpgp-secure)
che è stato [controllato in modo indipendente sulla sicurezza](../assets/blog/2019-first-security-review.pdf).

### Posso riutilizzare la mia chiave privata esistente? {#importkey}

Sì.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

In alternativa è possibile importare manualmente la chiave in "Impostazioni -> Avanzate -> Gestisci Chiavi -> Importa Chiavi Segrete".
Attenzione: assicurarsi che la chiave non sia protetta da password oppure rimuovere prima la password.

Se non hai una chiave o non sai nemmeno che ne avrai bisogno - non preoccuparti: Delta Chat genera le chiavi secondo necessità, non devi premere un pulsante per ottenerle.

### Non riesco a importare la mia chiave PGP esistente in Delta Chat.

Con molta probabilità, il problema sta nel fatto che la tua chiave è cifata e/o usa
una password. Queste chiavi non sono supportate da Delta Chat. Rimuovi la
cifratura e la password e prova ad importarla nuovamente.

Un altro errore comune è avere la fine del file sbagliata.
Utilizza il formato corazzato ASCII e l'estensione del file ".asc".

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

### Delta Chat è stata verificata in modo indipendente per le vulnerabilità di sicurezza? {#security-audits}

Il progetto Delta Chat è stato sottoposto a quattro controlli di sicurezza indipendenti e
un'analisi di sicurezza indipendente, dal più recente al più vecchio:

- Marzo 2024, abbiamo ricevuto un'analisi approfondita della sicurezza dalla Crittografia Applicata
gruppo di ricerca dell'ETH di Zurigo e ha affrontato tutte le questioni sollevate. 
Consulta il nostro post sul blog su [Rafforzamento della crittografia end-to-end garantita](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) per informazioni più dettagliate e
[Analisi crittografica di Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
articolo di ricerca pubblicato successivamente.

- A partire dal 2023, abbiamo risolto i problemi di sicurezza e privacy con il servizio "web
app condivise in una chat", relativa ai guasti del sandboxing
soprattutto con Chromium. Successivamente abbiamo ottenuto una sicurezza indipendente
audit da Cure53 e tutti i problemi rilevati sono stati risolti nella serie di app 1.36 rilasciata nell'aprile 2023.
Vedi [qui per la storia completa sulla sicurezza end-to-end nel web](https://delta.chat/en/2023-05-22-webxdc-security).

- A partire dal 2023, [Cure53](https://cure53.de) ha analizzato sia la crittografia del trasporto delle
Connessioni di rete di Delta Chat e una configurazione del server di posta riproducibile come
[consigliato su questo sito](serverguide).
Puoi leggere ulteriori informazioni sull'audit [sul nostro blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
o leggere il [rapporto completo qui](../assets/blog/MER-01-report.pdf).

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

- Nel 2019, [Include Security](https://includesecurity.com) ha analizzato le librerie
[PGP](https://github.com/rpgp/rpgp) e
[RSA](https://github.com/RustCrypto/RSA) di Delta Chat.
Non ha riscontrato criticità,
ma due problemi di elevata gravità che abbiamo successivamente risolto.
Ne sono emersi anche uno di media gravità e alcuni problemi meno gravi,
ma non c'era modo di sfruttare queste vulnerabilità nell'implementazione di Delta Chat.
Alcuni di essi sono stati comunque corretti dopo la conclusione dell'audit.
Puoi leggere il [rapporto completo qui](../assets/blog/2019-first-security-review.pdf).



## Multi-client {#multiclient}

### Posso utilizzare Delta Chat su più dispositivi contemporaneamente?

Sì. Delta Chat 1.36 comes with a new, experimental function for using the same profile on different devices:

- Assicurati che entrambi i dispositivi siano collegati alla stessa rete Wi-Fi o network

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

- Su **Windows**, vai su **Pannello di controllo / Rete e Internet**
e assicurati che **Rete Privata** sia selezionata come "Tipo di profilo di rete"
(dopo il trasferimento è possibile ripristinare il valore originale)

- Su **iOS**, assicurati che l'accesso a "Impostazioni di Sistema / App / Delta Chat / **Rete locale**" sia concesso

- Su **macOS**, abilita "Impostazioni di Sistema / Privacy & Sicurezza / **Rete locale** / Delta Chat"

- Il sistema potrebbe avere un "personal firewall",
  che è noto per causare problemi (soprattutto su Windows).
  **Disattivare il firewall personale** per Delta Chat su entrambe le estremità e riprovare.

- **Reti Ospite** potrebbero non consentire ai dispositivi di comunicare tra loro.
Se possibile, utilizza una rete non ospite.

- Assicurarsi che sul dispositivo di destinazione ci sia **disponibilità di memoria sufficiente**.

- Se il trasferimento è iniziato, assicurarsi che i dispositivi **rimangano attivi** e non si addormentino.
  Non uscire da Delta Chat.
  (cerchiamo di far funzionare l'applicazione in background, ma [i sistemi tendono a uccidere le applicazioni](https://dontkillmyapp.com), purtroppo).

- Delta Chat è **già connesso** sul dispositivo di destinazione?
  È possibile utilizzare più profili per dispositivo, basta [aggiungere un altro profilo](#multiple-accounts)

- Se si riscontrano ancora problemi o se **non si riesce a scansionare un codice QR**
  provate il **trasferimento manuale** descritto di seguito


### Trasferimento manuale {#backup}

Questo metodo è consigliato solo se "Aggiungi Secondo Dispositivo" come descritto sopra non funziona.

- Sul vecchio dispositivo, vai su "Impostazioni -> Chat e Media -> Backup Chat su Memoria Esterna". Inserisci il tuo
PIN, sequenza o password di sblocco dello schermo. Quindi puoi fare clic su "Avvia
Backup". Questo salva il file di backup sul tuo dispositivo. Ora devi trasferirlo
in qualche modo all'altro dispositivo.
- Sul nuovo dispositivo, nella schermata di accesso, invece di accedere al tuo profilo
e-mail, seleziona "Importa backup". Dopo l'importazione, le tue conversazioni, la crittografia
i tasti e i supporti devono essere copiati sul nuovo dispositivo.
- **Se usi iOS:** e incontri difficoltà, forse
[questa guida](https://support.delta.chat/t/import-backup-to-ios/1628)
Aiutarti.
- Ora sei sincronizzato e puoi utilizzare entrambi i dispositivi per inviare e ricevere
messaggi crittografati end-to-end con i tuoi partner di comunicazione.

### Sono previsti piani per l'introduzione di un client Web Delta Chat?

- Non ci sono piani immediati ma alcune riflessioni preliminari.
- Ci sono 2-3 strade per introdurre un client Web Delta Chat, ma tutte sono
lavoro significativo. Per ora, ci concentriamo sull'ottenere versioni stabili in tutti
gli app store (repository Google Play/iOS/Windows/macOS/Linux) come app native.
- Se hai bisogno di un Client Web, perché non sei autorizzato a installare software sul
computer con cui lavori, puoi utilizzare il client Desktop Windows Portatile,
o l'AppImage per Linux. Le trovi su
[get.delta.chat](https://get.delta.chat).


## apps webxdc {#webxdc}

In Delta Chat, puoi condividere [app webxdc](https://webxdc.org), allegati file con estensione `.xdc`.
Possono fare cose molto diverse e rendere Delta Chat davvero
un messenger estensibile.


### Quanto sono private le apps webxdc?

- Le apps webxdc non possono inviare dati a Internet o scaricare nulla.
- Un'app webxdc può scambiare dati solo all'interno di una chat Delta Chat, con la sua
copia sui dispositivi dei tuoi partner di chat. A parte questo, è completamente
isolato da Internet.
- La privacy offerta da un'app webxdc è la privacy della tua chat, purché tu
ti fidi delle persone con cui chatti e quindi puoi fidarti anche dell'app webxdc.
- Ciò significa anche: può essere un rischio per la privacy aprire le app webxdc nelle chat dove
non ti fidi dei membri, come sai dagli allegati di posta elettronica, dove
apri solo gli allegati provenienti dai mittenti di cui ti fidi e non da spammer.


### Dove posso trovare le apps webxdc?

- In generale, chiunque può condividere apps webxdc con ciascun
  altro senza restrizioni.
- Puoi [inviare 'ciao' a xstore@testrun.org](https://delta.chat/en/2023-08-11-xstore)
  per vedere un app store webxdc sperimentale.
  Tutte le app sono open source e gratuite.
- Molte persone scrivono le proprie app webxdc e le pubblicano su [Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### Come posso creare le mie apps webxdc?

- Le app webxdc sono solo file zip contenenti codice html, css e javascript.
- Puoi estendere l'[app di esempio Hello World](https://github.com/webxdc/hello)
  per iniziare.
- Tutto il resto che devi sapere è scritto nella
  [documentazione](https://docs.webxdc.org/).
- Se hai domande, puoi chiederle ad altri con esperienza nel [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Caratteristiche Sperimentali

Siamo molto grati per il feedback su queste funzionalità: vuoi condividere
le tue idee? Partecipa al [Forum](https://support.delta.chat) per contribuire.
Puoi accedere comodamente tramite Delta Chat e una scansione del codice QR,
un altro esperimento piuttosto stabile che eseguiamo a parte (sic!).

### Come posso utilizzare le chiamate audio/video con Delta Chat?

- Per attivare le chiamate audio/video vai alla sezione "funzionalità sperimentali" in
le impostazioni avanzate e scegli una "Istanza di chat video".
- Quando inviti altri a una chat video, questa viene aperta nel tuo browser/app all'indirizzo
una volta. Gli altri ricevono un'e-mail con un collegamento alla chat video.
In questo modo è compatibile anche se i tuoi partner di chat non utilizzano Delta Chat.
- Tieni presente che non c'è suoneria dall'altra parte e dai tuoi partner di chat
non verrà interrotto da un invito alla chat video.
- Puoi utilizzare qualsiasi servizio di chat video che consenta l'accesso tramite collegamento. Basta aggiungere il
collegamento nelle impostazioni.
- Ad esempio, per utilizzare l'istanza Jitsi Meet di punta, potresti inserire
`https://meet.jit.si/$ROOM`. La variabile "$ROOM" sarà un valore casuale;
in questo modo, avrai una nuova stanza jitsi casuale ogni volta che chiami qualcuno.


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

- Puoi attivare lo streaming della posizione nella sezione "funzionalità sperimentali" di
impostazioni avanzate.
- Ora, se vuoi condividere la tua posizione in una chat, vai su "allega" e seleziona
"posizione". Ora puoi impostare un intervallo di tempo in cui sarà la tua posizione
trasmessa in streaming ai tuoi partner di chat, tra 5 minuti e 6 ore.
- Quando la tua posizione cambia, gli altri nella chat possono visualizzarla su una mappa in
chat.
- Per vedere la mappa e visualizzare le posizioni degli altri, è necessario attivare la funzione
nelle impostazioni avanzate.
- Questa funzione non condividerà la tua posizione con nessuno tranne i tuoi partner di chat.
I riquadri della mappa vengono scaricati da [OpenStreetMap](https://openstreetmap.org).
- Su desktop, il sistema operativo in genere non è in grado di determinare la tua posizione. Invece puoi
fare clic con il tasto destro sulla mappa e descrivere una posizione, che verrà inviata alla chat come
un messaggio, ma appare anche sulla mappa.


### Perché posso scegliere di guardare solo la cartella DeltaChat?

Questa è un'impostazione sperimentale per alcune persone che stanno sperimentando
regole lato server. Non tutti i provider supportano questo, ma con alcuni puoi spostare
tutti i messaggi con un'intestazione "Chat-Version" nella cartella DeltaChat. Normalmente, questo
verrebbe eseguito dall'app Delta Chat.

Abilitare "Recupera dalla Cartella DeltaChat" ha senso se hai **entrambi**:

- abilitato una regola lato server per spostare tutti i messaggi con l'intestazione Chat-Version nella cartella DeltaChat, e
- aver impostato l'impostazione "Mostra email classiche" su "no, solo chat".

In questo caso, Delta Chat non ha bisogno di guardare la Posta in arrivo ed è sufficiente guardare solo la cartella DeltaChat.


### Come posso cambiare il mio profilo con un indirizzo e-mail diverso?

1. Cambia il tuo indirizzo in “Impostazioni → Avanzate → Password e Profilo” e
   inserisci la password del tuo nuovo profilo (e se necessario, le impostazioni del server).
   Riceverai un avviso informativo sul fatto che ti trasferirai ad un nuovo indirizzo.
   Un ulteriore avviso verrà visualizzato anche nella chat "Messaggi del dispositivo".

2. Se possibile, lascia che il tuo vecchio provider e-mail inoltri tutti i messaggi al tuo nuovo indirizzo.

3. Dì ai tuoi contatti che hai cambiato il tuo indirizzo.
Scrivere a chat e gruppi crittografati end-to-end garantiti,
farà loro notare automaticamente la tua azione
e continueranno a chattare con te utilizzando il tuo nuovo indirizzo.

Tieni presente che Delta Chat non recupererà più i messaggi dal tuo vecchio provider e-mail.
Se non hai configurato il tuo provider e-mail per inoltrare i messaggi (passaggio 2.)
solo i contatti a cui hai inviato un messaggio in una chat crittografata end-to-end garantita
invieranno messaggi al tuo nuovo indirizzo.

Per saperne di più su questi dettagli, [leggi il nostro post sul blog
it](https://delta.chat/en/2022-09-14-aeap).


## Varie

### Di quali autorizzazioni ha bisogno Delta Chat?

A seconda del sistema operativo in uso,
potrebbe esserti chiesto di concedere le autorizzazioni all'app.
Questo è ciò che fa Delta Chat con queste autorizzazioni:

- Fotocamera *(può essere disabilitata)*
- scattare foto e video: per inviare foto
- Contatti *(può essere disabilitato)*
- leggi i tuoi contatti: per scoprire i contatti con cui chattare
- Posizione *(può essere disabilitato)*
- accedere alla posizione approssimativa (fonti di localizzazione della rete): per la funzione di streaming della posizione
- accedere alla posizione precisa (fonti di localizzazione GPS e di rete): per la funzionalità di streaming della posizione
- Microfono *(può essere disattivato)*
- registra audio: per messaggi audio
- Archiviazione *(può essere disabilitato)*
- modificare o eliminare il contenuto della scheda SD: per scaricare gli allegati dei messaggi
- leggere il contenuto della scheda SD: per condividere file con i tuoi contatti
- Altre funzionalità dell'app
- modificare le impostazioni audio: così puoi scegliere suonerie e volume per notifiche e messaggi audio
- esegui all'avvio: quindi non è necessario avviare Delta Chat manualmente
- controllo vibrazione: per le notifiche
- visualizzare le connessioni di rete: per connettersi al proprio fornitore e-mail
- impedisce al telefono di andare in stop: così puoi copiare più facilmente il codice di sicurezza durante il messaggio di configurazione di Autocrypt
- avere accesso completo alla rete: per connettersi al proprio fornitore e-mail
- visualizzare le connessioni Wi-Fi: per connettersi al proprio fornitore e-mail
- chiedere di ignorare le ottimizzazioni della batteria: per ottenere la "consegna istantanea dei messaggi"


### Delta Chat funziona con il _mio_ fornitore e-mail?

- Con buona possibilità: Sì :)
Tuttavia, alcuni provider necessitano di opzioni speciali per funzionare correttamente,
vedi [Panoramica fornitore](https://providers.delta.chat)


### Voglio gestire il mio server di posta elettronica per Delta Chat. Che cosa mi consigliate?

- La maggior parte dei server di posta funzionerà bene. Ma quello che raccomandiamo personalmente è una
combinazione di mailcow e mailadm, come descritto [in questo
blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- È possibile trovare una [guida all'installazione sul nostro sito Web](serverguide).


### Perché devo inserire la mia password E-Mail in Delta Chat? È sicuro?

Come con altri programmi di posta elettronica quali Thunderbird, K9-Mail o Outlook,il
programma ha bisogno della password in modo da poterla utilizzare per inviare mail. Naturalmente, la
password è memorizzata solo sul tuo dispositivo. La password viene trasmessa solo a
il tuo fornitore E-Mail (quando effettui il login), che ha comunque accesso alla tua posta.

Poiché Delta Chat è Open Source, puoi controllare il [Codice
Sorgente](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
se vuoi verificare che le tue credenziali siano gestite in modo sicuro. Siamo felici dei feedback che rendono l'app più sicura per tutti i nostri utenti.


### Quali messaggi vengono mostrati in Delta Chat?

Per impostazione predefinita, Delta Chat mostra tutte le e-mails.

In "Impostazioni → Avanzate → Mostra E-mail Classiche",
puoi cambiarlo. Hai queste opzioni:

- "No, solo chat": solo i messaggi inviati da altri utenti di Delta Chat e le "risposte a"
vengono visualizzati i tuoi messaggi di Delta Chat. Questo ha più senso se usi lo stesso
profilo e-mail anche per le normali e-mail.
- "Per i contatti accettati": Delta Chat mostra tutte le e-mail dei contatti con cui
hai già una chat, ma le nuove chat vengono visualizzate solo per i messaggi di Delta Chat.
Questo aiuta a decidere caso per caso se si desidera avere una
conversazione in Delta Chat o in una "normale" app di posta elettronica.
- "Sì": Delta Chat mostra tutte l'e-mail inviate al tuo indirizzo e-mail. Questo
ha senso se vuoi usare Delta Chat per tutte le tue e-mail, quindi nessun messaggio
si perde. Questa è l'impostazione predefinita.


### Delta Chat supporta le e-mail HTML?

Sì, i messaggi HTML in arrivo sono dotati di un pulsante "Mostra messaggio completo".
I messaggi in uscita utilizzano sempre testo normale.


### Posso impostare l'Oggetto dell'E-MAIL con Delta Chat?

Delta Chat imposta (e [crittografa](#message-metadata)!) il classico oggetto dell'e-mail
automaticamente al nome del gruppo o al nome del mittente.

Quindi, se vuoi impostare tu stesso l'oggetto,
ad esempio per un'e-mail formale a un contatto commerciale,
puoi creare un gruppo
solo con te stesso e il/i destinatario/(i).
Imposta il titolo della chat sull'oggetto che desideri,
e poi invia la tua email come primo messaggio.
Se i destinatari non utilizzano Delta Chat,
sembrerà come,
un'e-mail formale.
Otterrai punti professionalità bonus
se imposti un [testo della firma](#signature).


### A cosa serve l'impostazione "Invia copia a se stessi"?

L'invio di una copia dei tuoi messaggi a te stesso ti assicura di ricevere i tuoi
messaggi su tutti i dispositivi. Se disponi di più dispositivi e non lo attivi,
vedrai solo i messaggi di altre persone e i messaggi che invii dal
dispositivo attuale.

La copia viene inviata alla Posta in arrivo, quindi spostata nella cartella DeltaChat; non è
messa nella cartella "Inviata". Delta Chat *non* carica mai nulla su Posta
Inviata perché questo significherebbe caricare un messaggio due volte (una volta tramite SMTP,
e una volta tramite IMAP nella cartella Posta Inviata).

L'impostazione predefinita per "Auto-invia Copia" è "attivato".


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


### Delta Chat è compatibile con Protonmail / Tutanota / Criptext?

- Sì e no.
- No, non puoi utilizzare il tuo profilo Protonmail, Tutanota o Criptext con Delta
  Chat; non offrono la ricezione di posta tramite IMAP.
- In ogni caso puoi utilizzare Delta Chat per inviare messaggi alle persone che lo utilizzano
  Protonmail, Tutanota o Criptext. Tali messaggi non saranno end-to-end
  crittografato, però. La crittografia end-to-end offerta da questi provider non è
  compatibile con [Autocrypt](https://autocrypt.org/), gli standard Delta Chat
che usa.
- Delta Chat può crittografare end-to-end tramite qualsiasi provider e-mail con qualsiasi
[App di posta elettronica abilitata per Autocrypt](https://autocrypt.org/dev-status.html).


### Come posso eliminare il mio profilo? {#remove-account}

Se utilizzi un profilo chat predefinito
puoi semplicemente disinstallare l'app.
Questo attiverà automaticamente l'eliminazione di tutti i dati del profilo associato sul server chatmail.
Per maggiori informazioni, fai riferimento a [nine.testrun.org eliminazione-profilo](https://nine.testrun.org/info.html#account-deletion) per il server d'inserimento predefinito,
o alla rispettiva pagina del [server chatmail di 3 parti](https://delta.chat/chatmail) da te scelto.

Se hai impostato il tuo profilo chat su più dispositivi
devi rimuoverlo da tutti i dispositivi.

Se utilizzi più di un profilo,
ma non vuoi eliminarli tutti,
puoi rimuoverli nel menu di cambio profilo (su Android e iOS)
o nella barra laterale con un clic destro (nel client desktop).

I profili su [fornitori e-mail classici](https://providers.delta.chat)
non verranno eliminati automaticamente;
il modo in cui puoi eliminare il tuo profilo dipende dal tuo fornitore e-mail.
Non abbiamo alcun controllo sui profili e-mail di tali fornitori,
quindi purtroppo non possiamo aiutarti.

Se vuoi continuare a usare un profilo e-mail classico con altre app,
ma disinstallare Delta Chat,
si consiglia di abbandonare qualsiasi chat di gruppo prima di disinstallare Delta Chat.
Altrimenti potresti ricevere messaggi non decifrabili da quelle chat di gruppo.


### Sono interessato ai dettagli tecnici. Mi puoi dire di più?

- Vedi [Standard usati in Delta Chat]({% include standards-url %}).



### Dove possono trovare Delta Chat i miei amici?

Delta Chat è disponibile per tutte le piattaforme principali e alcune minori:

- Il **sito ufficiale**, <https://delta.chat/download> mostra tutte le opzioni in dettaglio

- Se non disponibile, utilizzare **mirror** su <https://deltachat.github.io/deltachat-pages>

- Apri uno dei seguenti **app store e cerca "Delta Chat":**
Google Play Store, F-Droid, Huawei App Gallery, Amazon App Store, iOS e macOS App Store, Microsoft Store

- Controlla il **gestore pacchetti** delle tue distribuzioni Linux

- **APK Android** sono disponibili anche su <https://github.com/deltachat/deltachat-android/releases>


### Come viene finanziato lo sviluppo di Delta Chat?

Delta Chat non riceve alcun capitale di rischio e
non è indebitato e non è sotto pressione per produrre enormi profitti, o per farlo
vendere utenti e i loro amici e familiari agli inserzionisti (o peggio).
Utilizziamo piuttosto fonti di finanziamento pubblico, così lontane dalle origini dell'UE e degli Stati Uniti, per aiutare
i nostri sforzi nell'istigare un ecosistema di messaggistica di chat decentralizzato e diversificato
basato sugli sviluppi della comunità Free e Open-Source.

Concretamente, lo sviluppo di Delta Chat è stato finora finanziato da queste fonti,
ordinate cronologicamente:

- Il progetto UE [NEXTLEAP](https://nextleap.eu) ha finanziato la ricerca
  e implementazione di gruppi verificati e impostazione di protocolli di contatto
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

- La [fondazione NLnet](https://nlnet.nl/) ha concesso nel 2019/2020 46.000 EUR per
  completando i collegamenti Rust/Python e avviando un ecosistema Chat-bot.

- Nel 2021 abbiamo ricevuto ulteriori finanziamenti dell'UE per due Next-Generation-Internet
proposte, in particolare per [EPPD - directory di portabilità del provider e-mail](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) e [AEAP - portabilità dell'indirizzo e-mail](https://nlnet.nl/project/EmailPorting/) (~90K EUR) che ha portato a un migliore supporto multi-profilo, contatti QR-code migliorati e configurazioni di gruppo e molti miglioramenti della rete su tutte le piattaforme.

- Dalla fine del 2021 fino a Marzo 2023 abbiamo ricevuto finanziamenti *Internet Freedom* (500.000 USD) dall'Ufficio per la democrazia, i diritti umani e il lavoro degli Stati Uniti (DRL). Questo finanziamento ha supportato i nostri obiettivi a lungo termine per rendere Delta Chat più utilizzabile e compatibile con un'ampia gamma di server di posta elettronica in tutto il mondo e più resiliente e sicuro in luoghi spesso colpiti dalla censura e dalla chiusura di Internet.

- 2023-2024 abbiamo completato con successo il progetto [Chatmail Sicuro](https://www.opentech.fund/projects-we-support/supported-projects/secure-chat-mail-with-delta-chat/) finanziato da OTF, 
consentendoci di introdurre la crittografia garantita, 
creando una [rete di server di chatmail](https://delta.chat/chatmail) 
e fornendo "inserimento immediato" in tutte le app rilasciate da aprile 2024 in poi.

- Nel 2023 e nel 2024 siamo stati accettati nel programma Next Generation Internet (NGI)
  per il nostro lavoro in [webxdc PUSH].(https://nlnet.nl/project/WebXDC-Push/),
  insieme ai partner di collaborazione che lavorano su 
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/), 
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/), 
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) e 
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/). 
  Tutti questi progetti sono parzialmente completati o saranno completati all'inizio del 2025.

- A volte riceviamo donazioni una tantum da privati.
Ad esempio, nel 2021 un generoso individuo ci ha trasferito in banca 4K EUR
con l'oggetto "continuate il buon sviluppo!". 💜
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
