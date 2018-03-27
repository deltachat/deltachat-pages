---
title: Hjelp
layout: default-nb
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Ofte-Stilte-Spørsmål

- [General](#general)
- [Grupper](#groups)
- [Kryptering](#encryption)
- [Multi-client](#multiclient)
- [Ymse](#miscellaneous)

# Generelt

## Hvem kan jeg skrive til?

- Med Delta Chat, kan du skrive til enhver eksisterende e-postadresse - som om mottakeren ikke (enda) bruker Delta Chat-programmet. Dette er én av de største forskjellene til andre meldingsprogrammer: Mottakeren trenger ikke å installere samme program som deg.

## Hva er fordelene med Delta Chat sammenlignet med andre meldingsforsendelsessystemer?

- _Uavhengig_ av selskaper og tjenester. _Du_ eier din data.
- Din data blir ikke lagret på en sentral tjener; på denne måten; i motsats til andre meldingsprogrammer, Delta Chat beskytter tilogmed din metadata (hvem skriver til hvem?)
- Du sender ikke adresseboken din til noen.
- _Raskt_ ved bruk av Push-IMAP
- _Størst brukermasse_ - mottakere som _ikke_ bruker Delta Chat kan også nås
- _Kompatibelt_ - ikke bare med seg selv
- _Elegant_ og _enkelt_ brukergrensesnitt
- _Distribuert_ system
- _Ingen søppelpost_ - kun meldinger fra kjente brukere vises som forvalg
- _Pålitelig_ -trygt for profesjonelt bruk
- _Tillitsverdig_ - kan tilogmed brukes for bedriftsmeldinger
- Helt _fri programvare_ og basert på _standarder_

## Hva om mottakeren ikke bruker Delta Chat?

- Mottakeren vil da få en vanlig e-post - hvis vedkommende svarer på den, vil du se svaret i Delta Chat programmet.

## Hvilke meldinger vises i Delta Chat?

Delta Chat viser automatisk…

- Meldinger fra kontakter i din **adressebok**
- Meldinger fra kontakter **kontaktet av deg**
- **Svar** til meldinger sendt av deg

Andre meldinger vises ikke automatisk. Du kan se dem i hovedmenyen i **Kontaktforespørsler** og, hvis ønskelig, starte sludring derfra.

## Hva med spam?

- Meldinger i vanlige søppelpost-mapper ignoreres og inneholdende adresser blir ikke antatt å være kjente kontakter.
- Siden meldinger fra ukjente kontakter ikke spretter opp automatisk, er det vanligvis **fritt for søppel**.
- Dog kan du hvis du virkelig ønsker det **blokkere** enhver kontakt.

## Støtter Delta Chat bilder, videoer og andre vedlegg?

- Ja. Ved siden av klarteksten, vises alle e-postvedlegg som egne meldinger. Utgående meldinger vil få vedlegg ved behov automatisk.

## Støtter Delta Chat HTML-e-poster?

- Ja. Hvis innkommende e-post mangler en klartekstdel, konverteres HTML-e-poster til klartekst på din enhet. Utgående e-poster bruker alltid klartekst.

# Grupper

## Hvordan kan jeg opprette en gruppe?

- Velg **Legg til gruppe** fra "smørbrødsmenyen" øverst i venstre hjørne for sludringsoversikt.
- På neste skjerm, velg **gruppemedlemmer** og trykk på avhukingsmerket øverst i høyre hjørne. Etter det, kan du velge et **gruppenavn**
- Så snart du skriver den **første meldingen** i gruppen, vil alle medlemmer få vite om den nye gruppen og kan svare i den (så lenge du ikke skriver en melding i gruppen, er den usynlig for medlemmene).

## Hvordan kan jeg legge til medlemmer i en gruppe?

- Hvert gruppemedlem har **samme rettigheter** som alle andre. Som følge av dette kan hver av dem slette andre, eller legge til nye.
- For å legge til eller slette medlemmer, klikk på gruppenavnet i sludringen.

## Jeg har slettet meg selv ved en feiltagelse.

- Siden du nå har forlatt gruppen, kan du ikke legge deg selv til igjen. Det er dog ikke et problem, bare få et annet gruppemedlem i en normal sludring til å legge deg til igjen.

## Jeg ønsker ikke lenger å motta meldinger fra en gruppe.

- Enten slett deg selv fra medlemslisten, eller slett hele sludringen. Hvis du ønsker å ta del i gruppen igjen senere, spør et annet gruppemedlem om å legge deg til igjen.
- Som et alternative, kan du også "Forstumme" en gruppe - å gjøre det, vil la deg få alle dens meldinger, og du kan fremdeles skrive i den, men du vil ikke lenger få beskjed om nye meldinger.

# Kryptering {#encryption}

## Har Delta Chat ende-til-ende -kryptering?

- Ja.

## Hva må jeg gjøre for å aktivere ende-til-ende -kryptering?

- Ingenting.

- Delta Chat (og andre [Autocrypt](https://autocrypt.org)--kompatible e-postprogramer) deler nøklene som kreves for ende-til-ende -kryptering automatisk så snart den første meldingen blir sendt. Etter dette, vil alle påfølgende meldinger bli ende-til-ende -kryptert automatisk. Hvis, en av sludrepartnerne bruker et program senere, som ikke kan gjøre bruk av ende-til-ende -kryptering, blir det satt på pause, og automatisk re-aktivert så snart det er mulig.

- Hvis du ønsker å _skru av_ ende-til-ende -kryptering, bruk respektiv innstilling i "Innstillinger / Avanserte innstillinger".

## Hvis ende-til-ende -kryptering ikke er tilgjengelig, er tilkoblingen kryptert overhodet?

- Nei. Normal standard _transport-kryptering_ for e-post brukes i sådant fall.


## Hvordan kan jeg sjekke krypteringen?

- Hvis en liten **hengelås** vises ved siden av en melding, angir det at meldingen er ende-til-ende -kryptert _og_ sendt fra angitt avsender _og_ at også svaret ditt vil bli ende-til-ende -kryptert.
- Hvis det **ikke finnes en hengelås**, vil meldingen vanligvis bli transport-kryptert f.eks. fordi du eller senderen har skrudd av ende-til-ende -kryptering, eller at avsenderen bruker et program som ikke støtter ende-til-ende -kryptering.


## Hvordan kan jeg bekrefte avsenderen?

Brukerprofilen viser litt ekstra informasjon:

- For ende-til-ende -kryptering, viser Delta Chat to fingeravtrykk der. Hvis de er de samme på din og din samtalepartners enhet, er tilkoblingen trygg.
- For transportkryptering, vises bare denne tilstanden der


## Hvilke standarder brukes for ende-til-ende -kryptering?

- OpenPGP. Nøkkeltransport gjøres via [Autocrypt](https://autocrypt.org).

## Kan jeg bruke en privat nøkkel jeg har fra før?

- Ja. Importing it at "Advanced settings / Manage private keys". Caution: Make sure, they key is not protected by a password or remove it before.

Hvis du ikke har en nøkkel, eller ikke engang vet om du kommer til å trenge en - fortvil ikke: Delta Chat genererer en for deg, du trenger ikke å gjøre noe.

# Multi-klient {#multiclient}

## Kan jeg bruke Delta Chat på flere enheter samtidig?

- Hvis du ønsker å bruke **samme konto** på flere enheter, må du forsikre deg om at alle enheter bruke samme krypteringsnøkler:

  - På den første enheten, velg "Avanserte innstillinger / Behandle private nøkler / Eksporter nøkkel til Nedlastinger"
  - Via USB, kopier nøkkelfila fra "Nedlastinger"-mappen til første enhet på den andre.
  - På den andre enheten, "Avanserte innstillinger / Behandle private nøkler / Importer nøkkel fra Nedlastinger"

- Alt dette er **ikke nødvendig** for vanlig bruk av Delta Chat, med bare én enhet.

- NB: I multiklientmodus, vil _innkommende_ meldinger vises umiddelbart på alle klienter. _Utgående_ meldinger synkroniseres to ganger i timen. Dette kan forbedres, men det trengs mer [støtte](contribute) for å få bukt med problemet.


# Ymse

## Delta Chat på Linux|GNU-skrivebordet

- Du kan kjøre Delta Chat på Ubuntu (eller andre skrivebordsdistribusjoner som støtter **snap**-pakkeformatet) ved å simpelthen installere [Anbox](https://anbox.io) (Android i en boks) fra terminalen:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- For å legge til Delta Chat-programmet, last ned *com.b44t.messenger_\<version\>.apk*-filen fra [denne](download) siden og installer det fra terminalen:

  $ *adb install sti/til/com.b44t.messenger_\<version\>.apk*

adb er feilrettingsbroen for Android (Android Debug Bridge) og kan installeres fra pakkebrønnen.

- Istedenfor å installere Delta Chat direkte via APK-fil, kan du først installere F-Droid-butikken via [F-Droid-APK](https://f-droid.org/FDroid.apk) og så installere Delta Chat ved å bruke butikken dens. Den store fordelen er at informasjon om oppgraderinger og flytting av eksisterende oppsett og sludredata.


## Innloggingsproblemer

Jeg har et problem med…

- Gmail: Skru på "Støtt mindre sikre programmer" og IMAP, det kan hende du får en e-post for å innvilge tilgang

## Jeg er interessert i de tekniske detaljene. Kan du fortelle meg mer?

- Sjekk siden [standarder brukt i Delta Chat]({% include standards-url %}).
