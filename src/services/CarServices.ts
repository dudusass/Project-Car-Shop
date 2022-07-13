import { Car, CarSchema } from '../interfaces/CarInterface';
import ErrorM from '../middleware/Error';
import MongoServices from './MongoServices';
import CarModel from '../models/CarModel';

const errorCaracteres = 'Id must have 24 hexadecimal characters';
const errorObjectInvalid = 'Object not found';

export default class CarsService extends MongoServices<Car> {
  private idLength = 24;

  constructor(model = new CarModel()) {
    super(model);
  }

  public async create(data: Car) {
    const parsed = CarSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error('errinho');
    }
    return this.model.create(data);
  }

  public async read() {
    return this.model.read();
  }

  public async readOne(id: string) {
    if (id.length !== this.idLength) {
      throw new ErrorM('400', errorCaracteres);
    }
    const car = await this.model.readOne(id);
    if (!car) {
      throw new ErrorM('404', errorObjectInvalid);
    }
    return car;
  }

  public async update(id: string, data: Car) {
    if (id.length !== this.idLength) {
      throw new ErrorM('400', errorCaracteres);
    }
    const parsed = CarSchema.safeParse(data);
    if (!parsed.success) {
      throw new ErrorM('400', 'error do body');
    }
    const car = await this.model.update(id, data);
    if (!car) {
      throw new ErrorM('404', errorObjectInvalid);
    }
    return car;
  }

  public async delete(id: string) {
    if (id.length !== this.idLength) {
      throw new ErrorM('400', errorCaracteres);
    }
    const car = await this.model.delete(id);
    if (!car) {
      throw new ErrorM('404', errorObjectInvalid);
    }
    return car;
  }
}