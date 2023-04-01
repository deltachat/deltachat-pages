---
title: PBR
lang: sq
render_toc: true
header: Pyetje të Bëra Rëndom
---


## Ç’është Delta Chat-i?

Delta Chat është një aplikacion i ri bisedash që i dërgon mesazhet përmes emai-i, të fshehtëzuar, nëse është e mundur, me Autocrypt. 
**Nuk ju duhet të regjistroheni gjëkundi, thjesht përdorni me Delta Chat-in llogarinë tuaj ekzistuese email.** 

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Si mund të gjej persona për të biseduar me ta? 

Me Delta Chat-in, mund t’i shkruani cilësdo adresë email ekzistuese - madje
edhe kur marrësi nuk përdor aplikacionin Delta Chat. Për marrësin s’është
e nevojshme të instalojë të njëjtin aplikacion me ju, si me programe të tjera.


### Cilat janë përparësitë e Delta Chat-it krahasuar me programe të tjerë të llojit?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _No Spam_ - only messages of known users are shown by default.
- _End-to-end-encryption_ via Autocrypt.
- _Copyleft_ and _Standards_ based libre software.
- _Flexible identity_ with built-in support for [multiple accounts](#multiple-accounts)


### Cilat mesazhe shfaqen në Delta Chat?

By default, Delta Chat shows all e-mails.

At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost. This is the default setting.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### Po nëse pres një mesazh prej dikujt të cilit s’i kam shkruar në të kaluarën?

- Nëse një mesazh vjen prej një kontakti të panjohur, shfaqet si **kërkesë**.
  Duhet të pranoni kërkesën, para se të mund të përgjigjeni.
- Mundeni edhe ta “fshini”, nëse s’doni të bisedoni me të tani. Kjo **nuk**
  fshin mesazhin te shërbyesi, vetëm te pajisja juaj. Kështu, mundeni
  të merreni me mesazhin që nga një tjetër aplikacion email-esh.
- Nëse fshini një kërkesë, mesazhet e ardhshëm prej atij kontakti do të shfaqen
  ende si kërkesë për mesazh, që të mund të ndërroni mendje. Nëse vërtet
  s’doni të merrni mesazhe prej këtij personi, shihni mundësinë e *bllokimit* të tij.


### A mbulon Delta Chat-i figura, video dhe bashkëngjitje të tjera?

- Po. Veç tekstit të thjeshtë, krejt bashkëngjitjet email shfaqen si mesazhe më vete. Mesazhet ikëse do të pranojnë vetvetiu bashkëngjitje sipas nevojës.

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#can-i-use-delta-chat-on-multiple-devices-at-the-same-time).

### Kush e sheh profilin tim?

- Mund të shtoni një foto profili te rregullimet tuaja. Nëse u shkruani kontakteve
  tuaja ose i shtoni përmes kodi QR, e shohin automatikisht si foton e profilit tuaj.

- Kontaktet që nuk përdorin Delta Chat s’e shohin foton e profilit
  (por, sigurisht, mund të instalojnë Delta Chat-in :)

- Për arsye privatësie, askush s’e sheh foton tuaj të profilit, deri sa
   t’u shkruani një mesazh.

- Fotoja juaj e profilit nuk dërgohet me çdo mesazh, por rregullisht, që
  kontaktet tuaj ta rimarrin foton tuaj të profilit, edhe nëse shtojnë një
  pajisje të re.


### A mbulon Delta Chat-i email-e HTML?

- Po. Nëse duhet, mesazhet ardhës shfaqen me një buton “Shfaqe krejt mesazhin”. Për mesazhet që dërgohen, përdoret përherë tekst i thjeshtë.


### Pse më duhet të jap fjalëkalimin e email-it tim në Delta Chat? A është e sigurt kjo?

Si edhe me programe të tjerë email-i, bie fjala, Thunderbird-i, K9-Mail-i, ose
Outlook-u, programit i duhet fjalëkalimi, që kështu të mund të dërgoni email-e.
Sigurisht, fjalëkalimi depozitohet vetëm në pajisjen tuaj. Fjalëkalimi i transmetohet
vetëm furnizuesit të email-it tuaj (kur bëni hyrjen), i cili mund të hyjë te email-et
tuaj, sido qoftë. 

Nëse përdorni një furnizues email-i që mbulon OAuth2, bie fjala gmail.com ose
yandex.ru, s’ka nevojë të depozitoni fjalëkalimin tuaj në pajisje. Në këtë rast
do të përdoret vetëm një token hyrjesh.

Ngaqë Delta Chat-i është Me Burim të Hapur, mund të kontrolloni [Kodin
Burim](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs),
nëse doni të verifikoni se a trajtohen me siguri kredencialet tuaja. Na gëzojnë
përshtypjet që e bëjn aplikacionin më të sigurt për krejt përdoruesit tanë.


### Ç’leje lyp Delta Chat-i?

Në varësi të sistemit operativ në përdorim, mund
t’ju kërkohet t’i akordoni leje aplikacionit.
Ja se ç’bën Delta Chat-i me këto leje:

- Mbi kamerën *(mund të çaktivizohet)*
  - të bëjë foto dhe video: për dërgim Fotosh
- Mbi kontaktet *(mund të çaktivizohet)*
  - të lexojë kontaktet tuaja: për të zbuluar kontakte për bisedë
- Mbi vendndodhjen *(mund të çaktivizohet)*
  - të njohë vendndodhjen me përafërsi (burime vendndodhjeje rrjeti): për veçorinë e transmetimit të vendndodhjesh
  - të njohë vendndodhjen e përpiktë (GPS dhe burime vendndodhjeje rrjeti): për veçorinë e transmetimit të vendndodhjesh
- Mbi mikrofonin *(mund të çaktivizohet)*
  - të incizojë audio: për mesazhe audio
- Mbi depozitimin *(mund të çaktivizohet)*
  - të ndryshojë ose fshijë lëndën në kartën tuaj SD: për shkarkim bashkëngjitjesh mesazhesh
  - të lexojë lëndën e kartës tuaj SD: për të ndarë kartela me kontaktet tuaj
- Aftësi të tjera të aplikacionit
  - të ndryshojë rregullimet tuaja mbi audion: që të mund të zgjidhni zile dhe volum për njoftime dhe mesazhe audio
  - të xhirojë gjatë nisjes së sistemit: që të mos ju duhet ta nisni Delta Chat-in dorazi
  - të kontrollojë dridhjen: për njoftime
  - të shohë lidhje në rrjet: për t’u lidhur me furnizuesin e shërbimit tuaj email
  - të pengojë telefonin tuaj të flejë: që të mund ta kopjoni më kollaj kodin e sigurisë gjatë Mesazhit të Ujdisjes së Autocrypt-it
  - të ketë hyrje të plotë në rrjet: për t’u lidhur me furnizuesin e shërbimit tuaj email
  - të shohë lidhjet Wi-Fi: për t’u lidhur me furnizuesin e shërbimit tuaj email
  - të kërkojë shpërfillje të optimizimeve për baterinë: për përdoruesit që duan t’i marrin mesazhet gjatë gjithë kohës

### Ç’do të thotë Fiksim, Heshtim, Arkivim?

Përdorini këto mjete për të sistemuar fjalosjet tuaja dhe për ta mbajtur gjithçka në vendin e vet:

- **Fjalosjet e fiksuara** qëndrojnë përherë në krye të listës së fjalosjeve. Mund t’i përdorni për të hyrë shpejt, ose përkohësisht te fjalosjet tuaja më të dashura, për të mos harruar gjëra.

- **Heshtoni fjalosje**, nëse s’doni të merrni njoftime mbi to. Fjalosjet e heshtuara qëndrojnë në vend dhe mundeni edhe të fiksoni një fjalosje të heshtuar.

- **Archive chats** if you do not want to see them in your chat list any longer.
  Archived chats remain accessible above the chat list or via search. 

- Kur te një fjalosje e arkivuar vjen një mesazh i ri, do të **hapet jashtë arkivit** dhe kalojë te lista juaj e fjalosjeve, veç në mos qoftë e heshtuar.
  **Fjalosjet e heshtuara mbeten të arkivuara**, veç në i çarkivofshi dorazi.

Që të arkivoni ose fiksoni një fjalosje, prekeni gjatë (në Android), përdorni menunë e fjalosjes (në Android/Desktop), ose fërkojeni për majtas (në iOS);
që të heshtoni një fjalosje, përdorni menunë e fjalosjes (në Android/Desktop), ose profilin e fjalosjes (në iOS).


### Ç’do të thotë pika e gjelbër?

- Nga Delta Chat 1.34 e këtej mundeni të shihni ndonjëherë një “pikë të gjelbër”
  në krah të avatarit të një kontakti. Ajo do të thotë se është “parë së fundi”.
- Hollësisht: do të thotë se, në 10 minutat e fundit, Delta Chat-i i ka parë:
  - ose pse ju dërguan mesazh drejtpërsëdrejti,
  - ngaqë shkruan diçka te një grup ku jeni pjesë të dy palët,
  - ngaqë ju dërguan një dëftesë leximi për një mesazh që shkruat,
  - ose ngaqë dërguan të dhëna te aplikacioni juaj Delta Chat përmes një
    [aplikacioni privat](#private-apps--webxdc).
- Pra, kjo s’është gjendje e njëmendtë aty për aty për qenie në linjë - dhe
  nëse dikush nuk përgjigjet menjëherë, edhe pse duket të jetë në linjë, mos
  u merakosni dhe lëruni ca kohë ;-)
- Më anë tjetër, të tjerët jo përherë “do të shohin se jeni në linjë”. Nëse keni
  çaktivizuar dëftesa leximesh, s’do të shohin pikën e gjelbër para se ju
  t’u dërgoni një mesazh, ose të shkruani te një grup ku bëjnë pjesë edhe ata.


## Grupe

### Krijimi i një grupi

- Prej menusë në cepin e sipërm djathtas, përzgjidhni **Fjalosje e re** dhe mandej **Grup i ri**, ose shtypni butonin përgjegjës në Android/iOS.
- Te skena vijuese, përzgjidhni **anëtarë grupi** dhe përcaktoni një **emër grupi**. Mund të përzgjidhni edhe një **avatar grupi**.
- Sapo të shkruani **mesazhin e parë** te grupi, krejt anëtarët marrin vesh për grupin e ri dhe mund të përgjigjen në të (për sa kohë që te grupi s’shkruani një mesazh i cili është i padukshëm për anëtarët).


### Shtoni anëtarë te një grup

- Çdo anëtar i grupit ka **të njëjtat të drejta** si kushdo tjetër. Për këtë arsye, gjithkush mund të fshijë cilindo anëtar ose të shtojë të rinj.
- Për të shtuar ose fshirë anëtarë, klikoni mbi emrin e grupit te biseda.


### Fshiva veten padashje.

- Ngaqë s’jeni më anëtar i grupit, s’mund të shtoni veten sërish. 
  Megjithatë, s’ka problem, thjesht kërkojini një anëtari tjetër të grupit në një fjalosje të zakonshme t’ju shtojë sërish.


### S’dua t’i marr më mesazhet e një grupi.

- Ose fshini veten si anëtar i listës, ose fshini krejt bisedën. 
  Nëse më vonë doni të ribëheni pjesë e grupit, kërkojini një anëtari tjetër të grupit t’ju shtojë sërish.

- Ndryshe, mundeni edhe ta "Heshtoni" një grup - duke bërë këtë, do të merrni
krejt mesazhet dhe prapë mund të shkruani, por nuk njoftoheni më, 
për çfarëdo mesazhesh të rinj.


### Ç’duan të thonë shenjat e shfaqura pas mesazheve që dërgohen?

- **Një shenjë** do të thotë se mesazhi u dërgua me sukses te shërbimi juaj.
- **Dy shenja** duan të thonë se të paktën një pajisje e marrësit
  njoftoi se e ka marrë mesazhin.
- Marrësi mund të ketë çaktivizuar dëftesa leximi,
  ndaj edhe kur shihni vetëm një shenjë, mesazhi mund të jetë lexuar.
- Në kahun e kundërt, dy shenja s’duan të thonë automatikisht
  se një qenie njerëzore ka lexuar apo kuptuar mesazhin ;)


