function histogram(input){
    let n = Number(input[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for(let i = 1; i<=n; i++){
        let curentNum = Number(input[i]);

        if(curentNum < 200){
            p1Count+=1; //console.log("p1:" + p1Count);
        }
        else if(curentNum > 199 && curentNum<=399){
            p2Count+=1; //console.log("p2:" + p2Count);
        }
        else if(curentNum > 399 && curentNum<=599){
            p3Count+=1; //console.log("p3:" + p3Count);
        }
        else if(curentNum > 599 && curentNum <= 799){
            p4Count+=1; //console.log("p4:" + p4Count);
        }
        else{
            p5Count+=1; //console.log("p5:" + p5Count);
        }


    }

    let p1Proc = (p1Count / n) *100;
    let p2Proc = (p2Count / n) *100;
    let p3Proc = (p3Count / n) *100;
    let p4Proc = (p4Count / n) *100;
    let p5Proc = (p5Count / n) *100;

    console.log(`${p1Proc.toFixed(2)}%`);
    console.log(`${p2Proc.toFixed(2)}%`);
    console.log(`${p3Proc.toFixed(2)}%`);
    console.log(`${p4Proc.toFixed(2)}%`);
    console.log(`${p5Proc.toFixed(2)}%`);

}
histogram([7,
800,
801,
250,
199,
399,
599,
799]);