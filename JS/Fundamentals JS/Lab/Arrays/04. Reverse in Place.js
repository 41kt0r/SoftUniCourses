function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++){
        //console.log(arr[i]);
        let currentElement = arr[i];
        let nextElement = arr[arr.length-1-i]
        //console.log (currentElement);
        arr[i] = nextElement;
        arr[arr.length-1-i] = currentElement;

        
        //console.log ("=>");
        //console.log(nextElement);
    }
    console.log(arr.join(" "));
}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
console.log("-------");
reverseInPlace(['33', '123', '0', 'dd']);