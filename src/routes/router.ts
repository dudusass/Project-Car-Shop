import { Router } from 'express';
import CarController from '../controllers/CarController';

export default class CustomRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  addRoute(controller: CarController, route: string = controller.route) {
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, controller.readOne);
    this.router.post(route, controller.create);
    this.router.put(`${route}/:id`, controller.update);
    this.router.delete(`${route}/:id`, controller.delete);
  }
}