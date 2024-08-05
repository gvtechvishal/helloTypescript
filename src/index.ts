/** Property decorator */

function MinLength(length: number) {
  // Here return actully decorator function
  // property decoratore very similary to method decorator

  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} should be at least ${length} characters long.`
          );
        }
        value = newValue;
      },
    };

    console.log(target, propertyName, descriptor);

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  //check password have minimum 4 length
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User("1234fd5");

console.log(user.password);
