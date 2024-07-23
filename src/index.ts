/** Type assertions:-
 *
 *
 * Some time we know more about type of object then typescript..
 *
 * here real example
 */

let phone = document.getElementById("phone");

/**
  They return "HTMLElement" type of object right..
  
  --> but we not access value propert.
  
  Upper line of code consider we get input from input element and that element 
  type "HTMLInputElement" and this type of objects have value property right...
  
  we know more about type of object then typscript...
  so using type assertion we tell the typescript compiler which type of object are
  */

let phone1 = document.getElementById("phone") as HTMLInputElement;
//second type of syntax
let phone2 = <HTMLInputElement>document.getElementById("phone");

/** now we can access the value property like.. */

console.log(phone1.value);

/** NOTE:- IF getElementById('phone') return object is not HTMLInputElement object 
  
 let phone1 = document.getElementById("phone") as HTMLInputElement;

 Upper line not generate any exception  and we acess the propety like

 phone1.value 

 out program will be carsh....
 BE AWARE OF THIS........................
*/
