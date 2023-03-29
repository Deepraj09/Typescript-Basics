function Fibonacci(No1) {
    var i;
    var First = 0;
    var Second = 1;
    var Sum = 1;
    // for(i = 1; i <= No1; i++)
    // {
    //     if(i<=1)
    //     {
    //         Sum = i
    //     }
    //     else
    //     {
    //         Sum = First + Second
    //         First = Second
    //         Second = Sum
    //     }
    //     console.log(Sum, " ")
    // }
    Sum = First + Second;
    while (Sum <= No1) {
        console.log(Sum, " ");
        First = Second;
        Second = Sum;
        Sum = First + Second;
    }
}
var A = 21;
Fibonacci(A);
