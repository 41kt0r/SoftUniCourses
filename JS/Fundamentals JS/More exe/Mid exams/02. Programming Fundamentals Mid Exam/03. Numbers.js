function numbers(input) {

    let array = input.split(' ').map(Number);
    let sum = 0;
    let arrayLnegth = array.length;
    for (let i = 0; i < arrayLnegth; i++) {
        let currentElement = array[i];
        sum += currentElement;
    }
    let average = Number((sum / arrayLnegth).toFixed(2));
    array.sort((a, b) => b - a);
    array = array.filter(x => x > average);
    let top5 = array.slice(0, 5);
    if (top5.length > 0) {
        console.log(top5.join(" "));
    }
    else { console.log("No"); }
}
numbers('10 20 30 40 50')
console.log("---------");
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
console.log("---------");
numbers('1');
console.log("---------");
numbers('-1 -2 -3 -4 -5 -6');
