class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;

    }


    perimetro() {
        return this.lado1 + this.lado2 + this.lado3
    }

    tipoDeTriangulo() {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            return "Equilatero"
        }
        else if (this.lado1 === this.lado2 || this.lado1 === this.lado3 || this.lado2 === this.lado3) {
            return "Isosceles"
        }
    }
}


const triangulo1 = new Triangulo(3, 4, 5)
console.log(triangulo1.perimetro())