---
title: Chatmail per messaggistica istantanea, interoperabile e rispettosa della privacy
lang: it
---


## What are chatmail servers and how to select one? 

<img alt="Chatmail logo" src="../assets/logos/chatmail.svg" width="80" style="float:right;" />

Chatmail servers are optimized for messaging with Delta Chat 
to provide a privacy-preserving and speedy user experience, 
securely interoperable with chatmail and classic e-mail servers. 
**Tap a chatmail server link** to see the home page and then tap the QR invite code there: 

- [nine.testrun.org](https://nine.testrun.org) is the default onboarding chatmail server
  for Delta Chat apps and has been stable since the [December 2023 Chatmail announcement](https://delta.chat/en/2023-12-13-chatmail).

- [mehl.cloud](https://mehl.cloud) è orientato agli utenti di lingua tedesca
ed è stabile da gennaio 2024.

- [mailchat.pl](https://mailchat.pl) è orientato agli utenti di lingua polacca
ed è stabile da gennaio 2024.

- [bcc.chat](https://bcc.chat) opera negli Stati Uniti ed è stato
stabile da febbraio 2024.

- [chatmail.woodpeckersnet.space](https://chatmail.woodpeckersnest.space/)
  è rivolto agli utenti di lingua italiana ed è
  stabile da Maggio 2024.

All chatmail servers are operated by different groups and people. 
The nine.testrun.org default server is operated by core Delta Chat team members. 

## Can i also use a regular e-mail server instead of chatmail?

Sì, molti utenti utilizzano con successo i normali server e-mail
soprattutto se desiderano gestire le normali comunicazioni e-mail con Delta Chat.
Consulta il [database dei fornitori](https://provviders.delta.chat) per le opzioni.
Tieni presente che Delta Chat supporta quindi più profili
va bene avere un profilo configurato con il tuo normale indirizzo e-mail,
e un altro profilo per chattare.


## In cosa differiscono i server chatmail dai server e-mail?

I server chatmail sono server e-mail minimi progettati per velocità, sicurezza e comodità:

- **Convenienza:** Imbarco automatico in pochi secondi e ricezione di notifiche push

- **Riservatezza:** nessuna domanda, nessun nome, numero o e-mail necessaria

- **Velocità:** Consegna dei messaggi in meno di un secondo, end-to-end

- **Affidabilità:** Nessun fastidioso controllo dello spam o limiti di velocità

- **Sicurezza:** I messaggi in uscita devono essere crittografati end-to-end,
i messaggi in arrivo vengono rigorosamente controllati per verificarne l'autenticità.


## Quanto sono affidabili i server  chatmail?

Each chatmail server provides additional privacy information on their web page.
Typically, a chatmail server only processes encrypted messages and
implements automatic, unconditional message deletion after at most 20 days.

Delta Chat fornisce [crittografia end-to-end garantita](https://delta.chat/en/2023-11-23-jumbo-42)
il che significa che nella maggior parte dei casi d'uso, gli operatori dei server non potranno mai leggere i tuoi messaggi anche se ci provano,
una garanzia supportata da una recente [analisi di sicurezza dell'ETH di Zurigo](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin).


## Come vengono gestiti i server chatmail?

Tutti i server chatmail vengono distribuiti e aggiornati automaticamente utilizzando
[il repository pubblico di sviluppo di chatmail](https://github.com/deltachat/chatmail).
I server chatmail sono composti da componenti server e-mail standard comprovati,
[Postfix](https://postfix.org) e [Dovecot](https://dovecot.org),
e configurato per funzionare incustodito e per richiedere uno sforzo di manutenzione molto basso.
I server chatmail funzionano felicemente su hardware di fascia bassa come un Raspberry Pi.


# Come vengono finanziati i server chatmail?

I server chatmail sono progettati per essere molto economici da gestire,
e sono generalmente autofinanziati dagli operatori.
Per ulteriori informazioni, consultare la prima pagina di ciascun server chatmail.

Per supportare lo sviluppo di chatmail e il funzionamento del server di imbarco predefinito
sei il benvenuto a partecipare.

[Donate Soldi](donate){: .cta-button}
