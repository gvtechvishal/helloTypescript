/** Union types :-  we gave variable or functional parameter more than one type */

function kgToLbs(weight: number | string): number {
  // in this time we dont no what is type of 'weight'. we saw only propery or method common in number and string
  // here we use one technique called "Narrowing".

  if (typeof weight === "number") {
    // in this block compiler know weight is number so we can see all property and method of number object.
    return weight * 2.2;
  } else {
    // here we saw all property and method of string object.

    return parseInt(weight) * 2.2;
  }
}
// so we call upper function two way
// kgToLbs(10);
//kgToLbs('10kg');
