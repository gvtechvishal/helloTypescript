/** In javascript objects are dynamic. change the shape of object through out life time of program */

// let employee = {
//   id: 1,
// };

// employee.name = 'vishal' // it's valide on javascript

/** but implicitly typescript compiler give type to employee and give error we can also annotated type like   */

// let employee: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
// };

// employee.name = "vishal";

/** upper code give error because we don't initialize proply we also provide name also.
 * 
 * We can solve this problem tw 
 
*/

// let employee: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "", // we can not set value of 'undefined' or 'null'
// };

// employee.name = "vishal";

/**
 *
 * we can solve this make second propety optional... but it's not good.. make code good every employee have name we can not set name as optional because it's not write
 */

// let employee: {
//   id: number;
//   name?: string;
// } = {
//   id: 1,
// };

// employee.name = "vishal";

/** some time we make property of object readonly so we can not change value of propety accidently */

// let employee: {
//   id: number;
//   name?: string;
// } = {
//   id: 1,
//   name: "vishal",
// };

// // so we change the propety "id" change of upper object

// employee.id = 0; // this is right and change the 'id'

/** solve this issue using readonly modifire */

// let employee: {
//   readonly id: number;
//   name?: string;
// } = {
//   id: 1,
//   name: "vishal",
// };

// employee.id = 0; // this is wrong and not change the 'id'

/** How to define method of this object  */

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "vishal",
  retire: (date: Date) => {
    console.log(date);
  },
};

/** see the syntax of work with object look ugly and thet make our code verbose next section we will learn how to better this code */
