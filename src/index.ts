/** --------------:-Getter and Setter:--------- */
/** Problem discution :-- look this line of code account.getBalance()..
 *
 * it is use to access private property but it is ugly... so we cane access like
 * "account.balance".. like simple property access of object right...
 * For this purpose we use the "getter and setter".
 *
 * soo getter or setter use to set or get properties of class
 */

class Account {
  constructor(
    public readonly id: number,
    public user: string,
    private _balance: number,
    public nickname?: string
  ) {}

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Enter valide amount");
    }
  }

  //  getter function
  get balance(): number {
    return this._balance;
  }

  //setter function.. but this setter function logically incorrect so comment out

  // set balance(value: number) {
  //   //we use validation for propertiy value

  //   if (value <= 0) {
  //     throw new Error("Invalide value");
  //   }
  //   this._balance += value;
  // }
}

let account = new Account(1, "mosh", 0);
account.deposit(100);
//below line of code only read allow the read balance we can not write it's
console.log(account.balance);

// account.balance = 34; // this give error because we can not set private propert here if class have setter function for set balance then set it.
