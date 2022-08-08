class Empleado{
    //atributos
    private nombre:string;
    constructor(){

    }

    public imprimirData(mensaje:string){
        let impresora = Impresora.getInstance()
        impresora.imprimir(mensaje)
    }
    public getNombre():string{
        return this.nombre;
    }
}