const Carro = {
  color: '#FFF',
  logo: 'Chevrotet',
  precio: 65_000_000,
  available: true,
  showMainInfo: function () {
    return `The vehicle ${this.logo} has a value of ${this.precio}`;
  },
};

class Car {
  // Atributos privados
  #color = 'None';
  #logo = 'None';
  #precio = 0;
  available = undefined;

  // Métodos públicos
  constructor(color, logo, precio) {
    this.#color = color;
    this.#logo = logo;
    this.#precio = precio;
    this.available = true;
  }

  getColor() {
    return this.#color;
  }

  setColor(color) {
    this.#color = color;
  }

  get precio() {
    return this.#precio;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  showMainInfo() {
    return `The vehicle ${this.#color} ${this.#logo} has a value of ${this.#precio}`;
  }
}

const carro1 = new Car(Carro.color, Carro.logo, Carro.precio);

console.log(carro1);

carro1.setColor('#86c6c6');
carro1.precio = 75_000_000;

console.log(carro1.showMainInfo());
