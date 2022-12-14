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

## Descri????o

Projeto desenvolvido para implementar o desafio proposto pela empresa.

Inicialmente havia sido pedido apenas para baixar algumas informa????es da api source passada, pore??? resolvi ir um pouquinho al??m do que foi pedido como logs , cache e muito mais, espero que gostem. ????

Alguns pontos acabei n??o olhando afim de entregar o projeto funcionando dentro do prazo que me prop??s a fazer. ?? caso por exemplo do banco de dados, provavelmente n??o deve estar normalizado, por??m est?? comportando bem os dados ent??o resolvi deixar do modo como est?? mesmo.

Tamb??m existem alguns pontos do c??digo que est??o do modo que est??o por simplicidade, mas existe um coment??rio em cada um desses pontos onde existem situa????es que, se fosse uma API indo para produ????o tais coisas n??o seriam feitas.

Dado que era necess??rio usar alguma base de dados acabei obtando por usar Docker, ent??o quem for fazer o teste da api dever?? ter o docker e o docker-compose instalados na m??quina.

Bom ?? isso, espero que tenha ficado bem bacana. ???? ????

## Instala????o

Caso queira instalar as depend??ncias de modo separado, pode-se executar o comando abaixo. POr??m, eu criei um comando mais completo que j?? engloba essa opera????o, ser?? exibido mais adiante.

```bash
$ npm i
```

## Docker

Conforme mencionado, utilizei para fazer o desafio o Docker, logo ?? preciso que quem for testar tenha instalado em sua m??quina tanto o docker como o docker compose.

Para instal??-los basta seguir os passos do site oficial:

1. **Instalar Docker**: [https://docs.docker.com/engine/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)
2. **Instalar Docker Compose**: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Executando a aplica????o

Para executar a aplica????o pela primeira vez ou caso precise refazer a insta????o de algum pacote basta executar o comando:

```bash
$ npm run init
```

Esse comando ir?? executar os seguntes comandos:

```bash
$ npm run check-docker:  Verifica se o docker est?? instalado. Caso n??o esteja, ser?? necess??rio fazer a insta????o manual
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
$ npm run start: Inicia a aplica????o
```

## Documenta????o

Para acessar a documenta????o da api basta abrir este ender no seu navegador ap??s o projeto ter subido com sucesso: [http://localhost:3000/docs](http://localhost:3000/docs)

## Observa????es

1.  Dado que eu preciso dos dados da api real na base de dados local, eu optei por s?? permitir que a api suba ap??s fazer com sucesso a busca dos dados na API real.
2.  O desafio solicita a inser????o de 200 filmes, pore??? ao fazer a busca no endpoint de filmes, s??o retornados apenas 22 filmes. De qaualquer forma, a quantidade de filmes a ser recuperada da api real ?? configur??vel atrav??s da vari??vel **MAX_RECORDS_TO_PULL_FROM_GHIBLI** localizada no arquivo **.env** que se encontra na raiz do projeto.
3.  Valores de porta, tempo em cache dos dados entre outros podem ser configurado no arquivo **.env**
4.  Como eu precisei usar docker ser?? necess??rio que a pessoa que for executar a API tenha essa ferramenta instalada (Docker e Docker Compose)
5.  Apesar de ter criado um Dockerfile para a aplica????o, preferi deixar ela rodando no console para que seja poss??vel para quem for avaliar ver os logs que ela gera ao fazer as opera????es do endpoint solicitado
6.  Sei que coment??rios no c??digo n??o s??o uma boa pr??tica. Por??m, dado que este ?? um reposit??rio para avalia????o, deixei uns 2 ou tr??s coment??rios explicando sobre coisas que podem e devem (ou n??o kkkkk) ser feitas em produ????o.

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
