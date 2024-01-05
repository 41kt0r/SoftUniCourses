function solve(input){

    let result = {};

    for (let element of input) {
        let [product, quantity] = element.split(" ");
        //result.quantity = Number(quantity);

        if(result.hasOwnProperty(product)){
            result[product] += Number(quantity);
        }
        else{
            result[product] = Number(quantity);
        }
        
    }

    for (let [product, quantity] of Object.entries(result)) {
        console.log(`${product} -> ${quantity}`)
    }


}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);
console.log("--------");
solve(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);