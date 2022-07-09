import {Computadora} from '../ClasePOO/Computadora';
import {Procesador} from '../ClasePOO/Procesador'

class Main{


     procesador: Procesador;
    constructor(){

    }

    crearPc(): Computadora{
        return  new Computadora();
    }
     
    crearProcesador():Procesador{
        return new Procesador();
    }
}


let pc = new Computadora();

pc.funcionalidad();