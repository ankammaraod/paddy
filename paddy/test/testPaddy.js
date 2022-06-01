const { Paddy } = require('../src/paddy');
const assert = require('assert');

describe('gross', () => {
  it('should give how much money to the given quantity', () => {
    //quantity shouldbe kgs
    const paddy1 = new Paddy(75, 1360);
    const paddy2 = new Paddy(150, 1360);
    assert.deepStrictEqual(paddy1.gross(), 1360);
    assert.deepStrictEqual(paddy2.gross(), 2720);
  });
});

describe('bagsOfPaddy', () => {
  it('should give how many bags can made with given quantity', () => {
    const paddy1 = new Paddy(75, 1360);
    const paddy2 = new Paddy(500, 1360);
    assert.deepStrictEqual(paddy1.bagsOfPaddy(), 1);
    assert.deepStrictEqual(paddy2.bagsOfPaddy(), 7);
  });
});

describe('wastage', () => {
  it('should give how much wastage will come if we made rice', () => {
    const paddy1 = new Paddy(75, 1360);
    assert.deepStrictEqual(paddy1.wastage(), 25);
  });
});
//1 bag contains 50kgs of rice by giving 75kgs paddy
describe('quantityOfRice', () => {
  it('should give how many kgs of rice with given quantity', () => {
    const paddy1 = new Paddy(75, 1360);
    const paddy2 = new Paddy(500, 1360);
    assert.deepStrictEqual(paddy1.quantityOfRice(), 50);
    assert.deepStrictEqual(paddy2.quantityOfRice(), 334);
  });
});

describe('quantityOfPowder', () => {
  it('should give quantity of powder with given quantity', () => {
    const paddy1 = new Paddy(75, 1360);
    const paddy2 = new Paddy(500, 1360);
    assert.deepStrictEqual(paddy1.quantityOfPowder(), 12.5);
    assert.deepStrictEqual(paddy2.quantityOfPowder(), 83);
  });
});

describe('quantityOfSoilRice', () => {
  it('should give quantity of soil rice with given quantity', () => {
    const paddy1 = new Paddy(75, 1360);
    assert.deepStrictEqual(paddy1.quantityOfSoilRice(), 12.5);
  });
});