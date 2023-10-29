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
- _Eind-tot-eindversleuteling_ met behulp van Autocrypt.
- Volledig _open source_ en gebaseerd op _standaarden_.
- _Flexibel: ingebouwde ondersteuning voor [meerdere accounts](#multiple-accounts).


### Welke berichten vind ik terug in Delta Chat?

Standaard toont Delta Chat alle e-mails.

Je kunt dit aanpassen via Instellingen → Gesprekken en media → Klassieke e-mails tonen. Vervolgens heb je keuze uit de volgende opties:

- ‘Alleen gesprekken’: er worden alleen berichten en antwoorden van andere
   Delta Chat-gebruikers getoond. Dit is handig als je hetzelfde account ook voor
   normale e-mails gebruikt en is de standaardinstelling.
- ‘Alles’: alle e-mails worden getoond. Dit is handig als je Delta Chat voor al je e-mails gebruikt, zodat je geen bericht hoeft te missen.
- ‘Alleen goedgekeurde contactpersonen’: Delta Chat toont alle e-mails van contactpersonen
   waarmee je al gecommuniceerd hebt. Nieuwe berichten verschijnen
   alleen als ze vanuit Delta Chat verstuurd zijn.
   Hiermee kun je per keer bepalen of je een gesprek in Delta Chat of je e-mailapp wilt voeren.


### Wat nu als ik een bericht verwacht van iemand die ik nog niet heb aangeschreven?

- Als een bericht afkomstig is van een onbekende contactpersoon, dan wordt er een **verzoek** getoond.
   Accepteer het verzoek om te kunnen antwoorden.
- Ook kun je het verzoek verwijderen als je op dat moment geen gesprek met ze wilt voeren.
   Hierdoor wordt het bericht in kwestie niet op de server verwijderd, maar alleen op je apparaat, zodat je in een andere app kunt antwoorden.
- Als je een verzoek verwijderd, dan worden toekomstige berichten nog steeds als verzoek getoond,
   zodat je te allen tijde kunt bepalen of je het alsnog wilt accepteren. Als je écht geen contact wilt leggen, overweeg dan
   om de persoon in kwestie te **blokkeren**.


### Ondersteunt Delta Chat afbeeldingen, video's en ander soort bijlagen?

- Ja. Plattetekstberichten en e-mailbijlagen worden apart getoond. Uitgaande berichten worden, indien nodig, automatisch voorzien van bijlagen.

- Om de prestaties te verhogen, worden afbeeldingen standaard geoptimaliseerd en verkleind verstuurd, maar je kunt ze als een bestand verzenden om het origineel te sturen.

<h3 id="multiple-accounts">Hoe kan ik wisselen van account?</h3>

Je kunt meerdere accounts toevoegen, zowel in de mobiele als computerapp:
- Via de menuknop → ‘Ander account’ (Android en computer);
- Via je profielfoto → ‘Account toevoegen’ (iOS)

Lees ook [hoe je accounts aan meerdere apparaten toevoegt](#multiclient).

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
  Gearchiveerde gesprekken zijn te allen tijde te bekijken boven de lijst of via een zoekopdracht.

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
    [webxdc app](#webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


### Hoe kan ik mijn account verwijderen?

Delta Chat maakt gebruik van je e-mailaccount,
dus de verwijderprocedure is afhankelijk van je provider.
We hebben geen zeggenschap over je account,
dus helaas kunnen we je daar niet bij helpen.

Als je je account wilt behouden maar Delta Chat
niet wilt verwijderen, verlaat dan groeps-
gesprekken voordat je Delta Chat verwijdert.


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

- Inschakelen kan als volgt: **Oude berichten verwijderen → Berichten van server verwijderen**
  in de gespreks- en mediainstellingen. Je kunt kiezen uit ‘Onmiddelijk’ en ‘Na 1 jaar’.
  Alle e-mails ontvangen door Delta Chat worden na deze tijdspanne van de server verwijderd.

- Let op: als je Delta Chat op meer dan één apparaat gebruikt, bewaar de berichten dan
wél op de server, in elk geval totdat ze op het andere apparaat zijn binnengehaald. Stel
automatisch verwijderen hiervoor in op ‘na één dag’ of iets dergelijks,
afhankelijk van hoe vaak je het andere apparaat gebruikt.


### Wat gebeurt er als ik ‘Oude berichten van server verwijderen’ inschakel? {#delold}

- Als je ruimte wilt besparen op je apparaat, dan kun je er voor kiezen om oude
  berichten automatisch te verwijderen.
- Inschakelen kan via de sectie ‘Gesprekken en media’ in de instellingen. Je kunt een periode tussen
  ‘na één uur’ en ‘na één jaar’ kiezen. *Alle berichten die ouder zijn, worden verwijderd.


## Versleuteling and Security 

### Which standards are used for end-to-end encryption? 

[Autocrypt](https://autocrypt.org) is used for automatically
establishing E2E-encryption with contacts and group chats. 
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure). 

[Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html) 
are used to implement [verified groups](#verifiedchats) 
which provide pervasive protection against network attacks and compromised servers.
Verified groups enforce all messages in a chat to be safely E2E-encrypted
with an unparalleled ease of use that avoids users having to learn about 
public key cryptography, key management or key verification. 


### When will messages be E2E-encrypted? 

After a first message was received from a Delta Chat or other Autocrypt-capable contact, 
Delta Chat defaults to using E2E-encryption with that contact (and vice versa). 
When creating a group chat with contacts where E2E-encrypted is individually in place,
all group members will automatically use E2E-encryption with each other and in the group. 
However, if you add a contact that lacks E2E-encryption, 
the group chat will not use E2E-encryption. 

If you want to be sure to always and only use E2E-encryption in a group
use [verified chat groups](#verifiedchats) 
which additionally protects against compromised or malfeasant e-mail servers. 


### Are attachments (pictures, files, audio etc.) E2E-encrypted? 

Yes. 
When we talk about an "E2E-encrypted message" 
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
and only displays a padlock security indicator on a message
if the whole message is properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publically discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019](https://delta.chat/assets/blog/2019-first-security-review.pdf). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for E2E-encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking E2E-encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing E2E-encryption is
only one part of "user outcomes",
see also our answers to [device-seizure](#device-seizure)
and [message-metadata](#message-metadata) questions. 


### Is Delta Chat vulnerable to EFAIL?

No, [Delta Chat never was vulnerable to EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
because its OpenPGP implementation [rPGP](https://github.com/rpgp/rpgp) 
uses Modification Detection Code when encrypting messages
and returns [an error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
if the Modification Detection Code is incorrect.

Delta Chat also never was vulnerable to the "Direct Exfiltration" EFAIL attack
because it only decrypts `multipart/encrypted` messages
which contain exactly one encrypted and signed part,
as defined by the Autocrypt Level 1 specification. 


### Is a message exposed in cleartext if E2E-encryption is not available? {#tls}

No,
this does not necessarily mean that the message is exposed in cleartext.

Delta Chat always uses ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)) encryption
which secures connections between your device and your e-mail provider
unless you explicitly disable it.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).

Moreover, the connection between your and the recipient's e-mail provider 
will today typically be transport-encrypted as well. 
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced in all inter e-mail server communications
in which case Delta Chat communications will never be exposed in cleartext to the network 
even if the message was not E2E-encrypted. 

Note that maintaining E2E-encryption on top of TLS encryption is highly advisable 
because it provides safety between your device and a contact's device,
irrespective of any hops over potentially compromised e-mail servers. 


### How does Delta Chat protect metadata in messages? {#message-metadata}

Delta Chat protects most message metadata by putting the following information
into the E2E-encrypted part of messages: 

- Subject line 
- Group avatar and name 
- MDN (read receipt) requests (`Chat-Disposition-Notification-To`)
- Disappearing message timer (`Ephemeral-Timer`) 
- `Chat-Group-Member-Removed`, `Chat-Group-Member-Added` 
- `Secure-Join` header containing secure join commands
- Notification about enabling location streaming
- WebRTC room URL

E-Mail servers do not get access to this protected metadata 
but they do see the message date as well as the message size,
and, more importantly, the sender and receiver addresses. 
E-mail servers need receiver addresses to route and 
deliver messages to recipient's devices. 


### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting e-mail servers 
as well as against the threat of device seizure
we recommend to use a Delta Chat optimized [e-mail server instance](https://delta.chat/serverguide)
to create pseudonymous temporary accounts through QR-code scans.
Note that Delta Chat apps on all platforms support multiple accounts 
so you can easily use action-specific "1-week" or "1-month" accounts next to your "main" account
with the knowledge that all temporary account data, along with all metadata, will be deleted. 
Moreover, if a device is seized then contacts using temporary e-mail accounts 
can not be identified easily, as compared to messengers which reveal 
phone numbers in chat groups which in turn are often associated with passport identities. 


### How can I verify E2E-security with a contact? 

If you are within immediate distance of your contact,
select **QR Invite code** on one device and then **Scan QR code**
from within Delta Chat on the other device. 
If both devices are online, 
they will setup a chat with each-other (if it doesn't exist already)
and both will see a "sender verified" system message in their chat. 
Showing and scanning a QR code can also happen in any "second channel" 
such as a video call or another messenger. 

If QR code scanning is for some reason not viable, 
you may check the E2E encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop). 
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.


### How can I check the encryption status of messages?

A little **padlock** in a message bubble denotes 
that the message was properly E2E-encrypted from the given sender.
If there is **no padlock**, the message was not properly E2E-encrypted 
most likely because the sender uses an app or webmail interface 
without support for E2E--encryption.


### Why do I see unencrypted messages? 

If a contact uses a non-Autocrypt e-mail app, 
all messages involving this contact (in a group or 1:1 chat) 
will not be E2E-encrypted, and thus not show a "padlock" with messages. 
Note that even if your contacts use Delta Chat on their account, 
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages. 
Replying unencrypted to unencrypted messages is mandated by Autocrypt 
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app. 

If you need a safely E2E-encrypted chat with contacts
who are using their account also with Autocrypt-incapable apps (e.g. webmail) 
it's best to create a [verified group chat](#verifiedchats) with them. 
Any message sent into a verified group chat will be E2E-encrypted
irrespective of the last incoming message from a contact. 


### How can I ensure message E2E-encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is using [verified groups](#verifiedchats) 
and turning on disappearing messages.

Verified groups are always encrypted and protected against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) 
and turning on "disappearing messages" deletes the messages 
on the server after a user-configured time. 

If you don't need a longer-lived copy of your messages on the server, 
you can also turn on ["delete messages from server automatically"](#delold).


### Ondersteunt Delta Chat Perfect Forward Secrecy?

No, Delta Chat doesn't support Perfect Forward Secrecy (PFS).
This means that if your Delta Chat private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.

Note, however, that if anyone obtains to your decryption keys, 
they will typically also be able to obtain your messages, 
irrespective if Perfect Forward Secrecy is in place or not. 
The typical real-world situation for leaked decryption keys is device seizure
which we discuss in our answer [on metadata and device seizure](#device-seizure). 

It is possible that Delta Chat evolves to support Perfect Forward Secrecy,
because OpenPGP is just a container for encrypted messages 
but encryption key management (and thus key rotation or key "ratcheting") 
could be organized in flexible ways. 
See [Seqouia's PFS prototype](https://gitlab.com/sequoia-pgp/openpgp-dr)
for existing experiments in the OpenPGP implementor community. 


### Kan ik mijn bestaande privésleutel hergebruiken?

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

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


## Multi-client {#multiclient}

### Kan ik Delta Chat op meerdere apparaten tegelijk gebruiken?

Ja, Delta Chat 1.36 bevat een nieuwe, experimentele functie om hetzelfde account op meerdere apparaten te gebruiken:

- Controleer of beide apparaten verbonden zijn met hetzelfde (wifi)netwerk

- Ga op het eerste apparaat naar **Instellingen → Tweede apparaat toevoegen**, ontgrendel - indien nodig - het scherm
  en wacht totdat de QR-code in beeld verschijnt.

- [Installeer Delta Chat](https://get.delta.chat) op het tweede apparaat.

- Start Delta Chat op het tweede apparaat, kies **Toevoegen als tweede apparaat** en scan de QR-code met het eerste apparaat.

- De overdracht zou na een paar seconden moeten beginnen en beide apparaten zouden de **voortgang** moeten tonen.
  Wacht vervolgens tot de overdracht op beide apparaten is afgerond.

In tegenstelling tot veel andere gespreksapps, werkt Delta Chat **onafhankelijk
op beide apparaten**. Hierdoor hoef je niet het ene apparaat bij de hand te hebben om het andere te laten werken.


### Probleemoplossing

- Controleer of beide apparaten verbonden zijn met **hetzelfde (wifi)netwerk**

- Wellicht is een firewall actief op je apparaat,
  welke problemen kan veroorzaken (met name op Windows).
  **Schakel de firewall op beide apparaten uit** of **voeg een uitzondering voor Delta Chat toe** en probeer het opnieuw.

- Zorg voor **voldoende ruimte** op het bestemmingsapparaat

- Zorg dat beide apparaten tijdens de overdracht **ingeschakeld blijven** en niet op zwart/in de slaapstand gaan.
  Sluit Delta Chat niet af.
  (We proberen om de app zo goed als mogelijk op de achtergrond te laten werken, maar [systemen sluiten apps helaas wel eens eigenhandig af](https://dontkillmyapp.com)).

- Ben je **al ingelogd** op het bestemmingsapparaat?
  Je kunt meerdere accounts per apparaat gebruiken - voeg dus [een tweede account toe](#multiple-accounts).

- Als je nog steeds problemen ervaart of je de **QR-code niet kunt scannen**,
  volg dan onderstaande stappen omtrent handmatige overzetting


### Handmatig overzetten

Deze methode is vooral bedoeld voor situaties waarin ‘Tweede apparaat toevoegen’ niet lukt.

- Ga op je oude apparaat naar ‘Instellingen --> Gesprekken en media --> Back-up’. Voer je
  ontgrendelpincode, -patroon of -wachtwoord in. Druk vervolgens op ‘Nu back-uppen’. Er wordt een back-up opgeslagen op je apparaat. Zet deze over
  naar je nieuwe apparaat.
- Pak het nieuwe apparaat. Druk op het inlogscherm op ‘Back-up importeren’ (log dus niet in op je account). Na het importeren zijn je gesprekken, privésleutels
  en media overgezet op je nieuwe apparaat.
- Als je **iOS** gebruikt en problemen ervaart, volg dan
  [deze handleiding](https://support.delta.chat/t/import-backup-to-ios/1628).
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


## webxdc apps {#webxdc}

In Delta Chat, you can share [webxdc apps](https://webxdc.org), attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger.


### How private are webxdc apps?

- webxdc apps can not send data to the Internet, or download anything.
- A webxdc app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a webxdc app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the webxdc app as well.
- This also means: it can be a privacy risk to open webxdc apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get webxdc apps?

- In general, anyone can share webxdc apps with each
  other without restrictions.
- You can [send 'hi' to xstore@testrun.org](https://delta.chat/en/2023-08-11-xstore)
  to see an experimental webxdc appstore.
  All of the apps are open source and for free.
- Many people write their own webxdc apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own webxdc apps?

- webxdc apps are just zip files containing html, css, and javascript code.
- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.
- All else you need to know is written in the
  [documentation](https://docs.webxdc.org/).
- If you have question, you can ask others with experience in the [Delta Chat
  Forum](https://support.delta.chat/c/webxdc/20).


## Experimentele functies

We zijn zeer benieuwd naar je feedback. Ervaar je problemen of wil je
ideeën delen? Neem dan deel aan ons [forum](https://support.delta.chat). (Ben je een
echte tester? Registreer je dan via ‘Registreren → met Delta Chat’!)

### Hoe kan ik audio- en videogesprekken voeren in Delta Chat?

- Audio-/Videogesprekken kunnen worden ingeschakeld in de sectie ‘experimentele functies’ in de
  geavanceerde instellingen. Kies daar een ‘instantie’. 
- Als je anderen uitnodigt, dan wordt het gesprek meteen in je webbrowser of een app
  geopend. Anderen ontvangen een e-mail met een link naar de jitsi-/BBB-kamer. Op deze
  manier is het gesprek compatibel met gesprekspartners die geen gebruikmaken van Delta Chat.
- Let op: de ander hoort geen beltoon en je gesprekspartners
  worden niet gestoord door de uitnodiging.
- Je kunt kiezen uit verschillende videogespreksdiensten die op basis van links werken. Voeg hiervoor de
  link toe in de instellingen.
- Voorbeeld: als je gebruik wilt maken van Jitsi Meet, dan kun je
  `https://meet.jit.si/$KAMER` invoeren. `$KAMER` is hierbij een willekeurige waarde,
  zodat er telkens een nieuwe jitsi-kamer als je iemand belt.


### Wat is een ‘goedgekeurde groep’ en waarom is dit een experimentele functie? {#verifiedchats}

Verified groups carry a green verification checkmark in the group title that guarantees
that all messages are E2E-encrypted and can not be read or altered by e-mail servers. 
Each member in a verified group chat can add already verified contacts 
or tap "QR Invite code" to let invitees scan the code to get verified and added ("secure-join").
This "secure-join" protocol ensures that all verified group chat members 
are connected with each other through a chain of verifications ("web of trust"), 
guaranteeing E2E-encryption consistency even if e-mail servers are compromised or malfeasant.
See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
for a detailed security discussion. 

Note that "1:1" chats are currently only opportunistically encrypted (Autocrypt). 
You need to create a verified group with your contact 
to ensure that all messages will be safely E2E-encrypted between you two. 
We plan to introduce verified 1:1 chats around the end of 2023, 
simplifying and extending the guarantees of verified E2E-encryption for all chat types. 
Until then verified groups will remain classified as an experimental feature 
although they are widely and successfully used already, 
and reported bugs have been continously fixed in the last years. 


### Wat zijn verzendlijsten en hoe gebruik ik deze?

- Met behulp van verzendlijsten kun je berichten naar meerdere ontvangers tegelijk versturen. Als zij vervolgens
  antwoorden, dan wordt het antwoord in het een-op-eengesprek getoond. De
ontvangers kunnen elkaar niet zien.
- Technisch gezien is een verzendlijst een e-mail met meerdere ontvangers in de bcc.
- Schakel deze functie in in de sectie ‘experimentele functies ’in de
  geavanceerde instellingen. Vervolgens kun je in het venster ‘Nieuw gesprek’ een verzendlijst
samenstellen.
- Let op: als je gebruikmaakt van meer dan één apparaat, dan worden verzendlijsten momenteel
  niet gesynchroniseerd.
- Ook zijn zulke berichten niet versleuteld. Versleuteling zou immers de
  anonimiteit doorbreken omdat iedereen van elkaar kan zien wie de berichten ontvangt.
  (En het versturen van meerdere individuele e-mails tegelijk zou funest zijn voor de beperkingen van sommige e-maildiensten en het
  netwerkverbruik).


### Hoe kan ik mijn locatie delen met anderen?

- Je kunt locatiedeling inschakelen in de sectie ‘experimentele functies’ in
  de geavanceerde instellingen.
- Als je vervolgens een locatie wilt delen, dan kun je dat doen door ‘locatie’ te kiezen als
  "bijlage". Vervolgens kun je een tijdspanne kiezen zodat je locatie niet onbeperkt
  wordt gedeeld met gesprekspartners. De tijdspanne ligt tussen 5 minuten en 6 uur.
- Als je locatie wijzigt, dan zien anderen dat op de kaart in het
  gesprek.
- Als je kaarten en locaties van anderen wilt bekijken, schakel deze functie dan ook in
  in de geavanceerde instellingen.
- Let op: met deze functie deel je je locatie met iedereen.
  Om de kaart te tonen worden er kaartdelen opgehaald van
  mapbox.com. Als je dus de kaart bekijkt, dan wordt aan mapbox.com gevraagd om een kaart van een
  bepaald gebied te tonen. Als je dit privacygevoelig vindt, dan kun je deze functie beter niet gebruiken.
  We zijn echter hard aan het zoeken naar een gedecentraliseerd alternatief voor Mapbox!
- Op computers kan je locatie doorgaans niet worden bepaald. In zulke gevallen kun je
  rechts klikken op de kaart en handmatig een locatie aangeven, welke vervolgens als bericht met kaart
  wordt verstuurd.


### Wat beveiligt de experimentele databankversleuteling precies?

- Momenteel is databankversleuteling nog experimenteel en dus nog niet volledig
  betrouwbaar. Gebruik, indien mogelijk, de versleuteling van je besturingssysteem.
- Databankversleuteling versleutelt momenteel alléén de rijen en
  kolommen van de databank. Hierdoor zijn je berichten veilig,
  maar je bijlagen niet.
- Op iOS en Android worden de sleutels opgeslagen in de sleutelbos van het systeem.
  Versleuteling is daar dus niet zo betrouwbaar als het besturingssysteem in kwestie.
- Op computers wordt databankversleuteling nog niet ondersteund omdat er geen
  standaardmethode is om de sleutels op de verschillende systemen op te slaan.


### Waarom kan ik kiezen om alleen de DeltaChat-map te controleren?

Dit is een experimentele functie voor mensen die problemen ervaren
met bepaalde serverregels. Niet alle providers ondersteunen dit, maar bij sommige
kun je alle e-mails met een ‘Chatversie’-kop verplaatsen naar de DeltaChat-map.
Normaal doet de Delta Chat-app dit uit zichzelf.

Dit is handig als jullie **beide**:

- een serverregel hebt ingesteld om alle berichten met een ‘Chatversie’-kop te verplaatsen naar de DeltaChat-map, en
- de optie ‘Klassieke e-mails tonen’ hebt ingesteld op ‘Nee, alleen gesprekken’.

In dat geval kan Delta Chat Postvak IN negeren en alleen nieuwe gesprekken in de Delta Chat-map te zoeken.


### Hoe kan ik mijn e-mailadres veranderen in de app?

1. Wijzig je adres in de sectie ‘Wachtwoord en account’ in de appinstellingen en
   voer je wachtwoord (en, indien nodig, de serverinstellingen) van het nieuwe
   account in.
2. Verstuur eventueel e-mails automatisch van je oude naar je nieuwe
   e-mailadres door.
3. Laat je contactpersonen weten dat je e-mailadres gewijzigd is. Als je dat in een
   goedgekeurde groep doet, dan wordt bij het adres bij iedereen automatisch gewijzigd.

Meer informatie hieromtrent is te vinden in ons [blogartikel](https://delta.chat/en/2022-09-14-aeap).


## Overig

### Wordt _mijn_ e-mailprovider ondersteund door Delta Chat?

- Hoogstwaarschijnlijk wel :)
  Sommige providers verwachten echter bepaalde opties. Bekijk hiervoor het [provideroverzicht](https://providers.delta.chat)


### Ik wil mijn eigen e-mailserver opzetten. Hoe kan ik dat het beste doen?

- De meeste e-mailservers werken prima, maar wij raden een
  combinatie van mailcow en mailadm aan, zoals uitgelegd op [ons
  blog](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- In de [installatiehandleiding op onze website](serverguide) lees je hoe je dit opzet.


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
  [e-mailapp die Autocrypt gebruikt](https://autocrypt.org/dev-status.html).


### Ik wil graag meer weten over de gebruikte technieken. Waar kan ik meer informatie vinden?

- Bekijk de pagina [Door Delta Chat gebruikte standaarden]({% include standards-url %}).

### Heeft Delta Chat ooit onafhankelijke beveiligingscontroles ondergaan? {#security-audits}

Delta Chat onderging al drie onafhankelijke beveiligingscontroles:

- In 2019 heeft [Include Security](https://includesecurity.com) Delta Chats
  [PGP-](https://github.com/rpgp/rpgp) en
  [RSA-](https://github.com/RustCrypto/RSA)bibliotheken geanalyseerd.
  Er werden geen grote problemen aangetroffen,
  maar wel twee belangrijke die nadien werden opgelost.
  Ook werden enkele redelijk belangrijke en minder belangrijke aan het licht gebracht,
  maar die konden in Delta Chats specifieke implementatie niet worden misbruikt.
  Ondanks dat zijn enkele daarvan nadien alsnog opgelost.
  Het [volledige verslag is hier na te lezen](../assets/blog/2019-first-security-review.pdf).

- In 2020 heeft [Include Security](https://includesecurity.com) Delta Chats
  Rust-[kern](https://github.com/deltachat/deltachat-core-rust/),
  [imap-](https://github.com/async-email/async-imap),
  [smtp-](https://github.com/async-email/async-smtp) en
  [tls-](https://github.com/async-email/async-native-tls)bibliotheken geanalyseerd.
  Er werden geen grote problemen aangetroffen.
  Wél werden er een paar redelijk belangrijke zwakheden aangetroffen,
  maar geen die de meeste Delta Chat-gebruikers direct trof
  omdat ze afhankelijk waren van de gebruikte omgeving.
  Omwille van gebruiks- en compatibiliteitsredenen,
  konden we ze niet allemaal oplossen
  en besloten we om beveiligingsaanbevelingen aan getroffen gebruikers te doen.
  Het [volledige verslag is hier na te lezen](../assets/blog/2020-second-security-review.pdf).

- Aan het begin van 2023 heeft [Cure53](https://cure53.de) de transportversleuteling van
  Delta Chats netwerkverbindingen getest, evenals de e-mailserveropzet zoals
  [beschreven op onze site](serverguide).
  Meer informatie over deze test is te lezen [op ons blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  of in het [volledige verslag](../assets/blog/MER-01-report.pdf).

- Sinds begin 2023 hebben we diverse beveiligings- en privacyproblemen met ‘webapps
  gedeeld in een gesprek’. Deze waren allen te wijten aan fouten in de sandboxing,
  vooral die van Chromium. Daarna is er een beveiligings-
  onderzoek van Cure53 geweest en zijn alle problemen opgelost in versie 1.36 van de uit april 2023. 
  Lees [hier het volledige verhaal omtrent E2E-beveiliging op het web](https://delta.chat/en/2023-05-22-webxdc-security). 


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

- Van 2021 tot 2023 ontvingen we *Internetvrijheid*sfinanciering (~$500,000) van de
  ‘U.S. Bureau of Democracy, Human Rights and Labor’ (DRL). 
  Met deze financiering kunnen we Delta Chat eindelijk stabieler maken, 
  evenals compatibeler met meer e-mailservers wereldwijd. Ook kunnen we extra beveiliging toevoegen
  voor geheim communiceren vanaf locaties met internetcensuur of waar het internet is afgesloten.

- Aan het begin van 2023 werden we toegelaten tot het Next Generation Internet (NGI)-
  programma omwille van onze voorstellen omtrent ‘private, gedecentraliseerde apps’. 
  Het bedrag moet nog nader worden vastgesteld, maar ligt rond de €100.000. 
  Met behulp van deze financiering kunnen we de [webxdc ‘gedeelde apps in een gesprek’](https://webxdc.org) verder uitwerken.

- Soms ontvangen we eenmalige donaties van privépersonen, waar we
  uiteraard zeer dankbaar voor zijn. Zo ontvingen we in 2021 een zeer royaal bedrag op onze rekening, te weten €4000, 
  met als bijschrift “Ga zo door met dit goede project!”. We gebruiken dit soort bedragen om
  ontmoetingen tussen ontwikkelaars te organiseren of voor ad-hoc-uitgaven die niet voorzien waren.
  Ook kunnen we zo onafhankelijk blijven en lang blijven
  voortbestaan.

[Geld doneren](donate){: .cta-button}

- Ook hebben verschillende experts en enthousiastelingen op vrijwillige basis bijgedragen
  aan Delta Chat, en sommige doen dat nog steeds. Zij hebben geen of bijna geen
  geld ontvangen. Zonder hen zou Delta Chat niet zo geweldig zijn als het vandaag
  de dag is.

Bovenstaande fiancieringen zijn opgezet door merlinux GmbH in
Freiburg (Duitsland) en daarna toegekend aan meer dan 12 vrijwilligers wereldwijd. 

Bekijk [Delta Chats bijdraagmogelijkheden](contribute)
om te zien hoe je een financiële of andere bijdrage kunt leveren.
