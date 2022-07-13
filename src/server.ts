import CustomRouter from './routes/router';
import App from './app';

import CarController from './controllers/CarController';

const server = new App();

const carController = new CarController();

const route = new CustomRouter();
route.addRoute(carController);

server.addRouter(route.router);

export default server;