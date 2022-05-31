class Account {
  constructor(name, acNumber, balance) {
    this.name = name;
    this.acNumber = acNumber;
    this.balance = balance;
  }
  currentBalance() {
    return this.balance;
  }

  creditBalance(amount) {
    this.balance += amount;
    return this.currentBalance();
  }

  depositBalance(amount) {
    if (this.balance < amount) {
      return 'inSufficient balance...';
    }
    this.balance -= amount;
    return this.currentBalance();
  }

  accInfo() {
    return this.acNumber + ' : ' + this.name + ' : ' + this.balance;
  }
}
exports.Account = Account; 
