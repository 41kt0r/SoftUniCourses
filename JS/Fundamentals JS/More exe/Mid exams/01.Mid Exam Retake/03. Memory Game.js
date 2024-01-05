function memoryGame(input) {

    let arrayForGame = input.shift().split(" ");
    let moves = 0;
    let indexForSplice = 0;
    let indexForSplice1 = 0;
    let indexForSplice2 = 0;

    for (let i = 0; i < input.length; i++) {
        let currentEl = input[i];
        //console.log(currentEl)
        if (currentEl !== "end") {
            moves++;
            let gamerInput = currentEl.split(" ").map((x) => Number(x));
            let firstInput = gamerInput[0];
            let secondInput = gamerInput[1];

            if (firstInput === arrayForGame.length){
                firstInput--;
            }
            if(secondInput === arrayForGame.length){
                secondInput--;
            }
            if (firstInput >= 0 && firstInput < arrayForGame.length && secondInput >= 0 && secondInput < arrayForGame.length && firstInput !== secondInput) {
                if (arrayForGame[firstInput] === arrayForGame[secondInput]) {
                    console.log(`Congrats! You have found matching elements - ${arrayForGame[secondInput]}!`);
                    
                    indexForSplice1 = arrayForGame.indexOf(arrayForGame[firstInput]);
                    arrayForGame.splice(indexForSplice1, 1);
                    if((arrayForGame.indexOf(arrayForGame[secondInput-1]) >= 0)){
                        indexForSplice2 = arrayForGame.indexOf(arrayForGame[secondInput-1]);
                    arrayForGame.splice(indexForSplice2, 1);
                    }else{
                        indexForSplice2 = arrayForGame.indexOf(arrayForGame[secondInput]);
                    arrayForGame.splice(indexForSplice2, 1);
                    }
                    


                }
                else{
                    console.log("Try again!");
                }
            }
            else if (firstInput < 0 || firstInput > arrayForGame.length || secondInput < 0 || secondInput > arrayForGame.length || firstInput === secondInput) {
                console.log("Invalid input! Adding additional elements to the board");
                indexForSplice = (arrayForGame.length) / 2;
                arrayForGame.splice((indexForSplice), 0, `-${moves}a`, `-${moves}a`)
            }
        }
        else if (currentEl === "end") {
            console.log("Sorry you lose :(")
            console.log(`${arrayForGame.join(" ")}`);
        }
        if(arrayForGame.length < 1){
            console.log(`You have won in ${moves} turns!`);
            break;
        }
    }
    

}
memoryGame([
    "1 2 2 3 3 4 4 5 5 1", 
    "0 10",
    "-1 0",
    "1 0", 
    "1 0", 
    "-1 0",
    "1 0", 
    "end"
    ]
    );
