---
title: Want to help Delta Chat become more beautiful and need money?
author: olgax,rosano
---

What do indigenous communities in the Amazon rainforest, friends in Cuba, families in Iran,
people from Russia, a monastery in Cambodia, and many folks in the Fediverse have in common?
You guessed it: they're using Delta Chat because it's:

- **adaptable**: Indigenous communities use solar powered routers deep in the rainforest,
  facilitating fast local Wi-Fi chats and
  low-bitrate High-Frequency antenna long-range communication with remote chat addresses.

- **resilient**: Internationally dispersed families and friends stay in contact,
  even when WhatsApp, Signal, VPNs, and Tor fail.

- **sovereign**: Members of a monastery (ethically barred from using "remote" accounts)
  run their own e-mail server with a chat-messenger that they accept as a gift (yay Free and Open Source Software, or FOSS).

- **interoperable**: Anyone can chat even if the recipient doesn't have the app —
  it works with any e-mail address.

### Why don't we promote our project more?

Since the beginnings of Delta Chat in a small city north of Hamburg almost five years ago,
we have posted little about these wonderful and diverse ways people use the technology.
We usually prefer to share completed app releases instead of pre-announcing or
trying to create hype by boasting about users and growth.
Avoiding popularity is not merely born out of humility, but also realism as
we can only address so much feedback and suggestions.
If we are over capacity, feature requests and ideas turn into pressure and stress.

Luckily we have a wonderful testing community with key contributors
sorting out issues with users and discussing with developers.
One from Austria kept reminding us about "changed-network" connectivity problems
even if they rarely occur and are hard to re-produce:
the issues were fixed this week, which increased resiliency for everyone.
Did you know that most Delta Chat features are first tested on a Caribbean island?
Some were originally developed in the DeltaLab app:
a friendly fork of Delta Chat Android only available in the Cuban app store.

### Extending decentralized chat with web apps

[Apps shared in a Chat](https://webxdc.org) were released in mid-2022.
Dozens of grassroots-ported games are played daily in chat groups and through mailing lists.
Collaborative tooling apps (polls, checklists, calendars, editors) are evolving.
No permission from us, or any app store, is needed to create and distribute your apps.
Programming newcomers succeeded in delivering working usable apps via a zip file
containing an `index.html`, some assets and JS/Typescript/CSS as preferred.
One of our more experienced and playful developers recently whipped up a chat app
that runs inside a chat group — makes more sense than you might think.
Our Poll example app is 6 kilobytes and, as with all chat-shared web apps,
automatically operates offline-first and end-to-end encrypted
without any server deployments (and thus without logins or GDPR/consent screens).
Experts and fediverse friends agree:
web tech combined with decentralized chat (aka "webxdc") is a rare jewel worth refining.
Some friends and long-term followers hailed our approach as a "decentralized super-app".
Can you guess from which island these developments were inspired and co-driven?

### Movements in the woods and under the grounds ...

With a wide variety of users, developers, partners and co-operative projects
we discuss many wants and needs:
Supporting Reactions, having Telegram-style larger channels,
evolving WhatsApp-style communities,
and of course encryption improvements (making OpenPGP more usable),
seamless multi-device setup and even the holy grails of Peer-to-Peer messaging.
The somewhat incredible thing is that we are actually progressing
around several of these topics.
We just don't like to pre-announce much.
This post here is a bit an exception to prove the rule :)

