class Participante{

    private nombre:string;
    private id:number;
    constructor(nombre:string){
        this.nombre = nombre;
    }

    public setNombre(name:string):void{
        try{
            //Solucion esperada sin errores
            if(name.length > 4){
                this.nombre = name;
            }
            else{
                throw new Error("Nombre demasiado corto seguro yo");
                
            }
        }
        catch(error){
            console.log("ocurrio un error en al ejecucion");
            this.nombre = 'nombre vacio';
        }
    }

    public getId():number{
        return this.id;
    }
    public getNombre():string{
        return this.nombre;
    }
}