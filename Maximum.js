function Maximum(No1, No2, No3) {
    if (No1 > No2 && No1 > No3) {
        console.log("Maximum number is : " + No1);
    }
    else if (No2 > No1 && No2 > No3) {
        console.log("Maximum number is : " + No2);
    }
    else {
        console.log("Maximum number is : " + No3);
    }
}
var A = 23;
var B = 89;
var C = 6;
Maximum(A, B, C);
