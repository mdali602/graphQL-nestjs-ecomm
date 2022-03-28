import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/schemas/product-schema';
import { ProductInput } from 'src/models/product-input';
import { Catalog } from 'src/schemas/catalog-schema';
import { ProductDTO } from 'src/models/producto.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    // return await this.productModel.find().exec();

    return this.productModel
      .find()
      .populate('catalogs', null, Catalog.name)
      .exec();
  }

  async create(productInput: ProductInput): Promise<Product> {
    return await new this.productModel({
      ...productInput,
      createdAt: new Date(),
    }).save();
  }
}
