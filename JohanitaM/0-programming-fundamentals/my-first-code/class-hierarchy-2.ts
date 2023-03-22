class FigureTS {
  protected color = String;

  constructor(color) {
    this.color = color;
  }

  getArea() {
    return 'number';
  }

  getInfo() {
    return 'number';
  }
}

class Circle extends FigureTS {
  protected radius = Number;

  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea(): number {
    return (Math.PI * this.radius) ** 2;
  }

  getInfo() {
    return `${this.radius} ${this.color}`;
  }
}

class Square extends FigureTS {
  private side : Number;

  constructor(color, side) {
    super(color);
    this.side = side;
  }

  get side() {
    return this.side;
  }

  getArea() {
    return this.side ** 2;
  }
}

class Ellipse extends Circle {
  protected radius2 = Number;

  constructor(color, radius, radius2) {
    super(color, radius);
    this._radius2 = radius2;
  }

  getArea() {
    return Math.PI * this._radius * this._radius2;
  }
}

class Rectangle extends Square {
  private width: number = 100;
  private height: number = 150;

  constructor(color, width, height) {
    super(color, width);
    this.width = super.side;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const figure = new Rectangle('red');

console.log(figure.getArea());