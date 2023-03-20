class Figure {  //clase figura es el padre 
  _color = undefined;  // _  =puede ser accedida y significa protegido

  constructor(color) { // constructor es un metodo publico que recibe los atributos que necesitemos y van a ser la puerta de entrada
    this._color = color;
  }

  getArea() {
    return 'Not Available';
  }

  getInfo() {
    return 'Not Available';
  }
}

class Circle extends Figure {  //extends= que extienda las propiedades del padre toma las referencia de figura y trae todas las propiedades publicas y privadas
  _radius;

  constructor(color, radius) {
    super(color);   //super = para utilizar la funcion del padre
    this._radius = radius;
  }

  getArea() {
    return (Math.PI * this._radius) ** 2;  // retorma Pi por radio al cuadrado (**=elevado al cuadrado)
  }

  getInfo() {
    return `${this._radius} ${this._color}`;
  }
}

class Square extends Figure {  //Square = cuadrado
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
  #width;      //Rectandulo es igual a width (base) por height (altura)
  #height;

  constructor(color, width, height) {
    super(color, width);   //super es el metodo que llama al constructor del padre 
    this.#width = super.side; // super.side accede a la propiedad privada
    this.#height = height;
  }

  getArea() {
    return this.#width * this.#height;  //getArea toma el width y lo multiplica por height
  }
}

const figure = new Rectangle('red', 10, 20);

console.log(figure.getArea());