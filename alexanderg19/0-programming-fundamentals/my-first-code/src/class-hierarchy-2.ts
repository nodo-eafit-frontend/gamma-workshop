class FigureTS {
    protected color: string;
  
    constructor(color: string) {
      this.color = color;
    }
  
     getArea() {
       
    }
  
    getInfo() {
      
    }
  }
  
  class Circle extends FigureTS {
    protected radius: number;
  
    constructor(color: string, radius: number) {
      super(color),
      this.radius = radius
    }
  
    getArea(): number {
      return Math.PI * this.radius ** 2; 
    }
  
    getInfo() {
      return `${this.radius} ${this.color}` 
    }
  }
  
  class Square extends FigureTS {
    protected side: number;
  
    constructor(color: string, side: number) {
      super(color),
      this.side = side
    }
  
    getArea(): number {
      return this.side ** 2; 
    }
  }
  
  
  class Ellipse extends Circle {
    private radius2: number;
  
    constructor(color: string, radius: number, radius2: number) {
      super(color, radius),
      this.radius2 = radius2
    }
  
    getArea(): number {
      return this.radius * this.radius2; 
    }
  }
  
  class Rectangle extends Square {
    protected widht: number;
    protected height: number;
  
    constructor(color: string, width: number, height: number) {
      super(color, width),
      this.widht = super.side,
      this.height = height
    }
  
    getArea(): number {
      return this.widht * this.height; 
    }
  }
  
  const figure = new Square('red', 5);
  console.log(figure.getArea());
  