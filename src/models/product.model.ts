import { Entity, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
// import {TaskModel} from "./task-model";

@ObjectType()
@Entity()
export class ProductModel {
  @Field()
  productNo: number;

  @Field()
  @Column()
  name: string;
}
