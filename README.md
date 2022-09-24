# Desafio erural

Projeto desenvolvido para o desafio erual para vaga de Pessoa Desenvolvedora de Software. 

O que foi pedido: "Desenvolva um sistema de salas de transmissão de vídeo, conforme os seguintes
requisitos básicos:
Os usuários podem criar uma sala para a transmissão de um vídeo (não
necessariamente uma transmissão ao vivo) e outros podem entrar na sala para assistir
a este vídeo."

O que foi entregue: O usuário consegue criar e logar com sua conta. Toda a autenticação foi feita utilizando [Firebase Auth](https://firebase.google.com/firebase/authentication
). Após logado a primeira página mostra duas listas de salas: Todas as salas e salas criadas pelo próprio usuário logado, podendo entrar em uma das salas onde encontrará dois containers: Um vídeo-player e um espaço para comentários, podendo ler comentários de outros usuários, criar novos e excluir os próprios. A segunda página da aplicação (Nova Sala) é onde são criadas as salas, contendo um Nome e a Url do vídeo que deverá ser reproduzido na sala criada.
O banco de dados da aplicação foi feito com o [Firebase Firestore](https://firebase.google.com/firebase/cloud-firestore
), onde se encontram duas collections: rooms com os campos room_name (nome da sala), room_owner (quem criou a sala) e room_url (Url do vídeo que deverá ser reproduzido na sala ); posts com os campos post_comment (texto do post - comentário -), post_owner (criador do post) e post_roomId(vinculando o post a sala criada).

## Desenvolvimento

### Desenvolvido com
- React
- Styled Components
- [Firebase](https://firebase.google.com/firebase) (Firestore, Auth, Hosting)

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[git](https://git-scm.com) e [node.js](https://nodejs.org/en/).
Você também vai precisar de um editor de código, recomendo o [VS Code](https://code.visualstudio.com/).

### Rodando o projeto:

```shell
# Clone este repositório (ou download )
$ git clone git@github.com:joao21dev/erural-teste.git

# Acesse a pasta do projeto no terminal/cmd
$ cd erural-teste/

# Abra a pasta no editor de código (VS Code ou outro de sua preferência).

# Instale as dependências
$ yarn install

# Após a instalação, execute o comando para rodar a aplicação
$ yarn start
```
