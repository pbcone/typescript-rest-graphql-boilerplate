import { InputType, ObjectType, Field, ID } from 'type-graphql';
import { Length } from 'class-validator';

@ObjectType({ description: 'The Foo model' })
export class Foo {
  @Field(() => ID)
  id!: string;

  // @Field()
  // name!: String;

  // @Field()
  // description!: String;
}

@InputType()
export class FooInput implements Partial<Foo> {
  @Field()
  id!: string;

  //   @Field()
  //   @Length(1, 255)
  //   description!: String;
}
