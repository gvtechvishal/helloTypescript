/** Accessor Decorators:- modify getter and setter */

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const origanal = descriptor.get;

  descriptor.get = function () {
    const result = origanal?.call(this);

    return typeof result === "string" ? result.toUpperCase() : result;
  };
}
class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("vishal", "kagadiya");

console.log(person.fullName);
