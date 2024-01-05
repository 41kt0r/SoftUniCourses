function petShop(input){
    let catsFood = Number(input[1]);
    let dogsFood = Number(input[0]);
    let totalPrice = catsFood*4 + dogsFood*2.5;;
    console.log(`${totalPrice} lv.`);
}
petShop(["13",
"9"]
)