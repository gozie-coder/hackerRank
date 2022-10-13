
/*
returns the the ratio of postive negazive and zero numbers in an array on newlines
 */
function plusMinus(arr){
    var counter = {positive:0,
                   negative:0,
                   zero:0};
    var i=0;
    console.log(arr.length)
    while (i < arr.length){
        negative_check = Math.sign(arr[i]);
        switch(negative_check){
            case -1:
                counter.negative += 1;
                break;
            case 1:
                counter.positive += 1;
                break;
            case 0:
                counter.zero += 1;
                break
        }
        i++;
    }
    positive_ratio = counter.positive / arr.length
    negative_ratio = counter.negative / arr.length
    zero_ratio = counter.zero / arr.length
    
    return positive_ratio.toFixed(6) + "\n"+ negative_ratio.toFixed(6)+ "\n" + zero_ratio.toFixed(6)
}

console.log(plusMinus([-1, 1, 1,6, 0, 0, 0]));

