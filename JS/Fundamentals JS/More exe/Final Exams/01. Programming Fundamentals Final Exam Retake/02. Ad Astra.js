function solve(input) {

    let text = input[0];
    let pattern = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[\d]{2}?\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]{1,5})\1/g;

    let match = pattern.exec(text);

    let calories = 0;
    let buff = '';



    while (match) {
        let product = match.groups['item'];
        let date = match.groups['date'];
        let cal = Number(match.groups['calories']);
        calories += cal;
        buff += `Item: ${product}, Best before: ${date}, Nutrition: ${cal}\n`;

        match = pattern.exec(text)
    }
    let food = Math.floor(calories / 2000);

    console.log(`You have food to last you for: ${food} days!`)
    console.log(buff)

}
solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);