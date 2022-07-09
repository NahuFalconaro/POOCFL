class Auto{

    private aceleracionActual:number;
    private potencia:number;
    private usabilidad: string;
    private marca: string;

    constructor(us: string, marc: string, poten: number, aceleracion: number){
        this.usabilidad = us;
        this.marca = marc;
        this.potencia = poten;
        this.aceleracionActual = aceleracion;
    }

    public getComprarAuto(): string{
        return 'Gracias por comprar el auto de tipo: ';
    }

    public getAceleracion(): number{
        return this.aceleracionActual;
    }

    public getPotencia():number{
        return this.potencia;
    }

    public getUsabilidad():string{
        return this.usabilidad;
    }
}