function solve(input) {

    let map = new Map();

    let wordsToCheck = input.shift().split(' ');

    wordsToCheck.forEach(word => {
        map.set(word, 0);
    });

    for (const line of input) {
        for (const word of wordsToCheck) {

            if (line === word) {
                let currentQuantity = map.get(line);
                map.set(line, currentQuantity + 1);
            }
        }
    }
    let sortedWords = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(line => {
        //console.log(`${line.join(' - ')}`);
        console.log(`${line[0]} - ${line[1]}`)
    })
}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);