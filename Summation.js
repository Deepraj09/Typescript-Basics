function Summation(Arr) {
    var Sum = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < No1.length; Cnt++) {
        Sum = Sum + No1[Cnt];
    }
    return Sum;
}
var No1 = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Summation(No1);
console.log("Addition is : " + Ret);
