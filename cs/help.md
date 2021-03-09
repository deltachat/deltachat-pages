---
title: Časté dotazy
lang: cs
render_toc: true
header: Časté dotazy
---


## Co je Delta Chat?

Delta Chat je nový četovací messenger, který posílá zprávy přes e-mail, pokud možno zašifrované metodou Autocrypt. 
**Netřeba žádného nového účtu. Pro Delta Chat prostě použijete ten, který už máte pro svůj e-mail.** 

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Jak najít lidi k hovoru? 

Delta Chatem můžete napsat na jakýkoli e-mail i v případě,
že příjemce Delta Chat nepoužívá. Není nutné aby příjemce
instaloval stejnou aplikaci jako vy, jak vyžadují ostatní četovací systémy.


### Jaké výhody má Delta Chat vzhledem k ostatním četovacím systémům?

- _Nezávislost_ na službě jedné společnosti. _Ty_ vlastníš svá data.
- Tvá data nejsou na nějakém centrálním serveru vyjma případů,
kdy všichi používají stejný mail server.
- Seznam kontaktů se nikam neposílá - nikdy se s nikým nesdílí.
- _Rychlost_ díky využití metody Push-IMAP.
- _Největší uživatelská základna_ - dosaženi mohou být i příjemci _bez_ Delta Chatu.
- _Slučitelnost_ nejen se sebou, ale i s e-mailem.
- _Elegantní_ a _jednoduché_ uživatelské rozhraní.
- _Rozptýlený_ systém, volně rozšířitelný každým e-mailovým serverem.
- _Beze spamu_ - výchozí nastavení bere jen zprávy od uznaných uživatelů.
- _Spolehlivost_ i pro použití v zaměstnání.
- _Důvěryhodnost_ - lze použít i pro obchodní zprávy.
- _Copyleft_ - ověřitelný, volný software založený na _standardech_.


### Jaké zprávy Delta Chat zobrazuje?

Delta Chat samočinně ukazuje:

- Zprávy od kontaktů ve tvém **adresáři**
- Zprávy od uživatelů **kontaktovaných tebou**
- **Odpovědi** na zprávy zaslané tebou.

Ostatní zprávy se neobjeví samočinně, a jsou k nalezení v **Výzvy ke spojení**. Otamtud je možné odpovědí začít hovor.


### Jak je to se spamem?

- Zprávy v běžných složkách se spamem jsou vynechány a adresy z nich nejsou považovány za uznané kontakty.
- Jelikož se zprávy od neuznaných kontaktů samočinně neukazují, normálně **žádný spam** není.
- Nicméně, pokud je třeba, lze **zablokovat** jakýkoli kontakt.


### Podporuje Delta Chat obrázky, videa a jiné přílohy?

- Ano. Kromě běžného textu jsou všechny e-mailové přílohy zobrazeny jako samostatné zprávy. V odchozích zprávách jsou přílohy použity samočinně.


### Kdo uvidí můj profilový obrázek?

- Profilový obrázek lze zvolit v nastavení. Když napíšeš svému kontaktu,
nebo přidáš nový vyfocením QR kódu, tyto kontakty automaticky uvidí tvůj profilový obrázek.

- Kontatkty, které nepoužívají Delta Chat obrázek obdrží v příloze e-mailu.

- Z důvodu soukromí nikdo nevidí tvůj profilový obrázek dokud jim nenapíšeš.

Profilový obrázek není posílán s každou zprávou, ale dostatečně často k tomu aby tvé kontakty zvuobdrželi obrázek i když začnou používat nové zařízení.


### Umí Delta Chat pracovat s e-maily v HTML?

- Ano. Pokud příchozí e-mail nemá verzi v běžném textu, HTML e-maily jsou aplikací převedeny do běžného textu. Odchozí zprávy jsou vždy běžný text.


### Proč musím Delta Chatu zadat mé e-mailové heslo? Je to bezpečné?

