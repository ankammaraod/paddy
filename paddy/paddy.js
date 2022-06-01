const { Paddy } = require('./src/paddy.js');

const main = () => {
  const paddy1 = new Paddy(75, 1360);
  return paddy1.quantityOfRice();
};

console.log(main());
