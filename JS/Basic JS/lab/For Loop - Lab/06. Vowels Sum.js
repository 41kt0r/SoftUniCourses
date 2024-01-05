function vowelsSum (input){
    // let a = 1; let e = 2; let i = 3; let o = 4; let u = 5;
    let sum = 0;
    let word = input[0];
    for(let i = 1; i <= word.length; i++){
        if(word[i] == 'a'){
            sum += 1;
        }
        else if (word[i] == 'e'){
            sum += 2
        }
        else if (word[i] == 'i'){
            sum += 3
        }
        else if (word[i] == 'o'){
            sum += 4
        }
        else if (word[i] == 'u'){
            sum += 5
        }
    }
    console.log(sum)
}
vowelsSum(["bamboo"]);