---
title: FAQ
lang: pt
render_toc: true
header: Perguntas Frequentes
---


## O que é o Delta Chat

O Delta Chat é um novo aplicativo de bate-papo que envia mensagens por e-mail, criptografadas se possível, com o Autocrypt.
** Você não precisa se inscrever em nenhum lugar, basta usar sua conta de e-mail existente no Delta Chat. **

<img style="float:right; width:50%; max-width:360%; margin:1em;" src="../assets/home/delta-what-optim.png" />


### Como encontro as pessoas para conversar?

Com Delta Chat, você pode escrever para todos os emails existentes - 
mesmo que o destinatário não esteja usando o aplicativo do Delta Chat.
Diferente do que acontece com os outros mensageiros, não é preciso 
que o destinatário instale o mesmo aplicativo que você.


### Quais são as vantagens do Delta Chat em comparação com outros mensageiros?

- _Independente_ de qualquer companhia ou serviço. _Você_ é dona dos seus dados.
- Seus dados não são salvos num servidor central, a não ser que todos os usuários estejam usando o mesmo servidor de email.
- Sua lista de contatos não é distribuída para ninguém.
- É _rápido_ por usar o Push-IMAP.
- _A maior base de usuário_ - destinatários que _não_ usam o Delta Chat também podem ser contatados.
- _Compatível_ - não apenas consigo mesmo.
- Interface de usuário _simples_ e _elegante_.
- Sistema _distribuído_.
- _Sem Spam_ - apenas as mensagens das pessoas que você conhece são mostradas por padrão.
- _Confiável_ - seguro para uso profissional.
- _Copyleft_ e baseado em _padrões_ de software livre.


### Quais mensagens aparecem no Delta Chat?

O Delta Chat automaticamente mostra:

- Mensagens de contatos da sua **agenda de endereços**
- Mensagens de contatos **que você contatou**
- **Respostas** a mensagens enviadas por você

As outras mensagens não aparecem automaticamente e podem ser encontradas em **Pedidos de Contatos**. Se for desejado, uma conversa pode conversar a partir dali.


### Dá para mandar imagens, vídeos e outros anexos pelo Delta Chat?

- Sim. Além de texto, todos os anexos de email sãos mostrados como mensagens separadas. As mensagens de saída anexam automaticamente os arquivos quando for preciso.


### Quem consegue ver a imagem do meu perfil?

- Você pode adicionar uma imagem de perfil nas suas configurações. Se você escrever aos seus contatos ou adicioná-los via código QR, eles automaticamente verão a imagem do seu perfil.

- Contacts who don't use Delta Chat do not see the profile picture
  (however, of course, they can install Delta Chat :)

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


## Grupos

### Criação de um grupo

- Selecione **Nova Conversa** e em seguida **Novo Grupo** no menu que fica na parte de cima da tela, no canto direito, ou clique no botão correspondente no ANdroid/iOS.
- Na tela seguinte, selecione **os membros do grupo** e defina o **nome do grupo**. Você também pode selecionar o **avatar do grupo** (uma imagem).
- Logo após você escrever a **primeira mensagem**, todas as pessoas do grupo serão informadas sobre o novo grupo e poderão responder no grupo (a não que você escreva uma mensagem ali, o grupo estará invisível para os membros).


### Adicionar membros a um grupo

- Todos os membros do grupo têm os **mesmos poderes**. Assim, todos podem deletar e/ou incluir novos membros ao grupo.
- Para adicionar ou deletar membros, clique no nome do grupo no chat.


### O que é um grupo verificado? Por que isso é experimental?

- Um grupo verificado é uma conversa que garante a segurança contra um atacante ativo. Todas as mensagens numa conversa verificada são criptografadas de ponta a ponta e os membros podem se juntar a ela escaneando um "convite de código QR". Todos os membros estarão então conectados uns aos outros  através de uma cadeia de convites, o que garante uma consistência criptográfica contra ataques ativos da rede ou do provedor. Veja [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) para a pesquisa que está em andamento sobre essa funcionalidade.

- Até dezembro de 2019, um "grupo verificado" continua sendo uma funcionalidade experimental. Ela vem sendo continuamente melhorada e diversos bugs foram arrumados desde a sua introdução original em 2018. Entretanto, ainda existem casos, especialmente em grandes grupos, onde inconsistências podem acontecer, ou mensagens não conseguem ser lidas. No início de 2020, está prevista uma revisão de segurança, e vários novas melhorias com respeito aos protocolos de adesão via código QR estão acontecendo. Assim, é provável que o nome "experimental" seja retirado num futuro próximo.


