class Conexion{

    private static conexion:Conexion;
    private info:String;
    /*
    
    Cuando se conectan a una base de datos -> 1 sola instancia
    
    // ⛔️ Uncaught SyntaxError: Unexpected identifier
Let age = 30; // 👈️ should be let

// ⛔️ Uncaught S// ⛔️ Uncaught SyntaxError: Unexpected identifier
Let age = 30; // 👈️ should be let

// ⛔️ Uncaught SyntaxError: Unexpected identifier
Class Person { // 👈️ should be class

}

// ⛔️ Uncaught SyntaxError: Unexpected identifier
Function sum(a,b) { // 👈️ should be function
  return a + b;
}

// ⛔️ Uncaught SyntaxError: Unexpected identifier
const obj = {
  first: 'James' // 👈️ missing comma
  last: 'Doe',
};
yntaxError: Unexpected identifier
Class Person { // 👈️ should be class

}

// ⛔️ Uncaught SyntaxError: Unexpected identifier
Function sum(a,b) { // 👈️ should be function
  return a + b;
}

// ⛔️ Uncaught SyntaxError: Unexpected identifier
const obj = {
  first: 'James' // 👈️ missing comma
  last: 'Doe',
};

    
    */

    constructor(){

    }

    public static getInstancia():Conexion{
        if(!Conexion.conexion){
            return Conexion.conexion = new Conexion()
        }else{
            return Conexion.conexion
        }
    }


    public getInfo():String{
        return 'aws-eu-east-1';
    }
}


const instancia = Conexion.getInstancia();

let baseDatos:Conexion = Conexion.getInstancia();

baseDatos.getInfo();
