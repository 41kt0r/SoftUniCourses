function commonEl (fArr, sArr){
    for(let index = 0; index < fArr.length; index++){
        let currentElement = fArr[index];
        if(sArr.includes(currentElement)){
            console.log(currentElement);
        }
    }
}
commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);