function suppliesForSchool (input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let deskCleaner = Number(input[2]);
    let discount = Number(input[3]);
    let price = pens*5.8 + markers*7.2 + deskCleaner*1.2;
    let finalPrice = price - price*discount/100;
    console.log(finalPrice);
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
);