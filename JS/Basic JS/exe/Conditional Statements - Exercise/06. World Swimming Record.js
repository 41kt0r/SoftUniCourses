function swimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSeconds = Number(input[2]);
    let waterResistance = Math.floor(distance/15);
    let timeFWR = (waterResistance*12.5);
    let totalTime = distance*timeInSeconds + timeFWR;
    //console.log(waterResistance, timeFWR, totalTime);
    if(recordInSeconds > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    }
    else{
        console.log(`No, he failed! He was ${(Math.abs(recordInSeconds-totalTime).toFixed(2))} seconds slower.`)
    }
}
swimmingRecord(["10464",
"1500",
"20"])

;
