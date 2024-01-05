function NxNMatrix(number){

    function rowGenerator (){
        let row = '';
        for(let jindex = 1; jindex <= number; jindex++){
            row += `${number} `;
        }
        return row;
    }
    for(let index = 1; index <= number; index++){
        
        console.log(rowGenerator());
    }

}
console.log(NxNMatrix(7));