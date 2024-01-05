function lastKNumbersSequences(n, k) {

    let array = [1];

    while(n > array.length){
        let kArray = array.slice(-k);
        let sum = 0;
        for(let a = 0; a < kArray.length; a++){
           sum += kArray[a];
        }
        array.push(sum);
    }
    console.log(array.join(" "));

}
lastKNumbersSequences(6, 3);