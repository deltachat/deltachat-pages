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


### Jaké zprávy Delta Chat zobrazuje?

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


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Podporuje Delta Chat obrázky, videa a jiné přílohy?

- Ano. Kromě běžného textu jsou všechny e-mailové přílohy zobrazeny jako samostatné zprávy. V odchozích zprávách jsou přílohy použity samočinně.

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#can-i-use-delta-chat-on-multiple-devices-at-the-same-time).

### Kdo uvidí můj profilový obrázek?

- Profilový obrázek lze zvolit v nastavení. Když napíšeš svému kontaktu,
nebo přidáš nový vyfocením QR kódu, tyto kontakty automaticky uvidí tvůj profilový obrázek.

- Contacts who don't use Delta Chat do not see the profile picture
  (however, of course, they can install Delta Chat :)

- Z důvodu soukromí nikdo nevidí tvůj profilový obrázek dokud jim nenapíšeš.

Profilový obrázek není posílán s každou zprávou, ale dostatečně často k tomu aby tvé kontakty zvuobdrželi obrázek i když začnou používat nové zařízení.


### Umí Delta Chat pracovat s e-maily v HTML?

- Yes. If needed, incoming messages get a "Show full message" button. Outgoing e-mails always use plain text.


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

### What means Pinning, Muting, Archiving?

Use these tools to organize your chats and keep everything in its place:

- **Pinned chats** always stay atop of the chat list. You can use them to access your most loved chats quickly or temporarily to not forget about things.

- **Mute chats** if you do not want to get notifications for them. Muted chats stay in place and you can also pin a muted chat.

- **Archive chats** if you do not want to see them in your chat list any longer.
  Archived chats remain accessible above the chat list or via search. 

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


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


## Skupiny

### Vytvoření skupiny

- Z menu v pravém horním rohu, nebo stiskem příslušného tlačítka na Androidu / iOS vyber **Nový hovor** a pak **Nová skupina**.
- Na další obrazovce, vyber **členy skupiny** a zadej **Název skupiny**. Také můžeš vybrat  **obrázek skupiny**.
- Jakmile do skupiny pošleš **první zprávu**, všichni členové budou vyrozuměni o nové skupině a mohou do ní také psát (dokud nepošleš první zprávu členové skupiny o ní nebudou vědět).


### Přidat členy skupiny

- Každý člen skupiny má "stejná práva" jako ostatní. Kdokoli může vymazat jakéhokoli člena, a přidat nového člena.
- K přidání a mazání členů, klikněte v hovoru na název skupiny..


### Kdyź se nedopatřením odstraníš.

- Když nejsi členem skupiny nelze se znovu připojit. Nicméně, není to velká potíž - 
požádej běžnou zprávou jiného člena skupiny o znovupřipojení.


### Nechci již přijímat zprávy ze skupiny.

- Buď se odeber ze seznamu členů a nebo vymaž celý skupinový hovor.
  K opětovnému připojení v budoucnu požádej nějakého člena skupiny o znovupřidání.

- Jiná možnost je "Umlčení" skupiny, což znamená nadále přijímat a také posílat zprávy, 
ale nebudeš dostávat upozrnění na nově příchozí zprávy.


### What do the ticks shown beside outgoing messages mean?

- **One tick** means that the message was sent successfully to your provider.
- **Two ticks** mean that at least one recipient's device
  reported back to having received the message.
- Recipients may have disabled read-receipts,
  so even if you see only one tick, the message may have been read.
- The other way round, two ticks do not automatically mean
  that a human has read or understood the message ;)


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

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

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


## Více klientů najednou {#multiclient}

### Lze Delta Chat používat souběžně na více zařízeních?

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

### Je v plánu vytvořit webovou verzi Delta Chatu?

- Zatím ne, pouze nějaké úvodní myšlenky ohledně takového vývoje.
- Jsou 2-3 cesty jak uvést Delta Chatu na Web, ale všechny představují významné úsilí.
  V tuto chvíli jsme zaměřeni na poskytování stabilní verze jako nativní aplikace ve všech 
  významných obchodech (Google Play / iOS / Windows / macOS / Linux repositories) .
- Pokud nemáš dostatečná práva instalovat programy na svůj pracovní počítač, můžeš použít
  přenosnou verzi pro Windows nebo AppImage pro Linux. 
  Všechny softwarové balíčky jsou na [get.delta.chat](https://get.delta.chat).


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


### Co je ověřená skupina? Proč je jen na zkoušku? 

- Ověřená skupina je hovor zaručující jejím členům ochranu proti útočníkům.
Všechny zprávy chrání end-to-end šifrování, a členové se mohou připojit 
ofocením Zvacího QR kódu.. Všichni členové jsou tak propojeni posloupností 
pozvánek, které zaručují důsledné šifrování proti útokům na síti nebo 
od poskytovatele. Více o R&D této funkce je na:
[countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) 

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

Toto je pokusné nastavení pro některé uživatele, kteří používají vlastní pravidla 
pro třídění e-mailu na serveru. Ne všichni poskytovatelé toto nabízí, ale někteří 
umožňují samočinně přesouvat všechny e-maily s hlavičkou "Chat-Version" do složky 
DeltaChat. To je něco co za běžných okolností dělá Delta Chat sám.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- zapnuté pravidlo na serveru, které přesouvá zprávy s hlavičkou Chat-Version do složky DeltaChat, a
- nastaveno "Zobrazuj běžné e-maily" na "Ne, pouze hovory".

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


## Různé

### Pracuje Delta Chat s _mým_ poskytovatelem e-mailu?

- S poměrně vysokou pravděpodobností: Ano :)  
  Nicméně, někteří poskytovatelé vyžadují ke správnému chodu speciální nastavení,
  podrobnější popis je na [Provider Overview](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](2023-01-26-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### Je hovor v Delta Chatu skutečně _interaktivní_, když užívá E-Mail?

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in the background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occasionally. This artificial delay is usually worse on iOS than on Android.
- However, Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### Lze Delta Chat používat s Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is not 
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Mám zájem o technické podrobnosti. Kde najdu víc?

- Dobrý začátek je [Standards used in Delta Chat]({% include standards-url %}).

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

### Jak je financován vývoj Delta Chatu? 

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources:

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate End-to-End Encryption
  through [Autocrypt](https://autocrypt.org).

- The [Open Technology Fund](https://opentechfund.org) gave us a 
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app 
  and released a first Desktop app beta version, and which moreover 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-account support, improved QR-code contact and group setups and many networking improvements on all platforms.

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Beginning 2023 we got accepted in the Next Generation Internet (NGI)
  Entrust program for our "Private Decentralized Apps" proposals. 
  Exact amount is to be determined (around 100K EUR). 
  This funding supports further developments of [webxdc "apps shared in a chat"](https://webxdc.org). 

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

  [Donate Money](donate){: .cta-button}

- Velice významnou pomocí je práce expertů a nadšenců prováděná bez nároku 
  na honorář či za minimální odměnu ve prospěch veřejného dobra. Je třeba 
  zdůraznit, že bez nich by se Delta Chat nepřibližoval ani zdaleka současnému 
  stavu. 

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Please see [Delta Chat Contribution channels](https://delta.chat/en/contribute) 
for both monetary and and other contribution possibilities.  
