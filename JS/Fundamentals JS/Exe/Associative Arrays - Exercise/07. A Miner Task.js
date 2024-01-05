function solve(input){

    let resources = {};

    for (let index = 0; index < input.length; index+=2) {
        let element = input[index];
        let quantity = Number(input[index+1]);

        if(resources[element]){
            resources[element] += quantity;
        }
        else{
            resources[element] = quantity;
        }
    }

    for (const element in resources) {
        console.log(`${element} -> ${resources[element]}`)
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])