import { Schema, model as createModel } from 'mongoose';
import MongoModel from './MongoModel';
import { Car, CarDocument } from '../interfaces/CarInterface';

export const CarSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

export default class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Car', CarSchema)) {
    super(model);
  }
}