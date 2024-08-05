/**----------: key of operator:-------------------- */
interface Product {
  name: string;
  price: number;
}
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
  //add method for finding product base on property and value

  // T is product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

// how to use this implementation

let store = new Store<Product>();
store.add({ name: "a", price: 1 });

store.find("name", "a");
store.find("price", 1);
// one problem here we call the function with not existing property..
// when we run program our program is crash because no any product have 'nonExistingProperty' attribute

// store.find("nonExistingProperty", 1);
