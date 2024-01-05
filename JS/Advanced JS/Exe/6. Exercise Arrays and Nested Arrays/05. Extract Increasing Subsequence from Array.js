function solve(data) {
    let result = [];
    let biggestOne = data.shift();
    result.push(biggestOne);

    data.forEach((x) => {
        if (x >= biggestOne) {
            result.push(x);
            biggestOne = x;
        }
    });
    return result;

}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log("------")
solve([1, 2, 3, 4]);
console.log("------")
solve([20, 3, 2, 15, 6, 1]);
