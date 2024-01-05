function solve(input){

    let stringToEdit = input.shift();
    
    for(let line of input){
        if(line === "Done"){
            break;
        }

        let tokens = line.split(" ");
        let operation = tokens[0];
        
        if(line.includes("Change")){
            let char = tokens[1];
            let replacement = tokens[2];

            let regex = new RegExp(char, 'g');
            stringToEdit = stringToEdit.replace(regex, replacement);
            console.log(stringToEdit)

        }
        else if(line.includes("Includes")){

            let word = tokens[1];
            if(stringToEdit.includes(word)){
                console.log("True");
            }
            else{
                console.log("False");
            }
        }
        else if(line.includes("End")){
            let endingWord = tokens[1];
            if(stringToEdit.endsWith(endingWord)){
                console.log('True');
            }
            else{
                console.log("False");
            }
        }
        else if(line.includes("Uppercase")){
            stringToEdit = stringToEdit.toUpperCase();
            console.log(stringToEdit);
        }
        else if(line.includes("FindIndex")){
            let charToFind = tokens[1];
            
            let elementIndex = stringToEdit.indexOf(charToFind);

            console.log(elementIndex);
        }
        else if(line.includes("Cut")){
            let startIndex = +tokens[1];
            let count = +tokens[2];

            let substr = stringToEdit.substring(startIndex, startIndex+count);
            console.log(substr)
        }
    }
}
solve(["//Th1s 1s my str1ng!//", "Change 1 i", "Includes string", "End my", "Uppercase", "FindIndex I", "Cut 5 5", "Done"]);