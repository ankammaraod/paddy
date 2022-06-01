/* eslint-disable id-length */
const square = (x) => x * x;

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

  isToBottomLeft(x, y) {
    return this.x < x && this.y < y;
  }

  isToTopRight(x, y) {
    return this.x > x && this.y > y;
  }

  updatePoint(x, y) {
    this.x += x;
    this.y += y;
  }

  translate(x, y) {
    return new Point(this.x + x, this.y + y);
  }

  distance(anotherPoint) {
    const xDelta = square(anotherPoint.x - this.x);
    const yDelta = square(anotherPoint.y - this.y);
    return parseFloat(Math.sqrt(xDelta + yDelta).toFixed(2));
  }
}

exports.Point = Point;
