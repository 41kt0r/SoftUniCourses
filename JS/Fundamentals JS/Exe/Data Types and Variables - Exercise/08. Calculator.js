function calculator(fNumber, operator, sNumber) {

    let result = 0;

    switch(operator){
        case '+': result = fNumber + sNumber; break;
        case '-': result = fNumber - sNumber; break;
        case '*': result = fNumber * sNumber; break;
        case '/': result = fNumber / sNumber; break;
    }
    console.log(result.toFixed(2));

}
calculator(5, '+', 10 );