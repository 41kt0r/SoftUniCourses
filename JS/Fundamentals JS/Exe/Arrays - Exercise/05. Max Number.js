function maxNumber(array){
    
    let result = '';
    let arrayLength = array.length
    
    for(let index = 1; index <= arrayLength; index++){

        let isMax = true;
        let currentNum = Number(array[index - 1]);

        for(let j = index; j < array.length; j++){

            let nextNUmber = Number(array[j])
            if(nextNUmber >= currentNum){
                isMax = false;
                break;
            }

        }
        if(isMax){
            result +=`${currentNum} `;
        }
    }
    console.log(result);
}
maxNumber([1, 4, 3, 2]);