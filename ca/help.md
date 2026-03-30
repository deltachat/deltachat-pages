---
title: Preguntes freqüents
lang: ca
render_toc: true
header: Preguntes freqüents
---


## Què és Delta Chat?

Delta Chat és una aplicació de missatgeria instantània fiable, descentralitzada i segura,
disponible per a plataformes mòbils i d'escriptori.

- Creació instantània de **perfils de xat privats**
  amb [retransmissors de chatmail](https://chatmail.at/relays) segurs i interoperables que ofereix lliurament de missatges instantànis i notificacions Push per dispositius iOS i Android.

- Suport omnipresent [multi-perfil](#multiple-accounts) i
[multi-dispositiu](#multiclient) en totes les plataformes
i entre les diferents [aplicacions de chatmail](https://chatmail.at/clients).

- [Apps de xat](#webxdc) interactives per a jocs i col·laboració

- [Encriptació d'extrem a extrem auditada](#security-audits)  protegit contra atacs de xarxa i de servidor.

- Programari lliure i de codi obert, tant pel que fa a l'app com al servidor,
 construït sobre [estàndards d'Internet]({% include standards-url %}).


### Com puc trobar a les persones amb qui xatejar? {#howtoe2ee}

En primer lloc, tingues en compte que Delta Chat és missatgeria privada.
No hi ha descobriment públic: _tu_ decideixes sobre els teus contactes.

- Si estàs **cara a cara** amb la persona,
  toca la icona del **codi QR** <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" />
  a la pantalla principal.  
  Demana que **escanegi** la imatge QR
  des de la seva app de Delta Chat.

- Per configurar el contacte **a distancia**,
des de la mateixa pantalla,
fes clic a "Copiar" o "Compartir" i envia **l'enllaç d'invitació**
a través d'un altre xat privat.

Ara espera que la connexió s'estableixi.

- Si tots dos esteu en línia, aviat veureu un xat
i podreu començar a xatejar de manera segura.

Si un dels dos no està connectat o la connexió és dolenta,
la possibilitat de xatejar es posposa fins que es restableixi la connectivitat.

Enhorabona! A partir d'ara, amb aquest contacte utilitzareu automàticament el [xifrat d'extrem a extrem](#e2ee). Si us afegiu mútuament a [grups](#groups), s'establirà el xifratge punt a punt entre tots els membres.


### Perquè un xat és marcat com a "Sol·licitud"?

Al ser missatgeria privada,
només les amistats i familia que [comparteixis el teu codi QR o l'enllaç d'invitació](#howtoe2ee) poden escriure't.

Les teves amistats poden compartir el teu contacte amb altres amistats,
això es mostra com a <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Sol·licitud</b>

- Cal que **acceptis** la sol·licitud abans de poder respondre.

- També pots **esborrar-ho** si no vols parlar-hi per ara.

- Si esborres una sol·licitud, els missatges futurs d'aquest contacte seguiran apareixen
 com una sol·licitud de missatge, perquè puguis canviar d'idea. Si realment no vols
rebre missatges d'aquesta persona, pots **bloquejar-la**.


### Com puc posar en contacte a dues de les meves amistats?

Adjunta el primer contacte en el xat del segon utilitzant el <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Botó Adjunt → Contacte**.
També pots afegir un petit missatge introductori.

El segon contacte llavors rebrà una **tarjeta**
i hi podrà premer per iniciar una conversa amb el primer contacte.


### Què són els perfils? Com puc canviar entre ells?{#multiple-accounts}

Un perfil és **un nom, una imatge** i informació adicional per xifrar missatges. Un perfil només existeix en els teus dispositius 
i utilitza el servidor per retransmetre missatges.

Durant la instal·lació de Delta Chat es crea un primer perfil.

Després, pots premer a la teva imatge de perfil, a la part superior esquerra, per **Afegir perfils** o **Canviar de perfil**.

Potser vols utilitzar perfils separats per a activitats polítiques, familiars o laborals.

Potser també vols aprendre [com utilitzar el mateix perfil en múltiples dispositius](#multiclient).


### Qui veu la meva imatge de perfil?

Pots afegir una foto de perfil a la teva configuració. Si escrius als teus contactes o els afegeixes mitjançant un codi QR, la veuran automàticament com la teva foto de perfil.

Per motius de privacitat, ningú no veu la teva foto de perfil fins que no els envies un missatge.


Puc establir una biografia/estat amb Delta Chat? {#signature}

Sí, ho pots fer a **Configuració → Perfil → Biografia**. Un cop has enviat un missatge a un contacte, aquest el veurà quan consulti les teves dades de contacte.


### Què signifiquen Fixar, Silencia i Arxivar?

Utilitza aquestes eines per organitzar els teus xats i mantenir-ho tot al seu lloc:

- **Xats fixats** sempre es mantenen a sobre de la llista de xats. Els pots utilitzar per accedir ràpidament als teus xats preferits o per fixar-los temporalment per no oblidar-te d'alguna cosa.

- **Silencia xats** si no vols rebre'n notificacions. Els xats silenciatats continuen sent al seu lloc i igualment es poden fixar.

- **Arxiva xats** si no els vols veure més a la llista de xats.
  Continuen sent accessibles a sobre de la llista de xats o mitjançant la cerca i estan marcats amb un ** <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Arxivat**</b>

- Quan un xat arxivat rep un missatge nou, tret que l'hàgiu silenciat, **sortirà de l'arxiu** i tornarà a la vostra llista de xats.  **Els xats silenciats es mantenen arxivats** fins que els desarxiveu manualment.

Per utilitzar les funcions, mantingueu premut llargament o feu clic amb el botó dret en un xat a la llista de xats.


### Com funcionen els "Missatges Desats" {#save}

**Missatges desats** és un xat que pots utilitzar per recordar i trobar missatges fàcilment.

- A qualsevol xat, prem llargament o clica amb el botó dret un missatge i tria **Desar**

- Els missatges desats estan marcats amb aquest símbol
  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
al costat de la marca horària

- Després, obre el xat "Missatges desats" i veuràs els missatges desats.
  Prement <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
pots tornar al missatge original en el xat d'on prové.

- Finalment, també pots fer servir "Missatges desats" per prendre **notes personals**, obre el xat i escriu alguna cosa o afegeix una imatge, un missatge de veu, etc.

- Ja que els "Missatges Desats" són sincronitzats, és molt pràctic per transferir dades entre dispositius

Els missatges es mantenen desats fins i tot si s'editen o esborren, ja sigui  pel [remitent](#edit), per [neteja del dispositiu](#delold) o per [missatges efímers d'altres xats](#ephemeralmsgs).


### Què significa el punt verd?

Algunes vegades veuràs un **punt verd** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/>
en l'avatar d'un contacte.
Vol dir que **els has vist recentment** en els últims 10 minuts,
ja sigui perquè t'han enviat un missatge o han enviat una confirmació de lectura.

Per tant, no és un estat en línia en temps real
i els altres tampóc veuran sempre que estàs "en línia".


Què signifiquen les marques de verificació que es mostren al costat dels missatges enviats?

- **Una marca de verificació** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/>
  significa que el missatge s'ha enviat correctament al [retransmissor](#relays).

- **Dos tics** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/> 
  indiquen que el teu contacte ha llegit el missatge.

En [grups](#groups), la segona marca de verificació significa que almenys un membre ha confirmat que ha llegit el missatge.

Només rebràs la segona marca de verificació si tant tu com un dels destinataris que llegeixi el missatge teniu activats **Configuració → Xats → Rebuts de lectura**.


### Corregir errors tipogràfics i esborrar missatges després d'enviar {#edit}

- Pots modificar el text dels teus missatges després d'enviats. Per a fer-ho, prem llargament o clica amb el botó dret el missatge i tria **Modifica** o <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>.

- Si has enviat un missatge per error, des del mateix menú, tria **Esborra el missatge** i després **Esborra per a tothom**.

Mentres que els missatges editats tindran la paraula "Editat" al costat de la marca horaria, els missatges esborrats seran esborrats sense cap marcador en el xat. No s'envien notificacions i no hi ha límit de temps.

Tingues en compte que el missatge original pot haver estat rebut pels membres del xat i poden haver respost, reenviat, desat, fet una captura de pantalla o copiat el missatge.


### Com es gestiona la qualitat dels fitxers multimèdia? {#mediaquality}

Es poden enviar imatges, vídeos, fitxers, missatges de veu, etc. utilitzant els botons d'<img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Adjunt-**
o <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Missatge de veu**.

- Per defecte, la compressió assegura una **entrega ràpida i eficient** que respecta els límits d'emmagatzematge i transferència de dades.

- A les zones amb pitjor connexió, pots triar una compressió més alta anant a **Configuració → Xats i multimèdia → Qualitat del contingut multimèdia sortint**.

- Si necessites enviar **fitxers multimedia** amb la qualitat original, fes-ho a través de <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Adjunta → Fitxer** al xat.
 Utilitza aquest mètode amb moderació, ja que fent-ho així s'augmenta considerablement lel consum de dades tant per a tu com per a tots els destinataris del xat.


### Com funcionen els missatges efímers? {#ephemeralmsgs}

Pots activar els «missatges efímers» a la configuració d'un xat, a la part superior dreta de la finestra de xat, seleccionant un interval de temps entre 5 minuts i 1 any.

Fins que la configuració es torni a desactivar, l'aplicació Delta Chat de cada membre de la conversa s'encarregarà d'eliminar els missatges després de l'interval de temps seleccionat. L'interval de temps comença quan el destinatari veu el missatge per primera vegada a Delta Chat. Els missatges s'eliminen tant als servidors com a les aplicacions.

Tingueu en compte que podeu confiar en els missatges efímers només si confieu en els vostres interlocutors; els interlocutors maliciosos poden fer fotos o d'una altra manera, desar, copiar o reenviar missatges abans que s'esborrin.

A part d'això, si un interlocutor desinstal·la Delta Chat, els missatges (de tota manera xifrats) poden trigar més a ser eliminats del seu servidor.


### Què passa si activo "Esborra els missatges del dispositiu"?{#delold}

Si vols estalviar espai d'emmagatzematge al dispositiu, pots triar d'esborrar automàticament els missatges antics.

Per activar-ho, ves a **Configuració → Xats → Esborra missatges del dispositiu**. Podeu establir un interval de temps entre "d'aquí a una hora" fins a "d'aquí a un any"; d'aquesta manera, *tots* els missatges s'esborraran del teu dispositiu tan bon punt passi el temps indicat.


### Com puc esborrar el meu perfil de xat? {#remove-account} 

Si estàs fent servir més d'un perfil de xat, en pots eliminar de manera individual al menú superior de canvi de perfil (a Android i iOS),
o a la barra lateral amb un clic amb el botó dret (a l'aplicació d'escriptori).
Els perfils de xat només s'eliminen del dispositiu des del qual s'ha eliminat.
Aquell perfil de xat en altres dispositius continuarà funcionant. 

Si utilitzes un sol perfil de xat per defecte, directament pots desinstal·lar l'aplicació. Això igualment desencadenarà l'eliminació automàtica de totes les dades d'adreça associades al servidor de chatmail.
Per a més informació, consulta [nine.testrun.org address-deletion](https://nine.testrun.org/info.html#account-deletion) 
o la pàgina corresponent del [servidor de chatmail de tercers](https://chatmail.at/relays) que hagis triat.


## Grups {#groups}

Els grups permeten que diverses persones xategin juntes de manera privada amb **igualtat de drets**.

Qualsevol pot canviar el nom o l'avatar del grup, [afegir o eliminar membres](#addmembers), establir [missatges efímers](#ephemeralmsgs) i [esborrar els seus propis missatges](#edit) als dispositius de tots dels membres.

Com que tots els membres tenen els mateixos drets, els grups funcionen millor entre **amics i familiars de confiança**.


### Creació d'un grup

- Selecciona **Xat nou**, el botó circular amb un '+' que hi ha abaix de la llista de contactes i llavors **Grup nou** a la nova finestra que ha aparegut.

- A la pantalla següent, selecciona els **membres del grup** i defineix un **nom del grup**. També pots seleccionar un **avatar del grup**.

- Quan escrius el **primer missatge** al grup, tots els membres en són informats i poden respondre-hi (mentres no escriguis cap missatge al grup, el grup és invisible per als membres).


### Afegeix i elimina membres {#addmembers}

Tots els membres del grup tenen **els mateixos drets**.
Per aquest motiu, tothom pot esborrar qualsevol membre o afegir-ne de nous.

- Per **afegir o eliminar membres**, toca el nom del grup al xat i selecciona el membre que vulguis afegir o eliminar.

- Si el membre encara no és a la teva llista de contactes, però està **en persona**, des de la mateixa pantalla, mostra un **codi QR**.  
  Demana a la persona que **escanegi** la imatge QR amb la seva aplicació de Delta Chat prement
 <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> a la pantalla principal.

- Per afegir un nou contacte de manera **remota**,
  feu clic a "Copia" o "Comparteix" i envia l'**enllaç d'invitació**
  a través d'un altre xat privat amb qui et vulguis comunicar.

El codi QR i l'enllaç d'invitació es poden utilitzar per afegir diversos membres.
No obstant això, com que els grups són [per a persones de confiança](#groups), evita compartir-los públicament.


### M'he esborrat a mi mateix per accident

Com que ja no formes part del grup, no et pots tornar a afegir. 
Tot i així, cap problema, només has de demanar a qualsevol altre membre del grup que et torni a afegir.


### Ja no vull rebre més missatges d'un grup.

- O bé elimina't de la llista de membres o bé elimina tot el xat. 
 Si vols tornar a unir-te al grup més endavant, demana a un altre membre del grup que et torni a afegir.

Com a alternativa, també pots silenciar un grup, així rebràs tots els missatges i encara podràs escriure, però ja no rebràs notificacions de cap missatge nou.

### Clonar un grup

Podeu duplicar un grup per iniciar una discussió separada o per excloure'n membres sense que s'adonin.

- Obre el perfil del grup i prem **Clonar xat** (Android/iOS),
  o fes clic amb el botó dret al grup des de la llista de xats (escriptori).

- Estableix un nom nou, tria un avatar i ajusta la llista de membres si cal.

El grup nou és **totalment independent** de l'original, que continua funcionant com abans.


### Quants membres poden participar en un sol grup?

A nivell tècnic no hi ha un límit fixat, però no es recomana superar els 150 membres.

A mesura que els grups es fan més grans, poden esdevenir socialment inestables i potser necessiten una jerarquia - on Delta Chat és un sistema de missatgeria privada per parlar entre [entre iguals](#groups).
Visita [el nombre de Dunbar](https://en.wikipedia.org/wiki/Dunbar%27s_number) per a més informació.


## Apps de xat {#webxdc}

Podeu enviar aplicacions a un xat: jocs, editors, enquestes i altres eines. Això converteix Delta Chat en un sistema de missatgeria realment extensible.


### On puc trobar les apps de xat?

- En un xat, fent servir <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Botó d'Adjuntar → App**

- També podeu [crear la vostra pròpia aplicació](#create-xdc) i adjuntar-la fent servir el botó <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Adjuntar fitxer → File**


### Quin nivell de privacitat tenen les aplicacions de xat?

- Les apps de xat no poden enviar dades a Internet o descarregar res.

- Una app de xat només pot intercanviar dades dins d'un xat i amb les
còpies als dispositius dels teus companys de xat. Més enllà d'això,
està completament aillada d'Internet.

- La privacitat d'una app de xat és la privacitat del teu xat, 
si confies amb la gent amb qui xateges, pots confiar amb la app de xat.

- Això també vol dir: igual que amb els enllaços web, no obris aplicacions de contactes que no confiis.


### Com puc crear la meva app de xat? {#create-xdc}

- Les apps de xat són fitxers zip amb extensió `.xdc` que contenen codi html, css, i javascript.

- Per començar, pots ampliar l'aplicació d'exemple [Hola Món](https://github.com/webxdc/hello).

- Tot el que necessites saber està escrit a la [documentació de Webxdc](https://webxdc.org/docs).

- Si tens cap pregunta, pots preguntar a altres persones amb experiència al [Fòrum de Delta Chat](https://support.delta.chat/c/webxdc/20).


## Lliurament de missatges instantanis i Notificacions Push {#instant-delivery}

Què són les notificacions push? Com puc rebre missatges instantanis?

Les notificacions push s'envien pels "serveis push" d'Apple i Google al dispositiu d'un usuari, així una aplicació de Delta Chat inactiva, quan és necessari, pot obtenir missatges en segon pla i mostrar notificacions al telèfon d'un usuari.

Les Notificacions Push funcionen amb tots els servidors de [chatmail](https://delta.chat/chatmail) activats

- Els dispositius iOS, integrant-se amb els serveis Apple Push.

- Dispositius Android, mitjançant la integració amb el servei de notificacions Push de Google FCM, incloent-hi els dispositius que utilitzen [microG](https://microg.org) al telèfon enlloc del codi propietari de Google.


Les notificacions push estan habilitades en dispositius iOS? Hi ha alguna alternativa?

Sí, Delta Chat utilitza automàticament les notificacions push per als perfils de [chatmail](https://delta.chat/chatmail).
I no, no hi ha cap alternativa als telèfons d'Apple per aconseguir la entrega instantània de missatges perquè els dispositius d'Apple no permeten que Delta Chat reculli dades en segon pla.
Les notificacions push s'activen automàticament per als usuaris d'iOS perquè [el sistema de notificacions push de Delta Chat que preserva la privacitat](#privacy-notifications) no exposa a Apple dades que ja no tingui.


Les notificacions push estan habilitades o són necessàries en dispositius Android?{#android-push}

Si un "Servei Push" està disponible, Delta Chat activa les notificacions Push per aconseguir l'entrega instantània de missatges per a tots els usuaris de chatmail.

A la secció "Notificacions" de la configuració de "Entrega immediata" de Delta Chat, pots canviar la configuració següent afectant a tots els perfils de xat:

- Utilitza la connexió en segon pla: si no fas servir un servei Push, pots desactivar les «optimitzacions de bateria» per a Delta Chat, la qual cosa li permetrà recollir missatges en segon pla. No obstant això, hi pot haver retards que vagin de minuts a hores.
Alguns proveïdors d'Android poden restringir completamenta les aplicacions (vegeu [dontkillmyapp.com](https://dontkillmyapp.com)) i és possible que Delta Chat no mostri els missatges entrants fins que no obriu manualment l'aplicació de nou.
  
- Forçar connexió en segon pla: Aquesta és l'opció predeterminada si les opcions anteriors no estan disponibles o no aconsegueixen una «entrega instantània». Activar-la provoca una notificació permanent al telèfon, que amb telèfons Android recents, a vegades, es pot "minimitzar".

Ambdues opcions de "Connexió en segon pla" són eficients energèticament i segures de provar si experimenteu llargs retards en l'entrega de missatges.


### Quina privacitat tenen les notificacions push de Delta Chat?{#privacy-notifications}

El suport de les notificacions Push de Delta Chat evita la filtració d'informació privada. No filtra les dades del perfil, l'adreça IP ni el contingut dels missatges (ni tan sols els xifrats) a cap sistema implicat en el lliurament de notificacions push.

Així és com les aplicacions de Delta Chat gestionen l'enviament de notificacions Push:

- Una aplicació de Delta Chat obté localment un "token de dispositiu", el xifra i l'emmagatzema al servidor [chatmail](https://delta.chat/chatmail).

- Quan un servidor de [chatmail](https://delta.chat/chatmail) rep un missatge per a un usuari de Delta Chat, envia el token de dispositiu xifrat al proxy central de notificacions de Delta Chat.

- El proxy central de notificacions de Delta Chat desxifra el token del dispositiu i el reenvía al servei Push corresponent (Apple, Google, etc.), sense conèixer mai la IP ni les dades de perfil dels usuaris de Delta Chat.

- El servei central de notificacions push (Apple, Google, etc.) desperta l'aplicació Delta Chat al teu dispositiu per comprovar si hi ha missatges nous en segon pla. No té coneixement de les dades de perfil del dispositiu que desperta. Els serveis push centrals d'Apple/Google mai no veuen cap dada de perfil (ni del remitent ni del destinatari) i tampoc veuen el contingut de cap missatge (ni tan sols veuen la seva forma xifrada).


El proxy de notificacions central de Delta Chat [és petit i està totalment implementat en Rust](https://github.com/deltachat/notifiers) i oblida els tokens del dispositiu tan bon punt Apple/Google/etc. els processen, normalment en qüestió de mil·lisegons.

Tingues en compte que el token del dispositiu està xifrat entre les aplicacions i el proxy de notificacions, però no està signat. D'aquesta manera, el proxy de notificacions no veu mai les dades del perfil, les adreces IP ni cap informació d'identitat criptogràfica associada al dispositiu de l'usuari(token). 

Com a resultat d'aquest disseny global de privadesa, ni tan sols la confiscació d'un servidor de chatmail, o la confiscació completa del proxy central de notificacions del Delta Chat, revelaria informació privada que els serveis Push no tinguin ja.


Per què Delta Chat s'integra amb serveis centralitzats i propietaris de push d'Apple/Google?

Delta Chat és un missatger descentralitzat, gratuït i de codi obert amb lliure elecció de servidor, però volem que els usuaris puguin experimentar de manera fiable "l'entrega instantània" dels missatges, com ho fan amb les aplicacions de WhatsApp, Signal o Telegram, sense haver de fer preguntes previes que són més adequades per a usuaris experts o desenvolupadors.

Tingues en compte que Delta Chat té un [petit sistema de notificacions push que preserva la privacitat](#privacy-notifications) que aconsegueix la "l'entrega immediata" de missatges per a tots els servidors de chatmail, inclòs un de potencial [que podríeu configurar vosaltres mateixos sense el nostre permís](https://delta.chat/chatmail#selfhosted). Benvinguts al poder de la xarxa interoperable de retransmissors de chatmail :)



## Multi-client {#multiclient}

### Puc utilitzar Delta Chat en diversos dispositius alhora?

Sí. Pots utilitzar el mateix perfil en diferents dispositius:

- Assegura't que ambdós dispositius estan a la mateixa Wi-Fi o xarxa.

- Al primer dispositiu, aneu a **Configuració → Afegeix un segon dispositiu**, desbloquegeu la pantalla si cal i espereu un moment fins que es mostri un codi QR.

- En el segon dispositiu, [instal·lar Delta Chat](https://get.delta.chat)

- Al segon dispositiu, obriu Delta Chat, selecciona **Afegeix com a segon dispositiu** i escaneja el codi QR del dispositiu antic.

- La transferència hauria de començar al cap d'uns segons i, durant la transferència, tots dos dispositius mostraran el **progrés**.
  Espera que s'acabi en ambdós dispositius.

A diferència de molts altres missatgers, després d'una transferència correcta, ambdós dispositius són completament independents. Cap dispositiu necessita a l'altre per funcionar.


### Resolució de problemes

- Verifiqueu que ambdós dispositius estiguin a la **mateixa Wi-Fi o xarxa**

- A **Windows**, aneu a «Tauler de control / Xarxa i Internet»
  i assegureu-vos que **Xarxa privada** estigui seleccionat com a «Tipus de perfil de xarxa»
  (després de la transferència, podeu tornar a canviar al valor original)

- A **iOS**, assegura't que s'ha concedit l'accés a "Configuració del sistema / Aplicacions / Delta Chat / **Xarxa local**".

- A **macOS**, activa "Preferències del sistema / Privacitat i seguretat / **Xarxa local** / Delta Chat"

- El vostre sistema pot tenir un "firewall personal",
  el cual es conegut per provocar problemes (especialment a Windows).
  **Desactiva el firewall personal** per a Delta Chat a ambdós extrems i torna-ho a provar

- **Xarxes per a convidats**: és possible que no permetin que els dispositius es comuniquin entre si.
  Si és possible, utilitza una xarxa que no sigui per a convidats.

- Si encara tens problemes per utilitzar la mateixa xarxa, prova d'obrir el **Punt d'accés mòbil** en un dispositiu i connectar-te a aquesta xarxa Wi-Fi des de l'altre.

- Assegureu-vos que hi hagi **espai d'emmagatzematge suficient** al dispositiu de destí

- Si la transferència ha començat, assegura't que els dispositius **romanguin actius** i no s'adormin.
  No surtis de Delta Chat.
  (ens esforcem molt perquè l'aplicació funcioni en segon pla, però [els sistemes solen tancar les aplicacions](https://dontkillmyapp.com), malauradament)

- Delta Chat ja ha **iniciat la sessió** al dispositiu de destinació?
  Pots utilitzar diversos perfils per dispositiu, només [afegeix un altre perfil](#multiple-accounts)

- Si encara tens problemes o si **no pots escanejar un codi QR**
  prova la **transferència manual** que es descriu a continuació


### Transferència Manual {#backup}

Aquest mètode només es recomana si «Afegeix un segon dispositiu», tal com s'ha descrit anteriorment, no funciona.

- Al dispositiu antic, ves a **Configuració → Xats → Exporta còpia de seguretat**. Introdueix el PIN, el patró o la contrasenya de desbloqueig de la pantalla. Llavors pots clicar a «Comença la còpia de seguretat». Això desa el fitxer de còpia de seguretat al dispositiu. Ara l'has de transferir a l'altre dispositiu d'alguna manera.

- Al dispositiu nou, tria **Ja tinc un perfil → Restaurar còpia de seguretat**.
  Si feu servir iOS i teniu dificultats,
  [aquesta guia](https://support.delta.chat/t/import-backup-to-ios/1628) et pot ajudar.

Ja esteu sincronitzats i podeu utilitzar els dos dispositius per enviar i rebre missatges xifrats d'extrem a extrem amb els vostres contactes.


### Hi ha plans per introduir un client web de Delta Chat?

- No hi ha plans immediats, però sí algunes idees preliminars.
- Hi ha 2-3 vies per introduir un client web de Delta Chat, però totes requereixen una feina important. De moment, ens centrem a obtenir versions estables a totes les botigues d'aplicacions (Google Play/iOS/Windows/macOS/repositoris de Linux) com a aplicacions nadiues.
- Si necessites un client web perquè no et permet instal·lar programari a l'ordinador amb el què treballes, pots fer servir el client d'escriptori portàtil per a Windows o l'AppImage per a Linux. Els pots trobar a [get.delta.chat](https://get.delta.chat).


## Avançat

### Funcionalitats experimentals {#experiments}

A **Configuració → Avançat → Funcions experimentals** podeu provar les funcions en què estem treballant.

Les característiques poden ser **inestables** i poden ser **canviades o eliminades**.

Pots trobar més informació i donar la teva opinió al [Fòrum](https://support.delta.chat).


### Què són els retransmissors? {#relays}

Els retransmissors s'utilitzen per guardar missatges temporalment en el cas que el teu dispositiu estigui fora de línia. Els retransmissors són servidors barats i tontos.

Per defecte, després de la instal·lació, es **configura automàticament** un retransmissor,
així que no us te n'has de preocupar.
No obstant això, si vols,
pots configurar els retransmissors a **Configuració → Avançat → Retransmissors**:

- Pots **afegir** un retransmissor escanejant el seu codi QR;
  [chatmail.at/relays](https://chatmail.at/relays) mostra alguns de coneguts.
  Si tens diversos retransmissors, rebràs missatges en tots ells.
  Els contactes aprenen automàticament quins són els teus retransmissors actuals quan els hi envies un missatge.

- Prem un retransmissor per establir-lo com a **utilitzat per enviar**.

- Si **esborres** un retransmissor,
  els contactes que només coneguin aquest retransmissor pot ser que no et puguin contactar fins que no els enviis un missatge de nou.
  Per continuar sent localitzable mentrestant, tria **Amagar dels contactes** al quadre de diàleg de confirmació
  en lloc d'esborrar-lo immediatament.

- Per **mostrar** de nou un retransmissor amagat, toca'l.

Per a més detalls i possibilitats futures dels retransmissors, pots seguir les discussions al [Fòrum](https://support.delta.chat).


### Puc utilitzar una adreça de correu electrònic clàssica amb Delta Chat?

Sí, però només si l'adreça de correu electrònic s'utilitza exclusivament per a [clients de correu electrònic](https://chatmail.at/clients).

No es permet compartir l'ús d'una adreça de correu electrònic amb aplicacions que no siguin de chatmail o correu-e basat en web, per les raons següents:

Les aplicacions que no són de chatmail, en general, no aconsegueixen oferir xifratge automàtic d'extrem a extrem per correu electrònic als seus usuaris, mentre que les aplicacions i els retransmissors de chatmail apliquen de manera omnipresent el xifrat d'extrem a extrem i els estàndards de seguretat.

- Les aplicacions que no són de chatmail utilitzen servidors de correu electrònic com a arxiu de missatges a llarg termini, mentre que els clients de chatmail utilitzen servidors de correu electrònic per a la retransmissió de missatges instantanis efímers.

- Donar suport a tota la varietat de configuracions de correu electrònic clàssiques requeriria un esforç considerable de desenvolupament i manteniment, i dificultaria fer que la missatgeria basada en chatmail fos més resilient, fiable i ràpida.

Com puc configurar un perfil de xat amb una adreça de correu electrònic clàssica com a retransmissor? {#classic-email}

En primer lloc, **si us plau, no utilitzis la mateixa adreça de correu electrònic clàssica que també feu servir en aplicacions de correu clàssic** a menys que estigueu preparats per gestionar missatges xifrats a la bústia d'entrada, notificacions dobles, correus electrònics eliminats per accident o molèsties similars.

Pots configurar una adreça de correu electrònic per xatejar a **Perfil nou → Utilitza un altre servidor → Utilitza el correu clàssic com a retransmissor**.
Tingueu en compte que els proveïdors de correu clàssic generalment no admeten [Notificacions push](#instant-delivery)
i tenen altres limitacions, visita [Vista general dels proveïdors](https://providers.delta.chat).
Chatmail utilitza la safata d'entrada (INBOX) per defecte per a retransmetre; assegureu-vos que la configuració del proveïdor també ho faci.
Un perfil de xat que utilitza una adreça de correu electrònic clàssica permet enviar i rebre missatges sense xifrar.
Aquests missatges, i els xats en què apareixen, estan marcats amb una icona de correu electrònic
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### Vull gestionar el meu propi servidor per a Delta Chat. Què em recomanes?

Qualsevol configuració d'un servidor de correu electrònic que funcioni correctament serà suficient, excepte si els dispositius dels vostres usuaris requereixen que les [notificacions Push](#instant-delivery) de Google/Apple funcionin correctament.

Generalment recomanem [configurar un retransmissor de chatmail](https://chatmail.at/doc/retransmissor/getting_started.html). 
[Chatmail](https://chatmail.at) és un projecte impulsat per la comunitat que engloba tant la configuració de retransmissors com els [desenvolupaments del nucli en Rust](https://github.com/chatmail/core) que alimenten als [clients de Chatmail](https://chatmail.at/clients), dels quals Delta Chat és el més conegut. 


### Què és "Envia estadístiques als desenvolupadors de Delta Chat"? {#statssending}

Ens agradaria millorar Delta Chat amb la teva ajuda, per això Delta Chat per a Android et pregunta si vols enviar estadístiques d'ús anònimes.

Ho pots activar i desactivar a **Configuració → Avançat → Envia estadístiques als desenvolupadors de Delta Chat**.

Quan ho activis, les estadístiques setmanals s'enviaran automàticament a un bot.

Ens interessen, per exemple, estadístiques com ara:

Quants contactes s'introdueixen escanejant personalment un codi QR?

- Quines versions de Delta Chat s'estan utilitzant?

- Quins errors es produeixen pels usuaris?

No recollirem cap informació personalment identificable sobre tu.


### M'interessen els detalls tècnics. Em pots dir-ne més?

Mira a [Estàndards utilitzats a Delta Chat]({% include standards-url %}).



## Encriptació i Seguretat {#e2ee}

### Quins estàndards s'utlitzen per una xifrat d'extrem a extrem?

Delta Chat utilitza un [subconjunt segur de l'estandard OpenPGP](#openpgp-secure) Oferint xifrat d'extrem a extrem automàtic utilitzant aquests protocols:

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  per intercanviar informació de la configuració de xifratge mitjançant l'escaneig de codis QR o "enllaços d'invitació". 

- S'utilitza [Autocrypt](https://autocrypt.org) per establir automaticament xifrat d'extrem a extrem entre contactes i tots els membres d'un grup de xat.

- [Autocrypt v2](https://autocrypt2.org), amb la implementació completa prevista per al 2026, aportarà xifratge resistent post-quantic i forward secrecy. 

- [Compartir un contacte en un xat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message) permet a qui ho rep, utilitzar xifrat d'extrem a extrem amb el contacte.

Delta Chat no consulta, publica ni interactua amb cap servidor de claus OpenPGP. 

### Com puc saber si els missatges són xifrats d'extrem a extrem? {#whene2e}

Tots els missatges a Delta Chat són **xifrats d'extrem a extrem per defecte**. Desde el llançament de la versió 2 de Delta Chat (Juliol 2025) ja no hi haurà més candaus o marques semblants als missatges xifrats d'extrem a extrem.

### Encara es pot rebre missatges sense xifrat d'extrem a extrem?

Si utilitzes el [retransmissor de chatmail](https://chatmail.at/relays) per defecte, no és possible rebre o enviar missatges sense xifrar d'extrem a extrem.

Si enlloc d'això utilitzes un [servidor de correu clàssic](#classic-email), podràs enviar i rebre missatges amb o sense xifrat d'extrem a extrem. Els missatges que no vagin xifrats d'extrem a extrem es marcaran amb la icona de correu-e <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### Què significa la marca de verificació verda en un perfil de contacte? {#e2eeguarantee}

El perfil d'un contacte pot mostrar una marca de verificació verda
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
i la frase «Presentat per».
Cada contacte amb marca de verificació verda o bé va haver-hi un [escaneig de QR](#howtoe2ee) directe amb tu
o va ser presentat per un altre contacte amb marca de verificació verda.
Les presentacions es produeixen automàticament quan s'afegeixen membres als grups. 
La persona que afegeix un contacte amb marca de verificació verda a un grup amb només membres amb marca de verificació verda 
esdevé un presentador. 
En el perfil d'un contacte, podeu prémer repetidament el text «Afegit per...»
fins que arribeu a la persona amb qui vau fer directament un [escaneig de QR](#howtoe2ee).

Per a una discussió més profunda sobre el "xifratge d'extrem a extrem garantit", consulteu els [protocols Secure-Join](https://securejoin.delta.chat/en/latest/new.html) i llegiu específicament sobre els "Grups Verificats", el terme tècnic que designa el que aquí s'anomenen xats amb "marcat de verificació verda" o de "xifratge d'extrem a extrem garantit".

### Els adjunts (imatges, fitxers, audio, etc.) es xifren d'extrem a extrem?

Sí.

Quan parlem d'un "missatge xifrat d'extrem a extrem", sempre ens referim a un missatge xifrat sencer, incloent-hi  tots els fitxers adjunts i les metadades d'aquests, com ara els noms de fitxer.


### És OpenPGP segur? {#openpgp-secure}

Sí, Delta Chat utilitza un subconjunt segur d'OpenPGP que requereix que tot el missatge estigui correctament xifrat i signat. Per exemple, les «signatures separades» no es consideren segures.

OpenPGP no és insegur per si mateix.
La majoria dels problemes de seguretat d'OpenPGP que es discuteixen públicament
en realitat provenen d'una mala usabilitat o de males implementacions d'eines o aplicacions (o de totes dues coses).
És especialment important distingir entre OpenPGP, l'estàndard de xifratge de l'IETF,
i GnuPG (GPG), una eina de línia d'ordres que implementa OpenPGP.
Moltes crítiques públiques a OpenPGP en realitat parlen de GnuPG, que Delta Chat mai no ha utilitzat. 
Delta Chat utilitza més aviat la implementació de Rust d'OpenPGP [rPGP](https://github.com/rpgp/rpgp), disponible com a [paquet "pgp" independent](https://crates.io/crates/pgp), i [auditada des del punt de vista de la seguretat el 2019 i el 2024](#security-audits). 

Tenim com a objectiu, juntament amb altres implementadors d'OpenPGP, millorar encara més les característiques de seguretat implementant el [nou IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/), que afortunadament es va adoptar a l'estiu del 2023. 


### Heu considerat utilitzar alternatives a l'OpenPGP per al xifratge d'extrem a extrem? {#openpgp-alternatives}

Sí, estem seguint iniciatives com [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security), però adoptar-les significaria trencar la interoperabilitat del xifrat d'extrem a extrem. Per tant, no seria una decisió fàcil de prendre i hi hauria d'haver millores tangibles per a les usuaries. 

Delta Chat adopta un enfocament holístic de "seguretat usable" i treballa amb una àmplia gamma de col·lectius activistes, així com amb investigadors de renom com [TeamUSEC](https://teamusec.de), per millorar els resultats reals dels usuaris davant de les amenaces de seguretat. El protocol i estàndard de xifrat d'extrem a extrem és només una part dels "resultats per a l'usuari", vegeu les respostes a les preguntes sobre [confiscació del dispositiu](#device-seizure) i [metadades dels missatge](#message-metadata). 


### És Delta Chat vulnerable a EFAIL?

No, [Delta Chat mai va ser vulnerable a EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
perquè la seva implementació d'OpenPGP [rPGP](https://github.com/rpgp/rpgp) 
utilitza el Codi de Detecció de Modificacions en xifrar missatges
i retorna [un error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
si el Codi de Detecció de Modificacions és incorrecte.

Delta Chat tampoc no va ser mai vulnerable a l'atac EFAIL de «Direct Exfiltration» perquè només desxifra els missatges 'multipart/encrypted' que contenen exactament una part xifrada i signada, tal com es defineix a l'especificació Autocrypt Level 1. 


Els missatges marcats amb la icona del correu electrònic estan exposats a Internet? {#tls}

Si envieu o rebeu missatges de correu electrònic sense xifratge de punta a punta (fent servir un servidor de correu electrònic clàssic), encara estan protegits de les companyies de telefonia mòbil o per cable, que no poden llegir ni modificar els vostres missatges de correu electrònic. Però tant el vostre proveïdor de correu electrònic com el del destinatari poden llegir, analitzar o modificar els vostres missatges, inclosos els fitxers adjunts. 

Delta Chat utilitza per defecte un [xifrat TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) estricte, que protegeix les connexions entre el teu dispositiu i el teu proveïdor de correu electrònic. Tota la gestió de TLS de Delta Chat ha estat objecte d'una [auditoria de seguretat](#security-audits) independent. A més a més, la connexió entre el vostre proveïdor de correu electrònic i el del destinatari també sol xifrar les comunicacions. Si els servidors de correu electrònic implicats admeten [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461), aleshores es xifraran les comunicacions entre els proveïdors de correu electrònic, i en aquest cas les comunicacions de Delta Chat mai no estaran exposades en text pla a Internet, fins i tot si el missatge no estava xifrat d'extrem a extrem.


### Com protegeix Delta Chat les metadades dels missatges? {#message-metadata}

A diferència de la majoria d'altres missatgers, 
les aplicacions de Delta Chat no emmagatzemen cap metadada sobre contactes o grups als servidors, ni tan sols en forma xifrada. 
En canvi, totes les metadades dels grups estan xifrades d'extrem a extrem i s'emmagatzemen només als dispositius dels usuaris finals. 

Per tant, els servidors només poden veure:

- Adreces de l'emissor i del receptor, generades aleatòriament per defecte
- Mida del missatge

Totes les altres metadades del missatge, els contactes i els grups estan a la part xifrada d'extrem a extrem dels missatges.

### Com protegir les metadades i els contactes quan un dispositiu és confiscat? {#confiscació-dispositiu}

Tant per protegir-se dels servidors que recullen metadades com per a l'amenaça de confiscació d'un dispositiu, recomanem utilitzar un [retransmissor de chatmail](https://chatmail.at/relays) per crear perfils de xat amb adreces aleatòries per al transport. 
Tingueu en compte que les aplicacions de Delta Chat a totes les plataformes admeten múltiples perfils, de manera que podeu utilitzar fàcilment perfils específics de cada situació al costat del vostre perfil "principal", amb la certesa que totes les seves dades, juntament amb totes les metadades, s'eliminaran. A més, si un dispositiu és confiscat, els contactes de xat que utilitzen perfils de curta durada no es podran identificar fàcilment. 


### Qui veu la meva Adreça IP?

El [retransmissor](#relays) utilitzat necessita saber la teva adreça IP, de vegades també la del dispositiu del teu contacte si tens una [trucada](#experiments) o comparteixes alguna [apps](#webxdc).

Les adreces IP són necessàries per a la connectivitat i l'eficiència.
Ni es guarden ni s'exposen.
Tingues en compte que l'adreça IP no és com una adreça detallada que dones a un servei de missatgeria,
sinó que és molt més genèrica, i sovint només defineix la regió o el país.

Així és com funcionen per defecte internet i altres missatgers, no oferim opcions ni fem preguntes per endavant.

Si consideres la teva adreça IP un risc de seguretat o privacitat, et recomanem utilitzar una VPN, combinada amb el mode de bloqueig del sistema. Buscar opcions a totes les aplicacions del sistema deixarà forats. Per exemple, prémer un enllaç exposa les adreces IP a tercers desconeguts i és, de llarg, el risc més gran.


### Delta Chat admet "Remitent Segellat""? {#sealedsender}

No, encara no.

Signal va introduir ["Sealed Sender" el 2018](https://signal.org/blog/sealed-sender/) per mantenir la seva infraestructura de servidors desconeixedora de qui envia un missatge a un conjunt de destinataris. És especialment important perquè el servidor de Signal coneix el número de mòbil de cada compte, que normalment està associat a una identitat d'un document de passaport.

Encara que [els retransmissors de chatmail](https://chatmail.at/relays) 
no demanen cap dada privada (incloent-hi cap número de telèfon), 
tot i així podria ser convenient protegir les metadades relacionals entre adreces. 
No preveiem problemes més grans a l'utilitzar adreces aleatòries d'un sol ús per a l'enviament segellat però encara no s'ha acordat prioritzar-ne la implementació.

### Delta Chat implementa Perfect Forward Secrecy? {#pfs}

Encara no, però arribarà amb [Autocrypt v2](https://autocrypt2.org). 

Delta Chat actualment no implemente Perfect Forward Secrecy (PFS).
Això vol dir que si la teva clau privada de dexifrat es filtra, i algú ha capturat els teus missatges anteriors en trànsit, podrà desxifrar-los i llegir-los amb la clau de desxifrat filtrada.
Tingues en compte que Forward Secrecy només millora la seguretat si elimines els missatges del teu dispositiu. Sinó, si algú obté les teves claus de desxifrat, normalment també podrà accedir a tots els teus missatges no eliminats i ni tan sols necessita desxifrar cap missatge capturat anteriorment. 

[Autocrypt v2](https://autocrypt2.org), es preveu la seva implementació completa el 2026, proporcionarà una eliminació fiable (secretesa anticipada) mitjançant la rotació automàtica de claus.
Aquest enfocament s'especifica en l'esborrany [Autocrypt v2 OpenPGP Certificates](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/). 

### Delta Chat implementa Criptografia Post-Quàntica? {#pqc}

Encara no, però ho tindrem amb [Autocrypt v2](https://autocrypt2.org).

[Autocrypt v2](https://autocrypt2.org), amb una implementació completa prevista per al 2026, portarà xifratge resistent als ordinadors quàntics per protegir-se dels atacs d'aquests.
Delta Chat utilitza la biblioteca Rust OpenPGP [rPGP](https://github.com/rpgp/rpgp), que és compatible amb l'últim [esborrany de l'IETF de criptografia post quàntica per a OpenPGP](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/).
La implementació s'especifica en l'esborrany [Autocrypt v2 OpenPGP Certificates](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/). 

### Com puc comprobar manualment la informació d'encriptació?

Pots comprovar manualment l'estat del xifrat d'extrem a extrem en el quadre de diàleg «Encriptació» (perfil d'usuari a Android/iOS o fent clic amb el botó dret a l'element de la llista de xats d'un usuari a l'escriptori).
Delta Chat hi mostra dues empremtes digitals.
Si les mateixes empremtes digitals apareixen al vostre dispositiu i al del vostre contacte, la connexió és segura.

Puc reutilitzar la meva clau privada existent? {#importkey}

No.

Delta Chat genera claus OpenPGP segures d'acord amb l'especificació Autocrypt 1.1. No recomanem ni oferim als usuaris que facin una gestió manual de les claus.
Volem garantir que les auditories de seguretat es puguin centrar en uns quants algorismes criptogràfics provats en lloc de tota la gamma d'algorismes possibles permesos amb OpenPGP. Si vols extreure la teva clau OpenPGP, només hi ha un mètode per a experts: l'heu de buscar a la taula SQLite «keypairs» d'un fitxer tar de còpia de seguretat del perfil.


### Delta Chat ha estat auditat de manera independent per detectar vulnerabilitats de seguretat?

Sí, diverses vegades. 
El projecte Delta Chat es sotmet contínuament auditories i anàlisis de seguretat independents, de la més recent a la més antiga: 

- Desembre de 2024, una [avaluació encarregada per NLNET de
  rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) per [Radically Open Security](https://www.radicallyopensecurity.com/) va tenir lloc.
  rPGP serveix com a motor de xifrat d'extrem a extrem [OpenPGP](https://openpgp.org) de Delta Chat. 
 Es van publicar dos avisos relacionats amb les troballes d'aquesta auditoria:

  - ["Panics on Malformed Untrusted Input"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potential Resource Exhaustion when handling Untrusted Messages"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

Els problemes exposats en aquests avisos s'han solucionat i formen part de les versions de Delta Chat  a totes les botigues d'aplicacions des del desembre de 2024.

- El març de 2024, vam rebre un anàlisi de seguretat profund del grup de recerca de Criptografia Aplicada de l'ETH Zúric i vam resoldre tots els problemes plantejats. 
  Consulta la nostra entrada al blog sobre [Enduriment del xifrat d'extrem a extrem garantit](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) per a més informació detallada i  l'[Anàlisi criptogràfica de Delta Chat](https://eprint.iacr.org/2024/918.pdf), article de recerca publicat posteriorment. 

- Abril de 2023, vam solucionar problemes de seguretat i privacitat amb la funció «aplicacions web compartides en un xat», relacionats amb fallades de sandbox, especialment amb Chromium. Posteriorment, vam rebre una auditoria de seguretat independent de Cure53 i tots els problemes trobats es van solucionar a la sèrie d'aplicacions 1.36, llançada l'abril de 2023.
  Consulta [aquí la història completa sobre la seguretat d'extrem a extrem al web](https://delta.chat/en/2023-05-22-webxdc-security).

- Març de 2023, [Cure53](https://cure53.de) va analitzar tant el xifratge de transport de les connexions de xarxa de Delta Chat com una configuració reproduïble de servidor de correu, tal com [es recomana en aquest lloc](serverguide).
  Podeu llegir més sobre l'auditoria [al nostre blog](https://delta.chat/en/2023-03-27-third-independent-security-audit) o llegir [l'informe complet aquí](../assets/blog/MER-01-report.pdf).

- 2020, [Include Security](https://includesecurity.com) va analitzar el [nucli](https://github.com/deltachat/deltachat-core-rust/) de Rust de Delta Chat,
  les biblioteques d'[IMAP](https://github.com/async-email/async-imap), [SMTP](https://github.com/async-email/async-smtp) i [TLS](https://github.com/async-email/async-native-tls).
  No es van trobar problemes de gravetat crítica o alta.
  L'informe va assenyalar algunes vulnerabilitats de gravetat mitjana:
  per si mateixes no suposen una amenaça per als usuaris de Delta Chat
  perquè depenen de l'entorn en què s'utilitza Delta Chat.
  Per motius d'usabilitat i compatibilitat,
  no podem mitigar-les totes
  i hem decidit proporcionar recomanacions de seguretat als usuaris afectats.
  Podeu llegir [l'informe complet aquí](../assets/blog/2020-second-security-review.pdf).

- 2019, [Include Security](https://includesecurity.com) va analitzar les biblioteques [PGP](https://github.com/rpgp/rpgp) i [RSA](https://github.com/RustCrypto/RSA) de Delta Chat.
  No es van trobar problemes crítics, però sí dos problemes de gravetat alta que vam solucionar posteriorment. També es va revelar un problema de gravetat mitjana i alguns problemes menys greus, però no hi havia manera d'aprofitar aquestes vulnerabilitats en la implementació de Delta Chat. Alguns d'ells, tanmateix, els hem solucionat des que es va concloure l'auditoria.
  Podeu llegir [l'informe complet aquí](../assets/blog/2019-first-security-review.pdf).


## Miscel·lània

### Quins permissos necessita Delta Chat?

Algunes funcions requereixen certs permisos,
p. ex., cal concedir el permís de càmera si es vol [escanejar un codi QR d'invitació](#howtoe2ee).

Consulta la [política de privacitat](https://delta.chat/en/gdpr#24-app-permissions) per una visió general detallada.


### On poden trobar Delta Chat els meus amics?

Delta Chat està disponible per a totes les plataformes principals i algunes secundàries:

- El **lloc web oficial**, <https://delta.chat/download> mostra totes les opcions en detall

- Si no està disponible, utilitza un **mirall** a <https://deltachat.github.io/deltachat-pages>

- Obre una de les botigues d'aplicacions següents i busca "Delta Chat":
  Google Play Store, F-Droid, Huawei App Gallery, App Store d'iOS i macOS, Microsoft Store

- Comprova el **gestor de paquets** de la teva distribució de Linux

- Els **APKs d'Android** també estan disponibles a <https://github.com/deltachat/deltachat-android/releases>


### Com es finança el desenvolupament de Delta Chat? 

Delta Chat no rep cap inversió de capital de risc, no té deutes i no està sota la pressió de generar enormes beneficis, ni de vendre als usuaris i els seus amics i familiars als anunciants (o pitjor). En canvi, utilitzem fonts de finançament públiques, provinents sobretot de la UE i els EUA, per ajudar als nostres esforços per impulsar un ecosistema de missatgeria de xat descentralitzat i divers, basat en desenvolupaments comunitaris de codi obert i lliures.

Concretament, els desenvolupaments de Delta Chat s'han finançat fins ara a partir d'aquestes fonts, ordenades cronològicament: 

- El 2023 i el 2024 vam ser acceptats al programa Next Generation Internet (NGI) per la nostra feina a [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/), juntament amb socis de col·laboració que treballen en
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/),
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/),
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) i
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/).
Tots aquests projectes estan parcialment completats o s'acabaran a principis del 2025.

- El 2021 vam rebre més finançament de la UE per a dos propostes de Next-Generation-Internet, concretament per a [EPPD - directori de portabilitat de proveïdors de correu electrònic](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) i [AEAP - portabilitat d'adreces de correu electrònic](https://nlnet.nl/project/EmailPorting/) (~90K EUR) que van donar com a resultat un millor suport per a múltiples perfils, una millora en la configuració amb codi QR de contactes i grups i moltes millores de xarxa en totes les plataformes.

- La [fundació NLnet](https://nlnet.nl/) va concedir el 2019/2020 46 000 EUR per a completar els enllaços de Rust/Python i impulsar un ecosistema de bots de xat.

- L'[Open Technology Fund](https://opentechfund.org) ens va concedir una primera subvenció per al 2018/2019 (~200.000 $) durant la qual vam millorar significativament l'aplicació per a Android i vam llançar una primera versió beta de l'aplicació per a ordinador, i que, a més
  va fonamentar el nostre desenvolupament de funcions en la recerca d'UX en contextos de drets humans; Mira els resultats del nostre [informe de recerca de necessitats i UX](https://delta.chat/en/2019-07-19-uxreport).
  La segona subvenció del 2019/2020 (~300 000 $) ens va ajudar a
  llançar versions per a Delta/iOS, a convertir la nostra biblioteca principal a Rust i a oferir noves funcionalitats per a totes les plataformes.

- El projecte de la UE [NEXTLEAP](https://nextleap.eu) va finançar la recerca i la implementació de grups verificats i protocols de contacte el 2017 i 2018, i també va ajudar a integrar el xifrat d'extrema a extrem a través d'[Autocrypt](https://autocrypt.org).

- De vegades rebem donacions puntuals de particulars. 
  Per exemple, el 2021 un particular ens va transferir 4.000 EUR 
  amb l'assumpte "Seguiu amb el bon desenvolupament!". 💜 
 Fem servir aquests diners per finançar trobades de desenvolupament o per fer front a despeses extraordinàries 
 que no es poden predir fàcilment o que no es poden reemborsar amb subvencions de finançament públic. 
 Rebre més donacions també ens ajuda a ser més independents i viables a llarg termini com a comunitat de contribuïdors. 

  [Donatius](donate){: .cta-button}

- Per últim, però de cap manera el menys important, diversos experts i entusiastes pro-bono han contribuït i contribueixen al desenvolupament de Delta Chat sense rebre diners, o només petites quantitats. Sense ells, Delta Chat no seria on és avui, ni de bon tros. 

El finançament monetari esmentat anteriorment està organitzat principalment per merlinux GmbH a Freiburg (Alemanya), i es distribueix a més d'una dotzena de col·laboradors d'arreu del món. 

Consulteu [Canals de contribució de Delta Chat](contribute) per a les diferents maneres de contribució, tant monetàries com d'altres tipus.  
