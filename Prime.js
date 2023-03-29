function ChkPrime(No1) {
    var i;
    var flag = 0;
    if (No1 == 0 || No1 == 1) {
        flag = 1;
    }
    for (i = 2; i <= No1 / 2; ++i) {
        if (No1 % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log("It is prime number");
    }
    else {
        console.log("It is not a prime number");
    }
}
var A = 11;
ChkPrime(A);
