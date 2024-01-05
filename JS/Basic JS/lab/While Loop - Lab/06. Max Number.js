function maxNum (input){
    let index = 0;
    let enter = input[index];
    index ++;

    let maxNum = Number.MIN_SAFE_INTEGER;

    while(enter !== "Stop"){
        let currnetNum = Number(enter);

        if(currnetNum > maxNum){
            maxNum = currnetNum;
        }
        
        enter = input[index];
        index++;
    }
    console.log(maxNum);
}
maxNum (["100",
"99",
"80",
"70",
"Stop"])
;