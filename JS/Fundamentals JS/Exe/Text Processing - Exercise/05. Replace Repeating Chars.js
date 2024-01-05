function solve(input) {

    let output = input[0];
    let inputLength = input.length;
    for (let index = 1; index < inputLength; index++) {
        let currentElement = input[index];
        let prevElement = input[index - 1];

        if(currentElement !== prevElement){
            output += currentElement;
        }
    }
 console.log(output)
}
solve('aaaaabbbbbcdddeeeedssaa');