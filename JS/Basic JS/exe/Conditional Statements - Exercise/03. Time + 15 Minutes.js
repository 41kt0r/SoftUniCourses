function time (input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let newMinutes = minutes +15;
    if(newMinutes > 59){
        hours+=1;
        newMinutes = newMinutes % 60;
        
    }
    if (hours>=24){
        hours = 0;
    }
    if(newMinutes < 10){
        console.log(`${hours}:0${newMinutes}`);
    }else{
        console.log(`${hours}:${newMinutes}`);
    }
    
}
time(["1", "46"]);