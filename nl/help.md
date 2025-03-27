---
title: Vraag en antwoord
lang: nl
render_toc: true
header: Veelgestelde vragen
---


## Wat is Delta Chat?

Delta Chat is a reliable, decentralized and secure messaging app, 
available for mobile and desktop platforms.

Delta Chat feels like Whatsapp or Telegram but you can also use and regard it as an e-mail app. 
You can signup anonymously to a variety of [interoperable chatmail servers](https://delta.chat/chatmail)
which are minimal e-mail servers optimized for fast and secure operations. 
Or you may use classic e-mail servers and an existing e-mail account
in which case Delta Chat acts as an e-mail app. 

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Hoe kan ik gesprekspartners vinden?

To securely setup contact with others [scan an invite QR code 
or share an invite link](#howtoe2ee). 
This is required when using a (default) chatmail-based chat profile 
because chatmail servers reject un-encrypted outgoing messages.

If you create a chat profile with a classic e-mail address 
you may manually create a contact if you know their e-mail address
and then write a message to them 
even if the recipient is not using Delta Chat.


### Wat zijn de voordelen van Delta Chat t.o.v. andere gespreksapps?

- Anonymous chat profiles with fast, secure and interoperable [chatmail servers](https://delta.chat/chatmail)
  which offer instant Push Notifications for iOS and Android devices. 

- Pervasive [multi-profile](#multiple-accounts) and multi-device support on all platforms. 

- Interactive [web apps in chats](https://webxdc.org/apps) for gaming and collaboration

- [Audited end-to-end encryption](#security-audits) 
  safe against network and server attacks. 

- Free and Open Source software, both app and server side. 
  Built on [E-mail and Web Internet Standards](https://github.com/deltachat/deltachat-core-rust/blob/master/standards.md), 
  [to avoid "yet another standard syndrome (xkcd 927)"](https://xkcd.com/927/) 


### Wat nu als ik een bericht verwacht van iemand die ik nog niet heb aangeschreven?

Als een bericht afkomstig is van een onbekende contactpersoon, dan wordt er een **verzoek** getoond.

- **Accepteer** het verzoek om te kunnen antwoorden.

- Ook kun je het verzoek **verwijderen** als je op dat moment geen gesprek met ze wilt voeren.

- Als je een verzoek verwijderd, dan worden toekomstige berichten nog steeds als verzoek getoond,
zodat je te allen tijde kunt bepalen of je het alsnog wilt accepteren. Als je écht geen contact wilt leggen, overweeg dan
om de persoon in kwestie te **blokkeren**.


### Ondersteunt Delta Chat afbeeldingen, video's en ander soort bijlagen?

- Ja. Plattetekstberichten en e-mailbijlagen worden apart getoond. Uitgaande berichten worden, indien nodig, automatisch voorzien van bijlagen.

- Om de prestaties te verhogen, worden afbeeldingen standaard geoptimaliseerd en verkleind verstuurd, maar je kunt ze als een bestand verzenden om het origineel te sturen.


### What are profiles? How can I switch between them? {#multiple-accounts}

A profile is **a name, a picture** and some additional information for encrypting messages.
A profile lives on your device(s) only
and uses a chatmail or a classic e-mail server to transport messages.

On first installation of Delta Chat a first profile is created.

Later, you can tap your profile image in the upper left corner to **Add Profiles**
or to **Switch Profiles**.

You may want to use separate profiles for political, family or work related activities,
or e. g. for a dedicated "spam-profile" with which you register at websites and platforms
that tend to cause unsolicited messages ("spam") sooner or later.

You may also wish to learn [how to use the same profile on multiple devices](#multiclient).


### Wie kan mijn profielfoto zien?

- In de instellingen kun je een profielfoto toevoegen. Als je een bericht stuurt aan
  je contactpersonen of ze toevoegt middels hun QR-code, dan krijgen ze je profielfoto te zien.

- Contactpersonen die geen Delta Chat gebruiken kunnen je profielfoto niet zien
  (maar ze kunnen Delta Chat natuurlijk wél gaan gebruiken :) )

- Omwille van je privacy, krijgen anderen je profielfoto pas te zien
  als je ze een bericht stuurt.

- Je profielfoto wordt niet naast elk bericht getoond, maar wel frequent genoeg.
  Je contactpersonen ontvangen hem dan opnieuw, zelfs als ze een nieuw apparaat toevoegen.


### Can I set a Bio/Signature/Status/Motto with Delta Chat? {#signature}

Yes,
you can do so under **Settings → Profile → Bio**.
Your contacts who use Delta Chat will see it
when they view your contact details.
Moreover, it will appear as a classic e-mail signature.


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


### How do "Saved Messages" work? {#save}

**Saved Messages** is a chat that you can use to easily remember and find messages.

- In any chat, long tap or right click a message and select **Save**

- Saved messages are marked by the symbol
  <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
  next to the timestamp

- Later, open the "Saved Messages" chat - and you will see the saved messages there.
  By tapping <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
  you can go back to the original message in the original chat

- Finally, you can also use "Save Messages" to take **personal notes** - open the chat, type something, add a photo or a voice message etc.

- As "Saved Message" are synced, they can become very handy for transferring data between devices

Messages stay saved even if they are edited or deleted -
may it be by [sender](#edit), by [device cleanup](#delold) or by [disappearing messages of other chats](#ephemeralmsgs).


### Wat betekent die groene stip?

Wordt er soms een **groen stipje** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/> naast een profielfoto van een
contactpersoon getoond. Dit betekent dat ze onlangs actief waren,
dat wil zeggen: in de afgelopen 10 minuten. Dit komt omdat ze

- je een bericht hebben gestuurd;
- iets in een van je groepen hebben geplaatst;
- een leesbevestiging hebben verstuurd;
- gegevens naar je Delta Chat-app middels een zogeheten [privé-app](#webxdc) hebben verstuurd.

De online-status is dus **niet** realtime. Geef ze dus even de tijd om te antwoorden :)

Anderen kunnen ook niet altijd zien dat je actief was. Als je
leesbevestigingen hebt uitgeschakeld, dan wordt er geen groen stipje getoond totdat je
iemand benaderd of iets in een groep plaatst..


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


### How do disappearing messages work? {#ephemeralmsgs}

You can turn on "disappearing messages"
in the settings of a chat,
at the top right of the chat window,
by selecting a time span
between 1 minute and 5 weeks.

Until the setting is turned off again,
each chat member's Delta Chat app takes care
of deleting the messages
after the selected time span.
The time span begins
when the receiver first sees the message in Delta Chat.
The messages are deleted
both in each email account on the server,
and in the app itself.

Note that you can rely on disappearing messages
only as long as you trust your chat partners;
malicious chat partners can take photos,
or otherwise save, copy or forward messages before deletion.

Apart from that,
if one chat partner uninstalls Delta Chat,
the messages will not get deleted from their email account.
They will most likely also not be decryptable anymore
(as long as they were encrypted in the first place).


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


## Instant message delivery and Push Notifications {#instant-delivery}


### What are Push Notifications? How can I get instant message delivery?

Push Notifications are sent by Apple and Google "Push services" to a user's device
so that an inactive Delta Chat app can fetch messages in the background
and show notifications on a user's phone if needed.

Push Notifications work with all [chatmail](https://delta.chat/chatmail) servers on

- iOS devices, by integrating with Apple Push services.

- Android devices, by integrating with the Google FCM Push service,
  including on devices that use [microG](https://microg.org)
  instead of proprietary Google code on the phone.

As of May 2024, classic e-mail servers do not support Push Notifications
for Delta Chat users.


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
If you are using a classic e-mail provider instead of [chatmail](https://delta.chat/chatmail) servers,
Push Notifications are not available.

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
It does not leak e-mail, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Here is how Delta Chat apps perform Push Notification delivery:

- A Delta Chat app obtains a "device token" locally, encrypts it and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives an e-mail for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or e-mail address of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the chatmail or e-mail address of the device it wakes up.
  The central Apple/Google Push services never see an e-mail address (sender or receiver)
  and also never see any message content (also not in encrypted forms).


The central Delta Chat notification proxy [is small and fully implemented in Rust](https://github.com/deltachat/notifiers)
and forgets about device-tokens as soon as Apple/Google/etc processed them,
usually in a matter of milliseconds.

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees e-mail addresses, IP-addresses or
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
Welcome to the power of the interoperable and massive chatmail and e-mail system :)


## Beveiliging en versleuteling

### Welke standaarden worden gebruikt bij eind-tot-eindversleuteling?

[Autocrypt](https://autocrypt.org) is used for automatically
establishing end-to-end encryption with contacts and group chats.
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure).
End-to-End encrypted messages are marked with a padlock 
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/lock-icon.png" alt="padlock"/>.

[Secure-Join protocols](https://securejoin.delta.chat/en/latest/new.html)
are used for establishing chats with guaranteed end-to-end encryption 
which protects against network attacks and compromised servers.
Chats marked with a green checkmark 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
guarantee end-to-end encrypted messages. 

### How can i know if messages are end-to-end encrypted? {#whene2e}

All end-to-end encrypted messages carry a padlock:

<img style="width:160px; margin:1px" src="../assets/help/lock-screenshot.png" alt="padlock in bubble"/>

End-to-end encryption is guaranteed if there is a green checkmark next to the chat title:

<img style="width:211px; margin:1px" src="../assets/help/green-checkmark-screenshot.png" alt="green checkmark in title"/>


### How can I get guaranteed end-to-end encryption and green checkmarks? {#howtoe2ee}

If you have a second communication channel with your chat partner,
like a video chat or a different messenger,
you can generate an invite link.

If you are together in person,
you can show a QR code to your chat partner.

- For **Group invitations**,
  tap the chat group title to see its member list,
  and select "QR Invite code".

- For **direct 1:1 chat invitations**,
  tap the QR Code icon <img style="vertical-align:middle; width:1.8em; margin:1px" src="../assets/help/qr-icon.png" />
  on the Delta Chat app main screen.

Let your chat partner scan the QR image
with their Delta Chat app,
or click "Copy" or "Share" to create an invite link
and share it with your chat partner.

Now wait while [Secure-Join network messages are exchanged](https://securejoin.delta.chat/en/latest/new.html#setup-contact-protocol) between both devices.

- If both devices are online,
  both sides will eventually see a (group or direct) chat with a green checkmark
  <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>
  next to the title.

- If one of the devices is offline, the green checkmarks will only
  appear later when the device is internet-connected again
  and the Secure-Join network protocol completed. 

Congratulations! 
You now will automatically use guaranteed end-to-end encryption
with this contact and both of you can add each other to green-checkmarked groups
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark"/>,
thereby automatically spreading guaranteed end-to-end encryption among its members. 


### What does the green checkmark and "guaranteed end-to-end encryption" mean? {#e2eeguarantee}

Chat titles with green checkmarks
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
mean that all messages in the chat will be end-to-end encrypted
and can not be read or altered by compromised e-mail servers or Internet providers. 
Joining green-checkmarked group chats
safely spreads everybody's encryption information (and green checkmarks)
in a manner that guarantees end-to-end encryption in the group and among members. 

Contact profiles with green checkmarks 
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
mean that messaging a contact is currently guaranteed to be end-to-end encrypted.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a contact to a green-checkmarked group becomes an introducer 
to those members who didn't yet know about the added contact.
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

Note that in a contact profile you may see and tap introducers 
but there is no green checkmark in the profile title. 
This usually means that the contact ["sent a message from another device"](#nocryptanymore). 

For more in-depth discussion of "guaranteed end-to-end encryption"
please see [Secure-Join protocols](https://securejoin.delta.chat/en/latest/new.html)
and specifically read about "Verified Groups", the technical term
of what is called here "green-checkmarked" or "guaranteed end-to-end encrypted" chats.


### A contact "sent a message from another device", what can i do? {#nocryptanymore}

Your chat with a contact lost guaranteed end-to-end encryption. 
The green checkmark was removed for this chat and contact when you see this warning. 
**If you find the sudden drop of guaranteed end-to-end encryption 
surprising for this contact then don't accept the warning!**
Instead check with your contact through a second channel 
like a video call, other messenger or a phone call,
to find out what happened. 

If your contact actually caused the drop of guaranteed end-to-end encryption
please see the next paragraphs for common reasons and their mitigations. 
Regardless, all other green-checkmarked chats remain guaranteed end-to-end encrypted
even if the contact is a member there. 

**Your contact is using Delta Chat on a second device (phone or laptop)**

If they have another device with a Delta Chat app running,
they should remove the profile from the new device
and add it [as a second device as described here](#multiclient).
As soon as they message you afterwards, the warning will be gone
and guaranteed encryption is established with both devices of your contact. 

**Your contact reinstalled Delta Chat using their old account login**
 
If they have [a backup file](#backup), 
they should remove the profile from the new device
and rather import the backup file to re-create their profile.
As soon as they message you afterwards, the warning will be gone
and guaranteed encryption is re-established for this contact.

If they don't have a backup file, it's best to perform a [QR scan](#howtoe2ee) 
with your chat partner to re-establish guaranteed end-to-end encryption.

**Your contact sent a mail through a webmail interface or another e-mail app
and will get back to using Delta Chat soon again.**

If you are sure that the contact sometimes uses webmail,
or another mail app lacking end-to-end encryption,
then you may accept the warning.
As soon as your contact uses Delta Chat again, 
guaranteed end-to-end encryption will be automatically re-established. 

**Your contact stopped using Delta Chat entirely**

Sometimes remaining in contact is more important than end-to-end encryption.
["Transport Layer Encryption" (TLS)](#tls) may still meaningfully protect
the confidentiality of your messages between your device and the e-mail server. 
But without end-to-end encryption you and your contact are trusting your e-mail server
to not read or manipulate your messages, and to not hand them to third parties. 

In any case, you can not do much else than accept the warning.
Please also remove the contact from any active green-checkmarked group 
which you can find in "Shared chats" in the Contact profile. 
This spares your contact from getting "unreadable" messages. 

If the contact removed Delta Chat because of buggy or undesirable behaviour, 
please consider posting to our [support forum](https://support.delta.chat) 
to help us identify and address common problems. Thanks!


### Are attachments (pictures, files, audio etc.) end-to-end encrypted?

Yes.

When we talk about an "end-to-end encrypted message"
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
and only displays a padlock security indicator on a message
if the whole message is properly encrypted and signed.
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


### Did you consider using alternatives to OpenPGP for end-to-end -encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking end-to-end encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing end-to-end encryption is
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


### Is a message exposed in cleartext if end-to-end encryption is not available? {#tls}

Even if your messages are not guaranteed to be end-to-end encrypted, 
they are still protected from Internet providers like cell or cable companies. 
However, your and your recipient's e-mail providers 
may read, analyze or even modify your messages, 
including any attachments,
if they are not end-to-end encrypted. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your e-mail provider. 
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's e-mail provider
will typically be transport-encrypted as well.
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between e-mail providers 
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.

Note that [maintaining guaranteed end-to-end encryption](#howtoe2ee) on top of TLS encryption 
provides pervasive safety between your and the recipient's devices.
Not even your e-mail or Internet provider will be able to read or modify your messages. 


### How does Delta Chat protect metadata in messages? {#message-metadata}

Delta Chat protects most message metadata by putting the following information
into the end-to-end encrypted part of messages:

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
we recommend to use a [chatmail server](https://delta.chat/chatmail)
to create pseudonymous temporary profiles through QR-code scans.
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then contacts using temporary profiles
can not be identified easily, as compared to messengers which reveal
phone numbers in chat groups which in turn are often associated with legal identities.


### How can i check encryption information?

You may check the end-to-end encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop).
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.


### How can I check the encryption status of messages?

A little **padlock** in a message bubble denotes
that the message was properly end-to-end encrypted from the given sender.
If there is **no padlock**, the message was not properly end-to-end encrypted
most likely because the sender uses an app or webmail interface
without support for end-to-end--encryption.


### Why do I see unencrypted messages? 

If a contact uses a non-Autocrypt e-mail app,
all messages involving this contact (in a group or 1:1 chat)
will not be end-to-end encrypted, and thus not show a "padlock" with messages.
Note that even if your contacts use Delta Chat on their account,
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages.
Replying unencrypted to unencrypted messages is mandated by Autocrypt
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app.

### How can i get an end-to-end encrypted chat with a Delta Chat contact who sometimes uses webmail or another non-Autocrypt e-mail app? 

If you need a safely end-to-end encrypted chat with a contact 
who is using their e-mail account both with Delta Chat and non-Autocrypt apps (e.g. webmail),
it's best to setup [guaranteed end-to-end encryption with them](#howtoe2ee)
and then create a guaranteed end-to-end encrypted group chat with you two as members. 
In this group chat all messages will be end-to-end encrypted 
even if the direct chat between you two has a
["… sent a message from another device"](#nocryptanymore) warning. 


### How can I ensure message end-to-end encryption and deletion?

The best way to ensure every message is end-to-end encrypted,
and metadata deleted as quickly as possible
is [using chats with guaranteed end-to-end encryption](#howtoe2ee)
and turning on [disappearing messages](#ephemeralmsgs).

Guaranteed end-to-end encrypted chats protect against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)
and turning on disappearing messages deletes the messages
on the server after a user-configured time.

If you don't need a longer-lived copy of your messages on the server, 
you can also turn on ["delete messages from server automatically"](#delold).


### Does Delta Chat support Perfect Forward Secrecy? {#pfs}

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


### Is end-to-end encryption of Delta Chat as safe as Signal? 

It depends on what is important to you. 
Delta Chat [does not support PFS](#pfs) like Signal does
but it provides [guaranteed end-to-end encrypted chats](#e2eeguarantee)
that are safe against compromised servers or corrupted networks. 
Signal and most other PFS-supporting messengers do not provide 
a practical scheme for protecting chat groups from network attacks
which are arguably more worrisome 
than a potential attacker who seizes your phone and private encryption setup
but somehow not your messages, yet has a full record of all 
past encrypted messages. 

In any case, Delta Chat's end-to-end encryption uses a [secure subset of OpenPGP](#openpgp-secure)
which has been [independently security-audited](../assets/blog/2019-first-security-review.pdf).

### Kan ik mijn bestaande privésleutel hergebruiken? {#importkey}

No. 

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1. 
You can export your private key but you can not import additional private keys. 

In general, we do not recommend or offer users to perform manual key management. 
We want to ensure that security audits can focus on a few proven cryptographic algorithms 
instead of the full breadth of possible algorithms allowed with OpenPGP. 

### Heeft Delta Chat ooit onafhankelijke beveiligingscontroles ondergaan? {#security-audits}

Yes, multiple times. 
The Delta Chat project continuously undergoes independent security audits and analysis,
from most recent to older: 

- 2024 December, an [NLNET-commissioned Evaluation of
  rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) by [Radically Open Security](https://www.radicallyopensecurity.com/) took place.
  rPGP serves as the end-to-end encyption [OpenPGP](https://openpgp.org) engine of Delta Chat. 
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

- Sinds begin 2023 hebben we diverse beveiligings- en privacyproblemen met ‘webapps
  gedeeld in een gesprek’. Deze waren allen te wijten aan fouten in de sandboxing,
  vooral die van Chromium. Daarna is er een beveiligings-
  onderzoek van Cure53 geweest en zijn alle problemen opgelost in versie 1.36 van de uit april 2023. 
  Lees [hier het volledige verhaal omtrent E2E-beveiliging op het web](https://delta.chat/en/2023-05-22-webxdc-security). 

- Aan het begin van 2023 heeft [Cure53](https://cure53.de) de transportversleuteling van
  Delta Chats netwerkverbindingen getest, evenals de e-mailserveropzet zoals
  [beschreven op onze site](serverguide).
  Meer informatie over deze test is te lezen [op ons blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  of in het [volledige verslag](../assets/blog/MER-01-report.pdf).

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

- In 2019 heeft [Include Security](https://includesecurity.com) Delta Chats
  [PGP-](https://github.com/rpgp/rpgp) en
  [RSA-](https://github.com/RustCrypto/RSA)bibliotheken geanalyseerd.
  Er werden geen grote problemen aangetroffen,
  maar wel twee belangrijke die nadien werden opgelost.
  Ook werden enkele redelijk belangrijke en minder belangrijke aan het licht gebracht,
  maar die konden in Delta Chats specifieke implementatie niet worden misbruikt.
  Ondanks dat zijn enkele daarvan nadien alsnog opgelost.
  Het [volledige verslag is hier na te lezen](../assets/blog/2019-first-security-review.pdf).



## Multi-client {#multiclient}

### Kan ik Delta Chat op meerdere apparaten tegelijk gebruiken?

Yes. You can use the same profile on different devices:

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

- On **Windows**, go to **Control Panel / Network and Internet**
  and make sure, **Private Network** is selected as "Network profile type"
  (after transfer, you can change back to the original value)

- On **iOS**, make sure "System Settings / Apps / Delta Chat / **Local Network**" access is granted

- On **macOS**, enable "System Settings / Privacy & Security / **Local Network** / Delta Chat"

- Wellicht is een firewall actief op je apparaat,
  welke problemen kan veroorzaken (met name op Windows).
  **Schakel de firewall op beide apparaten uit** of **voeg een uitzondering voor Delta Chat toe** en probeer het opnieuw.

- **Guest Networks** may not allow devices to communicate with each other.
  If possible, use a non-guest network.

- If you still have troubles using the same network,
  try to open **Mobile Hotspot** on one device and join that Wi-Fi from the other one

- Zorg voor **voldoende ruimte** op het bestemmingsapparaat

- Zorg dat beide apparaten tijdens de overdracht **ingeschakeld blijven** en niet op zwart/in de slaapstand gaan.
  Sluit Delta Chat niet af.
  (We proberen om de app zo goed als mogelijk op de achtergrond te laten werken, maar [systemen sluiten apps helaas wel eens eigenhandig af](https://dontkillmyapp.com)).

- Ben je **al ingelogd** op het bestemmingsapparaat?
  Je kunt meerdere accounts per apparaat gebruiken - voeg dus [een tweede account toe](#multiple-accounts).

- Als je nog steeds problemen ervaart of je de **QR-code niet kunt scannen**,
  volg dan onderstaande stappen omtrent handmatige overzetting


### Manual Transfer {#backup}

Deze methode is vooral bedoeld voor situaties waarin ‘Tweede apparaat toevoegen’ niet lukt.

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, in the "I already have a profile" menu,
  choose "restore from backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  end-to-end encrypted messages with your communication partners.

### Is Deletion, Pinning, Archiving, Saving, Muting etc. synced to all devices?

Yes.

If you e.g. delete a chat or a message from your phone,
it will be deleted on your desktop as soon as it comes online again.

Notable exceptions are [Delete old messages from Device](#delold),
as different devices may have different storage capacities,
and system specific settings as notification sounds.


### Bestaan er plannen om een Delta Chat-webclient te maken?

- Er zijn nog geen concrete plannen; alleen wat gedachtenspelingen.
- Er zijn 2 à 3 obstakels, maar alle vereisen zware
  inspanningen. Momenteel ligt voor ons de focus op stabiele uitgaven maken voor appwinkels
  (Google Play/iOS/Windows/macOS/Linux-pakketbronnen).
- Als je een webclient nodig hebt omdat je geen software mag installeren op
  je computer, dan kun je de meeneembare (portable) versie gebruiken van de Windows-client,
  of de AppImage van de Linux-client. Deze kun je downloaden op
 [get.delta.chat](https://get.delta.chat).


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
- From [webxdc.org/apps](https://webxdc.org/apps/).
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

We are very grateful for feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. 
You may conveniently login via Delta Chat and a QR code scan,
another rather stable experiment we run on the side (sic!).

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

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat partners.
  Map tiles are downloaded from [OpenStreetMap](https://openstreetmap.org).
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


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

1. Change your address in “Settings → Advanced → Password and Account” and
   enter the password of your new e-mail account (and if necessary, server settings).
   You will get an information notice about the fact that you are moving to a new address. 
   An additional notice will also show up in your "Device messages" chat. 

2. If possible, let your old e-mail provider forward all messages to your new address.

3. Tell your contacts that you changed your address. 
   Writing to guaranteed end-to-end encrypted chats and groups,
   will make them notice your move automatically 
   and they will continue chatting with you using your new address. 

Note that Delta Chat will not retrieve messages anymore from your old e-mail provider.
If you didn't configure your e-mail provider to forward messages (step 2.) 
only those contacts to whom you sent a message in a guaranteed end-to-end encrypted chat
will send messages to your new address. 

To learn more about this the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Overig

### Welke Android-rechten heeft Delta Chat nodig?

Op bepaalde besturingssystemen kun je gevraagd
worden bepaalde rechten toe te kennen aan de app.
Delta Chat doet het volgende met deze rechten:

- Camera *(can be disallowed)*
  - take pictures and videos: for sending Photos
- Contacts *(can be disallowed)*
  - read your contacts: to discover contacts to chat with
- Location *(can be disallowed)*
  - access approximate location (network location sources): for the location streaming feature
  - access precise location (GPS and network location sources): for the location streaming feature
- Microphone *(can be disallowed)*
  - record audio: for audio messages
- Storage *(can be disallowed)*
  - modify or delete the contents of your SD card: to download message attachments
  - read the contents of your SD card: to share files with your contacts
- Other app capabilities
  - change your audio settings: so you can choose ring tones and volume for notifications and audio messages
  - run at startup: so you don't have to start Delta Chat manually
  - control vibration: for notifications
  - view network connections: to connect to your E-Mail provider
  - prevent phone from sleeping: so you can easier copy the security code during the Autocrypt Setup Message
  - have full network access: to connect to your E-Mail provider
  - view Wi-Fi connections: to connect to your E-Mail provider
  - ask to ignore battery optimisations: for achieving "instant message delivery"


### Wordt _mijn_ e-mailprovider ondersteund door Delta Chat?

- Hoogstwaarschijnlijk wel :)
  Sommige providers verwachten echter bepaalde opties. Bekijk hiervoor het [provideroverzicht](https://providers.delta.chat)


### Ik wil mijn eigen e-mailserver opzetten. Hoe kan ik dat het beste doen?

- De meeste e-mailservers werken prima, maar wij raden een
  combinatie van mailcow en mailadm aan, zoals uitgelegd op [ons
  blog](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- In de [installatiehandleiding op onze website](serverguide) lees je hoe je dit opzet.


### Waarom moet ik mijn e-mailwachtwoord invoeren in Delta Chat? Is dat wel veilig?

Delta Chat heeft, net zoals andere e-mailprogramma's (Thunderbird, K9-Mail, Outlook, etc.), je wachtwoord nodig om berichten te versturen. Het wordt alleen opgeslagen op je apparaat en alleen uitgewisseld met je e-mailprovider, die toch al toegang heeft tot je mails.

Delta Chat is open source. Dit betekent dat je de [bron-
code](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs)
kunt bekijken om er zeker van te zijn dat er veilig wordt omgegaan met je inloggegevens. We ontvangen graag feedback hierover.


### Welke berichten vind ik terug in Delta Chat?

Standaard toont Delta Chat alle e-mails.

At "Settings → Advanced → Show Classic E-Mails",
you can change this. You have these options:

- ‘Alleen gesprekken’: er worden alleen berichten en antwoorden van andere
   Delta Chat-gebruikers getoond. Dit is handig als je hetzelfde account ook voor
   normale e-mails gebruikt en is de standaardinstelling.
- ‘Alles’: alle e-mails worden getoond. Dit is handig als je Delta Chat voor al je e-mails gebruikt, zodat je geen bericht hoeft te missen.
- ‘Alleen goedgekeurde contactpersonen’: Delta Chat toont alle e-mails van contactpersonen
   waarmee je al gecommuniceerd hebt. Nieuwe berichten verschijnen
   alleen als ze vanuit Delta Chat verstuurd zijn.
   Hiermee kun je per keer bepalen of je een gesprek in Delta Chat of je e-mailapp wilt voeren.


### Ondersteunt Delta Chat HTML-e-mails?

- Ja. Indien nodig wordt er bij inkomende berichten een knop ‘Volledig bericht tonen’ getoond.
Uitgaande e-mails gebruiken altijd platte tekst.


### Can I set the E-Mail Subject with Delta Chat?

Delta Chat sets (and [encrypts](#message-metadata)!) the classic e-mail subject
automatically to  the group name or to the sender name.

So if you want to set the subject yourself,
for example for a formal e-mail to a business contact,
you can create a group
with only yourself and the recipient(s).
Set the Chat Title to the Subject you want,
and then send your e-mail as the first message.
If the recipients don't use Delta Chat,
it will look like a normal,
formal e-mail to them.
You will get bonus professionalism points
if you set a [signature text](#signature).


### Waarvoor dient de optie ‘Kopie versturen aan mijzelf’?

Door een kopie aan jezelf te sturen, weet je zeker dat je je eigen berichten
op alle apparaten ontvangt. Als je meerdere apparaten hebt en dit niet
inschakelt, dan zie je alleen berichten van anderen en de berichten die je vanaf het
huidige apparaat verstuurt.

De kopie wordt verstuurd naar je Postvak IN en vervolgens verplaatst naar de DeltaChat-map -
het verschijnt nooit in de map 'Verzonden'. Delta Chat werkt zo omdat het bericht
anders twee keer verstuurd zou worden (eenmaal middels smtp,
en eenmaal middels imap naar de map ‘Verzonden’).

The default setting for "Send Copy to Self" is "on".


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


### Is Delta Chat compatible with Proton Mail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Proton Mail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be end-to-end
  encrypted, though. The end-to-end encryption those providers offer is not
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can end-to-end-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Hoe kan ik mijn account verwijderen? {#remove-account}

If you use a default chat profile
you can simply uninstall the app.
This will automatically trigger deletion of all associated account data on the chatmail server.
For more info, please refer to [nine.testrun.org account-deletion](https://nine.testrun.org/info.html#account-deletion) for the default onboarding server,
or the respective page from your chosen [3rd party chatmail server](https://delta.chat/chatmail).

If you have set up your chat profile on multiple devices
you need to remove it from all devices.

If you are using more than one account,
but don't want to get rid of all of them,
you can remove it in the account switcher menu (on android and iOS),
or in the sidebar with a right click (in the desktop client).

Accounts on [classic e-mail providers](https://providers.delta.chat)
will not be deleted automatically;
how you can delete your account depends on your e-mail provider.
We don't have any control over e-mail accounts at those providers,
so unfortunately we can't help you with that.

If you want to continue using a classic e-mail account with other apps,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.
Otherwise you might receive undecryptable messages from those group chats.


### Ik wil graag meer weten over de gebruikte technieken. Waar kan ik meer informatie vinden?

- Bekijk de pagina [Door Delta Chat gebruikte standaarden]({% include standards-url %}).



### Where can my friends find Delta Chat?

Delta Chat is available for all major and some minor platforms:

- The **official website**, <https://delta.chat/download> shows all options in detail

- If unavailable, use the **mirror** at <https://deltachat.github.io/deltachat-pages>

- Open one of the following **app stores and search for "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, Amazon App Store, iOS and macOS App Store, Microsoft Store

- Check the **package manager** of your Linux distributions

- **Android APKs** are also available on <https://github.com/deltachat/deltachat-android/releases>


### Hoe wordt de ontwikkeling van Delta Chat gefinancierd?

Delta Chat ontvangt geen risicokapitalen,
staat niet onder bewindvoering en ervaart geen enkele druk om winst te maken of om 
gebruikers en hun vrienden door te verkopen aan adverteerders (of erger). 
We maken gebruik van publieke financieringsprocessen, zoals EU- en VS-financiering, om ons doel,
het opzetten van een gedecentraliseerd en divers gesprekssysteem, te verwezenlijken,
op basis van vrije en opensource-gemeenschapsontwikkelingen.

Concretely, Delta Chat developments have so far been funded from these sources,
ordered chronologically: 

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

- [Open Technology Fund](https://opentechfund.org) heeft twee subsidies toegekend.
  De eerste subsidie, voor 2018/2019, ter waarde van ong. $200,000, heeft enorm geholpen om de Android-app 
  te verbeteren en een bètaversie van de computerclient vrij te geven. 
  Verder hebben we onderzoek kunnen doen naar het uiterlijk in relatie tot mensenrechten - 
  bekijk onze conclusie hier: [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  De tweede subsidie, voor 2019/2020, ter waarde van ong. $300,000, loopt nog en ondersteunt ons bij het 
  vrijgeven van de iOS-client, het overzetten van de code van de kernbibliotheek naar Rust en
  het implementeren van nieuwe functies op alle platformen.

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system. 

- In 2021 ontvingen we aanvullende EU-financiering voor twee toekomstige internet-
  voorstellen, te weten [EPPD - ‘e-mail provider portability directory’](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~€97.000) en [AEAP - ‘email address porting’](https://nlnet.nl/project/EmailPorting/) (~€90.000), wat geleid heeft tot betere ondersteuning voor meerdere accounts, een verbeterd QR-codesysteem en vele netwerk-gerelateerde verbeteringen op alle besturingssystemen.

- Van 2021 tot 2023 ontvingen we *Internetvrijheid*sfinanciering (~$500,000) van de
  ‘U.S. Bureau of Democracy, Human Rights and Labor’ (DRL). 
  Met deze financiering kunnen we Delta Chat eindelijk stabieler maken, 
  evenals compatibeler met meer e-mailservers wereldwijd. Ook kunnen we extra beveiliging toevoegen
  voor geheim communiceren vanaf locaties met internetcensuur of waar het internet is afgesloten.

- 2023-2024 we successfully completed the OTF-funded 
  [Secure Chatmail project](https://www.opentech.fund/projects-we-support/supported-projects/secure-chat-mail-with-delta-chat/), 
  allowing us to introduce guaranteed encryption, 
  creating a [chatmail server network](https://delta.chat/chatmail) 
  and providing "instant onboarding" in all apps released from April 2024 on. 

- In 2023 and 2024 we got accepted in the Next Generation Internet (NGI)
  program for our work in [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
  along with collaboration partners working on 
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/), 
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/), 
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) and 
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/). 
  All of these projects are partially completed or to be completed in early 2025. 

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
