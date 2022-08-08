class RuedaTierra implements Rueda{
    
    private atributoPropioTirra:string;

    constructor(rodadoTierra:number, materialTierra:string, example:string){
        this.atributoPropioTirra = example;
    }

    
    rodar(): string {
        throw new Error("Method not implemented.");
    }

    
}