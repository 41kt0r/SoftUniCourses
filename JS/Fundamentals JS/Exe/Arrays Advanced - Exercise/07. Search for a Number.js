function searchForANumber(numbers, commandsArray) {

    let numbersToTake = commandsArray[0];
    let numbersToDelete = commandsArray[1];
    let searchedNumbers = commandsArray[2];

    let newArr = numbers.slice(0, numbersToTake);
    newArr.splice(0, numbersToDelete);

    let numberCounter = newArr.filter(e => e === searchedNumbers).length;

    console.log(`Number ${searchedNumbers} occurs ${numberCounter} times.`)

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);