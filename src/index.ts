/** --------------: Generic class for solving to problem:--------------- */

//we write one more generic types
class keyValuePair<T> {
  constructor(public key: T, public value: string) {}
}

// we can pass like:--

const pair = new keyValuePair<number>(1, "vishal");
const pair2 = new keyValuePair<string>("2", "kanti");
//compiler auto detect type of key
const pai3 = new keyValuePair(1, "vishal");

class keyValuePair2<K, V> {
  constructor(public key: K, public value: V) {}
}

//compiler auto detect
const pair4 = new keyValuePair2("5", "vish");
