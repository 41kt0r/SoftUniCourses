function toyShop (input){
    let tripPrice = Number(input[0]);
    let puzelCouunt = Number(input[1]);
    let dollCount = Number(input[2]);
    let tedybearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);
    let sum = puzelCouunt*2.6 + dollCount*3 + tedybearCount*4.1 + minionsCount*8.2 + truckCount*2;
    let toysCount = puzelCouunt + dollCount + tedybearCount + minionsCount + truckCount;
    let profit = 0;
    if (toysCount >= 50){
        profit = sum*0.75;
    }
    else{
        profit = sum;
    }
    let rent = profit * 0.1;
    let totalSum=profit - rent;
    if(totalSum >= tripPrice){
        console.log(`Yes! ${(totalSum - tripPrice).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(tripPrice - totalSum).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
;