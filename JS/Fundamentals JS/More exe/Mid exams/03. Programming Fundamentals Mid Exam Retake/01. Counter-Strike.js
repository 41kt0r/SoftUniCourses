function counterStrike(input){

    let wonsCounter = 0;
    let energy  = Number(input.shift());
    let index = 0;
    let neededEnergy = input[index];
    
    
    while(neededEnergy !== "End of battle"){
        if(energy < neededEnergy){
            console.log(`Not enough energy! Game ends with ${wonsCounter} won battles and ${energy} energy`);
            break;
        }
        
        neededEnergy = Number(neededEnergy)
        energy -= neededEnergy;
        wonsCounter++;

        if(wonsCounter % 3 === 0){
            energy +=wonsCounter;
        }
        index++;
        neededEnergy = input[index];
    }
    if(neededEnergy === "End of battle"){
        console.log(`Won battles: ${wonsCounter}. Energy left: ${energy}`);
        
    }
    
    
    

}
counterStrike((["0", "7", "8", "9", "10", "11", "12", "13", "14","27" ]))
counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
);
console.log("----------")
counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"])
);