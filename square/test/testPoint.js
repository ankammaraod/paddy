const assert = require('assert');
const { Point } = require('../src/point.js');
describe('equals', () => {
  it('should validate with given points', () => {
    const point1 = new Point(2, 2);
    const point2 = new Point(2, 2);
    assert.ok(point1.equals(point2));
  });
});
