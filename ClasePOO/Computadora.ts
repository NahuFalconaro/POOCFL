import {Procesador} from '../ClasePOO/Procesador'

export class Computadora{

    proce: Procesador;
    proce2:Procesador;
    parametro:string;
    constructor(){
        
    }
    crearProcesador(){
        let p = new Procesador();
        this.proce = p;
    }
    funcionalidad(){
        //funcionalidad
    }

}

//Clase = molde
//Instancia = representacion de una clase

//  instancia/objeto = new Clase();
let pc = new Computadora();

pc.proce.nucleos;

