/* eslint-disable no-magic-numbers */
class Miller {
  #quantity;
  #wastePercent;
  #bagCapacity;
  #price;
  constructor(quantity, wastePercent, bagCapacity, price) {
    this.#quantity = quantity;
    this.#wastePercent = wastePercent;
    this.#bagCapacity = bagCapacity;
    this.#price = price;
  }

  gross() {
    return this.bagsOfPaddy() * this.#price;
  }

  bagsOfPaddy() {
    return Math.round(this.#quantity / this.#bagCapacity);
  }

  wastage() {
    return Math.floor(this.#quantity * this.#wastePercent);
  }

  quantityOfRice() {
    return this.#quantity - this.wastage();
  }

  quantityOfPowder() {
    return this.wastage() * (1 / 2);
  }
}

exports.Miller = Miller;
