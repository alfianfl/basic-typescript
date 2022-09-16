var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.commonEngineFunc = function () {
        console.log("Common func");
    };
    BMW.prototype.start = function () {
        console.log("start");
    };
    BMW.prototype.stop = function () {
        console.log("Stop");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruisedControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruisedControlEnabled = cruisedControlEnabled;
        return _this;
    }
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkirAssistantEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkirAssistantEnabled = parkirAssistantEnabled;
        return _this;
    }
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("indonesia", "X1", 2022, true);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log(threeSeries.cruisedControlEnabled);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
var fiveSeries = new FiveSeries("indonesia", "X5", 2022, true);
// console.log(fiveSeries.make);
// console.log(fiveSeries.model);
// console.log(fiveSeries.year);
// console.log(fiveSeries.parkirAssistantEnabled);
