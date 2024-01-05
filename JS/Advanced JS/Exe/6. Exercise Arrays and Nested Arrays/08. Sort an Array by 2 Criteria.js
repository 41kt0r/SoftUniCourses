function solve(data) {
    return data.sort((a, b) => {
        if(a.length !== b.length){
            return a.length - b.length
        }
        return a.localeCompare(b)
    }).join("\n");
}
console.log(solve(['alpha', 'beta', 'gamma']));
console.log('------');
console.log(solve(['Isacc', 'Theodor','Jack', 'Harrison', 'George']));
console.log('------');
console.log(solve(['test', 'Deny','omen', 'Default']));
