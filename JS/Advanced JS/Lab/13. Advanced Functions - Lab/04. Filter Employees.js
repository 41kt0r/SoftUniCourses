function solve(data, criteria){
    const employes = JSON.parse(data);
    const [criteriaKey, criteriaValue] = criteria.split("-");

   const res = employes
    .filter(em => em[criteriaKey] === criteriaValue)
    .map((value, index) =>
     `${index}. ${value.first_name} ${value.last_name} - ${value.email}`
     )
     .forEach(element => {
        console.log(element);
     });
}

const inputOne = `[{

    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`;
    solve(inputOne, 'gender-Female')