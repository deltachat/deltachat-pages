---
title: Perguntas frequentes
layout: default-pt
---



<!-- GENERATED FILE -- DO NOT EDIT -->



# Perguntas frequentes

- [Geral](#general)
- [Grupos](#groups)
- [Criptografia](#encryption)
- [Multicliente](#multiclient)
- [Diversos](#miscellaneous)

# Geral {#general}

## Para quem posso escrever?

- Com o Delta Chat, você pode escrever para outros usuários do Delta Chat - ou qualquer outra pessoa que tenha um e-mail. Esta é uma das maiores diferenças de outros aplicativos do gênero: Não é preciso que o destinatário instale o mesmo aplicativo que você usa.

## Quais são as vantagens do Delta Chat comparado a outros aplicativos do tipo?

- _Independent_ of any company or services. _You_ own your data.
- Your data are not saved on a central server; this way, in contrast to most other messengers, Delta Chat even protects your metadata (who writes to whom?)
- You do not distribute your address book to anyone.
- _Fast_ by the use of Push-IMAP
- _Largest userbase_ - receivers _not_ using Delta Chat can be reached as well
- _Compatible_ - not only to itself
- _Elegant_ and _simple_ user interface
- _Distributed_ system
- _No Spam_ - only messages of known users are shown by default
- _Reliable_ - safe for professional use
- _Trustworthy_ - can even be used for business messages
- fully _Open Source_ and _Standards_ based

## E se o destinatário não for usuário do Delta Chat?

- Neste caso o destinatário vai receber um e-mail normal - se ele responder, você vai receber a mensagem no Delta Chat.

## Quais mensagens aparecem no Delta Chat?

O Delta Chat automaticamente exibe ...

- Messages from contacts in your **address book**
- Messages from contacts **contacted by you**
- **Replies** to messages sent by you

Outras mensagens não aparecem automaticamente. Você poderá as ver no menu princial em **Requisições de contato** e, se desejar, comece a conversar.

## E o Spam?

- Messages in common spam folders are ignored and contained addresses are not considered as known contacts.
- As messages from unknown contacts do not pop up automatically, normally, there's **no spam**.
- However, if needed, you can **block** any contact.

## O Delta Chat exibe imagens, vídeos e aceita outros anexos?

- Sim. Além de texto puro, todos os anexos de e-mail são exibidos como mensagens separadas. Mensagens enviadas aceitam anexos também.

## O Delta Chat lê e-mails em HTML?

- Sim. Se a mensagem não estiver em texto puro, o HTML será convertido em texto puro. Mensagens sempre são enviadas em texto puro.

# Grupos {#groups}

## Como criar um grupo?

- Select **Add group** from the "Sandwich menu" in the upper right corner of the chat overview.
- On the following screen, select the **group members** and hit the check mark in the upper right corner. After that, you can define a **group name**.
- As soon as you write the **first message** in the group, all members are informed about the new group and can answer in the group (as long as you do not write a message in the group the group is invisible to the members).

## How to add members to a group?

- Todos os membros do grupo têm os **mesmos poderes**. Assim, todos podem deletar e/ou incluir novos membros ao grupo.
- Para adicionar ou deletar membros, clique no nome do grupo no chat.

## What is a verified group?

- A "verified group" is an experimental feature (as of January 2019). 
  By adding one another through QR-code scans a group of "verified" members can talk 
  with each other.  It enforces e2e group encryption that is safe against provider or 
  network attacks.  However, some user-tests and feedback suggests that UX and 
  implementation changes makes sense. Recent discussions can be found here: 
  https://countermitm.readthedocs.io/en/latest/new.html

## Eu saí do grupo por acidente.

- As you're no longer a group member now, you cannot add yourself again. 
  However, no problem, just ask any other group member in a normal chat to add you again.

## Não quero mais receber mensagens do grupo.

- Either delete yourself from the member list or delete the whole chat. 
  If you want to join the group later again, ask another group member to add you again.

- As an alternative, you can also "Mute" a group - doing so, you'll get all messages and 
  can still write but you're no longer notified of any new messages.

# Criptografia {#encryption}

## Does Delta Chat support end-to-end-encryption?

- Yes. DeltaChat implements the Autocrypt Level 1 standard and can 
  thus e2e-encrypt messages with other Autocrypt-capable apps. 

## O que eu preciso fazer para ativar a criptografia ponta a ponta?

- Nada.

- Delta Chat apps (and other [Autocrypt](https://autocrypt.org)-compatible
  e-mail apps) share the keys required for end-to-end-encryption automatically 
  as the first messages are sent. 
  After this, all subsequent messages are encrypted end-to-end automatically. 
  If one of the chat partners uses a non-Autocrypt e-mail app later 
  messages are not encrypted until an Autocrypt-compliant app is available again. 

- If you want to _deactivate_ the end-to-end-encryption, 
  use the corresponding setting at "Settings / Advanced settings".

## Se a criptografia ponta a ponta não estiver ativa a conexão estará completamente descriptografada?

- No. With most e-mail servers _transport encryption_ (TLS) is used then.


## Como posso me certificar de que a criptografia ponta a ponta está ativada?

- If a little **padlock** is shown beside a message, this implies that the message is end-to-end-encrypted _and_ is sent from the given sender _and_ your answer will be end-to-end-encrypted as well.

- If there is **no padlock**, the message is usually transport encrypted eg. because you or the sender have disabled end-to-end-encryption or the sender uses an app that does not support end-to-end-encryption.


## Como posso verificar se o remetente é ele mesmo?

O perfil de usuário exibe algumas informações adicionais:

- You can tap "QR Invite code" on Android and then use the "scan QR"
  code button on another device to scan this code.  If both devices are online
  they will introduce a chat channel with each other (if it doesn't exist already) 
  and also the encryption keys will be verified. 

- For an end-to-end-encryption, Delta Chat shows two fingerprints there. 
  If they are the same on the device of your chat partner, the connection is safe.

- For transport encryption, this state is just shown there


## Quais padrões são utilizados para a criptografia ponta a ponta?

- OpenPGP. A troca de chaves é feita via [Autocrypt](https://autocrypt.org).

## Can I re-use my existing private key?

- Sim. A melhor maneira é enviar uma mensagem de configuração do Autocrypt de um para outro cliente de e-mail. Procure pelo sth. com o nome **Inicializar configuração de transferência do Autocrypt** nas configurações do outro cliente e siga as respectivas intruções.

- Alternativamente, você pode importar a chave manualmente em "Configurações avançadas / Gerir chaves privadas". Atenção: Certifique-se de que a chave não esteja protegida por senha ou a remova anteriormente.

If you don't have a key or don't even know you would need one - don't worry: Delta Chat generates one as needed, you don't have to hit a button for it. 

# Multicliente {#multiclient}

## Posso usar o Delta Chat em vários dispositivos ao mesmo tempo?

If you want to use the **same account** on different (Autocrypt
capable) devices, you have to synchronize their encryption capabilities: 

- On the first device, choose "Advanced settings / Send Autocrypt Setup message" 
  and click until a "security number" is shown. 

- On the other device, wait for the "Autocrypt Setup Message" to
  arrive and click on it which should prompt you for the security number. 

- you are now successfully synchronized and can use both devices for
  sending and receiving e2e-encrypted messages with your communication partners. 

# Diversos {#miscellaneous}

## O Delta Chat funciona com o _meu_ provedor de e-mail?

- Muito provavelmente sim :)  
  Porém, alguns provedores precisam de configurações especiais; alguns usuários fizeram uma compilação no fórum em [Provider Overview](https://support.delta.chat/t/provider-overview/)


## Quero saber mais detalhes técnicos. Você pode me contar mais?

- Leia a página (em inglês) [Standards used in Delta Chat]({% include standards-url %}).
