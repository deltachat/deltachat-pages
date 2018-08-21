---
title: Help
layout: default-ca
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Preguntes freqüents

- [General](#general)
- [Grups](#groups)
- [Encriptació](#encryption)
- [Multi-client](#multiclient)
- [Miscel·lània](#miscellaneous)

# General

## A qui puc escriure?

- Amb Delta Chat pots escriure a qualsevol adreça de correu electrònic, fins i tot si el destinatari (encara) no està usant l'app de Delta Chat. Aquesta és una de les enormes diferències amb altres programes de missatgeria: no és necessari que el receptor instal·li la mateixa app que tu.

## Quins son els avantatges de Delta Chat comparat amb altres programes de missatgeria?

- _Independent_ de qualsevol empresa o servei. Les teves dades son _teves_.
- Les teves dades no es guarden en un servidor central; d'aquesta manera, en contrast amb molts altres missatgers, Delta Chat fins i tot protegeix les teves metadates (qui escriu a qui?)
- No distribueixes el teu llistat de contactes a ningú.
- _Rapidesa_ mercès l'ús de Push-IMAP
- _La base d'usuaris més gran_ - als receptors que no usin Delta Chat també els arribaran els missatges
- _Compatible_ - no només amb ell mateix
- Interfície d'usuari _elegant_ i _simple_
- Sistema _distribuït_
- _Sense spam_ - només es mostren els missatges dels usuaris coneguts
- _Fiable_ - segur per un ús professional
- _De confiança_ - fins i tot és apte per usar-lo en entorns de negocis
- Basat plenament en _Codi Obert_ i _Standards_

## Què passa si el receptor no usa Delta Chat?

- Llavors el receptor rebrà un missatge de correu electrònic normal - i si el respon, voràs la resposta a l'app Delta Chat.

## Quins missatges es mostren al Delta Chat?

Delta Chat mostra automàticament...

- Missatges de contactes de la teva **llista de contactes**
- Missatges de contactes **contactats per tu**
- **Respostes** de missatges enviats per tu

Els altres missatges no es mostren automàticament. Pots veure aquests altres missatges al menú principal a **Peticions de contacte** i, si vols, començar un xat des d'allí.

## Què passa amb l'spam?

- Els missatges de les carpetes d'spam habituals s'ignoren i les adreces que son allà, no es consideren com a contactes coneguts.
- Com que els missatges de contactes desconeguts no es mostren, normalment **no hi ha spam**.
- De totes formes, si ho necessites, pots **bloquejar** qualsevol contacte.

## Delta Chat permet imatges, vídeos i altres adjunts?

- Si. A mḉes de text pla, tots els adjunts de correu electrònic es mostren com a missatges separats. Els missatges sortints tindran adjunts automàticament, quan ho requereixin.

## Delta Chat permet missatges en HTML?

- Si. Si el missatge entrant no te una part en text pla, naltros convertim els missatges en HTML en text pla. Els missatges sortints sempre usen text pla.

# Grups

## Com puc crear un grup?

- Selecciona **Afegeix grup** dins el "menú Sandwich" a la cantonada superior esquerra de la vista general del chat.
- A la pantalla següent, selecciona els **membres del grup** i toca la casella de verificació a la cantonada superior dreta. Després podràs posar un **nom del grup**.
- Tant aviat com escriguis el **primer missatge** al grup, tots els seus membres seran informats sobre l'existència del nou grup i podran respondre al grup (mentre no escriguis un missatge al grup, aquest romandrà invisible als seus membres).

## Qui pot afegir membres a un grup?

- Cada membre del grup te els **mateixos drets** que els altres. Per això mateix, tothom pot esborrar a qualsevol membre o afegir-ne de nous.
- Per afegir o esborrar membres, prem a sobre del nom del grup des de la finestra de xat.

## M'he esborrat a mi mateix sense voler.

- Com que llavors deixes de ser un membre del grup, no et pots tornar a afegir. Però no pateixis, només cal que li demanis a qualsevol altre membre del grup que t'hi afegeixi un altre vegada. 

## No vull rebre més missatges del grup.

- Pots esborrar-te a tu mateix com a membre o esborrar el xat sencer. Si més tard vols apuntar-te un altre cop al grup, demana-li a un altre membre que t'hi afegeixi.
- També tens l'alternativa d'"emmudir" al grup. Fent això encara rebràs tots els missatges i podràs escriure-hi, però ja no se't notificaran els missatges nous.

# Encriptació {#encryption}

## Delta Chat te una encriptació d'extrem a extrem?

- Si.

## Què he de fer per activar l'encriptació d'extrema  extrem?

- Res.

- Delta Chat (and other [Autocrypt](https://autocrypt.org)-compatible email-programs) share the keys required for end-to-end-encryption automatically as the first messages are sent. After this, all subsequent messages are encrypted end-to-end automatically. If, one of the chat partners use an app later that cannot use end-to-end-encryption, it is paused for this time and automatically re-activated as soon as possible.

- If you want to _deactivate_ the end-to-end-encryption, use the corresponding setting at "Settings / Advanced settings".

## If end-to-end-encryption is not available, is the connection not encrypted at all?

- No. The normal, email-standard _transport encryption_ is used then.


## How can I check the encryption?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is send from the given sender _and_ your answer will be end-to-end-encrypted as well.
- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## How can I verify the sender?

The user's profile shows some additional information:

- For an end-to-end-encryption, Delta Chat show two fingerprints there. If they are the same on the device of your chat partner, the connection is safe.
- For transport encryption, this state is just shown there


## Which standards are used for end-to-end-encryption?

- OpenPGP. Key transport is done via [Autocrypt](https://autocrypt.org).

## Can I re-use by existing private key?

- Si. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for sth. like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually at "Advanced settings / Manage private keys". Caution: Make sure, the key is not protected by a password or remove it before.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you have to do nothing.

# Multi-client {#multiclient}

## Can I use Delta Chat on multiple devices the same time?

- If you want to use the **same account** on different devices, you have to make sure, all devices use the same keys for encryption:

  - On the first device, choose "Advanced settings / Manage private keys / Export key to Downloads"
  - Via USB, copy the key file from the "Downloads" directory of the first device to the second one.
  - On the second device, "Advanced settings / Manage private keys / Import key from Downloads"

- All this is **not needed** for the standard usage of Delta Chat using just one device.

- NB: In multi-client mode, _incoming_ messages are shown at once on all clients. _Outgoing_ messages are synced about two times an hour. We can improve this, but we would need more [support](contribute) on this issue.


# Miscellaneous

## Delta Chat on Linux Desktop

- You can run Delta Chat on Ubuntu Linux desktop (or other linux distributions supporting the **snap**-package format) by simply installing [Anbox](https://anbox.io) (Android in a Box) from terminal:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- To add the Delta Chat application, download the *com.b44t.messenger_\<version\>.apk* file from [this](download) page and install it from terminal:

  $ *adb install path/to/com.b44t.messenger_\<version\>.apk*

  adb is the Android Debug Bridge and can be installed from repository.

- Instead of installing Delta Chat directly via APK file, you can first install the F-Droid store via [F-Droid-APK](https://f-droid.org/FDroid.apk) and then install Delta Chat using the store. The great benefit is the information about updates and the migration of existing config and chat data.


## Login Issues

I have a problem with ...

- Gmail: Enable "Support less secure apps" and IMAP, you may receive a mail to grant permission

## I'm interested in the technical details. Can you tell me more?

- See page [Standards used in Delta Chat]({% include standards-url %}).
