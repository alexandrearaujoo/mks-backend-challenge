<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Technologies

- Typescript
- NestJs
- TypeORM
- PostgreSQL
- Redis
- Docker
- JWT 
- Bcrypt
- Swagger 

## Installation

```bash
$ npm install | yarn install | yarn 
```

## Creating database

```bash
# first of all run this command to create the database
$ docker-compose up -d
```

## Running migrations to create the tables in the database

```bash
# after creating the database, run this command to run the migrations and create the tables in the database
$ npm run typeorm migration:run -d src/config/ormConfig.ts | yarn typeorm migration:run -d src/config/ormConfig.ts
```

## Running the app

```bash
# development
$ npm run start | yarn start

# watch mode
$ npm run start:dev | yarn start:dev

# production mode
$ npm run start:prod | yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test | yarn test

# e2e tests 
$ npm run test:e2e | yarn test:e2e

# test coverage
$ npm run test:cov | yarn test:cov
```

## Stopping the docker-compose

```bash
# development
$ docker-compose stop
```
## Experiences

- NestJs: segundo projeto que eu utilizo
- Typescript: 5 meses
- TypeORM: 4 meses
- PostgreSQL: 4 meses
- Bcrypt: 5 meses
- JWT: 5 meses
- Redis: primeiro contanto
- Docker: 4 meses 
- Swagger: segundo projeto em TS que eu utilizo, utilizei antes com Python e Django
