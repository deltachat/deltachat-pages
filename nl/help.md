---
title: Vraag en antwoord
lang: nl
render_toc: true
header: Veelgestelde vragen
---


## Wat is Delta Chat?

Delta Chat is een nieuw soort gespreksapp waarmee je chat via e-mail, indien mogelijk extra versleuteld middels Autocrypt.
**Je hoeft je nergens te registreren - je kunt gewoon je bestaande e-mailaccounh gebruiken.**

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

Delta Chat toont automatisch:

- Berichten van contactpersonen die in je **adresboek** staan
- Berichten van contactpersonen waarmee **jij contact hebt opgenomen**
- **Antwoorden** op door jou verstuurde berichten

Overige berichten verschijnen niet automatisch; je vindt deze terug in het hoofdmenu onder **Contactpersoonverzoeken**. Van daaruit kun je, desgewenst, een gesprek beginnen.


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


## Groepen

### Groepen aanmaken

- Open het ‘menu met de drie puntjes’ rechtsboven in het gespreksoverzicht, kies **Nieuw gesprek** en daarna **Nieuwe groep**.
- Kies dan de **groepsleden** en druk op het vinkje rechtsboven. Daarna kun je een **groepsnaam** opgeven.
- Zodra je het **eerste groepsbericht** hebt verstuurd, worden alle deelnemers op de hoogte gebracht en kunnen zij antwoorden versturen (de groep blijft onzichtbaar voor anderen zolang jij geen bericht verstuurt).


### Deelnemers toevoegen aan een groep

- Alle deelnemers hebben **dezelfde rechten**: iedereen kan deelnemers toevoegen of verwijderen.
- Open het gesprek en druk op de groepsnaam om deelnemers toe te voegen of te verwijderen.


### Wat is een ‘goedgekeurde groep’ en waarom is dit een experimentele functie? 

- Een goedgekeurde groep is een gesprek waarin extra beveiliging zit tegen
  kwaadwillenden.  Alle berichten in een goedgekeurd gesprek zijn e2e-versleuteld, en
  personen kunnen deelnemen door een ‘QR-uitnodigingscode’ te scannen.  Alle deelnemers zijn 
  dus gekoppeld middels elkaars uitnodigingen, wat 
  cryptographische consistentie biedt tegen netwerk- of provider-aanvallen. 
  Bekijk https://countermitm.readthedocs.io/en/latest/new.html
  voor meer informatie omtrent deze functie. 

- Statusupdate december 2019: een ‘goedgekeurde groep’ blijft experimenteel.
  De functie wordt voortdurend verbeterd en vele bugs zijn opgelost sinds
  deze werd toegevoegd in 2018.  Echter, het komt nog steeds voor, vooral 
  bij grote groepen, dat er dingen misgaan. Zo kunnen bijv. berichten soms onleesbaar 
  worden.  Begin 2020 volgt een diepgaand beveiligingsonderzoek, en worden er
  verschillende ontwikkelingen gedaan omtrent de qr-join-protocollen. Het label
  ‘experimenteel’ zou dus in de nabije toekomst moeten verdwijnen. 


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


## Versleuteling {#encryption}

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

- Ook kun je de sleutel handmatig importeren via ‘Instellingen --> Geavanceerd --> Sleutels beheren’. Let op: zorg dat de sleutel niet met een wachtwoord beveiligd is.

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

- Ga op je oude apparaat naar ‘Instellingen --> Gesprekken en media --> Back-up’. Voer je
  ontgrendelpincode, -patroon of -wachtwoord in. Druk vervolgens op ‘Nu back-uppen’. Er wordt een back-up opgeslagen op je apparaat. Zet deze over
  naar je nieuwe apparaat.
- Pak het nieuwe apparaat. Druk op het inlogscherm op ‘Back-up importeren’ (log dus niet in op je account). Na het importeren zijn je gesprekken, privésleutels
  en media overgezet op je nieuwe apparaat.
- Je kunt nu beide apparaten gebruiken voor het ontvangen en versturen van
  E2E-versleutelde berichten van/naar je gesprekspartners.

### Bestaan er plannen om een Delta Chat-webclient te maken?

