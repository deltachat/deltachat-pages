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

You may also wish to learn [how to add accounts to multiple devices](#can-i-use-delta-chat-on-multiple-devices-at-the-same-time).

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
    [private app](#private-apps--webxdc).
- So this is not a real time online status - and if someone doesn't answer
  right away even though they seem to be online, don't worry and give them some
  space ;-)
- On the other hand, others will not always "see that you are online". If you
  have turned off read receipts, they will not see the green dot until you
  message them or write to a group they're in as well.


## Grupos

### Criação de um grupo

- Selecione **Nova Conversa** e em seguida **Novo Grupo** no menu que fica na parte de cima da tela, no canto direito, ou clique no botão correspondente no ANdroid/iOS.
- Na tela seguinte, selecione **os membros do grupo** e defina o **nome do grupo**. Você também pode selecionar o **avatar do grupo** (uma imagem).
- Logo após você escrever a **primeira mensagem**, todas as pessoas do grupo serão informadas sobre o novo grupo e poderão responder no grupo (a não que você escreva uma mensagem ali, o grupo estará invisível para os membros).


### Adicionar membros a um grupo

- Todos os membros do grupo têm os **mesmos poderes**. Assim, todos podem deletar e/ou incluir novos membros ao grupo.
- Para adicionar ou deletar membros, clique no nome do grupo no chat.


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

- By default, Delta Chat stores all messages locally on your device. If you
  e.g. want to save storage space at your mail provider, you can choose to
  delete old messages automatically. They still remain on your device until you
  delete them there, too.
- To turn it on, go to "delete old messages from server" in the "Chats & Media"
  settings. You can set a timeframe between "at once" and "after a year"; this
  way, *all* e-mails will be deleted from the server after that timeframe. 
- Note that if you use Delta Chat on more than one device, you should leave the
  messages on the server, until the other device could download them, too. In
  this case, you should set auto-delete to "after a day" or something similar,
  depending on how often you turn on the other device.


### What happens if I turn on "Delete old messages from device"?

- If you want to save storage on your device, you can choose to delete old
  messages automatically. 
- To turn it on, go to "delete old messages from device" in the "Chats & Media"
  settings. You can set a timeframe between "after an hour" and "after a year";
  this way, *all* messages will be deleted from your device as soon as they are
  older than that.


## Encryption

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


### How can I ensure message encryption and deletion?

The best way to ensure every message is encrypted,
and metadata deleted as quickly as possible
is creating a verified group and turning on
self-destructing messages.

Verified groups are always encrypted and protected against [MITM
attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

Metadata can't be encrypted, as the server needs to know where to deliver your
messages. But turning on "self-destructing messages" deletes the messages on
the server after they were delivered.

If you need the messages on your device, but not on the server, you can also
agree in the group to turn on ["delete messages from server
automatically"](#what-happens-if-i-turn-on-delete-old-messages-from-server).

If you want to protect a 1:1 conversation like this, you should create a
verified group with only 2 people. If the other person loses their device but
not their account, you can still communicate in the 1:1 chat. ([Read more](#what-is-the-difference-between-verified-groups-and-11-chats-with-verified-contacts))


### Quais são os padrões usados na criptografia de ponta a ponta?

- O [Autocrypt](https://autocrypt.org) é usado para estabelecer a criptografia de ponta a ponta com outro Delta Chat e outros aplicativos de email que suportam Autocrypt. O Autocrypt usa um subconjunto limitado de funcionalidades do OpenPGP.

- O Delta Chat implementa [protocolos de configuração de contatos e grupos verificados contra ataques Man in the Middle](https://countermitm.readthedocs.io/en/latest/new.html) para proteger as conversas contra ataques ativos na rede. Isso vai além da proteção oportunística básica do Autocrypt Nível 1 ao mesmo tempo que mantém seu uso fácil.

### Qual a diferença entre grupos verificados e as conversas 1:1 entre contatos verificados?

- 1:1 conversas com um contato verificado e grupos verificados não são iguais, mesmo
se tiver apenas 2 pessoas no grupo verificado. Uma diferença é que você
poderia facilmente adicionar mais pessoas ao grupo, mas há outras implicações também.

- Os grupos verificados são invariavelmente assegurados. Qualquer quebra (texto limpo ou mensagens assinadas erroneamente etc.) sera sinalizado e tais mensagens não serão mostradas em
este chat. Você pode confiar que todas as mensagens neste chat verificada
não foram lido/alterado por intermediárias.

- 1:1 chats são oportunistas, para permitir que as pessoas se comuniquem não
importa se eles mudam os clientes de e-mail, dispositivos, configurações, etc. É por isso que não há
uma marca de verificação, mesmo que você tenha verificado o contato.


### O Delta Chat apóia o Sigilo Encaminhado Perfeito?

- Não, o OpenPGP não suporta sigilo encaminhado perfeito. Perfect Forward Secrecy
funciona orientado em sessões, mas o E-Mail é assíncrono por natureza
e com frequencia usado de múltiplos dispositivos de forma independente. Isso significa que se a sua
chave privada do Delta Chat está vazada, e alguém tem um registro
de todas as suas mensagens em trânsito, eles poderão lê-las.

- Note que, se alguém apreendeu ou invadiu seu telefone em funcionamento, eles irão
tipicamente ser capaz de ler todas as mensagens, não importa se o Perfect Forward Secrecy
está ativado ou não. Ter acesso a um único dispositivo a partir de um membro de um grupo
normalmente exporá muito do gráfico social. Usando endereços de e-mail que
não são facilmente rastreados de volta às pessoas pode ajudar os membros do grupo a se manterem mais seguros 
dos efeitos da apreensão do dispositivo.

- Estamos esboçando maneiras de proteger melhor as comunicações contra
a apreensão de dispositivos.


### Como o Delta Chat protege meus metadados?

- Como o Delta Chat é um mensageiro descentralizado, os metadados dos usuários do Delta Chat
não são armazenados em um único servidor central. Entretanto, elas são armazenadas no servidores de correio
do remetente e do destinatário de uma mensagem.

- Cada servidor de e-mail sabe atualmente quem enviou e quem recebeu uma mensagem por
inspeção dos Para/CC cabeçalhos não criptografados e assim pode determinar quais endereços de e-mail
fazem parte de um grupo. O Delta Chat poderia evitar bastante cabeçalhos não criptografados Para/CC
e sempre colocar-los apenas na seção criptografada. Ver
[Evite enviar Para/CC cabeçalhos para grupos verificados](https://github.com/deltachat/deltachat-core-rust/issues/1032).
Para conversas oportunistas, a preocupação principal é como isso afeta outras aplicações de correio que
podem participar em conversas.

- Muitos outros cabeçalhos de e-mail, em particular o cabeçalho "Assunto", são
protegidos de ponta a ponta, veja também ese próximo [IETF
RFC](https://datatracker.ietf.org/doc/draft-autocrypt-lamps-protected-headers/).


### Posso reutilizar minha chave privada existente?

- Sim. A melhor maneira é de enviar uma Mensagem de Configuração de Autocrypt do outro cliente de e-mail. Procure algo como **Inicie a Transferência de Configuração de Autocrypt** nas preferências do outro cliente e siga as instruções mostradas ali.

- Alternatively, you can import the key manually in "Settings -> Advanced settings -> Import secret keys". Caution: Make sure the key is not protected by a password, or remove the password beforehand.

Se você não tiver uma chave ou nem mesmo sabe do que isso se trata - não se preocupe: o Delta Chat fará tudo automaticamente para você.


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
pasta para seus correios, em vez da pasta DeltaChat. Se você desativar o "Observar
pasta DeltaChat", você também deve desativar "mover mensagens de conversa para DeltaChat".
Caso contrário, apagar mensagens ou configurações de vários dispositivos pode não funcionar corretamente.


## Private Apps / webxdc

In Delta Chat, you can share "private apps", attachments with an `.xdc` file
extension. They can do very different things, and make Delta Chat a truly
extendable messenger. The technical term is [webxdc](https://webxdc.org).


### How private are private apps?

- Private apps can not send data to the Internet, or download anything.
- A private app can only exchange data within a Delta Chat chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.
- The privacy a private app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the private app as well.
- This also means: it can be a privacy risk to open private apps in chats where
  you don't trust the members - as you know it from e-mail attachments, where 
  you only open attachments from senders you trust, and not from spammers.


### Where can I get private apps?

- In general, there is no curated appstore and Delta Chat is not responsible
  for private apps or their content. Anyone can share private apps with each
  other without restrictions.
- You can find some example apps on [webxdc.org](https://webxdc.org).
- Many people write their own private apps and post them to [the Delta Chat
  forum](https://support.delta.chat/c/webxdc/20).


### How can I create my own private apps?

- Private apps are just zip files containing html, css, and javascript code.
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


### O que é um grupo verificado? Por que isso é experimental?

- Um grupo verificado é uma conversa que garante a segurança contra um atacante ativo. Todas as mensagens numa conversa verificada são criptografadas de ponta a ponta e os membros podem se juntar a ela escaneando um "convite de código QR". Todos os membros estarão então conectados uns aos outros  através de uma cadeia de convites, o que garante uma consistência criptográfica contra ataques ativos da rede ou do provedor. Veja [countermitm.readthedocs.io](https://countermitm.readthedocs.io/en/latest/new.html) para a pesquisa que está em andamento sobre essa funcionalidade.

- As of Oct 2022, "verified groups" remain an experimental feature. It is
  continuously improved and many bugs have been fixed since the original
  introduction in 2018. However, there remain cases, especially with large
  groups where inconsistencies can occur, or messages become unreadable.


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
  blogpost](2023-01-26-upcoming-mail-server-workshops).
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

### Was Delta Chat independently audited for security vulnerabilities?

The Delta Chat project underwent three independent security audits in the last
years:

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
  You can read more about the audit [on our blog](2023-03-23-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

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

Please see [Delta Chat Contribution channels](https://delta.chat/en/contribute) 
for both monetary and and other contribution possibilities.  
