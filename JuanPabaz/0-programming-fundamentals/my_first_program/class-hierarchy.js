class figure{
    _color=undefined;

    constructor(color){
        this._color=color;
    }

    getArea(){
        return "not avaliable";
    }

    getInfo(){
        return "not avaliable"
    }
}

class circle extends figure{
    #radius=undefined;

    constructor(color,radius){
        super(color);
        this.#radius=radius;

    }

    getArea(){
        return (Math.PI * this.#radius)**2;
    }

    getInfo(){
        return `${this.#radius}${this._color}`
    }
}

class square extends figure{
    #side=undefined;

    constructor(color,side){
        super(color);
        this.#side=side;

    }

    getArea(){
        return (this.#side)**2;
    }
}

// const circle = new circle();

console.log();