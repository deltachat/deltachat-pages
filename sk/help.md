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


### Ktoré správy sa zobrazujú v Delta Chate?

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


### Podporuje Delta Chat obrázky, videá a iné prílohy?

- Áno. Okrem čistého textu sa všetky prílohy e-mailov zobrazujú ako samostatné správy. Odchádzajúce správy dostávajú prílohy podľa potreby automaticky.

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#can-i-use-delta-chat-on-multiple-devices-at-the-same-time).

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

### Vytvorenie skupiny

- Vyberte **Nový chat** a potom **Nová skupina** z ponuky v pravom hornom rohu alebo stlačte príslušné tlačidlo v systéme Android/iOS.
- Na nasledujúcej obrazovke vyberte **členov skupiny** a definujte **názov skupiny**. Môžete si tiež vybrať **avatara skupiny**.
- Hneď ako napíšete **prvú správu** v skupine, všetci členovia sú informovaní o novej skupine a môžu odpovedať v skupine (pokiaľ nenapíšete správu v skupine, skupina je pre skupinu neviditeľná členovia).


### Pridajte členov do skupiny

- Každý člen skupiny má **rovnaké práva** ako ktorýkoľvek iný. Z tohto dôvodu môže každý vymazať každého člena alebo pridať nového.
 - Ak chcete pridať alebo odstrániť členov, kliknite na názov skupiny v chate. 


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
nahlásilo, že dostali správu.
- Príjemcovia môžu mať zakázané potvrdenia o prečítaní,
takže aj keď vidíte len jedno zaškrtnutie, správa môže byť prečítaná.
- Naopak, dve zaškrtnutia automaticky neznamenajú
že človek správu prečítal alebo jej porozumel ;)


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

- Ak tam **nie je zámok**, správa sa zvyčajne prenáša nešifrovaná napr. pretože vy alebo odosielateľ ste vypli šifrovanie typu end-to-end alebo odosielateľ používa aplikáciu bez podpory šifrovania typu end-to-end. 


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


### Ktoré štandardy sa používajú na šifrovanie typu end-to-end?

