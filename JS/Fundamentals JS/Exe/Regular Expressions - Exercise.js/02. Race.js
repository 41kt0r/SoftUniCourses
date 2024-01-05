function solve(input) {
    let listParticipents = input.shift().split(', ');

    let objectOfParticipents = {};

    for (const name of listParticipents) {
        objectOfParticipents[name] = 0;
    }

    let currentRow = input.shift();
    let lettersPatern = /[A-Za-z]/g;
    let digitPatern = /[0-9]/g;

    while (currentRow !== 'end of race') {

        let currentName = currentRow.match(lettersPatern).join('');
        let distance = currentRow.match(digitPatern);

        let currentDistance = 0;

        distance.map(d => currentDistance += Number(d))

        if (objectOfParticipents.hasOwnProperty(currentName)) {
            objectOfParticipents[currentName] += currentDistance;
        }

        currentRow = input.shift();
    }

    let arrayOP = Object.entries(objectOfParticipents).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${arrayOP[0][0]}`);
    console.log(`2nd place: ${arrayOP[1][0]}`);
    console.log(`3rd place: ${arrayOP[2][0]}`);

}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);