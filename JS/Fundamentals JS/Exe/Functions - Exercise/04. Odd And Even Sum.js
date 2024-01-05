function oddAndEven (number) {

    let numAsString = number.toString();

    let oddSum = 0;
    let evenSum = 0;
    let numberAsStringLength = numAsString.length;

    for(let index = 0; index < numberAsStringLength; index++){
        let currentElement = Number(numAsString[index]);

        if(currentElement % 2 === 0){
            evenSum += currentElement;
        }
        else{
            oddSum += currentElement;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}
console.log (oddAndEven(1000435));