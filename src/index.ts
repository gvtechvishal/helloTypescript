/**  Below code there is three type of problem
 *
 * 1) If we have multiple emplyoee objects every time we repete the same code for typ.(DRY) WE SHOULD AVOID
 * 2) If other employee object might have other propeties so we said this two object have not consistant shap.
 * 3) overall this structure of code very hard to read and understand also
 */

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "vishal",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

/**
 * =======>>> that why we use type aliases
 *
 *
 * Using type aliases we make custom type
 */

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
// this is single place where we define shap of employee object and reuse multiple places

let employee: Employee = {
  id: 1,
  name: "vishal",
  retire: (date: Date) => {
    console.log(date);
  },
};
