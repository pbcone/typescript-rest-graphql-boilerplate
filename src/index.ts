import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import { router } from './router';
import { getConfig } from './config/config';
import { getLogger } from './logger';
import { FooSchemaBuilder } from './foo/graphql/foo_graphql';

const config = getConfig();
const logger = getLogger();

const main = async () => {
  const schema = await FooSchemaBuilder;
  const server = new ApolloServer({ schema });
  const app: express.Application = express();

  //eslint-disable-next-line
  //@ts-ignore
  server.applyMiddleware({ app });

  app
    .set('port', config.serverPort)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(router);

  app.listen(app.get('port'), () => logger.info(`App is running on port:${app.get('port')} in ${app.get('env')} mode`));
};

main();
