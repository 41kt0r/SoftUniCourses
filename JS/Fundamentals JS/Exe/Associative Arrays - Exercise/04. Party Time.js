function solve(input) {

    let vipList = [];
    let regularList = [];

    let command = input.shift();

    while(command !== 'PARTY'){
        let firstCharecter = command[0];

        if(isNaN(firstCharecter)){
            regularList.push(command);
        }
        else{
            vipList.push(command);
        }
        command = input.shift();
    }

    let allGuests = vipList.concat(regularList);
    
    for (const guest of input) {
        if(allGuests.includes(guest)){
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }
    console.log(allGuests.length)
    allGuests.forEach(guest => console.log(guest)); 
}
solve(['7IK9Yo0h',
'9NoBUajQ','Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);