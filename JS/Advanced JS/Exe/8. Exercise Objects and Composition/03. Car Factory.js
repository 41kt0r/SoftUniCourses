function carFactory(data) {
    let model = data.model;
    let power = data.power;
    let color = data.color;
    let carriage = data.carriage;
    let wheelsize = data.wheelsize;



    let res = {}

    let engineENum = {
        "Small engine": { power: 90, volume: 1800 },

        "Normal engine": { power: 120, volume: 2400 },

        "MonsterEngine": { power: 200, volume: 3500 },
    }
    let carriageENum = {
        "hatchback": {type: 'hatchback', color},
        "coupe": {type: 'coupe', color}

    }

    res.model = model;

    if(power <= 90){
        res.engine = engineENum["Small engine"];
        
    }
    else if(power <= 120){
        res.engine = engineENum["Normal engine"];
        
    }
    else{
        res.engine = engineENum["MonsterEngine"];
    }


    res.carriage = carriageENum[carriage]

    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    }

    res.wheels = new Array(4).fill(wheelsize);
    return res;


}

let myCar1 = carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 });
console.log("------");

let myCar2 = carFactory({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 });

console.table(myCar1);
console.table(myCar2);
