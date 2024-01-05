function sumFirstAndLastElements (data){

    let firstNum = data[0];
    let lastElementIndex = data.length - 1;
    let lastNum = data[lastElementIndex];
    console.log(firstNum + lastNum);
}
sumFirstAndLastElements([20, 30, 40]);
console.log("-----------------------");
sumFirstAndLastElements([10, 17, 22, 33]);
console.log("-----------------------");
sumFirstAndLastElements([11, 58, 69]);