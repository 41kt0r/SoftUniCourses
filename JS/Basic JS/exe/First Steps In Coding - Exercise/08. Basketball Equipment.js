function basketballEquipment(input){
    let yearPayment = Number(input[0]);
    let shoes = yearPayment*0.6;
    let clothes = shoes *0.8;
    let ball = clothes *0.25;
    let accessories = ball*0.2;
    let totalPrice = yearPayment + shoes + clothes + accessories + ball;
    console.log(totalPrice);
}

basketballEquipment(["365 "]);