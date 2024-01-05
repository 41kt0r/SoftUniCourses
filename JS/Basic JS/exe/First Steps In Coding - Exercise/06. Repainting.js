function repainting(input){
    let nylon = Number(input[0]);
    let pNylon = (nylon+2)*1.5;
    let paint = Number(input[1]);
    let pPint = (paint*1.1)*14.5;
    let thinner = Number(input[2]);
    let hoursWork = Number(input[3]);
    let pThinner = thinner*5.00;
    let total = pNylon + pPint + pThinner + 0.4;
    let peek = (total*0.3) * hoursWork;
    let finalPrice = total + peek;
    console.log(finalPrice);
}
repainting(["10 ",
"11 ",
"4 ",
"8 "]
);