function solve(matrixInput) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = matrixInput[0].length - 1;
    matrixInput.forEach(nestedArr => {
        firstDiagonal += nestedArr[firstIndex++];
        secondDiagonal += nestedArr[secondIndex--];
    });
    console.log(firstDiagonal + " " + secondDiagonal);
}
solve([[20, 40],[10, 60]]);