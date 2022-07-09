class AutoCiduad extends Auto{


    private pasajeros: number;

    constructor(us: string, marc: string, poten: number, aceleracion: number, pasajeros: number ){
        super(us, marc, poten, aceleracion);
    }


    public getAceleracion(): number {
        return super.getAceleracion() + 5;
    }

    public getPotencia(): number {
        return super.getPotencia() + 10;
    }

    public getUsabilidad(): string {//de ciudad
        return super.getUsabilidad();
    }

    public getPasajeros():number{
        return this.pasajeros;
    }
    
    public getComprarAuto(): string {
        return super.getComprarAuto() + this.getUsabilidad();
    }
}