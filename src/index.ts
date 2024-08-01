/**----------: Generic classes and inheritance:-------------------- */
/**-----------: Extending Generic classes:-------------- */

/** we can learn using one example of ecommers example  */

interface Product {
  name: string;
  price: number;
}

// mechenism for storing different product,shopping cart,order and soo onnn.

class Store<T> {
  //this use in scenario 1
  // private _objects: T[] = [];
  //this use in scenario 2
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

/** without private we can access property objects and wipe out the stor objects like below code */

// const store = new Store<Product>();
// store._objects = [];

//How we extend this generic classes
/** we have three different scenario for extending classes */

/** Scenario 1:-- Pass on the generic type parameter */

//we build for compress the store

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store2 = new CompressibleStore<Product>();

store2.add({ name: "shoes", price: 2 });
store2.compress();

/** Scenario 2:-- Restrict the generic type parameter */
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

/** In find method obj.name compiler not know T contain name property..
 *
 * so we solve using constraint like extends {name:string}
 */

/** Scenario 3:-- Fixing the generic type parameter */
/** Certain operation perform on product  */

class ProductStore extends Store<Product> {
  //this operation very specific to product
  filterByCategory(category: string): Product[] {
    //simplicity we return simple empty array

    return [];
  }
}