### Deletei minha própria conta por acidente.

- Já que você não é mais um membro do grupo, não tem como se adicionar novamente. Entretanto, não tem problema, é só pedir para outra pessoa do grupo, através de um chat normal, adicionar você.


### Não quero mais receber as mensagens de um grupo.

- Ou você se exclui do grupo ou apaga a conversa inteira do grupo.
Se você quiser entrar mais tarde no grupo novamente, peça a outra pessoa do grupo para adicioná-la novamente.

- Uma alternativa é "silenciar" um grupo. Fazendo isso, você receberá todas as mensagens e ainda poderá escrever, mas não será receberá mais notificações d enovas mensagens.


### What do the ticks shown beside outgoing messages mean?

- **One tick** means that the message was sent successfully to your provider.
- **Two ticks** mean that at least one recipient's device
  reported back to having received the message.
- Recipients may have disabled read-receipts,
  so even if you see only one tick, the message may have been read.
- The other way round, two ticks do not automatically mean
  that a human has read or understood the message ;)


## Criptografia {#encryption}

### O Delta Chat suporta criptografia de ponta a ponta?

- Sim. O Delta Chat usa o padrão Autocrypt Nível 1 e assim pode trocar mensagens criptografadas de ponta a ponta com outros aplicativos que usam Autocrypt.

- O Delta Chat também suporta uma forma de criptografia ponta a  ponta que é segura mesmo contra ataques ativos. Veja "grupos verificados" mais abaixo.


### O que preciso fazer para ativar a criptografia de ponta a ponta?

- Nada.

