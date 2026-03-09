---
title: Preguntes freqüents
lang: ca
render_toc: true
header: Preguntes freqüents
---


## Què és Delta Chat?

Delta Chat és una aplicació de missatgeria instantània fiable, descentralitzada i segura,
disponible per a plataformes mòbils i d'escriptori.

- Creació instantània de **perfils de xat privats**
  amb [chatmail relays](https://chatmail.at/relays) segurs i interoperables
  que ofereix lliurament de missatges instantànis i Notificacions Push per dispositius iOS i Android.

- Suport omnipresent [multi-perfil](#multiple-accounts) i
[multi-dispositiu](#multiclient) en totes les plataformes
i entre les diferents [aplicacions de chatmail](https://chatmail.at/clients).

- [Apps de xat](#webxdc) interactives per a jocs i col·laboració

- [Encriptació d'extrem a extrem auditada](#security-audits)  protegit contra atacs de xarxa i de servidor.

- Programari lliure i de codi obert, tant pel que fa a l'app com al servidor,
 construït sobre [estàndards d'Internet]({% include standards-url %}).


### Com puc trobar a les persones amb qui xatejar? {#howtoe2ee}

En primer lloc, tingues en compte que Delta Chat és missatgeria privada.
No hi ha descobriment públic: _tu_ decideixes sobre els teus contactes.

- Si estàs **cara a cara** amb la persona,
  toca la icona del **codi QR** <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" />
  a la pantalla principal.  
  Demana que **escanegi** la imatge QR
  des de la seva app de Delta Chat.

- Per configurar el contacte **a distancia**,
des de la mateixa pantalla,
fes clic a "Copiar" o "Compartir" i envia **l'enllaç d'invitació**
a través d'un altre xat privat.

Ara espera que la connexió s'estableixi.

- Si tots dos esteu en línia, aviat veureu un xat
i podreu començar a xatejar de manera segura.

Si un dels dos no està connectat o la connexió és dolenta,
la possibilitat de xatejar es posposa fins que es restableixi la connectivitat.

Enhorabona! A partir d'ara, amb aquest contacte utilitzareu automàticament el [xifrat d'extrem a extrem](#e2ee). Si us afegiu mútuament a [grups](#groups), s'establirà el xifratge punt a punt entre tots els membres.


### Perquè un xat és marcat com a "Sol·licitud"?

Al ser missatgeria privada,
només les amistats i familia que [comparteixis el teu codi QR o l'enllaç d'invitació](#howtoe2ee) poden escriure't.

Les teves amistats poden compartir el teu contacte amb altres amistats,
això es mostra com a <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Sol·licitud</b>

- Cal que **acceptis** la sol·licitud abans de poder respondre.

- També pots **esborrar-ho** si no vols parlar-hi per ara.

- Si esborres una sol·licitud, els missatges futurs d'aquest contacte seguiran apareixen
 com una sol·licitud de missatge, perquè puguis canviar d'idea. Si realment no vols
rebre missatges d'aquesta persona, pots **bloquejar-la**.


### Com puc posar en contacte a dues de les meves amistats?

Adjunta el primer contacte en el xat del segon utilitzant el <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Botó Adjunt → Contacte**.
També pots afegir un petit missatge introductori.

El segon contacte llavors rebrà una **tarjeta**
i hi podrà premer per iniciar una conversa amb el primer contacte.


### Què són els perfils? Com puc canviar entre ells?{#multiple-accounts}

Un perfil és **un nom, una imatge** i informació adicional per xifrar missatges.
Un perfil només existeix en els teu dispositiu(s) 
i utilitza el servidor per enviar missatges.

Durant la instal·lació de Delta Chat es crea un primer perfil.

Després, pots premer a la teva imatge de perfil, a la part superior esquerra, per **Afegir perfils** o **Canviar de perfil**.

Potser vols utilitzar perfils separats per a activitats polítiques, familiars o laborals.

Potser també vols aprendre [com utilitzar el mateix perfil en múltiples dispositius](#multiclient).


### Qui veu la meva imatge de perfil?

Pots afegir una foto de perfil a la teva configuració. Si escrius als teus contactes o els afegeixes mitjançant un codi QR, la veuran automàticament com la teva foto de perfil.

Per motius de privacitat, ningú no veu la teva foto de perfil fins que no els envies un missatge.


Puc establir una biografia/estat amb Delta Chat? {#signature}

Sí, ho pots fer a **Configuració → Perfil → Biografia**. Un cop has enviat un missatge a un contacte, aquest el veurà quan consulti les teves dades de contacte.


### Què signifiquen Fixar, Silencia i Arxivar?

Use these tools to organize your chats and keep everything in its place:

- **Pinned chats** always stay atop of the chat list. You can use them to access your most loved chats quickly or temporarily to not forget about things.

- **Mute chats** if you do not want to get notifications for them. Muted chats stay in place and you can also pin a muted chat.

- **Archive chats** if you do not want to see them in your chat list any longer.
  They remain accessible above the chat list or via search
  and are marked by <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Archived</b>

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To use the functions, long tap or right click a chat in the chat list.


### Com funcionen els "Missatges Desats" {#save}

**Saved Messages** is a chat that you can use to easily remember and find messages.

- In any chat, long tap or right click a message and select **Save**

- Saved messages are marked by the symbol
  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
  next to the timestamp

- Later, open the "Saved Messages" chat - and you will see the saved messages there.
  By tapping <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
  you can go back to the original message in the original chat

- Finally, you can also use "Saved Messages" to take **personal notes** - open the chat, type something, add a photo or a voice message etc.

- As "Saved Message" are synced, they can become very handy for transferring data between devices

Messages stay saved even if they are edited or deleted -
may it be by [sender](#edit), by [device cleanup](#delold) or by [disappearing messages of other chats](#ephemeralmsgs).


### Què significa el punt verd?

You can sometimes see a **green dot** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/>
next to the avatar of a contact.
It means they were **recently seen by you** in the last 10 minutes,
e.g. because they messaged you or sent a read receipt.

So this is not a real time online status
and others will as well not always see that you are "online".


### What do the ticks shown beside outgoing messages mean?

- **One tick** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/>
  means that the message was sent successfully to the [relay](#relays).

- **Two ticks**  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/>
  indicate your contact has read the message.

In [groups](#groups) the second tick means that at least one member has reported back having read the message.

You will only get the second tick if both you and one of the recipients who read the message
has **Settings → Chats → Read Receipts** enabled.


### Correct typos and delete messages after sending {#edit}

- You can edit the text of your messages after sending.
  For that, long tap or right click the message and select **Edit**
  or <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>.

- If you have sent a message accidentally,
  from the same menu, select **Delete** and then **Delete for Everyone**.

While edited messages will have the word "Edited" next to the timestamp,
deleted messages will be removed without a marker in the chat.
Notifications are not sent and there is no time limit.

Note, that the original message may still be received by chat members
who could have already replied, forwarded, saved, screenshotted or otherwise copied the message.


### How is media quality handled? {#mediaquality}

Es poden enviar imatges, vídeos, fitxers, missatges de veu, etc. utilitzant els botons d'<img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Adjunt-**
o <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Missatge de veu**.

- By default, compression ensures **fast, efficient delivery** that respects everyone's data limits and storage.
  This is ideal for everyday communication.

- In regions with worse connectivity,
  you can choose higher compression at **Settings → Chats → Outgoing Media Quality**.

- If you specifically need to send media in its **original quality**, use <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attach → File** in the chat.
  Please use this method sparingly, as sending original files will significantly increase data usage for you and all recipients in the chat.


### Com funcionen els missatges que desapareixen? {#ephemeralmsgs}

You can turn on "disappearing messages"
in the settings of a chat,
at the top right of the chat window,
by selecting a time span
between 5 minutes and 1 year.

Until the setting is turned off again,
each chat member's Delta Chat app takes care
of deleting the messages
after the selected time span.
The time span begins
when the receiver first sees the message in Delta Chat.
The messages are deleted both,
on the servers,
and in the apps itself.

Note that you can rely on disappearing messages
only as long as you trust your chat partners;
malicious chat partners can take photos,
or otherwise save, copy or forward messages before deletion.

Apart from that,
if one chat partner uninstalls Delta Chat,
the (anyway encrypted) messages may take longer to get deleted from their server.


### What happens if I turn on "Delete Messages from Device"? {#delold}

If you want to save storage on your device, you can choose to delete old
messages automatically.

To turn it on, go to **Settings → Chats → Delete Message from Device**.
You can set a timeframe between "after an hour" and "after a year";
this way, *all* messages will be deleted from your device as soon as they are
older than that.


### How can I delete my chat profile? {#remove-account} 

If you are using more than one chat profile,
you can remove single ones in the top profile switcher menu (on Android and iOS),
or in the sidebar with a right click (in the Desktop app).
Chat profiles are only removed on the device where deletion was triggered. 
Chat profiles on other devices will continue to fully function. 

If you use a single default chat profile you can simply uninstall the app.
This will still automatically trigger deletion of all associated address data on the chatmail server.
For more info, please refer to [nine.testrun.org address-deletion](https://nine.testrun.org/info.html#account-deletion) 
or the respective page from your chosen [3rd party chatmail server](https://chatmail.at/relays).


## Grups {#groups}

Groups let several people chat together privately with **equal rights**.

Anyone can
change the group name or avatar,
[add or remove members](#addmembers),
set [disappearing messages](#ephemeralmsgs),
and [delete their own messages](#edit) from all member's devices.

Because all members have the same rights, groups work best among **trusted friends and family**.


### Creació d'un grup

- Select **New chat** and then **New group** from the menu in the upper right corner or hit the corresponding button on Android/iOS.

- On the following screen, select the **group members** and define a **group name**. You can also select a **group avatar**.

- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).


### Afegeix i elimina membres {#addmembers}

All group members have the **same rights**.
For this reason, everyone can delete any member or add new ones.

- To **add or delete members**, tap the group name in the chat and select the member to add or remove.

- If the member is not yet in your contact list, but **face to face** with you,
  from the same screen, show a **QR code**.  
  Ask your chat partner to **scan** the QR image with their Delta Chat app by tapping
  <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> on the main screen.

- For a **remote** member addition,
  click "Copy" or "Share" and send the **invite link**
  through another private chat to the new member.

QR code and invite link can be used to add several members.
However, since groups are [meant for trusted people](#groups), avoid sharing them publicly.


### M'he esborrat a mi mateix per accident

As you're no longer a group member, you cannot add yourself again. 
However, no problem, just ask any other group member in a normal chat to re-add you.


### I do not want to receive the messages of a group any longer.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group again later on, ask another group member to add you again.

As an alternative, you can also "Mute" a group - doing so means you get all messages and 
can still write, but are no longer notified of any new messages.

### Clonar un grup

You can duplicate a group to start a separate discussion
or to exclude members without them noticing.

- Open the group profile and tap **Clone Chat** (Android/iOS),
  or right-click the group in the chat list (Desktop).

- Set a new name, choose an avatar, and adjust the member list if needed.

The new group is **fully independent** from the original,
which continues to work as before.


### How many members can participate in a single group?

There is no strict technical limit,
but more than 150 is not recommended.

As groups get larger, they can become socially unstable and may need a hierarchy -
where Delta Chat is a private messenger for chatting with [equal rights](#groups).
See [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number) for more insights.


## Apps de xat {#webxdc}

You can send apps to a chat - games, editors, polls and other tools.
This makes Delta Chat a truly extensible messenger.


### On puc trobar les apps de xat?

- In a chat, using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Apps**

- You can also [create your own app](#create-xdc) and attach it using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → File**


### Quin nivell de privacitat tenen les aplicacions de xat?

- Les apps de xat no poden enviar dades a Internet o descarregar res.

- Una app de xat només pot intercanviar dades dins d'un xat i amb les
còpies als dispositius dels teus companys de xat. Més enllà d'això,
està completament aillada d'Internet.

- La privacitat d'una app de xat és la privacitat del teu xat, 
si confies amb la gent amb qui xateges, pots confiar amb la app de xat.

- This also means: Just like for web links, do not open apps from untrusted contacts.


### Com puc crear la meva app de xat? {#create-xdc}

- Les apps de xat són fitxers zip amb extensió `.xdc` que contenen codi html, css, i javascript.

- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.

- All else you need to know is written in the
  [Webxdc documentation](https://webxdc.org/docs).

- If you have question, you can ask others with experience
  in the [Delta Chat Forum](https://support.delta.chat/c/webxdc/20).


## Lliurament de missatges instantanis i Notificacions Push {#instant-delivery}

### What are Push Notifications? How can I get instant message delivery?

Push Notifications are sent by Apple and Google "Push services" to a user's device
so that an inactive Delta Chat app can fetch messages in the background
and show notifications on a user's phone if needed.

Les Notificacions Push funcionen amb tots els servidors de [chatmail](https://delta.chat/chatmail) activats

- iOS devices, by integrating with Apple Push services.

- Android devices, by integrating with the Google FCM Push service,
  including on devices that use [microG](https://microg.org)
  instead of proprietary Google code on the phone.


### Are Push Notifications enabled on iOS devices? Is there an alternative?

Yes, Delta Chat automatically uses Push Notifications for [chatmail](https://delta.chat/chatmail) profiles.
And no, there is no alternative on Apple's phones to achieve instant message delivery
because Apple devices do not allow Delta Chat to fetch data in the background.
Push notifications are automatically activated for iOS users because
[Delta Chat's privacy-preserving Push Notification system](#privacy-notifications)
does not expose data to Apple that it doesn't already have.


### Are Push notifications enabled / needed on Android devices? {#android-push}

If a "Push Service" is available, Delta Chat enables Push Notifications
to achieve instant message delivery for all chatmail users.

In the Delta Chat "Notifications" settings for "Instant delivery"
you can change the following settings effecting all chat profiles:

- Use Background Connection: If you are not using a Push service,
  you may disable "battery optimizations" for Delta Chat,
  allowing it to fetch messages in the background.
  However, there could be delays from minutes to hours.
  Some Android vendors even restrict apps completely
  (see [dontkillmyapp.com](https://dontkillmyapp.com))
  and Delta Chat might not show  incoming messages
  until you manually open the app again.
  
- Force Background Connection: This is the fallback option
  if the previous options are not available or do not achieve "instant delivery".
  Enabling it causes a permanent notification on your phone
  which may sometimes be "minified" with recent Android phones.

Both "Background Connection" options are energy-efficient and
safe to try if you experience messages arrive only with long delays.


### How private are Delta Chat Push Notifications? {#privacy-notifications}

Delta Chat Push Notification support avoids leakage of private information.
It does not leak profile data, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Here is how Delta Chat apps perform Push Notification delivery:

- A Delta Chat app obtains a "device token" locally, encrypts it and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives a message for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or profile data of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the profile data of the device it wakes up.
  The central Apple/Google Push services never see any profile data (sender or receiver)
  and also never see any message content (also not in encrypted forms).


The central Delta Chat notification proxy [is small and fully implemented in Rust](https://github.com/deltachat/notifiers)
and forgets about device-tokens as soon as Apple/Google/etc processed them,
usually in a matter of milliseconds.

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees profile data, IP-addresses or
any cryptographic identity information associated with a user's device (token). 

Resulting from this overall privacy design, even the seizure of a chatmail server,
or the full seizure of the central Delta Chat notification proxy
would not reveal private information that Push services do not already have.


### Why does Delta Chat integrate with centralized proprietary Apple/Google push services?

Delta Chat is a free and open source decentralized messenger with free server choice,
but we want users to reliably experience "instant delivery" of messages,
like they experience from WhatsApp, Signal or Telegram apps,
without asking questions up-front that are more suited to expert users or developers.

Note that Delta Chat has a [small and privacy-preserving Push Notification system](#privacy-notifications)
that achieves "instant delivery" of messages for all chatmail servers
including a potential one [you might setup yourself without our permission](https://delta.chat/chatmail#selfhosted).
Welcome to the power of the interoperable chatmail relay network :)



## Multi-client {#multiclient}

### Can I use Delta Chat on multiple devices at the same time?

Sí. You can use the same profile on different devices:

- Make sure both devices are on the same Wi-Fi or network

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- En el segon dispositiu, [instal·lar Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- Transfer should start after a few seconds and during transfer both devices will show the **progress**.
  Wait until it is finished on both devices.

In contrast to many other messengers, after successful transfer,
both **devices are completely independent.**
One device is not needed for the other to work.


### Resolució de problemes

- Double-check both devices are in the **same Wi-Fi or network**

- On **Windows**, go to "Control Panel / Network and Internet"
  and make sure, **Private Network** is selected as "Network profile type"
  (after transfer, you can change back to the original value)

- On **iOS**, make sure "System Settings / Apps / Delta Chat / **Local Network**" access is granted

- On **macOS**, enable "System Settings / Privacy & Security / **Local Network** / Delta Chat"

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- **Guest Networks** may not allow devices to communicate with each other.
  If possible, use a non-guest network.

- If you still have troubles using the same network,
  try to open **Mobile Hotspot** on one device and join that Wi-Fi from the other one

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple profiles per device, just [add another profile](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Transferència Manual {#backup}

This method is only recommended if "Add Second Device" as described above does not work.

- On the old device, go to **Settings → Chats → Export Backup**. Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.

- On the new device, select **I Already Have a Profile → Restore from Backup**.
  If you use iOS and encounter difficulties,
  [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) might help you.

Ja esteu sincronitzats i podeu utilitzar els dos dispositius per enviar i rebre missatges xifrats d'extrem a extrem amb els vostres contactes.


### Are there any plans for introducing a Delta Chat Web Client?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  app stores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


## Avançat

### Funcionalitats experimentals {#experiments}

At **Settings → Advanced → Experimental Features**
you can try out features we are working on.

The features may be **unstable** and may be **changed or removed**.

You can find more information
and give feedback in the [Forum](https://support.delta.chat).


### Què són els relés? {#relays}

Relays are used to temporarily hold messages in case your device is offline.
Relays are cheap and dumb servers,
that do not store data as group states, your name or avatar -
all that exist only on your device.
Relays are operated by different groups and people.

By default, after installation, a relay is **automatically set up**,
so you do not need to care about that.
However, if you want to,
you can configure relays at At **Settings → Advanced → Relays**:

- You can **add** a relay by scanning its QR code;
  <https://chatmail.at/relays> shows some known ones.
  If you have multiple relays, you will receive messages on all of them.

- The **default** defines the one where your chat partners send future messages to.

- If you **remove** a relay,
  make sure another default relay was used for a sufficient amount of time.
  Otherwise, messages from your chat partners won't reach you.
  If in doubt, remove later.

For more details and future possibilities of relays,
you can follow discussions in the [Forum](https://support.delta.chat).


### Can I use a classic email address with Delta Chat?

Yes, but only if the email address is used exclusively by [chatmail clients](https://chatmail.at/clients).

It is not supported to share usage of an email address with non-chatmail apps or web-based mailers,
for the following reasons:

Les aplicacions que no són de chatmail, en general, no aconsegueixen oferir xifratge automàtic d'extrem a extrem per correu electrònic als seus usuaris, mentre que les aplicacions i els relés de chatmail apliquen de manera omnipresent el xifrat d'extrem a extrem i els estàndards de seguretat.

- Non-chatmail apps use email servers as a long-term message archive
  while chatmail clients use email servers for ephemeral instant message relay.

- Supporting the full variety of classic email setups
  would require considerable development and maintenance efforts,
  and complicate making chatmail-based messaging more resilient, reliable and fast.

### How can I configure a chat profile with a classic email address as relay? {#classic-email}

First off, **please do not use the same classic email address also from non-chatmail classic email apps**
unless you are prepared to deal with encrypted messages in the inbox,
double notifications, accidentally deleted emails or similar annoyances.

You can configure a email address for chatting at **New Profile → Use Other Server → Use Classic Mail as Relay**.
Note that classic email providers will generally not support [Push Notifications](#instant-delivery)
and have other limitations, see [Provider Overview](https://providers.delta.chat).
Chatmail uses the default INBOX for relay; ensure the provider setup does too. 
A chat profile using a classic email address allows to to send and receive unencrypted messages.
These messages, and the chats they appear in, are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### I want to manage my own server for Delta Chat. What do you recommend?

Any well behaving email server setup will do fine 
except if your users' devices require Google/Apple [Push Notifications](#instant-delivery) to work properly.

We generally recommend to [set up a chatmail relay](https://chatmail.at/doc/relay/getting_started.html). 
[Chatmail](https://chatmail.at) is a community-driven project that encompasses both the setup of relays
and [core Rust developments](https://github.com/chatmail/core) 
that power [chatmail clients](https://chatmail.at/clients) of which Delta Chat is the most well known. 


### What is "Send statistics to Delta Chat's developers"? {#statssending}

We would like to improve Delta Chat with your help,
which is why Delta Chat for Android asks whether you want
to send anonymous usage statistics.

You can turn it on and off at
**Settings → Advanced → Send statistics to Delta Chat's developers**.

When you turn it on,
weekly statistics will be automatically sent to a bot.

Ens interessen, per exemple, estadístiques com ara:

- How many contacts are introduced by personally scanning a QR code?

- Which versions of Delta Chat are being used?

- Quins errors es produeixen pels usuaris?

We will _not_ collect any personally identifiable information about you.


### I'm interested in the technical details. Can you tell me more?

See [Standards used in Delta Chat]({% include standards-url %}).



## Encriptació i Seguretat {#e2ee}

### Quins estàndards s'utlitzen per una xifrat d'extrem a extrem?

Delta Chat utilitza un [subconjunt segur de l'estandard OpenPGP](#openpgp-secure) Oferint xifrat d'extrem a extrem automàtic utilitzant aquests protocols:

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  to exchange encryption setup information through QR-code scanning or "invite links". 

- S'utilitza [Autocrypt](https://autocrypt.org) per establir automaticament xifrat d'extrem a extrem entre contactes i tots els membres d'un grup de xat.

- [Autocrypt v2](https://autocrypt2.org), scheduled for full implementation in 2026, 
  will bring post-quantum resistant encryption and forward secrecy. 

- [Compartir un contacte en un xat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message) permet a qui ho rep, utilitzar xifrat d'extrem a extrem amb el contacte.

Delta Chat does not query, publish or interact with any OpenPGP key servers. 

### Com puc saber si els missatges són xifrats d'extrem a extrem? {#whene2e}

Tots els missatges a Delta Chat són **xifrats d'extrem a extrem per defecte**. Desde el llançament de la versió 2 de Delta Chat (Juliol 2025) ja no hi haurà més candaus o marques semblants als missatges xifrats d'extrem a extrem.

### Encara es pot rebre missatges sense xifrat d'extrem a extrem?

Si utilitzes el [relé de chatmail](https://chatmail.at/relays) per defecte, no és possible de rebre o enviar missatges sense xifrat d'extrem a extrem.

Si enlloc d'això utilitzes un [servidor de correu clàssic](#classic-email), podràs enviar i rebre missatges amb o sense xifrat d'extrem a extrem. Els missatges que no vagin xifrats d'extrem a extrem es marcaran amb la icona de correu-e <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### What does the green checkmark in a contact profile mean? {#e2eeguarantee}

A contact profile might show a green checkmark
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
and an "Introduced by" line.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a green-checkmarked contact to a group with only green-checkmarked members 
becomes an introducer. 
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

Per a una discussió més profunda sobre el "xifratge d'extrem a extrem garantit", consulteu els [protocols Secure-Join](https://securejoin.delta.chat/en/latest/new.html) i llegiu específicament sobre els "Grups Verificats", el terme tècnic que designa el que aquí s'anomenen xats amb "marcat de verificació verda" o de "xifratge d'extrem a extrem garantit".

### Els adjunts (imatges, fitxers, audio, etc.) es xifren d'extrem a extrem?

Sí.

Quan parlem d'un "missatge xifrat d'extrem a extrem", sempre ens referim a un missatge xifrat sencer, incloent-hi  tots els fitxers adjunts i les metadades d'aquests, com ara els noms de fitxer.


### És OpenPGP segur? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
requiring the whole message to be properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publicly discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019 and 2024](#security-audits). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Heu considerat utilitzar alternatives a l'OpenPGP per al xifratge d'extrem a extrem? {#openpgp-alternatives}

Sí, estem seguint iniciatives com [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security), però adoptar-les significaria trencar la interoperabilitat del xifrat d'extrem a extrem. Per tant, no seria una decisió fàcil de prendre i hi hauria d'haver millores tangibles per a les usuaries. 

Delta Chat adopta un enfocament holístic de "seguretat usable" i treballa amb una àmplia gamma de col·lectius activistes, així com amb investigadors de renom com [TeamUSEC](https://teamusec.de), per millorar els resultats reals dels usuaris davant de les amenaces de seguretat. El protocol i estàndard de xifrat d'extrem a extrem és només una part dels "resultats per a l'usuari", vegeu les respostes a les preguntes sobre [confiscació del dispositiu](#device-seizure) i [metadades dels missatge](#message-metadata). 


### És Delta Chat vulnerable a EFAIL?

No, [Delta Chat never was vulnerable to EFAIL](https://delta.chat/en/2018-05-15-delta-chat-not-vulnerable-to-efail)
because its OpenPGP implementation [rPGP](https://github.com/rpgp/rpgp) 
uses Modification Detection Code when encrypting messages
and returns [an error](https://docs.rs/pgp/latest/pgp/errors/enum.Error.html#variant.MdcError)
if the Modification Detection Code is incorrect.

Delta Chat also never was vulnerable to the "Direct Exfiltration" EFAIL attack
because it only decrypts `multipart/encrypted` messages
which contain exactly one encrypted and signed part,
as defined by the Autocrypt Level 1 specification. 


### Are messages marked with the mail icon exposed on the Internet? {#tls}

Si envieu o rebeu missatges de correu electrònic sense xifratge de punta a punta (fent servir un servidor de correu electrònic clàssic), encara estan protegits de les companyies de telefonia mòbil o per cable, que no poden llegir ni modificar els vostres missatges de correu electrònic. Però tant el vostre proveïdor de correu electrònic com el del destinatari poden llegir, analitzar o modificar els vostres missatges, inclosos els fitxers adjunts. 

Delta Chat utilitza per defecte un [xifrat TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) estricte, que protegeix les connexions entre el teu dispositiu i el teu proveïdor de correu electrònic. Tota la gestió de TLS de Delta Chat ha estat objecte d'una [auditoria de seguretat](#security-audits) independent. A més a més, la connexió entre el vostre proveïdor de correu electrònic i el del destinatari també sol xifrar les comunicacions. Si els servidors de correu electrònic implicats admeten [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461), aleshores es xifraran les comunicacions entre els proveïdors de correu electrònic, i en aquest cas les comunicacions de Delta Chat mai no estaran exposades en text pla a Internet, fins i tot si el missatge no estava xifrat d'extrem a extrem.


### How does Delta Chat protect metadata in messages? {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

Per tant, els servidors només poden veure:

- Sender and receiver addresses, randomly generated by default
- Message size

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random addresses for transport. 
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then chat contacts using short-lived profiles
can not be identified easily. 


### Qui veu la meva Adreça IP?

The used [relay](#relays) needs to know your IP Address,
as well as sometimes your contact's devices if you have a [call](#experiments)
or use [apps](#webxdc) together.

IP Addresses are needed for connectivity and efficiency.
They are neither persisted nor exposed.
Note that the IP Address
is not like a detailed address you give to a delivery service,
but much more coarse, often defining region or country only.

As this is just how the internet and other messengers work by default,
we do not offer options here or ask upfront questions.

If you see your IP Address as a security or privacy risk,
we recommend to use a VPN, in combination with system lockdown mode.
Hunting down options in all apps on your system will leave gaps.
For example, tapping a link exposes IP Addresses to unknown parties and is the by far larger risk here.


### Delta Chat admet "Remitent Segellat""? {#sealedsender}

No, encara no.

The Signal messenger introduced ["Sealed Sender" in 2018](https://signal.org/blog/sealed-sender/)
to keep their server infrastructure ignorant of who is sending a message to a set of recipients. 
It is particularly important because the Signal server knows the mobile number of each account,
which is usually associated with a passport identity.

Even if [chatmail relays](https://chatmail.at/relays) 
do not ask for any private data (including no phone numbers), 
it might still be worthwhile to protect relational metadata between addresses. 
We don't foresee bigger problems in using random throw-away addresses for sealed sending
but an implementation has not been agreed as a priority yet. 

### Does Delta Chat support Perfect Forward Secrecy? {#pfs}

Not yet, but it's coming with [Autocrypt v2](https://autocrypt2.org). 

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

[Autocrypt v2](https://autocrypt2.org), scheduled for full implementation in 2026,
will provide reliable deletion (forward secrecy) through automatic key rotation.
This approach is specified in the [Autocrypt v2 OpenPGP Certificates](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/) draft. 

### Delta Chat implementa Criptografia Post-Quàntica? {#pqc}

Not yet, but it's coming with [Autocrypt v2](https://autocrypt2.org).

[Autocrypt v2](https://autocrypt2.org), scheduled for full implementation in 2026,
will bring post-quantum resistant encryption to protect against quantum computer attacks.
Delta Chat uses the Rust OpenPGP library [rPGP](https://github.com/rpgp/rpgp)
which supports the latest [IETF Post-Quantum-Cryptography OpenPGP draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/).
The implementation is specified in the [Autocrypt v2 OpenPGP Certificates](https://datatracker.ietf.org/doc/draft-autocrypt-openpgp-v2-cert/) draft. 

### Com puc comprobar manualment la informació d'encriptació?

You may check the end-to-end encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop).
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.

### Can I reuse my existing private key? {#importkey}

No.

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1.
We do not recommend or offer users to perform manual key management.
We want to ensure that security audits can focus on a few proven cryptographic algorithms
instead of the full breadth of possible algorithms allowed with OpenPGP.
If you want to extract your OpenPGP key, there only is an expert method:
you need to look it up in the "keypairs" SQLite table of a profile backup tar-file.


### Was Delta Chat independently audited for security vulnerabilities? {#security-audits}

Yes, multiple times. 
The Delta Chat project continuously undergoes independent security audits and analysis,
from most recent to older: 

- 2024 December, an [NLNET-commissioned Evaluation of
  rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) by [Radically Open Security](https://www.radicallyopensecurity.com/) took place.
  rPGP serves as the end-to-end encryption [OpenPGP](https://openpgp.org) engine of Delta Chat. 
  Two advisories were released related to the findings of this audit:

  - ["Panics on Malformed Untrusted Input"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potential Resource Exhaustion when handling Untrusted Messages"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

  The issues outlined in these advisories have been fixed and are part of Delta Chat 
  releases on all appstores since December 2024. 

- 2024 March, we received a deep security analysis from the Applied Cryptography
  research group at ETH Zuerich and addressed all raised issues. 
  See our blog post about [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) for more detailed information and the
  [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
  research paper published afterwards. 

- 2023 April, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023.
  See [here for the full background story on end-to-end security in the web](https://delta.chat/en/2023-05-22-webxdc-security).

- 2023 March, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

- 2020, [Include Security](https://includesecurity.com) analyzed Delta
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

- 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).


## Miscel·lània

### Quins permissos necessita Delta Chat?

Some features require certain permissions,
e.g. you need to grant camera permission if you want to [scan an invite QR code](#howtoe2ee).

Consulta la [política de privacitat](https://delta.chat/en/gdpr#24-app-permissions) per una visió general detallada.


### On poden trobar Delta Chat els meus amics?

Delta Chat is available for all major and some minor platforms:

- El **lloc web oficial**, <https://delta.chat/download> mostra totes les opcions en detall

- Si no està disponible, utilitza un **mirall** a <https://deltachat.github.io/deltachat-pages>

- Open one of the following **app stores and search for "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, iOS and macOS App Store, Microsoft Store

- Check the **package manager** of your Linux distributions

- Els **APKs d'Android** també estan disponibles a <https://github.com/deltachat/deltachat-android/releases>


### Com es finança el desenvolupament de Delta Chat? 

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources,
ordered chronologically: 

- In 2023 and 2024 we got accepted in the Next Generation Internet (NGI)
  program for our work in [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
  along with collaboration partners working on
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/),
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/),
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) and
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/).
  All of these projects are partially completed or to be completed in early 2025.

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - email provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-profile support, improved QR-code contact and group setups and many networking improvements on all platforms.

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system.

- The [Open Technology Fund](https://opentechfund.org) gave us a
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app
  and released a first Desktop app beta version, and which moreover
  moored our feature developments in UX research in human rights contexts,
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

  [Donatius](donate){: .cta-button}

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Please see [Delta Chat Contribution channels](contribute)
for both monetary and other contribution possibilities.  
