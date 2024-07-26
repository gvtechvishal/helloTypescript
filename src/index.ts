/** creating the class:- class is blue print of object or factory for creating the object */

class Account {
  // properties
  id: number;
  user: string;
  balance: number;

  constructor(id: number, user: string, balance: number) {
    this.id = id;
    this.user = user;
    this.balance = balance;
  }

  // methode

  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Enter valide amount");
    }

    this.balance += amount;
  }
}
