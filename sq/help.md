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

- _I pavarur_ nga ndonjë shoqëri apo shërbim. Zot i të dhënave tuaja jeni _ju_.
- Të dhënat tuaja nuk ruhen në një shërbyes qendror, veç në qoftë se krejt
  përdoruesit përdorin të njëjtët shërbyes email-i
- S’i shpalosni kujt librin tuaj të adresave.
- _I shpejtë_ përmes përdorimit të Push-IMAP.
- _Baza më e gjerë e përdoruesve_ - mund të mbërrihet edhe te marrë që _nuk_ përdorin Delta Chat-in.
- _I përputhshëm_ - jo vetëm me veten.
- Ndërfaqe përdoruesi _elegante_ dhe _e thjeshtë_.
- Sistem i _shpërndarë_.
- _Pa Spam_ - vetëm mesazhe nga përdorues të njohur, të cilat shfaqen si parazgjedhje.
- _I qndrueshëm_ - i sigurt për përdorim profesional.
- _I besueshëm_ - mundet madje të përdoret për mesazhe biznesi.
- Software libre i bazuar në _Copyleft_ dhe _Standarde_.


### Cilat mesazhe shfaqen në Delta Chat?

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


### A mbulon Delta Chat-i figura, video dhe bashkëngjitje të tjera?

- Po. Veç tekstit të thjeshtë, krejt bashkëngjitjet email shfaqen si mesazhe më vete. Mesazhet ikëse do të pranojnë vetvetiu bashkëngjitje sipas nevojës.


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

- **Arkivoni fjalosje**, nëse s’doni t’i shihni më te lista e fjalosjeve tuaja.
  Në fund të listës së fjalosjeve, te menuja, ose përmes kërkimit, mundeni prapëseprapë të përdorni fjalosje të arkivuara.

- Kur te një fjalosje e arkivuar vjen një mesazh i ri, do të **hapet jashtë arkivit** dhe kalojë te lista juaj e fjalosjeve, veç në mos qoftë e heshtuar.
  **Fjalosjet e heshtuara mbeten të arkivuara**, veç në i çarkivofshi dorazi.

Që të arkivoni ose fiksoni një fjalosje, prekeni gjatë (në Android), përdorni menunë e fjalosjes (në Android/Desktop), ose fërkojeni për majtas (në iOS);
që të heshtoni një fjalosje, përdorni menunë e fjalosjes (në Android/Desktop), ose profilin e fjalosjes (në iOS).


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

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

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


### Pse nuk përdorni pEp (<em>pretty easy privacy</em>)?

- Delta Chat-i përdor standardin <em>e2e-encryption</em> të Autocrypt-it. Për
  një diskutim të Autocrypt-it dhe pEp-së, shihni [PBR
  Autocrypt-i](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-klient {#multiclient}

### A mund ta përdor Delta Chat-in në shumë pajisje njëherësh në të njëjtën kohë?

Nëse doni të përdorni të **njëjtën llogari** në pajisje të ndryshme, duhet
të eksportoni nga njëra pajisje një kopjeruatje dhe ta importoni te tjetra:

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


### Ç’është një grup i verifikuar? Pse është eksperimentale kjo? 

- Një grup i verifikuar është një bisedë që garanton parrezikshmëri ndaj<br>  një sulmuesi aktiv. Krejt Mesazhet në një bisedë të verifikuar janë<br>  të fshehtëzuara skaj më skaj, dhe anëtarët mund marrin pjesë duke<br>  skanuar një "kod QR ftese". Kështu, krejt anëtarët janë të lidhur njëri<br>  me tjetrin përmes një zinxhiri ftesash, çka garanton vazhdueshmëri<br>  kriptografike kundër sulmesh aktive rrjeti apo furnizuesi shërbimesh.<br>  Për R&amp;D pas kësaj veçorie, shihni [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html). 

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

Kjo është një veçori eksperimentale për disa vetë që eksperimentojnë me rregulla
më anë të shërbyesit. Jo të gjithë furnizuesit e shërbimeve e mbulojnë këtë, por
me disa mund të kaloni krejt mesazhet me një krye "Chat-Version" te dosja
DeltaChat. Zakonisht kjo do të bëhej nga aplikacioni Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- aktivizuar një rregull më anë shërbyesi për të shpënë krejt mesazhet me krye “Chat-Version” te dosja DeltaChat, dhe
- për rregullimin "Shfaq email-e klasikë" keni zgjedhur "jo, vetëm biseda".

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


## Të ndryshme

### A funksionon Delta Chat me shërbimin _tim_ email?

- Ka shanse të mira që: Po :)  
  Sidoqoftë, disa furnizues shërbimesh kanë nevojë për mundësi speciale, që
  të funksionojnë si duhet, shihni [Provider Overview](https://providers.delta.chat)


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
