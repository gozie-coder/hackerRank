/*
to get the sum of numbers
*/
function simpleArraySum(ar) {
    var newSum=0;
    //count = 0
    while (ar.length > 0){
        newSum += ar[0];
        ar.shift();
    }      
    return newSum;
}
