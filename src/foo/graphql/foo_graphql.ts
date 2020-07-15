import { buildSchema } from 'type-graphql';

//resolvers
import { FooResolver } from './resolvers/query';

export const FooSchemaBuilder = buildSchema({
  resolvers: [FooResolver],
  emitSchemaFile: true,
  validate: false,
});
