/** tuple :- fix length array where each element has particular type */

/** we work with when we use pair of values */

/** simple tuple */
// let user: [number, string] = [0, "vishal"];

/** If we add the third element they give error */

// let user: [number, string] = [0, "vishal", 69];
let user: [number, string] = [0, "vishal"];

/** one thing remember about the tuple is internally it's represent the javascript array */

/** use intelligence like "user[0]." and "user[1]."  */

/** We also use of all method and property of array like "user." but here only one issue is we can use "PUSH" method to add element to fix array.. this is one of the reasone that solve by typescript  */

user.push(5);

/** As best practise restrict tuples only two values because any more than that it's make code hard to understand for example */

let user1: [number, string, boolean, number] = [1, "vishal", true, 0];

/** What is value of this user1 will be represent it's relly hard to tell
 *
 *
 * Tuples are useful when only two values like key value pairs
 */
