/*
compare triplets
*/
function compareTriplets(a, b){
    var scores = [0, 0];
    while (a.length > 0){
        if (a[0] > b[0]){
            scores[0]++;
        }
        else if (a[0] < b[0]) {
            scores[1]++;
        }
        a.shift();
        b.shift();       
    }
    return scores;

}
