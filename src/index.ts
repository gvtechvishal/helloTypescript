/** Typescript have built in another type "enum"
 *  enum represent list of related constant
 *
 *  Consider the we can represent size of tshirts as constant one way we can solve like
 *
 * const small = 1,
 * const medium= 2,
 * const large = 3
 * another way we can group this constant inside in 'enum'
 */

//pascalCase
enum Size {
  Small = 1, //default compiler give value to small=0,medium=1,Large=2
  Medium,
  Large,
}

// we can use this enum using new variable

let mySize: Size = Size.Medium;

console.log(mySize);

/** see the index.js file where generated js code is to verbose.
 *
 * we can generate more optimize code using below code like
 */

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
