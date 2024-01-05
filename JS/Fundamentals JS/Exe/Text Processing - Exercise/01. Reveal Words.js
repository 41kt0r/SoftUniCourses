function solve(words, text) {

    let wordsArray = words.split(", ");

    for (const word of wordsArray) {
        let wordFromStars = "*".repeat(word.length);
        text = text.replace(wordFromStars, word);
    }

    console.log(text);

}
solve('great', 'softuni is ***** place for learning new programming languages')