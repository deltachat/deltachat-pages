---
title: FAQ
lang: pt_BR
render_toc: true
header: Perguntas Frequentes
---


## O que é o Delta Chat

Delta Chat é um aplicativo de mensagens instantâneas confiável, descentralizado e seguro,
disponível para desktop e plataformas móveis.

- Criação instantânea de **contas de chat privadas**
  com [relays chatmail](https://chatmail.at/relays) seguros e interoperáveis 
  que oferecem entrega de mensagens instantâneas e Notificações Push para dispositivos iOS e Android.

- Suporte a [várias contas](#multiple-accounts) e
  a [vários dispositivos](#multicliente) em todas as plataformas
  e entre diferentes [aplicativos de chatmail](https://chatmail.at/clients).

- [Aplicativos interativos embutidos](#webxdc) para jogos e colaboração

- [Criptografia de ponta a ponta auditada](#security-audits)
  segura contra ataques à rede e ao servidor.

- Software gratuito e de código aberto, tanto no aplicativo quanto no servidor,
  desenvolvido com base nos [Padrões da Internet]({% include standards-url %}).


### Como posso encontrar pessoas para conversar? {#howtoe2ee}

Primeiro, observe que o Delta Chat é um mensageiro privado.
Não há descoberta pública, _você_ decide sobre seus contatos.

- Se você estiver **cara a cara** com seu amigo ou parente,
  toque no ícone de **QR Code** <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" />
  na tela principal.  
  Peça ao seu parceiro para **escanear** o QR code
  com o aplicativo Delta Chat dele.

- Para criar um contato **remotamente**,
  na mesma tela,
  clique em "Copiar" ou "Compartilhar" e envie o **link do convite**
  por meio de outro mensageiro privado.

Agora, aguarde enquanto a conexão se estabelece.

- Se ambos os lados estiverem on-line, vocês logo verão um chat
  e poderão começar a enviar mensagens com segurança.

- Se um lado estiver off-line ou em uma rede ruim,
  a capacidade de acessar o chat será atrasada até que a conectividade seja restaurada.

Parabéns!
Agora você usará automaticamente a [criptografia de ponta a ponta](#e2ee) com esse contato.
Se vocês se adicionarem a [grupos](#groups), a criptografia de ponta a ponta será estabelecida entre todos os membros.


### Por que um chat está marcado como "Solicitação"?

Por ser um mensageiro privado,
somente amigos e familiares com quem você [compartilha seu QR code ou link de convite](#howtoe2ee) podem escrever para você.

Seus amigos podem compartilhar seu contato com outros amigos,
isso aparece como <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Solicitação</b>

- Você precisa **aceitar** a solicitação antes de poder responder.

- Você também pode **excluir** a solicitação se não quiser conversar com a pessoa por enquanto.

- Se você excluir uma solicitação, as mensagens futuras desse contato ainda aparecerão
  como solicitação de mensagem, assim você pode mudar de ideia. Se você realmente não quiser
  receber mensagens dessa pessoa, considere **bloqueá-la**.


### Como posso colocar dois dos meus amigos em contato um com o outro?

Anexe o primeiro contato ao chat do segundo clicando em <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Botão de Anexo → Contato**.
Você também pode adicionar uma pequena mensagem de apresentação.

O segundo contato receberá um **cartão**
e poderá tocar nele para começar a conversar com o primeiro contato.


### Dá para mandar imagens, vídeos e outros anexos pelo Delta Chat?

Sim. Imagens, vídeos, arquivos, mensagens de voz etc. podem ser enviados usando os botões de<img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Anexo-**
ou <img style="vertical-align:middle; width:0.8em; margin:1px" src="../assets/help/mic.png" alt="Microphone"/> **Mensagem de Voz**

Para fins de desempenho, as imagens são otimizadas e enviadas em um tamanho menor por padrão, mas você pode enviá-las como um "arquivo" para preservar o original.


### O que são contas? Como posso alternar entre elas? {#multiple-accounts}

Uma conta é **um nome, uma foto** e algumas informações adicionais para criptografar mensagens.
Uma conta reside apenas em seu(s) dispositivo(s)
e usa o servidor somente para transportar mensagens.

Na primeira instalação do Delta Chat, uma primeira conta é criada.

Depois, você pode tocar em sua imagem de perfil no canto superior esquerdo para **Adicionar Conta**
ou para **Mudar de Conta**.

Talvez você queira usar perfis separados para atividades políticas, familiares ou atividades do trabalho.

Talvez você também queira aprender [como usar a mesma conta em vários dispositivos](#multiclient).


### Quem consegue ver a imagem do meu perfil?

Você pode adicionar uma imagem de perfil nas suas configurações. Se você escrever aos seus contatos ou adicioná-los via código QR, eles automaticamente verão a imagem do seu perfil.

Por motivos de privacidade, ninguém pode ver a imagem do seu ṕerfil até que você escreva para as pessoas.


### Posso definir uma Bio/Assinatura com o Delta Chat? {#signature}

Sim,
você pode fazer isso em **Configurações → Conta → Assinatura**.
Depois de enviar uma mensagem para um contato,
ele verá sua assinatura quando visualizar seus detalhes de contato.


### O que significa Fixar, Silenciar e Arquivar?

Use essas ferramentas para organizar seus chats e manter tudo em seu devido lugar:

- Os **chats fixados** sempre ficam no topo da lista de conversas. Você pode usá-los para acessar seus chats mais queridos rapidamente ou temporariamente para não se esquecer de nada.

- **Silencie os chats** se não quiser receber notificações deles. Os bate-papos silenciados permanecem no lugar e você também pode fixar um chat silenciado.

- **Arquive chats** se não quiser mais vê-los em sua lista de conversas.
  Eles permanecem acessíveis acima da lista conversa ou por meio de pesquisa
  e são marcados como <b style="border: 1px solid currentColor; padding: 0 3px; font-size:90%">Arquivado</b>

- Quando um chat arquivado receber uma nova mensagem, a menos que esteja silenciado, ele **sairá do arquivo** e voltará à sua lista de conversas.
  **Os chats silenciados permanecem arquivados** até que você os desarquive manualmente.

Para usar as funções, toque e segure ou clique com o botão direito do mouse em um conversa na lista de conversas.


### Como funcionam as "Mensagens salvas"? {#save}

**Mensagens Salvas** é um chat que você pode usar para lembrar e localizar facilmente as mensagens.

- Em qualquer chat, dê um toque longo ou clique com o botão direito do mouse em uma mensagem e selecione **Salvar**

- As mensagens salvas são marcadas com o símbolo
 <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/saved-icon.png" alt="Saved icon"/>
  ao lado do registro de data e hora

- Depois, abra o chat de "Mensagens salvas" - e você verá as mensagens salvas lá.
  Ao tocar em <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/go-to-original.png" alt="Arrow-right icon"/>,
  você pode voltar para a mensagem original no chat original

- Por fim, você também pode usar "Mensagens Salvas" para fazer **notas pessoais** - abra o chat, digite algo, adicione uma foto ou uma mensagem de voz etc.

- Como as "Mensagens salvas" são sincronizadas, elas podem se tornar muito úteis para a transferência de dados entre dispositivos

As mensagens permanecem salvas mesmo que sejam editadas ou excluídas -
seja pelo [remetente](#edit), por [limpeza do dispositivo](#delold) ou por [mensagens temporárias de outros chats](#ephemeralmsgs).


### O que significa o ponto verde?

Às vezes, você pode ver um **ponto verde** <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/green-dot.png" alt=""/>
ao lado do avatar de um contato.
Isso significa que ele foi **visto recentemente por você** nos últimos 10 minutos,
por exemplo, porque ele enviou uma mensagem para você ou uma confirmação de leitura.

Portanto, essa não é uma checagem de status on-line em tempo real
e outras pessoas também nem sempre verão que você está "on-line".


### O que significam os tiques mostrados ao lado das mensagens de saída?

- **Um tique** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick1.png" alt=""/>
  significa que a mensagem foi enviada com sucesso para o [servidor](#relays).

- **Dois ticks** <img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/tick2.png" alt=""/>
  indicam que seu contato leu a mensagem.

Em [grupos](#groups), o segundo tique significa que pelo menos um membro leu a mensagem.

Você só receberá o segundo tique se tanto você quanto um dos destinatários que leu a mensagem
tiverem **Configurações → Conversas → Confirmação de leitura** ativada.


### Corrigir erros de digitação e excluir mensagens após o envio {#edit}

- Você pode editar o texto de suas mensagens após o envio.
  Para isso, toque longamente ou clique com o botão direito do mouse na mensagem e selecione **Editar Mensagem**
  ou <img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/edit-icon.png" alt="Edit icon"/>.

- Se você tiver enviado uma mensagem acidentalmente,
  no mesmo menu, selecione **Apagar** e, em seguida, **Apagar para Toda a Gente**.

Enquanto as mensagens editadas terão a palavra "Editado" ao lado do registro de data e hora,
as mensagens excluídas serão removidas sem um marcador no chat.
Não são enviadas notificações e não há limite de tempo.

Observe que a mensagem original ainda pode ser recebida pelos membros do conversa 
que podem ter respondido, encaminhado, salvo, capturado a tela ou copiado a mensagem antes da alteração dela.


### Como funcionam as mensagens efêmeras? {#ephemeralmsgs}

Você pode ativar a opção "mensagens temporárias"
nas configurações de um conversa,
no canto superior direito da janela conversa,
selecionando um intervalo de tempo
entre 5 minutos e 1 ano.

Até que a configuração seja desativada novamente,
o aplicativo Delta Chat de cada membro da conversa se encarrega de
de excluir as mensagens
após o período de tempo selecionado.
O intervalo de tempo começa
quando o destinatário vê a mensagem pela primeira vez no Delta Chat.
As mensagens são excluídas tanto
nos servidores
como nos próprios aplicativos.

Observe que você pode confiar no desaparecimento das mensagens
somente se você confiar em seus parceiros de conversa;
parceiros mal-intencionados de conversa podem tirar fotos,
ou salvar, copiar ou encaminhar mensagens antes de excluí-las.

Além disso,
se um parceiro de conversa desinstalar o Delta Chat,
as mensagens (criptografadas) podem demorar mais para serem excluídas do servidor deles.


### O que acontece se eu ativar a opção "Apagar mensagens do dispositivo"? {#delold}

Se quiser economizar espaço de armazenamento no dispositivo, você pode optar por excluir mensagens antigas automaticamente.

Para ativá-la, vá para **Configurações → Conversas → Apagar mensagens do dispositivo**.
Você pode definir um período de tempo entre "após uma hora" e "após um ano";
Dessa forma, *todas* as mensagens serão excluídas de seu dispositivo assim que forem
mais antigas do que isso.


### Como posso excluir minha conta? {#remove-account} 

Se estiver usando mais de uma conta,
você pode removê-las individualmente no menu superior de mudar de conta (no Android e no iOS),
ou na barra lateral com um clique no botão direito do mouse (no aplicativo para desktop).
As contas são removidas somente no dispositivo em que a exclusão foi acionada. 
Contas em outros dispositivos continuarão funcionando plenamente. 

Se você usar uma conta única padrão, poderá simplesmente desinstalar o aplicativo.
Isso ainda acionará automaticamente a exclusão de todos os dados de endereço associados no servidor de chatmail.
Para obter mais informações, consulte [nine.testrun.org address-deletion](https://nine.testrun.org/info.html#account-deletion) 
ou a respectiva página do [servidor de chatmail de terceiros](https://chatmail.at/relays) que você escolheu.


## Grupos {#grupos}

Os grupos permitem que várias pessoas conversem em particular com **direitos iguais**.

Qualquer pessoa pode
alterar o nome do grupo ou o avatar,
[adicionar ou remover membros](#addmembers),
definir [mensagens temporárias](#ephemeralmsgs),
e [excluir suas próprias mensagens](#edit) dos dispositivos de todos os membros.

Como todos os membros têm os mesmos direitos, os grupos funcionam melhor entre **amigos e familiares de confiança**.


### Criação de um grupo

- Selecione **Nova Conversa** e em seguida **Novo Grupo** no menu que fica na parte de cima da tela, no canto direito, ou clique no botão correspondente no Android/iOS.

- Na tela seguinte, selecione **os membros do grupo** e defina o **nome do grupo**. Você também pode selecionar o **avatar do grupo**.

- Logo após você escrever a **primeira mensagem**, todas as pessoas do grupo serão informadas sobre o novo grupo e poderão responder no grupo (a não ser que você escreva uma mensagem, o grupo estará invisível para os membros).


### Adicionar e remover membros {#addmembers}

Todos os membros do grupo têm os **mesmos direitos**.
Por este motivo, todos podem remover qualquer membro ou adicionar novos membros.

- Para **adicionar ou remover membros**, toque no nome do grupo dentro do chat e selecione o membro a adicionar ou a remover.

- Se o membro ainda não estiver na sua lista de contactos, mas estiver **cara a cara** com você,
  na mesma tela, moste um **QR code**.  
  Peça ao seu parceiro de conversa para **escanear** o QR code com o Delta Chat dele, tocando em
  <img style="vertical-align:middle; height:1.3em; margin:1px" src="../assets/help/qr-icon.png" /> na tela inicial.

- Para adicionar um membro **remotamente**,
  clique em "Copiar" ou "Compartilhar" e envie o link do **convite**
  por meio de outro mensageiro privado para o novo membro.

O QR code e o link de convite podem ser usados para adicionar vários membros.
No entanto, como os grupos são [destinados a pessoas de confiança](#grupos), evite compartilhá-los publicamente.


### Deletei minha própria conta por acidente.

Já que você não é mais um membro do grupo, não tem como se adicionar novamente. Entretanto, não tem problema, é só pedir para outra pessoa do grupo, através de um chat normal, adicionar você.


### Não quero mais receber as mensagens de um grupo.

- Ou você se exclui do grupo ou apaga a conversa inteira do grupo.
Se você quiser entrar mais tarde no grupo novamente, peça a outra pessoa do grupo para adicioná-la novamente.

Uma alternativa é "silenciar" um grupo. Fazendo isso, você receberá todas as mensagens e ainda poderá escrever, mas não será receberá mais notificações d enovas mensagens.

### Clonagem de grupos

Você pode duplicar um grupo para iniciar uma discussão separada
ou para excluir membros sem que eles percebam.

- Abra o perfil do grupo e toque em **Clonar conversa** (Android/iOS),
 ou clique com o botão direito do mouse no grupo na lista de conversa (desktop).

- Defina um novo nome, escolha um avatar e ajuste a lista de membros, se necessário.

O novo grupo é **totalmente independente** do original,
que continua funcionando como antes.


### Quantos membros podem participar em um único grupo?

Não há um limite técnico rigoroso,
mas não é recomendável mais de 150.

À medida que os grupos se tornam maiores, eles podem se tornar socialmente instáveis e podem precisar de uma hierarquia -
mas o Delta Chat é um mensageiro privado para conversar com [direitos iguais](#grupos).
Consulte o [Número de Dunbar](https://pt.wikipedia.org/wiki/N%C3%BAmero_de_Dunbar) para obter mais informações.


## Aplicativos embutidos {#webxdc}

Você pode enviar aplicativos para um chat - jogos, editores, enquetes e outras ferramentas.
Isso torna o Delta Chat um mensageiro realmente extensível.


### Onde posso obter aplicativos embutidos?

- In a chat, using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → Apps**

- You can also [create your own app](#create-xdc) and attach it using <img style="vertical-align:middle; width:1.0em; margin:1px" src="../assets/help/paperclip.png" alt="Paperclip"/> **Attachment Button → File**


### How private are in-chat apps?

- In-chat apps can not send data to the Internet, or download anything.

- An in-chat app can only exchange data within a chat, with its
  copies on the devices of your chat partners. Other than that, it's completely
  isolated from the Internet.

- The privacy an in-chat app offers is the privacy of your chat - as long as you
  trust the people you chat with, you can trust the in-chat app as well.

- This also means: Just like for web links, do not open apps from untrusted contacts.


### How can I create my own in-chat apps? {#create-xdc}

- In-chat apps are zip files with `.xdc` extension containing html, css, and javascript code.

- You can extend the [Hello World example app](https://github.com/webxdc/hello)
  to get started.

- All else you need to know is written in the
  [Webxdc documentation](https://webxdc.org/docs).

- If you have question, you can ask others with experience
  in the [Delta Chat Forum](https://support.delta.chat/c/webxdc/20).


## Instant message delivery and Push Notifications {#instant-delivery}

### What are Push Notifications? How can I get instant message delivery?

Push Notifications are sent by Apple and Google "Push services" to a user's device
so that an inactive Delta Chat app can fetch messages in the background
and show notifications on a user's phone if needed.

Push Notifications work with all [chatmail](https://delta.chat/chatmail) servers on

- iOS devices, by integrating with Apple Push services.

- Android devices, by integrating with the Google FCM Push service,
  including on devices that use [microG](https://microg.org)
  instead of proprietary Google code on the phone.


### Are Push Notifications enabled on iOS devices? Is there an alternative?

Yes, Delta Chat automatically uses Push Notifications for [chatmail](https://delta.chat/chatmail) profiles.
And no, there is no alternative on Apple's phones to achieve instant message delivery
because Apple devices do not allow Delta Chat to fetch data in the background.
Push notifications are automatically activated for iOS users because
[Delta Chat's privacy-preserving Push Notification system](#privacy-notifications)
does not expose data to Apple that it doesn't already have.


### Are Push notifications enabled / needed on Android devices? {#android-push}

If a "Push Service" is available, Delta Chat enables Push Notifications
to achieve instant message delivery for all chatmail users.

In the Delta Chat "Notifications" settings for "Instant delivery"
you can change the following settings effecting all chat profiles:

- Use Background Connection: If you are not using a Push service,
  you may disable "battery optimizations" for Delta Chat,
  allowing it to fetch messages in the background.
  However, there could be delays from minutes to hours.
  Some Android vendors even restrict apps completely
  (see [dontkillmyapp.com](https://dontkillmyapp.com))
  and Delta Chat might not show  incoming messages
  until you manually open the app again.
  
- Force Background Connection: This is the fallback option
  if the previous options are not available or do not achieve "instant delivery".
  Enabling it causes a permanent notification on your phone
  which may sometimes be "minified" with recent Android phones.

Both "Background Connection" options are energy-efficient and
safe to try if you experience messages arrive only with long delays.


### How private are Delta Chat Push Notifications? {#privacy-notifications}

Delta Chat Push Notification support avoids leakage of private information.
It does not leak profile data, IP address or message content (not even encrypted)
to any system involved in the delivery of Push Notifications.

Here is how Delta Chat apps perform Push Notification delivery:

- A Delta Chat app obtains a "device token" locally, encrypts it and stores it
  on the [chatmail](https://delta.chat/chatmail) server.

- When a [chatmail](https://delta.chat/chatmail) server receives a message for a Delta Chat user
  it forwards the encrypted device token to the central Delta Chat notification proxy.

- The central Delta Chat notification proxy decrypts the device token
  and forwards it to the respective Push service (Apple, Google, etc.),
  without ever knowing the IP or profile data of Delta Chat users.

- The central Push Service (Apple, Google, etc.)
  wakes up the Delta Chat app on your device
  to check for new messages in the background.
  It does not know about the profile data of the device it wakes up.
  The central Apple/Google Push services never see any profile data (sender or receiver)
  and also never see any message content (also not in encrypted forms).


The central Delta Chat notification proxy [is small and fully implemented in Rust](https://github.com/deltachat/notifiers)
and forgets about device-tokens as soon as Apple/Google/etc processed them,
usually in a matter of milliseconds.

Note that the device token is encrypted between apps and notification proxy
but it is not signed. 
The notification proxy thus never sees profile data, IP-addresses or
any cryptographic identity information associated with a user's device (token). 

Resulting from this overall privacy design, even the seizure of a chatmail server,
or the full seizure of the central Delta Chat notification proxy
would not reveal private information that Push services do not already have.


### Why does Delta Chat integrate with centralized proprietary Apple/Google push services?

Delta Chat is a free and open source decentralized messenger with free server choice,
but we want users to reliably experience "instant delivery" of messages,
like they experience from WhatsApp, Signal or Telegram apps,
without asking questions up-front that are more suited to expert users or developers.

Note that Delta Chat has a [small and privacy-preserving Push Notification system](#privacy-notifications)
that achieves "instant delivery" of messages for all chatmail servers
including a potential one [you might setup yourself without our permission](https://delta.chat/chatmail#selfhosted).
Welcome to the power of the interoperable chatmail relay network :)



## Multi-cliente {#multiclient}

### Posso usar o Delta Chat em vários dispositivos ao mesmo tempo?

Sim. You can use the same profile on different devices:

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

- On **Windows**, go to "Control Panel / Network and Internet"
  and make sure, **Private Network** is selected as "Network profile type"
  (after transfer, you can change back to the original value)

- On **iOS**, make sure "System Settings / Apps / Delta Chat / **Local Network**" access is granted

- On **macOS**, enable "System Settings / Privacy & Security / **Local Network** / Delta Chat"

- Your system might have a "personal firewall",
  which is known to cause problems (especially on Windows).
  **Disable the personal firewall** for Delta Chat on both ends and try again

- **Guest Networks** may not allow devices to communicate with each other.
  If possible, use a non-guest network.

- If you still have troubles using the same network,
  try to open **Mobile Hotspot** on one device and join that Wi-Fi from the other one

- Ensure there is **enough storage** on the destination device

- If transfer started, make sure, the devices **stay active** and do not fall asleep.
  Do not exit Delta Chat.
  (we try hard to make the app work in background, but [systems tend to kill apps](https://dontkillmyapp.com), unfortunately)

- Delta Chat is **already logged in** on the destination device?
  You can use multiple profiles per device, just [add another profile](#multiple-accounts)

- If you still have problems or if you **cannot scan a QR code**
  try the **manual transfer** described below


### Manual Transfer {#backup}

This method is only recommended if "Add Second Device" as described above does not work.

- On the old device, go to **Settings → Chats → Export Backup**. Enter your
  screen unlock PIN, pattern, or password. Then you can click on "Start
  Backup". This saves the backup file to your device. Now you have to transfer
  it to the other device somehow.

- On the new device, select **I Already Have a Profile → Restore from Backup**.
  If you use iOS and encounter difficulties,
  [this guide](https://support.delta.chat/t/import-backup-to-ios/1628) might help you.

You are now synchronized, and can use both devices for sending and receiving
end-to-end encrypted messages with your communication partners.


### Existe algum plano para a introdução de um cliente Web para Delta Chat?

- Não há planos imediatos, mas algumas reflexões preliminares.
- Há 2-3 vias para a introdução de um cliente Delta Chat Web, mas todas são
trabalho significativo. Por enquanto, nos concentramos em obter lançamentos estáveis em todos os
app stores (Google Play/iOS/Windows/macOS/Linux repositórios) como aplicativos nativos.
- Se você precisa de um Cliente Web, porque não está autorizado a instalar software em
o computador com o qual você trabalha, você pode usar o Windows Desktop Client portátil,
ou o AppImage para Linux. Você pode encontrá-los em
[get.delta.chat](https://get.delta.chat).


## Advanced

### Experimental Features {#experiments}

At **Settings → Advanced → Experimental Features**
you can try out features we are working on.

The features may be **unstable** and may be **changed or removed**.

You can find more information
and give feedback in the [Forum](https://support.delta.chat).


### What are Relays? {#relays}

Relays are used to temporarily hold messages in case your device is offline.
Relays are cheap and dumb servers,
that do not store data as group states, your name or avatar -
all that exist only on your device.
Relays are operated by different groups and people.

By default, after installation, a relay is **automatically set up**,
so you do not need to care about that.
However, if you want to,
you can configure relays at At **Settings → Advanced → Relays**:

- You can **add** a relay by scanning its QR code;
  <https://chatmail.at/relays> shows some known ones.
  If you have multiple relays, you will receive messages on all of them.

- The **default** defines the one where your chat partners send future messages to.

- If you **remove** a relay,
  make sure another default relay was used for a sufficient amount of time.
  Otherwise, messages from your chat partners won't reach you.
  If in doubt, remove later.

For more details and future possibilities of relays,
you can follow discussions in the [Forum](https://support.delta.chat).


### Can I use a classic email address with Delta Chat?

Yes, but only if the email address is used exclusively by [chatmail clients](https://chatmail.at/clients).

It is not supported to share usage of an email address with non-chatmail apps or web-based mailers,
for the following reasons:

- Non-chatmail apps are largely not accomplishing automatic end-to-end email encryption for their users,
  while chatmail apps and relays pervasively enforce end-to-end encryption and security standards.

- Non-chatmail apps use email servers as a long-term message archive
  while chatmail clients use email servers for ephemeral instant message relay.

- Supporting the full variety of classic email setups
  would require considerable development and maintenance efforts,
  and complicate making chatmail-based messaging more resilient, reliable and fast.

### How can I configure a chat profile with a classic email address as relay? {#classic-email}

First off, **please do not use the same classic email address also from non-chatmail classic email apps**
unless you are prepared to deal with encrypted messages in the inbox,
double notifications, accidentally deleted emails or similar annoyances.

You can configure a email address for chatting at **New Profile → Use Other Server → Use Classic Mail as Relay**.
Note that classic email providers will generally not support [Push Notifications](#instant-delivery)
and have other limitations, see [Provider Overview](https://providers.delta.chat).
Chatmail uses the default INBOX for relay; ensure the provider setup does too. 
A chat profile using a classic email address allows to to send and receive unencrypted messages.
These messages, and the chats they appear in, are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### I want to manage my own server for Delta Chat. What do you recommend?

Any well behaving email server setup will do fine 
except if your users' devices require Google/Apple [Push Notifications](#instant-delivery) to work properly.

We generally recommend to [set up a chatmail relay](https://chatmail.at/doc/relay/getting_started.html). 
[Chatmail](https://chatmail.at) is a community-driven project that encompasses both the setup of relays
and [core Rust developments](https://github.com/chatmail/core) 
that power [chatmail clients](https://chatmail.at/clients) of which Delta Chat is the most well known. 


### What is "Send statistics to Delta Chat's developers"? {#statssending}

We would like to improve Delta Chat with your help,
which is why Delta Chat for Android asks whether you want
to send anonymous usage statistics.

You can turn it on and off at
**Settings → Advanced → Send statistics to Delta Chat's developers**.

When you turn it on,
weekly statistics will be automatically sent to a bot.

We are interested e.g. in statistics like:

- How many contacts are introduced by personally scanning a QR code?

- Which versions of Delta Chat are being used?

- What errors occur for users?

We will _not_ collect any personally identifiable information about you.


### Estou interessado nos detalhes técnicos. Pode me dizer mais?

Veja [As normas usadas no Delta Chat]({% include standards-url %}).



## Encryption and Security {#e2ee}

### Which standards are used for end-to-end encryption? 

Delta Chat uses a [secure subset of the OpenPGP standard](#openpgp-secure)
to provide automatic end-to-end encryption using these protocols: 

- [Secure-Join](https://securejoin.delta.chat/en/latest/new.html)
  to exchange encryption setup information through QR-code scanning or "invite links". 

- [Autocrypt](https://autocrypt.org) is used for automatically
  establishing end-to-end encryption between contacts and all members of a group chat. 

- [Sharing a contact to a
  chat](https://github.com/chatmail/core/blob/main/spec.md#attaching-a-contact-to-a-message)
  enables receivers to use end-to-end encryption with the contact. 

Delta Chat does not query, publish or interact with any OpenPGP key servers. 

### How can I know if messages are end-to-end encrypted? {#whene2e}

All messages in Delta Chat are **end-to-end encrypted by default**.
Since the Delta Chat Version 2 release series (July 2025) 
there are no lock or similar markers on end-to-end encrypted messages, anymore. 

### Can I still receive or send messages without end-to-end encryption?

If you use default [chatmail relays](https://chatmail.at/relays),
it is impossible to receive or send messages without end-to-end encryption. 

If you instead use a [classic email server](#classic-email),
you can send and receive messages with or without end-to-end encryption.
Messages lacking end-to-end encryption are marked with an email icon
<img style="vertical-align:middle; width:1.2em; margin:1px" src="../assets/help/email-icon.png" alt="email"/>.


### What does the green checkmark in a contact profile mean? {#e2eeguarantee}

A contact profile might show a green checkmark
<img style="vertical-align:middle; width:1.5em; margin:1px" src="../assets/help/green-checkmark.png" alt="green checkmark" />
and an "Introduced by" line.
Every green-checkmarked contact either did a direct [QR-scan](#howtoe2ee) with you
or was introduced by a another green-checkmarked contact.
Introductions happen automatically when adding members to groups. 
Whoever adds a green-checkmarked contact to a group with only green-checkmarked members 
becomes an introducer. 
In a contact profile you can tap on the "Introduced by ..." text repeatedly
until you get to the one with whom you directly did a [QR-scan](#howtoe2ee).

For more in-depth discussion of "guaranteed end-to-end encryption"
please see [Secure-Join protocols](https://securejoin.delta.chat/en/latest/new.html)
and specifically read about "Verified Groups", the technical term
of what is called here "green-checkmarked" or "guaranteed end-to-end encrypted" chats.

### Are attachments (pictures, files, audio etc.) end-to-end encrypted?

Sim.

When we talk about an "end-to-end encrypted message"
we always mean a whole message is encrypted,
including all the attachments
and attachment metadata such as filenames.


### Is OpenPGP secure? {#openpgp-secure}

Yes, Delta Chat uses a secure subset of OpenPGP
requiring the whole message to be properly encrypted and signed.
For example, "Detached signatures" are not treated as secure.

OpenPGP is not insecure by itself.
Most publicly discussed OpenPGP security problems
actually stem from bad usability or bad implementations of tools or apps (or both).
It is particularly important to distinguish between OpenPGP, the IETF encryption standard, 
and GnuPG (GPG), a command line tool implementing OpenPGP. 
Many public critiques of OpenPGP actually discuss GnuPG which Delta Chat has never used. 
Delta Chat rather uses the OpenPGP Rust implementation [rPGP](https://github.com/rpgp/rpgp),
available as [an independent "pgp" package](https://crates.io/crates/pgp),
and [security-audited in 2019 and 2024](#security-audits). 

We aim, along with other OpenPGP implementors, 
to further improve security characteristics by implementing the
[new IETF OpenPGP Crypto-Refresh](https://datatracker.ietf.org/doc/draft-ietf-openpgp-crypto-refresh/) 
which was thankfully adopted in summer 2023. 


### Did you consider using alternatives to OpenPGP for end-to-end-encryption? {#openpgp-alternatives}

Yes, we are following efforts like [MLS](https://en.wikipedia.org/wiki/Messaging_Layer_Security)
but adopting them would mean breaking end-to-end encryption interoperability.
So it would not be a light decision to take 
and there must be tangible improvements for users. 

Delta Chat takes a holistic "usable security" approach 
and works with a wide range of activist groupings as well as 
renowned researchers such as [TeamUSEC](https://teamusec.de) 
to improve actual user outcomes against security threats. 
The wire protocol and standard for establishing end-to-end encryption is
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


### Are messages marked with the mail icon exposed on the Internet? {#tls}

If you are sending or receiving email messages without end-to-end encryption (using a classic email server),
they are still protected from cell or cable companies who can not read or modify your email messages.
But both your and your recipient's email providers
may read, analyze or modify your messages, including any attachments. 

Delta Chat by default uses strict 
[TLS encryption](https://en.wikipedia.org/wiki/Transport_Layer_Security) 
which secures connections between your device and your email provider.
All of Delta Chat's TLS-handling has been independently [security audited](#security-audits).
Moreover, the connection between your and the recipient's email provider
will typically be transport-encrypted as well.
If the involved email servers support [MTA-STS](https://datatracker.ietf.org/doc/html/rfc8461)
then transport encryption will be enforced between email providers
in which case Delta Chat communications will never be exposed in cleartext to the Internet
even if the message was not end-to-end encrypted.


### How does Delta Chat protect metadata in messages? {#message-metadata}

Unlike most other messengers, 
Delta Chat apps do not store any metadata about contacts or groups on servers, also not in encrypted form. 
Instead, all group metadata is end-to-end encrypted and stored on end-user devices, only. 

Servers can therefore only see:

- the sender and receiver addresses
- and the message size.

By default, the addresses are randomly generated.

All other message, contact and group metadata resides in the end-to-end encrypted part of messages. 

### How to protect metadata and contacts when a device is seized? {#device-seizure}

Both for protecting against metadata-collecting servers 
as well as against the threat of device seizure
we recommend to use a [chatmail relay](https://chatmail.at/relays)
to create chat profiles using random addresses for transport. 
Note that Delta Chat apps on all platforms support multiple profiles
so you can easily use situation-specific profiles next to your "main" profile
with the knowledge that all their data, along with all metadata, will be deleted.
Moreover, if a device is seized then chat contacts using short-lived profiles
can not be identified easily. 


### Who sees my IP Address?

The used [relay](#relays) needs to know your IP Address,
as well as sometimes your contact's devices if you have a [call](#experiments)
or use [apps](#webxdc) together.

IP Addresses are needed for connectivity and efficiency.
They are neither persisted nor exposed.
Note that the IP Address
is not like a detailed address you give to a delivery service,
but much more coarse, often defining region or country only.

As this is just how the internet and other messengers work by default,
we do not offer options here or ask upfront questions.

If you see your IP Address as a security or privacy risk,
we recommend to use a VPN, in combination with system lockdown mode.
Hunting down options in all apps on your system will leave gaps.
For example, tapping a link exposes IP Addresses to unknown parties and is the by far larger risk here.


### Does Delta Chat support "Sealed Sender"? {#sealedsender}

No, not yet. 

The Signal messenger introduced ["Sealed Sender" in 2018](https://signal.org/blog/sealed-sender/)
to keep their server infrastructure ignorant of who is sending a message to a set of recipients. 
It is particularly important because the Signal server knows the mobile number of each account,
which is usually associated with a passport identity.

Even if [chatmail relays](https://chatmail.at/relays) 
do not ask for any private data (including no phone numbers), 
it might still be worthwhile to protect relational metadata between addresses. 
We don't foresee bigger problems in using random throw-away addresses for sealed sending
but an implementation has not been agreed as a priority yet. 

### Does Delta Chat support Perfect Forward Secrecy? {#pfs}

No, not yet. 

Delta Chat today doesn't support Perfect Forward Secrecy (PFS).
This means that if your private decryption key is leaked,
and someone has collected your prior in-transit messages,
they will be able to decrypt and read them using the leaked decryption key.
Note that Forward Secrecy only increases security if you delete messages. 
Otherwise, someone obtaining your decryption keys
is typically also able to get all your non-deleted messages
and doesn't even need to decrypt any previously collected messages. 

We designed a Forward Secrecy approach that withstood 
initial examination from some cryptographers and implementation experts 
but is pending a more formal write up 
to ascertain it reliably works in federated messaging and with multi-device usage,
before it could be implemented in [chatmail core](https://github.com/chatmail/core),
which would make it available in all [chatmail clients](https://chatmail.at/clients). 

### Does Delta Chat support Post-Quantum-Cryptography? {#pqc}

No, not yet. 

Delta Chat uses the Rust OpenPGP library [rPGP](https://github.com/rpgp/rpgp)
which supports the latest [IETF Post-Quantum-Cryptography OpenPGP draft](https://datatracker.ietf.org/doc/draft-ietf-openpgp-pqc/). 
We aim to add PQC support in [chatmail core](https://github.com/chatmail/core)  after the draft is finalized at the IETF
in collaboration with other OpenPGP implementers. 

### How can I manually check encryption information?

You may check the end-to-end encryption status manually in the "Encryption" dialog
(user profile on Android/iOS or right-click a user's chat-list item on desktop).
Delta Chat shows two fingerprints there.
If the same fingerprints appear on your own and your contact's device,
the connection is safe.

### Posso reutilizar minha chave privada existente? {#importkey}

No. 

Delta Chat generates secure OpenPGP keys according to the Autocrypt specification 1.1.
We do not recommend or offer users to perform manual key management.
We want to ensure that security audits can focus on a few proven cryptographic algorithms
instead of the full breadth of possible algorithms allowed with OpenPGP.
If you want to extract your OpenPGP key, there only is an expert method:
you need to look it up in the "keypairs" SQLite table of a profile backup tar-file.


### Was Delta Chat independently audited for security vulnerabilities? {#security-audits}

Yes, multiple times. 
The Delta Chat project continuously undergoes independent security audits and analysis,
from most recent to older: 

- 2024 December, an [NLNET-commissioned Evaluation of
  rPGP](https://github.com/rpgp/docs/blob/main/audits/NGI%20Core%20rPGP%20penetration%20test%20report%202024%201.0.pdf) by [Radically Open Security](https://www.radicallyopensecurity.com/) took place.
  rPGP serves as the end-to-end encryption [OpenPGP](https://openpgp.org) engine of Delta Chat. 
  Two advisories were released related to the findings of this audit:

  - ["Panics on Malformed Untrusted Input"](https://github.com/rpgp/rpgp/security/advisories/GHSA-9rmp-2568-59rv) CVE-2024-53856
  - ["Potential Resource Exhaustion when handling Untrusted Messages"](https://github.com/rpgp/rpgp/security/advisories/GHSA-4grw-m28r-q285) CVE-2024-53857

  The issues outlined in these advisories have been fixed and are part of Delta Chat 
  releases on all appstores since December 2024. 

- 2024 March, we received a deep security analysis from the Applied Cryptography
  research group at ETH Zuerich and addressed all raised issues. 
  See our blog post about [Hardening Guaranteed End-to-End encryption](https://delta.chat/en/2024-03-25-crypto-analysis-securejoin) for more detailed information and the
  [Cryptographic Analysis of Delta Chat](https://eprint.iacr.org/2024/918.pdf) 
  research paper published afterwards. 

- 2023 April, we fixed security and privacy issues with the "web
  apps shared in a chat" feature, related to failures of sandboxing
  especially with Chromium. We subsequently got an independent security
  audit from Cure53 and all issues found were fixed in the 1.36 app series released in April 2023.
  See [here for the full background story on end-to-end security in the web](https://delta.chat/en/2023-05-22-webxdc-security).

- 2023 March, [Cure53](https://cure53.de) analyzed both the transport encryption of
  Delta Chat's network connections and a reproducible mail server setup as
  [recommended on this site](serverguide).
  You can read more about the audit [on our blog](https://delta.chat/en/2023-03-27-third-independent-security-audit)
  or read the [full report here](../assets/blog/MER-01-report.pdf).

- 2020, [Include Security](https://includesecurity.com) analyzed Delta
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

- 2019, [Include Security](https://includesecurity.com) analyzed Delta
  Chat's [PGP](https://github.com/rpgp/rpgp) and
  [RSA](https://github.com/RustCrypto/RSA) libraries.
  It found no critical issues,
  but two high-severity issues that we subsequently fixed.
  It also revealed one medium-severity and some less severe issues,
  but there was no way to exploit these vulnerabilities in the Delta Chat implementation.
  Some of them we nevertheless fixed since the audit was concluded.
  You can read the [full report here](../assets/blog/2019-first-security-review.pdf).


## Diverso

### Quais permissões o Delta Chat precisa?

Some features require certain permissions,
e.g. you need to grant camera permission if you want to [scan an invite QR code](#howtoe2ee).

See [Privacy Policy](https://delta.chat/en/gdpr#24-app-permissions) for a detailed overview.


### Where can my friends find Delta Chat?

Delta Chat is available for all major and some minor platforms:

- The **official website**, <https://delta.chat/download> shows all options in detail

- If unavailable, use the **mirror** at <https://deltachat.github.io/deltachat-pages>

- Open one of the following **app stores and search for "Delta Chat":**
  Google Play Store, F-Droid, Huawei App Gallery, iOS and macOS App Store, Microsoft Store

- Check the **package manager** of your Linux distributions

- **Android APKs** are also available on <https://github.com/deltachat/deltachat-android/releases>


### Como são os desenvolvimentos do Delta Chat financiados?

Delta Chat does not receive any Venture Capital and
is not indebted, and under no pressure to produce huge profits, or to 
sell users and their friends and family to advertisers (or worse). 
We rather use public funding sources, so far from EU and US origins, to help
our efforts in instigating a decentralized and diverse chat messaging eco-system
based on Free and Open-Source community developments.

Concretely, Delta Chat developments have so far been funded from these sources,
ordered chronologically: 

- In 2023 and 2024 we got accepted in the Next Generation Internet (NGI)
  program for our work in [webxdc PUSH](https://nlnet.nl/project/WebXDC-Push/),
  along with collaboration partners working on
  [webxdc evolve](https://nlnet.nl/project/Webxdc-Evolve/),
  [webxdc XMPP](https://nlnet.nl/project/WebXDC-XMPP/),
  [DeltaTouch](https://nlnet.nl/project/DeltaTouch/) and
  [DeltaTauri](https://nlnet.nl/project/DeltaTauri/).
  All of these projects are partially completed or to be completed in early 2025.

- In 2021 we received further EU funding for two Next-Generation-Internet
  proposals, namely for [EPPD - email provider portability directory](https://dapsi.ngi.eu/hall-of-fame/eppd/) (~97K EUR) and [AEAP - email address porting](https://nlnet.nl/project/EmailPorting/) (~90K EUR) which resulted in better multi-profile support, improved QR-code contact and group setups and many networking improvements on all platforms.

- The [NLnet foundation](https://nlnet.nl/) granted in 2019/2020 EUR 46K for
  completing Rust/Python bindings and instigating a Chat-bot eco-system.

- The [Open Technology Fund](https://opentechfund.org) gave us a
  first 2018/2019 grant (~$200K) during which we majorly improved the Android app
  and released a first Desktop app beta version, and which moreover
  moored our feature developments in UX research in human rights contexts,
  see our concluding [Needfinding and UX report](https://delta.chat/en/2019-07-19-uxreport).
  The second 2019/2020 grant (~$300K) helped us to
  release Delta/iOS versions, to convert our core library to Rust, and
  to provide new features for all platforms.

- The [NEXTLEAP](https://nextleap.eu) EU project funded the research
  and implementation of verified groups and setup contact protocols
  in 2017 and 2018 and also helped to integrate end-to-end Encryption
  through [Autocrypt](https://autocrypt.org).

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
for both monetary and other contribution possibilities.  
