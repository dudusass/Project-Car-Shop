import { Request, Response } from 'express';
import { Car } from '../interfaces/CarInterface';
import CarServices from '../services/CarServices';

export default class CarController {
  private _route: string;

  public service = new CarServices();

  constructor() {
    this._route = '/cars';
  }

  get route(): string {
    return this._route;
  }

  create = async (req: Request<Car>, res: Response) => {
    const { body } = req;
    try {
      const car = await this.service.create(body);
      return res.status(201).json(car);
    } catch (error) {
      return res.status(400).json({ error: 'errinho' });
    }
  };

  read = async (_req: Request, res: Response) => 
    res.status(200).json(await this.service.read());

  readOne = async (req: Request<{ id: string; }>, res: Response) => {
    const { id } = req.params;
    try {
      const car = await this.service.readOne(id);
      return res.status(200).json(car);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(Number(err.name)).json({ error: err.message });
      }
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const car = await this.service.update(id, body);
      return res.status(200).json(car);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(Number(err.name)).json({ error: err.message });
      }
    }
  };

  delete = async (req: Request<{ id: string; }>, res: Response) => {
    const { id } = req.params;
    try {
      await this.service.delete(id);
      return res.status(204).json();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(Number(err.name)).json({ error: err.message });
      }
    }
  };
}