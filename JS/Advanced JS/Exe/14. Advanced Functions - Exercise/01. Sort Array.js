function solve(array, order) {
    
    if(order === 'asc'){
        array.sort((a,b) => a-b)
    }
    else if (order === 'desc'){
        array.sort((a,b) => b-a)
    }
    return array;
}
console.log(solve([14, 7, 17, 6, 8], 'desc'))