const assert = require('assert');
const { Account } = require('../src/account.js');

describe('currentBalance', () => {
  it('should give the current balance from an account', () => {
    const ac1 = new Account('ankamma', 202103, 3000);
    assert.deepStrictEqual(ac1.currentBalance(), 3000);
  });
});

describe('creditBalance', () => {
  it('should credit money into the account', () => {
    const ac1 = new Account('john', 202102, 500);
    assert.deepStrictEqual(ac1.creditBalance(500), 1000);
  });
});

describe('accInfo', () => {
  it('should give the details of a account', () => {
    const ac1 = new Account('abin', 202101, 400);
    assert.deepStrictEqual(ac1.accInfo(), '202101 : abin : 400');
  });
});

describe('depositBalance', () => {
  it('should deposit money from account', () => {
    const ac1 = new Account('prajakta', 202104, 1400);
    assert.deepStrictEqual(ac1.depositBalance(500), 900);
  });

  it('should give message if inSufficient balance', () => {
    const ac1 = new Account('abin', 202105, 400);
    assert.deepStrictEqual(ac1.depositBalance(500), 'inSufficient balance...');
  });
});
