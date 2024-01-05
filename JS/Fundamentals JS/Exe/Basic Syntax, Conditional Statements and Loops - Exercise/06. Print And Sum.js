function printAndSum(fNum, sNum) {
let sum = 0;
let outpu = '';
    for(let i = fNum; i <= sNum; i++){
        
        sum+=i;
        outpu += `${i} `;
    }
    console.log(outpu);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);