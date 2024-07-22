/**Let's see how typescript prevent error when working with functions  */

function calculateTax(income: number) {}

/** By default typscript set return type is void for this type of function */

function calculateTax1(income: number) {
  return 0;
}

/** typescript implisitly set return type of this function is number
 *
 * Best practise alsway annotated return typr of functions it's help to other people use very well */
function calculateTax2(income: number): number {
  return 0;
}

/** see the "income" parameter it's never use in function we can detect this type of variable using compiler option and it's best practice to enable option  Type checking>noUnusedParameters we implicitly enable it's because they are not part of strick option */

// function calculateTax3(income: number): number {
//   if (income < 50_000) {
//     return income * 1.2;
//   }
// }

/** This function give error on  return type see by uncomment  uper function code and see the error  */

// function calculateTax3(income: number) {
//   if (income < 50_000) {
//     return income * 1.2;
//   }
//   // if the condition is false javascript function implicity return by "undefined" it generated error
// }

/** upper function we remove the ":number" they remove error but problem is it's return "undefined" that generate error in code.
 *
 * we can prevent this type of error using compiler configuartion TypeChecking > noImplicitReturns option
 *
 * we explicitlly enable this option because this option is also not part of strick setting..
 *
 * write upper function like
 */

function calculateTax3(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

/** Also one usefully compliler setting or unused local variables TypeChecking > noUnusedLocals*/

function calculateTax4(income: number): number {
  // uncomment below line for showing warning msg of compiler
  //   let x;
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

/** case:-1 see two function for passing multiple argument to function and how to pass optional argument */

function calculateTax5(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

// we pass exact two argument like

// calculateTax5(10_000, 2022);

/** in javascript we know we can pass any number of argument but typscript is not allow..
 *
 *
 * how to make second parameter optionally.. see below code
 */

function calculateTax6(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

// we call like calculateTax5(10_000);

/** but it is not good way we can use like default value of parameter concept...
 *
 * if we pass argument than default value replace with argument value
 */

function calculateTax7(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

//first way call calculateTax7(10_000)
//second way call calculateTax7(10_000,2024) replace the default value
