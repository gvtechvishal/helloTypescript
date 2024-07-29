/** Inheritance:- Inheritance is mechenism that allow us to reuse code. */

/** consider a student and teacher class have firstName,lastName propeties and talk(),walk() method.. we don't repeate this
 * code to every class we make a separate class called person that have this properties and methodes and we inherite in student and teacher class.
 */

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

let student = new Student(1, "vishal", "vishal@gmail.com");

console.log(student.fullName);
