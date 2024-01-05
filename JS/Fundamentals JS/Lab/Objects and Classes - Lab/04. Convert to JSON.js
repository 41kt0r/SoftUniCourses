function solve(name, lastName, hairColor) {
    
    let obj = {
        name, 
        lastName, 
        hairColor
    }
    let str = JSON.stringify(obj)
    console.log(str)
}
solve('George', 'Jones', 'Brown');