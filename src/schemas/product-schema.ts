import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Catalog } from './catalog-schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  productNo: number;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Catalog' })
  catalog: Catalog;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
