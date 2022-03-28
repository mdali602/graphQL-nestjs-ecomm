import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogResolver } from './catalog.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Catalog, CatalogSchema } from 'src/schemas/catalog-schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Catalog.name, schema: CatalogSchema }]),
  ],
  controllers: [],
  providers: [CatalogService, CatalogResolver],
})
export class CatalogModule {}
