function sum(input){
    let index = 0;
    let num = Number(input[index]);
    index ++;
    let sum = 0;
    
    while(num > sum){
        let number =Number(input[index]);
        index++;
        sum += number;
    }
    console.log(sum);
}
sum (["100",
"10",
"20",
"30",
"40"])

;