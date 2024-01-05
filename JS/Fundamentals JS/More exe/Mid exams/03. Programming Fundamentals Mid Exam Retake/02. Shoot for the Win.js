function shootForWin(input) {
    
    let arrayForShooting = input.shift().split(" ").map(Number);
    let index = 0;
    let iNumberForShooting = input.indexOf(input[index]);
    console.log(iNumberForShooting)
    
    let sooted = 0;

    while(iNumberForShooting !== "End"){
        let numberForShoot = Number(input[index]);
        for(let i = 0; i < arrayForShooting.length; i++){
            let currentElement = arrayForShooting[i];

            if(currentElement < 1){

            }
        }
    }








    // for(let indexOfShot = 0; indexOfShot < input.length; indexOfShot++){
    //     let currentIndex = Number(input[indexOfShot]);
    //     // let stratIndex;
    //     if(arrayForShooting[currentIndex] !== undefined){
    //         // stratIndex = indexOf(arrayForShooting[currentIndex]);
    //         arrayForShooting.splice(currentIndex, 1, -1);
            
    //     }

    // }
    // console.log("pile")
    
}
shootForWin((["24 50 36 70", "0", "4", "3", "1", "End"]));