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
    this.balance = this.balance + amount;
    return this.currentBalance();
  }
}
exports.Account = Account; 
