function DisplayFactors(No1 : number) : void
{
    var i : number
    for(i = 1; i <= No1; i++)
    {
        if(No1 % i == 0)
        {
            console.log(i, " ")
        }
    }
}

var A : number = 20
DisplayFactors(A)