class Concesionaria{

    private auto: Auto;
    private autoCiudad: AutoCiduad;
    private autos: Auto[];

    /*
    class Club{
  private integrantes: Persona[];



        public setIntegrante(persona:Persona){
            this.integrantes.push(persona)
        }

        public getProfesion(){
            this.integrantes.forEach(integrante =>{
                console.log(integrante.getProfesion());
            })
        }

    }

    */
    constructor(){

    }

    public getAutoLujo(auto: Auto): Auto{
        return this.auto;
    }

    public addAutoToArray(Auto:Auto){
        this.autos.push(Auto);
    }

    public printUsabilidadStock(){
        for (let index = 0; index < this.autos.length; index++) {
            console.log(this.autos[index].getUsabilidad());
        }
    }

    public imprimirSoloDeCarrera(){
        this.autos.forEach(auto => {
            if(auto.getUsabilidad().toLowerCase() === 'carrera'){
                console.log(auto);
            }
        });
    }
    public comprarAutos(){
        this.autos.forEach(auto => {
            console.log(auto.getComprarAuto());
        });
    }
    public comprarAuto():string{
        return this.auto.getComprarAuto();
    }
    public comprarAutoCiudad():string{
        return this.autoCiudad.getComprarAuto();
    }
}