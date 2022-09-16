var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female"; // index 1
})(Gender || (Gender = {}));
console.log("----enum-----");
console.log(Gender[0]);
console.log(Gender[1]);
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["sunday"] = 7] = "sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays[6]);
console.log(Weekdays[7]);
