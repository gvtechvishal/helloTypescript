"use strict";
class Account {
    constructor(id, user, balance, nickname) {
        this.id = id;
        this.user = user;
        this._balance = balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Enter valide amount");
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(2, "mosh", 0);
account.deposit(100);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map