---
title: Saving Network Traffic - Delta's Efforts to Reduce the Message Size
author: compl4xx
image: ../assets/blog/screenshots/2020-03-10-delta-chat-message-size-wifi-charger.jpg
---

**In the last months, the Delta Chat developers put a lot of focus on saving
traffic. The result: current Delta Chat mobile releases consume far less data now.**

It's easy to forget that many people still pay data plans by the GB - their
data traffic is **expensive, limited, and slow.** For many people, it's even a
question of money; Internet traffic can be quite expensive. In such moments,
this can be the critical difference: is an app usable at all, or does it use
too much traffic?

In the effort to save network traffic, the developers improved Delta Chat a lot
in the last months. This helps everyone with an expensive data plan. It's also
useful if your Internet connection is throttled because you ran out of data,
but the month isn't over yet. 

![A "free Wi-Fi inside" sign at a restaurant.](../assets/blog/screenshots/2020-03-10-delta-chat-message-size-wifi-charger.jpg)

*Somehow free Wi-Fi became one of the main offerings of Cafés and Restaurants.*

## Which Improvements are Saving the Most Traffic?

A few things which were changed to reduce our data traffic consumption:

- Delta now avoids downloading messages that it doesn't display. This saves a
  lot of traffic through messages from blocked contacts, and huge attachments
  from ordinary emails.
- A nice side effect is that you have less slowdown when getting online with a
  busy inbox.
- We optimized the traffic on idle, when the app isn't used. In 10 minutes, it
  used to consume 6 kB - [this was reduced down to 107 bytes.](https://github.com/deltachat/deltachat-core-rust/issues/506)
- We combined read-receipts into one message, when they are sent in the same
  moment. Before, there was an email for each read receipt.

### Changing the PGP keys to ed25519 Elliptic Curve Keys

We changed newly generated PGP Keys to the new ed25519 algorithm - those keys
are a lot smaller. This is very important, as the keys are sent in every
message at the moment.

![two editor windows; on the left you see an RSA key, on the right an ed25519
key.](../assets/blog/screenshots/2020-03-10-delta-chat-ed25519-key-size-comparison.png)

*On the left, my old RSA key; it doesn't even fit on the screen. On the right,
a new ed25519 key.*

We wanted to go for this way earlier, but we had to avoid compability issues.
Maybe you noticed that we didn't update F-Droid versions for about six months;
with all the old Delta versions around, we couldn't introduce changes like
this without risking compability.

Note that the current releases still generate RSA2048 keys by default, because
the Delta Chat testing discovered an incompatibility which was fixed in the
current releases. After the next Desktop release we should finally be able to
switch to generating ed25519 keys by default.

## What Else is Possible? A Glance Into The Future

The above already reduces Delta Chat's traffic a lot. The developers are
considering a few more ideas. If you are interested in the details, take a look
at the [save-traffic label in the core issue tracker](https://github.com/deltachat/deltachat-core-rust/issues?q=is%3Aissue+is%3Aopen+label%3Asave-traffic). 
