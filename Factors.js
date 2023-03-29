function DisplayFactors(No1) {
    var i;
    for (i = 1; i <= No1; i++) {
        if (No1 % i == 0) {
            console.log(i, " ");
        }
    }
}
var A = 20;
DisplayFactors(A);
