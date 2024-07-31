/** -------------------------:Generics:---------------------- */
/** Problem that solve by generic:--
 *
 * class that represent key value pair
 */

class keyValuePair {
  constructor(public key: number, public value: string) {}
}

// here we only pass number as a key what we do for pass string as well as

let pair = new keyValuePair(1, "vishal");

//below line of code not working
// let pair2 = new keyValuePair("2", "nishant");

//pair2.key.  we don't see the intelegence here

/** so we can solve using any type to key parameter right but is not right way to solve this type of problems..
 *
 * another way we create anthor class for that accept key as string like below
 */

class StringKeyValuePair {
  constructor(public key: string, public value: string) {}
}
//this line is valid now
// let pair2 = new keyValuePair("2", "nishant");

/** How to solve this problem: we create generic or common solution for this. */
