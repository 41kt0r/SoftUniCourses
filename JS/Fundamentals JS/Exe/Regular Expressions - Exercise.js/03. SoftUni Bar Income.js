function solve(input){

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<integer>[0-9]+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;
    let i = 0;
    
    let result = 0;
    while(input[i] !== 'end of shift'){
        let line = input[i];
        let match = [...line.matchAll(pattern)];

        for (const element of match) {
            let prices = Number(element.groups.integer) * Number(element.groups.price);
            
            result += prices;
            console.log(`${element.groups.customer}: ${element.groups.product} - ${prices.toFixed(2)}`);
        }
        i++;
    }
    console.log(`Total income: ${result.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);