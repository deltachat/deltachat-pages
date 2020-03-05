---
title: Saving Network Traffic - Delta's Efforts to Reduce the Message Size
author: compl4xx
image: ../assets/blog/delta-chat-ICE-train-traffic.jpg
---

**In the last months, the Delta Chat developers put a lot of focus on saving
traffic. The result: using Delta Chat consumes far less data now.**

Less is more - an important saying in a time where the unlimited growth of our
economy damages the climate. **The IT industry does a lot to make this worse.**
(Decentralized services, like email, are not necessarily better in this regard:
one of the most energy consuming technologies is Bitcoin.)

In this effort, we wanted to especially save network traffic. Everyone who ever
tried to use the Internet on a German train will understand why. But the main
reason was that many people live in areas where data traffic is **expensive,
limited, or slow.** They all profit from a smaller message size.

![An ICE train waiting in a train station.](../assets/blog/delta-chat-ICE-train-traffic.jpg)

*An ICE might avoid traffic jams on the streets; but you will get data jams in the ether instead.*

## Which Improvements are Saving the Most Traffic?

A few things which were changed to reduce our data traffic consumption:

- We changed newly generated PGP Keys to the new ed25519 algorithm - those keys
  are a lot smaller. This is very important, as the keys are sent in every
  message at the moment.
- We now avoid downloading messages that Delta Chat doesn't display, e.g.
  messages from blocked contacts. This means:
  - No unnecessary traffic
  - No slowdown when getting online with a busy inbox
- We optimized the traffic on idle, when the app isn't used. In 10 minutes, it
  used to consume 6 kB - [this was reduced down to 107 bytes.](https://github.com/deltachat/deltachat-core-rust/issues/506)
- Key Gossip (keys of other group members) is not sent with every message
  anymore. Sending one key is already a lot; in groups with 20 members, this is
  much more.
- We combined read-receipts into one message, when they are sent in the same
  moment. Before, there was an email for each read receipt.

## What Else is Possible?

This is already a start, and saves many people a lot of money, who have to live
with 50 MB per month. But there are even more ideas to reduce the traffic
Delta Chat generates:

- Disabling encryption: making it possible not to send Autocrypt headers at
  all. This is highly controversial; it might not be necessary with the new
  ed25519 keys.
- Sending the key fingerprint in a special header, so we don't always have to
  download the whole Autocrypt header.
- Sending small messages through a header, thereby saving IMAP commands in the
  background.
- Not sending a key per gossip if the key was gossipped by someone else in the
  last 48 hours.
- Maybe we can avoid sending the to/cc headers to groups where everyone uses
  Delta Chat. This is a security feature, but also saves traffic.
- And finally there are some wild ideas about leaving out the Autocrypt header,
  when encryption *probably* works. If it stops working, it could still be
  recovered by a simple message exchange.
