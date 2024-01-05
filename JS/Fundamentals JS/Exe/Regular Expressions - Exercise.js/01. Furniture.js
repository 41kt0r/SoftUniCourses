function solve(input) {

    let regEx = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;
    let totalSum = 0;

    console.log("Bought furniture:");

    for (const element of input) {
        let result = element.match(regEx);

        if (result) {
            let items = result.groups.name;
            let price = +result.groups.price;
            let count = +result.groups.quantity; //+ pred string go konvertira kym qislo ako moxe

            totalSum += price * count;
            console.log(items);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);