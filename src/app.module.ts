import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogModule } from './catalog/catalog.module';
import { ProductModule } from './product/product.module';

@Module({
  // imports: [CatalogModule],
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecomm'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      typePaths: ['./**/*.gql'],
      installSubscriptionHandlers: true,
    }),
    CatalogModule,
    ProductModule,
  ],
})
export class AppModule {}
