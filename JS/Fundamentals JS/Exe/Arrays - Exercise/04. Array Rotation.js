function arrRotation (inputArr, rotations) {
    
    for(let i = 0; i < rotations; i++){
        let firstElement = inputArr.shift();
        inputArr.push(firstElement);
    }
    console.log(inputArr.join(' '));
}
arrRotation([51, 47, 32, 61, 21], 2);