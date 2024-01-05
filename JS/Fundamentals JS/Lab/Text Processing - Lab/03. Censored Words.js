function solve(text, word) {
    //let result = "";

    // while(text.includes(word)){
    //     let startIndex = text.indexOf(word);
    //     let endIndex = startIndex + word.length;
    //     result = text.substring(0, startIndex);
    //     result += '*'.repeat(word.length);
    //     result += text.substring(endIndex);
    //     text = result
    // }
    // console.log(result)

    let result = text.split(word);
    console.log(result.join("*".repeat(word.length)));
}
solve('A small sentence with some words',
'small');