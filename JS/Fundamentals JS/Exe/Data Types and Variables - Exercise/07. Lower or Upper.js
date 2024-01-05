function upperOrLower(input){

    let caseresult = '';
    if(input === input.toUpperCase()){
         caseresult = 'upper-case';   
    }
    else{
        caseresult ='lower-case'
    }

    console.log(caseresult);
}
upperOrLower('a');