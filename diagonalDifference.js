/*
difference of diagonals for square matrices
*/

function diagonalDifference(arr){
    let rightDiagonal = 0;
    let leftdiagonal = 0;
    var copy;
    var count = 0;
    while (arr.length > 0){
        rightDiagonal += arr[0][count];
        leftdiagonal += arr[0][arr.length - 1]
        arr.shift();
        count++;
    }
    return Math.abs(rightDiagonal-leftdiagonal);

}
//console.log(diagonalDifference([[1,2,3], [4, 5, 6], [9, 8, 9]]));
