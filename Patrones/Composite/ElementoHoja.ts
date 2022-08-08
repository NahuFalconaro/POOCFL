class ElementoHoja implements ElementoCreador{

    private memoria:number;
    private nombnre:string;
    
    constructor(memoria:number){
        this.memoria = memoria;
    }


    getMemoria() {
        return this.memoria;
    }




}


let elem = new ElementoHoja(100);

elem.getMemoria();