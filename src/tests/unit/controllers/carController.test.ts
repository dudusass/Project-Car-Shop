import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';

import CarController from '../../../controllers/CarController';
import { Car } from '../../../interfaces/CarInterface';
import { carExemplo, carResposta, carsListaResposta, carRespostaAtualizada } from '../mocks/mocks';

describe('TESTINGCONTROLLER', () => {
  const carController = new CarController();

  describe('ROUTE /CARS', () => {
    it('EXPECTS TO BE EQUAL /CARS', async () => {
      const result = carController.route;
      expect(result).to.be.equal('/cars');
    });
  });
});

describe('TESTING CREATE ROUTE', () => {
  const carController = new CarController();
  const request = {} as Request<Car>;
  const response = {} as Response;

  describe('CREATE CONTROLLER', () => {
    before(async() => {
      request.body = carExemplo;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(carController.service, 'create').resolves(carResposta);
    });
    after(() => sinon.restore());
    it('EXPECTS STATUS 201 TO RETURN', async() => {
      await carController.create(request, response);
      expect((response.status as sinon.SinonStub).calledWith(201)).to.be.equal(true);
    });

    it('EXPECTS TO RETURN AN OBJECT', async() => {
      await carController.create(request, response);
      expect((response.json as sinon.SinonStub).calledWith(carResposta)).to.be.equal(true);
    });
  });
});

describe('TESTING ROUTE READ', () => {
  const carController = new CarController();
  const request = {} as Request<{ id: string; }>;
  const response = {} as Response;
  
  describe('CONTROLLER READ', () => {
    before(async() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(carController.service, 'read').resolves(carsListaResposta);
    });
    after(() => sinon.restore());

    it('EXPECTS STATUS 200 TO RETURN', async() => {
      await carController.read(request, response);
      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    });

    it('EXPECTS TO RETURN AN OBJECT', async() => {
      await carController.read(request, response);
      expect((response.json as sinon.SinonStub).calledWith(carsListaResposta)).to.be.equal(true);
    });
  });
});

describe('TESTING ROUTE READONE', () => {
  const carController = new CarController();
  const request = {} as Request<{ id: string; }>;
  const response = {} as Response;
  
  describe('CONTROLLER READONE', () => {
    before(async() => {
      request.params = { id: carResposta._id };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(carController.service, 'readOne').resolves(carResposta);
    });
    after(() => sinon.restore());

    it('EXPECTS STATUS 200 TO RETURN', async() => {
      await carController.readOne(request, response);
      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    });

    it('EXPECTS TO RETURN AN OBJECT', async() => {
      await carController.readOne(request, response);
      expect((response.json as sinon.SinonStub).calledWith(carResposta)).to.be.equal(true);
    });
  });
});

describe('TESTING ROUTE UPDATE', () => {
  const carController = new CarController();
  const request = {} as Request<{ id: string; }>;
  const response = {} as Response;
  
  describe('CONTROLLER UPDATE', () => {
    before(async() => {
      request.params = { id: carRespostaAtualizada._id };
      request.body = carRespostaAtualizada;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(carController.service, 'update').resolves(carRespostaAtualizada);
    });
    after(() => sinon.restore());

    it('EXPECTS STATUS 200 TO RETURN', async() => {
      await carController.update(request, response);
      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.equal(true);
    });

    it('EXPECTS TO RETURN AN OBJECT', async() => {
      await carController.update(request, response);
      expect((response.json as sinon.SinonStub).calledWith(carRespostaAtualizada)).to.be.equal(true);
    });
  });
});

describe('TESTING ROUTE DELETE', () => {
  const carController = new CarController();
  const request = {} as Request<{ id: string; }>;
  const response = {} as Response;
  
  describe('CONTROLLER DELETE', () => {
    before(async() => {
      request.params = { id: carResposta._id };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(carController.service, 'delete').resolves(carResposta);
    });
    after(() => sinon.restore());
    it('EXPECTS STATUS 204 TO RETURN', async() => {
      await carController.delete(request, response);
      expect((response.status as sinon.SinonStub).calledWith(204)).to.be.equal(true);
    });
  });
});