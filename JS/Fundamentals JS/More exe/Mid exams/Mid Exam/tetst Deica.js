function huntingGames(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
    let day = 1;
    let totalWater = days * players * waterPerDay;
    let totalFood = days * players * foodPerDay;
    
    let isFinish = true;
    for (let i = 0; i < days; i++) {
        
        
        let currentDay = Number(input[i]);
        groupEnergy -= currentDay;
 
        if (day % 2 === 0) {
            totalWater = totalWater * (1 - 30 / 100);
            groupEnergy += groupEnergy * 0.05;
        }
        if (day % 3 === 0) {
            totalFood -= totalFood / players;
            groupEnergy += groupEnergy * 0.1;
        }
        
        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            isFinish = false;
            return;
        }
        day++;
    }
    if (isFinish) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }
}
huntingGames(["1", "5", "50", "10", "6", "50"])
// huntingGames((["15", "7", "5035.5", "11.3", "7.2", "942.3", "500.57","520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330", "5", "330", "330", "330",]))
// console.log("------");
// huntingGames((["12",

// "6",

// "4430",

// "9.8",

// "5.5",

// "620.3",

// "840.2",

// "960.1",

// "220",

// "340",

// "674",

// "365","345.5", "212", "412.12", "258", "496"]))