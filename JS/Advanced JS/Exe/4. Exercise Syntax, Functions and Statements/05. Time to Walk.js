function solve(steps, footprint, speed) {
    let distanceInM = steps * footprint;
    let meterInSeconds = speed / 3.6;
    let time = distanceInM / meterInSeconds;
    let result = Math.floor(distanceInM / 500);

    let timeInM = Math.floor(time / 60);
    let timeInS = time - timeInM * 60;
    let hours = Math.floor(timeInM / 60);

    let hoursPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minutesToPrint = (timeInM % 60) + result;
    minutesToPrint = minutesToPrint < 10 ? `0${minutesToPrint}` : `${minutesToPrint}`
    let secToPrint = timeInS < 10 ? `0${timeInS}` : `${timeInS}`

    console.log(`${hoursPrint}:${minutesToPrint}:${Math.round(secToPrint)}`)
}
solve(4000, 0.60, 5);
solve(10000, 0.60, 5);
solve(2564, 0.70, 5.5);
