function sorting(input){

    let newArr = input.sort((a, b) => b-a)
    let result = [];
    let sortedLength = newArr.length;

    for(let index = 0; index < sortedLength/2; index++){
        let currentNumber = newArr.shift();
        let lastNumber = newArr.pop();
        result.push(currentNumber);
        result.push(lastNumber)
    }
    
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);