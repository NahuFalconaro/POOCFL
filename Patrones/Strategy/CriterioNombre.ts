class CriterioNombre implements Criterio{

    private nombre:string;
    
    constructor(nom:string){
        this.nombre = nom;
    }
    cumple(persona: Persona): boolean {
       return persona.getNombre() !== '';
    }




}