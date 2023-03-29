function Fibonacci(No1 : number) : void 
{
    var i : number
    var First : number = 0
    var Second : number = 1
    var Sum : number = 0

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
    Sum = First + Second

    while(Sum <= No1)
    {
       
        console.log(Sum, " ")
        First = Second
        Second = Sum
        Sum = First + Second
    }
}

var A : number = 21

Fibonacci(A)
