---
title: Read receipts and Social pressure
---

The upcoming version of Delta Chat adds an option that will inform the _sender_ of a message that the message is displayed on the _recipient's_ device(s). 

These so called "Read receipts" or "Return receipts" are available in many other messengers and are often shown by an **additional checkmark**.

While we believe that these Read receipts are an useful addition, we also know that there are good reasons for users to disable them.


# Why a simple disabling does not work

If we would provide a simple option to disable the Read receipts, in **normal 1:1 chats**, this should not make a problem. The receiver would simply not expect Return receipts from some senders. Fine. Done.

But in **group chats**, things become more complicated. Usually Read receipts are shown when _all_ recipients have read the message.

However, with this approach, a single group member who has disabled Read receipts would break the Read receipt functionality for all other users. Bad.

Even more bad is the **social pressure** that the person(s) who has disabled the read receipts will get - 
imagine a group of 20 people with 1 person who has disabled the Read receipts; this single person is the reason that all others cannot use Read receipts.

WhatsApp solves this dilemma by not allowing to disable Read receipts for groups. Others show the second checkmark if they receive a single Read receipt - which makes the function almost superfluous - or do not offer Read receipts for groups at all. Another idea may be to allow different settings for different chats, but, however, this would not solve the problem, maybe it can reduce it.

So, as a conclusion, these optional Read receipts are _not really optional_ and **do not work**.


# Our solution: True optional Read receipts

But how can we gain a true option for the user without exposing him to social pressure? We do this by a slight redefinition of the additional checkmark:

- We show the second checkmark if a message is **read by the majority** of group members
- Only if the majority has disabled Read receipts, the second checkmark won't appear at all

It's a sort of a democratic vote. Advantages:

- The sender has an idea about that his message is read by the majority
- No social pressure - only if the majority decides against Read receipts, they do not appear
- Technically, in _large_ groups, we can reduce the overall number of read receipts by forcing only some samples (eg. by letting only about every 4th member send Read receipts; the sender simply multiplies the result by 4 then)

What do you think about this approach?  Discussions are very welcome [here](https://github.com/deltachat/deltachat-android/issues/113).
