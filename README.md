# hackernews-graphql-js

This repository contains the final project for the [**GraphQL.js tutorial**](https://www.howtographql.com/graphql-js/0-introduction/) on [How to GraphQL](https://www.howtographql.com/) using the last version of prisma(1.17).

## Usage

### 1. Clone repository & install dependencies

```sh
git clone https://github.com/condef5/graphql-js	
cd graphql-js
yarn install # or `npm install`
docker-compose up -d
```

### 2. Deploy the Prisma database service

```sh
yarn prisma deploy
```

### 3. Start the server & open Playground

To interact with the API in a GraphQL Playground, all you need to do is execute the `dev` script defined in `package.json`:

```sh
yarn dev
```
