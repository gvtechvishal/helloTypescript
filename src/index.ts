/**----------: Type Mapping :-------------------- */
/** Type mapping in TypeScript involves creating new types by transforming properties of existing types. This is often done using mapped types, which allow you to iterate over the keys of a type and apply transformations to the properties. Mapped types are particularly useful for creating new types that are variations of existing ones, such as making all properties optional, readonly, or applying some other transformation. */

/** 
 * Basic Syntax
The basic syntax of a mapped type is:


type MappedType = {
  [Key in keyof OriginalType]: TransformedType;
};
Here, Key is a type variable that iterates over the keys of OriginalType (obtained using keyof), and TransformedType can be any transformation or type expression.
 */

/**  problem discusstion:-  i have one interface of Product like below.. somewhere in our app we need to Product interface
 * with readonly property.. so we create one another interface but it is not valide solution.. insted of we use type mapping for this problem like
 *
 */

interface Product {
  name: string;
  price: number;
}

// here we create read only product
type ReadOnlyProduct = {
  readonly [key in keyof Product]: Product[key];
};

let product: ReadOnlyProduct = {
  name: "abc",
  price: 3,
};

// this is not allow because we make all property readonly
// product.name = "vish";

// we also make generic type also like

type ReadOnly<T> = {
  readonly [k in keyof T]: T[k];
};

let product2: ReadOnly<Product> = {
  name: "cake",
  price: 3,
};

// we create Optional like

type Optional<T> = {
  [k in keyof T]?: T[k];
};

//we create nullable like

type Nullable<T> = {
  readonly [k in keyof T]: T[k] | null;
};
