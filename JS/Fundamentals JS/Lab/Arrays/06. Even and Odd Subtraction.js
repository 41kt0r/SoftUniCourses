function evenAndOddSubstraction (inputArr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let text of inputArr){
        let num = Number(text);
        if(num % 2 === 0){
            sumEven += num;
        }
        else{
            sumOdd += num;
        }
    }
    console.log(sumEven - sumOdd)
}
evenAndOddSubstraction([3,5,7,9]);