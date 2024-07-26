class Animal {
  public name: string;
  private _age: number;
  protected specied: string;

  constructor(name: string, age: number, specied: string) {
    this.name = name;
    this._age = age;
    this.specied = specied;
  }

  getAge(): number {
    return this._age;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Dog");
  }

  getSpecies(): string {
    return this.specied;
  }
}

let myDog = new Dog("buddy", 20);
console.log(myDog);