### Ç’ndodh, nëse aktivizoj “Fshi nga shërbyesi mesazhe të vjetër”?

- Si parazgjedhje, Delta Chat-i i depoziton lokalisht krejt mesazhet, në pajisjen tuaj.
  Nëse ju, p.sh., doni të kurseni hapësirë depozitimi në shërbimin tuaj email, mund
  të zgjidhni të fshihen automatikisht mesazhet e vjetër. Mbeten ende në pajisjen tuaj,
  deri sa t’i fshini edhe prej andej.
- Për ta aktivizuar, kaloni te “fshini nga shërbyesi mesazhe të vjetër”, te rregullimet
  “Fjalosje dhe Media”. Mund të caktoni një periudhë nga “menjëherë” deri “pas një viti”;
  kështu, *krejt* email-et do të fshihen nga shërbyesi pas asaj periudhe. 
- Kini parasysh se, nëse e përdorni Delta Chat-in në më shumë se një pajisje, duhet t’i
  lini mesazhet te shërbyesi, deri sa të mund t’i shkarkojë edhe pajisja tjetër. Në këtë
  rast, duhet që fshirjen e automatizuar ta caktoni si “pas një dite”, ose diçka të tillë,
  në varësi të shpeshtisë me të cilën ndizni pajisjen tjetër.


