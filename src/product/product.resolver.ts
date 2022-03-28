import {} from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatalogModel } from 'src/models/catalog.model';
import { ProductInput } from 'src/models/product-input';
import { ProductModel } from 'src/models/product.model';
import { ProductService } from './product.service';

@Resolver((of) => ProductModel)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [ProductModel])
  async Products(): Promise<ProductModel[]> {
    return await this.productService.getAllProducts();
  }

  @Mutation((returns) => ProductModel)
  async createProduct(
    @Args('input') input: ProductInput,
  ): Promise<ProductModel> {
    return this.productService.create(input);
  }
}
