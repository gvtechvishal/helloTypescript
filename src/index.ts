/**  -------------: polymorphism :--- one of the core concept of oop...
   poly means "many" and morph  means "forms":- polymorphism means many forms.. and this reffer to this situation 
   where objects takes many different forms..
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
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principle extends Person {
  override get fullName() {
    return "Principle " + super.fullName;
  }
}

/** This function show the polymorphism in action.. simple print some person name */

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// call this function

printNames([
  new Student(1, "vishal", "kagadiya"),
  new Teacher("mosh", "hamdani"),
  new Principle("vishal", "kagadiay"),
]);

/** Why this code call polymorphism:--- hover the mouse on "person" object in for loop it's type is "Person".
 * Each ittration of for loop the "person" object taking different forms.. in the first ittretion they take a form
 * of student because our first element of array is student object and second ittration our person object take the form
 * teacher object..
 *
 * That is why fullName property or fullName getter give different outputs..
 * so our person object taking many forms they act like polymorphically.
 *
 * why is powerfull??
 *
 * tomoorrow we create a new class like principle which represents school principle and we can print the full name of
 * priciple using "printNames" function without making a single change of this functions.
 */

/**
 * Without making single change of code in function that lead to another priciple of oop called "open closed principle"
 *
 *
 * Classes should be open for extension and closed for modification.
 *
 
 */

/** why we use override keyword because we say the compiler this is method is override that help to polymorphic behaviour in functions where our object take many form */
