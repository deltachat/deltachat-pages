---
title: FAQ
lang: pt_BR
render_toc: true
header: Perguntas Frequentes
---


## O que é o Delta Chat

Delta Chat é um novo aplicativo que manda mensagens via email, criptografando-as sempre que possível, usando Autocrypt.
**Não é preciso se cadastrar em lugar algum, apenas use a conta de email que você já tem no Delta Chat.**

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Como encontro as pessoas para conversar?

Com Delta Chat, você pode escrever para todos os emails existentes - 
mesmo que o destinatário não esteja usando o aplicativo do Delta Chat.
Diferente do que acontece com os outros mensageiros, não é preciso 
que o destinatário instale o mesmo aplicativo que você.


### Quais são as vantagens do Delta Chat em comparação com outros mensageiros?

- _Independent_ of any company or services. _You_ own your data.
- Your data is not saved on a central server unless all users are using
  the same e-mail servers
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP.
- _Largest userbase_ - recipients _not_ using Delta Chat can be reached as well.
- _No Spam_ - only messages of known users are shown by default.
- _End-to-end-encryption_ via Autocrypt.
- _Copyleft_ and _Standards_ based libre software.
- _Flexible identity_ with built-in support for [multiple accounts](#multiple-accounts)


### Quais mensagens aparecem no Delta Chat?

By default, Delta Chat shows all e-mails.

At "Settings -> Chats &
Media -> Show Classic E-Mails", you can change this. You have these options:

- "No, chats only": Only messages sent by other Delta Chat users and replies to
  your Delta Chat messages are shown. This makes most sense if you use the same
  e-mail account for normal e-mails as well.
- "All": Delta Chat shows all e-mails that are sent to your email address. This
  makes sense if you want to use Delta Chat for all your e-mails, so no message
  gets lost. This is the default setting.
- "For accepted contacts": Delta Chat shows all e-mails from contacts with whom
  you already have a chat, but new chats only pop up for Delta Chat messages.
  This helps to decide on a case-by-case basis whether you want to have a
  conversation in Delta Chat or in a "normal" e-mail app.


### What if I expect a message from someone I didn't write to in the past?

- If a message comes from an unknown contact, it appears as a **request**. You
  need to accept the request before you can reply.
- You can also "delete" it if you don't want to chat with them for now. This
  does *not* delete the message on the server, only on your device. So you can
  still deal with the message in a different mail app.
- If you delete a request, future messages from that contact will still appear
  as message request, so you can change your mind. If you really don't want to
  receive messages from this person, consider *blocking* them.


### Dá para mandar imagens, vídeos e outros anexos pelo Delta Chat?

- Sim. Além de texto, todos os anexos de email sãos mostrados como mensagens separadas. As mensagens de saída anexam automaticamente os arquivos quando for preciso.

- For performance, images are optimized and sent at a smaller size by default, but you can send it as a "file" to preserve the original.

<h3 id="multiple-accounts">How can I add or switch between multiple accounts?</h3>

You can easily work with additional accounts on Delta Chat mobile and desktop clients by clicking either:
- on the menu button and then 'Switch Account' (Android and desktop)
- or the profile icon and then 'Add Account' (iOS)

You may also wish to learn [how to add accounts to multiple devices](#multiclient).

### Quem consegue ver a imagem do meu perfil?

- Você pode adicionar uma imagem de perfil nas suas configurações. Se você escrever aos seus contatos ou adicioná-los via código QR, eles automaticamente verão a imagem do seu perfil.

- Contatos que não usam o Delta Chat não vêem a foto do perfil
(entretanto, claro que eles podem instalar o Delta Chat :)

- Por motivos de privacidade, ninguém pode ver a imagem do seu ṕerfil até que você escreva para as pessoas.

- Sua imagem de perfil não é enviada junto com cada mensagem, mas com regularidade suficiente para que seus contatos consigam atualizá-la, mesmo em novos dispositivos.


### O Delta Chat suporta emails HTML?

- Yes. If needed, incoming messages get a "Show full message" button. Outgoing e-mails always use plain text.


### Por que preciso entrar com a senha do meu email no Delta Chat? Isso é seguro?

Como acontece em qualquer outro programa de comunicação que usa email, como Thunderbird, K9-Mail ou Outlook, sua senha é necessária para poder receber e enviar emails. Obviamente, sua senha fica guardada no seu dispositivo. E ela só é transmitida para o seu provedor de email (no momento que você faz login), que é quem já tem inevitavelmente acesso aos seus emails.

Se você usa um provedor de email com suporte para OAuth2 como gmail.com ou yandex.ru, não é preciso guardar sua senha no dispositivo. Neste caso, somente um token de acesso é usado.

Como o Delta Chat é um programa de Código Aberto, você pode revisar seu [Código Fonte](https://github.com/deltachat/deltachat-core-rust/blob/master/src/login_param.rs) se você quiser verificar que as suas credenciais estão sendo manuseadas de forma segura. Ficaremos felizes de receber comentários que contribuam para fazer o aplicativo mais seguro para todos os nossos usuários.


### Quais permissões o Delta Chat precisa?

Dependendo do sistema operacional usado, é possível que você precise autorizar algumas permissões. O seguinte é o que o Delta Chat faz com essas permissões:

- Câmera *(pode ser rejeitada)*
  - para enviar fotos
- Contatos *(pode ser rejeitada)*
  - ler seus contatos: para encontrar pessoas para conversar
- Localização *(pode ser rejeitada)*
  - acesso à localização aproximada (das fontes de localização de rede): para usar a funcionalidade de streaming de localização
  - acesso à localização precisa (GPS e fontes de localização de rede): para usar a funcionalidade de streaming de localização
- Microfone *(pode ser rejeitada)*
  - gravar áudio: para mensagens de áudio
- Armazenamento *(pode ser rejeitada)*
  - modificar ou apagar conteúdo do seu cartão SD: para baixar os anexos das mensagens
  - ler o conteúdo do seu cartão SD: para compartilhar arquivos com seus contatos
- Outras capacidades do aplicativo
  - mudar as configurações de áudio: para que você possa escolher o som da chamada e o volume das notificações e das mensagens de áudio
  - rodar ao iniciar: para que você não precise ligar o Delta Chat manualmente
  - controlar a vibração: para as notificações
  - ver as conexões de rede: para se conectar ao seu provedor de email
  - evitar que o telefone durma: para que você possa copiar facilmente o código de segurança durante a Mensagem de Configuração do Autocrypt
  - ter acesso total à rede: para se conectar ao seu provedor de email
  - ver as conexões Wi-Fi: para se conectar ao seu provedor de email
  - perguntar sobre ignorar as otimizações de bateria: para usuários que querem receber mensagens a todo momento

### What means Pinning, Muting, Archiving?

Use these tools to organize your chats and keep everything in its place:

- **Pinned chats** always stay atop of the chat list. You can use them to access your most loved chats quickly or temporarily to not forget about things.

- **Mute chats** if you do not want to get notifications for them. Muted chats stay in place and you can also pin a muted chat.

- **Archive chats** if you do not want to see them in your chat list any longer.
  Archived chats remain accessible above the chat list or via search. 

- When an archived chat gets a new message, unless muted, it will **pop out of the archive** and back into your chat list.
  **Muted chats stay archived** until you unarchive them manually.

To archive or pin a chat, long tap (Android), use the chat's menu (Android/Desktop) or swipe to the left (iOS);
to mute a chat, use the chat's menu (Android/Desktop) or the chat's profile (iOS).


### What does the green dot mean?

- Since Delta Chat 1.34 you can sometimes see a "green dot" next to the avatar
  of a contact. It means they were "recently seen".
- In detail: it means, that in the last 10 minutes, Delta Chat has seen them:
  - either because they messaged you directly,
  - because they wrote something to a group you are both a member of,
  - because they sent you a read receipt for a message you wrote,
  - or because they sent data to your Delta Chat app by using a
    [webxdc app](#webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


### How can I delete my account?

As you use an e-mail account for Delta Chat,
how you can delete your account depends on your e-mail provider.
We don't have any control over your e-mail account,
so unfortunately we can't help you with that.

If you want to keep the account,
but uninstall Delta Chat,
it is recommended to leave any group chat before uninstalling Delta Chat.


## Grupos

### Criação de um grupo

- Selecione **Nova Conversa** e em seguida **Novo Grupo** no menu que fica na parte de cima da tela, no canto direito, ou clique no botão correspondente no ANdroid/iOS.
- Na tela seguinte, selecione **os membros do grupo** e defina o **nome do grupo**. Você também pode selecionar o **avatar do grupo** (uma imagem).
- Logo após você escrever a **primeira mensagem**, todas as pessoas do grupo serão informadas sobre o novo grupo e poderão responder no grupo (a não que você escreva uma mensagem ali, o grupo estará invisível para os membros).


### Adicionar membros a um grupo

- Todo membro de um grupo possui os **mesmos direitos** que qualquer outro. Por isso, uma pessoa pode deletar qualquer membro ou adicionar novos.
- Para adicionar ou deletar membros, clique no nome do grupo dentro da conversa.


### Deletei minha própria conta por acidente.

- Já que você não é mais um membro do grupo, não tem como se adicionar novamente. Entretanto, não tem problema, é só pedir para outra pessoa do grupo, através de um chat normal, adicionar você.


### Não quero mais receber as mensagens de um grupo.

- Ou você se exclui do grupo ou apaga a conversa inteira do grupo.
Se você quiser entrar mais tarde no grupo novamente, peça a outra pessoa do grupo para adicioná-la novamente.

- Uma alternativa é "silenciar" um grupo. Fazendo isso, você receberá todas as mensagens e ainda poderá escrever, mas não será receberá mais notificações d enovas mensagens.


### O que significam os carrapatos mostrados ao lado das mensagens de saída?

- **Um check** significa que a mensagem foi enviada com sucesso ao seu provedor.
- **Dois checks*** significam que pelo menos um dispositivo do destinatário
informou de ter recebido a mensagem.
- Os destinatários podem ter desativado a leitura-recepção, 
portanto, mesmo que você veja apenas um check, a mensagem pode ter sido lida.
- Ao contrário, dois checks não significam automaticamente
que um humano tenha lido ou compreendido a mensagem ;)


### What happens if I turn on "Delete old messages from server"?

- By default, Delta Chat stores all messages locally on your device.
  If you  e.g. want to save storage space at your mail provider,
  you can configure  Delta Chat
  to delete old already-received messages on the server automatically.
  They still remain on your device until you delete them there, too.

- To turn it on, go to **Delete Old Messages → Delete Messages from Server**
  in the "Chats and Media" settings.
  You can set a timeframe between "At once" and "After 1 year".
  All e-mails received by Delta Chat will be deleted from the server after this timeframe.

- Note that if you use Delta Chat on more than one device,
  you need to leave the message on the server with a sufficient timeframe
  so that the other device(s) can download them, too.


### What happens if I turn on "Delete old messages from device"? {#delold}

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption and Security 

### Which standards are used for end-to-end encryption? 

[Autocrypt](https://autocrypt.org) is used for automatically
establishing E2E-encryption with contacts and group chats. 
Autocrypt uses a limited and [secure subset of the OpenPGP standard](#openpgp-secure). 

[Secure-Join protocols](https://countermitm.readthedocs.io/en/latest/new.html) 
are used to implement [verified groups](#verifiedchats) 
which provide pervasive protection against network attacks and compromised servers.
Verified groups enforce all messages in a chat to be safely E2E-encrypted
with an unparalleled ease of use that avoids users having to learn about 
public key cryptography, key management or key verification. 


### When will messages be E2E-encrypted? 

After a first message was received from a Delta Chat or other Autocrypt-capable contact, 
Delta Chat defaults to using E2E-encryption with that contact (and vice versa). 
When creating a group chat with contacts where E2E-encrypted is individually in place,
all group members will automatically use E2E-encryption with each other and in the group. 
However, if you add a contact that lacks E2E-encryption, 
the group chat will not use E2E-encryption. 

If you want to be sure to always and only use E2E-encryption in a group
use [verified chat groups](#verifiedchats) 
which additionally protects against compromised or malfeasant e-mail servers. 


### Are attachments (pictures, files, audio etc.) E2E-encrypted? 

Yes. 
When we talk about an "E2E-encrypted message" 
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
and only displays a padlock security indicator on a message
if the whole message is properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publically discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019](https://delta.chat/assets/blog/2019-first-security-review.pdf). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for E2E-encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
or [Saltpack](https://saltpack.org/) 
but adopting them would mean breaking E2E-encryption interoperability 
with all other e-mail apps that typically support OpenPGP encryption. 
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing E2E-encryption is
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


### Is a message exposed in cleartext if E2E-encryption is not available? {#tls}

No,
this does not necessarily mean that the message is exposed in cleartext.

Delta Chat always uses ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)) encryption
which secures connections between your device and your e-mail provider
unless you explicitly disable it.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).

Moreover, the connection between your and the recipient's e-mail provider 
will today typically be transport-encrypted as well. 
If the involved e-mail servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced in all inter e-mail server communications
in which case Delta Chat communications will never be exposed in cleartext to the network 
even if the message was not E2E-encrypted. 

Note that maintaining E2E-encryption on top of TLS encryption is highly advisable 
because it provides safety between your device and a contact's device,
irrespective of any hops over potentially compromised e-mail servers. 


### How does Delta Chat protect metadata in messages? {#message-metadata}

Delta Chat protects most message metadata by putting the following information
into the E2E-encrypted part of messages: 

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
we recommend to use a Delta Chat optimized [e-mail server instance](https://delta.chat/serverguide)
to create pseudonymous temporary accounts through QR-code scans.
Note that Delta Chat apps on all platforms support multiple accounts 
so you can easily use action-specific "1-week" or "1-month" accounts next to your "main" account
with the knowledge that all temporary account data, along with all metadata, will be deleted. 
Moreover, if a device is seized then contacts using temporary e-mail accounts 
can not be identified easily, as compared to messengers which reveal 
phone numbers in chat groups which in turn are often associated with passport identities. 


### How can I verify E2E-security with a contact? 

If you are within immediate distance of your contact,
select **QR Invite code** on one device and then **Scan QR code**
from within Delta Chat on the other device. 
If both devices are online, 
they will setup a chat with each-other (if it doesn't exist already)
and both will see a "sender verified" system message in their chat. 
Showing and scanning a QR code can also happen in any "second channel" 
such as a video call or another messenger. 

If QR code scanning is for some reason not viable, 
you may check the E2E encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop). 
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.


### How can I check the encryption status of messages?

A little **padlock** in a message bubble denotes 
that the message was properly E2E-encrypted from the given sender.
If there is **no padlock**, the message was not properly E2E-encrypted 
most likely because the sender uses an app or webmail interface 
without support for E2E--encryption.


### Why do I see unencrypted messages? 

If a contact uses a non-Autocrypt e-mail app, 
all messages involving this contact (in a group or 1:1 chat) 
will not be E2E-encrypted, and thus not show a "padlock" with messages. 
Note that even if your contacts use Delta Chat on their account, 
they might also use a non-Autocrypt e-mail app on that account
which then may cause intermittently unencrypted messages. 
Replying unencrypted to unencrypted messages is mandated by Autocrypt 
to prevent unreadable messages on the side of your contacts
and their non-Autocrypt e-mail app. 

If you need a safely E2E-encrypted chat with contacts
who are using their account also with Autocrypt-incapable apps (e.g. webmail) 
it's best to create a [verified group chat](#verifiedchats) with them. 
Any message sent into a verified group chat will be E2E-encrypted
irrespective of the last incoming message from a contact. 


### How can I ensure message E2E-encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is using [verified groups](#verifiedchats) 
and turning on disappearing messages.

Verified groups are always encrypted and protected against [MITM attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) 
and turning on "disappearing messages" deletes the messages 
on the server after a user-configured time. 

If you don't need a longer-lived copy of your messages on the server, 
you can also turn on ["delete messages from server automatically"](#delold).


### O Delta Chat apóia o Sigilo Encaminhado Perfeito?

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


### Posso reutilizar minha chave privada existente?

Yes.
The best way is to send an Autocrypt Setup Message from the other e-mail client.
Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys".
Caution: Make sure the key is not protected by a password, or remove the password beforehand.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates keys as needed, you don't have to hit a button for it.

### Eu não posso importar minha chave PGP existente para o Delta Chat.

A causa mais provável é que sua chave está criptografada e/ou usa
uma senha. Tais chaves não são suportadas pelo Delta Chat. Você poderia remover a
criptografia por senha e a senha e tentar a importação novamente. Se você quiser
para manter sua senha, você terá que criar um e-mail para uso
com o Delta Chat de tal forma que a chave do Delta Chat está vinculada a este e-mail.

O Delta Chat apoia formatos comuns de chave privada OpenPGP, porém, 
é improvável que chaves privadas de todas as fontes sejam totalmente suportadas. Isso
não é o objetivo principal do Delta Chat. Na verdade, a maioria dos novos usuários
não terá nenhuma chave antes de usar o Delta Chat.
Tentamos, entretanto, apoiar chaves privadas do maior número possível de fontes.

Eliminar a senha da chave privada dependerá do
software usado para gerenciar suas chaves PGP. Com o Enigmail, você pode configurar seu
senha para um valor vazio na janela Gerenciamento de chaves. Com GnuPG você pode definir
ele [através do comando
linha](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
Para outros programas, você deveria achar uma solução online.


## Multi-cliente {#multiclient}

### Posso usar o Delta Chat em vários dispositivos ao mesmo tempo?

Yes. Delta Chat 1.36 comes with a new, experimental function for using the same account on different devices:

- Make sure both devices are on the same Wi-Fi or network

- On the first device, go to **Settings → Add Second Device**, unlock the screen if needed
  and wait a moment until a QR code is shown

- On the second device, [install Delta Chat](https://get.delta.chat)

- On the second device, start Delta Chat, select **Add as Second Device**, and scan the QR code from the old device

- Transfer should start after a few seconds and during transfer both devices will show the **progress**.
  Wait until it is finished on both devices.

In contrast to many other messengers, after successful transfer,
both **devices are completely independent.**
One device is not needed for the other to work.


### Troubleshooting

- Double-check both devices are in the **same Wi-Fi or network**

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple accounts per device, just [add another account](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer

This method is only recommended if "Add Second Device" as described above does not work.

- On the old device, go to "Settings -> Chats and media -> Export Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
  - **If you use iOS:** and you encounter difficulties, maybe
    [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) will
    help you.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### Existe algum plano para a introdução de um cliente Web para Delta Chat?

- Não há planos imediatos, mas algumas reflexões preliminares.
- Há 2-3 vias para a introdução de um cliente Delta Chat Web, mas todas são
trabalho significativo. Por enquanto, nos concentramos em obter lançamentos estáveis em todos os
app stores (Google Play/iOS/Windows/macOS/Linux repositórios) como aplicativos nativos.
- Se você precisa de um Cliente Web, porque não está autorizado a instalar software em
o computador com o qual você trabalha, você pode usar o Windows Desktop Client portátil,
ou o AppImage para Linux. Você pode encontrá-los em
[get.delta.chat](https://get.delta.chat).


### Para que serve o ajuste "Enviar cópia para si mesmo"?

O envio de uma cópia de suas mensagens para você mesmo garante que você receba suas próprias mensagens
mensagens em todos os dispositivos. Se você tem vários dispositivos e não activar isso, você
ver apenas as mensagens de outras pessoas, e as mensagens que você envia do
dispositivo atual.

A cópia é enviada para a caixa de entrada e depois movida para a pasta DeltaChat; não é
colocado na pasta "Enviado". Delta Chat *nunca* carrega qualquer coisa para a pasta "Enviados
porque isso significaria carregar uma mensagem duas vezes (uma vez através do SMTP,
e uma vez através do IMAP para a pasta Enviada).

A configuração padrão para copy-to-self é "não".

### Por que eu posso escolher assistir à pasta "Enviado"?

A única razão pela qual se quer ver a pasta Enviada é se você estiver usando outra
programa de correio (como Thunderbird) ao lado de seu aplicativo Delta Chat, e quer seu MUA
para participar numa conversa de chat.

No entanto, recomendamos o uso do Delta Chat cliente Desktop; você pode baixá-lo
no [get.delta.chat](https://get.delta.chat). A opção de observar o "Enviado
pasta pode ir embora no futuro. Ela foi introduzida num momento em que havia
nenhum cliente Delta Chat no desktop disponível em todas as plataformas.

### Por que eu posso escolher não observar a pasta DeltaChat?

Algumas pessoas usam o Delta Chat como um cliente regular de e-mail, e querem usar a Caixa de Entrada
pasta para seus correios, em vez da pasta DeltaChat. Se você desativar o "Watch
pasta DeltaChat", você também deve desativar "mover mensagens de bate-papo para DeltaChat".
Caso contrário, apagar mensagens ou configurações de vários dispositivos pode não funcionar corretamente.


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


## Experimental Features

We are very grateful about feedback on these features - do you want to share
your ideas? Join the [Forum](https://support.delta.chat) to contribute. (You
like experiments? Register through "Sign up -> with Delta Chat"!)

### How can I use audio/video calls with Delta Chat?

- To turn on audio/video calls, go to the "experimental features" section in
  the advanced settings and choose a "videochat instance". 
- When you invite others to a video chat, it is opened in your browser/app at
  once. The others receive an e-mail with a link to your jitsi/BBB room. This
  way, it is also compatible if your chat partners don't use Delta Chat.
- Note that there is no ring tone on the other side, and your chat partners
  will not get interrupted by a video chat invite.
- You can use any video chat service which allows joining by link. Just add the
  link in the settings.
- For example, to use the flagship Jitsi Meet instance, you could enter
  `https://meet.jit.si/$ROOM`. The `$ROOM` variable will be a random value;
  this way, you will have a new random jitsi room every time you call someone.


### O que é um grupo verificado? Por que isso é experimental?{#verifiedchats}

Verified groups carry a green verification checkmark in the group title that guarantees
that all messages are E2E-encrypted and can not be read or altered by e-mail servers. 
Each member in a verified group chat can add already verified contacts 
or tap "QR Invite code" to let invitees scan the code to get verified and added ("secure-join").
This "secure-join" protocol ensures that all verified group chat members 
are connected with each other through a chain of verifications ("web of trust"), 
guaranteeing E2E-encryption consistency even if e-mail servers are compromised or malfeasant.
See [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html)
for a detailed security discussion. 

Note that "1:1" chats are currently only opportunistically encrypted (Autocrypt). 
You need to create a verified group with your contact 
to ensure that all messages will be safely E2E-encrypted between you two. 
We plan to introduce verified 1:1 chats around the end of 2023, 
simplifying and extending the guarantees of verified E2E-encryption for all chat types. 
Until then verified groups will remain classified as an experimental feature 
although they are widely and successfully used already, 
and reported bugs have been continously fixed in the last years. 


### What are Broadcast Lists and how can I use them?

- With a Broadcast List you can send a message to many recipents at once; when
  they reply to you, you get the reply in your direct 1:1 chat with them. The
recipients can't see each other.
- Technically, it is an E-Mail with many recipients in BCC.
- You can turn on the feature in the "experimental features" section in the
  advanced settings. Then you can create a Broadcast List from the "New Chat"
dialog.
- In case you are using more than one device, Broadcast Lists are currently not
  synced between them.
- Messages sent to broadcast lists are not encrypted. Encryption would break
  anonymity, because then all recipients would know who else received it
  (Sending individual mails to everyone would be worse for rate limit and network
  consumption reason).


### How can I share my location with my chat partners?

- You can turn on location streaming in the "experimental features" section of
  the advanced settings.
- Now, if you want to share your location in a chat, go to "attach" and select
  "location". You can now set a time frame in which your location will be
  streamed to your chat partners, between 5 minutes and 6 hours.
- When your location changes, the others in the chat can view it on a map in
  the chat.
- To see the map and view locations of others, you need to turn on the feature
  in the advanced settings.
- This feature will not share your location with anyone except your chat
  partners. *But:* to show the map, we need to download map tiles from
  mapbox.com, so if you *view* the map, mapbox.com is asked for the map of a
  specific area. If this is a privacy risk for you, this feature might not be
  for you. We are working on finding a decentralized alternative for Mapbox.
- On desktop, the OS typically can't determine your location. Instead you can
  right click on the map and describe a location, which is sent to the chat as
  a message, but also appears on the map.


### What does the experimental database encryption actually protect?

- Right now, the database encryption is still very experimental. Don't rely on
  it for protection, you should additionally use encryption of your operating
  system, if it provides any.
- The database encryption does not yet encrypt the blobs, only the rows and
  columns of the database. This more or less means that your messages are safe,
  but not your attachments.
- For iOS and Android, the encryption keys are stored in the system keychain.
  This means the encryption is as secure as the operating system it's running
  on.
- The Delta Chat desktop client doesn't offer database encryption yet, as there
  is no standard way to store the encryption keys on the different supported
  platforms.


### Why can I choose to only watch the DeltaChat folder?

Este é um preferência experimental para algumas pessoas que estão experimentando com
regras do lado do servidor. Nem todos os provedores apóiam isso, mas com alguns você pode mover
todos os e-mails com um cabeçalho "Chat-Version" para a pasta DeltaChat. Normalmente, isso
seria feito pelo aplicativo Delta Chat.

Enabling "Only Fetch from DeltaChat folder" makes sense if you have **both**:

- habilitou uma regra do lado do servidor para mover todas as mensagens com cabeçalho de Chat-Version para a pasta DeltaChat, e
- definou a opção "Mostrar e-mails clássicos" como "não, apenas conversas".

In this case, Delta Chat doesn't need to watch the Inbox, and it's enough to only watch the DeltaChat folder.


### How can I change my account to a different e-mail address?

1. Change your address at the “Password and Account” seetings screen in Delta
   Chat, enter your password (and if necessary, server settings) for the new
   account
2. If possible, make your old e-mail provider forward all e-mails to your new
   email address
3. Tell your contacts that you changed your address. If you write this to a
   verified group, they will acknowledge this automatically.

To learn about the details behind this, [read our blogpost on
it](https://delta.chat/en/2022-09-14-aeap).


## Diverso

### O Delta Chat funciona com _meu_ provedor de e-mail?

- Com uma chance bastante boa: Sim :) 
No entanto, alguns provedores precisam de opções especiais para funcionar corretamente,
ver [Visão Geral dos Provedores](https://providers.delta.chat)


### I want to manage my own e-mail server for Delta Chat. What do you recommend?

- Most mail servers will work well. But what we personally recommend is a
  combination of mailcow and mailadm, as described [in this
  blogpost](https://delta.chat/en/2023-01-27-upcoming-mail-server-workshops).
- You can find an [installation guide on our website](serverguide).


### Se o Delta Chat usa o E-Mail, ela é realmente um _Instant_ Messenger?

- Sending and receiving messages takes a few seconds, typically. Sometimes
  there are cases where it takes longer but that is arguably true as well for
  any other messenger.
- Instant chatting works fast if both parties are actively using the app. It's
  sometimes slower if the app is running in the background.
- Receiving messages then can take minutes because both Android and iOS often
  stop Delta Chat from running in the background, and only wake it up
  occasionally. This artificial delay is usually worse on iOS than on Android.
- However, Android and iOS kill apps running in the background is a
  problem for many legitimate apps. For more information, see
  [dontkillmyapp.com](https://dontkillmyapp.com/).


### O Delta Chat é compatível com Protonmail / Tutanota / Criptext?

- Yes and No.
- No, you can not use your Protonmail, Tutanota, or Criptext account with Delta
  Chat; they do not offer receiving mails via IMAP.
- In any case you can use Delta Chat to send Messages to people who use
  Protonmail, Tutanota, or Criptext. Those messages will not be End-to-End
  encrypted, though. The End-to-End encryption those providers offer is not 
  compatible with [Autocrypt](https://autocrypt.org/), the standard Delta Chat
  uses.
- Delta Chat can e2e-encrypt through any e-mail provider with any
  [Autocrypt-enabled e-mail app](https://autocrypt.org/dev-status.html).


### Estou interessado nos detalhes técnicos. Pode me dizer mais?

- Veja [As normas usadas no Delta Chat]({% include standards-url %}).

### Was Delta Chat independently audited for security vulnerabilities? {#security-audits}

The Delta Chat project underwent four independent security audits in the last years:

- In 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).

- In 2020, [Include Security](https://includesecurity.com) analyzed Delta
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

- Beginning 2023, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

- Beginning 2023, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023. 
  See [here for the full background story on E2E security in the web](https://delta.chat/en/2023-05-22-webxdc-security). 


### Como são os desenvolvimentos do Delta Chat financiados?

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources:

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate End-to-End Encryption
  through [Autocrypt](https://autocrypt.org).

- The [Open Technology Fund](https://opentechfund.org) gave us a 
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app 
  and released a first Desktop app beta version, and which moreover 
  moored our feature developments in UX research in human rights contexts, 
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to 
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.  

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot ecosystem. 

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - e-mail provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-account support, improved QR-code contact and group setups and many networking improvements on all platforms.

- From End 2021 till March 2023 we received *Internet Freedom* funding (500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supported our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Beginning 2023 we got accepted in the Next Generation Internet (NGI)
  Entrust program for our "Private Decentralized Apps" proposals. 
  Exact amount is to be determined (around 100K EUR). 
  This funding supports further developments of [webxdc "apps shared in a chat"](https://webxdc.org). 

- Sometimes we receive one-time donations from private individuals. 
  For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". 💜 
  We use such money to fund development gatherings or to care for ad-hoc expenses 
  that can not easily be predicted for, or reimbursed from, public funding grants. 
  Receiving more donations also helps us to become more independent and long-term viable
  as a contributor community. 

  [Donate Money](donate){: .cta-button}

- Por último, mas não menos importante, vários especialistas pró-bono e entusiastas contribuíram
e contribuir aos desenvolvimentos do Delta Chat sem receber dinheiro, ou apenas
pequenas quantidades. Sem elas, o Delta Chat não estaria onde está hoje, não
mesmo perto.

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Please see [Delta Chat Contribution channels](contribute)
for both monetary and and other contribution possibilities.  
