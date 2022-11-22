<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Projeto desenvolvido para implementar o desafio proposto pela empresa.
Inicialmente havia sido pedido apenas para baixar algumas informações da api source passada, poreḿ resolvi ir um pouquinho além do que foi pedido como logs , cache e muito mais, espero que gostem. 😃
Alguns pontos acabei não olhando afim de entregar o projeto funcionando dentro do prazo que me propûs a fazer. É caso por exemplo do banco de dados, provavelmente não deve estar normalizado, porém está comportando bem os dados então resolvi deixar do modo como está mesmo.
Também existem alguns pontos do código que estão do modo que estão por simplicidade, mas existe um comentário em cada um desses pontos onde existem situações que, se fosse uma API indo para produção tais coisas não seriam feitas.
Dado que era necessário usar alguma base de dados acabei obtando por usar Docker, então quem for fazer o teste da api deverá ter o docker e o docker-compose instalados na máquina.
Bom é isso, espero que tenha ficado bem bacana. 😃 😃

## Instalação

Caso queira instalar as dependências de modo separado, pode-se executar o comando abaixo. POrém, eu criei um comando mais completo que já engloba essa operação, será exibido mais adiante.

```bash
$ npm i
```

## Docker

Conforme mencionado, utilizei para fazer odesafio o Docker, logo é preciso que quem for testar tenha instalado em sua máquina tanto o docker como o docker compose.
Para instlá-los basta seguir os passos do site oficial:

1. **Instalar Docker**: [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)
2. **Instalar Docker Compose**: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Executando a aplicação

Para executar a aplicação pela primeira vez ou caso precise refazer a instação de algum pacote basta executar o comando:

```bash
$ npm run init
```

Esse comando irá executar os seguntes comandos:

```bash
$ npm run check-docker:  Verifica se o docker está instalado. Caso não esteja, será necessário fazer a instação manual
```

```bash
$ npm i:  Instala os pacotes nodes
```

```bash
$ npm run start-containers: Inicia os containers do Redis e do banco de dados Postgres
```

```bash
$ echo "Containers started sucessfully": Exibe mensagem caso os containers tenham iniciado com sucesso
```

```bash
$ npm run start: Inicia a aplicação
```

## Documentação

Para acessar a documentação da api basta abrir este ender no seu navegador após o projeto ter subido com sucesso: [http://localhost:3000/docs](http://localhost:3000/docs)

## Observações

1.  Dado que eu preciso dos dados da api real na base de dados local, eu optei por só permitir que a api suba após fazer com sucesso a busca dos dados na API real.
2.  O desafio solicita a inserção de 200 filmes, poreḿ ao fazer a busca no endpoint de filmes, são retornados apenas 22 filmes. De qaualquer forma, a quantidade de filmes a ser recuperada da api real é configurável através da variável **MAX_RECORDS_TO_PULL_FROM_GHIBLI** localizada no arquivo **.env** que se encontra na raiz do projeto.
3.  Valores de porta, tempo em cache dos dados entre outros podem ser configurado no arquivo **.env**
4.  Como eu precisei usar docker será necessário que a pessoa que for executar a API tenha essa ferramenta instalada (Docker e Docker Compose)
5.  Apesar de ter criado um Dockerfile para a aplicação, preferi deixar ela rodando no console para que seja possível para quem for avaliar ver os logs que ela gera ao fazer as operações do endpoint solicitado
6.  Sei que comentários no código não são uma boa prática. Porém, dado que este é um repositório para avaliação, deixei uns 2 ou três comentários explicando sobre coisas que podem e devem (ou não kkkkk) ser feitas em produção.

## Tecnologias utilizadas

Para criar este projeto eu utilizei as seguintes ferramentas/tecnologias:

- **NodeJs**: [https://nodejs.org/en/about/](https://nodejs.org/en/about/)
- **NestJs**: [https://docs.nestjs.com/](https://docs.nestjs.com/)
- **Docker**: [https://docs.docker.com/](https://docs.docker.com/)
- **Typescript**: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **Npm(Node Package Manager)**: [https://www.npmjs.com/](https://www.npmjs.com/)
- **Redis**: [https://redis.io/](https://redis.io/)
- **Eslint**: [https://eslint.org/](https://eslint.org/)
- **Postgres**: [https://www.postgresql.org/](https://www.postgresql.org/)
- **Dbeaver**:[https://dbeaver.io/download/](https://dbeaver.io/download/)
- **VsCode**:[https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Postman**: [https://www.postman.com/](https://www.postman.com/)
- **Swagger**: [https://swagger.io/](https://swagger.io/)
- **Github**: [https://github.com/](https://github.com/)