Delta Chat app developments are a usability and UX-driven effort.
Security considerations play a day-to-day role.
However, the "most secure protocol" is useless if hardly anyone can use it.
And even "usable security" itself remains an evasive concept
if we can not facilitate its implementation in real-life apps.
Between usability, security and implementation considerations
there is no natural hierarchy.
Each acts on the others as constraint and pull factor.
We have experienced User and UX researchers with us.
In 2023, we want to perform perform systematic user and field testing around security topics,
partly following up on the often quoted ["When Signal hits the fan"](http://dx.doi.org/10.14722/eurousec.2016.23012) usable security study.

### Easing onboarding through "Automatic Accounts"

A large feature and impediment for more massive Delta Chat adoption is
the required access to an e-mail account.
While in many cases supplying an e-mail address and a password
is enough for autoconfiguration to quickly succeed, it is not without problems.
Many e-mail providers work with Delta Chat but several have unnecessary limitations and complications.
Many users do not have a good e-mail address and can not easily get one.
We are experimenting with new e-mail server setups that provide
single-click or qr-code scan based sign-up.
One sysadmin who is just joining us setup a new server in a day
and then onboarded a couple of friends, now all happily using Delta Chat.

We actually have two concurrent efforts to provide what we call Automatic Accounts (AA):
Any Delta Chat user on any platform could choose to get a single-click account
with a decent and efficient Chatting experience.
Our approach inverts centralizing platform dynamics:
You are welcome to migrate to other e-mail providers after you got started
and enjoy it enough to care for a good e-mail account.
Freedom only arises if exit without sanctions is possible
and there is somewhere to go.
When our prospective Automatic Account offering is to reach its limits,
you will need to migrate.
Automatic Accounts have the design goal of making migration easy.

Speaking of migrations, we have more followers on the Fediverse than on Twitter.
More importantly, a lot of interesting conversations are evolving.
Aren't e-mail addresses and fediverse addresses strangely similar?
Don't ActivityPub and E-Mail protocols share a culture
of a diverse variety of players and different real-use implementations?
Wouldn't federated social media with proper end-to-end encrypted chatting be a nice twist?
What if you could use a QR-code scan from Delta Chat to login to a Fediverse instance,
and then have an integrated Web/Messaging experience?
Ecological and social contexts are changing, breaking down and reconfiguring, adapting.
Migrations out of need or choice need support, not new barriers and walled gardens.

### Our "Rust-core" architecture and its UI bindings ...

Delta Chat was the first chat messaging app suite to be fully Rust-
based and available on all platforms.
We may be the only one, still?
Rust is a system-level memory-safe language,
largely hailed for its safety and efficiency,
and ending two decades of most everyone believing
advancing virtual machines tech is all what programming languages will be about.
What the Rust language needs to be hailed for maybe even more:
it enables large scale collaboration between developers,
on a wide variety of platforms and without runtime-overheads.
C and C++ could never deliver this at similar scale,
however foundational they have been and are for today's state of things.
Our Rust core implements all networking, message processing, encryption,
chat and contact persistence, offering a documented UX-oriented API for UIs and bots.
Core is licensed under the MPL and thus more permissive
than our user interface developments which are largely licensed under the GPL.

Our apps and bots use Rust-core bindings for Java, Swift, TypeScript and Python.
While our mobile apps use the long-evolved "CFFI" aka C-Foreign-Function-Interface,
our Desktop app just introduces new and fancier "JSONRPC" aka JSON-Remote-Procedure-Calls,
directly talking to core without a C-layer.
New asynchronous python bindings doing away with all CFFI were started this week
with first bots being ported to it.
We btw didn't talk much about bots yet, among them mailing-list SuperGroup bots,
Mastodon bots or Screenshotting and Download-bots and other fun experiments
being deployed for real and not only in Caribbean contexts.
But this post is getting long and twisted enough already ...
Let's get to the maybe most important point of this whole post ...

### We are looking for experienced React/Web, Java/Android and Swift/iOS developers

Our mainline Desktop development uses Web technology (React, TypeScript),
Electron and maybe someday Tauri so
we don't need to ship a full browser with our Desktop app anymore.
The desktop app is regularly released and published to Windows,
Mac and Linux distribution channels.
There are many things to improve regarding platform integration,
bug fixing and bringing about new or refined UI/UX interactions.

Our Android app is a 2019-fork of Signal's Java app,
diverged in some areas because we rather orient ourselves
around the Telegram and WhatsApp UX and UI.
The Android app remains our "flagship" app that is available in various stores,
among them Google Play and F-Droid.
Our iOS app is a self-development using Uikit and Swift bindings to core.
It is the youngest sibling in our offerings and also needs some more love.

For both Desktop and mobile development we offer 80-120 hours-per-month contracts.
Payment is not bad but not Silicon-Valley level, either.
Read more about [our funding sources here](https://delta.chat/en/help#how-are-delta-chat-developments-funded).
We are happy to discuss situational arrangements and adaptations.
Contributing and collaborating happens remote mostly
but several of us tend to meet every few months
in Freiburg (black forest) and elsewhere in germany (Berlin, Hamburg, Leipzig, ...)
and from time to time in more remote locations like Kyiv (twice) or Havanna (once).
We typically invite and converse with folks from interesting or befriended projects,
collocated in decentralization, internet freedom and queer fusion spaces.
Several of us avoid flying and some are involved in FFF or adjacent activities.
If we gather somewhere remote then usually for weeks rather than days,
and without seeking much publicity.
We try to avoid constant busyness and urgency as it prevents enjoyable collaboration.
We aim to arrange ourselves [reliably and empathically](community-standards)
and keep dates and clocktime scheduling to a minimum.

Currently, there is around a dozen weekly committers to our repositories,
with a bit more than half of them receiving funding
through employment contracts (if in germany) or freelancing (if international).
There is another dozen people and maintainers from other projects
who are involved in many background "what's interesting to do next, maybe together" discussions
and hack sessions.
We work with people located on several continents and islands, some of them exiled,
some of them migrants of choice, some of them in more stable and resource-rich environments.

Please contact us via e-mail addressed to delta@merlinux.eu
if you are interested in helping us and our users with beautiful front end developments.

Please provide some background on your prior projects and what you have worked on.
A CV is not necessary but welcome if you have one around.
If we determine a base fit we typically arrange a one month paid test period for both sides.
We'll organize an onboarding group for you and guide you through first issues and peoples involved.

Can't consider a job yourself but know someone who might be interested?
Please forward this post to whatever channels you find appropriate.
Thanks already, and not the least for persevering
through somewhat lengthy and confusing meanderings of a "jobs available!" post.
We thought you might appreciate some background context.
