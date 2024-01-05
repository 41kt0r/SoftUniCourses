class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    set diameter(value) {
        this.radius = value / 2
    } 

    get diameter() {
        return this.radius*2;
    }
}

let circle = new Circle(2);
circle.diameter = 1.6;

console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area);
