var Arithmetic = /** @class */ (function () {
    function Arithmetic(No1, No2) {
        this.Number1 = No1;
        this.Number2 = No2;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arithmetic;
}());
var Obj1 = new Arithmetic(11, 10);
var Obj2 = new Arithmetic(51, 21);
var Ret = 0;
Ret = Obj1.Addition();
console.log("Addition is : " + Ret);
Ret = Obj1.Multiplication();
console.log("Multiplication is : " + Ret);
Ret = Obj1.Division();
console.log("Division is : " + Ret);
Ret = Obj1.Substraction();
console.log("Substraction is : " + Ret);
console.log("-----------Second object operations----------");
Ret = Obj2.Addition();
console.log("Addition is : " + Ret);
Ret = Obj2.Multiplication();
console.log("Multiplication is : " + Ret);
Ret = Obj1.Division();
console.log("Division is : " + Ret);
Ret = Obj1.Substraction();
console.log("Substraction is : " + Ret);
