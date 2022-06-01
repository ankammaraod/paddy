const assert = require('assert');
const { Point } = require('../src/point.js');

describe('equals', () => {
  it('should equate two instance of same class', () => {
    const point1 = new Point(2, 2);
    const point2 = new Point(2, 2);
    assert.ok(point1.equals(point2));
  });
  it('should validate with negative values', () => {
    const point1 = new Point(-7, -1);
    const point2 = new Point(-7, -1);
    assert.ok(point1.equals(point2));

  });
});

describe('isToBottomLeft', () => {
  it('should validate the origin is to bottom left to point', () => {
    const point1 = new Point(0, 0);
    assert.ok(point1.isToBottomLeft(2, 4));
    assert.ok(point1.isToBottomLeft(7, 1));
  });
});

describe('isToTopRight', () => {
  it('should validate the vertix of origin is to top right to point', () => {
    const point1 = new Point(10, 10);
    assert.ok(point1.isToTopRight(3, 2));
    assert.ok(point1.isToTopRight(4, 9));
  });
});

describe('translate', () => {
  it('should give the point by adding given offset', () => {
    const p1 = new Point(2, 2);
    const actual = p1.translate(4, 5);
    const expected = new Point(6, 7);
    assert.deepStrictEqual(actual, expected);
  });
});

describe('distance', () => {
  it('should give distance between two points ', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(4, 4);
    assert.deepStrictEqual(point1.distance(point2), 5.66);
  });
});

