function fishTank (input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let higth = Number(input[2]);
    let usedSpace = Number(input[3]);
    let volume = (length * width * higth)/1000;
    let waterSpace = volume*(1-(usedSpace/100));
    console.log(waterSpace);
}

fishTank(["85 ",
"75 ",
"47 ",
"17 "]
);