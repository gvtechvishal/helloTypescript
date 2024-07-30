/** protected :- Protected member access anywhere within class but not outside but differnce is protected members are inherited but private not.  */

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  protected walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    //we call protected member here or any where in this class
    this.walk();
    console.log("Taking a test");
  }
}
