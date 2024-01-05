function smallShop (input){
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let price = 0.0;
    if (product == "coffee"){
        if(city =="Sofia"){
            price = count * 0.5;
        }
        else if(city == "Plovdiv"){
            price = count * 0.4;
        }
        else if(city == "Varna"){
            price = count * 0.45;
        }
    }
    if (product == "water"){
        if(city =="Sofia"){
            price = count * 0.8;
        }
        else if(city == "Plovdiv"){
            price = count * 0.7;
        }
        else if(city == "Varna"){
            price = count * 0.7;
        }
    }
    if (product == "beer"){
        if(city =="Sofia"){
            price = count * 1.20;
        }
        else if(city == "Plovdiv"){
            price = count * 1.15;
        }
        else if(city == "Varna"){
            price = count * 1.10;
        }
    }
    if (product == "sweets"){
        if(city =="Sofia"){
            price = count * 1.45;
        }
        else if(city == "Plovdiv"){
            price = count * 1.30;
        }
        else if(city == "Varna"){
            price = count * 1.35;
        }
    }
    if (product == "peanuts"){
        if(city =="Sofia"){
            price = count * 1.60;
        }
        else if(city == "Plovdiv"){
            price = count * 1.50;
        }
        else if(city == "Varna"){
            price = count * 1.55;
        }
    }
    console.log(price);
}
smallShop(["coffee",
"Varna",
"2"])
;