function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
    const objects = JSON.parse(input);
    let output = [];

    
    objects.forEach(obj => {
        const cubeArea = area.apply(obj);
        const cubeVol = vol.apply(obj);

        output.push({
            area: cubeArea,
            volume: cubeVol
        })
    });
    return output;
}

const input1 = `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`;
console.log(solve(area, vol, input1));