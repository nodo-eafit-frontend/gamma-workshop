const carro = {
    color:"#FFF",
    marca: "Chevrolet",
    precio: 35_123_123,
    disponible:true,
    showMaininfo: function(){
        return `the article ${this.marca} has a value of ${this.precio}`
    }
};


class car {
    // Atributos privados
    #color="None";
    #marca= "None";
    #precio= 0;
    #disponible=undefined;
    
    //Metodos
    constructor(color,marca,precio){
        this.#color=color;
        this.#marca=marca;
        this.#precio=precio;
        this.#disponible=true;
    }

    getColor(){
        return this.#color;
    }

    setColor(color){
        this.#color=color;
    }

    get precio(){
        return this.#precio;
    }

    set precio(precio){
        this.#precio=precio;
    }

    showMaininfo(){
        return `the article ${this.#marca} of ${this.#color} color has a value of ${this.#precio}`;
    }
    
}

const carro1= new car(carro.color,carro.marca,carro.precio)

console.log(carro1);

carro1.setColor("#000000")
carro1.precio=75_123_123;

console.log(carro1.showMaininfo());

