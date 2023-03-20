const Carro = {   // clase o funcion porque guarda informacion del carro
    color: '#FFF',
    logo: 'Chevrotet',
    precio: 65_000_000,
    available: true,
    showMainInfo: function () {  // para acceder a los valores de la clase
      return `The vehicle ${this.logo} has a value of ${this.precio}`; //this (este precio...esta marca) nos sirve para acceder a la informacion desde la funcion, return =lo que retorna la funcion
    },
  };
  
  class Car {
    // Atributos privados= les ponemos un numeral adelante para indicar que es una propiedad privada
    #color = 'None';   //como son bloques de codigo en vez de los : y la , los cambiamos por el = y el ;
    #logo = 'None';
    #precio = 0;
    available = undefined;
  
    // Métodos públicos
    constructor(color, logo, precio) {  // constructor es un metodo publico que recibe los atributos que necesitemos y van a ser la puerta de entrada
      this.#color = color;  // el color equivale al color de entrada
      this.#logo = logo;
      this.#precio = precio;
      this.available = true;
    }
  
    getColor() {  // get es un metodo que os permite acceder a la funcion  que es la infromacion que se encuentra en la clase.. los metodos se llaman con get= obtener
      return this.#color;  //nos retorna el color
    }
  
    setColor(color) {  //El objeto Setle permite almacenar valores únicos de cualquier tipo, ya sea valores primitivos o referencias a objetos.
      this.#color = color;
    }
  
    get precio() {
      return this.#precio;
    }
  
    set precio(precio) {  
      this.#precio = precio;
    }
  
    showMainInfo() {  //showMainInfo toma todas las propiedades y las muestra
      return `The vehicle ${this.#color} ${this.#logo} has a value of ${this.#precio}`;
    }
  }
  
  const carro1 = new Car(Carro.color, Carro.logo, Carro.precio); // const carro1 va a ser nuestra variable de entrada
  
  console.log(carro1);   //console.log(carro1.getcolor());= Este metodo nos permite acceder a la funcion
  
  carro1.setColor('#000');  //setearlos
  carro1.precio = 75_000_000;
  
  console.log(carro1.showMainInfo()); 