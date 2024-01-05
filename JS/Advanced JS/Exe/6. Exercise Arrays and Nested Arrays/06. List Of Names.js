function solve(data) {
    data.sort((a, b) => a.localeCompare(b))
        .forEach((x, i) => {
            console.log(`${i + 1}.${x}`)
        });
}
solve(["John", "Bob", "Christina", "Ema"]);
console.log('-----');
solve(["A", "a", "B", "b", "C", "c"]);
