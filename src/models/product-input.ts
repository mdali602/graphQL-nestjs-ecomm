import { InputType, Field } from '@nestjs/graphql';
import { Catalog } from 'src/schemas/catalog-schema';
import { CatalogInput } from './catalog-input';

@InputType()
export class ProductInput {
  @Field()
  readonly productNo: number;
  @Field()
  readonly name: string;

  @Field()
  readonly catalogId: string;
}
