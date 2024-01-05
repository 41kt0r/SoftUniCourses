function huntingGames(input){
    
    let days = Number(input.shift());
    let numberOfPeople = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerDayForPerson = Number(input.shift());
    let foodPerDayForPerson = Number(input.shift());
    let tolalWater = Number((waterPerDayForPerson * numberOfPeople * days).toFixed(2));
    let totalFood = Number((foodPerDayForPerson * numberOfPeople * days).toFixed(2));


    let energyTakes = input.map(x => Number(x));
    //console.log(energyTakes)

    for(let i = 1; i <= days; i++){
        let currentDayliEnergy = energyTakes[i-1];
        //console.log(currentDayliEnergy)
        groupEnergy -= currentDayliEnergy;

        if(i !== 0 && i % 2 === 0){
            groupEnergy += groupEnergy*0.05;
            tolalWater -= tolalWater*0.3;
        }
        if(i !== 0 && i % 3 === 0){
            totalFood -= totalFood/numberOfPeople
            groupEnergy += groupEnergy*0.1
        }
        // if(groupEnergy <= 0){
        //     console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${tolalWater.toFixed(2)} water.`)
        // }
    }
    if(groupEnergy > 0){
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }else{
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${tolalWater.toFixed(2)} water.`)
    }


}
huntingGames((["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57","520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"]))
console.log("------");
huntingGames((["12",

"6",

"4430",

"9.8",

"5.5",

"620.3",

"840.2",

"960.1",

"220",

"340",

"674",

"365","345.5", "212", "412.12", "258", "496"]))