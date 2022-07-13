import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  create = async (obj: T) => this.model.create({ ...obj });

  read = async () => this.model.find();

  readOne = async (id: string) => this.model.findOne({ _id: id });

  update = async (id: string, obj: T) =>
    this.model.findOneAndUpdate({ _id: id }, obj);

  delete = async (id: string) => this.model.findOneAndDelete({ _id: id });
}

export default MongoModel;