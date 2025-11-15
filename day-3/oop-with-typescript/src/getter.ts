// getter
// setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  //   addBalance(balance: number) {
  //    return this._userBalance = this._userBalance + balance;
  //   }

  set addBalance(amount: number) {
    this._userBalance += amount;
  }

  //   getBalance() {
  //     return this._userBalance;
  //   }

  get getBalance() {
    return this._userBalance;
  }
}

const demoBankAccount = new BankAccount(
    123,
    'username',
    100
);


demoBankAccount.addBalance = 200;

console.log(demoBankAccount);
console.log(demoBankAccount.getBalance);