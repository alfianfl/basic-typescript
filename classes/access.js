var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "getData", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setData", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.setData = "alfian";
console.log(student.getData);
