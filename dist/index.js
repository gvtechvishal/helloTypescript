"use strict";
var _a;
function getCustomer(id) {
    return id === 0
        ? null
        : {
            birthday: new Date(),
        };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
function getCustomer2(id) {
    return id === 0
        ? null
        : {
            birthday: new Date(),
        };
}
let customer2 = getCustomer2(1);
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
console.log(log === null || log === void 0 ? void 0 : log("a"));
//# sourceMappingURL=index.js.map