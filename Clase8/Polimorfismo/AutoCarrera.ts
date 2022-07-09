class AutoCarrera extends Auto{

    private patrocinadores: string[];



    constructor(us: string, marc: string, poten: number, aceleracion: number, patrocinadores:string[]){
        super(us, marc, poten, aceleracion);
        this.patrocinadores = patrocinadores;
    }

    public getAceleracion(): number {
        return super.getAceleracion() + 50;
    }

    public getPotencia(): number {
        return super.getPotencia() + 1000;
    }

    public getUsabilidad(): string {
        return super.getUsabilidad();
    }
    
    public getPatrocinadores() : string[]{
        return this.patrocinadores;
    }
    public getComprarAuto(): string {
        return super.getComprarAuto() + this.getUsabilidad();
    }
}