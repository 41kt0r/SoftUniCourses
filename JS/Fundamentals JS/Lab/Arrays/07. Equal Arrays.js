function equalArrays(firstArr, secondArr) {
    let sum = 0;
    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] = Number(firstArr[i]);
    }

    for (let i = 0; i < secondArr.length; i++) {
        secondArr[i] = Number(secondArr[i]);
    }
    let areEqual = true;

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
        else {
            sum += firstArr[i];

        }

    }
    if (areEqual == true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}





equalArrays(['10', '20', '30'], ['10', '20', '30']);
console.log("------")
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);