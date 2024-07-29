/** Method overriding:- Process to change the implementation of same methods that define in base class..
 * sometime we need to change the code in inherited from base class like method implementation..
 *
 * Method overriding in TypeScript (and in object-oriented programming in general) allows a subclass to provide a specific implementation of a method that is already defined in its superclass.
 * The overriding method in the subclass should have the same name, parameters, and return type as the method in the superclass.
 * This allows the subclass to modify or extend the behavior of the method.
 *
 * example look full name getter in base class of person.. we want inherite this code in teacher class but we get full name
 * with "professor" prefix... in this case we need to override method of base class.
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

class Teacher extends Person {
  // with out "override" keyword we got same result that why we configure in tscofig files..

  // we forgot the 'override' keyword we disconnect to base class
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("vishal", "kagadiya");
console.log(teacher.fullName);
