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

Delta Chat shfaq automatikisht:

- Mesazhe nga kontakte prej **librit tuaj të adresave**
- Mesazhe nga kontakte **të kontaktuar nga ju**
- **Përgjigje** ndaj mesazheve dërguar nga ju

Mesazhe të tjerë nuk shfaqen automatikisht, dhe do të gjenden te **Kërkesa kontakti**. Nëse dëshirohet, një fjalosje mund të fillohet prej atje.


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

### What means Pinning, Muting, Archiving?

Use these tools to organize your chats and keep everything in its place:

- **Pinned chats** always stay atop of the chat list. You can use them to access your most loved chats quickly or temporarily to not forget about things.

- **Mute chats** if you do not want to get notifications for them. Muted chats stay in place and you can also pin a muted chat.

- **Archive chats** if you do not want to see them in your chat list any longer.
  At the very bottom of the chat list, in the menu or via search, you can still access the archived chats.

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


## Grupe

### Krijimi i një grupi

- Prej menusë në cepin e sipërm djathtas, përzgjidhni **Fjalosje e re** dhe mandej **Grup i ri**, ose shtypni butonin përgjegjës në Android/iOS.
- Te skena vijuese, përzgjidhni **anëtarë grupi** dhe përcaktoni një **emër grupi**. Mund të përzgjidhni edhe një **avatar grupi**.
- Sapo të shkruani **mesazhin e parë** te grupi, krejt anëtarët marrin vesh për grupin e ri dhe mund të përgjigjen në të (për sa kohë që te grupi s’shkruani një mesazh i cili është i padukshëm për anëtarët).


### Shtoni anëtarë te një grup

- Çdo anëtar i grupit ka **të njëjtat të drejta** si kushdo tjetër. Për këtë arsye, gjithkush mund të fshijë cilindo anëtar ose të shtojë të rinj.
- Për të shtuar ose fshirë anëtarë, klikoni mbi emrin e grupit te biseda.


### Ç’është një grup i verifikuar? Pse është eksperimentale kjo? 

- Një grup i verifikuar është një bisedë që garanton parrezikshmëri ndaj<br>  një sulmuesi aktiv. Krejt Mesazhet në një bisedë të verifikuar janë<br>  të fshehtëzuara skaj më skaj, dhe anëtarët mund marrin pjesë duke<br>  skanuar një "kod QR ftese". Kështu, krejt anëtarët janë të lidhur njëri<br>  me tjetrin përmes një zinxhiri ftesash, çka garanton vazhdueshmëri<br>  kriptografike kundër sulmesh aktive rrjeti apo furnizuesi shërbimesh.<br>  Për R&amp;D pas kësaj veçorie, shihni [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html). 

- Deri në dhjetor të 2019-s, një "grup i verifikuar" mbetet një veçori eksperimentale.
  Është përmirësuar vazhdimisht dhe janë ndrequr mjaft të meta që prej sjelljes
  për herë të parë më 2018. Megjithatë, mbeten raste, veçanërisht me grupe
  të mëdhenj, kur mund të ketë paqëndrueshmëri, ose mesazhet të bëhen
  të palexueshëm. Diku nga fillimet e 2020-s do të vijë një shqyrtim sigurie dhe
  po kryhen disa zhvillime të reja lidhur me protokollet <em>qr-join</em>, kështu
  që shanset janë për ta hequr etiketën “experimentale” jo shumë larg në të ardhmen. 


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


## Fshehtëzim {#encryption}

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

- Ndryshe, mund ta importoni kyçin dorazi që nga "Rregullime" ose "Rregullime të mëtejshme" dhe mandej “Importo kyçe të fshehtë”. Kujdes: Sigurohuni që kyçi s’është i mbrojtur me një fjalëkalim, ose hiqiani paraprakisht fjalëkalimin.

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

- Te pajisja e vjetër, shkoni te "Rregullime" ose "Rregullime / Fjalosje dhe media"
  dhe mandej te "Kopjeruajtje". Jepni PIN-in, rregullsinë ose fjalëkalim tuaj
  për shkyçje ekrani. Mandej mund të klikoni mbi “Fillo Kopjeruajtjen”. Kështu
  ruhet kartela kopjeruajtje te pajisja juaj. Tani ju mbetet ta shpërngulni në
  një farë mënyre te pajisja tjetër.
- Te pajisja e re, te skena e hyrjes, në vend të hyrjes në llogarinë tuaj email,
  zgjidhni “Importo Kopjeruajtje”. Pas importimit, bisedat tuaja, kyçet
  e fshehtëzimit dhe media duhet të jenë kopjuar te pajisja juaj e re.
- Tani jeni i njëkohësuar, dhe mund të përdorni të dyja pajisjet për dërgim dhe
  marrje mesazhesh të fshehtëzuar Skaj-Më-Skaj me partnerët tuaj të komunikimit. 

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


### Pse mund të zgjedh të mos i vëzhgoj Të marrët?

Kjo është një veçori eksperimentale për disa vetë që eksperimentojnë me rregulla
më anë të shërbyesit. Jo të gjithë furnizuesit e shërbimeve e mbulojnë këtë, por
me disa mund të kaloni krejt mesazhet me një krye "Chat-Version" te dosja
DeltaChat. Zakonisht kjo do të bëhej nga aplikacioni Delta Chat.

Çaktivizimi i Vëzhgimit të Të marrëve ka kuptim nëse keni:

- aktivizuar një rregull më anë shërbyesi për të shpënë krejt mesazhet me krye “Chat-Version” te dosja DeltaChat, dhe
- për rregullimin "Shfaq email-e klasikë" keni zgjedhur "jo, vetëm biseda".

Në këtë rast, Delta Chat-i s’ka nevojë të vëzhgojë Të marrët.

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
