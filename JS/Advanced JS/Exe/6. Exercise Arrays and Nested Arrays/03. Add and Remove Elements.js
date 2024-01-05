function solve(data) {
    let n = 1;
    let result = [];

    for(let a = 0; a < data.length; a++){
        let command = data[a];
        if(command == "add"){
            result.push(n);
            n++; 
        }
        else if(command == "remove"){
            result.pop();
            n++;
        }
    }
    if(result.length){
        console.log(result.join("\n"));
    }
    else{
        console.log("Empty")
    }
    
}
solve(['add','add','add','add']);
console.log('--------');
solve(['add', 'add', 'remove', 'add', 'add']);
console.log('--------');
solve(['remove', 'remove', 'remove']);