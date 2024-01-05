function condenseArratToNumber(input) {
    let newArr = [];
    while (input.length > 1) {
        for (let i = 0; i < input.length - 1; i++) {
            newArr[i] = input[i] + input[i + 1];
        }
        input = newArr;
        newArr = [];
    }
    console.log(input.join());
}
condenseArratToNumber([2, 10, 3]);