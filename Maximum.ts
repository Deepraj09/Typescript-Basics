function Maximum(No1 : number , No2 : number, No3 : number) : void 
{
    if(No1 > No2  && No1 > No3)  
    {
        console.log("Maximum number is : "+No1)
    }
    else if(No2 > No1 && No2 > No3)
    {
        console.log("Maximum number is : "+No2)
    }
    else 
    {
        console.log("Maximum number is : "+No3)
    }
}

var A : number = 23
var B : number = 89
var C : number = 6

Maximum(A,B,C)