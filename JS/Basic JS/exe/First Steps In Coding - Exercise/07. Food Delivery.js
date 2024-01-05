function foodDelivery (input){
    let chikenM = Number(input[0]);
    let fishM = Number(input[1]);
    let veganM = Number(input[2]);
    let desert = (chikenM*10.35 + fishM*12.40 + veganM*8.15)*0.2;
    let price = chikenM*10.35 + fishM*12.40 + veganM*8.15;
    let totalPrice = price + desert + 2.5;
    console.log(totalPrice);
}

foodDelivery(["2 ",
"4 ",
"3 "]
);