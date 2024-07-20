/** primite type of javascript is
 * 1) number 2) string 3)boolean 4) undefined 5) object 6)symbol
 * it's work in typescript and also typescript add some
 * 1) any 2) unknown 3) never 4)enum 5) tuple
 */

// play with primite type of typscript

// let sales: number = 123_343_433;
// let course:string = 'Typscript';
// let is_published:boolean = true;

/** In typescript we don't annoted variables because
 * typescript compiler can detect which type of variables base
 * on values.
 *
 * check below code.. hover mouse on variables and see compiler
 * detect which type of variable
 */

let sales = 123_343_433;
let course = "Typscript";
let is_published = true;

// if declare a variable only and hover it and see what is type

let level;

/** typscript compiler assign any type if we not annoted.
 * It's lose the benifite of typescript.
 * best practice avoid to use.
 */

level = 1;
level = "hiii";

//Another example of for learn

// function render(document) {
//   console.log(document);
// }

/** Look and hover of render fn parameter document
 * it's show compilation error(document is any type)
 */

/** consider one scenario when we convert our javascript code
 * into typescript. impossible for us to which type of parameter we receive in this type functions where we use "any" type
 *
 * we solve this error two way
 * 1) annotated parameter like render(document:any)
 * what happne when lot's of error in the code we don't go everywhere and annotated like this
 * 2) We can disable this type of error configuring typscript compiler in tsconfing.json
 */

function render(document) {
  console.log(document);
}
