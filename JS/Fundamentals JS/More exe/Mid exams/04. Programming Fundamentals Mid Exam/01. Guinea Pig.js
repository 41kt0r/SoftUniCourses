function guineaPig(input) {

    let food = input.shift();
    let hay = input.shift();
    let cover = input.shift();
    let weight = input.shift();

    for (let i = 1; i <= 30; i++){
        food -= 0.3;
        if(i % 2 === 0){
            hay -= food*0.05;
        }
        if(i % 3 === 0){
            cover -= weight*1/3
        }
    }
    if(food >= 0 && hay >= 0 && cover >= 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`)
    }
    else{
            console.log("Merry must go to the pet store!")
    }

}
guineaPig((["10", "5", "5.2", "1"]));
console.log("--------");
guineaPig((["1", "1.5", "3", "1.5"]));
console.log("--------");
guineaPig((["9","5","5.2","1"]));
    
