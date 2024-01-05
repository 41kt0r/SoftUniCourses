function passValidator (password){
     
    let isValidPass = true;
    let isInvalidLength = password.length < 6 || password.length > 10;
    let digitsCounter = 0;

    if(isInvalidLength){
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters");
    }
    let isOnlyLettersAndDigits = true;

    for(let index = 0; index < password.length; index++){
        let currentCode = password.charCodeAt(index);
        let isNotNumber = currentCode < 48 || currentCode > 57;
        let isNumber = currentCode >= 48 && currentCode <= 57;
        let isSmallLetter = currentCode < 97 || currentCode > 122;
        let isBigLetter = currentCode < 65 || currentCode > 90;

        if(isNumber){
            digitsCounter++;
        }

        if(isNotNumber && isSmallLetter && isBigLetter){
            isValidPass = false;
            isOnlyLettersAndDigits = false;
        }
    }
    if(!isOnlyLettersAndDigits){
        console.log("Password must consist only of letters and digits"); 
    }
    if(!(digitsCounter >= 2)){
        isValidPass = false;
        console.log("Password must have at least 2 digits");
    }
    if(isValidPass){
        console.log("Password is valid");
    }
}
console.log(passValidator('logIn'));