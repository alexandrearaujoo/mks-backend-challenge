<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install | yarn install | yarn 
```

## Running the app

```bash
# development
$ docker-compose up -d
$ npm run start | yarn start

# watch mode
$ docker-compose up -d
$ npm run start:dev | yarn start:dev

# production mode
$ npm run start:prod | | yarn start:dev
```

## Test

```bash
# unit tests
$ npm run test | | yarn test

# e2e tests 
$ npm run test:e2e | yarn test:e2e

# test coverage
$ npm run test:cov | yarn test:cov
```

## Running the migrations

```bash
# development
$ npm run typeorm migration:run -d src/config/ormConfig.ts | yarn typeorm migration:run -d src/config/ormConfig.ts
```

## Stopping the docker-compose
```bash
# development
$ docker-compose stop
```
