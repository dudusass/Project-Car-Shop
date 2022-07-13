import { expect } from 'chai';
import mongoose from 'mongoose';
import sinon from 'sinon';

import CarsModel from '../../../models/CarModel';
import { carExemplo, carResposta } from '../mocks/mocks';

const exemploKeys= ['_id', 'model', 'year', 'color', 'status', 
  'buyValue', 'doorsQty', 'seatsQty'];

describe('TESTING MODEL CAR', () => {
  const carModel = new CarsModel();
  describe(':: TESTANDO O METODO CREATE DA MODEL', () => {
    before(async() => sinon.stub(mongoose.Model, 'create').resolves(carResposta));
    after(() => sinon.restore());

    it('EXPECTS TO RETURN AN OBJECT', async() => {
      const car = await carModel.create(carExemplo);
      expect(car).to.be.an('object');
    });

    it('EXPECTS TO RETURN AN OBJECT WITH KEYS', async() => {
      const car = await carModel.create(carExemplo);
      expect(car).to.have.all.keys(exemploKeys);
    });
  });
});