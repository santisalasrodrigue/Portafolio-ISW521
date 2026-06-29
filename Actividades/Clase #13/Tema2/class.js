
export class Animal {
    constructor(nombre, peso, color) {
        this.nombre = nombre;
        this.peso = peso;
        this.color = color;
    }
}


export class Perro extends Animal {
    constructor(nombre, raza, peso, color) {
        super(nombre, peso, color);
        this.raza = raza;
    }
}
