class Animal {
    constructor(nombreAnimal) {
        this.nombreAnimal = nombreAnimal;
    }

    hacersonido(){
    console.log(`este es mi sonido de animal ${this.nombreAnimal}`)
}
}



class Perro extends Animal {
    constructor(nombreAnimal) {
        super(nombreAnimal);
    }
}


class Gato extends Animal {
    constructor(nombreAnimal) {
        super(nombreAnimal);
    }
}

const perro1 = new Perro("guaf")
const gato = new Gato("miau")

console.log (perro1.hacersonido())  
console.log (gato.hacersonido())