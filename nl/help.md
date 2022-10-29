---
title: Vraag en antwoord
lang: nl
render_toc: true
header: Veelgestelde vragen
---


## Wat is Delta Chat?

Delta Chat is een nieuw soort gespreksapp waarmee je chat via e-mail, indien mogelijk extra versleuteld middels Autocrypt.
**Je hoeft je nergens te registreren - je kunt gewoon je bestaande e-mailaccount gebruiken.**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Hoe kan ik gesprekspartners vinden?

Met Delta Chat kun je berichten schrijven naar elk bestaand e-mailadres, zelfs
als de ontvanger (nog) geen gebruik maakt van de Delta Chat-app. De ontvanger hoeft dus niet
per se dezelfde app te gebruiken als jij zoals bij andere chatapps.


### Wat zijn de voordelen van Delta Chat t.o.v. andere gespreksapps?

- _Onafhankelijk_: niet verbonden aan een bedrijf of bepaalde diensten. _Jij_ beschikt over jóuw gegevens.
- Je gegevens worden niet opgeslagen op een centrale server. Op deze manier beschermt Delta Chat zélfs je metagegevens (wie verstuurt iets aan wie?).
- Je deelt je adresboek met niets of niemand.
- _Snel_, dankzij het gebruik van Push-IMAP.
- _Grootst aantal gebruikers_: ontvangers hoeven Delta Chat _niet_ te gebruiken.
- _Compatibel_, en niet alleen met zichzelf.
- _Elegant_, en _eenvoudig_ te gebruiken.
- _Verspreid_ systeem.
- _Geen ongewenste berichten_: standaard worden alleen berichten van bekenden getoond.
- _Betrouwbaar_: veilig voor professioneel gebruik.
- _Vertrouwelijk_: kan zélfs worden gebruikt voor zakelijke berichten.
- Volledig _open source_ en gebaseerd op _standaarden_.


### Welke berichten vind ik terug in Delta Chat?

Standaard toont Delta Chat:

-Berichten van andere Delta Chat-gebruikers;
-Antwoorden op je Delta Chat-berichten, óók als dat ‘normale’ e-mails zijn.

Andere e-mails worden standaard niet getoond. Je kunt dit echter aanpassen via Instellingen → Gesprekken en media → Klassieke e-mails tonen. Vervolgens heb je keuze uit de volgende opties:

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


### Wat nu als ik een bericht verwacht van iemand die ik nog niet heb aangeschreven?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Ondersteunt Delta Chat afbeeldingen, video's en ander soort bijlagen?

- Ja. Plattetekstberichten en e-mailbijlagen worden apart getoond. Uitgaande berichten worden, indien nodig, automatisch voorzien van bijlagen.


### Wie kan mijn profielfoto zien?

- In de instellingen kun je een profielfoto toevoegen. Als je een bericht stuurt aan
  je contactpersonen of ze toevoegt middels hun QR-code, dan krijgen ze je profielfoto te zien.

- Contactpersonen die geen Delta Chat gebruiken kunnen je profielfoto niet zien
  (maar ze kunnen Delta Chat natuurlijk wél gaan gebruiken :) )

- Omwille van je privacy, krijgen anderen je profielfoto pas te zien
  als je ze een bericht stuurt.

- Je profielfoto wordt niet naast elk bericht getoond, maar wel frequent genoeg.
  Je contactpersonen ontvangen hem dan opnieuw, zelfs als ze een nieuw apparaat toevoegen.


### Ondersteunt Delta Chat HTML-e-mails?

- Ja. Indien nodig wordt er bij inkomende berichten een knop ‘Volledig bericht tonen’ getoond. Uitgaande e-mails gebruiken altijd platte tekst.


### Waarom moet ik mijn e-mailwachtwoord invoeren in Delta Chat? Is dat wel veilig?

Delta Chat heeft, net zoals andere e-mailprogramma's (Thunderbird, K9-Mail, Outlook, etc.), je wachtwoord nodig om berichten te versturen. Het wordt alleen opgeslagen op je apparaat en alleen uitgewisseld met je e-mailprovider, die toch al toegang heeft tot je mails.

Als je een e-mailprovider gebruikt die OAuth2 ondersteunt, zoals Gmail of Yandex, dan hoeft je wachtwoord niet lokaal te worden opgeslagen. Er wordt dan alleen een toegangssleutel gebruikt.

