import {} from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatalogInput } from 'src/models/catalog-input';
import { CatalogModel } from 'src/models/catalog.model';
import { CatalogService } from './catalog.service';

@Resolver((of) => CatalogModel)
export class CatalogResolver {
  constructor(private catalogService: CatalogService) {}

  @Query((returns) => [CatalogModel])
  async catalogs(): Promise<CatalogModel[]> {
    return await this.catalogService.getAllCatalogs();
  }

  @Mutation((returns) => CatalogModel)
  async createCatalog(
    @Args('input') input: CatalogInput,
  ): Promise<CatalogModel> {
    return this.catalogService.create(input);
  }
}
