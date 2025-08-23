class CuentaBancaria{
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    mostrarSaldo() {
        return `El saldo es: ${this.saldo} pesos`
    }

    depositarDinero(dinero) {
        if (dinero > 0) {
            this.saldo += dinero
            console.log(`Usted ha depositado ${dinero} pesos`)
            console.log(this.mostrarSaldo())
        } else {
            console.log('Dinero depositado incorrectamente')
        }
    }

    retirarDinero(dineroARetirar) {
        if (dineroARetirar < this.saldo) {
            this.saldo -= dineroARetirar
            console.log(this.mostrarSaldo())
            return dineroARetirar
        } else {
            console.log('Saldos insuficientes');
            return this.saldo
        }
    }
}

const cuentaDeAlejandro = new CuentaBancaria("Alejandro Muñoz", 50000)
console.info(cuentaDeAlejandro.mostrarSaldo())
cuentaDeAlejandro.depositarDinero(-10000)
cuentaDeAlejandro.retirarDinero(50)


const cuenta = new CuentaBancaria("Valentina", 1000)
console.log(cuenta.mostrarSalfo())
cuenta.depositarDinero(500)
cuenta.dineroRetirar(200)