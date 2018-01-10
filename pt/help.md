---
title: Perguntas frequentes
layout: default-pt
---


# Perguntas frequentes

- [Geral](#general)
- [Grupos](#groups)
- [Criptografia](#encryption)
- [Multicliente](#multiclient)
- [Diversos](#miscellaneous)


# Geral {#general}

## Para quem posso escrever?

- Com o Delta Chat, você pode escrever para outros usuários do Delta Chat - ou qualquer outra pessoa
  que tenha um e-mail. Esta é uma das maiores diferenças de outros aplicativos do gênero:
  Não é preciso que o destinatário instale o mesmo aplicativo que você usa.



## Quais são as vantagens do Delta Chat comparado a outros aplicativos do tipo?

- _Independente_ de companhias e serviços. _Você_ é o dono dos seus dados.
- Seus dados não são guardados num servidor central; desta forma, em contraste com a maioria de outros aplicativos do gênero, o Delta Chat protege até mesmo seus metadados (quem escreve para quem?)
- Você não entrega sua agenda de contatos para ninguém.
- _Rápido_ pelo uso do Push-IMAP
- _Maior base de usuários_ - destinatários que _não_ usam o Delta Chat podem ser contatados também
- _Compatível_ - não só com ele próprio
- _Elegante_ e _simples_
- _Distribuído_
- _Sem Spam_ - somente mensagens de contatos conhecidos são mostrados por padrão
- _Confiável_ - seguro para uso profissional
- _Seguro_ - pode até mesmo ser utilizado em atividades empresariais
- Totalmente de _código aberto_ e baseado nos _padrões_ mais usados


## E se o destinatário não usar o Delta Chat?

- Neste caso o destinatário vai receber um e-mail normal - se ele responder, você vai 
  receber a mensagem no Delta Chat.


## Quais mensagens aparecem no Delta Chat?

O Delta Chat automaticamente exibe ...

- Mensagens de contatos da sua **agenda de endereços**
- Mensagens de contatos **que você contatou**
- Mensagens de **contatos conhecidos dos seus contatos**
- **Respostas** a mensagens enviadas por você

Outras mensagens não aparecem automaticamente. Você poderá as ver no menu
princial em **Requisições de contato** e, se desejar, comece a conversar.

## E o Spam?

- Mensagens de completos desconhecidos não são exibidas automaticamente, de modo que, normalmente, **não há spam**.
- No entanto, se realmente necessário, você pode **bloquear** qualquer contato.



## O Delta Chat exibe imagens, vídeos e aceita outros anexos?

- Sim. Além de texto puro, todos os anexos de e-mail são exibidos como mensagens
  separadas. Mensagens enviadas aceitam anexos também.


## O Delta Chat lê e-mails em HTML?

- Sim. Se a mensagem não estiver em texto puro, o HTML será convertido em
  texto puro.  Mensagens sempre são enviadas em texto puro.




# Grupos {#groups}

## Como criar um grupo?

- Selecione **Novo grupo** do "menu sanduíche" no canto esquerdo superior da lista de conversas.
- Na tela seguinte, selecione os **membros do grupo** e toque na caixa de seleção no canto direito superior. Após, escolha um **nome para o grupo**.
- Tão logo você enviar a **primeira mensagem**, todos os membros serão informados sobre o novo grupo e poderão entrar em contato pelo grupo (enquanto a primeira mensagem não for encaminhada o grupo não será conhecido pelos demais membros).

## Quem pode convidar membros ao grupo?

- Todos os membros do grupo têm os **mesmos poderes**. Assim, todos podem deletar e/ou incluir novos membros ao grupo.
- Para adicionar ou deletar membros, clique no nome do grupo no chat.

## Eu saí do grupo por acidente.

- Já que você não faz mais parte do grupo, você não pode se incluir nele de novo. No entanto, sem problema, peça para que alguém do grupo lhe inclua de novo.

## Não quero mais receber mensagens do grupo.

- Ou apague-se da lista de membros, ou delete o chat. Você poderá entrar no grupo em outra ocasião de novo, pedindo para que alguém do grupo o readicione.
- Alternativamente, você pode "silenciar notificações" de um grupo - desta forma você receberá todas as mensagens, poderá escrever no grupo, mas não será notificado de novas mensagens.




# Criptografia {#encryption}

## O Delta Chat tem criptografia ponta a ponta?

- Sim.

## O que eu preciso fazer para ativar a criptografia ponta a ponta?

- Nada.

- O Delta Chat (e outros programas compatíveis com a tecnologia [Autocrypt](https://autocrypt.org)) compartilham, na
primeira mensagem, as chaves necessárias para ativar a criptografia ponta a ponta. Depois
todas as mensagens posteriores são criptografadas ponta a ponta automaticamente. Se um dos
participantes da conversa não estiver usando um programa que comporte criptografia, a
criptografia fica suspensa até ser reativada novamente, quando possível.

- Se você quiser _desativar_ a criptografia ponta a ponta, faça-o no menu 
"Configurações / Configurações avançadas".

## Se a criptografia ponta a ponta não estiver ativa a conexão estará completamente descriptografada?

- Não. A criptografia padrão de _tráfego_ será utilizada.

## Como posso me certificar de que a criptografia ponta a ponta está ativada?

Acesse o menu "Criptografia" do perfil do contato:

- Para a criptografia ponta a ponta, o Delta Chat mostra duas impressões. Se combinarem com
as impressões do celular do seu contato, a conexão está cifrada.

- No caso de criptografia padrão de tráfego, sua utilização será exibida no mesmo menu.

## Quais padrões são usados para a criptografia ponta a ponta?

- OpenPGP. A troca de chaves é feita via [Autocrypt](https://autocrypt.org).

## Posso reutilizar uma chave privada que já possuo?

- Sim. Importe-a através do menu "Configurações avançadas / Gerir chaves privadas". Atenção: Certifique-se de que a chave não está protegida por uma senha, ou remova a senha antes de importá-la.

Se você não tiver uma chave ou nem mesmo sabe do que isso se trata - não se preocupe: o Delta Chat fará tudo automaticamente para você.


# Multicliente {#multiclient}

## Posso usar o Delta Chat em vários dispositivos ao mesmo tempo?

- Se você quiser usar a **mesma conta** em diferentes dispositivos, você terá que fazer com que todos eles usem a mesma chave de criptografia:

    - No primeiro dispositivo, escolha "Configurações avançadas / Gerir chaves privadas / Exportar para Downloads"
    
    - Via USB, copie a chave da pasta "Downloads" do primeiro dispositivo para o segundo.
    
    - No segundo dispositivo, escolha "Configurações avançadas / Gerir chaves privadas / Importar de Downloads"

- **Nada disso é necessário** se você utilizar somente um dispositivo.

- Nota: No modo multicliente mensagens _recebidas_ são exibidas imediatamente em ambos dispositivos. Mensagens _enviadas_  demoram cerca de meia hora para sincronizar. Talvez esta questão possa ser melhorada, mas precisamos de mais [ajuda](contribute) para resolvê-la.



# Diversos {#miscellaneous}

## Delta Chat no Linux

- É possível usar o Delta Chat no Ubuntu (ou outras distribuições que aceitem pacotes **snap**) simplesmente instalando o [Anbox](https://anbox.io) (Android in a Box) pelo terminal:

  $ *sudo snap install \-\-classic anbox-installer && anbox-installer*

- Para instalar o Delta Chat, baixe o arquivo *com.b44t.messenger_\<versão\>.apk* [daqui](download) e instale pelo terminal:

  $ *adb install caminho/para/com.b44t.messenger_\<versão\>.apk* 
  
  adb significa "Android Debug Bridge" e pode ser instalado através de repositórios.
  
  
## Problemas de login

Eu tenho um problema...

- Gmail: Habilite "Permitir que aplicativos menos seguros acessem sua conta" e o IMAP. Você deverá receber uma mensagem de autorização.


## Quero saber mais detalhes técnicos. Você pode me contar mais?

- Leia a página (em inglês) [Standards used in Delta Chat](../en/standards).


