class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion

    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`)
    }

    mayorDeEdad () {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`)
        }

        else {
            console.log(`${this.nombre} es menor de edad`)
        }
    }
}

const persona = new Persona("Valentina", 19, "vendedora")
const persona2 = new Persona("juan", 18 , "estudiante")


console.log(persona.saludar())
console.log(persona.mayorDeEdad())