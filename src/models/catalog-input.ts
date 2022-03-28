import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CatalogInput {
  @Field()
  readonly catalogNo: number;
  @Field()
  readonly name: string;
}
