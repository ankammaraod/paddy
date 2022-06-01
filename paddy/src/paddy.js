/* eslint-disable no-magic-numbers */
class Paddy {
  //quantity should be kgs 75kgs of paddy cost is 1360

  constructor(quantity, price) {
    this.quantity = quantity;
    this.price = price;
  }

  gross() {
    return this.bagsOfPaddy() * this.price;
  }

  bagsOfPaddy() {
    //A bag can contain 75 kgs of paddy
    return Math.round(this.quantity / 75);
  }

  wastage() {
    return Math.floor(this.quantity * (1 / 3));
  }

  quantityOfRice() {
    return this.quantity - this.wastage();
  }

  quantityOfPowder() {
    return this.wastage() * (1 / 2);
  }

  //the quantity of powder and soil rice is same

  quantityOfSoilRice() {
    return this.wastage() * (1 / 2);
  }
}

exports.Paddy = Paddy;
