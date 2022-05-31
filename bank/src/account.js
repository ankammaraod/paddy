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
  }

  depositBalance(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }
  }

  accInfo() {
    return this.acNumber + ' : ' + this.name + ' : ' + this.balance;
  }
}

exports.Account = Account; 
