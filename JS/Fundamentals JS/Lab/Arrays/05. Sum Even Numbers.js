function EvenNumbers(numAsText) {
    let sum = 0;
    for(let text of numAsText){
        let num = Number(text);
        sum += num%2 === 0 ? num :0;
    }
    console.log(sum);
    
}
EvenNumbers(['1','2','3','4','5','6'] );