- [Autocrypt](https://autocrypt.org) Sa používa na vytvorenie e2e-šifrovanie 
s inými aplikáciami ako Delta Chat a inými mailovými aplikáciami s podporou Autocrypt.
Autocrypt využíva obmedzenú podmnožinu funkcií OpenPGP.

- Delta Chat implementuje [countermitm nastavovacie-kontaktné a overené skupinové protokoly](https://countermitm.readthedocs.io/en/latest/new.html) na dosiahnutie ochrany pred aktívnymi sieťovými útokmi. Toto presahuje rámec príležitostnej 
  základnej ochrane Autocrypt Level 1 pri zachovaní jednoduchosti používania.

### Aký je rozdiel medzi overenými skupinami a rozhovormi 1:1 s overenými kontaktmi?

- 1:1 rozhovory s overeným kontaktom a overenými skupinami nie sú rovnaké, dokonca
  ak sú v overenej skupine iba 2 osoby. Jeden rozdiel je v tom, že ty
  môžeš ľahko pridať viac ľudí do skupiny, ale existujú aj iné rozdiely.

- Overené skupiny sú vždy zabezpečené. Akékoľvek vniknutie (čirý text alebo nesprávne
  podpísané správy atď.) bude označené a takéto správy sa nezobrazia
v tomto chat. Môžete dôverovať všetkým správam v tomto overenom čete so začiarknutím
  neboli prečítané/zmenené strednými stranami.

- 1:1 chaty sú šifrované príležitostne, majú ľuďom umožniť komunikovať 
  nezáleží na tom, či zmenia e-mailových klientov, zariadenia, nastavenia atď. Preto
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
zvyčajne dokážu prečítať všetky správy, bez ohľadu na to, či je Perfect Forward Secrecy
  použitý alebo nie. Mať prístup k jednému zariadeniu od člena skupiny,
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

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

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


## Multiklient {#multiclient}

### Môžem používať Delta Chat na viacerých zariadeniach súčasne?

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

### Máte nejaké plány na zavedenie webového klienta Delta Chat?

Neexistujú žiadne okamžité plány, ale niekoľko predbežných myšlienok.
- Existujú 2-3 spôsoby zavedenia webového klienta Delta Chat, ale všetky vyžadujú
významnú prácu. Zatiaľ sa zameriavame na to, aby sme dostali stabilné vydania do všetkých
obchodov s aplikáciami (repozitáre Google Play/iOS/Windows/macOS/Linux) ako natívne aplikácie.
- Ak potrebujete webového klienta, pretože nemáte povolené inštalovať softvér
na počítač, s ktorým pracujete, môžete použiť prenosného klienta Windows Desktop Client,
  alebo AppImage pre Linux. Nájdete ich na
[get.delta.chat](https://get.delta.chat).


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
Delta Chat Desktop dostupný na všetkých platformách.

### Prečo sa môžem rozhodnúť nesledovať priečinok DeltaChat?

Niektorí ľudia používajú Delta Chat ako bežný e-mailový klient a chcú používať priečinok Doručená pošta
pre ich mail, namiesto priečinku DeltaChat. Ak zakážete „Sledovať
priečinok DeltaChat“, mali by ste tiež zakázať „presunúť chatové správy do DeltaChat“.
V opačnom prípade nemusí odstraňovanie správ alebo nastavenia viacerých zariadení fungovať správne.


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


### Čo je overená skupina? Prečo je to experimentálne?

- Overená skupina je chat, ktorý zaručuje bezpečnosť pred aktívnym
útočníkom. Všetky správy v overenom zobrazení chatu sú šifrované e2e a
členovia sa môžu pripojiť naskenovaním „QR pozývacieho kódu“. Všetci členovia sú tak
navzájom prepojený reťazou pozvaní, ktoré zaručujú
kryptografická konzistentnosť proti útokom aktívnej siete alebo útokom poskytovateľa.
Viac o R&D tejto funkcie je na: [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)

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

Toto je experimentálne nastavenie pre niektorých ľudí, ktorí experimentujú
pravidlá na strane servera. Nie všetci poskytovatelia to podporujú, no s niektorými môžete pohnúť
všetky e-maily s hlavičkou "Chat-Version" do priečinka DeltaChat. Normálne toto
vykonáva aplikácia Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- povolené pravidlo na strane servera na presun všetkých správ s hlavičkou Chat-Version do priečinka DeltaChat a
- nastaviť "Zobraziť klasické e-maily" na "nie, iba chaty".

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


## Rôzne

### Funguje Delta Chat s mojím poskytovateľom e-mailov?

- S pomerne dobrou šancou: Áno :)
  Niektorí poskytovatelia však potrebujú na správne fungovanie špeciálne možnosti,
  pozrite si [Prehľad poskytovateľa](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](2023-01-26-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### Ak Delta Chat používa e-mail, je to naozaj _Instantný_ Messenger? 

- Odosielanie a prijímanie správ zvyčajne trvá niekoľko sekúnd. Niekedy
   existujú prípady, keď to trvá dlhšie, ale to platí pravdepodobne aj pre
   akýkoľvek iný messenger.
- Okamžité chatovanie funguje rýchlo, ak obe strany aktívne používajú aplikáciu. to je
niekedy pomalšie, ak aplikácia beží na pozadí.
- Prijímanie správ potom môže trvať niekoľko minút, pretože Android aj iOS často
zastavia spustenie Delta Chatu na pozadí a iba príležitostne ho prebudia. Toto umelé oneskorenie je zvyčajne horšie na iOS ako na Androide.
- Avšak, Android a iOS killne aplikácie bežiace na pozadí
je to
  problém mnohých legitímnych aplikácií. Ďalšie informácie nájdete v časti
[dontkillmyapp.com](https://dontkillmyapp.com/).


### Je Delta Chat kompatibilný s Protonmail / Tutanota / Criptext?

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


### Zaujímajú ma technické detaily. Môžete mi povedať viac?

- Pozrite si [Štandardy používané v Delta Chate]({% include standards-url %}). 

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

### Ako sa financuje vývoj Delta Chat?

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

- V neposlednom rade k vývoju Delta Chat prispelo a prispieva viacero pro-bono odborníkov a nadšencov
   bez toho, aby dostávali peniaze alebo dostávali iba
   malé množstvá. Bez nich by Delta Chat nebol tam, kde je dnes
   ani zďaleka.

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Please see [Delta Chat Contribution channels](https://delta.chat/en/contribute) 
for both monetary and and other contribution possibilities.  
