/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author :- Deepraj Sonawane 
//
//  RID :- 227AM_Deepraj
//
//  Assign No :- 3
//
//  Question No :- 2
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Circle
{
    Radius : number; 
    PI : number;

    constructor(Data : number)
    {
        this.Radius = Data;
        this.PI = 3.14;
    }

    CalculateArea() : number
    {
        let Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}


var obj1 = new Circle(10.7);
var obj2 = new Circle(20.7);
var Ret : number = 0;

Ret = obj1.CalculateArea();
console.log("Area of obj1 is : "+Ret);

Ret = obj2.CalculateArea();
console.log("Area of obj2 is : "+Ret);

