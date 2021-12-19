---
title: FAQ
lang: sk  
render_toc: true 
header: Často kladené otázky
--- 


## Čo je to Delta Chat?

Delta Chat je nová chatovacia aplikácia, ktorá odosiela správy prostredníctvom e-mailov, ak je to možné, šifrované pomocou funkcie Autocrypt.
**Nemusíte sa nikde prihlasovať, stačí použiť svoj existujúci e-mailový účet s Delta Chat.*

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Ako nájdem ľudí s ktorými môžem chatovať?

S Delta Chatom môžete písať na každú existujúcu e-mailovú adresu – dokonca
aj ak príjemca nepoužíva aplikáciu Delta Chat. Nie je potrebné
pre príjemcu, aby si nainštaloval rovnakú aplikáciu, ako je tá vaša, ako pri iných messengeroch.


### Aké sú výhody Delta Chatu v porovnaní s inými messengermi?

_Nezávislý_ od akejkoľvek spoločnosti alebo služieb. _Vy_ vlastníte svoje údaje.
- Vaše údaje nie sú uložené na centrálnom serveri, pokiaľ ich nepoužívajú všetci používatelia
 rovnaké e-mailové servery
- Svoj adresár nikomu nedistribuujete.
- _Rýchlo_ pomocou Push-IMAP.
- _Väčšina príjemcov_ - ktorý nemajú Delta Chat môžu byť taktiež kontaktovaný.
- _Kompatibilné_ - nielen so sebou.
- _Elegantné_ a _jednoduché_ používateľské rozhranie.
- _Distribuovaný_ systém.
- _Žiadny Spam_ - predvolene sa zobrazujú iba správy od známych používateľov.
- _Spoľahlivý_ - bezpečný pre profesionálne použitie.
- _Dôveryhodný_ - možno použiť aj na obchodné správy.
- Softvér založený na _Copyleft_ and _Standards_.


### Ktoré správy sa zobrazujú v Delta Chate?

Delta Chat automaticky zobrazuje:

 - Správy od kontaktov vo vašom **adresári**
 - Správy od kontaktov **kontaktovaných vami**
 - **Odpovede** na správy, ktoré ste poslali vy

Ostatné správy sa nezobrazujú automaticky a nájdete ich v časti **Požiadavky na kontakt**. V prípade potreby je možné odtiaľ začať chat.


### Podporuje Delta Chat obrázky, videá a iné prílohy?

- Áno. Okrem čistého textu sa všetky prílohy e-mailov zobrazujú ako samostatné správy. Odchádzajúce správy dostávajú prílohy podľa potreby automaticky.


### Kto vidí moju profilovú fotku?

- V nastaveniach si môžete pridať profilový obrázok. Ak napíšete svojim kontaktom
alebo si ich pridáte pomocou QR kódu, automaticky to vidia ako váš profilový obrázok.

- Kontakty, ktoré nepoužívajú Delta Chat, nevidia profilový obrázok
(samozrejme, môžu si nainštalovať Delta Chat :)

- Z dôvodu ochrany osobných údajov nikto nevidí váš profilový obrázok, kým im nenapíšete
správu.

- Váš profilový obrázok sa neposiela s každou správou, ale dostatočne pravidelne
aby vaše kontakty znova dostali váš profilový obrázok, aj keď pridajú nové
zariadenie.


### Podporuje Delta Chat e-maily HTML?

- Áno. V prípade potreby dostanú prichádzajúce správy tlačidlo „Zobraziť celú správu“. Odchádzajúce e-maily vždy používajú obyčajný text.


### Prečo musím zadávať svoje e-mailové heslo do Delta Chat? Je to bezpečné?

Rovnako ako v prípade iných e-mailových programov, ako sú Thunderbird, K9-Mail alebo Outlook,
program potrebuje heslo, aby ste ho mohli používať na odosielanie e-mailov. Samozrejme,
heslo je uložené iba vo vašom zariadení. Heslo sa prenáša iba na vášho poskytovateľa e-mailu (keď sa prihlásite), ktorý má aj tak prístup k vašim e-mailom. 

Ak používate poskytovateľa e-mailu s podporou OAuth2, ako je gmail.com alebo yandex.ru,
nie je potrebné ukladať heslo do zariadenia. V tomto prípade iba 
používa sa prístupový token.

