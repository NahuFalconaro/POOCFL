class Persona{

    private nombre:string;
    private edad:number;
    private algo:any;
    constructor(numb:number){
        this.edad = numb;
    }

    public getEdad():number{
        return this.edad;
    }
    public getNombre():string{
        return this.nombre;
    }
}