function solve(input) {

    let word = [];
    let index = 0;

    for (let i = 1; i < input.length; i++) {
        
        if(input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90){
            word.push(input.substring(index, i));
            index = i;
        }
    }
    word.push(input.substring(index, input.length))
    console.log(word.join(', '))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')