class Rectangulo {
    constructor(ancho,alto){
        this.ancho = ancho
        this.alto = alto
    }

    area(){
       return `el area es ${this.ancho * this.alto }`
    }

    perimetro(){
        return `el perimetro es ${this.ancho*2 + this.alto*2 }`
    }

    verificar(){
        if(this.ancho > this.alto){
            return `esto si es un rectangulo`
        }
        else {
            return `esto no es un rectangulo`
        }
    }
}



const obj1 = new Rectangulo (10,60)
const obj2 = new Rectangulo (10,60)
const obj3 = new Rectangulo (10,60)
const obj4 = new Rectangulo (60,10)


console.log(obj1.area());

console.log(obj2.perimetro());

console.log(obj3.verificar());
console.log(obj4.verificar());