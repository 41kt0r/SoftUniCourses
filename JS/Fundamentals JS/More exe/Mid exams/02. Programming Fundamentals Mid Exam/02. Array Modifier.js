function arrayModifier (input) {

    let array = input.shift().split(' ').map(Number);
    
    let inputLength = input.length;
    
    
    for(let index = 0; index < inputLength; index++){
        let currentComand = input[index].split(' ');
        let command = currentComand.shift();
        let indexOne = Number(currentComand.shift());
        let indexTwo = Number(currentComand.shift());
        
        switch(command){
            case 'swap':
                let temp = array[indexOne];
                array[indexOne] = array[indexTwo];
                array[indexTwo] = temp;
                break;
            case 'multiply': 
                let result = array[indexOne] * array[indexTwo];
                array[indexOne] = result;
                break;
            case 'decrease':
                array = array.map(n => n-1);
                break;
            case 'end':
                break;
        }

    }
    console.log(array.join(',/ '));
}
console.log(arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease','end']));
console.log(arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']));