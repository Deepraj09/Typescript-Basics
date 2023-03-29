function Maximum(Arr : number[]) : number
{
   const Max : number = Math.max(...Arr);

   return Max;
}

var No1 : number[] = [23,89,6,29,56,45,77,32]

var Ret = Maximum(No1);

console.log("Maximum element is : ",+Ret);

