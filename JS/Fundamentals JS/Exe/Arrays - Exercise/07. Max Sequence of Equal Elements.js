function maxSequences (array) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;

    for(let index = 0; index < array.length; index++){

        if(index !== 0){
            let currentNum  = Number(array[index]);
            let prevNum = Number(array[index - 1]);

            if(currentNum === prevNum){
                sequence++;

                if(sequence > maxSequence){
                    maxSequence = sequence;
                    maxSequenceNum = currentNum;
                }
            }else{
                sequence = 1;
            }
        }
    } 
    console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`);
}
maxSequences([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);