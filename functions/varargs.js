var factorial = function (x, y) {
    var numbs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbs[_i - 2] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < numbs.length; i++) {
        result *= numbs[i];
    }
    return result;
};
console.log(factorial(1, 2, 7, 5));
