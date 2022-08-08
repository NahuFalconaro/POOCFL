abstract class InvoiceFactory{

    private id:number;
    private nombre:string;
    private importe:number;

    public getNombre(){
        return this.nombre;
    }
    public getImporte():number{
        return this.importe;
    }
    
    public abstract getIva():number;
}
