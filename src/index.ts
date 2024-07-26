/** Parameter Properties:-- cool features of typescript that help to write more concise code */

/** -----------: Proble discuss below code :----------------
 *
 * Below constructor we have three parameter and three line of code for intializing relative properties..
 * So every time we created class in typescript we have to repeat this patterns..
 *
 * This proble solve by Parameter properties
 */

class Account {
  // we don't declare properties like when we use parameter properties
  // readonly id: number;
  // user: string;
  // private _balance;
  // nickname?: string;

  //Parameters properties typescript compiler create properties for us and initilize for us

  constructor(
    public readonly id: number,
    public user: string,
    private _balance: number,
    public nickname?: string
  ) {}

  // constructor(id: number, user: string, balance: number, nickname?: string) {
  //   this.id = id;
  //   this.user = user;
  //   this._balance = balance;
  //   this.nickname = nickname;
  // }

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Enter valide amount");
    }
  }

  //This function use to show the private property to user of this class(object)

  getBalance(): number {
    return this._balance;
  }
}

//creating the objects

let account = new Account(2, "mosh", 0);
account.deposit(100);
console.log(account.getBalance());
