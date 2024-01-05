function solve(input) {

    let numberOfPieces = input.shift();

    let result = new Map;

    for (let i = 0; i < numberOfPieces; i++) {
        let line = input[i];
        let [piece, composer, key] = line.split('|');

        result.set(piece, []);
        result.get(piece).push(composer);
        result.get(piece).push(key);
    }

    input = input.slice(numberOfPieces);

    for (const line of input) {
        if (line === "Stop") {
            break;
        }

        let tokens = line.split('|');

        if (line.includes('Add')) {

            let newPiece = tokens[1];
            let pieceComposer = tokens[2];
            let pieceKey = tokens[3];

            if (result.has(newPiece)) {
                console.log(`${newPiece} is already in the collection!`)

            }
            else {
                result.set(newPiece, []);
                result.get(newPiece).push(pieceComposer);
                result.get(newPiece).push(pieceKey);

                console.log(`${newPiece} by ${pieceComposer} in ${pieceKey} added to the collection!`)
            }
        }
        else if (line.includes('Remove')) {

            let newPiece = tokens[1];
            if (result.has(newPiece)) {
                result.delete(newPiece);
                console.log(`Successfully removed ${newPiece}!`)
            }
            else {
                console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
            }

        }
        else if (line.includes('ChangeKey')) {

            let newPiece = tokens[1];
            //let composer = result[1][1];
            let newPieceKey = tokens[2];
            if (result.has(newPiece)) {
                result.get(newPiece)[1] = newPieceKey;
                console.log(`Changed the key of ${newPiece} to ${newPieceKey}!`)
            }
            else {
                console.log(`Invalid operation! ${newPiece} does not exist in the collection.`)
            }

        }
    }

    for (const [piece, composer] of result) {
        console.log(`${piece} -> Composer: ${result.get(piece)[0]}, Key: ${composer[1]}`)
    }
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
// 
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',