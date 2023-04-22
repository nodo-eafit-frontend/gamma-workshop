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
  _radius;

  constructor(color, radius) {
    super(color);
    this._radius = radius;
  }

  getArea() {
    return (Math.PI * this._radius  ** 2);
  }

  getInfo() {
    return `${this._radius} ${this._color}`;
  }
}

class Square extends Figure {
  #side = undefined;

  constructor(color, side) {
    super(color);
    this.#side = side;
  }

  get side() {
    return this.#side;
  }

  getArea() {
    return this.#side ** 2;
  }
}

class Ellipse extends Circle {
  _radius2;

  constructor(color, radius, radius2) {
    super(color, radius);
    this._radius2 = radius2;
  }

  getArea() {
    return Math.PI * this._radius * this._radius2;
  }
}

class Rectangle extends Square {
  #width;
  #height;

  constructor(color, width, height) {
    super(color, width);
    this.#width = super.side;
    this.#height = height;
  }

  getArea() {
    return this.#width * this.#height;
  }
}

const figure = new Rectangle('red', 10, 20);

console.log(figure.getArea());
