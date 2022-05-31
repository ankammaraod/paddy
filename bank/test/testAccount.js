const assert = require('assert');
const { Account } = require('../src/account.js');

describe('currentBalance', () => {
  it('should give the current balance from an account', () => {
    const ac1 = new Account('ankamma', 202103, 3000);
    const ac2 = new Account('rao', 202100, 100);
    assert.deepStrictEqual(ac1.currentBalance(), 3000);
    assert.deepStrictEqual(ac2.currentBalance(), 100);
  });
});

describe('creditBalance', () => {
  it('should credit money into the account', () => {
    const ac1 = new Account('john', 202102, 500);
    const ac2 = new Account('johnBabu', 202107, 1500);
    ac1.creditBalance(500);
    assert.deepStrictEqual(ac1.currentBalance(), 1000);
    ac2.creditBalance(300);
    assert.deepStrictEqual(ac2.currentBalance(), 1800);
  });
});

describe('accInfo', () => {
  it('should give the details of a account', () => {
    const ac1 = new Account('abin', 202101, 400);
    const ac2 = new Account('ashritha', 202112, 1300);
    assert.deepStrictEqual(ac1.accInfo(), '202101 : abin : 400');
    assert.deepStrictEqual(ac2.accInfo(), '202112 : ashritha : 1300');
  });
});

describe('depositBalance', () => {
  it('should deposit money from account', () => {
    const ac1 = new Account('prajakta', 202104, 1400);
    const ac2 = new Account('nitin', 202109, 1000);
    ac1.depositBalance(500);
    assert.deepStrictEqual(ac1.currentBalance(), 900);
    ac2.depositBalance(500);
    assert.deepStrictEqual(ac2.currentBalance(), 500);
  });
});
