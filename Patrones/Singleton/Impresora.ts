class Impresora{

    private static Impresora:Impresora;
    private usosRestantes:number = 100;
    constructor(){

    }

    public static getInstance():Impresora{
        if(!Impresora.Impresora){
            return Impresora.Impresora = new Impresora();
        }
        else {
            return Impresora.Impresora;
        }
    }

    public imprimir(mensaje:string):string{
        if(this.usosRestantes > 0){
            this.usosRestantes--;
            return mensaje;
        }
        else{
            return 'impresora muerta'
        }
    }

}