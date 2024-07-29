"use strict";
class Ride {
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
Ride._activeRide = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRide);
//# sourceMappingURL=index.js.map