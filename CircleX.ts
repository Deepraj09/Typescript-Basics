/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author :- Deepraj Sonawane 
//
//  RID :- 227AM_Deepraj
//
//  Assign No :- 3
//
//  Question No :- 3
//
//  Problem Statement :- Create one typescript application which contains one class named as CircleX which still inherits 
//                       above Circle class in CircleX class.In CircleX class we have to write one method (Behaviours) as     
//                       Area which will return area of Circle After designing the class create two obj of that class by                        
//                       poviding some hardcoded value.
//
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

class CircleX extends Circle
{
    constructor(Data : number)
    {
        super(Data);
    }
    
    CalculateCircumfarance() : number
    {
        let Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }

} 

var obj = new CircleX(10.7);
var obj1 = new CircleX(20.7);
var Ret : number = 0;

Ret = obj.CalculateArea();
console.log("Area is : "+Ret);

Ret = obj.CalculateCircumfarance();
console.log("Circumfarance is : "+Ret);

Ret = obj1.CalculateArea();
console.log("Area is : "+Ret);

Ret = obj1.CalculateCircumfarance();
console.log("Circumfarance is : "+Ret);