Delta Chat is open source. Dit betekent dat je de [bron-
code](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
kunt bekijken om er zeker van te zijn dat er veilig wordt omgegaan met je inloggegevens. We ontvangen graag feedback hierover.


### Welke Android-rechten heeft Delta Chat nodig?

Op bepaalde besturingssystemen kun je gevraagd
worden bepaalde rechten toe te kennen aan de app.
Delta Chat doet het volgende met deze rechten:

- Camera *(kan worden ingetrokken)*
  - foto's en video's maken: voor het versturen van foto's
- Contactpersonen *(kan worden ingetrokken*
  - contactpersonen uitlezen: voor het vinden van gesprekspartners
- Locatie *(kan worden ingetrokken)*
  - toegang tot je locatie, bij benadering (netwerklocatiebronnen): voor de locatie-streamingfunctie
  - toegang tot je precieze locatie (GPS en netwerklocatiebronnen): voor de locatie-streamingfunctie
- Microfoon *(kan worden ingetrokken)*
  - audio opnemen: voor het versturen van audioberichten
- Opslag *(kan worden ingetrokken)*
  - de inhoud van je sd-kaart aanpassen of wissen: om bijlagen op te slaan
  - de inhoud uitlezen van je sd-kaart: om bestanden te delen met je contactpersonen
- Andere mogelijkheden:
  - je audio-instellingen aanpassen: zodat je beltonen en het meldingsvolume kunt aanpassen en audioberichten kunt ontvangen en versturen
  - automatisch opstarten: zodat je Delta Chat niet zelf hoeft op te starten
  - trillen beheren: voor meldingen
  - netwerkverbindingen bekijken: om je e-mailprovider te koppelen
  - slaapstand onderdrukken: zodat je de code van het Autocrypt-instelbericht eenvoudiger kunt overtypen
  - volledige netwerktoegang: om je e-mailprovider te koppelen
  - Wi-Fi-verbindingen bekijken: om je e-mailprovider te koppelen
  - vraag om accu-optimalisatie te negeren: voor gebruikers die continue berichten willen blijven ontvangen

### Wat is vastmaken, negeren en archiveren?

Met deze hulpmiddelen kun je je gesprekken geordend houden:

- **Vastgemaakte gesprekken** vind je te allen tijde bovenaan de gesprekslijst terug. Zo kun je je belangrijste gesprekken permanent of tijdelijk bij de hand houden, zodat je niets vergeet.

- Stel gesprekken in op **Negeren** als je geen meldingen meer wilt ontvangen. Wel blijven genegeerde gesprekken op de lijst staan en kun je ze te allen tijde vastmaken.

- **Archiveer gesprekken** als je ze niet meer op de gesprekslijst wilt zien.
  Je kunt ze echter nog steeds oproepen aan het einde van de lijst, via het menu of een zoekopdracht.

- Als er een nieuw bericht in een gearchiveerd gesprek wordt ontvangen, dan wordt het gesprek in kwestie **ge-dearchiveerd** en dus weer op de gesprekslijst geplaatst.
  **Genegeerde gesprekken blijven in het archief staan** totdat je ze er zelf uithaalt.

Archiveer of maak een gesprek vast door het gesprek in kwestie lang ingedrukt te houden (Android), via het gespreksmenu (Android/computer) of door het naar links te vegen (iOS).
Negeer een gesprek via het gespreksmenu (Android/computer) of het gespreksprofiel (iOS).


### Wat betekent die groene stip?

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


## Groepen

### Groepen aanmaken

- Open het ‘menu met de drie puntjes’ rechtsboven in het gespreksoverzicht, kies **Nieuw gesprek** en daarna **Nieuwe groep**.
- Kies dan de **groepsleden** en druk op het vinkje rechtsboven. Daarna kun je een **groepsnaam** opgeven.
- Zodra je het **eerste groepsbericht** hebt verstuurd, worden alle deelnemers op de hoogte gebracht en kunnen zij antwoorden versturen (de groep blijft onzichtbaar voor anderen zolang jij geen bericht verstuurt).


### Deelnemers toevoegen aan een groep

- Alle deelnemers hebben **dezelfde rechten**: iedereen kan deelnemers toevoegen of verwijderen.
- Open het gesprek en druk op de groepsnaam om deelnemers toe te voegen of te verwijderen.


### Ik heb mezelf per ongeluk verwijderd

- Je neemt geen deel meer aan de groep en kunt jezelf dus niet meer toevoegen.
  Vraag iemand via een één-op-ééngesprek of hij/zij je weer wilt toevoegen.


### Ik wil geen groepsberichten meer ontvangen

- Verwijder jezelf van de groepslijst of verwijder het hele groepsgesprek.
  Als je later weer wilt deelnemen, vraag dan iemand anders of hij/zij je weer wilt toevoegen.

- Wat ook kan doen is groepsmeldingen uitschakelen. Zo blijf je in de groep, maar ontvang je
  geen meldingen meer als er nieuwe berichten zijn.


### Wat betekenen de vinkjes naast verzonden berichten?

- **Eén vinkje**: het bericht is verstuurd naar de e-maildienst;
- **Twee vinkjes**: het bericht is aangekomen bij minstens
  één van de ontvangers;
- Ontvangers kunnen leesbevestigingen uitschakelen,
  dus óók met één vinkje kan het bericht al gelezen zijn;
- Twee vinkjes duiden alleen op ontvangst,
  niet dat het bericht ook écht gelezen of begrepen is. ;)


### Wat gebeurt er als ik ‘Oude berichten van server verwijderen’ inschakel?

- Standaard bewaart Delta Chat all berichten lokaal op je apparaat. Als je
bijvoorbeeld ruimte wilt vrijmaken, dan kun je er voor kiezen om
oude berichten automatisch te verwijderen. Ze blijven echter bewaard op je apparaat totdat je
ze daar handmatig verwijdert.
- Inschakelen kan in de sectie ‘Gesprekken en media’
in de instellingen. Ook kun je daar een periode opgeven tussen ‘direct’ en ‘na een jaar’. Hierdoor worden ook echt
álle e-mails binnen die periode van de server verwijderd. 
- Let op: als je Delta Chat op meer dan één apparaat gebruikt, bewaar de berichten dan
wél op de server, in elk geval totdat ze op het andere apparaat zijn binnengehaald. Stel
automatisch verwijderen hiervoor in op ‘na één dag’ of iets dergelijks,
afhankelijk van hoe vaak je het andere apparaat gebruikt.


### What happens if I turn on "Delete old messages from device"?

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

### Ondersteunt Delta Chat eind-tot-eindversleuteling?

- Ja. Delta Chat heeft de standaard Autocrypt niveau 1 ingebouwd
  en kan dus e2e-berichten versleutelen d.m.v. Autocrypt-achtige apps.

- Delta Chat ondersteunt een sterke variant van eind-tot-eindversleuteling die zélfs
  beschermt tegen actieve aanvallen. Zie ‘goedgekeurde groepen’ verderop voor meer informatie.


### Moet ik iets doen om eind-tot-eindversleuteling in te schakelen?

- Nee.

- De Delta Chat-apps (en andere met [Autocrypt](https://autocrypt.org) compatibele
  e-mailapps) delen automatisch de vereiste sleutels voor eind-tot-eindversleuteling, 
  al vanaf het eerste verstuurde bericht. 
  Hierna zijn alle opeenvolgende berichten automatisch versleuteld. 
  Als één van de gesprekspartners een niet met Autocrypt compatibele e-mailapp gebruikt, 
  dan zijn die berichten onversleuteld. 

- Als je eind-tot-eindversleuteling standaard wilt uitschakelen, 
  zoek dan de Autocrypt-optie in ‘Instellingen --> Geavanceerd’.


### Als eind-tot-eindversleuteling niet beschikbaar is, is de verbinding dan onbeveiligd?

- Net als de meeste mailservers, zet Delta Chat een _beveiligde verbinding_
  ([TLS](https://nl.wikipedia.org/wiki/Transport_Layer_Security)) op.
  Dit beschermt alleen de verbinding tussen jouw apparaat en de mailserver.
  e2e-versleuteling biedt die bescherming tussen
  jouw apparaat en dat van je gesprekspartner.


### Hoe kan ik de cryptografische status met een afzender verifiëren?

Als je in de buurt van je gesprekspartner bent:

- Druk op ‘QR-uitnodigingscode’. Pak het andere apparaat, druk daar op
  ‘QR-code scannen’ en scan de code.  Als beide apparaten verbonden zijn
  met internet, dan wordt er een gesprekskanaal opgezet (als dat er nog niet was) 
  en worden de sleutels geverifieerd. 
Beiden zien daarna een bericht
  ‘afzender goedgekeurd’ in hun gesprek.

Als je niet in de buurt bent van je gesprekspartner, kun je de status handmatig controleren in het venster ‘Versleuteling’
(gebruikersprofiel op Android/iOS of rechtsklik op een gesprek op de computer)

- Bij eind-tot-eindversleuteling toont Delta Chat twee vingerafdrukken. 
  Als deze dezelfde zijn als die op het apparaat van je gesprekspartner, dan is de verbinding beveiligd.

- Bij overdrachtsversleuteling wordt de status ervan getoond.


### Hoe kan ik de versleuteling controleren?

- Als er een klein **hangslot** wordt getoond naast een bericht, dan is het eind-tot-eind versleuteld. Jouw antwoord is dan eveneens eind-tot-eind versleuteld.

- Als het **hangslot ontbreekt**, dan is het bericht meestal onversleuteld omdat jij of de afzender eind-tot-eindversleuteling hebt uitgeschakeld, of omdat de afzender geen app gebruikt die eind-tot-eind-versleuteling ondersteunt.

### Welke standaarden worden gebruikt bij eind-tot-eindversleuteling?

- [Autocrypt](https://autocrypt.org) wordt gebruikt voor het opzetten
  van een e2e-versleuteling met andere Delta Chat-apps, alsmede andere apps die Autocrypt ondersteunen.
  Autocrypt gebruikt een beperkte set OpenPGP-functionaliteit.

- Delta Chat gebruikt de [countermitm setup-contact- en verified-group-protocollen](https://countermitm.readthedocs.io/en/latest/new.html) om bescherming
te bieden tegen actieve netwerkaanvallen. Hierdoor gaat Delta Chat
verder dan de basisbescherming van Autocrypt niveau 1.

### Wat is het verschil tussen goedgekeurde groepen en 1-op-1-gesprekken met goedgekeurde contactpersonen?

- 1-op-1-gesprekken met een goedgekeurde contactpersoon en goedgekeurde groepen zijn niet hetzelfde, ook niet
  als er 2 personen in de groep zijn. Eén van de grote verschillen is dat je
  eenvoudig meer personen kunt toevoegen aan de groep, maar er zijn meer
  verschillen.

- Goedgekeurde groepen zijn afwisselend beveiligd. Elk foutje (platte tekst,
  niet goed ondertekende berichten, etc.) worden gemarkeerd en niet getoond.
  Wél kun je ervan uitgaan dat alle berichten in een goedgekeurd gesprek niet zijn
  gelezen, danwel aangepast, door tussenpersonen.

- 1-op-1-gesprekken zijn opportunistisch: ze zijn bedoeld om mensen te laten communiceren
  ongeacht hun e-mailclient, apparaat, instellingen, etc. Daarom hebben ze geen
  vinkje, zelfs als de contactpersoon is goedgekeurd.


### Ondersteunt Delta Chat Perfect Forward Secrecy?

- Nee, want OpenPGP heeft geen ondersteuning voor Perfect Forward Secrecy. Perfect Forward Secrecy
  werkt op basis van sessies, terwijl e-mail asynchroon is
  en doorgaans wordt gebruikt op meerdere apparaten tegelijk. Dit houdt in dat als je
  Delta Chat-privésleutel uitlekt en iemand een databank heeft met al je berichten,
   ze ze kunnen lezen.

- Let op: als iemand je telefoon in beslag heeft genomen of gehackt, dan kunnen
  doorgaans alle berchten lezen, óók als Perfect Forward Secrecy
  in gebruik was geweest. Toegang tot een apparaat van een groepslid
  zorgt er voor dat alle sociale gegevens vrij zijn in te zien.
  Als je hier bang voor bent, gebruik dan
  een e-mailadres dat niet makkelijk te herleiden is.

- We zijn ideeën aan het uitwerken omtrent het beschermen van gesprekken na inbeslagname
  van een apparaat.


### Hoe beschermt Delta Chat mijn metagegevens?

- Delta Chat is gedecentraliseerd. Dit houdt in dat de metagegevens niet worden
  opgeslagen op een centrale server. Wél worden ze opgeslagen
  op de mailserver van zowel de afzender als de ontvanger.

- Elke mailserver weet wie wat verzonden en ontvangen heeft door de onversleutelde
  koppen ‘Aan/CC’ na te lopen. Hierdoor weten servers welke e-mailadressen deel uitmaken van
  een groep. Delta Chat kan dit eenvoudig omzeilen en alles in de onversleutelde sectie plaatsen.
  Zie [deze melding](https://github.com/deltachat/deltachat-core-rust/issues/1032).
  Bij opportunistische gesprekken is het grootste bezwaar dat andere e-mailclients er door worden beïnvloedt.

- Veel andere e-mailkoppen, zoals bijv. ‘Onderwerp’, zijn
  eind-tot-eind versleuteld. Zie ook de aanstaande  [IETF
RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Kan ik mijn bestaande privésleutel hergebruiken?

- Ja. De beste manier om dit te doen is door een Autocrypt-instelbericht te versturen vanuit de andere client. Zoek naar een optie als **Autocrypt-instellingen overdragen** in de instellingen van die client en volg de instructies.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Als je geen sleutel hebt of niet wist dat je er één nodig had, geen paniek: Delta Chat genereert, indien nodig, automatisch een sleutel.


### Ik kan mijn bestaande PGP-sleutel niet importeren

Het is goed mogelijk dat je sleutel versleuteld is en/of een wachtwoord
vereist. Zulke sleutels worden niet ondersteund. Verwijder de versleuteling
en het wachtwoord en probeer het opnieuw. Als je je wachtwoord
  koste wat kost wilt behouden, maak dan een e-mailalias aan
  die je alleen in Delta Chat gebruikt. Zo is de sleutel niet gekoppeld aan je hoofdadres.

Delta Chat heeft ondersteuning voor alle veelvoorkomende OpenPGP-privésleutelformaten. Echter,
het in onmogelijk om álle soorten sleutels te ondersteunen. Onze
aandacht gaat hier dan ook niet naar uit. Sterker nog: de meeste gebruikers hebben
(nog) geen sleutel. We doen ons best om zo veel mogelijk sleutels te ondersteunen.

Door het verwijderen van het wachtwoord kan de sleutels afhankelijk
van de gebruikte software, veranderd zijn. In Enigmail kun je je wachtwoord
leeglaten in het sleutelbeheervenster. Met GnuPG kun je het
instellen [middels de opdracht-
regel](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Voor andere programma's kun je zélf een oplossing zoeken op internet.


### Waarom wordt pEp (pretty easy privacy) niet gebruikt?

- Delta Chat gebruik de Autocrypt-e2e-standaard. Zie
[Autocrypt's veelgestelde vragen](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep)
  voor een uitleg over pEp en Autocrypt.


## Multi-client {#multiclient}

### Kan ik Delta Chat op meerdere apparaten tegelijk gebruiken?

Als je **hetzelfde account** wilt gebruiken op andere
apparaten, dan moet je
een back-up exporteren op het oude apparaat en deze importeren op het nieuwe:

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

### Bestaan er plannen om een Delta Chat-webclient te maken?

- Er zijn nog geen concrete plannen; alleen wat gedachtenspelingen.
- Er zijn 2 à 3 obstakels, maar alle vereisen zware
  inspanningen. Momenteel ligt voor ons de focus op stabiele uitgaven maken voor appwinkels
  (Google Play/iOS/Windows/macOS/Linux-pakketbronnen).
- Als je een webclient nodig hebt omdat je geen software mag installeren op
  je computer, dan kun je de meeneembare (portable) versie gebruiken van de Windows-client,
  of de AppImage van de Linux-client. Deze kun je downloaden op
 [get.delta.chat](https://get.delta.chat).


### Waarvoor dient de optie ‘Kopie versturen aan mijzelf’?

Door een kopie aan jezelf te sturen, weet je zeker dat je je eigen berichten
op alle apparaten ontvangt. Als je meerdere apparaten hebt en dit niet
inschakelt, dan zie je alleen berichten van anderen en de berichten die je vanaf het
huidige apparaat verstuurt.

De kopie wordt verstuurd naar je Postvak IN en vervolgens verplaatst naar de DeltaChat-map -
het verschijnt nooit in de map 'Verzonden'. Delta Chat werkt zo omdat het bericht
anders twee keer verstuurd zou worden (eenmaal middels smtp,
en eenmaal middels imap naar de map ‘Verzonden’).

Standaard is deze optie uitgeschakeld.

### Waarom kan ik kiezen om de map ‘Verzonden’ te controleren?

Dit is alleen nuttig als een ander e-mailprogramma (zoals Thunderbird) naast de
Delta Chat-app gebruikt en wilt dat je andere apparaten deel uitmaken van gesprekken.

Wij raden echter aan om in dat geval de Delta Chat-app te installeren op je computer:
[get.delta.chat](https://get.delta.chat). De optie om de map ‘Verzonden’ te controleren
wordt in de toekomst mogelijk verwijderd. De functie deed zijn intrede toen er nog niet
op alle platformen een Delta Chat-client beschikbaar was.

### Waarom kan ik kiezen om de DeltaChat-map te negeren?

Sommige mensen gebruiken Delta Chat als een normale e-mailclient en willen daarom Postvak IN
gebruiken voor hun e-mail in plaats van de DeltaChat-map. Als je deze optie uitschakelt,
schakel dan ook de optie ‘Berichten verplaatsen naar de DeltaChat-map’ uit.
Anders kun je mogelijk geen berichten verwijderen of problemen ervaren op andere apparaten.


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


### Wat is een ‘goedgekeurde groep’ en waarom is dit een experimentele functie? 

- Een goedgekeurde groep is een gesprek waarin extra beveiliging zit tegen
  kwaadwillenden.  Alle berichten in een goedgekeurd gesprek zijn e2e-versleuteld, en
  personen kunnen deelnemen door een ‘QR-uitnodigingscode’ te scannen.  Alle deelnemers zijn 
  dus gekoppeld middels elkaars uitnodigingen, wat 
  cryptographische consistentie biedt tegen netwerk- of provider-aanvallen. 
  Bekijk https://countermitm.readthedocs.io/en/latest/new.html
  voor meer informatie omtrent deze functie. 

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

Dit is een experimentele functie voor mensen die problemen ervaren
met bepaalde serverregels. Niet alle providers ondersteunen dit, maar bij sommige
kun je alle e-mails met een ‘Chatversie’-kop verplaatsen naar de DeltaChat-map.
Normaal doet de Delta Chat-app dit uit zichzelf.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- een serverregel hebt ingesteld om alle berichten met een ‘Chatversie’-kop te verplaatsen naar de DeltaChat-map, en
- de optie ‘Klassieke e-mails tonen’ hebt ingesteld op ‘Nee, alleen gesprekken’.

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


## Overig

### Wordt _mijn_ e-mailprovider ondersteund door Delta Chat?

- Hoogstwaarschijnlijk wel :)
  Sommige providers verwachten echter bepaalde opties. Bekijk hiervoor het [provideroverzicht](https://providers.delta.chat)


### Delta Chat gebruik e-mail. Is het dan wel een _Instant_ Messenger?

- Het versturen en ontvangen van berichten gebeurt doorgaans binnen enkele seconden. Soms
  duurt het iets langer, maar dat komt ook wel eens voor bij
  andere IM's.
- Het werkt het snelst als beide partijen de app actief gebruiken. Soms duurt het
  iets langer als de app op de achtergrond draait.
- Het ontvangen van berichten kan dan enkele minuten duren omdat zowel Android als iOS Delta Chat
  regelmatig onderbreken, en slecht soms weer
  hervatten. Deze vertraging is doorgaans merkbaarder op iOS dan op Android.
- Let op: Delta Chat maakt geen gebruik van Google Cloud Messaging (GCM) of Apple's
  Push Notification Service (APNS) omdat deze gebruikersacties bijhouden en
  centraal beheer vereisen, wat Delta Chat zoveel mogelijk wil voorkomen.
- Maar dat Android en iOS achtergrondapps onderbreken is een
  algemeen probleem waar veel apps last van hebben. Ga naar
  [dontkillmyapp.com](https://dontkillmyapp.com/) voor meer informatie hieromtrent.


### Is Delta Chat compatibel met Protonmail/Tutanota/Criptext?

- Ja en nee.
- Nee, je kunt je Protonmail-, Tutanota- of Criptext-account niet gebruiken in Delta
  Chat - ze hebben immers geen imap-ondersteuning.
- Maar je kunt Delta Chat wél gebruiken om berichten te versturen aan mensen die
  Protonmail, Tutanota of Criptext gebruiken. Deze berichten zijn echter niet eind-tot-eind
  versleuteld. De eind-tot-eindversleuteling van deze providers werkt alleen
  binnen de platformen zelf en is dus daarbuiten niet compatibel.
- Delta Chat kan e2e-versleuteling gebruiken met andere e-mailproviders met elke
  [https://autocrypt.org/dev-status.html](e-mailapp die Autocrypt gebruikt).


### Ik wil graag meer weten over de gebruikte technieken. Waar kan ik meer informatie vinden?

- Bekijk de pagina [Door Delta Chat gebruikte standaarden]({% include standards-url %}).

### Hoe wordt de ontwikkeling van Delta Chat gefinancierd?

Delta Chat ontvangt geen risicokapitalen,
staat niet onder bewindvoering en ervaart geen enkele druk om winst te maken of om 
gebruikers en hun vrienden door te verkopen aan adverteerders (of erger). 
We maken gebruik van publieke financieringsprocessen, zoals EU- en VS-financiering, om ons doel,
het opzetten van een gedecentraliseerd en divers gesprekssysteem, te verwezenlijken,
op basis van vrije en opensource-gemeenschapsontwikkelingen.

De Delta Chat-ontwikkeling wordt tot op heden gefinancierd door deze grote spelers:

- Het [NEXTLEAP](https://nextleap.eu)-EU-project heeft het onderzoek
  naar en de implementatie van goedgekeurde groepen en setup-contact-protocollen in 2017 en 2018 gefinancierd,
  evenals eind-tot-eindversleuteling via [Autocrypt](https://autocrypt.org)..

- [Open Technology Fund](https://opentechfund.org) heeft twee subsidies toegekend.
  De eerste subsidie, voor 2018/2019, ter waarde van ong. $200,000, heeft enorm geholpen om de Android-app 
  te verbeteren en een bètaversie van de computerclient vrij te geven. 
  Verder hebben we onderzoek kunnen doen naar het uiterlijk in relatie tot mensenrechten - 
  bekijk onze conclusie hier: [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  De tweede subsidie, voor 2019/2020, ter waarde van ong. $300,000, loopt nog en ondersteunt ons bij het 
  vrijgeven van de iOS-client, het overzetten van de code van de kernbibliotheek naar Rust en
  het implementeren van nieuwe functies op alle platformen.

- De [NLnet foundation](https://nlnet.nl/) heeft in 2019 en 2020 €46.000 toegekend
  voor het voltooiien van de Rust- en Python-bindings en het opzetten van het Chatbot-ecosysteem. 

- In 2021 ontvingen we aanvullende EU-financiering voor twee toekomstige internet-
  voorstellen, te weten [EPPD - ‘e-mail provider portability directory’](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~€97.000) en [AEAP - ‘email address porting’](https://nlnet.nl/project/EmailPorting/) (~€90.000), wat geleid heeft tot betere ondersteuning voor meerdere accounts, een verbeterd QR-codesysteem en vele netwerk-gerelateerde verbeteringen op alle besturingssystemen.

- In 2021 en 2022 ontvingen we *Internetvrijheid*sfinanciering (~$500,000) van de
  ‘U.S. Bureau of Democracy, Human Rights and Labor’ (DRL). 
  Met deze financiering kunnen we Delta Chat eindelijk stabieler maken, 
  evenals compatibeler met meer e-mailservers wereldwijd. Ook kunnen we extra beveiliging toevoegen
  voor geheim communiceren vanaf locaties met internetcensuur of waar het internet is afgesloten.

- Soms ontvangen we eenmalige donaties van privépersonen, waar we
  uiteraard zeer dankbaar voor zijn. Zo ontvingen we in 2021 een zeer royaal bedrag op onze rekening, te weten €4000, 
  met als bijschrift “Ga zo door met dit goede project!”. We gebruiken dit soort bedragen om
  ontmoetingen tussen ontwikkelaars te organiseren of voor ad-hoc-uitgaven die niet voorzien waren.

- Ook hebben verschillende experts en enthousiastelingen op vrijwillige basis bijgedragen
  aan Delta Chat, en sommige doen dat nog steeds. Zij hebben geen of bijna geen
  geld ontvangen. Zonder hen zou Delta Chat niet zo geweldig zijn als het vandaag
  de dag is.

Bovenstaande fiancieringen zijn opgezet door merlinux GmbH in
Freiburg (Duitsland) en daarna toegekend aan meer dan 12 vrijwilligers wereldwijd. 

Financiering voor de tweede helft van 2022 en vooral 2023 is een actieve kwestie en baart ons zorgen. We willen in elk geval niet meer zoveel afhankelijk zijn van overheidsfinanciering. Zie onze [bijdragekanalen](https://delta.chat/en/contribute) om te zien welke ondersteuning we precies zoeken.
