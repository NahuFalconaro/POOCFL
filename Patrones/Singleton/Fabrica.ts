class Fabrica{

    private empleados: Empleado[];
    

    constructor(){

    }

    public todosImprimen(){
        this.empleados.forEach(e => {
            e.imprimirData(e.getNombre())
        });
    }


}