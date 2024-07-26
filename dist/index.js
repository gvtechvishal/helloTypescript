"use strict";
class Account {
    constructor(id, user, balance, nickname) {
        this.id = id;
        this.user = user;
        this.balance = balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Enter valide amount");
        }
        this.balance += amount;
    }
}
let account = new Account(2, "mosh", 0, "mosheee");
account.deposit(100);
console.log(account);
console.log(account instanceof Account);
const User1 = new Account(1, "vishal", 0);
try {
    console.log(User1);
    User1.deposit(0);
    console.log(User1);
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=index.js.map