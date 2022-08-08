class Conexion{

    private static conexion:Conexion;
    private info:String;
    /*
    
    Cuando se conectan a una base de datos -> 1 sola instancia
    
    
    
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
