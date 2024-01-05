function rounding(num, index){
    if(index > 15){
        index = 15;
    }
    let result =parseFloat(num.toFixed(index));
    console.log(result);
}
rounding(3.1400, 16);