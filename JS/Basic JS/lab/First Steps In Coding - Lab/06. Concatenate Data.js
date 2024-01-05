function data(input){
    let Fname = input[0];
    let Sname = input[1];
    let age = Number(input[2]);
    let town = input[3];
    console.log(`You are ${Fname} ${Sname}, a ${age}-years old person from ${town}.`);
}

data(['Maria', 'Ivanova', 20, 'Sofia'])