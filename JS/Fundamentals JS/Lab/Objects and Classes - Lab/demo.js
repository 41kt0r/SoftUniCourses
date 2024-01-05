// function solve (key){
//     let myObj = {
//         "name": "Todor",
//         // age : 30
//     }
//     myObj.age = 30;
//     // myObj["hairColor"] = "black"
//     myObj.hairColor = "black"

//     // let key = "name "
//     console.table(myObj)
//     console.log(myObj["name"])
//     console.log(myObj[key])
// }solve("age")

function solve(firstName, lastName, age){
    let result= {
        firstName, 
        lastName,
        age
    };
    
    console.log(Object.entries(result))

}
console.log(solve("Peter", "Pan", "20"));
console.log("-------")
console.log(solve("George", "Smith", "18"));
