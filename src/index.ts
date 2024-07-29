/**Static member and method :- They availabe only why class not a part of instance or objects...
 *
 * consider example:- How to show the active ride in Uber like example
 *
 * */

// class Ride {
//   activeRide: number = 0;

//   start() {
//     this.activeRide++;
//   }
//   stope() {
//     this.activeRide--;
//   }
// }

// //creat two ride

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(ride1.activeRide);
// console.log(ride2.activeRide);

/** output:- 1 and 1
 *
 * but here we two active ride right why this happan because we have two separate object and each object
 * separate space in memory. so each object independently tracking active rides.
 *
 * how to solve this...
 *
 * we need to store activeRide in global space for track of active ride that we use static property..
 *
 * Static Property:- static property belong to class not an object. so we have only one instance of that propery in memory
 */

class Ride {
  private static _activeRide: number = 0;

  start() {
    Ride._activeRide++;
  }
  stope() {
    Ride._activeRide--;
  }

  static get activeRide() {
    return Ride._activeRide;
  }
}

//creat two ride

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRide);

/** This way static property work but one problem is we can change the static propety from anywhere from the program
 * so we can write like Ride.activeRides = 100 like,, but we can solve using access modifier "private" to solve this propblm.
 *
 */
