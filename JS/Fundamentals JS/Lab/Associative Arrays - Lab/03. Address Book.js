function solve(input) {

    let result = {};

    for (let element of input) {
        let [name, adress] = element.split(":");
        result[name] = adress;
    }

    let sortedNames = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))

    for (let [key, value] of sortedNames) {
        console.log(`${key} -> ${value}`)
    }
    
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
console.log("--------");
solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)