### Ç’ndodh, nëse aktivizoj “Fshi prej pajisjes mesazhe të vjetër”?

- Nëse doni të kurseni hapësirë në pajisjen tuaj, mund të zgjidhni të fshihen
  automatikisht mesazhe të vjetër. 
- Për ta aktivizuar, kaloni te “fshi prej pajisjeje mesazhe të vjetër”, te rregullimet
  “Fjalosje & Media”. Mund të caktoni një periudhë nga “pas një ore” e deri
  “pas një viti”; në këtë mënyrë, *krejt* mesazhet do të fshihen nga pajisja juaj
  sapo të jenë më të vjetër se aq.


## Fshehtëzim

### A ka Delta Chat-i fshehtëzim skaj-më-skaj?

- Po. DeltaChat sendërton standardin Autocrypt Level 1 
  dhe është pra në gjendje të fshehtëzojë mesazhe me e2e-n 
  përmes aplikacionesh të tjera të afta të përdorin Autocrypt-in. 

- Delta Chat mbulon po ashtu një formë të fuqishme fshehtëzimi skaj-më-skaj
  që është edhe më e sigurt kundër sulmesh aktive, shihni më poshtë
  “grupe të verifikuar”. 


### Ç’duhet të bëj që të aktivizohet fshehtëzimi skaj-më-skaj?

- Asgjë.

