class Empresa{

    empresa:Empresa;
    private empleados:Empleado[];

    constructor(){
        this.empleados = [];
    }


    public deleteEmpresa(){
        this.empleados.forEach(empleado => {
            empleado.deleteMe();
        });
        //me elimino a mi mismo
    }
}