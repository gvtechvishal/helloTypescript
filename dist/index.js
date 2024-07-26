"use strict";
class Account {
    constructor(id, user, balance) {
        this.id = id;
        this.user = user;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Enter valide amount");
        }
        this.balance += amount;
    }
}
//# sourceMappingURL=index.js.map