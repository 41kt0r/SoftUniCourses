function solve(x1, y1, x2, y2) {
    let isValid = true;

    // {x1, y1} to {x2, y2}
    let FirstMinus = x2 - x1;
    let SecondMinus = y2 - y1;
    let pow1 = Math.pow(FirstMinus, 2)
    let pow2 = Math.pow(SecondMinus, 2)
    let sqrt = Math.sqrt((pow1 + pow2))

    // {x1, y1} to {0, 0} 
    let FirstMinus1 = 0 - x1;
    let SecondMinus1 = 0 - y1;
    let pow11 = Math.pow(FirstMinus1, 2)
    let pow21 = Math.pow(SecondMinus1, 2)
    let sqrt1 = Math.sqrt((pow11 + pow21))
    
    // {x2, y2} to {0, 0}
    let FirstMinus2 = x2 - 0;
    let SecondMinus2 = y2 - 0;
    let pow12 = Math.pow(FirstMinus2, 2)
    let pow22 = Math.pow(SecondMinus2, 2)
    let sqrt2 = Math.sqrt((pow12 + pow22))
    
    if(sqrt1 % 1 === 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(sqrt2 % 1 === 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if(sqrt % 1 === 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}
solve(3, 0, 0, 4);
console.log("-----");
solve(2, 1, 1, 1);
