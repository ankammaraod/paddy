/* eslint-disable id-length */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(point) {
    return (
      point instanceof Point &&
      point.x === this.x &&
      point.y === this.y
    );
  }
}

exports.Point = Point;
