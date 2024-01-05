function computerStore (array){

    // if(array.length === 1){
    //     return("Invalid order!");
    //     
    // }
    let price = 0;

    for(let i = 0; i < array.length-1; i++){
        let currentElement = Number(array[i]);
        if(currentElement >= 0){
            price += currentElement;
        }else if(currentElement <= 0){
            console.log("Invalid price!")
        }

    }

    let priceWhTaxes = price;
    let taxes = price*0.2;
    price = price + taxes;
    

    let lastElement = array[array.length-1];
    if(lastElement === "special"){
            price -= price*0.1
    }
    // else{
    //     console.log("not spec")
    // }
    if(taxes === 0 && priceWhTaxes === 0 && price === 0){
        return("Invalid order!");
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWhTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${price.toFixed(2)}$`);
    
}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular']
    );