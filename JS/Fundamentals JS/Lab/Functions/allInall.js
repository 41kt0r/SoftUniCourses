function formatGrade(grade){
    if(grade <3){
        return 'Fail (2)';
    }
    else if(grade >= 3 && grade < 3.50){
        return `Poor (${(grade.toFixed(2))})`;
    }
    else if(grade >= 3.50 && grade < 4.50){
        return `Good (${(grade.toFixed(2))})`;
    }
    else if(grade >= 4.50 && grade < 5.50){
        return `Very good (${(grade.toFixed(2))})`;
    }
    else if(grade >= 5.50){
        return `Excellent (${(grade.toFixed(2))})`;
    }
}
// console.log(formatGrade(4.50));

function mathPower(num, power) {
    let result = num;
    for(let i = 1; i < power;i++){
        result *= num;
    }
    return result;
}
// console.log(mathPower(3,4));

function repeatString(string, n){
    let result = "";
    for(let i=1; i<=n; i++){
        result +=string;
    }
    return result;
}
// console.log(repeatString("abc", 3));

function orders(product, count){
    let result = 0;
    
    switch(product){
        case "coffee": result = 1.5*count; break;
        case "water":  result = 1.0*count; break;
        case "coke":  result = 1.4*count; break;
        case "snacks":  result = 2.0*count; break;
        default: break;
    }
    return result.toFixed(2);
}
// console.log(orders("water", 5));
function simpleCalculator(number1, number2, operator){
    let obj =   {
        "multiply" : (a, b) => a * b,
        "divide" : (a, b) => a / b,
        "add" : (a, b) => a + b,
        "subtract" : (a, b) => a - b,
    }
    return obj[operator](number1, number2);
}
// console.log(simpleCalculator(2, 2, 'multiply'));

function signCheck(num1, num2, num3) {

    function count(a, b, c){

        let countNegs = 0;
        
        if(a < 0){
            countNegs++;
        }
        if(b < 0){
            countNegs++;
        }
        if(c < 0){
            countNegs ++;
        }
        return countNegs;
    }
    //console.log(count(-2, 3, -5));

    if(count(5, - 12, -15) % 2 === 0 ){
        return "Positive";
    }
    else{return"Negative";}


}
//console.log (signCheck(5, - 12, -15))
function demo(input){
    let arr = input.splice(0, 2);
    console.log(input)
}
demo([0, 1, 2, 3, 4, 5, 6, 7, 8])

    
    