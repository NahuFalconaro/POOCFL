class GestorEmpresas{

    private empresas: Empresa[];

    constructor(){
        this.empresas = [];
    }


    public eliminarEmpresas():void{
        this.empresas.forEach(empresa => {
            empresa.deleteEmpresa();
        });
    }
}