function areaOfFigures (input){
    let figure = input[0];
    if(figure === "square"){
        let a= Number(input[1]);
        console.log((a*a).toFixed(3));
    }
    else if(figure === "rectangle"){
        let b = Number(input[1]);
        let c = Number(input[2]);
        console.log((b*c).toFixed(3));
    }
    else if(figure === "circle"){
        let r = Number(input[1]);
        console.log((r*r*Math.PI).toFixed(3));
    }
    else if(figure === "triangle"){
        let e = Number(input[1]);
        let he = Number(input[2]);
        console.log((e*he/2).toFixed(3));
    }
}
areaOfFigures(["square", "5"]);