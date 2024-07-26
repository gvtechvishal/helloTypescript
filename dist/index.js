"use strict";
class Animal {
    constructor(name, age, specied) {
        this.name = name;
        this._age = age;
        this.specied = specied;
    }
    getAge() {
        return this._age;
    }
}
class Dog extends Animal {
    constructor(name, age, dogname) {
        super(name, age, "Dog");
        this.Dogname = dogname;
    }
    getSpecies() {
        return this.specied;
    }
    getDogName() {
        return this.Dogname;
    }
}
let myDog = new Dog("buddy", 20, "mehlll");
console.log(myDog);
//# sourceMappingURL=index.js.map