function multiplicationTable (number) {
    let result = 0;
    for(let times = 1; times <= 10; times ++){
        result = number * times;
        console.log (`${number} X ${times} = ${result}`)
    }
    
}
multiplicationTable(5);