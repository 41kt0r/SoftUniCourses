function solve(arrForRotating, roations) {

    for (let index = 0; index < roations; index++) {
        let elementForMove = arrForRotating.pop();
        arrForRotating.unshift(elementForMove);
    }
    console.log(arrForRotating.join(" "))

}
solve(['1', '2', '3', '4'], 2);
console.log("-----");
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
