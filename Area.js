function Area(Pi, Radius) {
    var Ans = 0;
    Ans = Pi * (Radius * Radius);
    return Ans;
}
var Ret = 0;
Ret = Area(3.14, 5);
console.log("Area of circle is : " + Ret);
