function godVsKon (input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesPrice = Number(input[2]);
    let decor = budget*0.1;
    let moneyForClothes = clothesPrice*statists;
    let discount = 0;
    if (statists > 150){
        discount = moneyForClothes * 0.1;
    }
    let expenses = moneyForClothes + decor - discount;
    if(budget >= expenses){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - expenses).toFixed(2)} leva left.`);
    }
    else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(expenses - budget).toFixed(2)} leva more.`);
    }
    console.log(decor, moneyForClothes, discount);
}
godVsKon(["15437.62",
"186",
"57.99"])
;
