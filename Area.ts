function Area(Pi : number , Radius : number) : number 
{
    var Ans : number = 0

    Ans = Pi * (Radius*Radius)

    return Ans
}

var Ret : number = 0

Ret = Area(3.14, 5)

console.log("Area of circle is : "+Ret)