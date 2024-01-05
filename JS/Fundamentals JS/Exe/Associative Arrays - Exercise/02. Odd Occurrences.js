function solve(input) {

    let inputArray = input.split(' ').map(e => e.toLowerCase());

    let wordsObject = {};
    for (const word of inputArray) {
        if(!wordsObject.hasOwnProperty(word)){
            wordsObject[word] = 0;
        }
        wordsObject[word]++;
    }

    let arrOfElements = Object.entries(wordsObject).filter(double => double[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);

    let result = '';
    for (const array of arrOfElements) {
        result += `${array[0]} `;
    }
    console.log(result)
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log("-------");
solve('Cake IS SWEET is Soft CAKE sweet Food')