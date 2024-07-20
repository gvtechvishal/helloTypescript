/**In javascript array contains any type of value */

// let numbers = [1, 2, "3"];

/** If we pass this array to function that expect list of numbers then 3th element cause the issue that we use type script  */

// let numbers: number[] = [1, 2, 3];

/** If we know every element is number we can write  */

// let numbers = [1, 2, 3];

/** what if the when we assign epmty array */

// let numbers = [];

/** compiler assign any[] type and we add element like */

// number[0] = 1;
// number[1] = "string";

/**always assing type a */

let numbers: number[] = [];

/** Typscript give one benifits is that is code completion and intelligence */

// numbers.forEach(n=>n.)

/** (n=>n.) we see all the properties and method of number object because our editor knows the type of "n" and they offer code complition. they boost productivity  */
