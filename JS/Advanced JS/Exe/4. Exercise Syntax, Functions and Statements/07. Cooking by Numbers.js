function solve(num, op1, op2, op3, op4, op5) {
    let myNumber = Number(num)
    let arrOp = [];
    arrOp.push(op1);
    arrOp.push(op2);
    arrOp.push(op3);
    arrOp.push(op4);
    arrOp.push(op5);

    for (let i = 0; i < arrOp.length; i++) {
        switch (arrOp[i]) {
            case 'chop': myNumber /= 2; break;
            case 'dice': myNumber = Math.sqrt(myNumber); break;
            case 'spice' : myNumber += 1; break;
            case 'bake' : myNumber *= 3; break;
            case 'fillet' : myNumber *= 0.8; break;
        }
        console.log(myNumber);
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log("_________")
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');