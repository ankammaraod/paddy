const assert = require('assert');
const { Account } = require('../src/account.js');

describe('currentBalance', () => {
  it('should give the current balance from an account', () => {
    const ac1 = new Account('ankamma', 2021011010110, 3000);
    assert.deepStrictEqual(ac1.currentBalance(), 3000);
  });
});

describe('creditBalance', () => {
  it('should credit money into the account', () => {
    const ac1 = new Account('john', 2021011010111, 500);
    assert.deepStrictEqual(ac1.creditBalance(500), 1000);
  });
});
