function solve(input) {
    let result = {};
    
    for(let i = 0; i < input.length; i += 2){
        let food = input[i];
        let cals = Number(input[i+1]);

        result [food] = cals
    }
    console.log(result)
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);