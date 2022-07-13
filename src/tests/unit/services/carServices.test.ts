import { expect } from 'chai';
import mongoose from 'mongoose';
import sinon from 'sinon';

import CarsService from '../../../services/CarServices';
import { carExemplo, carResposta, carsListaResposta, carRespostaAtualizada, carExemploAtualizada } from '../mocks/mocks';

const exampleKeys= ['_id', 'model', 'year', 'color',
  'status', 'buyValue', 'doorsQty', 'seatsQty'];

describe('TESTING SERVICE', () => {
  const carService = new CarsService();

  describe('TESTING CREATE', () => {
    before(async() => sinon.stub(mongoose.Model, 'create').resolves(carResposta));
    after(() => sinon.restore());

    it('EXPECTS TO RETURN AN OBJECT', async() => {
      const car = await carService.create(carExemplo);
      expect(car).to.be.an('object');
    });

    it('EXPECTS TO RETURN AN OBJECT WITH KEYS', async() => {
      const car = await carService.create(carExemplo);
      expect(car).to.have.all.keys(exampleKeys);
    });
  });

  describe('TESTING FIND', () => {
    before(async() => sinon.stub(mongoose.Model, 'find').resolves(carsListaResposta));
    after(() => sinon.restore());
    it('EXPECTS TO RETURN AN ARRAY', async() => {
      const cars = await carService.read();
      expect(cars).to.be.an('array');
    });

    it('EXPECTS TO RETURN AN ARRAY WITH KEYS', async() => {
      const cars = await carService.read();
      expect(cars[0]).to.have.all.keys(exampleKeys);
    });
  });

  describe('TESTING FINDONE', () => {
    before(async() => sinon.stub(mongoose.Model, 'findOne').resolves(carResposta));
    after(() => sinon.restore());
    it('EXPECTS TO RETURN AN OBJECT', async() => {
      const car = await carService.readOne(carResposta._id);
      expect(car).to.be.an('object');
    });

    it('EXPECTS TO RETURN AN OBJECT WITH KEYS', async() => {
      const car = await carService.readOne(carResposta._id);
      expect(car).to.have.all.keys(exampleKeys);
    });
  });

  describe('TESTING UPDATE', () => {
    before(async() => sinon.stub(mongoose.Model, 'findOneAndUpdate').resolves(carRespostaAtualizada));
    after(() => sinon.restore());
    it('EXPECTS TO RETURN AN OBJECT', async() => {
      const car = await carService.update(carResposta._id, carExemploAtualizada);
      expect(car).to.be.an('object');
    });

    it('EXPECTS TO RETURN AN OBJECT WITH KEYS', async() => {
      const car = await carService.update(carResposta._id, carExemploAtualizada);
      expect(car).to.have.all.keys(exampleKeys);
    });
  });

  describe('TESTING DELETE', () => {
    before(async() => sinon.stub(mongoose.Model, 'findOneAndDelete').resolves(carResposta));
    after(() => sinon.restore());
    it('EXPECTS TO RETURN AN OBJECT', async() => {
      const car = await carService.delete(carResposta._id);
      expect(car).to.be.an('object');
    });

    it('EXPECTS TO RETURN AN OBJECT WITH KEYS', async() => {
      const car = await carService.delete(carResposta._id);
      expect(car).to.have.all.keys(exampleKeys);
    });
  });

});