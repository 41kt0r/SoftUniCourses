function solve(speedAsString, zone) {
    const speed = Number(speedAsString);
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const difference = speed - speedLimits[zone];

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[zone]} zone`);
    } else {
        let status;
        if (difference <= 20) {
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[zone]} - ${status}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
