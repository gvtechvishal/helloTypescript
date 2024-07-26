/** Read only and optional properties:--
 *
 * Read only:---
 * id of Acoount class change accidentally from outside of class and as well inside of class method..
 * so we add "readonly" prefix to property that not modify like that only modify inside the
 * constructor function means assign value first time.
 *
 * Optional:- (?)
 *
 * Some of the propery of class optional meaning we can not assign a value when creating object of that class.
 * like Every Account object not have "nickname" property so we declare this propery as a optional using "?" mark.
 *
 */
class Account {
  // properties
  readonly id: number;
  user: string;
  balance: number;
  nickname?: string;

  constructor(id: number, user: string, balance: number, nickname?: string) {
    this.id = id;
    this.user = user;
    this.balance = balance;
    this.nickname = nickname;
  }

  // methode

  deposit(amount: number) {
    //this.id = 23;  line give error because "id" is read only property.
    if (amount <= 0) {
      throw new Error("Enter valide amount");
    }

    this.balance += amount;
  }
}

//creating the objects

let account = new Account(2, "mosh", 0);
account.deposit(100);
// account.id= 500; line give error because "id" is read only property.

console.log(account);
console.log(account instanceof Account);

const User1 = new Account(1, "vishal", 0);

try {
  console.log(User1);
  User1.deposit(0);
  console.log(User1);
} catch (error) {
  console.log(error);
}
