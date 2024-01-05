function factorialDivision(fNumm,sNum){

    function factorial(number){
        if(number === 0){
            return 1;
        }else{
            return number*factorial(number-1);
        }
    }

    let firstNumberFact = factorial(fNumm);
    let secondNumberFact = factorial(sNum);
    let result = firstNumberFact / secondNumberFact;
    console.log(result.toFixed(2));
}
console.log(factorialDivision(5, 2));