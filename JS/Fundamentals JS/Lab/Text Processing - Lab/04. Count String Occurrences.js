function solve(text, word) {

    let startIndex = 0;
    let count = 0;
    while(text.indexOf(word, startIndex)> -1){
        count++;
        startIndex = text.indexOf(word, startIndex);
    }
}
solve('This is a word and it also is a sentence',
'is');