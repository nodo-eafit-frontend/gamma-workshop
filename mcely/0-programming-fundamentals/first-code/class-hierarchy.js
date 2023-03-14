class Figure {
  _color = undefined;

  constructor(color) {
    this._color = color;
  }

  getArea() {
    return 'Not Available';
  }

  getInfo() {
    return 'Not Available';
  }
}

class Circle extends Figure {
  #radius = undefined;
  _color = undefined;

  constructor(color, radius) {
    this.#radius = radius;
    super(color);
  }

  getArea() {
    return (Math.PI * this.#radius) ** 2;
  }

  getInfo() {
    return `${this.#radius} ${this._color}`;
  }
}

class Square extends Figure {
  #side = undefined;
  _color = undefined;

  constructor(color, side) {
    this.#side = side;
    super(color);
  }

  getArea() {
    return this.#side ** 2;
  }
}

class Ellipse extends Circle {
  #side = undefined;
  _color = undefined;

  constructor(color, side) {
    this.#side = side;
    super(color);
  }

  getArea() {
    return this.#side ** 2;
  }
}

class Rectangle extends Square {
  #side = undefined;
  _color = undefined;

  constructor(color, side) {
    this.#side = side;
    super(color);
  }

  getArea() {
    return this.#side ** 2;
  }
}

const cicle = new Circle();
