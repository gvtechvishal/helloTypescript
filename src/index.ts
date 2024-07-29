/** ------------------:Static signatures:----------------- */
/** In javascript we add property to object dynamically right like,,,
 *
 * let person = {};
 * person.name = 'vishal';
 *
 * upper line of code right in javascript right....
 *
 * But in typescript this is not allow because typescript very strict about shape of objects..
 *
 * But some situations we need to add property dynamically in typescript so we use "index signatures"..
 *
 * Example:-- Consider one scenario where we assign seat to person who have ticket for consert..
 */

class SeatAssignment {
  /** we dont declare individual property like
      A1 :string;
      A2 :string;
      if we have 1000 ticket so we can not write heare like this 

   */
  //we use index signature
  [seatNumber: string]: string;
}

let seat = new SeatAssignment();

seat.A1 = "VISHAL";
seat.A2 = "KEYUR";
//WE DONT STORE NUMBER HEARE
