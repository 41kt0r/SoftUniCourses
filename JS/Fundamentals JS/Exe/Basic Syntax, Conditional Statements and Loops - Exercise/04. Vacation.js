function vacation(group, type, dayOfWeek) {
    let result = 0;
    if (type === "Students"){
        if(dayOfWeek === "Friday"){
            if (group >= 30){
                result = group * 8.45 * 0.85;
            }
            else{
                result = group * 8.45;
            }
        }
        else if(dayOfWeek === "Saturday"){
            if (group >= 30){
                result = group * 9.80 * 0.85;
            }
            else{
                result = group * 9.80;
            }
        }
        else if(dayOfWeek === "Sunday"){
            if (group >= 30){
                result = group * 10.46 * 0.85;
            }
            else{
                result = group * 10.46;
            }
        }
    }else if(type === "Business"){
        if(dayOfWeek === "Friday"){
            if (group >= 100){
                result = (group-10) * 10.90;
            }
            else{
                result = group * 10.90;
            }
        }
        else if(dayOfWeek === "Saturday"){
            if (group >= 100){
                result = (group-10) * 15.60;
            }
            else{
                result = group * 15.60;
            }
        }
        else if(dayOfWeek === "Sunday"){
            if (group >= 100){
                result = (group-10) * 16;
            }
            else{
                result = group * 16;
            }
        }
    }
    else if(type === "Regular"){
        if(dayOfWeek === "Friday"){
            if (group >= 10 && group<= 20){
                result = group * 15 * 0.95;
            }
            else{
                result = group * 15;
            }
        }
        else if(dayOfWeek === "Saturday"){
            if (group >= 10 && group<= 20){
                result = group * 20 * 0.95;
            }
            else{
                result = group * 20;
            }
        }
        else if(dayOfWeek === "Sunday"){
            if (group >= 10 && group<= 20){
                result = group * 22.5 * 0.95;
            }
            else{
                result = group * 22.5;
            }
        }
    }
    console.log(`Total price: ${result.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
    );