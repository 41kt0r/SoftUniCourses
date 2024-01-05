function sequence(input){
    let index = 0;
    let num = Number(input[index]);
    index++;
    newNum = 1;
    while(num >= newNum ){
        
        console.log(newNum)
        newNum = 2*newNum+1;
    }
}
sequence(["8"]) ; 