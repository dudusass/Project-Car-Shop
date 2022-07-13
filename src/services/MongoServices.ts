import { Model } from '../interfaces/ModelInterface';

export default abstract class MongoService<T> {
  constructor(protected model: Model<T>) {}

  public async create(data: T) {
    return this.model.create(data);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }
  
  public async readOne(id: string) {
    return this.model.readOne(id);
  }

  public async update(id: string, data: T) {
    return this.model.update(id, data);
  }

  public async delete(id: string) {
    return this.model.delete(id);
  }
}