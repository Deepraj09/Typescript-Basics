function Summation(Arr : number[]) : number
{
    var Sum : number = 0;

    var Cnt = 0;

    for(Cnt = 0; Cnt < No1.length; Cnt++)
    {
        Sum = Sum + No1[Cnt];
    }
    return Sum;
}

var No1 : number[] = [23,6,7,4,5,7]

var Ret : number = 0;

Ret = Summation(No1);

console.log("Addition is : "+Ret);
