function solve(data) {
    let wordCountMap = new Map();
  
    for (let element of data) {
      let words = element.split(' ');
  
      for (let word of words) {
        if (wordCountMap.has(word)) {
          wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
          wordCountMap.set(word, 1);
        }
      }
    }

    let sortedWords = [...wordCountMap.entries()].sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
      console.log(`${word} -> ${count} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]
);