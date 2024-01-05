function solve(input){

    let allStops = input.shift();
    

    for (const line of input) {
        if(line.includes("Travel")){
            console.log(`Ready for world tour! Planned stops: ${allStops}`);
            break;
        }

        let  tokens = line.split(':');

        if(line.includes("Add Stop")){

            let addPosition = Number(tokens[1]);
            let wordToAdd = tokens[2];
            
            if(allStops.length > addPosition){
                allStops = allStops.substring(0, addPosition) + wordToAdd + allStops.substring(addPosition);
            }
        }
        else if(line.includes("Remove Stop")){

            let stratIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if(allStops.length > endIndex){
                allStops = allStops.substring(0, stratIndex) + allStops.substring(endIndex+1);
            }
            
        }
        else if(line.includes("Switch")){

            let wordToSwitch = tokens[1];
            let newWord = tokens[2];

            allStops = allStops.replace(wordToSwitch, newWord);
        }
        console.log(allStops);
    }


}
solve(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);