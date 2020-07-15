import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Foo, FooInput } from '../foo_datamodel';

@Resolver()
export class FooResolver {
  @Query((_returns) => Foo, { nullable: false })
  async returnSingleFoo(@Arg('id') id: string) {
    return 'fooObject';
    //   return await CategoriesModel.findById({_id:id});
  }

  // @Query(() => [Categories])
  // async returnAllCategories(){
  //   return await CategoriesModel.find();
  // };

  // @Mutation(() => Categories)
  // async createCategory(@Arg("data"){name,description}: CategoriesInput): Promise<Categories> {
  //   const category = (await CategoriesModel.create({
  //       name,
  //       description
  //   })).save();
  //   return category;
  // };

  //    @Mutation(() => Boolean)
  //    async deleteCategory(@Arg("id") id: string) {
  //     await CategoriesModel.deleteOne({id});
  //     return true;
  //   }
}
