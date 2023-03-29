// Second Largest number in a Array

function Maximum(Arr)
{
    var Max1  = Arr[0];
    var Max2 = 0;

    for(var i = 0;i < Arr.length; i++)
    {
        if(Arr[i] > Max1)
        {
            Max2 = Max1;
            Max1 = Arr[i]
        }
        else if(Arr[i] > Max2 && Arr[i] != Max1)
        {
            Max2 = Arr[i];
        }
    }

    return Max2;
}

console.log("Second largest number is : ",+Maximum([23,89,6,29,56,45,77,32]))

