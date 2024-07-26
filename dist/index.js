"use strict";
class Account {
    constructor(id, user, _balance, nickname) {
        this.id = id;
        this.user = user;
        this._balance = _balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Enter valide amount");
        }
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "mosh", 0);
account.deposit(100);
console.log(account.balance);
//# sourceMappingURL=index.js.map