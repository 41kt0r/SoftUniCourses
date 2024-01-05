function loadingBar (number){

    let pers = number / 10;
    let dots = 10 - pers;
    if(number < 100){
        console.log(`${number}% [${'%'.repeat(pers)}${'.'.repeat(dots)}]`);
        console.log('Still loading...');
    }else if(number === 100){
        console.log("100% Complete!")
    }

}
console.log(loadingBar(50));