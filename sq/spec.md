---
title: Specifikime email-chat
layout: default
---


# Specifikime email-chat v0.9.0

Ky dokument përshkruan se si email-et mund të përdoren për të sendërtuar funksione tipike programesh për shkëmbime mesazhesh, teksa vazhdojnë të jenë të përputhshëm me MUA ekzistues.

- [Fshehtëzim](#encryption)
- [Mesazhe ikëse](#outgoing-messages)
- [Mesazhe ardhëse](#incoming-messages)
- [Grupe](#groups)
    - [Mesazhe ikëse për grup](#outgoing-group-messages)
    - [Mesazhe ardhëse për grup](#incoming-group-messages)
    - [Shtoni dhe hiqni anëtarë](#add-and-remove-members)
    - [Ndryshoni emër grupi](#change-group-name)
    - [Caktoni figurë grupi](#set-group-image)
- [Caktoni figurë profili](#set-profile-image)
- [Të ndryshme](#miscellaneous)


# Fshehtëzim

Mesazhet DUHEN fshehtëzuar përmes standardit [Autocrypt](https://autocrypt.org/level1.html);  `prefer-encrypt=mutual` MUND të caktohet si parazgjedhje.

Tejtëdhënat (të paktën kryet për subjektin dhe krejt ata për fjalosjet) DUHET të fshehtëzohen përmes standardit [Memoryhole](http://modernpgp.org/memoryhole/).
Nëse s’përdoret Memoryhole, subjekti i mesazheve të fshehtëzuar DUHET zëvendësuar me vargun
`Chat: Mesazh i fshehtëzuar`, ku pjesa pas dy pikave MUND të përkthehet.



# Mesazhe ikës

Programet e shkëmbimit të mesazheve DUHET të shtojnë një krye `Chat-Version: 1.0` te mesazhet ikës.
Për filtrim dhe pamje të hijshme të mesazheve në MUA normalë, kryet `Subject` DUHET të fillojnë me shkronjat `Chat:` dhe DUHET të jetë një copëz e mesazhet.

Mesazhet ikës DUHET të kalohen te dosja `Chats`.

    Nga: dërgues@përkatësi
    Për: marrës@përkatësi
    Chat-Version: 1.0
    Subjekt: Chat: Tungjatjeta …

    Hello world!

Edhe pse s’bën pjesë në këto specifikime, duan të vëmë në dukje se mund të duhet të fshehtëzohen subjekti dhe fusha të tjera tekst kryesh
(p.sh. duke përdorur mekanizmin _encoded-word_).



# Mesazhe ardhës

Kryet `Chat-Version` MUND të përdoren për të pikasur nëse mesazhi vjen prej një programi të përputhshëm.

Kryet `Subject` S’DUHEN përdorur për të pikasur programe të përputhshëm, grupe apo çfarëdo tjetër.

Programi DUHET të shfaqë `Subject`, nëse mesazhi vjen prej një MUA-je normal tok me _email-body_.
Pjesa _email-body_ DUHET shndërruar në tekst të thjeshtë, citime të plota dhe zona të ngjashme DUHEN hequr.

Bashkëngjitjet DUHET të shfaqen, kurdo që të jetë e mundur.  Nëse nuk shfaqet dot një bashkëngjitje, DUHET shfaqur një sinjalizim që nuk bezdis.

Mesazhet ardhës prej programesh të përputhshëm DUHET të kalohen te dosja `Chats`.


# Grupe

Grupet janë biseda zakonisht me më shumë se një marrës, secili i përkufizuar sipas një adrese email.
Dërguesi plus marrësit janë anëtarët e grupit.

Për të lejuar grupe të ndryshme me të njëjtët anëtarë, grupet identifikohen nga ID grupi.
ID-ja e grupit DUHET krijuar vetëm nga shenjat 0-9, A-Z dhe a-z.

Grupet DUHET të kenë një emër grupi. Emër grupi mund të jetë çfarëdo vargu UTF-8 me gjatësi jo zero.

Grupet MUND të kenë një figurë grupi.


## Mesazhe ikëse për grup

Krejt anëtarët e grupit DUHEN shtuar te kryet `Nga`/`Për`.
ID-ja e grupit DUHET shkruar te kryet `Chat-Group-ID`.
Emri i grupit DUHET shkruar te kryet `Chat-Group-Name` (prania e detyrueshme e kësaj kryeje e bën më të lehtë hyrjen në një bisedë që nga një pajisje tjetër në çfarëdo kohe).

Kryet `Subject` për mesazhe ikëse për grupe DUHET të fillojnë me `Chat:` pasuar nga emra e grupit dhe dy pika ndjekur nga një copëz e mesazhit.

Që të identifikoni ID-në e grupit në përgjigje nga MUA normalë, ID-ja e grupit duhet shtuar edhe te ID-ja e mesazhit të mesazheve ikëse. ID-ja e mesazhit DUHET të ketë formatin `Gr.<group-id>.<unique data>`.

    Nga: anëtari1@përkatësi
    Për: anëtari2@përkatësi, anëtari3@përkatësi
    Chat-Version: 1.0
    Chat-Group-ID: 1234xyZ
    Chat-Group-Name: Grupi Im
    Message-ID: Gr.1234xyZ.0001@përkatësi
    Subjekt: Chat: Grupi Im: Njatjeta grupit …

    Tungjatjeta grupit - ky grup përmban tre anëtarë

Programet që shtojnë listën e anëtarëve në formën `Name <email-address>` DUHET të bëjnë kujdes të përdorin vetëm emra të autorizuar nga vetë kontaktet.
Përndryshe, mund të lihen zbuluar emra si _Babi_ ose _Shpyrt_ (ky problem është i vërtetë edhe për MUA normalë, megjithëqë për aplikacione me më tepër përqendrim rreth kontaktesh dhe bisedash situata të tilla ndodhin më shpesh).


## Mesazhe ardhëse për grupe

Programi DUHET të kërkojë mesazhe ardhës për ID grupi te kryet vijuese: `Chat-Group-ID`,
`Message-ID`, `In-Reply-To` dhe `References` (sipas kësaj radhe).

Nëse gjen një ID grupi të vlefshëm dhe ekzistues, mesazhi i DUHET caktuar grupit të dhënë.
Nëse gjen një ID grupi të vlefshëm, por që nuk ekziston, programi MUND të krijojë një grup të ri.
Nëse s’gjendet ID grupi, mesazhi MUND t’i caktohet një bisede të zakonshme me një përdorues me adresën email të dhënë te `Nga`.


## Shtim dhe heqje anëtarësh

Programet për shkëmbim mesazhesh DUHET ta formojnë listën e anëtarëve prej kryesh `Nga`/`Për` vetëm gjatë mesazhit të parë për grupin ose nëse shohin një krye veprimi `Chat-Group-Member-Added` ose `Chat-Group-Member-Removed`.
Që të dy kryet DUHET të kenë adresën email të anëtarët të shtuar ose hequr.
Programet NUK DUHEN ta formojnë listën e anëtarëve të grupit mbi mesazhe të tjerë për grupin (kjo bëhet për të shmangur _To-lists_ të ndryshuar padashur në MUA normalë; përdoruesi nuk pret që shtimi i një përdoruesi te një _mesazh_ do ta shtojë atë te _grupi_ "përgjithmonë").

Programi DUHET të dërgojë një email eksplicit për secilin anëtar të shtuar apo hequr.
Lënda e mesazhit DUHET të përmbajë një përshkrim të përkthyer mbi çfarë ndodhi
dhe mesazhi DUHET të shfaqet si mesazh apo veprim nga dërguesi.

    Nga: anëtar1@përkatësi
    To: anëtar2@përkatësi, anëtar3@përkatësi, anëtar4@përkatësi
    Chat-Version: 1.0
    Chat-Group-ID: 1234xyZ
    Chat-Group-Name: Grupi Im
    Chat-Group-Member-Added: anëtar4@përkatësi
    Message-ID: Gr.1234xyZ.0002@përkatësi
    Subject: Chat: Grupi Im: Njatjeta, …

    Njatjeta, kam shtuar anëtar4@përkatësi te grupi ynë.  Tani jemi 4 anëtarë.

Që të hiqet një anëtar:

    From: anëtar1@përkatësi
    To: anëtar2@përkatësi, anëtar3@përkatësi
    Chat-Version: 1.0
    Chat-Group-ID: 1234xyZ
    Chat-Group-Name: Grupi Im
    Chat-Group-Member-Removed: anëtar4@përkatësi
    Message-ID: Gr.1234xyZ.0003@domain
    Subject: Chat: Grupi Im: Njatjeta, …

    Tungjatjeta, kam hequr anëtar4@përkatësi prej grupit tonë.  Tani jemi 3 anëtarë.


## Ndryshimi i emrit të një grupi

Për ndryshimin e emrit të një grupi, programi DUHET të dërgojë një mesazh me kryen e veprimit `Chat-Group-Name-Changed: 1` për krejt anëtarët e grupit.

Programi DUHET të dërgojë një email eksplicit për çdo ndryshim emri.
Lëndë e mesazhit DUHET të përmbajë një përshkrim të përkthyer të asaj që ndodhi dhe mesazhi DUHET të shfaqet si një mesazh apo një veprim nga dërguesi.

    From: anëtar1@përkatësi
    To: anëtar2@përkatësi, anëtar3@përkatësi
    Chat-Version: 1.0
    Chat-Group-ID: 1234xyZ
    Chat-Group-Name: Grupi Ynë
    Chat-Group-Name-Changed: 1
    Message-ID: Gr.1234xyZ.0004@përkatësi
    Subject: Chat: Grupi Ynë: Tungjatjeta, …

    Tungjatjeta, kam ndryshuar emrin e grupit nga "Grupi Im" në "Grupi Ynë".


## Caktim figure grupi

Një grup MUND të ketë një figurë grupi.
Për ndryshimin ose caktimin e një figure grupi, programi DUHET të bashkëngjisë një kartelë figure te një mesazh dhe DUHET të shtojë kryen `Chat-Group-Image` me emrin e figurës si vlerë për të.

Për heqjen e figurës së grupit, programi DUHET të shtojë kryet `Chat-Group-Image: 0`.

Programi DUHET të dërgojë një mesazh eksplicit për çdo ndryshim figure grupi.
Lëndë e mesazhit DUHET të përmbajë një përshkrim të përkthyer të asaj çka ndodhi dhe mesazhi DUHET të shfaqet si mesazh apo veprim nga dërguesi.


    From: anëtar1@përkatësi
    To: anëtar2@përkatësi, anëtar3@përkatësi
    Chat-Version: 1.0
    Chat-Group-ID: 1234xyZ
    Chat-Group-Name: Grupi Ynë
    Chat-Group-Image: image.jpg
    Message-ID: Gr.1234xyZ.0005@përkatësi
    Subject: Chat: Grupi Ynë: Tungjatjeta, …
    Content-Type: multipart/mixed; boundary="==break=="

    --==break==
    Content-Type: text/plain

    Tungjatjeta, kam ndryshuar figurën e grupit.
    --==break==
    Content-Type: image/jpeg
    Content-Disposition: attachment; filename="image.jpg"

    /9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBw ...
    --==break==--

Formati i figurës DUHET të jetë image/jpeg ose image/png. Që të ruhen të dhënat, është E KËSHILLUESHME të shtohet një `Chat-Group-Image` vetëm kur ndryshohen figura.


# Caktim figure profili

Një përdorues MUND të ketë një figurë profili që mund t’u shpërndahet kontakteve të tij.
Për ndryshimin ose caktimin e një figure profili, programi DUHET të bashkëngjisë një kartelë figure te një mesazh dhe DUHET të shtojë kryen `Chat-Profile-Image` me emrin e figurës si vlerë për të.

Për heqjen e figurës së profilit, programi DUHET të shtojë kryet `Chat-Profile-Image: 0`.

Që të përhapë figurën, programi MUND të dërgojë figurën e profilit me email-in e ardhshëm për kontaktin e dhënë
(për ta bërë këtë vetëm një herë, programit i duhet të mbajë diku një `profile_image_update_state`).
Përndryshe, programi MUND të dërgojë një mesazh eksplicit për çdo ndryshim figure profili te krejt kontaktet që përdorin një program të përputhshëm mesazhesh.
Programi NUK DUHET të dërgojë një mesazh eksplicit te MUA normalë.

    From: dërgues@përkatësi
    To: marrës@përkatësi
    Chat-Version: 1.0
    Chat-Profile-Image: photo.jpg
    Subject: Chat: Tungjatjeta, …
    Content-Type: multipart/mixed; boundary="==break=="

    --==break==
    Content-Type: text/plain

    Tungjatjeta, kam ndryshuar figurën e profilit tim.
    --==break==
    Content-Type: image/jpeg
    Content-Disposition: attachment; filename="photo.jpg"

    AKCgkJi3j4l5kjoldfUAKCgkJi3j4lldfHjgWICwgIEBQYFBA ...
    --==break==--

Formati i figurës DUHET të jetë image/jpeg ose image/png. Mbani parasysh që `Chat-Profile-Image` mund të shfaqet tok me krejt kryet e tjera, p.sh. mund të ketë një krye
`Chat-Profile-Image` dhe një `Chat-Group-Image` te i njëjti mesazh. Që të ruhen të dhënat, është e REKOMANDUESHME të shtohet një krye `Chat-Profile-Image` vetëm gjatë ndryshimesh figure.


# Të ndryshme

Programet DUHET të përdorin kryet `Chat-Predecessor` në vend se `In-Reply-To`, meqë ky i fundit prodhon rrjedha të pafundme në MUA.

Programet DUHET të shtojnë një krye `Chat-Voice-message: 1`, nëse një kartelë bashkëngjitje audio është një mesazh zanor.

Programet MUND të shtojnë një krye `Chat-Duration` për të treguar kohëzgjatjen e kartelave audio apo video bashkëngjitje.
Vlera e kohëzgjatjes DUHET dhënë në milisekonda.
Kjo i lejon marrësit të shfaqë kohën pa e ditur formatin e kartelës.

    Chat-Predecessor: foo123@përkatësi
    Chat-Voice-Message: 1
    Chat-Duration: 10000

Programet MUND të dërgojnë dhe marrin _Message Disposition Notifications_ (MDNs, [RFC 8098](https://tools.ietf.org/html/rfc8098), [RFC 3503](https://tools.ietf.org/html/rfc3503))
duke përdorur kryet `Chat-Disposition-Notification-To` në vend se `Disposition-Notification-To` (i cili për fat të keq i detyron shumë MUA të tjerë të dërgojnë mesazhe të çuditshme që s’janë në pajtim me asnjë
standard).


## Njëkohësim mesazhesh

Nëse nga një krye mesazhi nevojitet një veprim, veprimi mund të kryhet vetëm nëse _effective date_ është më e vonshme se sa data kur qe kryer për herë të fundit veprimi.

Datën efektive të një mesazhi e përkufizojmë si koha e dërgimit të mesazhit siç kjo jepet nga kryet `Date` të saj,
ose koha e dëftesës së parë, nëse data bie në të ardhmen ose s’dihet.


## Fusha të vjetra kryesh

Programe të vjetër mund të përdorin fusha kryesh `X-MrMsg` (në vend të `Chat-Version`), `X-MrPredecessor`, `X-MrGrpId`, `X-MrGrpName`,
`X-MrRemoveFromGrp`, `X-MrAddToGrp`, `X-MrGrpNameChanged`, `X-MrVoiceMessage` dhe `X-MrDurationMs`.

Për mesazhe ikës, programi MUND të dërgojë emrat e vjetër tok me ata të rinjtë.
Për mesazhe ardhës, programi MUND të njohë emra të vjetër, por DUHET të parapëlqejë të rinjtë, në pastë përplasje.
