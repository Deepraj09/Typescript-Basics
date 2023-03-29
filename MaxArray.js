function Maximum(Arr) {
    var Max = Math.max.apply(Math, Arr);
    return Max;
}
var No1 = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = Maximum(No1);
console.log("Maximum element is : ", +Ret);
