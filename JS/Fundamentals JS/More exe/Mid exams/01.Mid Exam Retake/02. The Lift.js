function theLift(data) {

    let numberOfPeople = Number(data.shift());
    let seatsInCabins = data.toString().split(" ").map((x) => Number(x));
    let newCabins = [];

    if(numberOfPeople === 0){
        console.log("The lift has empty spots!");
        console.log(seatsInCabins.join(" "));
        return;
    }
    if(numberOfPeople < 0){
        console.log(seatsInCabins.join(" "));
        return;
    }
    for (let index = 0; index < seatsInCabins.length; index++) {
        let currentCabin = seatsInCabins[index];

        if (numberOfPeople > 0) {
            while (currentCabin < 4 && numberOfPeople > 0) {
                currentCabin++;
                numberOfPeople--;
            }
            newCabins.push(currentCabin);
            currentCabin = 0;
        }
    }
    
    if (numberOfPeople > 0) {
        console.log(`There isn't enough space! ${numberOfPeople} people in a queue!`);
        console.log(newCabins.join(" "));
    }
    else if (numberOfPeople === 0 && newCabins[newCabins.length - 1] < 4) {
        let freeCabins = 0;

        if (seatsInCabins.length > newCabins.length) {
            freeCabins = seatsInCabins.length - newCabins.length;
            while (freeCabins > 0) {
                newCabins.push(0);
                freeCabins--;
            }

        }
        if (newCabins[newCabins.length - 1] < 4) {
            console.log("The lift has empty spots!");
            console.log(newCabins.join(" "));
        }
        else {
            console.log
        }
    }
    else {
        console.log(newCabins.join(" "));

       
    }


}
theLift([
    "-1",
    "0 0 0"
]
);