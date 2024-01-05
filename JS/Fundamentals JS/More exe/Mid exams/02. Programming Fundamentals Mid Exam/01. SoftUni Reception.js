function softUniReception (input){

    let firstEmployee = Number(input[0]);
    let secondEmployee = Number(input[1]);
    let thirdEmployee = Number(input[2]);
    let countOfStudents = Number(input[3]);
    let studentsPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let neededHours = 0;

    while(countOfStudents > 0){
        countOfStudents -= studentsPerHour;
        neededHours++;
        if(neededHours % 4 === 0){
            neededHours += 1;
        }
        
    }
    
    return `Time needed: ${neededHours}h.`;
}
console.log(softUniReception(['5','6','4','20']));
console.log(softUniReception(['1','2','3','45']));
console.log(softUniReception(['3','2','5','40']));