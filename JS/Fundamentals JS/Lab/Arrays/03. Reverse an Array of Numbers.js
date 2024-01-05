function reverseAnArrayNumbers (n, inputArray) {
        
        let arr = [];
        for (let i = 0; i < n; i++){
            arr.push(inputArray[i]);
        }
        let output = '';
        for(let i = arr.length - 1; i>=0; i--){
            output += arr[i] + " ";
        }
        console.log(output);
}
reverseAnArrayNumbers(3, [10, 20, 30, 40, 50]);
console.log("------");
reverseAnArrayNumbers(4, [-1, 20, 99, 5]);
console.log("------");
reverseAnArrayNumbers(2, [66, 43, 75, 89, 47]);