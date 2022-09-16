var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flyNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.flyNo = flyNo;
    }
    Passenger.prototype.display = function () {
        console.log(passenger1.firstName + " " + passenger1.lastName + " " + passenger1.flyNo);
    };
    return Passenger;
}());
var passenger1 = new Passenger("alfian", "fadhila", 123);
passenger1.display();
for (var item in passenger1) {
    if (passenger1[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger1[item]);
    }
}