Podobně jako ostatní e-mailové programy, např. Thunderbird nebo Outlook,
program potřebuje heslo k tomu aby mohl posílat e-maily. Samozřejmě, že
heslo je uloženo pouze na tvém přístroji. Heslo je přenášeno pouze při přihlašení
k e-mailovému serveru, který má i beztak přístup k tvým e-mailům.

Poskytovatelé e-mailu s podporou OAuth2, např. "gmail.com" či "yandex.ru",
nepotřebují při přihlašování tvé heslo. V takovém případě je uložen pouze
vygenerovaný přístupový kód.

Delta Chat má otevřený [zdrojový kód](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs),
ze kterého lze ověřit, že program s osobními daty zachází bezpečně. Jsme rádi
za každou odezvu, která udělá Delta Chat bezpečnější pro všechny.


### Jaká oprávnění Delta Chat potřebuje?

Dle užívaného operačního systému můžeš být 
dotázán na udělení povolení této aplikaci. 
Zde je co Delta Chat dělá s těmito povoleními:

- Kamera *(může být zakázána)*
  - fotit a filmovat: zasílat Fotky
- Kontakty *(mohou být zakázané)*
  - číst tvé kontakty: objevovat kontakty pro hovory
- Poloha *(může být zakázaná)*
  - přístup k přibližné poloze (poloha z GSM sítě): pro funkci "vysílání" polohy
  - přístup k přesné poloze (poloha z GPS a sítě GSM): pro funkci "vysílání" polohy
- Mikrofon *(může být zakázaný)*
  - nahrávat zvuk: pro hlasové zprávy
- Úložiště *(může být zakázané)*
  - upravovat a mazat obsah tvé SD karty: stahování příloh zpráv
  - číst obsah tvé SD karty: sdílet soubory s tvými kontakty
- Další schopnosti aplikace
  - měnit nastavení zvuku: lze měnit zvuky vyzvánění a hlasitost oznámení a zvukových zpráv
  - spouštět se při startu: nemusíš spouštět Delta Chat ručně
  - ovládat chvění: pro oznámení
  - značit síťová připojení: pro připojení k tvému poskytovateli e-mailu.
  - zamezit režimu spánku: pro snadnější přepis čísel bezpečnostního kódu při přenosu Nastavení Autokryptu
  - plný přístup k síti: pro připojení k poskytovateli e-mailu
  - vidět Wi-Fi připojenís: pro připojení k poskytovateli e-mailu
  - zamezit přizpůsobení se baterii: pro uživatele, kteří chtějí přijímat zprávy bez přerušení


## Skupiny

### Vytvoření skupiny

- Z menu v pravém horním rohu, nebo stiskem příslušného tlačítka na Androidu / iOS vyber **Nový hovor** a pak **Nová skupina**.
- Na další obrazovce, vyber **členy skupiny** a zadej **Název skupiny**. Také můžeš vybrat  **obrázek skupiny**.
- Jakmile do skupiny pošleš **první zprávu**, všichni členové budou vyrozuměni o nové skupině a mohou do ní také psát (dokud nepošleš první zprávu členové skupiny o ní nebudou vědět).


### Přidat členy skupiny

- Každý člen skupiny má "stejná práva" jako ostatní. Kdokoli může vymazat jakéhokoli člena, a přidat nového člena.
- K přidání a mazání členů, klikněte v hovoru na název skupiny..


### Co je ověřená skupina? Proč je jen na zkoušku? 

- Ověřená skupina je hovor zaručující jejím členům ochranu proti útočníkům.
Všechny zprávy chrání end-to-end šifrování, a členové se mohou připojit 
ofocením Zvacího QR kódu.. Všichni členové jsou tak propojeni posloupností 
pozvánek, které zaručují důsledné šifrování proti útokům na síti nebo 
od poskytovatele. Více o R&D této funkce je na:
[countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) 

