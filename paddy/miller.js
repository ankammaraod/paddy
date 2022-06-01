/* eslint-disable no-magic-numbers */
const { Miller } = require('./src/miller.js');

const main = () => {
  const miller = new Miller(75, 1 / 3, 75, 1360);
  return miller.bagsOfPaddy();
};

console.log(main());
