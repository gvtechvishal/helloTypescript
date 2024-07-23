/** How to working with null value in typescripts..
 *
 *
 * TYPESCRIPT is very strict about using null and undefined values because we know
 * this values common source of bug in our application
 */

// function greet(name: string) {
//   console.log(name.toUpperCase());
// }

// greet(null)
/**it's complete valid in vanilla javascript code. we we run this program it's crash.
 * we don't call method of toUpperCase() on null or undefined value.
 */

// greet(null);
/** By default typescript compiler stop us using null or undefined values.
 *
 * By default when our type cheking is strict in tsconfig file. in this setting "strictNullChecks" also true so
 * compiler gives errors.
 *
 * how to solve this type of error consider below example
 */

function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Hola!");
  }
}

greet(null);
/** we also pass undefined also and update union operator */
greet(undefined);
