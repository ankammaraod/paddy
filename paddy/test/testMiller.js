const { Miller } = require('../src/miller.js');

const assert = require('assert');

describe('gross', () => {
  it('should give how much money to the given quantity', () => {
    const miller1 = new Miller(75, 1 / 3, 75, 1360);
    const miller2 = new Miller(150, 1 / 3, 75, 1360);
    assert.deepStrictEqual(miller1.gross(), 1360);
    assert.deepStrictEqual(miller2.gross(), 2720);
  });
});

describe('bagsOfPaddy', () => {
  it('should give how many bags can made with given quantity', () => {
    const miller1 = new Miller(75, 1 / 3, 75, 1360);
    const miller2 = new Miller(500, 1 / 3, 75, 1360);
    assert.deepStrictEqual(miller1.bagsOfPaddy(), 1);
    assert.deepStrictEqual(miller2.bagsOfPaddy(), 7);
  });
});

describe('wastage', () => {
  it('should give how much wastage will come if we made rice', () => {
    const miller1 = new Miller(75, 1 / 3, 75, 1360);
    assert.deepStrictEqual(miller1.wastage(), 25);
  });
});
//1 bag contains 50kgs of rice by giving 75kgs miller
describe('quantityOfRice', () => {
  it('should give how many kgs of rice with given quantity', () => {
    const miller1 = new Miller(75, 1 / 3, 75, 1360);
    const miller2 = new Miller(500, 1 / 3, 75, 1360);
    assert.deepStrictEqual(miller1.quantityOfRice(), 50);
    assert.deepStrictEqual(miller2.quantityOfRice(), 334);
  });
});

describe('quantityOfPowder', () => {
  it('should give quantity of powder with given quantity', () => {
    const miller1 = new Miller(75, 1 / 3, 75, 1360);
    const miller2 = new Miller(500, 1 / 3, 75, 1360);
    assert.deepStrictEqual(miller1.quantityOfPowder(), 12.5);
    assert.deepStrictEqual(miller2.quantityOfPowder(), 83);
  });
});

