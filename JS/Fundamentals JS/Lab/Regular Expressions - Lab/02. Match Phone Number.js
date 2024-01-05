function solve(input) {

    let validPhoneNumbers = [];
    let regex = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let validPhoneNumber = null;

    while ((validPhoneNumber = regex.exec(input)) !== null) {
        validPhoneNumbers.push(validPhoneNumber[0]);
    }
    console.log(validPhoneNumbers.join(', '));

}
solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);