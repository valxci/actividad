class Vehiculo {
    mover() {
        console.log("me estoy moviendo");
    }
}

class Bicicleta extends Vehiculo {
    mover(){
        console.log("me estoy moviendo en bicicleta");
    }
}

class Avion extends Vehiculo {
    mover(){
        console.log("me muevo en el aire");
    }
}

class Coche extends Vehiculo {
    mover(){
        console.log("me muevo en la tierra");
        
    }
}

const obj1 = new Vehiculo();
const obj2 = new Bicicleta();
const obj3 = new Coche();
const obj4 = new Avion();

obj1.mover()
obj2.mover()
obj3.mover()
obj4.mover()
