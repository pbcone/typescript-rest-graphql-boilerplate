# Foo-boilerplate-typescript-rest-graphql
Boilerplate code writen in typescript with REST and/or GraphQL stubbed out ready for development. 
This project also includes 
- Express - server on port 8888
- ESlint - linting
- Prettier - linting
- Docker - container deployment
- Jest - testing
- Winston -Logging
- Apollo - graphql server configuration

Start development by renaming the folder `src/foo`

This project is ready to connect to a Dyanmo DB but will require additional configuration to complete

## To start a local development instance 

```
npm install
```
```
npm run dev
```

## To spin up a Docker Container

```
npm run docker:up
```

### To stop the container started above use

```
npm run docker:down
```


