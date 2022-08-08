class ElementoContenedor implements ElementoCreador{

    private contenedor:ElementoCreador[];

    constructor(){
    }

    getMemoria() {
       let suma:number = 0;
        this.contenedor.forEach(e => {
             suma+= e.getMemoria();
       });
       return suma;
    }
    getArchivos(){}
}


let eleme = new ElementoContenedor();

eleme.getMemoria();