/** Interfaces */
/**
 * In TypeScript, an interface is a way to define the shape of an object. It specifies the types of properties and methods that an object can have. Interfaces are a powerful way to enforce type checking and ensure that objects adhere to a specific structure.

Defining an Interface
To define an interface in TypeScript, use the interface keyword followed by the name of the interface and a block of property and method declarations.

Example
Here is an example of a basic interface: */

interface Person {
  name: string;
  age: number;
  greet(): void;
}

const person: Person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Output: Hello, John Doe

/**
 * In this example:

The Person interface defines three members: name, age, and greet.
The person object adheres to the Person interface by providing implementations for the name, age, and greet properties.
Optional Properties
You can define optional properties in an interface by using the ? operator:
 */

interface Car {
  make: string;
  model: string;
  year?: number; // Optional property
}

const car1: Car = {
  make: "Toyota",
  model: "Corolla",
};

const car2: Car = {
  make: "Ford",
  model: "Mustang",
  year: 2020,
};

/**In this example:

The year property in the Car interface is optional.
car1 does not provide a year, while car2 does.

Readonly Properties

You can define readonly properties in an interface to ensure that they cannot be modified after initialization:
 */

interface Book {
  readonly title: string;
  author: string;
}

const book: Book = {
  title: "1984",
  author: "George Orwell",
};

book.author = "Orwell"; // Allowed
// book.title = 'Animal Farm'; // Error: Cannot assign to 'title' because it is a read-only property.

/**In this example:

The title property in the Book interface is readonly, so it cannot be modified after the book object is created.
Extending Interfaces
Interfaces can extend other interfaces, allowing you to build on existing structures: */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  age: 5,
  breed: "Golden Retriever",
};

/**
 * In this example:

The Dog interface extends the Animal interface, inheriting its properties and adding a new property breed.
Implementing Interfaces in Classes
Classes can implement interfaces to enforce the structure defined by the interface:
 */

interface Shape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area()); // Output: 50
console.log(rectangle.perimeter()); // Output: 30

/**
 * 
 * In this example:

The Shape interface defines two methods: area and perimeter.
The Rectangle class implements the Shape interface and provides concrete implementations for the area and perimeter methods.
Summary
Interfaces in TypeScript are used to define the structure of objects, ensuring type safety and consistency. They can include properties and methods, optional properties, readonly properties, and can be extended by other interfaces or implemented by classes. Using interfaces helps you create flexible and maintainable code.
 */
