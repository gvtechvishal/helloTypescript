/** Literal (exact,specific) */

/**Some time we limit the value to assign the variables there we use "literals" */

// declare a variable "quantity" they only have two value 50 or 100.

// let quantity: number;
// Upper line code take any numbers.. so we use literals types like

// let quantity: 50=51
/**Upper line of code only store 50 not 51.
 *
 * we also use here union type ike
 */

// let quantity: 50 | 100;

/** We also improve code here */

type Quantity = 50 | 100;

let quantity: Quantity = 50;

/** Literals also strings */

type Metric = "cm" | "inch";
