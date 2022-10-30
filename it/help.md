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

By default, Delta Chat shows:

- Messages sent by other Delta Chat users
- Replies to your Delta Chat messages, even if they are "normal e-mails".

Other e-mails don't appear in your app by default. At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well. This is the default setting.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Delta Chat supporta immagini, video e altri allegati?

- Sì. Oltre al testo normale, tutti gli allegati e-mail vengono visualizzati come messaggi separati. I messaggi in uscita ricevono automaticamente gli allegati necessari.


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

- **Archivia chat** se non vuoi più vederle nel tuo elenco. 
 In fondo all'elenco delle chat, nel menu o tramite la ricerca, puoi sempre accedere alle chat archiviate.

- Quando una chat archiviata riceve un nuovo messaggio, a meno che non sia silenziata, **salterà fuori dall'archivio** e tornerà nell'elenco delle chat.
**Le chat silenziate restano archiviate** fino a che non le estrai manualmente.

Per archiviare o fissare una chat, premi a lungo (Android), usa il menu della chat (Android/Desktop) o striscia verso sinistra (iOS);
per silenziare una chat, usa il menu della chat (Android/Desktop) o il profilo della chat (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [private app](#private-apps--webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


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


### What happens if I turn on "Delete old messages from server"?

- By default, Delta Chat stores all messages locally on your device. If you
  e.g. want to save storage space at your mail provider, you can choose to
  delete old messages automatically. They still remain on your device until you
  delete them there, too.
- To turn it on, go to "delete old messages from server" in the "Chats & Media"
  settings. You can set a timeframe between "at once" and "after a year"; this
  way, *all* e-mails will be deleted from the server after that timeframe. 
- Note that if you use Delta Chat on more than one device, you should leave the
  messages on the server, until the other device could download them, too. In
  this case, you should set auto-delete to "after a day" or something similar,
  depending on how often you turn on the other device.


### What happens if I turn on "Delete old messages from device"?

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

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
protette dalla crittografia end-to-end, vedi anche questo  [IETF
RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Posso riutilizzare la mia chiave privata esistente?

- Sì. Il modo migliore è inviare un messaggio di installazione di Autocrypt dall'altro client e-mail. Cerca qualcosa come **Avvia il trasferimento dell'installazione di Autocrypt** nelle impostazioni dell'altro client e segui le istruzioni mostrate lì.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

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

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

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


## Private Apps / webxdc

In Delta Chat, you can share "private apps", attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger. The technical term is [webxdc](https://webxdc.org).


### How private are private apps?

- Private apps can not send data to the Internet, or download anything.
- A private app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a private app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the private app as well.
- This also means: it can be a privacy risk to open private apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get private apps?

- In general, there is no curated appstore and Delta Chat is not responsible
  for private apps or their content. Anyone can share private apps with each
  other without restrictions.
- You can find some example apps on [webxdc.org](https://webxdc.org).
- Many people write their own private apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own private apps?

- Private apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimental Features

We are very grateful about feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. (You
like experiments? Register through "Sign up -> with Delta Chat"!)

### How can I use audio/video calls with Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "videochat instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to your jitsi/BBB room. This
  way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### Che cos'è un gruppo verificato? Perché è sperimentale?

- Un gruppo verificato è una chat che garantisce sicurezza contro un aggressore.
Tutti i messaggi in una chat verificata sono crittografati e2e, e
i membri possono partecipare scansionando un "codice di invito QR". Tutti i membri sono così
collegati tra loro attraverso una catena di inviti, che garantiscono
coerenza crittografica contro gli aggressori alla rete o al fornitore.
Vedi [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
per la Ricerca e Sviluppo alla base di questa funzione.

- As of Oct 2022, "verified groups" remain an experimental feature. It is
  continuously improved and many bugs have been fixed since the original
  introduction in 2018. However, there remain cases, especially with large
  groups where inconsistencies can occur, or messages become unreadable.


### What are Broadcast Lists and how can I use them?

- With a Broadcast List you can send a message to many recipents at once; when
  they reply to you, you get the reply in your direct 1:1 chat with them. The
recipients can't see each other.
- Technically, it is an E-Mail with many recipients in BCC.
- You can turn on the feature in the "experimental features" section in the
  advanced settings. Then you can create a Broadcast List from the "New Chat"
dialog.
- In case you are using more than one device, Broadcast Lists are currently not
  synced between them.
- Messages sent to broadcast lists are not encrypted. Encryption would break
  anonymity, because then all recipients would know who else received it
  (Sending individual mails to everyone would be worse for rate limit and network
  consumption reason).


### How can I share my location with my chat partners?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat
  partners. *But:* to show the map, we need to download map tiles from
  mapbox.com, so if you *view* the map, mapbox.com is asked for the map of a
  specific area. If this is a privacy risk for you, this feature might not be
  for you. We are working on finding a decentralized alternative for Mapbox.
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### What does the experimental database encryption actually protect?

- Right now, the database encryption is still very experimental. Don't rely on
  it for protection, you should additionally use encryption of your operating
  system, if it provides any.
- The database encryption does not yet encrypt the blobs, only the rows and
  columns of the database. This more or less means that your messages are safe,
  but not your attachments.
- For iOS and Android, the encryption keys are stored in the system keychain.
  This means the encryption is as secure as the operating system it's running
  on.
- The Delta Chat desktop client doesn't offer database encryption yet, as there
  is no standard way to store the encryption keys on the different supported
  platforms.


### Why can I choose to only watch the DeltaChat folder?

Questa è un'impostazione sperimentale per alcune persone che stanno sperimentando
regole lato server. Non tutti i provider supportano questo, ma con alcuni puoi spostare
tutti i messaggi con un'intestazione "Chat-Version" nella cartella DeltaChat. Normalmente, questo
verrebbe eseguito dall'app Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- abilitato una regola lato server per spostare tutti i messaggi con l'intestazione Chat-Version nella cartella DeltaChat, e
- aver impostato l'impostazione "Mostra email classiche" su "no, solo chat".

In this case, Delta Chat doesn't need to watch the Inbox, and it's enough to only watch the DeltaChat folder.


### How can I change my account to a different e-mail address?

1. Change your address at the “Password and Account” seetings screen in Delta
   Chat, enter your password (and if necessary, server settings) for the new
   account
2. If possible, make your old e-mail provider forward all e-mails to your new
   email address
3. Tell your contacts that you changed your address. If you write this to a
   verified group, they will acknowledge this automatically.

To learn about the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


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
proposte, in particolare per [EPPD - directory di portabilità del provider di posta elettronica](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) e [AEAP - portabilità dell'indirizzo e-mail](https: //nlnet.nl/project/EmailPorting/) (~90K EUR) che ha portato a un migliore supporto multi-account, contatti QR-code migliorati e configurazioni di gruppo e molti miglioramenti della rete su tutte le piattaforme.

- Per il 2021/2022 stiamo ricevendo un finanziamento *Internet Freedom* (~500K USD) dal
  U.S. Bureau of Democracy, Human Rights and Labor (DRL).
  Questo finanziamento supporta i nostri obiettivi a lungo termine per rendere Delta Chat più utilizzabile
  e compatibile con un'ampia gamma di server di posta elettronica in tutto il mondo, e più resiliente e sicuro
  in luoghi spesso colpiti dalla censura e dalle chiusure di Internet.

- A volte riceviamo donazioni una tantum da privati per
di cui siamo grati. Ad esempio, nel 2021 una persona generosa ci ha trasferito in banca 4K EUR
con il soggetto "keep up the good developments!". Usiamo questi soldi per finanziare
incontri di sviluppo o per prenderci cura di spese ad hoc che non possono essere facilmente previste
per o rimborso da sovvenzioni di finanziamento pubblico.

- Ultimo ma non meno importante, hanno contribuito diversi esperti e appassionati pro-bono
e contribuito allo sviluppo di Delta Chat senza ricevere denaro, o solo
piccole quantità. Senza di loro, Delta Chat non sarebbe dove è oggi, nemmeno
vicino.

Il finanziamento monetario di cui sopra è per lo più organizzato da merlinux GmbH in
Friburgo (Germania) ed è distribuito a più di una dozzina di contributori in tutto il mondo.

I finanziamenti per la seconda metà del 2022 e in particolare per il 2023 sono un problema continuo fonte di preoccupazione. Oltre a richiedere maggiori finanziamenti pubblici, vogliamo diventare più indipendenti dalle fonti di finanziamento legate al governo. Si prega di consultare [Canali di contributo Delta Chat](https://delta.chat/en/contribute) per le possibilità di supporto sia monetario che relativo allo sviluppo.