Keďže Delta Chat je Open Source, môžete skontrolovať [Zdrojový
Kód](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
ak chcete overiť, že vaše poverenia sú spracované bezpečne. Sme radi
o spätnej väzbe, vďaka ktorej je aplikácia bezpečnejšia pre všetkých našich používateľov.


### Aké povolenia potrebuje Delta Chat?

V závislosti od používaného operačného systému
môžete byť požiadaní o udelenie povolení aplikácii.
Delta Chat robí toto s týmito povoleniami:

- Fotoaparát *(možno zakázať)*
- fotografujte a natáčajte videá: na odosielanie fotografií
- Kontakty *(možno zakázať)*
- prehliadnite si svoje kontakty: objavte kontakty, s ktorými môžete chatovať
- Poloha *(možno zakázať)*
- prístup k približnej polohe (zdrojom polohy v sieti): pre funkciu streamovania polohy
- prístup k presnej polohe (GPS a sieťové zdroje polohy): pre funkciu streamovania polohy
- Mikrofón *(možno zakázať)*
- nahrávať zvuk: pre zvukové správy
- Úložisko *(možno zakázať)*
- upraviť alebo odstrániť obsah vašej SD karty: na stiahnutie príloh správ
- čítať obsah SD karty: zdieľať súbory so svojimi kontaktmi
- Ďalšie možnosti aplikácie
- zmeniť nastavenia zvuku: aby ste si mohli si vybrať vyzváňacie tóny a hlasitosť pre upozornenia a zvukové správy
- spustiť pri štarte: takže nemusíte spúšťať Delta Chat manuálne
- ovládanie vibrácií: pre upozornenia
- zobraziť sieťové pripojenia: na pripojenie k vášmu poskytovateľovi e-mailu
- zabrániť spánku telefónu: takže môžete jednoduchšie skopírovať bezpečnostný kód počas správy nastavenia automatického šifrovania
- mať úplný prístup k sieti: na pripojenie k vášmu poskytovateľovi e-mailu
- zobraziť pripojenia Wi-Fi: na pripojenie k poskytovateľovi e-mailu
- požiadať o ignorovanie optimalizácie batérie: pre používateľov, ktorí chcú neustále dostávať správy


## Skupiny

### Vytvorenie skupiny

- Vyberte **Nový chat** a potom **Nová skupina** z ponuky v pravom hornom rohu alebo stlačte príslušné tlačidlo v systéme Android/iOS.
- Na nasledujúcej obrazovke vyberte **členov skupiny** a definujte **názov skupiny**. Môžete si tiež vybrať **avatara skupiny**.
- Hneď ako napíšete **prvú správu** v skupine, všetci členovia sú informovaní o novej skupine a môžu odpovedať v skupine (pokiaľ nenapíšete správu v skupine, skupina je pre skupinu neviditeľná členovia).


### Pridajte členov do skupiny

- Každý člen skupiny má **rovnaké práva** ako ktorýkoľvek iný. Z tohto dôvodu môže každý vymazať každého člena alebo pridať nového.
 - Ak chcete pridať alebo odstrániť členov, kliknite na názov skupiny v chate. 


### Čo je overená skupina? Prečo je to experimentálne?

- Overená skupina je chat, ktorý zaručuje bezpečnosť pred aktívnym
útočníkom. Všetky správy v overenom zobrazení chatu sú šifrované e2e a
členovia sa môžu pripojiť naskenovaním „QR pozývacieho kódu“. Všetci členovia sú tak
navzájom prepojený reťazou pozvaní, ktoré zaručujú
kryptografická konzistentnosť proti útokom aktívnej siete alebo útokom poskytovateľa.
Pozrite si [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
pre výskum a vývoj za touto funkciou.

– Od decembra 2019 zostáva „overená skupina“ experimentálnou funkciou. 
   Neustále sa zlepšuje a odvtedy bolo opravených veľa chýb od
pôvodného zavedenie v roku 2018. Zostávajú však prípady, najmä
   s veľkými skupinami, kde sa môžu vyskytnúť nezrovnalosti alebo sú správy
nečitateľné. Začiatkom roku 2020 sa blíži bezpečnostná kontrola a niekoľko nových
vývoj okolo protokolov qr-join prebieha tak šanca
, že odstránime označenie „experimentálne“ v blízkej budúcnosti.


### Omylom som sa vymazal.

- Keďže už nie ste členom skupiny, nemôžete sa znova pridať. 
  Žiadny problém, jednoducho požiadajte ktoréhokoľvek iného člena skupiny v bežnom chate, aby vás znova pridal. 


### Už viac nechcem dostávať správy od skupiny.

- Vymažte sa zo zoznamu členov alebo odstráňte celý chat.
 Ak sa chcete neskôr znova pripojiť k skupine, požiadajte iného člena skupiny, aby vás znova pridal. 

- Ako alternatívu môžete tiež "Stlmiť" skupinu - znamená to, že budete dostávať všetky správy a
môžete stále písať, ale už nebudete upozorňovaní na žiadne nové správy.


### Čo znamenajú zaškrtnutia zobrazené vedľa odchádzajúcich správ?

- **Jedno zaškrtnutie** znamená, že správa bola úspešne odoslaná vášmu poskytovateľovi.
- **Dve začiarknutia** znamenajú, že aspoň jedno zariadenie príjemcov
hlásili, že dostali správu.
- Príjemcovia môžu mať zakázané potvrdenia o prečítaní,
takže aj keď vidíte len jedno zaškrtnutie, správa môže byť prečítaná.
- Naopak, dve zaškrtnutia automaticky neznamenajú
že človek správu prečítal alebo jej porozumel ;)


## Šifrovanie {#encryption}

### Podporuje Delta Chat šifrovanie typu end-to-end?

- Áno. Delta Chat implementuje štandard Autocrypt Level 1 a môže
teda E2E-šifrovať správy s inými aplikáciami schopnými Autocrypt.

- Delta Chat tiež podporuje silnú formu end-to-end šifrovania, ktoré je dokonca bezpečná proti aktívnym útokom, pozri „overené skupiny“ nižšie.


### Čo musím urobiť, aby som aktivoval šifrovanie typu end-to-end?

- Nič.

- Aplikácie Delta Chat (a ďalšie kompatibilné s [Autocrypt](https://autocrypt.org).
e-mailové aplikácie) automaticky zdieľajú kľúče potrebné na šifrovanie typu end-to-end
ako sú odoslané prvé správy.
Potom sú všetky nasledujúce správy automaticky šifrované end-to-end.
Ak jeden z partnerov chatu používa e-mailovú aplikáciu bez funkcie Autocrypt, potom
správy nie sú zašifrované, kým nebude opäť dostupná aplikácia kompatibilná s automatickým šifrovaním.

- Ak sa chcete štandardne radšej vyhnúť e-mailom so šifrovaním end-to-end,
použite príslušné nastavenie automatického šifrovania v časti „Nastavenia“ alebo „Rozšírené nastavenia“.


### Ak nie je k dispozícii šifrovanie typu end-to-end, nie je pripojenie šifrované vôbec?

- Na väčšine mailových serverov vytvára Delta Chat _transport šifrovanie_
([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
Tým sa zabezpečí iba spojenie medzi vaším zariadením a e-mailovým
serverom. Zatiaľ čo e2e-šifrovanie poskytuje bezpečnosť medzi
vaším zariadením a zariadením priateľa.


### Ako môžem overiť kryptografický stav u odosielateľa?

Ak ste v bezprostrednej vzdialenosti od partnera chatu:

- Vyberte **QR pozývací kód** na jednom zariadení a potom **Naskenujte QR kód**
na druhom a naskenujte kód. Ak sú obe zariadenia online,
zavedú medzi sebou chatovací kanál (ak ešte neexistuje)
a overia sa aj šifrovacie kľúče. Obaja uvidia a
systémová správa „overený odosielateľ“ vo svojom rozhovore 1:1.

Ak sa nenachádzate v blízkosti partnera chatu, stav môžete skontrolovať manuálne v dialógovom okne „Šifrovanie“.
(používateľský profil v systéme Android/iOS alebo kliknite pravým tlačidlom myši na položku zoznamu chatov používateľa na Desktope):

- Pre šifrovanie typu end-to-end zobrazuje Delta Chat dva odtlačky prstov.

Ak sa rovnaké odtlačky prstov objavia na zariadení vášho partnera na rozhovor,
spojenie je bezpečné.

- Pri transportnom šifrovaní sa tento stav zobrazuje iba tam


### Ako môžem skontrolovať šifrovanie správ?

- Malý **zámok** zobrazený vedľa správy označuje, či je správa od daného odosielateľa end-to-end šifrovaná.

Ak tam nie je **zámok**, správa sa zvyčajne prenáša nešifrovaná napr. pretože vy alebo odosielateľ ste vypli šifrovanie typu end-to-end alebo odosielateľ používa aplikáciu bez podpory šifrovania typu end-to-end. 

### Ktoré štandardy sa používajú na šifrovanie typu end-to-end?

- [Autocrypt](https://autocrypt.org) Sa používa na vytvorenie e2e-šifrovanie 
s inými aplikáciami ako Delta Chat a inými mailovými aplikáciami s podporou Autocrypt.
Autocrypt využíva obmedzenú podmnožinu funkcií OpenPGP.

- Delta Chat implementuje [countermitm nastavovacie-kontaktné a overené skupinové protokoly](https://countermitm.readthedocs.io/en/latest/new.html) na dosiahnutie ochrany pred aktívnymi sieťovými útokmi. Toto presahuje rámec oportunistickej 
  základnej ochrane Autocrypt Level 1 pri zachovaní jednoduchosti používania.

### Aký je rozdiel medzi overenými skupinami a rozhovormi 1:1 s overenými kontaktmi?

- 1:1 rozhovory s overeným kontaktom a overenými skupinami nie sú rovnaké, dokonca
  ak sú v overenej skupine iba 2 osoby. Jeden rozdiel je v tom, že ty
  môžeš ľahko pridať viac ľudí do skupiny, ale existujú aj tiež iné dôsledky.

- Overené skupiny sú vždy zabezpečené. Akékoľvek vniknutie (čirý text alebo nesprávne
  podpísané správy atď.) bude označené a takéto správy sa nezobrazia
v tomto chat. Môžete dôverovať všetkým správam v tomto overenom čete so začiarknutím
  neboli prečítané/zmenené strednými stranami.

- 1:1 chaty sú oportunistické, majú ľuďom umožniť komunikovať 
nezáleží
  na tom, či zmenia e-mailových klientov, zariadenia, nastavenia atď. Preto
 nie je 
žiadna overovacia značka, aj keď ste kontakt overili.


### Podporuje Delta Chat Perfect Forward Secrecy?

- Nie, OpenPGP nepodporuje Perfect Forward Secrecy. Perfect Forward Secrecy
  funguje session-oriented , ale e-mail je svojou povahou asynchrónny
  a často sa používa z viacerých zariadení nezávisle. To znamená, že ak váš
  Súkromný kľúč Delta Chat unikol a niekto má záznam
  zo všetkých vašich správ v tranzite, budú si ich môcť prečítať.

- Zapamätajete si, že ak sa niekto zmocnil alebo hackol váš bežiaci telefón,
oni
zvyčajne dokážu prečítať všetky správy, bez ohľadu na to, či ide o Perfect Forward Secrecy
je na použitý alebo nie. Mať prístup k jednému zariadeniu od člena skupiny,
  zvyčajne odhalí veľkú časť sociálneho grafu. Pomocou e-mailových adries, ktoré
  nie sú ľahko vystopovateľné späť k osobám, pomáha členom skupiny zostať v bezpečí pred
následkami zabavenia zariadenia.

- Načrtávame spôsoby, ako lepšie chrániť komunikáciu pred udalosťou
  odcudzenia zariadenia.


### Ako Delta Chat chráni moje metadáta?

- Keďže Delta Chat je decentralizovaný messenger, metadáta používateľov Delta Chatu
nie sú uložené na jednom centrálnom serveri. Sú však uložené na mailových
serveroch odosielateľa a príjemcu správy.

- Každý mailový server v súčasnosti vie o tom, kto poslal a kto prijal správu pomocou
  kontroly nezašifrovaných hlavičiek To/Cc a teda určenie, ktoré e-mailové adresy
  sú súčasťou skupiny. Samotný Delta Chat by sa mohol celkom vyhnúť nešifrovaným hlavičkám To/Cc
a vždy ich vkladať len do zašifrovanej sekcie. Pozri
[Vyhnite sa odosielaniu hlavičiek To/CC pre overené skupiny](https://github.com/deltachat/deltachat-core-rust/issues/1032).
  V prípade oportunistických chatov je hlavným problémom to, ako to ovplyvňuje iné poštové aplikácie, ktoré
  sa môžu zúčastniť chatov.

- Mnohé ďalšie hlavičky e-mailov, najmä hlavička "Predmet", sú
chránené end-to-end šifrovaním, pozrite si aj túto pripravovanú [IETF
RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Môžem znova použiť svoj existujúci súkromný kľúč?

- Áno. Najlepším spôsobom je odoslať správu o nastavení automatického šifrovania z iného e-mailového klienta. V nastaveniach druhého klienta vyhľadajte niečo ako **Spustiť prenos nastavenia automatického šifrovania** a postupujte podľa zobrazených pokynov.

- Prípadne môžete kľúč importovať manuálne v časti „Nastavenia“ alebo „Rozšírené nastavenia“ a potom v časti „Importovať tajné kľúče“. Upozornenie: Uistite sa, že kľúč nie je chránený heslom, alebo predtým heslo odstráňte.

Ak nemáte kľúč alebo ani neviete, že by ste ho potrebovali – nebojte sa: Delta Chat generuje kľúče podľa potreby, nemusíte pre to stláčať tlačidlo.


### Nemôžem importovať môj existujúci PGP kľúč do Delta Chat.

Najpravdepodobnejšou príčinou je, že váš kľúč je zašifrovaný a/alebo používa
heslo. Delta Chat takéto kľúče nepodporuje. Mohli by ste odstrániť
zašifrovanie prístupovej frázy a heslo a skúsiť import znova. Ak chcete
aby ste si zachovali svoju prístupovú frázu, budete si musieť vytvoriť e-mailový alias
s Delta Chatom tak, že kľúč Delta Chat je zviazaný s týmto e-mailovým aliasom.

Delta Chat podporuje bežné formáty súkromných kľúčov OpenPGP
avšak je nepravdepodobné, že budú plne podporované súkromné kľúče zo všetkých zdrojov. Toto
nie je hlavným cieľom Delta Chat. V skutočnosti väčšina nových používateľov
nebude mať pred použitím Delta Chat žiadny kľúč.
Snažíme sa však podporovať súkromné kľúče z čo najväčšieho počtu zdrojov.

Odstránenie hesla zo súkromného kľúča bude závisieť od
softvéru, ktorý používate na správu kľúčov PGP. S Enigmailom si môžete nastaviť svoje
heslo na prázdnu hodnotu v okne Key Management. Pomocou GnuPG to môžete nastaviť
[prostredníctvom príkazu
riadok](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Pre iné programy by ste mali vedieť nájsť riešenie online.


### Prečo nepoužívate pEp (pretty easy privacy)?

- Delta Chat používa šifrovací štandard Autocrypt e2e. Pre
diskusiu o Autocrypt a pEp pozrite [Autocrypt
FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multiklient {#multiclient}

### Môžem používať Delta Chat na viacerých zariadeniach súčasne?

Ak chcete používať **rovnaký účet** na rôznych zariadeniach, mali by ste exportovať
zálohu zo starého zariadenia a importovať do nového zariadenia:

- Na starom zariadení prejdite na „Nastavenia“ alebo „Nastavenia / Rozhovory a médiá“ a potom na „Zálohovanie“. Zadajte svoje
PIN, vzor alebo heslo na odomknutie obrazovky. Potom môžete kliknúť na „Štart
Zálohovať". Týmto sa súbor zálohy uloží do vášho zariadenia. Teraz ho musíte nejako preniesť
do nového zariadenia.
- Na novom zariadení na prihlasovacej obrazovke namiesto prihlásenia do e-mailu
účtu, zvoľte "Importovať zálohu". Po importe, vaše konverzácie, šifrovacie
kľúče a médiá by sa mali skopírovať do nového zariadenia.
- Teraz ste synchronizovaní a môžete použiť obe zariadenia na odosielanie a prijímanie
E2E-šifrovaných správ s vašimi komunikačnými partnermi.

### Máte nejaké plány na zavedenie webového klienta Delta Chat?

Neexistujú žiadne okamžité plány, ale niekoľko predbežných myšlienok.
- Existujú 2-3 spôsoby zavedenia webového klienta Delta Chat, ale všetky vyžadujú
významnú prácu. Zatiaľ sa zameriavame na to, aby sme dostali stabilné vydania do všetkých
obchodov s aplikáciami (repozitáre Google Play/iOS/Windows/macOS/Linux) ako natívne aplikácie.
- Ak potrebujete webového klienta, pretože nemáte povolené inštalovať softvér
na počítač, s ktorým pracujete, môžete použiť prenosného klienta Windows Desktop Client,
  alebo AppImage pre Linux. Nájdete ich na
[get.delta.chat](https://get.delta.chat).


### Prečo sa môžem rozhodnúť nesledovať doručenú poštu?

Toto je experimentálne nastavenie pre niektorých ľudí, ktorí experimentujú
pravidlá na strane servera. Nie všetci poskytovatelia to podporujú, no s niektorými môžete pohnúť
všetky e-maily s hlavičkou "Chat-Version" do priečinka DeltaChat. Normálne toto
vykonáva aplikácia Delta Chat.

Sledovanie doručenej pošty má zmysel vypnúť, ak máte oboje:

- povolené pravidlo na strane servera na presun všetkých správ s hlavičkou Chat-Version do priečinka DeltaChat a
- nastaviť "Zobraziť klasické e-maily" na "nie, iba chaty".

V tomto prípade Delta Chat nemusí sledovať doručenú poštu.

### Na čo je dobré nastavenie „Odoslať kópiu sebe“?

Odoslaním kópie správ sebe samému zaistíte,                               že dostanete svoje vlastné
správy na všetkých zariadeniach. Ak máte viacero zariadení a nezapnete ich, vy
uvidíte iba správy od iných ľudí a správy, ktoré vy                 odošlete z
 aktuálneho zariadenia. 

Kópia sa odošle do priečinka Doručená pošta a potom sa presunie do priečinka DeltaChat; nie je vložená do priečinka „Odoslané“. Delta Chat *nikdy* nič neodovzdáva do priečinka "Odoslané", pretože by to znamenalo nahrať správu dvakrát (raz cez SMTP, a raz cez IMAP do priečinka Odoslané). 

Predvolené nastavenie pre kópia pre seba je "nie".

### Prečo si môžem vybrať sledovanie priečinka „Odoslané“?

Jediný dôvod, prečo chcete sledovať priečinok Odoslané, je, ak používate iný
poštový program (napríklad Thunderbird) vedľa vašej aplikácie Delta Chat a chcete svoj MUA
 aby sa zúčastňoval chatových konverzácií.

Odporúčame však použiť Delta Chat Desktop Client; môžete si ho stiahnuť
na [get.delta.chat](https://get.delta.chat). Možnosť sledovať „Odoslané“
priečinok môže v budúcnosti zmiznúť. Bolo to zavedené v čase, kedy nebol
žiadny klient Delta Chat Desktop dostupný na všetkých platformách.

### Prečo sa môžem rozhodnúť nesledovať priečinok DeltaChat?

Niektorí ľudia používajú Delta Chat ako bežný e-mailový klient a chcú používať priečinok Doručená pošta
pre ich mail, namiesto priečinku DeltaChat. Ak zakážete „Sledovať
priečinok DeltaChat“, mali by ste tiež zakázať „presunúť chatové správy do DeltaChat“.
V opačnom prípade nemusí odstraňovanie správ alebo nastavenia viacerých zariadení fungovať správne.

## Rôzne

### Funguje Delta Chat s mojím poskytovateľom e-mailov?

- S pomerne dobrou šancou: Áno :)
  Niektorí poskytovatelia však potrebujú na správne fungovanie špeciálne možnosti,
  pozrite si [Prehľad poskytovateľa](https://providers.delta.chat)


### Ak Delta Chat používa e-mail, je to naozaj _Instantný_ Messenger? 

- Odosielanie a prijímanie správ zvyčajne trvá niekoľko sekúnd. Niekedy
   existujú prípady, keď to trvá dlhšie, ale to platí pravdepodobne aj pre
   akýkoľvek iný messenger.
- Okamžité chatovanie funguje rýchlo, ak obe strany aktívne používajú aplikáciu. to je
niekedy pomalšie, ak aplikácia beží na pozadí.
- Prijímanie správ potom môže trvať niekoľko minút, pretože Android aj iOS často
zastavia spustenie Delta Chatu na pozadí a iba príležitostne ho prebudia. Toto umelé oneskorenie je zvyčajne horšie na iOS ako na Androide.
- Avšak, Android a iOS kill aplikácie bežiace na pozadí
je
  problém mnohých legitímnych aplikácií. Ďalšie informácie nájdete v časti
[dontkillmyapp.com](https://dontkillmyapp.com/).


### Je Delta Chat kompatibilný s Protonmail / Tutanota / Criptext?

- Áno a nie.
- Nie, nemôžete používať svoj účet Protonmail, Tutanota alebo Criptext s Delta
  Chat; neponúkajú prijímanie pošty cez IMAP.
- V každom prípade môžete použiť Delta Chat na odosielanie správ ľuďom, ktorí to používajú
Protonmail, Tutanota alebo Criptext. Avšak tieto správy nebudú End-to-End
  zašifrované. Šifrovanie typu End-to-End, ktoré títo poskytovatelia                                ponúkajú, funguje iba   
  na ich platformách a nie sú kompatibilné s nikým mimo.
- Delta Chat môže e2e šifrovať prostredníctvom akéhokoľvek poskytovateľa e-mailu s ktoroukoľvek
[E-mailovou aplikáciou s povoleným automatickým šifrovaním](https://autocrypt.org/dev-status.html).


### Zaujímajú ma technické detaily. Môžete mi povedať viac?

- Pozrite si [Štandardy používané v Delta Chate]({% include standards-url %}). 

### Ako sa financuje vývoj Delta Chat?

Po prvé, Delta Chat nedostáva žiadny rizikový kapitál a
nie je zadlžená a nie je pod tlakom, aby produkovala obrovské zisky, resp
predávať používateľov a ich priateľov a rodinu inzerentom (alebo ešte horšie).

Vývoj Delta Chatu bol doteraz financovaný zo štyroch hlavných zdrojov:

- Výskum financoval projekt EÚ [NEXTLEAP](https://nextleap.eu).
   a implementáciu overených skupín a nastavenie kontaktných protokolov
   v rokoch 2017 a 2018.

- [Otvorený technologický fond](https://opentechfund.org) udelil dva granty.
Prvý grant 2018/2019 (~ 200 000 $) výrazne zlepšil aplikáciu pre Android
a umožnili nám vydať beta verziu aplikácie pre Desktop

a taktiež zakotvila náš vývoj funkcií vo výskume UX v kontexte ľudských práv,
pozrite si našu záverečnú správu [Needfinding and UX report]
(https://delta.chat/en/2019-07-19-uxreport).
  Druhý grant 2019/2020 (~ 300 000 $) stále prebieha a pomáha nám
  uvoľniť verzie Delta/iOS, aby sme previedli našu základnú knižnicu na Rust a
  poskytovali nové funkcie pre všetky platformy. Pozrite si
prebiehajúce [príspevky na blogu](https://delta.chat/en/blog), kde nájdete ďalšie informácie.

- [nadácia NLnet](https://nlnet.nl/) poskytla 46 000 EUR na
  dokončenie väzieb Rust/Python a podnietenie ekosystému Chat-botov.

- V neposlednom rade k vývoju Delta Chat prispelo a prispieva viacero pro-bono odborníkov a nadšencov
   bez toho, aby dostávali peniaze alebo iba
   malé množstvá. Bez nich by Delta Chat nebol tam, kde je dnes
   ani zďaleka.

Vyššie uvedené peňažné financovanie organizovala spoločnosť merlinux GmbH v
Freiburg (Nemecko) a následne distribuované takmer tuctu prispievateľov.

Financovanie na roky 2020/2021 ešte nie je určené. Sledujeme niekoľko
šancí s rôznymi organizáciami a partnermi. My tiež
zvažujeme požiadať o dary. V skutočnosti sme už trochu experimentálne
začali [Delta Chat / Darcovský účet Liberapay](https://liberapay.com/delta.chat/)
ale toto sme ešte nezverejnili. Doposiaľ bolo tiež okolo 3-4K
darované Bjoernovi (pôvodnému autorovi Delta Chatu) na paypalové a bitcoinové účty.
