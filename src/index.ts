/** Generic functions */
/** look simple example of functions  */

function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray("1");
let numbers2 = wrapInArray(2);

/** This function is methods inside a class */

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers3 = ArrayUtils.wrapInArray(2);
let numbers4 = ArrayUtils.wrapInArray("2");