- Od prosince 2019, zůstává "ověřená skupina" jen pokusnou funkcí.
Je průběžně zdokonalována, a od uvedení v roce 2018 bylo odstraněno 
mnoho chyb.  Nicméně zejména u velkých skupin se můžou objevit 
nesrovnalosti a zprávy se jeví nečitelně. V roce 2020 probíhá 
bezpečnostní rozbor a je uvedeno několik nových vylepšení protokolů 
pro QR-připojení. 
Je šance, že se u této funkce brzy zbavíme označení "pokusné".


### Kdyź se nedopatřením odstraníš.

- Když nejsi členem skupiny nelze se znovu připojit. Nicméně, není to velká potíž - 
požádej běžnou zprávou jiného člena skupiny o znovupřipojení.


### Nechci již přijímat zprávy ze skupiny.

- Buď se odeber ze seznamu členů a nebo vymaž celý skupinový hovor.
  K opětovnému připojení v budoucnu požádej nějakého člena skupiny o znovupřidání.

- Jiná možnost je "Umlčení" skupiny, což znamená nadále přijímat a také posílat zprávy, 
ale nebudeš dostávat upozrnění na nově příchozí zprávy.


### Co znamená dvojitá "fajfka" u skupinových zpráv? Četl už někdo mojí zprávu?

