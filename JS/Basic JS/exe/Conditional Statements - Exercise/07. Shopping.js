function shoping (input){
    let budget = Number(input[0]);
    let videoCard = Number(input[1]); let videoCardS = videoCard*250;
    let processor = Number(input[2]); let processorS = videoCardS*0.35 * processor;
    let Ram = Number(input[3]); let RamS = videoCardS*0.1 * Ram;
    let totalSum = videoCardS + processorS + RamS;
    if(videoCard > processor){
        totalSum *= 0.85;
    }
    if(budget>=totalSum){
        console.log(`You have ${(budget-totalSum).toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}
shoping(["900",
"2",
"1",
"3"])
;