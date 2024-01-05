function yardGreening(input){
    let area = input[0];
    let price = area * 7.61;;
    let finalPrice = price - price*0.18;;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${price*0.18} lv.`)
}
yardGreening(["550"])