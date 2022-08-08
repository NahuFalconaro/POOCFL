class CriterioEdad implements Criterio{

    private edad:number;


    constructor(edad:number){
        this.edad = edad;
    }


    cumple(persona: Persona):boolean{
       return this.edad === persona.getEdad();
    }

}