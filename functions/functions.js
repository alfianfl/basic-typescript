var hello = function (name) {
    return "hello " + name;
};
function addNumber(num1, num2) {
    return num1 + num2;
}
function display(id, name, role) {
    console.log("id " + id);
    console.log("name " + name);
    if (role !== undefined) {
        console.log("role " + role);
    }
}
//callback
function calculation(func) {
    console.log("func", func(10, 20));
}
//closure
function calculation2() {
    function substract(num1, num2) {
        return num1 + num2;
    }
    return substract;
}
function display2(id, name, role) {
    if (role === void 0) { role = "normal"; }
    console.log("id " + id);
    console.log("name " + name);
    console.log("role " + role);
}
console.log(hello("alfian"));
console.log("sum is " + addNumber(10, 20));
display(123, "alfian");
display2(1234, "fadhil");
calculation(addNumber);
var sub = calculation2();
console.log(sub(15, 2));