- Os aplicativos Delta Chat (e outros aplicativos de email compatíveis com [Autocrypt](https://autocrypt.org) compartilham automaticamente as chaves necessárias para a criptografia de ponta a ponta quando a primeira mensagem é enviada.
  Depois disso, todas as mensagens subsequentes são criptografadas automaticamente de ponta a ponta.
  Se uma das pessoas da conversa usa um aplicativo de email não compatível com Autocrypt, as mensagens seguintes não serão criptografadas até que um aplicativo que suporte Autocrypt esteja disponível novamente.

- Se você quer evitar email criptografados de ponta a ponta por padrão, use a configuração correspondente do Autocrypt em "Configurações" ou "Configurações Avançadas".


### Se a criptografia de ponta a ponta não estiver disponível, toda a conexão não será criptografada?

- Com a maioria dos servidores de email, o Delta Chat estabelece a _criptografia de transporte_ ([TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)). Isso garante apenas a segurança da conexão entre o seu dispositivo e o servidor de email. A criptografia de ponta a ponta, por outro lado, fornece segurança entre o seu dispositivo e o da pessoa com quem você está conversando.


### Como posso verificar o status da criptografia entre eu e um contato?

Se você está perto fisicamente de um contato:

- Selecione **convite por código QR** em um dispositivo e em seguida **Escanear código QR** no outro. Se ambos dispositivos estão online, eles estabelecerão um canal de comunicação entre si (se ainda não existir) e as chaves de criptografia também serão verificadas. Ambas pessoas receberão uma mensagem do sistema dizendo "remetente verificado" na sua conversa 1:1.

Se você não está próxima de um contato, é possível verificar o status manualmente na janela "Criptografia" (veja o perfil de usuário no Android/iOS ou dê um clique duplo no usuário no computador):

- Para criptografia de ponta a ponta, o Delta Chat mostra duas impressões digitais de chaves criptográficas ali. Se as mesmas impressões digitais aparecem no dispositivo do seu contato, a conexão está segura.

- No caso de criptografia de transporte, a respectiva informação é simplesmente exibida no aplicativo.


### Como posso verificar a criptografia de mensagens?

- Um pequeno **cadeado** mostrado ao lado da mensagem denota se a mensagem está criptografada de ponta a ponta com um dado contato.

- Se não aparece um **cadeado**, a mensagem normalmente foi criptografada no transporte. Isso pode acontecer nos seguintes casos, por exemplo, um contato desligou a criptografia de ponta a ponta ou está usando um dispositivo sem o suporte à criptografia de ponta a ponta.

### Quais são os padrões usados na criptografia de ponta a ponta?

- O [Autocrypt](https://autocrypt.org) é usado para estabelecer a criptografia de ponta a ponta com outro Delta Chat e outros aplicativos de email que suportam Autocrypt. O Autocrypt usa um subconjunto limitado de funcionalidades do OpenPGP.

- O Delta Chat implementa [protocolos de configuração de contatos e grupos verificados contra ataques Man in the Middle](https://countermitm.readthedocs.io/en/latest/new.html) para proteger as conversas contra ataques ativos na rede. Isso vai além da proteção oportunística básica do Autocrypt Nível 1 ao mesmo tempo que mantém seu uso fácil.

### Qual a diferença entre grupos verificados e as conversas 1:1 entre contatos verificados?

- 1:1 chats with a verified contact and verified groups are not the same, even
  if there are only 2 people in the verified group. One difference is that you
  could easily add more people to the group, but there are other implications as
  well.

- Verified groups are invariably secured. Any breakage (cleartext or wrongly
  signed messages etc.) will be flagged and such messages will not be shown in
  this chat. You can trust all messages in this verified-checkmark chat to have
  not been read/altered by middle parties.

- 1:1 chats are opportunistic, it is meant to allow people to communicate no
  matter if they change e-mail clients, devices, setups etc. That's why there
  is no verification checkmark, even if you have verified the contact.


### Does Delta Chat support Perfect Forward Secrecy?

- No, OpenPGP doesn't support Perfect Forward Secrecy. Perfect Forward Secrecy
  works session-oriented, but E-Mail is asynchronous by nature
  and often used from multiple devices independently. This means that if your
  Delta Chat private key is leaked, and someone has a record
  of all your in-transit messages, they will be able to read them.  

- Note that if anyone has seized or hacked your running phone, they will
  typically be able to read all messages, no matter if Perfect Forward Secrecy
  is in place or not. Having access to a single device from a member of a group,
  will typically expose a lot of the social graph. Using e-mail addresses that
  are not easily tracked back to persons helps group members to stay safer from
  the effects of device seizure. 

- We are sketching ways to protect communications better against the event
  of device seizure. 


### How does Delta Chat protect my Metadata?

- As Delta Chat is a decentralized messenger, the metadata of Delta Chat users
  are not stored on a single central server. However, they are stored on the mail
  servers of the sender and the recipient of a message.

- Each mail server currently knows about who sent and who received a message by 
  inspecting the unencrypted To/Cc headers and thus determine which e-mail addresses
  are part of a group. Delta Chat itself could avoid unencrypted To/Cc headers quite 
  and always put them only into the encrypted section. See 
  [Avoid sending To/CC headers for verified groups](https://github.com/deltachat/deltachat-core-rust/issues/1032). 
  For opportunistic chats the main concern is how it affects other mail apps who 
  might participate in chats. 

- Many other e-mail headers, in particular the "Subject" header, are
  end-to-end-encryption protected, see also this upcoming [IETF
  RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Can I reuse my existing private key?

- Yes. The best way is to send an Autocrypt Setup Message from the other e-mail client. Look for something like **Start Autocrypt Setup Transfer** in the settings of the other client and follow the instructions shown there.

- Alternatively, you can import the key manually in "Settings" or "Advanced settings" and then "Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Se você não tiver uma chave ou nem mesmo sabe do que isso se trata - não se preocupe: o Delta Chat fará tudo automaticamente para você.


### I can't import my existing PGP key into Delta Chat.

The most likely cause is that your key is encrypted and/or uses
a password. Such keys are not supported by Delta Chat.  You could remove the
passphrase encryption and the password and try the import again.  If you want
to keep your passphrase you'll have to create an e-mail alias for use
with Delta Chat such that Delta Chat's key is tied to this e-mail alias.

Delta Chat supports common OpenPGP private key formats, however, it
is unlikely that private keys from all sources will be fully supported. This
is not the main goal of Delta Chat. In fact, the majority of new users 
will not have any key prior to using Delta Chat.
We do, however, try to support private keys from as many sources as possible. 

Removing the password from the private key will depend on the
software you use to manage your PGP keys. With Enigmail, you can set your
password to an empty value in the Key Management window. With GnuPG you can set
it [via the command
line](https://github.com/deltachat/deltachat-android/issues/98#issuecomment-378383429).
For other programs, you should be able to find a solution online.


### Why don't you use pEp (pretty easy privacy)?

- Delta Chat uses the Autocrypt e2e-encryption standard. For
  a discussion of Autocrypt and pEp, see the [Autocrypt
  FAQ](https://autocrypt.org/faq.html#how-does-autocrypt-differ-from-pep).


## Multi-client {#multiclient}

### Can I use Delta Chat on multiple devices at the same time?

If you want to use the **same account** on different devices, you should export
a backup from the old device, and import it into the new device:

- On the old device, go to "Settings" or "Settings / Chats and media" and then to "Backup". Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.
- On the new device, on the login screen, instead of logging into your email
  account, choose "Import Backup". After import, your conversations, encryption
  keys, and media should be copied to the new device.
- You are now synchronized, and can use both devices for sending and receiving
  E2E-encrypted messages with your communication partners. 

### Are there any plans for introducing a Delta Chat Web Client?

- There are no immediate plans but some preliminary thoughts.
- There are 2-3 avenues for introducing a Delta Chat Web Client, but all are
  significant work. For now, we focus on getting stable releases into all
  app stores (Google Play/iOS/Windows/macOS/Linux repositories) as native apps.
- If you need a Web Client, because you are not allowed to install software on
  the computer you work with, you can use the portable Windows Desktop Client,
  or the AppImage for Linux. You can find them on
  [get.delta.chat](https://get.delta.chat).


### Why can I choose not to watch the Inbox?

This is an experimental setting for some people who are experimenting with
server-side rules. Not all providers support this, but with some you can move
all mails with a "Chat-Version" header to the DeltaChat folder. Normally, this
would be done by the Delta Chat app.

Watching the Inbox makes sense to turn off, if you have both:

- enabled a server-side rule to move all messages with Chat-Version header to the DeltaChat folder, and
- have set the "Show classic emails" setting to "no, chats only".

In this case, Delta Chat doesn't need to watch the Inbox.

### What is the "Send Copy to Self" setting good for?

Sending a copy of your messages to yourself ensures that you receive your own
messages on all devices. If you have multiple devices and don't turn it on, you
see only the messages from other people, and the messages you send from the
current device. 

The copy is sent to the Inbox, and then moved to the DeltaChat folder; it's not
put into the "Sent" folder. Delta Chat *never* uploads anything to the Sent
folder because this would mean uploading a message twice (once through SMTP,
and once through IMAP to Sent folder).

The default setting for copy-to-self is "no".

### Why can I choose to watch the "Sent" folder?

The only reason one wants to watch the Sent folder is if you are using another
mail program (like Thunderbird) next to your Delta Chat app, and want your MUA
to participate in chat conversations.

However, we recommend using the Delta Chat Desktop Client; you can download it
on [get.delta.chat](https://get.delta.chat). The option to watch the "Sent"
folder might go away in the future. It was introduced at a time where there was
no Delta Chat Desktop client available on all platforms. 

### Why can I choose not to watch the DeltaChat folder?

Some people use Delta Chat as a regular email client, and want to use the Inbox
folder for their mail, instead of the DeltaChat folder. If you disable "Watch
DeltaChat folder", you should also disable "move chat messages to DeltaChat".
Otherwise, deleting messages or multi-device setups might not work properly.

## Miscellaneous

### Does Delta Chat work with _my_ e-mail-provider?

- With a rather good chance: Yes :)  
  However, some providers need special options to work properly,
  see [Provider Overview](https://providers.delta.chat)


### If Delta Chat uses E-Mail, is it really an _Instant_ Messenger?

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


### Is Delta Chat compatible with Protonmail / Tutanota / Criptext?

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


### I'm interested in the technical details. Can you tell me more?

- See [Standards used in Delta Chat]({% include standards-url %}).

### How are Delta Chat developments funded? 

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

- For 2021/2022 we are receiving *Internet Freedom* funding (~500K USD) from the
  U.S. Bureau of Democracy, Human Rights and Labor (DRL). 
  This funding supports our long-running goals to make Delta Chat more usable 
  and compatible with a wide range of e-mail servers world-wide, and more resilient and secure
  in places often affected by internet censorship and shutdowns.

- Sometimes we receive one-time donations from private individuals for
  which we are grateful. For example, in 2021 a generous individual bank-wired us 4K EUR 
  with the subject "keep up the good developments!". We use such money to fund
  development gatherings or to care for ad-hoc expenses that can not easily be predicted
  for or reimbursed from public funding grants. 

- Last but by far not least, several pro-bono experts and enthusiasts contributed 
  and contribute to Delta Chat developments without receiving money, or only 
  small amounts. Without them, Delta Chat would not be where it is today, not
  even close. 

The monetary funding mentioned above is mostly organized by merlinux GmbH in
Freiburg (Germany), and is distributed to more than a dozen contributors world-wide. 

Funding for second half of 2022 and especially for 2023 is an ongoing issue of concern. Apart from applying for more public funding we want to become more independent from government-related funding sources. Please see [Delta Chat Contribution channels](https://delta.chat/en/contribute) for both monetary and development related support possibilities. 
