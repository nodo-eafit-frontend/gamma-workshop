class FigureTS {
  constructor(protected color: string) {}

  getArea(): any {
    return 'Not Available';
  }

  getInfo(): any {
    return 'Not Available';
  }
}

class Circle extends FigureTS {
  constructor(color: string, protected radius: number) {
    super(color);
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getInfo(): string {
    return `${this.radius} ${this.color}`;
  }
}

class Square extends FigureTS {
  constructor(color: string, protected side: number) {
    super(color);
  }

  getArea(): number {
    return this.side ** 2;
  }
}

class Ellipse extends Circle {
  constructor(color: string, radius: number, private radius2: number) {
    super(color, radius);
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius2;
  }
}

class Rectangle extends Square {
  constructor(color: string, width: number, protected height: number) {
    super(color, width);
  }

  getArea(): number {
    return this.side * this.height;
  }
}

const figure = new Ellipse('red', 10, 20);
console.log(figure.getArea());
