class CriterioAND implements Criterio{


    private criterio1:Criterio;
    private criterio2:Criterio;

    constructor(c1:Criterio, c2:Criterio){
        this.criterio1 = c1;
        this.criterio2 = c2;
    }


    cumple(persona: Persona): boolean {
        return this.criterio1.cumple(persona) && this.criterio2.cumple(persona); 
    }
    
}

let critNomb = new CriterioNombre('nahuel');
let critEdad = new CriterioEdad(18);
let critEdad2 = new CriterioEdad(50);

let critAnd = new CriterioAND(critEdad, critNomb);
let critAnd2 = new CriterioAND(critAnd, critEdad2);