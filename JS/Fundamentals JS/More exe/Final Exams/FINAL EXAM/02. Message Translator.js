function solve(input) {

    let pattern = /!(?<comand>[A-Z][a-z]{3,})!:\[(?<string>[A-Za-z]{8,})\]/g;
    let firstNumber = input.shift();
    let messageInBrackets = "";
    let result = [];

    for (let line of input) {
        let match = line.match(pattern);
        if (match === null) {
            console.log("The message is invalid");
            
        }
        else {
            let matchAsString = match.join(",");

            let start = matchAsString.indexOf('!') + 1; // Намираме първия индекс на удивителния знак и добавяме 1, за да пропуснем удивителния знак
            let end = matchAsString.lastIndexOf('!'); // Намираме последния индекс на удивителния знак
            let message = matchAsString.substring(start, end);

            let startIndex = matchAsString.indexOf("[");
            let endIndex = matchAsString.indexOf("]");
            if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
                messageInBrackets = matchAsString.substring(startIndex + 1, endIndex);
                //console.log(messageInBrackets);
            }

            if (match) {

                for (let i = 0; i < messageInBrackets.length; i++) {
                    let char = messageInBrackets.charAt(i);
                    let asciiValue = char.charCodeAt(0);
                    result.push(asciiValue);


                }
                console.log(`${message}: ${result.join(" ")}`)
            }
        }


    }

}
solve(["2",

"!Send!:[IvanisHere]",

"*Time@:[Itis5amAlready"])