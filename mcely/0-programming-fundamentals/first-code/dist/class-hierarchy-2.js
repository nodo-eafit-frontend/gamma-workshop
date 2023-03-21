"use strict";
class FigureTS {
    constructor(color) {
        this.color = color;
    }
    getArea() {
    }
    getInfo() {
    }
}
class Circle extends FigureTS {
    constructor(color, radius) {
        super(color),
            this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getInfo() {
        return `${this.radius} ${this.color}`;
    }
}
class Square extends FigureTS {
    constructor(color, side) {
        super(color),
            this.side = side;
    }
    getArea() {
        return this.side ** 2;
    }
}
class Ellipse extends Circle {
    constructor(color, radius, radius2) {
        super(color, radius),
            this.radius2 = radius2;
    }
    getArea() {
        return this.radius * this.radius2;
    }
}
class Rectangle extends Square {
    constructor(color, width, height) {
        super(color, width),
            this.widht = super.side,
            this.height = height;
    }
    getArea() {
        return this.widht * this.height;
    }
}
const figure = new Square('red', 5);
console.log(figure.getArea());
