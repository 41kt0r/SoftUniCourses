function addAndSubsract (inputArray) {

    let sumInputArr = 0;
    let sumNewArr = 0;
    let arrayLength = inputArray.length;
    for(let index = 0; index < arrayLength; index++){
        let currentNum = Number (inputArray[index]);
        sumInputArr +=currentNum;

        if (currentNum % 2 === 0){
            currentNum += index;
        }else{
            currentNum -= index;
        }

        inputArray[index] = currentNum;
        sumNewArr += currentNum;

    }
    
    console.log(inputArray);
    console.log(sumInputArr);
    console.log(sumNewArr);

}
addAndSubsract([5, 15, 23, 56, 35]);