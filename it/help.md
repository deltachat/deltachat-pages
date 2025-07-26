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
Basato su [Standard E-mail e Web Internet]({% include standards-url %}), 
[per evitare "l'ennesima sindrome standard (xkcd 927)"](https://xkcd.com/927/)


### Cosa succede se aspetto un messaggio da qualcuno a cui non ho scritto in passato?

Se un messaggio proviene da un contatto sconosciuto, appare come una **richiesta**.

- È necessario **accettare** la richiesta prima di poter rispondere.

- Si può anche **cancellare** il messaggio se non si vuole più chattare con esso.

- Se si elimina una richiesta, i futuri messaggi di quel contatto continueranno a essere visualizzati come richieste di contatto
in modo da poter cambiare idea. Se non si vuole davvero ricevere
messaggi da questa persona, prendete in considerazione la possibilità di **bloccarla**.


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


### Come funziona "Messaggi Salvati"? {#save}

**Messaggi Salvati** è una chat che puoi usare per ricordare e trovare facilmente i messaggi.

- in qualunque chat, premi a lungo o click destro sul messaggio e seleziona **Salva**

- I messaggi salvati sono marcati col simbolo
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
accanto all'ora d'invio

- Successivamente, apri la chat "Messaggi Salvati" - e vedrai là i messaggi che hai salvato.
Toccando<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
puoi tornare al messaggio originale nella chat di provenienza.

- Infine, puoi anche usare "Messaggi Salvati" per prendere **appunti** - apri la chat, digita qualcosa, aggiungi una foto o un messaggio vocale, ecc.

- Dato che i "Messaggi Salvati" sono sincronizzati, possono essere molto comodi per trasferire dati tra i dispositivi

I messaggi restano salvati anche se vengono modificati o eliminati -
che sia dal [mittente](#edit), [ripulendo il dispositivo](#delold) o per i [messaggi a scomparsa di altre chat](#ephemeralmsgs).


### Cosa significa il punto verde?

A volte puoi vedere un **punto verde** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/> accanto all'avatar
- di un contatto. Significa che è stato "visto di recente". Nel dettaglio: significa che negli ultimi 10 minuti Delta Chat lo ha visto:

- o perché ti ha inviato un messaggio direttamente,
- perché ha scritto qualcosa a un gruppo di cui siete entrambi membri,
- perché ti ha inviato una conferma di lettura per un messaggio che hai scritto,
- o perché ha inviato dati alla tua app Delta Chat utilizzando l'[applicazione webxdc](#webxdc).

- Quindi questo non è uno stato online in tempo reale - e se qualcuno non risponde subito anche se sembra online, non preoccuparti e dagli un po' di spazio :)

- D'altra parte, non sempre gli altri "vedranno che sei online". Se tu
hai disattivato le conferme di lettura, non vedranno il punto verde finché non lo farai tu
invia loro un messaggio o scrivi anche a un gruppo a cui appartengono.


### Correggi gli errori e cancella i messaggi dopo averli inviati {#edit}

- Puoi modificare il testo dei tuoi messaggi già inviati.
Per farlo, premi a lungo o click destro sul messaggio e seleziona **Edit**
o <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>.

- Se hai inviato un messaggio accidentalmente,
dallo stesso menu, seleziona **Elimina** e quindi **Cancella per Tutti**.

Una volta modificati i messaggi avranno scritto "Modificato" accanto all'orario d'invio,
i messaggi eliminati saranno rimossi senza alcun avviso in chat.
Non vengono inviate notifiche e non c'è limite di tempo.

Nota che il messaggio originale potrebbe essere ancora sui dispositivi dei membri della chat
che avrebbero già potuto rispondere, inoltrare, salvare, scattare una schermata o copiare il messaggio in altri modi. 


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

- Un'app Delta Chat ottiene un "token del dispositivo" localmente, lo crittografa e lo memorizza sul server [chatmail](https://delta.chat/chatmail).

- Quando un server [chatmail](https://delta.chat/chatmail) riceve un'e-mail per un utente Delta Chat, inoltra il token del dispositivo crittografato al proxy di notifica centrale Delta Chat.

- Il proxy di notifica centrale di Delta Chat decifra il token del dispositivo
  e lo inoltra al rispettivo servizio Push (Apple, Google, ecc.),
  senza mai conoscere l'IP o l'indirizzo e-mail degli utenti di Delta Chat.

- Il Servizio Push centrale (Apple, Google, ecc.)
attiva l'app Delta Chat sul tuo dispositivo
per verificare la presenza di nuovi messaggi in background.
Non conosce chatmail o l'indirizzo e-mail del dispositivo che si attiva.
I servizi centrali Apple/Google Push non vedono mai un indirizzo e-mail (mittente o destinatario)
e inoltre non vedono mai il contenuto del messaggio (anche non in forma crittografata).


Il proxy di notifica centrale di Delta Chat [è piccolo e completamente implementato in Rust](https://github.com/deltachat/notifiers)
e si dimentica dei gettoni del dispositivo non appena Apple/Google/ecc li elabora,
di solito nel giro di pochi millisecondi.

Si noti che il token del dispositivo è crittografato tra le app e il proxy di notifica
ma non è firmato.
Il proxy di notifica quindi non vede mai indirizzi e-mail, indirizzi IP o
alcune informazioni di identità crittografica associate al dispositivo di un utente (token).

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


## Crittografia e Sicurezza {#e2ee}

### Quali standards vengono utilizzati per la crittografia end-to-end?

Delta Chat utilizza un [sottoinsieme sicuro dello standard OpenPGP](#openpgp-secure)
per fornire la crittografia end-to-end automatica utilizzando questi protocolli:

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  per scambiare informazioni sulla configurazione della crittografia tramite la scansione del codice QR o i "link di invito".

- [Autocrypt](https://autocrypt.org) viene utilizzato per stabilire
  automaticamente la crittografia end-to-end tra i contatti e tutti i membri di una chat di gruppo.

- [Condivisione di un contatto con una
  chat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  consente ai destinatari di utilizzare la crittografia end-to-end con il contatto.

Delta Chat non esegue query, pubblica o interagisce con alcun server di chiavi OpenPGP.

### Come posso sapere se i messaggi sono crittografati end-to-end?  {#whene2e}

Tutti i messaggi in Delta Chat sono **crittografati end-to-end per impostazione predefinita**.
Dalla serie di rilasci della Versione 2 di Delta Chat (Luglio 2025)
non ci sono più lucchetti o marcatori simili, sui messaggi crittografati end-to-end.

### Posso ancora ricevere o inviare mails senza la crittografia end-to-end?

Se si utilizzano i [relays di chatmail](https://chatmail.at/relays),
è impossibile ricevere o inviare messaggi senza la crittografia end-to-end.

Se invece si crea un profilo utilizzando un server di posta elettronica classico,
è possibile inviare e ricevere messaggi senza crittografia end-to-end. 
I messaggi privi di crittografia end-to-end sono contrassegnati da un'icona e-mail  
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.

### Come posso stabilire una chat con un nuovo contatto? {#howtoe2ee}

È possibile inviare un link di invito attraverso un'altra chat privata, 
mostrare un codice QR di invito quando si è vicini o in una videochiamata,
o fare clic su un "contatto" condiviso in una chat.

- Per **Inviti di gruppo**,
tocca il titolo del gruppo di chat per vedere l'elenco dei membri,
e seleziona "Codice QR di Invito".

- Per **inviti diretti alla chat 1:1**,  
  toccare l'icona del Codice QR <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" /> 
  nella schermata principale dell'app Delta Chat.

Chiedere al partner di chat di scansionare l'immagine QR
con la propria app Delta Chat,
oppure cliccare su "Copia" o "Condividi" per creare un link di invito
e condividerlo con il partner di chat.

Ora aspettate che [la crittografia end-to-end venga stabilita](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol).

- Se entrambe le parti sono online, vedranno presto una chat (di gruppo o diretta)
  e potranno iniziare a messaggiare in modo sicuro.

- Se una delle due parti è offline o con rete scadente, 
  la possibilità di chattare viene ritardata fino al ripristino della connettività.

Congratulazioni! 
Ora utilizzerai automaticamente la crittografia end-to-end 
con questo contatto. 
Se vi aggiungete a gruppi di chat, 
la crittografia end-to-end sarà stabilita tra tutti i membri.


### Cosa significa il segno di spunta verde nel profilo di un contatto? {#e2eeguarantee}

A contact profile might show a green checkmark
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
and an "Introduced by" line.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a green-checkmarked contact to a group with only green-checkmarked members 
becomes an introducer. 
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

Per una discussione più approfondita sulla "crittografia end-to-end garantita"
consultare [Protocolli Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
e leggi nello specifico i "Gruppi Verificati", il termine tecnico
di quelle che qui vengono chiamate chat "con segno di spunta verde" o "crittografate end-to-end garantite".

### Gli allegati (immagini, file, audio, ecc.) sono crittografati end-to-end?

Sì.

Quando parliamo di "messaggio crittografato end-to-end"
intendiamo sempre che l'intero messaggio è crittografato,
compresi tutti gli allegati
e metadati degli allegati come i nomi dei file.


### OpenPGP è sicuro? {#openpgp-secure}

Sì, Delta Chat utilizza un sottoinsieme sicuro di OpenPGP
che richiede che l'intero messaggio sia correttamente crittografato e firmato.
Ad esempio, le "Firme staccate" non sono considerate sicure.

OpenPGP non è insicuro di per sé.
La maggior parte dei problemi di sicurezza di OpenPGP discussi pubblicamentederivano in realtà da una cattiva usabilità o da cattive implementazioni di strumenti o app (o entrambi).
È particolarmente importante distinguere tra OpenPGP, lo standard di crittografia IETF,
e GnuPG (GPG), uno strumento da riga di comando che implementa OpenPGP.
Molte critiche pubbliche di OpenPGP in realtà discutono di GnuPG che Delta Chat non ha mai utilizzato.
Delta Chat utilizza piuttosto l'implementazione Rust di OpenPGP [rPGP](https://github.com/rpgp/rpgp),
disponibile come [un pacchetto "pgp" indipendente](https://crates.io/crates/pgp),
e [verificato per la sicurezza nel 2019 e nel 2024](#security-audits).

Puntiamo, insieme ad altri implementatori di OpenPGP,
per migliorare ulteriormente le caratteristiche di sicurezza implementando il
[nuovo aggiornamento crittografico IETF OpenPGP](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) che per fortuna è stato adottato nell’estate 2023.


### Avete considerato l'utilizzo di alternative a OpenPGP per la crittografia end-to-end? {#openpgp-alternatives}

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


### I messaggi contrassegnati dall'icona della posta sono esposti su Internet? {#tls}

Se inviate o ricevete messaggi e-mail senza crittografia end-to-end (utilizzando un server e-mail classico),
sono comunque protetti dalle compagnie telefoniche o via cavo che non possono leggere o modificare i vostri messaggi e-mail. 
Ma sia il vostro provider e-mail che quello del destinatario 
possono leggere, analizzare o modificare i vostri messaggi, compresi gli allegati.

Delta Chat per impostazione predefinita utilizza
[Crittografia TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) rigorosa 
che protegge le connessioni tra il tuo dispositivo e il tuo provider e-mail.
Tutta la gestione TLS di Delta Chat è stata sottoposta a [controlli di sicurezza](#security-audits) in modo indipendente.
Inoltre, la connessione tra il tuo provider e-mail e quello del destinatario
sarà in genere anche crittografato per il trasporto.
Se i server e-mail coinvolti supportano [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
verrà applicata la crittografia del trasporto tra i provider e-mail
in tal caso le comunicazioni Delta Chat non verranno mai esposte in chiaro su Internet
anche se il messaggio non sarà crittografato end-to-end.


### In che modo Delta Chat protegge i metadati nei messaggi? {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

E-mail Servers can therefore only see

- the message date, 

- sender and receiver addresses 

- and message size. 

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### Come proteggere i metadati e contatti quando un dispositivo viene sequestrato? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random e-mail addresses for transport. 
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then chat contacts using short-lived profiles
can not be identified easily. 

### Does Delta Chat support "Sealed Sender"? {#sealedsender}

No, non ancora.

The Signal messenger introduced ["Sealed Sender" in 2018](https://signal.org/blog/sealed-sender/)
to keep their server infrastructure ignorant of who is sending a message to a set of recipients. 
It is particularly important because the Signal server knows the mobile number of each account,
which is usually associated with a passport identity.

Even if [chatmail relays](https://chatmail.at/relays) 
do not ask for any private data (including no phone numbers), 
it might still be worthwhile to protect relational metadata between addresses. 
We don't foresee bigger problems in using random throw-away e-mail addresses for sealed sending
but an implementation has not been agreed as a priority yet. 

### Delta Chat supporta Perfect Forward Secrecy? {#pfs}

No, non ancora.

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

We designed a Forward Secrecy approach that withstood 
initial examination from some cryptographers and implementation experts 
but is pending a more formal write up 
to ascertain it reliably works in federated messaging and with multi-device usage,
before it could be implemented in [chatmail core](https://github.com/chatmail/core),
which would make it available in all [chatmail clients](https://chatmail.at/clients). 

### Does Delta Chat support Post-Quantum-Cryptography? {#pqc}

No, non ancora.

Delta Chat uses the Rust OpenPGP library [rPGP](https://github.com/rpgp/rpgp)
which supports the latest [IETF Post-Quantum-Cryptography OpenPGP draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/). 
We aim to add PQC support in [chatmail core](https://github.com/chatmail/core)  after the draft is finalized at the IETF
in collaboration with other OpenPGP implementers. 

### How can I manually check encryption information?

È possibile verificare manualmente lo stato della crittografia end-to-end nella finestra di dialogo "Crittografia".
(profilo utente su Android/iOS o clic con il pulsante destro del mouse sull'elemento dell'elenco chat di un utente sul desktop).
Delta Chat mostra due impronte digitali.
Se sul tuo dispositivo e su quello del tuo contatto vengono visualizzate le stesse impronte digitali,
la connessione è sicura.

### Posso riutilizzare la mia chiave privata esistente? {#importkey}

No.

Delta Chat genera chiavi OpenPGP sicure in conformità alle specifiche di Autocrypt 1.1.
Puoi esportare le tue chiavi private ma non puoi importare chiavi private aggiuntive.

In generale, non raccomandiamo on proponiamo agli utenti di gestire manualmente le chiavi.
Noi vogliamo assicurare che gli audit di sicurezza si possano focalizzare su pochi algoritmi crittografici comprovati
invece che sull'intera estensione dei possibili algoritmi consentiti con OpenPGP.

### Delta Chat è stata verificata in modo indipendente per le vulnerabilità di sicurezza? {#security-audits}

Sì, più volte.
Il progetto Delta Chat è sottoposto costantemente a verifiche e analisi di sicurezza indipendenti,
dal più recente al più vecchio:

- Dicembre 2024, un [Valutazione commissionata da NLNET di
rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) di [Radically Open Security](https://www.radicallyopensecurity.com/) ha preso parte.
  rPGP serves as the end-to-end encyption [OpenPGP](https://openpgp.org) engine of Delta Chat. 
  Sono stati rilasciati due avvisi relativi ai risultati di questa verifica:

  - ["Panico per Input non Attendibili e Malformati"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potenziale Esaurimento delle Risorse durante la gestione di Messaggi non Attendibili"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

  I problemi descritti in questi avvisi sono stati risolti e fanno
parte delle versioni di Delta Chat
  su tutti gli appstore da Dicembre 2024.

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

Sì. You can use the same profile on different devices:

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

- Se continui ad aver problemi usando la stessa rete,
prova ad aprire l' **Hotspot** su uno dei dispositivi e collegati al quel Wi-Fi con l'altro

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

### Cancella, Fissa, Archivia, Salva, Silenzia ecc. sono sincronizzate su tutti i dispositivi?

Sì.

Se per esempio cancelli una chat o un messaggio dal tuo telefono,
sarà cancellato sul tuo desktop non appena tornerà in linea di nuovo.

Eccezioni rilevanti sono [Elimina vecchi messaggi dal Dispositivo](#delold),
poiché diversi dispositivi possono avere differenti capacità di memoria,
e impostazioni di sistema specifiche come i suoni di notifica.


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

- Le app webxdc non possono inviare dati in internet, o scaricare niente.
- Un'app webxdc può solo scambiare dati all'interno di una chat di Delta Chat, con le sue
copie sui dispositivi dei tuoi corrispondenti. Oltre a questo, è completamente
isolata da internet.
- La privacy che un'app webxdc offre è la privacy della tua chat - fino a che ti
fidi delle persone con cui ti scrivi, ti puoi fidare dell'app webxdc allo stesso modo.
- Questo inoltre significa: può esserci un rischio per la privacy ad usare le app in chat con utenti non fidati.
Esattamente come per gli allegati delle e-mail, le videochiamate o i collegamenti in chiaro:
aprile solo da mittenti di cui ti fidi e non dagli spammer.
Gli spammer possono riuscire ad ottenere qualunque dato tu mandi loro, come il tuo indirizzo IP.


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

Con le Liste Trasmissioni puoi inviare un messaggio a più indirizzi contemporaneamente;
i destinatari non possono rispondere in quella chat.
Le Liste Trasmissioni sono ancora altamente sperimentali
e saranno molto probabilmente rimpiazzate con qualcos'altro, restate sintonizzati :)


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

Nota: 
La modifica degli indirizzi e-mail è temporaneamente disabilitata
a causa delle modifiche in corso al nucleo di DeltaChat.
Dovrebbe essere nuovamente disponibile tra qualche mese.

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


### Vorrei gestire il mio server per Delta Chat. Cosa mi consigliate?

- La maggior parte dei server di posta funzionerà bene. Ma quello che personalmente consigliamo è un
  server relay di chatmail, come descritto [in questo
  articolo del blog](https://delta.chat/en/2023-12-13-chatmail).
- Puoi trovare una [guida all'installazione su GitHub](https://github.com/chatmail/relay).


### Perché devo inserire la mia password E-Mail in Delta Chat? È sicuro?

Come con altri programmi di posta elettronica quali Thunderbird, K9-Mail o Outlook,il
programma ha bisogno della password in modo da poterla utilizzare per inviare mail. Naturalmente, la
password è memorizzata solo sul tuo dispositivo. La password viene trasmessa solo a
il tuo fornitore E-Mail (quando effettui il login), che ha comunque accesso alla tua posta.

Poiché Delta Chat è Open Source, puoi controllare il [Codice
Sorgente](https://github.com/chatmail/core/blob/main/src/login_param.rs)
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


### Delta Chat è compatibile con Proton Mail / Tutanota / Criptext?

- Sì e no.
- No, non puoi utilizzare il tuo profilo Proton Mail, Tutanota o Criptext con Delta
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
vedete il nostro [Rapporto Needfinding e UX](https://delta.chat/en/2019-07-19-uxreport) conclusivo.
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
  per il nostro lavoro in [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
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
