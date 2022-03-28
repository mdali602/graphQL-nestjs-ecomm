import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Catalog, CatalogDocument } from 'src/schemas/catalog-schema';
import { CatalogInput } from 'src/models/catalog-input';

@Injectable()
export class CatalogService {
  constructor(
    @InjectModel(Catalog.name)
    private readonly catalogModel: Model<CatalogDocument>,
  ) {}

  async getAllCatalogs(): Promise<Catalog[]> {
    return await this.catalogModel.find().exec();
  }

  async create(catalogInput: CatalogInput): Promise<Catalog> {
    return await new this.catalogModel({
      ...catalogInput,
      createdAt: new Date(),
    }).save();
  }
}