- Er zijn nog geen concrete plannen; alleen wat gedachtenspelingen.
- Er zijn 2 à 3 obstakels, maar alle vereisen zware
  inspanningen. Momenteel ligt voor ons de focus op stabiele uitgaven maken voor appwinkels
  (Google Play/iOS/Windows/macOS/Linux-pakketbronnen).
- Als je een webclient nodig hebt omdat je geen software mag installeren op
  je computer, dan kun je de meeneembare (portable) versie gebruiken van de Windows-client,
  of de AppImage van de Linux-client. Deze kun je downloaden op
 [get.delta.chat](https://get.delta.chat).


### Waarom kan ik kiezen om Postvak IN te negeren?

Dit is een experimentele functie voor mensen die problemen ervaren
met bepaalde serverregels. Niet alle providers ondersteunen dit, maar bij sommige
kun je alle e-mails met een ‘Chatversie’-kop verplaatsen naar de DeltaChat-map.
Normaal doet de Delta Chat-app dit uit zichzelf.

Het negeren van Postvak IN is nuttig als je:

- een serverregel hebt ingesteld om alle berichten met een ‘Chatversie’-kop te verplaatsen naar de DeltaChat-map, en
- de optie ‘Klassieke e-mails tonen’ hebt ingesteld op ‘Nee, alleen gesprekken’.

In dat geval hoeft Delta Chat Postvak IN niet te controleren.

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


## Ik wil graag meer weten over de gebruikte technieken. Waar kan ik meer informatie vinden?

- Bekijk de pagina [Door Delta Chat gebruikte standaarden]({% include standards-url %}).

### Hoe wordt de ontwikkeling van Delta Chat gefinancierd?

Delta Chat ontvangt geen risicokapitaal, heeft geen schulden en staat niet onder druk om grote winst te moeten maken. Ook is er geen enkele druk om gegevens van gebruikers, hun vrienden en familie te verkopen aan adverteerders (of erger).

De Delta Chat-ontwikkeling wordt tot op heden gefinancierd door vier grote spelers:

- Het [NEXTLEAP](https://nextleap.eu)-EU-project heeft het onderzoek
  naar en de implementatie van goedgekeurde groepen en setup-contact-protocollen in 2017 en 2018
  gefinancierd.

- [Open Technology Fund](https://opentechfund.org) heeft twee subsidies toegekend.
  De eerste subsidie, voor 2018/2019, ter waarde van ong. $200,000, heeft enorm geholpen om de Android-app 
  te verbeteren en een bètaversie van de computerclient vrij te geven. 
  Verder hebben we onderzoek kunnen doen naar het uiterlijk in relatie tot mensenrechten - 
  bekijk onze conclusie hier: [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  De tweede subsidie, voor 2019/2020, ter waarde van ong. $300,000, loopt nog en ondersteunt ons bij het 
  vrijgeven van de iOS-client, het overzetten van de code van de kernbibliotheek naar Rust en
  het implementeren van nieuwe functies op alle platformen. Bekijk ons 
  [blog](https://delta.chat/en/blog) voor meer informatie.

- De [NLnet foundation](https://nlnet.nl/) heeft Delta Chat €46.000 toegekend
  voor het voltooiien van de Rust- en Python-bindings en het opzetten van het Chatbot-ecosysteem. 

- Ook hebben verschillende experts en enthousiastelingen op vrijwillige basis bijgedragen
  aan Delta Chat, en sommige doen dat nog steeds. Zij hebben geen of bijna geen
  geld ontvangen. Zonder hen zou Delta Chat niet zo geweldig zijn als het vandaag
  de dag is.

Bovenstaande fiancieringen zijn opgezet door merlinux GmbH in
Freiburg (Duitsland) en daarna toegekend aan bijna 12 vrijwilligers. 

De financiering voor 2020/2021 moet nog worden opgezet. We nemen verschillende
mogelijkheden door met organisaties en partners. Daarnaast overwegen
we een donatiesysteem op te zetten. Sterker nog: daar zijn we al een beetje mee begonnen
([Delta Chat / Liberapay-donatieaccount](https://liberapay.com/delta.chat/)),
maar we hebben dit nog niet openbaargemaakt.  Tevens is er tot dusver €3000-€4000
gedoneerd aan Bjoern's (de oorspronkelijke ontwikkelaar van Delta Chat) PayPal en Bitcoin.
