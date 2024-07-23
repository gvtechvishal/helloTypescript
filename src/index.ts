/** we working with null object.we often have to do null checks
 *
 * see the below example of fetch customer from database.
 */

type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0
    ? null
    : {
        birthday: new Date(),
      };
}

let customer = getCustomer(0);

/** we print the customer birthday like below code.
 * they give error customer possibly null and see
 */

// console.log(customer.birthdaty);

/** we can solve like this  */

// if (customer !== null) console.log(customer.birthdaty);

/** Now let take it to next level and assume that function return "undefined".
 *below line code give error we can solve
 */

// if (customer !== null) console.log(customer.birthdaty);
if (customer !== null && customer !== undefined) console.log(customer.birthday);

/** But simpler way write upper lines of code in typescript.
 *
 * we remove if condition and use "Optional property access operator"
 */

console.log(customer?.birthday);
/** "?."  it is Optional property access operator..
 * Upper log it only executed customer birthday it's not null or undefined..
 *
 * let see in the action compile and execute the code using cmd command
 * >>tsc && node dist/index.js output of upper log is "undefined"
 *
 * but pass (1) to the function we got actual customer object with birthday property
 */

// let customer2 = getCustomer(1);
// console.log(customer2?.birthday);

/** Now we take this example next level  */

type Customer2 = {
  birthday?: Date;
};
function getCustomer2(id: number): Customer2 | null | undefined {
  return id === 0
    ? null
    : {
        birthday: new Date(),
      };
}

let customer2 = getCustomer2(1);

// console.log(customer2?.birthday.getFullYear());

/** Upper log line code give error because birthday possiblly undefine so we can not call getFullYear().
 *
 * we ue optional property access operator
 */

console.log(customer2?.birthday?.getFullYear());

/** If customer2 object not a birthday property upper line of code return undefined */

/**  WE ALSO HAVE "Optional element access operator".. it is use full when we work with array
 *
 *
 * we have array of customer we can access element like
 *
 * customers?.[0]
 */

/** WE HAVE "Optional call operator" */

// let log: any = (message: string) => console.log(message);

/** Imagine log variable store a method or null */

let log: any = null;

// log("a");
/** Upper log('a') run over program will be crash.
 *
 * There we use optional calling
 */

log?.("a");

/** Upper line of code run only log refrences the method  other whise they return 'undefined' */
