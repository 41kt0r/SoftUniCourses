function fruitShop(input){
    let product = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let price = 0.0;
    if(product != "banana" && product != "apple" && product != "orange" && product != "grapefruit" && product != "kiwi" &&
     product != "pineapple" && product != "grapes"){
        console.log("error");
    }
    else if(day != "Monday" && day != "Tuesday" && day != "Wednesday" && day != "Thursday" && day != "Friday" && day != "Saturday" && day != "Sunday"){
        console.log("error");
    }
    else{

    
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if(product == "banana"){
                price = 2.5*count;
            }
            else if(product == "apple"){
                price = 1.2*count;
            }
            else if(product == "orange"){
                price = 0.85*count;
            }
            else if(product == "grapefruit"){
                price = 1.45*count;
            }
            else if(product == "kiwi"){
                price = 2.7*count;
            }
            else if(product == "pineapple"){
                price = 5.5*count;
            }
            else if(product == "grapes"){
                price = 3.85*count;
            }
            
            break;
        case "Saturday":
        case "Sunday":
            if(product == "banana"){
                price = 2.7*count;
            }
            else if(product == "apple"){
                price = 1.25*count;
            }
            else if(product == "orange"){
                price = 0.9*count;
            }
            else if(product == "grapefruit"){
                price = 1.6*count;
            }
            else if(product == "kiwi"){
                price = 3.0*count;
            }
            else if(product == "pineapple"){
                price = 5.6*count;
            }
            else if(product == "grapes"){
                price = 4.2*count;
            }

            break;
        default:
            console.log("error");
            break;
    }
    console.log((price).toFixed(2));
}
}
fruitShop(["apple",
"Tusday",
"2"])
;