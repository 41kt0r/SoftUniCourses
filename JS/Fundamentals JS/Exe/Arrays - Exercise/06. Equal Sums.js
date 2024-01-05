function equalSum(input) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    //let input.length = input.length;
    for(let currentI = 0; currentI < input.length; currentI++){
        for(let i= 0; i < input.length; i++){
            if(i !== currentI){
                let num = Number(input[i]);
                if(i < currentI){
                    leftSum += num;
                }
                else if(i>currentI){
                    rightSum +=num;
                }
            }
            if(currentI === 0 ){
                leftSum = 0;
            }else if(currentI === input.length - 1){
                rightSum = 0;
            }
        }
        if(leftSum === rightSum){
            console.log(currentI);
            isEqual = true;
        }else{
            leftSum=0;
            rightSum = 0;
        }
        
    }
    if(!isEqual){
        console.log('no');
    }
    
}
equalSum([1, 2, 3, 3]);