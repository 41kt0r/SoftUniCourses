function processOddNumbers (array) {

    let oddNumbersArr = array.filter((el, i) => i % 2 !==0);
    let doubledArray = oddNumbersArr.map(x => x * 2);

    console.log(doubledArray.reverse().join(" "));
}

console.log(processOddNumbers([10, 15, 20, 25] ));