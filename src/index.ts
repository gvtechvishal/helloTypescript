/** Access Control keyword*/
/** Typescript have "access control modifiers" for controlling access of properties and methods..
 *  Using thos property we write more robust code.
 */

/** Real world scenario of why we required "modifiers"
 * In real world every time money is deposit or withdraw from account we required to store transaction details
 * in transaction array [] and store transaction before money deposit or withdraw. Our core logic for this two
 * operation perform in "balance" property write like (deposit: balance = blance + deposit_amount, withdraw= balance - withdraw_amount).
 * but below code implementation we access the balance property out side the class and also modify it...
 *
 * so first problem is any one can change the balance and we can not store transaction details like who made transaction,
 * who receive transaction..
 *
 * Here we use Access modifiers for propeties for controlling the access of it...
 *
 *
 *
 * Misconception mostly comman mistake private property not use to store sensitive data like user password,credit card number like,
 * we use it for writing robust code.
 *
 */

class Account {
  // properties
  readonly id: number;
  user: string;
  // balance: number;  // berfor apply of private access modifer
  private _balance;
  nickname?: string;

  constructor(id: number, user: string, balance: number, nickname?: string) {
    this.id = id;
    this.user = user;
    this._balance = balance;
    this.nickname = nickname;
  }

  // methode

  deposit(amount: number) {
    //this.id = 23;  line give error because "id" is read only property.
    if (amount <= 0) {
      throw new Error("Enter valide amount");
    }

    //internaly use calculateTax() function
    this.calculateTax();

    // Store the transaction details
    this._balance += amount;
  }

  //Acees modifer use with function also and this function only use within the class

  private calculateTax() {
    console.log("tax calculation");
  }

  //This function use to show the private property to user of this class(object)

  getBalance(): number {
    return this._balance;
  }
}

//creating the objects

let account = new Account(2, "mosh", 0);
//before apply "private" to balance.. below line not give error
// account._balance = 500;
account.deposit(100);

// Below console use to show private property

console.log(account.getBalance());

/** In my mind one queation is what are differnt between "readonly" and private and 
 * i use chat gpt for find answer and they look like...
 * 
  readonly Modifier
    Purpose: Ensures that a property can only be assigned a value at the time of declaration or in the constructor of the class. Once assigned, it cannot be changed.
    Visibility: readonly properties are public by default. They can be accessed from outside the class but cannot be modified.
    Usage: Use readonly when you want to protect the property from being changed after initialization.


  private Modifier
    Purpose: Restricts access to the property so that it can only be accessed and modified within the class itself.
    Visibility: private properties cannot be accessed or modified from outside the class.
    Usage: Use private to encapsulate and hide the internal implementation details of a class.


  Combining Access and Readonly Modifiers
   You can combine private and readonly modifiers to create properties that have restricted access and immutability.

  In summary:

    public, private, and protected are access modifiers that control the visibility of class members.
    readonly is a property modifier that ensures a property can only be assigned once and is often used in conjunction with access modifiers to control both visibility and immutability.
 */

/** Details Inforamtion of 
 * 
 * 
 * 
 * 
******************Access Modifiers********************************************
Access modifiers control the visibility of class members. The primary access modifiers in TypeScript are:

public: Members are accessible from anywhere (default behavior).
private: Members are accessible only within the class they are declared.
protected: Members are accessible within the class they are declared and in derived classes.


*********************readonly Modifier********************
The readonly modifier is not an access modifier but a property modifier that ensures a property can only be assigned once, either at the point of declaration or in the constructor.

Detailed Example with Both Modifiers

*****************************public, private, and protected Modifiers***************************

class Animal {
  public name: string;        // Public: accessible anywhere
  private age: number;        // Private: accessible only within the class
  protected species: string;  // Protected: accessible within the class and derived classes

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  getAge(): number {
    return this.age;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, 'Dog');
  }

  getSpecies(): string {
    return this.species;
  }
}

const myDog = new Dog('Buddy', 5);
console.log(myDog.name);        // Accessible
// console.log(myDog.age);      // Error: 'age' is private
console.log(myDog.getAge());    // Accessible via public method
console.log(myDog.getSpecies()); // Accessible via method in derived class


*************************readonly Modifier**********************************
class Car {
  readonly model: string;  // Readonly: can be assigned once and cannot be changed afterwards

  constructor(model: string) {
    this.model = model;
  }

  getModel(): string {
    return this.model;
  }
}

const myCar = new Car('Tesla Model S');
console.log(myCar.model);    // Accessible
// myCar.model = 'Audi A4';  // Error: Cannot assign to 'model' because it is a read-only property.




*******************************Combining Access and Readonly Modifiers************************
You can combine access and readonly modifiers to create properties that have restricted access and immutability.

class Book {
  private readonly title: string;

  constructor(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}

const myBook = new Book('1984');
console.log(myBook.getTitle()); // Accessible via public method
// myBook.title = 'Brave New World'; // Error: Cannot assign to 'title' because it is a read-
 */
