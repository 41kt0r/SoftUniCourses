function breakfastRobot() {

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let recipeEnum = {
        apple: {
            carbohydrate: 1,
            flavour: 2 ,
        }, 
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5 ,
            fat:  7,
            flavour: 3 
        },
        eggs: {
            protein: 5 ,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10 ,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        },
    }

    return function manager (command) {
        let token = command.split(" ");
        let action = token[0];
        switch (action) {
            case "restock": return restock(token[1], Number(token[2])); break;
            case "prepare": return prepare (token[1], Number(token[2])); break;
            case "report": return report (); break;
        }
    }

    function report() {
        return `protein=${store["protein"]} carbohydrate=${store["carbohydrate"]} fat=${store["fat"]} flavour=${store["flavour"]}`
    }


    function prepare(recipe, quantity) {
        let prepareRecipe ={}
        for(let [el, value] of Object.entries(recipeEnum[recipe])) {
            let needQuantity = value * quantity;
            if(store[el] < needQuantity){
                return `Error: not enough ${el} in stock`
            }
            prepareRecipe[el] = needQuantity;
        }

        for(let [element, value] of Object.entries(prepareRecipe)){
            store[element] -= value; 
        }
        return "Success"
    }

    function restock(microelement, quantity) {
        store[microelement] += quantity
        return "Success";
    }

}
let manager = breakfastRobot ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock