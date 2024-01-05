function angryCat(items) {
    
    let array = items[0];
    //console.log(array)

    let jhonsPosition = items[1]
    let jhonsPositionAsNumber = array[items[1]]
    //console.log(jhonsPosition)

    let priceRating = items[2];
    // console.log(priceRating)

    let leftSumArray = array.slice(0, jhonsPosition);
    // console.log(leftSumArray)
    let rightSumArray = array.slice(jhonsPosition+1);
    // console.log(rightSumArray)
    let leftSum = 0;
    let rightSum = 0;
    
    for(let i = 0; i < leftSumArray.length; i++ ){
        let currentElement = leftSumArray[i];
        // console.log(currentElement)
        if(priceRating === "cheap"){
            if(currentElement < jhonsPositionAsNumber)
            {
                leftSum+=currentElement;
            }
        }
        else if(priceRating === "expensive"){
            if(currentElement >= jhonsPositionAsNumber)
            {
                leftSum+=currentElement;
            }
        }
    }

    for(let i = 0; i < rightSumArray.length; i++ ){
        let currentElement = rightSumArray[i];
        // console.log(currentElement)
        if(priceRating === "cheap"){
            if(currentElement < jhonsPositionAsNumber)
            {
                rightSum+=currentElement;
            }
        }
        else if(priceRating === "expensive"){
            if(currentElement >= jhonsPositionAsNumber)
            {
                rightSum+=currentElement;
            }
        }
    }

    if(leftSum > rightSum  || leftSum === rightSum){
        console.log(`Left - ${leftSum}`);
    }
    else if(rightSum > leftSum){
        console.log(`Right - ${rightSum}`);
    }
    
}
angryCat(([[1, 5, 1], 1, "cheap"]));
console.log("--------");
angryCat(([[5, 10, 12, 5, 4, 20], 3, "cheap"]));
console.log("-------")
angryCat(([[-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive"]));
