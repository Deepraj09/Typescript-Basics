var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle.prototype.CalculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj1 = new Circle(10.7);
var obj2 = new Circle(20.7);
var Ret = 0;
Ret = obj1.CalculateArea();
console.log("Area of obj1 is : " + Ret);
Ret = obj2.CalculateArea();
console.log("Area of obj2 is : " + Ret);
