function solve(input) {

    let numberOfPlants = input.shift();
    
    let result = new Map;

    for (let i = 0; i < numberOfPlants; i++) {
        let line = input[i];
        let [plant, rarity] = line.split('<->');

        result.set(plant, []);
        result.get(plant).push(rarity);

    }

    input = input.slice(numberOfPlants);

    for (let line of input) {
        if (line === "Exhibition") {
            break;
        }

        if(line.includes("Rate" )){
            line = line.replace("Rate: ", "");
            tokens = line.split(" - ");
            let plant = tokens[0];
            let rating = +tokens[1];

            let rarity = Number(result.get(plant));
            result.set(plant, [rarity, rating]);
            

        }
        else if(line.includes("Update")){

        }
        else if(line.includes("Reset")){

        }
    }
}
solve(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);