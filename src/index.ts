/** Method Decorators:-- */

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // we do completelly replace say() method with new method like below code
  // descriptor.value = function () {
  //   console.log("new implementation");
  // };

  const original = descriptor.value as Function;
  descriptor.value = function (message: string) {
    //below line of code make more generic so we can use other type also
    // descriptor.value = function (...args: any) {
    console.log("Before");
    //call original method.. first create reference of original method
    // original.call(this, ...args);
    original.call(this, message);
    console.log("After");
  };
}
class Person {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let person = new Person();
person.say("Hello");