- Zpráva ukáže dvojitou "fajfku", když si ji otevřela více než polovina členů skupiny.
- Uvědom si, že příjemce může mít z důvodu ochrany soukromí vypnuté potvrzení otevření zpráv.
- Dvojitá "fajfka" se nikdy neobjeví v případě, kdy více než 50% členů skupiny 
má vypnutá potvrzení. Podrobnější popis je na
  [blogu](https://delta.chat/en/2017-07-06-read-receipts-and-social-pressure).


## Šifrování {#encryption}

### Podporuje Delta Chat end-to-end šifrování?

- Ano. Delta Chat používá standard Autocrypt Level 1 a proto může ve spojení s ostatními 
Autocrypt aplikacemi šifrovat zprávy tak, že je lze číst pouze na koncových zařízeních. 

- Delta Chat také podporuje silné end-to-end šifrování, které je bezpečné 
i proti aktivním útokům, viz "ověřené skupiny" uvedené níže. 


### Co je nutné udělat k používání end-to-end šifrování?

- Nic.

- Delta Chat (a ostatní aplikace podporující [Autocrypt](https://autocrypt.org)-compatible
  e-mail) sdílí "kliče" nutné pro end-to-end šifrování samočinně s první zaslanou zprávou. 
  Po ní jsou všechny zprávy samočinně šifrovány end-to-end.
  Pokud jeden z účastníků hovoru nemá e-mailový program s Autocryptem, 
  zprávy nejsou šifrovány dokud Autocrypt není použitelný na obou koncích. 

- K úplnému vypnutí šifrování vyber příslušnou volbu v Nastavení či v Pokročilém nastavení.


### Je spojení naprosto nešifrované, když end-to-end šifrování není dostupné?

- Naprostá většina mail serverů používá _šifrovaný přenos_
  ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
  TLS zabezpečuje pouze spojení mezi Delta Chatem a mail serverem.
  Naproti tomu end-to-end šifrování chrání zprávu od tvého zařízení 
  až do zařízení příjemce.


### Jak mohu ověřit stav šifrování s odesílatelem? 

Pokud jsi v bezprostřední blízkosti účastníka hovoru:

- Vyber **Zvací QR kód** na jednom zařízení a pak **Sejmout QR kód**
  na druhém, a vyfoť QR kód. Pokud jsou obě zařízeni připojena k Internetu,
  založí si hovor mezi sebou (pokud již neexistoval) a
  proběhne také ověření šifrovacích "klíčů". Na obou zařízeních se pak
  v příslušném hovoru zobrazí hláška "odesílatel ověřen". 

Pokud je druhý účastník fyzicky nedosažitelný, lze stav ověřit ručně přes tlačítko "Šifrování"
(profil uživatele na Android / iOS nebo pravý klik na seznam hovorů na stolním počítači):

- Delta Chat zobrazí pro každou end-to-end šifru dva "otisky". 
  Spojení je bezpečné pokud se stejné dva "otisky" pro daný hovor
  zobrazí i na zařízení druhého účastníka..

- Pro šifrování přenosu, se tam zobrazí tento stav


### Jak zkontrolovat šifrování zpráv?

- Malý **zámek** zobrazený vedle zprávy značí její end-to-end zašifrování mezi odesílatelem a tvým zařízením.

- Zpráva bez zobrazeného **zámku** značí, že byla přenesena bez end-to-end šifrování, např. protože odesílatel má vypnutou podporu šifrování, nebo druhý účastník používá program bez podpory Autocryptu.

### Jaké standardy jsou použity pro end-to-end šifrování?

- [Autocrypt](https://autocrypt.org) je použit k vytvoření end-to-end šifrování
 s dalšími Delta Chaty a ostatními e-mailovými programy s Autocryptem. 
  Autocrypt využívá vybranou část vlastností širšího standardu OpenPGP.

- K dosažení ochrany proti aktivním síťovým útokům Delta Chat konkrétně používá 
[countermitm setup-contact and verified-group protocols](https://countermitm.readthedocs.io/en/latest/new.html). 
To jde za hranici příležitostné základní ochrany Autocryptu Level 1 při udržení jednoduchého použití. 

### Jaký je rozdíl mezi ověřenými skupinami a běžnými hovory s ověřenými kontakty?

- hovor s jedním ověřeným kontaktem a hovor v ověřené skupině nejsou stejné, 
dokonce i když ověřená skupina sestává pouze ze dvou účastníků. Jeden rozdíl je 
možnost jednoduše přidat další účastníky skupiny, ale jsou i další rozdíly.

- Ověřené skupiny jsou vždy zabezpečeny. Jakýkoli nesoulad (holý text, nebo
nesprávně podepsané zprávy atd.) bude označen a zpráva nebude ve skupinovém 
hovoru zobrazena. Ve skupině označené za ověřenou můžeš věřit, že žádná zpráva 
nebyla přečtena nebo změněna jakoukoli třetí stranou.

- U běžných hovorů jeden na jednoho je šifrování příležitostné. To umožňuje 
lidem komunikovat i při změně e-mailových klientů, zařízení, nastavení apod.
Proto i když je druhý účastník hovoru ověřen značka ověření není použita.


### Podporuje Delta Chat tzv. Perfect Forward Secrecy?

- Ne, OpenPGP a tudíž Autocrypt nezajišťují "dopředné utajení" (forward secrecy). 
Perfect Forward Secrecy vyžaduje jednotlivá sezení, ale E-Mail je z podstaty asynchronní
  a je často používán nezávisle z různých přístrojů. To znamená, že pokud dojde k úniku tvého soukromého "klíče" a někdo má záznam z přenosu tvých  zpráv může rozšifrovat a přečíst..  

- Uvědom si, že pokud se někdo zmocní tvého zařízení a nebo se do něj prolomí, 
obecně bude schopen číst všechny zprávy - to platí i pro systémy s Perfect Forward 
Secrecy. Přístup k jedinému zařízení člena skupiny běžně odhalí velkou část 
jeho sociální sítě. Používání e-mailových adres, které není jednoduché propojit 
s konkrétními lidmi, je v případě krádeže zařízení bezpečnější pro všechny 
členy skupiny.

- Pracujeme na návrhu, který bude lépe chránit korespondenci i v případě 
  zcizení přístroje.


### Jak Delta Chat chrání moje metadata?

- Delta Chat je decentralizovaná četovací aplikace a proto neukládá žádná metadata, 
  ani jiná data o uživatelích na nějakém centrálním serveru. Nicméně tyto data 
  jsou uložena na mail serverech odesílatale i příjemce zpráv.

- Každý mail server může číst nešifrované hlavičky To/Cc a má tak přístup k adresám
  odesílatele a příjemce a to i u skupinových hovorů. Delta Chat by mohl jednoduše dávat
  hlavičky To/Cc do šifrované části zpráv, jak je popsáno zde
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032).
  Potíž ale představuje příležitostné šifrování hovorů a vliv na použití jiných e-mailových
  aplikací, které se mohou účastnit hovorů. 

- Ostatní hlavičky e-mailů, zejména hlavička "Subject" / Předmět, jsou ve zprávách
  šifrovány end-to-end. Více je na [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Lze znovu použít můj stávající soukromý klíč?

- Ano. Nejlépe zasláním Nastavení Autocryptu ze zařízení s daným klíčem. V nastavení dané aplikace najdi funkci ve smyslu **Spusť přenos nastavení Autocryptu** a následuj popisovaný postup.

- Případně je možné zavést klíče ručně přes "Nastavení" nebo "Pokročilé nastavení" a pak vybráním funkce "Importuj tajné klíče". Upozornění: Ujisti se, že klíč není chráněn heslem, nebo že jsi heslo předem odstranili.

Pokud nemáš, nebo ani netušíš že je třeba "klíče" - nevadí: Delta Chat vytvoří klíč dle potřeby, není ani nutné mít kvůli tomu tlačítko.


### Nemohu do Delta Chatu zavést můj stávající PGP klíč.

Nejpravděpodobnější příčinou jsou zašifrované klíče, nebo klíče s heslem. 
Takové klíče Delta Chat nepodporuje.  Můžeš odstranit šifrování nebo heslo a 
zkusit to znovu. Pokud je potřeba použít zaheslovaný klíč vytvoř / použij zástupnou 
adresua a pak přidej nový Delta Chat účet s tímto klíčem.

Delta Chat podporuje běžné formáty OpenPGP klíčů, nicméně neočekáváme, 
že soukromé klíče ze všech aplikací budou fungovat. To není cíl, a 
ve skutečnosti věttšina nových uživatelů Delta Chatu nemá žádný stávající klíč.
Přesto se snažíme podporovat soukromé klíče z co nejvíce možných zdrojů.

Odstranění hesla ze soukromého klíče závisí na programu ze kterého PGP klíč pochází. 
Enigmail umí nastavit prázdnou hodnotu hesla v okně Key Management.
U GnuPG lze to samé nastavit [z příkazové řádky](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Pro ostatní programy by mělo jít nalézt řešení na Interentu.


### Proč Delta Chat nepoužívá pEp (pretty easy privacy)?

- Delta Chat používá šifrovací standard Autocrypt. Podrobnější debata 
  ohledně Autocryptu a pEp je na 
  [Autocrypt FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Více klientů najednou {#multiclient}

### Lze Delta Chat používat souběžně na více zařízeních?

Ano. K souběžnému používání **stejného účtu** na různých zařízeních proveď zálohu na původním zařízení a nahraj ji na ndruhém.

- Na původním přístroji jdi do "Nastavení" nebo "Nastavení / Hovory a multimedia" a 
  pak do "Záloha". Zadej svůj PIN, vzor, nebo heslo. Pak stiskni "Proveď zálohu". 
  Tím se soubor se zálohou uloží v přístroji. Nyní musíš soubor se zálohou nějakým 
  způsobem přenést na jiné zařízení.
- Na novém zařízení, na obrazovce s přihlášením, zvol místo přihlášování k e-mailu 
  "Nahrát zálohu". Po nahrání zálohy budou na novém zařízení zavedeny 
  všechny hovory, šifrovací klíče a multimedia ve stejném stavu jako na původním zařízení. 
- Takto synchronizovaná zařízení lze nadále používat souběžně k odesílání i přijímání 
  end-to-end šifrováných zpráv s tvými kontakty.. 

### Je v plánu vytvořit webovou verzi Delta Chatu?

- Zatím ne, pouze nějaké úvodní myšlenky ohledně takového vývoje.
- Jsou 2-3 cesty jak uvést Delta Chatu na Web, ale všechny představují významné úsilí.
  V tuto chvíli jsme zaměřeni na poskytování stabilní verze jako nativní aplikace ve všech 
  významných obchodech (Google Play / iOS / Windows / macOS / Linux repositories) .
- Pokud nemáš dostatečná práva instalovat programy na svůj pracovní počítač, můžeš použít
  přenosnou verzi pro Windows nebo AppImage pro Linux. 
  Všechny softwarové balíčky jsou na [get.delta.chat](https://get.delta.chat).


### Proč můžu zvolit nesledovat složku Příchozí?

Toto je pokusné nastavení pro některé uživatele, kteří používají vlastní pravidla 
pro třídění e-mailu na serveru. Ne všichni poskytovatelé toto nabízí, ale někteří 
umožňují samočinně přesouvat všechny e-maily s hlavičkou "Chat-Version" do složky 
DeltaChat. To je něco co za běžných okolností dělá Delta Chat sám.

Vypnout sledování složky Příchozí má smysl pokud máte obojí:

- zapnuté pravidlo na serveru, které přesouvá zprávy s hlavičkou Chat-Version do složky DeltaChat, a
- nastaveno "Zobrazuj běžné e-maily" na "Ne, pouze hovory".

V takovém případě Delta Chat nemusí sledovat složku Příchozí.

### K čemu je dobré nastavení "Posílat si kopii"?

Posílat si kopii zpráv zaručuje, že zprávy se zobrazí na všech současně nastavených
zařízeních. Pokud máš několik zařízení a nezapneš tuto funkci, uvidíš pouze příchozí 
zprávy, a zprávy odeslané jen z právě používaného přístroje. Ty odeslané z ostatních
zařízení neuvidíš.

Kopie přijdou nejdříve do Příchozí složky, a pak jsou samočinně přesunuty do složky 
DeltaChat; ne do složky Odeslané. Do složky Odeslané se nepřesouvá nikdy nic.
protože by to vyžadovalo přenášet zprávu dvakrát (jednou poslat přes SMTP, a jednou 
pro složku Odeslané přes IMAP).

Výchozí hodnota nastavení pro zasílání si kopií je "Ne".

### Proč můžu nastavit sledování složky Odeslané?

Jediný důvod sledovat složku s odeslanými zprávami je používání jiného e-mailového
programu (např. Thunderbird) spolu s Delta Chatem, a chtít z tohoto programu také 
psát zprávy do hovorů Delta Chatu.

Nicméně doporučujeme používat Delta Chat Desktop Client; ten lze stáhnout z [get.delta.chat](https://get.delta.chat). Možnost sledování složky "Odeslané"
může být v budoucnu zrušena. Byla totiž vytvořena v době, kdy Delta Chat Desktop
nebyl dostupný na všech platformách. 

### Proč mohu zvolit nesledovat složku DeltaChat?

Někteří lidé užívají Delta Chat jako jediný e-mailový program, a chtějí užívat 
složku Příchozí / Inbox pro všechny zprávy i místo složky DeltaChat. Pokud zrušíš 
"Sleduj složku DeltaChat", zruš také "přesouvat zprávy do složky DeltaChat". Jinak 
hrozí, že mazání zpráv či nastavení na několika zařízeních nebude správně fungovat.

## Různé

### Pracuje Delta Chat s _mým_ poskytovatelem e-mailu?

- S poměrně vysokou pravděpodobností: Ano :)  
  Nicméně, někteří poskytovatelé vyžadují ke správnému chodu speciální nastavení,
  podrobnější popis je na [Provider Overview](https://providers.delta.chat)


### Je hovor v Delta Chatu skutečně _interaktivní_, když užívá E-Mail?

- Posílání zpráv normálně trvá pár sekund. Ojedinělé případy zaslání trvají déle, 
  ale to beze sporu platí i pro ostatní četovací aplikace.
- Když účastníci používají Delta Chat aktivně, otevřený hovor funguje rychle. Pokud je
  aplikace na pozadí může být reakce pomalejší.
- Přijímání zpráv pak může trvat i několik minut, protože Android a iOS často omezují 
  běh Delta Chatu na pozadí, a nechají ho běžet jen někdy. Toto umělé omezení je 
  většinou horší na iOS než na Androidu.
- Delta Chat totiž nepoužívá Google Cloud Messaging (GCM) ani Apple
  Push Notification Service (APNS), aby se vyhlo v co nejvyšší míře sledování a 
  centralizované kontrole.
- Zastavování aplikací na pozadí v systémech Android a iOS je potíž pro mnoho 
  legitimních aplikací. Více je o tom na [dontkillmyapp.com](https://dontkillmyapp.com/).


### Lze Delta Chat používat s Protonmail / Tutanota / Criptext?

- Ano a Ne.
- Nelze používat účty na Protonmail, Tutanota, či Criptext z aplikace Delta
  Chat; protože neposkytují příjem e-mailů pomocí IMAPu.
- Každopádně ale lze Delta Chat použít k posílání zpráv lidem užívající
  Protonmail, Tutanota, či Criptext. Tyto zprávy však nebudou šifrované end-to-end.
  End-to-end šifrování nabízené těmito poskytovateli funguje pouze na jejich platformě, 
  a není slučitelné s chodem běžných E-mail serverů.
- Delta Chat je schopen výměny end-to-end šifrovaných zpráv s jakýmkoli poskytovatelem 
  e-mailu s podporou [Autocryptu](https://autocrypt.org/dev-status.html).


### Mám zájem o technické podrobnosti. Kde najdu víc?

- Dobrý začátek je [Standards used in Delta Chat]({% include standards-url %}).

### Jak je financován vývoj Delta Chatu? 

Delta Chat nepobírá žádný podnikatelský kapitál, není zadlužen, 
není nucen vykazovat vysoký zisk a prodávat zážitky uživatelů a jejich 
blízkých reklamě (nebo horším subjektům či záměrům).

Vývoj Delta Chatu byl doposud financován ze čtyř hlavních zdrojů: 

- [NEXTLEAP](https://nextleap.eu) je projekt EU z let 2017 a 2018 na
  financování výzkumu a vývoje protokolů pro ověřené skupiny a
  pro navázání spojení. 

- [Open Technology Fund](https://opentechfund.org) přispěl dvěma granty.
  První v letech 2018/2019 (~$200K) významě podpořil aplikaci pro Android, umožnil 
  vydání beta verze pro Desktop, a také ukotvil vývoj v oblasti přívětivosti užívání a 
  právního kontextu popsané v [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  Druhý z let 2019/2020 (~$300K) nám pomohl vydat verzi pro iOS, převést klíčové 
  knihovny do jazyka Rust, a poskytnout nové funkce na všech platformách. 
  Více je na [blog posts](https://delta.chat/en/blog). 

- [NLnet foundation](https://nlnet.nl/) poskytla grant ve výši 46k EUR k dokončení
  programovacího rozhrani Rust/Python  a podnítila vznik prostředí pro Chat-boty. 

- Velice významnou pomocí je práce expertů a nadšenců prováděná bez nároku 
  na honorář či za minimální odměnu ve prospěch veřejného dobra. Je třeba 
  zdůraznit, že bez nich by se Delta Chat nepřibližoval ani zdaleka současnému 
  stavu. 

Výše uvedené financování bylo organizováno společností Merlinux GmbH 
z Freiburgu (Německo), a následně rozloženo mezi téměř tucet přispěvovatelů. 

Financování pro období 2020/2021 ještě není rozhodnuté. Usilujeme o 
několik možností s různými organizacemi a partnery. Zvažujeme také možnosti 
dárcovství. Na zkoušku jsme založili malý [Delta Chat / Liberapay donation account](https://liberapay.com/delta.chat/), 
který jsme ale ještě nepropagovali. Bjoern (původní autor Delta Chatu) také obdržel
dárcovské příspěvky přes PayPal a bitcoin v hodnotě 3-4k EUR.
