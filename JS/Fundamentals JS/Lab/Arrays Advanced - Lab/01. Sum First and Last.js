function sumFirstAndLast(arr) {

    if(arr.length === 1){
        return console.log(Number(arr.toString()));
    }
    let sum = Number(arr.shift()) + Number(arr.pop());
    return sum;
}
console.log(sumFirstAndLast(['20', '30', '40']));