- Aplikacionet Delta Chat (dhe të tjerë aplikacione email të aftë për [Autocrypt](https://autocrypt.org))
përdorin automatikisht të njëjtat kyçe të domosdoshëm për fshehtëzim 
skaj-më-skaj, teksa dërgohen mesazhet e para. Pas kësaj, krejt mesazhet 
pasues fshehtëzohen automatikisht skaj-më-skaj. Nëse një nga partnerët 
në bisedë, më pas, përdor një aplikacion email që nuk mbulon Autocrypt-in, 
mesazhet nuk fshehtëzohen, derisa të ketë sërish një aplikacion të aftë për Autocrypt-in. 

- Nëse doni që, si parazgjedhje, të shmangen email-e të fshehtëzuar skaj-më-skaj, 
  përdorni rregullimin përkatës të Autocrypt-it, te "Rregullime" ose "Rregullime të mëtejshme".


### Nëse s’ka fshehtëzim skaj-më-skaj, a lihet lidhja pa u fshehtëzuar fare?

- Me shumicën e shërbyesve të postës, Delta Chat vendos _fshehtëzim transporti_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  Kjo siguron vetëm lidhjen me pajisjes tuaj dhe shërbyesit tuaj email. Kurse
  fshehtëzimi skaj më skaj furnizon siguri mes pajisjes tuaj dhe pajisjes
  së një shoku. 


### Si mund ta verifikoj gjendjen kriptografike me një dërguesin? 

Nëse jeni brenda një largësie imediate të partnerit të fjalosjes:

- Përzgjidhni **Kd QR Ftese** te një pajisje dhe madje **Skanoni kod QR**
  te pajisja tjetër dhe skanoni kodin. Nëse që të dyja pajisjet janë në linjë,
  ato do të paraqesin një kanal fjalosjeje me njëra-tjetrën (nëse ky s’ekziston
  tashmë) dhe kyçet e fshehtëzimit do të verifikohen.  Te të dyja, në fjalosjen
  e tyre 1:1 do të duket një mesazh sistemi “dërguesi u verifikua”. 

Nëse s’jeni pranë partnerit të fjalosje, gjendjen mund ta kontrolloni dorazi te dialogu “Fshehtëzim”
(që nga profili i përdoruesit, në Android/iOS, ose, në desktop, djathtasklikoni te zëri chat-list të një përdoruesi):

- Për fshehtëzim skaj-më-skaj, Delta Chat shfaq dy shenja gishtash. 
  Nëse po ata shfaqen te pajisja e partnerit tuaj në bisedë, lidhja
  është e sigurt.

- Për fshehtëzim të transportit, gjendja thjesht tregohet atje


### Si mund ta kontrolloj fshehtëzimin e mesazheve?

- Një **dry** i vockël, i shfaqur në krah të mesazhit, tregon nëse mesazhi është i fshehtëzuar skaj-më-skaj prej dërguesit të dhënë.

- Nëse **s’ka dry**, mesazhi zakonisht transportohet i pafshehtëzuar, p.sh., ngaqë ju ose dërguesi keni çaktivizuar fshehtëzimin skaj-më-skaj, ose dërguesi përdor një aplikacion që nuk mbulon fshehtëzimin skaj-më-skaj.


### How can I ensure message encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is creating a verified group and turning on
self-destructing messages.

Verified groups are always encrypted and protected against [MITM
attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Metadata can't be encrypted, as the server needs to know where to deliver your
messages. But turning on "self-destructing messages" deletes the messages on
the server after they were delivered.

If you need the messages on your device, but not on the server, you can also
agree in the group to turn on ["delete messages from server
automatically"](#what-happens-if-i-turn-on-delete-old-messages-from-server).

If you want to protect a 1:1 conversation like this, you should create a
verified group with only 2 people. If the other person loses their device but
not their account, you can still communicate in the 1:1 chat. ([Read more](#what-is-the-difference-between-verified-groups-and-11-chats-with-verified-contacts))


### Cilët standarde përdoren për fshehtëzim skaj-më-skaj?

- [Autocrypt](https://autocrypt.org) përdoret për të vënë në punë fshehtëzim e2e
  me Delta Chat tjetër dhe aplikacione të tjera poste që janë të aftë
  të mbulojnë Autocrypt-in. 
  Autocrypt-i përdor një nëngrup të kufizuar të funksioneve OpenPGP. 

- Për të bërë të mundur mbrojtjen kundër sulmesh aktive rrjeti, Delta Chat-i
  sendërton [protokollet countermitm, setup-contact dhe verified-group](https://countermitm.readthedocs.io/en/latest/new.html).  Kjo shkon përtej mbrojtjes bazë oportuniste të
  Autocrypt Level 1, ndërkohë që ruhet lehtësia e përdorimit.  

### Cili është dallimi mes grupesh të verifikuar dhe fjalosjesh 1:1 me kontakte të verifikuar?

- Fjalosjet 1:1 me një kontakt të verifikuar dhe grupet e verifikuara s’janë
  e njëjta gjë, edhe kur ka vetëm 2 vetë në një grup të verifikuar. Një dallim
  është se mund të shtoni më tepër vetë te grupi, por ka edhe implikime të tjera.

- Grupet e verifikuar janë të siguruar, në mënyrë të pandryshueshme. Çfarëdo
  zbulimi (tekst i dukshëm ose mesazhe nënshkruar gabim, etj) do t’i vihet
  shenjë dhe mesazhe të tillë nuk do të shfaqen te kjo bisedë. Mund t’u besoni
  krejt mesazheve në këtë bisedë të verifikuar se nuk janë lexuar/tjetërsuar
  nga palë në mes.

- Fjalosjet 1:1 janë oportuniste, që do të thotë se u lejojnë personave
  të komunikojnë, pavarësisht se ndryshojnë klientë email, pajisje, ujdisje, etj.
  Kjo është asyeja pse nuk ka shenjë verifikimi, edhe pse e keni verifikuar kontaktin.


### A përdor Delta Chat-i Fshehtësi të Përsosur Përcjelljeje?

- Jo, OpenPGP nuk mbulon Fshehtësi të Përsosur Përcjelljeje. Fshehtësia e
  Përsosur e Përcjelljes funksionon me bazë sesionin, por email-i, nga vetë natyra
  e tij është asinkron dhe shpesh i përdorur në mënyrë të pavarur prej shumë pajisjesh.
  Kjo do të thotë se nëse është zbuluar kyçi juaj privat i Delta Chat-it, dhe dikush ka
  një regjistër të krejt mesazheve tuaja tranzit, do të jetë në gjendje t’i lexojë.  

- Mbani parasysh se nëse dikush ka shtënë në dorë ose ka hack-uar telefonin tuaj
  që është ende duke punuar, zakonisht do të jenë në gjendje të lexojnë krejt
  mesazhet, pavarësisht nëse ka apo jo <em>Perfect Forward Secrecy</em>. Aftësia
  për të hyrë në një pajisje të vetme të një anëtari të një grupi, zakonisht
  do të nxjerrë zbuluar shumë nga marrëdhëniet mes grupit. Përdorimi i adresave
  email të cilat s’mund të shpien lehtë te personat pas tyre i ndihmon anëtarët
  e grupit të jenë më të parrezikuar prej efekteve të shtënies në dorë
  të pajisjeve. 

- Po skicojmë mënyra për të mbrojtur më mirë komunikimet nga raste
  marrjeje të pajisjes. 


### Si i mbron Delta Chat-i Tejtëdhënat e mia?

- Ngaqë Delta Chat-i është një shkëmbyes i decentralizuar mesazhesh, tejtëdhënat
  e përdoruesve të Delta Chat-it nuk depozitohen në një shërbyes qendror të vetëm.
  Megjithatë, depozitohen në shërbyes poste të dërguesit dhe të marrësit të një mesazhi.

- Aktualisht çdo shërbyes poste di se kush dërgoi dhe kush mori një mesazh, nga
  inspektimi i kryeve të pafshehtëzuara Për/Cc dhe kështu përcakton cilat adresa
  email janë pjesë e një grupi. Delta Chat vetë mund të shmangë deri diku krye
  të pafshehtëzuara Për/Cc dhe t’i vendosë përherë vetëm në seksion të fshehtëzuar.
  Shihni [Shmang dërgim kryesh Për/CC për grupe të verifikuar](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  Për biseda oportuniste shqetësimi kryesor është si ndikon mbi aplikacione
  të tjera poste që mund të marrin pjesë në bisedë. 

- Mjaft krye të tjera email-esh, në veçanti kryet "Subjekt", janë të mbrojtura
  me fshehtëzim skaj-më-skaj, shihni edhe këtë të ardhshmin [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### A mund të ripërdor kyçin tim ekzistues privat?

- Po. Rruga më e mirë është të dërgohet një Mesazh Rregullimi Autocrypt-i që nga klienti tjetër email. Shihni për diçka si **Start Autocrypt Setup Transfer** te rregullimet e klientit tjetër dhe ndiqni udhëzimet e dhëna atje.

- Ndryshe, mund ta importoni kyçin dorazi te “Rregullime -> Rregullime të mëtejshme -> Importoni kyçe të fshehtë”. Kujdes: Sigurohuni se kyçi s’është i mbrojtur me fjalëkalim, ose hiqeni më parë fjalëkalimin.

Nëse s’keni kyç ose as që e dinit se mund t’ju duhej një i tillë… mos u bëni merak: Delta Chat-i prodhon një të tillë, kur duhet, dhe s’keni gjë për të bërë. 


### S’eksportoj dot kyçet e mi ekzistues PGP në Delta Chat.

Ka një mundësi të mirë që problemi të jetë se kyçi juaj është fshehtëzuar
dhe/ose përdor një fjalëkalim. Kyçe të tillë nuk mbulohen nga Delta Chat-i. Mund
të hiqni fshehtëzimin me frazëkalim dhe fjalëkalimin dhe të riprovoni. Nëse doni
të mbani frazëkalimin tuaj, do t’ju duhet të krijoni një alias email-i për ta përdorur
me Delta Chat-in, që kyçi i Delta Chat-it të jetë i lidhur me këtë alias email-i.

Për sa u takon formateve, Delta Chat-i mbulon formate të rëndomtë OpenPGP
kyçesh private, megjithatë, ka pak gjasa që të mbulojmë 100% të krejt kyçeve
private të çfarëdo burimi. Kjo gjithashtu s’është fokusi kryesor i Delta Chat-it
(në fakt, shumica dërrmuese e përdoruesve të Delta Chat-it s’do të kenë ndonjë
kyç përpara se të zënë të përdorin Delta-n). Sidofoqtë, përpiqemi të mbulojmë
kyçe private prej burimesh të tjera sa më mirë që të mundet. 

Heqja e fjalëkalimi nga kyçi privat do të jetë e ndryshme, varet nga software-i
që ju përdorni për administrim kyçesh PGP. Me Enigmail-in, mund t’i jepni
fjalëkalimit tuaj një vlerë të zbrazët, që nga dritarja Administrim Kyçesh. Me
GnuPG-në mund ta bëni [përmes rreshti urdhrash](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Për programe të tjera, mund të gjeni një zgjidhje në internet.


## Multi-klient {#multiclient}

### A mund ta përdor Delta Chat-in në shumë pajisje njëherësh në të njëjtën kohë?

Yes. Delta Chat 1.36 comes with a new, experimental function for using the same account on different devices:

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- On the second device, [install Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- Transfer should start after a few seconds and during transfer both devices will show the **progress**.
  Wait until it is finished on both devices.

In contrast to many other messengers, after successful transfer,
both **devices are completely independent.**
One device is not needed for the other to work.


### Troubleshooting

- Double-check both devices are in the **same Wi-Fi or network**

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple accounts per device, just [add another account](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer

This method is only recommended if "Add Second Device" as described above does not work.

- Te pajisja e vjetër, kaloni te “Rregullime -> Fjalosje dhe media -> Eksportoni
  Kopjeruajtje”. Jepni PIN-in, rregullsinë apo fjalëkalimin tuaj për shkyçje ekrani.
  Mandej mund të klikoni mbi “Fillo Kopjeruajtje”. Kjo ruan kartelën e kopjeruajtjes’
  te pajisja juaj. Tani ju duhet ta kaloni në një farë mënyre te pajisja tjetër.
- Te pajisja e re, te skena e hyrjes, në vend të hyrjes te llogaria juaj email, zgjidhni
  “Importo Kopjeruajtje”. Pas importimit, bisedat, kyçet e fshehtëzimit dhe media
  juaj duhet të jenë kopjuar te pajisja e re.
  - **Nëse përdorni iOS:** dhe hasni vështirësi, ndoshta
    [ky udhërrëfyes](https://support.delta.chat/t/import-backup-to-ios/1628) ju
    vjen në ndihmë.
- Tani pajisjet janë të njëkohësuara dhe mund të përdorni të dyja pajisjet për dërgim
  dhe marrje mesazhesh të fshehtëzuar skaj-më-skaj me partnerët tuaj të komunikimit. 

### A ka ndonjë plan për të sjellë një Klient Web Delta Chat?

- S’ka plane të afërta, por ca mendime paraprake.
- Ka 2-3 rrugë për sjelljen e një Klienti Web Delta Chat, por që të gjitha
  duan punë të madhe. Tani për tani, jemi përqendruar në pasjen e hedhjeve
  të qëndrueshme në qarkullim në krejt shitoret e aplikacioneve (depo 
  Google Play/iOS/Windows/macOS/Linux) si aplikacione origjinale të sistemit 
  përkatës.
- Nëse ju duhet një Klient Web, ngaqë s’keni leje të instaloni software në
  kompjuterin me të cilin punoni, mund të përdorni Klientin e bartshëm për
  Windows Desktop, ose AppImage për Linux. Mund t’i gjeni te
  [get.delta.chat](https://get.delta.chat).


### Përse hyn në punë rregullimi "Dërgojini Vetes Një Kopje"?

Dërgimi vetes i një kopjeje të mesazheve tuaj siguron marrjen e mesazheve tuaj
në krejt pajisjet. Nëse keni disa pajisje dhe nuk i mbani ndezur, shihni vetëm
mesazhet prej të tjerëve, dhe mesazhet që dërgoni prej pajisjes që keni hapur
në atë çast. 

Kopja dërgohet te Të marrët, dhe mandej kalohet te dosja DeltaChat; nuk vendoset
te dosja "Të dërguar". Delta Chat-i nuk ngarkon *kurrë* ndonjë gjë te dosja
Të dërguar, ngaqë kjo do të thoshte ngarkim dy herë të një mesazhi (një herë
përmes SMTP-s, dhe një herë përmes IMAP-it në dosjen Të dërguar).

Parazgjedhja për rregullimin dërgoja-vetes është "jo".

### Pse mund të zgjedh të vëzhgoj dosjen "Të dërguar"?

Arsyeja e vetme pse dikush mund të dojë të vëzhgojë dosjen Të marrë është kur
përdoret tjetër program email-sh (bie fjala, Thunderbird-i) në krah të
aplikacionit tuaj Delta Chat, dhe doni që MUA juaj të marrë pjesë në biseda.

Sidoqoftë, rekomandojmë të përdoret Klienti Desktop i Delta Chat-it; mund ta 
shkarkoni që nga [get.delta.chat](https://get.delta.chat). Mundësia për vëzhgim
të dosjes "Të dërguar" mund të hiqet në të ardhmen. Qe prurë në kohët kur s’kish
klient Desktop Delta Chat për krejt platformat. 

### Pse mund të zgjedh të mos e vëzhgoj dosjen DeltaChat?

Disa e përdorin Delta Chat-in si një klient të rregullt email, dhe duan
ta përdorin dosjen Të marrë për email-in e tyre, në vend se dosjen DeltaChat.
Nëse çaktivizoni "Vëzhgo dosjen DeltaChat", duhet të çaktivizoni edhe "kalo
mesazhe bisedash te DeltaChat". Përndryshe, fshirja e mesazheve në instalime me
shumë pajisje mund të mos punojë si duhet.


## Aplikacione private / webxdc

Në Delta Chat, mund të ndani me të tjerë “aplikacione private”, bashkëngjitje
me një zgjatim `.xdc` kartele. Ato bëjnë gjëra shumë të ndryshme dhe e bëjnë
Delta Chat-in një shkëmbyes mesazhesh vërtet të zgjerueshëm. Termi teknik
është [webxdc](https://webxdc.org).


### Sa private janë aplikacionet private?

- Aplikacionet private nuk dërgojnë të dhëna në Internet, apo të shkarkojnë gjë.
- Një aplikacion privat mund të shkëmbejë të dhëna vetëm brenda një fjalosjeje
  Delta Chat, me kopjet e saj në pajisjet e partnerëve tuaj të fjalosjes. Tej kësaj,
  është tërësisht i izoluar nga Interneti.
- Privatësia që ofron një aplikacion privat është privatësia e fjalosjes tuaj - për sa
  kohë që u besoni personave me të cilët bisedoni, mund t’u zini besë edhe
  aplikacioneve private.
- Kjo do të thotë edhe se: mund të jetë rrezik privatësie të hapen aplikacione private
  në fjalosje ku nuk u zini besë pjesëmarrësve - siç e dini nga bashkëngjitjet email, ku
  hapni bashkëngjitje vetëm nga dërgues që u besoni dhe jo prej kujtdo.


### Ku mund të marr aplikacione private?

- Në përgjithësi, s’ka shitore aplikacionesh nën përkujdesje dhe Delta Chat-i
  s’është përgjegjës për aplikacionet private apo lëndën e tyre. Cilido mund
  të ndajë me të tjerët aplikacione private pa kufizime.
- Mund të gjeni disa aplikacione shembuj te [webxdc.org](https://webxdc.org).
- Mjaft vetë shkruajnë aplikacionet e tyre private dhe i postojnë te [forumi i 
  Delta Chat-it](https://support.delta.chat/c/webxdc/20).


### Si mund të krijoj aplikacionet e mia private?

- Aplikacionet private janë thjesht kartela .zip që përmbajnë kod html, css dhe js.
- Për t’ia filluar, mund të zgjeroni [aplikacionin shembull Hello World](https://github.com/webxdc/hello).
- Gjithçka tjetër që duhet të dini është e shkruar te [documentation](https://docs.webxdc.org/).
- Nëse keni pyetje, mund të pyesni të tjerë me përvojë, te [Forumi i 
  Delta Chat-it](https://support.delta.chat/c/webxdc/20).


## Veçori Eksperimentale

I presim me shumë interes përshtypjet për këto veçori - doni të ndani me
të tjerë idetë tuaja? Merrni pjesë te [Forumi](https://support.delta.chat) që
të jepni ndihmeste. (Ju pëlqejnë eksperimentet? Regjistrohuni përmes
“Regjistrohuni -> me Delta Chat”!)

### Si mund të përdor thirrje audio/video me Delta Chat-in?

- Për të aktivizuar thirrje audio/video, kaloni te ndarja “veçori eksperimentale”
  te rregullimet e mëtejshme dhe zgjidhni një “instancë videofjalosjeje”. 
- Kur ftoni të tjerë te një fjalosje me video, hapet te shfletuesi/aplikacioni juaj
  menjëherë. Të tjerët marrin një email me një lidhje për te dhoma juaj jitsi/BBB.
  Në këtë mënyrë, është e përputhshme edhe nëse partneri juaj në komunikim
  s’përdor Delta Chat.
- Kini parasysh se nuk ka zile te ana tjetër dhe se partnerët tuaj s’do
  të ndërpriten në ç’po bëjnë prej një ftese për fjalosje me video.
- Mund të përdorni këdo shërbim fjalosjeje me video që ju lejon të hyni në
  të përmes një lidhjeje. Thjesht shtojeni lidhjen te rregullimet.
- Për shembull, për të përdorur instancë prej të mirënjohurit Jitsi Meet, mund
  të jepnit `https://meet.jit.si/$ROOM`. Ndryshorja `$ROOM` do të jetë një
  vlerë kuturu; në këtë mënyrë, do të keni një dhomë të re kuturu Jitsi, sa herë
  që thirrni dikë.


### Ç’është një grup i verifikuar? Pse është eksperimentale kjo? 

- Një grup i verifikuar është një bisedë që garanton parrezikshmëri ndaj<br>  një sulmuesi aktiv. Krejt Mesazhet në një bisedë të verifikuar janë<br>  të fshehtëzuara skaj më skaj, dhe anëtarët mund marrin pjesë duke<br>  skanuar një "kod QR ftese". Kështu, krejt anëtarët janë të lidhur njëri<br>  me tjetrin përmes një zinxhiri ftesash, çka garanton vazhdueshmëri<br>  kriptografike kundër sulmesh aktive rrjeti apo furnizuesi shërbimesh.<br>  Për R&amp;D pas kësaj veçorie, shihni [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html). 

- Deri më tetor 2022, “grupet e verifikuar” mbeten një veçori eksperimentale.
  Përmirësohet vazhdimisht dhe janë ndrequr mjaft të meta, që nga sjellja për
  herë të parë më 2018-n. Megjithatë, mbeten raste, veçanërisht për grupe
  të mëdhenj kur mund të ndodhin paqëndrueshmëri, apo mesazhet të bëhen
  të palexueshëm.


### Ç’janë Listat e Transmetimeve dhe si mund t’i përdor?

- Me një Listë Transmetimi mund të dërgoni një mesazh te shumë marrës njëherësh;
  kur ju përgjigjen, përgjigjen e merrni një fjalosjen tuaj të drejtpërdrejt tek për tek
  Marrësit s’mund të shohin njëri-tjetrin.
- Teknikisht, është një email me shumë marrës si BCC.
- Veçorinë mund ta aktivizoni te ndarja “veçori eksperimentale”, te rregullimet
  e mëtejshme. Mandej mund të krijoni një Listë Transmetimi që nga dialogu
  “Fjalosje e Re”.
- Në rast se përdorni më shumë se një pajisje, Listat e Transmetimit aktualisht nuk
  njëkohësohen mes tyre.
- Mesazhet e dërguar te lista transmetimi s’janë të fshehtëzuar. Fshehtëzimi
  do të dëmtonte anonimitetin, ngaqë atëherë krejt marrësit do të dinin se cili tjetër
  e mori mesazhin.
  (Dërgimi i email-eve individualë për këdo do të ishte edhe më keq, për shkak
  kufizimesh sasie email-esh që dërgohen dhe konsum trafiku në rrjet).


### Si mund t’u tregoj partnerëve të mi në fjalosje vendndodhjen time?

- Dhënien e vendndodhjes mund ta aktivizoni te ndarja “veçori eksperimentale”
  e rregullimeve të mëtejshme.
- Nëse doni të jepni vendndodhjen tuaj në një fjalosje, kaloni te “bashkëngjit” dhe
  përzgjidhni “vendndodhje”. Tanimë mund të caktoni një interval kohor gjatë
  të cilit vendndodhja juaj do t’u tregohet partnerëve të fjalosjes tuaj, nga 5 minuta
  deri në 6 orë.
- Kur ndryshon vendndodhja juaj, të tjerët në fjalosje mund ta shohin te një hartë
  te fjalosja.
- Që të shihni hartën dhe shihni vendndodhjen e të tjerëve, lypset ta aktivizoni
  veçorinë te rregullimet e mëtejshme.
- Kjo veçori s’do t’i tregojë vendndodhjen tuaj tjetërkujt nga partnerët e fjalosjes
  tuaj. *Por:* që të shfaqin hartën, na duhet të shkarkojmë pjesë harte nga
  mapbox.com, ndaj, nëse **shihni** hartën, mapbox.com i kërkohet harta e
  një zone të caktuar. Nëse kjo përbën rrezik privatësie për ju, kjo veçori s’bën
  për ju. Po punojmë për të gjetur një alternativë të decentralizuar në vend të
  Mapbox-it.
- Në desktop, OS më vete s’mund të përcaktojë vendndodhjen tuaj. Në vend
  të kësaj, mund të djathtasklikoni mbi hartën dhe të përshkruani një
  vendndodhje, e cila dërgohet te fjalosja si një mesazh, por që shfaqet edhe
  te harta.


### Ç’mbron konkretisht fshehtëzimi eksperimental i bazës së të dhënave?

- Tani për tani, fshehtëzimi i bazës së të dhënave është ende eksperimental në
  shkallë të madhe. Mos u bazoni në të për mbrojtje, duhet të përdorni si shtesë
  fshehtëzim nga sistemi juaj operativ, nëse ofron të tillë.
- Fshehtëzimi i bazës së të dhënave s’fshehtëzon ende copat, vetëm rreshtat dhe
  shtyllat e bazës së të dhënave. Kjo pak a shumë do të thotë se mesazhet tuaja
  janë të parrezik, por jo bashkëngjitjet tuaja.
- Për iOS dhe Android, kyçet e fshehtëzimit depozitohen te vargu i kyçeve i sistemit.
  Kjo do të thotë se fshehtëzimi është aq i sigurt sa sistemi operativ ku funksionon.
- Klienti Delta Chat për desktop s’ofron ende fshehtëzim baze të dhënash, ngaqë
  s’ka rrugë standarde për të depozituar kyçet e fshehtëzimit në platforma të ndryshme
  që mbulohen.


### Pse mund të zgjedh vetëm të shoh dosjen DeltaChat?

Kjo është një veçori eksperimentale për disa vetë që eksperimentojnë me rregulla
më anë të shërbyesit. Jo të gjithë furnizuesit e shërbimeve e mbulojnë këtë, por
me disa mund të kaloni krejt mesazhet me një krye "Chat-Version" te dosja
DeltaChat. Zakonisht kjo do të bëhej nga aplikacioni Delta Chat.

Aktivizimi i “Sill Vetëm nga dosja DeltaChat” ka kuptim nëse i keni **të dyja**:

- aktivizuar një rregull më anë shërbyesi për të shpënë krejt mesazhet me krye “Chat-Version” te dosja DeltaChat, dhe
- për rregullimin "Shfaq email-e klasikë" keni zgjedhur "jo, vetëm biseda".

Në këtë rast, Delta Chat-i s’ka nevojë të shohë Të marrët dhe mjafton të vëzhgojë vetëm dosjen DeltaChat.


### Si mund ta ndryshoj llogarinë time me një tjetër adresë email?

1. Ndryshoni adresën tuaj te skena e rregullimeve “Fjalëkalim dhe Llogari”
  te Delta Chat-i, jepni fjalëkalimin tuaj (dhe në u dashtë, rregullimet për
  shërbyesin) për llogarinë e re
2. Në qoftë e mundur, bëjeni shërbimin tuaj të vjetër email të përcjellë krejt
  email-et te adresa juaj e re email
3. Tregojuni kontakteve tuaj se keni ndryshuar adresën tuaj. Nëse këtë e
  shkruani te një grup i verifikuar, do të pranohet automatikisht prej tyre.

Që të mësoni më tepër rreth hollësish pas kësaj, [lexoni postimin tonë
në blog për të](https://delta.chat/en/2022-09-14-aeap).


## Të ndryshme

### A funksionon Delta Chat me shërbimin _tim_ email?

- Ka shanse të mira që: Po :)  
  Sidoqoftë, disa furnizues shërbimesh kanë nevojë për mundësi speciale, që
  të funksionojnë si duhet, shihni [Provider Overview](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](2023-01-26-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### Sa kohë që Delta Chat-i përdor email, a është vërtet një Shkëmbyes Mesazhesh të _Atypëratyshme_?

- Normalisht, dërgimi dhe marrja e mesazheve ha ca sekonda. Ndonjëherë ka raste
  kur kjo zgjat pak më shumë, por mund të thuhet se kjo është e vërtetë edhe për
  çfarëdo shkëmbyesi tjetër mesazhesh.
- Biseda e atypëratyshme funksionon shpejt, nëse të dy palët përdorin aktivisht
  aplikacionin. Ndonjëherë është më e ngadaltë, nëse aplikacioni xhiron në
  prapaskenë.
- Në raste të tilla, marrja e mesazheve mund të dojë minuta, ngaqë si Android-i,
  ashtu edhe iOS-i shpesh e ndalin funksionimin në prapaskenë të Delta Chat-it,
  dhe e zgjojnë vetëm me raste. Kjo vonesë artificiale zakonisht është më keq në
  iOS, se sa në Android.
- Sido qoftë, fakti që Android-i dhe iOS-i asgjësojnë aplikacione që xhirojnë në
  prapaskenë është një problem për mjaft aplikaicone të ligjshme. Për më tepër
  të dhëna, shihni [dontkillmyapp.com](https://dontkillmyapp.com/).


### A është i përputhshëm Delta Chat-i me Protonmail-in / Tutanota-n / Criptext-in?

- Po dhe Jo.
- Jo, me Delta Chat-in s’mund të përdorni llogarinë tuaj Protonmail, Tutanota,
  ose Criptext; ato nuk ofrojnë marrje email-esh përmes IMAP-it.
- Sidoqoftë, mund të përdorni Delta Chat-in të dërgoni Mesazhe për persona që
  përdorin Protonmail, Tutanota, ose Criptext. Këto mesazhe ama s’do të jenë
  të fshehtëzuara Skaj-më-Skaj. Fshehtëzimi Skaj-më-Skaj që japin këto shërbime
  s’është i përputhshëm me [Autocrypt-in](https://autocrypt.org/), standardin që
  përdor Delta Chat-i.
- Delta Chat-i mund të kryejë fshehtëzim skaj-më-skaj përmes cilitdo shërbim
  email-i me çfarëdo [aplikacioni email që punon me Autocrypt](https://autocrypt.org/dev-status.html).


### Më interesojnë hollësitë teknike. Mund të më tregoni diçka më tepër?

- Shihni [Standarde të përdorur në Delta Chat]({% include standards-url %}).

### Was Delta Chat independently audited for security vulnerabilities?

The Delta Chat project underwent three independent security audits in the last
years:

- In 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).

- In 2020, [Include Security](https://includesecurity.com) analyzed Delta
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

- Beginning 2023, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](2023-03-23-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

### Si financohet zhvillimi i Delta Chat-it? 

Delta Chat nuk përfiton ndonjë financim të llojit Venture Capital dhe s’ka
borxhe, as gjendet nën trysni për të prodhuar fitime të mëdha, apo për të
shitur përdoruesit, shokët dhe familjen e tyre reklamuesve (apo më keq). 
Në vend të kësaj, përdorim burime financimi publik, deri sot me origjinë nga
BE dhe ShBA, si ndihmë të përpjekjeve tona për lulëzimin e një ekosistemi të
decentralizuar dhe të larmishëm shkëmbimi mesazhesh bazuar në zhvillime
bashkësie të Lirë dhe Me Burim të Hapët.

Konkretisht, zhvillimet e Delta Chat-it deri sot janë financuar nga këto burime:

- Projekti [NEXTLEAP](https://nextleap.eu) i BE-së financoi kërkimin
  për dhe sendërtimin e grupeve të verifikuara dhe protokolleve të
  ujdisjes së kontakteve më 2017-n dhe 2018-n dhe ndihmoi gjithashtu
  të integrohet Fshehtëzim Skaj-më-Skaj përmes [Autocrypt](https://autocrypt.org).

- [Open Technology Fund](https://opentechfund.org) na dha grantin e parë 
  për 2018/2019 (~200 mijë dollarë) me të cilin përmirësuam ndjeshëm aplikacionin
  për Android dhe hodhëm në qarkullim një version të parë beta aplikacioni për Desktop,
  si dhe i afroi më tepër zhvillimet tona për veçori me kërkime UX në kontekste të drejtash të njeriut, 
  shihni [raportin tonë përfundimtar “Needfinding and UX”](https://delta.chat/en/2019-07-19-uxreport).
  Granti i dytë për 2019/2020 (~$300K) na ndihmoi të hedhim në qarkullim 
  versione Delta/iOS, për të shndërruar bibliotekën tonë bazë në Rust, si dhe
  për të sjellë veçori të reja për krejt platformat.  

- [Fondacioni NLnet](https://nlnet.nl/) dhuroi 46K euro gjatë 2019/2020 për
  plotësimin e <em>Rust/Python bindings</em> dhe për t’i dhënë udhë një ekosistemi
  Chat-bot.

- Më 2021-n morëm financime të mëtejshme nga BE për dy propozime që shtrihen në
  “Internetin e Brezit Tjetër”, konkretisht për [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K euro) dhe [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K euro) që sollën mbulim më të mirë për përdorues me shumë
llogari, përmirësim të gjërave për kontakte me kod QR dhe grupe, si dhe mjaft
përmirësime në punën në rrjet për krejt platformat.

- Për 2021/2022 po marrim financimin *Internet Freedom* (~500 mijë dollarë amerikanë)
  nga Zyra për Demokraci, të Drejta të Njeriut dhe Punë e ShBA-sand Labor (DRL). 
  Ky financim përbën mbështetje për synimet tona afatgjata për ta bërë Delta Chat-in më
  të përdorshëm dhe të përputhshëm me një gamë të gjerë shërbimesh email anembanë
  botës, si dhe më të qëndrueshëm dhe më të siguruar në vende që shpesh preken nga
  censurim dhe bllokim interneti.

- Ndonjëherë marrim ndonjë dhurim njësh prej individë privatë, për çka jemi
  borxhlinj. Për shembull, më 2021-shin një individ bujar na dërgoi një mandatarkëtimi
  prej 4 mijë eurosh, me subjektin “vazhdoni punën e mbarë!”. Para të tilla i përdorim
  [ër të financuar takime zhvillimi, ose për të mbuluar shpenzime <em>ad-hoc</em>
  që s’mund të parashikohen kollaj, apo që s’mbulohen nga fonde financimi publik. 

- E fundit, por aspak për nga rëndësia, disa ekspertë dhe entuziastë kanë dhënë
  dhe japin ndihmesë pro-bono në zhvillimin e Delta Chat-it pa përfituar para,
  ose vetëm shuma të vogla. Pa ta, Delta Chat-i s’do të ish atje ku është sot,
  madje as afër asaj. 

Financimi monetar i përmendur më sipër është kryesisht i organizuar nga GmbH në
Frajburg (Gjermani) dhe u shpërndahet më tepër se një duzine kontribuesish nga e gjithë bota. 

Financimi për gjysmën e dytë të 2022-shit dhe veçanërisht për 2023 është një çështje e vazhdueshme shqetësimi. Veç aplikimit për më tepër financime, duam të bëhemi më të pavarur nga burime financimi të lidhura me qeverinë. Ju lutemi, shihni [Delta Chat Contribution channels](https://delta.chat/en/contribute) qoftë për mundësi përkrahjeje monetare, qoftë për ato të lidhura me zhvillimin. 
