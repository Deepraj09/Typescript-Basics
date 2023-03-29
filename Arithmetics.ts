/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author :- Deepraj Sonawane 
//
//  RID :- 227AM_Deepraj
//
//  Assign No :- 3
//
//  Question No :- 1
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Arithmetic 
{
    Number1 : number;
    Number2 : number;

    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1;
        this.Number2 = No2;
    }
    
    Addition() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    }

    Substraction() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;
    }

    Multiplication() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 * this.Number2;
        return Ans

    }

    Division() : number
    {
        let Ans : number = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    }
}

var Obj1 = new Arithmetic(11,10)
var Obj2 = new Arithmetic(51,21);
var Ret : number = 0;

console.log("----------First object operations-----------")
Ret = Obj1.Addition();
console.log("Addition is : "+Ret);

Ret = Obj1.Multiplication();
console.log("Multiplication is : "+Ret);

Ret = Obj1.Division();
console.log("Division is : "+Ret);

Ret = Obj1.Substraction();
console.log("Substraction is : "+Ret);

console.log("-----------Second object operations----------");
Ret = Obj2.Addition();
console.log("Addition is : "+Ret);

Ret = Obj2.Multiplication();
console.log("Multiplication is : "+Ret);

Ret = Obj1.Division();
console.log("Division is : "+Ret);

Ret = Obj1.Substraction();
console.log("Substraction is : "+Ret);