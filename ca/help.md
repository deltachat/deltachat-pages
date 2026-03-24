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

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple profiles per device, just [add another profile](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Transferència Manual {#backup}

This method is only recommended if "Add Second Device" as described above does not work.

- On the old device, go to **Settings → Chats → Export Backup**. Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.

- On the new device, select **I Already Have a Profile → Restore from Backup**.
  If you use iOS and encounter difficulties,
  [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) might help you.

Ja esteu sincronitzats i podeu utilitzar els dos dispositius per enviar i rebre missatges xifrats d'extrem a extrem amb els vostres contactes.


### Are there any plans for introducing a Delta Chat Web Client?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  app stores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


## Avançat

### Funcionalitats experimentals {#experiments}

At **Settings → Advanced → Experimental Features**
you can try out features we are working on.

The features may be **unstable** and may be **changed or removed**.

You can find more information
and give feedback in the [Forum](https://support.delta.chat).


### Què són els retransmissors? {#relays}

Els retransmissors s'utilitzen per guardar missatges temporalment en el cas que el teu dispositiu estigui fora de línia. Els retransmissors són servidors barats i tontos.

By default, after installation, a relay is **automatically set up**,
so you do not need to care about that.
However, if you want to,
you can configure relays at **Settings → Advanced → Relays**:

- You can **add** a relay by scanning its QR code;
  [chatmail.at/relays](https://chatmail.at/relays) shows some known ones.
  If you have multiple relays, you will receive messages on all of them.
  Contacts learn your current relays automatically when you message them.

- Tap on a relay to set it as **used for sending**.

- If you **remove** a relay,
  contacts who only know this relay may not reach you until you message them again.
  To stay reachable in the meantime, choose **Hide from Contacts** in the confirmation dialog
  instead of removing it right away.

- To **show** a hidden relay again, tap on it.

Per a més detalls i possibilitats futures dels retransmissors, pots seguir les discussions al [Fòrum](https://support.delta.chat).


### Can I use a classic email address with Delta Chat?

Yes, but only if the email address is used exclusively by [chatmail clients](https://chatmail.at/clients).

It is not supported to share usage of an email address with non-chatmail apps or web-based mailers,
for the following reasons:

Les aplicacions que no són de chatmail, en general, no aconsegueixen oferir xifratge automàtic d'extrem a extrem per correu electrònic als seus usuaris, mentre que les aplicacions i els retransmissors de chatmail apliquen de manera omnipresent el xifrat d'extrem a extrem i els estàndards de seguretat.

- Les aplicacions que no són de chatmail utilitzen servidors de correu electrònic com a arxiu de missatges a llarg termini, mentre que els clients de chatmail utilitzen servidors de correu electrònic per a la retransmissió de missatges instantanis efímers.

- Supporting the full variety of classic email setups
  would require considerable development and maintenance efforts,
  and complicate making chatmail-based messaging more resilient, reliable and fast.

Com puc configurar un perfil de xat amb una adreça de correu electrònic clàssica com a retransmissor? {#classic-email}

First off, **please do not use the same classic email address also from non-chatmail classic email apps**
unless you are prepared to deal with encrypted messages in the inbox,
double notifications, accidentally deleted emails or similar annoyances.

Pots configurar una adreça de correu electrònic per xatejar a **Perfil nou → Utilitza un altre servidor → Utilitza el correu clàssic com a retransmissor**.
Tingueu en compte que els proveïdors de correu clàssic generalment no admeten [Notificacions push](#instant-delivery)
i tenen altres limitacions, visita [Vista general dels proveïdors](https://providers.delta.chat).
Chatmail utilitza la safata d'entrada (INBOX) per defecte per a retransmetre; assegureu-vos que la configuració del proveïdor també ho faci.
Un perfil de xat que utilitza una adreça de correu electrònic clàssica permet enviar i rebre missatges sense xifrar.
Aquests missatges, i els xats en què apareixen, estan marcats amb una icona de correu electrònic
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### I want to manage my own server for Delta Chat. What do you recommend?

Any well behaving email server setup will do fine 
except if your users' devices require Google/Apple [Push Notifications](#instant-delivery) to work properly.

Generalment recomanem [configurar un retransmissor de chatmail](https://chatmail.at/doc/retransmissor/getting_started.html). 
[Chatmail](https://chatmail.at) és un projecte impulsat per la comunitat que engloba tant la configuració de retransmissors com els [desenvolupaments del nucli en Rust](https://github.com/chatmail/core) que alimenten als [clients de Chatmail](https://chatmail.at/clients), dels quals Delta Chat és el més conegut. 


### What is "Send statistics to Delta Chat's developers"? {#statssending}

We would like to improve Delta Chat with your help,
which is why Delta Chat for Android asks whether you want
to send anonymous usage statistics.

You can turn it on and off at
**Settings → Advanced → Send statistics to Delta Chat's developers**.

When you turn it on,
weekly statistics will be automatically sent to a bot.

Ens interessen, per exemple, estadístiques com ara:

- How many contacts are introduced by personally scanning a QR code?

- Which versions of Delta Chat are being used?

- Quins errors es produeixen pels usuaris?

We will _not_ collect any personally identifiable information about you.


### I'm interested in the technical details. Can you tell me more?

See [Standards used in Delta Chat]({% include standards-url %}).



## Encriptació i Seguretat {#e2ee}

### Quins estàndards s'utlitzen per una xifrat d'extrem a extrem?

Delta Chat utilitza un [subconjunt segur de l'estandard OpenPGP](#openpgp-secure) Oferint xifrat d'extrem a extrem automàtic utilitzant aquests protocols:

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  to exchange encryption setup information through QR-code scanning or "invite links". 

- S'utilitza [Autocrypt](https://autocrypt.org) per establir automaticament xifrat d'extrem a extrem entre contactes i tots els membres d'un grup de xat.

- [Autocrypt v2](https://autocrypt2.org), scheduled for full implementation in 2026, 
  will bring post-quantum resistant encryption and forward secrecy. 

- [Compartir un contacte en un xat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message) permet a qui ho rep, utilitzar xifrat d'extrem a extrem amb el contacte.

Delta Chat does not query, publish or interact with any OpenPGP key servers. 

### Com puc saber si els missatges són xifrats d'extrem a extrem? {#whene2e}

Tots els missatges a Delta Chat són **xifrats d'extrem a extrem per defecte**. Desde el llançament de la versió 2 de Delta Chat (Juliol 2025) ja no hi haurà més candaus o marques semblants als missatges xifrats d'extrem a extrem.

### Encara es pot rebre missatges sense xifrat d'extrem a extrem?

Si utilitzes el [retransmissor de chatmail](https://chatmail.at/relays) per defecte, no és possible rebre o enviar missatges sense xifrar d'extrem a extrem.

Si enlloc d'això utilitzes un [servidor de correu clàssic](#classic-email), podràs enviar i rebre missatges amb o sense xifrat d'extrem a extrem. Els missatges que no vagin xifrats d'extrem a extrem es marcaran amb la icona de correu-e <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### What does the green checkmark in a contact profile mean? {#e2eeguarantee}

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

Per a una discussió més profunda sobre el "xifratge d'extrem a extrem garantit", consulteu els [protocols Secure-Join](https://securejoin.delta.chat/en/latest/new.html) i llegiu específicament sobre els "Grups Verificats", el terme tècnic que designa el que aquí s'anomenen xats amb "marcat de verificació verda" o de "xifratge d'extrem a extrem garantit".

### Els adjunts (imatges, fitxers, audio, etc.) es xifren d'extrem a extrem?

Sí.

Quan parlem d'un "missatge xifrat d'extrem a extrem", sempre ens referim a un missatge xifrat sencer, incloent-hi  tots els fitxers adjunts i les metadades d'aquests, com ara els noms de fitxer.


### És OpenPGP segur? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
requiring the whole message to be properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publicly discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019 and 2024](#security-audits). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Heu considerat utilitzar alternatives a l'OpenPGP per al xifratge d'extrem a extrem? {#openpgp-alternatives}

Sí, estem seguint iniciatives com [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security), però adoptar-les significaria trencar la interoperabilitat del xifrat d'extrem a extrem. Per tant, no seria una decisió fàcil de prendre i hi hauria d'haver millores tangibles per a les usuaries. 

Delta Chat adopta un enfocament holístic de "seguretat usable" i treballa amb una àmplia gamma de col·lectius activistes, així com amb investigadors de renom com [TeamUSEC](https://teamusec.de), per millorar els resultats reals dels usuaris davant de les amenaces de seguretat. El protocol i estàndard de xifrat d'extrem a extrem és només una part dels "resultats per a l'usuari", vegeu les respostes a les preguntes sobre [confiscació del dispositiu](#device-seizure) i [metadades dels missatge](#message-metadata). 


### És Delta Chat vulnerable a EFAIL?

No, [Delta Chat never was vulnerable to EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
because its OpenPGP implementation [rPGP](https://github.com/rpgp/rpgp) 
uses Modification Detection Code when encrypting messages
and returns [an error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
if the Modification Detection Code is incorrect.

Delta Chat also never was vulnerable to the "Direct Exfiltration" EFAIL attack
because it only decrypts `multipart/encrypted` messages
which contain exactly one encrypted and signed part,
as defined by the Autocrypt Level 1 specification. 


### Are messages marked with the mail icon exposed on the Internet? {#tls}

Si envieu o rebeu missatges de correu electrònic sense xifratge de punta a punta (fent servir un servidor de correu electrònic clàssic), encara estan protegits de les companyies de telefonia mòbil o per cable, que no poden llegir ni modificar els vostres missatges de correu electrònic. Però tant el vostre proveïdor de correu electrònic com el del destinatari poden llegir, analitzar o modificar els vostres missatges, inclosos els fitxers adjunts. 

Delta Chat utilitza per defecte un [xifrat TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) estricte, que protegeix les connexions entre el teu dispositiu i el teu proveïdor de correu electrònic. Tota la gestió de TLS de Delta Chat ha estat objecte d'una [auditoria de seguretat](#security-audits) independent. A més a més, la connexió entre el vostre proveïdor de correu electrònic i el del destinatari també sol xifrar les comunicacions. Si els servidors de correu electrònic implicats admeten [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461), aleshores es xifraran les comunicacions entre els proveïdors de correu electrònic, i en aquest cas les comunicacions de Delta Chat mai no estaran exposades en text pla a Internet, fins i tot si el missatge no estava xifrat d'extrem a extrem.


### How does Delta Chat protect metadata in messages? {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

Per tant, els servidors només poden veure:

- Sender and receiver addresses, randomly generated by default
- Message size

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random addresses for transport. 
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then chat contacts using short-lived profiles
can not be identified easily. 


### Qui veu la meva Adreça IP?

The used [relay](#relays) needs to know your IP Address,
as well as sometimes your contact's devices if you have a [call](#experiments)
or use [apps](#webxdc) together.

IP Addresses are needed for connectivity and efficiency.
They are neither persisted nor exposed.
Note that the IP Address
is not like a detailed address you give to a delivery service,
but much more coarse, often defining region or country only.

As this is just how the internet and other messengers work by default,
we do not offer options here or ask upfront questions.

If you see your IP Address as a security or privacy risk,
we recommend to use a VPN, in combination with system lockdown mode.
Hunting down options in all apps on your system will leave gaps.
For example, tapping a link exposes IP Addresses to unknown parties and is the by far larger risk here.


### Delta Chat admet "Remitent Segellat""? {#sealedsender}

No, encara no.

The Signal messenger introduced ["Sealed Sender" in 2018](https://signal.org/blog/sealed-sender/)
to keep their server infrastructure ignorant of who is sending a message to a set of recipients. 
It is particularly important because the Signal server knows the mobile number of each account,
which is usually associated with a passport identity.

Even if [chatmail relays](https://chatmail.at/relays) 
do not ask for any private data (including no phone numbers), 
it might still be worthwhile to protect relational metadata between addresses. 
We don't foresee bigger problems in using random throw-away addresses for sealed sending
but an implementation has not been agreed as a priority yet. 

### Does Delta Chat support Perfect Forward Secrecy? {#pfs}

Not yet, but it's coming with [Autocrypt v2](https://autocrypt2.org). 

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

[Autocrypt v2](https://autocrypt2.org), scheduled for full implementation in 2026,
will provide reliable deletion (forward secrecy) through automatic key rotation.
This approach is specified in the [Autocrypt v2 OpenPGP Certificates](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/) draft. 

### Delta Chat implementa Criptografia Post-Quàntica? {#pqc}

Not yet, but it's coming with [Autocrypt v2](https://autocrypt2.org).

[Autocrypt v2](https://autocrypt2.org), scheduled for full implementation in 2026,
will bring post-quantum resistant encryption to protect against quantum computer attacks.
Delta Chat uses the Rust OpenPGP library [rPGP](https://github.com/rpgp/rpgp)
which supports the latest [IETF Post-Quantum-Cryptography OpenPGP draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/).
The implementation is specified in the [Autocrypt v2 OpenPGP Certificates](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/) draft. 

### Com puc comprobar manualment la informació d'encriptació?

You may check the end-to-end encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop).
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.

### Can I reuse my existing private key? {#importkey}

No.

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1.
We do not recommend or offer users to perform manual key management.
We want to ensure that security audits can focus on a few proven cryptographic algorithms
instead of the full breadth of possible algorithms allowed with OpenPGP.
If you want to extract your OpenPGP key, there only is an expert method:
you need to look it up in the "keypairs" SQLite table of a profile backup tar-file.


### Was Delta Chat independently audited for security vulnerabilities? {#security-audits}

Yes, multiple times. 
The Delta Chat project continuously undergoes independent security audits and analysis,
from most recent to older: 

- 2024 December, an [NLNET-commissioned Evaluation of
  rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) by [Radically Open Security](https://www.radicallyopensecurity.com/) took place.
  rPGP serves as the end-to-end encryption [OpenPGP](https://openpgp.org) engine of Delta Chat. 
  Two advisories were released related to the findings of this audit:

  - ["Panics on Malformed Untrusted Input"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potential Resource Exhaustion when handling Untrusted Messages"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

  The issues outlined in these advisories have been fixed and are part of Delta Chat 
  releases on all appstores since December 2024. 

- 2024 March, we received a deep security analysis from the Applied Cryptography
  research group at ETH Zuerich and addressed all raised issues. 
  See our blog post about [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) for more detailed information and the
  [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
  research paper published afterwards. 

- 2023 April, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023.
  See [here for the full background story on end-to-end security in the web](https://delta.chat/en/2023-05-22-webxdc-security).

- 2023 March, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

- 2020, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's Rust [core](https://github.com/deltachat/deltachat-core-rust/),
  [IMAP](https://github.com/async-email/async-imap),
  [SMTP](https://github.com/async-email/async-smtp), and
  [TLS](https://github.com/async-email/async-native-tls) libraries.
  It did not find any critical or high-severity issues.
  The report raised a few medium-severity weaknesses -
  they are no threat to Delta Chat users on their own
  because they depend on the environment in which Delta Chat is used.
  For usability and compatibility reasons,
  we can not mitigate all of them
  and decided to provide security recommendations to threatened users.
  You can read the [full report here](../assets/blog/2020-second-security-review.pdf).

- 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).


## Miscel·lània

### Quins permissos necessita Delta Chat?

Some features require certain permissions,
e.g. you need to grant camera permission if you want to [scan an invite QR code](#howtoe2ee).

Consulta la [política de privacitat](https://delta.chat/en/gdpr#24-app-permissions) per una visió general detallada.


### On poden trobar Delta Chat els meus amics?

Delta Chat is available for all major and some minor platforms:

- El **lloc web oficial**, <https://delta.chat/download> mostra totes les opcions en detall

- Si no està disponible, utilitza un **mirall** a <https://deltachat.github.io/deltachat-pages>

- Open one of the following **app stores and search for "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, iOS and macOS App Store, Microsoft Store

- Check the **package manager** of your Linux distributions

- Els **APKs d'Android** també estan disponibles a <https://github.com/deltachat/deltachat-android/releases>


### Com es finança el desenvolupament de Delta Chat? 

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources,
ordered chronologically: 

- In 2023 and 2024 we got accepted in the Next Generation Internet (NGI)
  program for our work in [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
  along with collaboration partners working on
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/),
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/),
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) and
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/).
  All of these projects are partially completed or to be completed in early 2025.

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - email provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-profile support, improved QR-code contact and group setups and many networking improvements on all platforms.

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system.

- The [Open Technology Fund](https://opentechfund.org) gave us a
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app
  and released a first Desktop app beta version, and which moreover
  moored our feature developments in UX research in human rights contexts,
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

  [Donatius](donate){: .cta-button}

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

El finançament monetari esmentat anteriorment està organitzat principalment per merlinux GmbH a Freiburg (Alemanya), i es distribueix a més d'una dotzena de col·laboradors d'arreu del món. 

Consulteu [Canals de contribució de Delta Chat](contribute) per a les diferents maneres de contribució, tant monetàries com d'altres tipus.  
