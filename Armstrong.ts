function ChkArmstrong(No1 : number) : boolean
{
    var r = 0;
    var Sum = 0;
    var temp = 0;

    temp = No1;

    while(No1 > 0)
    {
        r = No1 % 10;
        Sum = Sum + (r*r*r);
        No1 = No1 / 10
    }

    if(temp == Sum)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var iValue : number = 153;
var bRet : boolean = false;

bRet = ChkArmstrong(iValue);

if(bRet == true)
{
    console.log("It is Armstrong number");
}
else
{
    console.log("It is not a Armstrong number")
}