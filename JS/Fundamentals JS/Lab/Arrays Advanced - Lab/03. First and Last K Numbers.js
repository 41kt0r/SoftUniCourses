 function firstAndLast(array){
    let k = array.shift();
    // console.log(k)
    let firstK = array.slice(0, k);
    let lastK = array.splice(array.length - k );
    console.log(firstK.join(" "));
    console.log(lastK.join(" "));

 }
 firstAndLast([3,
7, 8, 9]); 