
class Coche {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano //this se refuiere al objeto mismo/ se refiere al objeto no a la clase 
    }

    mostrarDatos() {
        console.log(this.marca, this.modelo, this.ano)
    }
    antiguo() {
        if (this.ano < 2000) {
            console.log(`este coche ${this.modelo} es antiguo`)
        }
        else {
            console.log(`este coche ${this.modelo} es nuevo`)
        }
    };

    lujo() { 
        const lujoso = ["Audi", "Mercedes", "BMW"]
        if (lujoso.includes(this.marca)) {
            console.log(`este coche ${this.modelo} es de lujo`)
        }
        else {
            console.log(`este coche ${this.modelo} no es de lujo`)
        }
        
    }

    
}


const coche = new Coche("Ford", "Focus", 2000)
const coche1 = new Coche("Seat", "Ibiza", 2015)
const coche2 = new Coche("Volkswagen", "Golf", 2020)




coche1.mostrarDatos()
coche2.mostrarDatos()
coche.mostrarDatos()


console.log (coche.antiguo());
console.log (coche.lujo());






