function employees (namesArray){

    let obj = {

    }

    for (const name of namesArray) {
        obj[name] = name.length;
    }
    for (const name in obj) {
         console.log(`Name: ${name} -- Personal Number: ${obj[name]}`)
    }



}
employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);;
console.log("---------");
employees([ 'Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland' ]);
console.log("---------");

