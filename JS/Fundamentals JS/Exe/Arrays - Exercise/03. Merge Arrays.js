function mergeArr (firstArr, secondArr) {
    
    let tirthArr = [];

    for(let i = 0; i<firstArr.length; i++){
        if(i % 2 === 0){
            tirthArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
        }
        else{
            tirthArr[i] = firstArr[i] + secondArr[i];
        }
    }
    console.log(tirthArr.join(" - "))
}
mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);