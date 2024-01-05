function clever_lily (input){
    let age = Number(input[0]);
    let priceWM = Number(input[1]);
    let toysPrice = Number (input[2]);

    let countToys = 0;
    let allMoneyB = 0;
    let allMoney = 0;
    let moneyFromBD = 10;

        let moneyFromT = 0;

    for (let i = 1; i <= age; i++){
        if(i % 2 == 0){
            allMoneyB += moneyFromBD -1;
            moneyFromBD += 10;
        }
        else{
            countToys++;
        }
        moneyFromT = countToys * toysPrice; 
    }
    allMoney = allMoneyB + moneyFromT;

    if(priceWM <= allMoney)
            {
                console.log(`Yes! ${(allMoney - priceWM).toFixed(2)}`);
            }
            else
            {
                console.log(`No! ${(Math.abs(allMoney - priceWM)).toFixed(2)}`);
            }
}
clever_lily (["10",
"170.00",
"6"])
 ;