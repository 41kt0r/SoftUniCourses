function triangleOfNumbers (number) {
    let result = '';
    for(let rows = 1; rows<=number; rows++){
        for(let cows = 1; cows <= rows; cows++){
            result += `${rows} `;
        }
        console.log(result);
        result = '';
    }
}
triangleOfNumbers(5
    );