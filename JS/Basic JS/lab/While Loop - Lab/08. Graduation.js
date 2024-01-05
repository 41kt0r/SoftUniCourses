function graduation (input) {
    let index = 0;
    let name = input[index];
    index ++;
    let grade = 0;
    let counter = 0;
    let sum = 0;
    while (grade < 12 ){
        let evaluation = Number(input[index]);
        sum += evaluation;
        grade++;
        if (evaluation < 4){
            counter ++
            if(counter == 2){
             console.log(`${name} has been excluded at ${grade-1} grade`);
                break;
            }
        }
            else if(grade == 12){
                let average = sum / grade; //console.log(sum)
            console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
            break;
        }
        index++;
    }
}
graduation (["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
;